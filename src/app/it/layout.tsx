import type { Metadata } from "next";
import "../globals.css";
import { inter, montserrat, playfair } from "../fonts";
import JsonLd from "@/components/JsonLd";
import RootShell from "@/components/RootShell";

// ── Root layout for the Italian site (/it/*) ────────────────────────────────
// See src/app/(site)/layout.tsx for why this project has two root layouts
// instead of one shared layout.tsx. This one sets lang="it" server-side, on
// the very first response — no client-side script correction needed, which
// is what previously caused the "hreflang doesn't match html lang" issue
// flagged by crawlers (the old fix mutated document.documentElement.lang
// after hydration, too late for crawlers that read the raw HTML).

export const metadata: Metadata = {
  metadataBase: new URL("https://www.italytaxiservice.com"),
  title: {
    default: "Taxi Privato in Italia | Transfer e Noleggio con Conducente | Italy Taxi Service",
    template: "%s | Italy Taxi Service"
  },
  description: "Il miglior servizio di taxi privato in Italia. Autisti professionisti e flotta di veicoli per transfer aeroportuali e tour in città.",
  keywords: ["Taxi Italia", "Transfer Aeroportuali Italia", "Autista Privato Italia", "Taxi di Lusso Italia", "Taxi Aeroporto Roma", "Transfer Milano"],
  // Ogni pagina definisce il proprio canonical e (dove esiste una traduzione
  // reale) i propri alternates hreflang tramite src/lib/i18n/page-registry.
  openGraph: {
    type: 'website',
    siteName: 'Italy Taxi Service',
    locale: 'it_IT',
    title: 'Taxi Privato in Italia | Transfer Aeroportuali e Noleggio con Conducente',
    description: 'Prenota un taxi privato premium in Italia. Transfer aeroportuali, trasferimenti città-città e tour privati con autisti professionisti.',
    images: [
      {
        url: '/images/hero.webp',
        width: 1200,
        height: 630,
        alt: 'Italy Taxi Service — Trasferimenti Privati in Italia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Taxi Privato in Italia | Italy Taxi Service',
    description: 'Prenota un taxi privato premium in Italia. Transfer aeroportuali, trasferimenti città-città e tour privati.',
    images: ['/images/hero.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function ItLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" suppressHydrationWarning>
      <head>
        <link
          rel="preload"
          as="image"
          href="/images/hero.webp"
          type="image/webp"
          fetchPriority="high"
        />
        <link
          rel="preload"
          as="image"
          href="/images/logo.webp"
          type="image/webp"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <JsonLd />
      </head>
      <body
        className={`${inter.variable} ${montserrat.variable} ${playfair.variable} antialiased font-inter`}
        suppressHydrationWarning
      >
        <RootShell>{children}</RootShell>
      </body>
    </html>
  );
}
