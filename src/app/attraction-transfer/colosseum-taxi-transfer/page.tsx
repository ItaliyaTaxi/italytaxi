import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import FAQSection from '@/components/FAQSection';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Colosseum Rome | Private Taxi Transfer | ItaliaRide",
  description: "Book a professional private transfer to the Colosseum. Avoid the crowds and enjoy a comfortable ride directly to Rome's most iconic location.",
  alternates: {
    canonical: "/attraction-transfer/colosseum-taxi-transfer",
  }
};

export default function ColosseumPage() {
  const colosseumFaqs = [
    {
      q: "Where exactly will the taxi drop me off at the Colosseum?",
      a: "Our drivers have the permits to drop you off as close as possible to the secure entrance of the Colosseum, typically on Via di San Gregorio or Piazza del Colosseo depending on current traffic restrictions."
    },
    {
      q: "Can I book a return transfer from the Colosseum back to my hotel?",
      a: "Yes! You can pre-book a round-trip transfer or specify a pickup time. Your driver will meet you at a pre-arranged spot for a seamless journey back."
    },
    {
       q: "Is it better to take a taxi or the Metro to the Colosseum?",
       a: "While the Metro is available, a private taxi provides a door-to-door service without the need to navigate crowded stations or worry about pickpockets, which is especially beneficial for families or those with limited mobility."
    }
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      
      <PageHero
        titleTop="Private Taxi Transfer to the"
        titleBottom="Iconic Rome Colosseum"
        description="Avoid the heat and the crowds. Arrive at the gates of the Flavian Amphitheatre in comfort with our professional English-speaking chauffeurs."
        backgroundImage="https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1996&auto=format&fit=crop"
        breadcrumbs={[
          { name: "Attraction Transfers", item: "/attraction-transfer" },
            { name: "Colosseum", item: "/attraction-transfer/colosseum-taxi-transfer" }
        ]}
      />

      <div className="container mx-auto py-24 px-6 max-w-4xl">
        <h2 className="text-4xl font-bold text-navy mb-8">Visit Rome's Largest Amphitheatre with Ease</h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-12">
            The Colosseum is the most visited landmark in Italy, and navigating the surrounding areas can be overwhelming. Our private transfer service takes away the stress of travel, providing a direct, air-conditioned route from your hotel, the airport, or any other location in Rome.
        </p>

        <div className="p-10 bg-gray-50 border border-gold/10 rounded-[2.5rem] shadow-sm mb-16">
          <h3 className="text-2xl font-bold text-navy mb-6 text-center">Transfer Service Excellence</h3>
          <ul className="grid md:grid-cols-2 gap-6">
            <li className="flex items-center gap-3 font-medium text-navy">
               <span className="text-gold text-xl">✓</span> Door-to-door luxury service
            </li>
            <li className="flex items-center gap-3 font-medium text-navy">
               <span className="text-gold text-xl">✓</span> English-speaking drivers
            </li>
            <li className="flex items-center gap-3 font-medium text-navy">
               <span className="text-gold text-xl">✓</span> Transparent fixed rates
            </li>
            <li className="flex items-center gap-3 font-medium text-navy">
               <span className="text-gold text-xl">✓</span> Real-time traffic monitoring
            </li>
          </ul>
        </div>

        <p className="text-lg text-gray-600 leading-relaxed mb-12">
            Our drivers are experts in Rome's roads and ZTL (restricted traffic zones), ensuring you reach the landmark using the most efficient routes. Whether you're visiting for an early morning tour or a night visit, our 24/7 service is here to accommodate your schedule.
        </p>
      </div>

      <FAQSection faqs={colosseumFaqs} title="Colosseum Travel FAQ" />

      <CTA />
      
      <Footer />
    </main>
  );
}
