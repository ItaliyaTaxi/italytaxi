import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import ServiceIntro, { ServiceFeatures } from '@/components/ServiceDetails';
import HowItWorks from '@/components/HowItWorks';
import FAQSection from '@/components/FAQSection';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import ServiceSchema from '@/components/ServiceSchema';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Private Airport Transfers Italy | Luxury Meet & Greet",
  description: "Reliable airport transfers across Italy. Book your private taxi to or from Rome, Milan, Venice and more with professional English-speaking drivers.",
  alternates: {
    canonical: "/services/airport-transfers",
  }
};

export default function AirportTransfersPage() {
  const url = "https://www.italytaxiservice.com/services/airport-transfers";
  const features = [
    "Flight tracking & monitoring",
    "Meet & greet service",
    "Punctual & reliable pickup",
    "Zero hidden charges",
    "24/7 Availability",
    "Professional English-speaking drivers"
  ];

  const airportFaqs = [
    {
      q: "Where will I meet my driver at the airport?",
      a: "Your driver will meet you inside the arrival hall, holding a sign with your name on it, right after you exit the baggage claim area."
    },
    {
      q: "What happens if my flight to Italy is delayed?",
      a: "We monitor all flights in real-time. If your flight is delayed, your driver will automatically adjust the pickup time at no extra cost to you."
    },
    {
      q: "Is there a waiting time included in the airport transfer price?",
      a: "Yes, we include up to 60 minutes of free waiting time starting from when your flight actually lands, giving you plenty of time for passport control and luggage."
    },
    {
      q: "Do you provide airport transfers from Fiumicino, Malpensa, and Venice?",
      a: "Yes, we provide luxury private transfers from all major Italian airports, including Rome FCO, Milan MXP, Venice VCE, and many more."
    },
    {
      q: "Are the airport transfer prices fixed or metered?",
      a: "Our prices are 100% fixed and all-inclusive. You will know the exact price at the time of booking, with no surcharges for traffic or luggage."
    }
  ];

  return (
    <main className="min-h-screen text-navy-rich font-inter">
      <ServiceSchema 
        name="Private Airport Transfers Italy" 
        description="Reliable airport transfers across Italy. Private taxi from Rome, Milan, Venice and more." 
        url={url} 
      />
      <Navbar />
      
      <PageHero
        titleTop="Reliable Airport"
        titleBottom="Transfers Across Italy"
        description="Private, comfortable, and on-time airport transfer service from all major airports including Rome, Milan, Venice, and more."
        backgroundImage="https://images.unsplash.com/photo-1542296332-2e4473faf563?q=80&w=2070&auto=format&fit=crop"
        buttonText="Book Airport Transfer Now"
        breadcrumbs={[
          { name: "Services", item: "/services" },
          { name: "Airport Transfers", item: "/services/airport-transfers" }
        ]}
      />

      <ServiceIntro
        title="Stress-Free Airport Pickup & Drop Service"
        content="We provide professional airport transfers across Italy. Whether you’re arriving or departing, our experienced drivers ensure timely pickup, flight tracking, and comfortable travel. Avoid long lines and travel with peace of mind."
      />

      <ServiceFeatures
        title="Superior Airport Experience"
        features={features}
        bg="bg-[#F8F9FA]"
      />

      <HowItWorks />

      <FAQSection faqs={airportFaqs} title="Airport Transfer FAQs" />

      <CTA />

      <Footer />
    </main>
  );
}

