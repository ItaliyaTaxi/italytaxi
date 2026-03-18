



























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
        description: "Travel from Rome Fiumicino Airport to any Italian city in comfort and on time. Avoid long lines and enjoy door-to-door luxury service with our professional taxi fleet.",
        features: [
            "Flight tracking & delay monitoring",
            "Meet & greet service",
            "Fixed pricing",
            "24/7 availability",
            "Premium fleet"
        ]
    },
    {
        slug: "milan-malpensa",
        name: "Milan Malpensa Airport",
        code: "MXP",
        city: "Milan",
        hero_image: "/images/milan airport.jpg",
        description: "Travel from Milan Malpensa Airport to any Italian city in comfort and on time. Avoid long lines and enjoy door-to-door luxury service with our professional taxi fleet.",
        features: [
            "Flight tracking & delay monitoring",
            "Meet & greet service",
            "Fixed pricing",
            "24/7 availability",
            "Premium fleet"
        ]
    },
    {
        slug: "venice",
        name: "Venice Marco Polo Airport",
        code: "VCE",
        city: "Venice",
        hero_image: "/images/venice airport.webp",
        description: "Travel from Venice Marco Polo Airport to any Italian city in comfort and on time. Avoid long lines and enjoy door-to-door luxury service with our professional taxi fleet.",
        features: [
            "Flight tracking & delay monitoring",
            "Meet & greet service",
            "Fixed pricing",
            "24/7 availability",
            "Premium fleet"
        ]
    },
    {
        slug: "naples",
        name: "Naples Airport",
        code: "NAP",
        city: "Naples",
        hero_image: "/images/naples airport.jpeg",
        description: "Travel from Naples Airport to any Italian city in comfort and on time. Avoid long lines and enjoy door-to-door luxury service with our professional taxi fleet.",
        features: [
            "Flight tracking & delay monitoring",
            "Meet & greet service",
            "Fixed pricing",
            "24/7 availability",
            "Premium fleet"
        ]
    },
    {
        slug: "florence",
        name: "Florence Airport",
        code: "FLR",
        city: "Florence",
        hero_image: "/images/florence airport.jpg",
        description: "Travel from Florence Airport to any Italian city in comfort and on time. Avoid long lines and enjoy door-to-door luxury service with our professional taxi fleet.",
        features: [
            "Flight tracking & delay monitoring",
            "Meet & greet service",
            "Fixed pricing",
            "24/7 availability",
            "Premium fleet"
        ]
    },
    {
        slug: "bologna-marconi",
        name: "Bologna Marconi Airport",
        code: "BLQ",
        city: "Bologna",
        hero_image: "/images/florence airport.jpg",
        description: "Travel from Bologna Marconi Airport to any Italian city in comfort and on time. Door-to-door luxury service with our professional taxi fleet.",
        features: ["Flight tracking & delay monitoring", "Meet & greet service", "Fixed pricing", "24/7 availability", "Premium fleet"]
    },
    {
        slug: "catania-fontanarossa",
        name: "Catania Fontanarossa Airport",
        code: "CTA",
        city: "Catania",
        hero_image: "/images/naples airport.jpeg",
        description: "Travel from Catania Fontanarossa Airport to any Sicilian destination in comfort and on time.",
        features: ["Flight tracking & delay monitoring", "Meet & greet service", "Fixed pricing", "24/7 availability", "Premium fleet"]
    },
    {
        slug: "genoa",
        name: "Genoa Cristoforo Colombo Airport",
        code: "GOA",
        city: "Genoa",
        hero_image: "/images/milan airport.jpg",
        description: "Travel from Genoa Airport to the Ligurian Riviera and beyond in luxury and comfort.",
        features: ["Flight tracking & delay monitoring", "Meet & greet service", "Fixed pricing", "24/7 availability", "Premium fleet"]
    },
    {
        slug: "palermo",
        name: "Palermo Falcone Borsellino Airport",
        code: "PMO",
        city: "Palermo",
        hero_image: "/images/palermo-taxi.webp",
        description: "Travel from Palermo Airport to any destination in Sicily with our professional taxi service.",
        features: ["Flight tracking & delay monitoring", "Meet & greet service", "Fixed pricing", "24/7 availability", "Premium fleet"]
    },
    {
        slug: "bari",
        name: "Bari Karol Wojtyla Airport",
        code: "BRI",
        city: "Bari",
        hero_image: "/images/bari-taxi.webp",
        description: "Travel from Bari Airport to Puglia and beyond with our professional chauffeur service.",
        features: ["Flight tracking & delay monitoring", "Meet & greet service", "Fixed pricing", "24/7 availability", "Premium fleet"]
    },
    {
        slug: "milan-linate",
        name: "Milan Linate Airport",
        code: "LIN",
        city: "Milan",
        hero_image: "/images/milan airport.jpg",
        description: "Travel from Milan Linate Airport to the city centre or any Italian destination in comfort.",
        features: ["Flight tracking & delay monitoring", "Meet & greet service", "Fixed pricing", "24/7 availability", "Premium fleet"]
    },
    {
        slug: "pisa",
        name: "Pisa International Airport",
        code: "PSA",
        city: "Pisa",
        hero_image: "/images/florence airport.jpg",
        description: "Travel from Pisa Airport to Tuscany and beyond with our luxury private taxi service.",
        features: ["Flight tracking & delay monitoring", "Meet & greet service", "Fixed pricing", "24/7 availability", "Premium fleet"]
    },
    {
        slug: "rome-ciampino",
        name: "Rome Ciampino Airport",
        code: "CIA",
        city: "Rome",
        hero_image: "/images/rome airport.png",
        description: "Travel from Rome Ciampino Airport to any destination in Rome or Italy in comfort.",
        features: ["Flight tracking & delay monitoring", "Meet & greet service", "Fixed pricing", "24/7 availability", "Premium fleet"]
    },
    {
        slug: "turin",
        name: "Turin Caselle Airport",
        code: "TRN",
        city: "Turin",
        hero_image: "/images/milan airport.jpg",
        description: "Travel from Turin Airport to the Piedmont region and beyond with our professional drivers.",
        features: ["Flight tracking & delay monitoring", "Meet & greet service", "Fixed pricing", "24/7 availability", "Premium fleet"]
    },
    {
        slug: "verona",
        name: "Verona Villafranca Airport",
        code: "VRN",
        city: "Verona",
        hero_image: "/images/venice airport.webp",
        description: "Travel from Verona Airport to Lake Garda, the Dolomites, or any Italian city in comfort.",
        features: ["Flight tracking & delay monitoring", "Meet & greet service", "Fixed pricing", "24/7 availability", "Premium fleet"]
    }
];

export const cities: CityData[] = [
    {
        slug: "rome",
        name: "Rome",
        hero_image: "https://images.unsplash.com/photo-1529260830199-42c24126f198?auto=format&fit=crop&q=80&w=2070",
        description: "Explore Rome in comfort with our professional drivers. From city landmarks like the Colosseum to hidden gems, travel at your own pace.",
        popular_tours: ["Rome Night Tour", "Vatican City Tour", "Tivoli Gardens"]
    },
    {
        slug: "milan",
        name: "Milan",
        hero_image: "https://images.unsplash.com/photo-1520986606214-8b456906c813?auto=format&fit=crop&q=80&w=2070",
        description: "Discover Milan's fashion, history, and business districts with our premium taxi services.",
        popular_tours: ["Milan Duomo Tour", "Lake Como Day Trip", "Last Supper Visit"]
    },
    {
        slug: "florence",
        name: "Florence",
        hero_image: "https://images.unsplash.com/photo-1543429776-2782fc8e1acd?auto=format&fit=crop&q=80&w=2070",
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
        description: "Explore the pearl of the Adriatic with our professional chauffeurs.",
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
        slug: "rome-taxi-service",
        name: "Rome",
        hero_image: "https://images.unsplash.com/photo-1529260830199-42c24126f198?auto=format&fit=crop&q=80&w=2070",
        description: "Explore Rome in comfort with our professional drivers. From city landmarks like the Colosseum to hidden gems, travel at your own pace.",
        popular_tours: ["Rome Night Tour", "Vatican City Tour", "Tivoli Gardens"]
    },
    {
        slug: "milan-taxi-service",
        name: "Milan",
        hero_image: "https://images.unsplash.com/photo-1520986606214-8b456906c813?auto=format&fit=crop&q=80&w=2070",
        description: "Discover Milan's fashion, history, and business districts with our premium taxi services.",
        popular_tours: ["Milan Duomo Tour", "Lake Como Day Trip", "Last Supper Visit"]
    },
    {
        slug: "florence-taxi-service",
        name: "Florence",
        hero_image: "https://images.unsplash.com/photo-1543429776-2782fc8e1acd?auto=format&fit=crop&q=80&w=2070",
        description: "The cradle of the Renaissance. Travel between museums and piazzas in total elegance.",
        popular_tours: ["Uffizi Gallery Tour", "Wine Tasting in Chianti", "Pisa Half-Day Trip"]
    },
    {
        slug: "venice-taxi-service",
        name: "Venice",
        hero_image: "/images/venice.webp",
        description: "Arrive at Piazzale Roma or your hotel terminal in luxury and style.",
        popular_tours: ["Murano & Burano Tour", "Grand Canal Experience", "Gondola Private Docking"]
    },
    {
        slug: "naples-taxi-service",
        name: "Naples",
        hero_image: "/images/naples.jpg",
        description: "The gateway to the Amalfi Coast. Experience Southern Italy's vibrant spirit with our safe taxi rides.",
        popular_tours: ["Pompeii & Vesuvius", "Amalfi Coast Drive", "Capri Island Tour"]
    },
    {
        slug: "bologna-taxi-service",
        name: "Bologna",
        hero_image: "/images/Bologna.jpg",
        description: "The culinary capital of Italy. Move between piazzas and porticos in professional comfort.",
        popular_tours: ["Food & Ferrari Tour", "Medieval Towers Visit", "Modena Balsamic Experience"]
    },
    {
        slug: "palermo-taxi-service",
        name: "Palermo",
        hero_image: "/images/palermo-taxi.webp",
        description: "Experience the crossroads of Mediterranean history in the comfort of a luxury SUV.",
        popular_tours: ["Mondello Beach Visit", "Palatine Chapel Tour", "Sicilian Street Food"]
    },
    {
        slug: "amalfi-taxi-service",
        name: "Amalfi",
        hero_image: "/images/almafi.webp",
        description: "Travel along the breathtaking Amalfi Coast with professional local drivers.",
        popular_tours: ["Positano Day Trip", "Ravello Gardens", "Amalfi Cathedral Visit"]
    },
    {
        slug: "como-taxi-service",
        name: "Como",
        hero_image: "/images/Lake Como.avif",
        description: "Explore the stunning shores of Lake Como with our luxury taxi service.",
        popular_tours: ["Bellagio Visit", "Villa Carlotta Tour", "Varenna Lakeside Walk"]
    },
    {
        slug: "amalfi",
        name: "Amalfi",
        hero_image: "/images/almafi.webp",
        description: "Travel along the breathtaking Amalfi Coast with professional local drivers.",
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
        hero_image: "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&q=80&w=2070",
        description: "Discover the hilltop jewel of the Amalfi Coast with panoramic views and elegant villas.",
        popular_tours: ["Villa Rufolo Gardens", "Villa Cimbrone Visit", "Amalfi Day Trip"]
    },
    {
        slug: "portofino",
        name: "Portofino",
        hero_image: "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&q=80&w=2070",
        description: "Arrive in style at one of Italy's most glamorous harbour villages.",
        popular_tours: ["Santa Margherita Tour", "Cinque Terre Day Trip", "Liguria Coastal Drive"]
    },
    {
        slug: "taormina",
        name: "Taormina",
        hero_image: "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&q=80&w=2070",
        description: "Experience Sicily's crown jewel perched above the Ionian Sea with our premium transfer service.",
        popular_tours: ["Greek Theatre Visit", "Mount Etna Day Trip", "Isola Bella Beach"]
    },
    {
        slug: "positano",
        name: "Positano",
        hero_image: "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&q=80&w=2070",
        description: "Reach Positano's iconic cliffside village with ease aboard our luxury vehicles.",
        popular_tours: ["Amalfi Drive", "Capri Day Trip", "Praiano Sunset Tour"]
    },
    {
        slug: "sorrento",
        name: "Sorrento",
        hero_image: "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&q=80&w=2070",
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
        alt_text: "Scenic coastal view of Positano on the Amalfi Coast with a private chauffeur Mercedes parked",
        highlights: ["Positano visit", "Ravello views", "Licensed Chauffeur", "Flexible route"],
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
        hero_image: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&q=80&w=2070",
        alt_text: "St. Peter's Basilica at the Vatican City in Rome",
        highlights: ["Vatican Museums", "St. Peters Basilica", "Sistine Chapel", "Skip-the-line tips"],
        description: "See the artistic wonders of the Vatican with a comfortable private transfer."
    },
    {
        slug: "dolomites",
        name: "Dolomites Tour",
        city: "Venice",
        hero_image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2070",
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
