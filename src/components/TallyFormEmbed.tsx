"use client";

import { useEffect, useRef } from "react";

/**
 * Generic inline Tally form embed. Loads Tally's embed.js (once) and renders the
 * given form in an auto-resizing iframe. Remount (via a `key={formId}`) to switch
 * forms. Used by the Contact page's tabbed chooser.
 */
const EMBED_SCRIPT = "https://tally.so/widgets/embed.js";

export default function TallyFormEmbed({
  formId,
  title,
  minHeight = 480,
}: {
  formId: string;
  title?: string;
  minHeight?: number;
}) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const src = `https://tally.so/embed/${formId}?alignLeft=1&transparentBackground=1&dynamicHeight=1`;
    iframe.setAttribute("data-tally-src", src);

    const w = window as unknown as { Tally?: { loadEmbeds: () => void } };
    const render = () => {
      if (w.Tally) w.Tally.loadEmbeds();
      else if (!iframe.src) iframe.src = src; // degraded fallback: fixed-height iframe
    };

    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${EMBED_SCRIPT}"]`
    );
    if (existing && w.Tally) render();
    else if (existing) existing.addEventListener("load", render, { once: true });
    else {
      const s = document.createElement("script");
      s.src = EMBED_SCRIPT;
      s.onload = render;
      s.onerror = render;
      document.body.appendChild(s);
    }
  }, [formId]);

  return (
    <iframe
      ref={iframeRef}
      loading="lazy"
      width="100%"
      height={minHeight}
      title={title || "Form"}
      style={{ border: 0, margin: 0 }}
    />
  );
}
