import Link from 'next/link';

/**
 * Static server component — renders SEO-rich editorial content for the homepage.
 * No "use client" or language context so this is always present in the initial HTML.
 */
export default function HomeSEOContent() {
  return (
    <section className="py-24 bg-white font-inter" aria-label="About Italy Taxi Service">
      <div className="container mx-auto px-6 max-w-5xl">

        {/* ── Introduction ────────────────────────────────────────────────────── */}
        <div className="text-center mb-16">
          <p className="text-[#F4C430] text-sm font-bold uppercase tracking-[0.4em] mb-4">Trusted Across Italy</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0F1C2E] leading-tight mb-6">
            Italy&apos;s Premier Private Taxi &amp; Chauffeur Service
          </h2>
          <div className="w-20 h-1 bg-[#F4C430] mx-auto mb-8" />
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6 mb-16">
          <p>
            When it comes to travelling in Italy — whether you&apos;re arriving at a major international airport,
            exploring the historic streets of Rome, conducting business in Milan, or discovering the art cities
            of Tuscany — <strong>Italy Taxi Service</strong> provides the most reliable, comfortable, and
            professionally operated private transportation available. As a dedicated <strong>taxi service Italy</strong>{' '}
            provider, we combine local driving expertise with a modern booking platform that puts your
            journey under control from the very first click.
          </p>
          <p>
            Unlike standard metered taxis that queue outside arrivals terminals or unregulated rideshare apps
            that surge-price during peak hours, our <strong>private driver Italy</strong> network operates on
            fixed, all-inclusive quotes confirmed before you travel. No surprises. No hidden extras. The
            price you are quoted is the price you pay, including motorway tolls and luggage.
          </p>
        </div>

        {/* ── Services ────────────────────────────────────────────────────────── */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F1C2E] mb-6">
            Our Private Transfer Services Across Italy
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            We offer a comprehensive suite of ground transportation services designed to cover every travel need
            across the Italian peninsula. From quick city hops to multi-day touring itineraries, our fleet of
            premium vehicles and NCC-licensed professional drivers are at your service 24 hours a day, 365 days
            a year.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-gray-100 rounded-2xl p-8 hover:border-[#F4C430]/50 transition-colors">
              <h3 className="text-xl font-bold text-[#0F1C2E] mb-3">
                <Link href="/services/airport-transfers" className="hover:text-[#F4C430] transition-colors">
                  Airport Transfer Italy
                </Link>
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Fixed-price private <Link href="/services/airport-transfers" className="text-[#F4C430] font-semibold hover:underline">airport transfer Italy</Link> from all major Italian airports including
                Rome Fiumicino (FCO), Milan Malpensa (MXP), Venice Marco Polo (VCE), Florence (FLR), and Naples (NAP).
                Flight tracking included, 60 minutes free waiting time, meet-and-greet inside arrivals hall.
              </p>
            </div>

            <div className="border border-gray-100 rounded-2xl p-8 hover:border-[#F4C430]/50 transition-colors">
              <h3 className="text-xl font-bold text-[#0F1C2E] mb-3">
                <Link href="/services/city-to-city" className="hover:text-[#F4C430] transition-colors">
                  City-to-City Private Transfer
                </Link>
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Comfortable point-to-point transfers between Italy&apos;s major cities. Travel from Rome to
                Florence, Milan to Lake Como, Naples to the Amalfi Coast, or any other combination across the
                country. Door-to-door service with no changes, no connections, no hassle.
              </p>
            </div>

            <div className="border border-gray-100 rounded-2xl p-8 hover:border-[#F4C430]/50 transition-colors">
              <h3 className="text-xl font-bold text-[#0F1C2E] mb-3">
                <Link href="/services/business-taxi" className="hover:text-[#F4C430] transition-colors">
                  Chauffeur Service Italy
                </Link>
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Premium <strong>chauffeur service Italy</strong> for business executives, corporate delegations,
                and high-net-worth travellers. Mercedes-Benz S-Class, E-Class, and V-Class vehicles with suited
                professional drivers. Discretion, punctuality and first-class comfort.
              </p>
            </div>

            <div className="border border-gray-100 rounded-2xl p-8 hover:border-[#F4C430]/50 transition-colors">
              <h3 className="text-xl font-bold text-[#0F1C2E] mb-3">
                <Link href="/services/private-tours" className="hover:text-[#F4C430] transition-colors">
                  Private Day Tours
                </Link>
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Bespoke private day tours throughout Italy with an experienced local driver-guide. Explore the
                Amalfi Coast, the Tuscan countryside, the Vatican and Colosseum, Lake Como, and Cinque Terre
                at your own pace without the constraints of group tours or public transport schedules.
              </p>
            </div>

            <div className="border border-gray-100 rounded-2xl p-8 hover:border-[#F4C430]/50 transition-colors">
              <h3 className="text-xl font-bold text-[#0F1C2E] mb-3">
                <Link href="/services/cruise-port-transfers" className="hover:text-[#F4C430] transition-colors">
                  Cruise Port Transfers
                </Link>
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Seamless private transfers between cruise terminals and Italian city centres. We serve Civitavecchia
                (Rome&apos;s cruise port), the Port of Naples, Livorno (Florence), Venice cruise terminal, and
                all other major Italian port facilities.
              </p>
            </div>

            <div className="border border-gray-100 rounded-2xl p-8 hover:border-[#F4C430]/50 transition-colors">
              <h3 className="text-xl font-bold text-[#0F1C2E] mb-3">
                <Link href="/services/hourly-taxi" className="hover:text-[#F4C430] transition-colors">
                  Hourly Hire &amp; Disposal
                </Link>
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Book your driver by the hour for complete flexibility. Ideal for business meetings across multiple
                locations, shopping trips, sightseeing at your own pace, or event transportation where you need a
                vehicle and driver standing by throughout the day.
              </p>
            </div>
          </div>
        </div>

        {/* ── Cities Served ────────────────────────────────────────────────────── */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F1C2E] mb-6">
            Private Taxi Services in Rome, Milan &amp; Florence
          </h2>
          <p className="text-gray-700 leading-relaxed mb-10">
            Our service is available throughout Italy, with particular depth of coverage in the three most
            visited cities. Here is what our <strong>private driver Italy</strong> service looks like on the ground
            in each major destination:
          </p>

          <div className="space-y-10">
            <div>
              <h3 className="text-2xl font-bold text-[#0F1C2E] mb-3">
                <Link href="/rome-airport-transfer" className="hover:text-[#F4C430] transition-colors">
                  Private Taxi Service in Rome
                </Link>
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Rome is Italy&apos;s most visited destination and one of the most challenging cities in the world
                for independent ground transport. Rome&apos;s ZTL restricts traffic across most of the
                historic centre; we check access for your exact address when you book, and where a car
                can&apos;t enter, the driver stops at the nearest legal point and helps with your luggage. We serve both Leonardo da Vinci International Airport (FCO,
                32 km from the city) and Rome Ciampino Airport (CIA, 15 km), with transfers into the historic
                centre, Trastevere, Parioli, Testaccio, and all other districts. See our{' '}
                <Link href="/rome-airport-transfer" className="text-[#F4C430] font-semibold hover:underline">
                  Rome airport transfer service
                </Link>{' '}
                for Fiumicino and Ciampino.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#0F1C2E] mb-3">
                <Link href="/milan-chauffeur-service" className="hover:text-[#F4C430] transition-colors">
                  Chauffeur Service in Milan
                </Link>
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Milan is Italy&apos;s financial and fashion capital, and its three major airports —
                Malpensa (MXP), Linate (LIN), and Bergamo Orio al Serio (BGY) — together handle more than
                40 million passengers per year. Our{' '}
                <Link href="/milan-chauffeur-service" className="text-[#F4C430] font-semibold hover:underline">
                  Milan chauffeur service
                </Link>{' '}
                is the preferred choice of business travellers arriving for trade shows at Fiera Milano,
                executives visiting the financial district in Porta Nuova, and leisure travellers heading
                for the Lakes District, Lake Como, or Lake Maggiore. All Milan airport transfers include
                motorway toll costs and are available in economy sedan, business class, and group minivan formats.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#0F1C2E] mb-3">
                <Link href="/florence-private-taxi" className="hover:text-[#F4C430] transition-colors">
                  Private Taxi in Florence
                </Link>
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Florence, the cradle of the Renaissance, presents its own unique transport challenges. The
                historic city centre is almost entirely pedestrianised and ZTL-restricted. Many hotels inside the old city
                can&apos;t be reached by car at all, so we plan the drop-off at the nearest point a car can
                legally stop. Our{' '}
                <Link href="/florence-private-taxi" className="text-[#F4C430] font-semibold hover:underline">
                  Florence private taxi service
                </Link>{' '}
                also covers day excursions to Siena, Pisa, Chianti wine country, and the wider Tuscan countryside,
                offering a flexible and deeply local experience of one of the most beautiful regions in Europe.
              </p>
            </div>
          </div>
        </div>

        {/* ── Why Choose Us ────────────────────────────────────────────────────── */}
        <div className="bg-[#0F1C2E] rounded-3xl p-10 md:p-14 mb-16 text-white">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-center">
            Why Choose Italy Taxi Service?
          </h2>
          <p className="text-gray-300 text-center mb-10 max-w-2xl mx-auto">
            Travellers choose us for airport transfers, business travel, and private
            tours across Italy. Here is why our <strong className="text-[#F4C430]">taxi service Italy</strong> stands
            apart from the competition.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "NCC-Licensed Professional Drivers", body: "All our drivers hold the Italian NCC (Noleggio Con Conducente) professional licence, the licence for professional private hire with a driver in Italy. You are in safe, qualified, and fully insured hands." },
              { title: "Fixed Prices — No Surprises", body: "Every quote is fixed and all-inclusive. The price confirmed at booking is the price you pay on arrival — regardless of traffic or tolls. Any extended waiting or night and holiday surcharge is shown in your quote before you book. Metered taxis and ride apps work differently." },
              { title: "24/7 Availability", body: "Our dispatch team and driver network operate around the clock, every day of the year. Whether your flight lands at 3am on Christmas Day or you need a last-minute transfer at midnight, we are available." },
              { title: "Flight Tracking Included", body: "Every airport pickup automatically includes real-time flight monitoring. If your flight is delayed or lands early, your driver adjusts without any action on your part. If your flight changes, we contact you to adjust the pickup." },
              { title: "Premium Fleet", body: "Our vehicles are exclusively late-model, well-maintained, and cleaned between every journey. The fleet includes Mercedes-Benz E-Class and S-Class sedans for individual and couple travel and V-Class minivans for families and small groups; larger groups use more than one vehicle." },
              { title: "English-Speaking Drivers", body: "All drivers are vetted for professional English language communication. For international travellers, this removes the language barrier entirely — your driver can answer questions about local customs, recommend restaurants, advise on routes, and assist throughout your journey." },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-[#F4C430] mt-2.5 shrink-0" />
                <div>
                  <h3 className="font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA ──────────────────────────────────────────────────────────────── */}


      </div>
    </section>
  );
}
