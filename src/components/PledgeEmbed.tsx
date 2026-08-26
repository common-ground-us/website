"use client";

import { useEffect, useRef } from "react";

/**
 * Inline Tally embed for the Common Ground Pledge form (ZjArge).
 *
 * Why inline (not the site's link-out FormLaunchButton): the pledger stays on
 * common-ground.us the whole time, so there is no cross-domain hop in the
 * address bar (the problem that broke GA tracking with Google Forms). On submit,
 * Tally's own "redirect on completion" (set to /thank-you) navigates the TOP
 * window, so /thank-you loads as a real pageview and its GA4 events fire.
 *
 * Any query params on this page (e.g. ?src=forward) are passed through to the
 * embed so Tally's hidden fields can capture them.
 */
const TALLY_FORM_ID = "ZjArge";
const EMBED_SCRIPT = "https://tally.so/widgets/embed.js";

export default function PledgeEmbed() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    // Base embed options + pass-through of this page's query string so hidden
    // fields (src / utm_*) are captured on the submission.
    const opts = new URLSearchParams({
      alignLeft: "1",
      transparentBackground: "1",
      dynamicHeight: "1",
    });
    const incoming = new URLSearchParams(window.location.search);
    incoming.forEach((v, k) => opts.set(k, v));
    const src = `https://tally.so/embed/${TALLY_FORM_ID}?${opts.toString()}`;
    iframe.setAttribute("data-tally-src", src);

    const w = window as unknown as { Tally?: { loadEmbeds: () => void } };
    const render = () => {
      if (w.Tally) {
        w.Tally.loadEmbeds();
      } else if (!iframe.src) {
        // Degraded fallback: no script → fixed-height iframe, still works.
        iframe.src = src;
      }
    };

    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${EMBED_SCRIPT}"]`
    );
    if (existing && w.Tally) {
      render();
    } else if (existing) {
      existing.addEventListener("load", render, { once: true });
    } else {
      const s = document.createElement("script");
      s.src = EMBED_SCRIPT;
      s.onload = render;
      s.onerror = render;
      document.body.appendChild(s);
    }
  }, []);

  return (
    <div>
      <iframe
        ref={iframeRef}
        loading="lazy"
        width="100%"
        height={480}
        title="Take the Common Ground Pledge"
        style={{ border: 0, margin: 0 }}
      />
      <noscript>
        <a
          href={`https://tally.so/r/${TALLY_FORM_ID}`}
          style={{ color: "#b22234", textDecoration: "underline" }}
        >
          Open the Pledge form →
        </a>
      </noscript>
    </div>
  );
}
