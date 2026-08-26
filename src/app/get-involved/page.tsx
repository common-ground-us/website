import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PledgeEmbed from "@/components/PledgeEmbed";

export const metadata = {
  title: { absolute: "Take the Pledge | Common Ground" },
  description:
    "Add your name to the Common Ground Pledge — a public statement that government should act on what large majorities across both parties already agree on.",
  alternates: { canonical: "/get-involved/" },
  openGraph: {
    type: "website",
    title: "Take the Pledge — Common-Ground.US",
    description:
      "A public statement that a healthier balance between what unites and divides us is worth working toward. 30 seconds.",
    images: [{ url: "/og-image.png", width: 1200, height: 627 }],
  },
  twitter: { card: "summary_large_image", images: ["/og-image.png"] },
};

export default function GetInvolvedPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main id="main-content" className="flex-1">
        <div className="max-w-[760px] mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-[#1a2a4a] mb-4">
            Get Involved
          </h1>

          <p className="text-lg sm:text-xl leading-relaxed text-[#384253] mb-6">
            Add your name to the list of people willing to publicly stand up for
            the core principle that Government Should Be Accountable to the Will
            of the People.
          </p>

          <p className="text-[#4a5568] leading-relaxed mb-4">
            Across party lines, Americans agree on far more than is commonly
            thought: dozens of specific federal policies with two-thirds support
            in both parties. But agreement that stays private changes nothing. The
            Pledge is how that agreement becomes visible — and how citizens who
            share it find one another.
          </p>

          <details className="group border border-[#e2e8f0] rounded-xl mb-6 bg-white">
            <summary className="cursor-pointer list-none px-5 py-4 font-display font-semibold text-[#1a2a4a] flex items-center justify-between">
              Why the Pledge matters
              <span className="text-[#718096] transition-transform group-open:rotate-180">▾</span>
            </summary>
            <div className="px-5 pb-5 pt-0 text-[#4a5568] leading-relaxed space-y-4 border-t border-[#e2e8f0]">
              <p className="pt-4">
                As Hannah Arendt observed, political power in a democracy belongs
                to the people, but it can only be exercised to the extent that
                they <em>act in concert.</em> Isolated conviction changes little;
                an organized constituency changes everything.
              </p>
              <p>
                The Pledge turns private agreement into a public, visible
                constituency — connecting like-minded citizens so we can act in
                concert. It displays only your name and state, and unlike most
                political fights, there&rsquo;s no opposing side. Who can argue that
                two-thirds bipartisan consensus isn&rsquo;t worth pursuing?
              </p>
              <p>
                More information{" "}
                <a
                  href="/finding-common-ground/"
                  className="text-[#b22234] underline underline-offset-2 hover:text-[#8e1b29]"
                >
                  &ldquo;Finding Common Ground&rdquo; →
                </a>
              </p>
            </div>
          </details>

          {/* ── The Pledge form (inline Tally embed → redirects to /thank-you) ── */}
          <section className="border border-[#e2e8f0] rounded-xl bg-white p-6 sm:p-8">
            <h2 className="text-2xl font-display font-bold text-[#1a2a4a] mb-2">
              Take the Pledge
            </h2>
            <p className="text-[#4a5568] leading-relaxed mb-5">
              It takes about 30 seconds. We ask only for what the Pledge List
              needs — your name and state — plus an email and ZIP so we can send
              you a quarterly, ready-to-send message for your representatives.
            </p>

            <PledgeEmbed />

            <p className="text-sm text-[#718096] mt-4">
              Privacy: your name and state are listed publicly on the Pledge List;
              your email and ZIP are not.{" "}
              <a
                href="/privacy/"
                className="underline underline-offset-2 hover:text-[#4a5568]"
              >
                Read our privacy policy
              </a>
              .
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
