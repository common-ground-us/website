import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy",
  description:
    "Common Ground's privacy policy — what we collect, how it's used, and your choices.",
  alternates: { canonical: "/privacy/" },
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main id="main-content" className="flex-1">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-[#1a2a4a] mb-2">
            Privacy Policy
          </h1>
          <p className="text-sm text-[#6b7280] mb-8">Last updated: June 24, 2026</p>

          <div className="prose prose-lg max-w-none text-[#4a5568] space-y-6">
            <p>
              Common Ground is an all-volunteer nonprofit. We believe privacy is
              part of serving the public good, so we keep our data practices
              simple and minimal.
            </p>

            <h2 className="text-2xl font-display font-bold text-[#1a2a4a]">
              Information We Collect
            </h2>
            <p>
              This website does not require an account, and we do not collect
              personal information simply because you browse it. We do not sell
              your data, and we do not run advertising.
            </p>
            <p>
              The only places where you can submit personal information are the
              forms on our{" "}
              <Link
                href="/get-involved/"
                className="text-[#1a56c4] underline hover:no-underline"
              >
                Get Involved
              </Link>{" "}
              and{" "}
              <Link
                href="/contact/"
                className="text-[#1a56c4] underline hover:no-underline"
              >
                Contact
              </Link>{" "}
              pages. These are Google Forms. Any information you choose to enter
              — such as your name, email address, or message — is submitted to
              and stored by Google on our behalf, and is also handled under{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1a56c4] underline hover:no-underline"
              >
                Google&apos;s Privacy Policy
              </a>
              .
            </p>

            <h2 className="text-2xl font-display font-bold text-[#1a2a4a]">
              How We Use Information
            </h2>
            <p>
              We use information you submit through those forms only to respond
              to you, coordinate volunteers, and follow up on questions or
              suggestions. We do not use it for advertising and we do not sell or
              rent it to anyone.
            </p>

            <h2 className="text-2xl font-display font-bold text-[#1a2a4a]">
              Data Retention &amp; Your Choices
            </h2>
            <p>
              We keep form submissions only as long as needed for the purpose you
              contacted us about. If you&apos;d like us to delete information you
              previously submitted, contact us and we will remove it.
            </p>

            <h2 className="text-2xl font-display font-bold text-[#1a2a4a]">
              Contact
            </h2>
            <p>
              Questions about this policy? Reach us through our{" "}
              <Link
                href="/contact/"
                className="text-[#1a56c4] underline hover:no-underline"
              >
                Contact
              </Link>{" "}
              page.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
