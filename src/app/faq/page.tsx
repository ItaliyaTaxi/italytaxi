import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Taxi Service FAQ | Italian Taxi Service",
  description: "Everything you need to know about our premium taxi services, booking process, and airport transfers in Italy.",
  alternates: {
    canonical: "/faq",
  }
};

export default function FaqPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHero
        titleTop="Frequently Asked"
        titleBottom="Questions"
        description="Everything you need to know about our premium taxi services, booking process, and airport transfers."
        backgroundImage="/images/hero.png"
      />
      <div className="py-20">
        <FAQSection />
      </div>
      <Footer />
    </main>
  );
}
