import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Our Professional Drivers | Italian Taxi Service",
  description: "Meet our fleet of professional, English-speaking drivers in Italy. Licensed, experienced, and dedicated to providing world-class taxi service.",
  alternates: {
    canonical: "https://www.italytaxiservice.com/drivers",
  }
};

export default function DriversPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHero
        titleTop="Our Licensed"
        titleBottom="Professional Drivers"
        description="Every driver in our fleet is fully licensed, background-checked, and committed to your safety and comfort."
        backgroundImage="/images/hero.png"
      />
      <div className="container mx-auto py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-navy mb-8">Excellence Behind the Wheel</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-12">
                Our drivers are more than just chauffeurs; they are local experts who take pride in providing seamless travel experiences. From airport meet-and-greets to long-distance city transfers, you can rely on their professionalism and local knowledge.
            </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
