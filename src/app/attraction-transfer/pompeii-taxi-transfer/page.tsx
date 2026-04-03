import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import FAQSection from '@/components/FAQSection';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Pompeii Ruins Private Taxi | Naples & Sorrento Transfers",
  description: "Book a professional private transfer to the Pompeii Archaeological Park. Comfortable, direct taxi service from Naples, Sorrento, or Rome with local experts.",
  alternates: {
    canonical: "/attraction-transfer/pompeii-taxi-transfer",
  }
};

export default function PompeiiPage() {
  const pompeiiFaqs = [
    {
      q: "Where will the driver drop me off at Pompeii?",
      a: "Our drivers can drop you off at any of the three main entrances: Porta Marina, Piazza Esedra, or Piazza Anfiteatro. We typically recommend Porta Marina for the easiest access to the main site."
    },
    {
      q: "How long is the transfer from Naples to Pompeii?",
      a: "The drive from Naples city center or the airport typically takes about 30-40 minutes depending on traffic on the A3 highway."
    },
    {
       q: "Can we visit Mount Vesuvius on the same day as Pompeii?",
       a: "Yes! We specialize in 'combination' tours. We can drop you at Pompeii in the morning, wait for you, and then take you up to the Vesuvius crater in the afternoon."
    }
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      
      <PageHero
        titleTop="Private Taxi Transfer to the"
        titleBottom="Ancient Ruins of Pompeii"
        description="Step back in time without the hassle. Arrive at the gates of the world's most famous archaeological site in comfort and style."
        backgroundImage="https://images.unsplash.com/photo-1543429776-278263256e29?q=80&w=2070&auto=format&fit=crop"
        breadcrumbs={[
          { name: "Attraction Transfers", item: "/attraction-transfer" },
            { name: "Pompeii", item: "/attraction-transfer/pompeii-taxi-transfer" }
        ]}
      />

      <div className="container mx-auto py-24 px-6 max-w-4xl">
        <h2 className="text-4xl font-bold text-navy mb-8">Uncover History at Your Own Pace</h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-12">
            The Pompeii Archaeological Park is vast, and arriving refreshed is essential for exploring the site. Our private taxi service provides a seamless link from Naples, Sorrento, or the Amalfi Coast, ensuring you avoid the crowded Circumvesuviana train and arrive directly at the entrance gates.
        </p>

        <div className="p-10 bg-gray-50 border border-gold/10 rounded-[2.5rem] shadow-sm mb-16">
          <h3 className="text-2xl font-bold text-navy mb-6 text-center">Pompeii Service Excellence</h3>
          <ul className="grid md:grid-cols-2 gap-6">
            <li className="flex items-center gap-3 font-medium text-navy">
               <span className="text-gold text-xl">✓</span> Direct entrance drop-off
            </li>
            <li className="flex items-center gap-3 font-medium text-navy">
               <span className="text-gold text-xl">✓</span> Expert local drivers
            </li>
            <li className="flex items-center gap-3 font-medium text-navy">
               <span className="text-gold text-xl">✓</span> Transparent fixed pricing
            </li>
            <li className="flex items-center gap-3 font-medium text-navy">
               <span className="text-gold text-xl">✓</span> Modern Mercedes-Benz fleet
            </li>
          </ul>
        </div>

        <p className="text-lg text-gray-600 leading-relaxed mb-12">
            Our drivers are familiar with the various entry points and can advise on the best times to visit to avoid the largest tour groups. If you're staying in Naples or Sorrento, we offer a dedicated service that picks you up from your accommodation and returns you whenever you're ready.
        </p>
      </div>

      <FAQSection faqs={pompeiiFaqs} title="Pompeii Travel FAQ" />

      <CTA />
      
      <Footer />
    </main>
  );
}
