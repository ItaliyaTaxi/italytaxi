import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import StorySection from '@/components/StorySection';
import MissionValues from '@/components/MissionValues';
import StatsSection from '@/components/StatsSection';
import FAQSection from '@/components/FAQSection';
import Breadcrumb from '@/components/Breadcrumb';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Us | Italy Taxi Service | Our Mission & Values",
  description: "Learn about ItaliaRide, Italy's premier taxi transfer service. Our mission is to provide professional, reliable, and comfortable transportation for every traveler.",
  alternates: {
    canonical: "/about-us",
  }
};

export default function AboutUsPage() {
  const aboutFaqs = [
    {
      q: "What makes Italy Taxi Service different from others?",
      a: "We combine local expertise with luxury standards. Unlike standard taxi apps, we provide fixed-rate, professional chauffeur services with meet-and-greet support at every airport and city in Italy."
    },
    {
      q: "Are all your drivers licensed and insured?",
      a: "Yes, every driver in our network holds a professional license (N.C.C.) and is fully insured according to Italian transportation regulations, ensuring your safety and compliance."
    },
    {
      q: "How long has Italy Taxi Service been operating?",
      a: "We have been providing high-end private transfers for over a decade, serving thousands of international travelers with a consistent 5-star rating for reliability and comfort."
    },
    {
      q: "Do you offer corporate or long-term partnerships?",
      a: "Absolutely. We work with travel agencies, event planners, and corporate clients to provide reliable, high-volume transportation solutions across Italy."
    },
    {
      q: "What is your commitment to customer satisfaction?",
      a: "Our mission is 'Excellence in Every Mile.' We provide 24/7 support and handle every booking with personalized attention to ensure your Italian journey is flawlessly executed."
    }
  ];

  return (
    <main className="min-h-screen text-navy-rich font-inter">
      <Navbar />

      <div className="container mx-auto px-6 pt-10">
        <Breadcrumb 
          items={[
            { name: "About Us", item: "/about-us" }
          ]} 
        />
      </div>

      <PageHero
        titleTop="About Our Private"
        titleBottom="Transfer Service"
        description="Premium airport and city transfers across Italy with licensed professional drivers. Born from a passion for excellence and local hospitality."
        backgroundImage="/images/hero.png"
      />

      <StorySection />

      <MissionValues />

      <StatsSection />

      <FAQSection faqs={aboutFaqs} title="About Our Service FAQ" />

      <CTA />

      <Footer />
    </main>
  );
}


