import Link from 'next/link';
import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import HowItWorks from '@/components/HowItWorks';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import ServiceSchema from '@/components/ServiceSchema';
import ServicePageContent from '@/components/ServicePageContent';
import type { PricingTier } from '@/components/ServicePageContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Private Sightseeing Tours in Italy",
  description: "Discover Italy with expert private taxi tours. Amalfi Coast, Tuscany, Vatican, Colosseum, Lake Como and more. Custom itineraries, fixed prices, hotel pickup included.",
  alternates: {
    canonical: "/services/private-tours",
  }
};

const faqs = [
  {
    q: "How do I customize my private tour of Italy?",
    a: "Simply contact us with your preferred destinations, interests, and available dates. We'll design a tailored itinerary — whether you're interested in history, gastronomy, wine, coastal scenery, or art. There's no obligation and no extra charge for customization."
  },
  {
    q: "Do your drivers serve as tour guides?",
    a: "Our taxi drivers are experienced locals with deep knowledge of Italy's regions, history, and best-kept secrets. For guided museum visits inside monuments like the Vatican or Colosseum, we can help you pre-book a licensed professional guide to join your tour."
  },
  {
    q: "What is the best private tour for first-time visitors to Italy?",
    a: "For first-timers, we recommend a Rome Day Tour covering the Colosseum, Roman Forum, Trevi Fountain, Pantheon, and Vatican area. For those with more time, a 3-day itinerary combining Rome, Florence, and an Amalfi Coast drive offers an unforgettable overview."
  },
  {
    q: "Can I book a private tour from my cruise ship in Italy?",
    a: "Yes. We are experts in cruise port excursions from Civitavecchia (Rome), Livorno (Florence/Tuscany), Naples (Pompeii/Amalfi), Venice, and Genoa. We time the tour precisely around your ship's departure and guarantee a return before all-aboard time."
  },
  {
    q: "Is the tour price per person or per vehicle?",
    a: "Our tours are priced per vehicle, not per person. This makes private tours excellent value for families or small groups, as everyone travels together in one comfortable vehicle at a single fixed price."
  },
  {
    q: "Can we stop for lunch and wine during a Tuscany tour?",
    a: "Absolutely — stopping for traditional Tuscan cuisine and local wine is a highlight of these tours. We can suggest specific trattorias and wineries, or reserve spots in advance. Waiting time during your meal is included in the tour price."
  },
  {
    q: "What is the best way to experience the Amalfi Coast without driving yourself?",
    a: "A private taxi tour is the optimum way to navigate the Amalfi Coast's famously narrow and winding roads. Your professional driver handles all the challenging bends while you sit back and enjoy one of Italy's most spectacular coastal landscapes."
  },
  {
    q: "How far in advance should I book a private tour?",
    a: "We recommend booking at least 3–5 days in advance for popular routes like Rome, Amalfi, and Tuscany. For peak summer months (June–August) and Italian holidays, booking 2–4 weeks ahead guarantees availability."
  }
];

const pricing: PricingTier[] = [
  { label: "Half-Day Tour", price: "From €200", note: "4 hours · 1 destination area" },
  { label: "Full-Day Tour", price: "From €380", note: "8 hours · Multiple stops", popular: true },
  { label: "Multi-Day Tour", price: "Custom", note: "2–5 day Italy grand tour" },
];

const popularTours = [
  { name: "Rome Colosseum & Vatican Day Tour", path: "/attraction-transfer/vatican-museums-taxi-transfer" },
  { name: "Amalfi Coast Scenic Drive", path: "/attraction-transfer/amalfi-coast-taxi-transfer" },
  { name: "Tuscany Wine & Countryside", path: "/city/florence" },
  { name: "Lake Como & Bellagio Day Trip", path: "/attraction-transfer/lake-como-taxi-transfer" },
  { name: "Pompeii & Herculaneum from Naples", path: "/attraction-transfer/pompeii-taxi-transfer" },
  { name: "Dolomites Mountain Excursion", path: "/attraction-transfer/dolomites-taxi-transfer" },
];

export default function PrivateToursPage() {
  const url = "https://www.italytaxiservice.com/services/private-tours";

  return (
    <main className="min-h-screen font-inter">
      <ServiceSchema name="Private Sightseeing Tours Italy" description="Premium customizable private taxi tours and excursions across Italy's most iconic landmarks." url={url} />
      <Navbar />

      <PageHero
        titleTop="Explore Italy with"
        titleBottom="Private Taxi Tours"
        description="Customised private tours across Italy's most iconic destinations. Amalfi Coast, Tuscany, Rome, Vatican, and more — on your schedule, at your pace."
        backgroundImage="https://aprilmunday.wordpress.com/wp-content/uploads/2018/09/bodiam_castle_through_the_trees.jpg?w=500"
        buttonText="Design Your Private Tour"
        breadcrumbs={[
          { name: "Services", item: "/services" },
          { name: "Private Tours", item: "/services/private-tours" }
        ]}
      />

      <ServicePageContent
        introTitle="Your Personal Journey Through Italy — Your Way"
        introParagraphs={[
          "Italy has so many extraordinary destinations packed into a relatively compact country that it can be genuinely difficult to choose what to see and how to get there efficiently. Group tours rush you past the things you care about. Public transport can't reach the Amalfi Coast's clifftop villages or Tuscany's remote vineyard estates.",
          "Our private taxi tours solve all of this. You tell us what you want to see, we design the perfect route, your expert taxi picks you up from your hotel, and you spend your day discovering Italy at exactly the pace that suits you.",
          "From a half-day exploration of Rome's ancient ruins to a five-day grand tour taking in Milan, Lake Como, Venice, Florence, and the Amalfi Coast, we craft experiences around what matters most to you — not a packaged itinerary."
        ]}
        detailTitle="What Makes Our Private Tours Different"
        detailParagraphs={[
          "The fundamental difference between a private taxi tour and a group excursion is the absence of compromise. On a group tour, you visit what the majority voted for, move when the guide says, and spend your time in the company of people who may not share your interests. On a private tour, every decision is yours.",
          "Want to spend two hours at a single Tuscan winery rather than rushing through three? Done. Want to stop at a viewpoint that isn't on any standard itinerary because you spotted it in a magazine? Absolutely. Want to skip the crowded sections of Pompeii and focus exclusively on the lesser-visited thermal baths? Your driver will know exactly where to go.",
          "Our taxi drivers are not passive drivers — they are engaged, knowledgeable companions who love sharing their knowledge of Italy. They know which viewpoints are best in the morning light, which restaurants are genuinely local, and which visits are best timed to avoid the worst crowds.",
          "Cruise port excursions are one of our most requested specialties. We collect you from the dock at Civitavecchia, Livorno, Naples, or Venice and build your entire day around your ship's all-aboard time — with a guaranteed return that gives you a comfortable margin before departure.",
          "For families, our tours remove all the logistical pressure that comes with travelling with children. There's no luggage to wrestle through metro stations, no missing a bus connection, and no rushing pace. Children enjoy the journey, parents enjoy the experience."
        ]}
        benefits={[
          "Fully customizable itinerary designed around your interests",
          "Pickup directly from your hotel, Airbnb, or cruise port",
          "No per-person pricing — one fixed vehicle price for all",
          "Expert local drivers with deep destination knowledge",
          "Flexible pace — stop as long or as briefly as you choose",
          "Lunch and wine stops included and encouraged",
          "Cruise port excursions with all-aboard time guarantee",
          "Photography stops at the best viewpoints",
          "Licensed guide booking assistance for museum interiors",
          "Perfect for families, couples, and small groups up to 8",
          "Child-friendly pacing and child seat availability",
          "Multi-day Italy grand tour planning available"
        ]}
        pricingTitle="Private Tour Pricing"
        pricing={pricing}
        relatedLinks={[
          { label: "Hourly Taxi Service", href: "/services/hourly-taxi" },
          { label: "City-to-City Transfers", href: "/services/city-to-city" },
          { label: "Cruise Port Transfers", href: "/services/cruise-port-transfers" },
          { label: "Amalfi Coast Guide", href: "/city/amalfi-coast" },
          { label: "Tuscany Travel Info", href: "/city/florence" },
          { label: "Rome Highlights", href: "/city/rome" },
        ]}
      />

      {/* Popular Tour Routes */}
      <section className="py-20 bg-white font-inter">
        <div className="container mx-auto px-6 max-w-5xl">
          <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-4 text-center">Popular Itineraries</p>
          <h2 className="text-4xl font-extrabold text-navy mb-12 text-center">Most Requested Sightseeing Tours</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularTours.map((tour, i) => (
              <Link
                key={i}
                href={tour.path}
                className="p-6 rounded-2xl border border-gray-100 font-bold text-navy block hover:border-gold hover:text-gold hover:shadow-xl transition-all text-center"
              >
                {tour.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <HowItWorks />
      <FAQSection faqs={faqs} title="Private Tour FAQs" badge="Planning Your Experience" />
      <Footer />
    </main>
  );
}
