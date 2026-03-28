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
  title: "Cruise Port Transfers Italy | Civitavecchia, Naples, Venice & Livorno",
  description: "Private taxi transfers from all Italian cruise ports. Civitavecchia to Rome, Livorno to Florence, Naples port, Venice port and more. Fixed prices, pier pickup, luggage assistance.",
  alternates: {
    canonical: "/services/cruise-port-transfers",
  }
};

const faqs = [
  {
    q: "Which Italian cruise ports do you serve?",
    a: "We operate from all major Italian cruise ports: Civitavecchia (Rome gateway), Livorno (Florence/Tuscany gateway), Naples, Venice Passenger Terminal (Marghera), Genoa, Salerno, Bari, Catania, and Messina. Contact us if your port isn't listed above."
  },
  {
    q: "Will the driver meet me directly at the pier?",
    a: "Yes. Our drivers hold the necessary port access permits to pick you up right at your cruise ship's gangway or the designated port exit. They will hold a sign with your name and assist with luggage from the moment you disembark."
  },
  {
    q: "How much time should I allow for the Civitavecchia to Rome transfer?",
    a: "The transfer from Civitavecchia port to central Rome takes approximately 60–80 minutes, depending on traffic. For airport connections, we recommend allowing at least 90 minutes and we will coordinate timing based on your flight's check-in requirement."
  },
  {
    q: "Can I book a shore excursion during my port day?",
    a: "Yes — shore excursion tours are one of our specialties. We collect you from the pier, take you to your chosen landmark (Colosseum from Civitavecchia, Uffizi from Livorno, Pompeii from Naples), and return you to the ship well before all-aboard time. The entire day is planned around your ship's schedule."
  },
  {
    q: "What happens if my ship arrives late?",
    a: "We track your ship's real-time ETA via maritime tracking systems. If your vessel is delayed, your driver automatically adjusts the pickup time. There is no cancellation and no extra charge for port schedule changes."
  },
  {
    q: "Do you handle large cruise group transfers?",
    a: "Yes. We coordinate multi-vehicle pickups for groups of any size. For cruise groups of 10 or more passengers, contact us directly and our group logistics team will prepare a custom transport plan with appropriate vehicles."
  },
  {
    q: "Is the price fixed from the port to the airport?",
    a: "Yes. All port-to-airport and port-to-city prices are fixed at the time of booking. There are no taxi meters, no surge pricing, and no additional charges for your luggage."
  }
];

const pricing: PricingTier[] = [
  { label: "Civitavecchia → Rome", price: "From €80", note: "~70 min · Up to 3 passengers" },
  { label: "Livorno → Florence", price: "From €70", note: "~1 hr · Most requested", popular: true },
  { label: "Naples Port → City", price: "From €35", note: "~20 min · Up to 3 passengers" },
];

const routes: RouteItem[] = [
  { from: "Civitavecchia Port", to: "Rome City Centre", duration: "~70 min", price: "From €80" },
  { from: "Civitavecchia Port", to: "Rome Fiumicino (FCO)", duration: "~60 min", price: "From €90" },
  { from: "Livorno Port", to: "Florence Centre", duration: "~60 min", price: "From €70" },
  { from: "Naples Port", to: "Naples City Centre", duration: "~20 min", price: "From €35" },
  { from: "Naples Port", to: "Pompeii", duration: "~30 min", price: "From €55" },
  { from: "Venice Port (Marghera)", to: "Venice City", duration: "~20 min", price: "From €45" },
];

export default function CruisePortTransfersPage() {
  const url = "https://www.italytaxiservice.com/services/cruise-port-transfers";

  return (
    <main className="min-h-screen font-inter">
      <ServiceSchema name="Private Cruise Port Transfers Italy" description="Fast and reliable private taxi transfers from Italian cruise ship piers to airports and city centers." url={url} />
      <Navbar />

      <PageHero
        titleTop="Private Cruise Port"
        titleBottom="Transfers in Italy"
        description="Step off the ship and into your private taxi. Fixed-price transfers from Civitavecchia, Naples, Livorno, Venice, and all Italian cruise piers — no queues, no meters."
        backgroundImage="/images/cruise-port-transfer.webp"
        buttonText="Book Port Transfer"
        breadcrumbs={[
          { name: "Services", item: "/services" },
          { name: "Cruise Port Transfers", item: "/services/cruise-port-transfers" }
        ]}
      />

      <ServicePageContent
        introTitle="The Easiest Way to Leave (and Return to) Your Cruise Ship in Italy"
        introParagraphs={[
          "Italian cruise ports are among the busiest in the Mediterranean — and also among the most confusing. Civitavecchia receives over 3 million cruise passengers every year. Taxi queues stretch for hundreds of metres, drivers compete aggressively for fares, and prices vary wildly depending on how negotiating you are.",
          "Our private cruise port transfer service eliminates all of that. Your driver is already waiting at the pier with your name on a sign before you even complete disembarkation. Luggage goes straight from your hands to the vehicle. The price was fixed when you booked — weeks or months ago — and it will not change.",
          "Whether you need a direct transfer to Rome's city centre, a connection to Fiumicino Airport, or a full day-tour seeing the Colosseum before returning to the ship, we coordinate everything around your cruise schedule."
        ]}
        detailTitle="Specialised Expertise at Italy's Major Cruise Ports"
        detailParagraphs={[
          "Each Italian cruise port has its own logistical characteristics, and our drivers know them all. At Civitavecchia, our permited drivers are authorised to enter the port facility and pick you up at the correct terminal. At Livorno, we know the fastest routes across the A11 motorway into Florence's historic centre. At Naples, we navigate the port district efficiently to reach the city or Pompeii in minimum time.",
          "Shore excursions are one of our most popular offerings. Many cruise passengers want to see Rome from Civitavecchia, Florence and Pisa from Livorno, or Pompeii and the Amalfi Coast from Naples — but don't want to book expensive ship excursions or deal with group tour restrictions. Our private shore excursions give you better access, more flexibility, and a truly personal experience at a competitive price.",
          "For all shore excursions, we build your itinerary specifically around your ship's all-aboard time. We know how long it realistically takes to see the key sites at each destination, and we buffer the return journey to ensure you are back at the pier with at least 45 minutes to spare — never cutting it close.",
          "For groups, our minivans accommodate up to 8 passengers with full cruise luggage. For larger families or tour groups, we coordinate multiple vehicles with a single dispatch contact, ensuring every sub-group arrives together or in coordinated sequence.",
          "On embarkation day, we work in the opposite direction — collecting you from your Rome hotel, Florence Airbnb, or Naples accommodation and delivering you to your specific cruise terminal in good time for check-in. We know the terminal procedures and will position you at exactly the right entry point."
        ]}
        benefits={[
          "Port-permited drivers — pier pickup right at the gangway",
          "Real-time ship tracking — we adjust if your vessel is late",
          "Shore excursions with all-aboard time guarantee",
          "Fixed prices confirmed at booking — no meters, no surprises",
          "All major Italian cruise ports covered",
          "Luggage assistance from ship to vehicle",
          "Multi-vehicle coordination for larger groups",
          "Port-to-airport connections for start and end of cruise",
          "Available for both disembarkation and embarkation days",
          "English-speaking professional drivers",
          "Child seats available free of charge on request",
          "Booking cancellation up to 48 hours in advance"
        ]}
        pricingTitle="Sample Port Transfer Fares"
        pricing={pricing}
        routesTitle="Most Requested Port Transfer Routes"
        routes={routes}
        relatedLinks={[
          { label: "Airport Transfers", href: "/services/airport-transfers" },
          { label: "Private Sightseeing Tours", href: "/services/private-tours" },
          { label: "Rome Shore Excursions", href: "/city/rome" },
          { label: "Florence Shore Excursions", href: "/city/florence" },
          { label: "Naples & Amalfi", href: "/city/naples" },
        ]}
      />

      <HowItWorks />

      <FAQSection faqs={faqs} title="Cruise Port Transfer FAQs" badge="Cruise Passengers" />

      <Footer />
    </main>
  );
}
