import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main
        id="main-content"
        className="flex-1 flex items-center justify-center px-4 sm:px-6 py-20"
      >
        <div className="max-w-md text-center">
          <p className="font-display text-[64px] leading-none font-extrabold text-[#1a2a4a]">
            404
          </p>
          <h1 className="font-display text-2xl font-bold text-[#1a2a4a] mt-2">
            Page not found
          </h1>
          <p className="text-[#4a5568] mt-3">
            The page you&rsquo;re looking for doesn&rsquo;t exist or may have moved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-5 py-2.5 bg-[#1a2a4a] text-white font-semibold rounded-lg hover:bg-[#2a3f6e] transition-colors"
            >
              Back to home
            </Link>
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center px-5 py-2.5 border border-[#1a2a4a] text-[#1a2a4a] font-semibold rounded-lg hover:bg-[#f5f6f8] transition-colors"
            >
              Contact us
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
