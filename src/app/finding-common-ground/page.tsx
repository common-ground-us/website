import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./finding-common-ground.css";

export const metadata: Metadata = {
  title: "Finding Common Ground",
  description:
    "Ordinary Americans have near-zero influence on federal policy when their views diverge from elites — yet across party lines we agree on far more than our politics suggests. Why Common Ground exists.",
  alternates: { canonical: "/finding-common-ground/" },
  openGraph: {
    type: "article",
    title: "Finding Common Ground",
    description:
      "Across party lines, Americans agree on dozens of federal policies Congress doesn't act on. Common-Ground.US exists to make that agreement visible — and to act on it.",
    images: [{ url: "/og-image.png", width: 1200, height: 627 }],
  },
  twitter: { card: "summary_large_image", images: ["/og-image.png"] },
};

// Every CG link inside this forwardable page carries ?src=forward so onward
// arrivals route to the Version B auto-responder (per Tally Handoff v2, Task 0).
const PLEDGE = "/get-involved/?src=forward";

export default function FindingCommonGroundPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main id="main-content" className="flex-1">
        <article className="cg-essay">
          <p className="kicker">A note from the founder</p>
          <h1>Finding Common Ground</h1>
          <p className="byline">By Keith Lietzke, Founder</p>

          <div className="tldr">
            <span className="tldr-tag">TL;DR</span>
            <p>
              A landmark Princeton &amp; Northwestern analysis found that ordinary
              Americans have &ldquo;near-zero&rdquo; influence on federal policy
              when their views diverge from elites. And despite broad agreement
              across party lines on many specific federal policies, Congress
              doesn&rsquo;t act. Common-Ground.US exists to make that agreement
              visible — and to build the collective voice to act on it. ~10 min read.
            </p>
          </div>

          <p>
            I&rsquo;ve been working on something I believe could fundamentally
            improve how Democracy works in our country. I know that sounds
            audacious – and so it is.
          </p>
          <p>
            Today, our government is failing to reflect the Will of the People.
            That&rsquo;s not just my opinion, or something you just feel –
            it&rsquo;s a recognized fact in political science.
          </p>
          <p>
            Professors at Princeton &amp; Northwestern analyzed 1,779 policy
            issues over two decades. Their finding: when ordinary citizens&rsquo;
            preferences diverge from those of economic elites and organized
            interest groups,
          </p>
          <blockquote>
            &ldquo;the preferences of the average American appear to have only a
            minuscule, near-zero, statistically non-significant impact upon public
            policy.&rdquo;
          </blockquote>
          <p className="cite">
            Gilens, M. &amp; Page, B.I., &ldquo;Testing Theories of American
            Politics: Elites, Interest Groups, and Average Citizens,&rdquo;
            Perspectives on Politics, Vol. 12 No. 3, 2014
          </p>
          <p>
            This is the problem I want to address. It&rsquo;s the dragon I seek to slay.
          </p>

          <h2>My ambitious mission: Making Government Accountable to the Will of the People</h2>
          <p>It&rsquo;s easy to wonder if we&rsquo;re simply too divided for democracy to work.</p>
          <p>
            But when we step past the cultural silos and focus on actual policies,
            there&rsquo;s widespread agreement. It&rsquo;s just being drowned out
            and splintered.
          </p>
          <p>
            The University of Maryland&rsquo;s Program for Public Consultation —
            highly respected and widely cited by academics — has spent two decades
            documenting common ground. Their method — briefing participants on each
            policy&rsquo;s pros and cons before asking their view — cuts past the
            reactive noise of standard polling.
          </p>
          <p>
            In May, PPC reported 88 distinct federal policies with two-thirds
            support among both Republican and Democrat voters. Nearly none are
            moving through Congress.
          </p>
          <p>
            For example, universal background checks for gun purchases – ban
            congressional stock trading – allow the government to negotiate drug
            prices like other countries do – establish a code of ethics for the
            Supreme Court … The list is long.
          </p>
          <p>
            <strong>The Perception Gap:</strong> Democrats assume a minority of
            Republicans favor stronger gun safety regulations — actually
            two-thirds do. Republicans assume a majority of Democrats want open
            borders — actually only a third do.
          </p>
          <p>
            Of course, there are important flashpoints of disagreement that are
            very difficult to resolve. But where there is two-thirds popular
            support in both parties, it&rsquo;s reasonable for the People to expect
            enactment of such policies.
          </p>
          <p>
            And if it&rsquo;s not happening, it begs the question: &ldquo;why
            not?&rdquo; And &ldquo;can we fix it?&rdquo;
          </p>

          <h2>Just Powers from the Consent of the Governed</h2>
          <p>
            What happens when the government consistently deviates from the will of
            the people? Trust falls – and this is what we are seeing.
          </p>
          <figure className="essay-figure">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/decliningTrustChart.png"
              alt="Line chart: the share of Americans who say they trust the government in Washington to do what is right has fallen from about 75% in 1958 to roughly 17% in 2025. Source: Pew Research Center."
              width={1159}
              height={742}
              loading="lazy"
            />
            <figcaption>
              Public trust in government has fallen from about 75% in 1958 to
              roughly 17% today. (Pew Research Center)
            </figcaption>
          </figure>
          <p>
            Fortunately, there is potential for remedy – because the constitution
            gives the People ultimate power to create, alter, or dissolve the government.
          </p>
          <p>
            But as well-respected political theorist Hannah Arendt observed:
          </p>
          <blockquote>
            Political power in a democracy belongs to the people, but it can only
            be exercised to the extent that they <em>act in concert.</em>
          </blockquote>

          <h2>Our Common Ground</h2>
          <p>
            I&rsquo;m building Common-Ground.US to make Americans&rsquo; agreement
            so visible that it is impossible to ignore – that&rsquo;s{" "}
            <strong>Goal #1</strong>. Our website provides an easy look-up tool,
            making it simple for anyone to explore policies backed by
            bipartisan-supermajority support. We don&rsquo;t author the research —
            that&rsquo;s done by leading academic institutions and top polling
            specialists like Pew Research, Gallup and KFF.
          </p>
          <p>
            The{" "}
            <a href="/platform/?src=forward">Common Ground Platform</a> covers 9
            planks, each with bipartisan-supermajority policies – that if enacted
            would move our government in a very positive direction. Planks covering Government Performance, Too Much Money in
            Politics and Healthcare, to name just a few. The Platform will evolve
            over time, but the criteria will remain the same: the policy must have
            supermajority (⅔) support in both parties – and it must respect our
            individual rights.
          </p>

          <h2>Acting in Concert</h2>
          <p>
            Our approach is based on Hannah Arendt&rsquo;s observation that the
            People must act in concert if they want to assert their political
            power. Common Ground&rsquo;s <strong>Goal #2</strong> is to provide a
            rallying point for the People – giving people a way to act on it together – through two
            mechanisms:
          </p>
          <ul>
            <li>
              <strong>The Platform along with its principles:</strong> An
              objective, public digest showcasing the planks and policies that we
              can all point to, representing what we agree on.
            </li>
            <li>
              <strong>The Pledge:</strong> A public declaration that connects
              like-minded citizens so we can act in concert.
            </li>
          </ul>
          <p>
            Citizens can express their alignment with the foundation of our
            democracy – A Government That&rsquo;s Accountable to the Will of the
            People – by taking a Pledge of Support for the principle and for the
            Platform that results from the Common Ground criteria.
          </p>
          <p>
            <strong>Why A Pledge?</strong> The public declaration of support is
            essential: without mutual awareness of each other, there can be no
            acting in concert. The Pledge only displays your name and state, unlike
            standard petitions that expose your full street address. Better yet,
            unlike typical political battles, there is no opposing side – who can
            argue that two-thirds bipartisan consensus isn&rsquo;t worth pursuing?
          </p>
          <p>
            <strong>What Am I Asking of You?</strong> I&rsquo;m not asking you to
            blindly take the Pledge. My request is simpler: take a few minutes to
            look it over. If it aligns with your principles, I&rsquo;d love for you
            to pledge.
          </p>
          <p>
            If it doesn&rsquo;t resonate, I&rsquo;d be very grateful if you reached
            out to tell me why. If you&rsquo;re skeptical, bring that skepticism —
            your perspective will help me build something better.
          </p>

          <h2>The Common Ground Pledge</h2>
          <div className="pledge-box">
            <p>
              I support the Common Ground principle: that when supermajorities
              across party lines agree on policies that respect individual
              constitutional rights, government should act on those policies.
            </p>
            <p>
              The Common Ground Platform — 9 planks meeting those criteria
              today — is the principle in action; the Platform will evolve
              as agreement shifts and as planks become law. When each Platform
              version publishes, I will ask my Representative and Senators to act on
              it, or to explain why not.
            </p>
            <p>I know not every plank will be my preference. I value action on documented common ground.</p>
            <p>
              This Pledge complements — it does not preclude — advocacy for causes
              without such consensus. Many essential expansions of civic and
              constitutional protection came through minority advocacy against
              majority opinion. That work remains vital.
            </p>
          </div>

          <div className="signoff">
            <p>If any of this resonates, you can show your support here:</p>
            <a className="cta" href={PLEDGE}>Take the Pledge</a>
            <p style={{ marginTop: 18 }}>
              Either way, I&rsquo;d value your reactions — supportive, skeptical,
              or somewhere in between. And if you know friends or family thinking
              about these same things, please do forward this along.
            </p>
            <p>
              Heartfelt thanks,
              <br />
              <strong>Keith</strong>
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
