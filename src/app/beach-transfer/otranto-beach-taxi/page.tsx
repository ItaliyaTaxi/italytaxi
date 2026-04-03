import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import ServiceIntro, { ServiceFeatures } from '@/components/ServiceDetails';
import HowItWorks from '@/components/HowItWorks';
import FAQSection from '@/components/FAQSection';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Otranto Beach Taxi | Premium Salento Transfers",
  description: "Reach the stunning beaches of Otranto and Salento in comfort. Private taxi transfers to Otranto, Baia dei Turchi, and Porto Badisco from Brindisi or Bari.",
  alternates: {
    canonical: "/beach-transfer/otranto-beach-taxi",
  }
};

export default function OtrantoBeachPage() {
  const features = [
    "Transfers from Brindisi and Bari airports",
    "Local drivers with expert Salento knowledge",
    "Air-conditioned premium vehicles",
    "Direct drop-off at beach resorts and lidos",
    "Fixed rates for crystal-clear pricing",
    "Space for beach gear and luggage"
  ];

  const otrantoFaqs = [
    {
      q: "Which airport serves Otranto?",
      a: "Brindisi Airport (BDS) is the closest, about 1 hour and 15 minutes away. Bari Airport (BRI) is about 2 hours and 15 minutes away."
    },
    {
      q: "Do you provide transfers to Baia dei Turchi?",
      a: "Yes, we provide transfers to all the major beaches around Otranto, including Baia dei Turchi, Alimini, and Porto Badisco."
    },
    {
      q: "Can I book a return transfer from the beach?",
      a: "Absolutely. We recommend booking your return in advance to ensure availability, especially during July and August."
    },
    {
      q: "Are child seats available?",
      a: "Yes, we provide child and infant seats upon request at no extra charge to ensure a safe journey for your family."
    }
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHero
        titleTop="Private Taxi Transfers to"
        titleBottom="The Pristine Otranto Beaches"
        description="Discover the turquoise waters of Salento. Comfortable, reliable, and professional transport to Italy's most eastern shores."
        backgroundImage="https://images.unsplash.com/photo-1533682805518-48d1f5e8cd3e?q=80&w=2070&auto=format&fit=crop"
        buttonText="Book Otranto Taxi"
      />

      <ServiceIntro
        title="Your Pathway to the Pearl of the Adriatic"
        content="Otranto is famous for its stunning coastline, historic architecture, and some of the clearest waters in Italy. Whether you are heading to the sandy stretches of Alimini or the rocky coves near the lighthouse, our private taxi service provides a stress-free way to reach the coast. Skip the long waits for local buses and the difficulty of finding parking in peak season; let our professional drivers take you directly to the sand."
      />

      <ServiceFeatures
        title="Salento Transfer Excellence"
        features={features}
        bg="bg-[#F8F9FA]"
      />

      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy mb-8 text-center">Coastal Comfort in Southern Italy</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              The Salento region in Puglia can be challenging to navigate without a car, especially when trying to reach the more secluded 'wild' beaches. Our drivers know the hidden gems and the best access points, ensuring you spend less time traveling and more time enjoying the sun.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our fleet includes luxury sedans for couples and spacious minivans for families or groups of friends, all equipped with large trunks for umbrellas, coolers, and beach bags.
            </p>
          </div>
        </div>
      </div>

      <HowItWorks />

      <FAQSection 
        faqs={otrantoFaqs}
        title="Otranto Service FAQs"
        badge="Beach Travel"
      />

      <CTA />
      <Footer />
    </main>
  );
}
