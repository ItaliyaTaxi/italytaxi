import { Montserrat, Inter, Playfair_Display } from "next/font/google";

// Shared across both root layouts ((site)/layout.tsx for English, it/layout.tsx
// for Italian) so the font setup — and the --font-* CSS variables Tailwind
// relies on — stays identical between the two, defined in exactly one place.

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ['400', '500', '700'],
  preload: true,
});

export const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: ['600', '700', '800'],
  preload: true,
});

export const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  style: ['italic'],
  weight: ['700'],
  preload: false,
});
