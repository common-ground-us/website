import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-[#1a2a4a] text-white shadow-md">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-center gap-3 hover:opacity-90 transition-opacity focus-visible:outline-white"
          aria-label="Common Ground — home"
        >
          <Image
            src="/logos/logo-mark.svg"
            alt=""
            width={36}
            height={36}
            priority
          />
          <span
            className="font-display font-bold text-lg leading-tight hidden sm:block"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Common Ground
          </span>
        </Link>

        <nav aria-label="Main navigation">
          <ul className="flex items-center gap-1 sm:gap-2 list-none m-0 p-0">
            {[
              { href: "/", label: "Home" },
              { href: "/search/", label: "Search" },
              { href: "/about/", label: "About" },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="px-3 py-2 rounded text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 transition-colors focus-visible:outline-white"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
