import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Governance Principles",
  description:
    "How Common Ground is built to be trusted — structurally, not rhetorically.",
  alternates: { canonical: "/governance/" },
};

export default function GovernancePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main id="main-content" className="flex-1">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-[#1a2a4a] mb-8">
            Our Governance &amp; Transparency
          </h1>

          <div className="prose prose-lg max-w-none text-[#4a5568] space-y-6">
            <p>
              Common Ground exists to hold government accountable to the public
              will. That requires us to hold ourselves to the same standard.
            </p>
            <p>
              The entire premise of this initiative is that citizens deserve
              straight, unbiased information about what they agree on — and a
              credible way to measure whether their representatives are delivering
              it. That credibility has to be earned structurally, not just
              asserted.
            </p>
            <p>Here&apos;s how we&apos;re built.</p>

            {/* Section 1 — Five Principles */}
            <h2 className="text-2xl font-display font-bold text-[#1a2a4a]">
              Five principles
            </h2>
            <p>
              <strong className="text-[#1a2a4a]">Unbiased.</strong> The Platform
              reveals what Americans actually want, documented by rigorous
              research. No political faction, funder, or individual shapes which
              policies qualify or how officials are scored. We reveal common
              ground; we do not create it.
            </p>
            <p>
              <strong className="text-[#1a2a4a]">Transparent.</strong> Every
              decision — what qualifies, what&apos;s selected, how officials are
              evaluated — is documented and published. The reasoning is available,
              not just the conclusion.
            </p>
            <p>
              <strong className="text-[#1a2a4a]">Independent.</strong> Common
              Ground&apos;s work cannot be purchased. The initiative is currently
              self-funded by its founder, and accepts no donations during the
              launch period. Our charter establishes funding independence from
              political parties, ideological organizations, and concentrated
              sources of money.
            </p>
            <p>
              <strong className="text-[#1a2a4a]">Accountable.</strong> We report
              publicly on our methodology and results on a defined cycle. Citizens
              can evaluate whether we&apos;re doing what we say we are.
            </p>
            <p>
              <strong className="text-[#1a2a4a]">Durable.</strong> We are built to
              outlast any founder or individual, with succession structures, term
              limits for Advisory Panel members, and conflict-of-interest policies
              in place.
            </p>

            {/* Section 2 — How We're Structured */}
            <h2 className="text-2xl font-display font-bold text-[#1a2a4a]">
              How we&apos;re structured
            </h2>
            <p className="italic">
              The following describes Common Ground&apos;s intended governance
              structure. The Board and Advisory Panel are still being formed; see{" "}
              <a
                href="#where-we-are"
                className="text-[#1a56c4] underline hover:no-underline not-italic"
              >
                Where we are
              </a>{" "}
              below for the current state.
            </p>
            <p>
              <strong className="text-[#1a2a4a]">The Board of Directors</strong>{" "}
              holds ultimate accountability — naming the executive team, approving
              the Advisory Panel, and ensuring the organization operates in
              accordance with its charter.
            </p>
            <p>
              <strong className="text-[#1a2a4a]">The Executive Team</strong> makes
              final decisions on the Platform and manages the Scorecard process.
              When executive decisions diverge from Advisory Panel recommendations,
              the rationale is documented and published.
            </p>
            <p>
              <strong className="text-[#1a2a4a]">The Advisory Panel</strong> is the
              research integrity layer — advising on which policies qualify, which
              belong in the Core Platform, and what criteria should govern
              Scorecard evaluation. Panel members are selected for methodological
              expertise and ideological breadth. Their role is analytical and
              editorial, not ideological.
            </p>

            {/* Section 3 — How the Platform Is Built */}
            <h2 className="text-2xl font-display font-bold text-[#1a2a4a]">
              How the Platform is built
            </h2>
            <p>
              The Common Ground Platform selects policies that meet three
              criteria:
            </p>
            <ol>
              <li>
                <strong className="text-[#1a2a4a]">
                  Supermajority public support
                </strong>{" "}
                — a clear majority of Americans, well beyond a slim plurality,
                support the policy.
              </li>
              <li>
                <strong className="text-[#1a2a4a]">
                  Cross-partisan agreement
                </strong>{" "}
                — that support holds across party lines, not just within one
                party.
              </li>
              <li>
                <strong className="text-[#1a2a4a]">
                  Respect for individual constitutional rights
                </strong>{" "}
                — the policy operates within the limits the Bill of Rights places
                on government action.
              </li>
            </ol>
            <p>
              The third criterion is not a caveat. It is a constitutional
              constraint. A policy with overwhelming public support that would
              abridge a right protected by the Bill of Rights has no place on the
              Platform — however large the majority. American democracy was built
              on two foundational commitments: democratic accountability and
              individual liberty. The Platform honors both.
            </p>

            {/* Section 4 — What We Publish */}
            <h2 className="text-2xl font-display font-bold text-[#1a2a4a]">
              What we publish
            </h2>
            <p>We document and publish:</p>
            <ul>
              <li>
                The methodology used to qualify policies for the Platform
              </li>
              <li>
                The source list and rationale for inclusion of each data source
              </li>
              <li>
                Rationale for each plank&apos;s inclusion or exclusion from the
                Core Platform
              </li>
              <li>
                Scoring methodology and the reasoning behind every Scorecard
                evaluation (once the Scorecard launches)
              </li>
              <li>
                Funding sources, in accordance with applicable nonprofit reporting
                requirements
              </li>
              <li>
                Significant governance decisions and the reasoning behind them
              </li>
            </ul>
            <p>
              Where we have not yet built the mechanism for a given commitment, we
              name that openly. Where we have, we point to the documentation
              directly.
            </p>

            {/* Section 5 — Where We Are */}
            <h2
              id="where-we-are"
              className="text-2xl font-display font-bold text-[#1a2a4a] scroll-mt-6"
            >
              Where we are
            </h2>
            <p>
              Common Ground is in its founding stage. The Board is being
              established. The Advisory Panel is being recruited. We&apos;re
              describing the destination honestly — not claiming to have arrived.
            </p>
            <p>
              <strong className="text-[#1a2a4a]">
                A note on the inaugural Platform.
              </strong>{" "}
              The Common Ground Platform publishing August 1, 2026 is selected by
              the founder, working with informal advisors rather than a formal
              Advisory Panel. The Executive Team — currently the founder — holds
              final decision-making authority on Platform selection for both the
              inaugural Platform and every future iteration. The structural
              difference for the inaugural is twofold: the formal Advisory Panel is
              not yet constituted, and there are no Panel recommendations to
              publish. From the first revision cycle forward, a named Advisory
              Panel will advise on selection, and the Panel&apos;s recommendations
              will be published in full — including in cases where the Executive
              Team&apos;s final selection differs. The inaugural exception is named
              here, deliberately, because hiding it would itself be a transparency
              failure.
            </p>

            {/* Section 6 — Read More */}
            <h2 className="text-2xl font-display font-bold text-[#1a2a4a]">
              Read more
            </h2>
            <p>
              <Link
                href="/governance/full/"
                className="text-[#1a56c4] underline hover:no-underline"
              >
                → Full Governance Principles
              </Link>{" "}
              — Complete documentation of our structure, criteria, methodology,
              and commitments.
            </p>

            {/* Closing line */}
            <p>
              None of this requires extraordinary people. It simply requires a
              structure designed with the right incentives. It&apos;s our job as
              citizens to build it.
            </p>
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
