"use client";

// Root error boundary. Replaces the whole document when a render error escapes,
// so it must supply its own <html>/<body>. Global CSS isn't guaranteed here, so
// styles are inline. On a static export there is no server 500 — this covers
// client-side render failures.
export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
          color: "#1a2a4a",
          background: "#f5f6f8",
          padding: "2rem",
        }}
      >
        <div style={{ maxWidth: 480, textAlign: "center" }}>
          <h1 style={{ fontSize: "1.5rem", fontWeight: 700, margin: 0 }}>
            Something went wrong
          </h1>
          <p style={{ color: "#4a5568", marginTop: "0.75rem" }}>
            An unexpected error occurred. Please try again.
          </p>
          <div
            style={{
              display: "flex",
              gap: "0.75rem",
              justifyContent: "center",
              marginTop: "1.5rem",
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={() => reset()}
              style={{
                padding: "0.625rem 1.25rem",
                background: "#1a2a4a",
                color: "#fff",
                fontWeight: 600,
                border: "none",
                borderRadius: "0.5rem",
                cursor: "pointer",
              }}
            >
              Try again
            </button>
            {/* Plain anchor (not next/link): the app tree has crashed, so a full
                document navigation is the reliable way back. */}
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a
              href="/"
              style={{
                padding: "0.625rem 1.25rem",
                border: "1px solid #1a2a4a",
                color: "#1a2a4a",
                fontWeight: 600,
                borderRadius: "0.5rem",
                textDecoration: "none",
              }}
            >
              Back to home
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
