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
    }
];

export const cities: CityData[] = [
    {
        slug: "rome",
        name: "Rome",
        hero_image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&q=80&w=1996",
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
        hero_image: "/images/florence.jfif",
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
        hero_image: "https://images.unsplash.com/photo-1512411012351-4091a13e2f75?auto=format&fit=crop&q=80&w=2070",
        description: "Explore the pearl of the Adriatic with our professional chauffeurs.",
        popular_tours: ["Polignano a Mare Tour", "Alberobello Day Trip", "Bari Vecchia Walking Tour"]
    },
    {
        slug: "palermo",
        name: "Palermo",
        hero_image: "https://images.unsplash.com/photo-1541190356041-356e87a2fb0e?auto=format&fit=crop&q=80&w=2070",
        description: "Experience the crossroads of Mediterranean history in the comfort of a luxury SUV.",
        popular_tours: ["Mondello Beach Visit", "Palatine Chapel Tour", "Sicilian Street Food"]
    }
];

export const tours: TourData[] = [
    {
        slug: "tuscany-wine-tour",
        name: "Tuscany Wine Tour",
        city: "Florence",
        hero_image: "/images/Tuscany Wine.jpeg",
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
        highlights: ["Positano visit", "Ravello views", "Licensed Chauffeur", "Flexible route"],
        description: "Explore Positano, Amalfi, and Ravello in a single day with our professional drivers."
    },
    {
        slug: "lake-como",
        name: "Lake Como Tour",
        city: "Milan",
        hero_image: "/images/Lake Como.avif",
        highlights: ["Bellagio visit", "Varenna", "Private SUV", "Stunning views"],
        description: "Take a scenic drive from Milan to the most beautiful lake in the world."
    },
    {
        slug: "vatican",
        name: "Vatican Tour",
        city: "Rome",
        hero_image: "https://images.unsplash.com/photo-1531572753322-ad063cecc140?auto=format&fit=crop&q=80&w=2070",
        highlights: ["Vatican Museums", "St. Peters Basilica", "Sistine Chapel", "Skip-the-line tips"],
        description: "See the artistic wonders of the Vatican with a comfortable private transfer."
    },
    {
        slug: "dolomites",
        name: "Dolomites Tour",
        city: "Venice",
        hero_image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2070",
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
