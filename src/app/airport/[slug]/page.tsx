import { airports } from '@/lib/page-data';
import BookingForm from '@/components/BookingForm';
import FAQSection from '@/components/FAQSection';
import { ShieldCheck, Clock, UserCheck, Plane, MousePointer2, MessageCircle, MapPin, AlertCircle, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import ServiceSchema from '@/components/ServiceSchema';
import Image from 'next/image';

// ── Airport-specific unique content ─────────────────────────────────────────
interface AirportRichData {
    terminalPickup: string;
    travelTimes: { destination: string; duration: string; note?: string }[];
    flightDelayPolicy: string;
}

const airportRichData: Record<string, AirportRichData> = {
    'rome-fiumicino': {
        terminalPickup:
            'At Rome Fiumicino (FCO), your driver will be waiting in the arrivals hall of your specific terminal — Terminal 1 (Schengen EU flights), Terminal 2 (domestic Alitalia/ITA), or Terminal 3 (all international non-EU flights). Look for your name sign held by the driver just after you exit the customs green/red channel and collect your luggage. Our drivers pre-register via the airport\'s official greeter system and hold a valid FCO airport pass. Do NOT exit through the taxi-hailing zone (immediately outside) — proceed to the designated meeting point displayed on your confirmation. If you cannot locate your driver after 10 minutes of exiting customs, call the driver directly using the number on your booking confirmation. We do not use the official FCO taxi rank (metered white taxis).',
        travelTimes: [
            { destination: 'Rome City Centre (Colosseum / Termini)', duration: '30–45 min', note: 'Via A91 motorway' },
            { destination: 'Vatican & Prati district', duration: '35–50 min', note: 'Direct via ring road' },
            { destination: 'Trastevere', duration: '40–55 min' },
            { destination: 'EUR business district', duration: '20–30 min', note: 'Closest major destination to FCO' },
            { destination: 'Civitavecchia Cruise Port', duration: '60–75 min', note: 'Via Aurelia coastal road' },
            { destination: 'Naples', duration: '2h 30min', note: 'Via A1 motorway' },
        ],
        flightDelayPolicy:
            'We include 60 minutes of complimentary waiting time from your actual landing time — not the scheduled arrival. We track your flight in real-time via FlightAware and FlightRadar24, so we know your exact landing time the moment the aircraft touches down. If your delay extends beyond 60 minutes (e.g. due to lost luggage or prolonged immigration queues), contact your driver directly via WhatsApp to update your expected exit time. Extended waiting beyond 60 minutes is charged at €10 per 30-minute block, billed only if agreed in advance. We never abandon a booking due to a flight delay — your driver stays until you arrive.',
    },
    'milan-malpensa': {
        terminalPickup:
            'Milan Malpensa Airport (MXP) has two terminals: Terminal 1 handles most airlines (Alitalia/ITA, major carriers) and Terminal 2 is used exclusively by EasyJet and Wizz Air. Confirm your terminal when booking — the terminals are 3km apart and not walkable. Your driver will meet you in the arrivals hall of your correct terminal, name sign displayed, immediately after you clear customs. Terminal 1: exit via Arrivals Gate 5 for the designated meet-and-greet area. Terminal 2: exit directly from the single arrivals gate — the meeting area is just outside. From MXP, the drive to Milan city centre takes approximately 50 minutes under normal conditions. If you are connecting to Lake Como (60–80 min) or Bergamo (55–70 min), confirm at booking so the driver is positioned correctly.',
        travelTimes: [
            { destination: 'Milan City Centre (Duomo)', duration: '50–65 min', note: 'Via A8-A9 motorway' },
            { destination: 'Milan Centrale Train Station', duration: '55–70 min' },
            { destination: 'Lake Como (Como city)', duration: '55–70 min', note: 'Scenic route available' },
            { destination: 'Bergamo City Centre', duration: '55–70 min', note: 'Via A36 Pedemontana' },
            { destination: 'Lugano, Switzerland', duration: '70–85 min', note: 'Cross-border transfer available' },
            { destination: 'Turin City Centre', duration: '1h 45min' },
        ],
        flightDelayPolicy:
            'For all Milan Malpensa arrivals, we monitor your flight via live tracking from the moment it departs its origin airport. The first 60 minutes of waiting after landing are complimentary and included in your booking price. For flights significantly delayed (over 2 hours), our team will proactively contact you via WhatsApp to confirm the updated itinerary. Extended waiting beyond 60 minutes is charged at €10 per 30-minute increment with your advance agreement. We never cancel a booking due to a delay — your driver remains available until you are ready. For pre-dawn arrivals (00:00–05:00), our drivers remain on standby at the airport to ensure minimal waiting on exit from customs.',
    },
    'venice': {
        terminalPickup:
            'Venice Marco Polo Airport (VCE) has a single terminal. Your driver meets you in the arrivals hall name-board area, located directly after the baggage carousel exit. Important: Venice\'s island is car-free — your private taxi will transfer you to Piazzale Roma (the road terminus on the Venice island edge) or to any hotel in Venice Mestre (the mainland). For island hotels, luggage porter services (facchini) meet at Piazzale Roma to assist with the final water taxi or vaporetto leg. If your hotel is in Mestre, we deliver directly to the hotel entrance. For Verona, Padova, Treviso, or other Veneto mainland destinations, our taxi provides a direct door-to-door service without any Venice island complications. Water taxi connections (€80–€110 direct to island hotels) can be arranged separately on request.',
        travelTimes: [
            { destination: 'Piazzale Roma (Venice island access)', duration: '20–30 min' },
            { destination: 'Venice Mestre (mainland hotels)', duration: '15–20 min' },
            { destination: 'Verona City Centre', duration: '1h 20min' },
            { destination: 'Padova (Padua) City Centre', duration: '45–55 min' },
            { destination: 'Treviso City Centre', duration: '25–35 min' },
            { destination: 'Cortina d\'Ampezzo (Dolomites)', duration: '2h 30min', note: 'Seasonal mountain access' },
        ],
        flightDelayPolicy:
            'We provide real-time flight tracking for all VCE arrivals. The first 60 minutes of waiting after your actual landing time are included free of charge. For VCE-specific considerations: water-high (acqua alta) events between November and April can affect Piazzale Roma accessibility — our team monitors flood alerts proactively and will communicate any impact to your transfer plan before you land. If significant flooding affects Piazzale Roma, we will coordinate an alternative drop-off and water taxi arrangement at no extra cost. For delayed flights, your driver updates their position in real-time. Extended waits beyond 60 minutes are charged at €10 per 30-min block with advance confirmation.',
    },
    'naples': {
        terminalPickup:
            'Naples Capodichino Airport (NAP) is a single-terminal airport. After collecting your luggage and clearing customs, your driver will be waiting in the arrivals hall holding your name sign, adjacent to the taxi and shuttle bus area. NAP is just 7km from Naples city centre — under normal traffic conditions, you\'ll reach your hotel in 15–20 minutes. For Amalfi Coast-bound passengers (Positano, Amalfi, Ravello, Sorrento), the journey time from NAP is 60–120 minutes depending on your specific destination and the season. For Pompeii transfers, allow 35–45 minutes. Our drivers for Amalfi Coast routes hold specialist knowledge of the SS163 coastal road and the inland A3 motorway bypass — they select the optimal route based on real-time conditions to get you to your coastal destination safely and efficiently.',
        travelTimes: [
            { destination: 'Naples City Centre', duration: '15–20 min', note: 'Via Autostrada Tangenziale' },
            { destination: 'Pompeii (main entrance)', duration: '35–45 min' },
            { destination: 'Sorrento', duration: '45–60 min' },
            { destination: 'Positano', duration: '75–100 min', note: 'Via SS163 coastal road' },
            { destination: 'Amalfi Town', duration: '90–120 min' },
            { destination: 'Ravello', duration: '100–130 min' },
        ],
        flightDelayPolicy:
            'Flight tracking is active from departure at origin for all NAP arrivals. The first 60 minutes of waiting after landing are included at no charge. Naples Capodichino is a compact airport — baggage claim is typically fast (15–20 minutes), so most passengers exit within 30 minutes of landing. For Amalfi Coast-bound transfers delayed significantly (over 1.5 hours), we proactively check SS163 coastal road conditions to plan the optimal departure timing — the coastal road is subject to traffic controls and closures in peak season. Extended waits beyond 60 minutes are €10 per 30-min block, agreed in advance. We never cancel for flight delays.',
    },
    'florence': {
        terminalPickup:
            'Florence Peretola Airport (FLR) is one of Italy\'s smallest and most convenient airports — the single terminal makes meeting your driver extremely straightforward. After collecting luggage from the single baggage carousel, exit via the arrivals gate where your driver will be visible immediately with your name sign. FLR is just 5km from Florence\'s historic city centre — the journey to your hotel typically takes 15–20 minutes. For hotels inside Florence\'s ZTL restricted zone (which covers nearly the entire city centre), our NCC-licensed drivers have pre-authorised access — this is critical, as standard metered taxis cannot legally enter ZTL areas without incurring fines. For onward connections to Siena, Pisa, or Chianti, confirm your destination at booking so the driver plans the appropriate route.',
        travelTimes: [
            { destination: 'Florence Historic Centre (Duomo area)', duration: '15–20 min' },
            { destination: 'Florence Santa Maria Novella Station', duration: '10–15 min' },
            { destination: 'Pisa City Centre', duration: '55–65 min', note: 'Via A11 or SP1r' },
            { destination: 'Siena City Centre', duration: '1h 15min', note: 'Scenic Chianti route available' },
            { destination: 'Lucca City Walls', duration: '45–55 min' },
            { destination: 'Chianti wine country (Greve)', duration: '40–50 min', note: 'Day trip option' },
        ],
        flightDelayPolicy:
            'We monitor all FLR arrivals in real-time. The first 60 minutes of waiting after landing are complimentary. FLR\'s compact size means baggage is typically on the belt within 10–15 minutes of landing — most passengers exit within 25 minutes of touchdown. For extended delays beyond the 60-minute free period, a charge of €10 per 30 minutes applies (agreed in advance). For early-morning arrivals (pre-06:00), our drivers are positioned at the airport from 30 minutes before scheduled landing. We maintain contact via WhatsApp throughout your journey — simply message your driver if you encounter any delays at immigration or baggage reclaim.',
    },
    'bologna-marconi': {
        terminalPickup:
            'Bologna Guglielmo Marconi Airport (BLQ) is a single-terminal airport with a compact, manageable arrivals hall. Your driver meets you just beyond the baggage collection area with a name-sign, in the meeting zone between the arrivals gate and the taxi/shuttle rank. BLQ is 6km from Bologna city centre — the drive takes approximately 20 minutes. The airport has a direct people-mover train (AerobusTrain) to Bologna Centrale station, but a private taxi offers door-to-door service direct to your hotel without station transfers, particularly important if you are carrying luggage. For Modena (Ferrari Museum) and Parma connections, confirm your destination when booking — both cities are reached in under 50 minutes from BLQ via the A1 motorway.',
        travelTimes: [
            { destination: 'Bologna City Centre (Piazza Maggiore)', duration: '15–20 min' },
            { destination: 'Bologna Centrale Train Station', duration: '12–18 min' },
            { destination: 'Modena (Ferrari Museum)', duration: '40–50 min', note: 'Via A1 motorway' },
            { destination: 'Parma City Centre', duration: '55–65 min' },
            { destination: 'Ravenna City Centre', duration: '65–75 min', note: 'Via A14 Adriatica' },
            { destination: 'Florence City Centre', duration: '1h 30min' },
        ],
        flightDelayPolicy:
            'Flight tracking is active for all BLQ arrivals. The first 60 minutes of free waiting apply after actual landing. BLQ is a well-organised airport with typically fast baggage handling — most passengers exit within 20–25 minutes of landing. For significantly delayed flights (2+ hours), our team contacts you proactively via WhatsApp to confirm revised timing. Extended waits beyond the 60-minute grace period are charged at €10 per 30 minutes, with your agreement. In the event of a flight cancellation requiring a same-day alternative arrangement, contact our 24/7 WhatsApp line and we will do our best to accommodate rescheduling.',
    },
};

export async function generateStaticParams() {
    return airports.map((airport) => ({
        slug: airport.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const airport = airports.find((a) => a.slug === slug);
    const airportName = airport ? airport.name : slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

    const brand = " | Italy Taxi Service";
    const templates = [
        `${airportName} Taxi`, 
        `Taxi from ${airportName}`,
        `${airportName} Airport Taxi`,
        `${airportName} Taxi Transfer`,
        `${airportName} Airport Transfer`,
        `${airportName} Private Taxi`,
        `Taxi from ${airportName} Airport`,
        `${airportName} Airport Taxi Transfer`,
        `Private Taxi from ${airportName} Airport`,
        `${airportName} Airport Private Transfer`,
        `${airportName} Private Airport Taxi Transfer`
    ].sort((a, b) => a.length - b.length);

    let bestTitle = templates.find(t => (t.length + brand.length) >= 55 && (t.length + brand.length) <= 60);
    if (!bestTitle) {
        bestTitle = templates.reduce((prev, curr) => 
            Math.abs((curr.length + brand.length) - 57) < Math.abs((prev.length + brand.length) - 57) ? curr : prev
        );
    }

    return {
        title: { absolute: bestTitle + brand },
        description: `Book the most reliable and affordable private taxi transfer to or from ${airportName}. 24/7 service, top-rated English-speaking drivers, and fixed pricing.`,
        alternates: {
            canonical: `/airport/${slug}`,
        }
    };
}

export default async function AirportPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const airport = airports.find((a) => a.slug === slug) || {
        slug: slug,
        name: slug.split('-').filter(w => w !== 'airport' && w !== 'taxi').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') + ' Airport',
        hero_image: "/images/hero.png",
        description: "Professional airport transfer service. Reliable, punctual, and comfortable rides to and from the airport.",
        features: ["Flight tracking", "Meet & greet service", "Fixed pricing", "24/7 availability", "Premium fleet"],
        city: slug.split('-')[0]
    };

    const rich = airportRichData[slug];

    const airportFaqs = [
      {
        q: `Where do I meet my driver at ${airport.name}?`,
        a: "Your driver will be waiting in the arrivals hall, right after you pass through customs and collect your luggage. They will hold a sign with your name clearly visible."
      },
      {
        q: `Does the price for a transfer from ${airport.name} include parking?`,
        a: "Yes, our prices are all-inclusive. All airport parking fees, fuel, and highway tolls are covered in the fixed price we quote you."
      },
      {
        q: "What if I can't find my driver at the airport?",
        a: "Don't worry. You will receive the driver's phone number via WhatsApp or email before your arrival. You can also contact our 24/7 support line for immediate assistance."
      },
      {
        q: "How early should I book my transfer to the airport?",
        a: "We recommend booking at least 24 hours in advance. However, if you have a last-minute flight, contact us via WhatsApp and we will do our best to accommodate you."
      },
      {
        q: "Can the driver wait if I have a delay at baggage claim?",
        a: "We include 60 minutes of free waiting time from the moment your flight lands. If you encounter significant delays (like lost luggage), please call the driver to let them know."
      },
      {
        q: "Are baby seats and child boosters provided for airport transfers?",
        a: "Yes, we provide high-quality baby seats and child booster seats free of charge upon request. Just mention your requirements and the age of your children when completing your booking."
      },
      {
        q: "What type of vehicles do you use for airport transfers?",
        a: "We operate a premium fleet including standard sedans (Mercedes E-Class or similar), luxury minivans (Mercedes V-Class), and spacious premium vans to comfortably accommodate any group size and luggage requirement."
      }
    ];

    const icons = [<Plane key="1" />, <ShieldCheck key="2" />, <UserCheck key="3" />, <Clock key="4" />, <MousePointer2 key="5" />];

    return (
        <main className="font-inter bg-white text-navy-rich">
            <ServiceSchema 
                name={`Private Transfer to ${airport.name}`} 
                description={`Reliable private taxi transfer and meet & greet service to or from ${airport.name}.`} 
                url={`https://www.italytaxiservice.com/airport/${slug}`} 
                image={airport.hero_image}
            />
            <Navbar />

            <PageHero
                titleTop="Private Airport"
                titleBottom={airport.name}
                description={`Reliable, luxury transfer service to and from ${airport.name} with professional English-speaking drivers.`}
                backgroundImage={airport.hero_image}
                buttonText="Book Your Airport Transfer"
                breadcrumbs={[
                    { name: "Airport Transfers", item: "/services/airport-transfers" },
                    { name: airport.name, item: `/airport/${slug}` }
                ]}
            />

            {/* Introduction Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="animate-slide-left [animation-delay:0.2s]">
                            <p className="text-sm font-bold uppercase text-gold tracking-[0.4em] mb-4">Introduction</p>
                            <h2 className="text-3xl md:text-5xl font-bold text-navy mb-8 leading-tight">Travel from {airport.name} in Comfort</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                {airport.description}
                            </p>
                            <p className="text-gray-500 leading-relaxed mb-10">
                                Whether you're traveling for business or leisure, our door-to-door transportation ensures you reach your destination without the stress of navigating public transport or waiting for local cabs.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <div className="px-6 py-3 bg-gray-50 rounded-full border border-gray-100 text-navy font-bold text-sm tracking-wide">
                                    Fixed Pricing
                                </div>
                                <div className="px-6 py-3 bg-gray-50 rounded-full border border-gray-100 text-navy font-bold text-sm tracking-wide">
                                    Airport Meet & Greet
                                </div>
                            </div>
                        </div>
                        <div className="relative h-[450px] rounded-[3rem] overflow-hidden shadow-2xl animate-fade-in [animation-delay:0.4s]">
                            <Image
                                src={airport.hero_image}
                                alt={`Luxury car waiting at ${airport.name}`}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── NEW: Terminal Pickup Instructions ───────────────────────────────────── */}
            {rich && (
                <section className="py-24 bg-gray-50">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-12">
                                <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-4">Where to Find Us</p>
                                <h2 className="text-3xl md:text-4xl font-bold text-navy">Terminal Pickup Instructions</h2>
                                <div className="w-20 h-1 bg-gold mx-auto mt-5" />
                            </div>
                            <div className="bg-white border border-gray-100 rounded-[2rem] p-10 shadow-sm">
                                <p className="text-gray-600 text-lg leading-relaxed">{rich.terminalPickup}</p>
                                <div className="mt-8 grid sm:grid-cols-3 gap-4">
                                    <div className="bg-navy/5 rounded-xl p-5 text-center">
                                        <p className="text-2xl font-extrabold text-navy mb-1">Name Sign</p>
                                        <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">In arrivals hall</p>
                                    </div>
                                    <div className="bg-navy/5 rounded-xl p-5 text-center">
                                        <p className="text-2xl font-extrabold text-navy mb-1">60 min</p>
                                        <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Free waiting</p>
                                    </div>
                                    <div className="bg-navy/5 rounded-xl p-5 text-center">
                                        <p className="text-2xl font-extrabold text-navy mb-1">24/7</p>
                                        <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Flight tracking</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* ── NEW: Travel Times to Key Destinations ───────────────────────────────── */}
            {rich && rich.travelTimes.length > 0 && (
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-14">
                            <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-4">Journey Times</p>
                            <h2 className="text-3xl md:text-4xl font-bold text-navy">Estimated Travel Times from {airport.name}</h2>
                            <div className="w-20 h-1 bg-gold mx-auto mt-5" />
                            <p className="text-gray-500 mt-5 max-w-xl mx-auto">All times are estimated under normal traffic conditions. Your driver monitors live traffic and selects the fastest route.</p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
                            {rich.travelTimes.map((item, i) => (
                                <div key={i} className="bg-gray-50 border border-gray-100 rounded-[1.5rem] p-7 flex gap-5 items-start hover:border-gold/40 hover:shadow-md transition-all">
                                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 mt-1">
                                        <MapPin className="w-4 h-4 text-gold" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-navy text-base leading-snug mb-1">{item.destination}</p>
                                        <p className="text-gold font-extrabold text-xl">{item.duration}</p>
                                        {item.note && <p className="text-gray-400 text-xs mt-1">{item.note}</p>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Get a Quote CTA Section */}
            <section className="py-24 bg-[#0F1C2E] text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#F4C430 0.5px, transparent 0.5px)', backgroundSize: '32px 32px' }} />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-4">Custom Quote</p>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">How Much Does a Transfer from {airport.name} Cost?</h2>
                        <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
                            Every airport transfer is priced individually based on your destination, vehicle type, and travel date — all fully fixed and confirmed before you land. No meters, no surprises.
                        </p>
                        <div className="grid sm:grid-cols-3 gap-6 mb-12">
                            <div className="bg-white/5 border border-white/10 rounded-[1.5rem] p-6 text-center">
                                <div className="text-3xl mb-3">🚗</div>
                                <h3 className="text-white font-bold mb-1">Standard Sedan</h3>
                                <p className="text-gray-400 text-sm">Up to 3 passengers + 2 bags</p>
                            </div>
                            <div className="bg-gold rounded-[1.5rem] p-6 text-center text-navy relative">
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-navy text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">Most Booked</div>
                                <div className="text-3xl mb-3">🚐</div>
                                <h3 className="font-bold mb-1">Luxury Minivan</h3>
                                <p className="text-navy/70 text-sm">Up to 7 passengers + 7 bags</p>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-[1.5rem] p-6 text-center">
                                <div className="text-3xl mb-3">🚌</div>
                                <h3 className="text-white font-bold mb-1">Premium Van</h3>
                                <p className="text-gray-400 text-sm">Up to 8 passengers + 8 bags</p>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://wa.me/923148932631?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20a%20transfer%20from%20{encodeURIComponent(airport.name)}"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-[#25D366] text-white font-bold py-4 px-8 rounded-2xl hover:bg-[#128C7E] transition-colors text-lg"
                            >
                                <MessageCircle className="w-5 h-5" />
                                Get a Free Quote on WhatsApp
                            </a>
                            <a
                                href="/book-now"
                                className="inline-flex items-center gap-3 bg-gold text-navy font-bold py-4 px-8 rounded-2xl hover:bg-white transition-colors text-lg"
                            >
                                Request a Quote Online
                                <ArrowRight className="w-5 h-5" />
                            </a>
                        </div>
                        <p className="text-gray-500 text-sm mt-6">Fixed price confirmed before your journey. No meters. No hidden fees.</p>
                    </div>
                </div>
            </section>

            {/* ── NEW: Flight Delay Policy ─────────────────────────────────────────────── */}
            {rich && (
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                                    <AlertCircle className="w-6 h-6 text-gold" />
                                </div>
                                <div>
                                    <p className="text-gold text-sm font-bold uppercase tracking-[0.4em]">We Track Every Flight</p>
                                    <h2 className="text-3xl md:text-4xl font-bold text-navy">Flight Delay Policy</h2>
                                </div>
                            </div>
                            <div className="bg-navy/3 border-l-4 border-gold bg-gray-50 rounded-r-[2rem] p-10">
                                <p className="text-gray-600 text-lg leading-relaxed">{rich.flightDelayPolicy}</p>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Why Choose Section */}
            <section className="py-24 bg-gray-50 overflow-hidden text-center">
                <div className="container mx-auto px-6 mb-16">
                    <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-4">Our Excellence</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-navy">Why Choose This Airport Service</h2>
                    <div className="w-20 h-1 bg-gold mx-auto mt-6" />
                </div>

                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {airport.features.map((feature, index) => (
                            <div
                                key={index}
                                className="uiverse-card p-10 group animate-slide-left min-h-[250px]"
                                style={{ animationDelay: `${index * 0.15}s` }}
                            >
                                <div className="flex flex-col items-center text-center w-full">
                                    <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-gold group-hover:text-navy transition-all duration-500">
                                        <div className="text-gold group-hover:text-navy transform group-hover:scale-110 transition-transform">
                                            {icons[index % icons.length]}
                                        </div>
                                    </div>
                                    <h3 className="text-white font-bold text-xl mb-4 group-hover:text-gold transition-colors">{feature}</h3>
                                    <p className="text-gray-400 text-xs uppercase tracking-widest font-bold">Standard Inclusion</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Customer Reviews Section */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="container mx-auto px-6 max-w-6xl">
                    <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-4 text-center">Testimonials</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-navy text-center mb-16">What Travelers Say</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-8 rounded-[2rem] border border-gray-100 shadow-xl relative mt-4">
                            <div className="absolute -top-6 left-8 bg-gold text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">"</div>
                            <div className="flex gap-1 mb-4 pt-4 text-gold">★★★★★</div>
                            <p className="text-gray-600 italic mb-6">"Our driver was waiting with a sign right as we exited luggage claim at {airport.name}. The van was spotless and the ride to our hotel was incredibly smooth."</p>
                            <p className="font-bold text-navy">— Sarah Jenkins, US</p>
                        </div>
                        <div className="p-8 rounded-[2rem] border border-gold shadow-xl shadow-gold/10 relative">
                            <div className="absolute -top-6 left-8 bg-gold text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">"</div>
                            <div className="flex gap-1 mb-4 pt-4 text-gold">★★★★★</div>
                            <p className="text-gray-600 italic mb-6">"Our flight was delayed by 2 hours, but our driver tracked it and was still there waiting with a smile. Perfect start to our vacation!"</p>
                            <p className="font-bold text-navy">— Mark T., UK</p>
                        </div>
                        <div className="p-8 rounded-[2rem] border border-gray-100 shadow-xl relative mt-4">
                            <div className="absolute -top-6 left-8 bg-gold text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">"</div>
                            <div className="flex gap-1 mb-4 pt-4 text-gold">★★★★★</div>
                            <p className="text-gray-600 italic mb-6">"Cheaper than grabbing two local taxis for our family of six, and way more comfortable. I will use them every time I fly into {airport.name}."</p>
                            <p className="font-bold text-navy">— The Miller Family</p>
                        </div>
                    </div>
                </div>
            </section>

            <FAQSection faqs={airportFaqs} title={`${airport.name.split(' ')[0]} Airport FAQ`} />

            {/* Booking & CTA Section */}
            <section className="py-24 bg-[#0F1C2E] relative overflow-hidden">
                {/* Pattern Overlay */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#F4C430 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
                        <div className="w-full lg:w-1/2 animate-slide-left">
                            <p className="text-sm font-bold uppercase text-gold tracking-[0.4em] mb-6">Reservation</p>
                            <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-8">
                                Book your <span className="text-gold">{airport.name}</span> transfer today!
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl">
                                Secure your luxury airport transfer in less than 2 minutes. Get instant confirmation and travel with peace of mind.
                            </p>
                            <div className="space-y-6">
                                <div className="flex items-center gap-4 group">
                                    <div className="w-12 h-12 rounded-full border border-gold/20 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-navy transition-all">
                                        <Clock className="w-5 h-5" />
                                    </div>
                                    <div className="text-left">
                                        <p className="text-white font-bold text-sm">Real-time Flight Tracking</p>
                                        <p className="text-gray-500 text-xs">We wait even if your flight is delayed</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 group">
                                    <div className="w-12 h-12 rounded-full border border-gold/20 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-navy transition-all">
                                        <ShieldCheck className="w-5 h-5" />
                                    </div>
                                    <div className="text-left">
                                        <p className="text-white font-bold text-sm">Secure Booking</p>
                                        <p className="text-gray-500 text-xs">SSL Encrypted processing</p>
                                    </div>
                                </div>
                            </div>

                            {/* WhatsApp Direct Contact */}
                            <div className="mt-12 p-6 bg-white/5 rounded-[2rem] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
                                <div>
                                    <h4 className="text-white font-bold mb-1">Need help immediately?</h4>
                                    <p className="text-gray-400 text-sm">Chat with our 24/7 dispatch</p>
                                </div>
                                <a href="https://wa.me/923148932631" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#25D366] text-white font-bold py-3 px-6 rounded-xl hover:bg-[#128C7E] transition-colors">
                                    <MessageCircle className="w-6 h-6" />
                                    WhatsApp
                                </a>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2">
                            <BookingForm />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
