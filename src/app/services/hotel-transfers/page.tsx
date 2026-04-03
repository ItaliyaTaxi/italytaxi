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
  title: "Hotel Transfers Italy | Private Taxi to Any Hotel or Airbnb",
  description: "Private door-to-door hotel transfer service across Italy. Airport to hotel, station to resort, hotel to hotel. All addresses covered, fixed prices, luggage assistance.",
  alternates: {
    canonical: "/services/hotel-transfers",
  }
};

const faqs = [
  {
    q: "Will the driver meet me inside the hotel lobby?",
    a: "Yes. For hotel pickups, your driver will meet you at the reception or concierge desk in the main lobby, holding a sign with your name. You won't need to wait outside or carry luggage to the street."
  },
  {
    q: "Do you provide transfers to Airbnbs and private apartments?",
    a: "Absolutely. We specialise in door-to-door service to any address — including private apartments, Airbnb rentals, luxury villas, agriturismo properties, and private estates across Italy. Just provide the full address when booking."
  },
  {
    q: "Can your driver help carry heavy luggage?",
    a: "Yes, luggage assistance is a standard part of our hotel transfer service. Drivers will help you from the hotel lobby to the vehicle and from the vehicle into your accommodation on arrival."
  },
  {
    q: "Are the prices fixed for hotel pickups regardless of traffic?",
    a: "Yes. All our hotel transfer prices are fixed from the moment of booking. Traffic, road conditions, and time of day do not affect the price. What you see when you book is exactly what you pay."
  },
  {
    q: "Do you provide child seats for hotel transfers?",
    a: "Yes. We provide infant carriers, forward-facing child seats, and booster seats free of charge on request. Simply specify the age and weight of each child when booking and we will ensure the correct equipment is installed."
  },
  {
    q: "Can you transfer between two different hotels in the same city?",
    a: "Yes. Hotel-to-hotel transfers within a city or between cities are a popular request. Simply enter your pickup hotel address and destination hotel address in the booking form."
  },
  {
    q: "What happens if my hotel check-in time is delayed?",
    a: "We coordinate your booking around your expected travel timeline. If your hotel's check-in time is delayed, we can adjust the pickup or arrange a holding point — just message your driver and they will assist."
  }
];

const pricing: PricingTier[] = [
  { label: "Airport to Hotel", price: "From €45", note: "Fixed · All major airports covered" },
  { label: "Station to Hotel", price: "From €25", note: "Fixed · Any train station in Italy", popular: true },
  { label: "Hotel to Hotel", price: "From €30", note: "City transfer · Up to 3 passengers" },
];

const reviews = [
  {
      name: "Sarah L.",
      country: "🇺🇸 United States",
      rating: 5,
      text: "Our driver was waiting at the hotel lobby in Florence 10 minutes early. He helped with all 4 of our heavy bags and drove us safely to our Airbnb in Rome. Exceptional service.",
      date: "March 2025"
  },
  {
      name: "David K.",
      country: "🇦🇺 Australia",
      rating: 5,
      text: "Transferred from Naples Airport to our hotel in Positano. The van was spotless and the driver navigated the narrow roads expertly. Much better than a standard taxi.",
      date: "February 2025"
  },
  {
      name: "Elena V.",
      country: "🇮🇹 Italy",
      rating: 5,
      text: "Used this for a transfer between two hotels in Milan. Punctual, professional, and very easy to book. Highly recommended for any hotel stay in Italy.",
      date: "January 2025"
  }
];

export default function HotelTransfersPage() {
  const url = "https://www.italytaxiservice.com/services/hotel-transfers";

  return (
    <main className="min-h-screen font-inter">
      <ServiceSchema name="Private Hotel Transfers Italy" description="Premium private taxi service for door-to-door hotel and Airbnb transfers across Italy." url={url} />
      <Navbar />

      <PageHero
        titleTop="Private Hotel"
        titleBottom="Transfers Across Italy"
        description="Door-to-door private taxi service to any hotel, Airbnb, villa, or resort in Italy. Fixed prices, luggage assistance, and meet-and-greet at every pickup."
        backgroundImage="https://aprilmunday.wordpress.com/wp-content/uploads/2018/09/bodiam_castle_through_the_trees.jpg?w=500"
        buttonText="Book Hotel Transfer"
        breadcrumbs={[
          { name: "Services", item: "/services" },
          { name: "Hotel Transfers", item: "/services/hotel-transfers" }
        ]}
      />

      <ServicePageContent
        introTitle="Stress-Free Arrival & Departure — Every Time"
        introParagraphs={[
          "The last thing you want after a long flight or train journey is to hunt for a taxi in an unfamiliar Italian city. Italy Taxi Service solves this completely. We pick you up at your arrival point — airport, station, or cruise port — and deliver you directly to the lobby of your hotel, the front door of your Airbnb, or the gate of your private villa.",
          "Our hotel transfer service is designed around the needs of leisure travellers and families. Whether you're arriving late at night after a delayed flight, or checking out of a boutique hotel in Florence's historic centre at 5am for an early connection, we're there.",
          "There are no meters, no cash required, and no negotiations. You book online with a confirmed fixed price, receive your driver's contact details in advance, and enjoy a seamless, professional experience from door to door."
        ]}
        detailTitle="Covering Every Accommodation Type Across Italy"
        detailParagraphs={[
          "Unlike metered taxis that focus on central locations, our private hotel transfer service reaches every type of accommodation across Italy. We service five-star hotels in Rome's historic centre, boutique B&Bs in the Tuscan hills, Airbnbs in Venice's residential neighbourhoods, and luxury seaside resorts along the Amalfi Coast.",
          "For properties with restricted vehicle access — such as historic city centres with ZTL zones — our drivers are experienced in the best drop-off points and can guide you on the short walking route to your accommodation entrance.",
          "We also cover hotel-to-hotel transfers within the same city or between cities, making us the perfect ground transportation partner for multi-destination Italy itineraries. Simply book each leg of your journey and leave the logistics to us.",
          "Families with children will appreciate that we provide child seats, infant carriers, and booster seats free of charge on request. Multiple luggage items, pushchairs, and airport trolleys aren't an issue — we assign the right vehicle size for your party.",
          "Every hotel pickup includes our full meet-and-greet service. Your driver will wait in the lobby, assist with luggage, and ensure you are fully comfortable in the vehicle before departing. This is not a rushed curb pickup — it is a premium, personalised service."
        ]}
        benefits={[
          "Meet-and-greet service in every hotel lobby or foyer",
          "Door-to-door coverage including Airbnb, villas, and resorts",
          "Full luggage assistance — from lobby to vehicle and back",
          "Fixed all-inclusive pricing — no surprises at checkout",
          "Child seats, booster seats, and infant carriers provided free",
          "ZTL zone knowledge — drop-off always as close as possible",
          "24/7 availability for early check-outs and late arrivals",
          "Flight and train tracking for airport and station pickups",
          "Vehicles available from compact sedans to 8-seat minivans",
          "Hotel-to-hotel transfers within cities and between cities",
          "Free bottled water and climate control in all vehicles",
          "Free cancellation up to 24 hours before pickup"
        ]}
        pricingTitle="Hotel Transfer Pricing Overview"
        pricing={pricing}
        reviews={reviews}
        relatedLinks={[
          { label: "Airport Transfers", href: "/services/airport-transfers" },
          { label: "City-to-City Transfers", href: "/services/city-to-city" },
          { label: "Cruise Port Transfers", href: "/services/cruise-port-transfers" },
          { label: "Rome Hotels & Transfers", href: "/city/rome" },
          { label: "Florence Hotels & Transfers", href: "/city/florence" },
          { label: "Venice Hotels & Transfers", href: "/city/venice" },
        ]}
      />

      <HowItWorks />

      <FAQSection faqs={faqs} title="Hotel Transfer FAQs" badge="Service Specifics" />

      <Footer />
    </main>
  );
}
