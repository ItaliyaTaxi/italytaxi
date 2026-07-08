// Data for the programmatic Milan airport ⇄ hotel transfer cluster.
// Three airports (Malpensa MXP, Linate LIN, Bergamo BGY) × every hotel × both
// directions = 6 root-level pages per hotel. Rendered by the root [slug] route
// alongside the Rome cluster. Every hotel carries unique, factual location
// content (district, landmarks, description) so no two pages duplicate.
//
// Distances/times are realistic approximations grounded in each airport's real
// position relative to central Milan (Malpensa ~50 km NW, Linate ~8 km E,
// Bergamo ~50 km NE). Coordinates are approximate district-level references.

export interface MilanAirport {
    code: string;
    name: string;        // full name
    short: string;       // e.g. "Malpensa"
    slugPart: string;    // slug token, e.g. "milan-malpensa-airport"
    airportPage: string; // existing guide page, e.g. "/airport/milan-malpensa"
    blurb: string;
    about: string;
    terminals: string;
    meetingPoint: string;   // where the driver meets arrivals
    recommendedArrival: string;
    publicAlt: string;      // the public-transport alternative (for the "why" section)
    distance: string;       // to central Milan
    duration: string;
}

export interface Leg { distance: string; duration: string; }

export interface MilanHotel {
    slug: string;            // e.g. "excelsior-hotel-gallia"
    name: string;
    address: string;         // street/area (confident, district-level)
    district: string;
    lat: number;             // approximate (district-level)
    lng: number;
    stars: number;
    image: string;           // local featured image
    landmarks: string[];     // nearby landmarks
    nearby: { place: string; note: string }[];
    description: string;     // 2–3 unique, factual sentences
    dining: string;          // one factual sentence
    suitedFor: string;
    // Optional per-airport leg override (else the airport default is used).
    legs?: { mxp?: Leg; lin?: Leg; bgy?: Leg };
}

const IMG = '/images/milan airport.jpg';

export const milanAirports: MilanAirport[] = [
    {
        code: 'MXP', name: 'Milan Malpensa Airport', short: 'Malpensa', slugPart: 'milan-malpensa-airport',
        airportPage: '/airport/milan-malpensa',
        blurb: 'Milan\'s main intercontinental gateway, about 50 km northwest of the city.',
        about: 'Milan Malpensa (MXP) is northern Italy\'s principal long-haul and international gateway, roughly 50 km northwest of central Milan. It has two terminals — Terminal 1 for most full-service and long-haul carriers and Terminal 2 for low-cost airlines — and, because it sits well outside the city, a private transfer is the most comfortable way to cover the motorway journey.',
        terminals: 'Terminals 1 and 2 — check your airline\'s terminal on your boarding pass.',
        meetingPoint: 'the arrivals hall of your terminal, by the exit from baggage reclaim, with a name sign',
        recommendedArrival: 'Arrive about 3 hours before long-haul/intercontinental flights and 2 hours before European departures.',
        publicAlt: 'the Malpensa Express train to Cadorna or Centrale (then a metro or taxi to your hotel) or a shared shuttle bus',
        distance: '~50 km', duration: '~50–60 min',
    },
    {
        code: 'LIN', name: 'Milan Linate Airport', short: 'Linate', slugPart: 'milan-linate-airport',
        airportPage: '/airport/milan-linate',
        blurb: 'Milan\'s close-in city airport, only about 8 km east of the centre.',
        about: 'Milan Linate (LIN) is the city\'s convenient close-in airport, only about 8 km east of the centre and used mainly for domestic and short-haul European flights. Its compact single terminal is quick to move through, and the M4 metro line now links it to the city — but a private transfer still offers the fastest door-to-door ride with luggage.',
        terminals: 'A single compact passenger terminal — quick and easy to navigate.',
        meetingPoint: 'the arrivals hall by baggage reclaim, with a name sign',
        recommendedArrival: 'Arrive about 2 hours before departure; the terminal is small but security can queue at peak times.',
        publicAlt: 'the M4 metro line or a city bus into the centre',
        distance: '~8 km', duration: '~20–30 min',
    },
    {
        code: 'BGY', name: 'Milan Bergamo Airport', short: 'Bergamo', slugPart: 'milan-bergamo-airport',
        airportPage: '/airport/bergamo',
        blurb: 'Orio al Serio, Milan\'s low-cost hub, about 50 km northeast near Bergamo.',
        about: 'Milan Bergamo (BGY), officially Orio al Serio, is a major low-cost hub about 50 km northeast of Milan beside the city of Bergamo, used heavily by Ryanair and other budget carriers. There is no direct rail link into central Milan, so travellers rely on coaches or a private transfer — the latter being the only true door-to-door option with luggage.',
        terminals: 'A single passenger terminal serving low-cost carriers.',
        meetingPoint: 'the arrivals hall after baggage reclaim, with a name sign',
        recommendedArrival: 'Arrive about 2 hours before departure; low-cost boarding gates can close strictly on time.',
        publicAlt: 'a coach to Milano Centrale (then onward transport) — there is no direct train',
        distance: '~50 km', duration: '~55–65 min',
    },
];

export const milanHotels: MilanHotel[] = [
    {
        slug: 'excelsior-hotel-gallia', name: 'Excelsior Hotel Gallia', address: 'Piazza Duca d\'Aosta, near Milano Centrale', district: 'Centrale / Repubblica', lat: 45.4849, lng: 9.2030, stars: 5, image: IMG,
        landmarks: ['Milano Centrale station', 'Piazza della Repubblica', 'Corso Buenos Aires'],
        nearby: [{ place: 'Milano Centrale station', note: '2 min walk' }, { place: 'Piazza della Repubblica', note: '10 min walk' }, { place: 'Duomo (by metro)', note: '10 min' }],
        description: 'The Excelsior Hotel Gallia is a landmark Belle Époque property facing Milano Centrale, part of the Luxury Collection. Its rooftop terrace and spa look out over the station\'s monumental façade, and its position beside the city\'s main rail hub makes onward travel across Italy effortless.',
        dining: 'Known for its Terrazza Gallia rooftop restaurant and bar overlooking the station square.',
        suitedFor: 'business travellers and rail connectors who want luxury steps from Milano Centrale',
    },
    {
        slug: 'park-hyatt-milano', name: 'Park Hyatt Milano', address: 'Via Tommaso Grossi, beside the Galleria', district: 'Duomo', lat: 45.4655, lng: 9.1900, stars: 5, image: IMG,
        landmarks: ['Duomo', 'Galleria Vittorio Emanuele II', 'Teatro alla Scala'],
        nearby: [{ place: 'Galleria Vittorio Emanuele II', note: '1 min walk' }, { place: 'Duomo', note: '3 min walk' }, { place: 'La Scala', note: '4 min walk' }],
        description: 'The Park Hyatt Milano occupies an early-20th-century palazzo moments from the Galleria Vittorio Emanuele II, right beside the Duomo. Its contemporary interiors sit within a historic shell, giving one of the most central luxury addresses in the city.',
        dining: 'Home to a refined restaurant under a glass cupola in the heart of the Duomo district.',
        suitedFor: 'luxury travellers who want to be steps from the Duomo and the Galleria',
    },
    {
        slug: 'mandarin-oriental-milan', name: 'Mandarin Oriental, Milan', address: 'Via Andegari, Brera edge near La Scala', district: 'Brera / Quadrilatero', lat: 45.4680, lng: 9.1912, stars: 5, image: IMG,
        landmarks: ['Teatro alla Scala', 'Via Montenapoleone', 'Brera district'],
        nearby: [{ place: 'La Scala', note: '4 min walk' }, { place: 'Via Montenapoleone', note: '5 min walk' }, { place: 'Duomo', note: '8 min walk' }],
        description: 'The Mandarin Oriental, Milan spreads across four restored 18th-century buildings on Via Andegari, between La Scala and the Montenapoleone fashion quarter. It combines a discreet courtyard-style calm with one of the city\'s most acclaimed spas.',
        dining: 'Houses a Michelin-recognised restaurant and a popular garden bar just off the fashion district.',
        suitedFor: 'luxury and fashion travellers wanting a quiet base between La Scala and Montenapoleone',
    },
    {
        slug: 'bulgari-hotel-milano', name: 'Bulgari Hotel Milano', address: 'Via Privata Fratelli Gabba, Brera', district: 'Brera', lat: 45.4699, lng: 9.1889, stars: 5, image: IMG,
        landmarks: ['Brera district', 'Pinacoteca di Brera', 'Botanical Garden of Brera'],
        nearby: [{ place: 'Pinacoteca di Brera', note: '5 min walk' }, { place: 'Sforza Castle', note: '10 min walk' }, { place: 'Montenapoleone', note: '6 min walk' }],
        description: 'The Bulgari Hotel Milano hides down a private street in Brera, wrapped around a large private garden that borders the city\'s botanical gardens. This rare green seclusion in the middle of Milan, combined with its jeweller\'s pedigree, makes it one of the city\'s most exclusive stays.',
        dining: 'Famous for its garden bar and terrace, a fashionable meeting point in Brera.',
        suitedFor: 'luxury travellers seeking a garden retreat in the artistic Brera quarter',
    },
    {
        slug: 'armani-hotel-milano', name: 'Armani Hotel Milano', address: 'Via Manzoni, Quadrilatero della Moda', district: 'Quadrilatero della Moda', lat: 45.4693, lng: 9.1936, stars: 5, image: IMG,
        landmarks: ['Via Montenapoleone', 'Via Manzoni', 'La Scala'],
        nearby: [{ place: 'Via Montenapoleone', note: '3 min walk' }, { place: 'La Scala', note: '5 min walk' }, { place: 'Duomo', note: '8 min walk' }],
        description: 'The Armani Hotel Milano sits on Via Manzoni at the edge of the Quadrilatero della Moda, designed entirely in Giorgio Armani\'s signature aesthetic. Its top-floor spa and restaurant enjoy sweeping views over the fashion district and the city rooftops.',
        dining: 'Features a rooftop restaurant and bar with panoramic views over the Quadrilatero.',
        suitedFor: 'design and fashion lovers who want to stay in the heart of the shopping district',
    },
    {
        slug: 'four-seasons-hotel-milano', name: 'Four Seasons Hotel Milano', address: 'Via Gesù, Quadrilatero della Moda', district: 'Quadrilatero della Moda', lat: 45.4692, lng: 9.1957, stars: 5, image: IMG,
        landmarks: ['Via Montenapoleone', 'Via Sant\'Andrea', 'Giardini Montanelli'],
        nearby: [{ place: 'Via Montenapoleone', note: '2 min walk' }, { place: 'Duomo', note: '10 min walk' }, { place: 'Giardini Montanelli', note: '6 min walk' }],
        description: 'The Four Seasons Hotel Milano occupies a restored 15th-century convent on Via Gesù, deep within the Quadrilatero della Moda. Original frescoes, columns and a cloistered courtyard survive around a tranquil garden, a rare pocket of calm in the fashion district.',
        dining: 'Its garden restaurant and courtyard are a serene retreat amid the boutiques.',
        suitedFor: 'luxury travellers wanting a historic, garden-set convent in the fashion quarter',
    },
    {
        slug: 'hotel-principe-di-savoia', name: 'Hotel Principe di Savoia', address: 'Piazza della Repubblica', district: 'Repubblica', lat: 45.4790, lng: 9.1968, stars: 5, image: IMG,
        landmarks: ['Piazza della Repubblica', 'Porta Nuova', 'Milano Centrale'],
        nearby: [{ place: 'Piazza della Repubblica', note: 'on the square' }, { place: 'Porta Nuova / Gae Aulenti', note: '8 min walk' }, { place: 'Milano Centrale', note: '10 min walk' }],
        description: 'The Hotel Principe di Savoia is a grand Dorchester Collection landmark on Piazza della Repubblica, long favoured by visiting royalty and celebrities. Its opulent public rooms and top-floor spa sit between the Centrale station and the modern Porta Nuova skyline.',
        dining: 'Home to an elegant restaurant and a famous bar on the grand piazza.',
        suitedFor: 'classic-luxury travellers wanting a landmark hotel near Centrale and Porta Nuova',
    },
    {
        slug: 'grand-hotel-et-de-milan', name: 'Grand Hotel et de Milan', address: 'Via Manzoni, near La Scala', district: 'Quadrilatero / Brera', lat: 45.4685, lng: 9.1919, stars: 5, image: IMG,
        landmarks: ['Teatro alla Scala', 'Via Montenapoleone', 'Via Manzoni'],
        nearby: [{ place: 'La Scala', note: '4 min walk' }, { place: 'Montenapoleone', note: '3 min walk' }, { place: 'Duomo', note: '9 min walk' }],
        description: 'The Grand Hotel et de Milan is a historic 19th-century hotel on Via Manzoni, famously the residence of the composer Giuseppe Verdi. Steps from La Scala, it preserves a refined period atmosphere in the heart of the city\'s cultural quarter.',
        dining: 'Keeps a classic restaurant and the storied Caruso bar beloved of opera-goers.',
        suitedFor: 'culture and opera lovers wanting historic grandeur beside La Scala',
    },
    {
        slug: 'the-westin-palace-milan', name: 'The Westin Palace, Milan', address: 'Piazza della Repubblica', district: 'Repubblica', lat: 45.4785, lng: 9.1975, stars: 5, image: IMG,
        landmarks: ['Piazza della Repubblica', 'Milano Centrale', 'Corso Buenos Aires'],
        nearby: [{ place: 'Piazza della Repubblica', note: '2 min walk' }, { place: 'Milano Centrale', note: '12 min walk' }, { place: 'Porta Nuova', note: '10 min walk' }],
        description: 'The Westin Palace, Milan stands on Piazza della Repubblica, a short walk from both Centrale station and the Porta Nuova business district. Its classic interiors and central position suit business and leisure travellers alike.',
        dining: 'Offers refined dining on the grand square between the centre and Centrale.',
        suitedFor: 'business travellers wanting a well-connected base near Repubblica',
    },
    {
        slug: 'carlton-hotel-baglioni', name: 'Carlton Hotel Baglioni', address: 'Via Senato, off Via della Spiga', district: 'Quadrilatero della Moda', lat: 45.4712, lng: 9.1975, stars: 5, image: IMG,
        landmarks: ['Via della Spiga', 'Via Montenapoleone', 'Giardini Montanelli'],
        nearby: [{ place: 'Via della Spiga', note: '1 min walk' }, { place: 'Montenapoleone', note: '4 min walk' }, { place: 'Duomo', note: '12 min walk' }],
        description: 'The Carlton Hotel Baglioni opens directly onto Via della Spiga, one of the four streets of the fashion quadrilateral. Its classic Italian interiors place guests among the flagship boutiques of the Montenapoleone district.',
        dining: 'Its Il Baretto restaurant is a long-standing favourite in the fashion district.',
        suitedFor: 'shoppers and style travellers who want to step straight onto Via della Spiga',
    },
    {
        slug: 'palazzo-parigi-hotel', name: 'Palazzo Parigi Hotel & Grand Spa', address: 'Corso di Porta Nuova, Brera', district: 'Brera', lat: 45.4735, lng: 9.1930, stars: 5, image: IMG,
        landmarks: ['Brera district', 'Sforza Castle', 'Via Montenapoleone'],
        nearby: [{ place: 'Brera district', note: '5 min walk' }, { place: 'Sforza Castle', note: '12 min walk' }, { place: 'Montenapoleone', note: '8 min walk' }],
        description: 'Palazzo Parigi sits on the edge of Brera on Corso di Porta Nuova, an elegant palazzo with a large grand spa and private gardens. Its light-filled rooms and central-yet-quiet setting bridge the fashion and artistic districts.',
        dining: 'Features a bright restaurant and a garden terrace uncommon for central Milan.',
        suitedFor: 'luxury travellers wanting space and a spa between Brera and Montenapoleone',
    },
    {
        slug: 'chateau-monfort', name: 'Château Monfort', address: 'Corso Concordia, near Porta Venezia', district: 'Porta Venezia', lat: 45.4692, lng: 9.2085, stars: 5, image: IMG,
        landmarks: ['Porta Venezia', 'Giardini Montanelli', 'Corso Buenos Aires'],
        nearby: [{ place: 'Porta Venezia', note: '6 min walk' }, { place: 'Giardini Montanelli', note: '8 min walk' }, { place: 'Duomo (by metro)', note: '10 min' }],
        description: 'Château Monfort is a fairy-tale-themed design hotel in a Liberty-style building near Porta Venezia, part of the Relais & Châteaux family. Its whimsical, romantic interiors set it apart from Milan\'s more classic luxury hotels.',
        dining: 'Known for a characterful restaurant and a spa in an ornate historic building.',
        suitedFor: 'couples and design lovers wanting something romantic near Porta Venezia',
    },
    {
        slug: 'me-milan-il-duca', name: 'ME Milan Il Duca', address: 'Piazza della Repubblica', district: 'Repubblica', lat: 45.4795, lng: 9.1958, stars: 5, image: IMG,
        landmarks: ['Piazza della Repubblica', 'Porta Nuova', 'Corso Como'],
        nearby: [{ place: 'Piazza della Repubblica', note: '1 min walk' }, { place: 'Corso Como nightlife', note: '8 min walk' }, { place: 'Porta Nuova', note: '7 min walk' }],
        description: 'ME Milan Il Duca is a contemporary lifestyle hotel on Piazza della Repubblica, known for its rooftop bar overlooking the Porta Nuova skyline. Its modern design and social scene appeal to a younger luxury crowd.',
        dining: 'Its rooftop lounge is one of the city\'s see-and-be-seen sundown spots.',
        suitedFor: 'design-led travellers wanting a rooftop scene near Corso Como and Porta Nuova',
    },
    {
        slug: 'hotel-viu-milan', name: 'Hotel VIU Milan', address: 'Via Aristotile Fioravanti, near Monumentale', district: 'Chinatown / Monumentale', lat: 45.4855, lng: 9.1770, stars: 5, image: IMG,
        landmarks: ['Cimitero Monumentale', 'Corso Como', 'Chinatown (Via Paolo Sarpi)'],
        nearby: [{ place: 'Via Paolo Sarpi (Chinatown)', note: '5 min walk' }, { place: 'Corso Como', note: '12 min walk' }, { place: 'Monumentale cemetery', note: '6 min walk' }],
        description: 'Hotel VIU Milan is a contemporary design hotel with the city\'s notable rooftop pool, set near the Monumentale cemetery and the lively Sarpi (Chinatown) district. Its green, plant-clad façade and modern rooms suit style-conscious travellers.',
        dining: 'Features a rooftop pool bar and a Michelin-recognised restaurant.',
        suitedFor: 'design travellers wanting a rooftop pool away from the tourist core',
    },
    {
        slug: 'sina-the-gray', name: 'Sina The Gray', address: 'Via San Raffaele, beside the Galleria', district: 'Duomo', lat: 45.4648, lng: 9.1907, stars: 5, image: IMG,
        landmarks: ['Duomo', 'Galleria Vittorio Emanuele II', 'La Scala'],
        nearby: [{ place: 'Galleria', note: '1 min walk' }, { place: 'Duomo', note: '3 min walk' }, { place: 'La Scala', note: '5 min walk' }],
        description: 'Sina The Gray is an intimate design hotel on Via San Raffaele, essentially beside the Galleria and the Duomo. Its bold, individually styled rooms offer a boutique alternative in the most central position in Milan.',
        dining: 'Its restaurant and bar are a fashionable spot a step from the Galleria.',
        suitedFor: 'design lovers wanting a small luxury hotel right by the Duomo',
    },
    {
        slug: 'rosa-grand-milano', name: 'Rosa Grand Milano', address: 'Piazza Fontana, behind the Duomo', district: 'Duomo', lat: 45.4635, lng: 9.1922, stars: 4, image: IMG,
        landmarks: ['Duomo', 'Piazza Fontana', 'Galleria Vittorio Emanuele II'],
        nearby: [{ place: 'Duomo', note: '3 min walk' }, { place: 'Galleria', note: '4 min walk' }, { place: 'La Scala', note: '7 min walk' }],
        description: 'The Rosa Grand Milano is a large modern hotel on Piazza Fontana, directly behind the Duomo. Its contemporary rooms and central position make it a practical, well-located base a couple of minutes from the cathedral.',
        dining: 'Has a piazza-side restaurant and bar just behind the Duomo.',
        suitedFor: 'travellers wanting a modern, very central hotel steps from the Duomo',
    },
    {
        slug: 'room-mate-giulia', name: 'Room Mate Giulia', address: 'Via Silvio Pellico, by the Galleria', district: 'Duomo', lat: 45.4657, lng: 9.1897, stars: 4, image: IMG,
        landmarks: ['Galleria Vittorio Emanuele II', 'Duomo', 'La Scala'],
        nearby: [{ place: 'Galleria', note: '1 min walk' }, { place: 'Duomo', note: '3 min walk' }, { place: 'La Scala', note: '4 min walk' }],
        description: 'Room Mate Giulia is a colourful design hotel on Via Silvio Pellico, quite literally alongside the Galleria Vittorio Emanuele II. Its playful Patricia Urquiola interiors offer a stylish mid-luxury stay in an unbeatable central spot.',
        dining: 'Offers a relaxed café-bar moments from the Galleria arcade.',
        suitedFor: 'design-minded travellers wanting a central boutique feel by the Galleria',
    },
    {
        slug: 'hotel-spadari-al-duomo', name: 'Hotel Spadari al Duomo', address: 'Via Spadari, near the Duomo', district: 'Duomo', lat: 45.4634, lng: 9.1875, stars: 4, image: IMG,
        landmarks: ['Duomo', 'Peck gourmet store', 'Galleria Vittorio Emanuele II'],
        nearby: [{ place: 'Duomo', note: '4 min walk' }, { place: 'Galleria', note: '5 min walk' }, { place: 'Pinacoteca Ambrosiana', note: '4 min walk' }],
        description: 'The Hotel Spadari al Duomo is an art-filled boutique hotel on Via Spadari, beside the celebrated Peck gourmet emporium and a short walk from the Duomo. Contemporary Italian artworks fill its intimate, design-led rooms.',
        dining: 'Sits amid Milan\'s finest food shops in the streets behind the cathedral.',
        suitedFor: 'art and food lovers wanting a small design hotel near the Duomo',
    },
    {
        slug: 'hotel-dei-cavalieri-milano', name: 'Hotel Dei Cavalieri', address: 'Piazza Missori, south of the Duomo', district: 'Duomo / Missori', lat: 45.4608, lng: 9.1885, stars: 4, image: IMG,
        landmarks: ['Duomo', 'Piazza Missori', 'Basilica of San Nazaro'],
        nearby: [{ place: 'Duomo', note: '6 min walk' }, { place: 'Piazza Missori (metro)', note: '2 min walk' }, { place: 'Università Statale', note: '6 min walk' }],
        description: 'The Hotel Dei Cavalieri is a long-established hotel on Piazza Missori, just south of the Duomo, known for its panoramic rooftop terrace. Its reliable comfort and central location suit both business and leisure stays.',
        dining: 'Features a rooftop restaurant with views toward the cathedral.',
        suitedFor: 'travellers wanting dependable comfort a short walk from the Duomo',
    },
    {
        slug: 'hotel-milano-scala', name: 'Hotel Milano Scala', address: 'Via dell\'Orso, Brera', district: 'Brera', lat: 45.4676, lng: 9.1866, stars: 4, image: IMG,
        landmarks: ['Teatro alla Scala', 'Brera district', 'Sforza Castle'],
        nearby: [{ place: 'La Scala', note: '5 min walk' }, { place: 'Brera', note: '4 min walk' }, { place: 'Sforza Castle', note: '10 min walk' }],
        description: 'Hotel Milano Scala is an eco-conscious boutique hotel on Via dell\'Orso in Brera, with a rooftop terrace looking over the district\'s rooftops. Music-themed and centrally placed, it is a short walk from La Scala.',
        dining: 'Its rooftop bar offers a quiet Brera panorama near the opera house.',
        suitedFor: 'culture lovers wanting a boutique, green hotel in Brera',
    },
    {
        slug: 'nh-milano-touring', name: 'NH Milano Touring', address: 'Via Tarchetti, near Repubblica', district: 'Repubblica', lat: 45.4780, lng: 9.1990, stars: 4, image: IMG,
        landmarks: ['Piazza della Repubblica', 'Giardini Montanelli', 'Porta Nuova'],
        nearby: [{ place: 'Piazza della Repubblica', note: '4 min walk' }, { place: 'Giardini Montanelli', note: '6 min walk' }, { place: 'Porta Nuova', note: '9 min walk' }],
        description: 'The NH Milano Touring is a comfortable upper-midscale hotel near Piazza della Repubblica, well placed between the centre, the gardens and the Porta Nuova business district. It is a practical, well-connected base for city stays.',
        dining: 'Offers straightforward dining close to the Repubblica metro.',
        suitedFor: 'business and value travellers wanting a reliable base near Repubblica',
    },
    {
        slug: 'hotel-berna-milan', name: 'Hotel Berna', address: 'Via Napo Torriani, by Milano Centrale', district: 'Centrale', lat: 45.4838, lng: 9.2010, stars: 4, image: IMG,
        landmarks: ['Milano Centrale station', 'Corso Buenos Aires', 'Piazza della Repubblica'],
        nearby: [{ place: 'Milano Centrale', note: '4 min walk' }, { place: 'Corso Buenos Aires', note: '8 min walk' }, { place: 'Repubblica', note: '10 min walk' }],
        description: 'The Hotel Berna is a well-run family-owned hotel on Via Napo Torriani, a short walk from Milano Centrale. Praised for its service and location, it is a convenient choice for travellers arriving by train or connecting onward.',
        dining: 'Provides comfortable dining a few minutes from the station.',
        suitedFor: 'rail travellers and families wanting friendly comfort near Centrale',
    },
    {
        slug: 'nyx-hotel-milan', name: 'NYX Hotel Milan', address: 'Piazza IV Novembre, by Milano Centrale', district: 'Centrale', lat: 45.4845, lng: 9.2000, stars: 4, image: IMG,
        landmarks: ['Milano Centrale station', 'Piazza della Repubblica', 'Corso Buenos Aires'],
        nearby: [{ place: 'Milano Centrale', note: '2 min walk' }, { place: 'Piazza della Repubblica', note: '9 min walk' }, { place: 'Corso Buenos Aires', note: '7 min walk' }],
        description: 'The NYX Hotel Milan is a lively design hotel on Piazza IV Novembre, directly facing Milano Centrale. Its street-art-inspired interiors and buzzy bar give a contemporary feel right beside the main station.',
        dining: 'Its ground-floor bar and restaurant are a social hub by the station.',
        suitedFor: 'younger travellers wanting a design hotel steps from Centrale',
    },
    {
        slug: 'radisson-collection-santa-sofia-milan', name: 'Radisson Collection Hotel, Santa Sofia Milan', address: 'Via Santa Sofia, south of the Duomo', district: 'Missori / Crocetta', lat: 45.4570, lng: 9.1930, stars: 4, image: IMG,
        landmarks: ['Duomo', 'Università Statale', 'Fondazione Prada (by tram)'],
        nearby: [{ place: 'Duomo', note: '12 min walk' }, { place: 'Crocetta metro', note: '5 min walk' }, { place: 'Bocconi University', note: '10 min walk' }],
        description: 'The Radisson Collection Hotel, Santa Sofia sits on Via Santa Sofia just south of the historic centre, a modern upscale hotel near the Crocetta metro. It is well placed for the university district and a short ride from the Duomo.',
        dining: 'Includes a contemporary restaurant and bar in a quieter pocket of the centre.',
        suitedFor: 'travellers wanting modern comfort a short hop from the Duomo',
    },
    {
        slug: 'hotel-manzoni-milan', name: 'Hotel Manzoni', address: 'Via Santo Spirito, Quadrilatero della Moda', district: 'Quadrilatero della Moda', lat: 45.4700, lng: 9.1965, stars: 4, image: IMG,
        landmarks: ['Via Montenapoleone', 'Via della Spiga', 'Museo Poldi Pezzoli'],
        nearby: [{ place: 'Via Montenapoleone', note: '2 min walk' }, { place: 'Via della Spiga', note: '2 min walk' }, { place: 'Duomo', note: '12 min walk' }],
        description: 'The Hotel Manzoni is a quiet, family-run 4-star tucked on Via Santo Spirito in the very middle of the fashion quadrilateral. It offers a small spa and a discreet, well-priced base surrounded by the flagship boutiques.',
        dining: 'Its intimate restaurant sits among the designer streets of the Quadrilatero.',
        suitedFor: 'shoppers wanting a quiet, good-value hotel inside the fashion district',
    },
    {
        slug: 'melia-milano', name: 'Meliá Milano', address: 'Via Masaccio, near CityLife and Fiera', district: 'Fiera / CityLife', lat: 45.4790, lng: 9.1490, stars: 4, image: IMG,
        landmarks: ['CityLife', 'Fiera Milano (Milano City)', 'San Siro (by metro)'],
        nearby: [{ place: 'CityLife district', note: '10 min walk' }, { place: 'Lotto / Fiera metro', note: '6 min walk' }, { place: 'San Siro stadium', note: '10 min by metro' }],
        description: 'The Meliá Milano is a large modern hotel on Via Masaccio, well placed for the CityLife business and shopping district and the Fiera exhibition centre. It is a practical base for trade fairs, San Siro events and the western side of the city.',
        dining: 'Offers a full-service restaurant and bar convenient for Fiera visitors.',
        suitedFor: 'business, fair and event travellers wanting a base near Fiera and CityLife',
    },
];

export type MilanDirection = 'airport-to-hotel' | 'hotel-to-airport';

function airportDefaultLeg(a: MilanAirport): Leg { return { distance: a.distance, duration: a.duration }; }
function legFor(a: MilanAirport, h: MilanHotel): Leg {
    const key = a.code.toLowerCase() as 'mxp' | 'lin' | 'bgy';
    return (h.legs && h.legs[key]) || airportDefaultLeg(a);
}

export function milanArrivalSlug(a: MilanAirport, h: MilanHotel): string { return `${a.slugPart}-to-${h.slug}`; }
export function milanDepartureSlug(h: MilanHotel, a: MilanAirport): string { return `${h.slug}-to-${a.slugPart}`; }

export interface MilanTransferCombo {
    airport: MilanAirport;
    hotel: MilanHotel;
    leg: Leg;
    slug: string;
    direction: MilanDirection;
}

export function getAllMilanTransfers(): MilanTransferCombo[] {
    const out: MilanTransferCombo[] = [];
    for (const hotel of milanHotels) {
        for (const airport of milanAirports) {
            const leg = legFor(airport, hotel);
            out.push({ airport, hotel, leg, slug: milanArrivalSlug(airport, hotel), direction: 'airport-to-hotel' });
            out.push({ airport, hotel, leg, slug: milanDepartureSlug(hotel, airport), direction: 'hotel-to-airport' });
        }
    }
    return out;
}

export function findMilanTransfer(slug: string): MilanTransferCombo | null {
    return getAllMilanTransfers().find((t) => t.slug === slug) || null;
}

// Other hotels reachable from the same airport (for internal linking).
export function relatedMilanHotels(excludeSlug: string, limit = 6): MilanHotel[] {
    return milanHotels.filter((h) => h.slug !== excludeSlug).slice(0, limit);
}

export function milanAirportByCode(code: string): MilanAirport {
    return milanAirports.find((a) => a.code === code)!;
}
