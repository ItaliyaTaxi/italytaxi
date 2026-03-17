import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import Footer from '@/components/Footer';
import Coverage from '@/components/Coverage';
import CoverageDirectory from '@/components/CoverageDirectory';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Italy Coverage Areas | Italian Taxi Service",
  description: "Explore the wide range of cities and regions covered by our taxi service in Italy. From Rome and Florence to the Amalfi Coast and Lake Como.",
  alternates: {
    canonical: "https://www.italytaxiservice.com/coverage-areas",
  }
};

export default function CoverageAreasPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHero
        titleTop="Serving All Major"
        titleBottom="Destinations in Italy"
        description="Our premium taxi network covers the entire peninsula, ensuring you have a reliable ride wherever you land in Italy."
        backgroundImage="/images/hero.png"
      />
      <div className="py-20">
        <Coverage />
      </div>
      <CoverageDirectory />
      <Footer />
    </main>
  );
}
