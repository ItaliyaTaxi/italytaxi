



























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
        description: "Travel from Bari Airport to Puglia and beyond with our professional taxi service.",
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
        slug: "rome-taxi-service",
        name: "Rome",
        hero_image: "https://images.unsplash.com/photo-1529260830199-42c24126f198?auto=format&fit=crop&q=60&w=1200",
        description: "Explore Rome in comfort with our professional drivers. From city landmarks like the Colosseum to hidden gems, travel at your own pace.",
        popular_tours: ["Rome Night Tour", "Vatican City Tour", "Tivoli Gardens"]
    },
    {
        slug: "milan-taxi-service",
        name: "Milan",
        hero_image: "https://images.unsplash.com/photo-1520986606214-8b456906c813?auto=format&fit=crop&q=60&w=1200",
        description: "Discover Milan's fashion, history, and business districts with our premium taxi services.",
        popular_tours: ["Milan Duomo Tour", "Lake Como Day Trip", "Last Supper Visit"]
    },
    {
        slug: "florence-taxi-service",
        name: "Florence",
        hero_image: "https://images.unsplash.com/photo-1543429776-2782fc8e1acd?auto=format&fit=crop&q=60&w=1200",
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
    highlights: string[];
    faqs: { q: string; a: string }[];
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
    },
];
