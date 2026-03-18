import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import BookingForm from '@/components/BookingForm';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Book Your Private Taxi | Italian Taxi Service",
  description: "Secure your private taxi transfer in Italy with our easy-to-use booking system. Instant quotes and confirmation for airport and city transfers.",
  alternates: {
    canonical: "/book-now",
  }
};

export default function BookNowPage() {
  return (
    <main className="min-h-screen bg-[#0F1C2E]">
      <Navbar />
      <section className="pt-40 pb-24 relative overflow-hidden">
        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#F4C430 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Book Your <span className="text-[#F4C430]">Private Taxi</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Professional transfer services across Italy. Fill out the form below for an instant quote and booking.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <BookingForm />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

