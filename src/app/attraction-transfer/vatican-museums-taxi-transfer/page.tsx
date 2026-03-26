import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import ServiceIntro, { ServiceFeatures } from '@/components/ServiceDetails';
import HowItWorks from '@/components/HowItWorks';
import FAQSection from '@/components/FAQSection';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Vatican Museums Private Taxi | Skip the Transit Hassle",
  description: "Book a professional private taxi to the Vatican Museums and St. Peter's Basilica. Direct, air-conditioned transfers from your Rome hotel or Fiumicino Airport.",
  alternates: {
    canonical: "/attraction-transfer/vatican-museums-taxi-transfer",
  }
};

export default function VaticanMuseumsPage() {
  const features = [
    "Direct drop-off at the Museum entrance",
    "Professional English-speaking drivers",
    "Avoid crowded buses and metro lines",
    "Fixed prices with no city taxi surcharges",
    "Meet & Greet available from Rome airports",
    "Spacious vans for families and groups"
  ];

  const vaticanFaqs = [
    {
      q: "Where is the best drop-off point for the Vatican Museums?",
      a: "The main entrance is on Viale Vaticano. Our drivers know exactly where to drop you to minimize walking time to the security line."
    },
    {
      q: "Can we book a transfer from Fiumicino Airport directly to the Vatican?",
      a: "Yes, we provide direct airport transfers. It usually takes about 45-60 minutes depending on traffic."
    },
    {
      q: "Do you offer return transfers after our visit?",
      a: "Absolutely. You can schedule a pickup time or contact us when you are ready, and we will send a driver to meet you at a designated spot."
    },
    {
      q: "Are the vehicles air-conditioned?",
      a: "Yes, all our vehicles are modern Mercedes-Benz models with full climate control for your comfort during the Roman summer."
    }
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHero
        titleTop="Private Taxi Transfers to the"
        titleBottom="World-Famous Vatican Museums"
        description="Start your art pilgrimage in comfort. Professional door-to-door service to the treasures of the Vatican City."
        backgroundImage="https://images.unsplash.com/photo-1594841763073-496541a384f6?q=80&w=2070&auto=format&fit=crop"
        buttonText="Book Vatican Transfer"
        breadcrumbs={[
          { name: "Attraction Transfers", item: "/attraction-transfer" },
            { name: "Vatican Museums", item: "/attraction-transfer/vatican-museums-taxi-transfer" }
        ]}
      />

      <ServiceIntro
        title="Arrive Ready for the Sistine Chapel"
        content="The Vatican Museums host some of the most important artistic masterpieces in the world. Navigating Rome's public transport to get there can be exhausting, especially during peak hours. Our private taxi service ensures you arrive at the museum entrance fresh and ready for your tour. Whether you have early access tickets or a mid-day booking, we guarantee punctual and professional service."
      />

      <ServiceFeatures
        title="Vatican Transfer Excellence"
        features={features}
        bg="bg-[#F8F9FA]"
      />

      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy mb-8 text-center">Seamless Travel in the Eternal City</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Rome's traffic can be unpredictable. Our drivers monitor local conditions to choose the most efficient routes, avoiding the bottlenecks common around the Vatican City walls. 
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              For families traveling with children or elderly members, our door-to-door service is the ideal solution to avoid the long walks and stairs associated with the Rome Metro. We offer vehicles of all sizes to accommodate your entire party and all your belongings.
            </p>
          </div>
        </div>
      </div>

      <HowItWorks />

      <FAQSection 
        faqs={vaticanFaqs}
        title="Vatican Service FAQs"
        badge="Museum Access"
      />

      <CTA />
      <Footer />
    </main>
  );
}
