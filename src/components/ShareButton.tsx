"use client";

import { useState, useEffect, useRef } from "react";

function ShareIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
    </svg>
  );
}

export default function ShareButton() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [canNativeShare, setCanNativeShare] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setCanNativeShare(typeof navigator !== "undefined" && !!navigator.share);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  function getPageInfo() {
    return {
      url: window.location.href,
      title: document.title,
    };
  }

  async function handleNativeShare() {
    const { url, title } = getPageInfo();
    try {
      await navigator.share({ title, url });
    } catch {
      // User cancelled or share failed silently
    }
    setOpen(false);
  }

  function handleCopyLink() {
    const { url } = getPageInfo();
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  function shareToTwitter() {
    const { url, title } = getPageInfo();
    const text = encodeURIComponent(title);
    const link = encodeURIComponent(url);
    window.open(
      `https://twitter.com/intent/tweet?text=${text}&url=${link}`,
      "_blank",
      "noopener,noreferrer,width=550,height=420"
    );
    setOpen(false);
  }

  function shareToFacebook() {
    const { url } = getPageInfo();
    const link = encodeURIComponent(url);
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${link}`,
      "_blank",
      "noopener,noreferrer,width=550,height=420"
    );
    setOpen(false);
  }

  function shareToLinkedIn() {
    const { url } = getPageInfo();
    const link = encodeURIComponent(url);
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${link}`,
      "_blank",
      "noopener,noreferrer,width=550,height=420"
    );
    setOpen(false);
  }

  function shareByEmail() {
    const { url, title } = getPageInfo();
    const subject = encodeURIComponent(title);
    const body = encodeURIComponent(`Check this out: ${url}`);
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
    setOpen(false);
  }

  return (
    <div className="fixed bottom-6 right-6 z-50" ref={menuRef}>
      {open && (
        <div className="absolute bottom-14 right-0 bg-white rounded-xl shadow-lg border border-gray-200 py-2 min-w-[180px] animate-in fade-in slide-in-from-bottom-2">
          {canNativeShare && (
            <button
              onClick={handleNativeShare}
              className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-3 transition-colors"
            >
              <ShareIcon className="w-4 h-4" />
              Share…
            </button>
          )}
          <button
            onClick={shareToTwitter}
            className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-3 transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            X (Twitter)
          </button>
          <button
            onClick={shareToFacebook}
            className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-3 transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
            </svg>
            Facebook
          </button>
          <button
            onClick={shareToLinkedIn}
            className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-3 transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </button>
          <button
            onClick={shareByEmail}
            className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-3 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Email
          </button>
          <hr className="my-1 border-gray-100" />
          <button
            onClick={handleCopyLink}
            className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-3 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
            {copied ? "Copied!" : "Copy link"}
          </button>
        </div>
      )}

      <button
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Share this page"
        aria-expanded={open}
        className="w-12 h-12 rounded-full bg-[#1a2a4a] text-white shadow-lg hover:bg-[#2a3a5a] transition-colors flex items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1a2a4a]"
      >
        <ShareIcon className="w-5 h-5" />
      </button>
    </div>
  );
}
