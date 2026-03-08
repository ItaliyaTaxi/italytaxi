import type { Metadata } from "next";
import { Montserrat, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import StickyBookNow from "@/components/StickyBookNow";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ['italic', 'normal'],
});

export const metadata: Metadata = {
  title: "Italy Taxi Service | Private Transfers Italy",
  description: "Experience the finest travel in Italy. Professional drivers and vehicle fleet for airport transfers and city tours.",
  icons: {
    icon: '/images/icon.png',
    shortcut: '/images/icon.png',
    apple: '/images/icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${montserrat.variable} ${playfair.variable} antialiased font-inter`}
        suppressHydrationWarning
      >
        {children}
        <StickyBookNow />
        <WhatsAppButton />
      </body>
    </html>
  );
}

