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
  title: "Florence Private Taxi | Airport Transfer & City Tours",
  description: "Private taxi in Florence from FLR airport, ZTL access, Tuscany day tours. Fixed prices, NCC-licensed drivers. Rome & Pisa connections available.",
  alternates: { canonical: "/florence-private-taxi" },
  openGraph: {
    title: "Florence Private Taxi | Airport Transfer & City Tours",
    description: "Private taxi in Florence from FLR airport, ZTL access, Tuscany day tours. Fixed prices, NCC-licensed drivers. Rome & Pisa connections available.",
    url: "https://www.italytaxiservice.com/florence-private-taxi",
    images: [{ url: '/images/florence airport.webp', width: 1200, height: 630, alt: 'Florence Private Taxi Service' }],
  },
};

const faqs = [
  {
    q: "How much is a private taxi from Florence airport to the city centre?",
    a: "A private taxi transfer from Florence Amerigo Vespucci Airport (FLR) to Florence city centre starts from €35 for a standard sedan. The journey takes approximately 20–25 minutes covering the 5 km between the airport and Piazza del Duomo. Prices are fully fixed and include all costs."
  },
  {
    q: "Can your drivers enter the Florence ZTL (restricted traffic zone)?",
    a: "Yes. Florence has one of Italy's most strictly enforced ZTL systems, covering almost the entire historic city centre. Our NCC-licensed drivers are specifically authorised to enter the Florence ZTL and deliver you directly to the door of your hotel or apartment in the restricted historic centre — including hotels near the Duomo, Ponte Vecchio, Piazza della Signoria, and Santa Croce."
  },
  {
    q: "Do you offer day trips to Siena, Pisa, Chianti, and other Tuscan destinations?",
    a: "Yes, Tuscany day trips are one of our most popular Florence services. We offer private transfers and guided excursions to Siena (75 km, approximately 1.5 hours), Pisa and the Leaning Tower (80 km, approximately 1.5 hours), the Chianti wine region (30–60 km depending on your winery), Lucca (75 km), San Gimignano (55 km), and the Cinque Terre coast (150 km, approximately 2.5 hours)."
  },
  {
    q: "Can I book a transfer from Florence to Rome or Venice?",
    a: "Yes. Florence is ideally positioned as a central hub for city-to-city transfers across Italy. Popular routes include Florence to Rome (approximately 3 hours via the A1 motorway), Florence to Venice (approximately 2.5 hours via the A1 and A4), and Florence to Bologna (approximately 1.5 hours). These can be booked as one-way or return journeys."
  },
  {
    q: "Is there a train from Florence airport to the city centre?",
    a: "Florence airport is connected to the city by a new tramway link (T2 line), which takes approximately 20 minutes to reach Santa Maria Novella station. However, with luggage, young children, or multiple passengers, a private taxi is often more practical and the price difference is minimal. Unlike the tram, our driver takes you directly to your accommodation address, including inside the ZTL."
  },
  {
    q: "What is the best vehicle for a Tuscany day tour?",
    a: "For a couple or small family (up to 3 passengers), our Mercedes E-Class sedan provides comfortable touring with excellent visibility and road presence. For groups of 4–7, our V-Class minivan is ideal — spacious, elevated seating, and panoramic windows perfect for the Tuscan countryside. For groups of 8 or more, we can arrange a larger Sprinter-class vehicle."
  }
];

const pricing: PricingTier[] = [
  { label: "Airport Sedan", price: "From €35", note: "FLR → Florence Centre (up to 3 pax)" },
  { label: "Business Class", price: "From €60", note: "FLR → Florence Centre — Mercedes E-Class", popular: true },
  { label: "Group Minivan", price: "From €75", note: "FLR → Florence Centre (up to 7 pax)" },
  { label: "Tuscany Day Tour", price: "From €180", note: "Full day with driver — Siena, Pisa, or Chianti" },
];

const routes: RouteItem[] = [
  { from: "Florence Airport (FLR)", to: "Florence City Centre", duration: "~20–25 min", price: "From €35" },
  { from: "Florence City Centre", to: "Pisa (Leaning Tower)", duration: "~1.5 hrs", price: "From €110" },
  { from: "Florence City Centre", to: "Siena", duration: "~1.5 hrs", price: "From €120" },
  { from: "Florence City Centre", to: "Chianti Wine Region", duration: "~45–60 min", price: "From €90" },
  { from: "Florence City Centre", to: "Rome (city-to-city)", duration: "~3 hrs", price: "From €280" },
  { from: "Florence City Centre", to: "Venice (city-to-city)", duration: "~2.5 hrs", price: "From €260" },
];

export default function FlorencePrivateTaxiPage() {
  const url = "https://www.italytaxiservice.com/florence-private-taxi";

  return (
    <main className="min-h-screen text-navy-rich font-inter">
      <ServiceSchema
        name="Florence Private Taxi — Airport Transfer & Tuscany Tours"
        description="Private taxi service in Florence from FLR airport, with ZTL access, Tuscany day tours, and city-to-city transfers to Rome and Venice."
        url={url}
      />
      <Navbar />

      <PageHero
        titleTop="Florence Private Taxi"
        titleBottom="Airport Transfer & Tuscany Tours"
        description="Private taxi from Florence Airport with full ZTL access to the historic centre. Day tours to Siena, Pisa, Chianti, and beyond. Fixed prices, NCC-licensed drivers, instant booking."
        backgroundImage="/images/florence airport.webp"
        buttonText="Book Florence Taxi Now"
        breadcrumbs={[
          { name: "Home", item: "/" },
          { name: "Florence Private Taxi", item: "/florence-private-taxi" }
        ]}
      />

      <ServicePageContent
        introTitle="Florence's Most Trusted Private Taxi Service"
        introParagraphs={[
          "Florence — Firenze — is the city that gave the world the Renaissance. Its streets are lined with the greatest concentration of art and architecture on earth, and its surrounding Tuscan countryside produces some of Italy's most celebrated wines and landscapes. Navigating this extraordinary city by private taxi requires more than a vehicle and a driver: it requires NCC authorisation to enter Florence's strictly policed ZTL zone, local knowledge of the narrow medieval streets, and the expertise to reach hotels tucked inside the historic centre that standard vehicles simply cannot legally access.",
          "Italy Taxi Service provides a professional private taxi service in Florence that covers all aspects of ground transportation in the city and the wider Tuscan region: airport transfers from Amerigo Vespucci Airport (FLR), private city tours, day excursions to Siena and Pisa, winery tours in Chianti, and city-to-city transfers to Rome, Venice, Bologna, and beyond. All journeys are fixed-price, pre-booked, and handled by NCC-licensed English-speaking drivers.",
          "Florence Amerigo Vespucci Airport is one of Italy's most conveniently located airports — just 5 km from Piazza del Duomo, meaning the transfer from arrivals to your hotel takes approximately 20–25 minutes in normal traffic. Despite this short distance, the ZTL restriction means that only authorised professional vehicles can complete the final stretch into the city centre. Our private taxi from FLR to Florence eliminates this complication entirely.",
        ]}
        detailTitle="Florence Airport Transfer & City Taxi Service"
        detailParagraphs={[
          "Florence Amerigo Vespucci Airport (IATA: FLR) operates domestic and European routes and handles approximately 3 million passengers per year. The airport has one terminal, making meet-and-greet straightforward. Your driver waits inside arrivals, and the transfer to central Florence — including all ZTL-restricted hotels near the Duomo, Santa Croce, Oltrarno, and Piazza della Repubblica — takes approximately 20–25 minutes.",
          "Florence's ZTL (Zona a Traffico Limitato) is one of the most extensive in Italy and one of the most rigorously enforced. The restricted zone covers essentially the entire medieval city centre — the area inside the original 14th-century city walls. Cameras at every ZTL entry point automatically record all vehicles entering, and fines for unauthorised access are significant. Our NCC licences specifically authorise entry, making our service the only way to receive door-to-door transfers to hotels inside the restricted centre.",
          "Beyond the airport, our Florence private taxi service covers the full range of city transportation needs. For leisure travellers, we offer guided private tours with drivers who can narrate the history of the key sights — the Uffizi Gallery, Ponte Vecchio, Piazzale Michelangelo, the Baptistery, and the Palazzo Vecchio — while driving you between them at your own pace.",
          "Day trips from Florence into the Tuscan countryside are among the most rewarding experiences Italy offers. Our drivers know the roads, the wineries, the hilltop villages, and the best viewpoints. A private day tour to Siena and San Gimignano (approximately 6–8 hours with stops) typically covers the medieval Piazza del Campo in Siena, the iconic skyline of San Gimignano, and a winery or olive oil estate in between.",
          "The famous Chianti Classico wine route — the Chiantigiana road — runs through the heart of Tuscany between Florence and Siena. A half-day tour covers two or three estates, with private tastings arranged in advance. Our drivers understand the etiquette of winery visits and can assist with language if needed, making the experience smooth even for first-time visitors.",
          "For travellers using Florence as a base for wider Tuscany exploration, we offer multi-day programmes combining private transportation with accommodation recommendations. The Etruscan Coast, Maremma nature reserve, Monte Argentario, and the thermal spas near Montepulciano are all within two hours of Florence and make excellent private day excursions.",
        ]}
        benefits={[
          "NCC-licensed drivers with full access to Florence's ZTL historic centre",
          "Private taxi from Florence Airport (FLR) from €35",
          "Meet & Greet inside FLR arrivals hall with personalised name sign",
          "Day tours to Siena, Pisa, Chianti, San Gimignano, and Cinque Terre",
          "City-to-city transfers to Rome, Venice, and Bologna",
          "English-speaking drivers with local Tuscan knowledge",
          "Fixed all-inclusive prices with no metered surprises",
          "Premium vehicles: Mercedes E-Class, V-Class, and Sprinter",
          "24/7 availability — early morning and late night transfers covered",
          "Private winery tours and Chianti Classico excursions",
          "Free child seats, booster seats, and infant carriers on request",
          "Free cancellation up to 24 hours before travel",
        ]}
        pricingTitle="Florence Taxi & Transfer Prices"
        pricing={pricing}
        routesTitle="Popular Florence Transfer Routes"
        routes={routes}
        relatedLinks={[
          { label: "Rome Airport Transfer", href: "/rome-airport-transfer" },
          { label: "Milan Chauffeur Service", href: "/milan-chauffeur-service" },
          { label: "Private Tours Italy", href: "/services/private-tours" },
          { label: "Florence City Taxi", href: "/city/florence" },
          { label: "Rome to Florence Transfer", href: "/route/rome-to-florence-taxi" },
          { label: "Book Now", href: "/book-now" },
        ]}
      />

      {/* Deep-dive editorial section */}
      <section className="py-20 bg-white font-inter">
        <div className="container mx-auto px-6 max-w-4xl space-y-10 text-gray-700 text-lg leading-relaxed">
          <div>
            <h2 className="text-3xl font-extrabold text-[#0F1C2E] mb-4">
              Florence ZTL — The Essential Guide for Visitors
            </h2>
            <p>
              More tourists receive unexpected fines in Florence than in almost any other Italian city, and the
              cause is almost always the same: driving into the ZTL. The Zone A (the innermost historic core
              around the Duomo, Piazza della Signoria, and Ponte Vecchio) is camera-monitored 24 hours a day.
              Zone B (a wider band including Oltrarno and the university area) has restrictions during daytime
              hours. Hotels inside these zones are legally required to register guests who arrive by authorised
              vehicle — which is why our NCC-licensed drivers are specifically cleared to access them. Do not
              attempt to drive a hire car to a hotel in the Florence centro storico: the fine arrives weeks
              later by post and is typically €100–200 per camera triggered.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#0F1C2E] mb-3">
              Tuscany Day Tours — The Best Excursions from Florence
            </h3>
            <p>
              Tuscany is one of the world&apos;s most celebrated travel destinations, and Florence is its ideal base.
              With a private driver and vehicle at your disposal, the entire region opens up. The classic{' '}
              <strong>Siena and San Gimignano day trip</strong> takes in two of Tuscany&apos;s finest hilltop
              medieval cities in a single day. Siena&apos;s shell-shaped Piazza del Campo is the most beautiful
              civic square in Italy; San Gimignano&apos;s towers rise from the Tuscan hills like a fairy-tale skyline.
              A <strong>Chianti wine tour</strong> from Florence explores the rolling vineyards between Florence
              and Siena, with private cellar visits at some of Italy&apos;s finest estates. And the{' '}
              <Link href="/attraction-transfer/leaning-tower-of-pisa-taxi-transfer" className="text-[#F4C430] font-semibold hover:underline">
                Pisa Leaning Tower transfer
              </Link>{' '}
              is one of our most booked routes — a 90-minute drive west to one of the world&apos;s most recognisable
              landmarks.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#0F1C2E] mb-3">
              Florence to Rome — The Classic Tuscan Road Transfer
            </h3>
            <p>
              The A1 Autostrada del Sole between Florence and Rome is one of Italy&apos;s great drives — three
              hours through rolling Tuscan hills, the Apennine mountains, and eventually into the Roman campagna.
              Our{' '}
              <Link href="/route/rome-to-florence-taxi" className="text-[#F4C430] font-semibold hover:underline">
                Florence to Rome private transfer
              </Link>{' '}
              starts from €280 for a standard sedan. Many travellers choose to make stops along the way — at
              the hilltop town of Orvieto, the hot springs of Viterbo, or the medieval centre of Civita di
              Bagnoregio. Our drivers can accommodate en-route stops at an additional hourly rate.
            </p>
          </div>
          <div className="text-center pt-6">
            <Link
              href="/book-now"
              className="inline-block bg-[#F4C430] text-[#0F1C2E] font-bold px-10 py-4 rounded-full hover:bg-yellow-400 transition-colors text-sm uppercase tracking-widest"
            >
              Book Your Florence Private Taxi
            </Link>
          </div>
        </div>
      </section>

      <HowItWorks />
      <FAQSection faqs={faqs} title="Florence Private Taxi FAQs" badge="Your Questions Answered" />
      <Footer />
    </main>
  );
}
