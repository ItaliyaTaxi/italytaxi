// Data for the programmatic Bologna transfer cluster: Bologna Marconi Airport
// (BLQ) ⇄ every major Bologna hotel, plus Bologna (airport / city centre / any
// hotel) ⇄ Ravenna Cruise Port. Rendered by src/app/bologna-transfer/[slug],
// a self-contained route isolated from the shared root [slug] dispatcher
// (mirrors the Florence cluster's pattern). Every hotel carries unique,
// factual location content (district, landmarks, description) so no two
// pages duplicate.
//
// Distances/times are realistic approximations grounded in Bologna's compact
// geography (BLQ is ~6 km northwest of the centre; Ravenna is ~75 km
// southeast via the A14 motorway) and the airport's own published travel
// times. Coordinates are approximate district-level references.

export interface Leg { distance: string; duration: string; }

export interface BolognaAirport {
    code: 'BLQ';
    name: string;
    short: string;
    slugPart: string;
    airportPage: string;
    blurb: string;
    about: string;
    terminals: string;
    meetingPoint: string;
    recommendedArrival: string;
    publicAlt: string;
    distance: string;
    duration: string;
}

export const bolognaAirport: BolognaAirport = {
    code: 'BLQ', name: 'Bologna Guglielmo Marconi Airport', short: 'Bologna Marconi', slugPart: 'bologna-airport',
    airportPage: '/airport/bologna-marconi',
    blurb: 'Bologna\'s compact single-terminal airport, about 6 km northwest of the historic centre.',
    about: 'Bologna Guglielmo Marconi Airport (BLQ) is a single-terminal airport about 6 km northwest of the historic centre, with a compact, easy-to-navigate arrivals hall. A people-mover train, the AerobusTrain, links it to Bologna Centrale station, but it involves a station change and a walk or taxi with luggage at the other end — a private transfer instead takes you directly to your hotel\'s door. BLQ is also a convenient alternative gateway for Modena\'s Ferrari Museum, Parma and Ravenna, all reachable within an hour or so by road.',
    terminals: 'A single passenger terminal with one arrivals hall.',
    meetingPoint: 'the meeting zone just beyond baggage reclaim, between the arrivals gate and the taxi/shuttle rank, with a name sign',
    recommendedArrival: 'Arrive about 2 hours before European departures and 3 hours before long-haul/intercontinental flights.',
    publicAlt: 'the AerobusTrain people-mover to Bologna Centrale station, then a taxi or walk with your luggage',
    distance: '~6 km', duration: '~15–20 min',
};

export interface BolognaHotel {
    slug: string;
    name: string;
    address: string;
    district: string;
    lat: number;
    lng: number;
    stars: number;
    image: string;
    landmarks: string[];
    nearby: { place: string; note: string }[];
    description: string;
    dining: string;
    suitedFor: string;
    airportLeg?: Leg;
    ravennaLeg?: Leg;
}

const IMG = '/images/Bologna.webp';

const CENTRO_LEG: Leg = { distance: '~6 km', duration: '~15–20 min' };
const STATION_LEG: Leg = { distance: '~6 km', duration: '~12–18 min' };
const FIERA_LEG: Leg = { distance: '~10 km', duration: '~20–25 min' };
const SANMAMOLO_LEG: Leg = { distance: '~8 km', duration: '~20–25 min' };

const RAVENNA_DEFAULT: Leg = { distance: '~76 km', duration: '~72–82 min' };
const RAVENNA_FIERA: Leg = { distance: '~70 km', duration: '~65–75 min' };
const RAVENNA_SANMAMOLO: Leg = { distance: '~80 km', duration: '~78–88 min' };

export const bolognaHotels: BolognaHotel[] = [
    {
        slug: 'grand-hotel-majestic-gia-baglioni', name: 'Grand Hotel Majestic già Baglioni', address: 'Via dell\'Indipendenza, near Piazza Maggiore', district: 'Piazza Maggiore / Quadrilatero', lat: 44.4945, lng: 11.3420, stars: 5, image: IMG,
        landmarks: ['Piazza Maggiore', 'Basilica di San Petronio', 'Quadrilatero market district'],
        nearby: [{ place: 'Piazza Maggiore', note: '2 min walk' }, { place: 'Basilica di San Petronio', note: '3 min walk' }, { place: 'Le Due Torri', note: '10 min walk' }],
        description: 'The Grand Hotel Majestic già Baglioni occupies a restored 18th-century palazzo on Via dell\'Indipendenza, moments from Piazza Maggiore and the Basilica di San Petronio. Frescoed ceilings, an internal Roman-era courtyard and antique furnishings give Bologna\'s grandest address a sense of old-world ceremony rarely matched elsewhere in the city.',
        dining: 'Its Caruso restaurant and piano bar sit beneath original frescoes just off the historic lobby.',
        suitedFor: 'travellers wanting historic five-star grandeur in the exact heart of Bologna',
        airportLeg: CENTRO_LEG, ravennaLeg: RAVENNA_DEFAULT,
    },
    {
        slug: 'starhotels-excelsior', name: 'Starhotels Excelsior', address: 'Viale Pietro Pietramellara, opposite Bologna Centrale', district: 'Train Station / Pietramellara', lat: 44.5052, lng: 11.3435, stars: 4, image: IMG,
        landmarks: ['Bologna Centrale station', 'Via dell\'Indipendenza', 'Montagnola Park'],
        nearby: [{ place: 'Bologna Centrale station', note: '1 min walk' }, { place: 'Via dell\'Indipendenza', note: '5 min walk' }, { place: 'Piazza Maggiore', note: '15 min walk' }],
        description: 'Starhotels Excelsior stands on Viale Pietramellara directly opposite Bologna Centrale station, a modern business hotel built for travellers who value speed over sightseeing. Its glass-fronted lobby and contemporary rooms make it a practical, well-run base for rail connections and fair visits alike.',
        dining: 'A straightforward restaurant and bar geared to business travellers passing through the station district.',
        suitedFor: 'business travellers and rail connectors wanting a modern hotel opposite Bologna Centrale',
        airportLeg: STATION_LEG, ravennaLeg: RAVENNA_DEFAULT,
    },
    {
        slug: 'royal-hotel-carlton', name: 'Royal Hotel Carlton', address: 'Via Montebello, near Bologna Centrale', district: 'Train Station / Pietramellara', lat: 44.5040, lng: 11.3410, stars: 4, image: IMG,
        landmarks: ['Bologna Centrale station', 'Via dell\'Indipendenza', 'Montagnola Park'],
        nearby: [{ place: 'Bologna Centrale station', note: '8 min walk' }, { place: 'Via dell\'Indipendenza', note: '6 min walk' }, { place: 'Piazza Maggiore', note: '15 min walk' }],
        description: 'The Royal Hotel Carlton sits on Via Montebello a short walk from Bologna Centrale, notable for its rooftop pool and terrace with views over the city\'s rooftops and towers. It is one of the few central Bologna hotels with genuine outdoor pool access.',
        dining: 'Its rooftop bar and pool terrace are a summer draw uncommon among the station-district hotels.',
        suitedFor: 'travellers wanting a rooftop pool and skyline views near the station',
        airportLeg: STATION_LEG, ravennaLeg: RAVENNA_DEFAULT,
    },
    {
        slug: 'hotel-i-portici', name: 'Hotel I Portici', address: 'Via dell\'Indipendenza, near Bologna Centrale', district: 'Via Indipendenza / Train Station', lat: 44.5010, lng: 11.3425, stars: 5, image: IMG,
        landmarks: ['Via dell\'Indipendenza', 'Bologna Centrale station', 'Montagnola Park'],
        nearby: [{ place: 'Bologna Centrale station', note: '5 min walk' }, { place: 'Via dell\'Indipendenza shops', note: 'on the street' }, { place: 'Piazza Maggiore', note: '12 min walk' }],
        description: 'Hotel I Portici occupies a beautifully restored early-20th-century cinema-theatre on Via dell\'Indipendenza, its original stuccoed hall now a striking lobby beneath a Liberty-style ceiling. The building\'s theatrical past and its celebrated in-house restaurant make it one of Bologna\'s most distinctive luxury addresses.',
        dining: 'Home to the Michelin-starred I Portici restaurant, set beneath the frescoed vault of the former theatre.',
        suitedFor: 'food-focused travellers wanting a design hotel with a landmark restaurant near the station',
        airportLeg: STATION_LEG, ravennaLeg: RAVENNA_DEFAULT,
    },
    {
        slug: 'nh-bologna-de-la-gare', name: 'NH Bologna De La Gare', address: 'Piazza XX Settembre, beside Bologna Centrale', district: 'Train Station', lat: 44.5068, lng: 11.3430, stars: 4, image: IMG,
        landmarks: ['Bologna Centrale station', 'Piazza XX Settembre', 'Via dell\'Indipendenza'],
        nearby: [{ place: 'Bologna Centrale station', note: '1 min walk' }, { place: 'Via dell\'Indipendenza', note: '3 min walk' }, { place: 'Piazza Maggiore', note: '15 min walk' }],
        description: 'NH Bologna De La Gare stands directly on Piazza XX Settembre beside Bologna Centrale, an efficient modern hotel built for travellers who need to be first off the train and first out again. Its position makes it one of the most convenient bases in the city for onward rail journeys.',
        dining: 'Straightforward hotel dining a few steps from the station concourse.',
        suitedFor: 'rail travellers and business guests wanting the shortest possible walk to Bologna Centrale',
        airportLeg: STATION_LEG, ravennaLeg: RAVENNA_DEFAULT,
    },
    {
        slug: 'hotel-metropolitan', name: 'Hotel Metropolitan', address: 'Via dell\'Orso, just off Via Indipendenza', district: 'Via Indipendenza / Centre', lat: 44.4975, lng: 11.3415, stars: 4, image: IMG,
        landmarks: ['Via dell\'Indipendenza', 'Piazza Maggiore', 'Basilica di San Petronio'],
        nearby: [{ place: 'Via dell\'Indipendenza', note: '1 min walk' }, { place: 'Piazza Maggiore', note: '8 min walk' }, { place: 'Bologna Centrale station', note: '10 min walk' }],
        description: 'Hotel Metropolitan is a contemporary boutique hotel tucked just off Via dell\'Indipendenza, with a small rooftop garden that is unusual for the historic centre. Its clean, modern interiors sit within easy walking distance of both the station and Piazza Maggiore.',
        dining: 'A rooftop terrace offers a quiet garden break above the busy Indipendenza shopping street.',
        suitedFor: 'travellers wanting a modern boutique base midway between the station and Piazza Maggiore',
        airportLeg: CENTRO_LEG, ravennaLeg: RAVENNA_DEFAULT,
    },
    {
        slug: 'art-hotel-commercianti', name: 'Art Hotel Commercianti', address: 'Via de\' Pignattari, beside San Petronio', district: 'Piazza Maggiore / Quadrilatero', lat: 44.4935, lng: 11.3430, stars: 4, image: IMG,
        landmarks: ['Piazza Maggiore', 'Basilica di San Petronio', 'Quadrilatero district'],
        nearby: [{ place: 'Basilica di San Petronio', note: 'on the doorstep' }, { place: 'Piazza Maggiore', note: '1 min walk' }, { place: 'Quadrilatero market', note: '3 min walk' }],
        description: 'Art Hotel Commercianti occupies a 12th-century former magistrates\' building directly beside the Basilica di San Petronio, its beamed attic rooms looking straight onto the church\'s façade. Few Bologna hotels place guests this close to Piazza Maggiore inside a genuinely medieval structure.',
        dining: 'A small breakfast room and terrace look directly onto the Basilica di San Petronio.',
        suitedFor: 'travellers wanting a medieval building right on Piazza Maggiore',
        airportLeg: CENTRO_LEG, ravennaLeg: RAVENNA_DEFAULT,
    },
    {
        slug: 'art-hotel-orologio', name: 'Art Hotel Orologio', address: 'Via IV Novembre, on Piazza Maggiore', district: 'Piazza Maggiore', lat: 44.4940, lng: 11.3435, stars: 4, image: IMG,
        landmarks: ['Piazza Maggiore', 'Palazzo d\'Accursio', 'Fontana del Nettuno'],
        nearby: [{ place: 'Piazza Maggiore', note: 'on the doorstep' }, { place: 'Palazzo d\'Accursio', note: '1 min walk' }, { place: 'Le Due Torri', note: '8 min walk' }],
        description: 'Art Hotel Orologio takes its name from the clock tower of Palazzo d\'Accursio it faces across Piazza Maggiore, with several rooms looking directly onto that view. It is the sister hotel to the nearby Art Hotel Commercianti, sharing the same central, historic footprint.',
        dining: 'The breakfast room and several guest rooms look directly onto Piazza Maggiore and the clock tower.',
        suitedFor: 'travellers wanting a piazza-view room in the exact centre of Bologna',
        airportLeg: CENTRO_LEG, ravennaLeg: RAVENNA_DEFAULT,
    },
    {
        slug: 'phi-hotel-bologna', name: 'Phi Hotel Bologna', address: 'Via Michelino, Fiera exhibition district', district: 'Fiera District', lat: 44.5110, lng: 11.3630, stars: 4, image: IMG,
        landmarks: ['BolognaFiere exhibition centre', 'Piazza della Costituzione', 'Fiera district'],
        nearby: [{ place: 'BolognaFiere exhibition centre', note: '10 min walk' }, { place: 'Piazza della Costituzione', note: '5 min walk' }, { place: 'Bologna Centrale (by bus)', note: '~15 min' }],
        description: 'Phi Hotel Bologna is a modern design hotel in the Fiera exhibition district, built for trade-fair visitors who need fast access to BolognaFiere without the traffic of the historic centre. Its contemporary rooms and functional layout suit short, efficient stays timed around exhibition dates.',
        dining: 'Practical hotel dining suited to trade fair schedules and business turnarounds.',
        suitedFor: 'trade-fair visitors wanting a modern hotel close to BolognaFiere',
        airportLeg: FIERA_LEG, ravennaLeg: RAVENNA_FIERA,
    },
    {
        slug: 'savhotel-aemilia-bologna', name: 'Savhotel Aemilia Bologna', address: 'Viale Amedeo Amendola, Fiera district', district: 'Fiera District', lat: 44.5120, lng: 11.3600, stars: 3, image: IMG,
        landmarks: ['BolognaFiere exhibition centre', 'Fiera District', 'Piazza della Costituzione'],
        nearby: [{ place: 'BolognaFiere exhibition centre', note: '12 min walk' }, { place: 'Piazza della Costituzione', note: '8 min walk' }, { place: 'Bologna Centrale (by bus)', note: '~20 min' }],
        description: 'Savhotel Aemilia Bologna is a functional business hotel in the Fiera district, purpose-built for exhibitors and visitors attending BolognaFiere trade fairs. Its straightforward rooms and meeting facilities prioritise practicality over historic charm.',
        dining: 'A business-focused restaurant serving exhibitors during BolognaFiere trade fair weeks.',
        suitedFor: 'trade-fair and business travellers needing a no-frills base near BolognaFiere',
        airportLeg: FIERA_LEG, ravennaLeg: RAVENNA_FIERA,
    },
    {
        slug: 'hotel-savoia-regency', name: 'Hotel Savoia Regency', address: 'Via del Pilastro, eastern Bologna', district: 'Fiera District / Ring Road', lat: 44.5180, lng: 11.3750, stars: 3, image: IMG,
        landmarks: ['BolognaFiere exhibition centre', 'Fiera District', 'Bologna ring road'],
        nearby: [{ place: 'BolognaFiere exhibition centre', note: '~10 min drive' }, { place: 'Bologna Airport', note: '~15 min drive' }, { place: 'Tangenziale ring road', note: 'adjacent' }],
        description: 'Hotel Savoia Regency sits on the eastern edge of Bologna near the ring road, midway between the airport, the Fiera exhibition centre and the motorway — a practical choice for business travellers covering multiple stops in one trip. Its straightforward rooms and function spaces are geared to corporate stays.',
        dining: 'A functional restaurant and bar serving business guests and fair visitors.',
        suitedFor: 'business travellers wanting easy access to the airport, motorway and Fiera district',
        airportLeg: FIERA_LEG, ravennaLeg: RAVENNA_FIERA,
    },
    {
        slug: 'ac-hotel-bologna', name: 'AC Hotel Bologna', address: 'Piazza della Costituzione, Fiera district', district: 'Fiera District', lat: 44.5125, lng: 11.3615, stars: 4, image: IMG,
        landmarks: ['BolognaFiere exhibition centre', 'Piazza della Costituzione', 'Fiera District'],
        nearby: [{ place: 'BolognaFiere exhibition centre', note: '8 min walk' }, { place: 'Piazza della Costituzione', note: 'on the square' }, { place: 'Bologna Centrale (by bus)', note: '~15 min' }],
        description: 'AC Hotel Bologna is a sleek Marriott-run design hotel on Piazza della Costituzione, in the modern Fiera business district on the northern edge of the city. Minimalist interiors and a ground-floor lounge bar suit corporate travellers and exhibition visitors.',
        dining: 'Its ground-floor lounge bar is a popular meeting point during BolognaFiere events.',
        suitedFor: 'business and design-minded travellers wanting a modern hotel in the Fiera district',
        airportLeg: FIERA_LEG, ravennaLeg: RAVENNA_FIERA,
    },
    {
        slug: 'savhotel-fiera-bologna', name: 'Savhotel Fiera Bologna', address: 'Via Aldo Moro, Fiera exhibition district', district: 'Fiera District', lat: 44.5105, lng: 11.3645, stars: 3, image: IMG,
        landmarks: ['BolognaFiere exhibition centre', 'Fiera District', 'Piazza della Costituzione'],
        nearby: [{ place: 'BolognaFiere exhibition centre', note: '5 min walk' }, { place: 'Piazza della Costituzione', note: '10 min walk' }, { place: 'Bologna Airport', note: '~15 min drive' }],
        description: 'Savhotel Fiera Bologna is a second Fiera-district property from the Savhotel group, positioned close to the exhibition halls for exhibitors who want to minimise transfer time during trade fair weeks. Its compact, efficient rooms are designed for short business stays.',
        dining: 'Straightforward dining timed around trade fair opening hours.',
        suitedFor: 'exhibitors and fair visitors wanting minimal travel time to BolognaFiere',
        airportLeg: FIERA_LEG, ravennaLeg: RAVENNA_FIERA,
    },
    {
        slug: 'hotel-mercure-bologna-centro', name: 'Hotel Mercure Bologna Centro', address: 'Via Pietro Pietramellara, near Bologna Centrale', district: 'Train Station / Pietramellara', lat: 44.5048, lng: 11.3418, stars: 4, image: IMG,
        landmarks: ['Bologna Centrale station', 'Via dell\'Indipendenza', 'Montagnola Park'],
        nearby: [{ place: 'Bologna Centrale station', note: '4 min walk' }, { place: 'Via dell\'Indipendenza', note: '6 min walk' }, { place: 'Piazza Maggiore', note: '18 min walk' }],
        description: 'Hotel Mercure Bologna Centro is an Accor-run hotel on Via Pietramellara close to Bologna Centrale, offering reliable, well-equipped rooms aimed at both business and leisure travellers. Its position keeps both the station and the historic centre within easy walking range.',
        dining: 'A dependable hotel restaurant and bar convenient for early departures from the station.',
        suitedFor: 'travellers wanting a reliable international brand near Bologna Centrale',
        airportLeg: STATION_LEG, ravennaLeg: RAVENNA_DEFAULT,
    },
    {
        slug: 'una-hotels-bologna-centro', name: 'UNA Hotels Bologna Centro', address: 'Via Cairoli, between the station and old town', district: 'Train Station / Centre', lat: 44.5000, lng: 11.3440, stars: 4, image: IMG,
        landmarks: ['Bologna Centrale station', 'Via dell\'Indipendenza', 'Montagnola Park'],
        nearby: [{ place: 'Bologna Centrale station', note: '8 min walk' }, { place: 'Via dell\'Indipendenza', note: '5 min walk' }, { place: 'Piazza Maggiore', note: '15 min walk' }],
        description: 'UNA Hotels Bologna Centro is a modern hotel between Bologna Centrale and the historic centre, part of the UNA Hotels group. Its contemporary rooms and business facilities suit both fair visitors and travellers exploring the old town on foot.',
        dining: 'A modern restaurant and bar geared to both business and leisure guests.',
        suitedFor: 'travellers wanting a modern hotel midway between the station and the historic centre',
        airportLeg: STATION_LEG, ravennaLeg: RAVENNA_DEFAULT,
    },
    {
        slug: 'best-western-city-hotel', name: 'Best Western City Hotel', address: 'Via Magenta, near the coach station', district: 'Train Station', lat: 44.5065, lng: 11.3395, stars: 3, image: IMG,
        landmarks: ['Bologna Centrale station', 'Autostazione coach station', 'Via dell\'Indipendenza'],
        nearby: [{ place: 'Bologna Centrale station', note: '6 min walk' }, { place: 'Autostazione coach station', note: '3 min walk' }, { place: 'Via dell\'Indipendenza', note: '8 min walk' }],
        description: 'The Best Western City Hotel sits on Via Magenta near the coach station and Bologna Centrale, a practical mid-range choice for travellers who want a straightforward, well-connected base. Its no-nonsense rooms suit both business trips and city breaks on a budget.',
        dining: 'Simple, reliable breakfast and bar service close to the station.',
        suitedFor: 'value-conscious travellers wanting a practical base near the station',
        airportLeg: STATION_LEG, ravennaLeg: RAVENNA_DEFAULT,
    },
    {
        slug: 'hotel-porta-san-mamolo', name: 'Hotel Porta San Mamolo', address: 'Vicolo del Falcone, near Porta Saragozza', district: 'Porta Saragozza / Colli', lat: 44.4885, lng: 11.3275, stars: 4, image: IMG,
        landmarks: ['Portico di San Luca', 'Porta Saragozza', 'Colli Bolognesi hills'],
        nearby: [{ place: 'Portico di San Luca (start)', note: '3 min walk' }, { place: 'Porta Saragozza', note: '2 min walk' }, { place: 'Piazza Maggiore', note: '15 min walk' }],
        description: 'Hotel Porta San Mamolo sits in a quiet corner of Bologna near Porta Saragozza, right at the foot of the hill where the Portico di San Luca — the world\'s longest portico — begins its climb to the Santuario della Madonna di San Luca. It is a calmer, more residential base than the hotels clustered around the station.',
        dining: 'A quiet courtyard garden sets it apart from Bologna\'s busier central hotels.',
        suitedFor: 'travellers wanting a quiet base near the start of the Portico di San Luca walk',
        airportLeg: SANMAMOLO_LEG, ravennaLeg: RAVENNA_SANMAMOLO,
    },
    {
        slug: 'hotel-san-donato', name: 'Hotel San Donato', address: 'Via Zamboni area, university quarter', district: 'University Quarter', lat: 44.4960, lng: 11.3495, stars: 3, image: IMG,
        landmarks: ['Le Due Torri', 'Via Zamboni', 'University of Bologna'],
        nearby: [{ place: 'Le Due Torri (Two Towers)', note: '6 min walk' }, { place: 'Via Zamboni', note: '4 min walk' }, { place: 'Piazza Maggiore', note: '12 min walk' }],
        description: 'Hotel San Donato sits in Bologna\'s lively university quarter near Via Zamboni, a short walk from the Two Towers and the porticoed streets of the world\'s oldest university district. Its simple, well-priced rooms suit travellers who want to be among the city\'s student energy and evening bars.',
        dining: 'Surrounded by the university quarter\'s bars, osterie and student cafés.',
        suitedFor: 'younger travellers and culture lovers wanting to stay in the university quarter',
        airportLeg: CENTRO_LEG, ravennaLeg: RAVENNA_DEFAULT,
    },
    {
        slug: 'hotel-internazionale', name: 'Hotel Internazionale', address: 'Via dell\'Indipendenza, between the station and centre', district: 'Via Indipendenza / Train Station', lat: 44.5000, lng: 11.3422, stars: 3, image: IMG,
        landmarks: ['Via dell\'Indipendenza', 'Bologna Centrale station', 'Piazza Maggiore'],
        nearby: [{ place: 'Bologna Centrale station', note: '8 min walk' }, { place: 'Piazza Maggiore', note: '10 min walk' }, { place: 'Via dell\'Indipendenza shops', note: 'on the street' }],
        description: 'Hotel Internazionale is a long-established mid-range hotel on Via dell\'Indipendenza, Bologna\'s main boulevard linking the station to Piazza Maggiore. Its classic, no-surprises rooms make it a dependable choice for travellers who want a central address without a five-star price.',
        dining: 'Straightforward hotel dining directly on Bologna\'s principal shopping street.',
        suitedFor: 'travellers wanting dependable comfort directly on Via dell\'Indipendenza',
        airportLeg: STATION_LEG, ravennaLeg: RAVENNA_DEFAULT,
    },
];

export type BolognaDirection = 'airport-to-hotel' | 'hotel-to-airport';

function legFor(h: BolognaHotel): Leg { return h.airportLeg || { distance: bolognaAirport.distance, duration: bolognaAirport.duration }; }

export function bolognaArrivalSlug(h: BolognaHotel): string { return `${bolognaAirport.slugPart}-to-${h.slug}`; }
export function bolognaDepartureSlug(h: BolognaHotel): string { return `${h.slug}-to-${bolognaAirport.slugPart}`; }

export interface BolognaHotelTransferCombo {
    airport: BolognaAirport;
    hotel: BolognaHotel;
    leg: Leg;
    slug: string;
    direction: BolognaDirection;
}

export function getAllBolognaHotelTransfers(): BolognaHotelTransferCombo[] {
    const out: BolognaHotelTransferCombo[] = [];
    for (const hotel of bolognaHotels) {
        const leg = legFor(hotel);
        out.push({ airport: bolognaAirport, hotel, leg, slug: bolognaArrivalSlug(hotel), direction: 'airport-to-hotel' });
        out.push({ airport: bolognaAirport, hotel, leg, slug: bolognaDepartureSlug(hotel), direction: 'hotel-to-airport' });
    }
    return out;
}

export function findBolognaHotelTransfer(slug: string): BolognaHotelTransferCombo | null {
    return getAllBolognaHotelTransfers().find((t) => t.slug === slug) || null;
}

export function relatedBolognaHotels(excludeSlug: string, limit = 6): BolognaHotel[] {
    return bolognaHotels.filter((h) => h.slug !== excludeSlug).slice(0, limit);
}

// ─────────────────────────────────────────────────────────────────────────
// Bologna ⇄ Ravenna Cruise Port
// ─────────────────────────────────────────────────────────────────────────

export interface RavennaPort {
    slug: 'ravenna-cruise-port';
    name: string;
    area: string;
    description: string;
    dining: string;
    suitedFor: string;
    nearby: { place: string; note: string }[];
    thingsToKnow: string[];
    attractions: string[];
}

export const ravennaCruisePort: RavennaPort = {
    slug: 'ravenna-cruise-port', name: 'Ravenna Cruise Port', area: 'Porto di Ravenna, Candiano Canal',
    description: 'Ravenna\'s cruise terminal lies along the Candiano Canal at the Porto di Ravenna, a working port a few kilometres from the historic centre and its UNESCO-listed Byzantine mosaics. Road transfers reach the terminal directly, so cruise passengers can be dropped close to their ship with luggage assistance, without the walk or shuttle connections some Italian ports require.',
    dining: 'A working Adriatic port a short drive from Ravenna\'s mosaic-filled historic centre.',
    suitedFor: 'cruise passengers joining or leaving a ship at Ravenna',
    nearby: [{ place: 'Ravenna historic centre', note: '~10 min drive' }, { place: 'Basilica di San Vitale', note: '~12 min drive' }, { place: 'Marina di Ravenna beach', note: '~15 min drive' }],
    thingsToKnow: ['We time the transfer to your embarkation window and drop you close to your ship.', 'Ravenna\'s historic centre and its UNESCO-listed Byzantine mosaics are an easy add-on before or after your cruise.', 'The port has multiple berths — confirm your cruise line and terminal when booking.'],
    attractions: ['Basilica di San Vitale', 'Mausoleo di Galla Placidia', 'Ravenna historic centre', 'Porto di Ravenna'],
};

export type BolognaCruiseOriginKind = 'airport' | 'city' | 'hotels' | 'hotel';

export interface BolognaCruiseOrigin {
    kind: BolognaCruiseOriginKind;
    slug: string;
    name: string;
    area: string;
    description: string;
    dining?: string;
    suitedFor?: string;
    nearby?: { place: string; note: string }[];
    leg: Leg;
    hotel?: BolognaHotel;
}

export const bolognaCityCentreOrigin: Omit<BolognaCruiseOrigin, 'kind'> = {
    slug: 'bologna-city-centre', name: 'Bologna City Centre', area: 'Piazza Maggiore / Historic Centre',
    description: 'Bologna\'s historic centre radiates from Piazza Maggiore and the Basilica di San Petronio, wrapped in Europe\'s largest network of covered porticoes and watched over by the leaning Due Torri. A private transfer collects you directly from your address inside the centro storico, avoiding the city\'s ZTL restrictions that limit ordinary cars, for the drive to Ravenna\'s cruise port.',
    dining: 'A porticoed university city built around Piazza Maggiore, the Quadrilatero food market and the Two Towers.',
    suitedFor: 'cruise passengers spending pre- or post-cruise nights in central Bologna',
    leg: RAVENNA_DEFAULT,
};

export const bolognaHotelsGenericOrigin: Omit<BolognaCruiseOrigin, 'kind'> = {
    slug: 'bologna-hotels', name: 'Bologna Hotels', area: 'Any hotel across Bologna',
    description: 'Wherever you are staying in Bologna — the historic centre, the station district or the Fiera business area — a private transfer collects you directly from your hotel\'s door for the drive to Ravenna\'s cruise port. One fixed price covers pickup, luggage assistance and a direct road transfer to your ship, whichever part of the city your hotel is in.',
    dining: 'Covers pickup from any hotel in Bologna, from the historic centre to the Fiera business district.',
    suitedFor: 'cruise passengers whose hotel is not listed individually, wherever it is in Bologna',
    leg: RAVENNA_DEFAULT,
};

export const bolognaAirportCruiseOrigin: Omit<BolognaCruiseOrigin, 'kind'> = {
    slug: 'bologna-airport', name: bolognaAirport.short, area: bolognaAirport.name,
    description: 'Bologna Guglielmo Marconi Airport (BLQ) is a single-terminal airport about 6 km northwest of the city, roughly 75 km from Ravenna\'s cruise port. Rather than routing through the city centre by train and taxi, a private transfer collects you at arrivals and drives you directly to Ravenna, ideal for cruise passengers flying in on embarkation day.',
    dining: 'A compact single-terminal airport about 75 km from Ravenna via the A14 Adriatica motorway.',
    suitedFor: 'cruise passengers flying into Bologna and heading straight to their ship',
    leg: RAVENNA_DEFAULT,
};

export const bolognaCruiseOrigins: BolognaCruiseOrigin[] = [
    { kind: 'airport', ...bolognaAirportCruiseOrigin },
    { kind: 'city', ...bolognaCityCentreOrigin },
    { kind: 'hotels', ...bolognaHotelsGenericOrigin },
    ...bolognaHotels.map((h): BolognaCruiseOrigin => ({
        kind: 'hotel', slug: h.slug, name: h.name, area: h.district, description: h.description, dining: h.dining, suitedFor: h.suitedFor, nearby: h.nearby,
        leg: h.ravennaLeg || RAVENNA_DEFAULT, hotel: h,
    })),
];

export function cruiseDepartureSlug(o: BolognaCruiseOrigin | Omit<BolognaCruiseOrigin, 'kind'>): string { return `${o.slug}-to-ravenna-cruise-port`; }
export function cruiseArrivalSlug(o: BolognaCruiseOrigin | Omit<BolognaCruiseOrigin, 'kind'>): string { return `ravenna-cruise-port-to-${o.slug}`; }

export type BolognaCruiseDirection = 'origin-to-port' | 'port-to-origin';

export interface BolognaCruiseCombo {
    origin: BolognaCruiseOrigin;
    port: RavennaPort;
    leg: Leg;
    slug: string;
    direction: BolognaCruiseDirection;
}

export function getAllBolognaCruiseTransfers(): BolognaCruiseCombo[] {
    const out: BolognaCruiseCombo[] = [];
    for (const origin of bolognaCruiseOrigins) {
        out.push({ origin, port: ravennaCruisePort, leg: origin.leg, slug: cruiseDepartureSlug(origin), direction: 'origin-to-port' });
        out.push({ origin, port: ravennaCruisePort, leg: origin.leg, slug: cruiseArrivalSlug(origin), direction: 'port-to-origin' });
    }
    return out;
}

export function findBolognaCruiseTransfer(slug: string): BolognaCruiseCombo | null {
    return getAllBolognaCruiseTransfers().find((t) => t.slug === slug) || null;
}

export function relatedBolognaCruiseOrigins(excludeSlug: string, limit = 6): BolognaCruiseOrigin[] {
    return bolognaCruiseOrigins.filter((o) => o.kind === 'hotel' && o.slug !== excludeSlug).slice(0, limit);
}
