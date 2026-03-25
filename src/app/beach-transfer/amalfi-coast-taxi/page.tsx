import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import ServiceIntro, { ServiceFeatures } from '@/components/ServiceDetails';
import HowItWorks from '@/components/HowItWorks';
import FAQSection from '@/components/FAQSection';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Amalfi Coast Beach Transfers | Italian Taxi Service",
  description: "Book a professional private transfer to the Amalfi Coast. Enjoy a comfortable, direct ride to Positano, Amalfi, or Ravello with our expert drivers.",
  alternates: {
    canonical: "/beach-transfer/amalfi-coast-taxi",
  }
};

export default function AmalfiBeachPage() {
  const features = [
    "Expert coastal drivers",
    "Air-conditioned luxury vehicles",
    "Luggage handling included",
    "Door-to-door beach service",
    "Flexible stops for photos",
    "Fixed transparent pricing"
  ];

  const amalfiFaqs = [
    {
      q: "Which towns on the Amalfi Coast do you cover?",
      a: "We provide transfers to all towns including Positano, Amalfi, Ravello, Praiano, Maiori, and Minori."
    },
    {
      q: "Can you pick me up directly from my beach hotel?",
      a: "Yes, we provide door-to-door service directly from your hotel, apartment, or villa to any beach location."
    },
    {
      q: "Is the road to Amalfi safe for travel?",
      a: "Our drivers are highly experienced with the winding Amalfi Coast roads and use modern, well-maintained vehicles for maximum safety and comfort."
    },
    {
      q: "Can we stop for photos along the way?",
      a: "Absolutely! Our drivers know the best panoramic viewpoints and are happy to stop for quick photo opportunities during your transfer."
    }
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHero
        titleTop="Coastal Luxury"
        titleBottom="Amalfi Coast Transfers"
        description="Experience the breathtaking beauty of the Amalfi Coast with a stress-free private taxi transfer. Direct service to your seaside destination."
        backgroundImage="/images/almafi.webp"
        buttonText="Book Amalfi Transfer"
      />

      <ServiceIntro
        title="Your Gateway to the Mediterranean"
        content="Relax as our professional drivers navigate the iconic Amalfi Drive. Whether you're heading to the glamorous beaches of Positano or the historic shores of Amalfi, we ensure a smooth and scenic journey."
      />

      <ServiceFeatures
        title="Premium Seaside Service"
        features={features}
        bg="bg-[#F8F9FA]"
      />

      <HowItWorks />

      <FAQSection 
        faqs={amalfiFaqs}
        title="Amalfi Transfer Questions"
        badge="Coastal Travel"
      />

      <CTA />

      <Footer />
    </main>
  );
}
