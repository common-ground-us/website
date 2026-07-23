"use client";

import { useEffect, useState, type ReactNode } from "react";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

/**
 * Interim conversion instrument. The Google Forms are cross-origin, so the page
 * can never observe the real submit (Same-Origin Policy). Instead of embedding
 * the form in an iframe, we link out to the full-page form on Google's domain
 * and fire a GA4 event on the *click* — which happens on our own GA-tracked
 * page, so it carries the visitor's UTM / Champion attribution automatically.
 *
 * This measures form-open *intent*, not a confirmed submission (it over-counts).
 * The true completion count lives in the Google responses Sheet. For the
 * Pledge/Champion form, `sourceEntryId` prefills a hidden field from the inbound
 * UTM parameters, so every Sheet row is tagged with which Champion drove it —
 * that Sheet, not GA4, is the source of truth for completions-per-Champion.
 *
 * The link opens in a new tab so our GA-tracked page stays open behind it; the
 * visitor returns to it after submitting with their session and UTMs intact.
 */
export default function FormLaunchButton({
  baseUrl,
  eventName,
  eventForm,
  sourceEntryId,
  className,
  children,
}: {
  baseUrl: string;
  eventName: string;
  eventForm?: string;
  sourceEntryId?: string;
  className?: string;
  children: ReactNode;
}) {
  // Start with the bare form URL; enrich it with the prefill on the client once
  // we can read the current UTM parameters. Keeping the anchor's href in sync
  // (rather than computing at click time) preserves middle-click / open-in-tab.
  const [href, setHref] = useState(baseUrl);

  useEffect(() => {
    if (!sourceEntryId) return;
    const params = new URLSearchParams(window.location.search);
    const source =
      [
        params.get("utm_source"),
        params.get("utm_medium"),
        params.get("utm_campaign"),
      ]
        .filter(Boolean)
        .join(" | ") || "direct";
    const url = new URL(baseUrl);
    url.searchParams.set("usp", "pp_url");
    url.searchParams.set(sourceEntryId, source);
    setHref(url.toString());
  }, [baseUrl, sourceEntryId]);

  function handleClick() {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: eventName,
      ...(eventForm ? { form: eventForm } : {}),
    });
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={className}
    >
      {children}
    </a>
  );
}
