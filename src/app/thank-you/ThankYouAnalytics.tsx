"use client";

import { useEffect } from "react";

/* Fires the pledge-completion conversion on load (this page is the post-submit
   destination) and tracks rung clicks via delegated listeners on [data-ev].
   Pushes to the GTM dataLayer, which the site already loads in layout.tsx. */
export default function ThankYouAnalytics() {
  useEffect(() => {
    const dl = (window as unknown as { dataLayer?: unknown[] }).dataLayer;
    dl?.push({ event: "pledge_complete" });

    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement)?.closest?.("[data-ev]") as HTMLElement | null;
      if (!el) return;
      dl?.push({ event: "thank_you_action", action: el.dataset.ev });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
