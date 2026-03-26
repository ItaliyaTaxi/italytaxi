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
  title: "City to City Transfers Italy | Private Intercity Taxi",
  description: "Travel between Italian cities in comfort and luxury. Door-to-door point-point-transfers with professional drivers. Rome, Florence, Milan, and more.",
  alternates: {
    canonical: "/services/city-to-city",
  }
};

export default function CityToCityPage() {
  const url = "https://www.italytaxiservice.com/services/city-to-city";
  const features = [
    "Direct door-to-door service",
    "Fixed & transparent pricing",
    "Spacious luggage capacity",
    "Premium vehicle fleet",
    "Safe long-distance travel",
    "Stops upon request"
  ];

  const faqs = [
    {
        q: "How can I book a taxi from one city to another?",
        a: "You can book easily via our online form or WhatsApp. Simply provide your pickup city, destination, and preferred time."
    },
    {
        q: "Can I request scenic stops during long-distance transfers?",
        a: "Yes, we allow custom stops for sightseeing or breaks. Please mention this during booking so we can plan the best route."
    },
    {
        q: "Is the price fixed for intercity transfers?",
        a: "Absolutely. We provide a fixed quote upfront that includes tolls, fuel, and wait time. No hidden costs."
    },
    {
        q: "What cities in Italy do you cover?",
        a: "We cover all major cities including Rome, Milan, Florence, Venice, Naples, and business hubs like Bologna."
    },
    {
        q: "Is luggage space sufficient for families?",
        a: "Yes, our fleet includes Vans and SUVs with ample luggage space. Let us know your bag count for the right vehicle."
    }
  ];

  return (
    <main className="min-h-screen">
      <ServiceSchema 
        name="Private City to City Transfers Italy" 
        description="Premium private intercity taxi service across Italy. Safe and comfortable door-to-door travel." 
        url={url} 
      />
      <Navbar />

      <PageHero
        titleTop="Comfortable City-to-City"
        titleBottom="Transfers in Italy"
        description="Travel between major cities like Rome, Milan, Florence, and Venice in absolute comfort and luxury style."
        backgroundImage="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2017&auto=format&fit=crop"
        buttonText="Book Intercity Transfer"
        breadcrumbs={[
          { name: "Services", item: "/services" },
          { name: "City to City", item: "/services/city-to-city" }
        ]}
      />

      <ServiceIntro
        title="Seamless Intercity Travel"
        content="Avoid crowded trains and buses. Travel directly between cities with our private transfer service. Safe, reliable, and door-to-door comfort tailored to your schedule."
      />

      <ServiceFeatures
        title="Premier Intercity Service"
        features={features}
        bg="bg-[#F8F9FA]"
      />

      <HowItWorks />

      <FAQSection faqs={faqs} title="City Transfer FAQs" />

      <CTA />

      <Footer />
    </main>
  );
}

