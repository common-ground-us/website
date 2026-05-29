/**
 * Generates a service worker with a precache manifest of all static files
 * produced by `next build`. Run this AFTER `next build` completes.
 */
import { readdirSync, statSync, writeFileSync } from "fs";
import { join, relative } from "path";
import { createHash } from "crypto";
import { readFileSync } from "fs";

const OUT_DIR = "out";
const SW_PATH = join(OUT_DIR, "sw.js");

// Collect all files in out/ recursively
function collectFiles(dir, base = dir) {
  const entries = readdirSync(dir, { withFileTypes: true });
  let files = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      files = files.concat(collectFiles(full, base));
    } else {
      const rel = "/" + relative(base, full).replace(/\\/g, "/");
      // Skip the SW itself and source maps
      if (rel === "/sw.js" || rel.endsWith(".map")) continue;
      files.push(rel);
    }
  }
  return files;
}

const files = collectFiles(OUT_DIR);

// Generate a cache version hash from file contents (for cache busting)
const hash = createHash("md5");
for (const f of files.slice(0, 50)) {
  // Hash a sample of files for version
  const content = readFileSync(join(OUT_DIR, f.slice(1)));
  hash.update(content);
}
const version = hash.digest("hex").slice(0, 10);

const sw = `// Auto-generated service worker — do not edit by hand
const CACHE_NAME = "cg-v${version}";
const PRECACHE_URLS = ${JSON.stringify(files, null, 2)};

// Install: precache all static assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_URLS);
    }).then(() => self.skipWaiting())
  );
});

// Activate: delete old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

// Fetch: cache-first for same-origin, network-first for external
self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);

  // Only handle same-origin GET requests
  if (event.request.method !== "GET" || url.origin !== self.location.origin) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) {
        // Return cached, and update in background (stale-while-revalidate)
        const fetchPromise = fetch(event.request).then((response) => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          }
          return response;
        }).catch(() => {});
        return cached;
      }
      // Not in cache — fetch from network and cache it
      return fetch(event.request).then((response) => {
        if (response && response.status === 200) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        }
        return response;
      });
    })
  );
});
`;

writeFileSync(SW_PATH, sw);
console.log(
  `✓ Generated service worker with ${files.length} precache URLs (version: ${version})`
);
