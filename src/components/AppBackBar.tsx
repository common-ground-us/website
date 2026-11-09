"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

/**
 * In-app Back control, shown only when the site is running as an installed web
 * app (iOS "Add to Home Screen", or any standalone / minimal-ui / fullscreen
 * PWA) — where there is no browser back button. In a normal browser tab it
 * renders nothing, since the browser's own back button is present. Hidden on
 * the home page (nowhere to go back to) and on md+ screens.
 */
export default function AppBackBar() {
  const router = useRouter();
  const pathname = usePathname();
  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    try {
      const mm = (q: string) =>
        typeof window.matchMedia === "function" && window.matchMedia(q).matches;
      const iosStandalone =
        (window.navigator as unknown as { standalone?: boolean }).standalone ===
        true;
      setInstalled(
        mm("(display-mode: standalone)") ||
          mm("(display-mode: minimal-ui)") ||
          mm("(display-mode: fullscreen)") ||
          iosStandalone
      );
    } catch {
      /* no-op */
    }
  }, []);

  if (!installed || pathname === "/") return null;

  const goBack = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <div className="md:hidden bg-[#1a2a4a] border-t border-white/10">
      <div className="max-w-[1200px] mx-auto px-2 sm:px-4 py-1.5">
        <button
          type="button"
          onClick={goBack}
          aria-label="Go back"
          className="inline-flex items-center gap-1.5 px-2 py-1.5 rounded text-sm font-medium text-white/85 hover:text-white hover:bg-white/10 transition-colors focus-visible:outline-white"
        >
          <svg
            className="w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
          Back
        </button>
      </div>
    </div>
  );
}
