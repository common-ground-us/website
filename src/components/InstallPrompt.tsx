"use client";

import { useEffect, useState } from "react";

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [dismissed, setDismissed] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    // Check if already installed
    const standalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      (navigator as unknown as { standalone?: boolean }).standalone === true;
    setIsStandalone(standalone);

    // Detect iOS (iPadOS 13+ reports as Mac in UA, so check touch support)
    const ios =
      /iphone|ipad|ipod/i.test(navigator.userAgent) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
    setIsIOS(ios);

    // Check if user previously dismissed
    if (sessionStorage.getItem("pwa-install-dismissed")) {
      setDismissed(true);
    }

    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    await deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") {
      setDeferredPrompt(null);
    }
  };

  const handleDismiss = () => {
    setDismissed(true);
    sessionStorage.setItem("pwa-install-dismissed", "1");
  };

  // Don't show if already installed or dismissed
  if (isStandalone || dismissed) return null;

  // iOS: show manual instruction
  if (isIOS) {
    return (
      <div className="fixed bottom-0 inset-x-0 z-50 p-4 sm:p-6">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg border border-[#e2e8f0] p-4 flex items-start gap-3">
          <div className="flex-1">
            <p className="text-sm font-semibold text-[#1a2a4a]">
              Install Common Ground
            </p>
            <p className="text-xs text-[#718096] mt-1">
              Tap{" "}
              <svg
                className="inline w-4 h-4 -mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                />
              </svg>{" "}
              then &quot;Add to Home Screen&quot;
            </p>
          </div>
          <button
            onClick={handleDismiss}
            className="text-[#718096] hover:text-[#1a2a4a] p-1"
            aria-label="Dismiss"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    );
  }

  // Android/Desktop: show install button when prompt is available
  if (!deferredPrompt) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 p-4 sm:p-6">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg border border-[#e2e8f0] p-4 flex items-center gap-3">
        <div className="flex-1">
          <p className="text-sm font-semibold text-[#1a2a4a]">
            Install Common Ground
          </p>
          <p className="text-xs text-[#718096] mt-1">
            Access all policies offline — even without internet
          </p>
        </div>
        <button
          onClick={handleInstall}
          className="px-4 py-2 text-sm font-medium text-white bg-[#1a2a4a] rounded-lg hover:bg-[#2a3a5a] transition-colors whitespace-nowrap"
        >
          Install
        </button>
        <button
          onClick={handleDismiss}
          className="text-[#718096] hover:text-[#1a2a4a] p-1"
          aria-label="Dismiss"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
