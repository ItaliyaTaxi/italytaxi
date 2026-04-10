import { Metadata } from 'next';
import BeachTransferPage, { BeachTransferData } from '@/components/BeachTransferPage';

export const metadata: Metadata = {
  title: "Amalfi Coast Taxi | Private Transfer to Amalfi, Positano & Ravello",
  description: "Book a professional private taxi along the Amalfi Coast. Expert drivers on the SS163 coastal road from Naples, Sorrento, or Rome. Fixed price, door-to-door service.",
  alternates: { canonical: "/beach-transfer/amalfi-coast-taxi" },
  openGraph: {
    title: "Amalfi Coast Taxi | Private Transfer from Naples or Rome",
    description: "Private taxi along the Amalfi Coast. Expert drivers on the SS163 from Naples Airport or Rome. Fixed price, door to hotel.",
    url: "https://www.italytaxiservice.com/beach-transfer/amalfi-coast-taxi",
    images: [{ url: '/images/almafi.webp', width: 1200, height: 630, alt: 'Amalfi Coast Taxi Transfer' }],
  },
};

const data: BeachTransferData = {
  slug: "amalfi-coast-taxi",
  name: "Amalfi Coast",
  region: "Campania, Southern Italy",
  heroImage: "/images/almafi.webp",
  intro: "The Amalfi Coast (Costiera Amalfitana) is one of the most spectacular stretches of coastline in the world — a UNESCO World Heritage Site of vertical towns, lemon groves, medieval cathedrals, and crystalline turquoise sea. Covering 50km of coast between Positano and Vietri sul Mare, it includes legendary villages like Positano, Amalfi, Ravello, and Praiano. Our private taxi connects you from Naples Airport, Sorrento, Salerno, or Rome directly to your coastal hotel with an expert local driver.",
  whySection: "The SS163 Amalfitana is one of the most beautiful roads in the world — and one of the most challenging. Single-lane cliff sections, tour bus passing manoeuvres, summer congestion, and restricted ZTL access zones make it dangerous territory for non-local drivers. Our Amalfi Coast specialists drive these roads daily and know exactly how to navigate the timing, the passing bays, and the hotel access rules for every village.",
  highlights: [
    "Expert SS163 coastal road drivers — local knowledge, not GPS guesswork",
    "Coverage of all Amalfi Coast villages: Positano, Amalfi, Ravello, Praiano, Atrani",
    "Transfers from Naples Airport (NAP) — 90 minutes to the coast",
    "Long-distance transfers from Rome — 4 hours with fixed pricing",
    "ZTL access permits included — no restricted zone fines",
    "Drop-off as close to your hotel as road access allows",
    "Fixed all-inclusive pricing — tolls, fuel, and parking included",
    "24/7 availability — early flights and late arrivals accommodated",
  ],
  nearbyAttractions: [
    { name: "Positano Village", distance: "12 km from Amalfi town" },
    { name: "Ravello Villa Rufolo", distance: "7 km from Amalfi town (uphill)" },
    { name: "Praiano", distance: "8 km west of Amalfi" },
    { name: "Atrani (smallest town in Italy)", distance: "1 km from Amalfi town" },
    { name: "Pompeii", distance: "40 km from Positano" },
    { name: "Capri Island (ferry from Amalfi)", distance: "~30 min by hydrofoil" },
  ],
  faqs: [
    { q: "How long does it take to drive from Naples to the Amalfi Coast?", a: "From Naples city centre, the Amalfi Coast takes approximately 1 hour to 1 hour 30 minutes to reach Positano, and 1 hour 30 minutes to 2 hours to reach Amalfi town. From Naples Airport (NAP), add 15–20 minutes. Summer afternoons and weekends can significantly extend travel times due to coastal traffic." },
    { q: "Can you drive between all Amalfi Coast villages?", a: "Yes — we provide point-to-point transfers between any combination of Amalfi Coast villages, including Positano, Amalfi, Ravello, Praiano, Minori, Maiori, Cetara, and Vietri sul Mare. Some villages have restricted road access which our licensed drivers are permitted to enter." },
    { q: "Is it possible to do a day trip to the Amalfi Coast from Rome?", a: "Yes — though a long day. The drive from Rome to the Amalfi Coast takes approximately 3.5 to 4 hours each way. We offer day-trip chauffeur services where the driver waits on-site throughout your visit and returns you the same evening. Many clients prefer this to staying overnight, particularly for short Italy trips." },
    { q: "How much does an Amalfi Coast taxi from Rome cost?", a: "A private taxi from Rome to the Amalfi Coast (Positano or Amalfi town) typically costs between €280 and €350 depending on vehicle type and exact route. All motorway tolls, fuel, and waiting time within the grace period are included in the quoted price." },
  ],
  relatedLinks: [
    { label: "Positano Taxi", href: "/beach-transfer/positano-beach-taxi" },
    { label: "Capri Island Taxi", href: "/beach-transfer/capri-island-taxi" },
    { label: "Naples Airport Transfer", href: "/airport/naples" },
    { label: "Amalfi Coast Attraction Transfer", href: "/attraction-transfer/amalfi-coast-taxi-transfer" },
    { label: "All Beach Transfers", href: "/beach-transfer" },
    { label: "Book Now", href: "/book-now" },
  ],
};

export default function AmalfiCoastTaxiPage() {
  return <BeachTransferPage data={data} />;
}
