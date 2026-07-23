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
  title: "Rome Airport Transfer | Private Taxi FCO & CIA",
  description: "Book a fixed-price private taxi from Rome Fiumicino (FCO) or Ciampino (CIA). Professional NCC drivers, meet & greet, 24/7 service. From €35.",
  alternates: { canonical: "/rome-airport-transfer" },
  openGraph: {
    title: "Rome Airport Transfer | Private Taxi FCO & CIA",
    description: "Book a fixed-price private taxi from Rome Fiumicino (FCO) or Ciampino (CIA). Professional NCC drivers, meet & greet, 24/7 service. From €35.",
    url: "https://www.italytaxiservice.com/rome-airport-transfer",
    images: [{ url: '/images/rome airport.webp', width: 1200, height: 630, alt: 'Rome Airport Transfer — Private Taxi Service' }],
  },
};

const faqs = [
  {
    q: "How much does a private taxi from Rome Fiumicino airport cost?",
    a: "A private taxi transfer from Rome Fiumicino (FCO) to Rome city centre starts from €45 for a standard sedan (up to 3 passengers). Prices are fully fixed at booking and include all tolls, motorway charges, and waiting time within the grace period. There are no metered surcharges or hidden fees."
  },
  {
    q: "How long does it take to get from FCO to Rome city centre?",
    a: "The journey from Leonardo da Vinci Airport (FCO) to Rome city centre typically takes 35–55 minutes depending on traffic. Via the direct A91 motorway the distance is approximately 32 km. Early morning and late evening journeys are often faster; rush hour periods (8–9am, 5–7pm) take closer to 55–65 minutes."
  },
  {
    q: "Can your drivers enter the Rome ZTL (restricted traffic zone)?",
    a: "Yes. All our drivers hold professional NCC (Noleggio Con Conducente) licences, which legally authorise them to enter Rome's Zona a Traffico Limitato (ZTL) and drive directly to hotels in the historic centre, Trastevere, Parioli, and other restricted areas. Standard taxis and private cars without this authorisation cannot legally enter these zones."
  },
  {
    q: "Do you serve Rome Ciampino Airport (CIA) as well?",
    a: "Yes, absolutely. Rome Ciampino Airport (CIA) is located 15 km south-east of the city and is served by Ryanair and Wizz Air. Our private taxi from Ciampino to Rome city centre starts from €35 with an average journey time of approximately 30–40 minutes. The same fixed-price and meet-and-greet service applies."
  },
  {
    q: "What if my flight to Rome is delayed or cancelled?",
    a: "We monitor all incoming flights in real-time. If your flight is delayed, your driver waits accordingly with no additional charge. Complimentary waiting time is 60 minutes for international flights and 30 minutes for domestic flights after the actual landing time. For cancellations, we offer full rescheduling with no penalty."
  },
  {
    q: "Can I book a transfer from Rome to other cities like Florence or Naples?",
    a: "Yes. In addition to airport transfers, we offer private city-to-city transfers from Rome. Popular routes include Rome to Florence (approx. 3 hours), Rome to Naples (approx. 2.5 hours), Rome to Pompeii (approx. 3 hours), and Rome to the Amalfi Coast. These can be booked as one-way or return journeys."
  }
];

const pricing: PricingTier[] = [
  { label: "Economy Sedan", price: "From €45", note: "FCO → Rome Centre (up to 3 pax)" },
  { label: "Ciampino Transfer", price: "From €35", note: "CIA → Rome Centre (up to 3 pax)" },
  { label: "Business Class", price: "From €75", note: "FCO → Rome Centre — Mercedes E/S-Class", popular: true },
  { label: "Group Minivan", price: "From €99", note: "FCO → Rome Centre (up to 7 pax)" },
];

const routes: RouteItem[] = [
  { from: "Rome Fiumicino (FCO)", to: "Rome Historic Centre", duration: "~40–55 min", price: "From €45" },
  { from: "Rome Ciampino (CIA)", to: "Rome Historic Centre", duration: "~30–40 min", price: "From €35" },
  { from: "Rome Fiumicino (FCO)", to: "Trastevere / Parioli", duration: "~35–50 min", price: "From €45" },
  { from: "Rome Fiumicino (FCO)", to: "Vatican / Prati District", duration: "~30–45 min", price: "From €45" },
  { from: "Rome Fiumicino (FCO)", to: "EUR Business District", duration: "~20–30 min", price: "From €40" },
  { from: "Rome City Centre", to: "Florence (city-to-city)", duration: "~3 hrs", price: "From €280" },
];

export default function RomeAirportTransferPage() {
  const url = "https://www.italytaxiservice.com/rome-airport-transfer";

  return (
    <main className="min-h-screen text-navy-rich font-inter">
      <ServiceSchema
        name="Rome Airport Transfer — Private Taxi FCO & CIA"
        description="Fixed-price private taxi transfers from Rome Fiumicino (FCO) and Rome Ciampino (CIA) airports to all Rome destinations. NCC-licensed drivers, meet & greet, 24/7."
        url={url}
      />
      <Navbar />

      <PageHero
        titleTop="Rome Airport Transfer"
        titleBottom="Private Taxi FCO & CIA"
        description="Fixed-price private transfers from Fiumicino and Ciampino airports to any Rome address. Professional NCC drivers, meet & greet inside arrivals, 60 minutes free waiting time."
        backgroundImage="/images/rome airport.webp"
        buttonText="Book Rome Transfer Now"
        breadcrumbs={[
          { name: "Home", item: "/" },
          { name: "Rome Airport Transfer", item: "/rome-airport-transfer" }
        ]}
      />

      <ServicePageContent
        introTitle="Rome's Most Reliable Private Airport Transfer Service"
        introParagraphs={[
          "Arriving at Rome Fiumicino International Airport — Leonardo da Vinci, Italy's busiest airport — you face a choice: join the metered taxi queue, risk an unlicensed tout, navigate the train to Termini, or step directly into a pre-arranged private vehicle with a professional driver waiting at arrivals with your name. Italy Taxi Service makes that choice easy. Our private airport transfer from Rome FCO is fixed-price, fully pre-booked, and handled by NCC-licensed professional drivers who are legally authorised to deliver you directly to your accommodation — even inside Rome's ZTL restricted historic centre.",
          "Rome Fiumicino Airport (IATA: FCO) serves over 40 million passengers annually across four terminals and is located 32 km south-west of the city. The standard taxi queue at FCO carries an official fixed tariff for licensed Rome taxis — but this only applies to four-door taxis registered in Rome. Unlicensed touts quoting flat fares outside the terminal are unregulated and frequently overcharge. Our private transfer eliminates this uncertainty completely: a named, professional driver, in a named, insured vehicle, at a confirmed, all-inclusive price.",
          "For travellers arriving at Rome Ciampino Airport (CIA) — the city's second airport serving Ryanair, Wizz Air, and other low-cost carriers — the situation is even more challenging. Ciampino has no direct rail connection to Rome city centre and the licensed taxi supply is limited, meaning queues can be extremely long during peak arrivals. Our private taxi from Ciampino to Rome starts from just €35 and is available around the clock.",
        ]}
        detailTitle="How Your Rome Airport Transfer Works"
        detailParagraphs={[
          "Book your Rome airport transfer online in under two minutes. Enter your flight number, pickup airport (FCO or CIA), your accommodation address in Rome, the number of passengers, and your preferred vehicle class. You will receive instant email confirmation with your driver's mobile number and full meeting instructions.",
          "On the day of travel, our system tracks your flight in real-time. Your driver departs for the airport timed to your actual landing — not just your scheduled arrival. After landing, clear immigration and customs at your own pace. Your driver is waiting in the arrivals hall with a personalised name board, positioned at the standard meet-and-greet point outside the baggage claim exit.",
          "Once you reach your driver, luggage is loaded and you depart directly for your destination. For hotels and apartments inside Rome's ZTL (the historic pedestrian zone covering most of the city centre), our NCC licence authorises entry at any time, delivering you to the door of your accommodation without the need to park, walk, or navigate Rome's complex restricted zones.",
          "The journey from FCO to central Rome takes approximately 40–55 minutes via the direct A91 motorway, which your driver navigates using real-time traffic data to choose the fastest route. All motorway tolls are included in your quoted price — there is nothing to pay on arrival beyond the confirmed fare.",
          "For travellers staying in the EUR business district, Ostia, Parioli, or Trastevere, our drivers know every neighbourhood intimately and will take the most efficient route given current conditions. For the Vatican area and Prati district, FCO is actually closer than most visitors realise — often just 30–35 minutes with light traffic.",
          "Our premium Rome airport transfer vehicles include Mercedes-Benz E-Class sedans for individuals and couples, S-Class executive cars for business travellers and VIP guests, and V-Class minivans for families and groups of up to eight passengers. All vehicles are air-conditioned, clean, and include complimentary water bottles.",
        ]}
        benefits={[
          "Fixed all-inclusive price from FCO confirmed at booking — no meter, no surcharges",
          "Private taxi from Ciampino (CIA) from just €35",
          "NCC-licensed drivers with full ZTL authorisation for Rome's historic centre",
          "Meet & Greet inside arrivals hall with personalised name sign",
          "Real-time flight tracking — driver adjusts automatically for delays",
          "60 minutes free waiting time for international arrivals",
          "Available 24/7 including 3am pickups and bank holidays",
          "Premium Mercedes-Benz fleet — sedans, executive cars, and minivans",
          "English-speaking professional drivers",
          "Onward transfers available to Florence, Naples, and other Italian cities",
          "Free cancellation up to 24 hours before travel",
          "Instant booking confirmation with driver contact details",
        ]}
        pricingTitle="Rome Airport Transfer Prices"
        pricing={pricing}
        routesTitle="Popular Rome Airport Transfer Routes"
        routes={routes}
        relatedLinks={[
          { label: "Milan Chauffeur Service", href: "/milan-chauffeur-service" },
          { label: "Florence Private Taxi", href: "/florence-private-taxi" },
          { label: "All Airport Transfers", href: "/services/airport-transfers" },
          { label: "Rome City Taxi", href: "/city/rome-taxi-service" },
          { label: "Rome to Florence Transfer", href: "/route/rome-to-florence-taxi" },
          { label: "Book Now", href: "/book-now" },
        ]}
      />

      {/* Deep-dive editorial section */}
      <section className="py-20 bg-white font-inter">
        <div className="container mx-auto px-6 max-w-4xl space-y-10 text-gray-700 text-lg leading-relaxed">
          <div>
            <h2 className="text-3xl font-extrabold text-[#0F1C2E] mb-4">
              Rome Fiumicino Airport (FCO) — Everything You Need to Know
            </h2>
            <p>
              Leonardo da Vinci International Airport — universally known as Fiumicino — is Italy&apos;s largest
              airport and one of the busiest in Europe, handling more than 40 million passengers annually across
              four active terminals (T1, T2, T3 international, and T5 for US pre-clearance flights). The airport is
              located 32 km south-west of Rome&apos;s historic centre via the A91 motorway. Our{' '}
              <strong>private taxi from Rome Fiumicino</strong> covers all four terminals with individual meetingpoints
              in each arrivals hall, and we serve all destinations within Rome and the surrounding Lazio region.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#0F1C2E] mb-3">
              Rome Ciampino Airport (CIA) — Private Transfer Guide
            </h3>
            <p>
              Rome Ciampino Airport is the city&apos;s second airport, located 15 km south-east of the city centre
              and primarily serving low-cost airlines. Despite its smaller size, Ciampino consistently has the
              longest taxi queues in Italy relative to passenger volume — particularly on Friday evenings and Sunday
              nights when Ryanair and Wizz Air flights arrive in clusters. A pre-booked{' '}
              <strong>private taxi from Ciampino to Rome centre</strong> bypasses this entirely. Our drivers wait
              inside the terminal, assist with luggage, and have you en route within minutes of clearing arrivals.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#0F1C2E] mb-3">Rome ZTL — Why You Need an NCC Driver</h3>
            <p>
              Rome&apos;s ZTL system covers almost the entire historic city centre — including Piazza Navona,
              Campo de&apos; Fiori, the Colosseum area, Trastevere, and large parts of the centro storico. Standard
              cars and non-authorised taxis cannot enter these zones at most hours. Tourists who attempt to use
              rideshare apps or standard rental cars to reach hotels in the historic centre frequently receive
              large fines and find their accommodation is physically unreachable by road. Our NCC-licensed drivers
              are specifically authorised to enter ZTL zones and drive to any address within them. This is one of
              the most significant practical advantages of booking a professional{' '}
              <strong>private transfer in Rome</strong>.
            </p>
          </div>
          <div className="text-center pt-6">
            <Link
              href="/book-now"
              className="inline-block bg-[#F4C430] text-[#0F1C2E] font-bold px-10 py-4 rounded-full hover:bg-yellow-400 transition-colors text-sm uppercase tracking-widest"
            >
              Book Your Rome Airport Transfer
            </Link>
          </div>
        </div>
      </section>

      <HowItWorks />
      <FAQSection faqs={faqs} title="Rome Airport Transfer FAQs" badge="Your Questions Answered" />
      <Footer />
    </main>
  );
}
