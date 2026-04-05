import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import ServiceIntro, { ServiceFeatures } from '@/components/ServiceDetails';
import HowItWorks from '@/components/HowItWorks';
import FAQSection from '@/components/FAQSection';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Castel Dell Ovo Private Taxi | Naples Waterfront Transfers",
description: "Visit the historic Castel dell'Ovo in Naples with ease. Private taxi transfers from Naples Airport, Central Station, or the Cruise Port. Professional local drivers.",
  alternates: {
  canonical: "/attraction-transfer/castel-dell-ovo-taxi-transfer",
  }
};

export default function CastelDellOvoPage() {
  const features = [
    "Direct drop-off at the Borgo Marinari entrance",
    "Professional Neapolitan drivers",
    "Fixed rates with no city traffic surcharges",
    "Punctual service from Naples Capodichino Airport",
    "Luxury sedans and spacious minivans",
    "Helpful local information and tips"
  ];

  const naplesFaqs = [
    {
      q: "Where is the best pickup point near Castel dell'Ovo?",
      a: "The castle is located on the Megaride islet. We usually pick up and drop off at the entrance of Borgo Marinari or along the via Partenope waterfront."
    },
    {
      q: "How far is the castle from Naples Central Station?",
      a: "The drive typically takes about 15-20 minutes, depending on traffic along the scenic Lungomare."
    },
    {
      q: "Can we book a taxi for a city tour that includes the castle?",
      a: "Yes, we offer custom city tours of Naples. We can include stops at Castel dell'Ovo, Piazza del Plebiscito, and the National Archaeological Museum."
    },
    {
      q: "Do you offer transfers to the Naples Cruise Port?",
      a: "Absolutely. The cruise port (Molo Angioino) is very close to the castle, and we can provide quick and reliable transfers between the two locations."
    }
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHero
        titleTop="Private Taxi Transfers to the"
        titleBottom="Historic Castel dell'Ovo"
        description="Visit the oldest castle in Naples. Professional, reliable door-to-door service to the city's iconic waterfront landmark."
        backgroundImage="https://aprilmunday.wordpress.com/wp-content/uploads/2018/09/bodiam_castle_through_the_trees.jpg?w=500"
        buttonText="Book Naples Transfer"
      />

      <ServiceIntro
        title="Discover the Legend of the Egg"
        content="Castel dell'Ovo (Castle of the Egg) is a stunning seaside fortress that offers some of the best views of the Bay of Naples and Mount Vesuvius. Located on the waterfront in the district of San Ferdinando, it is a must-visit for any traveler to Naples. Navigating the busy streets of Naples can be overwhelming; our private taxi service provides a calm and professional way to reach the castle and the surrounding Borgo Marinari."
      />

      <ServiceFeatures
        title="Naples Transfer Excellence"
        features={features}
        bg="bg-[#F8F9FA]"
      />

      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy mb-8 text-center">Seamless Travel in the City of the Sun</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Naples is a vibrant and bustling city, and its traffic can be legendary. Our local drivers are experts at navigating the city's unique rhythms, ensuring you reach your destination efficiently and safely.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              We offer vehicles for every need, from luxury sedans for couples to spacious minivans for families or groups. All our vehicles are air-conditioned and maintained to the highest standards, providing a professional sanctuary from the city's energy.
            </p>
          </div>
        </div>
      </div>

      <HowItWorks />

      <FAQSection
        faqs={naplesFaqs}
        title="Naples Service FAQs"
        badge="City Landmark"
      />

      <CTA />
      <Footer />
    </main>
  );
}
