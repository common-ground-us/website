import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VolunteerForm from "@/components/VolunteerForm";

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
          <div className="prose prose-lg max-w-none text-[#4a5568] space-y-6 mb-8">
            <p>
              Common Ground is an all-volunteer effort. Sign up below to let
              us know how you&apos;d like to get involved.
            </p>
          </div>
          <VolunteerForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
