import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { RATIONALE_HTML } from "./content";
import "./platform-rationale.css";

export const metadata: Metadata = {
  title: "The Platform Selection Rationale",
  description:
    "The public record of how the Common Ground Platform is chosen — why each policy is included or excluded, held to published criteria and documented reasoning.",
  alternates: { canonical: "/governance/platform-rationale/" },
};

export default function PlatformRationalePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main id="main-content" className="flex-1">
        <article
          className="cg-rationale"
          dangerouslySetInnerHTML={{ __html: RATIONALE_HTML }}
        />
      </main>
      <Footer />
    </div>
  );
}
