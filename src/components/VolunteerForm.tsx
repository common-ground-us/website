"use client";

import { useEffect, useRef } from "react";

const FORM_ID = "1FAIpQLSf0VIlFeyQybJEY47dh2Q7F1LpP8f6ZYTCDJNzhS-x02t13bg";

export default function VolunteerForm() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // The Pledge form is a cross-origin Google Forms iframe, so the page cannot
    // observe the real submit. As an interim conversion proxy we treat "user
    // focused into the form" as a signal and push a `pledge_submit` event once
    // per session. This measures form-start intent, not a confirmed submission
    // (it over-counts) — see the analytics setup notes.
    function handleBlur() {
      if (document.activeElement !== iframeRef.current) return;
      try {
        if (sessionStorage.getItem("cg_pledge_submit_fired") === "1") return;
        sessionStorage.setItem("cg_pledge_submit_fired", "1");
      } catch {
        // sessionStorage unavailable (private mode); fall through and still fire.
      }
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: "pledge_submit", form: "pledge" });
    }
    window.addEventListener("blur", handleBlur);
    return () => window.removeEventListener("blur", handleBlur);
  }, []);

  return (
    <div>
      <p className="text-sm text-[#4a5568] mb-4">
        Trouble seeing the form below (especially on iPhone or iPad)?{" "}
        <a
          href={`https://docs.google.com/forms/d/e/${FORM_ID}/viewform`}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-[#1a2a4a] underline"
        >
          Open it in a new tab
        </a>
        .
      </p>
      <div className="w-full overflow-x-auto">
        <iframe
          ref={iframeRef}
          src={`https://docs.google.com/forms/d/e/${FORM_ID}/viewform?embedded=true`}
          width="640"
          height={2000}
          className="mx-auto max-w-full border-0"
          title="Volunteer sign-up form"
          onLoad={() => window.scrollTo(0, 0)}
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
}
