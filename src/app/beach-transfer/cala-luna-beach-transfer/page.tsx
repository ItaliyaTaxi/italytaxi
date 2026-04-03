import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import ServiceIntro, { ServiceFeatures } from '@/components/ServiceDetails';
import HowItWorks from '@/components/HowItWorks';
import FAQSection from '@/components/FAQSection';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Cala Luna Beach Taxi | Orosei Gulf Transfers",
  description: "Reach the paradise of Cala Luna in Sardinia. Private taxi transfers to Cala Gonone and Orosei for your boat departure to Cala Luna. Professional and reliable.",
  alternates: {
    canonical: "/beach-transfer/cala-luna-beach-transfer",
  }
};

export default function CalaLunaBeachPage() {
  const features = [
    "Transfers from Olbia and Alghero airports",
    "Direct service to Cala Gonone port",
    "English-speaking professional drivers",
    "Fixed rates with no hidden mountain road fees",
    "Assistance with boat tour connections",
    "Spacious vehicles for beach and dive gear"
  ];

  const calaLunaFaqs = [
    {
      q: "Can I drive directly to Cala Luna beach?",
      a: "No, Cala Luna is only accessible by boat from Cala Gonone or by a long hike. We provide the taxi transfer to the port of Cala Gonone where you can catch the boat."
    },
    {
      q: "How far is Cala Gonone from Olbia Airport?",
      a: "The journey takes approximately 1 hour and 30 minutes through the scenic Sardinian mountains."
    },
    {
      q: "Do you offer return transfers from the port?",
      a: "Yes, we can arrange a pickup time that matches your boat's return to the harbor."
    },
    {
      q: "Can we book a taxi for a group of 6 people?",
      a: "Yes, our minivans are perfect for groups and provide plenty of room for all your beach essentials."
    }
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHero
        titleTop="Private Taxi Transfers to"
        titleBottom="The Paradise of Cala Luna"
        description="Your gateway to the Gulf of Orosei. Comfortable, reliable transport to the boat departures for Sardinia's most famous beach."
        backgroundImage="https://www.sardegnaturismo.it/sites/default/files/galleria/003_cala_luna_13_tn.jpg"
        buttonText="Book Cala Luna Transfer"
      />

      <ServiceIntro
        title="Discover the Unspoiled Beauty of Sardinia"
        content="Cala Luna, with its iconic caves and turquoise waters, is the crown jewel of the Gulf of Orosei. As it is unreachable by car, your journey begins with a drive to the charming port town of Cala Gonone. Our private taxi service ensures a smooth, scenic journey through the Supramonte mountains, delivering you directly to the pier in time for your boat departure. Experience the best of Sardinia without the stress of navigating winding mountain roads."
      />

      <ServiceFeatures
        title="Sardinian Transfer Excellence"
        features={features}
        bg="bg-[#F8F9FA]"
      />

      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy mb-8 text-center">A Scenic Mountain & Sea Journey</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              The drive to the Gulf of Orosei is one of the most beautiful in Italy, but it requires an experienced driver to navigate the steep descent into Cala Gonone. Our local drivers are experts on these roads, allowing you to relax and enjoy the panoramic views of the Mediterranean.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Whether you are arriving at Olbia Costa Smeralda Airport or staying in a nearby resort, we provide a punctual and professional link to the coast. All our vehicles are equipped with climate control to keep you cool during the warm Sardinian summer.
            </p>
          </div>
        </div>
      </div>

      <HowItWorks />

      <FAQSection
        faqs={calaLunaFaqs}
        title="Cala Luna Service FAQs"
        badge="Beach Access"
      />

      <CTA />
      <Footer />
    </main>
  );
}
