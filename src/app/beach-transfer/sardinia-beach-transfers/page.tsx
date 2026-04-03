import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import ServiceIntro, { ServiceFeatures } from '@/components/ServiceDetails';
import HowItWorks from '@/components/HowItWorks';
import FAQSection from '@/components/FAQSection';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Sardinia Beach Transfers | Emerald Coast & Beyond",
  description: "Book professional beach transfers across Sardinia. Luxury taxi services to Costa Smeralda, Villasimius, and Alghero from all major airports.",
  alternates: {
    canonical: "/beach-transfer/sardinia-beach-transfers",
  }
};

export default function SardiniaBeachPage() {
  const features = [
    "Transfers from Olbia, Cagliari, and Alghero airports",
    "Luxury SUV and Minivan fleet",
    "Direct service to remote beach resorts",
    "Professional English-speaking local drivers",
    "Fixed rates with no peak-season surcharges",
    "Assistance with boat and beach club logistics"
  ];

  const sardiniaFaqs = [
    {
      q: "Which part of Sardinia has the best beaches?",
      a: "Sardinia is famous for its diverse coastline. The Costa Smeralda in the north is known for luxury and turquoise water, while Villasimius in the south offers long sandy stretches and marine parks."
    },
    {
      q: "Can you provide transfers for large groups with beach gear?",
      a: "Yes, our Mercedes V-Class vans are perfect for groups of up to 8 people with plenty of room for umbrellas, coolers, and luggage."
    },
    {
      q: "Do you offer airport meet and greet?",
      a: "Yes, our drivers will meet you directly at the arrivals hall with a name sign, regardless of which Sardinian airport you land at."
    },
    {
      q: "How far in advance should I book?",
      a: "For summer travel (June-September), we recommend booking at least 48 hours in advance to guarantee availability."
    }
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHero
        titleTop="Private Taxi Transfers to"
        titleBottom="Sardinia's World-Class Beaches"
        description="Experience the Mediterranean's most beautiful island in absolute comfort. Professional door-to-door service to every coastal paradise."
        backgroundImage="https://images.unsplash.com/photo-1515542622106-78b28af7815d?q=80&w=2070&auto=format&fit=crop"
        buttonText="Book Sardinia Transfer"
      />

      <ServiceIntro
        title="Your Premium Link to the Sardinian Coast"
        content="Sardinia is an island of wild beauty and pristine waters. From the exclusive enclaves of the Emerald Coast to the rugged shores of the Orosei Gulf, reaching the best beaches often requires navigating complex mountain roads. Our private taxi service provides a seamless, stress-free alternative to local rentals and buses. Enjoy the scenic views while our professional drivers take you directly to your seaside destination."
      />

      <ServiceFeatures
        title="Sardinian Coastal Excellence"
        features={features}
        bg="bg-[#F8F9FA]"
      />

      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy mb-8 text-center">Island-Wide Coverage</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Whether you are landing in the north at Olbia, the south at Cagliari, or the west at Alghero, we provide comprehensive transfer services across the entire island. Our drivers are locals who know the fastest and most scenic routes to your resort or private villa.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              We specialize in providing high-end mobility for families and luxury travelers. All our vehicles are modern, air-conditioned, and maintained to the highest standards, ensuring your Sardinian holiday starts with a comfortable and reliable journey.
            </p>
          </div>
        </div>
      </div>

      <HowItWorks />

      <FAQSection 
        faqs={sardiniaFaqs}
        title="Sardinia Service FAQs"
        badge="Island Travel"
      />

      <CTA />
      <Footer />
    </main>
  );
}
