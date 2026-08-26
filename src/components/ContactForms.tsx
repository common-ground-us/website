"use client";

import { useState } from "react";
import TallyFormEmbed from "@/components/TallyFormEmbed";

/** The three contact inquiry types, each an inline Tally form. */
const FORMS = [
  {
    id: "general",
    label: "General Inquiry",
    description: "Questions, corrections, and everything else.",
    formId: "QKqlXX",
  },
  {
    id: "press",
    label: "Press / Media",
    description:
      "Interview requests, media inquiries, and fact-checks for journalists.",
    formId: "Npx1gO",
  },
  {
    id: "partners",
    label: "Partners",
    description:
      "Organizations interested in collaborating or amplifying the work.",
    formId: "q4q1pg",
  },
] as const;

export default function ContactForms() {
  const [active, setActive] = useState<(typeof FORMS)[number]["id"]>("general");
  const current = FORMS.find((f) => f.id === active)!;

  function select(id: (typeof FORMS)[number]["id"]) {
    setActive(id);
    try {
      (window as unknown as { dataLayer?: unknown[] }).dataLayer?.push({
        event: "contact_select",
        contact_type: id,
      });
    } catch {
      /* analytics optional */
    }
  }

  return (
    <div>
      <div role="tablist" aria-label="Contact type" className="flex flex-wrap gap-2 mb-5">
        {FORMS.map((f) => {
          const isActive = f.id === active;
          return (
            <button
              key={f.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => select(f.id)}
              className={
                "px-4 py-2 rounded-lg text-sm font-medium border transition-colors touch-manipulation " +
                (isActive
                  ? "bg-[#1a2a4a] text-white border-[#1a2a4a]"
                  : "bg-white text-[#1a2a4a] border-gray-300 hover:border-[#1a2a4a]")
              }
            >
              {f.label}
            </button>
          );
        })}
      </div>

      <p className="text-sm text-[#4a5568] mb-4">{current.description}</p>

      <div className="rounded-lg border border-gray-200 bg-white p-2 sm:p-4">
        <TallyFormEmbed
          key={current.formId}
          formId={current.formId}
          title={`${current.label} form`}
        />
      </div>
    </div>
  );
}
