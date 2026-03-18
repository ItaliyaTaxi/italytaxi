import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import ServiceIntro, { ServiceFeatures } from '@/components/ServiceDetails';
import HowItWorks from '@/components/HowItWorks';
import FAQSection from '@/components/FAQSection';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Hotel Transfers | Italian Taxi Service",
  description: "Private hotel door-to-door transportation in Italy. Professional taxi service from airports and stations directly to your hotel or Airbnb.",
  alternates: {
    canonical: "/services/hotel-transfers",
  }
};

export default function HotelTransfersPage() {
  const features = [
    "Meet & Greet at lobby",
    "Luggage assistance included",
    "Reliable pickup times",
    "Airbnb & Resort coverage",
    "Wait-time included",
    "Direct hotel-to-hub routes"
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHero
        titleTop="Private Hotel"
        titleBottom="Transfers Across Italy"
        description="Pickup & drop-off from any hotel, Airbnb, or taxi resort. Seamless connections for your vacation."
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

      <FAQSection />

      <CTA />

      <Footer />
    </main>
  );
}
