import { Metadata } from 'next';
import BeachTransferPage, { BeachTransferData } from '@/components/BeachTransferPage';

export const metadata: Metadata = {
  title: "Positano Beach Taxi | Private Transfer to Positano Italy",
  description: "Book a professional private taxi to Positano Beach on the Amalfi Coast. Reliable door-to-door transfer from Naples Airport, Sorrento, or Rome. Fixed price, English-speaking driver.",
  alternates: { canonical: "/beach-transfer/positano-beach-taxi" },
  openGraph: {
    title: "Positano Beach Taxi | Private Transfer on the Amalfi Coast",
    description: "Private taxi to Positano from Naples Airport, Sorrento, or Rome. Expert Amalfi Coast drivers, fixed prices, door-to-door service.",
    url: "https://www.italytaxiservice.com/beach-transfer/positano-beach-taxi",
    images: [{ url: '/images/hero.webp', width: 1200, height: 630 }],
  },
};

const data: BeachTransferData = {
  slug: "positano-beach-taxi",
  name: "Positano",
  region: "Amalfi Coast, Campania",
  heroImage: "/images/almafi.webp",
  intro: "Positano is the jewel of the Amalfi Coast — a vertical village of pastel houses, lemon groves, and crystal-blue sea that clings to the cliffs of the Sorrentine Peninsula. Our private taxi service brings you directly from Naples Airport (NAP), Sorrento, Salerno, or Rome to your Positano hotel, navigating the famous SS163 coastal road with the expertise of a local driver. Skip the ferry queues and crowded SITA buses — arrive refreshed and on time.",
  whySection: "The Amalfi Coast roads are not for the faint-hearted. Our Positano drivers are specialists in the narrow, winding SS163 — the most scenic and most treacherous coastal road in Italy. They know the passing places, the tunnel timings, the ZTL entry windows, and exactly how to drop luggage as close to your accommodation as possible in a village with no cars at street level.",
  highlights: [
    "Direct transfer from Naples Airport (NAP) to Positano in 90 minutes",
    "Expert drivers on the SS163 coastal road — no tourist GPS disasters",
    "Drop-off as close to your cliffside hotel as road access allows",
    "Fixed all-inclusive price — tolls, fuel, and ZTL permits included",
    "Child seats available at no extra cost on request",
    "English-speaking professional NCC-licensed drivers",
    "24/7 availability — early morning and late-night arrivals covered",
    "Free cancellation up to 24 hours before pickup",
  ],
  nearbyAttractions: [
    { name: "Amalfi Cathedral", distance: "12 km by car" },
    { name: "Ravello Villa Rufolo", distance: "18 km by car" },
    { name: "Praiano", distance: "8 km along the coast" },
    { name: "Marina Grande Beach", distance: "On-site in Positano" },
    { name: "Pompeii Ruins", distance: "40 km from Positano" },
    { name: "Capri Island (ferry from Marina Grande)", distance: "~40 min by ferry" },
  ],
  faqs: [
    { q: "How long is the taxi from Naples Airport to Positano?", a: "The transfer from Naples Capodichino Airport to Positano takes approximately 1 hour 30 minutes to 1 hour 45 minutes, depending on traffic and the time of day. Summer afternoons can add 20–30 minutes due to coastal congestion." },
    { q: "Can a taxi reach the hotel entrance in Positano?", a: "Positano has very limited vehicle access due to its vertical layout and ZTL zones. Our drivers are permitted and experienced in reaching the closest possible road-level drop-off for your specific hotel. For accommodation deep in the village, a short walk or porter service will be needed for the final stretch." },
    { q: "How much does a taxi from Rome to Positano cost?", a: "A private taxi from Rome to Positano typically ranges from €220 to €280 depending on vehicle type and exact pickup location. The journey is approximately 4 hours via the A1 and A3 motorways. All tolls, fuel, and waiting time within the grace period are included." },
    { q: "Can you transfer me between Positano and Sorrento?", a: "Yes. The Positano to Sorrento transfer takes approximately 45–60 minutes and is one of our most popular short coastal routes. We offer both one-way and return transfers." },
  ],
  relatedLinks: [
    { label: "Amalfi Coast Taxi", href: "/beach-transfer/amalfi-coast-taxi" },
    { label: "Capri Island Taxi", href: "/beach-transfer/capri-island-taxi" },
    { label: "Naples Airport Taxi", href: "/airport/naples" },
    { label: "Naples City Transfers", href: "/city/naples" },
    { label: "All Beach Transfers", href: "/beach-transfer" },
    { label: "Book Your Transfer", href: "/book-now" },
  ],
};

export default function PositanoBeachTaxiPage() {
  return <BeachTransferPage data={data} />;
}
