import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PlatformClient from "./PlatformClient";

export const metadata = {
  title: "The Platform",
  description:
    "The Common Ground Platform — nine planks of federal policies with bipartisan supermajority support (more than two-thirds in both parties), with the data behind each and where it stands.",
  alternates: { canonical: "/platform/" },
};

export default function PlatformPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main id="main-content" className="flex-1">
        <PlatformClient />
      </main>
      <Footer />
    </div>
  );
}
