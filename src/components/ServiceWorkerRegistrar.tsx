"use client";

import { useEffect } from "react";

export function ServiceWorkerRegistrar() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/service-worker.js", { scope: "/" }).catch(() => {
        // SW registration failed — offline won't work, but site still functions
      });
    }
  }, []);

  return null;
}
