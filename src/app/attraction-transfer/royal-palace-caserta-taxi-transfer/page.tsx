import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import ServiceIntro, { ServiceFeatures } from '@/components/ServiceDetails';
import HowItWorks from '@/components/HowItWorks';
import FAQSection from '@/components/FAQSection';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Caserta Royal Palace Private Taxi | Premium Transfers",
  description: "Arrive at the world's largest palace in style. Luxury private taxi transfers to Reggia di Caserta from Naples, Rome, or any Italian city.",
  alternates: {
    canonical: "/attraction-transfer/royal-palace-caserta-taxi-transfer",
  }
};

export default function RoyalPalaceCasertaPage() {
  const features = [
    "Direct door-to-door service",
    "English-speaking professional drivers",
    "Fixed rates with no hidden fees",
    "Luxury sedans and spacious vans",
    "Complimentary wait time included",
    "Assistance with tickets and luggage"
  ];

  const casertaFaqs = [
    {
      q: "How far is the Royal Palace of Caserta from Naples?",
      a: "The palace is approximately 30-40 minutes from Naples city center by private taxi, depending on traffic."
    },
    {
      q: "Can the driver wait while I visit the palace?",
      a: "Yes, we offer round-trip services where the driver waits for you or returns at a scheduled time to take you back."
    },
    {
      q: "Is the entrance ticket included in the transfer?",
      a: "No, the transfer price only covers the transportation. We recommend booking your palace tickets in advance online."
    },
    {
      q: "Can we book a transfer from Rome?",
      a: "Absolutely. We provide long-distance transfers from Rome to Caserta, which typically takes about 2.5 hours."
    }
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHero
        titleTop="Premium Private Taxi to"
        titleBottom="Royal Palace of Caserta"
        description="Experience the magnificence of the 'Versailles of Italy' with a comfortable, stress-free private transfer service."
        backgroundImage="https://images.unsplash.com/photo-1590274853856-f22d5ee3d228?q=80&w=2070&auto=format&fit=crop"
        buttonText="Book Caserta Transfer"
      />

      <ServiceIntro
        title="Visit the World's Largest Palace"
        content="The Reggia di Caserta is a masterpiece of Italian Baroque architecture and a UNESCO World Heritage site. Spanning over 1,200 rooms and surrounded by vast, stunning gardens with monumental fountains, it is an essential destination for any traveler in Southern Italy. Avoid the complexities of local trains and buses; our private taxi service brings you directly to the palace gates in absolute comfort."
      />

      <ServiceFeatures
        title="Why Choose Our Caserta Transfer"
        features={features}
        bg="bg-[#F8F9FA]"
      />

      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy mb-8 text-center">A Royal Experience from Start to Finish</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Our professional drivers are experts in navigating the routes between Naples, Rome, and Caserta. We monitor traffic in real-time to ensure you arrive promptly. Whether you are visiting for a few hours or a full day, our flexible booking options cater to your specific itinerary.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Traveling with a group? Our fleet includes spacious Mercedes-Benz vans that can accommodate up to 8 passengers with ample room for strollers or specialized equipment.
            </p>
          </div>
        </div>
      </div>

      <HowItWorks />

      <FAQSection 
        faqs={casertaFaqs}
        title="Caserta Transfer FAQs"
        badge="Palace Visit"
      />

      <CTA />
      <Footer />
    </main>
  );
}
