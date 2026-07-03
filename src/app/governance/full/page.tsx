import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Full Governance Principles",
  description:
    "The complete governance framework for Common Ground — our structure, criteria, methodology, and commitments.",
};

export default function GovernanceFullPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main id="main-content" className="flex-1">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-[#1a2a4a] mb-2">
            Common Ground Governance
          </h1>
          <p className="text-lg text-[#4a5568] mb-8">
            How we&apos;re built to be trusted.
          </p>

          <div className="prose prose-lg max-w-none text-[#4a5568] space-y-6">
            {/* Intro */}
            <p>
              The entire premise of Common Ground is that citizens are not
              getting straight information about what they agree on, or what their
              representatives are actually doing about it. Asking people to trust
              us requires that we earn it — structurally, not just rhetorically.
            </p>
            <p>
              This document describes how Common Ground is governed: who makes
              decisions, on what basis, with what constraints, and how the process
              is made visible to the public.
            </p>

            {/* Why Governance Is Central */}
            <h2 className="text-2xl font-display font-bold text-[#1a2a4a]">
              Why governance is central to the mission
            </h2>
            <p>
              Common Ground&apos;s credibility depends on one thing above all
              others: that no one can reasonably argue the Platform or the
              Scorecard was shaped by ideology, partisan interest, or the
              preferences of funders. The governance structure is not bureaucratic
              scaffolding. It is mission-critical infrastructure.
            </p>
            <p>Five principles guide our governance design.</p>
            <p>
              <strong className="text-[#1a2a4a]">Unbiased.</strong> The Platform
              reveals what Americans actually want, documented by rigorous
              research — not what any political faction, funder, or founder wants
              them to want. Mechanisms are in place to ensure this, not just to
              assert it.
            </p>
            <p>
              <strong className="text-[#1a2a4a]">Transparent.</strong> Every
              consequential decision — which policies qualify, which are selected,
              how officials are scored — is documented and published. The
              reasoning is available, not just the conclusion.
            </p>
            <p>
              <strong className="text-[#1a2a4a]">Independent.</strong> Common
              Ground&apos;s work cannot be purchased. We maintain funding
              independence from political parties, ideologically aligned
              organizations, and concentrated sources of money. This is a charter
              commitment, not a preference.
            </p>
            <p>
              <strong className="text-[#1a2a4a]">Accountable.</strong> We report
              publicly on our methodology, our decisions, and our results on a
              defined cycle. Citizens should be able to evaluate whether we are
              doing what we say we are.
            </p>
            <p>
              <strong className="text-[#1a2a4a]">Durable.</strong> Common Ground
              is built to outlast any founder or individual. Governance structures
              include succession protocols, term limits for Advisory Panel
              members, and conflict-of-interest policies. The organization&apos;s
              integrity should not depend on any one person&apos;s.
            </p>

            {/* Governing Structure */}
            <h2 className="text-2xl font-display font-bold text-[#1a2a4a]">
              Governing structure
            </h2>
            <p>
              Common Ground operates under a three-tier governance structure.
            </p>
            <p>
              <strong className="text-[#1a2a4a]">The Board of Directors</strong>{" "}
              holds ultimate accountability. The Board names the executive team,
              approves the composition of the Advisory Panel, and ensures the
              organization operates in accordance with its charter. The
              Board&apos;s independence from day-to-day operations is a core design
              principle. As Common Ground grows, the Board will evolve to provide
              full structural separation from executive functions.
            </p>
            <p>
              <strong className="text-[#1a2a4a]">The Executive Team</strong> holds
              final decision-making authority over the Common Ground Platform and
              manages the Scorecard process. The Executive Team sets and publishes
              the eligibility and selection criteria the Advisory Panel applies,
              incorporates the Panel&apos;s recommendations, and is responsible for
              all public-facing communications about methodology. When Executive
              Team decisions diverge from Advisory Panel recommendations, the
              rationale is documented and published.
            </p>
            <p>
              <strong className="text-[#1a2a4a]">The Advisory Panel</strong> is the
              research integrity layer. The Panel advises on which policies meet
              the eligibility criteria, which merit inclusion in the Core Platform,
              and what scoring criteria should govern the Scorecard. The
              Panel&apos;s role is editorial, analytical, and communicative — not
              ideological. Panel members are selected for methodological expertise
              and ideological breadth. Their work is documented and explained to a
              general audience.
            </p>
            <p>
              The Panel does not determine what the public should want. It
              determines which well-supported policies best represent the clearest
              and most important areas of common ground, and presents them in a
              form the public can easily understand.
            </p>
            <p>
              The Advisory Panel targets 5–7 members with staggered terms to ensure
              continuity. Members with conflicts of interest on specific platform
              issues recuse from those decisions.
            </p>

            {/* How the Platform Is Built */}
            <h2 className="text-2xl font-display font-bold text-[#1a2a4a]">
              How the Platform is built
            </h2>
            <p>
              The Common Ground Platform is a benchmark — a published,
              evidence-based representation of what Americans across party lines
              have demonstrated they want from their federal government.
            </p>
            <p>
              <strong className="text-[#1a2a4a]">Eligibility criteria</strong>{" "}
              define the candidate pool. A policy qualifies for consideration when
              it meets all three:
            </p>
            <ul>
              <li>
                <strong className="text-[#1a2a4a]">Supermajority support:</strong>{" "}
                ≥60% overall
              </li>
              <li>
                <strong className="text-[#1a2a4a]">Bipartisan support:</strong>{" "}
                ≥50% among both Republican and Democratic respondents
              </li>
              <li>
                <strong className="text-[#1a2a4a]">
                  Constitutional rights compatibility:
                </strong>{" "}
                the policy operates within the limits the Bill of Rights places on
                government action
              </li>
            </ul>
            <p>
              The first two thresholds are quantitative — published, fixed, and not
              adjusted to produce a desired outcome. The third is a constitutional
              constraint, not a caveat. A policy with overwhelming public support
              that would abridge a right protected by the Bill of Rights has no
              place on the Platform — however large the majority. American
              democracy was built on two foundational commitments: democratic
              accountability and individual liberty. The Platform honors both.
            </p>
            <p>
              <strong className="text-[#1a2a4a]">Selection criteria</strong> narrow
              the candidate pool to the Core Platform. The Advisory Panel evaluates
              qualifying policies on:
            </p>
            <ul>
              <li>
                <em>Importance</em> — salience to the public, frequency of mention
                across surveys
              </li>
              <li>
                <em>National scope</em> — clear federal responsibility, broad
                recognition
              </li>
              <li>
                <em>Clarity</em> — understandable in one sentence, specific enough
                to measure
              </li>
              <li>
                <em>Durability</em> — stability of support across time and polling
                sources
              </li>
              <li>
                <em>Measurability</em> — observable outcomes, assessable alignment
                with government action
              </li>
              <li>
                <em>Domain balance</em> — avoiding overrepresentation of any single
                policy area
              </li>
            </ul>
            <p>
              The Core Platform targets 10–15 planks — enough to be comprehensive,
              few enough to be memorable and actionable.
            </p>
            <p>
              All qualifying policies — whether or not they appear in the Core
              Platform — are published in the Supporting Findings database, with
              documented rationale for inclusion or exclusion. Citizens can examine
              the full candidate pool, not just the final selection.
            </p>
            <p>
              The Platform is reviewed on a two-year cycle, aligned with midterm
              elections, using the same published criteria. Any revision requires
              the same documented rationale as the original selection.
            </p>

            {/* How the Scorecard Works */}
            <h2 className="text-2xl font-display font-bold text-[#1a2a4a]">
              How the Scorecard works
            </h2>
            <p>
              The Common Ground Scorecard measures whether elected officials are
              delivering on the Platform.
            </p>
            <p>
              Scoring criteria are developed by the Advisory Panel and approved by
              the Executive Team. The methodology — how votes, statements, and
              policy outcomes are weighted and evaluated — is published and
              explained in plain language. Scores are documented, not just
              reported; the reasoning behind each score is available for public
              review.
            </p>

            {/* Funding Independence */}
            <h2 className="text-2xl font-display font-bold text-[#1a2a4a]">
              Funding independence
            </h2>
            <p>
              Common Ground is currently self-funded by its founder and accepts no
              donations during the launch period. As a matter of charter
              commitment, Common Ground does not accept contributions from
              political parties, party committees, or partisan political
              organizations. We do not accept contributions that create
              concentration risk — where a single source represents a
              disproportionate share of our funding. Donor information is disclosed
              in accordance with nonprofit reporting requirements. We do not accept
              restricted gifts that direct the content or conclusions of the
              Platform or Scorecard.
            </p>
            <p>These are charter commitments, not preferences.</p>

            {/* A Note on Where We Are */}
            <h2 className="text-2xl font-display font-bold text-[#1a2a4a]">
              A note on where we are
            </h2>
            <p>
              Common Ground is currently in its founding stage. The governance
              structures described here represent both our current commitments and
              our intended evolution. The Board is being established. The Advisory
              Panel is being recruited. The founder serves in the executive role
              during this phase, with the intention — and the structural commitment
              — that full governance separation will develop as the organization
              grows.
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
            <p>
              We are describing the destination honestly, not claiming to have
              arrived.
            </p>
            <p>
              None of this requires extraordinary people. It simply requires a
              structure designed with the right incentives. It&apos;s our job as
              citizens to build it.
            </p>
          </div>

          <div className="mt-10">
            <Link
              href="/governance/"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#1a2a4a] text-white font-semibold rounded-lg hover:bg-[#2a3f6e] transition-colors"
            >
              ← Back to Governance &amp; Transparency
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
