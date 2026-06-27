import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "The Research Behind Common Ground",
  description: "The sources, methodology, and rigor behind Common Ground.",
};

export default function ResearchPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main id="main-content" className="flex-1">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-[#1a2a4a] mb-4">
            The Research
          </h1>
          <p className="text-lg text-[#4a5568] mb-8">
            Common Ground is built on rigorous, peer-reviewed research. Here is
            what we draw on, and how we use it.
          </p>

          <div className="prose prose-lg max-w-none text-[#4a5568] space-y-6">
            {/* Section 1 — Primary Source: PPC */}
            <h2 className="text-2xl font-display font-bold text-[#1a2a4a]">
              Primary research: Program for Public Consultation
            </h2>
            <p>
              Common Ground&apos;s foundational data source is the{" "}
              <strong className="text-[#1a2a4a]">
                University of Maryland&apos;s Program for Public Consultation
                (PPC)
              </strong>
              , led by Steven Kull. PPC is one of the most rigorous public-opinion
              research operations in the country, drawing on more than 100,000
              informed participants across its policymaking simulations. Funding
              comes from the MacArthur, Rockefeller, and Hewlett foundations.
            </p>
            <p>
              PPC&apos;s distinctive methodology is{" "}
              <strong className="text-[#1a2a4a]">deliberative polling</strong> —
              citizens are given balanced briefings on policy questions (covering
              arguments for and against, with documented sources) before they are
              asked their views. This surfaces what people actually want when they
              are informed, not what they reflexively respond when prompted by
              partisan framing.
            </p>
            <p>Two key reports underlie Common Ground&apos;s work:</p>
            <ul>
              <li>
                <strong className="text-[#1a2a4a]">
                  The 2024{" "}
                  <a
                    href="https://vop.org/commonground-/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1a56c4] underline hover:no-underline"
                  >
                    <em>Common Ground of the American People</em>
                  </a>{" "}
                  report
                </strong>
                , produced in collaboration with Stanford University&apos;s
                Deliberative Democracy Lab. This identified an extensive set of
                federal policies on which majorities of both Republicans and
                Democrats agreed.
              </li>
              <li>
                <strong className="text-[#1a2a4a]">
                  The 2026{" "}
                  <a
                    href="https://vop.org/cgoap/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1a56c4] underline hover:no-underline"
                  >
                    CGOAP curation
                  </a>
                </strong>
                , which refined that work to{" "}
                <strong className="text-[#1a2a4a]">88 policies</strong> on which
                more than two-thirds of both Republicans and Democrats agree.
                (Common Ground&apos;s own look-up tool displays the 82 of those 88
                policies that are publicly available on PPC&apos;s site.)
              </li>
            </ul>

            {/* Section 2 — Supplementary Sources */}
            <h2 className="text-2xl font-display font-bold text-[#1a2a4a]">
              Supplementary sources
            </h2>
            <p>
              We draw on additional peer-reviewed and credibly-sourced data for
              triangulation, perception-gap evidence, and context:
            </p>
            <ul>
              <li>
                <strong className="text-[#1a2a4a]">Pew Research Center</strong> —
                politics, polarization, civic-engagement research
              </li>
              <li>
                <strong className="text-[#1a2a4a]">
                  Kaiser Family Foundation (KFF)
                </strong>{" "}
                — health-policy polling
              </li>
              <li>
                <strong className="text-[#1a2a4a]">Gallup</strong> — politics,
                party identification
              </li>
              <li>
                <strong className="text-[#1a2a4a]">More in Common</strong> —{" "}
                <em>Hidden Tribes, Perception Gap</em> research
              </li>
              <li>
                <strong className="text-[#1a2a4a]">Harvard CAPS/Harris</strong> —
                current polling on contested issues
              </li>
              <li>
                <strong className="text-[#1a2a4a]">
                  Morning Consult, Quinnipiac, AP/NORC, CIRCLE (Tufts)
                </strong>{" "}
                — additional context where helpful
              </li>
            </ul>
            <p>
              Source attributions appear in the look-up tool results and in
              Platform documentation.
            </p>

            {/* Section 3 — What We Do with the Research */}
            <h2 className="text-2xl font-display font-bold text-[#1a2a4a]">
              What Common Ground does with the research
            </h2>
            <p>
              Common Ground curates, applies, and triangulates. We do not author.
            </p>
            <ul>
              <li>
                We <strong className="text-[#1a2a4a]">curate</strong>: from
                rigorous existing research, we identify the policies on which
                Americans broadly agree.
              </li>
              <li>
                We <strong className="text-[#1a2a4a]">apply</strong>: we translate
                that research into citizen-facing utility — searchable, scannable,
                usable.
              </li>
              <li>
                We <strong className="text-[#1a2a4a]">triangulate</strong>: where
                multiple sources address the same policy, we cross-check for
                consistency and surface any meaningful discrepancies.
              </li>
            </ul>
            <p>
              We do not commission our own surveys. We do not employ proprietary
              methodology. The research integrity stays with the researchers.
              Common Ground is the structured citizen-facing application that
              connects rigorous research to citizen use.
            </p>

            {/* Section 4 — What We Do Not Do */}
            <h2 className="text-2xl font-display font-bold text-[#1a2a4a]">
              What Common Ground does not do
            </h2>
            <p>
              We do not author the data. We do not lobby for specific policies. We
              do not endorse candidates. We do not interpret what citizens
              &ldquo;should&rdquo; want.
            </p>
            <p>
              We reveal what already exists — and trust citizens to draw their own
              conclusions.
            </p>

            {/* Closing line */}
            <p>
              For the full governance framework on how research is selected and
              applied, see our{" "}
              <Link
                href="/governance/"
                className="text-[#1a56c4] underline hover:no-underline"
              >
                Governance &amp; Transparency
              </Link>{" "}
              page →
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
