import type { Metadata, Viewport } from "next";
import { Mulish, Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import { Suspense } from "react";
import { ServiceWorkerRegistrar } from "@/components/ServiceWorkerRegistrar";
import { InstallPrompt } from "@/components/InstallPrompt";
import ShareButton from "@/components/ShareButton";
import { AnalyticsRouteTracker } from "@/components/AnalyticsRouteTracker";
import "./globals.css";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

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

const HOME_DESCRIPTION =
  "Common Ground makes visible what Americans want from their government — the policies where supermajorities of Democrats and Republicans already agree.";

export const metadata: Metadata = {
  title: {
    default: "Common Ground | What Americans Want from Their Government",
    template: "%s | Common Ground",
  },
  description: HOME_DESCRIPTION,
  keywords: ["bipartisan", "policy", "public opinion", "polling", "common ground"],
  metadataBase: new URL("https://www.common-ground.us"),
  openGraph: {
    type: "website",
    siteName: "Common Ground",
    title: "Common Ground — What Americans Want from Their Government",
    description: HOME_DESCRIPTION,
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Common Ground — What Americans Want from Their Government",
    description: HOME_DESCRIPTION,
  },
  verification: {
    google: "CJM6tVCzBomQE60P5H6QkY_49AIZZK2A1Itua1clcbA",
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
        {GTM_ID && (
          <Script id="gtm-init" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
          </Script>
        )}
      </head>
      <body className="min-h-full flex flex-col">
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        <ServiceWorkerRegistrar />
        <Suspense fallback={null}>
          <AnalyticsRouteTracker />
        </Suspense>
        {children}
        <ShareButton />
        <InstallPrompt />
      </body>
    </html>
  );
}
