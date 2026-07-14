import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: {
    absolute: "About | Common Ground — What Americans Want from Their Government",
  },
  description:
    "Common Ground is nonpartisan civic infrastructure curating peer-reviewed research on what Americans want from their government. About the initiative.",
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main id="main-content" className="flex-1">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-[#1a2a4a] mb-8">
            Common Ground&apos;s Mission: Make Government Accountable to the Will
            of the People.
          </h1>

          <div className="prose prose-lg max-w-none text-[#4a5568] space-y-6">
            {/* Section 1 — What we are */}
            <h2 className="text-2xl font-display font-bold text-[#1a2a4a]">
              What we are
            </h2>
            <p>
              Common Ground is civic infrastructure that converts individual
              civic potential into collective agency.
            </p>
            <p>
              It makes the substantial cross-partisan agreement on policy that
              already exists among American citizens — visible, measurable, and
              usable. Where Americans agree, the data is plain. Where government
              delivers, or fails to, the record is plain. Citizens make their own
              conclusions.
            </p>
            <p>
              Think of it as utility infrastructure, in the way electricity or
              water are utilities — serious, dependable, no-agenda. Not a
              movement. Not a party. Not a campaign.
            </p>

            {/* Section 2 — Why we exist */}
            <h2 className="text-2xl font-display font-bold text-[#1a2a4a]">
              Why we exist
            </h2>
            <p>
              Government outcomes routinely fail to align with what Americans
              actually want. This is not opinion. In 2014, Princeton and
              Northwestern political scientists Gilens and Page analyzed 1,779
              federal policy decisions and found that the preferences of average
              citizens have near-zero independent influence on outcomes when
              economic elites oppose them.
              <sup>
                <a href="#fn1" className="text-[#1a56c4] no-underline hover:underline">
                  1
                </a>
              </sup>
            </p>
            <p>
              Citizens feel this. Eighty-three percent say their elected
              officials don&apos;t care what they think — up from 55% in the early
              2000s.
              <sup>
                <a href="#fn2" className="text-[#1a56c4] no-underline hover:underline">
                  2
                </a>
              </sup>{" "}
              Roughly 80% of young Americans are skeptical that democratic
              institutions deliver fair laws, equal treatment, or meaningful
              representation.
              <sup>
                <a href="#fn3" className="text-[#1a56c4] no-underline hover:underline">
                  3
                </a>
              </sup>
            </p>
            <p>
              And yet — across 82 federal policies, Americans across party lines
              demonstrably agree. The disconnect is not a failure of the public.
              It is a failure to make public agreement visible and consequential.
            </p>
            <p>Common Ground exists to close that gap.</p>

            {/* Section 3 — How we work */}
            <h2 className="text-2xl font-display font-bold text-[#1a2a4a]">
              How we work
            </h2>
            <p>
              Common Ground curates findings from established public-opinion
              research and translates them into citizen-facing utility. The
              primary source is the University of Maryland&apos;s Program for
              Public Consultation, whose deliberative-polling methodology surfaces
              what citizens actually think when given balanced briefings.
              Stanford University&apos;s Deliberative Democracy Lab, which
              collaborated with PPC on the 2024 Common Ground of the American
              People report, lends additional methodological rigor. Supplementary
              data comes from Pew, KFF, Gallup, More in Common, Harvard
              CAPS/Harris, and other peer-reviewed sources.
            </p>
            <p>Four tools deliver this information to citizens:</p>
            <ul>
              <li>
                <strong className="text-[#1a2a4a]">The Look-Up Tool</strong> lets
                anyone find research results on any of the policies studied.
              </li>
              <li>
                <strong className="text-[#1a2a4a]">The Platform</strong> names ten
                to fifteen policies on which broad bipartisan supermajorities
                agree — a documented standard, the baseline a representative
                democracy should reasonably be expected to reflect.
              </li>
              <li>
                <strong className="text-[#1a2a4a]">The Scorecard</strong> measures
                how Congress&apos;s votes align with the Platform.
              </li>
              <li>
                <strong className="text-[#1a2a4a]">The Gap Analysis</strong>{" "}
                diagnoses the distance between what Americans want and what
                government delivers, annually.
              </li>
            </ul>
            <p>
              <Link
                href="/roadmap/"
                className="text-[#1a56c4] underline hover:no-underline"
              >
                See the full Product Roadmap →
              </Link>
            </p>

            {/* Section 4 — What we are not */}
            <h2 className="text-2xl font-display font-bold text-[#1a2a4a]">
              What we are not
            </h2>
            <p>
              Common Ground is not a movement. Not a party. Not advocacy. Not a
              polling organization. Not a media outlet.
            </p>
            <p>
              We do not author the underlying research. We do not lobby for
              specific policies. We do not endorse candidates. We do not accept
              donations. We do not run advertising. We do not affiliate with any
              party.
            </p>
            <p>
              Our discipline is to <strong className="text-[#1a2a4a]">reveal</strong>,
              not create. The common ground already exists in the data. Our job is
              to show it — and make it usable.
            </p>

            {/* Section 5 — Why now */}
            <h2 className="text-2xl font-display font-bold text-[#1a2a4a]">
              Why now
            </h2>
            <p>
              Common Ground launches July 4, 2026 — America&apos;s 250th
              anniversary. It is the right civic moment to ask whether we are
              living up to our founding promise.
            </p>
            <p>
              The Preamble of the Constitution begins, &ldquo;We the People.&rdquo;
              It charges citizens — by founding mandate — to establish justice,
              insure domestic tranquility, promote the general welfare, secure the
              blessings of liberty. Two and a half centuries on, the question is
              not whether the People still have that charge. The question is
              whether we will see ourselves clearly enough to act on it.
            </p>

            {/* Section 6 — Why you can trust it */}
            <h2 className="text-2xl font-display font-bold text-[#1a2a4a]">
              Why you can trust it
            </h2>
            <p>
              Common Ground earns trust structurally, not rhetorically. We are
              guided by five principles:
            </p>
            <ul>
              <li>
                <strong className="text-[#1a2a4a]">Unbiased.</strong> The Platform
                reflects what Americans actually want, documented by rigorous
                research — not what any faction or funder wants them to want.
              </li>
              <li>
                <strong className="text-[#1a2a4a]">Transparent.</strong> Every
                decision is documented and published.
              </li>
              <li>
                <strong className="text-[#1a2a4a]">Independent.</strong> Our work
                cannot be purchased. We are self-funded. We do not accept
                donations from political parties or concentrated sources.
              </li>
              <li>
                <strong className="text-[#1a2a4a]">Accountable.</strong> We report
                publicly on methodology and results.
              </li>
              <li>
                <strong className="text-[#1a2a4a]">Durable.</strong> We are built
                to outlast any founder or individual.
              </li>
            </ul>
            <p>
              <Link
                href="/governance/"
                className="text-[#1a56c4] underline hover:no-underline"
              >
                Read the full governance principles →
              </Link>
            </p>

            {/* Section 7 — Who we are */}
            <h2 className="text-2xl font-display font-bold text-[#1a2a4a]">
              Who we are
            </h2>
            <p>
              Common Ground was founded by Keith Lietzke. The Board and Advisory
              Panel are being established as the initiative grows.
            </p>
            <p>
              <Link
                href="/about/founder/"
                className="text-[#1a56c4] underline hover:no-underline"
              >
                Read the founder&apos;s message →
              </Link>
            </p>

            {/* Section 8 — What you can do */}
            <h2 className="text-2xl font-display font-bold text-[#1a2a4a]">
              What you can do
            </h2>
            <p>
              Common Ground compounds only through sharing. That makes the work
              answerable to one test: is the idea good enough that you want to
              spread it?
            </p>
            <p>
              Share this. Stand to be counted.{" "}
              <Link
                href="/get-involved/"
                className="text-[#1a56c4] underline hover:no-underline"
              >
                → Get Involved
              </Link>
            </p>
          </div>

          {/* Footnotes */}
          <div className="mt-12 pt-6 border-t border-[#e2e8f0] text-sm text-[#6b7280] space-y-2">
            <p id="fn1">
              <sup>1</sup> Gilens, M. &amp; Page, B.I.,{" "}
              <em>
                &ldquo;Testing Theories of American Politics: Elites, Interest
                Groups, and Average Citizens,&rdquo;
              </em>{" "}
              Perspectives on Politics, Vol. 12 No. 3 (2014).
            </p>
            <p id="fn2">
              <sup>2</sup> Pew Research Center,{" "}
              <em>
                &ldquo;More Than 80% of Americans Say Elected Officials Don&apos;t
                Care What They Think,&rdquo;
              </em>{" "}
              April 2024.{" "}
              <a
                href="https://www.pewresearch.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1a56c4] underline hover:no-underline"
              >
                Link
              </a>
            </p>
            <p id="fn3">
              <sup>3</sup> CIRCLE, Tufts University, April 2025.{" "}
              <a
                href="https://now.tufts.edu/2025/04/11/most-young-people-support-democracy-many-are-skeptical-it-works-them"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1a56c4] underline hover:no-underline"
              >
                Link
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
