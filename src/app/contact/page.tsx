import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact",
  description: "Contact Common Ground.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main id="main-content" className="flex-1">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-[#1a2a4a] mb-8">
            Contact
          </h1>
          <div className="prose prose-lg max-w-none text-[#4a5568] space-y-6">
            <p>
              Have a question, correction, or suggestion? This page will host a
              contact form so you can reach the Common Ground team.
            </p>
            {/* A Google Form will be embedded/linked here as the contact form. */}
            <p className="text-[#6b7280] italic">Full content coming soon.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
