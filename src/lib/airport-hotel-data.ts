// Data for programmatic Rome Airport → Hotel transfer pages.
// Curated, real hotels with unique location facts (neighbourhood, landmarks, metro)
// so each generated page carries genuinely useful, non-duplicated content.

export interface RomeAirport {
    code: string;
    name: string;       // full name
    short: string;      // e.g. "Fiumicino"
    slugPart: string;   // e.g. "rome-fiumicino-airport"
    distance: string;   // to central Rome
    duration: string;   // typical drive
    blurb: string;      // 1-line context
    about: string;      // 2–3 sentences for the "About the Airport" section
    terminals: string;  // terminal info
    recommendedArrival: string; // how early to arrive for departures
}

export interface RomeHotel {
    slugPart: string;       // e.g. "hotel-eden"
    name: string;           // e.g. "Hotel Eden"
    area: string;           // neighbourhood
    type: string;           // Luxury / Business / Boutique
    nearestMetro: string;
    walk: { place: string; mins: string }[];   // landmark + walking time
    attractions: string[];
    dining: string;
    suitedFor: string;      // who it suits
    description: string;    // 2–3 unique sentences (location-led, factual)
}

export const romeAirports: RomeAirport[] = [
    {
        code: 'FCO',
        name: 'Rome Fiumicino Airport',
        short: 'Fiumicino',
        slugPart: 'rome-fiumicino-airport',
        distance: '~32 km',
        duration: '~45–60 min',
        blurb: 'Rome\'s main international gateway (Leonardo da Vinci), southwest of the city.',
        about: 'Rome Fiumicino (Leonardo da Vinci) is Italy\'s largest airport and the country\'s principal intercontinental gateway, handling long-haul, international and domestic flights for carriers including ITA Airways and most major global airlines. It lies about 32 km southwest of the city centre on the coast.',
        terminals: 'Terminals 1 and 3 (with the T5 area for some non-Schengen carriers) — confirm your departure terminal on your boarding pass.',
        recommendedArrival: 'Arrive about 3 hours before long-haul/non-Schengen flights and 2 hours before Schengen/domestic departures.',
    },
    {
        code: 'CIA',
        name: 'Rome Ciampino Airport',
        short: 'Ciampino',
        slugPart: 'rome-ciampino-airport',
        distance: '~15 km',
        duration: '~30–40 min',
        blurb: 'Rome\'s smaller airport southeast of the city, used mainly by low-cost carriers.',
        about: 'Rome Ciampino (G. B. Pastine) is the city\'s smaller, second airport, about 15 km southeast of the centre. It is used mainly by low-cost carriers such as Ryanair and Wizz Air for European routes, and is quicker to move through than Fiumicino thanks to its compact single-terminal layout.',
        terminals: 'A single compact passenger terminal — quick to navigate, but with fewer facilities than Fiumicino.',
        recommendedArrival: 'Arrive about 2 hours before departure; low-cost boarding gates can close strictly on time.',
    },
];

export const romeHotels: RomeHotel[] = [
    {
        slugPart: 'hotel-eden', name: 'Hotel Eden', area: 'Via Ludovisi (Veneto)', type: 'Luxury',
        nearestMetro: 'Barberini & Spagna (Line A)',
        walk: [{ place: 'Spanish Steps', mins: '8 min' }, { place: 'Villa Borghese gardens', mins: '5 min' }, { place: 'Trevi Fountain', mins: '12 min' }],
        attractions: ['Spanish Steps', 'Villa Borghese', 'Via Veneto', 'Trevi Fountain'],
        dining: 'Surrounded by the elegant cafés and restaurants of the Via Veneto and Ludovisi district, with the hotel\'s own renowned rooftop dining.',
        suitedFor: 'discerning leisure travellers and couples seeking a quiet, upscale base steps from Villa Borghese',
        description: 'Hotel Eden occupies a discreet 19th-century building on Via Ludovisi, on the hill between Via Veneto and the Spanish Steps. Its rooftop enjoys some of the finest panoramic views over central Rome, and the location balances calm residential streets with easy walking access to the city\'s most famous sights.',
    },
    {
        slugPart: 'hotel-artemide', name: 'Hotel Artemide', area: 'Via Nazionale', type: 'Upscale 4-star',
        nearestMetro: 'Repubblica (Line A)',
        walk: [{ place: 'Piazza della Repubblica', mins: '5 min' }, { place: 'Teatro dell\'Opera', mins: '6 min' }, { place: 'Termini Station', mins: '10 min' }],
        attractions: ['Piazza della Repubblica', 'Baths of Diocletian', 'Teatro dell\'Opera', 'Trevi Fountain'],
        dining: 'Set on Via Nazionale, one of Rome\'s main shopping streets, with abundant restaurants, trattorias and cafés within a short walk.',
        suitedFor: 'business and leisure travellers who want a central, transport-friendly base near Termini',
        description: 'Hotel Artemide sits on the busy, central Via Nazionale, midway between Piazza della Repubblica and the shopping district. Its position makes it one of the most transport-convenient hotels in Rome, within walking distance of Termini station and the Repubblica metro for onward city travel.',
    },
    {
        slugPart: 'hotel-quirinale', name: 'Hotel Quirinale', area: 'Via Nazionale', type: 'Classic 4-star',
        nearestMetro: 'Repubblica (Line A)',
        walk: [{ place: 'Teatro dell\'Opera di Roma', mins: '2 min' }, { place: 'Piazza della Repubblica', mins: '6 min' }, { place: 'Quirinal Palace', mins: '8 min' }],
        attractions: ['Teatro dell\'Opera', 'Quirinal Palace', 'Trevi Fountain', 'Piazza della Repubblica'],
        dining: 'Close to the dining options of Via Nazionale and the Monti district, with a historic in-house restaurant and garden.',
        suitedFor: 'culture lovers and opera-goers — the hotel famously connects to the Rome Opera House',
        description: 'The Hotel Quirinale is a historic property on Via Nazionale, best known for its direct internal connection to the Teatro dell\'Opera di Roma. Its central position places guests within easy reach of the Quirinal Palace, Trevi Fountain and the lively Monti neighbourhood.',
    },
    {
        slugPart: 'hilton-rome-eur-la-lama', name: 'Hilton Rome Eur La Lama', area: 'EUR business district', type: 'Business',
        nearestMetro: 'EUR Magliana / EUR Palasport (Line B)',
        walk: [{ place: 'EUR Convention Centre (La Nuvola)', mins: '10 min' }, { place: 'Laghetto dell\'EUR lake', mins: '12 min' }],
        attractions: ['EUR district architecture', 'La Nuvola convention centre', 'Palazzo della Civiltà Italiana'],
        dining: 'Located in the modern EUR district with corporate-friendly dining and quick links to the city centre via Metro Line B.',
        suitedFor: 'business travellers, conference and trade-fair attendees in the EUR district',
        description: 'The Hilton Rome Eur La Lama stands in EUR, Rome\'s planned modern business district in the south of the city. It is a natural base for conferences at the nearby convention centre, with Metro Line B providing a direct connection to the historic centre.',
    },
    {
        slugPart: 'hotel-de-russie', name: 'Hotel de Russie', area: 'Via del Babuino (Piazza del Popolo)', type: 'Luxury',
        nearestMetro: 'Flaminio & Spagna (Line A)',
        walk: [{ place: 'Piazza del Popolo', mins: '2 min' }, { place: 'Spanish Steps', mins: '7 min' }, { place: 'Villa Borghese', mins: '6 min' }],
        attractions: ['Piazza del Popolo', 'Spanish Steps', 'Villa Borghese', 'Via del Corso shopping'],
        dining: 'Famous for its terraced Secret Garden, set among the boutiques of Via del Babuino in the heart of the shopping triangle.',
        suitedFor: 'luxury travellers who want a tranquil garden retreat moments from Piazza del Popolo',
        description: 'Hotel de Russie lies between Piazza del Popolo and the Spanish Steps, on the elegant Via del Babuino. Its celebrated terraced garden offers a green oasis in the centre of Rome, while the Flaminio metro and Villa Borghese are both a short stroll away.',
    },
    {
        slugPart: 'the-st-regis-rome', name: 'The St. Regis Rome', area: 'Via Vittorio Emanuele Orlando', type: 'Luxury',
        nearestMetro: 'Repubblica (Line A)',
        walk: [{ place: 'Piazza della Repubblica', mins: '3 min' }, { place: 'Baths of Diocletian', mins: '5 min' }, { place: 'Termini Station', mins: '8 min' }],
        attractions: ['Piazza della Repubblica', 'Baths of Diocletian', 'Santa Maria degli Angeli', 'Via Veneto'],
        dining: 'A grand historic hotel near Repubblica with refined dining, close to both Via Veneto and the Termini transport hub.',
        suitedFor: 'luxury and business travellers wanting a landmark hotel near central transport',
        description: 'The St. Regis Rome is a historic grand hotel near Piazza della Repubblica, originally opened in the late 19th century. Its location offers proximity to the Repubblica metro and Termini station, balancing classic luxury with excellent connectivity.',
    },
    {
        slugPart: 'rome-cavalieri-waldorf-astoria', name: 'Rome Cavalieri, Waldorf Astoria', area: 'Monte Mario hill', type: 'Luxury (resort-style)',
        nearestMetro: 'No adjacent metro — hilltop location, transfer recommended',
        walk: [{ place: 'Monte Mario nature reserve', mins: '5 min' }],
        attractions: ['Panoramic city views', 'Vatican (short drive)', 'Monte Mario park'],
        dining: 'A hilltop resort property with extensive grounds, gardens and acclaimed fine dining, set above the city on Monte Mario.',
        suitedFor: 'travellers wanting a resort-style stay with views, a pool and space, slightly outside the centre',
        description: 'The Rome Cavalieri, Waldorf Astoria sits on the Monte Mario hill northwest of the centre, surrounded by private parkland and offering sweeping views over Rome. Its hilltop setting is peaceful and resort-like, and because it is away from the metro a private transfer is the most convenient way to arrive.',
    },
    {
        slugPart: 'hotel-hassler-roma', name: 'Hotel Hassler Roma', area: 'Trinità dei Monti (top of the Spanish Steps)', type: 'Luxury',
        nearestMetro: 'Spagna (Line A)',
        walk: [{ place: 'Spanish Steps', mins: '1 min' }, { place: 'Trinità dei Monti church', mins: '1 min' }, { place: 'Villa Borghese', mins: '7 min' }],
        attractions: ['Spanish Steps', 'Villa Borghese', 'Via dei Condotti luxury shopping', 'Trevi Fountain'],
        dining: 'Crowning the Spanish Steps with a Michelin-recognised rooftop restaurant and views across the rooftops of Rome.',
        suitedFor: 'luxury travellers who want the most iconic possible location, right atop the Spanish Steps',
        description: 'The Hotel Hassler Roma occupies the prime position at the very top of the Spanish Steps, beside the church of Trinità dei Monti. Its rooftop offers commanding views over the city, and the luxury shopping of Via dei Condotti begins at the foot of the steps below.',
    },
    {
        slugPart: 'nh-collection-roma-fori-imperiali', name: 'NH Collection Roma Fori Imperiali', area: 'Imperial Forums / Monti', type: 'Upscale 4-star',
        nearestMetro: 'Cavour & Colosseo (Line B)',
        walk: [{ place: 'Imperial Forums', mins: '3 min' }, { place: 'Colosseum', mins: '10 min' }, { place: 'Trajan\'s Market', mins: '4 min' }],
        attractions: ['Colosseum', 'Roman Forum', 'Imperial Forums', 'Monti neighbourhood'],
        dining: 'Overlooking the Imperial Forums, with a rooftop terrace and the characterful trattorias of Monti nearby.',
        suitedFor: 'history-focused travellers who want to wake up beside ancient Rome',
        description: 'The NH Collection Roma Fori Imperiali sits directly above the Imperial Forums, with a rooftop terrace looking onto Trajan\'s Column and the ancient ruins. The Colosseum and the trendy Monti district are both within an easy walk, making it ideal for exploring ancient Rome on foot.',
    },
    {
        slugPart: 'anantara-palazzo-naiadi', name: 'Anantara Palazzo Naiadi', area: 'Piazza della Repubblica', type: 'Luxury',
        nearestMetro: 'Repubblica (Line A)',
        walk: [{ place: 'Piazza della Repubblica', mins: '1 min' }, { place: 'Baths of Diocletian', mins: '3 min' }, { place: 'Termini Station', mins: '8 min' }],
        attractions: ['Piazza della Repubblica', 'Baths of Diocletian', 'Teatro dell\'Opera', 'Trevi Fountain'],
        dining: 'A neoclassical palace on Piazza della Repubblica with a rooftop pool and dining, surrounded by central restaurants and cafés.',
        suitedFor: 'luxury travellers who want a landmark address with a rooftop pool near central transport',
        description: 'The Anantara Palazzo Naiadi occupies a grand neoclassical palace directly on the curved Piazza della Repubblica. Its rooftop pool overlooks the square, and the Repubblica metro and Termini station are both close by for onward travel across Rome and Italy.',
    },

    // ─── Batch 2: additional hotels with verified central locations ───
    {
        slugPart: 'six-senses-rome', name: 'Six Senses Rome', area: 'Piazza di San Marcello (Via del Corso)', type: 'Luxury',
        nearestMetro: 'Barberini & Spagna (Line A)',
        walk: [{ place: 'Trevi Fountain', mins: '5 min' }, { place: 'Pantheon', mins: '8 min' }, { place: 'Via del Corso shopping', mins: '1 min' }],
        attractions: ['Trevi Fountain', 'Pantheon', 'Piazza Venezia', 'Via del Corso'],
        dining: 'Set in a restored historic palazzo just off Via del Corso, surrounded by the cafés and trattorias of the centro storico.',
        suitedFor: 'design-conscious luxury travellers who want a central, wellness-focused base near the Trevi Fountain',
        description: 'Six Senses Rome occupies a beautifully restored 18th-century palazzo on Piazza di San Marcello, moments from Via del Corso. The location is supremely central, with the Trevi Fountain, Pantheon and Piazza Venezia all an easy walk away.',
    },
    {
        slugPart: 'hotel-de-la-ville', name: 'Hotel de la Ville', area: 'Top of the Spanish Steps (Via Sistina)', type: 'Luxury',
        nearestMetro: 'Spagna (Line A)',
        walk: [{ place: 'Spanish Steps', mins: '2 min' }, { place: 'Trinità dei Monti', mins: '2 min' }, { place: 'Trevi Fountain', mins: '10 min' }],
        attractions: ['Spanish Steps', 'Villa Borghese', 'Via dei Condotti', 'Trevi Fountain'],
        dining: 'A Rocco Forte hotel on Via Sistina with rooftop dining and views, steps from the boutiques around the Spanish Steps.',
        suitedFor: 'luxury travellers wanting a glamorous address at the top of the Spanish Steps',
        description: 'Hotel de la Ville sits at the top of the Spanish Steps on Via Sistina, beside the Hassler. Its rooftop terraces look across the historic centre, and the designer shopping of Via dei Condotti is just below.',
    },
    {
        slugPart: 'palazzo-manfredi', name: 'Palazzo Manfredi', area: 'Colosseum (Via Labicana)', type: 'Luxury',
        nearestMetro: 'Colosseo (Line B)',
        walk: [{ place: 'Colosseum', mins: '2 min' }, { place: 'Roman Forum', mins: '8 min' }, { place: 'Domus Aurea', mins: '3 min' }],
        attractions: ['Colosseum', 'Roman Forum', 'Domus Aurea', 'Monti district'],
        dining: 'Renowned for its rooftop restaurant with direct Colosseum views, in the quiet streets between the Colosseum and the Celio hill.',
        suitedFor: 'travellers who want to wake up to a Colosseum view in an intimate luxury hotel',
        description: 'Palazzo Manfredi faces the Colosseum directly across Via Labicana, famous for the gladiator-arena views from its rooftop. The Roman Forum, Domus Aurea and the Monti district are all within a short walk.',
    },
    {
        slugPart: 'hotel-nazionale', name: 'Hotel Nazionale', area: 'Piazza di Montecitorio', type: 'Upscale 4-star',
        nearestMetro: 'Barberini & Spagna (Line A)',
        walk: [{ place: 'Pantheon', mins: '4 min' }, { place: 'Trevi Fountain', mins: '7 min' }, { place: 'Piazza Navona', mins: '8 min' }],
        attractions: ['Pantheon', 'Trevi Fountain', 'Piazza Navona', 'Italian Parliament'],
        dining: 'A landmark hotel beside Montecitorio (the Italian Parliament), surrounded by the bars and restaurants of the historic centre.',
        suitedFor: 'travellers who want a prestigious address in the very heart of historic Rome',
        description: 'Hotel Nazionale sits on Piazza di Montecitorio, next to the Italian Parliament and a few minutes from the Pantheon. It places guests at the political and historic heart of Rome, within walking distance of the city\'s great squares.',
    },
    {
        slugPart: 'bvlgari-hotel-rome', name: 'Bvlgari Hotel Rome', area: 'Piazza Augusto Imperatore', type: 'Luxury',
        nearestMetro: 'Spagna & Flaminio (Line A)',
        walk: [{ place: 'Mausoleum of Augustus', mins: '1 min' }, { place: 'Ara Pacis', mins: '3 min' }, { place: 'Spanish Steps', mins: '8 min' }],
        attractions: ['Ara Pacis', 'Mausoleum of Augustus', 'Spanish Steps', 'Piazza del Popolo'],
        dining: 'An ultra-luxury hotel overlooking the restored Mausoleum of Augustus, amid the elegant streets near the Ara Pacis.',
        suitedFor: 'luxury travellers seeking a flagship address between the Spanish Steps and Piazza del Popolo',
        description: 'The Bvlgari Hotel Rome overlooks Piazza Augusto Imperatore and the Mausoleum of Augustus. It sits in one of the most refined pockets of central Rome, a short walk from both the Spanish Steps and Piazza del Popolo.',
    },
    {
        slugPart: 'w-rome', name: 'W Rome', area: 'Via Liguria (near Via Veneto)', type: 'Luxury (contemporary)',
        nearestMetro: 'Barberini (Line A)',
        walk: [{ place: 'Via Veneto', mins: '2 min' }, { place: 'Villa Borghese', mins: '6 min' }, { place: 'Spanish Steps', mins: '10 min' }],
        attractions: ['Via Veneto', 'Villa Borghese', 'Spanish Steps', 'Trevi Fountain'],
        dining: 'A vibrant, design-led hotel just off Via Veneto with lively bars and dining in the Ludovisi district.',
        suitedFor: 'younger luxury and lifestyle travellers who want energy and design near Via Veneto',
        description: 'W Rome occupies two restored palazzi on Via Liguria, steps from the famous Via Veneto. Its contemporary, social style contrasts with the classic neighbourhood, and Villa Borghese and the Spanish Steps are within easy reach.',
    },
    {
        slugPart: 'the-rome-edition', name: 'The Rome EDITION', area: 'Via Ludovisi (Via Veneto)', type: 'Luxury (contemporary)',
        nearestMetro: 'Barberini (Line A)',
        walk: [{ place: 'Via Veneto', mins: '2 min' }, { place: 'Villa Borghese', mins: '5 min' }, { place: 'Spanish Steps', mins: '9 min' }],
        attractions: ['Via Veneto', 'Villa Borghese', 'Spanish Steps', 'Barberini'],
        dining: 'A minimalist luxury hotel on Via Ludovisi with acclaimed restaurants and a rooftop, beside Via Veneto.',
        suitedFor: 'design-focused luxury travellers wanting a serene base by Villa Borghese',
        description: 'The Rome EDITION sits on Via Ludovisi, between Via Veneto and Villa Borghese. Its calm, contemporary design and rooftop make it a stylish retreat moments from the gardens and the Spanish Steps.',
    },
    {
        slugPart: 'sofitel-roma-villa-borghese', name: 'Sofitel Roma Villa Borghese', area: 'Via Lombardia (Via Veneto)', type: 'Luxury',
        nearestMetro: 'Barberini (Line A)',
        walk: [{ place: 'Villa Borghese', mins: '3 min' }, { place: 'Via Veneto', mins: '1 min' }, { place: 'Spanish Steps', mins: '10 min' }],
        attractions: ['Villa Borghese', 'Via Veneto', 'Borghese Gallery', 'Spanish Steps'],
        dining: 'A French-luxury hotel near the top of Via Veneto, famous for its panoramic rooftop restaurant overlooking the city.',
        suitedFor: 'travellers wanting elegant comfort beside Villa Borghese and Via Veneto',
        description: 'The Sofitel Roma Villa Borghese stands on Via Lombardia, just off Via Veneto and beside the Villa Borghese gardens. Its rooftop offers sweeping views over Rome, and the Borghese Gallery is a short walk into the park.',
    },
    {
        slugPart: 'hotel-splendide-royal', name: 'Hotel Splendide Royal', area: 'Via di Porta Pinciana (Via Veneto)', type: 'Luxury',
        nearestMetro: 'Barberini (Line A)',
        walk: [{ place: 'Villa Borghese', mins: '2 min' }, { place: 'Via Veneto', mins: '3 min' }, { place: 'Spanish Steps', mins: '10 min' }],
        attractions: ['Villa Borghese', 'Via Veneto', 'Borghese Gallery', 'Spanish Steps'],
        dining: 'An opulent classic hotel near Villa Borghese with a celebrated rooftop restaurant and views over the gardens.',
        suitedFor: 'travellers who love traditional grand-hotel luxury beside the Borghese gardens',
        description: 'Hotel Splendide Royal sits on Via di Porta Pinciana at the edge of the Villa Borghese gardens, near the top of Via Veneto. Its richly decorated interiors and panoramic rooftop epitomise classic Roman luxury.',
    },
    {
        slugPart: 'portrait-roma', name: 'Portrait Roma', area: 'Via Condotti (Spanish Steps)', type: 'Luxury (boutique)',
        nearestMetro: 'Spagna (Line A)',
        walk: [{ place: 'Spanish Steps', mins: '3 min' }, { place: 'Via dei Condotti shopping', mins: '1 min' }, { place: 'Trevi Fountain', mins: '9 min' }],
        attractions: ['Spanish Steps', 'Via dei Condotti', 'Trevi Fountain', 'Piazza di Spagna'],
        dining: 'An intimate Ferragamo-owned boutique hotel above Via dei Condotti, surrounded by Rome\'s luxury shopping and a rooftop terrace.',
        suitedFor: 'style-led luxury travellers who want a discreet boutique base in the shopping district',
        description: 'Portrait Roma is an exclusive boutique property on Via dei Condotti, Rome\'s premier luxury shopping street, just steps from the Spanish Steps. Its rooftop terrace overlooks the rooftops of the historic centre.',
    },
    {
        slugPart: 'hotel-locarno', name: 'Hotel Locarno', area: 'Piazza del Popolo (Via della Penna)', type: 'Boutique (historic)',
        nearestMetro: 'Flaminio (Line A)',
        walk: [{ place: 'Piazza del Popolo', mins: '2 min' }, { place: 'Spanish Steps', mins: '10 min' }, { place: 'Villa Borghese', mins: '8 min' }],
        attractions: ['Piazza del Popolo', 'Villa Borghese', 'Via del Corso', 'Spanish Steps'],
        dining: 'A charming Art Deco hotel near Piazza del Popolo with a famous bar and courtyard garden, amid the antique shops of Via del Babuino.',
        suitedFor: 'travellers who want characterful Art Deco charm by Piazza del Popolo',
        description: 'Hotel Locarno is a beloved Art Deco hotel just off Piazza del Popolo, near the Flaminio metro. Its period character, bar and garden make it a romantic base within walking distance of the Spanish Steps and Villa Borghese.',
    },
    {
        slugPart: 'palazzo-ripetta', name: 'Palazzo Ripetta', area: 'Via di Ripetta (near Piazza del Popolo)', type: 'Upscale 4-star',
        nearestMetro: 'Flaminio & Spagna (Line A)',
        walk: [{ place: 'Piazza del Popolo', mins: '5 min' }, { place: 'Ara Pacis', mins: '4 min' }, { place: 'Spanish Steps', mins: '8 min' }],
        attractions: ['Piazza del Popolo', 'Ara Pacis', 'Spanish Steps', 'Via del Corso'],
        dining: 'A restored historic property on Via di Ripetta with a courtyard, in the heart of the shopping triangle.',
        suitedFor: 'travellers wanting a stylish central base between Piazza del Popolo and the Spanish Steps',
        description: 'Palazzo Ripetta occupies a restored historic building on Via di Ripetta, within the triangle formed by Piazza del Popolo, the Spanish Steps and the Ara Pacis. It offers a quiet courtyard in an otherwise busy shopping district.',
    },
    {
        slugPart: 'hotel-indigo-rome-st-george', name: 'Hotel Indigo Rome – St. George', area: 'Via Giulia (historic centre)', type: 'Boutique 5-star',
        nearestMetro: 'No adjacent metro — central, transfer recommended',
        walk: [{ place: 'Campo de\' Fiori', mins: '5 min' }, { place: 'Piazza Navona', mins: '8 min' }, { place: 'Vatican (across the river)', mins: '15 min' }],
        attractions: ['Campo de\' Fiori', 'Piazza Navona', 'Via Giulia', 'Trastevere'],
        dining: 'A boutique hotel on the elegant Renaissance Via Giulia with a rooftop bar, near the restaurants of Campo de\' Fiori.',
        suitedFor: 'travellers who want a refined boutique stay on one of Rome\'s most beautiful streets',
        description: 'Hotel Indigo Rome – St. George sits on Via Giulia, the graceful Renaissance street near Campo de\' Fiori. It is steps from Piazza Navona and the river, with Trastevere and the Vatican a short walk across the Tiber.',
    },
    {
        slugPart: 'hotel-fontana', name: 'Hotel Fontana di Trevi', area: 'Trevi Fountain (Piazza di Trevi)', type: 'Historic 3-star',
        nearestMetro: 'Barberini (Line A)',
        walk: [{ place: 'Trevi Fountain', mins: '0 min — opposite' }, { place: 'Pantheon', mins: '8 min' }, { place: 'Quirinal Palace', mins: '5 min' }],
        attractions: ['Trevi Fountain', 'Pantheon', 'Quirinal Palace', 'Via del Corso'],
        dining: 'A former 13th-century monastery directly facing the Trevi Fountain, with a rooftop overlooking the piazza.',
        suitedFor: 'travellers who want to stay right in front of the Trevi Fountain',
        description: 'Hotel Fontana faces the Trevi Fountain directly, occupying a converted medieval monastery. Few hotels in Rome offer such an iconic outlook, with the Pantheon and Quirinal Palace both a short walk away.',
    },
    {
        slugPart: 'hotel-pantheon', name: 'Hotel Pantheon', area: 'Pantheon (Via dei Pastini)', type: 'Historic 4-star',
        nearestMetro: 'Barberini & Spagna (Line A)',
        walk: [{ place: 'Pantheon', mins: '2 min' }, { place: 'Trevi Fountain', mins: '6 min' }, { place: 'Piazza Navona', mins: '6 min' }],
        attractions: ['Pantheon', 'Piazza Navona', 'Trevi Fountain', 'Largo di Torre Argentina'],
        dining: 'A traditional hotel moments from the Pantheon, surrounded by the cafés and gelaterias of the historic centre.',
        suitedFor: 'travellers who want to be on the doorstep of the Pantheon and Piazza Navona',
        description: 'Hotel Pantheon sits on Via dei Pastini, a two-minute stroll from the Pantheon itself. Its position in the pedestrian heart of old Rome puts Piazza Navona, the Trevi Fountain and countless restaurants within easy walking distance.',
    },
    {
        slugPart: 'hotel-campo-de-fiori', name: 'Hotel Campo de\' Fiori', area: 'Campo de\' Fiori', type: 'Boutique 4-star',
        nearestMetro: 'No adjacent metro — central, transfer recommended',
        walk: [{ place: 'Campo de\' Fiori', mins: '1 min' }, { place: 'Piazza Navona', mins: '6 min' }, { place: 'Pantheon', mins: '8 min' }],
        attractions: ['Campo de\' Fiori', 'Piazza Navona', 'Pantheon', 'Jewish Ghetto'],
        dining: 'Beside the lively Campo de\' Fiori market square, with a rooftop terrace amid the area\'s famous nightlife and trattorias.',
        suitedFor: 'travellers who want to be in the middle of Campo de\' Fiori\'s market and nightlife',
        description: 'Hotel Campo de\' Fiori sits right by the market square of the same name, one of Rome\'s most atmospheric piazzas. Its rooftop terrace overlooks the centro storico, with Piazza Navona and the Pantheon a short walk away.',
    },
    {
        slugPart: 'hotel-santa-maria', name: 'Hotel Santa Maria', area: 'Trastevere', type: 'Boutique 3-star',
        nearestMetro: 'No adjacent metro — Trastevere, transfer recommended',
        walk: [{ place: 'Santa Maria in Trastevere', mins: '3 min' }, { place: 'Ponte Sisto', mins: '5 min' }, { place: 'Tiber Island', mins: '8 min' }],
        attractions: ['Trastevere', 'Santa Maria in Trastevere', 'Tiber Island', 'Janiculum Hill'],
        dining: 'A tranquil low-rise hotel built around a courtyard of orange trees, in the heart of Trastevere\'s restaurant district.',
        suitedFor: 'travellers who want the bohemian charm and dining of Trastevere',
        description: 'Hotel Santa Maria occupies a peaceful former cloister in the middle of Trastevere, Rome\'s most characterful neighbourhood. Its orange-tree courtyard offers calm steps from the area\'s celebrated nightlife and trattorias.',
    },
    {
        slugPart: 'hotel-ponte-sisto', name: 'Hotel Ponte Sisto', area: 'Via dei Pettinari (centro storico / Trastevere edge)', type: 'Upscale 4-star',
        nearestMetro: 'No adjacent metro — central, transfer recommended',
        walk: [{ place: 'Campo de\' Fiori', mins: '5 min' }, { place: 'Ponte Sisto & Trastevere', mins: '3 min' }, { place: 'Piazza Navona', mins: '10 min' }],
        attractions: ['Campo de\' Fiori', 'Trastevere', 'Jewish Ghetto', 'Piazza Navona'],
        dining: 'Known for its large internal garden courtyard on Via dei Pettinari, between Campo de\' Fiori and the river crossing to Trastevere.',
        suitedFor: 'travellers wanting a quiet garden hotel between the centro storico and Trastevere',
        description: 'Hotel Ponte Sisto sits on Via dei Pettinari, beside the bridge of the same name that crosses to Trastevere. Its courtyard garden is a rare green retreat, with Campo de\' Fiori and the Jewish Ghetto close by.',
    },
    {
        slugPart: 'hotel-capo-d-africa', name: 'Hotel Capo d\'Africa', area: 'Celio (near the Colosseum)', type: 'Upscale 4-star',
        nearestMetro: 'Colosseo (Line B)',
        walk: [{ place: 'Colosseum', mins: '5 min' }, { place: 'Roman Forum', mins: '10 min' }, { place: 'Basilica of San Clemente', mins: '4 min' }],
        attractions: ['Colosseum', 'Celio hill', 'San Clemente', 'Roman Forum'],
        dining: 'On the quiet Celio hill beside the Colosseum, with a rooftop terrace and a peaceful residential setting near ancient Rome.',
        suitedFor: 'travellers who want quiet elegance a few minutes\' walk from the Colosseum',
        description: 'Hotel Capo d\'Africa stands on the leafy Celio hill, just behind the Colosseum. It offers a calmer setting than the busy forum side, with the Colosseum and the basilica of San Clemente within a short walk.',
    },
    {
        slugPart: 'nh-collection-roma-palazzo-cinquecento', name: 'NH Collection Roma Palazzo Cinquecento', area: 'Piazza dei Cinquecento (Termini)', type: 'Upscale 4-star',
        nearestMetro: 'Termini (Lines A & B)',
        walk: [{ place: 'Termini Station', mins: '2 min' }, { place: 'Baths of Diocletian', mins: '4 min' }, { place: 'Piazza della Repubblica', mins: '6 min' }],
        attractions: ['Baths of Diocletian', 'Piazza della Repubblica', 'Santa Maria Maggiore', 'Termini hub'],
        dining: 'Right beside Termini station with a quiet garden courtyard, surrounded by the transport and dining hub of central Rome.',
        suitedFor: 'travellers who prize maximum transport convenience beside Termini',
        description: 'The NH Collection Roma Palazzo Cinquecento sits directly on Piazza dei Cinquecento, beside Termini station. It is one of the most transport-convenient hotels in Rome, with a surprising garden courtyard and the Baths of Diocletian next door.',
    },
    {
        slugPart: 'radisson-blu-es-hotel-rome', name: 'Radisson Blu es. Hotel Rome', area: 'Esquilino (Via Filippo Turati)', type: 'Design 4-star',
        nearestMetro: 'Vittorio Emanuele & Termini (Lines A & B)',
        walk: [{ place: 'Termini Station', mins: '6 min' }, { place: 'Santa Maria Maggiore', mins: '8 min' }, { place: 'Piazza Vittorio', mins: '5 min' }],
        attractions: ['Santa Maria Maggiore', 'Termini hub', 'Piazza Vittorio', 'Domus Aurea'],
        dining: 'A modern design hotel near Termini with a rooftop pool, in the multicultural Esquilino district.',
        suitedFor: 'design-minded travellers who want a rooftop pool near Termini',
        description: 'The Radisson Blu es. Hotel Rome is a striking design hotel on Via Filippo Turati in the Esquilino district, a short walk from Termini station. Its glass-walled rooftop pool is a highlight above the busy neighbourhood.',
    },
    {
        slugPart: 'le-meridien-visconti-rome', name: 'Le Méridien Visconti Rome', area: 'Prati (Via Federico Cesi)', type: 'Upscale 4-star',
        nearestMetro: 'Lepanto (Line A)',
        walk: [{ place: 'Castel Sant\'Angelo', mins: '8 min' }, { place: 'Vatican / St Peter\'s', mins: '15 min' }, { place: 'Piazza del Popolo', mins: '12 min' }],
        attractions: ['Vatican & St Peter\'s', 'Castel Sant\'Angelo', 'Prati shopping', 'Piazza del Popolo'],
        dining: 'A contemporary hotel in the smart Prati district with a rooftop bar, near the boutiques of Via Cola di Rienzo.',
        suitedFor: 'travellers who want a stylish base near the Vatican in upscale Prati',
        description: 'Le Méridien Visconti Rome sits in Prati, the elegant district between the Vatican and the river. Its rooftop bar overlooks the neighbourhood, and St Peter\'s, Castel Sant\'Angelo and the Prati shopping streets are all within easy reach.',
    },
    {
        slugPart: 'hotel-barberini', name: 'Hotel Barberini', area: 'Piazza Barberini', type: 'Upscale 4-star',
        nearestMetro: 'Barberini (Line A)',
        walk: [{ place: 'Trevi Fountain', mins: '5 min' }, { place: 'Via Veneto', mins: '3 min' }, { place: 'Spanish Steps', mins: '10 min' }],
        attractions: ['Trevi Fountain', 'Via Veneto', 'Barberini Palace', 'Spanish Steps'],
        dining: 'Beside Piazza Barberini and its Bernini fountain, with a rooftop terrace close to the Trevi Fountain and Via Veneto.',
        suitedFor: 'travellers who want a central base by Piazza Barberini near the Trevi Fountain',
        description: 'Hotel Barberini sits just off Piazza Barberini, by the Barberini metro and the Bernini-designed Triton Fountain. It is a short walk from both the Trevi Fountain and Via Veneto, with a rooftop overlooking the area.',
    },
    {
        slugPart: 'mercure-roma-centro-colosseo', name: 'Mercure Roma Centro Colosseo', area: 'Celio (Via Labicana)', type: 'Mid-range 4-star',
        nearestMetro: 'Colosseo & Manzoni (Lines B & A)',
        walk: [{ place: 'Colosseum', mins: '8 min' }, { place: 'San Clemente', mins: '3 min' }, { place: 'San Giovanni in Laterano', mins: '10 min' }],
        attractions: ['Colosseum', 'San Clemente', 'San Giovanni in Laterano', 'Monti'],
        dining: 'A reliable mid-range hotel on Via Labicana near the Colosseum, with a rooftop terrace and good transport links.',
        suitedFor: 'value-focused travellers who want to be walkable to the Colosseum',
        description: 'The Mercure Roma Centro Colosseo sits on Via Labicana in the Celio district, within walking distance of the Colosseum. Its rooftop terrace and proximity to two metro lines make it a practical base for sightseeing.',
    },
];

export type TransferDirection = 'airport-to-hotel' | 'hotel-to-airport';

// Arrival direction: airport → hotel
export function transferSlug(airport: RomeAirport, hotel: RomeHotel): string {
    return `${airport.slugPart}-to-${hotel.slugPart}-transfer`;
}

// Departure direction: hotel → airport
export function reverseTransferSlug(hotel: RomeHotel, airport: RomeAirport): string {
    return `${hotel.slugPart}-to-${airport.slugPart}-transfer`;
}

export interface TransferCombo {
    airport: RomeAirport;
    hotel: RomeHotel;
    slug: string;
    direction: TransferDirection;
}

export function getAllAirportHotelTransfers(): TransferCombo[] {
    const out: TransferCombo[] = [];
    for (const airport of romeAirports) {
        for (const hotel of romeHotels) {
            out.push({ airport, hotel, slug: transferSlug(airport, hotel), direction: 'airport-to-hotel' });
            out.push({ airport, hotel, slug: reverseTransferSlug(hotel, airport), direction: 'hotel-to-airport' });
        }
    }
    return out;
}

export function findAirportHotelTransfer(slug: string): TransferCombo | null {
    return getAllAirportHotelTransfers().find((t) => t.slug === slug) || null;
}
