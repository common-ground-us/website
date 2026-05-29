import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#1a2a4a] text-white/70 mt-auto">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <p className="text-center sm:text-left">
          © {year}{" "}
          <span className="text-white font-medium">Common Ground</span>. All
          rights reserved.
        </p>
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap justify-center gap-4 list-none m-0 p-0">
            <li>
              <Link
                href="/about/"
                className="hover:text-white transition-colors focus-visible:outline-white"
              >
                About
              </Link>
            </li>
            <li>
              <a
                href="https://github.com/common-ground-us/website"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors focus-visible:outline-white"
              >
                GitHub
              </a>
            </li>
            <li>
              <Link
                href="/privacy/"
                className="hover:text-white transition-colors focus-visible:outline-white"
              >
                Privacy
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
