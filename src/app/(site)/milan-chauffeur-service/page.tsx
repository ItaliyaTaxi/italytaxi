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
  title: "Milan Chauffeur Service | Private Taxi MXP LIN BGY",
  description: "Premium chauffeur service in Milan from Malpensa, Linate & Bergamo airports. Business-class vehicles, suited drivers, fixed prices. Book online instantly.",
  alternates: { canonical: "/milan-chauffeur-service" },
  openGraph: {
    title: "Milan Chauffeur Service | Private Taxi MXP LIN BGY",
    description: "Premium chauffeur service in Milan from Malpensa, Linate & Bergamo airports. Business-class vehicles, suited drivers, fixed prices. Book online instantly.",
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
    a: "Our business-class vehicles for Milan include complimentary bottled water, phone chargers, Wi-Fi hotspot on request, a silent/privacy mode for sensitive calls, and a suited professional driver trained in corporate etiquette. Vehicles are either Mercedes E-Class, S-Class, or V-Class. Monthly invoicing and corporate accounts are available for regular business clients."
  },
  {
    q: "Is an early morning or late night Milan airport transfer possible?",
    a: "Yes. Our Milan chauffeur service operates 24 hours a day, 365 days a year. We regularly handle 4am departures from Linate for early morning European business flights, and midnight arrivals at Malpensa for long-haul intercontinental flights. There is no surcharge for unsociable hours on pre-booked transfers."
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

export default function MilanChauffeurServicePage() {
  const url = "https://www.italytaxiservice.com/milan-chauffeur-service";

  return (
    <main className="min-h-screen text-navy-rich font-inter">
      <ServiceSchema
        name="Milan Chauffeur Service — Private Taxi from MXP, LIN & BGY"
        description="Premium private chauffeur service in Milan from all three airports. Business-class vehicles, NCC-licensed drivers, fixed prices, 24/7 availability."
        url={url}
      />
      <Navbar />

      <PageHero
        titleTop="Milan Chauffeur Service"
        titleBottom="Private Taxi from MXP, LIN & BGY"
        description="Premium business-class private transfers from all three Milan airports. Fixed prices, suited NCC-licensed drivers, silent-ride option, and 24/7 corporate availability."
        backgroundImage="/images/milan airport.jpg"
        buttonText="Book Milan Chauffeur Now"
        breadcrumbs={[
          { name: "Home", item: "/" },
          { name: "Milan Chauffeur Service", item: "/milan-chauffeur-service" }
        ]}
      />

      <ServicePageContent
        introTitle="Milan's Premier Professional Chauffeur Service"
        introParagraphs={[
          "Milan is Italy's undisputed financial, fashion, and design capital — a city where the quality of your arrival matters. Italy Taxi Service provides a premium chauffeur service in Milan that matches the city's standards: spotless late-model vehicles, professionally dressed and trained drivers, fixed all-inclusive pricing, and the kind of quiet, efficient service that business travellers expect. Whether you are arriving at Malpensa for a board meeting, at Linate for a trade show, or at Bergamo after a long-haul connection, your private driver is waiting.",
          "Milan is unique among Italian cities in having three functioning commercial airports: Malpensa International (MXP), the city's primary long-haul hub 50 km north-west; Linate (LIN), the convenient close-in business airport 7 km east of the centre; and Bergamo Orio al Serio (BGY), the low-cost gateway 45 km north-east. Each airport serves a different passenger profile and requires different routing into the city. Our drivers know all three, including the fastest routes at different times of day and the most efficient ways to navigate the A8, A51, and A4 motorways.",
          "Beyond airport transfers, our Milan chauffeur service covers the full range of business and leisure ground transportation needs: hotel-to-hotel transfers, multi-meeting city itineraries, corporate event transportation, and private day trips to the Italian Lakes District, Bergamo Alta, Brescia, and the Piedmont wine region.",
        ]}
        detailTitle="Milan Airport Transfer Service — Malpensa, Linate & Bergamo"
        detailParagraphs={[
          "Milan Malpensa Airport (MXP) is northern Italy's most important international airport, handling routes from North America, the Middle East, Asia, and all major European hubs. It sits 50 km north-west of Milan and 55 km from the city's main exhibition venue, Fiera Milano in Rho-Pero. The private transfer from Malpensa to Milan city centre takes 50–70 minutes via the A8 motorway. Motorway tolls are included in our quoted fare.",
          "Milan Linate Airport (LIN) is the preferred airport for business travellers on short European routes from London, Paris, Frankfurt, Amsterdam, and other hubs. Located just 7 km east of the city centre, a private transfer from Linate to Milan's Porta Nuova financial district or the fashion quadrangle takes approximately 20–30 minutes — faster and more direct than any train or bus option. Our Linate transfer starts from €45.",
          "Bergamo Orio al Serio Airport (BGY) serves primarily Ryanair and easyJet routes and is one of Europe's busiest low-cost airports. Despite being branded as a Milan airport, it is 45 km north-east of the city and across a mountain ridge, meaning the journey takes 50–65 minutes in normal traffic. Our private transfer from Bergamo to Milan starts from €90.",
          "For business travellers attending Salone del Mobile, EICMA, MIDO, Lineapelle, and the other major trade fairs held at Fiera Milano, we offer direct airport-to-Fiera transfers. From Malpensa to Fiera Rho-Pero, we route via the direct SS336 connection, avoiding Milan city centre entirely and reaching the exhibition complex in approximately 25–35 minutes.",
          "Corporate clients requiring regular transfers can arrange monthly invoicing, designated driver preferences, and priority booking access. Our account management team handles volume clients across all three Milan airports with consolidated billing and dedicated support.",
          "Outside of airport transfers, our Milan chauffeur service excels at full-day hire arrangements. Whether you need a driver to accompany you through a day of business meetings across multiple Milan districts, require transportation from hotel to fashion showrooms in the Brera and Montenapoleone quadrangle, or want a private driver for an evening at La Scala and dinner in the Navigli, we provide seamless, discreet support throughout.",
        ]}
        benefits={[
          "Service from all three Milan airports: Malpensa, Linate, and Bergamo",
          "Business-class Mercedes-Benz fleet — E-Class, S-Class, and V-Class",
          "Suited, professionally trained English-speaking NCC drivers",
          "Fixed all-inclusive prices including A8 motorway toll",
          "Direct transfers to Fiera Milano exhibition centre",
          "Same-day and last-minute bookings accepted (subject to availability)",
          "Silent/privacy mode available for sensitive business calls",
          "Corporate accounts with monthly invoicing",
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
          { label: "Milan to Lake Como", href: "/route/milan-to-lake-como-taxi" },
          { label: "Book Now", href: "/book-now" },
        ]}
      />

      {/* Deep-dive editorial section */}
      <section className="py-20 bg-white font-inter">
        <div className="container mx-auto px-6 max-w-4xl space-y-10 text-gray-700 text-lg leading-relaxed">
          <div>
            <h2 className="text-3xl font-extrabold text-[#0F1C2E] mb-4">
              Why Milan Demands a Professional Chauffeur Service
            </h2>
            <p>
              Milan&apos;s city centre is a complex grid of one-way streets, restricted zones, and congestion
              that defies navigation without local knowledge. The Zona A and Zona B traffic restriction areas
              cover large parts of the central business district and apply at different times of day. The Areas C
              congestion charge operates on weekdays and requires a paid permit for standard vehicles. Our
              NCC-licensed drivers are authorised to operate within these zones and know the most efficient routes
              between Milan&apos;s airports, hotels, exhibition venues, and business districts at any hour.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#0F1C2E] mb-3">
              Milan for Business Travellers — What Our Chauffeur Service Covers
            </h3>
            <p>
              Milan hosts more than 60 major international trade fairs and exhibitions per year, drawing millions
              of business visitors. The principal venues — Fiera Milano in Rho-Pero, Fieramilanocity in the
              city centre, and MiCo Milano Congressi — each require specific routing from the three airports.
              Our <strong>Milan chauffeur service</strong> is the preferred choice of companies sending executives
              to Italy&apos;s fashion, design, automotive, and finance sector events. We also provide multi-day
              engagement contracts for delegations requiring a dedicated driver throughout their stay.
            </p>
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

      <HowItWorks />
      <FAQSection faqs={faqs} title="Milan Chauffeur Service FAQs" badge="Your Questions Answered" />
      <Footer />
    </main>
  );
}
