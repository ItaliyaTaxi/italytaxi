import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import ServiceIntro, { ServiceFeatures } from '@/components/ServiceDetails';
import HowItWorks from '@/components/HowItWorks';
import FAQSection from '@/components/FAQSection';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Portofino Private Taxi | Luxury Ligurian Transfers",
  description: "Experience the glamour of Portofino with our premium taxi transfers. Professional service from Genoa Airport, Santa Margherita Ligure station, or Milan.",
  alternates: {
    canonical: "/beach-transfer/portofino-taxi-transfer",
  }
};

export default function PortofinoBeachPage() {
  const features = [
    "Luxury Mercedes-Benz fleet",
    "Expert drivers for narrow Ligurian roads",
    "Direct service to Portofino's Piazzetta",
    "Punctual Genoa Airport & Station transfers",
    "Fixed premium rates, no hidden fees",
    "Assistance with boat and restaurant bookings"
  ];

  const portofinoFaqs = [
    {
      q: "Can taxis drive directly into Portofino village?",
      a: "Yes, our licensed taxis have full access to the village center and can drop you off directly at the Piazzale Bussetti, just steps from the harbour."
    },
    {
      q: "How far is Portofino from Genoa Airport?",
      a: "The drive typically takes about 45-55 minutes, depending on traffic along the scenic coastal highway."
    },
    {
      q: "Do you offer transfers from Milan to Portofino?",
      a: "Yes, we provide long-distance luxury transfers from Milan (hotels or Malpensa Airport) directly to Portofino. This journey takes approximately 2.5 hours."
    },
    {
      q: "Can we book a taxi for a day trip from Santa Margherita Ligure?",
      a: "Absolutely. While it is a short distance, a private taxi is the most comfortable way to navigate the narrow road between the two towns, especially during the busy summer months."
    }
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHero
        titleTop="Premium Private Taxi to the"
        titleBottom="Glamorous Portofino"
        description="Arrive at the Italian Riviera's most iconic village in absolute style. Professional, discreet, and reliable luxury transport."
        backgroundImage="https://images.unsplash.com/photo-1533038595874-9842a9de12f2?q=80&w=2070&auto=format&fit=crop"
        buttonText="Book Portofino Taxi"
      />

      <ServiceIntro
        title="Luxury Mobility on the Ligurian Coast"
        content="Portofino is the jewel of the Italian Riviera, famous for its pastel-colored houses, high-end boutiques, and stunning harbor. Reaching this exclusive enclave can be a challenge due to limited parking and narrow roads. Our private taxi service provides the ultimate luxury experience, delivering you directly to the heart of the village in a climate-controlled Mercedes-Benz. Skip the crowded ferries and local buses; travel in the comfort and privacy you deserve."
      />

      <ServiceFeatures
        title="Ligurian Coast Excellence"
        features={features}
        bg="bg-[#F8F9FA]"
      />

      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy mb-8 text-center">Seamless Arrival in the Riviera</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Navigating the Italian Riviera requires local expertise. Our professional drivers are well-acquainted with the region's unique traffic patterns and coastal geography, ensuring your journey is as smooth as it is scenic.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Whether you are arriving for a luxury yacht vacation or a romantic weekend at a cliffside hotel, we provide a punctual and reliable link to your destination. We prioritize discretion, professional appearance, and your absolute comfort at every stage of the journey.
            </p>
          </div>
        </div>
      </div>

      <HowItWorks />

      <FAQSection 
        faqs={portofinoFaqs}
        title="Portofino Service FAQs"
        badge="Luxury Travel"
      />

      <CTA />
      <Footer />
    </main>
  );
}
