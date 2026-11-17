"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

/**
 * Fires a virtual `page_view` into the GTM dataLayer on initial load and on
 * every client-side route change. Needed because this is a statically-exported
 * App Router site with `next/link` navigation, where GTM's built-in History
 * trigger is unreliable.
 *
 * GTM setup note: this is the single source of page views. In the GA4
 * configuration tag, turn OFF "send a page view when this configuration loads"
 * and instead fire a GA4 `page_view` event tag on a Custom Event trigger
 * matching `page_view` — otherwise the initial load double-counts.
 *
 * The query string is included so UTM parameters reach GA4 (spec 3.6).
 */
export function AnalyticsRouteTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const query = searchParams.toString();
    const page_path = query ? `${pathname}?${query}` : pathname;
    // Home A/B test variant (set by the sticky cg_hpvar cookie), attached to
    // every page_view so story-reach — the essay page_view — can be broken down
    // by arm (A vs B) in GA4 via a single `variant` custom dimension.
    const variant = (document.cookie.match(/(?:^|; )cg_hpvar=([AB])/) || [])[1];
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "page_view",
      page_path,
      page_location: window.location.href,
      page_title: document.title,
      ...(variant ? { variant } : {}),
    });
  }, [pathname, searchParams]);

  return null;
}
