import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Get Involved",
  description:
    "Get involved with Common Ground — volunteer, contribute, and help build tools for an informed citizenry.",
};

export default function GetInvolvedPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main id="main-content" className="flex-1">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-[#1a2a4a] mb-8">
            Get Involved
          </h1>
          <div className="prose prose-lg max-w-none text-[#4a5568] space-y-6">
            <p>
              Common Ground is an all-volunteer effort. This page will explain
              the ways you can contribute and will host a sign-up form for
              prospective volunteers.
            </p>
            {/* A Google Form will be embedded/linked here as the volunteer sign-up. */}
            <p className="text-[#6b7280] italic">Full content coming soon.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
