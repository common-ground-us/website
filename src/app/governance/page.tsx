import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Governance & Transparency",
  description:
    "How Common Ground is governed — our principles of transparency, independence, and accountability.",
};

export default function GovernancePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main id="main-content" className="flex-1">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-[#1a2a4a] mb-8">
            Governance &amp; Transparency
          </h1>
          <div className="prose prose-lg max-w-none text-[#4a5568] space-y-6">
            <p>
              This page will summarize how Common Ground is governed and our
              commitments to transparency, independence, and accountability.
            </p>
            <p className="text-[#6b7280] italic">Full content coming soon.</p>
          </div>

          <div className="mt-10">
            <Link
              href="/governance/full/"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#1a2a4a] text-white font-semibold rounded-lg hover:bg-[#2a3f6e] transition-colors"
            >
              Read the Full Governance Principles
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
