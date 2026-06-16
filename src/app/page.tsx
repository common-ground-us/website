import type { Metadata } from "next";

// TEMPORARY: pre-launch "coming soon" banner shown at `/` until the public
// launch on July 4, 2026. The real product (search tool) lives at `/search`.
// To go live, restore the search page to `/` (e.g. move src/app/search/page.tsx
// back to src/app/page.tsx) and delete this file.

export const metadata: Metadata = {
  title: "Launching July 4, 2026",
  description:
    "Common Ground launches July 4, 2026 — free, nonpartisan tools built on what Americans actually agree on.",
  openGraph: {
    title: "Common Ground — Launching July 4, 2026",
    description:
      "Free, nonpartisan tools built on what Americans actually agree on.",
  },
};

export default function LaunchPage() {
  return (
    <main id="main-content" className="lb-root">
      <div className="lb-banner" role="banner" data-screen-label="Launch banner">
        <div className="lb-weave" />
        <div className="lb-inner">
          <div className="lb-content">
            <div className="lb-lockup">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="lb-logo"
                src="/logos/logo-stacked-beside.svg"
                alt="Common Ground"
              />
              <div className="lb-div" />
              <div className="lb-eyebrow">
                <span className="lb-dot" />
                Public launch
              </div>
            </div>
            <h1 className="lb-h1">
              Launching <span className="lb-dl">July&nbsp;4,&nbsp;2026</span>
            </h1>
            <p className="lb-sub">
              Free, nonpartisan tools built on what Americans actually agree on.
            </p>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="lb-mark"
            src="/logos/logo-mark.svg"
            alt=""
            aria-hidden="true"
          />
        </div>
      </div>
    </main>
  );
}
