import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import ServiceIntro, { ServiceFeatures } from '@/components/ServiceDetails';
import HowItWorks from '@/components/HowItWorks';
import FAQSection from '@/components/FAQSection';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Amalfi Coast Private Taxi | Positano & Amalfi Transfers",
  description: "Experience the magic of the Amalfi Coast with our premium taxi transfers. Reliable service to Positano, Amalfi, Ravello, and Sorrento from Naples or Rome.",
  alternates: {
    canonical: "/attraction-transfer/amalfi-coast-taxi-transfer",
  }
};

export default function AmalfiCoastPage() {
  const features = [
    "Expert drivers for narrow coastal roads",
    "Luxury sedans and panoramic minivans",
    "Punctual pickups from Naples Airport & Train Station",
    "Direct door-to-door service to your cliffside hotel",
    "Fixed rates with no hidden mountain tolls",
    "Assistance with luggage and local recommendations"
  ];

  const amalfiFaqs = [
    {
      q: "How long is the transfer from Naples to Positano?",
      a: "The journey typically takes about 1 hour and 20 minutes, depending on traffic and the time of day."
    },
    {
      q: "Do you offer transfers from Rome to the Amalfi Coast?",
      a: "Yes, we provide long-distance transfers from Rome (hotels or airports) directly to any town on the Amalfi Coast. This journey takes approximately 3.5 hours."
    },
    {
      q: "Can the driver stop for photos along the way?",
      a: "Absolutely! Our drivers know the best panoramic viewpoints along the SS163 coastal road and are happy to stop for quick photo opportunities."
    },
    {
      q: "Are child seats available for the winding roads?",
      a: "Yes, we prioritize safety. Please request child or infant seats during booking, and we will have them ready at no extra cost."
    }
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHero
        titleTop="Private Taxi Transfers to the"
        titleBottom="Breathtaking Amalfi Coast"
        description="Relax as you navigate the world's most beautiful coastline. Professional, stress-free transport to Positano, Amalfi, and beyond."
        backgroundImage="/images/almafi.webp"
        buttonText="Book Amalfi Transfer"
        breadcrumbs={[
          { name: "Attraction Transfers", item: "/attraction-transfer" },
          { name: "Amalfi Coast", item: "/attraction-transfer/amalfi-coast-taxi-transfer" }
        ]}
      />

      <ServiceIntro
        title="Your Premium Gateway to Mediterranean Magic"
        content="The Amalfi Coast is famous for its vertical towns, lemon groves, and dramatic turquoise sea. However, its narrow, winding roads can be a challenge for even the most experienced drivers. Our private taxi service offers the ultimate comfort and peace of mind, allowing you to enjoy the world-class views while our professional local drivers handle the logistics. Skip the crowded SITA buses and expensive ferry transfers; arrive at your hotel doorstep feeling refreshed."
      />

      <ServiceFeatures
        title="Amalfi Transfer Excellence"
        features={features}
        bg="bg-[#F8F9FA]"
      />

      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy mb-8 text-center">Seamless Arrival in Paradise</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Navigating the Amalfi Coast with luggage can be difficult due to the many stairs and restricted access areas. Our drivers are experts in the region's geography and will ensure you are dropped off as close to your accommodation as possible, assisting with your bags every step of the way. 
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Whether you are heading to the glamorous boutiques of Positano, the historic cathedrals of Amalfi, or the musical heights of Ravello, we provide a punctual and reliable link to your destination. All our vehicles are modern Mercedes-Benz models with full climate control.
            </p>
          </div>
        </div>
      </div>

      <HowItWorks />

      <FAQSection 
        faqs={amalfiFaqs}
        title="Amalfi Coast Service FAQs"
        badge="Coastal Travel"
      />

      <CTA />
      <Footer />
    </main>
  );
}
