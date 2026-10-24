import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import HowItWorks from '@/components/HowItWorks';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import ServiceSchema from '@/components/ServiceSchema';
import ServicePageContent from '@/components/ServicePageContent';
import BookingForm from '@/components/BookingForm';
import type { PricingTier } from '@/components/ServicePageContent';
import { Metadata } from 'next';
import { itHreflangFor } from '@/lib/i18n/page-registry';

/* Accuracy note for future edits — these claims were removed because the
 * business does not offer them: monthly or consolidated billing, corporate
 * account setup, dedicated account managers, priority booking, 24/7 corporate
 * account support, expense management, and the "99.2% on-time rate"
 * punctuality guarantee. `reviews={[]}` is passed deliberately: without it
 * ServicePageContent renders its own default testimonials and a
 * "4.9 / 5 across 500+ reviews" line, neither of which is substantiated.
 * Invoicing is described as it actually works: an invoice for the individual
 * service where applicable. Flight tracking is kept because it is established
 * across the site; train tracking is not, so rail arrivals are handled by the
 * customer supplying the train details. */

export const metadata: Metadata = {
  title: "Business & Executive Transfers in Italy",
  description: "Private transfers for business travel across Italy — airport pickups, hotel and city-to-city journeys, and event transport. Quoted per journey, with an invoice for the service where applicable.",
  alternates: {
    canonical: "/services/business-taxi",
    languages: itHreflangFor('/services/business-taxi'),
  }
};

const faqs = [
  {
    q: "Can I get an invoice for a business transfer?",
    a: "Yes. We can provide an invoice for the individual transfer or service where applicable, which is what most travellers need for expense reporting. We do not operate monthly or consolidated billing, so each journey is quoted and invoiced on its own rather than accumulated onto a monthly account."
  },
  {
    q: "How do I book transport for a business trip?",
    a: "Send us the journey details — date and time, pickup and drop-off addresses, passenger numbers, and the flight number if you are arriving by air. We come back with a quote for that journey, and the price is confirmed before you travel rather than run on a meter. For several journeys across a trip, send the full schedule in one message and we will quote the whole itinerary."
  },
  {
    q: "How do you handle timing for client meetings?",
    a: "Pickup times are planned around the meeting rather than the journey length, with margin built in for traffic in the city concerned. For airport arrivals we monitor the flight and adjust to the actual landing time. We don't publish an on-time percentage, because traffic on any given day is outside anyone's control — what we can do is plan the margin and tell you honestly what is realistic."
  },
  {
    q: "Is Wi-Fi available in the vehicles?",
    a: "Wi-Fi is available on request in executive vehicles. Specify it when you book so an appropriately equipped vehicle can be assigned. Phone chargers and bottled water are also available on request."
  },
  {
    q: "Can you arrange transfers for several executives arriving separately?",
    a: "Yes. Multi-vehicle coordination for a single conference or event is something we handle: send the arrival schedule and the pickup points and we will organise the vehicles around it. The more notice you can give for a multi-vehicle booking, the better, since each vehicle has to be arranged individually."
  },
  {
    q: "Are vehicles suitable for discreet business travel?",
    a: "Yes. Vehicles are unmarked, drivers are professionally dressed, and conversations in the car are private. If you have specific requirements for a sensitive journey, tell us when you book and we will confirm what is possible."
  },
  {
    q: "Do you cover multi-city business itineraries?",
    a: "Yes. Multi-city journeys across Rome, Milan, Florence and Bologna are a common request, either as separate transfers or as hourly hire for part of a day. Send the full schedule and we will quote each leg so you can see the cost before committing."
  }
];

const pricing: PricingTier[] = [
  { label: "Executive Sedan", price: "From €65/hr", note: "Business-class · Up to 3 passengers" },
  { label: "Executive Van", price: "From €95/hr", note: "Group executive · Up to 7 passengers", popular: true },
  { label: "Airport Transfer", price: "From €75", note: "Fixed fare · Milan, Rome & all airports" },
];

export default function BusinessCorporatePage() {
  const url = "https://www.italytaxiservice.com/services/business-taxi";

  return (
    <main className="min-h-screen font-inter">
      <ServiceSchema name="Business & Executive Transfers in Italy" description="Private transfers for business travel across Italy — airport pickups, hotel and city-to-city journeys, and event transport, quoted per journey." url={url} />
      <Navbar />

      <PageHero
        titleTop="Business & Executive"
        titleBottom="Transfers in Italy"
        description="Pre-booked private transfers for business travel — airport pickups, hotel and city-to-city journeys, and event transport. Quoted per journey, price confirmed before you travel."
        backgroundImage="/images/taxis-1.jpg"
        buttonText="Request a Business Transfer Quote"
        breadcrumbs={[
          { name: "Services", item: "/services" },
          { name: "Business Taxi", item: "/services/business-taxi" }
        ]}
      />

      <ServicePageContent
        introTitle="Private Transfers for Business Travel in Italy"
        introParagraphs={[
          "Business travel puts a different set of demands on ground transport: the pickup has to fit the meeting, the arrival has to survive a delayed flight, and the cost has to be clear enough to put through expenses. We arrange private transfers across Italy for executives, client-facing teams, conference delegates and visiting colleagues.",
          "That covers a single airport pickup for one traveller, a run of hotel and office transfers across a two-day visit, or several vehicles meeting a delegation arriving on different flights. Each journey is quoted on its own, so you know the price before anyone travels.",
          "Executive vehicles used for business bookings are late-model Mercedes-Benz sedans and Vito minivans with leather interiors and climate control. Wi-Fi is available on request — specify it at booking so the right vehicle is assigned."
        ]}
        detailTitle="What a Business Transfer Covers"
        detailParagraphs={[
          "Airport pickups are the most common business booking. We monitor the flight and work to the actual landing time rather than the scheduled one, and the driver meets you inside the arrivals hall with a name sign. If you are arriving by rail instead, send the train and arrival time with the booking and the pickup is planned around it.",
          "Hotel and city-to-city journeys work the same way: give us the full address with street and number at both ends, and the pickup time is set around your schedule rather than ours. For a day with several stops, hourly hire usually works better than separate bookings.",
          "We cover the main Italian business locations: Rome including the EUR district and Fiumicino, Milan including CityLife, Porta Nuova and the Rho exhibition centre, Florence including Fortezza da Basso and the Palazzo dei Congressi, Bologna including BolognaFiere, and airports across the country.",
          "For conferences and events, we can coordinate several vehicles around one arrival schedule. Send the delegate list and the arrival times and we will organise the pickups against it. Multi-vehicle bookings need as much notice as you can give, because each vehicle is arranged individually.",
          "On invoicing: we can issue an invoice for the individual transfer or service where applicable, which is normally what is needed for an expense claim. We do not run monthly or consolidated billing, and there is no corporate account to open — each journey is quoted, booked and invoiced on its own."
        ]}
        benefits={[
          "Executive Mercedes-Benz sedans and Vito minivans",
          "Wi-Fi, phone chargers and bottled water on request",
          "Professionally dressed drivers and unmarked vehicles",
          "Invoice for the individual service where applicable",
          "Multi-vehicle coordination for a single conference or event",
          "Flight monitoring for airport arrivals, with meet-and-greet in the arrivals hall",
          "Multi-city itineraries across Rome, Milan, Florence and Bologna",
          "Fixed or hourly pricing, confirmed before you travel"
        ]}
        pricingTitle="Executive Taxi Pricing Overview"
        pricing={pricing}
        reviews={[]}
        relatedLinks={[
          { label: "Airport Transfers", href: "/services/airport-transfers" },
          { label: "Hourly Taxi", href: "/services/hourly-taxi" },
          { label: "City-to-City Transfers", href: "/services/city-to-city" },
          { label: "Milan Taxi Service", href: "/city/milan" },
          { label: "Rome Business District", href: "/city/rome" },
          { label: "CPHI Milan Transfer Guide", href: "/blog/cphi-milan-transfer" },
          { label: "TTG Travel Experience Rimini Transfer Guide", href: "/blog/ttg-travel-experience-rimini-transfer" },
          { label: "Ecomondo 2026 Rimini Transfer Guide", href: "/blog/ecomondo-2026-transfers" },
          { label: "Artissima 2026 Turin Transfer Guide", href: "/blog/artissima-2026-transfers" },
          { label: "Artigiano in Fiera 2026 Transfer Guide", href: "/blog/artigiano-in-fiera-2026-transfers" },
        ]}
      />

      {/* Quote form, using the shared BookingForm unmodified. The distinct
          sourceName is what lets leads from this page be attributed to it. */}
      <section className="py-20 bg-white" aria-labelledby="business-quote">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 id="business-quote" className="text-3xl md:text-4xl font-bold text-navy mb-8 text-center">
            Request a business transfer quote
          </h2>
          <BookingForm sourceName="Business Taxi Page" />
        </div>
      </section>

      <HowItWorks />

      <FAQSection faqs={faqs} title="Business Travel FAQs" badge="Business Transfers" />

      <Footer />
    </main>
  );
}
