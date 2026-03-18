import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Private Transfer to Rimini Beach Taxi | Italian Taxi Service",
  description: "Book a professional private transfer to Rimini Beach Taxi. Avoid the crowds of public transport and enjoy a comfortable ride directly to one of Italy's most iconic locations.",
  alternates: {
    canonical: "/beach-transfer/rimini-beach-taxi",
  }
};

export default function Page() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container mx-auto py-24 px-6 md:px-32">
        <h1 className="text-4xl md:text-6xl font-bold text-navy mb-12">Private Transfer to Rimini Beach Taxi</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-navy mb-6">Visit Rimini Beach Taxi with Ease</h2>
          <p className="text-gray-600 text-lg leading-relaxed">Book a professional private transfer to Rimini Beach Taxi. Avoid the crowds of public transport and enjoy a comfortable ride directly to one of Italy's most iconic locations.</p>
        </section>

        <section className="mb-12 p-8 bg-gray-50 border border-gold/10 rounded-[2.5rem] shadow-sm">
          <h2 className="text-2xl font-semibold text-navy mb-6">Transfer Services to Rimini Beach Taxi</h2>
          <ul className="grid md:grid-cols-2 gap-4 list-none">
            <li className="flex items-center gap-3 font-medium text-navy">
               <span className="text-gold">✅</span> Door-to-door service
            </li>
            <li className="flex items-center gap-3 font-medium text-navy">
               <span className="text-gold">✅</span> Professional English-speaking drivers
            </li>
            <li className="flex items-center gap-3 font-medium text-navy">
               <span className="text-gold">✅</span> Fixed rates, no hidden fees
            </li>
            <li className="flex items-center gap-3 font-medium text-navy">
               <span className="text-gold">✅</span> Comfortable, air-conditioned vehicles
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-navy mb-6">Plan Your Trip</h2>
          <p className="text-gray-600 text-lg leading-relaxed">Our drivers are locals who know the best routes and can provide tips for your visit to Rimini Beach Taxi. Whether you're traveling solo or in a group, we have the right vehicle for your needs.</p>
        </section>

        <section className="mt-16 pt-16 border-t border-gray-100">
          <h2 className="text-2xl font-semibold text-navy mb-6">Nearby City Services</h2>
          <p className="text-gray-600">Explore more in the area: <Link href="/city/" className="text-gold font-bold hover:underline">Taxi Services in Italy</Link>.</p>
        </section>
      </div>
      <Footer />
    </main>
  );
}
