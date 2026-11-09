import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import ServiceIntro, { ServiceFeatures } from '@/components/ServiceDetails';
import HowItWorks from '@/components/HowItWorks';
import FAQSection from '@/components/FAQSection';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Metadata } from 'next';

const SITE = 'https://www.italytaxiservice.com';

export const metadata: Metadata = {
  title: "Taxi for Vatican Museums Visits",
  description: "Book a professional private taxi to the Vatican Museums and St. Peter's Basilica. Direct, air-conditioned transfers from your Rome hotel or Fiumicino Airport.",
  alternates: {
    canonical: "/attraction-transfer/vatican-museums-taxi-transfer",
  }
};

export default function VaticanMuseumsPage() {
  const features = [
    "Direct drop-off at the Museum entrance",
    "Professional English-speaking drivers",
    "Avoid crowded buses and metro lines",
    "Fixed prices with no city taxi surcharges",
    "Meet & Greet available from Rome airports",
    "Spacious vans for families and groups"
  ];

  const vaticanFaqs = [
    {
      q: "Where is the best drop-off point for the Vatican Museums?",
      a: "The main entrance is on Viale Vaticano. Our drivers know exactly where to drop you to minimize walking time to the security line."
    },
    {
      q: "Can we book a transfer from Fiumicino Airport directly to the Vatican?",
      a: "Yes, we provide direct airport transfers. It usually takes about 45-60 minutes depending on traffic."
    },
    {
      q: "Do you offer return transfers after our visit?",
      a: "Absolutely. You can schedule a pickup time or contact us when you are ready, and we will send a driver to meet you at a designated spot."
    },
    {
      q: "Are the vehicles air-conditioned?",
      a: "Yes, all our vehicles are modern Mercedes-Benz models with full climate control for your comfort during the Roman summer."
    },
    {
      q: "Are the Vatican Museums and St Peter's Basilica the same entrance?",
      a: "No, and this is the most common mix-up. The Museums are entered from Viale Vaticano on the northern side of the Vatican walls. St Peter's Basilica is entered from St Peter's Square on the eastern side, a walk of roughly fifteen minutes around the outside of the walls. Tell us which one you are starting at so the driver takes you to the right side."
    },
    {
      q: "How much time should I allow before a timed-entry ticket?",
      a: "Allow a comfortable buffer beyond the drive itself. Vatican tickets are issued for a specific entry slot, and there is a security queue after the drop-off point. Rome traffic around the Vatican walls is also unpredictable, particularly on Wednesday mornings and on days when the Basilica has a service."
    },
    {
      q: "What is the dress code for the Vatican Museums and St Peter's?",
      a: "Shoulders and knees must be covered for both the Museums and the Basilica, for all visitors. Sleeveless tops, shorts above the knee and short skirts are refused at security, so it is worth planning what you wear on the day rather than being turned away at the entrance."
    },
    {
      q: "Can we visit the Colosseum on the same trip?",
      a: "Yes. The Colosseum sits on the other side of the historic centre, and many visitors pair the two across one day. Tell us both destinations and your ticket times when you enquire, and the journey is quoted as one itinerary rather than two separate transfers."
    }
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: vaticanFaqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const attractionSchema = {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    name: 'Vatican Museums',
    description: "The Vatican Museums house the papal art collections and the Sistine Chapel, entered from Viale Vaticano in Vatican City.",
    address: { '@type': 'PostalAddress', streetAddress: 'Viale Vaticano', addressLocality: 'Vatican City', addressCountry: 'VA' },
    url: `${SITE}/attraction-transfer/vatican-museums-taxi-transfer`,
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
      { '@type': 'ListItem', position: 2, name: 'Attraction Transfers', item: `${SITE}/attraction-transfer` },
      { '@type': 'ListItem', position: 3, name: 'Vatican Museums', item: `${SITE}/attraction-transfer/vatican-museums-taxi-transfer` },
    ],
  };

  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(attractionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />
      <PageHero
        titleTop="Private Taxi Transfers to the"
        titleBottom="World-Famous Vatican Museums"
        description="Start your art pilgrimage in comfort. Professional door-to-door service to the treasures of the Vatican City."
        backgroundImage="/images/hero.png"
        buttonText="Book Vatican Transfer"
        breadcrumbs={[
          { name: "Attraction Transfers", item: "/attraction-transfer" },
            { name: "Vatican Museums", item: "/attraction-transfer/vatican-museums-taxi-transfer" }
        ]}
      />

      <ServiceIntro
        title="Arrive Ready for the Sistine Chapel"
        content="The Vatican Museums host some of the most important artistic masterpieces in the world. Navigating Rome's public transport to get there can be exhausting, especially during peak hours. Our private taxi service ensures you arrive at the museum entrance fresh and ready for your tour. Whether you have early access tickets or a mid-day booking, we focus on punctual, professional service."
      />

      <ServiceFeatures
        title="Vatican Transfer Excellence"
        features={features}
        bg="bg-[#F8F9FA]"
      />

      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy mb-8 text-center">Seamless Travel in the Eternal City</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Rome's traffic can be unpredictable. Our drivers monitor local conditions to choose the most efficient routes, avoiding the bottlenecks common around the Vatican City walls. 
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              For families traveling with children or elderly members, our door-to-door service is the ideal solution to avoid the long walks and stairs associated with the Rome Metro. We offer vehicles of all sizes to accommodate your entire party and all your belongings.
            </p>
          </div>
        </div>
      </div>

      {/* ── Practical detail added for travellers planning the visit ───────── */}
      <div className="py-20 bg-[#F8F9FA]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-14">

            <section>
              <h2 className="text-3xl font-bold text-navy mb-5">The Museums and St Peter&rsquo;s Are Two Different Entrances</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                This is the single most common mix-up, and it costs people a long walk on arrival. The Vatican Museums
                are entered from Viale Vaticano, on the northern side of the Vatican walls. St Peter&rsquo;s Basilica is
                entered from St Peter&rsquo;s Square, on the eastern side. The two are perhaps fifteen minutes apart on
                foot, around the outside of the walls.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                If your ticket is for the Museums and the Sistine Chapel, Viale Vaticano is where you need to be. If you
                are going to the Basilica first, the Square is the drop-off. Tell us which when you book and the driver
                approaches the correct side &mdash; the walls cannot be cut through, so arriving at the wrong one means
                walking all the way round.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-navy mb-5">Where the Driver Can Stop</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Viale Vaticano is a working road along the museum wall, and the area immediately around the entrance is
                busy with coaches, tour groups and the security queue. Your driver brings you to the nearest point
                vehicles are permitted, which is a short walk from the entrance itself rather than the door.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Central Rome also has restricted-traffic zones, so if your hotel is inside one the pickup point may be a
                short walk from the lobby. Giving us the hotel name rather than just &ldquo;Rome&rdquo; lets the driver plan the
                nearest legitimate stop in advance.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-navy mb-5">Getting There from the Airports or Central Rome</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                From <Link href="/airport/rome-fiumicino" className="text-[#F4C430] font-semibold hover:underline">Fiumicino</Link> the
                transfer to the Vatican usually takes about 45 to 60 minutes depending on traffic.
                From <Link href="/airport/rome-ciampino" className="text-[#F4C430] font-semibold hover:underline">Ciampino</Link>, Rome&rsquo;s
                smaller low-cost airport 15 km south-east of the centre, the run is shorter but can be congested on the
                approach into the city.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                From a central Rome address the journey is short in distance &mdash; roughly 5 to 15 km depending on the
                neighbourhood, typically 15 to 30 minutes. Traffic around the Vatican walls is the variable, not the
                distance. See our <Link href="/city/rome" className="text-[#F4C430] font-semibold hover:underline">Rome taxi service</Link> for
                transfers across the rest of the city.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-navy mb-5">Timed-Entry Tickets and How Much Buffer to Allow</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Vatican Museums tickets are issued for a specific entry slot, and there is a security check after you
                reach the entrance. The sensible approach is to treat the transfer time as the start of your planning,
                not the whole of it: add the queue, and add contingency for Rome traffic.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Two days are worth knowing about. Wednesday mornings are busier around the Square when a papal audience
                is held, and the Basilica closes to visitors during services. If your slot falls on a Wednesday, build in
                more time than you otherwise would.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-navy mb-5">Dress Code and Security</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Both the Museums and the Basilica require shoulders and knees to be covered, for every visitor. Sleeveless
                tops, shorts above the knee and short skirts are refused at the security check, and there is no
                cloakroom solution for it &mdash; people are simply turned away. It is worth deciding what to wear before
                you set off, particularly in July and August when the temptation is obvious. Large bags must also be
                checked into the cloakroom rather than carried round.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-navy mb-5">Combining the Vatican with the Rest of Rome</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Most visitors pair the Vatican with at least one other landmark. The
                {' '}<Link href="/attraction-transfer/colosseum-taxi-transfer" className="text-[#F4C430] font-semibold hover:underline">Colosseum</Link> sits
                on the far side of the historic centre, and the
                {' '}<Link href="/attraction-transfer/trevi-fountain-taxi-transfer" className="text-[#F4C430] font-semibold hover:underline">Trevi Fountain</Link> and
                {' '}<Link href="/attraction-transfer/pantheon-taxi-transfer" className="text-[#F4C430] font-semibold hover:underline">Pantheon</Link> are
                between the two, within walking distance of each other.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                If you are planning more than one stop, send the whole day in a single enquiry with your ticket times
                rather than booking each leg separately &mdash; it is quoted as one itinerary and the timings stay
                consistent. A guided option is available through our
                {' '}<Link href="/tour/vatican" className="text-[#F4C430] font-semibold hover:underline">Vatican tour</Link>, and
                our guide to
                {' '}<Link href="/blog/first-time-visiting-vatican" className="text-[#F4C430] font-semibold hover:underline">visiting the Vatican for the first time</Link> covers
                what to expect inside.
              </p>
            </section>

          </div>
        </div>
      </div>

      <HowItWorks />

      <FAQSection 
        faqs={vaticanFaqs}
        title="Vatican Service FAQs"
        badge="Museum Access"
      />

      <CTA />
      <Footer />
    </main>
  );
}
