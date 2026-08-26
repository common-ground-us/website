"use client";

import { useState } from "react";

/* The "forward the note" actions. The pledger already has the founder's note in
   their inbox; these make it easy to re-open or copy it.

   PLACEHOLDER COPY — swap in the real founder note. This must be the LONG
   forwardable email (Version A, the newcomer-facing one) — what every pledger
   forwards to their network, regardless of which welcome email they received. */
const SUBJECT = "Something I just signed";
const BODY = `[Placeholder forward copy — to be supplied by CG (the long Version A note).]

I just took the Common Ground pledge: that when supermajorities across party lines agree on policies that respect individual rights, government should act on them.

https://www.common-ground.us/get-involved/`;

function track(action: string) {
  if (typeof window !== "undefined") {
    (window as unknown as { dataLayer?: unknown[] }).dataLayer?.push({
      event: "thank_you_action",
      action,
    });
  }
}

export default function ForwardActions() {
  const [copied, setCopied] = useState(false);

  return (
    <div className="actions">
      <a
        className="btn"
        href={`mailto:?subject=${encodeURIComponent(SUBJECT)}&body=${encodeURIComponent(BODY)}`}
        onClick={() => track("forward-mailto")}
      >
        Open it in mail
      </a>
      <button
        type="button"
        className="btn btn-ghost"
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(BODY);
          } catch {
            /* clipboard blocked; ignore */
          }
          track("forward-copy");
          setCopied(true);
          setTimeout(() => setCopied(false), 1600);
        }}
      >
        {copied ? "Copied ✓" : "Copy the message"}
      </button>
    </div>
  );
}
