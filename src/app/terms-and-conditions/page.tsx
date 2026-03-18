import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Terms and Conditions | Italian Taxi Service",
  description: "Read the terms and conditions for booking our taxi services in Italy. Information on pricing, cancellations, and service agreements.",
  alternates: {
    canonical: "/terms-and-conditions",
  }
};

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHero
        titleTop="Terms of"
        titleBottom="Service"
        description="The legal guidelines and conditions for booking and traveling with our premium taxi service fleet."
        backgroundImage="/images/hero.png"
      />
      <div className="container mx-auto py-24 px-6 prose max-w-4xl">
        <h2 className="text-3xl font-bold text-navy mb-6">Service Agreement</h2>
        <p className="text-gray-600 leading-relaxed">
          By booking a transfer with us, you agree to the following terms regarding pricing, cancellations, and passenger responsibilities.
        </p>
        {/* Add more terms content here if needed */}
      </div>
      <Footer />
    </main>
  );
}

