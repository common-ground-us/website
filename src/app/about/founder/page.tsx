import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "A Message from the Founder",
  description: "Why I started Common Ground — from Keith Lietzke, founder.",
  alternates: { canonical: "/about/founder/" },
};

export default function FounderPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main id="main-content" className="flex-1">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8 mb-8">
            <Image
              src="/images/keith-lietzke-400.webp"
              alt="Keith Lietzke, founder of Common Ground"
              width={400}
              height={400}
              priority
              className="w-32 h-32 sm:w-40 sm:h-40 shrink-0 rounded-full object-cover bg-white ring-4 ring-[#e2e8f0]"
            />
            <div>
              <h1 className="text-3xl sm:text-4xl font-display font-bold text-[#1a2a4a]">
                A Message from the Founder
              </h1>
              <p className="mt-2 text-[#4a5568]">Keith Lietzke, Founder</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none text-[#4a5568] space-y-6">
            {/* Section 1 — Who I Am (and Where I Stand) */}
            <p>
              I am seventy-five years old. I have spent a lifetime following this
              country&apos;s politics — voting in every election, staying
              informed, occasionally fired up about a particular issue. By most
              measures, I am an engaged citizen.
            </p>
            <p>
              My friends think I should do more. They have a point. I try.
              Something always stops me.
            </p>

            {/* Section 2 — The Wall */}
            <p>
              It isn&apos;t the partisan part. Partisanship I understand — people
              disagree, sometimes deeply, and democracy is the system we built for
              working through that. What I can&apos;t navigate is the adversarial
              part. Getting engaged seems to mean joining a side — or being
              claimed by one. Adopting a tribe&apos;s whole view of the world, its
              enemies and its allies. That posture is at odds with everything the
              word civic is supposed to mean. I am not built for it.
            </p>

            {/* Section 3 — The Origin */}
            <p>Then something started to shift.</p>
            <p>
              I have friends whose television is reliably tuned to Fox News when we
              visit. One of them also composts and saves rainwater. I used to
              think those two facts were in tension. I&apos;m no longer sure they
              are.
            </p>
            <p>
              That moment — small, ordinary — stayed with me. It made me wonder
              how often I was reading my fellow citizens the way the partisan media
              wanted me to read them. How often I was missing the actual person in
              front of me.
            </p>

            {/* Section 4 — The Validation */}
            <p>Before I built anything, I wanted to test the instinct.</p>
            <p>
              I interviewed fourteen people, one at a time. Conservatives,
              liberals, in-betweens, the politically tired. Almost every
              conversation surfaced the same beat: when I showed them the actual
              data on what Americans across party lines agree on, they said some
              version of, &ldquo;I didn&apos;t realize we agreed on that.&rdquo;
            </p>
            <p>
              Several of them said it produced hope. One — a Republican woman —
              said she nearly teared up. &ldquo;I felt recognized,&rdquo; she said.
            </p>
            <p>That&apos;s when I knew the instinct held.</p>

            {/* Section 5 — What I Built */}
            <p>Common Ground is what I built from that.</p>
            <p>
              The premise is simple: Americans agree on far more than our politics
              reflects, and the system — not the other side — is what&apos;s
              failing the country. There is something we can do about that. Not by
              joining a side. By making what we already share visible, measurable,
              and usable.
            </p>
            <p>
              I did not want to build a movement. I wanted to build infrastructure.
              Like electricity or water — something that just works, that anyone
              can use, that has no agenda but the public&apos;s.
            </p>

            {/* Section 6 — The Invitation */}
            <p>
              If any of this resonates — if you&apos;ve felt the same wall, or the
              same wonder, or the same quiet refusal to write off your fellow
              citizens — you are not alone. You are part of something this country
              has not stopped being: a citizenry that holds more in common than the
              noise allows us to see.
            </p>
            <p>
              I am building Common Ground because I believe this. I&apos;d value
              your company.
            </p>

            <p className="font-medium text-[#1a2a4a]">— Keith Lietzke, Founder</p>
          </div>

          {/* CTA */}
          <div className="mt-10">
            <Link
              href="/get-involved/"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#1a2a4a] text-white font-semibold rounded-lg hover:bg-[#2a3f6e] transition-colors"
            >
              Stand to be counted → Get Involved
            </Link>
          </div>

          <div className="mt-8">
            <Link
              href="/about/"
              className="text-[#1a56c4] underline hover:no-underline"
            >
              ← Back to About
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
