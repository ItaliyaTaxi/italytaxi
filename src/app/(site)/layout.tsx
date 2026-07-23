import type { Metadata } from "next";
import "../globals.css";
import { inter, montserrat, playfair } from "../fonts";
import JsonLd from "@/components/JsonLd";
import RootShell from "@/components/RootShell";

// ── Root layout for the English site ────────────────────────────────────────
// This is one of TWO root layouts (see src/app/it/layout.tsx for the other) —
// Next.js only allows a single <html> per rendered tree, so a shared route
// like the old top-level layout.tsx can't vary `lang` by URL without reading
// the request via a dynamic API, which forces the whole site out of static
// generation (verified the hard way — see git history). Splitting into two
// route-group-scoped root layouts is the documented way to get a correct
// <html lang> per section while keeping every page statically prerendered.
// Everything routed outside /it/* lives under the (site) group and renders
// through this layout with lang="en"; /it/* renders through it/layout.tsx.

export const metadata: Metadata = {
  metadataBase: new URL("https://www.italytaxiservice.com"),
  title: {
    default: "Private Taxi Service in Italy | Transfers | Italy Taxi Service",
    template: "%s | Italy Taxi Service"
  },
  description: "Experience the finest travel in Italy. Professional drivers and vehicle fleet for airport transfers and city tours.",
  keywords: ["Italy Taxi", "Airport Transfers Italy", "Private Driver Italy", "Luxury Taxi Italy", "Rome Airport Taxi", "Milan Transfer"],
  // Each page defines its own canonical and (where a real translation exists)
  // its own hreflang alternates via src/lib/i18n/page-registry.
  openGraph: {
    type: 'website',
    siteName: 'Italy Taxi Service',
    title: 'Private Taxi Service in Italy | Airport Transfers & City Tours',
    description: 'Book a premium private taxi in Italy. Airport transfers, city-to-city rides, and private tours with professional English-speaking drivers.',
    images: [
      {
        url: '/images/hero.webp',
        width: 1200,
        height: 630,
        alt: 'Italy Taxi Service — Private Transfers across Italy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Private Taxi Service in Italy | Airport Transfers & City Tours',
    description: 'Book a premium private taxi in Italy. Airport transfers, city-to-city rides, and private tours.',
    images: ['/images/hero.webp'],
  },
  other: {
    "msvalidate.01": "855d7a6f206b4d3cb0f5120fa3e5bd86", // Bing Validation
    "geo.region": "IT",
    "geo.placename": "Italy",
    "geo.position": "41.8719;12.5674",
    "ICBM": "41.8719, 12.5674",
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

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* ── Critical resource preloads for LCP optimisation ─────────────────
            Preloading the hero image and logo ensures they start downloading
            before the browser finishes parsing the HTML document.            */}
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
