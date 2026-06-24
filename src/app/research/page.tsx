import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "The Research",
  description:
    "The research behind Common Ground — the polling and methodology documenting where Americans agree.",
};

export default function ResearchPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main id="main-content" className="flex-1">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-[#1a2a4a] mb-8">
            The Research
          </h1>
          <div className="prose prose-lg max-w-none text-[#4a5568] space-y-6">
            <p>
              This page will detail the research, polling sources, and
              methodology behind the evidence that Americans share
              supermajority agreement on dozens of federal policies.
            </p>
            <p className="text-[#6b7280] italic">Full content coming soon.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
