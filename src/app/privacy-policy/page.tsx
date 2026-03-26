import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Privacy Policy | Italian Taxi Service",
  description: "Learn how ItaliaRide protects your personal data and ensures your privacy when booking our taxi services in Italy.",
  alternates: {
    canonical: "/privacy-policy",
  }
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHero
        titleTop="Legal"
        titleBottom="Privacy Policy"
        description="We are committed to protecting your personal data and ensuring your privacy while using our taxi services."
        backgroundImage="/images/hero.png"
        breadcrumbs={[{ name: "Privacy Policy", item: "/privacy-policy" }]}
      />
      <div className="container mx-auto py-24 px-6 prose max-w-4xl">
        <h2 className="text-3xl font-bold text-navy mb-6">Data Protection</h2>
        <p className="text-gray-600 leading-relaxed">
          This privacy policy explains how we collect, use, and protect your information when you book a transfer or use our website. Your security is our top priority.
        </p>
        {/* Add more privacy content here if needed */}
      </div>
      <Footer />
    </main>
  );
}

