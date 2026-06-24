import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Terms of Use",
  description: "The terms of use for the Common Ground website.",
};

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main id="main-content" className="flex-1">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-[#1a2a4a] mb-2">
            Terms of Use
          </h1>
          <p className="text-sm text-[#6b7280] mb-8">Last updated: June 24, 2026</p>

          <div className="prose prose-lg max-w-none text-[#4a5568] space-y-6">
            <p>
              By accessing this website, you agree to these terms. Common Ground
              is operated by an all-volunteer nonprofit and is provided as a free
              civic resource.
            </p>

            <h2 className="text-2xl font-display font-bold text-[#1a2a4a]">
              Use of the Site
            </h2>
            <p>
              This site is provided for informational and civic-education
              purposes. You may read, share, and reference its content. Please
              don&apos;t use the site to break the law, to misrepresent our data,
              or in any way that disrupts or harms the service or other users.
            </p>

            <h2 className="text-2xl font-display font-bold text-[#1a2a4a]">
              Content &amp; Open Source
            </h2>
            <p>
              This website is open source. The code and data are available in our{" "}
              <a
                href="https://github.com/common-ground-us/website"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1a56c4] underline hover:no-underline"
              >
                public GitHub repository
              </a>
              , subject to the license terms published there. Third-party
              polling data referenced on the site remains the property of its
              respective sources, which are cited alongside each entry.
            </p>

            <h2 className="text-2xl font-display font-bold text-[#1a2a4a]">
              No Warranty
            </h2>
            <p>
              We work to keep the information here accurate and up to date, but
              the site is provided &ldquo;as is,&rdquo; without warranties of any
              kind. We are not liable for any loss arising from your use of, or
              reliance on, the site.
            </p>

            <h2 className="text-2xl font-display font-bold text-[#1a2a4a]">
              Changes
            </h2>
            <p>
              We may update these terms from time to time. Continued use of the
              site after changes take effect means you accept the revised terms.
            </p>

            <h2 className="text-2xl font-display font-bold text-[#1a2a4a]">
              Contact
            </h2>
            <p>
              Questions about these terms? Reach us through our{" "}
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
