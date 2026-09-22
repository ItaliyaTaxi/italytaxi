import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import HowItWorks from '@/components/HowItWorks';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import ServiceSchema from '@/components/ServiceSchema';
import ServicePageContent from '@/components/ServicePageContent';
import type { PricingTier, RouteItem } from '@/components/ServicePageContent';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Milan Fashion Week 2026 Transfers & Chauffeur Service",
  description: "Private airport transfers and chauffeur service for Milan Fashion Week 2026 (22–28 September). Malpensa, Linate & Bergamo pickups, hotel and show-to-show transfers, fixed prices.",
  alternates: { canonical: "/milan-fashion-week-transfers" },
  openGraph: {
    title: "Milan Fashion Week 2026 Transfers & Chauffeur Service",
    description: "Private airport transfers and chauffeur service for Milan Fashion Week 2026 (22–28 September). Malpensa, Linate & Bergamo pickups, hotel and show-to-show transfers, fixed prices.",
    url: "https://www.italytaxiservice.com/milan-fashion-week-transfers",
    images: [{ url: '/images/milan airport.jpg', width: 1200, height: 630, alt: 'Milan Fashion Week Transfers — Private Chauffeur Service' }],
  },
};

const faqs = [
  {
    q: "How do I get from Malpensa Airport to Milan Fashion Week venues?",
    a: "The most direct way is a pre-booked private transfer, which takes you from Malpensa (MXP) straight to your hotel or first appointment without changing vehicles. The drive to central Milan is typically 50–70 minutes depending on traffic and time of day — treat this as a variable estimate rather than a fixed figure, especially during Fashion Week when city-centre traffic is heavier than usual. See our full Malpensa-specific guide for terminal and arrival details."
  },
  {
    q: "Which Milan airport is closest to the city centre for Fashion Week?",
    a: "Linate (LIN) is the closest at around 7 km from central Milan, followed by Malpensa (MXP) at roughly 50 km and Bergamo (BGY), officially Milan Bergamo Airport at Orio al Serio, at around 45 km. Which one is actually most convenient for you depends on your flight options and where your Fashion Week hotel or first appointment is — not distance alone, since Linate's proximity can be offset by limited long-haul routes compared to Malpensa."
  },
  {
    q: "Can I book a private transfer for Milan Fashion Week?",
    a: "Yes. Private transfers can be pre-booked for airport arrivals and departures, hotel-to-venue journeys, and travel between shows, showrooms and appointments during Fashion Week, with a fixed price agreed before you travel."
  },
  {
    q: "Can a chauffeur take me between Fashion Week shows and appointments?",
    a: "Yes — an hourly or multi-stop chauffeur booking is the usual approach for a day with several shows, showroom visits or meetings, since your driver waits and adjusts to your schedule rather than you booking a new one-way ride each time. Exact venues and timings vary by season, so plan the day's route once your Fashion Week schedule is confirmed."
  },
  {
    q: "Can I book an airport transfer and a return transfer together?",
    a: "Yes. Arrival and departure transfers can both be arranged in the same booking, at any of Milan's three airports, so your return journey to the airport at the end of Fashion Week is confirmed in advance rather than something to arrange last-minute."
  },
  {
    q: "Is this suitable for models, buyers and fashion teams travelling with multiple bags?",
    a: "Yes. Larger vehicles are available for groups and for the extra luggage and garment bags that come with fashion travel, and this can be specified when booking so the right vehicle is sent rather than assumed."
  }
];

const pricing: PricingTier[] = [
  { label: "Economy Sedan", price: "From €75", note: "Malpensa MXP → Milan Centre (up to 3 pax)" },
  { label: "Business Class", price: "From €110", note: "MXP → Milan Centre — Mercedes E/S-Class", popular: true },
  { label: "Linate Transfer", price: "From €45", note: "LIN → Milan Centre (up to 3 pax)" },
  { label: "Bergamo Transfer", price: "From €90", note: "BGY → Milan Centre (up to 3 pax)" },
  { label: "Group Minivan", price: "From €120", note: "MXP → Milan Centre (up to 7 pax)" },
];

const routes: RouteItem[] = [
  { from: "Milan Malpensa (MXP)", to: "Milan City Centre / Quadrilatero della Moda", duration: "~50–70 min", price: "From €75" },
  { from: "Milan Linate (LIN)", to: "Milan City Centre", duration: "~20–30 min", price: "From €45" },
  { from: "Milan Bergamo / Orio al Serio (BGY)", to: "Milan City Centre", duration: "~50–65 min", price: "From €90" },
  { from: "Hotel (Brera / Quadrilatero / Porta Nuova)", to: "Fashion Week venue or showroom", duration: "Varies by location", price: "On request" },
];

export default function MilanFashionWeekTransfersPage() {
  const url = "https://www.italytaxiservice.com/milan-fashion-week-transfers";

  return (
    <main className="min-h-screen text-navy-rich font-inter">
      <ServiceSchema
        name="Milan Fashion Week Transfers — Private Chauffeur Service"
        description="Private airport transfers and chauffeur service in Milan for Fashion Week: Malpensa, Linate and Bergamo pickups, hotel transfers, and travel between shows and appointments."
        url={url}
      />
      <Navbar />

      <PageHero
        titleTop="Milan Fashion Week 2026"
        titleBottom="Transfers & Chauffeur Service"
        description="Private airport transfers and chauffeur service built around a Fashion Week schedule — Malpensa, Linate and Bergamo pickups, hotel transfers, and travel between shows, showrooms and appointments."
        backgroundImage="/images/milan airport.jpg"
        buttonText="Book Your Fashion Week Transfer"
        breadcrumbs={[
          { name: "Home", item: "/" },
          { name: "Milan Fashion Week Transfers", item: "/milan-fashion-week-transfers" }
        ]}
      />

      <ServicePageContent
        introTitle="Private Transfers for Milan Fashion Week"
        introParagraphs={[
          "Milan Fashion Week runs across multiple venues rather than one single location — the Camera Nazionale della Moda Italiana's calendar for the current September edition (22–28 September 2026) lists over 200 appointments, spanning runway shows, presentations and events held at historic palazzi, brand showrooms concentrated around the Quadrilatero della Moda and Brera, and converted industrial spaces in the Tortona district. For anyone attending — whether for one show or a full week of appointments — that spread-out structure is the main transportation problem to solve.",
          "We provide private, pre-booked transfers built around that reality: airport pickups from any of Milan's three airports, hotel-to-venue journeys, and transport between shows, showrooms and meetings on the same day. Pricing is fixed and agreed before you travel, drivers are professional and English-speaking, and vehicles range from standard sedans to minivans for groups or extra luggage.",
          "This page covers the private-transfer service itself. If you're planning your arrival first, our airport-by-airport guides below go into the detail of getting from Malpensa, Linate or Bergamo into the city.",
        ]}
        detailTitle="Who This Service Is For"
        detailParagraphs={[
          "Designers, models, buyers and press attending shows and showroom appointments, where a fixed schedule across several locations makes a booked driver more practical than hailing transport between each stop.",
          "Fashion brand teams and delegations travelling together, often with multiple passengers and garment bags or sample cases — vehicles are sized for this rather than a standard 2-bag airport run.",
          "International visitors arriving for the first time, who benefit from a driver who already knows which Milan districts and venues are involved and how the city's Area C congestion zone and restricted traffic areas affect a Fashion Week itinerary.",
          "Anyone who simply wants arrival and departure sorted in advance during a period when Milan's hotels, taxis and ride-hailing apps are under noticeably higher demand than usual.",
        ]}
        benefits={[
          "Private transfers from Malpensa, Linate and Bergamo airports",
          "Hotel-to-venue and venue-to-venue transfers during Fashion Week",
          "Fixed prices agreed before you travel — no meter, no surge pricing",
          "Vehicles sized for groups, garment bags and sample cases on request",
          "English-speaking, professional drivers familiar with Milan's Area C and restricted zones",
          "Pre-booked meet-and-greet where arranged in advance",
          "Flight monitoring on airport transfers where supported",
          "Door-to-door service — no need to navigate public transport with luggage",
          "Return airport transfer can be booked in the same reservation",
          "Suitable for individual travellers, pairs, and larger fashion-team bookings",
        ]}
        pricingTitle="Sample Airport Transfer Fares"
        pricing={pricing}
        routesTitle="Common Fashion Week Journeys"
        routes={routes}
        relatedLinks={[
          { label: "Milan Fashion Week Airport Transfer Guide", href: "/blog/milan-fashion-week-airport-transfer-guide" },
          { label: "Transfers Between Fashion Week Shows", href: "/blog/milan-fashion-week-transfers-between-shows" },
          { label: "Milan Fashion Week Hotel Transfer Guide", href: "/blog/milan-fashion-week-hotel-transfer-guide" },
          { label: "Transportation for Designers, Models & Buyers", href: "/blog/milan-fashion-week-transportation-designers-models-buyers" },
          { label: "Milan Chauffeur Service", href: "/milan-chauffeur-service" },
          { label: "Book Now", href: "/book-now" },
        ]}
      />

      {/* Deep-dive editorial section */}
      <section className="py-20 bg-white font-inter">
        <div className="container mx-auto px-6 max-w-4xl space-y-10 text-gray-700 text-lg leading-relaxed">
          <div>
            <h2 className="text-3xl font-extrabold text-[#0F1C2E] mb-4">
              Why Fashion Week Travel Needs a Different Approach
            </h2>
            <p>
              A typical Milan visit involves one or two fixed points — an airport and a hotel. A Fashion Week
              itinerary usually involves several: an airport arrival, a hotel, and then a sequence of shows,
              showroom appointments or meetings across different districts on the same day, often on a schedule
              that shifts at short notice. Ride-hailing apps and street taxis become harder to find at short notice
              during the week itself, when demand across the city is highest. A pre-booked driver who holds your
              schedule removes that specific risk.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#0F1C2E] mb-3">
              Which Districts Are Involved
            </h3>
            <p>
              Fashion Week activity concentrates around a handful of Milan districts: the <strong>Quadrilatero della
              Moda</strong> and <strong>Brera</strong>, where many brand showrooms, presentations and boutique
              events are based; <strong>Porta Nuova</strong>; and the <strong>Tortona</strong> area, a former
              industrial zone now used for larger trade events and presentations. Some events also take place at
              <strong> Palazzo Reale</strong> and other central historic venues. Exactly which venues are in use
              changes every season, so we don't publish a fixed venue list here — once your own schedule is
              confirmed, that's what a driver plans the day's route around.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#0F1C2E] mb-3">
              Booking Around a Multi-Stop Day
            </h3>
            <p>
              For a single airport pickup or hotel transfer, a standard one-way booking is usually simplest. For a
              day involving several shows or appointments, an hourly or multi-stop booking — the same approach we
              use for{' '}
              <Link href="/services/hourly-taxi" className="text-[#F4C430] font-semibold hover:underline">
                hourly chauffeur hire
              </Link>{' '}
              generally — lets one driver and vehicle stay with you across the day rather than booking separately
              between each stop. Let us know your rough schedule when booking so the vehicle and timing match what
              the day actually needs.
            </p>
          </div>
          <div className="text-center pt-6">
            <Link
              href="/book-now"
              className="inline-block bg-[#F4C430] text-[#0F1C2E] font-bold px-10 py-4 rounded-full hover:bg-yellow-400 transition-colors text-sm uppercase tracking-widest"
            >
              Request a Fashion Week Transfer Quote
            </Link>
          </div>
        </div>
      </section>

      <HowItWorks />
      <FAQSection faqs={faqs} title="Milan Fashion Week Transfer FAQs" badge="Your Questions Answered" />
      <Footer />
    </main>
  );
}
