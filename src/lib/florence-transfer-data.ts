// Data for the programmatic Florence & Tuscany airport-transfer cluster.
// Self-contained (parallel to airport-hotel-data.ts for Rome) so it can model
// Florence realities that differ from Rome: no metro system, a strict city-wide
// ZTL, and distances that depend on BOTH the airport (FLR ≈ 5 km, PSA ≈ 85 km)
// AND the destination. Every hotel/resort/landmark carries genuinely unique,
// factual location content so no two generated pages duplicate each other.
//
// Distances/durations are realistic approximations (marked with ~) grounded in
// the real geography of each property/town — the standard for transfer sites,
// where actual time always depends on traffic and exact address.

export interface FLAirport {
    code: string;
    name: string;        // full name
    short: string;       // e.g. "Florence"
    slugPart: string;    // slug token, e.g. "florence-airport"
    airportPage: string; // existing guide page, e.g. "/airport/florence"
    blurb: string;       // 1-line context
    about: string;       // 2–3 sentences
    terminals: string;
    recommendedArrival: string;
}

export interface Leg {
    distance: string;
    duration: string;
}

export type DestKind = 'hotel' | 'resort' | 'landmark';

export interface NearBy {
    place: string;
    note: string; // walking time (central) or drive context (resort/landmark)
}

export interface FLDestination {
    slugPart: string;
    name: string;
    kind: DestKind;
    area: string;            // neighbourhood or town
    type: string;            // style label, e.g. "Luxury 5-star"
    description: string;     // 2–3 unique, factual, location-led sentences
    dining: string;          // one factual sentence about setting/dining
    suitedFor: string;       // who it suits
    nearby: NearBy[];        // adjacent points of interest
    attractions: string[];   // nearby attractions for the "good to know" box
    legs: { flr?: Leg; psa?: Leg }; // which airports have a page + distance/time
    reverseToFlr?: boolean;  // whether a {dest}→Florence Airport departure page exists
}

export const flAirports: FLAirport[] = [
    {
        code: 'FLR',
        name: 'Florence Airport (Peretola)',
        short: 'Florence',
        slugPart: 'florence-airport',
        airportPage: '/airport/florence',
        blurb: 'Florence\'s own airport (Amerigo Vespucci), just northwest of the city.',
        about: 'Florence Airport, officially Amerigo Vespucci and locally known as Peretola, sits about 5 km northwest of the city centre in the Peretola district. It is a compact regional gateway handling mainly European flights, and its proximity to Florence means a private transfer reaches most city hotels in well under half an hour.',
        terminals: 'A single passenger terminal — quick and easy to navigate, with arrivals and departures close together.',
        recommendedArrival: 'Arrive about 2 hours before European/Schengen departures; the small terminal moves quickly but security can queue at peak times.',
    },
    {
        code: 'PSA',
        name: 'Pisa International Airport (Galileo Galilei)',
        short: 'Pisa',
        slugPart: 'pisa-airport',
        airportPage: '/airport/pisa',
        blurb: 'Tuscany\'s largest airport, on the coast ~85 km west of Florence.',
        about: 'Pisa International Airport (Galileo Galilei) is the largest airport in Tuscany, about 1 km from Pisa city centre and roughly 85 km west of Florence. It handles a wide range of low-cost and full-service European routes, and because it lies well outside Florence a private transfer is the most comfortable, direct way to cover the motorway journey to the city or the Tuscan countryside.',
        terminals: 'A single main terminal serving all airlines — straightforward for arrivals and meet & greet.',
        recommendedArrival: 'Arrive about 2 hours before departure; allow extra time in summer when Pisa is busy with holiday traffic.',
    },
];

// Convenience factories for the common central-Florence distance profiles.
const FLR_CENTRAL: Leg = { distance: '~6 km', duration: '~15–25 min' };
const FLR_CENTRAL_SOUTH: Leg = { distance: '~7 km', duration: '~20–25 min' };
const FLR_FIESOLE: Leg = { distance: '~12 km', duration: '~25–35 min' };
const PSA_CENTRAL: Leg = { distance: '~85 km', duration: '~1 h 10–1 h 30' };

export const flDestinations: FLDestination[] = [
    // ─────────────────────────── FLORENCE HOTELS ───────────────────────────
    {
        slugPart: 'four-seasons-firenze', name: 'Four Seasons Hotel Firenze', kind: 'hotel',
        area: 'Borgo Pinti (San Marco / Sant\'Ambrogio)', type: 'Luxury 5-star',
        description: 'The Four Seasons Hotel Firenze occupies a restored 15th-century palazzo (the Palazzo della Gherardesca) on Borgo Pinti, set within the largest private garden in central Florence. The tranquil, walled grounds are a rare luxury a short walk northeast of the Duomo, combining Renaissance frescoes with a full spa and pool.',
        dining: 'Set around its own 11-acre garden with acclaimed fine dining, in the quiet Sant\'Ambrogio quarter just beyond the tourist crush.',
        suitedFor: 'luxury travellers and couples who want a serene, garden-set palazzo within walking distance of the historic centre',
        nearby: [{ place: 'Florence Cathedral (Duomo)', note: '15 min walk' }, { place: 'Galleria dell\'Accademia', note: '10 min walk' }, { place: 'Sant\'Ambrogio market', note: '8 min walk' }],
        attractions: ['Duomo', 'Accademia (David)', 'Santa Croce', 'Sant\'Ambrogio market'],
        legs: { flr: FLR_CENTRAL, psa: PSA_CENTRAL }, reverseToFlr: true,
    },
    {
        slugPart: 'st-regis-florence', name: 'The St. Regis Florence', kind: 'hotel',
        area: 'Piazza Ognissanti (Arno riverfront)', type: 'Luxury 5-star',
        description: 'The St. Regis Florence sits directly on Piazza Ognissanti, overlooking the River Arno in a palazzo with origins attributed to the Renaissance architect Brunelleschi. Many rooms face the river and the Oltrarno hills, placing guests on an elegant riverfront square minutes from the fashion boutiques of Via de\' Tornabuoni.',
        dining: 'A riverfront grande-dame hotel with refined dining, beside its sister property on one of Florence\'s most graceful squares.',
        suitedFor: 'luxury travellers who want a riverside address near designer shopping and the Santa Maria Novella district',
        nearby: [{ place: 'Ponte Vecchio', note: '10 min walk' }, { place: 'Via de\' Tornabuoni shopping', note: '5 min walk' }, { place: 'Santa Maria Novella', note: '8 min walk' }],
        attractions: ['Ponte Vecchio', 'Via de\' Tornabuoni', 'Palazzo Strozzi', 'Santa Maria Novella'],
        legs: { flr: FLR_CENTRAL, psa: PSA_CENTRAL }, reverseToFlr: true,
    },
    {
        slugPart: 'hotel-savoy-florence', name: 'Hotel Savoy', kind: 'hotel',
        area: 'Piazza della Repubblica', type: 'Luxury 5-star',
        description: 'The Hotel Savoy stands directly on Piazza della Repubblica, the grand central square laid out on the site of the Roman forum. It is one of the most central luxury addresses in Florence, steps from the Duomo and surrounded by the cafés and arcades of the piazza.',
        dining: 'On the arcaded Piazza della Repubblica with a lively terrace, at the very crossroads of the historic centre.',
        suitedFor: 'travellers who want the most central possible base, moments from the Duomo and the main shopping streets',
        nearby: [{ place: 'Florence Cathedral (Duomo)', note: '4 min walk' }, { place: 'Ponte Vecchio', note: '7 min walk' }, { place: 'Uffizi Gallery', note: '8 min walk' }],
        attractions: ['Duomo', 'Piazza della Signoria', 'Uffizi Gallery', 'Ponte Vecchio'],
        legs: { flr: FLR_CENTRAL, psa: PSA_CENTRAL }, reverseToFlr: true,
    },
    {
        slugPart: 'hotel-lungarno', name: 'Hotel Lungarno', kind: 'hotel',
        area: 'Borgo San Jacopo (Oltrarno, Arno riverfront)', type: 'Luxury 5-star',
        description: 'Hotel Lungarno sits on the Oltrarno bank of the Arno, just steps from the Ponte Vecchio, and is owned by the Ferragamo family\'s Lungarno Collection. Its river-facing rooms and terrace offer some of the finest close-up views of the medieval bridge, alongside a noted private art collection.',
        dining: 'A riverside hotel with a Michelin-recognised restaurant, on the quieter Oltrarno side beside the Ponte Vecchio.',
        suitedFor: 'travellers who want iconic Ponte Vecchio views and the artisan character of the Oltrarno',
        nearby: [{ place: 'Ponte Vecchio', note: '2 min walk' }, { place: 'Pitti Palace', note: '6 min walk' }, { place: 'Uffizi Gallery', note: '6 min walk' }],
        attractions: ['Ponte Vecchio', 'Pitti Palace', 'Boboli Gardens', 'Santo Spirito'],
        legs: { flr: FLR_CENTRAL, psa: PSA_CENTRAL }, reverseToFlr: true,
    },
    {
        slugPart: 'portrait-firenze', name: 'Portrait Firenze', kind: 'hotel',
        area: 'Lungarno degli Acciaiuoli (Arno riverfront)', type: 'Luxury 5-star',
        description: 'Portrait Firenze is a Ferragamo-owned luxury hotel on the Lungarno degli Acciaiuoli, directly facing the Arno and the Ponte Vecchio. Its residence-style suites and riverfront terrace place guests on the north bank in the heart of the fashion district, moments from Via de\' Tornabuoni.',
        dining: 'An intimate river-view hotel with a stylish caffè-restaurant, beside the Ponte Vecchio on the elegant Lungarno.',
        suitedFor: 'style-led luxury travellers who want spacious river-view suites next to the Ponte Vecchio',
        nearby: [{ place: 'Ponte Vecchio', note: '2 min walk' }, { place: 'Uffizi Gallery', note: '5 min walk' }, { place: 'Via de\' Tornabuoni', note: '4 min walk' }],
        attractions: ['Ponte Vecchio', 'Uffizi Gallery', 'Via de\' Tornabuoni', 'Piazza della Signoria'],
        legs: { flr: FLR_CENTRAL, psa: PSA_CENTRAL }, reverseToFlr: true,
    },
    {
        slugPart: 'helvetia-bristol-firenze', name: 'Helvetia & Bristol Firenze', kind: 'hotel',
        area: 'Via dei Pescioni (near Via de\' Tornabuoni)', type: 'Luxury 5-star',
        description: 'The Helvetia & Bristol is a historic 19th-century hotel just off Via de\' Tornabuoni, beside Palazzo Strozzi. Richly decorated with antiques and period art, it is one of Florence\'s oldest luxury hotels, set in the heart of the designer-shopping quarter.',
        dining: 'A classic antique-filled hotel with a refined restaurant, steps from Palazzo Strozzi and the Tornabuoni boutiques.',
        suitedFor: 'travellers who love traditional grand-hotel character in the fashion district',
        nearby: [{ place: 'Palazzo Strozzi', note: '2 min walk' }, { place: 'Florence Cathedral (Duomo)', note: '6 min walk' }, { place: 'Ponte Vecchio', note: '8 min walk' }],
        attractions: ['Palazzo Strozzi', 'Duomo', 'Via de\' Tornabuoni', 'Piazza della Repubblica'],
        legs: { flr: FLR_CENTRAL }, // FLR arrival only
    },
    {
        slugPart: 'sina-villa-medici', name: 'Sina Villa Medici', kind: 'hotel',
        area: 'Via il Prato (near Santa Maria Novella)', type: 'Luxury 5-star',
        description: 'Sina Villa Medici occupies an 18th-century palazzo on Via il Prato, west of the centre near the Porta al Prato. It is notable for having one of the few hotel outdoor pools in central Florence, set in a private garden a short walk from the Santa Maria Novella station and the Cascine park.',
        dining: 'A garden-and-pool hotel in a historic palazzo, close to the SMN station and the Leopolda district.',
        suitedFor: 'travellers who want a garden and pool within walking distance of the centre and the main station',
        nearby: [{ place: 'Santa Maria Novella station', note: '8 min walk' }, { place: 'Santa Maria Novella church', note: '7 min walk' }, { place: 'Cascine Park', note: '6 min walk' }],
        attractions: ['Santa Maria Novella', 'Cascine Park', 'Ognissanti', 'Via de\' Tornabuoni'],
        legs: { flr: FLR_CENTRAL },
    },
    {
        slugPart: 'hotel-brunelleschi', name: 'Hotel Brunelleschi', kind: 'hotel',
        area: 'Piazza Sant\'Elisabetta (steps from the Duomo)', type: 'Luxury 5-star',
        description: 'Hotel Brunelleschi is built around the Torre della Pagliazza, a circular Byzantine tower that is one of the oldest structures in Florence, tucked on a quiet lane between the Duomo and Piazza della Signoria. The hotel even houses its own small archaeological museum in the tower\'s base.',
        dining: 'A characterful hotel incorporating a 6th-century tower, with a rooftop restaurant looking over the historic centre.',
        suitedFor: 'travellers who want a historic, atmospheric hotel in the pedestrian heart of Florence',
        nearby: [{ place: 'Florence Cathedral (Duomo)', note: '3 min walk' }, { place: 'Piazza della Signoria', note: '5 min walk' }, { place: 'Uffizi Gallery', note: '7 min walk' }],
        attractions: ['Duomo', 'Piazza della Signoria', 'Uffizi Gallery', 'Orsanmichele'],
        legs: { flr: FLR_CENTRAL, psa: PSA_CENTRAL }, reverseToFlr: true,
    },
    {
        slugPart: 'nh-collection-porta-rossa', name: 'NH Collection Firenze Porta Rossa', kind: 'hotel',
        area: 'Via Porta Rossa (historic centre)', type: 'Upscale 4-star (historic)',
        description: 'The NH Collection Firenze Porta Rossa claims to be one of the oldest hotels in Italy, occupying a medieval tower-house on Via Porta Rossa near the Mercato Nuovo. Its frescoed lounges and towering historic staircase sit steps from the Ponte Vecchio and Palazzo Davanzati.',
        dining: 'A historic hotel with characterful period interiors, beside the Mercato Nuovo (the "Porcellino" market).',
        suitedFor: 'travellers who want a heritage hotel at a mid-luxury price in the very centre',
        nearby: [{ place: 'Ponte Vecchio', note: '4 min walk' }, { place: 'Piazza della Signoria', note: '4 min walk' }, { place: 'Palazzo Strozzi', note: '3 min walk' }],
        attractions: ['Mercato Nuovo', 'Ponte Vecchio', 'Piazza della Signoria', 'Palazzo Davanzati'],
        legs: { flr: FLR_CENTRAL },
    },
    {
        slugPart: 'tivoli-palazzo-gaddi', name: 'Tivoli Palazzo Gaddi Firenze', kind: 'hotel',
        area: 'Via del Giglio (near Santa Maria Novella)', type: 'Luxury 5-star',
        description: 'Tivoli Palazzo Gaddi occupies a Renaissance palazzo on Via del Giglio, between the Santa Maria Novella station and the Medici Chapels. The property blends historic architecture with a spa and a courtyard, in a well-connected pocket of the centre near the San Lorenzo market.',
        dining: 'A restored palazzo hotel with a spa and courtyard dining, near the San Lorenzo and Mercato Centrale food scene.',
        suitedFor: 'travellers who want a spa hotel close to both the station and the Duomo',
        nearby: [{ place: 'Medici Chapels / San Lorenzo', note: '4 min walk' }, { place: 'Santa Maria Novella station', note: '6 min walk' }, { place: 'Florence Cathedral (Duomo)', note: '7 min walk' }],
        attractions: ['Medici Chapels', 'Mercato Centrale', 'Duomo', 'Santa Maria Novella'],
        legs: { flr: FLR_CENTRAL },
    },
    {
        slugPart: 'villa-cora', name: 'Villa Cora', kind: 'hotel',
        area: 'Viale Machiavelli (Oltrarno hillside, near Boboli)', type: 'Luxury 5-star (villa)',
        description: 'Villa Cora is a 19th-century neoclassical mansion set in its own park on the Oltrarno hillside, bordering the Boboli Gardens on Viale Machiavelli. Slightly above the city, it offers a garden, an outdoor pool and a rooftop restaurant with views toward the Duomo, while remaining a short drive or walk from the centre.',
        dining: 'A grand villa in private gardens with a panoramic rooftop restaurant and pool, beside the Boboli Gardens.',
        suitedFor: 'travellers who want a peaceful villa-and-garden retreat with city views, a little above the centre',
        nearby: [{ place: 'Boboli Gardens', note: '10 min walk' }, { place: 'Pitti Palace', note: '15 min walk' }, { place: 'Piazzale Michelangelo', note: '15 min walk' }],
        attractions: ['Boboli Gardens', 'Pitti Palace', 'Piazzale Michelangelo', 'Porta Romana'],
        legs: { flr: FLR_CENTRAL_SOUTH, psa: PSA_CENTRAL }, reverseToFlr: true,
    },
    {
        slugPart: 'il-salviatino', name: 'Il Salviatino', kind: 'hotel',
        area: 'Fiesole hills (Via del Salviatino)', type: 'Luxury 5-star (villa)',
        description: 'Il Salviatino is a restored 15th-century villa in the hills below Fiesole, set in extensive terraced gardens overlooking Florence. Its frescoed rooms, art collection and hillside pool make it a countryside-style retreat that is still only a short drive from the historic centre.',
        dining: 'A frescoed Renaissance villa with garden dining and panoramic city views, on the Fiesole hillside.',
        suitedFor: 'travellers who want a hillside villa escape with Florence a short transfer away',
        nearby: [{ place: 'Fiesole village', note: '10 min drive' }, { place: 'Florence centre', note: '15 min drive' }, { place: 'San Domenico', note: '5 min drive' }],
        attractions: ['Fiesole Roman theatre', 'Florence panoramas', 'San Domenico', 'Duomo (short drive)'],
        legs: { flr: FLR_FIESOLE },
    },
    {
        slugPart: 'palazzo-vecchietti', name: 'Palazzo Vecchietti', kind: 'hotel',
        area: 'Via degli Strozzi (near Piazza della Repubblica)', type: 'Luxury boutique (5-star)',
        description: 'Palazzo Vecchietti is an intimate suite hotel inside a 16th-century Renaissance palazzo on Via degli Strozzi, moments from Piazza della Repubblica. With only a handful of individually styled suites, it offers a discreet, residence-like stay in the middle of the shopping quarter.',
        dining: 'A tiny design-led palazzo hotel with a courtyard bar, steps from Palazzo Strozzi and the main shopping streets.',
        suitedFor: 'couples and design lovers who want a private, boutique base in the very centre',
        nearby: [{ place: 'Palazzo Strozzi', note: '2 min walk' }, { place: 'Piazza della Repubblica', note: '3 min walk' }, { place: 'Florence Cathedral (Duomo)', note: '5 min walk' }],
        attractions: ['Palazzo Strozzi', 'Duomo', 'Via de\' Tornabuoni', 'Ponte Vecchio'],
        legs: { flr: FLR_CENTRAL },
    },
    {
        slugPart: 'golden-tower-hotel-spa', name: 'Golden Tower Hotel & Spa', kind: 'hotel',
        area: 'Piazza degli Strozzi', type: 'Luxury 5-star',
        description: 'The Golden Tower Hotel & Spa is built into a medieval tower on Piazza degli Strozzi, directly facing Palazzo Strozzi. Combining a historic tower structure with a modern spa, it sits on the doorstep of Via de\' Tornabuoni in the fashion heart of Florence.',
        dining: 'A boutique tower hotel with a spa and a piazza-side restaurant, opposite Palazzo Strozzi.',
        suitedFor: 'travellers who want a small luxury hotel with a spa in the designer-shopping district',
        nearby: [{ place: 'Palazzo Strozzi', note: '1 min walk' }, { place: 'Piazza della Repubblica', note: '3 min walk' }, { place: 'Ponte Vecchio', note: '7 min walk' }],
        attractions: ['Palazzo Strozzi', 'Via de\' Tornabuoni', 'Piazza della Repubblica', 'Duomo'],
        legs: { flr: FLR_CENTRAL },
    },
    {
        slugPart: 'grand-hotel-baglioni', name: 'Grand Hotel Baglioni', kind: 'hotel',
        area: 'Piazza dell\'Unità Italiana (near Santa Maria Novella)', type: 'Upscale 4-star',
        description: 'The Grand Hotel Baglioni sits on Piazza dell\'Unità Italiana, a couple of minutes from both the Santa Maria Novella station and the Duomo. It is best known for its "B-Roof" rooftop restaurant, which offers one of the widest panoramas over the Florence rooftops and the cathedral dome.',
        dining: 'A classic city hotel famous for its rooftop restaurant with sweeping cathedral views, beside the main station.',
        suitedFor: 'travellers who want a well-connected hotel near the station with a landmark rooftop',
        nearby: [{ place: 'Santa Maria Novella station', note: '3 min walk' }, { place: 'Medici Chapels', note: '4 min walk' }, { place: 'Florence Cathedral (Duomo)', note: '6 min walk' }],
        attractions: ['Santa Maria Novella', 'Medici Chapels', 'Duomo', 'Mercato Centrale'],
        legs: { flr: FLR_CENTRAL, psa: PSA_CENTRAL }, reverseToFlr: true,
    },
    {
        slugPart: 'hotel-bernini-palace', name: 'Hotel Bernini Palace', kind: 'hotel',
        area: 'Piazza San Firenze (near Piazza della Signoria)', type: 'Upscale 4-star (historic)',
        description: 'The Hotel Bernini Palace occupies a historic building on Piazza San Firenze, between Piazza della Signoria and Santa Croce. Its frescoed "Sala Parlamento" once hosted the parliament when Florence was capital of Italy, and the location puts the Palazzo Vecchio and Uffizi within a two-minute walk.',
        dining: 'A refined historic hotel with a frescoed breakfast hall, steps from the Palazzo Vecchio and the Bargello.',
        suitedFor: 'travellers who want a historic 4-star beside the Palazzo Vecchio and Santa Croce',
        nearby: [{ place: 'Piazza della Signoria', note: '3 min walk' }, { place: 'Uffizi Gallery', note: '5 min walk' }, { place: 'Santa Croce', note: '6 min walk' }],
        attractions: ['Palazzo Vecchio', 'Uffizi Gallery', 'Bargello', 'Santa Croce'],
        legs: { flr: FLR_CENTRAL, psa: PSA_CENTRAL }, reverseToFlr: true,
    },
    {
        slugPart: 'hotel-regency-florence', name: 'Hotel Regency Florence', kind: 'hotel',
        area: 'Piazza Massimo d\'Azeglio', type: 'Upscale 4-star (townhouse)',
        description: 'The Hotel Regency is a quiet townhouse hotel on the leafy Piazza Massimo d\'Azeglio, a residential garden square east of the centre. Its private garden and calm setting suit travellers who want a peaceful base a short walk or drive from the Duomo and Santa Croce.',
        dining: 'An elegant garden-square townhouse with an intimate restaurant, away from the busiest tourist streets.',
        suitedFor: 'travellers who want a tranquil, residential base within walking distance of the centre',
        nearby: [{ place: 'Sant\'Ambrogio market', note: '8 min walk' }, { place: 'Santa Croce', note: '12 min walk' }, { place: 'Florence Cathedral (Duomo)', note: '15 min walk' }],
        attractions: ['Santa Croce', 'Sant\'Ambrogio', 'Synagogue of Florence', 'Duomo'],
        legs: { flr: FLR_CENTRAL, psa: PSA_CENTRAL }, reverseToFlr: false,
    },
    {
        slugPart: 'villa-san-michele', name: 'Belmond Villa San Michele', kind: 'resort',
        area: 'Fiesole (Via Doccia)', type: 'Luxury 5-star (historic villa)',
        description: 'Belmond Villa San Michele is a former 15th-century monastery on the hillside of Fiesole, with a façade attributed to Michelangelo. Surrounded by terraced gardens, olive groves and a panoramic infinity pool, it looks down over the whole of Florence yet is only a short transfer from the centre.',
        dining: 'A Renaissance monastery-turned-hotel with a loggia restaurant and unrivalled views over Florence, high in Fiesole.',
        suitedFor: 'travellers who want a romantic hilltop retreat with panoramic views above Florence',
        nearby: [{ place: 'Fiesole village', note: '5 min drive' }, { place: 'Florence centre', note: '20 min drive' }, { place: 'Fiesole Roman theatre', note: '7 min drive' }],
        attractions: ['Fiesole', 'Florence panoramas', 'Roman theatre', 'San Domenico'],
        legs: { flr: FLR_FIESOLE }, // FLR only (Tuscany-resort list)
    },
    {
        slugPart: 'hotel-santa-maria-novella', name: 'Hotel Santa Maria Novella', kind: 'hotel',
        area: 'Piazza Santa Maria Novella', type: 'Upscale 4-star',
        description: 'The Hotel Santa Maria Novella overlooks the wide Piazza Santa Maria Novella, facing the famous Gothic basilica and its green lawns. Its position on the square, moments from the main railway station, makes it a convenient and characterful base with a small rooftop terrace.',
        dining: 'A traditional hotel on the basilica square with a rooftop terrace, a couple of minutes from the station.',
        suitedFor: 'travellers who want a square-facing hotel steps from the SMN station and the centre',
        nearby: [{ place: 'Santa Maria Novella church', note: '1 min walk' }, { place: 'Santa Maria Novella station', note: '4 min walk' }, { place: 'Florence Cathedral (Duomo)', note: '9 min walk' }],
        attractions: ['Santa Maria Novella', 'Ognissanti', 'Duomo', 'Palazzo Strozzi'],
        legs: { flr: FLR_CENTRAL }, reverseToFlr: true,
    },
    {
        slugPart: 'palazzo-castri-1874', name: 'Palazzo Castri 1874', kind: 'hotel',
        area: 'Piazza dell\'Indipendenza', type: 'Upscale 4-star (historic)',
        description: 'Palazzo Castri 1874 is a restored 19th-century palazzo on Piazza dell\'Indipendenza, a green square between the station and the San Lorenzo district. It offers a garden, spa and pool — unusual for a central Florence hotel — a short walk from the Medici Chapels and the Fortezza da Basso.',
        dining: 'A historic palazzo with a garden, spa and pool on a quiet square, near the San Lorenzo market.',
        suitedFor: 'travellers who want a garden-and-spa hotel a short walk from the centre and station',
        nearby: [{ place: 'Medici Chapels / San Lorenzo', note: '7 min walk' }, { place: 'Santa Maria Novella station', note: '8 min walk' }, { place: 'Florence Cathedral (Duomo)', note: '12 min walk' }],
        attractions: ['Medici Chapels', 'Fortezza da Basso', 'Mercato Centrale', 'Duomo'],
        legs: { flr: FLR_CENTRAL },
    },

    // ─────────────────────────── TUSCANY RESORTS ───────────────────────────
    {
        slugPart: 'castelfalfi', name: 'Castelfalfi', kind: 'resort',
        area: 'Montaione (Valdelsa hills)', type: 'Countryside golf & wellness resort',
        description: 'Castelfalfi is a restored medieval hamlet and estate in the Valdelsa hills near Montaione, roughly midway between Florence and Pisa. Set among vineyards, olive groves and a large golf course, it centres on a hilltop borgo with a hotel, spa and restaurants across a vast private estate.',
        dining: 'A restored borgo estate with golf, a spa and farm-to-table dining, deep in the Tuscan countryside.',
        suitedFor: 'travellers seeking a countryside golf-and-wellness escape between Florence and Pisa',
        nearby: [{ place: 'Montaione', note: '10 min drive' }, { place: 'San Gimignano', note: '35 min drive' }, { place: 'Volterra', note: '40 min drive' }],
        attractions: ['Golf course', 'San Gimignano', 'Volterra', 'Chianti countryside'],
        legs: { flr: { distance: '~50 km', duration: '~55 min' }, psa: { distance: '~50 km', duration: '~55 min' } },
    },
    {
        slugPart: 'rosewood-castiglion-del-bosco', name: 'Rosewood Castiglion del Bosco', kind: 'resort',
        area: 'Montalcino (Val d\'Orcia)', type: 'Luxury countryside estate',
        description: 'Rosewood Castiglion del Bosco is a 5,000-acre estate within the Val d\'Orcia UNESCO World Heritage landscape, near Montalcino in southern Tuscany. Built around a restored medieval village and its own Brunello di Montalcino winery, it is one of the region\'s most exclusive rural retreats, with a golf course and spa among rolling vineyards.',
        dining: 'A vast Brunello wine estate with a restored borgo, private golf and spa, in the heart of the Val d\'Orcia.',
        suitedFor: 'luxury travellers wanting a secluded wine-country estate in southern Tuscany',
        nearby: [{ place: 'Montalcino', note: '20 min drive' }, { place: 'Pienza', note: '35 min drive' }, { place: 'Siena', note: '50 min drive' }],
        attractions: ['Brunello wine estate', 'Montalcino', 'Val d\'Orcia', 'Pienza'],
        legs: { flr: { distance: '~110 km', duration: '~1 h 40' }, psa: { distance: '~150 km', duration: '~2 h' } },
    },
    {
        slugPart: 'como-castello-del-nero', name: 'COMO Castello Del Nero', kind: 'resort',
        area: 'Tavarnelle Val di Pesa (Chianti)', type: 'Luxury Chianti estate',
        description: 'COMO Castello Del Nero occupies a restored 12th-century castle and estate at Tavarnelle Val di Pesa, in the heart of the Chianti Classico region between Florence and Siena. Surrounded by vineyards and olive groves, it combines historic frescoed interiors with a COMO Shambhala spa and an outdoor pool overlooking the hills.',
        dining: 'A medieval castle estate with a Michelin-recognised restaurant and destination spa, among the Chianti vineyards.',
        suitedFor: 'luxury travellers who want a Chianti castle base close to both Florence and Siena',
        nearby: [{ place: 'Tavarnelle Val di Pesa', note: '8 min drive' }, { place: 'Greve in Chianti', note: '25 min drive' }, { place: 'Siena', note: '40 min drive' }],
        attractions: ['Chianti Classico wineries', 'Greve in Chianti', 'San Gimignano', 'Siena'],
        legs: { flr: { distance: '~35 km', duration: '~45 min' }, psa: { distance: '~110 km', duration: '~1 h 30' } },
    },
    {
        slugPart: 'borgo-santo-pietro', name: 'Borgo Santo Pietro', kind: 'resort',
        area: 'Chiusdino (near Siena)', type: 'Luxury farm-estate & spa',
        description: 'Borgo Santo Pietro is a restored 13th-century estate near Chiusdino, southwest of Siena, set in extensive gardens and a working farm. Renowned for its farm-to-table cuisine drawn from its own produce and livestock, it is a self-contained luxury retreat deep in the Tuscan hills.',
        dining: 'A 13th-century farm-estate with celebrated garden-to-plate dining and a spa, in the countryside near Siena.',
        suitedFor: 'travellers who want a food-focused, garden-set estate away from the crowds',
        nearby: [{ place: 'Chiusdino', note: '10 min drive' }, { place: 'San Galgano Abbey', note: '10 min drive' }, { place: 'Siena', note: '45 min drive' }],
        attractions: ['San Galgano Abbey', 'Siena', 'Val di Merse', 'Tuscan farm gardens'],
        legs: { flr: { distance: '~95 km', duration: '~1 h 30' }, psa: { distance: '~120 km', duration: '~1 h 45' } },
    },
    {
        slugPart: 'hotel-le-fontanelle', name: 'Hotel Le Fontanelle', kind: 'resort',
        area: 'Castelnuovo Berardenga (Chianti, near Siena)', type: 'Countryside estate & spa',
        description: 'Hotel Le Fontanelle is a restored country estate near Castelnuovo Berardenga, in the Chianti hills southeast of Siena. Built from a cluster of old stone farmhouses, it offers a panoramic infinity pool, a spa and wide views over the vineyards on the edge of the Chianti and Crete Senesi.',
        dining: 'A stone-farmhouse estate with a hilltop infinity pool and refined dining, in the Chianti hills near Siena.',
        suitedFor: 'travellers seeking a peaceful Chianti country hotel close to Siena',
        nearby: [{ place: 'Castelnuovo Berardenga', note: '10 min drive' }, { place: 'Siena', note: '25 min drive' }, { place: 'Chianti wineries', note: '15 min drive' }],
        attractions: ['Siena', 'Chianti Classico', 'Crete Senesi', 'Castelnuovo Berardenga'],
        legs: { flr: { distance: '~80 km', duration: '~1 h 15' }, psa: { distance: '~140 km', duration: '~1 h 50' } },
    },
    {
        slugPart: 'castel-monastero', name: 'Castel Monastero', kind: 'resort',
        area: 'Castelnuovo Berardenga (near Siena)', type: 'Historic hamlet resort & spa',
        description: 'Castel Monastero is a restored medieval hamlet dating from around the 11th century, near Castelnuovo Berardenga in the hills east of Siena. Its village square, chapel and old stone buildings now house a hotel, a spa and restaurants, offering a self-contained retreat surrounded by Chianti vineyards and woodland.',
        dining: 'A restored 11th-century hamlet with a village-square setting, spa and rustic-fine dining near Siena.',
        suitedFor: 'travellers who want a historic-hamlet resort experience close to Siena',
        nearby: [{ place: 'Castelnuovo Berardenga', note: '8 min drive' }, { place: 'Siena', note: '30 min drive' }, { place: 'Chianti countryside', note: '15 min drive' }],
        attractions: ['Siena', 'Chianti Classico', 'Brolio Castle', 'Crete Senesi'],
        legs: { flr: { distance: '~85 km', duration: '~1 h 20' }, psa: { distance: '~150 km', duration: '~2 h' } },
    },
    {
        slugPart: 'landana', name: 'L\'Andana', kind: 'resort',
        area: 'Castiglione della Pescaia (Maremma coast)', type: 'Luxury coastal country resort',
        description: 'L\'Andana is a country resort near Castiglione della Pescaia in the Maremma, southern Tuscany, set on a former Grand-Ducal estate among vineyards and umbrella pines a few kilometres from the coast. It combines a spa, a golf course and an acclaimed restaurant with easy access to the Maremma beaches.',
        dining: 'A Grand-Ducal country estate near the Maremma coast, with a spa, golf and a renowned Tuscan restaurant.',
        suitedFor: 'travellers who want a coastal-countryside resort combining beach and wine country',
        nearby: [{ place: 'Castiglione della Pescaia', note: '10 min drive' }, { place: 'Maremma beaches', note: '10 min drive' }, { place: 'Grosseto', note: '25 min drive' }],
        attractions: ['Maremma coast', 'Castiglione della Pescaia', 'Maremma Natural Park', 'Grosseto'],
        legs: { flr: { distance: '~165 km', duration: '~2 h' } }, // FLR only (per cluster spec)
    },
    {
        slugPart: 'argentario-golf-wellness-resort', name: 'Argentario Golf & Wellness Resort', kind: 'resort',
        area: 'Monte Argentario (southern Maremma coast)', type: 'Golf & wellness resort',
        description: 'The Argentario Golf & Wellness Resort sits on the Monte Argentario promontory in the far south of Tuscany, overlooking the Orbetello lagoon. A contemporary design resort with an 18-hole golf course and a large spa, it is a base for exploring the Argentario coast, Porto Ercole and Porto Santo Stefano.',
        dining: 'A modern design resort with an 18-hole course and spa, above the Orbetello lagoon on the Argentario coast.',
        suitedFor: 'golf and wellness travellers who want a southern-coast Tuscan resort',
        nearby: [{ place: 'Porto Ercole', note: '15 min drive' }, { place: 'Orbetello', note: '10 min drive' }, { place: 'Porto Santo Stefano', note: '20 min drive' }],
        attractions: ['Monte Argentario', 'Porto Ercole', 'Orbetello lagoon', 'Argentario beaches'],
        legs: { flr: { distance: '~185 km', duration: '~2 h 15' } }, // FLR only
    },
    {
        slugPart: 'fonteverde-thermal-retreat', name: 'Fonteverde Lifestyle & Thermal Retreat', kind: 'resort',
        area: 'San Casciano dei Bagni (southern Tuscany)', type: 'Thermal spa retreat',
        description: 'Fonteverde is a thermal-spa retreat in San Casciano dei Bagni, in the far south of Tuscany near the Umbrian and Lazio borders. Built around natural hot springs used since Etruscan and Roman times, it is set in a 17th-century Medici villa with thermal pools overlooking the Val d\'Orcia and Monte Amiata.',
        dining: 'A Medici-era thermal retreat fed by natural hot springs, with panoramic spa pools in deep southern Tuscany.',
        suitedFor: 'travellers seeking a thermal-spa wellness break in the southern Tuscan hills',
        nearby: [{ place: 'San Casciano dei Bagni', note: '5 min drive' }, { place: 'Pienza', note: '45 min drive' }, { place: 'Montepulciano', note: '45 min drive' }],
        attractions: ['Thermal hot springs', 'Val d\'Orcia', 'Montepulciano', 'Monte Amiata'],
        legs: { flr: { distance: '~150 km', duration: '~1 h 50' } }, // FLR only
    },

    // ─────────────────────── FLORENCE / TUSCAN LANDMARKS ────────────────────
    {
        slugPart: 'florence-city-centre', name: 'Florence City Centre', kind: 'landmark',
        area: 'Historic centre (UNESCO)', type: 'City-centre drop-off',
        description: 'The historic centre of Florence is a UNESCO World Heritage Site packed with Renaissance landmarks — the Duomo, Piazza della Signoria, the Uffizi and the Ponte Vecchio all lie within a compact, largely pedestrian core. Almost all of it falls inside the city\'s ZTL restricted-traffic zone, so a licensed transfer that can legally reach your address is the easiest way to arrive with luggage.',
        dining: 'The heart of Renaissance Florence, ringed by trattorias, cafés and the city\'s great museums and squares.',
        suitedFor: 'any traveller heading to a hotel, apartment or meeting point in central Florence',
        nearby: [{ place: 'Florence Cathedral (Duomo)', note: 'central' }, { place: 'Piazza della Signoria', note: 'central' }, { place: 'Ponte Vecchio', note: 'central' }],
        attractions: ['Duomo', 'Uffizi Gallery', 'Ponte Vecchio', 'Piazza della Signoria'],
        legs: { flr: FLR_CENTRAL, psa: PSA_CENTRAL },
    },
    {
        slugPart: 'piazza-del-duomo', name: 'Piazza del Duomo', kind: 'landmark',
        area: 'Florence historic centre', type: 'Landmark drop-off',
        description: 'Piazza del Duomo is the religious and visual heart of Florence, framed by the cathedral of Santa Maria del Fiore, Giotto\'s bell tower and the octagonal Baptistery with its bronze doors. The square sits within the pedestrian ZTL, so drivers drop you at the nearest permitted point and help with your bags for the short final walk.',
        dining: 'The cathedral square at the centre of the city, surrounded by historic cafés and the start of the main shopping streets.',
        suitedFor: 'travellers whose hotel or tour begins at the cathedral square',
        nearby: [{ place: 'Brunelleschi\'s Dome', note: 'on the square' }, { place: 'Baptistery', note: 'on the square' }, { place: 'Piazza della Repubblica', note: '4 min walk' }],
        attractions: ['Duomo & Dome', 'Giotto\'s Campanile', 'Baptistery', 'Museo dell\'Opera del Duomo'],
        legs: { flr: FLR_CENTRAL },
    },
    {
        slugPart: 'florence-cathedral', name: 'Florence Cathedral (Duomo)', kind: 'landmark',
        area: 'Florence historic centre', type: 'Landmark drop-off',
        description: 'Florence Cathedral — Santa Maria del Fiore — is crowned by Brunelleschi\'s vast terracotta dome, the largest masonry dome ever built and the symbol of the city. Arriving from Pisa, a private transfer covers the ~85 km motorway route and brings you to the nearest ZTL-permitted point for the cathedral, avoiding the long train-plus-walk alternative.',
        dining: 'Florence\'s Gothic cathedral and its landmark Renaissance dome, at the very centre of the old city.',
        suitedFor: 'Pisa arrivals heading straight to the cathedral area of Florence',
        nearby: [{ place: 'Giotto\'s Campanile', note: 'on the square' }, { place: 'Piazza della Signoria', note: '6 min walk' }, { place: 'Mercato Centrale', note: '8 min walk' }],
        attractions: ['Brunelleschi\'s Dome', 'Baptistery', 'Giotto\'s Campanile', 'Duomo Museum'],
        legs: { psa: PSA_CENTRAL },
    },
    {
        slugPart: 'santa-maria-novella-station', name: 'Santa Maria Novella Station', kind: 'landmark',
        area: 'Florence (Piazza della Stazione)', type: 'Transport hub drop-off',
        description: 'Santa Maria Novella (Firenze S.M.N.) is Florence\'s main railway station, the hub for high-speed connections to Rome, Milan, Bologna and Venice. A transfer to or from the station is ideal when combining a flight with onward rail travel — the driver meets you with a name sign and handles luggage across the busy forecourt.',
        dining: 'Florence\'s central railway hub, moments from the basilica of Santa Maria Novella and the city centre.',
        suitedFor: 'travellers connecting between the airport and high-speed trains, or starting/ending a rail journey',
        nearby: [{ place: 'Santa Maria Novella church', note: '3 min walk' }, { place: 'Florence Cathedral (Duomo)', note: '10 min walk' }, { place: 'Mercato Centrale', note: '6 min walk' }],
        attractions: ['Santa Maria Novella', 'Duomo', 'Mercato Centrale', 'Fortezza da Basso'],
        legs: { flr: FLR_CENTRAL, psa: PSA_CENTRAL },
    },
    {
        slugPart: 'ponte-vecchio', name: 'Ponte Vecchio', kind: 'landmark',
        area: 'Florence historic centre (Arno)', type: 'Landmark drop-off',
        description: 'The Ponte Vecchio is Florence\'s iconic medieval bridge, lined with goldsmiths\' and jewellers\' shops and topped by the Vasari Corridor. It links the centre with the Oltrarno, and because the surrounding streets are pedestrian and inside the ZTL, a licensed transfer drops you at the closest permitted access with help for your bags.',
        dining: 'The famous shop-lined medieval bridge over the Arno, connecting the centre with the artisan Oltrarno.',
        suitedFor: 'travellers staying beside the river or the Ponte Vecchio on either bank',
        nearby: [{ place: 'Uffizi Gallery', note: '4 min walk' }, { place: 'Pitti Palace', note: '6 min walk' }, { place: 'Piazza della Signoria', note: '5 min walk' }],
        attractions: ['Ponte Vecchio', 'Vasari Corridor', 'Uffizi Gallery', 'Pitti Palace'],
        legs: { flr: FLR_CENTRAL, psa: PSA_CENTRAL },
    },
    {
        slugPart: 'uffizi-gallery', name: 'Uffizi Gallery', kind: 'landmark',
        area: 'Piazzale degli Uffizi (historic centre)', type: 'Landmark drop-off',
        description: 'The Uffizi Gallery holds one of the world\'s greatest collections of Renaissance art, from Botticelli\'s Birth of Venus to works by Leonardo, Michelangelo and Raphael. It adjoins the Piazza della Signoria in the pedestrian core, so your driver brings you to the nearest ZTL-permitted drop-off for an easy walk to the entrance.',
        dining: 'Florence\'s premier art museum beside the Palazzo Vecchio, at the civic heart of the old city.',
        suitedFor: 'travellers whose visit centres on the Uffizi and Piazza della Signoria',
        nearby: [{ place: 'Piazza della Signoria', note: '1 min walk' }, { place: 'Ponte Vecchio', note: '4 min walk' }, { place: 'Palazzo Vecchio', note: '2 min walk' }],
        attractions: ['Uffizi Gallery', 'Palazzo Vecchio', 'Piazza della Signoria', 'Ponte Vecchio'],
        legs: { flr: FLR_CENTRAL, psa: PSA_CENTRAL },
    },
    {
        slugPart: 'piazzale-michelangelo', name: 'Piazzale Michelangelo', kind: 'landmark',
        area: 'Oltrarno hillside', type: 'Panoramic viewpoint drop-off',
        description: 'Piazzale Michelangelo is the panoramic terrace on the Oltrarno hillside that offers the classic postcard view over Florence, the Arno and the Duomo. Reached by a winding road above the city, it is an easy drop-off by car — far simpler than the uphill walk — and a popular first or last stop on a Florence transfer.',
        dining: 'The city\'s great panoramic terrace above the Arno, with sweeping views of the Duomo and rooftops.',
        suitedFor: 'travellers who want to begin or end their trip with Florence\'s best panorama',
        nearby: [{ place: 'San Miniato al Monte', note: '5 min walk' }, { place: 'Boboli Gardens', note: '10 min drive' }, { place: 'Florence centre', note: '10 min drive' }],
        attractions: ['Panoramic viewpoint', 'San Miniato al Monte', 'Rose Garden', 'Bardini Garden'],
        legs: { flr: FLR_CENTRAL_SOUTH },
    },
    {
        slugPart: 'palazzo-pitti', name: 'Palazzo Pitti', kind: 'landmark',
        area: 'Oltrarno (Piazza de\' Pitti)', type: 'Landmark drop-off',
        description: 'Palazzo Pitti is the vast Renaissance palace on the Oltrarno bank that was home to the Medici grand dukes, now housing several museums and fronting the Boboli Gardens. Set just across the river from the centre, it is a natural drop-off for travellers staying in the Oltrarno or visiting the palace and gardens.',
        dining: 'The grand Medici palace and gateway to the Boboli Gardens, in the artisan Oltrarno district.',
        suitedFor: 'travellers staying in the Oltrarno or centring their visit on the Pitti and Boboli',
        nearby: [{ place: 'Boboli Gardens', note: '2 min walk' }, { place: 'Ponte Vecchio', note: '6 min walk' }, { place: 'Santo Spirito', note: '6 min walk' }],
        attractions: ['Palazzo Pitti', 'Boboli Gardens', 'Santo Spirito', 'Ponte Vecchio'],
        legs: { flr: FLR_CENTRAL_SOUTH },
    },
];

export type TransferDirection = 'airport-to-dest' | 'dest-to-airport';

export function arrivalSlug(airport: FLAirport, dest: FLDestination): string {
    return `${airport.slugPart}-to-${dest.slugPart}`;
}
export function departureSlug(dest: FLDestination, airport: FLAirport): string {
    return `${dest.slugPart}-to-${airport.slugPart}`;
}

export interface FLTransferCombo {
    airport: FLAirport;
    dest: FLDestination;
    leg: Leg;
    slug: string;
    direction: TransferDirection;
}

function airportByCode(code: string): FLAirport {
    return flAirports.find((a) => a.code === code)!;
}

export function getAllFlorenceTransfers(): FLTransferCombo[] {
    const out: FLTransferCombo[] = [];
    const flr = airportByCode('FLR');
    const psa = airportByCode('PSA');

    for (const dest of flDestinations) {
        if (dest.legs.flr) {
            out.push({ airport: flr, dest, leg: dest.legs.flr, slug: arrivalSlug(flr, dest), direction: 'airport-to-dest' });
        }
        if (dest.legs.psa) {
            out.push({ airport: psa, dest, leg: dest.legs.psa, slug: arrivalSlug(psa, dest), direction: 'airport-to-dest' });
        }
        // Departure pages only from Florence Airport, only where curated.
        if (dest.reverseToFlr && dest.legs.flr) {
            out.push({ airport: flr, dest, leg: dest.legs.flr, slug: departureSlug(dest, flr), direction: 'dest-to-airport' });
        }
    }
    return out;
}

export function findFlorenceTransfer(slug: string): FLTransferCombo | null {
    return getAllFlorenceTransfers().find((t) => t.slug === slug) || null;
}

// Related destinations served by the same airport (for internal linking).
export function relatedByAirport(airportCode: string, excludeSlug: string, limit = 6): FLDestination[] {
    const key = airportCode === 'PSA' ? 'psa' : 'flr';
    return flDestinations
        .filter((d) => d.slugPart !== excludeSlug && d.legs[key as 'flr' | 'psa'])
        .slice(0, limit);
}
