import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Italy Travel Blog | Italian Taxi Service",
  description: "Travel tips, destination guides, and the latest news about taxi transfers in Italy. Plan your perfect Italian journey with our expert blog.",
  alternates: {
    canonical: "https://www.italytaxiservice.com/blog",
  }
};

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHero
        titleTop="Italian Travel"
        titleBottom="Insights & Blog"
        description="Tips, guides, and stories to help you navigate Italy in comfort and style."
        backgroundImage="/images/hero.png"
      />
      <div className="container mx-auto py-24 px-6 text-center">
        <h2 className="text-3xl font-bold text-navy mb-8">Coming Soon</h2>
        <p className="text-gray-600 text-lg">We are currently preparing expert travel guides and tips for your next Italian adventure. Check back soon!</p>
      </div>
      <Footer />
    </main>
  );
}
