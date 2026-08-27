



























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

export interface CityData {
    slug: string;
    name: string;
    hero_image: string;
    description: string;
    popular_tours: string[];
}

export interface TourData {
    slug: string;
    name: string;
    city: string;
    hero_image: string;
    alt_text: string;
    highlights: string[];
    description: string;
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
        hero_image: "/images/naples airport.jpeg",
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
        popular_tours: ["Uffizi Gallery Tour", "Wine Tasting in Chianti", "Pisa Half-Day Trip"]
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
        popular_tours: ["Bellagio Visit", "Villa Carlotta Tour", "Varenna Lakeside Walk"]
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
        description: "Take a scenic drive from Milan to the most beautiful lake in the world."
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
        faqs: [
            { q: 'How far is Lake Como from Milan by taxi?', a: 'Lake Como is approximately 50 km from Milan city centre, a journey of about 45 minutes by private taxi. From Malpensa Airport, the drive is around 60 km and takes about 50 minutes.' },
            { q: 'Can I get a taxi from Malpensa Airport directly to Lake Como?', a: 'Yes, we provide direct private transfers from Milan Malpensa Airport (MXP) to any town on Lake Como, including Como, Bellagio, Varenna, and Menaggio.' },
            { q: 'Can I book a return taxi from Lake Como to Milan?', a: 'Yes, we offer both single and return transfer bookings. Simply select a return trip when booking and specify your preferred pickup time.' },
        ],
        relatedLinks: [
            { href: '/distance/milan-to-lake-como-distance', label: 'Milan to Lake Como Distance Guide' },
        ],
    },
    {
        slug: 'rome-to-naples-taxi',
        from: 'Rome',
        to: 'Naples',
        title: 'Rome to Naples Taxi Transfer',
        hero_image: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?auto=format&fit=crop&q=60&w=1200',
        description: 'Travel from Rome to Naples with our private taxi service. Skip the crowded trains and enjoy a stress-free, direct door-to-door transfer with a professional driver and on-time pickup guarantee.',
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
        hero_image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&q=60&w=1200',
        description: 'Travel from Naples to the Amalfi Coast by private taxi and enjoy one of Italy\'s most scenic coastal drives. Our experienced drivers navigate the winding Amalfi roads safely, dropping you at Positano, Amalfi, or Ravello.',
        distance: '~65 km',
        duration: '~1.5 hours',
        highlights: ['Drop-off at Positano, Amalfi, or Ravello', 'Experienced drivers on Amalfi roads', 'Scenic coastal route', 'Transparent pricing on request', 'Free cancellation up to 24h'],
        faqs: [
            { q: 'How long is the taxi from Naples to Amalfi Coast?', a: 'The taxi from Naples to the Amalfi Coast takes approximately 1.5 hours (about 65 km), depending on traffic along the famous SS163 coastal road.' },
            { q: 'Which towns on the Amalfi Coast can you drop me off at?', a: 'We serve all Amalfi Coast towns, including Positano, Amalfi town, Ravello, Praiano, Maiori, and Cetara.' },
            { q: 'Is it safe to hire a taxi along the Amalfi Coast roads?', a: 'Yes. Our drivers are experts on the narrow, winding Amalfi Coast roads and hold all required local driving licenses for this unique terrain.' },
        ],
        relatedLinks: [
            { href: '/distance/naples-to-amalfi-coast-distance', label: 'Naples to Amalfi Coast Distance Guide' },
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
        description: 'Direct private transfer from Rome Fiumicino Airport to Civitavecchia cruise port. Ideal for cruise passengers who need to reach their ship quickly and reliably, with flight tracking and a guaranteed pickup.',
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
        description: 'Private transfer from Naples Capodichino Airport (NAP) to Sorrento. The easiest, most comfortable way to reach the Sorrento peninsula, avoiding the crowded Circumvesuviana train with door-to-door service.',
        distance: '~50 km', duration: '~1 hour 15 min', price: '€110',
        highlights: ['Meet & greet at Naples arrivals', 'Door-to-door to your Sorrento hotel', 'Child seats on request', 'Avoid the crowded train', 'Fixed all-inclusive price'],
        faqs: [
            { q: 'How far is Sorrento from Naples Airport?', a: 'Sorrento is about 50 km from Naples Airport, a drive of roughly 1 hour 15 minutes depending on traffic along the coast road.' },
            { q: 'Is a private transfer better than the train to Sorrento?', a: 'For comfort and luggage, yes. The private transfer is door-to-door with no changes, while the Circumvesuviana train is crowded and requires connections.' },
            { q: 'Can you continue to Positano or Amalfi?', a: 'Absolutely — we cover the whole Amalfi Coast. Just tell us your final destination and we will quote the full transfer.' },
        ],
        relatedLinks: [
            { href: '/distance/naples-airport-to-sorrento-distance', label: 'Naples Airport to Sorrento Distance Guide' },
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
        description: 'Private transfer from Catania Airport (CTA) to the clifftop resort of Taormina. The fastest, most comfortable way to reach Sicily\'s most famous town, with door-to-door service and optional Mount Etna views.',
        distance: '~60 km', duration: '~1 hour', price: '€90',
        highlights: ['Door-to-door to Taormina centre', 'Drop-off near the pedestrian zone', 'Optional Mount Etna add-on', 'English-speaking Sicilian driver', 'Fixed all-inclusive price'],
        faqs: [
            { q: 'How long is the transfer from Catania Airport to Taormina?', a: 'About 1 hour (around 60 km) along the coastal motorway, with the dramatic approach up to the clifftop town.' },
            { q: 'Can the driver get close to my Taormina hotel?', a: 'Taormina\'s historic centre is pedestrianised, so the driver drops you as close as legally possible and helps with luggage.' },
            { q: 'Can I add a Mount Etna visit?', a: 'Yes, Etna is a popular combined excursion — ask us about a Taormina-and-Etna day tour.' },
        ],
        relatedLinks: [
            { href: '/distance/catania-airport-to-taormina-distance', label: 'Catania Airport to Taormina Distance Guide' },
        ],
    },
    {
        slug: 'verona-airport-to-lake-garda-taxi', from: 'Verona Airport', to: 'Lake Garda',
        title: 'Verona Airport to Lake Garda Taxi Transfer', hero_image: '/images/Lake Como.webp',
        description: 'Private transfer from Verona Villafranca Airport to Lake Garda. Reach Sirmione, Bardolino, Lazise or any lakeside resort quickly with a door-to-door private car.',
        distance: '~35 km', duration: '~40 min', price: '€70',
        highlights: ['Closest airport to Lake Garda', 'Drop-off at any lakeside resort', 'Short, easy transfer', 'Flight tracking included', 'Fixed all-inclusive price'],
        faqs: [
            { q: 'How far is Lake Garda from Verona Airport?', a: 'The southern lake (Sirmione, Peschiera) is about 35 km from Verona Airport, roughly a 40-minute drive — Verona is the closest airport to Garda.' },
            { q: 'Which Lake Garda towns do you serve?', a: 'All of them, including Sirmione, Bardolino, Lazise, Peschiera, Garda, Malcesine and Riva del Garda.' },
            { q: 'Is the transfer suitable for families?', a: 'Yes, with child seats on request and space for luggage, it is ideal for families heading to the lake.' },
        ],
        relatedLinks: [
            { href: '/distance/verona-airport-to-lake-garda-distance', label: 'Verona Airport to Lake Garda Distance Guide' },
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
    },
    {
        slug: 'naples-to-sorrento-taxi', from: 'Naples', to: 'Sorrento',
        title: 'Naples to Sorrento Taxi Transfer', hero_image: '/images/almafi.webp',
        description: 'Private transfer from Naples city or port to Sorrento. The comfortable, door-to-door alternative to the crowded Circumvesuviana train, ideal for cruise passengers and city visitors alike.',
        distance: '~50 km', duration: '~1 hour 15 min', price: '€100',
        highlights: ['Door-to-door Naples to Sorrento', 'Avoid the crowded local train', 'Cruise port pickup available', 'Child seats on request', 'Fixed all-inclusive price'],
        faqs: [
            { q: 'How far is Sorrento from Naples?', a: 'About 50 km, a drive of roughly 1 hour 15 minutes depending on traffic.' },
            { q: 'Can you pick up from the Naples cruise port?', a: 'Yes, we offer cruise-port pickups to Sorrento with a guaranteed timed return for shore excursions.' },
            { q: 'Is a transfer better than the Circumvesuviana?', a: 'For comfort and luggage, yes — the local train is crowded and basic, while a transfer is door-to-door.' },
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
                'Arriving at Ciampino, you want to clear the terminal and get moving quickly, especially if a connecting flight is waiting at Fiumicino. Pre-booking guarantees a driver is ready and holding a name sign the moment you exit, rather than joining a taxi queue or working out bus and train connections after a late-night landing.',
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
