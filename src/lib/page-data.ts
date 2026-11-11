



























import { extraRoutes } from './extra-routes';
import { extraRoutesRome } from './extra-routes-rome';
import { extraRoutesTuscany } from './extra-routes-tuscany';
import { extraRoutesFinal } from './extra-routes-final';
import { newClusterRoutesEn } from './new-regions-routes-data';
import { routeExpansion2026 } from './route-expansion-2026';
import { existingRouteItTranslations } from './it-translations-existing-routes';

export interface AirportData {
    slug: string;
    name: string;
    code: string;
    city: string;
    hero_image: string;
    description: string;
    features: string[];
}

/** Optional long-form content shared by the city and tour pages.
 *  Opt-in: an entry that omits these renders exactly as it did before, so
 *  adding them to one city or tour cannot affect the other 24 / 4 pages. */
export interface RichPageContent {
    sections?: { h2: string; p: string[] }[];
    faqs?: { q: string; a: string }[];
    relatedLinks?: { href: string; label: string }[];
    /** Full <title>, used verbatim — bypasses the layout's brand template. */
    seoTitleAbsolute?: string;
    metaDescription?: string;
}

export interface CityData extends RichPageContent {
    slug: string;
    name: string;
    hero_image: string;
    description: string;
    popular_tours: string[];
}

export interface TourData extends RichPageContent {
    slug: string;
    name: string;
    city: string;
    hero_image: string;
    alt_text: string;
    highlights: string[];
    description: string;
    /** Maximum hours the private day covers, when one is published. */
    maxHours?: number;
}

export const airports: AirportData[] = [
    {
        slug: "rome-fiumicino",
        name: "Rome Fiumicino Airport",
        code: "FCO",
        city: "Rome",
        hero_image: "/images/rome airport.png",
        description: "Rome Fiumicino (FCO) is Italy's largest and busiest international gateway, handling over 40 million passengers annually. Our private taxi service connects FCO directly to Rome city centre (30–45 min), Vatican, Trastevere, and all major hotels — bypassing the overcrowded Leonardo Express train. With real-time flight monitoring and a name-sign meet & greet in Terminal 1, 2, or 3 arrivals, your driver is waiting the moment you clear customs.",
        features: [
            "Flight tracking & delay monitoring at FCO",
            "Meet & greet in all FCO terminals",
            "Fixed pricing to Rome city centre from €50",
            "24/7 availability including overnight arrivals",
            "Luxury Mercedes fleet — sedans and minivans"
        ]
    },
    {
        slug: "milan-malpensa",
        name: "Milan Malpensa Airport",
        code: "MXP",
        city: "Milan",
        hero_image: "/images/milan airport.jpg",
        description: "Milan Malpensa (MXP) serves northern Italy as its primary long-haul hub, 50km northwest of Milan city centre. Our private transfer covers both Terminal 1 and Terminal 2, with dedicated name-sign meet & greet in each arrivals hall. Unlike the Malpensa Express train, we provide door-to-door service to your hotel, the fashion district, Lake Como, or any Lombard city — all at a fixed price agreed before you travel.",
        features: [
            "Terminal 1 and Terminal 2 coverage at MXP",
            "Door-to-door service to Milan, Lake Como, and Bergamo",
            "Fixed pricing from Milan Malpensa — no meters",
            "24/7 availability including early-morning flights",
            "Luxury Mercedes-Benz sedans and V-Class minivans"
        ]
    },
    {
        slug: "venice",
        name: "Venice Marco Polo Airport",
        code: "VCE",
        city: "Venice",
        hero_image: "/images/venice airport.webp",
        description: "Venice Marco Polo Airport (VCE) presents a unique transfer challenge — the city itself is car-free. Our taxi service connects VCE to the Piazzale Roma water taxi hub, Mestre hotels, the Venice causeway hotels, and mainland Veneto destinations. We navigate the complex logistics so you don't have to, including coordinating with water taxis for the final island leg if required. Transfers to Verona, Padova, and Treviso are also available.",
        features: [
            "VCE arrivals hall name-sign meet & greet",
            "Transfer to Piazzale Roma, Mestre, and Veneto mainland",
            "Connections to Verona, Padova, and Treviso",
            "Fixed pricing confirmed before you land",
            "24/7 availability — early and late flights covered"
        ]
    },
    {
        slug: "naples",
        name: "Naples Capodichino Airport",
        code: "NAP",
        city: "Naples",
        hero_image: "/images/naples airport.jpeg",
        description: "Naples Capodichino (NAP) is southern Italy's primary airport, just 7km from the city centre and the gateway to the Amalfi Coast, Pompeii, Capri, and the Campania region. Our private taxi service provides faster and more comfortable access to these destinations than any public option — particularly important for the winding coastal roads of Positano and Ravello where local knowledge is essential. Fixed price, no traffic stress, door to your hotel.",
        features: [
            "NAP arrivals hall meet & greet service",
            "Specialist Amalfi Coast transfers from Naples",
            "Connections to Pompeii, Capri, and Sorrento",
            "Fixed pricing — no meter surprises on coastal routes",
            "24/7 availability for early and late-night flights"
        ]
    },
    {
        slug: "florence",
        name: "Florence Peretola Airport",
        code: "FLR",
        city: "Florence",
        hero_image: "/images/florence airport.jpg",
        description: "Florence Peretola (FLR) is a compact airport 5km from the historic city centre, making it one of the most convenient airport-to-city transfers in Italy. Our taxi service gets you to the Duomo, Uffizi, or any Florentine hotel in 15–20 minutes — faster than the shuttle bus and with door-to-door luggage assistance. We also cover onward connections to Siena, Chianti wine country, Pisa, and the Tuscan countryside.",
        features: [
            "15-minute private transfer to Florence city centre",
            "Connections to Siena, Chianti, and Pisa",
            "Meet & greet inside FLR arrivals terminal",
            "Fixed pricing confirmed at booking",
            "24/7 service — all flight times covered"
        ]
    },
    {
        slug: "bologna-marconi",
        name: "Bologna Guglielmo Marconi Airport",
        code: "BLQ",
        city: "Bologna",
        hero_image: "/images/florence airport.jpg",
        description: "Bologna Marconi (BLQ) serves Emilia-Romagna and acts as an alternative gateway to Tuscany and northern Italy. Our private taxi connects BLQ to Bologna city centre, Modena (Ferrari Museum), Parma, Ravenna, Florence, and Rimini — all with fixed pricing and English-speaking drivers. Ideal for travellers connecting to multiple Emilia-Romagna destinations on a single trip.",
        features: [
            "BLQ to Bologna city centre in under 20 minutes",
            "Connections to Modena, Parma, and Ravenna",
            "Alternative gateway transfers to Florence and Rimini",
            "Fixed all-inclusive pricing confirmed before landing",
            "24/7 availability — early-morning departures covered"
        ]
    },
    {
        slug: "catania-fontanarossa",
        name: "Catania Fontanarossa Airport",
        code: "CTA",
        city: "Catania",
        // Mount Etna above Catania — the landmark CTA is the gateway to.
        // Unsplash License (free for commercial use, no attribution required);
        // same remote-image approach already used by the Olbia and Cagliari
        // entries. Replaced a photo of Naples airport that was showing here.
        hero_image: "https://images.unsplash.com/photo-1564500585726-43300e18ae74?auto=format&fit=crop&q=60&w=1200",
        description: "Catania Fontanarossa (CTA) is Sicily's primary airport and the closest gateway to Mount Etna, Taormina, and the Baroque towns of Val di Noto. Our private taxi service connects CTA to Catania city centre (10 minutes), Taormina (45 minutes), Syracuse, Ragusa, and Agrigento — destinations where public transport is slow or unreliable. All transfers include a professional English-speaking driver with local Sicilian knowledge.",
        features: [
            "CTA meet & greet — name sign in arrivals hall",
            "Specialist Taormina and Mount Etna transfers",
            "Coverage across eastern and southern Sicily",
            "Fixed pricing — no Sicilian cab surprises",
            "24/7 service for all Catania flight times"
        ]
    },
    {
        slug: "genoa",
        name: "Genoa Cristoforo Colombo Airport",
        code: "GOA",
        city: "Genoa",
        hero_image: "/images/milan airport.jpg",
        description: "Genoa Cristoforo Colombo Airport (GOA) sits on a remarkable artificial sea-level platform, 6km west of the old port. Our private taxi covers Genoa city centre, the Cinque Terre villages (La Spezia connection), Portofino, Santa Margherita Ligure, and the French Riviera. The Ligurian coast requires knowledgeable local drivers — our network of Genoese specialists navigates the tunnel roads and coastal routes with precision.",
        features: [
            "GOA to Genoa city and old port in 15 minutes",
            "Cinque Terre and Portofino specialist transfers",
            "Cross-border connections to Monaco and Nice",
            "Fixed pricing — no coastal toll surprises",
            "24/7 availability covering all GOA flight schedules"
        ]
    },
    {
        slug: "palermo",
        name: "Palermo Falcone Borsellino Airport",
        code: "PMO",
        city: "Palermo",
        hero_image: "/images/palermo-taxi.webp",
        description: "Palermo Falcone Borsellino Airport (PMO) serves western Sicily and is 35km from the Sicilian capital. Our private taxi service reaches Palermo city centre in 35 minutes, with onward connections to Cefalù, Agrigento (Valley of the Temples), Monreale, and Trapani — all with fixed pricing and local Sicilian expertise. Avoid the slow Trinacria Express train and travel directly to your hotel with a professional English-speaking driver.",
        features: [
            "PMO to Palermo city centre in 35 minutes",
            "Connections to Cefalù, Agrigento, and Trapani",
            "Local Sicilian drivers with regional expertise",
            "Fixed all-inclusive pricing — no hidden extras",
            "24/7 availability for all Palermo departures"
        ]
    },
    {
        slug: "bari",
        name: "Bari Karol Wojtyla Airport",
        code: "BRI",
        city: "Bari",
        hero_image: "/images/bari-taxi.webp",
        description: "Bari Karol Wojtyla Airport (BRI) is Puglia's main gateway, 8km from Bari city centre and the starting point for exploring the Trulli of Alberobello, Matera, Lecce, and the Puglia coastline. Our private taxi service reaches Bari old town in 15 minutes, with fixed-price connections throughout the heel of Italy. Drivers are Puglia specialists who know the back roads to whitewashed hill towns and cave cities.",
        features: [
            "BRI to Bari city centre in 15 minutes",
            "Specialist transfers to Alberobello and Matera",
            "Coverage across Puglia — Lecce, Monopoli, and Polignano",
            "Fixed pricing with no Puglian road surprises",
            "24/7 availability for all Bari flight times"
        ]
    },
    {
        slug: "milan-linate",
        name: "Milan Linate Airport",
        code: "LIN",
        city: "Milan",
        hero_image: "/images/milan airport.jpg",
        description: "Milan Linate (LIN) is the city's closer downtown airport, just 7km from the fashion district and financial centre. Despite its proximity, public transport requires multiple changes. Our private taxi provides direct door-to-door service to any Milan address, Monza, Bergamo, or Lake Como in a luxury Mercedes vehicle — typically faster and far more convenient than navigating the metro with luggage after a long flight.",
        features: [
            "LIN to Milan city centre in under 20 minutes",
            "Direct service to Monza, Bergamo, and Lake Como",
            "Name-sign meet & greet inside LIN arrivals",
            "Fixed pricing — no metered surprises from the airport",
            "24/7 availability covering all Linate flight times"
        ]
    },
    {
        slug: "pisa",
        name: "Pisa International Airport",
        code: "PSA",
        city: "Pisa",
        hero_image: "/images/florence airport.jpg",
        description: "Pisa International Airport (PSA) serves the Tuscany region and is used by many travellers who then proceed to Florence, Siena, or the Chianti wine region. Our private taxi covers Pisa city (Leaning Tower in 10 minutes), Florence in 1 hour, Lucca in 25 minutes, and any Tuscan destination at a fixed price. An excellent alternative to Florence FLR when flying with low-cost carriers into Tuscany.",
        features: [
            "PSA to Pisa Leaning Tower in 10 minutes",
            "Florence transfers via scenic Tuscan countryside",
            "Connections to Lucca, Siena, and Chianti",
            "Fixed pricing — Tuscany-wide coverage",
            "24/7 service for all Pisa Airport flights"
        ]
    },
    {
        slug: "rome-ciampino",
        name: "Rome Ciampino Airport",
        code: "CIA",
        city: "Rome",
        hero_image: "/images/rome airport.png",
        description: "Rome Ciampino (CIA) is Rome's secondary airport, 15km southeast of the city centre and preferred by Ryanair and Wizz Air. Despite being smaller than Fiumicino, the journey into Rome can be congested without the right driver. Our private taxi provides name-sign arrivals meeting, fixed pricing to all Rome neighbourhoods, Vatican, and Trastevere — without the chaotic bus options or inflated taxi demand that plagues Ciampino arrivals.",
        features: [
            "CIA meet & greet in the arrivals terminal",
            "Fixed-price transfers to all Rome districts",
            "Connections to Vatican, Colosseum, and Trastevere",
            "Faster than bus to Termini then metro",
            "24/7 service for all Ciampino flight times"
        ]
    },
    {
        slug: "turin",
        name: "Turin Caselle Airport",
        code: "TRN",
        city: "Turin",
        hero_image: "/images/milan airport.jpg",
        description: "Turin Caselle Airport (TRN) serves Piedmont and is 16km north of Turin city centre. Our private taxi connects TRN to Turin city (including the Egyptian Museum and Lingotto), the Piedmontese wine country (Barolo, Barbaresco), and the Alps ski resorts of Sestriere and Courmayeur. A specialist in northern Italian mountain and valley routes, our Turin network understands the seasonal road conditions and resort access logistics.",
        features: [
            "TRN to Turin city centre in 25 minutes",
            "Connections to Piedmont wine country and ski resorts",
            "Alpine resort transfers — Sestriere and Courmayeur",
            "Fixed pricing confirmed before landing",
            "24/7 availability including winter ski season schedules"
        ]
    },
    {
        slug: "verona",
        name: "Verona Villafranca Airport",
        code: "VRN",
        city: "Verona",
        hero_image: "/images/venice airport.webp",
        description: "Verona Villafranca Airport (VRN) is the ideal gateway for Lake Garda, one of Italy's most popular summer destinations. Our private taxi connects VRN to Verona city (Arena di Verona, Romeo & Juliet balcony), all Lake Garda resorts (Sirmione, Gardone, Riva del Garda), Mantua, and Trento — at fixed prices with local drivers who know every lakeside road. A strong alternative to flying into Venice for Lake Garda holidays.",
        features: [
            "VRN to Verona city and Arena in 15 minutes",
            "Specialist Lake Garda transfers to all resorts",
            "Coverage of Mantua, Trento, and Bolzano",
            "Fixed pricing — lake routes included",
            "24/7 service for all Verona Airport departures"
        ]
    },
    {
        slug: "bergamo",
        name: "Milan Bergamo Airport (Orio al Serio)",
        code: "BGY",
        city: "Milan / Bergamo",
        hero_image: "/images/milan airport.jpg",
        description: "Milan Bergamo Airport (BGY), officially Orio al Serio, is northern Italy's largest low-cost hub, about 50 km northeast of Milan beside the historic city of Bergamo. With no direct rail link into central Milan, a private transfer is the most comfortable, door-to-door way to reach Milan, Bergamo's Città Alta, the lakes or the ski resorts — at a fixed price with luggage help and flight monitoring.",
        features: [
            "BGY to central Milan in about 55–65 minutes",
            "Door-to-door alternative to the Milan coach",
            "Transfers to Bergamo Città Alta, Lake Como and Lake Iseo",
            "Meet & greet with flight monitoring",
            "Fixed pricing — 24/7 for early and late low-cost flights"
        ]
    },
    {
        slug: "treviso",
        name: "Treviso Airport (Antonio Canova)",
        code: "TSF",
        city: "Treviso / Venice",
        hero_image: "/images/venice airport.webp",
        description: "Treviso Airport (TSF, Antonio Canova) is Venice's second airport and a busy low-cost hub, about 3 km from Treviso city and roughly 40 km from Venice. Used by carriers such as Ryanair and Wizz Air, it has no direct rail link, so a private transfer is the most comfortable, door-to-door way to reach Venice, Treviso, the Veneto cities or the Dolomites — at a fixed price with luggage help and flight monitoring.",
        features: [
            "TSF to Treviso city in about 15 minutes",
            "Door-to-door transfers to Venice (Piazzale Roma) in ~45–55 minutes",
            "Connections to Padua, Vicenza, Cortina and the Prosecco hills",
            "Meet & greet with real-time flight monitoring",
            "Fixed pricing — 24/7 for early and late low-cost flights"
        ]
    },
    {
        slug: "olbia",
        name: "Olbia Costa Smeralda Airport",
        code: "OLB",
        city: "Olbia",
        hero_image: "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?auto=format&fit=crop&q=60&w=1200",
        description: "Olbia Costa Smeralda Airport (OLB) is northeastern Sardinia's main gateway, serving the Costa Smeralda's luxury resort towns. Our private taxi service connects OLB directly to Porto Cervo, Porto Rotondo, Baia Sardinia and San Teodoro, with fixed pricing agreed before you fly and a driver who knows the coast's narrow summer roads.",
        features: [
            "OLB to Porto Cervo in about 30–35 minutes",
            "Direct transfers to Porto Rotondo and Baia Sardinia",
            "Meet & greet with real-time flight monitoring",
            "Fixed pricing — no summer surge pricing",
            "24/7 availability for all Olbia flight times"
        ]
    },
    {
        slug: "cagliari",
        name: "Cagliari Elmas Airport",
        code: "CAG",
        city: "Cagliari",
        hero_image: "https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&q=60&w=1200",
        description: "Cagliari Elmas Airport (CAG) is southern Sardinia's principal gateway, about 7 km from Cagliari city centre and the natural starting point for the island's southern beaches. Our private taxi service reaches Cagliari, Villasimius and Chia at a fixed price, with a professional driver who knows the coastal roads well beyond the city.",
        features: [
            "CAG to Cagliari city centre in about 15 minutes",
            "Direct transfers to Villasimius and Chia beaches",
            "Meet & greet with real-time flight monitoring",
            "Fixed pricing — no hidden extras",
            "24/7 availability for all Cagliari flight times"
        ]
    }
];

export const cities: CityData[] = [
    {
        slug: "rome",
        name: "Rome",
        hero_image: "https://images.unsplash.com/photo-1529260830199-42c24126f198?auto=format&fit=crop&q=60&w=1200",
        description: "Explore Rome in comfort with our professional drivers. From city landmarks like the Colosseum to hidden gems, travel at your own pace.",
        popular_tours: ["Rome Night Tour", "Vatican City Tour", "Tivoli Gardens"]
    },
    {
        slug: "milan",
        name: "Milan",
        hero_image: "https://images.unsplash.com/photo-1520986606214-8b456906c813?auto=format&fit=crop&q=60&w=1200",
        description: "Discover Milan's fashion, history, and business districts with our premium taxi services.",
        popular_tours: ["Milan Duomo Tour", "Lake Como Day Trip", "Last Supper Visit"]
    },
    {
        slug: "florence",
        name: "Florence",
        hero_image: "https://images.unsplash.com/photo-1543429776-2782fc8e1acd?auto=format&fit=crop&q=60&w=1200",
        description: "The cradle of the Renaissance. Travel between museums and piazzas in total elegance.",
        popular_tours: ["Uffizi Gallery Tour", "Wine Tasting in Chianti", "Pisa Half-Day Trip"],
        // Florence hub-and-spoke links. The marathon post is seasonal: remove
        // it after race weekend (29 Nov 2026) or swap in the next edition.
        relatedLinks: [
            { href: '/florence-private-taxi', label: 'Florence private taxi & transfers' },
            { href: '/airport/florence', label: 'Florence Airport (FLR) transfers' },
            { href: '/route/pisa-airport-to-florence-taxi', label: 'Pisa Airport to Florence transfer' },
            { href: '/florence-transfer', label: 'Florence hotel transfers' },
            { href: '/route/rome-to-florence-taxi', label: 'Rome to Florence transfer' },
            { href: '/blog/florence-marathon-2026-transfers', label: 'Florence Marathon 2026 transfers' },
        ]
    },
    {
        slug: "venice",
        name: "Venice",
        hero_image: "/images/venice.webp",
        description: "Arrive at Piazzale Roma or your hotel terminal in luxury and style.",
        popular_tours: ["Murano & Burano Tour", "Grand Canal Experience", "Gondola Private Docking"]
    },
    {
        slug: "naples",
        name: "Naples",
        hero_image: "/images/naples.jpg",
        description: "The gateway to the Amalfi Coast. Experience Southern Italy's vibrant spirit with our safe taxi rides.",
        popular_tours: ["Pompeii & Vesuvius", "Amalfi Coast Drive", "Capri Island Tour"]
    },
    {
        slug: "bologna",
        name: "Bologna",
        hero_image: "/images/Bologna.jpg",
        description: "The culinary capital of Italy. Move between piazzas and porticos in professional comfort.",
        popular_tours: ["Food & Ferrari Tour", "Medieval Towers Visit", "Modena Balsamic Experience"]
    },
    {
        slug: "bari",
        name: "Bari",
        hero_image: "/images/bari-taxi.webp",
        description: "Explore the pearl of the Adriatic with our professional taxi drivers.",
        popular_tours: ["Polignano a Mare Tour", "Alberobello Day Trip", "Bari Vecchia Walking Tour"]
    },
    {
        slug: "palermo",
        name: "Palermo",
        hero_image: "/images/palermo-taxi.webp",
        description: "Experience the crossroads of Mediterranean history in the comfort of a luxury SUV.",
        popular_tours: ["Mondello Beach Visit", "Palatine Chapel Tour", "Sicilian Street Food"]
    },
    {
        slug: "amalfi",
        name: "Amalfi",
        hero_image: "/images/almafi.webp",
        description: "Travel along the breathtaking Amalfi Coast with professional local drivers.",
        popular_tours: ["Positano Day Trip", "Ravello Gardens", "Amalfi Cathedral Visit"]
    },
    {
        slug: "amalfi-coast",
        name: "Amalfi Coast",
        hero_image: "/images/almafi.webp",
        description: "Discover the UNESCO-listed Amalfi Coast in absolute comfort. Professional door-to-door taxi service between Positano, Ravello, Amalfi, Praiano and the surrounding villages.",
        popular_tours: ["Positano Day Trip", "Ravello Gardens", "Amalfi Cathedral Visit"]
    },
    {
        slug: "como",
        name: "Como",
        hero_image: "/images/Lake Como.avif",
        description: "Explore the stunning shores of Lake Como with our luxury taxi service.",
        popular_tours: ["Bellagio Visit", "Villa Carlotta Tour", "Varenna Lakeside Walk"],
        seoTitleAbsolute: 'Como Taxi Service & Lake Transfers | Book Your Ride', // 51 chars
        metaDescription: 'Private taxi service in Como and across Lake Como. Transfers from Milan and Malpensa, journey times to every lake town, and fixed all-inclusive prices.',
        sections: [
            { h2: 'Getting to Como from Milan and the Airports', p: [
                'Como sits at the southern tip of the lake, the closest point to Milan, which is why it is the easiest of the lake towns to reach. The run from Milan is about 50 km and roughly 45 minutes.',
                'If you are flying in, Malpensa is the practical airport: it lies north-west of Milan so the transfer never has to cross the city, and the journey takes about 50 minutes. Linate and Bergamo are both served but sit on the far side of Milan from the lake, which adds time in traffic.',
                'The rail alternative runs to Como San Giovanni and Como Nord Lago, but most lakeside hotels then need a further connection, so travellers with luggage generally prefer the direct door-to-door car.',
            ]},
            { h2: 'Como Town or the Wider Lake?', p: [
                'It is worth being clear about the distinction, because "Lake Como" covers a great deal more than the town that shares its name. Como town is a working city at the southern tip, with a cathedral, a funicular up to Brunate and a lakeside promenade.',
                'The towns most visitors picture — Bellagio at the fork in the middle, Varenna facing it across the eastern branch, Tremezzo with Villa Carlotta on the western shore — are considerably further north. Milan to Bellagio is about 80 km and an hour and a half; Milan to Varenna about 90 km and an hour and forty minutes, against roughly 45 minutes to Como.',
                'That gap matters when you are booking. A transfer to Bellagio is not Como plus a few minutes, because the lakeside roads north are narrow, winding and slow.',
            ]},
            { h2: 'Moving Around the Lake Once You Arrive', p: [
                'Many visitors assume they will drive around the lake. In practice the ferries are often faster and far more pleasant for the central stretch, where the car ferry between Bellagio, Varenna, Menaggio and Cadenabbia crosses in minutes against a long drive around the shoreline.',
                'That affects which arrival point makes sense. If your hotel is on the eastern branch, being driven directly to Varenna can work better than going to Bellagio and crossing over.',
                'For a full day on the lake with a car and driver at your disposal, a private day works differently from a transfer — see our Lake Como tour for how that is arranged.',
            ]},
            { h2: 'Hotel Access and Restricted Zones', p: [
                'Como town has a historic centre with limited vehicle access, and several of the lake’s best-known hotels sit on narrow waterfront roads. Your driver takes you as close to the entrance as local rules permit and helps with luggage from there.',
                'Bellagio is the most common surprise further north: its centre is built on stepped lanes running up from the waterfront, so an address a short distance away on a map can be a flight of steps on foot. Varenna is similar.',
                'Giving us the hotel name rather than just the town lets the driver plan the correct approach in advance, and identify the nearest permitted drop-off where access is restricted.',
            ]},
            { h2: 'Seasonal Considerations', p: [
                'Lake Como has a short, intense high season. From June to early September the lakeside roads carry far more traffic than they were built for, and a transfer that takes forty-five minutes in April can take noticeably longer on an August weekend.',
                'Spring and autumn are the easiest times to travel the lake by road, and the gardens and villas are open through much of both. Winter is quietest, though some lakeside hotels and ferry services reduce their schedules.',
                'If you are connecting to a flight or a timed event, build in a genuine buffer rather than the minimum journey time — the lake road offers very few alternatives if something blocks it.',
            ]},
        ],
        faqs: [
            { q: 'How far is Como from Milan?', a: 'About 50 km, roughly 45 minutes by private car. From Malpensa Airport the journey takes about 50 minutes, since the airport sits north-west of Milan and the route never crosses the city.' },
            { q: 'Which Milan airport is best for Lake Como?', a: 'Malpensa. It lies north-west of Milan so the transfer does not have to cross the city. Linate and Bergamo are both served but sit on the far side of Milan from the lake.' },
            { q: 'Is Como town the same as the lake towns in the photos?', a: 'Usually not. Como is the city at the southern tip. Bellagio, Varenna and Tremezzo — the towns most visitors picture — are considerably further north, between 80 and 90 km from Milan rather than 50.' },
            { q: 'How long does it take to reach Bellagio or Varenna?', a: 'Longer than Como, because the lakeside roads north are narrow and slow. Milan to Bellagio is about 80 km and roughly an hour and a half; Milan to Varenna about 90 km and an hour and forty minutes.' },
            { q: 'Can the driver reach my hotel door?', a: 'In most cases yes, though Como has a historic centre with limited vehicle access and some lakeside hotels sit on narrow roads. Where vehicles are not permitted, your driver stops at the nearest legal point and helps with luggage.' },
            { q: 'Are the ferries worth using?', a: 'For the central stretch of the lake, usually yes. The car ferry between Bellagio, Varenna, Menaggio and Cadenabbia crosses in minutes against a long drive around the shoreline.' },
            { q: 'Is the price fixed before I travel?', a: 'Yes. Each journey is quoted as a fixed all-inclusive fare covering motorway tolls, fuel and parking, confirmed before you travel. Night and public-holiday surcharges permitted under our terms are shown in the quote before you book.' },
        ],
        relatedLinks: [
            { href: '/route/milan-to-lake-como-taxi', label: 'Milan to Lake Como transfer' },
            { href: '/route/milan-malpensa-to-como-taxi', label: 'Malpensa Airport to Como' },
            { href: '/route/milan-to-bellagio-taxi', label: 'Transfers to Bellagio' },
            { href: '/route/milan-to-varenna-taxi', label: 'Transfers to Varenna' },
            { href: '/tour/lake-como', label: 'A private day on Lake Como' },
            { href: '/services/lake-como-wedding-transfers', label: 'Lake Como wedding transfers' },
            { href: '/day-trips/milan-to-lake-como-day-trip', label: 'Milan to Lake Como day trip' },
            { href: '/airport/milan-malpensa', label: 'Milan Malpensa airport transfers' },
        ]
    },
    {
        slug: "ravello",
        name: "Ravello",
        hero_image: "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&q=60&w=1200",
        description: "Discover the hilltop jewel of the Amalfi Coast with panoramic views and elegant villas.",
        popular_tours: ["Villa Rufolo Gardens", "Villa Cimbrone Visit", "Amalfi Day Trip"]
    },
    {
        slug: "portofino",
        name: "Portofino",
        hero_image: "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&q=60&w=1200",
        description: "Arrive in style at one of Italy's most glamorous harbour villages.",
        popular_tours: ["Santa Margherita Tour", "Cinque Terre Day Trip", "Liguria Coastal Drive"]
    },
    {
        slug: "taormina",
        name: "Taormina",
        hero_image: "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&q=60&w=1200",
        description: "Experience Sicily's crown jewel perched above the Ionian Sea with our premium transfer service.",
        popular_tours: ["Greek Theatre Visit", "Mount Etna Day Trip", "Isola Bella Beach"]
    },
    {
        slug: "positano",
        name: "Positano",
        hero_image: "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&q=60&w=1200",
        description: "Reach Positano's iconic cliffside village with ease aboard our luxury vehicles.",
        popular_tours: ["Amalfi Drive", "Capri Day Trip", "Praiano Sunset Tour"]
    },
    {
        slug: "sorrento",
        name: "Sorrento",
        hero_image: "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&q=60&w=1200",
        description: "The perfect base for the Amalfi Coast — transfer to Sorrento in comfort and style.",
        popular_tours: ["Pompeii Day Trip", "Capri Ferry Transfer", "Naples City Tour"]
    },
    {
        slug: "lucca",
        name: "Lucca",
        hero_image: "/images/Tuscany Wine.webp",
        description: "One of Tuscany's most complete Renaissance towns, fully encircled by intact city walls now used as a tree-lined promenade. A relaxed, flat, walkable alternative to Florence — with private transfers to match.",
        popular_tours: ["Walk or Cycle the City Walls", "Torre Guinigi Rooftop Garden", "Puccini's Birthplace"]
    },
    {
        slug: "san-gimignano",
        name: "San Gimignano",
        hero_image: "/images/Tuscany Wine.webp",
        description: "Known as the \"Manhattan of Tuscany\" for its skyline of medieval stone towers, San Gimignano is one of the region's most recognisable hill towns — and a popular pairing with Siena or a Chianti wine stop.",
        popular_tours: ["Medieval Towers Walk", "Piazza della Cisterna", "Vernaccia Wine Tasting"]
    }
];

export const tours: TourData[] = [
    {
        slug: "tuscany-wine-tour",
        name: "Tuscany Wine Tour",
        city: "Florence",
        hero_image: "/images/Tuscany Wine.jpeg",
        alt_text: "Rolling hills and vineyards of Tuscany with a luxury taxi on the road",
        highlights: [
            "Luxury transport",
            "Professional driver",
            "Flexible schedule",
            "Comfortable and safe",
            "Sightseeing included"
        ],
        description: "Our Tuscany Wine Tour takes you through vineyards, historic villages, and scenic landscapes. Enjoy a relaxing ride in a luxury vehicle."
    },
    {
        slug: "amalfi-coast",
        name: "Amalfi Coast Tour",
        city: "Naples",
        hero_image: "/images/almafi.webp",
        alt_text: "Scenic coastal view of Positano on the Amalfi Coast with a private taxi Mercedes parked",
        highlights: ["Positano visit", "Ravello views", "Licensed Taxi", "Flexible route"],
        description: "Explore Positano, Amalfi, and Ravello in a single day with our professional drivers."
    },
    {
        slug: "lake-como",
        name: "Lake Como Tour",
        city: "Milan",
        hero_image: "/images/Lake Como.avif",
        alt_text: "Aerial view of Lake Como and the luxury town of Bellagio",
        highlights: ["Bellagio visit", "Varenna", "Private SUV", "Stunning views"],
        description: "Take a scenic drive from Milan to the most beautiful lake in the world.",
        maxHours: 8,
        seoTitleAbsolute: 'Lake Como Private Day Tour from Milan | Get a Quote', // 51 chars
        metaDescription: 'A private Lake Como day from Milan, up to 8 hours with your own driver. You choose the towns — Bellagio, Varenna, Tremezzo — and the pace.',
        sections: [
            { h2: 'A Private Day, Not a Fixed Itinerary', p: [
                'This is a private car and driver for the day rather than a scheduled coach tour, and the practical difference is that nothing is pre-set. The day runs up to a maximum of eight hours, and within that you decide where to go, how long to stay and when to move on.',
                'There is no group to wait for and no fixed departure from each stop. If Bellagio turns out to be the place you want to spend the afternoon, you stay. If the weather closes in on the upper lake, the day can be rearranged while you are in the car.',
                'Tell us roughly what you want to see when you enquire and we will suggest a realistic shape for the day. Nothing is locked in — the plan can change on the day itself.',
            ]},
            { h2: 'Where the Lake Actually Goes', p: [
                'Lake Como is an inverted Y of roughly 150 km of shoreline, and understanding its shape is what makes a day here work. Como town sits at the southern tip, closest to Milan. Bellagio sits at the fork in the middle where the two southern branches meet. Varenna faces it across the eastern branch, and Tremezzo sits opposite on the western shore.',
                'Those three central towns — Bellagio, Varenna and Tremezzo — are only minutes apart by ferry but a long way round by road, which is why a day built around the middle of the lake usually combines driving with at least one crossing.',
                'Milan to Como is about 50 km and roughly 45 minutes, Milan to Bellagio about 80 km and an hour and a half, and Milan to Varenna about 90 km and an hour and forty minutes. Those journey times come out of your eight hours, so a day focused on the upper lake has less time on the ground than one spent around Como and Bellagio.',
            ]},
            { h2: 'What People Usually Want to See', p: [
                'Bellagio is the one most visitors have in mind — a steeply stepped village at the fork of the lake, with gardens at Villa Melzi on its southern edge. Varenna across the water is quieter, with a lakeside walkway and the terraced gardens of Villa Monastero.',
                'Tremezzo on the western shore is where Villa Carlotta sits, a botanical garden and museum that is one of the lake’s best-known houses. Como town itself has the cathedral and the funicular up to Brunate for the view back down the lake.',
                'Gardens and villas are seasonal and keep their own opening hours, which change through the year. We will flag anything likely to be closed when you tell us your date, but checking the specific opening times before you travel is worth doing.',
            ]},
            { h2: 'Driving and Ferries', p: [
                'The lakeside roads north of Como are narrow, winding and slow, with long stretches where overtaking is not possible. Progress is often slower than the distance suggests, and in July and August considerably so.',
                'The ferries are frequently the better way to move between the central towns. The car ferry between Bellagio, Varenna, Menaggio and Cadenabbia crosses in minutes against a long drive around the shoreline, and the passenger services connect the same towns.',
                'A day that uses both — the car for the run up from Milan and between the road-connected towns, a ferry for the central crossings — generally gets more out of eight hours than one spent entirely on the road.',
            ]},
            { h2: 'Pickup, Access and Practical Limits', p: [
                'The day can start from a Milan hotel or address, or directly from Malpensa, Linate or Bergamo if you are arriving by air. Central Milan has restricted-traffic zones, so the pickup point may be a short walk from the lobby for some addresses.',
                'On the lake, Bellagio and Varenna are both built on slopes with stepped lanes, and vehicles cannot reach every doorway. Your driver parks as close as the local rules allow, which is normal for these towns rather than a limitation of the service.',
                'Your driver stays with the car and is available for the whole day, but this is a driving service rather than a guided one — there is no commentary or licensed guide included unless you ask us to arrange one separately.',
            ]},
            { h2: 'How the Day Is Quoted', p: [
                'The day is quoted per booking rather than at a single rate, because the distance covered varies with the itinerary you choose. Tell us your pickup point, roughly which part of the lake you want, the number of passengers and your date, and we confirm a fixed all-inclusive price before you book.',
                'That price covers motorway tolls, fuel and parking, and the figure you confirm is the figure you pay. Journeys starting between 22:00 and 06:00 and on Italian public holidays can carry a surcharge; where one applies it is shown in your quote beforehand.',
                'Ferry tickets, villa and garden admissions and meals are not included — those are paid on the day, as they depend entirely on where you decide to go. Bookings cancelled more than 24 hours before pickup are refunded in full.',
            ]},
        ],
        faqs: [
            { q: 'How long is the Lake Como day tour?', a: 'Up to a maximum of eight hours from pickup. Within that the itinerary is yours — you decide which towns to visit, how long to spend at each and when to head back.' },
            { q: 'Is there a fixed itinerary?', a: 'No. This is a private car and driver rather than a scheduled tour, so there is no set route and no group to keep to. Tell us roughly what you want to see and we will suggest a realistic shape for the day, which can still change as you go.' },
            { q: 'Where does the day start?', a: 'From a Milan hotel or address, or directly from Malpensa, Linate or Bergamo if you are flying in. Central Milan has restricted-traffic zones, so for some addresses the pickup point is a short walk from the lobby.' },
            { q: 'Can we visit Bellagio and Varenna in the same day?', a: 'Yes, and it is a common combination. They sit across the water from each other, minutes apart by ferry but a long way round by road, so the day usually pairs driving with at least one crossing.' },
            { q: 'Is a guide included?', a: 'No. Your driver stays with the car and is available throughout the day, but this is a driving service rather than a guided tour — there is no commentary or licensed guide unless you ask us to arrange one separately.' },
            { q: 'Are ferry tickets and villa entry included?', a: 'No. Ferry tickets, villa and garden admissions and meals are paid on the day, since they depend on where you choose to go. The transfer price itself covers tolls, fuel and parking.' },
            { q: 'What happens if the weather is bad?', a: 'The day can be rearranged while you are travelling, which is the advantage of a private car over a fixed tour. If the upper lake is clouded in, more time around Como and Bellagio usually works better.' },
            { q: 'Can we be dropped somewhere other than Milan at the end?', a: 'Often yes — a one-way day finishing at an airport or a different hotel can be arranged. Mention it when you enquire so the journey is quoted correctly.' },
        ],
        relatedLinks: [
            { href: '/city/como', label: 'Como taxi service' },
            { href: '/route/milan-to-lake-como-taxi', label: 'Milan to Lake Como transfer' },
            { href: '/route/milan-to-bellagio-taxi', label: 'Milan to Bellagio transfer' },
            { href: '/route/milan-to-varenna-taxi', label: 'Milan to Varenna transfer' },
            { href: '/day-trips/milan-to-lake-como-day-trip', label: 'Milan to Lake Como day trip' },
            { href: '/services/private-tours', label: 'Private tours with a driver' },
            { href: '/blog/things-to-do-lake-como', label: 'Things to do on Lake Como' },
            { href: '/services/lake-como-wedding-transfers', label: 'Lake Como wedding transfers' },
        ]
    },
    {
        slug: "vatican",
        name: "Vatican Tour",
        city: "Rome",
        hero_image: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&q=60&w=1200",
        alt_text: "St. Peter's Basilica at the Vatican City in Rome",
        highlights: ["Vatican Museums", "St. Peters Basilica", "Sistine Chapel", "Skip-the-line tips"],
        description: "See the artistic wonders of the Vatican with a comfortable private transfer."
    },
    {
        slug: "dolomites",
        name: "Dolomites Tour",
        city: "Venice",
        hero_image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=60&w=1200",
        alt_text: "Majestic snow-capped peaks of the Italian Dolomites mountains",
        highlights: ["Alpine peaks", "Lake Braies", "Mountain drives", "Private SUV"],
        description: "Experience the majestic Italian Alps with our luxury mountain-ready fleet."
    }
];
export const attractionTransfers = [
    'amalfi-coast-taxi-transfer',
    'arena-di-verona-taxi-transfer',
    'capri-island-taxi-transfer',
    'castel-dell-ovo-taxi-transfer',
    'cinque-terre-taxi-transfer',
    'colosseum-taxi-transfer',
    'costa-smeralda-taxi-transfer',
    'dolomites-taxi-transfer',
    'elba-island-taxi-transfer',
    'florence-cathedral-taxi-transfer',
    'lake-como-taxi-transfer',
    'lake-garda-taxi-transfer',
    'lake-maggiore-taxi-transfer',
    'leaning-tower-of-pisa-taxi-transfer',
    'mole-antonelliana-taxi-transfer',
    'mount-etna-taxi-transfer',
    'paestum-temples-taxi-transfer',
    'pantheon-taxi-transfer',
    'piazza-del-campo-taxi-transfer',
    'pompeii-taxi-transfer',
    'rialto-bridge-taxi-transfer',
    'royal-palace-caserta-taxi-transfer',
    'san-gimignano-taxi-transfer',
    'sassi-matera-taxi-transfer',
    'st-marks-basilica-taxi-transfer',
    'trevi-fountain-taxi-transfer',
    'trulli-alberobello-taxi-transfer',
    'uffizi-gallery-taxi-transfer',
    'valley-of-the-temples-taxi-transfer',
    'vatican-museums-taxi-transfer',
];

export const beachTransfers = [
    'amalfi-coast-taxi',
    'cala-luna-beach-transfer',
    'camogli-taxi-transfer',
    'capri-island-taxi',
    'conero-beach-taxi',
    'costa-smeralda-taxi',
    'elba-beach-taxi',
    'ischia-beach-taxi',
    'lido-venezia-beach-taxi',
    'otranto-beach-taxi',
    'polignano-a-mare-beach-taxi',
    'portofino-taxi-transfer',
    'positano-beach-taxi',
    'rimini-beach-taxi',
    'san-vito-lo-capo-taxi',
    'sardinia-beach-transfers',
    'sirolo-beach-taxi',
    'sperlonga-taxi-transfer',
    'taormina-beach-transfer',
    'tropea-beach-taxi',
];

export const borderSlugs = [
    'italy-to-switzerland',
    'italy-to-france',
    'italy-to-austria',
    'italy-to-germany',
    'italy-to-slovenia',
    'italy-to-croatia',
];

export interface RouteData {
    slug: string;
    from: string;
    to: string;
    title: string;
    hero_image: string;
    description: string;
    distance: string;
    duration: string;
    price?: string;
    highlights: string[];
    faqs: { q: string; a: string }[];
    // ── Optional rich-content fields (render only when present) ──────────────
    // Newer route pages set these to deliver full 1,200–1,800-word articles;
    // existing entries omit them and render the original compact layout.
    metaTitle?: string;        // <=60 chars — overrides the default <title>
    // Full <title>, used verbatim: it bypasses the root layout's
    // "%s | Italy Taxi Service" template, so the brand is NOT appended.
    // Use when a page needs the keyword + CTA format inside 50–60 chars and
    // the brand will not fit. Routes that omit it keep their existing title.
    seoTitleAbsolute?: string;
    metaDescription?: string;  // 150–160 chars — overrides the default meta description
    imageAlt?: string;         // descriptive ALT for the hero image
    sections?: { h2: string; p: string[] }[]; // long-form body sections (h2 + paragraphs)
    vehicleOptions?: boolean;  // render the standard vehicle-options grid
    relatedLinks?: { href: string; label: string }[]; // curated hub-and-spoke links (airport/city/region/sibling-route pages); renders as its own section when present
    itSlug?: string; // slug of this page's Italian twin at /it/route/{itSlug}, if one exists — drives hreflang
}

export const routes: RouteData[] = [
    {
        slug: 'florence-to-pisa-taxi',
        from: 'Florence',
        to: 'Pisa',
        title: 'Florence to Pisa Taxi Transfer',
        hero_image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=60&w=1200',
        description: 'Travel from Florence to Pisa in comfort with our private taxi service. Reach the iconic Leaning Tower of Pisa with a professional English-speaking driver and enjoy door-to-door service.',
        distance: '~80 km',
        duration: '~1 hour',
        highlights: ['Direct door-to-door service', 'Stop at Leaning Tower of Pisa', 'No hidden fees', 'English-speaking driver', 'Free cancellation up to 24h'],
        faqs: [
            { q: 'How long is the taxi ride from Florence to Pisa?', a: 'The drive from Florence to Pisa takes approximately 1 hour (about 80 km) via the A11 motorway, depending on traffic.' },
            { q: 'Can I make a stop at the Leaning Tower of Pisa?', a: 'Yes, we can arrange a dedicated sightseeing stop at Piazza dei Miracoli so you can visit the Leaning Tower of Pisa before continuing to your final destination.' },
            { q: 'How do I get a quote for the Florence to Pisa taxi?', a: 'Simply fill in the booking form with your pickup address, destination, date, and number of passengers. The driver will provide you with a confirmed quote before your journey.' },
        ],
        relatedLinks: [
            { href: '/distance/florence-to-pisa-distance', label: 'Florence to Pisa Distance Guide' },
        ],
    },
    {
        slug: 'rome-to-florence-taxi',
        from: 'Rome',
        to: 'Florence',
        title: 'Rome to Florence Taxi Transfer',
        hero_image: 'https://images.unsplash.com/photo-1529260830199-42c24126f198?auto=format&fit=crop&q=60&w=1200',
        description: 'Book a private taxi from Rome to Florence with Italy Taxi Service. Travel in luxury along one of Italy\'s most scenic routes, with a professional driver and complimentary waiting time.',
        distance: '~277 km',
        duration: '~3 hours',
        highlights: ['Door-to-door transfer', 'Optional Tuscany wine country stop', 'All motorway tolls covered', 'Wi-Fi & bottled water on board', 'Free cancellation up to 24h'],
        faqs: [
            { q: 'How long does the Rome to Florence taxi transfer take?', a: 'The journey from Rome to Florence takes approximately 3 hours (about 277 km) via the A1 Autostrada del Sole motorway.' },
            { q: 'Can I stop in Tuscany during the Rome to Florence transfer?', a: 'Yes, we can arrange scenic stops in the Tuscan countryside, including Orvieto or Chianti wine country, as an add-on to your transfer.' },
            { q: 'What vehicle is best for a group traveling Rome to Florence?', a: 'For groups of up to 7 passengers, we recommend our luxury Mercedes V-Class minivan, which offers plenty of space for luggage and passengers.' },
        ],
        relatedLinks: [
            { href: '/distance/rome-to-florence-distance', label: 'Rome to Florence Distance Guide' },
        ],
    },
    {
        slug: 'milan-to-lake-como-taxi',
        from: 'Milan',
        to: 'Lake Como',
        title: 'Milan to Lake Como Taxi Transfer',
        hero_image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&q=60&w=1200',
        description: 'Escape Milan\'s city bustle and arrive at the breathtaking shores of Lake Como with our private taxi. Professional drivers and the most direct route from Milan city centre or Malpensa Airport.',
        distance: '~50 km',
        duration: '~45 min',
        highlights: ['Direct service from Milan or MXP Airport', 'Drop-off at Como, Bellagio, or Varenna', 'Transparent pricing on request', 'Scenic lakeside route', 'Free cancellation up to 24h'],
        vehicleOptions: true,
        sections: [
            { h2: 'Where on Lake Como Are You Actually Going?', p: [
                'Lake Como is not one destination. It is an inverted-Y of roughly 150 km of shoreline, and the town you are staying in changes the journey far more than most visitors expect. Como town sits at the southern tip closest to Milan; Bellagio sits at the fork in the middle of the lake; Varenna faces it from the eastern branch.',
                'Como is about 50 km from Milan and takes roughly 45 minutes. Bellagio is about 80 km and around an hour and a half. Varenna is about 90 km and around an hour and forty minutes. The extra time is not extra distance alone — the lakeside roads north of Como are narrow, winding and slow, with long stretches where overtaking is impossible.',
                'So a transfer to Bellagio is not "Como plus a few minutes". Tell us the town and the hotel when you enquire and the quote reflects the real journey rather than a lake-wide average.',
            ]},
            { h2: 'Milan City Centre or Malpensa Airport?', p: [
                'Both work, and we run the transfer from either. The practical difference is where your day starts. If you are already in Milan — after a stay, a meeting or a Fiera event — the pickup is from your hotel or address and the run north is straightforward.',
                'If you are flying in, Malpensa is the more convenient airport for the lake: it sits north-west of the city, so you do not have to cross Milan at all. The Malpensa to Como transfer takes about 50 minutes door to door. Linate and Bergamo are also served, but both sit on the far side of the city from the lake, which adds time in traffic.',
                'If your flight lands late or you have an early departure, say so when booking. The lakeside roads are materially quieter outside peak hours, and the same journey can differ by half an hour depending on when it runs.',
            ]},
            { h2: 'Hotel Access, ZTL Zones and Where the Car Can Stop', p: [
                'Several of the lake\'s best-known hotels sit on narrow waterfront roads or inside restricted-traffic zones, and some of the historic centres — Como\'s among them — have limited vehicle access. Your driver takes you as close to the entrance as the local rules permit and helps with luggage from there.',
                'Bellagio is the most common surprise: its centre is built on stepped lanes running up from the waterfront, so a hotel address a short distance away on the map can be a flight of steps on foot. Varenna is similar, with the station and the village separated by a lakeside path.',
                'Give us the hotel name rather than just the town. It lets the driver plan the correct approach and, where access is restricted, identify the nearest legitimate drop-off point in advance rather than on arrival.',
            ]},
            { h2: 'Getting Between the Lake Towns Once You Arrive', p: [
                'Many visitors assume they will drive around the lake. In practice the ferries are often faster and far more pleasant than the road, particularly on the central stretch between Bellagio, Varenna, Menaggio and Tremezzo, where the car ferry crosses in minutes against a long drive around the shoreline.',
                'That matters for planning your transfer: if your hotel is on the eastern branch, arriving at Varenna directly can make more sense than being driven to Bellagio and crossing. Equally, if you are staying centrally and only need the lake once, a single road transfer plus ferries for the rest of the stay is usually the cheaper plan.',
                'We are happy to advise on which arrival point suits your itinerary when you enquire — including whether a direct transfer or a transfer plus ferry works better for your hotel.',
            ]},
            { h2: 'Weddings, Events and Group Travel', p: [
                'Lake Como handles a large volume of destination weddings, and the transport needs are different from a single airport run: guests arriving on different flights across several days, a shuttle pattern between hotel and venue, and timings that have to hold regardless of traffic.',
                'These are quoted per journey like any other transfer, with each leg priced and confirmed in advance. If you are coordinating a group, send the full schedule in one enquiry rather than booking legs separately — it is easier to keep the timings consistent and to assign suitable vehicles across the whole programme.',
                'The same applies to corporate groups attending events in Milan who are staying on the lake, which is an increasingly common pattern during the city\'s trade-fair calendar.',
            ]},
            { h2: 'Seasonal Considerations on the Lake Road', p: [
                'Lake Como\'s season runs hard from late spring to early autumn, and the single-carriageway lakeside roads carry far more traffic in July and August than they were built for. A transfer that is comfortable in April can take noticeably longer in peak summer, especially on weekend afternoons.',
                'Spring and autumn are the easiest times to travel the lake by road, and the gardens and villas are open through much of both. Winter is quietest of all, though some lakeside hotels and ferry services reduce their schedules.',
                'If you are connecting to a flight or a timed event, build in a genuine buffer rather than the minimum journey time — the lake road offers very few alternative routes if something blocks it.',
            ]},
            { h2: 'Booking and Getting a Price', p: [
                'This route is quoted per booking rather than at a single fixed rate, because the journey varies so much by destination town. For an accurate quote first time, include your pickup point (Milan address or airport and flight number), the lake town and hotel, the number of passengers, and how much luggage you are bringing.',
                'Your price is confirmed before you travel and includes motorway tolls, fuel and parking, so the figure you agree is the figure you pay. Journeys starting between 22:00 and 06:00 and on Italian public holidays can carry a surcharge; where one applies it is shown in your quote before you book.',
                'Bookings cancelled more than 24 hours before pickup are refunded in full. If you are still weighing a one-way transfer against a full day with a driver on the lake, say so in your enquiry and we will quote both.',
            ]},
        ],
        faqs: [
            { q: 'How far is Lake Como from Milan by taxi?', a: 'Lake Como is approximately 50 km from Milan city centre, a journey of about 45 minutes by private taxi. From Malpensa Airport, the drive is around 50 km and takes about 50 minutes.' },
            { q: 'Can I get a taxi from Malpensa Airport directly to Lake Como?', a: 'Yes, we provide direct private transfers from Milan Malpensa Airport (MXP) to any town on Lake Como, including Como, Bellagio, Varenna, and Menaggio.' },
            { q: 'Can I book a return taxi from Lake Como to Milan?', a: 'Yes, we offer both single and return transfer bookings. Simply select a return trip when booking and specify your preferred pickup time.' },
            { q: 'How long does it take to reach Bellagio or Varenna?', a: 'Longer than Como town, because the lakeside roads north are narrow and slow. Milan to Bellagio is about 80 km and roughly 1 hour 30 minutes, and Milan to Varenna about 90 km and roughly 1 hour 40 minutes, against about 45 minutes to Como.' },
            { q: 'Which Milan airport is best for Lake Como?', a: 'Malpensa. It is the most convenient airport for the lake because it sits north-west of Milan, so the transfer never crosses the city: about 50 minutes to Como town. Linate and Bergamo are also served but take longer in traffic. Send your flight number and hotel and we track the flight and quote the exact journey.' },
            { q: 'Can the driver reach my hotel door?', a: 'In most cases yes, but parts of the lake have restricted-traffic zones and stepped lanes — Bellagio and Varenna in particular. Where vehicles are not permitted, your driver stops at the nearest legal point and helps with your luggage. Give us the hotel name when booking so the approach is planned in advance.' },
            { q: 'Do you cover wedding and group transport on Lake Como?', a: 'Yes. Each leg is quoted and confirmed in advance. For a group, send the whole schedule in a single enquiry rather than booking legs separately, so timings stay consistent and suitable vehicles are assigned across the programme.' },
            { q: 'Is a surcharge ever added to this transfer?', a: 'Journeys starting between 22:00 and 06:00 and on Italian public holidays can carry a surcharge. Where one applies it is calculated into the quote you receive before you book, so the figure you confirm is the figure you pay. Tolls, fuel and parking are already included.' },
            { q: 'Is there a train to Bellagio?', a: 'No. Bellagio has no railway station. By public transport you take a train to Como or Varenna and continue by ferry or bus, which usually means at least one change with luggage. A private transfer takes you from Milan or Malpensa to your Bellagio hotel in one journey, to the nearest point a car can reach.' },
        ],
        relatedLinks: [
            { href: '/distance/milan-to-lake-como-distance', label: 'Milan to Lake Como Distance Guide' },
            { href: '/blog/lake-como-wedding-transfers', label: 'Lake Como Wedding & Event Transfers' },
            { href: '/route/milan-to-bellagio-taxi', label: 'Continue to Bellagio' },
            { href: '/route/milan-to-varenna-taxi', label: 'Transfers to Varenna' },
            { href: '/route/milan-malpensa-to-como-taxi', label: 'Arriving at Malpensa instead' },
            { href: '/route/malpensa-to-bellagio-taxi', label: 'Malpensa Airport to Bellagio' },
            { href: '/route/malpensa-to-varenna-taxi', label: 'Malpensa Airport to Varenna' },
            { href: '/city/como', label: 'Como taxi service' },
            { href: '/airport/milan-malpensa', label: 'Milan Malpensa airport transfers' },
            { href: '/tour/lake-como', label: 'A full day on Lake Como with a driver' },
            { href: '/day-trips/milan-to-lake-como-day-trip', label: 'Milan to Lake Como day trip' },
            { href: '/services/wedding-transfers', label: 'Wedding transfer service' },
        ],
    },
    {
        slug: 'rome-to-naples-taxi',
        from: 'Rome',
        to: 'Naples',
        title: 'Rome to Naples Taxi Transfer',
        hero_image: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?auto=format&fit=crop&q=60&w=1200',
        description: 'Travel from Rome to Naples with our private taxi service. Skip the crowded trains and enjoy a stress-free, direct door-to-door transfer with a professional driver and on-time pickups with flight tracking.',
        distance: '~226 km',
        duration: '~2.5 hours',
        highlights: ['Direct door-to-door service', 'Optional Pompeii stop available', 'No hidden fees', 'English-speaking local driver', 'Free cancellation up to 24h'],
        faqs: [
            { q: 'How long is the taxi from Rome to Naples?', a: 'The private taxi from Rome to Naples takes approximately 2.5 hours (about 226 km) via the A1 motorway, depending on traffic conditions.' },
            { q: 'Can I stop at Pompeii on my way from Rome to Naples?', a: 'Yes, we can arrange a sightseeing stop at the ancient ruins of Pompeii en route to Naples. This is a popular add-on that makes the journey even more memorable.' },
            { q: 'Is it better to take a train or taxi from Rome to Naples?', a: 'While the high-speed train is fast, a private taxi offers door-to-door convenience, no station transfers, ideal for families, groups, or those with lots of luggage.' },
        ],
        relatedLinks: [
            { href: '/distance/rome-to-naples-distance', label: 'Rome to Naples Distance Guide' },
        ],
    },
    {
        slug: 'florence-to-rome-taxi',
        from: 'Florence',
        to: 'Rome',
        title: 'Florence to Rome Taxi Transfer',
        hero_image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&q=60&w=1200',
        description: 'Book a private taxi from Florence to Rome and travel in style through the heart of Italy. Our professional drivers offer on-time pickup and a comfortable door-to-door transfer experience.',
        distance: '~277 km',
        duration: '~3 hours',
        highlights: ['Door-to-door service', 'Optional Orvieto stop', 'All motorway tolls covered', 'Luxury Mercedes fleet', 'Free cancellation up to 24h'],
        faqs: [
            { q: 'How long does the Florence to Rome taxi take?', a: 'The private taxi from Florence to Rome takes approximately 3 hours (about 277 km) via the A1 motorway.' },
            { q: 'Can I stop somewhere between Florence and Rome?', a: 'Yes, Orvieto is a popular stop between Florence and Rome. We can arrange a 1-hour visit to this hilltop town with its stunning cathedral.' },
            { q: 'What does the Florence to Rome taxi include?', a: 'All transfers include motorway tolls, fuel, and the driver\'s service. The exact fare is provided when you request a quote.' },
        ],
        relatedLinks: [
            { href: '/distance/rome-to-florence-distance', label: 'Rome to Florence Distance Guide' },
        ],
    },
    {
        slug: 'milan-to-venice-taxi',
        from: 'Milan',
        to: 'Venice',
        title: 'Milan to Venice Taxi Transfer',
        hero_image: 'https://images.unsplash.com/photo-1513581166391-887a96ddeafd?auto=format&fit=crop&q=60&w=1200',
        description: 'Get from Milan to Venice by private taxi and skip the train queues. Enjoy a comfortable, direct transfer to Venice Mestre or Piazzale Roma with a professional English-speaking driver.',
        distance: '~270 km',
        duration: '~2.5 hours',
        highlights: ['Direct to Venice Mestre or Piazzale Roma', 'All motorway tolls covered', 'Depart from Milan city or MXP Airport', 'Luxury vehicles available', 'Free cancellation up to 24h'],
        faqs: [
            { q: 'How do I get from Milan to Venice by private taxi?', a: 'Our private taxi travels directly from Milan (city centre or Malpensa Airport) to Venice, arriving at Piazzale Roma or Venice Mestre station. The journey takes about 2.5 hours.' },
            { q: 'How do I request a quote for Milan to Venice?', a: 'Fill in the booking form with your travel details and number of passengers. You will receive a confirmed quote from the driver before your journey.' },
            { q: 'Can you drop me directly at Piazzale Roma in Venice?', a: 'Yes, our drivers are familiar with all Venice access points and will take you directly to Piazzale Roma — the closest vehicle access point to central Venice.' },
        ],
        relatedLinks: [
            { href: '/distance/milan-to-venice-distance', label: 'Milan to Venice Distance Guide' },
        ],
    },
    {
        slug: 'naples-to-amalfi-coast-taxi',
        from: 'Naples',
        to: 'Amalfi Coast',
        title: 'Naples to Amalfi Coast Taxi Transfer',
        // No published fare on this route, so the CTA asks for a quote rather
        // than implying a bookable fixed price.
        seoTitleAbsolute: 'Naples to Amalfi Coast Private Taxi Transfer | Get a Quote', // 58 chars
        hero_image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&q=60&w=1200',
        description: 'Travel from Naples to the Amalfi Coast by private taxi and enjoy one of Italy\'s most scenic coastal drives. Our experienced drivers navigate the winding Amalfi roads safely, dropping you at Positano, Amalfi, or Ravello.',
        distance: '~65 km',
        duration: '~1.5 hours',
        highlights: ['Drop-off at Positano, Amalfi, or Ravello', 'Experienced drivers on Amalfi roads', 'Scenic coastal route', 'Transparent pricing on request', 'Free cancellation up to 24h'],
        vehicleOptions: true,
        sections: [
            { h2: 'Which Airport Should You Fly Into for the Amalfi Coast?', p: [
                'The Amalfi Coast has no airport of its own, so every visitor arrives by road — and the airport you choose decides how much of your first day is spent travelling. Naples International Airport (Capodichino, NAP) is the practical answer for almost everyone. It is the closest major airport to the coast, roughly 65 km from Positano, Amalfi and Ravello, and the transfer takes about an hour and a half.',
                'The alternatives are considerably further. Rome Fiumicino is a long day\'s travel from the coast — our Rome to Amalfi and Rome to Positano transfers both cover around 270 km and take three and a half to four hours. Salerno has a small regional airport with very limited scheduled flights, so it rarely works as a practical arrival point. If your itinerary allows a choice, flying into Naples will save you several hours in the car.',
                'One thing worth planning for: there is no direct train or metro to the Amalfi Coast towns from any airport. Whichever airport you land at, the final leg is by road, so the real question is only how long that road journey will be.',
            ]},
            { h2: 'Journey Times from Naples to Each Amalfi Coast Town', p: [
                'The coast is a string of towns along a single road, so journey time depends entirely on how far along it you are staying. From Naples Airport, Sorrento is the closest of the main bases at about 50 km and an hour and a quarter. Positano is around 60 km and an hour and a half, Praiano a similar hour and a half, Amalfi town about 70 km and an hour and three quarters, and Ravello — which sits high above Amalfi — roughly 75 km and the same hour and three quarters.',
                'Those are realistic door-to-door estimates under normal conditions rather than best-case figures. Add time in July and August, and on summer weekends, when the coastal road carries far more traffic than it was built for.',
                'If you are staying somewhere not listed here, send us the hotel name when you enquire and we will confirm the journey time for that exact address.',
            ]},
            { h2: 'The SS163 Amalfi Drive: What the Journey Is Actually Like', p: [
                'The final stretch of the drive follows the SS163, the coastal road cut into the cliffs between Sorrento and Salerno. It is genuinely spectacular, and it is also narrow, winding and short of passing places. Coaches and local buses need the full width of the road at many of the bends, which is why progress can be slower than the distance suggests.',
                'In peak season the road is subject to traffic management, and sections can be restricted or closed at short notice. The inland A3 motorway sometimes offers a faster approach to Amalfi and Ravello depending on the day and the time, so your driver will choose between the coastal and inland routes based on live conditions rather than following a fixed plan.',
                'This is the main reason travellers book a driver who works the coast regularly rather than hailing a car on arrival. Local knowledge of which approach is moving on a given afternoon makes a material difference to how long you sit in traffic.',
            ]},
            { h2: 'Arriving with Luggage on the Amalfi Coast', p: [
                'The coastal towns were built long before cars, and their centres reflect that. Positano is effectively a staircase down to the sea, Amalfi\'s core is pedestrianised, and Ravello sits above the coast road with restricted vehicle access. In practice this means your driver brings you to the nearest point a car is permitted, which may be a short walk or a flight of steps from your hotel door.',
                'It is not a limitation of the service — no vehicle can reach some of these addresses — but it is worth knowing before you arrive with heavy cases. Your driver will help with luggage to the permitted drop-off point, and many hotels in Positano and Ravello run a porter service from there if you let them know your arrival time.',
                'If anyone in your group has limited mobility, tell us when you book. Some hotels have far easier vehicle access than others, and we can advise on the best drop-off point for your specific address.',
            ]},
            { h2: 'Seasonal Considerations Worth Planning Around', p: [
                'The Amalfi Coast has a short, intense high season. From June to early September the SS163 is busy for most of the day, and a transfer that takes ninety minutes in April can take well over two hours in August. Morning transfers generally move faster than late afternoon ones.',
                'If you are connecting to something time-critical — a ferry to Capri, a restaurant booking, or a return flight — build in a genuine buffer rather than the minimum journey time. Coastal road delays are the single most common cause of missed connections on this route.',
                'Outside the summer months the drive is markedly quicker and the views are no less good. Spring and autumn are the easiest times to travel this coast by car.',
            ]},
            { h2: 'How to Get a Price for Your Transfer', p: [
                'Because the coast covers a wide spread of destinations and journey times, this route is quoted per booking rather than at a single fixed rate. To get an accurate price first time, include your destination town and hotel name, your arrival flight number if you are coming from the airport, the number of passengers, and how many bags you are bringing.',
                'We confirm the price before you travel, so the figure you agree is the figure you pay — there is no meter running on the journey. Once confirmed you will have your driver\'s details ahead of arrival.',
                'If you are still deciding between towns, or weighing a transfer against a full day tour of the coast, say so in your enquiry and we will quote both so you can compare.',
            ]},
        ],
        faqs: [
            { q: 'How long is the taxi from Naples to Amalfi Coast?', a: 'The taxi from Naples to the Amalfi Coast takes approximately 1.5 hours (about 65 km), depending on traffic along the famous SS163 coastal road.' },
            { q: 'Which towns on the Amalfi Coast can you drop me off at?', a: 'We serve all Amalfi Coast towns, including Positano, Amalfi town, Ravello, Praiano, Maiori, and Cetara.' },
            { q: 'Is it safe to hire a taxi along the Amalfi Coast roads?', a: 'Yes. Our drivers are experts on the narrow, winding Amalfi Coast roads and hold all required local driving licenses for this unique terrain.' },
            { q: 'Which airport do I fly into for the Amalfi Coast?', a: 'Naples International Airport (Capodichino, IATA: NAP) is the main airport for the Amalfi Coast, about 65km/1.5 hours by road from Positano, Amalfi and Ravello. Salerno\'s small regional airport has very limited flights, so almost all visitors arrive via Naples.' },
            { q: 'Is it quicker to fly into Rome instead?', a: 'No. Rome is considerably further — our Rome to Amalfi and Rome to Positano transfers cover around 270 km and take three and a half to four hours, against about 1.5 hours from Naples. Fly into Naples if your itinerary allows it.' },
            { q: 'Can the driver take me right to my hotel door?', a: 'In most cases yes, but several towns have pedestrianised or stepped centres — Positano and Ravello in particular. Where vehicles are not permitted, your driver stops at the nearest legal access point and helps with your luggage from there.' },
            { q: 'How far in advance should I book an Amalfi Coast transfer?', a: 'As early as you can for July and August travel, when demand on the coast is at its peak. Outside those months there is more flexibility, but booking ahead still means a driver who knows the coastal road is confirmed.' },
        ],
        relatedLinks: [
            { href: '/distance/naples-to-amalfi-coast-distance', label: 'Naples to Amalfi Coast Distance Guide' },
            { href: '/airport/naples', label: 'Naples Airport transfer service' },
            { href: '/route/naples-airport-to-sorrento-taxi', label: 'Naples Airport to Sorrento transfer' },
            { href: '/route/naples-airport-to-positano-taxi', label: 'Transfers to Positano' },
            { href: '/route/naples-airport-to-amalfi-taxi', label: 'Amalfi town transfer' },
            { href: '/route/naples-airport-to-ravello-taxi', label: 'Continue up to Ravello' },
            { href: '/city/amalfi-coast', label: 'Our Amalfi Coast coverage' },
            { href: '/city/positano', label: 'Positano taxi service' },
            { href: '/city/ravello', label: 'Ravello taxi service' },
            { href: '/tour/amalfi-coast', label: 'A full-day Amalfi Coast tour' },
            { href: '/day-trips/naples-to-amalfi-coast-tour', label: 'Naples to Amalfi Coast day trip' },
        ],
    },
    {
        slug: 'rome-to-pompeii-taxi',
        from: 'Rome',
        to: 'Pompeii',
        title: 'Rome to Pompeii Taxi Transfer',
        hero_image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=60&w=1200',
        description: 'Visit the ancient ruins of Pompeii from Rome with a private taxi. Our dedicated driver will take you directly to Pompeii\'s main entrance, with flexible return options and a full-day tour available.',
        distance: '~240 km',
        duration: '~2.5 hours',
        highlights: ['Direct drop-off at Pompeii entrance', 'Day-trip or one-way options', 'Combine with Naples or Herculaneum', 'All tolls covered', 'Free cancellation up to 24h'],
        faqs: [
            { q: 'Can I do a day trip from Rome to Pompeii by taxi?', a: 'Yes, a popular option is a day-trip from Rome to Pompeii. We can drive you down in the morning, wait while you explore (typically 3-4 hours), then return to Rome in the evening.' },
            { q: 'How long does it take to drive from Rome to Pompeii?', a: 'The private taxi from Rome to Pompeii takes approximately 2.5 hours (about 240 km) via the A1 and A3 motorways.' },
            { q: 'Can I combine Pompeii and Naples in the same transfer?', a: 'Absolutely. Many clients visit Pompeii and then continue to Naples for the night, or vice versa. We can tailor the route to your itinerary.' },
        ],
        relatedLinks: [
            { href: '/distance/rome-to-pompeii-distance', label: 'Rome to Pompeii Distance Guide' },
        ],
    },
    {
        slug: 'venice-to-verona-taxi',
        from: 'Venice',
        to: 'Verona',
        title: 'Venice to Verona Taxi Transfer',
        hero_image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&q=60&w=1200',
        description: 'Travel from Venice to Verona by private taxi and discover the romantic city of Romeo and Juliet. A comfortable, direct transfer from Venice Mestre or Piazzale Roma to Verona\'s historic centre.',
        distance: '~115 km',
        duration: '~1.5 hours',
        highlights: ["Direct to Verona's historic centre", 'Pick-up from Piazzale Roma or Venice Mestre', 'All tolls covered', 'English-speaking driver', 'Free cancellation up to 24h'],
        faqs: [
            { q: 'How far is Verona from Venice by taxi?', a: 'Verona is approximately 115 km from Venice. The private taxi journey takes about 1.5 hours via the A4 motorway.' },
            { q: 'Can I get a taxi from Venice Airport to Verona?', a: 'Yes, we offer direct transfers from Venice Marco Polo Airport (VCE) to Verona. This journey is approximately 1 hour 20 minutes.' },
            { q: 'What are the top things to see in Verona on arrival?', a: 'Verona\'s highlights include Juliet\'s House (Casa di Giulietta), the Arena di Verona amphitheatre, Piazza delle Erbe, and the Scaligeri Castles — all easily walkable from the city centre.' },
        ],
        relatedLinks: [
            { href: '/distance/venice-to-verona-distance', label: 'Venice to Verona Distance Guide' },
        ],
    },
    {
        slug: 'milan-to-turin-taxi',
        from: 'Milan',
        to: 'Turin',
        title: 'Milan to Turin Taxi Transfer',
        hero_image: 'https://images.unsplash.com/photo-1549893072-4bc678117f45?auto=format&fit=crop&q=60&w=1200',
        description: 'Book a private taxi from Milan to Turin for a smooth, direct transfer between Northern Italy\'s two major cities. Professional driver and door-to-door service from hotel, office, or airport.',
        distance: '~140 km',
        duration: '~1.5 hours',
        highlights: ['Direct city-to-city transfer', 'Available from MXP & LIN airports', 'All tolls covered', 'Professional licensed driver', 'Free cancellation up to 24h'],
        faqs: [
            { q: 'How long is the drive from Milan to Turin?', a: 'The private taxi from Milan to Turin takes approximately 1.5 hours (about 140 km) via the A4 motorway.' },
            { q: 'Can I book a taxi from Milan Malpensa Airport to Turin?', a: 'Yes, we offer direct transfers from Milan Malpensa Airport (MXP) to Turin. The journey takes approximately 1 hour 40 minutes.' },
            { q: 'How do I get a quote for Milan to Turin taxi?', a: 'Submit your travel details via the booking form and the driver will send you a confirmed quote. No obligation to book until you accept.' },
        ],
        relatedLinks: [
            { href: '/distance/milan-to-turin-distance', label: 'Milan to Turin Distance Guide' },
            { href: '/blog/turin-airport-transfers-ski', label: 'Turin Airport to the Ski Resorts' },
        ],
    },
    {
        slug: 'rome-to-vatican-taxi',
        from: 'Rome',
        to: 'Vatican',
        title: 'Rome to Vatican Taxi Transfer',
        hero_image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&q=60&w=1200',
        description: 'Get a private taxi from anywhere in Rome directly to Vatican City. Avoid Rome\'s busy metro and reach the Vatican Museums, St. Peter\'s Basilica, and the Sistine Chapel\'s entrance in complete comfort.',
        distance: '~5-15 km',
        duration: '~15-30 min',
        highlights: ['Drop-off at Vatican Museums entrance', 'Flexible pickup from any Rome address', 'NCC-licensed drivers (ZTL access)', 'No meter surprises', 'Free cancellation up to 24h'],
        faqs: [
            { q: 'How do I book a taxi from Rome to the Vatican?', a: 'Simply enter your pickup address and select Vatican City as your destination in the booking form. The driver will confirm your quote and arrival time.' },
            { q: 'Can you drop me directly at the Vatican Museums entrance?', a: 'Yes, our drivers know exactly where to drop you for quick access to the Vatican Museums entrance on Viale Vaticano, avoiding the long queues at St. Peter\'s Square.' },
            { q: 'Do your drivers have access to Rome\'s restricted traffic zones?', a: 'Yes. All our drivers hold an NCC (Noleggio Con Conducente) license, which grants access to restricted traffic zones (ZTL) in Rome\'s historic centre.' },
        ],
        relatedLinks: [
            { href: '/distance/rome-to-vatican-distance', label: 'Rome to Vatican Distance Guide' },
        ],
    },
    {
        slug: 'florence-to-siena-taxi',
        from: 'Florence',
        to: 'Siena',
        title: 'Florence to Siena Taxi Transfer',
        hero_image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=60&w=1200',
        description: 'Discover medieval Siena with a private taxi from Florence. Travel through the beautiful Chianti wine region and arrive at Siena\'s stunning Piazza del Campo with a professional driver.',
        distance: '~70 km',
        duration: '~1.5 hours',
        highlights: ['Scenic Chianti wine country route', 'Drop-off at Piazza del Campo', 'Day-trip options available', 'English-speaking driver', 'Free cancellation up to 24h'],
        faqs: [
            { q: 'How far is Siena from Florence by taxi?', a: 'Siena is approximately 70 km from Florence. The private taxi journey takes about 1 hour via the Superstrada, or 1.5 hours via the scenic Chianti Classico route.' },
            { q: 'Can I do a day trip from Florence to Siena?', a: 'Yes, a day trip from Florence to Siena is very popular. We can drive you in the morning, wait in the area, and return you to Florence in the evening.' },
            { q: 'Can I combine Siena and San Gimignano in one day?', a: 'Absolutely. Both medieval towns are nearby and make for a wonderful full-day Tuscan excursion from Florence, with stops in Chianti wine country along the way.' },
        ],
        relatedLinks: [
            { href: '/distance/florence-to-siena-distance', label: 'Florence to Siena Distance Guide' },
        ],
    },

    // ─── Batch 1: 30 commercial route pages (indicative prices + travel times) ───
    {
        slug: 'rome-fiumicino-to-sorrento-taxi', from: 'Rome Fiumicino Airport', to: 'Sorrento',
        title: 'Rome Fiumicino to Sorrento Taxi Transfer', hero_image: '/images/rome airport.webp',
        description: 'Private door-to-door transfer from Rome Fiumicino Airport (FCO) to Sorrento. Skip the train changes and travel straight to the Sorrento coast with an English-speaking driver, with an optional Pompeii stop on the way.',
        distance: '~280 km', duration: '~3 hours 30 min', price: '€330',
        highlights: ['Meet & greet at Fiumicino arrivals', 'Flight tracking included', 'Optional Pompeii stop en route', 'Door-to-door to your Sorrento hotel', 'Fixed all-inclusive price'],
        faqs: [
            { q: 'How long is the transfer from Rome Fiumicino to Sorrento?', a: 'The drive is about 3 hours 30 minutes (around 280 km) via the A1 and A3 motorways, depending on traffic. We track your flight so the driver is ready when you land.' },
            { q: 'Can we stop at Pompeii on the way to Sorrento?', a: 'Yes — a Pompeii stop is a popular add-on to this route, breaking up the journey with a visit to the ruins before continuing to Sorrento.' },
            { q: 'Is the Rome to Sorrento transfer price fixed?', a: 'Yes, the indicative price shown is a fixed, all-inclusive fare per vehicle agreed in advance, covering tolls and meet & greet. Confirm your exact quote when booking.' },
        ],
        relatedLinks: [
            { href: '/distance/rome-fiumicino-to-sorrento-distance', label: 'Rome Fiumicino to Sorrento Distance Guide' },
        ],
    },
    {
        slug: 'rome-fiumicino-to-civitavecchia-taxi', from: 'Rome Fiumicino Airport', to: 'Civitavecchia Port',
        title: 'Rome Fiumicino to Civitavecchia Port Taxi Transfer', hero_image: '/images/cruise-port-transfer.webp',
        description: 'Direct private transfer from Rome Fiumicino Airport to Civitavecchia cruise port. Ideal for cruise passengers who need to reach their ship quickly and reliably, with flight tracking and a confirmed pickup time.',
        distance: '~70 km', duration: '~1 hour', price: '€110',
        highlights: ['Airport-to-ship direct transfer', 'Flight tracking for cruise embarkation', 'Help with luggage', 'No train changes', 'Fixed all-inclusive price'],
        faqs: [
            { q: 'How long does it take from Fiumicino to Civitavecchia?', a: 'About 1 hour by road (around 70 km), making it the fastest, most reliable way to reach your cruise on embarkation day.' },
            { q: 'Is this transfer good for catching a cruise?', a: 'Yes — it is one of our most popular cruise-day transfers. We track your flight and build in a buffer so you reach the ship with time to spare.' },
            { q: 'Can you collect me if my flight is delayed?', a: 'Yes, your booking is linked to your flight number and the pickup is re-timed automatically to your actual landing.' },
        ],
        relatedLinks: [
            { href: '/distance/rome-fiumicino-to-civitavecchia-distance', label: 'Rome Fiumicino to Civitavecchia Distance Guide' },
        ],
    },
    {
        slug: 'naples-airport-to-sorrento-taxi', from: 'Naples Airport', to: 'Sorrento',
        title: 'Naples Airport to Sorrento Taxi Transfer', hero_image: '/images/almafi.webp',
        seoTitleAbsolute: 'Naples Airport to Sorrento Taxi Transfer | Reserve Your Ride', // 60 chars
        description: 'Private transfer from Naples Capodichino Airport (NAP) to Sorrento. The easiest, most comfortable way to reach the Sorrento peninsula, avoiding the crowded Circumvesuviana train with door-to-door service.',
        distance: '~50 km', duration: '~1 hour 15 min', price: '€110',
        highlights: ['Meet & greet at Naples arrivals', 'Door-to-door to your Sorrento hotel', 'Child seats on request', 'Avoid the crowded train', 'Fixed all-inclusive price'],
        vehicleOptions: true,
        sections: [
            { h2: 'Meeting Your Driver at Naples Airport', p: [
                'Naples Capodichino (NAP) is a single-terminal airport, which makes the meeting point simple. Once you have collected your bags and cleared customs, walk through into the arrivals hall — your driver will be waiting there holding a sign with your name, near the taxi and shuttle bus area.',
                'Your flight is tracked from departure at your origin airport, so a delay or an early landing is picked up automatically and your driver\'s timing adjusts. The first 60 minutes of waiting after you land are included, and Capodichino is a compact airport where bags usually arrive within 15 to 20 minutes, so most passengers are out well inside that window.',
                'You will have your driver\'s contact details before you arrive, so if immigration or baggage reclaim takes longer than expected you can message them directly rather than wondering whether anyone is still waiting.',
            ]},
            { h2: 'Private Transfer or the Circumvesuviana Train?', p: [
                'It is worth being straightforward about this: the train is cheaper. The Circumvesuviana line runs from Naples to Sorrento and costs a few euros. If you are travelling light and on a tight budget, it is a reasonable option.',
                'The practical problem is that it does not start at the airport. You first have to get from Capodichino into the city to reach the line at Napoli Garibaldi, then take a regional service that is frequently crowded, has no luggage racks and no reserved seating, and stops at every station along the bay. With suitcases, in summer heat, after a long flight, it is a demanding end to a travel day.',
                'The private transfer replaces all of that with one door-to-door journey of about an hour and a quarter, with your luggage in the boot and a fixed price agreed beforehand. Most people booking this route are paying for the absence of connections rather than for speed alone.',
            ]},
            { h2: 'Sorrento Drop-off and Hotel Access', p: [
                'Sorrento is more car-friendly than the Amalfi Coast towns further along the peninsula, but the centre still has restricted-access streets, and several of the best-known hotels sit on the cliff terraces above the marina with narrow approach roads.',
                'Your driver will take you as close to the entrance as vehicles are permitted and help with your luggage from there. For most Sorrento addresses that means the hotel door; for a handful of properties in the old town it means a short walk along a pedestrian street.',
                'Giving us the hotel name rather than just "Sorrento" when you book lets the driver plan the right approach, which matters most on summer evenings when the centre is busiest.',
            ]},
            { h2: 'Ferry Connections from Sorrento', p: [
                'Sorrento\'s Marina Piccola is one of the main departure points for ferries and hydrofoils across the Bay of Naples, with Capri the most popular crossing. If your plan is to land at Naples and sail the same day, build in a real buffer between the two.',
                'The road transfer alone is about an hour and a quarter, and that assumes normal traffic. Add baggage reclaim, and add more time in July and August when the coast road is busy. Sailings can also be cancelled at short notice in poor sea conditions, which is worth knowing before you commit to a same-day connection.',
                'If Capri is your final destination, we also quote the combined journey — the road leg to the port plus the ferry crossing — so you can compare that against an overnight stop in Sorrento first.',
            ]},
            { h2: 'Continuing to Positano, Praiano or Amalfi', p: [
                'Plenty of guests use Sorrento as a staging point and continue along the coast. From Naples Airport, Positano is about 60 km and an hour and a half, Praiano a similar hour and a half, and Amalfi town roughly 70 km and an hour and three quarters.',
                'If you are staying beyond Sorrento, book the full journey rather than stopping short — the SS163 coastal road is the slow part, and splitting the trip rarely saves anything. Tell us the final town and hotel and we will quote the whole transfer.',
                'A short hop from Sorrento to Positano later in your stay is also a common booking, at about 20 km and 40 to 50 minutes depending on the coastal traffic.',
            ]},
            { h2: 'Adding a Stop at Pompeii on the Way', p: [
                'Pompeii sits almost directly between Naples Airport and Sorrento, which makes it the most practical stop-off on this route. The airport-to-Pompeii leg alone is around 30 km and about 40 minutes, so adding the site to your transfer costs far less time than returning to it as a separate day trip.',
                'This works best for afternoon arrivals with a reasonable amount of daylight left, and it does mean your luggage stays in the vehicle while you visit. Tell us at the time of booking if you want the stop included, so the driver allows for it and we can quote the waiting time properly.',
                'If your flight lands late, or you would rather see the site unhurried, a dedicated Pompeii transfer from Sorrento on another day is usually the better plan.',
            ]},
        ],
        faqs: [
            { q: 'How far is Sorrento from Naples Airport?', a: 'Sorrento is about 50 km from Naples Airport, a drive of roughly 1 hour 15 minutes depending on traffic along the coast road.' },
            { q: 'Is a private transfer better than the train to Sorrento?', a: 'For comfort and luggage, yes. The private transfer is door-to-door with no changes, while the Circumvesuviana train is crowded and requires connections.' },
            { q: 'Can you continue to Positano or Amalfi?', a: 'Absolutely — we cover the whole Amalfi Coast. Just tell us your final destination and we will quote the full transfer.' },
            { q: 'Where exactly do I meet the driver at Naples Airport?', a: 'Naples Capodichino has a single terminal. After baggage reclaim and customs, your driver waits in the arrivals hall with a sign showing your name, near the taxi and shuttle area. You will have their contact details before you land.' },
            { q: 'Can we stop at Pompeii on the way to Sorrento?', a: 'Yes, and it is the most practical stop on this route since Pompeii lies between the airport and Sorrento. Ask for it when you book so the driver allows for the visit and we can quote the waiting time.' },
            { q: 'How much time should I leave before a ferry from Sorrento?', a: 'More than the journey time alone. The road transfer is about 1 hour 15 minutes before you add baggage reclaim, and the coast road is slower in July and August. Ferries can also be cancelled in poor sea conditions, so a same-day connection needs a genuine buffer.' },
            { q: 'Will the driver wait if my flight is delayed?', a: 'Yes. Your flight is tracked from departure at your origin airport and the first 60 minutes of waiting after landing are included. Any longer wait is agreed with you in advance rather than charged afterwards.' },
        ],
        relatedLinks: [
            { href: '/distance/naples-airport-to-sorrento-distance', label: 'Naples Airport to Sorrento Distance Guide' },
            { href: '/airport/naples', label: 'Naples Airport transfers' },
            { href: '/city/sorrento', label: 'Sorrento taxi service' },
            { href: '/route/naples-airport-to-positano-taxi', label: 'Naples Airport to Positano' },
            { href: '/route/naples-airport-to-amalfi-taxi', label: 'Onward to Amalfi town' },
            { href: '/route/naples-airport-to-capri-taxi', label: 'Reaching Capri via the ferry port' },
            { href: '/route/sorrento-to-positano-taxi', label: 'Sorrento to Positano transfer' },
            { href: '/route/naples-airport-to-pompeii-taxi', label: 'Add a Pompeii stop en route' },
            { href: '/attraction-transfer/pompeii-taxi-transfer', label: 'Pompeii transfer service' },
            { href: '/route/naples-cruise-port-to-sorrento-taxi', label: 'Arriving by cruise ship instead' },
            { href: '/route/naples-to-amalfi-coast-taxi', label: 'Naples to the wider Amalfi Coast' },
        ],
    },
    {
        slug: 'naples-airport-to-positano-taxi', from: 'Naples Airport', to: 'Positano',
        title: 'Naples Airport to Positano Taxi Transfer', hero_image: '/images/almafi.webp',
        description: 'Private transfer from Naples Airport to Positano along the famous Amalfi Coast road. Let an experienced local driver handle the hairpin bends while you enjoy the views, with door-to-door drop-off at your Positano accommodation.',
        distance: '~60 km', duration: '~1 hour 30 min', price: '€140',
        highlights: ['Experienced Amalfi coast-road driver', 'Door-to-door to your Positano hotel', 'Photo stops on request', 'Luggage assistance on the steps', 'Fixed all-inclusive price'],
        faqs: [
            { q: 'How long is the drive from Naples Airport to Positano?', a: 'About 1 hour 30 minutes (around 60 km), longer in peak summer traffic on the narrow coast road. A private driver makes the winding route stress-free.' },
            { q: 'Why not drive myself to Positano?', a: 'The SS163 coast road is narrow, busy and demanding, with very limited parking in Positano. A private driver removes the stress and the parking problem entirely.' },
            { q: 'Can the driver help with luggage in Positano?', a: 'Yes. Positano is built on steep steps, so the driver will help you get as close as possible and assist with your bags.' },
        ],
        relatedLinks: [
            { href: '/distance/naples-airport-to-positano-distance', label: 'Naples Airport to Positano Distance Guide' },
        ],
    },
    {
        slug: 'naples-airport-to-amalfi-taxi', from: 'Naples Airport', to: 'Amalfi',
        title: 'Naples Airport to Amalfi Taxi Transfer', hero_image: '/images/almafi.webp',
        description: 'Private door-to-door transfer from Naples Airport to the town of Amalfi. Travel the scenic coast road in comfort with a professional driver and arrive relaxed at the heart of the Amalfi Coast.',
        distance: '~70 km', duration: '~1 hour 45 min', price: '€150',
        highlights: ['Scenic Amalfi Coast route', 'Door-to-door to your Amalfi hotel', 'Optional Ravello extension', 'Child seats on request', 'Fixed all-inclusive price'],
        faqs: [
            { q: 'How long does it take to reach Amalfi from Naples Airport?', a: 'Around 1 hour 45 minutes (about 70 km) via the coast road, depending on the season and traffic.' },
            { q: 'Can I add a stop in Ravello?', a: 'Yes, Ravello is just above Amalfi and is a popular add-on for its gardens and panoramic views.' },
            { q: 'Is the coast road difficult?', a: 'It is narrow and winding, which is exactly why a local private driver is the recommended way to travel it comfortably and safely.' },
        ],
        relatedLinks: [
            { href: '/distance/naples-airport-to-amalfi-distance', label: 'Naples Airport to Amalfi Distance Guide' },
            { href: '/blog/amalfi-coast-with-family-private-driver', label: 'Exploring the Amalfi Coast with Family' },
        ],
    },
    {
        slug: 'naples-airport-to-pompeii-taxi', from: 'Naples Airport', to: 'Pompeii',
        title: 'Naples Airport to Pompeii Taxi Transfer', hero_image: '/images/naples.webp',
        description: 'Quick private transfer from Naples Airport to the Pompeii archaeological site. Perfect for visiting the ruins on arrival or departure day, with door-to-door drop-off right by the entrance.',
        distance: '~30 km', duration: '~40 min', price: '€70',
        highlights: ['Direct to the Pompeii entrance', 'Great for arrival-day sightseeing', 'Optional Vesuvius add-on', 'Luggage stored during your visit', 'Fixed all-inclusive price'],
        faqs: [
            { q: 'How far is Pompeii from Naples Airport?', a: 'Pompeii is about 30 km from Naples Airport, a short drive of roughly 40 minutes, making it easy to visit on arrival or departure day.' },
            { q: 'Can the driver wait while I tour Pompeii?', a: 'Yes — with a round-trip or hourly booking the driver waits and then takes you onward, storing your luggage safely in the vehicle.' },
            { q: 'Can I combine Pompeii with Vesuvius?', a: 'Yes, Mount Vesuvius is nearby and a popular combined excursion with Pompeii.' },
        ],
        relatedLinks: [
            { href: '/distance/naples-airport-to-pompeii-distance', label: 'Naples Airport to Pompeii Distance Guide' },
        ],
    },
    {
        slug: 'milan-malpensa-to-como-taxi', from: 'Milan Malpensa Airport', to: 'Como',
        title: 'Milan Malpensa to Como Taxi Transfer', hero_image: '/images/Lake Como.webp',
        description: 'Private transfer from Milan Malpensa Airport directly to Lake Como. Malpensa is closer to the lake than to Milan, so skip the city and head straight to Como, Bellagio or Varenna with a professional driver.',
        distance: '~50 km', duration: '~50 min', price: '€120',
        highlights: ['Straight to the lake — skip Milan', 'Drop-off at Como, Bellagio or Varenna', 'Flight tracking included', 'Luggage assistance', 'Fixed all-inclusive price'],
        faqs: [
            { q: 'How far is Lake Como from Malpensa Airport?', a: 'Como is about 50 km from Malpensa, roughly a 50-minute drive — often quicker than reaching central Milan.' },
            { q: 'Can you take me to Bellagio or Varenna?', a: 'Yes, we drop off at any town on Lake Como, including the centre-lake villages of Bellagio, Varenna and Menaggio.' },
            { q: 'Is a transfer better than the train to Como?', a: 'For luggage and the mid-lake villages, yes. A direct transfer avoids train changes and gets you to your exact hotel.' },
        ],
        relatedLinks: [
            { href: '/distance/milan-malpensa-to-como-distance', label: 'Milan Malpensa to Como Distance Guide' },
            { href: '/route/milan-to-lake-como-taxi', label: 'Milan to Lake Como transfer' },
        ],
    },
    {
        slug: 'milan-malpensa-to-stresa-taxi', from: 'Milan Malpensa Airport', to: 'Stresa',
        title: 'Milan Malpensa to Stresa (Lake Maggiore) Taxi Transfer', hero_image: '/images/Lake Como.webp',
        description: 'Private transfer from Milan Malpensa Airport to Stresa on Lake Maggiore. Reach the gateway to the Borromean Islands quickly and comfortably with a door-to-door private car.',
        distance: '~40 km', duration: '~45 min', price: '€110',
        highlights: ['Gateway to the Borromean Islands', 'Very short transfer from Malpensa', 'Door-to-door to your lakeside hotel', 'Flight tracking included', 'Fixed all-inclusive price'],
        faqs: [
            { q: 'How far is Stresa from Malpensa Airport?', a: 'Stresa is only about 40 km from Malpensa, a quick 45-minute drive, making Lake Maggiore one of the easiest lakes to reach from the airport.' },
            { q: 'Can I reach the Borromean Islands from Stresa?', a: 'Yes, Stresa is the main departure point for boats to the Borromean Islands — we drop you right by the waterfront.' },
            { q: 'Is this transfer available for early flights?', a: 'Yes, we operate 24/7 and track your flight, so early or late arrivals are no problem.' },
        ],
        relatedLinks: [
            { href: '/distance/milan-malpensa-to-stresa-distance', label: 'Milan Malpensa to Stresa Distance Guide' },
        ],
    },
    {
        slug: 'pisa-airport-to-florence-taxi', from: 'Pisa Airport', to: 'Florence',
        title: 'Pisa Airport to Florence Taxi Transfer', hero_image: '/images/Tuscany Wine.webp',
        description: 'Private transfer from Pisa Airport (PSA) to Florence. Travel directly to your Florence hotel in under an hour, with an optional stop at the Leaning Tower of Pisa on the way.',
        distance: '~85 km', duration: '~1 hour', price: '€150',
        highlights: ['Door-to-door to central Florence', 'Optional Leaning Tower stop', 'ZTL-compliant hotel drop-off', 'Flight tracking included', 'Fixed all-inclusive price'],
        faqs: [
            { q: 'How long is the transfer from Pisa Airport to Florence?', a: 'About 1 hour (around 85 km) via the FI-PI-LI expressway and A11 motorway, direct to your Florence accommodation.' },
            { q: 'Can I stop at the Leaning Tower on the way?', a: 'Yes, a short stop at Piazza dei Miracoli is a popular add-on before continuing to Florence.' },
            { q: 'Can you drop me inside Florence\'s ZTL?', a: 'Yes — as a licensed service we can access the limited-traffic zone to reach your hotel door, which rental cars cannot do.' },
        ],
        relatedLinks: [
            { href: '/distance/pisa-airport-to-florence-distance', label: 'Pisa Airport to Florence Distance Guide' },
        ],
    },
    {
        slug: 'pisa-airport-to-lucca-taxi', from: 'Pisa Airport', to: 'Lucca',
        title: 'Pisa Airport to Lucca Taxi Transfer', hero_image: '/images/Tuscany Wine.webp',
        description: 'Quick private transfer from Pisa Airport to the walled city of Lucca. A short, scenic drive door-to-door to one of Tuscany\'s most charming and relaxed destinations.',
        distance: '~25 km', duration: '~30 min', price: '€60',
        highlights: ['Very short transfer from Pisa', 'Door-to-door to central Lucca', 'Great gateway to northern Tuscany', 'Flight tracking included', 'Fixed all-inclusive price'],
        faqs: [
            { q: 'How far is Lucca from Pisa Airport?', a: 'Lucca is only about 25 km from Pisa Airport, a quick 30-minute drive — one of the easiest Tuscan transfers.' },
            { q: 'Can I combine Pisa and Lucca in one trip?', a: 'Yes, many travellers see the Leaning Tower and then continue to Lucca, or do both as a day trip with a private driver.' },
            { q: 'Is Lucca worth visiting?', a: 'Absolutely — its intact Renaissance walls, towers and relaxed atmosphere make it a favourite, quieter alternative to the bigger Tuscan cities.' },
        ],
        relatedLinks: [
            { href: '/distance/pisa-airport-to-lucca-distance', label: 'Pisa Airport to Lucca Distance Guide' },
        ],
    },
    {
        slug: 'catania-airport-to-taormina-taxi', from: 'Catania Airport', to: 'Taormina',
        title: 'Catania Airport to Taormina Taxi Transfer', hero_image: '/images/beach-transfer.webp',
        seoTitleAbsolute: 'Catania Airport to Taormina Taxi Transfer | Book Your Driver', // 60 chars
        description: 'Private transfer from Catania Airport (CTA) to the clifftop resort of Taormina. The fastest, most comfortable way to reach Sicily\'s most famous town, with door-to-door service and optional Mount Etna views.',
        distance: '~60 km', duration: '~1 hour', price: '€90',
        highlights: ['Door-to-door to Taormina centre', 'Drop-off near the pedestrian zone', 'Optional Mount Etna add-on', 'English-speaking Sicilian driver', 'Fixed all-inclusive price'],
        vehicleOptions: true,
        sections: [
            { h2: 'Meeting Your Driver at Catania Airport', p: [
                'Catania Fontanarossa (CTA) handles scheduled arrivals at Terminal A, and the airport sits immediately south of the city, so you are on the road within minutes of clearing the terminal. After baggage reclaim, come through into the arrivals hall where your driver will be waiting with a sign showing your name near the exit.',
                'The drive to Taormina takes about an hour and covers roughly 60 km, running north along the coastal motorway before the final climb up to the town. Your flight is tracked from departure, so a delay does not cost you the transfer, and the first 60 minutes of waiting after landing are included.',
                'CTA rather than Palermo is the right arrival airport for Taormina — Palermo is on the opposite side of the island and adds hours to the journey.',
            ]},
            { h2: 'Taormina\'s Pedestrian Zone and Where the Driver Can Stop', p: [
                'Taormina\'s historic centre, the stretch of Corso Umberto between Porta Messina and Porta Catania, is pedestrianised. No vehicle can drive to a hotel door on that street, so the drop-off is at the nearest permitted access point and your driver helps with luggage from there.',
                'Which access point depends on where you are staying. Hotels towards the northern end of the centre are reached via Porta Messina, while those at the southern end are closer to Porta Catania and the car park below it. The walk is usually short, but Taormina is built on a slope and some of it is stepped.',
                'Give us the hotel name when you book rather than just "Taormina". It lets the driver approach from the correct side of the town, which is the difference between a two-minute walk and a ten-minute one with cases.',
            ]},
            { h2: 'Hillside Hotels and Mazzarò Beach: Two Different Destinations', p: [
                'This is the single most common source of confusion on this route. Taormina is effectively two places: the historic town on the clifftop, and Mazzarò with its beaches and seafront hotels directly below it. They are linked by a cable car, and they are not interchangeable arrival points.',
                'If your hotel is at Mazzarò, Spisone or Letojanni on the shoreline, your driver takes the coast road rather than climbing to the town — a different approach entirely. Arriving at the wrong level means either a cable car ride with your luggage or a long walk down a series of hairpins.',
                'So when you book, say whether you are staying up in the town or down at the beach. It is a one-line detail that determines the whole final stretch of the journey.',
            ]},
            { h2: 'Combining Taormina with Mount Etna', p: [
                'Etna is the other reason most people fly into Catania, and it is close enough to combine with your transfer. From CTA the mountain is about 45 km and roughly an hour inland, so a stop on the way to Taormina is feasible for daytime arrivals with luggage in the vehicle.',
                'For most visitors a separate excursion works better. You get the time to take the cable car and the mountain roads properly, without a flight day behind you, and you are not carrying suitcases. The volcano is also weather-dependent at altitude, so having a flexible date helps.',
                'Either way, tell us what you have in mind and we will quote it. Note that conditions on Etna can change quickly and access to the upper areas is controlled locally, so no specific summit access can be promised in advance.',
            ]},
            { h2: 'The Return Transfer and Timing Your Departure Flight', p: [
                'The return leg from Taormina down to Catania Airport is quoted separately and runs about 55 km in roughly 50 minutes — slightly quicker than the inbound trip, since the climb into town is replaced by the descent.',
                'Build in more time than that figure suggests. You need to get from your hotel to the permitted pickup point first, and if you are staying in the pedestrian centre that may involve the walk and the slope again with luggage. Summer mornings on the coast road are also slower.',
                'A practical rule for this route: work backwards from your flight, add the 50-minute drive, then add a further half hour for getting out of the town itself. Arrange the pickup time with us and we will confirm what works for your departure.',
            ]},
            { h2: 'Vehicles, Luggage and Group Size', p: [
                'Vehicle choice matters more here than on a flat motorway run, because the approach to Taormina involves narrow streets and tight turns. Telling us your group size and luggage count up front means the right vehicle is assigned rather than the nearest one.',
                'If you are a larger group, or travelling with oversized items such as golf clubs, skis or a child\'s pushchair, mention it in the enquiry. The same applies to child seats, which we fit on request but need to know about in advance.',
                'The vehicle options available on this route are listed above. All of them are quoted at a fixed all-inclusive price agreed before you travel, so there is no meter and no surcharge on arrival.',
            ]},
        ],
        faqs: [
            { q: 'How long is the transfer from Catania Airport to Taormina?', a: 'About 1 hour (around 60 km) along the coastal motorway, with the dramatic approach up to the clifftop town.' },
            { q: 'Can the driver get close to my Taormina hotel?', a: 'Taormina\'s historic centre is pedestrianised, so the driver drops you as close as legally possible and helps with luggage.' },
            { q: 'Can I add a Mount Etna visit?', a: 'Yes, Etna is a popular combined excursion — ask us about a Taormina-and-Etna day tour.' },
            { q: 'My hotel is at Mazzarò beach, not in Taormina town. Does that change the transfer?', a: 'Yes, and it is important to tell us. The clifftop town and the Mazzarò seafront below it are reached by different roads. Staying at Mazzarò, Spisone or Letojanni means your driver takes the coast road instead of climbing to the town.' },
            { q: 'Should I fly into Catania or Palermo for Taormina?', a: 'Catania. It is about 60 km and an hour from Taormina, while Palermo is on the opposite side of Sicily and adds several hours to the journey.' },
            { q: 'How long is the return trip to the airport?', a: 'The return from Taormina is quoted separately at about 55 km and roughly 50 minutes. Allow extra time to reach the pickup point from a hotel inside the pedestrian zone.' },
            { q: 'What happens if my flight into Catania is delayed?', a: 'Your flight is tracked from departure at your origin airport, so your driver adjusts automatically. The first 60 minutes of waiting after landing are included, and any longer wait is agreed with you in advance.' },
        ],
        relatedLinks: [
            { href: '/distance/catania-airport-to-taormina-distance', label: 'Catania Airport to Taormina Distance Guide' },
            { href: '/airport/catania-fontanarossa', label: 'Catania Airport transfer service' },
            { href: '/city/taormina', label: 'Taormina taxi service' },
            { href: '/route/taormina-to-catania-airport-taxi', label: 'The return transfer to the airport' },
            { href: '/route/catania-airport-to-mount-etna-taxi', label: 'Mount Etna transfers' },
            { href: '/attraction-transfer/mount-etna-taxi-transfer', label: 'A guided Etna excursion' },
            { href: '/beach-transfer/taormina-beach-transfer', label: 'Taormina beach transfers' },
            { href: '/route/catania-airport-to-syracuse-taxi', label: 'Continuing south to Syracuse' },
        ],
    },
    {
        slug: 'verona-airport-to-lake-garda-taxi', from: 'Verona Airport', to: 'Lake Garda',
        title: 'Verona Airport to Lake Garda Taxi Transfer', hero_image: '/images/Lake Como.webp',
        seoTitleAbsolute: 'Verona Airport to Lake Garda Taxi | Book Now',
        metaDescription: 'Private Verona Airport to Lake Garda transfers — Peschiera 25 km, Sirmione 30 km, Riva 85 km. Fixed price, flight tracked, door to door.',
        description: 'Private transfer from Verona Villafranca Airport to Lake Garda. Reach Sirmione, Bardolino, Lazise or any lakeside resort quickly with a door-to-door private car.',
        distance: '~35 km', duration: '~40 min', price: '€70',
        highlights: ['Closest airport to Lake Garda', 'Drop-off at any lakeside resort', 'Short, easy transfer', 'Flight tracking included', 'Fixed all-inclusive price'],
        vehicleOptions: true,
        sections: [
            { h2: 'Which Lake Garda Town Are You Staying In?', p: [
                'Verona Villafranca is the closest airport to Lake Garda, but "Lake Garda" covers a lot of ground — the lake runs roughly 50 km north to south, and the town you are staying in changes the journey substantially.',
                'On this site’s published figures for each route, Peschiera del Garda is about 25 km from the airport and roughly 30 minutes. Lazise is about 28 km and 35 minutes, Sirmione and Bardolino about 30 km and 35 minutes, and Desenzano del Garda about 35 km and 40 minutes. Those are all on the southern basin, where the lake is wide and the roads are fast.',
                'Head north and it changes: Malcesine is about 60 km and an hour and ten minutes, and Riva del Garda at the very top of the lake is about 85 km and an hour and twenty. The road narrows and follows the shoreline beneath the cliffs, so the extra time is the route, not just the distance.',
            ]},
            { h2: 'Meeting Your Driver at Verona Airport', p: [
                'Verona Villafranca (VRN) sits about 10 km south-west of Verona and works from a single passenger terminal, which keeps the arrival simple. Once you have collected your luggage, your driver will be waiting in the arrivals hall with a sign showing your name.',
                'Your flight is tracked from departure at your origin airport, so a delayed or early landing is picked up automatically and the pickup time adjusts. The first 60 minutes of waiting after an international landing are included at no charge, and domestic arrivals include 30 minutes on the same basis — both measured from actual landing rather than the scheduled time.',
                'The public alternative is the airport shuttle bus to Verona Porta Nuova station, from which lake destinations need a further train or bus connection. For anyone with luggage or a family, the direct transfer removes both changes.',
            ]},
            { h2: 'Southern Basin or Northern Lake?', p: [
                'The two halves of Garda suit different trips, and it is worth knowing which you have booked. The southern towns — Peschiera, Sirmione, Lazise, Bardolino, Desenzano — are closest to the airport, flattest, busiest, and the easiest base for a short stay or a family holiday.',
                'The northern lake around Malcesine, Limone and Riva del Garda is mountainous, with the cliffs dropping straight to the water. It is the part people come to for windsurfing, sailing and hiking, and it is noticeably further from Verona.',
                'If you are deciding between the two, the transfer time is a genuine factor: the difference between Peschiera and Riva del Garda is roughly fifty minutes each way.',
            ]},
            { h2: 'Hotel Access and Lakeside Drop-off', p: [
                'Most Garda hotels are reachable directly by car, which makes this an easier arrival than some Italian lakes. The exceptions are worth flagging: Sirmione’s historic centre sits on a narrow peninsula behind a castle gate with restricted vehicle access, and Malcesine’s old town is similarly tight.',
                'Where the hotel entrance cannot be reached, your driver stops at the nearest permitted point and helps with luggage from there. Giving us the hotel name rather than just the town lets the approach be planned in advance.',
                'If anyone in your group has limited mobility, say so when booking — access varies considerably between a modern lakeside resort and a property inside a historic centre.',
            ]},
            { h2: 'Seasonal Traffic on the Lake Roads', p: [
                'Lake Garda is one of the busiest summer destinations in northern Italy, and the lakeside roads carry far more traffic in July and August than they were built for. A transfer that takes thirty-five minutes in April can take considerably longer on a August weekend.',
                'Our own guidance for departures from Verona in summer is to allow extra time for Lake Garda traffic when planning the return leg to the airport. If you are connecting to a flight, build in a genuine buffer rather than the minimum journey time.',
                'Spring and autumn are the easiest times to travel the lake by road, and the towns are far quieter.',
                'Out of season the lakeside roads are clear and a southern-shore transfer runs close to its quickest time. Many lakeside hotels and some lake ferry services operate reduced winter schedules, so it is worth confirming your hotel is open before booking the transfer.',
                'Journeys on 24–26 December, 31 December and 1 January may carry a surcharge, as may any journey starting between 22:00 and 06:00 or falling on an Italian public holiday. Where one applies it is shown in your quote before you book, never added afterwards. Christmas is one of the busiest booking periods of the year, so reserve further ahead than the 24 hours we normally suggest.',
            ]},
            { h2: 'Booking, Price and Cancellation', p: [
                'This transfer is quoted as a fixed all-inclusive fare, confirmed before you travel and covering motorway tolls, fuel and parking — the figure you agree is the figure you pay, with nothing added at the end of the journey without your prior agreement.',
                'Journeys starting between 22:00 and 06:00 and on Italian public holidays can carry a surcharge; where one applies it is shown in your quote before you book. Bookings cancelled more than 24 hours before pickup are refunded in full.',
                'To get an accurate quote first time, include your lake town and hotel name, your flight number, the number of passengers and how much luggage you are bringing. Child seats are fitted on request if you tell us in advance.',
            ]},
        ],
        faqs: [
            { q: 'How far is Lake Garda from Verona Airport?', a: 'It depends on your town. On our published route figures, Peschiera del Garda is about 25 km and 30 minutes, Lazise about 28 km and 35 minutes, Sirmione and Bardolino about 30 km and 35 minutes, and Desenzano del Garda about 35 km and 40 minutes. Further north, Malcesine is about 60 km and an hour and ten minutes, and Riva del Garda about 85 km and an hour and twenty. Verona is the closest airport to the lake.' },
            { q: 'Which Lake Garda towns do you serve?', a: 'All of them, including Sirmione, Bardolino, Lazise, Peschiera, Garda, Malcesine and Riva del Garda.' },
            { q: 'Is the transfer suitable for families?', a: 'Yes, with child seats on request and space for luggage, it is ideal for families heading to the lake.' },
            { q: 'How long does it take to reach the northern lake?', a: 'Considerably longer than the southern basin. On our published figures Malcesine is about 60 km and an hour and ten minutes from Verona Airport, and Riva del Garda about 85 km and an hour and twenty, against roughly 30 minutes to Peschiera.' },
            { q: 'Is Verona really the closest airport to Lake Garda?', a: 'Yes, for most of the lake. Verona Villafranca is about 25–35 km from the southern Garda towns. Venice Marco Polo and Bergamo also serve the lake but are substantially further from the southern basin.' },
            { q: 'Can the driver reach my hotel door?', a: 'Usually yes — most Garda hotels are directly car-accessible. The exceptions are historic centres with restricted vehicle access, Sirmione\'s peninsula in particular, where the driver stops at the nearest permitted point and helps with luggage.' },
            { q: 'What happens if my flight is delayed?', a: 'Your flight is tracked from departure at your origin airport, so the pickup adjusts automatically. The first 60 minutes of waiting after landing are included at no charge, and any longer wait is agreed with you in advance. A journey starting between 22:00 and 06:00 may carry a surcharge; where one applies it is shown in your quote before you book.' },
            { q: 'Should I allow extra time for the return transfer?', a: 'In summer, yes. The lakeside roads are busy in July and August, and our standing guidance for Verona departures is to allow extra time for Lake Garda traffic. Build in a buffer rather than the minimum journey time.' },
        ],
        relatedLinks: [
            { href: '/distance/verona-airport-to-lake-garda-distance', label: 'Verona Airport to Lake Garda Distance Guide' },
            { href: '/airport/verona', label: 'Verona Airport transfer service' },
            { href: '/verona-airport-to-sirmione', label: 'Transfers to Sirmione' },
            { href: '/verona-airport-to-peschiera-del-garda', label: 'Peschiera del Garda transfer' },
            { href: '/verona-airport-to-desenzano-del-garda', label: 'Desenzano del Garda transfer' },
            { href: '/verona-airport-to-lazise', label: 'Transfers to Lazise' },
            { href: '/verona-airport-to-bardolino', label: 'Bardolino transfer' },
            { href: '/verona-airport-to-malcesine', label: 'Continue north to Malcesine' },
            { href: '/verona-airport-to-riva-del-garda', label: 'Riva del Garda at the top of the lake' },
            { href: '/verona-airport-to-verona', label: 'Verona city centre transfer' },
            { href: '/attraction-transfer/lake-garda-taxi-transfer', label: 'Lake Garda taxi service' },
            { href: '/blog/how-to-get-to-lake-garda', label: 'How to get to Lake Garda' },
        ],
    },
    {
        slug: 'bari-airport-to-polignano-a-mare-taxi', from: 'Bari Airport', to: 'Polignano a Mare',
        title: 'Bari Airport to Polignano a Mare Taxi Transfer', hero_image: '/images/beach-transfer.webp',
        description: 'Private transfer from Bari Airport (BRI) to the cliffside town of Polignano a Mare. Reach Puglia\'s most photogenic coastal town directly, with a comfortable door-to-door private car.',
        distance: '~45 km', duration: '~45 min', price: '€70',
        highlights: ['Door-to-door to Polignano a Mare', 'Gateway to the Puglia coast', 'English-speaking driver', 'Flight tracking included', 'Fixed all-inclusive price'],
        faqs: [
            { q: 'How far is Polignano a Mare from Bari Airport?', a: 'About 45 km, a drive of roughly 45 minutes south along the coast from Bari Airport.' },
            { q: 'Can you continue to other Puglia towns?', a: 'Yes — we also serve Monopoli, Ostuni, Alberobello and the wider Puglia region.' },
            { q: 'Is a transfer better than the train in Puglia?', a: 'For door-to-door convenience and reaching smaller towns, yes — regional services can be slow and infrequent.' },
        ],
        relatedLinks: [
            { href: '/distance/bari-airport-to-polignano-a-mare-distance', label: 'Bari Airport to Polignano a Mare Distance Guide' },
        ],
    },
    {
        slug: 'bari-airport-to-alberobello-taxi', from: 'Bari Airport', to: 'Alberobello',
        title: 'Bari Airport to Alberobello Taxi Transfer', hero_image: '/images/beach-transfer.webp',
        description: 'Private transfer from Bari Airport to Alberobello, home of the UNESCO-listed trulli houses. Travel directly to the heart of the Itria Valley with a professional door-to-door driver.',
        distance: '~60 km', duration: '~1 hour', price: '€90',
        highlights: ['Door-to-door to the trulli town', 'Gateway to the Itria Valley', 'Optional Locorotondo stop', 'English-speaking driver', 'Fixed all-inclusive price'],
        faqs: [
            { q: 'How far is Alberobello from Bari Airport?', a: 'About 60 km, a drive of roughly 1 hour from Bari Airport into the Itria Valley.' },
            { q: 'What is Alberobello known for?', a: 'Its trulli — distinctive conical-roofed stone houses that form a UNESCO World Heritage Site found nowhere else in the world.' },
            { q: 'Can I visit other Itria Valley towns?', a: 'Yes, Locorotondo, Martina Franca and Ostuni are all nearby and make a wonderful combined day with a private driver.' },
        ],
        relatedLinks: [
            { href: '/distance/bari-airport-to-alberobello-distance', label: 'Bari Airport to Alberobello Distance Guide' },
        ],
    },
    {
        slug: 'palermo-airport-to-cefalu-taxi', from: 'Palermo Airport', to: 'Cefalu',
        title: 'Palermo Airport to Cefalù Taxi Transfer', hero_image: '/images/beach-transfer.webp',
        description: 'Private transfer from Palermo Airport (PMO) to the seaside town of Cefalù. Reach one of Sicily\'s most beautiful coastal towns directly, bypassing Palermo, with a door-to-door private car.',
        distance: '~75 km', duration: '~1 hour', price: '€110',
        highlights: ['Direct to Cefalù — bypass Palermo', 'Stunning coastal route', 'Door-to-door to your hotel', 'English-speaking Sicilian driver', 'Fixed all-inclusive price'],
        faqs: [
            { q: 'How far is Cefalù from Palermo Airport?', a: 'About 75 km, a scenic coastal drive of roughly 1 hour east of Palermo Airport.' },
            { q: 'Can I go straight to Cefalù without entering Palermo?', a: 'Yes, the route bypasses the city, so you reach Cefalù directly and comfortably.' },
            { q: 'Is Cefalù good for a beach holiday?', a: 'Yes — it combines a sandy beach, a Norman cathedral and a charming old town, making it one of Sicily\'s favourite coastal bases.' },
        ],
        relatedLinks: [
            { href: '/distance/palermo-airport-to-cefalu-distance', label: 'Palermo Airport to Cefalù Distance Guide' },
        ],
    },
    {
        slug: 'rome-to-sorrento-taxi', from: 'Rome', to: 'Sorrento',
        title: 'Rome to Sorrento Taxi Transfer', hero_image: '/images/almafi.webp',
        description: 'Private transfer from Rome to Sorrento with an optional Pompeii stop. Travel door-to-door to the Sorrento peninsula in comfort, skipping the crowded high-speed train plus local connection.',
        distance: '~270 km', duration: '~3 hours 30 min', price: '€320',
        highlights: ['Door-to-door Rome to Sorrento', 'Optional Pompeii stop en route', 'All motorway tolls included', 'English-speaking driver', 'Fixed all-inclusive price'],
        faqs: [
            { q: 'How long does the Rome to Sorrento transfer take?', a: 'About 3 hours 30 minutes (around 270 km) via the A1 and A3 motorways, or a little longer with a Pompeii stop.' },
            { q: 'Can we break the journey at Pompeii?', a: 'Yes — Pompeii is conveniently on the route and a very popular stop between Rome and Sorrento.' },
            { q: 'Is this better than the train?', a: 'For door-to-door comfort with luggage it is, since the train requires a change in Naples onto the local Circumvesuviana line.' },
        ],
        relatedLinks: [
            { href: '/distance/rome-to-sorrento-distance', label: 'Rome to Sorrento Distance Guide' },
        ],
    },
    {
        slug: 'rome-to-tivoli-taxi', from: 'Rome', to: 'Tivoli',
        title: 'Rome to Tivoli Taxi Transfer', hero_image: '/images/rome airport.webp',
        description: 'Private transfer or day trip from Rome to Tivoli, home of Villa d\'Este and Hadrian\'s Villa. Reach the UNESCO gardens easily with a door-to-door driver who can wait and return you to Rome.',
        distance: '~30 km', duration: '~45 min', price: '€70',
        highlights: ['Door-to-door to Villa d\'Este', 'Optional Hadrian\'s Villa stop', 'Driver can wait for the return', 'Easy half-day from Rome', 'Fixed all-inclusive price'],
        faqs: [
            { q: 'How far is Tivoli from Rome?', a: 'About 30 km east of Rome, a drive of roughly 45 minutes, making it an easy half-day or day trip.' },
            { q: 'Can I see both Villa d\'Este and Hadrian\'s Villa?', a: 'Yes, both UNESCO sites are in Tivoli and can be combined in a single day with a private driver who waits between them.' },
            { q: 'Is a private driver better than the train to Tivoli?', a: 'Yes — the sites are spread out and not walkable from the station, so a driver who waits makes the visit far easier.' },
        ],
        relatedLinks: [
            { href: '/distance/rome-to-tivoli-distance', label: 'Rome to Tivoli Distance Guide' },
        ],
    },
    {
        slug: 'rome-to-orvieto-taxi', from: 'Rome', to: 'Orvieto',
        title: 'Rome to Orvieto Taxi Transfer', hero_image: '/images/Tuscany Wine.webp',
        description: 'Private transfer from Rome to the clifftop town of Orvieto in Umbria. Travel door-to-door to one of central Italy\'s most dramatic hilltop towns, famous for its cathedral and white wine.',
        distance: '~120 km', duration: '~1 hour 30 min', price: '€180',
        highlights: ['Door-to-door to clifftop Orvieto', 'Great stop between Rome and Tuscany', 'Famous Gothic cathedral', 'English-speaking driver', 'Fixed all-inclusive price'],
        faqs: [
            { q: 'How far is Orvieto from Rome?', a: 'About 120 km north, a drive of roughly 1 hour 30 minutes via the A1 motorway.' },
            { q: 'Is Orvieto a good stop on the way to Tuscany?', a: 'Yes, it sits conveniently between Rome and Tuscany and makes an excellent break or add-on to a longer transfer.' },
            { q: 'What is Orvieto known for?', a: 'Its spectacular striped Gothic cathedral, underground caves, and the crisp Orvieto Classico white wine.' },
        ],
        relatedLinks: [
            { href: '/distance/rome-to-orvieto-distance', label: 'Rome to Orvieto Distance Guide' },
        ],
    },
    {
        slug: 'rome-to-siena-taxi', from: 'Rome', to: 'Siena',
        title: 'Rome to Siena Taxi Transfer', hero_image: '/images/Tuscany Wine.webp',
        description: 'Private transfer from Rome to Siena, the medieval heart of Tuscany. Travel door-to-door with optional stops in Umbria or Tuscan wine country along the way.',
        distance: '~230 km', duration: '~3 hours', price: '€290',
        highlights: ['Door-to-door Rome to Siena', 'Optional Orvieto or wine-country stop', 'All tolls included', 'English-speaking driver', 'Fixed all-inclusive price'],
        faqs: [
            { q: 'How long is the Rome to Siena transfer?', a: 'About 3 hours (around 230 km) via the A1 motorway, longer if you add a scenic stop.' },
            { q: 'Can we stop in Tuscan wine country?', a: 'Yes — the route passes close to Montepulciano and Montalcino, popular add-on stops for wine lovers.' },
            { q: 'Can this be a one-way transfer or a day trip?', a: 'Both — we offer one-way transfers and full-day round trips with the driver waiting in Siena.' },
        ],
        relatedLinks: [
            { href: '/distance/rome-to-siena-distance', label: 'How Far Is Siena from Rome?' },
        ],
    },
    {
        slug: 'florence-to-bologna-taxi', from: 'Florence', to: 'Bologna',
        title: 'Florence to Bologna Taxi Transfer', hero_image: '/images/Bologna.webp',
        description: 'Private transfer from Florence to Bologna across the Apennine mountains. A comfortable door-to-door alternative to the train for reaching Italy\'s food capital.',
        distance: '~110 km', duration: '~1 hour 30 min', price: '€170',
        highlights: ['Door-to-door Florence to Bologna', 'Scenic Apennine route', 'Great for foodie trips', 'English-speaking driver', 'Fixed all-inclusive price'],
        faqs: [
            { q: 'How far is Bologna from Florence?', a: 'About 110 km, a drive of roughly 1 hour 30 minutes across the Apennines via the A1 motorway.' },
            { q: 'Is the transfer or the train better?', a: 'The high-speed train is fast city-centre to city-centre, but a private transfer is door-to-door and ideal with luggage or for reaching specific addresses.' },
            { q: 'What is Bologna famous for?', a: 'Its mediaeval porticoes, the oldest university in the world, and being the gastronomic capital of Italy.' },
        ],
        relatedLinks: [
            { href: '/distance/florence-to-bologna-distance', label: 'Florence to Bologna Distance & Route Map' },
        ],
    },
    {
        slug: 'florence-to-lucca-taxi', from: 'Florence', to: 'Lucca',
        title: 'Florence to Lucca Taxi Transfer', hero_image: '/images/Tuscany Wine.webp',
        description: 'Private transfer or day trip from Florence to the walled city of Lucca. Travel door-to-door to one of Tuscany\'s most relaxed and beautiful towns, with an optional Pisa add-on.',
        distance: '~80 km', duration: '~1 hour', price: '€130',
        highlights: ['Door-to-door Florence to Lucca', 'Optional Pisa combination', 'Driver can wait for a day trip', 'English-speaking driver', 'Fixed all-inclusive price'],
        faqs: [
            { q: 'How far is Lucca from Florence?', a: 'About 80 km, a drive of roughly 1 hour via the A11 motorway.' },
            { q: 'Can I combine Lucca and Pisa from Florence?', a: 'Yes, the two are close together and make a classic combined day trip from Florence with a private driver.' },
            { q: 'Why visit Lucca?', a: 'Its complete Renaissance walls — now a tree-lined promenade — plus charming piazzas and a relaxed pace make it a favourite.' },
        ],
        relatedLinks: [
            { href: '/distance/florence-to-lucca-distance', label: 'Florence to Lucca Distance Guide' },
        ],
    },
    {
        slug: 'florence-to-san-gimignano-taxi', from: 'Florence', to: 'San Gimignano',
        title: 'Florence to San Gimignano Taxi Transfer', hero_image: '/images/Tuscany Wine.webp',
        description: 'Private transfer or day trip from Florence to San Gimignano, the medieval town of towers. Travel door-to-door into the Tuscan countryside, with optional stops in Chianti or Siena.',
        distance: '~55 km', duration: '~1 hour', price: '€120',
        highlights: ['Door-to-door to San Gimignano', 'Optional Chianti or Siena stop', 'Driver waits for a day trip', 'Famous medieval towers', 'Fixed all-inclusive price'],
        faqs: [
            { q: 'How far is San Gimignano from Florence?', a: 'About 55 km, a drive of roughly 1 hour through the Tuscan hills.' },
            { q: 'Can I combine San Gimignano with Siena?', a: 'Yes, the two pair beautifully in a single day, often with a Chianti wine stop in between.' },
            { q: 'What is San Gimignano known for?', a: 'Its skyline of medieval stone towers — the "Manhattan of Tuscany" — and award-winning gelato.' },
        ],
        relatedLinks: [
            { href: '/distance/florence-to-san-gimignano-distance', label: 'See the Route to San Gimignano' },
        ],
    },
    {
        slug: 'florence-to-montepulciano-taxi', from: 'Florence', to: 'Montepulciano',
        title: 'Florence to Montepulciano Taxi Transfer', hero_image: '/images/Tuscany Wine.webp',
        description: 'Private transfer or wine-country day trip from Florence to Montepulciano in the Val d\'Orcia. Travel door-to-door to one of Tuscany\'s great wine towns with an experienced local driver.',
        distance: '~115 km', duration: '~1 hour 30 min', price: '€180',
        highlights: ['Door-to-door to Montepulciano', 'Heart of Vino Nobile wine country', 'Optional Pienza & Val d\'Orcia stops', 'Driver waits for a day trip', 'Fixed all-inclusive price'],
        faqs: [
            { q: 'How far is Montepulciano from Florence?', a: 'About 115 km, a drive of roughly 1 hour 30 minutes into the Val d\'Orcia in southern Tuscany.' },
            { q: 'Is this good for a wine tour?', a: 'Excellent — Montepulciano is the home of Vino Nobile, and a private driver means everyone can enjoy the tastings.' },
            { q: 'Can I also see Pienza and the Val d\'Orcia?', a: 'Yes, nearby Pienza and the iconic Val d\'Orcia landscapes make a wonderful combined day.' },
        ],
        relatedLinks: [
            { href: '/distance/florence-to-montepulciano-distance', label: 'Planning the Drive to Montepulciano' },
        ],
    },
    {
        slug: 'milan-to-portofino-taxi', from: 'Milan', to: 'Portofino',
        title: 'Milan to Portofino Taxi Transfer', hero_image: '/images/Lake Como.webp',
        description: 'Private transfer from Milan to the glamorous harbour village of Portofino. Travel door-to-door to the Italian Riviera in comfort, with a professional driver handling the scenic coastal approach.',
        distance: '~190 km', duration: '~2 hours 30 min', price: '€280',
        highlights: ['Door-to-door Milan to Portofino', 'Glamorous Riviera destination', 'Optional Santa Margherita stop', 'All tolls included', 'Fixed all-inclusive price'],
        faqs: [
            { q: 'How far is Portofino from Milan?', a: 'About 190 km, a drive of roughly 2 hours 30 minutes via the motorway and the scenic Ligurian coast.' },
            { q: 'Can a car reach Portofino village?', a: 'Cars stop just outside the tiny car-free harbour; the driver drops you as close as possible and you walk the final short stretch.' },
            { q: 'Can I combine Portofino with Santa Margherita?', a: 'Yes, elegant Santa Margherita Ligure is right next door and makes a lovely combined visit.' },
        ],
        relatedLinks: [
            { href: '/distance/milan-to-portofino-distance', label: 'Milan to Portofino Distance & Route Map' },
            { href: '/route/milan-to-stresa-taxi', label: 'Milan to Stresa Taxi Transfer' },
        ],
    },
    {
        slug: 'milan-to-stresa-taxi', from: 'Milan', to: 'Stresa',
        title: 'Milan to Stresa Taxi Transfer', hero_image: '/images/Lake Como.webp',
        description: 'Private transfer from Milan to Stresa on Lake Maggiore. Reach the elegant lakeside resort and gateway to the Borromean Islands door-to-door with a professional driver.',
        distance: '~80 km', duration: '~1 hour 15 min', price: '€150',
        highlights: ['Door-to-door Milan to Stresa', 'Gateway to the Borromean Islands', 'Elegant lakeside resort', 'English-speaking driver', 'Fixed all-inclusive price'],
        faqs: [
            { q: 'How far is Stresa from Milan?', a: 'About 80 km, a drive of roughly 1 hour 15 minutes north of Milan to Lake Maggiore.' },
            { q: 'What is there to do in Stresa?', a: 'Stresa is the gateway to the Borromean Islands, with belle-époque hotels, gardens and lake cruises.' },
            { q: 'Can you collect from Milan airports too?', a: 'Yes, we transfer to Stresa from Milan city centre and from Malpensa, Linate and Bergamo airports.' },
        ],
        relatedLinks: [
            { href: '/distance/milan-to-stresa-distance', label: 'Milan to Stresa Distance & Route Map' },
            { href: '/route/milan-to-portofino-taxi', label: 'Milan to Portofino Taxi Transfer' },
        ],
    },
    {
        slug: 'naples-to-sorrento-taxi', from: 'Naples', to: 'Sorrento',
        title: 'Naples to Sorrento Taxi Transfer', hero_image: '/images/almafi.webp',
        description: 'Private transfer from Naples city or port to Sorrento. The comfortable, door-to-door alternative to the crowded Circumvesuviana train, ideal for cruise passengers and city visitors alike.',
        distance: '~50 km', duration: '~1 hour 15 min', price: '€100',
        highlights: ['Door-to-door Naples to Sorrento', 'Avoid the crowded local train', 'Cruise port pickup available', 'Child seats on request', 'Fixed all-inclusive price'],
        faqs: [
            { q: 'How far is Sorrento from Naples?', a: 'About 50 km, a drive of roughly 1 hour 15 minutes depending on traffic.' },
            { q: 'Can you pick up from the Naples cruise port?', a: 'Yes, we offer cruise-port pickups to Sorrento with a return planned well before all-aboard time, with live traffic monitoring, for shore excursions.' },
            { q: 'Is a transfer better than the Circumvesuviana?', a: 'For comfort and luggage, yes — the local train is crowded and basic, while a transfer is door-to-door.' },
        ],
        relatedLinks: [
            { href: '/distance/naples-to-sorrento-distance', label: 'Naples to Sorrento Distance & Route Map' },
            { href: '/route/naples-to-positano-taxi', label: 'Naples to Positano Taxi Transfer' },
        ],
    },
    {
        slug: 'naples-to-positano-taxi', from: 'Naples', to: 'Positano',
        title: 'Naples to Positano Taxi Transfer', hero_image: '/images/almafi.webp',
        description: 'Private transfer from Naples to Positano along the Amalfi Coast. Let a local driver navigate the famous coast road while you enjoy the views, with door-to-door drop-off in Positano.',
        distance: '~60 km', duration: '~1 hour 30 min', price: '€130',
        highlights: ['Door-to-door Naples to Positano', 'Experienced coast-road driver', 'Cruise port pickup available', 'Photo stops on request', 'Fixed all-inclusive price'],
        faqs: [
            { q: 'How long is the drive from Naples to Positano?', a: 'About 1 hour 30 minutes (around 60 km), longer in peak summer traffic on the coast road.' },
            { q: 'Can you collect me from the Naples cruise terminal?', a: 'Yes, we provide cruise-port transfers to Positano with a timed return so you do not miss the ship.' },
            { q: 'Why use a private driver to Positano?', a: 'The narrow coast road and lack of parking make a local driver by far the easiest and least stressful option.' },
        ],
        relatedLinks: [
            { href: '/distance/naples-to-positano-distance', label: 'Naples to Positano Distance & Route Map' },
            { href: '/route/naples-to-salerno-taxi', label: 'Naples to Salerno Taxi Transfer' },
        ],
    },
    {
        slug: 'naples-to-salerno-taxi', from: 'Naples', to: 'Salerno',
        title: 'Naples to Salerno Taxi Transfer', hero_image: '/images/naples.webp',
        description: 'Private transfer from Naples to Salerno, the eastern gateway to the Amalfi Coast. A quick, comfortable door-to-door transfer ideal for ferry connections and coast access.',
        distance: '~55 km', duration: '~1 hour', price: '€110',
        highlights: ['Door-to-door Naples to Salerno', 'Gateway to the eastern Amalfi Coast', 'Ferry terminal drop-off', 'English-speaking driver', 'Fixed all-inclusive price'],
        faqs: [
            { q: 'How far is Salerno from Naples?', a: 'About 55 km, a drive of roughly 1 hour via the motorway.' },
            { q: 'Why go to Salerno?', a: 'Salerno is the closest gateway to the eastern Amalfi Coast (Amalfi, Ravello) and a hub for coastal ferries.' },
            { q: 'Can you drop me at the Salerno ferry terminal?', a: 'Yes, we drop directly at the terminal so you can connect to Amalfi Coast ferries.' },
        ],
        relatedLinks: [
            { href: '/distance/naples-to-salerno-distance', label: 'Naples to Salerno Distance & Route Map' },
            { href: '/route/naples-to-sorrento-taxi', label: 'Naples to Sorrento Taxi Transfer' },
        ],
    },
    {
        slug: 'venice-to-padua-taxi', from: 'Venice', to: 'Padua',
        title: 'Venice to Padua Taxi Transfer', hero_image: '/images/venice.webp',
        description: 'Private transfer from Venice (Piazzale Roma or Mestre) to Padua. A quick door-to-door connection to the historic university city, famous for the Scrovegni Chapel and Saint Anthony\'s Basilica.',
        distance: '~40 km', duration: '~45 min', price: '€90',
        highlights: ['Door-to-door Venice to Padua', 'Pickup from Piazzale Roma or Mestre', 'Historic university city', 'English-speaking driver', 'Fixed all-inclusive price'],
        faqs: [
            { q: 'How far is Padua from Venice?', a: 'About 40 km, a drive of roughly 45 minutes from the Venice mainland.' },
            { q: 'Where in Venice can you pick me up?', a: 'From Piazzale Roma (the vehicle limit of the islands) or anywhere on the mainland, including Mestre and the airport.' },
            { q: 'What is Padua known for?', a: 'Giotto\'s frescoes in the Scrovegni Chapel, the Basilica of Saint Anthony, and one of the world\'s oldest universities.' },
        ],
        relatedLinks: [
            { href: '/distance/venice-to-padua-distance', label: 'Venice to Padua Distance & Route Map' },
        ],
    },
    {
        slug: 'bologna-to-florence-taxi', from: 'Bologna', to: 'Florence',
        title: 'Bologna to Florence Taxi Transfer', hero_image: '/images/Tuscany Wine.webp',
        description: 'Private transfer from Bologna to Florence across the Apennines. A comfortable door-to-door alternative to the train, ideal for reaching specific Florence addresses with luggage.',
        distance: '~110 km', duration: '~1 hour 30 min', price: '€170',
        highlights: ['Door-to-door Bologna to Florence', 'ZTL-compliant Florence drop-off', 'Bologna airport pickup available', 'Scenic Apennine route', 'Fixed all-inclusive price'],
        faqs: [
            { q: 'How far is Florence from Bologna?', a: 'About 110 km, a drive of roughly 1 hour 30 minutes across the Apennines via the A1 motorway.' },
            { q: 'Can you pick up from Bologna Airport?', a: 'Yes, we offer transfers from Bologna Marconi Airport directly to Florence and the wider Tuscany region.' },
            { q: 'Can you reach my hotel inside Florence\'s ZTL?', a: 'Yes — as a licensed service we can enter the limited-traffic zone to drop you at your hotel door.' },
        ],
        relatedLinks: [
            { href: '/distance/florence-to-bologna-distance', label: 'Florence to Bologna Distance & Route Map' },
        ],
    },

    // ─── Phase 8: Airport-to-Airport transfers (rich long-form pages) ───────
    {
        slug: 'rome-fiumicino-to-rome-ciampino-taxi',
        from: 'Rome Fiumicino Airport', to: 'Rome Ciampino Airport',
        title: 'Rome Fiumicino to Rome Ciampino Airport Taxi',
        metaTitle: 'Fiumicino to Ciampino Airport Transfer',
        metaDescription: 'Private taxi between Rome Fiumicino (FCO) and Ciampino (CIA) airports. About 40 km, 50–70 min, fixed price, flight monitoring and meet & greet, 24/7.',
        imageAlt: 'Private car transfer between Rome Fiumicino and Rome Ciampino airports',
        hero_image: '/images/rome airport.webp',
        distance: '~40 km', duration: '~50–70 min',
        description: 'Private door-to-door transfer between Rome\'s two airports, Fiumicino (FCO) and Ciampino (CIA). There is no direct train between them, so a fixed-price car with a professional driver is the fastest, least stressful way to connect — ideal for split-airport itineraries with luggage.',
        highlights: ['Direct FCO to CIA airport transfer', 'Perfect for split-airport connections', 'Real-time flight monitoring', 'Meet & greet with luggage help', 'Fixed price — no meter', '24/7 availability'],
        vehicleOptions: true,
        sections: [
            { h2: 'Overview', p: [
                'Travelling between Rome\'s two airports — Fiumicino (Leonardo da Vinci, FCO) and Ciampino (G. B. Pastine, CIA) — looks simple on a map but is awkward in practice. There is no direct rail link between the two, so the public route means taking a train or bus into central Rome and then another service back out, dragging your luggage across the city and through busy interchanges on the way.',
                'A private airport-to-airport transfer removes all of that. A professional, English-speaking driver meets you at your arrival airport and takes you directly to the other, door to door, in a single comfortable ride. It is the option most travellers choose when a tight connection or heavy luggage makes public transport impractical.',
            ]},
            { h2: 'Who Books This Transfer', p: [
                'The FCO to CIA transfer is most often booked by travellers with split-airport itineraries. A common example is arriving on a long-haul or international flight into Fiumicino — Rome\'s main intercontinental gateway — and then connecting to a low-cost European or domestic departure from Ciampino, the base for carriers such as Ryanair and Wizz Air.',
                'It is also popular with travellers who simply booked separate tickets and later realised their flights use different Rome airports. Whatever the reason, the requirement is identical: move quickly and reliably from one airport to the other without the uncertainty of public transport.',
            ]},
            { h2: 'How Much Time to Allow Between Flights', p: [
                'For a same-day connection, allow at least three to four hours between your scheduled arrival at Fiumicino and your departure from Ciampino. That window must cover landing and taxiing, passport control and baggage reclaim at FCO, the drive across Rome, and check-in and security at Ciampino.',
                'Because the journey time depends heavily on Rome traffic, tell us both flight numbers when you book. We monitor your inbound flight and can advise whether a tight connection is realistic before you commit to it.',
            ]},
            { h2: 'Journey and Route', p: [
                'The two airports sit on opposite sides of the city — Fiumicino to the southwest on the coast, Ciampino to the southeast — roughly 40 km apart. Drivers typically use the Grande Raccordo Anulare (GRA), Rome\'s ring road, to skirt the centre, with the journey usually taking 50 to 70 minutes.',
                'Weekday peaks (around 7–10am and 4–7pm) are the busiest and the GRA can slow noticeably. Your driver selects the fastest live route, and because the fare is fixed, traffic never increases what you pay.',
            ]},
            { h2: 'Meet & Greet and Flight Monitoring', p: [
                'Your driver waits in the arrivals hall of your first airport with a name sign, helps with your luggage and walks you to the vehicle. Free waiting time is included after landing to cover passport control and baggage reclaim.',
                'We track your inbound flight in real time, so if it lands early or late the pickup is adjusted automatically. This matters most on split-airport days, when a delayed arrival can eat into an already tight connection window.',
            ]},
            { h2: 'Vehicles, Luggage and Groups', p: [
                'Choose the vehicle that fits your party: a sedan for one to three passengers, a minivan or Mercedes V-Class for families and groups, or a larger minibus on request. Tell us your passenger and bag numbers when booking so the right vehicle is assigned and everything fits comfortably.',
            ]},
            { h2: 'Fixed Pricing and 24/7 Service', p: [
                'The fare is fixed and agreed before you travel — no meter and no surge pricing — so congestion on the ring road never changes the price. Transfers run around the clock, which is essential at Ciampino, where low-cost flights frequently depart very early or land late at night when public transport between the airports is limited or has stopped entirely.',
            ]},
        ],
        faqs: [
            { q: 'How far is it from Fiumicino to Ciampino airport?', a: 'About 40 km. By private car around Rome on the GRA ring road the drive usually takes 50 to 70 minutes, depending on traffic.' },
            { q: 'Is there a direct train between Rome\'s two airports?', a: 'No. There is no direct train linking Fiumicino and Ciampino; public transport requires travelling via central Rome with a train plus bus or metro, which is slow and awkward with luggage. A private transfer goes directly.' },
            { q: 'How much time should I leave between flights at the two airports?', a: 'Allow at least three to four hours between your scheduled arrival at Fiumicino and departure from Ciampino, to cover baggage reclaim, the cross-city drive and check-in at the second airport.' },
            { q: 'Will you track my incoming flight?', a: 'Yes. We monitor your inbound flight in real time and adjust the pickup if it lands early or late, with free waiting time after you land.' },
            { q: 'Is the price fixed?', a: 'Yes — the fare is agreed before you travel with no meter, so Rome traffic never changes what you pay.' },
            { q: 'Is the transfer available late at night or very early?', a: 'Yes, we operate 24/7 — ideal for the early-morning and late-night low-cost flights common at Ciampino.' },
            { q: 'Can you carry luggage for a whole family?', a: 'Yes. Choose a minivan or Mercedes V-Class and tell us the number of passengers and bags when booking so everything fits comfortably.' },
        ],
        relatedLinks: [
            { href: '/distance/rome-fiumicino-to-ciampino-distance', label: 'Fiumicino to Ciampino Distance & Route Map' },
        ],
    },
    {
        slug: 'rome-ciampino-to-rome-fiumicino-taxi',
        from: 'Rome Ciampino Airport', to: 'Rome Fiumicino Airport',
        title: 'Rome Ciampino to Rome Fiumicino Airport Taxi',
        metaTitle: 'Ciampino to Fiumicino Airport Transfer',
        metaDescription: 'Private taxi from Rome Ciampino (CIA) to Fiumicino (FCO) airport. About 40 km, 50–70 min, fixed price, flight monitoring and meet & greet, available 24/7.',
        imageAlt: 'Private car transfer from Rome Ciampino to Rome Fiumicino airport',
        hero_image: '/images/rome airport.webp',
        distance: '~40 km', duration: '~50–70 min',
        description: 'Private door-to-door transfer from Rome Ciampino (CIA) to Rome Fiumicino (FCO). With no direct train between the airports, a fixed-price car is the quickest and most reliable way to make an onward connection — especially when arriving on a low-cost flight and continuing long-haul from Fiumicino.',
        highlights: ['Direct CIA to FCO airport transfer', 'Ideal after a low-cost arrival at Ciampino', 'Real-time flight monitoring', 'Meet & greet with luggage help', 'Fixed price — no meter', '24/7 availability'],
        vehicleOptions: true,
        sections: [
            { h2: 'Overview', p: [
                'Ciampino is Rome\'s smaller, second airport, a compact single-terminal hub southeast of the city used mainly by low-cost carriers. Many travellers land here on a cheap European flight and then need to reach Fiumicino — Rome\'s main intercontinental gateway on the opposite side of the city — to catch an onward long-haul or connecting departure.',
                'There is no direct train between the two airports, so the public alternative means heading into central Rome and back out again with your luggage. A private transfer from Ciampino to Fiumicino replaces that with a single, direct, door-to-door ride in a comfortable vehicle.',
            ]},
            { h2: 'Why Pre-Book This Direction', p: [
                'Arriving at Ciampino, you want to clear the terminal and get moving quickly, especially if a connecting flight is waiting at Fiumicino. Pre-booking means a driver is confirmed, ready and holding a name sign the moment you exit, rather than joining a taxi queue or working out bus and train connections after a late-night landing.',
                'Because Ciampino handles a high share of early and late low-cost flights, this transfer is frequently needed at hours when public transport between the airports barely runs — another reason a pre-arranged car is the dependable choice.',
            ]},
            { h2: 'How Much Time to Allow', p: [
                'If you are connecting onward from Fiumicino, leave a comfortable margin. Allow at least three to four hours between your scheduled Ciampino arrival and your Fiumicino departure to absorb any inbound delay, the cross-city drive and full check-in and security for a long-haul flight.',
                'Share both flight numbers at the time of booking. We monitor your arrival and can flag whether the connection is realistic before your travel day.',
            ]},
            { h2: 'Journey and Route', p: [
                'The drive covers roughly 40 km from Ciampino in the southeast to Fiumicino on the southwest coast, generally routed around the city on the GRA ring road. Expect 50 to 70 minutes in typical conditions, with weekday rush hours the slowest part of the day.',
                'Your driver monitors live traffic and takes the quickest available route. With a fixed fare, any delays on the ring road never affect the price you agreed.',
            ]},
            { h2: 'Meet & Greet and Flight Monitoring', p: [
                'Your driver meets you inside the Ciampino arrivals area with a name sign, assists with luggage and leads you to the car. Free waiting time is included so a slow bag delivery is never a problem.',
                'We track your inbound flight and adjust the pickup automatically if it is early or delayed — valuable when you have a fixed check-in deadline waiting at Fiumicino.',
            ]},
            { h2: 'Vehicles and Groups', p: [
                'From a private sedan for solo travellers and couples to a Mercedes V-Class or minibus for families and groups, we assign a vehicle sized to your party and luggage. Let us know passenger and bag counts when booking.',
            ]},
            { h2: 'Fixed Pricing and 24/7 Availability', p: [
                'The price is fixed and confirmed in advance, with no meter and no hidden extras. Our service runs 24 hours a day, so whether your Ciampino flight lands at dawn or near midnight, a driver is available to take you straight to Fiumicino.',
            ]},
        ],
        faqs: [
            { q: 'How long does the Ciampino to Fiumicino transfer take?', a: 'The drive is about 40 km and typically takes 50 to 70 minutes around Rome on the GRA ring road, depending on traffic.' },
            { q: 'Can I take a train directly between the airports?', a: 'No direct train exists. Public transport routes you through central Rome with connections, which is slow with luggage; a private car goes straight from one airport to the other.' },
            { q: 'I land at Ciampino and fly long-haul from Fiumicino — how early should I arrive?', a: 'Allow three to four hours between flights so you have time for any delay, the cross-city drive, and long-haul check-in and security at Fiumicino.' },
            { q: 'Will the driver wait if my Ciampino flight is late?', a: 'Yes. We monitor your flight and adjust the pickup, and free waiting time is included after landing.' },
            { q: 'Is this available for very early or late flights?', a: 'Yes, we run 24/7, which suits the early and late low-cost flights that Ciampino is known for.' },
            { q: 'Is the fare fixed?', a: 'Yes — agreed before travel with no meter, so traffic does not change the price.' },
            { q: 'Can you accommodate a group with lots of luggage?', a: 'Yes, choose a minivan, Mercedes V-Class or minibus and tell us your numbers when booking.' },
        ],
        relatedLinks: [
            { href: '/distance/rome-fiumicino-to-ciampino-distance', label: 'Fiumicino to Ciampino Distance & Route Map' },
        ],
    },
    {
        slug: 'florence-airport-to-pisa-airport-taxi',
        from: 'Florence Airport', to: 'Pisa International Airport',
        title: 'Florence Airport to Pisa Airport Taxi',
        metaTitle: 'Florence to Pisa Airport Transfer (FLR–PSA)',
        metaDescription: 'Private taxi from Florence Airport (FLR) to Pisa International (PSA). About 85 km, 1h10–1h30 via the FI-PI-LI, fixed price, flight monitoring, meet & greet.',
        imageAlt: 'Private car transfer from Florence Airport to Pisa International Airport',
        hero_image: '/images/florence airport.webp',
        distance: '~85 km', duration: '~1 h 10–1 h 30',
        description: 'Private door-to-door transfer from Florence Airport (FLR, Peretola) to Pisa International Airport (PSA, Galileo Galilei). A fixed-price car with a professional driver is the simplest way to connect Tuscany\'s two airports — direct on the expressway, with no train changes or luggage juggling.',
        highlights: ['Direct FLR to PSA airport transfer', 'Connects Tuscany\'s two airports', 'Real-time flight monitoring', 'Meet & greet with luggage help', 'Fixed price — no meter', '24/7 availability'],
        vehicleOptions: true,
        sections: [
            { h2: 'Overview', p: [
                'Florence Airport (Amerigo Vespucci, FLR) and Pisa International Airport (Galileo Galilei, PSA) are the two gateways to Tuscany, about 85 km apart. Florence\'s airport is small and close to the city, while Pisa is larger with far more low-cost and full-service routes — so travellers regularly need to move between them.',
                'A private transfer connects the two directly along the expressway, with a professional driver, luggage assistance and a fixed price. It avoids the multi-step public alternative, which involves a tram or bus into Florence, a train to Pisa Centrale and a further connection to the airport.',
            ]},
            { h2: 'Who Needs a Florence–Pisa Airport Transfer', p: [
                'This route suits travellers whose inbound and onward flights use different Tuscan airports — for instance, arriving into Florence and flying out of Pisa on a low-cost carrier, or repositioning between the two for the widest choice of destinations. It is also used by tour groups and business travellers coordinating multi-city itineraries.',
                'Because Pisa carries a much broader route network, many visitors deliberately fly out of PSA even when based near Florence, making a reliable FLR-to-PSA link a practical necessity.',
            ]},
            { h2: 'Journey and Route', p: [
                'The transfer runs roughly 85 km, mostly along the FI-PI-LI expressway (the Firenze–Pisa–Livorno superstrada) or the A11 motorway, and typically takes between 1 hour 10 minutes and 1 hour 30 minutes depending on traffic and the exact airport approaches.',
                'It is a straightforward, largely dual-carriageway drive, and your driver monitors live conditions to keep it as quick as possible. As the fare is fixed, any slow sections never add to the cost.',
            ]},
            { h2: 'How Much Time to Allow for a Connection', p: [
                'Because this is a longer intercity drive rather than a short cross-city hop, leave a generous window for a same-day connection — ideally four to five hours between your scheduled arrival at one airport and your departure from the other. That covers reclaim, the drive of up to 90 minutes, and check-in and security at the second airport.',
                'Send us both flight numbers when booking so we can monitor your arrival and advise on timing.',
            ]},
            { h2: 'Meet & Greet and Flight Monitoring', p: [
                'Your driver meets you in the arrivals hall with a name sign, helps with your luggage and takes you straight to the vehicle. Free waiting time after landing covers passport control and baggage reclaim.',
                'We track your inbound flight in real time and adjust the pickup for early or delayed arrivals — reassuring on a day when a connecting flight is waiting at the other airport.',
            ]},
            { h2: 'Vehicles, Luggage and Groups', p: [
                'Whether you are travelling solo, as a couple or in a larger group, we match the vehicle to your needs — a comfortable sedan, a minivan or Mercedes V-Class for families, or a minibus for bigger parties. Tell us your passenger and luggage counts so everything fits.',
            ]},
            { h2: 'Fixed Pricing and 24/7 Service', p: [
                'The price is fixed and agreed before you travel, with no meter and no hidden extras. We operate around the clock, so early-morning and late-night flights at either airport are covered — a real advantage over Tuscan public transport, which thins out significantly outside daytime hours.',
            ]},
        ],
        faqs: [
            { q: 'How far is Florence Airport from Pisa Airport?', a: 'About 85 km. The private transfer usually takes 1 hour 10 minutes to 1 hour 30 minutes via the FI-PI-LI expressway or the A11 motorway, depending on traffic.' },
            { q: 'Is this different from a Florence to Pisa city transfer?', a: 'Yes. This route runs airport to airport (FLR to PSA). A Florence-to-Pisa city transfer goes to central Pisa or from central Florence, which are separate journeys.' },
            { q: 'How much time should I allow between connecting flights?', a: 'Allow four to five hours between arrival at one airport and departure from the other, to cover baggage reclaim, the drive of up to 90 minutes, and check-in and security.' },
            { q: 'Will you monitor my incoming flight?', a: 'Yes, we track it in real time and adjust the pickup if it is early or late, with free waiting time after landing.' },
            { q: 'Why not just take the train?', a: 'The train involves a tram or bus into Florence, a service to Pisa Centrale and a further connection to the airport, all with luggage. A private transfer is a single direct ride.' },
            { q: 'Is the fare fixed?', a: 'Yes — agreed in advance with no meter, so traffic on the expressway never changes the price.' },
            { q: 'Can you take a group with luggage?', a: 'Yes. A minivan, Mercedes V-Class or minibus is available; just tell us passenger and bag numbers when booking.' },
        ],
    },
    {
        slug: 'pisa-airport-to-florence-airport-taxi',
        from: 'Pisa International Airport', to: 'Florence Airport',
        title: 'Pisa Airport to Florence Airport Taxi',
        metaTitle: 'Pisa to Florence Airport Transfer (PSA–FLR)',
        metaDescription: 'Private taxi from Pisa International Airport (PSA) to Florence Airport (FLR). About 85 km, 1h10–1h30, fixed price, flight monitoring and meet & greet, 24/7.',
        imageAlt: 'Private car transfer from Pisa International Airport to Florence Airport',
        hero_image: '/images/florence airport.webp',
        distance: '~85 km', duration: '~1 h 10–1 h 30',
        description: 'Private door-to-door transfer from Pisa International Airport (PSA) to Florence Airport (FLR, Peretola). When your inbound flight lands at Pisa but your onward flight leaves from Florence, a fixed-price car is the direct, comfortable way to connect Tuscany\'s two airports.',
        highlights: ['Direct PSA to FLR airport transfer', 'Ideal after a low-cost arrival at Pisa', 'Real-time flight monitoring', 'Meet & greet with luggage help', 'Fixed price — no meter', '24/7 availability'],
        vehicleOptions: true,
        sections: [
            { h2: 'Overview', p: [
                'Pisa International (Galileo Galilei, PSA) is Tuscany\'s largest airport, handling the region\'s widest range of low-cost and full-service flights. Travellers frequently land here and then need to reach Florence Airport (Amerigo Vespucci, FLR), around 85 km to the east, to catch an onward or connecting departure.',
                'A private transfer links the two directly, with a professional driver, luggage help and a fixed fare. It is far simpler than the public route, which requires a connection from Pisa airport to Pisa Centrale, a train to Florence, and then onward transport to the airport.',
            ]},
            { h2: 'Why Book This Direction in Advance', p: [
                'Arriving at Pisa, particularly on a budget flight, you want a clear, pre-arranged plan to reach Florence Airport without improvising connections. Pre-booking means a driver is waiting with a name sign as you exit, ready to set off immediately — important when an onward flight schedule is fixed.',
                'It is equally useful for travellers who found cheaper fares into Pisa but are flying home from Florence, tying the two ends of a trip together with one reliable transfer.',
            ]},
            { h2: 'Journey and Route', p: [
                'The drive covers about 85 km, generally along the FI-PI-LI expressway or the A11 motorway, and takes roughly 1 hour 10 minutes to 1 hour 30 minutes. It is a mostly dual-carriageway route between the coast and Florence.',
                'Your driver follows live traffic to keep the journey efficient, and because the price is fixed, any congestion never increases what you pay.',
            ]},
            { h2: 'How Much Time to Allow', p: [
                'As with any intercity connection, build in a comfortable buffer. Four to five hours between your Pisa arrival and your Florence departure is a sensible target, covering baggage reclaim, a drive of up to 90 minutes, and check-in and security at Florence Airport.',
                'Provide both flight numbers when you book so we can monitor your arrival and advise whether the connection is comfortable.',
            ]},
            { h2: 'Meet & Greet and Flight Monitoring', p: [
                'Your driver meets you inside Pisa arrivals holding a name sign, assists with your bags and walks you to the vehicle, with free waiting time included after landing.',
                'We track your inbound flight in real time and shift the pickup for early or late arrivals — one less thing to worry about when a Florence departure is waiting at the far end.',
            ]},
            { h2: 'Vehicles and Groups', p: [
                'Choose from a private sedan, a minivan or Mercedes V-Class for families, or a minibus for larger groups. Share your passenger and luggage numbers at booking so the assigned vehicle has room for everyone and everything.',
            ]},
            { h2: 'Fixed Pricing and Round-the-Clock Service', p: [
                'The fare is fixed and confirmed before travel, with no meter and no surprises on arrival. We run 24 hours a day, covering the early and late flights common at Pisa — hours when Tuscan trains and buses are sparse or not running.',
            ]},
        ],
        faqs: [
            { q: 'How long is the transfer from Pisa Airport to Florence Airport?', a: 'About 85 km, usually 1 hour 10 minutes to 1 hour 30 minutes via the FI-PI-LI expressway or the A11 motorway, traffic depending.' },
            { q: 'Is this the same as a Pisa Airport to Florence city transfer?', a: 'No. This is an airport-to-airport transfer (PSA to FLR). A Pisa-to-Florence city transfer takes you to central Florence, which is a different destination.' },
            { q: 'How much time should I leave between my flights?', a: 'Allow four to five hours between your Pisa arrival and Florence departure to cover reclaim, the drive of up to 90 minutes, and check-in and security.' },
            { q: 'Do you track my arriving flight?', a: 'Yes, in real time — we adjust the pickup for early or delayed landings and include free waiting time.' },
            { q: 'Why is a private transfer better than the train?', a: 'The train needs a connection from Pisa airport to Pisa Centrale, a service to Florence, and onward transport to the airport — several steps with luggage. A private car does it in one direct ride.' },
            { q: 'Is the price fixed?', a: 'Yes — agreed before you travel with no meter, so traffic never changes the fare.' },
            { q: 'Can you carry a family with luggage?', a: 'Yes; a minivan or Mercedes V-Class is ideal. Tell us the number of passengers and bags when booking.' },
        ],
    },

    // ─── Phase 4: additional intercity routes (assembled in extra-routes.ts) ──
    ...extraRoutes,
    // ─── Phase 1: Rome airport → attraction pages (extra-routes-rome.ts) ──────
    ...extraRoutesRome,
    // ─── Phase 6 outlets + Phase 7 wine regions (extra-routes-tuscany.ts) ─────
    ...extraRoutesTuscany,
    // ─── Phase 5 day trips + Phase 2 cruise + Phase 3 stations (final) ────────
    ...extraRoutesFinal,
    // ─── Amalfi Coast/Sorrento/Capri, Sicily & Sardinia clusters (bilingual) ──
    ...newClusterRoutesEn,
    // ─── Route Expansion 2026 — Phase A1 + A2 (approved audit routes) ────────
    ...routeExpansion2026,
];

// Patch `itSlug` onto the existing routes approved for Italian translation
// (Route Expansion 2026, Phase B) — done here rather than editing each route
// object's literal declaration, so none of their existing content/metadata
// is touched. Drives the hreflang alternate in /route/[slug]/page.tsx.
for (const t of existingRouteItTranslations) {
    const match = routes.find((r) => r.slug === t.slugEn);
    if (match) match.itSlug = t.slugIt;
}
