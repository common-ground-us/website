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
        <div className="max-w-lg text-center">
          <p className="font-display text-[64px] leading-none font-extrabold text-[#1a2a4a]">
            404
          </p>
          <h1 className="font-display text-2xl font-bold text-[#1a2a4a] mt-2">
            Page not found
          </h1>
          <p className="text-[#4a5568] mt-3">
            This page doesn&rsquo;t exist — or the link may have been broken in
            transit, which sometimes happens when an email is forwarded. If you
            were on your way to the essay or to add your name, here&rsquo;s where
            you were probably headed:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
            <Link
              href="/revealing-common-ground/"
              className="inline-flex items-center justify-center px-5 py-2.5 bg-[#1a2a4a] text-white font-semibold rounded-lg hover:bg-[#2a3f6e] transition-colors"
            >
              Read &ldquo;Revealing Common Ground&rdquo;
            </Link>
            <Link
              href="/get-involved/"
              className="inline-flex items-center justify-center px-5 py-2.5 bg-[#b22234] text-white font-semibold rounded-lg hover:bg-[#8e1b29] transition-colors"
            >
              Stand Up and Be Counted
            </Link>
          </div>
          <p className="text-[#718096] mt-6 text-sm">
            Or go to the{" "}
            <Link href="/" className="underline underline-offset-2 hover:text-[#4a5568]">
              home page
            </Link>{" "}
            ·{" "}
            <Link href="/contact/" className="underline underline-offset-2 hover:text-[#4a5568]">
              contact us
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
