import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import ServiceSchema from '@/components/ServiceSchema';
import BookingForm from '@/components/BookingForm';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { MapPin, ChevronRight, MessageCircle, CheckCircle } from 'lucide-react';
import { Metadata } from 'next';

const HERO_IMAGE = 'https://www.italia.it/content/dam/tdh/en/destinations/puglia/otranto/media/Otranto-Puglia-shutterstock_300028358-1024x768-6c996d673b7efdcb6b7e67045d179c7a.jpg';
const CANONICAL = '/beach-transfer/otranto-beach-taxi';

export const metadata: Metadata = {
  title: "Otranto Beach Private Taxi Transfers | Italy Taxi Service",
  description: "Private taxi transfers to Otranto and the Salento coast from Brindisi Airport, Bari Airport or Otranto itself — direct to your hotel, resort, lido or agreed address.",
  alternates: { canonical: CANONICAL },
};

const otrantoFaqs = [
  {
    q: 'Can I book a private transfer from Brindisi Airport to Otranto?',
    a: 'Yes. Provide your flight details, arrival date and time, number of passengers and any luggage when requesting a quote, along with your exact destination in Otranto or along the coast.',
  },
  {
    q: 'Can I travel from Bari Airport to Otranto?',
    a: 'Yes, this can be requested too. Bari is considerably further from Otranto than Brindisi, so the price and journey time will reflect the longer distance — send your journey details for a quotation.',
  },
  {
    q: 'Can I be dropped directly at a beach?',
    a: 'This depends on vehicle access and local restrictions — not every beach or cove allows a vehicle right up to the sand. Provide the exact beach, lido or resort name when requesting your quote, and we\'ll confirm the closest practical drop-off point.',
  },
  {
    q: 'Can I book a transfer to Baia dei Turchi?',
    a: 'Yes, Baia dei Turchi can be requested as a destination. As with any beach location, confirm the exact access point when you request your quotation.',
  },
  {
    q: 'Can I travel to Alimini?',
    a: 'Yes — mention Alimini and your specific accommodation, resort or beach area when requesting the journey so the correct drop-off can be planned.',
  },
  {
    q: 'Can I bring beach equipment?',
    a: 'Yes. Mention suitcases, beach bags, coolers, folding chairs, strollers or any other bulky items when requesting your quote, so an appropriately sized vehicle can be arranged.',
  },
  {
    q: 'Can I book a return transfer?',
    a: 'Yes — return journeys, such as from a beach or resort back to your accommodation or to the airport, can be requested along with your preferred pickup time.',
  },
  {
    q: 'Can I visit multiple beaches in one day?',
    a: 'A multi-stop itinerary may be possible depending on the route and any waiting time involved. This is different from a standard point-to-point transfer, so let us know your planned stops in advance and we\'ll confirm what can be arranged.',
  },
  {
    q: 'Do you provide a fixed price?',
    a: 'Your quotation is based on the exact pickup and destination, date, passenger count, vehicle requirements and any additional stops or waiting time — you\'ll receive the price before you confirm your booking.',
  },
];

export default function OtrantoBeachPage() {
  return (
    <main className="min-h-screen font-inter">
      <ServiceSchema
        name="Otranto Beach Private Taxi Transfers"
        description="Private taxi transfers to Otranto and the Salento coast from Brindisi Airport, Bari Airport or Otranto itself, with drop-off at your hotel, resort, lido or agreed address."
        url={`https://www.italytaxiservice.com${CANONICAL}`}
        image={HERO_IMAGE}
      />
      <Navbar />

      <PageHero
        titleTop="Private Beach Transfers"
        titleBottom="in Puglia"
        description="Arrange a private transfer to Otranto and the surrounding Salento beaches from Brindisi Airport, Bari Airport, Otranto itself, or another agreed pickup location — direct to your hotel, beach resort, lido or an accessible coastal address."
        backgroundImage={HERO_IMAGE}
        buttonText="Request an Otranto Transfer"
      />

      {/* Practical service overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-gray-100 border border-gray-100 rounded-2xl overflow-hidden">
            {[
              { label: 'Pickup', value: 'Brindisi Airport, Bari Airport, Otranto, hotels and agreed locations' },
              { label: 'Destination', value: 'Otranto beaches, resorts, lidos and accessible coastal locations' },
              { label: 'Service', value: 'Private vehicle, door-to-door' },
              { label: 'Booking', value: 'Quotation based on your journey details' },
              { label: 'Return', value: 'Return transfers can be requested' },
            ].map((item, i) => (
              <div key={i} className="p-6 text-center sm:text-left">
                <p className="text-gold text-xs font-bold uppercase tracking-widest mb-2">{item.label}</p>
                <p className="text-navy font-medium text-sm leading-snug">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* A Simple Way to Reach Otranto's Coast */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-8">A Simple Way to Reach Otranto&apos;s Coast</h2>
          <ul className="space-y-4">
            {[
              'Pickup from an agreed location — an airport, your accommodation, or another address',
              'Direct travel to your destination, without changing vehicles',
              'No need to arrange local bus connections along the coast',
              'Suitable for couples, families and small groups',
              'Space for luggage and beach equipment can be discussed when booking',
              'Return journeys can be requested',
              'Exact pricing is provided according to your specific journey',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span className="text-gray-700 font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Airport sections — Brindisi / Bari, side by side */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-bold text-navy mb-4">From Brindisi Airport to Otranto</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Brindisi Airport (BDS) is the nearer of the two airports to Otranto, around 80&nbsp;km away — typically a drive of about 1 hour to 1 hour 15 minutes, depending on traffic and your exact destination.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                To request a transfer, let us know:
              </p>
              <ul className="space-y-2 text-gray-700 mb-4">
                {['Flight details, if arriving by air', 'Arrival date and time', 'Number of passengers', 'Luggage', 'Your final destination in Otranto or along the coast'].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-gold mt-1 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-navy mb-4">From Bari Airport to Otranto</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Bari Airport (BRI) is considerably further from Otranto — around 195&nbsp;km, typically a drive of roughly 2 hours 30 minutes. A private transfer from Bari to Otranto and the wider Salento area can still be requested; the price will reflect the longer distance.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The same details apply as for Brindisi: your flight information, arrival time, passenger and luggage count, and your exact Salento destination. See our{' '}
                <Link href="/airport/bari" className="text-gold font-semibold hover:underline">Bari Airport guide</Link>{' '}
                for more on the airport itself.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Beach destinations */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl font-bold text-navy mb-6">Beaches and Coastal Areas Around Otranto</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Requests commonly include Otranto&apos;s own coastline, <strong>Baia dei Turchi</strong>, <strong>Alimini</strong>, <strong>Torre dell&apos;Orso</strong> and coves such as Porto Badisco, along with other agreed coastal destinations across Salento.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Pickup and drop-off points depend on local road access and vehicle restrictions — not every beach or cove allows a vehicle down to the sand. When requesting a quotation, provide the exact beach, resort, lido or accommodation name so we can confirm the closest practical drop-off point.
          </p>

          <h3 className="text-xl font-bold text-navy mb-4 mt-10">Your Exact Destination Matters</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            The service isn&apos;t limited to a single stretch of coastline. You can request a transfer to:
          </p>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2 text-gray-700">
            {['Hotels', 'Holiday apartments', 'Beach resorts', 'Lidos', 'Coastal towns', 'Restaurants', 'Accessible beach-area drop-off points', 'Another agreed destination'].map((item, i) => (
              <div key={i} className="flex items-start gap-2 py-1">
                <MapPin className="w-4 h-4 text-gold mt-1 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Luggage / equipment */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl font-bold text-navy mb-6">Traveling With Beach Equipment?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Mention any additional luggage or beach equipment when requesting your quote — for example:
          </p>
          <p className="text-gray-700 font-medium mb-4">
            Suitcases · beach bags · folding chairs or umbrellas · coolers · strollers · other bulky items
          </p>
          <p className="text-gray-600 leading-relaxed">
            Providing these details in advance helps us determine the appropriate vehicle for your group. Not every vehicle can accommodate every type of equipment, so it&apos;s worth flagging anything unusual before you book.
          </p>
        </div>
      </section>

      {/* Return / multi-stop */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl font-bold text-navy mb-4">Need a Return Transfer?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Return journeys can be requested alongside your outbound transfer — for example, Otranto to Brindisi Airport, a beach or resort back to your accommodation, or a beach to the airport. Provide your desired pickup time and exact location when booking.
          </p>

          <h3 className="text-xl font-bold text-navy mb-4 mt-10">Planning a Day Along the Salento Coast?</h3>
          <p className="text-gray-600 leading-relaxed">
            If you&apos;d like to visit more than one destination in a day — for example Otranto, a beach stop, a lunch stop, and another coastal location before returning to your hotel — this can be discussed as a private itinerary rather than a standard point-to-point transfer. Additional stops and waiting time are arranged in advance and will affect the quotation.
          </p>
        </div>
      </section>

      {/* Without a rental car */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl font-bold text-navy mb-6">Traveling Through Salento Without a Rental Car</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Public transport connections and parking availability across Salento can vary by destination and by season, particularly around the more popular beaches in July and August. A private transfer lets you arrange pickup and drop-off around your own itinerary, rather than a fixed timetable or a shared vehicle.
          </p>
          <p className="text-gray-600 leading-relaxed">
            This can suit couples, families or small groups heading to a specific resort or lido, as well as travellers who&apos;d rather not manage a rental car on unfamiliar coastal roads.
          </p>
        </div>
      </section>

      {/* How it works — bespoke, Otranto-specific steps */}
      <section className="py-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#F4C430 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-14 text-center">How Your Otranto Transfer Works</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { n: '1', h: "Tell us where you're going", p: 'Provide your pickup location, destination, date and time.' },
              { n: '2', h: 'Add passenger & luggage details', p: 'Tell us how many people are travelling and whether you have additional luggage or beach equipment.' },
              { n: '3', h: 'Receive your quotation', p: 'We review the requested journey and provide the applicable transfer option and price.' },
              { n: '4', h: 'Confirm your journey', p: 'Once you accept the quotation, follow the booking instructions provided.' },
            ].map((step) => (
              <div key={step.n} className="text-center sm:text-left">
                <span className="block text-5xl font-serif italic text-gold/40 mb-4">{step.n}</span>
                <h3 className="text-white font-bold text-lg mb-2">{step.h}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Request an Otranto Beach Transfer Quote</h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
              Send us your pickup location, destination, travel date, passenger count and luggage details. If you&apos;re heading to a specific beach, lido or resort, include its name or full address.
            </p>
          </div>
          <div className="bg-[#0F1C2E] p-8 md:p-10 rounded-[2rem] shadow-2xl">
            <BookingForm sourceName="Otranto Beach Transfer Page" />
            <div className="mt-8 flex flex-col items-center gap-4">
              <p className="text-gray-400 text-xs text-center">Need help? Contact us 24/7</p>
              <a
                href="https://wa.me/923148932631"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] text-white font-bold py-3 px-6 rounded-xl hover:bg-[#128C7E] transition-colors w-full max-w-xs justify-center"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Support
              </a>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={otrantoFaqs} title="Otranto Beach Transfer — FAQ" badge="Beach Travel" />

      {/* Related destinations — only existing pages, kept compact */}
      <section className="py-16 bg-[#F8F9FA] border-y border-gray-100">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-navy mb-6">Also Exploring Puglia?</h2>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-3">
            <Link href="/city/bari" className="flex items-center gap-1 text-gray-700 hover:text-gold transition-colors font-medium">
              <ChevronRight className="w-4 h-4 text-gold" /> Bari Taxi Service
            </Link>
            <Link href="/beach-transfer/polignano-a-mare-beach-taxi" className="flex items-center gap-1 text-gray-700 hover:text-gold transition-colors font-medium">
              <ChevronRight className="w-4 h-4 text-gold" /> Polignano a Mare Beach Transfers
            </Link>
          </div>
        </div>
      </section>

      {/* More ways to travel */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-2xl font-bold text-navy mb-8 text-center">More Ways to Travel with Italy Taxi Service</h2>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
            {[
              { href: '/services/airport-transfers', label: 'Airport Transfers' },
              { href: '/services/private-tours', label: 'Private Sightseeing Tours' },
              { href: '/services/hotel-transfers', label: 'Hotel Transfer Service' },
              { href: '/services/city-to-city', label: 'City-to-City Transfers' },
              { href: '/book-now', label: 'Book Your Transfer' },
            ].map((link, i) => (
              <Link key={i} href={link.href} className="flex items-center gap-2 text-gray-700 hover:text-gold transition-colors font-medium py-1.5">
                <ChevronRight className="w-4 h-4 text-gold shrink-0" /> {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
