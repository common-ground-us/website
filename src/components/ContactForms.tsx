"use client";

import { useState } from "react";

const FORMS = [
  {
    id: "general",
    label: "General Inquiry",
    src: "https://docs.google.com/forms/d/e/1FAIpQLSdLNK-EeeX6WtDeDuMCqwFZSF1EGXBa0G9p9YBTEyXZK-7SKg/viewform?embedded=true",
    height: 1697,
  },
  {
    id: "partners",
    label: "Partners",
    src: "https://docs.google.com/forms/d/e/1FAIpQLSfsAXL6A8xJx7lHGfk3qaCyBCq5VJ_wUc7MCNkrxHkUbu4ovg/viewform?embedded=true",
    height: 2073,
  },
  {
    id: "press",
    label: "Press / Media",
    src: "https://docs.google.com/forms/d/e/1FAIpQLScCZlM0z6V6e1B_g8Oo-zUQG53mU6W9v9SXcov4g9fdEfL25g/viewform?embedded=true",
    height: 2044,
  },
] as const;

export default function ContactForms() {
  const [activeId, setActiveId] = useState<(typeof FORMS)[number]["id"]>(
    FORMS[0].id
  );
  const active = FORMS.find((form) => form.id === activeId) ?? FORMS[0];

  return (
    <div>
      <div className="flex flex-wrap gap-2 border-b border-gray-200 mb-8">
        {FORMS.map((form) => (
          <button
            key={form.id}
            type="button"
            onClick={() => setActiveId(form.id)}
            className={`px-4 py-2 text-sm sm:text-base font-medium rounded-t-md transition-colors ${
              form.id === activeId
                ? "bg-[#1a2a4a] text-white"
                : "text-[#4a5568] hover:text-[#1a2a4a] hover:bg-gray-100"
            }`}
            aria-current={form.id === activeId ? "true" : undefined}
          >
            {form.label}
          </button>
        ))}
      </div>
      <div className="w-full overflow-x-auto">
        <iframe
          key={active.id}
          src={active.src}
          width="640"
          height={active.height}
          className="mx-auto max-w-full border-0"
          title={`${active.label} contact form`}
          onLoad={() => window.scrollTo(0, 0)}
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
}
