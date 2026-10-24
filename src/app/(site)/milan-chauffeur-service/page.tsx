import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import HowItWorks from '@/components/HowItWorks';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import ServiceSchema from '@/components/ServiceSchema';
import ServicePageContent from '@/components/ServicePageContent';
import BookingForm from '@/components/BookingForm';
import type { PricingTier, RouteItem } from '@/components/ServicePageContent';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { milanHotels, milanAirports, milanArrivalSlug } from '@/lib/milan-transfer-data';

export const metadata: Metadata = {
  title: "Milan Chauffeur & Private Car Service",
  description: "Private chauffeur and car service in Milan: fixed-price transfers from Malpensa, Linate and Bergamo, Fiera Milano runs, hourly city hire and Lake Como day trips.",
  alternates: { canonical: "/milan-chauffeur-service" },
  openGraph: {
    title: "Milan Chauffeur & Private Car Service",
    description: "Private chauffeur and car service in Milan: fixed-price transfers from Malpensa, Linate and Bergamo, Fiera Milano runs, hourly city hire and Lake Como day trips.",
    url: "https://www.italytaxiservice.com/milan-chauffeur-service",
    images: [{ url: '/images/milan airport.jpg', width: 1200, height: 630, alt: 'Milan Chauffeur Service — Private Taxi' }],
  },
};

const faqs = [
  {
    q: "How much does a chauffeur service from Milan Malpensa cost?",
    a: "A private chauffeur transfer from Milan Malpensa Airport (MXP) to Milan city centre starts from €75 for a standard sedan and from €110 for a business-class Mercedes E-Class or S-Class. Group minivan transfers for up to 7 passengers start from €120. All prices are fixed and include the motorway toll on the A8."
  },
  {
    q: "Do you serve all three Milan airports — Malpensa, Linate, and Bergamo?",
    a: "Yes. We provide private chauffeur transfers from all three airports serving the Milan metropolitan area: Malpensa (MXP, 50 km north-west), Linate (LIN, 7 km east), and Bergamo Orio al Serio (BGY, 45 km north-east). Each airport has different characteristics and our drivers know all three intimately."
  },
  {
    q: "Can you arrange transfers to Fiera Milano exhibition centre from the airport?",
    a: "Absolutely. Fiera Milano in Rho-Pero is one of Europe's largest exhibition centres and a major destination for business travellers arriving at Malpensa. The direct transfer from MXP to Fiera Milano takes approximately 25–35 minutes via the A8 and is one of our most frequently requested business routes. We can also arrange multi-stop itineraries covering Fiera Milano plus city hotels."
  },
  {
    q: "Can you take me from Milan to Lake Como or Lake Maggiore?",
    a: "Yes, day trips and one-way transfers to Italy's Lakes District are a speciality. From Milan city centre to Como takes approximately 45 minutes, to Bellagio on Lake Como approximately 75 minutes, and to Stresa on Lake Maggiore approximately 60 minutes. We offer both one-way transfers and full-day hire with driver."
  },
  {
    q: "What business amenities are available in your Milan chauffeur vehicles?",
    a: "Business-class bookings are assigned a Mercedes E-Class, S-Class or V-Class, with bottled water and phone chargers provided and Wi-Fi available on request — ask for it when you book so a suitably equipped vehicle is assigned. Drivers are professionally dressed and conversations in the car are private. We can issue an invoice for the individual transfer where applicable; we do not offer monthly or consolidated billing, and there is no corporate account to open."
  },
  {
    q: "Is an early morning or late night Milan airport transfer possible?",
    a: "Yes, the service runs around the clock, including 4am departures from Linate for early European flights and late-night arrivals at Malpensa. Our terms allow a surcharge on journeys starting between 22:00 and 06:00 and on Italian public holidays; where one applies it is included in the quote you receive, so the figure you confirm before travelling is the figure you pay."
  },
  {
    q: "Can I hire a car and driver by the hour in Milan?",
    a: "Yes. As well as single transfers we take hourly and full-day bookings with the driver staying with you — which usually works better than separate bookings for a day of meetings across several districts, a round of showroom visits, or an evening at La Scala followed by dinner in the Navigli. Tell us the hours you need and the stops you have in mind and we will quote the whole day."
  },
  {
    q: "How does hotel pickup work in Milan?",
    a: "For hotel and city pickups, your driver contacts you directly — by WhatsApp or phone, using the details you provide at booking — to confirm the exact pickup time and meeting point outside your hotel. It's the same direct driver-contact approach we use for airport meet-and-greet, just without the terminal name-sign step."
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
  { from: "Milan Malpensa (MXP)", to: "Milan City Centre", duration: "~50–70 min", price: "From €75" },
  { from: "Milan Linate (LIN)", to: "Milan City Centre", duration: "~20–30 min", price: "From €45" },
  { from: "Bergamo (BGY)", to: "Milan City Centre", duration: "~50–65 min", price: "From €90" },
  { from: "Milan Malpensa (MXP)", to: "Fiera Milano (Rho)", duration: "~25–35 min", price: "From €65" },
  { from: "Milan City Centre", to: "Lake Como (Como)", duration: "~45–55 min", price: "From €90" },
  { from: "Milan City Centre", to: "Lake Maggiore (Stresa)", duration: "~55–70 min", price: "From €110" },
];

// Milan's hotel-transfer pages, grouped by quarter of the city. The cluster is
// derived from each hotel's own `district` field rather than a hardcoded list, so
// a hotel added to `milanHotels` is grouped automatically and cannot end up
// unlinked from this hub.
const MILAN_CLUSTERS: { title: string; note: string; match: (d: string) => boolean }[] = [
  {
    title: 'Brera & the Quadrilatero della Moda',
    note: 'The fashion quarter and the artists\' streets beside it — largely pedestrian, so the drop-off point matters.',
    match: (d) => /Quadrilatero|Brera/i.test(d),
  },
  {
    title: 'Duomo & Missori',
    note: 'The cathedral core, inside the Area C congestion charge and partly closed to ordinary traffic.',
    match: (d) => /Duomo|Missori|Crocetta/i.test(d),
  },
  {
    title: 'Centrale & Repubblica',
    note: 'Around Milano Centrale station — the fastest side of the city to reach from Malpensa or Bergamo.',
    match: (d) => /Centrale|Repubblica/i.test(d),
  },
];

function milanHotelGroups() {
  const groups = MILAN_CLUSTERS.map((c) => ({
    title: c.title,
    note: c.note,
    hotels: milanHotels.filter((h) => c.match(h.district)),
  })).filter((g) => g.hotels.length > 0);

  const claimed = new Set(groups.flatMap((g) => g.hotels.map((h) => h.slug)));
  const rest = milanHotels.filter((h) => !claimed.has(h.slug));
  if (rest.length > 0) {
    groups.push({
      title: 'Porta Venezia, Monumentale & Fiera',
      note: 'The quarters beyond the centre, including the Fiera and CityLife exhibition district.',
      hotels: rest,
    });
  }
  return groups;
}

export default function MilanChauffeurServicePage() {
  const url = "https://www.italytaxiservice.com/milan-chauffeur-service";
  const malpensa = milanAirports.find((a) => a.code === 'MXP');

  return (
    <main className="min-h-screen text-navy-rich font-inter">
      <ServiceSchema
        name="Milan Chauffeur & Private Car Service"
        description="Private chauffeur and car service in Milan, with fixed-price transfers from Malpensa, Linate and Bergamo, hourly city hire and day trips to the Italian Lakes."
        url={url}
      />
      <Navbar />

      <PageHero
        titleTop="Milan Chauffeur &"
        titleBottom="Private Car Service"
        description="Fixed-price private transfers from Malpensa, Linate and Bergamo, plus hourly city hire, Fiera Milano runs and day trips to the Lakes. Quoted per journey, confirmed before you travel."
        backgroundImage="/images/milan airport.jpg"
        buttonText="Request a Milan Quote"
        breadcrumbs={[
          { name: "Home", item: "/" },
          { name: "Milan Chauffeur Service", item: "/milan-chauffeur-service" }
        ]}
      />

      <ServicePageContent
        introTitle="Chauffeur and Private Car Service in Milan"
        introParagraphs={[
          "A chauffeur service in Milan — also called a private car service, or simply car and driver hire — means a vehicle and driver booked ahead at an agreed price, rather than a metered taxi or a ride hailed on the day. You can book a single airport transfer, a journey across the city, a run out to the Fiera exhibition centre, hourly or full-day hire with the driver staying with you, or a day trip to the Lakes. Every journey is quoted before you book, and the price is confirmed before you travel.",
          "Milan is unique among Italian cities in having three functioning commercial airports: Malpensa International (MXP), the city's primary long-haul hub 50 km north-west; Linate (LIN), the convenient close-in business airport 7 km east of the centre; and Bergamo Orio al Serio (BGY), the low-cost gateway 45 km north-east. Each airport serves a different passenger profile and requires different routing into the city. Our drivers know all three, including the fastest routes at different times of day and the most efficient ways to navigate the A8, A51, and A4 motorways.",
          "Beyond airport transfers, our Milan chauffeur service covers the full range of business and leisure ground transportation needs: hotel-to-hotel transfers, multi-meeting city itineraries, corporate event transportation, and private day trips to the Italian Lakes District, Bergamo Alta, Brescia, and the Piedmont wine region.",
        ]}
        detailTitle="Milan Airport Transfer Service — Malpensa, Linate & Bergamo"
        detailParagraphs={[
          "Milan Malpensa Airport (MXP) is northern Italy's most important international airport, handling routes from North America, the Middle East, Asia, and all major European hubs. It sits 50 km north-west of Milan and 55 km from the city's main exhibition venue, Fiera Milano in Rho-Pero. The private transfer from Malpensa to Milan city centre takes 50–70 minutes via the A8 motorway. Motorway tolls are included in our quoted fare.",
          "Milan Linate Airport (LIN) is the preferred airport for business travellers on short European routes from London, Paris, Frankfurt, Amsterdam, and other hubs. Located just 7 km east of the city centre, a private transfer from Linate to Milan's Porta Nuova financial district or the fashion quadrangle takes approximately 20–30 minutes, door to door, with no connection to make at the city end. Our Linate transfer starts from €45.",
          "Bergamo Orio al Serio Airport (BGY) serves primarily Ryanair and easyJet routes and is one of Europe's busiest low-cost airports. Despite being branded as a Milan airport, it is 45 km north-east of the city and across a mountain ridge, meaning the journey takes 50–65 minutes in normal traffic. Our private transfer from Bergamo to Milan starts from €90.",
          "For business travellers attending Salone del Mobile, EICMA, MIDO, Lineapelle, and the other major trade fairs held at Fiera Milano, we offer direct airport-to-Fiera transfers. From Malpensa to Fiera Rho-Pero, we route via the direct SS336 connection, avoiding Milan city centre entirely and reaching the exhibition complex in approximately 25–35 minutes.",
          "Companies booking more than one journey can send the whole schedule in a single request and have each leg quoted together — useful when a visiting team arrives on different flights across the same week, or when a delegation needs several vehicles at the same terminal. An invoice can be provided for each individual transfer where applicable. We do not operate monthly or consolidated billing and there is no corporate account to open, and because we hold no reserved booking slots, a fixed date and time is best confirmed as early as you can.",
          "Outside of airport transfers, our Milan chauffeur service excels at full-day hire arrangements. Whether you need a driver to accompany you through a day of business meetings across multiple Milan districts, require transportation from hotel to fashion showrooms in the Brera and Montenapoleone quadrangle, or want a private driver for an evening at La Scala and dinner in the Navigli, we provide seamless, discreet support throughout.",
        ]}
        benefits={[
          "Service from all three Milan airports: Malpensa, Linate, and Bergamo",
          "Business-class Mercedes-Benz vehicles — E-Class, S-Class and V-Class",
          "English-speaking, NCC-licensed, professionally dressed drivers",
          "Fixed all-inclusive prices including A8 motorway toll",
          "Direct transfers to Fiera Milano exhibition centre",
          "Same-day and last-minute bookings accepted (subject to availability)",
          "Hourly and full-day hire with the driver staying with you",
          "Invoice for the individual transfer where applicable",
          "Day trips to Lake Como, Lake Maggiore, and the Italian Lakes",
          "Real-time flight tracking — driver adjusts for delays automatically",
          "24/7 availability including 4am departures and midnight arrivals",
          "Free cancellation up to 24 hours before pickup",
        ]}
        pricingTitle="Milan Chauffeur Service Prices"
        pricing={pricing}
        routesTitle="Most Popular Milan Transfer Routes"
        routes={routes}
        relatedLinks={[
          { label: "Rome Airport Transfer", href: "/rome-airport-transfer" },
          { label: "Florence Private Taxi", href: "/florence-private-taxi" },
          { label: "Business Taxi Service", href: "/services/business-taxi" },
          { label: "Milan City Taxi", href: "/city/milan" },
          { label: "Milan Malpensa Airport", href: "/airport/milan-malpensa" },
          { label: "Milan Linate Airport", href: "/airport/milan-linate" },
          { label: "Milan to Lake Como", href: "/route/milan-to-lake-como-taxi" },
          { label: "CPHI Milan Transfer Guide", href: "/blog/cphi-milan-transfer" },
          { label: "Milano Centrale to Malpensa Guide", href: "/blog/milano-centrale-to-malpensa-transfer" },
          { label: "EICMA Milan Transfer Guide", href: "/blog/eicma-milan-transfer" },
          { label: "Artigiano in Fiera 2026 Transfer Guide", href: "/blog/artigiano-in-fiera-2026-transfers" },
          { label: "Salone del Mobile 2026 Travel Guide", href: "/blog/salone-del-mobile-2026-travel-guide" },
          { label: "Book Now", href: "/book-now" },
        ]}
      />

      {/* Deep-dive editorial section */}
      <section className="py-20 bg-white font-inter">
        <div className="container mx-auto px-6 max-w-4xl space-y-10 text-gray-700 text-lg leading-relaxed">
          <div>
            <h2 className="text-3xl font-extrabold text-[#0F1C2E] mb-4">
              Milan&apos;s Restricted Zones and Where a Car Can Drop You
            </h2>
            <p>
              Milan restricts traffic in two overlapping ways, and both affect where a car can actually
              reach you. <strong>Area C</strong> is the paid congestion charge covering the historic centre
              inside the Cerchia dei Bastioni, and it operates on weekdays. <strong>Area B</strong> is a far
              larger low-emission zone covering most of the municipality, which restricts entry by vehicle
              emissions class rather than by payment. On top of both, much of the Duomo core and the
              Quadrilatero is pedestrianised or one-way.
            </p>
            <p className="mt-4">
              In practice this matters most for the drop-off. Tell us the full address with the street number
              and we will plan the route and the nearest point a car can legally stop, rather than leaving you
              to discover a street is closed on arrival. If your hotel sits inside a pedestrian block, the
              driver will set you down at the closest accessible corner and help with the luggage from there.
            </p>
          </div>
          {/* Exhibition & congress venues — the page's Fiera coverage was previously
              spread across an FAQ, a route-table row and three separate paragraphs.
              It is consolidated here under stable anchors so the Milan event guides
              can deep-link to the venue they actually concern. Journey times, fares
              and routing deliberately live once, in the route table and FAQ above,
              rather than being restated here. */}
          <div id="exhibition-venues" className="scroll-mt-28">
            <h2 className="text-3xl font-extrabold text-[#0F1C2E] mb-4">
              Milan Exhibition &amp; Congress Venues
            </h2>
            <p className="mb-8">
              Milan hosts more than 60 major international trade fairs and exhibitions per year, drawing millions
              of business visitors. Three venues account for most of them, and they sit in different parts of the
              metropolitan area — which is what decides the journey from each airport. Fares and journey times for
              the airport runs are set out in the route table and FAQs on this page. Our{' '}
              <strong>Milan chauffeur service</strong> covers the airport legs, the hotel-to-venue runs and the
              return for these events. For a delegation attending across several days, send the full schedule in
              one request and we will quote the journeys together.
            </p>

            <div className="space-y-8">
              <div id="fiera-milano-rho" className="scroll-mt-28">
                <h3 className="text-2xl font-bold text-[#0F1C2E] mb-3">Fiera Milano, Rho-Pero</h3>
                <p className="mb-4">
                  Fiera Milano in Rho-Pero is one of Europe&apos;s largest exhibition centres and the venue for
                  Salone del Mobile, EICMA, MIDO, Lineapelle and Artigiano in Fiera. It lies north-west of the
                  city on the same side as Malpensa, which is why we reach it without entering central Milan at
                  all. It is also the one venue where arrivals cluster into a few heavy days, so we recommend
                  booking the airport leg early for the opening and closing days of a large fair. Multi-stop
                  itineraries covering the halls plus a city hotel can be arranged on the same booking.
                </p>
                <p className="text-base text-gray-600">
                  Event guides:{' '}
                  <Link href="/blog/eicma-milan-transfer" className="text-[#F4C430] font-semibold hover:underline">EICMA</Link>{' · '}
                  <Link href="/blog/salone-del-mobile-2026-travel-guide" className="text-[#F4C430] font-semibold hover:underline">Salone del Mobile</Link>{' · '}
                  <Link href="/blog/cphi-milan-transfer" className="text-[#F4C430] font-semibold hover:underline">CPHI Milan</Link>{' · '}
                  <Link href="/blog/artigiano-in-fiera-2026-transfers" className="text-[#F4C430] font-semibold hover:underline">Artigiano in Fiera</Link>
                </p>
              </div>

              <div id="fieramilanocity" className="scroll-mt-28">
                <h3 className="text-2xl font-bold text-[#0F1C2E] mb-3">Fieramilanocity</h3>
                <p>
                  Fieramilanocity is Fiera Milano&apos;s in-city exhibition district, beside the CityLife quarter
                  on the Portello side of Milan. Because it sits inside the city rather than out at Rho, arrivals
                  here are shaped by the central traffic restrictions described above, and the drop-off point
                  matters more than the total distance.
                </p>
              </div>

              <div id="mico" className="scroll-mt-28">
                <h3 className="text-2xl font-bold text-[#0F1C2E] mb-3">MiCo — Milano Congressi</h3>
                <p>
                  MiCo Milano Congressi is the city&apos;s congress centre, next to Fieramilanocity in the same
                  Portello and CityLife district, and it hosts conferences and medical and industry congresses
                  rather than the large consumer fairs held at Rho. Like Fieramilanocity it is a city-centre
                  arrival, so it is routed differently from the Rho venue even when the flight lands at the
                  same airport.
                </p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#0F1C2E] mb-3">
              Milan to the Italian Lakes — Day Trip Transfers
            </h3>
            <p>
              The Italian Lakes — Como, Maggiore, Garda, and Lugano — are among northern Italy&apos;s greatest
              natural attractions and are all within 90 minutes of Milan. Our chauffeur service operates private
              day transfers from Milan to all lake destinations. The most popular route is{' '}
              <Link href="/route/milan-to-lake-como-taxi" className="text-[#F4C430] font-semibold hover:underline">
                Milan to Lake Como
              </Link>{' '}
              — a 45-minute transfer to the town of Como, or a 75-minute drive to the famous lakeside town of
              Bellagio. Full-day hire includes a return journey at your preferred time, allowing you to explore
              the lake towns, villas, and gardens at your own pace.
            </p>
          </div>
          {malpensa && (
            <div>
              <h3 className="text-2xl font-bold text-[#0F1C2E] mb-3">
                Milan Hotel Transfers by Quarter
              </h3>
              <p className="mb-8">
                We run direct fixed-price routes between Milan&apos;s airports and individual hotels. They are grouped
                below by quarter, because in Milan that is what shapes the arrival: much of the Duomo core sits inside
                the Area C charge and the Quadrilatero&apos;s streets are largely pedestrian, while the hotels around
                Centrale are the quickest to reach from Malpensa. Each page covers the route in both directions and
                links to the Linate and Bergamo versions of the same journey.
              </p>
              <div className="space-y-8">
                {milanHotelGroups().map((group) => (
                  <div key={group.title}>
                    <h4 className="text-lg font-bold text-[#0F1C2E] mb-1">{group.title}</h4>
                    <p className="text-base text-gray-600 mb-4">{group.note}</p>
                    <div className="flex flex-wrap gap-3">
                      {group.hotels.map((hotel) => (
                        <Link
                          key={hotel.slug}
                          href={`/${milanArrivalSlug(malpensa, hotel)}`}
                          className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-gray-200 text-navy font-semibold text-sm bg-white hover:border-[#F4C430] hover:text-[#F4C430] hover:shadow-md transition-all"
                        >
                          <ChevronRight className="w-4 h-4" />
                          {hotel.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          <div className="text-center pt-6">
            <Link
              href="/book-now"
              className="inline-block bg-[#F4C430] text-[#0F1C2E] font-bold px-10 py-4 rounded-full hover:bg-yellow-400 transition-colors text-sm uppercase tracking-widest"
            >
              Book Your Milan Chauffeur
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white" aria-labelledby="milan-quote">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 id="milan-quote" className="text-3xl md:text-4xl font-bold text-navy mb-8 text-center">
            Request a Milan chauffeur quote
          </h2>
          <BookingForm sourceName="Milan Chauffeur Page" />
        </div>
      </section>

      <HowItWorks />
      <FAQSection faqs={faqs} title="Milan Chauffeur Service FAQs" badge="Your Questions Answered" />
      <Footer />
    </main>
  );
}
