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
  title: "Private Airport Transfers Italy | Best Prices, Meet & Greet",
  description: "Book reliable, fixed-price private airport transfers across Italy. Professional English-speaking drivers for Rome FCO, Milan MXP, Venice VCE and 30+ airports. 24/7 service.",
  alternates: {
    canonical: "/services/airport-transfers",
  }
};

const faqs = [
  {
    q: "Where will I meet my driver at the airport?",
    a: "Your driver will be waiting inside the arrivals hall, holding a personalised name-sign, immediately after the baggage claim exit. You will receive the driver's mobile number before your flight lands so you can contact them directly. For major airports like Rome Fiumicino and Milan Malpensa, our drivers are positioned at the designated meetingpoints in the international arrivals terminal, making you easy to spot even in busy crowd periods."
  },
  {
    q: "What happens if my flight to Italy is delayed?",
    a: "We monitor all flights in real-time through live flight-tracking software. If your flight is delayed or arrives early, your driver automatically adjusts the pickup time at no extra charge. There is absolutely no penalty for flight delays, whether a short 30-minute hold or a multi-hour delay. Your driver will be there whenever your aircraft lands."
  },
  {
    q: "Is there free waiting time included in the airport transfer price?",
    a: "Yes. We include 60 minutes of complimentary waiting time after your scheduled landing time for international flights, and 30 minutes for domestic flights. This gives you ample time to clear immigration queues, collect baggage, and pass through customs without any rush. If you need additional waiting time beyond this, a small supplementary charge applies, which we will always communicate in advance."
  },
  {
    q: "Do you service all Italian airports, including smaller regional ones?",
    a: "Yes. We operate from all major Italian airports — Rome Fiumicino (FCO), Rome Ciampino (CIA), Milan Malpensa (MXP), Milan Linate (LIN), Venice Marco Polo (VCE), Florence (FLR), Naples (NAP), Catania, Palermo, Bari, Bologna, Genoa, Turin, Pisa, Verona, Bergamo (BGY), Brindisi, Cagliari, and all regional airports. If your airport is not listed, simply contact us — we almost certainly cover it."
  },
  {
    q: "Are the airport transfer prices fixed or metered?",
    a: "Our prices are 100% fixed from the moment of booking. There are no hidden charges for traffic, toll roads, luggage, or waiting time within the grace period. The price you see when you confirm your booking is the exact amount you pay — nothing more, regardless of how long the journey takes or what road conditions you encounter."
  },
  {
    q: "Can I book a return airport transfer at the same time?",
    a: "Absolutely. We encourage booking both legs of your journey at once for guaranteed availability and streamlined coordination. Simply add your return date, departure time, and flight details during the booking process and we'll confirm both reservations. Booking both journeys together also simplifies your logistics — one booking reference, one payment, one trusted provider."
  },
  {
    q: "What type of vehicles are available for airport transfers?",
    a: "Our fleet ranges from standard sedans (up to 3 passengers with luggage) to premium Mercedes-Benz E-Class executive saloons and spacious 8-seat minivans — perfect for families and groups. All vehicles are air-conditioned, clean, and equipped with charging ports. Business-class vehicles include leather interiors and complimentary Wi-Fi on request."
  },
  {
    q: "How far in advance should I book my airport taxi in Italy?",
    a: "We recommend booking at least 24 hours in advance to guarantee vehicle availability, although same-day bookings are often possible. For peak travel seasons — July and August, Easter, Christmas, and Italian bank holidays — booking a week or more ahead is strongly advisable, particularly for early morning or late-night flights when driver availability is naturally tighter."
  }
];

const pricing: PricingTier[] = [
  { label: "Economy Sedan", price: "From €45", note: "Rome FCO → City Centre (up to 3 pax)" },
  { label: "Business Class", price: "From €75", note: "Milan MXP → City Centre (up to 3 pax)", popular: true },
  { label: "Group Minivan", price: "From €99", note: "Venice VCE → City Centre (up to 7 pax)" },
];

const routes: RouteItem[] = [
  { from: "Rome Fiumicino (FCO)", to: "Rome City Centre", duration: "~35–55 min", price: "From €45" },
  { from: "Rome Ciampino (CIA)", to: "Rome City Centre", duration: "~25–40 min", price: "From €35" },
  { from: "Milan Malpensa (MXP)", to: "Milan City Centre", duration: "~50–70 min", price: "From €75" },
  { from: "Venice Airport (VCE)", to: "Venice / Mestre", duration: "~20–30 min", price: "From €55" },
  { from: "Florence Airport (FLR)", to: "Florence City Centre", duration: "~20–30 min", price: "From €35" },
  { from: "Naples Airport (NAP)", to: "Naples City Centre", duration: "~20–35 min", price: "From €40" },
];

const reviews = [
  {
      name: "Michael B.",
      country: "🇺🇸 United States",
      rating: 5,
      text: "Our plane was delayed 2 hours, but the driver was there waiting with a sign as promised. Perfect way to start our Italy vacation at Fiumicino.",
      date: "March 2025"
  },
  {
      name: "Sophie T.",
      country: "🇬🇧 United Kingdom",
      rating: 5,
      text: "Used this for a 5am pickup in Milan. Driver was early, car was a luxury Mercedes, and we made our flight with plenty of time. Highly reliable.",
      date: "February 2025"
  },
  {
      name: "Jean-Pierre D.",
      country: "🇫🇷 France",
      rating: 5,
      text: "Excellent service from Venice airport. The driver was professional and helped us with all our strollers and bags. Very recommended for families.",
      date: "January 2025"
  }
];

export default function AirportTransfersPage() {
  const url = "https://www.italytaxiservice.com/services/airport-transfers";

  return (
    <main className="min-h-screen text-navy-rich font-inter">
      <ServiceSchema name="Private Airport Transfers Italy" description="Reliable fixed-price private airport transfers from all major Italian airports with English-speaking professional drivers." url={url} />
      <Navbar />

      <PageHero
        titleTop="Reliable Private Airport"
        titleBottom="Transfers Across Italy"
        description="Fixed-price airport pickups and drop-offs at every major Italian airport. Professional drivers, flight tracking, and 60 minutes of free waiting time — guaranteed."
        backgroundImage="https://aprilmunday.wordpress.com/wp-content/uploads/2018/09/bodiam_castle_through_the_trees.jpg?w=500"
        buttonText="Book Airport Transfer Now"
        breadcrumbs={[
          { name: "Services", item: "/services" },
          { name: "Airport Transfers", item: "/services/airport-transfers" }
        ]}
      />

      <ServicePageContent
        introTitle="Italy's Most Trusted Private Airport Transfer Service"
        introParagraphs={[
          "Arriving in a new country should be exciting, not stressful. Italy Taxi Service removes the uncertainty of ground transportation by providing fully pre-booked, fixed-price private transfers from every major airport in Italy to your hotel, Airbnb, or final destination. There are no taxi queues, no language barriers, no meter anxiety, and no hidden charges — just a professional driver waiting for you the moment you exit arrivals.",
          "Unlike public taxis queuing outside the terminal, our drivers are waiting for you inside the arrivals hall — holding a personalised sign with your name — before your bags even arrive. Whether you land at Rome Fiumicino at 6am after a transatlantic overnight flight or touch down in Milan Malpensa at midnight after a delayed connection, we're there. Our service is 24 hours a day, 365 days a year.",
          "We monitor your flight in real-time, so delays are never your problem. If your aircraft is held at the gate, diverted, or lands two hours late, your driver adjusts automatically. You will not be charged for the extra waiting time, and you will not arrive to find no vehicle. This is what genuine reliability looks like.",
          "Italy is served by more than 30 commercial airports, from major international hubs like Rome Fiumicino (one of Europe's busiest) to smaller regional gateways like Rimini, Ancona, Reggio Calabria, and Trieste. Our network covers all of them. Wherever your flight brings you into Italy, a professional private transfer is available.",
          "For families arriving with children, elderly travellers, and groups with significant luggage, our service eliminates every friction point. Child seats are installed in advance. Multiple suitcases are handled by the driver. The vehicle waits at the kerb while you finalise your arrival — no rushing, no carrying, no confusion."
        ]}
        detailTitle="How Our Airport Transfer Service Works"
        detailParagraphs={[
          "Booking your airport transfer with Italy Taxi Service is entirely online and takes less than two minutes. Select your pickup airport, enter your flight number, choose your destination and vehicle class, and confirm. You'll receive an instant email with full booking details, your driver's contact number, and a clear description of exactly where to meet.",
          "On the day of travel, our dispatch team tracks your flight in real-time. Your designated driver departs to the airport timed to your actual landing — not your scheduled arrival — and waits in the designated meet-and-greet zone inside the arrivals hall, clearly visible with your name sign.",
          "Once you reach your vehicle, the driver loads your luggage and you begin the journey to your accommodation. Inside the vehicle, enjoy complimentary bottled water, climate control, and Wi-Fi (on request). Our premium fleet includes Mercedes-Benz saloons for solo or couple travel, executive sedans for business travellers, and spacious minivans for families and groups of up to eight passengers.",
          "All routes, including those with highway tolls like the A90 Rome ring road or the A8 motorway into Milan, are included in your fixed quote. There is nothing extra to pay on arrival. The driver will take the fastest safe route to your destination, navigating traffic intelligently using real-time data. If your accommodation is inside a ZTL (restricted traffic zone), your driver will park at the closest accessible point and guide you to the entrance.",
          "For departures, we pick you up at your accommodation at a pre-agreed time calculated with a comfortable margin before your check-in deadline. Our drivers know Italian traffic patterns, airport terminal layouts, and check-in queue tendencies for every airport we serve. We build in buffer time so you arrive calm and on schedule.",
          "Corporate travellers booking airport transfers for executives and clients can request our silent ride preference — drivers trained to respect professional privacy, available to assist with luggage, and expert at navigating directly to business districts. Monthly invoicing and corporate account management are available.",
          "Return transfers are handled with the same precision. For a departure from Italy, we collect you at your hotel entrance, assist with luggage, and deliver you to the correct terminal entrance. Departure time is calculated based on your flight's check-in opening time, the journey duration at expected traffic conditions, and a safety margin that ensures you never feel rushed.",
          "Safety is a foundational principle of our service. All drivers hold professional NCC (Noleggio Con Conducente) licences — the Italian standard for private hire vehicles. Vehicles are maintained to manufacturer service schedules, comprehensively insured, and regularly inspected. You travel with confidence, knowing that every aspect of your transfer meets the highest professional standards."
        ]}
        benefits={[
          "Live flight tracking — your pickup adjusts automatically with no extra charge",
          "Meet & Greet service inside the arrivals hall with a personalised name sign",
          "60 minutes free waiting time for international flights, 30 minutes for domestic",
          "Fixed all-inclusive prices from the moment of booking — zero hidden charges",
          "Professional English-speaking NCC-licensed drivers",
          "24/7 availability — early morning and late-night flights fully covered",
          "Premium Mercedes-Benz fleet with full air conditioning",
          "Free cancellation up to 24 hours before pickup",
          "Child seats, booster seats, and infant carriers available free on request",
          "All tolls, motorway fees, and ZTL permits included in quoted price",
          "Service from 30+ Italian airports, including all regional hubs",
          "Instant email confirmation with driver contact number and meeting instructions"
        ]}
        pricingTitle="Sample Airport Transfer Fares"
        pricing={pricing}
        routesTitle="Most Popular Airport Transfer Routes"
        routes={routes}
        reviews={reviews}
        relatedLinks={[
          { label: "Hotel Transfers", href: "/services/hotel-transfers" },
          { label: "City-to-City Transfers", href: "/services/city-to-city" },
          { label: "Business Taxi", href: "/services/business-taxi" },
          { label: "Rome Taxi Service", href: "/city/rome" },
          { label: "Milan Taxi Service", href: "/city/milan" },
          { label: "Florence Taxi Service", href: "/city/florence" },
        ]}
      />

      {/* Route Deep-Dive Section */}
      <section className="py-24 bg-white font-inter">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-14">
            <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-4">Airport Coverage</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-navy leading-tight">Italy's Major Airport Transfer Routes</h2>
            <div className="w-20 h-1 bg-gold mx-auto mt-6" />
          </div>
          <div className="space-y-8 text-gray-700 text-lg leading-relaxed">
            <div>
              <h3 className="text-2xl font-bold text-navy mb-3">Rome Fiumicino (FCO) Airport Transfers</h3>
              <p>Leonardo da Vinci International Airport — known universally as Fiumicino — is Italy's largest and busiest airport, handling over 40 million passengers annually. Located 32 km south-west of central Rome, the journey to the city centre takes between 35 and 55 minutes depending on traffic. Our private transfer from FCO to Rome city centre starts from €45 and covers all destinations including the historic centre, Trastevere, Parioli, EUR business district, and Ostia.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-navy mb-3">Rome Ciampino (CIA) Airport Transfers</h3>
              <p>Ciampino Airport serves low-cost carriers including Ryanair and Wizz Air and is located 15 km south-east of Rome. Despite being smaller and closer to the city, unmetered local taxis at Ciampino are notorious for overcharging tourists. Our fixed-price private transfer from Ciampino to Rome city centre starts from €35, and with 40 minutes average journey time it is one of the fastest airport-to-city connections in Italy.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-navy mb-3">Milan Malpensa (MXP) Airport Transfers</h3>
              <p>Milan Malpensa is northern Italy's premier international gateway and one of Europe's top-20 busiest airports. Located 50 km north-west of Milan city centre, the private taxi transfer takes approximately 50–70 minutes via the A8 motorway. Our service covers Malpensa to all Milan districts including Centro Storico, Porta Nuova, CityLife, and the Fiera Milano exhibition complex — plus transfers onward to Lake Como, Lake Maggiore, Bergamo, and the Swiss border.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-navy mb-3">Venice Marco Polo (VCE) Airport Transfers</h3>
              <p>Venice Airport requires special local knowledge. The most common mistake tourists make is attempting to use public water taxis or private boat taxis — which are scenic but extremely expensive and logistically complex with heavy luggage. Our private land transfer from VCE takes you swiftly to your Mestre hotel (20 minutes) or to the Venice Piazzale Roma drop-off point (25 minutes), from where porters and vaporetto connections bring you to your accommodation in the lagoon city.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-navy mb-3">Florence & Naples Airport Transfers</h3>
              <p>Florence Amerigo Vespucci Airport (FLR) sits just 5 km from the historic city centre, making it one of Italy's most convenient airport connections — typically just 20–25 minutes to Piazza del Duomo. Naples International Airport (NAP) is equally close to the city (7 km) and serves as the gateway to the Amalfi Coast, Pompeii, Sorrento, and Capri. We provide onward connections from Naples NAP to all Campania destinations, including the full Amalfi coastline road.</p>
            </div>
          </div>
        </div>
      </section>

      <HowItWorks />

      <FAQSection faqs={faqs} title="Airport Transfer FAQs" badge="Your Questions Answered" />

      <Footer />
    </main>
  );
}
