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
  title: "Private Airport Transfers | Italian Taxi Service",
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

  return (
    <main className="min-h-screen">
      <ServiceSchema 
        name="Private Airport Transfers Italy" 
        description="Reliable airport transfers across Italy. Private taxi from Rome, Milan, Venice and more." 
        url={url} 
      />
      <Navbar />
      
      <div className="container mx-auto px-6 pt-10">
        <Breadcrumb 
          items={[
            { name: "Services", item: "/services" },
            { name: "Airport Transfers", item: "/services/airport-transfers" }
          ]} 
        />
      </div>

      <PageHero
        titleTop="Reliable Airport"
        titleBottom="Transfers Across Italy"
        description="Private, comfortable, and on-time airport taxi service from all major airports including Rome, Milan, Venice, and more."
        backgroundImage="https://images.unsplash.com/photo-1542296332-2e4473faf563?q=80&w=2070&auto=format&fit=crop"
        buttonText="Book Airport Transfer Now"
      />

      <ServiceIntro
        title="Stress-Free Airport Pickup & Drop Service"
        content="We provide professional airport taxi transfers across Italy. Whether you’re arriving or departing, our experienced drivers ensure timely pickup, flight tracking, and comfortable travel. Avoid long taxi lines and travel with peace of mind."
      />

      <ServiceFeatures
        title="Superior Airport Experience"
        features={features}
        bg="bg-[#F8F9FA]"
      />


      <HowItWorks />

      <FAQSection />

      <CTA />

      <Footer />
    </main>
  );
}
