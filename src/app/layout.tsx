import type { Metadata } from "next";
import { Montserrat, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import FloatingContact from "@/components/FloatingContact";
import LanguageModal from "@/components/LanguageModal";
import { LanguageProvider } from "@/context/LanguageContext";
import Script from "next/script";
import JsonLd from "@/components/JsonLd";

// ── Font loading ──────────────────────────────────────────────────────────────
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ['400', '500', '700'],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: ['400', '600', '700', '800'],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  style: ['italic', 'normal'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.italytaxiservice.com"),
  title: {
    default: "Italy Taxi Service | Private Transfers Italy",
    template: "%s | Italy Taxi Service"
  },
  description: "Experience the finest travel in Italy. Professional drivers and vehicle fleet for airport transfers and city tours.",
  keywords: ["Italy Taxi", "Airport Transfers Italy", "Private Driver Italy", "Luxury Taxi Italy", "Rome Airport Taxi", "Milan Transfer"],
  alternates: {
    // We remove the root canonical from here to prevent subpages from inheriting it.
    // Each page should ideally define its own canonical to avoid duplicate content issues.
  },
  other: {
    "msvalidate.01": "855d7a6f206b4d3cb0f5120fa3e5bd86", // Bing Validation
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <JsonLd />
      </head>
      <body
        className={`${inter.variable} ${montserrat.variable} ${playfair.variable} antialiased font-inter`}
        suppressHydrationWarning
      >
        {/* Microsoft Clarity */}
        <Script id="clarity-script" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "vx8bmsmlxa");
          `}
        </Script>

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-2H2JG3HNHV"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-2H2JG3HNHV');
          `}
        </Script>

        <LanguageProvider>
          {children}
          <FloatingContact />
          <LanguageModal />
        </LanguageProvider>
      </body>
    </html>
  );
}
