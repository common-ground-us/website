"use client";

// TEMPORARY: until the public launch on July 4, 2026 the policy tool is gated.
// This route redirects to the launch banner at `/`. The tool itself lives in
// src/components/PolicyExplorer.tsx. To go live, restore that component to `/`
// (render <PolicyExplorer /> from src/app/page.tsx) and delete this redirect.
//
// NOTE: `output: "export"` (next.config.ts) means no server redirects/middleware,
// so the redirect is performed client-side.

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SearchRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/");
  }, [router]);

  return null;
}
