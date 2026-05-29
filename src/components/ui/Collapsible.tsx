"use client";

import { useState, useId } from "react";
import { ChevronDown } from "../icons";

interface CollapsibleProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export default function Collapsible({
  title,
  children,
  defaultOpen = false,
}: CollapsibleProps) {
  const [open, setOpen] = useState(defaultOpen);
  const contentId = useId();

  return (
    <div className="border border-[#e2e8f0] rounded-lg overflow-hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={contentId}
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-2 px-4 py-3 bg-white hover:bg-[#f5f6f8] transition-colors text-left font-medium text-[#1a2a4a] text-sm"
      >
        <span>{title}</span>
        <ChevronDown
          className={`w-4 h-4 shrink-0 text-[#718096] transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <div
          id={contentId}
          role="region"
          aria-label={title}
          className="px-4 py-4 bg-white border-t border-[#e2e8f0] text-sm text-[#4a5568] leading-relaxed"
        >
          {children}
        </div>
      )}
    </div>
  );
}
