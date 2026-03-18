import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import ServiceIntro, { ServiceFeatures } from '@/components/ServiceDetails';
import HowItWorks from '@/components/HowItWorks';
import FAQSection from '@/components/FAQSection';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Business & Corporate Taxi | Italian Taxi Service",
  description: "Professional executive taxi services for business meetings, conferences and VIP guests in Italy. On-time, reliable transportation for your corporate needs.",
  alternates: {
    canonical: "/services/business-taxi",
  }
};

export default function BusinessCorporatePage() {
  const features = [
    "Priority executive booking",
    "Punctuality guaranteed",
    "Discreet professional drivers",
    "Monthly corporate billing",
    "taxi late-model fleet",
    "Wi-Fi available on request"
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHero
        titleTop="Executive Corporate"
        titleBottom="Taxi Services in Italy"
        description="Professional transport solutions for business meetings, conferences, and VIP guests. Arrive with prestige."
        backgroundImage="/images/taxis-1.jpg"
        buttonText="Register Corporate Account"
      />

      <ServiceIntro
        title="taxi Business Mobility"
        content="We provide reliable executive transportation for companies and business travelers. Maintain punctuality and absolute comfort with our taxi fleet and professional service."
      />

      <ServiceFeatures
        title="Corporate Class Standards"
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
