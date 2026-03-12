import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhyChooseUs from '@/components/WhyChooseUs';
import Services from '@/components/Services';
import PopularDestinations from '@/components/PopularDestinations';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import Coverage from '@/components/Coverage';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Private Taxi Transfers in Italy | Italian Taxi Service",
  description: "Experience the finest travel in Italy. Professional drivers and vehicle fleet for airport transfers and city tours. Book your taxi today!",
  alternates: {
    canonical: "https://www.italytaxiservice.com",
  }
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <Services />
      <PopularDestinations />
      <HowItWorks />
      <Testimonials />
      <Coverage />
      <CTA />
      <Footer />
    </main>
  );
}

