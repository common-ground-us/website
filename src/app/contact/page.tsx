import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForms from "@/components/ContactForms";

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
          <p className="prose prose-lg max-w-none text-[#4a5568] mb-8">
            Have a question, correction, or suggestion? Choose the option
            below that best fits your inquiry.
          </p>
          <ContactForms />
        </div>
      </main>
      <Footer />
    </div>
  );
}
