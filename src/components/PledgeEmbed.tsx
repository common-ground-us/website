"use client";

import { useEffect, useRef } from "react";

/**
 * Inline Tally embed for the Common Ground Pledge form (ZjArge).
 *
 * Why inline (not the site's link-out FormLaunchButton): the pledger stays on
 * common-ground.us the whole time, so there is no cross-domain hop in the
 * address bar (the problem that broke GA tracking with Google Forms).
 *
 * Redirect-on-submit: Tally's own "redirect on completion" setting does NOT
 * redirect the PARENT window from inside an iframe embed — it can only navigate
 * the iframe, so submitting would just show Tally's in-frame "Thanks" screen and
 * leave the visitor stranded on /get-involved. Instead we listen for Tally's
 * `Tally.FormSubmitted` postMessage and navigate the top window to /thank-you
 * ourselves, so /thank-you loads as a real pageview and its GA4 events fire.
 *
 * Any query params on this page (e.g. ?src=forward) are passed through to the
 * embed so Tally's hidden fields can capture them.
 */
const TALLY_FORM_ID = "ZjArge";
const EMBED_SCRIPT = "https://tally.so/widgets/embed.js";
const THANK_YOU_URL = "/thank-you/";

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

    // Redirect the TOP window to /thank-you when the embedded form is submitted.
    // Tally posts a message from its iframe on submit; historically the payload
    // is a JSON string like {"event":"Tally.FormSubmitted","payload":{...}}.
    // We accept it only from a tally.so origin, and match the submit event
    // leniently so a change in Tally's payload shape can't silently strand the
    // signer (which is what broke the post-submit redirect in Nov 2026).
    let redirected = false;
    const goThankYou = () => {
      if (redirected) return;
      redirected = true;
      window.location.href = THANK_YOU_URL;
    };
    const onMessage = (e: MessageEvent) => {
      if (redirected) return;
      if (typeof e.origin === "string" && !e.origin.includes("tally.so")) return;
      // Log the raw message so a single test submission reveals Tally's exact
      // event/payload shape if this ever needs re-diagnosing.
      try {
        console.info("[PledgeEmbed] tally message:", e.data);
      } catch {}
      let type = "";
      let formId = "";
      try {
        if (typeof e.data === "string") {
          const parsed = JSON.parse(e.data);
          type = parsed?.event ?? "";
          formId = parsed?.payload?.formId ?? parsed?.formId ?? "";
        } else if (e.data && typeof e.data === "object") {
          const d = e.data as {
            event?: string;
            payload?: { formId?: string };
            formId?: string;
          };
          type = d.event ?? "";
          formId = d.payload?.formId ?? d.formId ?? "";
        }
      } catch {
        // Not JSON — fall through to the raw-string check below.
      }
      const raw = typeof e.data === "string" ? e.data : "";
      const isSubmit =
        type === "Tally.FormSubmitted" || raw.includes("Tally.FormSubmitted");
      if (!isSubmit) return;
      // If a formId is present, make sure it's ours; if absent, trust the origin.
      if (formId && formId !== TALLY_FORM_ID) return;
      goThankYou();
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <div>
      <iframe
        ref={iframeRef}
        loading="lazy"
        width="100%"
        height={480}
        title="Sign the Common Ground Declaration"
        style={{ border: 0, margin: 0 }}
      />
      {/* Human fallback: if the auto-redirect to /thank-you ever fails (Tally
          changing its postMessage, or a redirect-on-completion setting trying
          to navigate the iframe into our X-Frame-Options: DENY wall), a signer
          can still reach their next steps instead of being stranded. */}
      <p
        style={{
          marginTop: 12,
          fontSize: 13,
          lineHeight: 1.5,
          color: "#718096",
        }}
      >
        After you submit, you&apos;ll be taken to your next steps automatically.
        Already submitted and still seeing the form?{" "}
        <a
          href={THANK_YOU_URL}
          style={{ color: "#b22234", textDecoration: "underline" }}
        >
          Continue here &rarr;
        </a>
      </p>
      <noscript>
        <a
          href={`https://tally.so/r/${TALLY_FORM_ID}`}
          style={{ color: "#b22234", textDecoration: "underline" }}
        >
          Open the Declaration form →
        </a>
      </noscript>
    </div>
  );
}
