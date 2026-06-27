import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Our Product Roadmap",
  description:
    "What's launching when. Common Ground's 2026 product roadmap — Look-Up Tool through Gap Analysis.",
};

const milestones = [
  {
    title: "Website & Look-Up Tool",
    status: "Launching July 4, 2026",
    body: "Best-in-class research on what Americans want from their government — browse by policy area, search by topic. Use it to evaluate candidates and to ground conversations with family, friends, and neighbors. Facts at your fingertips.",
  },
  {
    title: "The Common Ground Platform",
    status: "Publishing August 1, 2026",
    body: "A select set of 10–15 federal policies with supermajority and bipartisan support — the democratic floor, the baseline that a representative democracy should reasonably be expected to reflect.",
  },
  {
    title: "The Common Ground Scorecard",
    status: "Coming October 2026",
    body: "A clear record of how Congress's votes align with the Platform — and where they don't. Facts for voters, grounded in shared data rather than partisan talking points.",
  },
  {
    title: "The Gap Analysis Report",
    status: "Coming Year-End 2026",
    body: "A rigorous, documented accounting of the distance between what Americans want and what Congress has delivered — by issue, by policy area, over time. The record, made visible.",
  },
];

export default function RoadmapPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main id="main-content" className="flex-1">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-[#1a2a4a] mb-4">
            Our Product Roadmap
          </h1>
          <p className="text-lg text-[#4a5568] mb-10">
            Common Ground is civic utility — like electricity or water.
            Here&apos;s what we&apos;re building, and when.
          </p>

          {/* Timeline */}
          <ol className="relative border-l-2 border-[#e2e8f0] list-none m-0 p-0 space-y-10">
            {milestones.map((m, i) => (
              <li key={m.title} className="relative pl-8">
                <span
                  aria-hidden="true"
                  className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#b22234] ring-4 ring-white"
                />
                <p className="text-xs font-semibold uppercase tracking-wider text-[#b22234] mb-1">
                  Milestone {i + 1}
                </p>
                <h2 className="text-xl sm:text-2xl font-display font-bold text-[#1a2a4a]">
                  {m.title}
                </h2>
                <p className="text-sm font-semibold text-[#1a56c4] mt-1 mb-3">
                  {m.status}
                </p>
                <p className="text-[#4a5568] leading-relaxed">{m.body}</p>
              </li>
            ))}
          </ol>

          {/* Closing band */}
          <div className="mt-12 pt-8 border-t border-[#e2e8f0] space-y-4">
            <p className="text-[#4a5568]">
              All Common-Ground.US tools are freely available. No cost. No
              advertising. No party affiliation.
            </p>
            <p className="text-[#4a5568]">
              Want to be notified when the next milestone ships?
            </p>
            <Link
              href="/get-involved/"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#1a2a4a] text-white font-semibold rounded-lg hover:bg-[#2a3f6e] transition-colors"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
