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
  title: "Hourly Private Taxi Italy | Chauffeur by the Hour for Shopping, Tours & Business",
  description: "Hire a private chauffeur by the hour across Italy. Flexible hourly taxi service for sightseeing, shopping, business, and events. Fixed hourly rates, no hidden charges.",
  alternates: {
    canonical: "/services/hourly-taxi",
  }
};

const faqs = [
  {
    q: "How does hourly chauffeur booking work in Italy?",
    a: "You hire a professional driver and vehicle for a minimum number of hours. During this period, the driver and vehicle are entirely at your disposal. You direct where you want to go, how long to stay, and when to move on — complete flexibility."
  },
  {
    q: "What is the minimum booking for hourly taxi service?",
    a: "Our minimum booking is 2 hours for city-based service and 4 hours for day-trips and sightseeing excursions involving longer distances. Contact us for special arrangements for shorter bookings."
  },
  {
    q: "Can I change my destination spontaneously during the booked hours?",
    a: "Yes — this is the primary advantage of hourly service. You can visit multiple locations, change your itinerary on the go, and extend stops as long as you like within your total booked time."
  },
  {
    q: "What happens if I want to extend my hourly booking?",
    a: "If you want to extend your booking, simply inform your driver as early as possible. Subject to their schedule, they can add additional hours at the same hourly rate. We always try to accommodate last-minute extensions."
  },
  {
    q: "Is hourly taxi service available across all Italian cities?",
    a: "Yes. Our hourly service operates in Rome, Milan, Florence, Venice, Naples, Amalfi Coast, Tuscany, Cinque Terre, Lake Como, and all other Italian destinations. It is ideal for regions without convenient public transport."
  },
  {
    q: "Can I use hourly taxi service for shopping in Milan or Rome?",
    a: "Many clients use our hourly service specifically for shopping — particularly along Milan's Quadrilatero della Moda (fashion district) or Rome's Via Condotti. Your driver will wait and assist with carrying bags between stops."
  },
  {
    q: "Is a half-day or full-day package available?",
    a: "Yes. We offer half-day (4-hour) and full-day (8-hour) packages at discounted flat rates compared to individual hourly booking. These are especially popular for sightseeing in Rome, Florence, and the Amalfi Coast."
  }
];

const pricing: PricingTier[] = [
  { label: "2-Hour City", price: "From €120", note: "Ideal for airport & local errands" },
  { label: "Half-Day (4hrs)", price: "From €220", note: "Sightseeing & shopping tours", popular: true },
  { label: "Full Day (8hrs)", price: "From €380", note: "Complete day excursions" },
];

const reviews = [
  {
      name: "Olivia M.",
      country: "🇬🇧 United Kingdom",
      rating: 5,
      text: "Hired a driver for 4 hours in Milan for a shopping trip. He was incredibly patient, waited outside each boutique, and handled all our bags. Highly recommend for a stress-free day.",
      date: "March 2025"
  },
  {
      name: "Thomas W.",
      country: "🇨🇦 Canada",
      rating: 5,
      text: "Booked an 8-hour service for a full day in the Chianti region. Our driver was like a local guide, suggesting the best viewpoints and small family wineries. Worth every euro.",
      date: "February 2025"
  },
  {
      name: "Grace H.",
      country: "🇺🇸 United States",
      rating: 5,
      text: "Used the hourly service for business meetings across Rome. Professional, discreet, and perfectly on time for every pickup. It made our busy day much easier.",
      date: "January 2025"
  }
];

export default function HourlytaxiPage() {
  const url = "https://www.italytaxiservice.com/services/hourly-taxi";

  return (
    <main className="min-h-screen font-inter">
      <ServiceSchema name="Hourly Private Taxi Service Italy" description="Hire a professional chauffeur by the hour for complete flexibility and luxury travel across Italy." url={url} />
      <Navbar />

      <PageHero
        titleTop="Private & Flexible"
        titleBottom="Chauffeur by the Hour"
        description="Your private driver, at your complete disposal, for as many hours as you need. Perfect for sightseeing, shopping, business, and day excursions across Italy."
        backgroundImage="/images/Taxis.webp"
        buttonText="Book Hourly Service"
        breadcrumbs={[
          { name: "Services", item: "/services" },
          { name: "Hourly Taxi", item: "/services/hourly-taxi" }
        ]}
      />

      <ServicePageContent
        introTitle="Your Personal Driver — Your Schedule, Your Way"
        introParagraphs={[
          "Sometimes a single point-to-point transfer isn't enough. Italy is a country that rewards exploration — and our hourly chauffeur service gives you the freedom to experience it on your own terms. Hire a private driver for two hours or an entire day, and discover as much or as little as you please.",
          "Whether you want to spend a morning hopping between Rome's piazzas and churches, an afternoon shopping along Milan's fashion district, or a full day weaving through the Amalfi Coast's clifftop villages, our hourly service puts you firmly in control.",
          "Your driver is a knowledgeable local who can suggest the best routes, alert you to hidden gems off the tourist trail, and ensure you're always where you want to be — comfortably, safely, and on time."
        ]}
        detailTitle="What to Expect from Your Hourly Chauffeur Experience"
        detailParagraphs={[
          "When you book an hourly chauffeur with Italy Taxi Service, you're not simply hiring a car and driver — you're engaging a personal mobility partner for your journey. The service begins at your hotel, airport, or any address you specify, and from that moment your driver is entirely focused on making your time in Italy extraordinary.",
          "Unlike sightseeing buses with rigid routes and fixed stops, your itinerary is entirely your own. Tell your driver you want to stop for 30 minutes at the Trevi Fountain, then head to a specific restaurant for lunch, followed by an unplanned detour to a market you spotted — all of this is not just possible, it's expected.",
          "Our drivers are patient, unhurried, and genuinely invested in your experience. They know which viewpoints offer the best light for photography, which roads to take to avoid the worst tourist congestion, and which local spots the guidebooks don't mention.",
          "During any waiting time — whether you're in a museum, at lunch, or exploring on foot — your vehicle remains parked nearby. Your driver monitors the time and is always reachable by mobile. When you're ready to leave, a simple message brings them to you within minutes.",
          "For shopping excursions, particularly in Milan or Rome, your driver can assist with carrying bags and moving from boutique to boutique efficiently. Many of our regular clients use the hourly service as a dedicated shopping assistant, ensuring their purchases are safely stowed throughout the day."
        ]}
        benefits={[
          "Complete itinerary flexibility — you decide everything",
          "Fixed hourly rate with no extra charges for stops",
          "Half-day and full-day package rates available",
          "Drivers available as knowledgeable local guides",
          "Vehicle waits for you at every location — no extra charge",
          "Perfect for sightseeing, shopping, wine tours, and meetings",
          "Ideal for destinations with limited public transport",
          "Available throughout Italy — cities, coast, and countryside",
          "English-speaking professional drivers",
          "Premium vehicles including SUVs and minivans for groups",
          "Book same-day or weeks in advance",
          "24/7 availability — early mornings and late evenings"
        ]}
        pricingTitle="Hourly Service Rates"
        pricing={pricing}
        reviews={reviews}
        relatedLinks={[
          { label: "Private Sightseeing Tours", href: "/services/private-tours" },
          { label: "City-to-City Transfers", href: "/services/city-to-city" },
          { label: "Business Taxi", href: "/services/business-taxi" },
          { label: "Rome Day Trips", href: "/city/rome" },
          { label: "Milan Fashion District", href: "/city/milan" },
          { label: "Amalfi Coast Excursions", href: "/city/amalfi-coast" },
        ]}
      />

      <HowItWorks />

      <FAQSection faqs={faqs} title="Hourly Taxi FAQs" badge="Booking Flexibility" />

      <Footer />
    </main>
  );
}
