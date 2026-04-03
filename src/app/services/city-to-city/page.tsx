import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import HowItWorks from '@/components/HowItWorks';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import ServiceSchema from '@/components/ServiceSchema';
import ServicePageContent from '@/components/ServicePageContent';
import type { PricingTier, RouteItem } from '@/components/ServicePageContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "City-to-City Private Transfers Italy | Rome to Florence by Taxi",
  description: "Private intercity taxi transfers between all Italian cities. Rome to Florence, Milan to Venice, and more. Fixed price, door-to-door, no stops required.",
  alternates: {
    canonical: "/services/city-to-city",
  }
};

const faqs = [
  {
    q: "How do I book a private taxi between Italian cities?",
    a: "Booking is straightforward — use our online form, enter your pickup city, destination, date, and passenger count. You'll receive an instant fixed price and booking confirmation by email. Alternatively, contact us via WhatsApp for a custom quote."
  },
  {
    q: "Is a private intercity taxi cheaper than a train in Italy?",
    a: "For groups of 3 or more, a private taxi is often comparable in cost to train tickets, while offering door-to-door convenience, no station transfers, no luggage limits, and flexible departure times. Families with children often find it significantly better value."
  },
  {
    q: "Can I request scenic stops during long-distance transfers?",
    a: "Yes, we allow up to 2 custom stops for photographs, a quick meal, or sightseeing at a landmark en route. Please mention your preferred stops during booking so we can plan the optimum route and timing."
  },
  {
    q: "What is the journey time from Rome to Florence by private taxi?",
    a: "The journey from Rome to Florence is approximately 2.5 to 3 hours depending on traffic and the route taken. We always use toll highways (Autostrade) for the fastest and most comfortable journey — all toll costs are included in your fixed price."
  },
  {
    q: "How much luggage can I bring on a city-to-city transfer?",
    a: "Our sedans comfortably accommodate 2 large suitcases plus cabin bags. For larger groups or those with significant luggage, we recommend booking our spacious minivan, which fits up to 8 passengers and their full luggage."
  },
  {
    q: "Can I book a one-way or return intercity transfer?",
    a: "Both options are available. You can book a single trip or a return journey. For return bookings, we recommend scheduling them together to ensure driver availability and sometimes get a combined discount."
  },
  {
    q: "What cities in Italy do you cover for intercity transfers?",
    a: "We cover all major Italian cities including Rome, Milan, Florence, Venice, Naples, Bologna, Siena, Genoa, Turin, Verona, Padua, Bari, and many more. We also cover routes to San Marino, Vatican City, and cross-border transfers to Switzerland, Monaco, and Slovenia."
  }
];

const pricing: PricingTier[] = [
  { label: "Rome → Florence", price: "From €250", note: "~2.5 hrs · Up to 3 passengers" },
  { label: "Rome → Milan", price: "From €450", note: "~5.5 hrs · Most popular route", popular: true },
  { label: "Florence → Venice", price: "From €300", note: "~2.5 hrs · Up to 3 passengers" },
];

const routes: RouteItem[] = [
  { from: "Rome", to: "Florence", duration: "~2.5 hrs", price: "From €250" },
  { from: "Rome", to: "Milan", duration: "~5.5 hrs", price: "From €450" },
  { from: "Florence", to: "Venice", duration: "~2.5 hrs", price: "From €300" },
  { from: "Milan", to: "Venice", duration: "~2.5 hrs", price: "From €260" },
  { from: "Rome", to: "Naples", duration: "~2 hrs", price: "From €200" },
  { from: "Naples", to: "Amalfi Coast", duration: "~1.5 hrs", price: "From €150" },
];

export default function CityToCityPage() {
  const url = "https://www.italytaxiservice.com/services/city-to-city";

  return (
    <main className="min-h-screen font-inter">
      <ServiceSchema name="Private City to City Transfers Italy" description="Premium private intercity taxi service across Italy. Safe and comfortable door-to-door travel between any Italian cities." url={url} />
      <Navbar />

      <PageHero
        titleTop="Comfortable City-to-City"
        titleBottom="Private Transfers in Italy"
        description="Skip crowded trains. Travel door-to-door between Rome, Florence, Milan, Venice and every Italian city in a private, air-conditioned vehicle at a fixed price."
        backgroundImage="https://aprilmunday.wordpress.com/wp-content/uploads/2018/09/bodiam_castle_through_the_trees.jpg?w=500"
        buttonText="Book Intercity Transfer"
        breadcrumbs={[
          { name: "Services", item: "/services" },
          { name: "City to City", item: "/services/city-to-city" }
        ]}
      />

      <ServicePageContent
        introTitle="The Smarter Way to Travel Between Italian Cities"
        introParagraphs={[
          "Italy's train network is excellent — but it's not always the most practical choice. Trains require you to reach the station, purchase tickets, manage connections, and haul luggage through busy hubs before taking another taxi to your final destination on the other end.",
          "Our private intercity taxi service offers a single, seamless door-to-door journey. Your driver picks you up at your accommodation and drops you off directly at your hotel, villa, or apartment in the destination city — with zero transfers, zero queues, and a fixed price agreed upfront.",
          "Whether you're travelling from Rome to Florence for a weekend, connecting Milan to Venice for a business meeting, or embarking on a grand tour of Italy, our comfortable vehicles and experienced drivers make the journey itself a pleasure."
        ]}
        detailTitle="Why Families, Groups & Business Travellers Choose Us"
        detailParagraphs={[
          "The freedom of private intercity travel is unmatched. Unlike trains and buses, your driver departs when you're ready. If you want to leave at 6am to avoid traffic, or prefer a leisurely 10am start, the choice is entirely yours. This flexibility is particularly valuable for families with young children, elderly travellers, or business professionals on tight schedules.",
          "Our drivers are experts in Italian roads and use the fastest Autostrada routes, always factoring in real-time traffic to arrive on time. Highway toll fees are pre-calculated and included in your quote — there will never be a surprise charge when you reach your destination.",
          "For longer routes, such as Rome to Milan (approximately 5.5 hours), your driver will include a 20-minute comfort stop at a service area midway. For shorter routes like Rome to Naples (2 hours), the journey is direct unless you request otherwise.",
          "Groups and families travelling together almost always find private intercity transfers better value than multiple train tickets combined with taxi costs at both ends. Our minivans accommodate up to 8 passengers and their full luggage, keeping the whole group together.",
          "We also specialize in multi-day itinerary transfers — perfect for curated Italy tours. Book Rome Day 1, Florence Day 3, Venice Day 5, and we'll coordinate the entire ground transportation for your trip."
        ]}
        benefits={[
          "True door-to-door service — no trains, no stations",
          "Fixed prices with all tolls and motorway fees included",
          "Depart at your preferred time, not the train schedule",
          "Spacious luggage capacity — no baggage restrictions",
          "Comfort stops included on routes over 3 hours",
          "Premium vehicle fleet including 8-seat minivans for groups",
          "Professional English-speaking drivers with route expertise",
          "24/7 availability — early departures and late-night arrivals",
          "Optional scenic stops to photograph landmarks en route",
          "Free cancellation up to 48 hours before travel",
          "Suitable for multi-city Italy itineraries",
          "Child seats available free of charge on request"
        ]}
        pricingTitle="Sample Intercity Transfer Fares"
        pricing={pricing}
        routesTitle="Most Requested City-to-City Routes"
        routes={routes}
        relatedLinks={[
          { label: "Airport Transfers", href: "/services/airport-transfers" },
          { label: "Private Tours", href: "/services/private-tours" },
          { label: "Hotel Transfers", href: "/services/hotel-transfers" },
          { label: "Rome City Guide", href: "/city/rome" },
          { label: "Florence City Guide", href: "/city/florence" },
          { label: "Venice City Guide", href: "/city/venice" },
        ]}
      />

      <HowItWorks />

      <FAQSection faqs={faqs} title="City Transfer FAQs" badge="Everything You Need to Know" />

      <Footer />
    </main>
  );
}
