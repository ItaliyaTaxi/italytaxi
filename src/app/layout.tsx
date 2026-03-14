import type { Metadata } from "next";
import { Montserrat, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import { LanguageProvider } from "@/context/LanguageContext";

// ── Font loading ──────────────────────────────────────────────────────────────
// next/font automatically:
//   • Self-hosts the font files (no external Google Fonts request)
//   • Adds font-display: swap (prevents invisible text during load)
//   • Generates a preload link for the most critical variant
//   • Zero layout shift: font metrics are injected as CSS variables

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  // Only the weights actually used in the UI
  weight: ['400', '500', '700'],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  // Removed 300 (thin, unused) and 500 (medium, covered by 400+600).
  // Saves ~2 font files (~40 KB) from the critical path.
  weight: ['400', '600', '700', '800'],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  // Keep both styles: italic used in hero heading, normal used elsewhere
  style: ['italic', 'normal'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: "Italy Taxi Service | Private Transfers Italy",
  description: "Experience the finest travel in Italy. Professional drivers and vehicle fleet for airport transfers and city tours.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/*
          Preconnect to Unsplash CDN early so the browser has a warm TCP
          connection ready when PopularDestinations images are requested.
        */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body
        className={`${inter.variable} ${montserrat.variable} ${playfair.variable} antialiased font-inter`}
        suppressHydrationWarning
      >
        <LanguageProvider>
          {children}
          <WhatsAppButton />
        </LanguageProvider>
      </body>
    </html>
  );
}
