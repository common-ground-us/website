import type { Metadata, Viewport } from "next";
import { Mulish, Inter, JetBrains_Mono } from "next/font/google";
import { ServiceWorkerRegistrar } from "@/components/ServiceWorkerRegistrar";
import { InstallPrompt } from "@/components/InstallPrompt";
import ShareButton from "@/components/ShareButton";
import "./globals.css";

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "Common Ground — Tools for an Informed Citizenry",
    template: "%s | Common Ground",
  },
  description:
    "Americans have supermajority agreement on dozens of federal policies. Explore the evidence.",
  keywords: ["bipartisan", "policy", "public opinion", "polling", "common ground"],
  metadataBase: new URL("https://common-ground.us"),
  openGraph: {
    type: "website",
    siteName: "Common Ground",
    title: "Common Ground — Tools for an Informed Citizenry",
    description:
      "Americans have supermajority agreement on dozens of federal policies. Explore the evidence.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Common Ground",
    description: "Americans agree more than you think.",
  },
  appleWebApp: {
    capable: true,
    title: "Common Ground",
    statusBarStyle: "black-translucent",
  },
  other: {
    "mobile-web-app-capable": "yes",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1a2a4a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${mulish.variable} ${inter.variable} ${jetbrainsMono.variable} h-full`}
    >
      <head>
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
      </head>
      <body className="min-h-full flex flex-col">
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        <ServiceWorkerRegistrar />
        {children}
        <ShareButton />
        <InstallPrompt />
      </body>
    </html>
  );
}
