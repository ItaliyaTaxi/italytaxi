// Data for the programmatic Venice & Verona (Veneto) airport ⇄ destination
// transfer cluster. Three airports — Venice Marco Polo (VCE), Treviso (TSF),
// Verona Villafranca (VRN) — each connected to the relevant nearby cities,
// stations, cruise terminals, lakeside resorts, spa and mountain towns, in
// both directions. Root-level slugs, rendered by the root [slug] route.
//
// Distances/times are realistic approximations grounded in each airport's real
// position. Venice's islands are car-free: transfers reach Piazzale Roma /
// Tronchetto (the vehicle termini) and connect to onward water transport —
// handled honestly via the `waterOnward` flag.

export interface VenetoAirport {
    code: string;
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
}

export interface Leg { distance: string; duration: string; }

export type VenetoKind = 'venice' | 'island' | 'station' | 'cruise' | 'city' | 'lake' | 'ski' | 'spa' | 'town';

export interface VenetoDestination {
    slug: string;
    name: string;
    kind: VenetoKind;
    area: string;
    description: string;
    dining: string;          // one factual "setting" sentence
    suitedFor: string;
    nearby: { place: string; note: string }[];
    thingsToKnow: string[];
    attractions: string[];
    waterOnward?: boolean;   // car reaches Piazzale Roma/Tronchetto, then boat
    legs: { vce?: Leg; tsf?: Leg; vrn?: Leg };
}

export const venetoAirports: VenetoAirport[] = [
    {
        code: 'VCE', name: 'Venice Marco Polo Airport', short: 'Venice Marco Polo', slugPart: 'venice-marco-polo-airport',
        airportPage: '/airport/venice',
        blurb: 'Venice\'s main airport, on the mainland edge of the lagoon near Mestre.',
        about: 'Venice Marco Polo (VCE) is the main gateway to Venice and the Veneto, on the mainland at the northern edge of the lagoon, about 13 km from the historic centre. Because Venice itself is car-free, road transfers reach the vehicle terminus at Piazzale Roma or Tronchetto, from where you continue by water — while mainland destinations are reached door-to-door.',
        terminals: 'A single main passenger terminal.',
        meetingPoint: 'the arrivals hall after baggage reclaim, with a name sign',
        recommendedArrival: 'Arrive about 2 hours before European flights and 3 hours before long-haul/intercontinental departures.',
        publicAlt: 'the Alilaguna waterbus, an ATVO/ACTV bus to Piazzale Roma or a shared shuttle',
    },
    {
        code: 'TSF', name: 'Treviso Airport', short: 'Treviso', slugPart: 'treviso-airport',
        airportPage: '/airport/treviso',
        blurb: 'Venice\'s low-cost second airport, beside Treviso, ~40 km from Venice.',
        about: 'Treviso Airport (TSF, Antonio Canova) is Venice\'s low-cost second airport, about 3 km from Treviso city and roughly 40 km from Venice. With no direct rail link, a private transfer is the most comfortable way to reach Venice, the Veneto cities or the mountains.',
        terminals: 'A single compact low-cost terminal.',
        meetingPoint: 'the arrivals hall by the exit, with a name sign',
        recommendedArrival: 'Arrive about 2 hours before departure; low-cost gates can close strictly on time.',
        publicAlt: 'the ATVO airport bus to Venice or Treviso',
    },
    {
        code: 'VRN', name: 'Verona Villafranca Airport', short: 'Verona', slugPart: 'verona-airport',
        airportPage: '/airport/verona',
        blurb: 'Verona\'s airport, the gateway to Lake Garda, ~10 km from the city.',
        about: 'Verona Villafranca Airport (VRN) sits about 10 km southwest of Verona and is the natural gateway to Lake Garda and the western Veneto. A private transfer is the quickest door-to-door way to reach the city, the lakeside resorts or the Trentino valleys.',
        terminals: 'A single passenger terminal.',
        meetingPoint: 'the arrivals hall after baggage reclaim, with a name sign',
        recommendedArrival: 'Arrive about 2 hours before departure; allow extra time in summer for Lake Garda traffic.',
        publicAlt: 'the airport shuttle bus to Verona Porta Nuova station',
    },
];

const VCE: (d: string, t: string) => Leg = (distance, duration) => ({ distance, duration });

export const venetoDestinations: VenetoDestination[] = [
    // ─────────────────────────── VENICE & LAGOON ───────────────────────────
    {
        slug: 'venice-city-centre', name: 'Venice City Centre', kind: 'venice', area: 'Venice historic centre', waterOnward: true,
        description: 'The historic centre of Venice spreads across 118 islands laced by canals, entirely closed to cars. Road transfers bring you to Piazzale Roma or the Tronchetto — the only points vehicles can reach — from where a water taxi, the vaporetto or a short walk over the bridges completes the journey to your hotel.',
        dining: 'The car-free heart of Venice, from St Mark\'s Square to the Rialto and the six historic sestieri.',
        suitedFor: 'travellers heading to a hotel or landmark in central Venice',
        nearby: [{ place: 'Piazzale Roma (vehicle terminus)', note: 'drop-off' }, { place: 'Santa Lucia station', note: 'across the canal' }, { place: 'St Mark\'s Square', note: 'by vaporetto/walk' }],
        thingsToKnow: ['Cars cannot enter Venice — the transfer ends at Piazzale Roma or Tronchetto.', 'From there, a water taxi can take you to your hotel\'s nearest canal stop.', 'Travel light where possible; luggage crosses stepped bridges on foot unless you take a boat.'],
        attractions: ['St Mark\'s Square', 'Rialto Bridge', 'Doge\'s Palace', 'Grand Canal'],
        legs: { vce: VCE('~13 km', '~25–35 min'), tsf: VCE('~40 km', '~45–55 min'), vrn: VCE('~120 km', '~1 h 30') },
    },
    {
        slug: 'mestre', name: 'Mestre', kind: 'city', area: 'Venice mainland',
        description: 'Mestre is the mainland district of Venice, a practical and better-value base connected to the islands by frequent trains and buses. Fully reachable by car, it is popular with travellers who want easy parking and lower hotel prices a short hop from the historic centre.',
        dining: 'Venice\'s lively mainland town, with its own restaurants, shops and the Venezia Mestre rail hub.',
        suitedFor: 'travellers wanting an affordable, car-accessible base near Venice',
        nearby: [{ place: 'Venezia Mestre station', note: 'central' }, { place: 'Venice islands', note: '10 min by train' }, { place: 'Marco Polo Airport', note: '~15 min' }],
        thingsToKnow: ['Mestre is on the mainland, so we deliver you right to the hotel door.', 'Trains to Venezia Santa Lucia take about 10 minutes.', 'A convenient base for both Venice and mainland Veneto trips.'],
        attractions: ['Venezia Mestre station', 'Forte Marghera', 'Venice islands (nearby)'],
        legs: { vce: VCE('~10 km', '~15–20 min'), tsf: VCE('~35 km', '~40 min') },
    },
    {
        slug: 'piazzale-roma', name: 'Piazzale Roma', kind: 'station', area: 'Venice (vehicle terminus)',
        description: 'Piazzale Roma is the only square in Venice that road vehicles can reach, the gateway where the mainland meets the car-free city. It connects directly to the People Mover, the vaporetto lines and the footbridge to Santa Lucia station, making it the standard drop-off for arriving in Venice.',
        dining: 'The road-transport terminus of Venice, beside the Grand Canal and the People Mover to Tronchetto.',
        suitedFor: 'travellers arriving into Venice who continue by water or on foot',
        nearby: [{ place: 'Santa Lucia station', note: '5 min walk' }, { place: 'Tronchetto', note: 'People Mover' }, { place: 'Grand Canal vaporetto', note: 'at the square' }],
        thingsToKnow: ['This is where your car transfer ends — the city beyond is car-free.', 'Water taxis and vaporetto lines depart from beside the square.', 'The People Mover links Piazzale Roma to Tronchetto and its car park.'],
        attractions: ['Grand Canal', 'Santa Lucia station', 'People Mover'],
        legs: { vce: VCE('~12 km', '~25–30 min'), tsf: VCE('~40 km', '~45–55 min'), vrn: VCE('~120 km', '~1 h 30') },
    },
    {
        slug: 'santa-lucia-train-station', name: 'Santa Lucia Train Station', kind: 'station', area: 'Venice (Grand Canal)',
        description: 'Venezia Santa Lucia is Venice\'s main railway station, sitting right on the Grand Canal at the edge of the historic centre. Road transfers reach it via the adjacent Piazzale Roma, a two-minute walk across the Calatrava bridge, making it the key link between rail travel and the car-free city.',
        dining: 'Venice\'s Grand Canal railway terminus, steps from the vaporetto stops.',
        suitedFor: 'travellers connecting between the airport and high-speed trains',
        nearby: [{ place: 'Piazzale Roma', note: '3 min walk' }, { place: 'Grand Canal vaporetto', note: 'at the station' }, { place: 'Ferrovia water stop', note: 'at the station' }],
        thingsToKnow: ['Cars reach the adjacent Piazzale Roma; the station is a short walk across the bridge.', 'High-speed trains link Venice with Padua, Verona, Milan, Bologna and beyond.', 'Ideal when combining a flight with onward rail travel.'],
        attractions: ['Grand Canal', 'Scalzi Church', 'Cannaregio district'],
        legs: { vce: VCE('~12 km', '~25–30 min'), tsf: VCE('~40 km', '~45–55 min') },
    },
    {
        slug: 'tronchetto', name: 'Tronchetto', kind: 'station', area: 'Venice (car park island)',
        description: 'Tronchetto is Venice\'s artificial car-park island, a common arrival and drop-off point linked to Piazzale Roma by the automated People Mover. It also hosts a water-taxi and vaporetto terminal, so it works well for travellers heading straight onto the water.',
        dining: 'Venice\'s large car-park island and water-transport interchange at the city\'s edge.',
        suitedFor: 'travellers who want a quick hand-off to a water taxi or the People Mover',
        nearby: [{ place: 'Piazzale Roma', note: 'People Mover' }, { place: 'Water-taxi terminal', note: 'on site' }, { place: 'Cruise port', note: 'nearby' }],
        thingsToKnow: ['Tronchetto is reachable by car and connects to the city by People Mover or boat.', 'A practical option if you are transferring to a private water taxi.', 'Close to the Stazione Marittima cruise terminals.'],
        attractions: ['People Mover', 'Water-taxi terminal', 'Grand Canal (nearby)'],
        legs: { vce: VCE('~11 km', '~20–30 min'), tsf: VCE('~40 km', '~45–55 min') },
    },
    {
        slug: 'venice-cruise-port', name: 'Venice Cruise Port', kind: 'cruise', area: 'Stazione Marittima',
        description: 'Venice\'s cruise port at the Stazione Marittima sits at the western edge of the historic centre, near Tronchetto and Piazzale Roma. Road transfers reach the terminal area directly, so cruise passengers can be dropped close to their ship with luggage assistance.',
        dining: 'Venice\'s cruise terminals at the Marittima, beside the western end of the islands.',
        suitedFor: 'cruise passengers joining or leaving a ship at Venice',
        nearby: [{ place: 'Tronchetto', note: 'adjacent' }, { place: 'Piazzale Roma', note: '10 min' }, { place: 'Santa Lucia station', note: '10 min' }],
        thingsToKnow: ['We time the transfer to your embarkation window and drop near your terminal.', 'Allow extra time on busy turnaround days.', 'Tell us your ship and terminal when booking.'],
        attractions: ['Stazione Marittima', 'Venice islands', 'Grand Canal'],
        legs: { vce: VCE('~13 km', '~25–35 min'), tsf: VCE('~40 km', '~45–55 min') },
    },
    {
        slug: 'fusina-cruise-terminal', name: 'Fusina Cruise Terminal', kind: 'cruise', area: 'Fusina (mainland)',
        description: 'The Fusina terminal sits on the mainland south of Marghera, used by some cruise lines and as a ferry point across to Venice. Fully road-accessible, it is straightforward to reach by private transfer, avoiding the awkward public connections to this out-of-town terminal.',
        dining: 'A mainland cruise and ferry terminal south of the Venice lagoon.',
        suitedFor: 'cruise passengers using the Fusina terminal',
        nearby: [{ place: 'Marghera', note: '~10 min' }, { place: 'Venice (by ferry)', note: 'across the lagoon' }, { place: 'Mestre', note: '~15 min' }],
        thingsToKnow: ['Fusina is on the mainland and reached directly by car.', 'Public transport here is limited, so a private transfer is the easy option.', 'Confirm your cruise line and terminal when booking.'],
        attractions: ['Fusina ferry', 'Venice lagoon views', 'Riviera del Brenta (nearby)'],
        legs: { vce: VCE('~20 km', '~30–40 min'), tsf: VCE('~45 km', '~50–60 min') },
    },
    {
        slug: 'murano', name: 'Murano', kind: 'island', area: 'Venetian lagoon', waterOnward: true,
        description: 'Murano is the lagoon island famous for centuries of Venetian glassmaking, just north of the historic centre. As an island it is reached only by water, so the road transfer takes you to Piazzale Roma or Tronchetto and connects you to a water taxi or vaporetto onward to Murano.',
        dining: 'The glassmakers\' island, lined with furnaces, showrooms and quiet canals.',
        suitedFor: 'travellers staying on or visiting Murano',
        nearby: [{ place: 'Venice centre', note: 'by vaporetto' }, { place: 'Burano', note: 'by vaporetto' }, { place: 'Piazzale Roma', note: 'drop-off + boat' }],
        thingsToKnow: ['Murano is car-free; the transfer ends at Piazzale Roma/Tronchetto, then continues by boat.', 'A private water taxi can run directly to Murano from the vehicle terminus.', 'Famous for its glass museum and working furnaces.'],
        attractions: ['Glass Museum', 'Murano glass furnaces', 'Lagoon views'],
        legs: { vce: VCE('~13 km', '~30–40 min + boat'), tsf: VCE('~40 km', '~50–60 min + boat') },
    },
    {
        slug: 'burano', name: 'Burano', kind: 'island', area: 'Venetian lagoon', waterOnward: true,
        description: 'Burano is the brightly painted fishing island in the northern lagoon, known for its lacework and rainbow houses. Reached only by water, it is served via a road transfer to Piazzale Roma or Tronchetto and an onward water taxi or vaporetto across the lagoon.',
        dining: 'The lagoon\'s most colourful island, famed for lace and rows of painted houses.',
        suitedFor: 'travellers heading to Burano for the day or an overnight stay',
        nearby: [{ place: 'Murano', note: 'by vaporetto' }, { place: 'Torcello', note: 'by vaporetto' }, { place: 'Venice centre', note: 'by vaporetto' }],
        thingsToKnow: ['Burano is car-free and quite far out in the lagoon — a private water taxi speeds the journey.', 'The transfer delivers you to the vehicle terminus, then you continue by boat.', 'Known for lace-making and its painted fishermen\'s houses.'],
        attractions: ['Painted houses', 'Lace Museum', 'Torcello (nearby)'],
        legs: { vce: VCE('~13 km', '~40–55 min + boat'), tsf: VCE('~40 km', '~1 h + boat') },
    },
    {
        slug: 'lido-di-venezia', name: 'Lido di Venezia', kind: 'island', area: 'Venetian lagoon', waterOnward: true,
        description: 'The Lido is Venice\'s long barrier island of beaches and Liberty-era villas, home to the Venice Film Festival. Cars can reach the Lido only by car ferry from Tronchetto; most visitors instead take a road transfer to the vehicle terminus and continue by vaporetto or water taxi.',
        dining: 'Venice\'s beach island, with seafront hotels, the Casino and the film-festival Palazzo.',
        suitedFor: 'travellers heading to the Lido\'s beaches or the Film Festival',
        nearby: [{ place: 'Venice centre', note: 'by vaporetto' }, { place: 'Tronchetto (car ferry)', note: 'for vehicles' }, { place: 'St Mark\'s', note: 'by vaporetto' }],
        thingsToKnow: ['The Lido is reachable by car only via the Tronchetto car ferry; most take a boat instead.', 'We drop you at the vehicle terminus for an onward water connection.', 'Home to the Venice Film Festival each late summer.'],
        attractions: ['Lido beaches', 'Venice Film Festival Palazzo', 'Liberty villas'],
        legs: { vce: VCE('~13 km', '~35–50 min + boat'), tsf: VCE('~40 km', '~55 min + boat') },
    },
    {
        slug: 'jesolo', name: 'Jesolo', kind: 'town', area: 'Adriatic coast',
        description: 'Lido di Jesolo is a popular Adriatic beach resort northeast of Venice, with a long sandy shoreline and lively summer nightlife. Fully road-accessible, it is an easy door-to-door transfer and a favourite for beach holidays within reach of the lagoon.',
        dining: 'A long sandy beach resort with a buzzing summer promenade and seafront hotels.',
        suitedFor: 'beach holidaymakers and families heading to the Adriatic coast',
        nearby: [{ place: 'Venice', note: '~40 min' }, { place: 'Cavallino beaches', note: 'nearby' }, { place: 'Caorle', note: '~30 min' }],
        thingsToKnow: ['Jesolo is on the mainland coast, delivered door-to-door.', 'Very busy in summer — book transfers ahead in peak season.', 'A short trip from Venice for a beach-and-city combination.'],
        attractions: ['Jesolo beach', 'Aqualandia', 'Sea Life aquarium'],
        legs: { vce: VCE('~25 km', '~30–40 min'), tsf: VCE('~40 km', '~45 min') },
    },
    {
        slug: 'chioggia', name: 'Chioggia', kind: 'town', area: 'Southern lagoon',
        description: 'Chioggia is a characterful fishing town at the southern end of the Venetian lagoon, often called "little Venice" for its canals and colourful boats. Reached directly by road, it offers an authentic, less-touristy alternative to the main islands.',
        dining: 'A canal-laced fishing town with a famous fish market and Adriatic beaches at Sottomarina.',
        suitedFor: 'travellers seeking an authentic lagoon town away from the crowds',
        nearby: [{ place: 'Sottomarina beach', note: 'adjacent' }, { place: 'Venice', note: '~1 h' }, { place: 'Padua', note: '~50 min' }],
        thingsToKnow: ['Chioggia is road-accessible, delivered door-to-door.', 'Known for its fish market and the Sottomarina beach strip.', 'A quieter, working alternative to central Venice.'],
        attractions: ['Corso del Popolo', 'Fish market', 'Sottomarina beach'],
        legs: { vce: VCE('~40 km', '~50–60 min'), tsf: VCE('~55 km', '~1 h 5') },
    },

    // ─────────────────────────── VENETO CITIES & SPA ───────────────────────
    {
        slug: 'padua', name: 'Padua', kind: 'city', area: 'Veneto',
        description: 'Padua (Padova) is a historic university city west of Venice, home to Giotto\'s frescoed Scrovegni Chapel and one of the world\'s oldest universities. Well connected and fully road-accessible, it makes an easy and rewarding base or day trip in the Veneto.',
        dining: 'A lively university city of arcaded streets, grand piazzas and the Basilica of Saint Anthony.',
        suitedFor: 'culture travellers and pilgrims visiting the Veneto',
        nearby: [{ place: 'Venice', note: '~40 min' }, { place: 'Vicenza', note: '~30 min' }, { place: 'Abano Terme', note: '~15 min' }],
        thingsToKnow: ['Padua is delivered door-to-door, including its limited-traffic centre.', 'Booking is required for the Scrovegni Chapel.', 'A convenient, lower-cost base near Venice.'],
        attractions: ['Scrovegni Chapel', 'Basilica of Saint Anthony', 'Prato della Valle', 'Palazzo della Ragione'],
        legs: { vce: VCE('~45 km', '~45–55 min'), tsf: VCE('~55 km', '~50–60 min'), vrn: VCE('~80 km', '~55 min') },
    },
    {
        slug: 'vicenza', name: 'Vicenza', kind: 'city', area: 'Veneto',
        description: 'Vicenza is the elegant "city of Palladio", a UNESCO World Heritage centre filled with the Renaissance architect\'s villas and palaces. Midway between Venice and Verona, it is an easy road transfer and a highlight for architecture lovers.',
        dining: 'Andrea Palladio\'s home city, lined with his palazzi and crowned by the Teatro Olimpico.',
        suitedFor: 'architecture and culture travellers exploring the Veneto',
        nearby: [{ place: 'Padua', note: '~30 min' }, { place: 'Verona', note: '~45 min' }, { place: 'Bassano del Grappa', note: '~35 min' }],
        thingsToKnow: ['Vicenza is reached door-to-door by private car.', 'The Teatro Olimpico and Villa La Rotonda are must-sees.', 'Well placed between Venice and Lake Garda.'],
        attractions: ['Teatro Olimpico', 'Basilica Palladiana', 'Villa La Rotonda', 'Piazza dei Signori'],
        legs: { vce: VCE('~75 km', '~1 h'), tsf: VCE('~65 km', '~1 h'), vrn: VCE('~50 km', '~50 min') },
    },
    {
        slug: 'treviso', name: 'Treviso', kind: 'city', area: 'Veneto',
        description: 'Treviso is a charming walled city of canals and frescoed houses north of Venice, the home of Prosecco and tiramisù. Just minutes from its own airport and road-accessible throughout, it is an appealing, less-crowded Veneto base.',
        dining: 'A canal-threaded medieval city, gateway to the Prosecco hills of Conegliano and Valdobbiadene.',
        suitedFor: 'travellers wanting a relaxed Veneto base and Prosecco country',
        nearby: [{ place: 'Treviso Airport', note: '~15 min' }, { place: 'Venice', note: '~40 min' }, { place: 'Prosecco hills', note: '~40 min' }],
        thingsToKnow: ['Treviso is delivered door-to-door, including its historic centre.', 'The gateway to the Prosecco wine road.', 'A quieter alternative to staying in Venice.'],
        attractions: ['Piazza dei Signori', 'Buranelli canals', 'Prosecco hills', 'City walls'],
        legs: { vce: VCE('~30 km', '~35–45 min'), tsf: VCE('~8 km', '~15 min') },
    },
    {
        slug: 'verona', name: 'Verona', kind: 'city', area: 'Veneto',
        description: 'Verona is the romantic city of Romeo and Juliet, built around a Roman arena that still hosts a famous opera festival. A UNESCO World Heritage centre on the river Adige, it is minutes from its own airport and the eastern shore of Lake Garda.',
        dining: 'The city of the Arena, Juliet\'s balcony and elegant marble piazzas on the Adige.',
        suitedFor: 'opera-goers, romantics and Lake Garda travellers',
        nearby: [{ place: 'Verona Airport', note: '~20 min' }, { place: 'Lake Garda', note: '~30 min' }, { place: 'Vicenza', note: '~45 min' }],
        thingsToKnow: ['Verona is reached door-to-door, including its limited-traffic centre.', 'The Arena opera festival runs in summer — book transfers ahead.', 'The nearest airport is Verona Villafranca (VRN).'],
        attractions: ['Verona Arena', 'Juliet\'s House', 'Piazza delle Erbe', 'Castelvecchio'],
        legs: { vce: VCE('~120 km', '~1 h 30'), tsf: VCE('~130 km', '~1 h 30'), vrn: VCE('~15 km', '~20–25 min') },
    },
    {
        slug: 'bassano-del-grappa', name: 'Bassano del Grappa', kind: 'town', area: 'Veneto foothills',
        description: 'Bassano del Grappa is a picturesque town at the foot of the Alps, famous for its covered wooden Ponte Vecchio (Ponte degli Alpini), grappa distilleries and ceramics. Set between Venice and the mountains, it is a scenic road transfer.',
        dining: 'A riverside town below the Alps, known for grappa, ceramics and Palladio\'s wooden bridge.',
        suitedFor: 'travellers exploring the Veneto foothills and grappa country',
        nearby: [{ place: 'Vicenza', note: '~35 min' }, { place: 'Asolo', note: '~30 min' }, { place: 'Marostica', note: '~15 min' }],
        thingsToKnow: ['Bassano is reached door-to-door by private car.', 'Famous for grappa tastings and the historic Alpini bridge.', 'A gateway to the Asiago plateau and Dolomite foothills.'],
        attractions: ['Ponte degli Alpini', 'Grappa distilleries', 'Piazza Libertà', 'Asolo (nearby)'],
        legs: { vce: VCE('~75 km', '~1 h 10'), tsf: VCE('~50 km', '~50 min') },
    },
    {
        slug: 'abano-terme', name: 'Abano Terme', kind: 'spa', area: 'Euganean Hills',
        description: 'Abano Terme is Italy\'s leading thermal spa town, set in the Euganean Hills southwest of Padua and known for its therapeutic mud treatments and hot springs. Fully road-accessible, it is an easy transfer for a wellness break.',
        dining: 'A renowned thermal spa town of mineral pools and mud-therapy resorts near Padua.',
        suitedFor: 'wellness and spa travellers seeking the Euganean thermal baths',
        nearby: [{ place: 'Montegrotto Terme', note: '~5 min' }, { place: 'Padua', note: '~15 min' }, { place: 'Euganean Hills', note: 'adjacent' }],
        thingsToKnow: ['Abano is delivered door-to-door to your spa hotel.', 'Famous for thermal mud (fangoterapia) and mineral pools.', 'A short hop from Padua and its art treasures.'],
        attractions: ['Thermal spas', 'Euganean Hills', 'Montegrotto Roman baths'],
        legs: { vce: VCE('~55 km', '~55 min'), vrn: VCE('~75 km', '~55 min') },
    },
    {
        slug: 'montegrotto-terme', name: 'Montegrotto Terme', kind: 'spa', area: 'Euganean Hills',
        description: 'Montegrotto Terme is a thermal spa town beside Abano in the Euganean Hills, with Roman-era bath ruins and a cluster of modern wellness resorts. Road-accessible throughout, it is a straightforward transfer for a thermal retreat.',
        dining: 'A thermal resort town with Roman bath remains and modern spa hotels near Padua.',
        suitedFor: 'spa travellers wanting the Euganean thermal springs',
        nearby: [{ place: 'Abano Terme', note: '~5 min' }, { place: 'Padua', note: '~15 min' }, { place: 'Este', note: '~20 min' }],
        thingsToKnow: ['Montegrotto is delivered door-to-door to your resort.', 'Known for its Roman thermal ruins alongside modern spas.', 'Pairs easily with a visit to Padua.'],
        attractions: ['Roman thermal ruins', 'Spa resorts', 'Euganean Hills'],
        legs: { vce: VCE('~57 km', '~55 min'), vrn: VCE('~78 km', '~55 min') },
    },

    // ─────────────────────────── LAKE GARDA ────────────────────────────────
    {
        slug: 'lake-garda', name: 'Lake Garda', kind: 'lake', area: 'Lake Garda',
        description: 'Lake Garda is Italy\'s largest lake, ringed by resort towns, vineyards, lemon groves and mountains, straddling the Veneto, Lombardy and Trentino. Verona\'s airport is the closest gateway, and a private transfer reaches any lakeside resort door-to-door.',
        dining: 'Italy\'s largest lake, from vine-clad southern shores to dramatic northern fjords.',
        suitedFor: 'lake holidaymakers heading to any Garda resort',
        nearby: [{ place: 'Verona', note: '~30 min' }, { place: 'Sirmione', note: 'south shore' }, { place: 'Peschiera', note: 'south shore' }],
        thingsToKnow: ['Tell us your exact resort — we deliver door-to-door around the whole lake.', 'The southern shore is closest to Verona Airport.', 'Summer lakeside traffic can add time; we plan accordingly.'],
        attractions: ['Sirmione', 'Bardolino', 'Malcesine', 'Gardaland'],
        legs: { vce: VCE('~145 km', '~1 h 45'), vrn: VCE('~30 km', '~35–40 min') },
    },
    {
        slug: 'sirmione', name: 'Sirmione', kind: 'lake', area: 'Lake Garda (south)',
        description: 'Sirmione is Lake Garda\'s most famous village, on a slender peninsula crowned by the moated Scaliger Castle and the Roman ruins of the Grotte di Catullo. A short transfer from Verona\'s airport, it is the jewel of the southern lake.',
        dining: 'A castle-guarded peninsula village with thermal springs and Roman ruins on the southern lake.',
        suitedFor: 'travellers heading to the southern Lake Garda\'s star village',
        nearby: [{ place: 'Peschiera del Garda', note: '~15 min' }, { place: 'Desenzano', note: '~15 min' }, { place: 'Verona', note: '~35 min' }],
        thingsToKnow: ['The historic centre limits traffic; we drop at the nearest permitted point.', 'Famous for the Scaliger Castle and Grotte di Catullo.', 'Very popular in summer — book ahead.'],
        attractions: ['Scaliger Castle', 'Grotte di Catullo', 'Jamaica Beach', 'Aquaria thermal spa'],
        legs: { vce: VCE('~145 km', '~1 h 45'), vrn: VCE('~30 km', '~35 min') },
    },
    {
        slug: 'peschiera-del-garda', name: 'Peschiera del Garda', kind: 'lake', area: 'Lake Garda (southeast)',
        description: 'Peschiera del Garda is a fortified lakeside town at the southeastern corner of Lake Garda, its Venetian walls now a UNESCO site. With its own rail station and close to Verona\'s airport, it is a convenient gateway to the lake and the Gardaland theme park.',
        dining: 'A UNESCO-listed Venetian fortress town at the mouth of the Mincio on the south lake.',
        suitedFor: 'families and lake travellers, and Gardaland visitors',
        nearby: [{ place: 'Gardaland', note: '~10 min' }, { place: 'Sirmione', note: '~15 min' }, { place: 'Lazise', note: '~10 min' }],
        thingsToKnow: ['Peschiera is delivered door-to-door.', 'The closest lake town to Verona Airport and Gardaland.', 'Has its own railway station on the Milan–Venice line.'],
        attractions: ['Venetian fortress walls', 'Gardaland', 'Lakefront promenade'],
        legs: { vce: VCE('~140 km', '~1 h 40'), vrn: VCE('~25 km', '~30 min') },
    },
    {
        slug: 'bardolino', name: 'Bardolino', kind: 'lake', area: 'Lake Garda (east)',
        description: 'Bardolino is a relaxed resort town on Lake Garda\'s eastern shore, famous for its light red wine and olive oil. Backed by vine-covered hills and lined with a pretty lakefront, it is an easy transfer from Verona\'s airport.',
        dining: 'A wine-and-olive-oil town on the eastern shore, with a palm-lined lakefront promenade.',
        suitedFor: 'wine lovers and relaxed lake holidaymakers',
        nearby: [{ place: 'Lazise', note: '~10 min' }, { place: 'Garda town', note: '~10 min' }, { place: 'Verona', note: '~35 min' }],
        thingsToKnow: ['Bardolino is delivered door-to-door.', 'Known for Bardolino DOC wine and lakeside wineries.', 'A lively but relaxed base on the eastern shore.'],
        attractions: ['Bardolino wine road', 'Lakefront promenade', 'Olive oil museum'],
        legs: { vce: VCE('~150 km', '~1 h 50'), vrn: VCE('~30 km', '~35 min') },
    },
    {
        slug: 'desenzano-del-garda', name: 'Desenzano del Garda', kind: 'lake', area: 'Lake Garda (southwest)',
        description: 'Desenzano del Garda is the largest and liveliest town on the southern lake, with an elegant old harbour, a Roman villa and good rail links. It is a popular, well-connected base reachable by a straightforward transfer from Verona.',
        dining: 'The bustling main town of the south lake, with a picturesque old port and Roman villa.',
        suitedFor: 'travellers wanting a lively, well-connected Lake Garda base',
        nearby: [{ place: 'Sirmione', note: '~15 min' }, { place: 'Peschiera', note: '~15 min' }, { place: 'Salò', note: '~25 min' }],
        thingsToKnow: ['Desenzano is delivered door-to-door.', 'The best rail-connected town on the lake.', 'Its old harbour is a lively evening spot.'],
        attractions: ['Old harbour', 'Roman Villa', 'Castle', 'Lakefront'],
        legs: { vce: VCE('~150 km', '~1 h 50'), vrn: VCE('~35 km', '~40 min') },
    },
    {
        slug: 'lazise', name: 'Lazise', kind: 'lake', area: 'Lake Garda (east)',
        description: 'Lazise is a pretty walled town on Lake Garda\'s eastern shore, the first free commune on the lake, with a medieval harbour and Scaliger castle. Close to the theme parks and Verona\'s airport, it is an easy family-friendly transfer.',
        dining: 'A medieval walled harbour town near Garda\'s theme parks on the eastern shore.',
        suitedFor: 'families near the Garda theme parks and eastern-shore travellers',
        nearby: [{ place: 'Gardaland', note: '~10 min' }, { place: 'Bardolino', note: '~10 min' }, { place: 'Peschiera', note: '~10 min' }],
        thingsToKnow: ['Lazise is delivered door-to-door.', 'Handy for Gardaland, CanevaWorld and the eastern shore.', 'Its walled harbour is especially scenic at dusk.'],
        attractions: ['Scaliger castle', 'Medieval harbour', 'Gardaland (nearby)'],
        legs: { vce: VCE('~145 km', '~1 h 45'), vrn: VCE('~28 km', '~35 min') },
    },
    {
        slug: 'malcesine', name: 'Malcesine', kind: 'lake', area: 'Lake Garda (northeast)',
        description: 'Malcesine is a photogenic town on Lake Garda\'s northeastern shore, below Monte Baldo, with a Scaliger castle rising over the water and a cable car to the peak. The scenic lakeside drive from Verona\'s airport is longer but rewarding.',
        dining: 'A castle-topped town beneath Monte Baldo, with a cable car to alpine views.',
        suitedFor: 'travellers heading to the scenic northern-eastern lake and Monte Baldo',
        nearby: [{ place: 'Monte Baldo cable car', note: 'in town' }, { place: 'Riva del Garda', note: '~30 min' }, { place: 'Torbole', note: '~20 min' }],
        thingsToKnow: ['Malcesine is delivered door-to-door.', 'The Monte Baldo cable car climbs to walking and skiing terrain.', 'A hub for windsurfing on the northern lake.'],
        attractions: ['Scaliger Castle', 'Monte Baldo cable car', 'Lakefront old town'],
        legs: { vce: VCE('~170 km', '~2 h'), vrn: VCE('~60 km', '~1 h 10') },
    },
    {
        slug: 'riva-del-garda', name: 'Riva del Garda', kind: 'lake', area: 'Lake Garda (north, Trentino)',
        description: 'Riva del Garda sits at the mountainous northern tip of the lake in Trentino, ringed by cliffs and popular for sailing, windsurfing and climbing. The drive up the eastern or western shore from Verona is scenic but takes over an hour.',
        dining: 'A dramatic alpine-lakeside town at Garda\'s northern tip, framed by sheer cliffs.',
        suitedFor: 'active travellers heading to the northern lake for water sports',
        nearby: [{ place: 'Torbole', note: '~10 min' }, { place: 'Arco', note: '~10 min' }, { place: 'Trento', note: '~45 min' }],
        thingsToKnow: ['Riva is delivered door-to-door.', 'A windsurfing and sailing hub thanks to reliable lake winds.', 'The northern shore is more alpine and dramatic.'],
        attractions: ['Bastione', 'Varone waterfall', 'Lakefront', 'Ponale road'],
        legs: { vrn: VCE('~85 km', '~1 h 20') },
    },

    // ─────────────────────────── MOUNTAINS & TRENTINO ──────────────────────
    {
        slug: 'cortina-dampezzo', name: 'Cortina d\'Ampezzo', kind: 'ski', area: 'Dolomites',
        description: 'Cortina d\'Ampezzo is the "Queen of the Dolomites", a glamorous alpine resort and a 2026 Winter Olympics host, ringed by dramatic peaks. The scenic mountain drive from the Venice-area airports is long but a private transfer with an experienced driver handles the passes with ease.',
        dining: 'A chic Dolomites ski resort of designer boutiques and spectacular mountain scenery.',
        suitedFor: 'skiers and mountain travellers heading to the Dolomites',
        nearby: [{ place: 'Dolomites passes', note: 'surrounding' }, { place: 'Misurina', note: '~20 min' }, { place: 'Auronzo', note: '~30 min' }],
        thingsToKnow: ['A long mountain transfer — allow around two hours from Venice-area airports.', 'Winter roads can be snowy; our drivers are equipped for alpine conditions.', 'A host resort of the Milan–Cortina 2026 Winter Olympics.'],
        attractions: ['Tofane & Faloria ski areas', 'Tre Cime di Lavaredo', 'Cortina old town'],
        legs: { vce: VCE('~160 km', '~2 h 15'), tsf: VCE('~130 km', '~1 h 50') },
    },
    {
        slug: 'rovereto', name: 'Rovereto', kind: 'town', area: 'Trentino',
        description: 'Rovereto is a cultured Trentino town south of Trento, known for the MART modern-art museum and its Venetian old quarter. A straightforward transfer from Verona\'s airport up the Adige valley, it is a gateway to the Trentino wine country.',
        dining: 'A Trentino art town home to the MART museum and a peaceful medieval core.',
        suitedFor: 'culture travellers exploring Trentino and the Adige valley',
        nearby: [{ place: 'Trento', note: '~25 min' }, { place: 'Lake Garda (Riva)', note: '~45 min' }, { place: 'Verona', note: '~40 min' }],
        thingsToKnow: ['Rovereto is delivered door-to-door.', 'The MART is one of Italy\'s leading modern-art museums.', 'On the main Verona–Brenner route up the Adige valley.'],
        attractions: ['MART museum', 'Rovereto Castle', 'Bell of the Fallen'],
        legs: { vrn: VCE('~50 km', '~50 min') },
    },
    {
        slug: 'trento', name: 'Trento', kind: 'city', area: 'Trentino',
        description: 'Trento is the handsome capital of Trentino, an alpine city of frescoed façades and the Council-of-Trent history, surrounded by mountains and vineyards. The transfer up the Adige valley from Verona is fast and scenic.',
        dining: 'A frescoed alpine city below the Dolomites, rich in history and mountain wine culture.',
        suitedFor: 'travellers heading into Trentino, the mountains and wine country',
        nearby: [{ place: 'Rovereto', note: '~25 min' }, { place: 'Bolzano', note: '~50 min' }, { place: 'Lake Garda', note: '~50 min' }],
        thingsToKnow: ['Trento is delivered door-to-door.', 'A gateway to the Dolomiti di Brenta and Trentino ski resorts.', 'Well connected up the Adige valley from Verona.'],
        attractions: ['Piazza Duomo', 'Buonconsiglio Castle', 'MUSE science museum'],
        legs: { vrn: VCE('~90 km', '~1 h') },
    },
    {
        slug: 'bolzano', name: 'Bolzano', kind: 'city', area: 'South Tyrol',
        description: 'Bolzano (Bozen) is the bilingual capital of South Tyrol, where Italian and Austrian cultures meet at the foot of the Dolomites, home to Ötzi the Iceman. The transfer up the Adige/Brenner corridor from Verona is long but a comfortable door-to-door alternative to changing trains.',
        dining: 'A Tyrolean-Italian city of arcaded streets and mountain markets, gateway to the Dolomites.',
        suitedFor: 'travellers heading to South Tyrol and the Dolomites',
        nearby: [{ place: 'Trento', note: '~50 min' }, { place: 'Dolomites', note: 'surrounding' }, { place: 'Merano', note: '~40 min' }],
        thingsToKnow: ['A longer transfer up the Brenner corridor — around 1 h 45 from Verona.', 'Home to the South Tyrol Museum of Archaeology (Ötzi).', 'The gateway to Alpe di Siusi and Val Gardena.'],
        attractions: ['Ötzi museum', 'Walther Square', 'Runkelstein Castle', 'Dolomites'],
        legs: { vrn: VCE('~150 km', '~1 h 45') },
    },
];

export type VenetoDirection = 'airport-to-dest' | 'dest-to-airport';

export function venetoArrivalSlug(a: VenetoAirport, d: VenetoDestination): string { return `${a.slugPart}-to-${d.slug}`; }
export function venetoDepartureSlug(d: VenetoDestination, a: VenetoAirport): string { return `${d.slug}-to-${a.slugPart}`; }

export interface VenetoTransferCombo {
    airport: VenetoAirport;
    dest: VenetoDestination;
    leg: Leg;
    slug: string;
    direction: VenetoDirection;
}

function airportByCode(code: string): VenetoAirport { return venetoAirports.find((a) => a.code === code)!; }

export function getAllVenetoTransfers(): VenetoTransferCombo[] {
    const out: VenetoTransferCombo[] = [];
    for (const dest of venetoDestinations) {
        (['vce', 'tsf', 'vrn'] as const).forEach((key) => {
            const leg = dest.legs[key];
            if (!leg) return;
            const airport = airportByCode(key.toUpperCase());
            out.push({ airport, dest, leg, slug: venetoArrivalSlug(airport, dest), direction: 'airport-to-dest' });
            out.push({ airport, dest, leg, slug: venetoDepartureSlug(dest, airport), direction: 'dest-to-airport' });
        });
    }
    return out;
}

export function findVenetoTransfer(slug: string): VenetoTransferCombo | null {
    return getAllVenetoTransfers().find((t) => t.slug === slug) || null;
}

// Other destinations served by the same airport (for internal linking).
export function relatedVenetoDestinations(airportCode: string, excludeSlug: string, limit = 6): VenetoDestination[] {
    const key = airportCode.toLowerCase() as 'vce' | 'tsf' | 'vrn';
    return venetoDestinations.filter((d) => d.slug !== excludeSlug && d.legs[key]).slice(0, limit);
}

export function venetoAirportByCode(code: string): VenetoAirport { return airportByCode(code); }
