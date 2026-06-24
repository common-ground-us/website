import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Roadmap",
  description:
    "The Common Ground product roadmap — what we're building and what's coming next.",
};

export default function RoadmapPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main id="main-content" className="flex-1">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-[#1a2a4a] mb-8">
            Product Roadmap
          </h1>
          <div className="prose prose-lg max-w-none text-[#4a5568] space-y-6">
            <p>
              This page will outline what we&apos;re building, the priorities
              guiding our work, and what&apos;s coming next for Common Ground.
            </p>
            <p className="text-[#6b7280] italic">Full content coming soon.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
