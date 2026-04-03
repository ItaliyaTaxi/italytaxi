import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import ServiceIntro, { ServiceFeatures } from '@/components/ServiceDetails';
import HowItWorks from '@/components/HowItWorks';
import FAQSection from '@/components/FAQSection';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Capri Island Private Taxi | Port & Island Transfers",
  description: "Luxury private transfers to and around Capri Island. Skip the long lines for the funicular and arrive at your hotel in one of Capri's iconic open-top taxis or premium vans.",
  alternates: {
    canonical: "/attraction-transfer/capri-island-taxi-transfer",
  }
};

export default function CapriIslandPage() {
  const features = [
    "Seamless port-to-hotel transfers",
    "Iconic open-top Capri taxis available",
    "Professional English-speaking drivers",
    "Luggage handling from the ferry terminal",
    "Fixed transparent island rates",
    "Tour options around the island"
  ];

  const capriFaqs = [
    {
      q: "How do I find my taxi at Capri Port (Marina Grande)?",
      a: "Your driver will meet you directly at the ferry or hydrofoil arrival pier, holding a sign with your name. We monitor ferry arrival times to ensure no delays."
    },
    {
      q: "Can you provide transfers from Naples to Capri?",
      a: "Yes! We offer a full 'door-to-door' service where a taxi picks you up in Naples, drives you to the port, assists with ferry boarding, and another taxi meets you on the island."
    },
    {
      q: "Is it better to take the funicular or a taxi in Capri?",
      a: "The funicular is cheaper but often has very long lines and no space for luggage. A private taxi is much faster and brings you directly to your hotel entrance."
    },
    {
      q: "Can we book a taxi for a round-island tour?",
      a: "Absolutely. We offer customized island tours (2, 3, or 4 hours) covering Capri town, Anacapri, and the Faro lighthouse."
    }
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHero
        titleTop="Private Taxi Transfers on the"
        titleBottom="Glamorous Capri Island"
        description="Arrive in style on Italy's most famous island. Professional door-to-door service from Marina Grande to Capri and Anacapri."
        backgroundImage="https://images.unsplash.com/photo-1555881400-61b4718dc602?q=80&w=2070&auto=format&fit=crop"
        buttonText="Book Capri Transfer"
      />

      <ServiceIntro
        title="Luxury Mobility on the Isle of Dreams"
        content="Capri is synonymous with elegance, and your arrival should be no different. Whether you are landing at Marina Grande with heavy luggage or heading to a sunset dinner in Anacapri, our private taxi service provides the most comfortable and efficient way to navigate the island's narrow, winding roads. Experience the true 'Dolce Vita' with our fleet of premium vehicles and professional local drivers."
      />

      <ServiceFeatures
        title="Capri Transfer Excellence"
        features={features}
        bg="bg-[#F8F9FA]"
      />

      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy mb-8 text-center">Stress-Free Island Arrival</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              The transition from the ferry to the island can be chaotic, especially during the height of summer. Our 'Meet & Greet' service at the port ensures you skip the long taxi queues and the crowded funicular. We handle your bags from the pier to the vehicle, so you can enjoy the view immediately.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              For those staying in Anacapri or high-altitude villas, our drivers are experts in the island's unique geography, ensuring a smooth and safe ride to even the most secluded locations.
            </p>
          </div>
        </div>
      </div>

      <HowItWorks />

      <FAQSection 
        faqs={capriFaqs}
        title="Capri Island Service FAQs"
        badge="Island Mobility"
      />

      <CTA />
      <Footer />
    </main>
  );
}
