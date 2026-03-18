import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import ServiceIntro, { ServiceFeatures } from '@/components/ServiceDetails';
import HowItWorks from '@/components/HowItWorks';
import FAQSection from '@/components/FAQSection';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Taxi from City to City | Italian Taxi Service",
  description: "Travel between Italian cities in comfort and luxury. Door-to-door point-point-transfers with professional drivers. Rome, Florence, Milan, and more.",
  alternates: {
    canonical: "/services/city-to-city",
  }
};

export default function CityToCityPage() {
  const features = [
    "Direct door-to-door service",
    "Fixed & transparent pricing",
    "Spacious luggage capacity",
    "taxi taxi fleet",
    "Safe long-distance travel",
    "Stops upon request"
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHero
        titleTop="Comfortable City-to-City"
        titleBottom="Transfers in Italy"
        description="Travel between major cities like Rome, Milan, Florence, and Venice in absolute comfort and taxi style."
        backgroundImage="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2017&auto=format&fit=crop"
        buttonText="Book Intercity Transfer"
      />

      <ServiceIntro
        title="Seamless Intercity Travel"
        content="Avoid crowded trains and buses. Travel directly between cities with our private transfer service. Safe, reliable, and door-to-door comfort tailored to your schedule."
      />

      <ServiceFeatures
        title="Premier Intercity Service"
        features={features}
        bg="bg-[#F8F9FA]"
      />


      <HowItWorks />

      <FAQSection />

      <CTA />

      <Footer />
    </main>
  );
}
