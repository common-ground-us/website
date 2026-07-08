/**
 * Build wrapper: runs `next build`, then generates the service worker.
 *
 * Why this exists: on Windows, Next 16's Turbopack build occasionally throws an
 * uncaught `EPERM` from a `process.on('exit')` handler that calls
 * `child.kill('SIGINT')` on its static-generation workers (see
 * node_modules/next/dist/lib/worker.js). It fires AFTER the static export is
 * written, so the output is fine, but it makes `next build` exit non-zero —
 * which would otherwise skip service-worker generation.
 *
 * This wrapper swallows ONLY that specific teardown crash, and only when the
 * export actually completed. Every other failure (TypeScript errors, an
 * interrupted/incomplete export, etc.) still fails the build.
 */
import { spawn } from "node:child_process";
import { existsSync, readdirSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const nextBin = join(root, "node_modules", "next", "dist", "bin", "next");

function runNextBuild() {
  return new Promise((resolve) => {
    const child = spawn(process.execPath, [nextBin, "build"], {
      // Tee stderr so we can inspect it while the user still sees full output.
      stdio: ["inherit", "inherit", "pipe"],
    });
    let stderr = "";
    child.stderr.on("data", (chunk) => {
      const text = chunk.toString();
      stderr += text;
      process.stderr.write(text);
    });
    child.on("close", (code) => resolve({ code: code ?? 1, stderr }));
  });
}

// The static export is only considered complete when the entry point, the
// manifest, a nested route, and the (large, generated-last) policies set all
// exist. If the build died mid-export, these won't all be present.
function exportLooksComplete() {
  const policiesDir = join(root, "out", "policies");
  const hasPolicies =
    existsSync(policiesDir) && readdirSync(policiesDir).length > 0;
  return (
    existsSync(join(root, "out", "index.html")) &&
    existsSync(join(root, "out", "manifest.webmanifest")) &&
    existsSync(join(root, "out", "about", "founder", "index.html")) &&
    hasPolicies
  );
}

// Signature of the known-benign Windows worker-teardown crash.
function isBenignKillEperm(stderr) {
  return /EPERM/.test(stderr) && /syscall:\s*['"]?kill['"]?/.test(stderr);
}

const { code, stderr } = await runNextBuild();

if (code !== 0) {
  if (isBenignKillEperm(stderr) && exportLooksComplete()) {
    console.warn(
      "\n⚠ next build exited non-zero due to the known Windows worker-teardown " +
        "EPERM (node_modules/next/dist/lib/worker.js), but the static export " +
        "completed successfully. Continuing to service-worker generation.\n"
    );
  } else {
    console.error(`\n✗ next build failed (exit code ${code}).`);
    process.exit(code);
  }
}

await import("./generate-sw.mjs");
