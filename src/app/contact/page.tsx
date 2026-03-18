import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import ContactInfoCards from '@/components/ContactInfoCards';
import ContactFormSection from '@/components/ContactFormSection';
import FAQSection from '@/components/FAQSection';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Us for Taxi Bookings | Italian Taxi Service",
  description: "Get in touch with ItaliaRide for custom taxi quotes, booking assistance, or any inquiries about our airport and city transfer services in Italy.",
  alternates: {
    canonical: "/contact",
  }
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHero
        titleTop="Get in Touch With"
        titleBottom="Our Professional Team"
        description="Available 24/7 for airport transfers and city rides across Italy. We ensure that every traveler's request is handled with world-class precision."
        backgroundImage="/images/hero.png"
      />

      <div className="bg-[#F8F9FA]">
        <ContactInfoCards />
      </div>

      <ContactFormSection />

      <FAQSection />

      <CTA />

      <Footer />
    </main>
  );
}

