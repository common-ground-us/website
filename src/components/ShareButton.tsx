"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/**
 * Site action cluster (lower-right): a Discuss button (→ the Common Ground
 * forum) and a Share button. One panel is open at a time; Escape or an outside
 * click closes it. The Share control is suppressed on /thank-you, which has its
 * own Boost/Follow section. (File name kept as ShareButton so the layout import
 * is unchanged.)
 */
const FORUM_URL = "https://common-ground-us.discourse.group/";

function ShareIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
      <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
    </svg>
  );
}

function ChatIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M4 3h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H9.5L5 20.5V17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm3 5.5h10V7H7v1.5zm0 3.5h7v-1.5H7V12z" />
    </svg>
  );
}

type OpenState = null | "discuss" | "share";

export default function ShareButton() {
  const pathname = usePathname();
  const onThankYou = !!pathname && pathname.startsWith("/thank-you");

  const [open, setOpen] = useState<OpenState>(null);
  const [copied, setCopied] = useState(false);
  const [canNativeShare, setCanNativeShare] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setCanNativeShare(typeof navigator !== "undefined" && !!navigator.share);
  }, []);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(null);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(null);
    }
    if (open) {
      document.addEventListener("mousedown", onClickOutside);
      document.addEventListener("keydown", onKey);
    }
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function pageInfo() {
    return { url: window.location.href, title: document.title };
  }

  async function nativeShare() {
    const { url, title } = pageInfo();
    try {
      await navigator.share({ title, url });
    } catch {
      /* cancelled */
    }
    setOpen(null);
  }
  function copyLink() {
    const { url } = pageInfo();
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }
  function popup(href: string) {
    window.open(href, "_blank", "noopener,noreferrer,width=550,height=420");
    setOpen(null);
  }
  function shareToX() {
    const { url, title } = pageInfo();
    popup(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`);
  }
  function shareToFacebook() {
    const { url } = pageInfo();
    popup(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`);
  }
  function shareToLinkedIn() {
    const { url } = pageInfo();
    popup(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`);
  }
  function shareByEmail() {
    const { url, title } = pageInfo();
    window.location.href = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`Check this out: ${url}`)}`;
    setOpen(null);
  }

  const menuItem =
    "w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-3 transition-colors";
  const fab =
    "w-12 h-12 rounded-full text-white shadow-lg transition-colors flex items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-2";

  return (
    <div ref={rootRef} className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Shared panel — content depends on which button is open */}
      {open && (
        <div className="absolute bottom-full right-0 mb-3 bg-white rounded-xl shadow-lg border border-gray-200 py-2 min-w-[190px]">
          {open === "discuss" && (
            <>
              <a className={menuItem} href={FORUM_URL} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(null)}>
                <ChatIcon className="w-4 h-4" />
                Open the forum →
              </a>
              <a className={menuItem} href={`${FORUM_URL}categories`} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(null)}>
                <ChatIcon className="w-4 h-4" />
                Browse topics
              </a>
            </>
          )}
          {open === "share" && (
            <>
              {canNativeShare && (
                <button onClick={nativeShare} className={menuItem}>
                  <ShareIcon className="w-4 h-4" />
                  Share…
                </button>
              )}
              <button onClick={shareToX} className={menuItem}>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                X (Twitter)
              </button>
              <button onClick={shareToLinkedIn} className={menuItem}>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                LinkedIn
              </button>
              <button onClick={shareToFacebook} className={menuItem}>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
                Facebook
              </button>
              <button onClick={shareByEmail} className={menuItem}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                Email
              </button>
              <hr className="my-1 border-gray-100" />
              <button onClick={copyLink} className={menuItem}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                {copied ? "Copied!" : "Copy link"}
              </button>
            </>
          )}
        </div>
      )}

      {/* Discuss */}
      <button
        onClick={() => setOpen((p) => (p === "discuss" ? null : "discuss"))}
        aria-label="Discuss on the Common Ground forum"
        aria-expanded={open === "discuss"}
        title="Discuss"
        className={`${fab} bg-[#b22234] hover:bg-[#9a1d2d] focus-visible:outline-[#b22234] touch-manipulation`}
      >
        <ChatIcon className="w-5 h-5" />
      </button>

      {/* Share (suppressed on /thank-you) */}
      {!onThankYou && (
        <button
          onClick={() => setOpen((p) => (p === "share" ? null : "share"))}
          aria-label="Share this page"
          aria-expanded={open === "share"}
          title="Share"
          className={`${fab} bg-[#1a2a4a] hover:bg-[#2a3a5a] focus-visible:outline-[#1a2a4a] touch-manipulation`}
        >
          <ShareIcon className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
