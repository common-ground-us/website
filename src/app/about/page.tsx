import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "About",
  description: "About Common Ground — an all-volunteer nonprofit providing Tools for an Informed Citizenry.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main id="main-content" className="flex-1">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-[#1a2a4a] mb-8">
            About Common Ground
          </h1>
          <div className="prose prose-lg max-w-none text-[#4a5568] space-y-6">
            <p>
              <strong className="text-[#1a2a4a]">Common Ground</strong> is an
              all-volunteer nonprofit organization. Our mission is to provide{" "}
              <em>Tools for an Informed Citizenry</em> — making it easy for
              anyone to access research showing that Americans have supermajority
              or bipartisan agreement on dozens of federal policies.
            </p>
            <h2 className="text-2xl font-display font-bold text-[#1a2a4a]">
              Why This Matters
            </h2>
            <p>
              Most Americans believe the country is more divided than it actually
              is. Media coverage and political rhetoric emphasize conflict. But
              when you look at the polling data, a different picture emerges: on
              issue after issue, large majorities of Republicans, Democrats, and
              Independents agree.
            </p>
            <p>
              Common Ground exists to make that data visible, accessible, and
              shareable — so that citizens, journalists, educators, and
              policymakers can see the landscape of genuine public agreement.
            </p>
            <h2 className="text-2xl font-display font-bold text-[#1a2a4a]">
              Our Data
            </h2>
            <p>
              Our policy database is sourced from peer-reviewed polling
              organizations and academic research. Every entry includes the
              original source, polling methodology, margin of error, and date —
              so you can verify each finding yourself.
            </p>
            <p>
              Data is updated as-needed by our volunteer team. All changes are
              tracked in our public GitHub repository.
            </p>
            <h2 className="text-2xl font-display font-bold text-[#1a2a4a]">
              Open Source
            </h2>
            <p>
              This website is open source and built with Next.js, Tailwind CSS,
              and Decap CMS. The full codebase is available on{" "}
              <a
                href="https://github.com/common-ground-us/website"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1a56c4] underline hover:no-underline"
              >
                GitHub
              </a>
              .
            </p>
          </div>

          <div className="mt-10">
            <Link
              href="/search/"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#1a2a4a] text-white font-semibold rounded-lg hover:bg-[#2a3f6e] transition-colors"
            >
              Explore the Policy Library
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
