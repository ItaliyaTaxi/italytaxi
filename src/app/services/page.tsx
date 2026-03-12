import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import Services from '@/components/Services';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Services | Italian Taxi Service",
  description: "Comprehensive taxi services across Italy. From airport transfers and city-to-city transfers to hourly chauffeur and wedding transportation.",
  alternates: {
    canonical: "https://www.italytaxiservice.com/services",
  }
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHero
        titleTop="taxi & Reliable"
        titleBottom="Professional Services"
        description="From airport pickups to taxi city tours, we provide the highest standard of taxi services across Italy."
        backgroundImage="/images/hero.png"
      />
      <div className="py-20">
        <Services />
      </div>
      <Footer />
    </main>
  );
}

