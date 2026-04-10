import { Metadata } from 'next';
import BeachTransferPage, { BeachTransferData } from '@/components/BeachTransferPage';

export const metadata: Metadata = {
  title: "Capri Island Taxi | Private Transfer to Capri Ferry Terminal",
  description: "Book a private taxi to Capri Island from Naples, Sorrento, or Positano. Professional driver to the ferry terminal with fixed pricing and luggage assistance. NCC-licensed service.",
  alternates: { canonical: "/beach-transfer/capri-island-taxi" },
  openGraph: {
    title: "Capri Island Taxi | Private Transfer to Capri Ferry",
    description: "Private taxi to Capri Island ferries from Naples, Sorrento, or Positano. Fixed price, luggage assistance, English-speaking drivers.",
    url: "https://www.italytaxiservice.com/beach-transfer/capri-island-taxi",
    images: [{ url: '/images/hero.webp', width: 1200, height: 630 }],
  },
};

const data: BeachTransferData = {
  slug: "capri-island-taxi",
  name: "Capri Island",
  region: "Bay of Naples, Campania",
  heroImage: "/images/almafi.webp",
  intro: "Capri is Italy's most glamorous island — a rocky paradise of dramatic sea stacks, designer boutiques, and impossibly blue water. Getting there requires a combination of mainland ground transport and a hydrofoil or ferry. Our private taxi service covers the mainland leg — from Naples Airport (NAP), Naples city, Sorrento, or Positano — to your chosen ferry port, with timed departures and full luggage handling. No bus changes, no timetable stress.",
  whySection: "Reaching Capri's ferry terminals on time requires local knowledge. Our drivers know the Naples Molo Beverello terminal, the Calata Porta di Massa freight port, and the Sorrento Marina Piccola — plus the fastest road routes from each airport and hotel zone. We time your departure to match your specific hydrofoil, ensuring you're not left scrambling with luggage through Naples traffic.",
  highlights: [
    "Timed transfers to Capri ferry terminals — Molo Beverello and Sorrento",
    "From Naples Airport to ferry terminal in 20–30 minutes",
    "Full luggage handling from hotel to port — no trolley stress",
    "Fixed all-inclusive pricing — tolls, parking, and fuel included",
    "Return transfers from port back to hotel or airport",
    "English-speaking NCC-licensed professional drivers",
    "24/7 availability including early-morning hydrofoil departures",
    "Child seats at no extra cost on request",
  ],
  nearbyAttractions: [
    { name: "Capri Town (Piazzetta)", distance: "On-island by funicular" },
    { name: "Blue Grotto (Grotta Azzurra)", distance: "On-island, north coast" },
    { name: "Anacapri", distance: "Chair-lift from Capri Town" },
    { name: "Villa San Michele", distance: "Anacapri, on-island" },
    { name: "Positano", distance: "30 min by boat from Capri" },
    { name: "Amalfi", distance: "45 min by hydrofoil" },
  ],
  faqs: [
    { q: "Where do I catch the ferry to Capri from Naples?", a: "Ferries and hydrofoils to Capri depart from Naples Molo Beverello (in the port area, accessible from Via Cristoforo Colombo) and from the Calata Porta di Massa for larger ferries. Sorrento's Marina Piccola is the alternative southern departure point. Our drivers know all three and will drop you at the correct terminal for your specific crossing." },
    { q: "How early should I leave Naples for a Capri ferry?", a: "We recommend departing at least 45 minutes before your scheduled crossing from Naples city. From Naples Airport, allow at least 50–60 minutes. Sorrento departures require 15–20 minutes from the town centre. We factor in Naples traffic and suggest specific departure times when you book." },
    { q: "Can you also arrange the return transfer from Capri back to Naples?", a: "Yes — we offer return transfers on the same booking. Simply tell us your hydrofoil arrival time back in Naples or Sorrento and we'll coordinate a pickup. For Naples arrivals, we meet you outside the Molo Beverello terminal exit." },
    { q: "Is luggage storage available if I want to explore Naples before/after Capri?", a: "We can recommend luggage storage facilities at Naples Central Station and near the port. Alternatively, book a flexible 'at-disposal' taxi that can accompany you for several hours and store luggage in the vehicle." },
  ],
  relatedLinks: [
    { label: "Positano Beach Taxi", href: "/beach-transfer/positano-beach-taxi" },
    { label: "Amalfi Coast Taxi", href: "/beach-transfer/amalfi-coast-taxi" },
    { label: "Naples Airport Taxi", href: "/airport/naples" },
    { label: "Naples City Transfers", href: "/city/naples" },
    { label: "All Beach Transfers", href: "/beach-transfer" },
    { label: "Book Your Transfer", href: "/book-now" },
  ],
};

export default function CapriIslandTaxiPage() {
  return <BeachTransferPage data={data} />;
}
