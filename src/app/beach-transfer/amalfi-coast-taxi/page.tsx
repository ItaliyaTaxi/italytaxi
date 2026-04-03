import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import ServiceIntro, { ServiceFeatures } from '@/components/ServiceDetails';
import HowItWorks from '@/components/HowItWorks';
import FAQSection from '@/components/FAQSection';
import Breadcrumb from '@/components/Breadcrumb';
import CTA from '@/components/CTA';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Amalfi Coast Beach Transfers | Premium Shore Excursions Taxi",
  description: "Direct private taxi transfers to the best beaches on the Amalfi Coast. Door-to-door service to Positano, Amalfi, and hidden coves with professional local drivers.",
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

  const amalfiReviews = [
    {
        name: "Clara G.",
        location: "Barcelona, Spain",
        text: "The best way to reach the beaches of Amalfi without the hassle of the crowds. Our driver knew exactly where to drop us for the best access to the shore.",
        rating: 5,
        date: "1 month ago"
    },
    {
        name: "Robert P.",
        location: "New York, USA",
        text: "Booking a private taxi for our beach day in Positano was the smartest decision we made. Fast, comfortable, and no waiting in the heat.",
        rating: 5,
        date: "2 weeks ago"
    },
    {
        name: "Lise K.",
        location: "Oslo, Norway",
        text: "Wonderful experience. The driver was so helpful with our beach bags and recommended a great local spot for lunch near the water.",
        rating: 5,
        date: "3 weeks ago"
    }
  ];

  return (
    <main className="min-h-screen text-navy-rich font-inter">
      <Navbar />

      <div className="container mx-auto px-6 pt-10">
        <Breadcrumb 
          items={[
            { name: "Beach Transfers", item: "/beach-transfer" },
            { name: "Amalfi Coast", item: "/beach-transfer/amalfi-coast-taxi" }
          ]} 
        />
      </div>

      <PageHero
        titleTop="Coastal Luxury"
        titleBottom="Amalfi Coast Transfers"
        description="Experience the breathtaking beauty of the Amalfi Coast with a stress-free private transfer service. Direct transportation to your seaside destination."
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

      <Testimonials reviews={amalfiReviews} />

      <CTA />

      <Footer />
    </main>
  );
}

