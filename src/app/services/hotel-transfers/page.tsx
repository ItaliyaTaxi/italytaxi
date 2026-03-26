import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import ServiceIntro, { ServiceFeatures } from '@/components/ServiceDetails';
import HowItWorks from '@/components/HowItWorks';
import FAQSection from '@/components/FAQSection';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import ServiceSchema from '@/components/ServiceSchema';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Private Hotel Transfers Italy | Hotel Pickup Taxi",
  description: "Private hotel door-to-door transportation in Italy. Professional taxi service from airports and stations directly to your hotel or Airbnb.",
  alternates: {
    canonical: "/services/hotel-transfers",
  }
};

export default function HotelTransfersPage() {
  const url = "https://www.italytaxiservice.com/services/hotel-transfers";
  const features = [
    "Meet & Greet at lobby",
    "Luggage assistance included",
    "Reliable pickup times",
    "Airbnb & Resort coverage",
    "Wait-time included",
    "Direct hotel-to-hub routes"
  ];

  const hotelFaqs = [
    {
      q: "Will the driver meet me at the hotel lobby?",
      a: "Yes, for hotel pickups, our drivers will meet you at the reception or concierge desk in the main lobby with a sign."
    },
    {
      q: "Do you provide transfers to Airbnbs and private villas?",
      a: "Absolutely! We specialize in door-to-door service to any address, including private apartments, Airbnb rentals, and luxury villas across Italy."
    },
    {
      q: "Can you help with heavy luggage?",
      a: "Our drivers are happy to assist with your luggage from the hotel lobby to the vehicle and vice versa."
    },
    {
      q: "Are the prices fixed for hotel pickups?",
      a: "Yes, our prices are fixed and confirmed at the time of booking. There are no extra charges for traffic or hotel location."
    },
    {
      q: "Do you provide child seats for hotel transfers?",
      a: "Yes, we can provide child seats or boosters upon request at the time of booking to ensure a safe journey for your family."
    }
  ];

  return (
    <main className="min-h-screen">
      <ServiceSchema 
        name="Private Hotel Transfers Italy" 
        description="Premium private taxi service for door-to-door hotel and Airbnb transfers across Italy." 
        url={url} 
      />
      <Navbar />

      <div className="container mx-auto px-6 pt-10">
        <Breadcrumb 
          items={[
            { name: "Services", item: "/services" },
            { name: "Hotel Transfers", item: "/services/hotel-transfers" }
          ]} 
        />
      </div>

      <PageHero
        titleTop="Private Hotel"
        titleBottom="Transfers Across Italy"
        description="Pickup & drop-off from any hotel, Airbnb, or premium resort. Seamless connections for your vacation."
        backgroundImage="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop"
        buttonText="Book Hotel Transfer"
      />

      <ServiceIntro
        title="Stress-Free Arrival & Departure"
        content="Enjoy smooth transfers from the airport to your hotel or hotel to city destinations. Our drivers assist with luggage and ensure a comfortable arrival at your doorstep."
      />

      <ServiceFeatures
        title="Exclusive Hotel Shuttle"
        features={features}
        bg="bg-[#F8F9FA]"
      />

      <HowItWorks />

      <FAQSection 
        faqs={hotelFaqs}
        title="Hotel Transfer FAQs"
        badge="Service Specifics"
      />

      <CTA />

      <Footer />
    </main>
  );
}

