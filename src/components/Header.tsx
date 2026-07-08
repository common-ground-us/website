"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "./icons";

const NAV_LINKS = [
  { href: "/about/", label: "About" },
  { href: "/about/founder/", label: "Founder's Message" },
  { href: "/roadmap/", label: "Roadmap" },
  { href: "/research/", label: "Research" },
  { href: "/governance/", label: "Governance" },
  { href: "/contact/", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#1a2a4a] text-white shadow-md">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-center gap-3 hover:opacity-90 transition-opacity focus-visible:outline-white"
          aria-label="Common Ground — home"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/logos/logo-mark.svg"
            alt=""
            width={56}
            height={42}
            priority
            className="w-14 h-auto sm:w-12"
          />
          <span
            className="font-display font-bold text-lg leading-tight hidden sm:block"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Common Ground
          </span>
        </Link>

        <nav aria-label="Main navigation" className="hidden md:block">
          <ul className="flex flex-wrap items-center justify-end gap-1 sm:gap-2 list-none m-0 p-0">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="px-3 py-2 rounded text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 transition-colors focus-visible:outline-white"
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/get-involved/"
                className="ml-1 px-3 py-2 rounded-md text-sm font-semibold bg-[#b22234] text-white hover:bg-[#9a1d2d] transition-colors focus-visible:outline-white whitespace-nowrap"
              >
                Get Involved
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <Link
            href="/get-involved/"
            className="px-3 py-2 rounded-md text-sm font-semibold bg-[#b22234] text-white hover:bg-[#9a1d2d] transition-colors focus-visible:outline-white whitespace-nowrap"
            onClick={() => setMenuOpen(false)}
          >
            Get Involved
          </Link>
          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
            className="p-2 rounded text-white/80 hover:text-white hover:bg-white/10 transition-colors focus-visible:outline-white"
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-nav"
          aria-label="Mobile navigation"
          className="md:hidden border-t border-white/10"
        >
          <ul className="flex flex-col list-none m-0 p-2">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-3 py-2 rounded text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 transition-colors focus-visible:outline-white"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
