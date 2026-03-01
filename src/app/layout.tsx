import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { createMetadata } from "@/lib/seo/metadata";
import { OrganizationJsonLd, WebSiteJsonLd } from "@/components/seo/JsonLd";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Use the bundled Geist fonts as a local fallback.
// Space Grotesk and Inter are loaded via the CSS @import in globals.css
// so that they're available to the font-family declarations in Tailwind config.
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = createMetadata({
  title: "Content Empire - Piattaforma AI per Content Creator",
  description:
    "La piattaforma AI all-in-one per content creator. Genera, pubblica e monetizza i tuoi contenuti con l'intelligenza artificiale. Sostituisci 5-10 tool con un'unica soluzione.",
  path: "/",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={geistSans.variable}>
      <head>
        <OrganizationJsonLd />
        <WebSiteJsonLd />
      </head>
      <body className="font-body antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
