import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#1a2a4a] text-white/70 mt-auto">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-8 flex flex-col gap-6">
        <p className="text-center sm:text-left text-sm">
          <span className="text-white font-medium">
            Making Government Accountable to the Will of the People
          </span>{" "}
          Self-funded — no donations, no advertising, no party affiliation.
        </p>

        {/* Social links to be added here pending intern read-out. */}

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p className="text-center sm:text-left">
            © {year}{" "}
            <span className="text-white font-medium">Common Ground</span>
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
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
