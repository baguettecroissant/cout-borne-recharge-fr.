import type { Metadata } from "next";
import { DM_Sans, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileCTA } from "@/components/ui/StickyMobileCTA";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cout-borne-recharge.fr"),
  title: "Prix Borne de Recharge 2026 — Devis Gratuit Installation IRVE",
  description:
    "Quel est le coût d'une borne de recharge pour voiture électrique ? Comparez les devis d'électriciens certifiés IRVE près de chez vous. 7kW, 11kW, 22kW.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Prix Borne de Recharge 2026 — Devis Gratuit Installation IRVE",
    description:
      "Comparez les prix d'installation de borne de recharge pour véhicule électrique. Devis gratuits d'installateurs IRVE.",
    url: "https://www.cout-borne-recharge.fr",
    siteName: "Cout-Borne-Recharge.fr",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prix Borne de Recharge 2026 — Devis Gratuit Installation IRVE",
    description:
      "Comparez les prix d'installation de borne de recharge. Devis gratuits d'installateurs IRVE.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Cout-Borne-Recharge.fr",
  url: "https://www.cout-borne-recharge.fr",
  logo: "https://www.cout-borne-recharge.fr/icon.png",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    areaServed: "FR",
    availableLanguage: "French",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Cout-Borne-Recharge.fr",
  url: "https://www.cout-borne-recharge.fr",
  description:
    "Comparateur de prix pour l'installation de bornes de recharge IRVE en France. Devis gratuits d'électriciens certifiés.",
  potentialAction: {
    "@type": "SearchAction",
    target:
      "https://www.cout-borne-recharge.fr/annuaire?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${dmSans.variable} ${geist.variable} ${geistMono.variable} font-sans antialiased text-slate-900 bg-slate-50 min-h-screen flex flex-col`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Header />
        <main className="flex-1 pb-16 md:pb-0">{children}</main>
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
