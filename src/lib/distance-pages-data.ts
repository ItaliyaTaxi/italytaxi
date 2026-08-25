// Data for informational "X to Y Distance" pages. These target distance/
// travel-time search intent ("how far is X from Y") and are deliberately
// distinct in content from the commercial /route/[slug] taxi pages they link
// to — see DistancePageContent.tsx. Root-level slugs (…-distance), rendered
// by the root [slug] catch-all alongside the other combinatorial clusters.
//
// Every number here has been cross-checked against at least two independent
// sources (road-distance calculators, rail timetables/booking sites). Where
// sources disagreed by a small margin, the page states a range rather than a
// single invented figure, and single-source claims that couldn't be
// corroborated (e.g. specific roadworks) were left out entirely.

export interface DistanceStop {
    name: string;
    note: string;
}

export interface DistanceFaq {
    q: string;
    a: string;
}

export interface DistancePage {
    slug: string; // e.g. 'florence-to-pisa-distance'
    origin: string;
    dest: string;
    seoTitle: string;
    metaDescription: string;
    h1: string;
    heroImage: string;

    // Quick-reference table
    straightLineDistance: string; // "as the crow flies"
    straightLineNote: string;
    drivingDistance: string; // city-centre to city-centre, primary route
    drivingDuration: string;
    trainDuration: string;

    intro: string[];

    // City-centre vs door-to-door explainer
    centreVsDoorToDoor: string[];

    byCar: string[];
    byCarRoad: string;
    byCarAlt?: string;

    byTrain: string[];

    byPrivateTransfer: string[];
    routePageSlug: string; // slug in the /route/[slug] cluster
    routePageLabel: string;
    secondaryRoutePageSlug?: string; // for symmetric pairs with route pages in both directions
    secondaryRoutePageLabel?: string;
    itSlug?: string; // slug of this page's Italian twin at /it/distance/{itSlug}, if one exists — drives hreflang, mirrors RouteData.itSlug

    popularStops: DistanceStop[];

    travelTimeFactors: string[];

    bestWay: string[];

    faqs: DistanceFaq[];
}

export const distancePages: DistancePage[] = [
    {
        slug: 'florence-to-pisa-distance',
        itSlug: 'distanza-da-firenze-a-pisa',
        origin: 'Florence',
        dest: 'Pisa',
        seoTitle: 'Florence to Pisa Distance – Km, Miles & Travel Time',
        metaDescription: 'How far is Pisa from Florence? Straight-line, driving and train distances compared, with real travel times by car, train and private transfer.',
        h1: 'Florence to Pisa Distance',
        heroImage: '/images/hero.webp',

        straightLineDistance: 'approx. 67–69 km (about 42–43 miles)',
        straightLineNote: 'Straight-line ("as the crow flies") distance calculators put this at slightly different figures depending on the exact reference point used in each city — typically 67–69 km — since no road follows a perfectly straight line between the two.',
        drivingDistance: 'approx. 85 km (about 53 miles)',
        drivingDuration: '1 hour 5 minutes – 1 hour 20 minutes',
        trainDuration: 'approx. 50–65 minutes',

        intro: [
            "Florence and Pisa sit roughly 68 km apart as the crow flies, but the road distance between the two city centres is longer — around 85 km — because the route follows the Arno valley rather than a straight line. The figure that matters for planning a trip is the driving or train distance, not the straight-line one, so this page breaks down both.",
            "Below you'll find the distance by car, by train, and what that means for real journey times, plus how city-centre figures differ from a true door-to-door trip.",
        ],

        centreVsDoorToDoor: [
            "Most published distances — including the ~85 km driving figure above — are measured city centre to city centre (for example, from Piazza della Signoria in Florence to the Leaning Tower area of Pisa). That's a useful reference point, but it isn't the same as your actual door-to-door distance.",
            "If your hotel is outside the historic centre, or you're heading to Pisa Airport rather than central Pisa, your real distance and journey time will differ from the city-centre figure — sometimes by 15–20 minutes once you account for getting out of Florence's restricted traffic zones (ZTL) or the last stretch into your specific address in Pisa. A private transfer is booked door-to-door, so the quoted time already reflects your actual pickup and drop-off points rather than a generic city-centre estimate.",
        ],

        byCar: [
            "Driving from Florence to Pisa covers about 85 km and normally takes 1 hour 5 minutes to 1 hour 20 minutes, depending on traffic and time of day. The direct route follows the FI-PI-LI (the Firenze–Pisa–Livorno expressway, officially the Strada di Grande Comunicazione), a free dual-carriageway that runs west through the Arno valley.",
        ],
        byCarRoad: 'the FI-PI-LI expressway (Firenze–Pisa–Livorno)',
        byCarAlt: "A longer alternative runs via the A11 motorway through Lucca; it adds extra distance and toll costs compared with the direct FI-PI-LI route, so most drivers only take it when they specifically want to stop in Lucca along the way.",

        byTrain: [
            "The train is a direct, no-change option: Regionale Veloce services run between Firenze Santa Maria Novella and Pisa Centrale in roughly 50–65 minutes, with departures roughly every hour through the day. Journey time on its own doesn't tell the whole story, though — you still need to get to Santa Maria Novella station and, at the other end, from Pisa Centrale to your final destination (the historic centre is a 15–20 minute walk or short taxi/bus ride from the station, and Pisa Airport is a separate onward journey again).",
        ],

        byPrivateTransfer: [
            "A private transfer covers the same route door-to-door, so there's no walk to the station, no timetable to plan around, and no changing between train and taxi at the Pisa end. It's especially useful with luggage, for a flight connection at Pisa Airport, or when your Florence pickup point is outside the centre.",
            "For a detailed breakdown of pricing, vehicle options and booking, see our dedicated Florence to Pisa taxi transfer page.",
        ],
        routePageSlug: 'florence-to-pisa-taxi',
        routePageLabel: 'Florence to Pisa Taxi Transfer',

        popularStops: [
            { name: 'Empoli', note: 'A market town roughly midway along the FI-PI-LI route, known for its historic centre and glass-making heritage.' },
            { name: 'San Miniato', note: 'A hill town just off the main route between Florence and Pisa, known for white truffles and its panoramic old town.' },
            { name: 'Lucca', note: 'Not on the direct route, but reachable via the A11 alternative — a walled Renaissance city worth the detour for travellers with extra time.' },
        ],

        travelTimeFactors: [
            'Traffic around Florence, especially leaving the city during weekday morning and evening peaks.',
            'Your exact start and end points — a city-centre hotel versus an address outside the ZTL, or Pisa city versus Pisa Airport.',
            'Weather and general road conditions, which can add time on any given day.',
            'For train travel, the time needed to reach the station and, on arrival, to reach your final destination from Pisa Centrale.',
        ],

        bestWay: [
            "There's no single \"fastest\" answer for everyone — it depends on where you're starting and ending, and how much luggage or how many people are travelling. The train is quick point-to-point but adds station-to-door time at both ends. Driving yourself gives flexibility but means dealing with Florence traffic and parking. A private transfer is typically the most predictable option for door-to-door timing, since it's quoted for your actual addresses rather than the city centre.",
        ],

        faqs: [
            { q: 'How far is Florence from Pisa?', a: "It's about 68 km in a straight line, but the driving distance between the city centres is around 85 km, taking roughly 1 hour 5 minutes to 1 hour 20 minutes by car depending on traffic." },
            { q: 'Why is the driving distance longer than the straight-line distance?', a: "Straight-line distance ignores roads entirely — it's a direct measurement between two points. The actual road, the FI-PI-LI expressway, follows the Arno valley rather than a straight line, which adds roughly 17 km to the real driving distance." },
            { q: 'What is the difference between city-centre distance and door-to-door distance?', a: "Published distances like the 85 km figure are measured between the two city centres. Your actual door-to-door distance depends on your specific hotel or pickup address in Florence and your destination in Pisa (city centre or airport), and can add extra time at either end." },
            { q: 'What is the fastest way to get from Florence to Pisa?', a: "It depends on your starting and ending points. The direct train takes about 50–65 minutes, but that doesn't include getting to Santa Maria Novella station or from Pisa Centrale to your final destination. A private transfer or car covers the door-to-door distance directly, which can be faster overall once station access time is factored in — especially with luggage or when your accommodation isn't near the station." },
            { q: 'Can I visit Pisa as a day trip from Florence?', a: 'Yes — with a journey time of roughly an hour each way by train or private transfer, Pisa is a popular half-day or full-day trip from Florence, with enough time to see the Leaning Tower, Piazza dei Miracoli and the historic centre.' },
            { q: 'Is Pisa Airport the same distance as Pisa city centre?', a: "No. Pisa Airport (Galileo Galilei) is on the southern edge of Pisa, a short additional ride from the city centre and train station. If you're heading to a flight rather than central Pisa, factor in this extra last-mile distance." },
        ],
    },
    {
        slug: 'rome-to-florence-distance',
        itSlug: 'distanza-da-roma-a-firenze',
        origin: 'Rome',
        dest: 'Florence',
        seoTitle: 'Rome to Florence Distance – Km, Miles & Travel Time',
        metaDescription: 'How far is Florence from Rome? Straight-line, driving and train distances compared, with real travel times by car, train and private transfer.',
        h1: 'Rome to Florence Distance',
        heroImage: '/images/hero.webp',

        straightLineDistance: 'approx. 231 km (about 144 miles)',
        straightLineNote: 'Straight-line distance calculators put this at approximately 231 km — the real road distance is considerably longer because the route climbs and descends through central Italy\'s hill country rather than running flat.',
        drivingDistance: 'approx. 275–280 km (about 171–174 miles)',
        drivingDuration: '3 hours – 3 hours 15 minutes',
        trainDuration: 'approx. 1 hour 40 minutes',

        intro: [
            "Rome and Florence are about 231 km apart in a straight line, but the driving distance between the two city centres is around 275–280 km, since the A1 motorway follows river valleys and passes through the hills of Umbria and southern Tuscany rather than a direct line.",
            "This distance is the same whichever direction you're travelling — Rome to Florence or Florence to Rome — so the figures below apply equally to both.",
        ],

        centreVsDoorToDoor: [
            "The distances above are measured city centre to city centre (for example, between Rome's historic centre and Florence's Duomo). Your actual door-to-door distance will differ depending on your specific hotel or pickup address, and whether you're starting from a city centre or an airport such as Rome Fiumicino.",
            "A private transfer is quoted for your real addresses, so it reflects your actual journey rather than a generic city-centre estimate.",
        ],

        byCar: [
            "Driving between Rome and Florence covers roughly 275–280 km and takes about 3 hours to 3 hours 15 minutes via the A1 Autostrada del Sole, Italy's main north–south motorway. Traffic around both cities, especially at rush hour, can add extra time.",
        ],
        byCarRoad: 'the A1 Autostrada del Sole',
        byCarAlt: "Some drivers break the journey with a stop in Orvieto or the Chianti wine region, which adds time but not significant extra distance since both sit close to the direct route.",

        byTrain: [
            "This is one of Italy's flagship high-speed rail routes: Frecciarossa trains connect Roma Termini and Firenze Santa Maria Novella in about 1 hour 40 minutes, with frequent departures throughout the day. As with any train journey, that figure is station to station — you still need to get to Termini or Santa Maria Novella and, at the other end, on to your final address.",
        ],

        byPrivateTransfer: [
            "A private transfer covers the same route door-to-door, which is particularly useful with luggage, for a group, or when your pickup and drop-off points aren't near either station.",
            "For pricing, vehicle options and booking, see our dedicated Rome to Florence taxi transfer page.",
        ],
        routePageSlug: 'rome-to-florence-taxi',
        routePageLabel: 'Rome to Florence Taxi Transfer',
        secondaryRoutePageSlug: 'florence-to-rome-taxi',
        secondaryRoutePageLabel: 'Florence to Rome Taxi Transfer',

        popularStops: [
            { name: 'Orvieto', note: 'A dramatic Umbrian hilltop town right beside the A1, known for its Gothic cathedral — a popular stop for those driving between the two cities.' },
        ],

        travelTimeFactors: [
            'Traffic around Rome and Florence, especially during weekday peaks.',
            'Your exact start and end points — city centre versus an airport such as Rome Fiumicino.',
            'For train travel, the time needed to reach Termini or Santa Maria Novella station at each end.',
            'Whether you add a stop, such as Orvieto, along the way.',
        ],

        bestWay: [
            "The high-speed train is genuinely fast city centre to city centre, and for a single traveller without much luggage it's hard to beat. For groups, families, heavy luggage, or when either end of your trip is an airport or an address away from the stations, a private transfer or driving gives a more predictable door-to-door time, since it isn't limited to the two stations.",
        ],

        faqs: [
            { q: 'How far is Florence from Rome?', a: "About 231 km in a straight line, or around 275–280 km by road, taking roughly 3 hours to 3 hours 15 minutes to drive." },
            { q: 'How far is Rome from Florence?', a: "The same distance in reverse — approximately 275–280 km by road, or 231 km as the crow flies. Distance doesn't change with direction." },
            { q: 'How long does the train take between Rome and Florence?', a: "Frecciarossa high-speed trains cover the route in about 1 hour 40 minutes, one of Italy's fastest and most frequent intercity connections." },
            { q: 'Is it faster to drive or take the train from Rome to Florence?', a: "The train is faster station to station. But once you add getting to and from Termini and Santa Maria Novella, a private transfer covering your actual addresses can be just as quick overall, particularly with luggage or for a group." },
            { q: 'Can I stop in Tuscany or Umbria on the way?', a: "Yes — Orvieto sits right on the A1 route and is a popular stop, and the Chianti wine region is a short detour if you're travelling by car or private transfer." },
            { q: 'Is the distance the same from Rome Fiumicino Airport?', a: "No — Fiumicino Airport is southwest of central Rome, so the distance and journey time to Florence from the airport is somewhat longer than from Rome's city centre." },
        ],
    },
    {
        slug: 'milan-to-lake-como-distance',
        itSlug: 'distanza-da-milano-al-lago-di-como',
        origin: 'Milan',
        dest: 'Lake Como',
        seoTitle: 'Milan to Lake Como Distance – Km, Miles & Travel Time',
        metaDescription: 'How far is Lake Como from Milan? Straight-line, driving and train distances compared, with real travel times by car, train and private transfer.',
        h1: 'Milan to Lake Como Distance',
        heroImage: '/images/Lake Como.webp',

        straightLineDistance: 'approx. 39–40 km (about 24–25 miles) to Como',
        straightLineNote: '"Lake Como" isn\'t a single point — Como town, at the southern tip of the lake, is the closest reference (about 39–40 km in a straight line); towns further up the lake such as Bellagio or Varenna are correspondingly further.',
        drivingDistance: 'approx. 50–55 km (about 31–34 miles) to Como',
        drivingDuration: '45 minutes – 1 hour',
        trainDuration: 'approx. 40 minutes to Como',

        intro: [
            "Milan and Como, at the southern end of Lake Como, sit about 39–40 km apart in a straight line, with a road distance of roughly 50–55 km taking 45 minutes to an hour by car. That makes Como one of the closest and easiest lakes to reach from Milan.",
            "\"Lake Como\" covers many towns — Como, Cernobbio, Bellagio, Varenna and others — so your exact distance depends on which one you're heading to. The figures here use Como town as the reference point, the closest and most common.",
        ],

        centreVsDoorToDoor: [
            "The distances above are measured to Como's city centre. If your destination is further up the lake — Bellagio or Varenna, for example — expect a longer drive, typically another 30–60 minutes beyond Como depending on the town and the lakeside road conditions.",
            "A private transfer is quoted for your specific hotel or address, whichever town on the lake you're heading to, rather than a generic city-centre figure.",
        ],

        byCar: [
            "Driving from Milan to Como covers about 50–55 km and takes roughly 45 minutes to an hour via the A9 motorway, depending on traffic around Milan.",
        ],
        byCarRoad: 'the A9 motorway',

        byTrain: [
            "Trenord runs direct trains from Milano Centrale (and other Milan stations) to Como San Giovanni in around 40 minutes, with frequent departures — one of the more convenient rail connections from Milan. Reaching towns further up the lake by public transport typically means a further bus or ferry connection from Como.",
        ],

        byPrivateTransfer: [
            "A private transfer takes you directly to your lakeside hotel or address — in Como or further up the lake — without a change onto a bus or ferry, which is especially convenient with luggage.",
            "For pricing, vehicle options and booking, see our dedicated Milan to Lake Como taxi transfer page.",
        ],
        routePageSlug: 'milan-to-lake-como-taxi',
        routePageLabel: 'Milan to Lake Como Taxi Transfer',

        popularStops: [],

        travelTimeFactors: [
            'Traffic leaving Milan, especially during weekday peaks.',
            'Which town on the lake you\'re actually heading to — Como itself is closest, Bellagio and Varenna are further.',
            'For train travel, any onward bus or ferry connection needed beyond Como.',
        ],

        bestWay: [
            "For a straightforward trip to Como town itself, the direct train is quick and simple. For Bellagio, Varenna or other lakeside towns, or if you have luggage or are travelling as a group, a private transfer that goes directly to your final address is usually more convenient than train-plus-ferry connections.",
        ],

        faqs: [
            { q: 'How far is Lake Como from Milan?', a: "Como town, at the southern tip of the lake, is about 39–40 km from Milan in a straight line, or roughly 50–55 km by road — around 45 minutes to an hour's drive." },
            { q: 'Is Bellagio the same distance from Milan as Como?', a: "No — Bellagio is further up the lake, typically another 30–60 minutes beyond Como town by road, depending on traffic and the lakeside route taken." },
            { q: 'How long is the train from Milan to Lake Como?', a: "Direct Trenord trains reach Como San Giovanni in about 40 minutes from Milan, with frequent departures throughout the day." },
            { q: 'Can I reach Bellagio or Varenna by train from Milan?', a: "Varenna has its own mainline station, reachable from Milan in around an hour. Bellagio has no train station, so it needs a ferry or bus connection from Como or Varenna." },
            { q: 'Is Milan Malpensa Airport closer to Lake Como than central Milan?', a: "Yes — Malpensa sits to the northwest of Milan, closer to the lake, so transfers from the airport to Como or Lake Como towns are often quicker than from the city centre." },
        ],
    },
    {
        slug: 'rome-to-naples-distance',
        itSlug: 'distanza-da-roma-a-napoli',
        origin: 'Rome',
        dest: 'Naples',
        seoTitle: 'Rome to Naples Distance – Km, Miles & Travel Time',
        metaDescription: 'How far is Naples from Rome? Straight-line, driving and train distances compared, with real travel times by car, train and private transfer.',
        h1: 'Rome to Naples Distance',
        heroImage: '/images/naples.webp',

        straightLineDistance: 'approx. 190–199 km (about 118–124 miles)',
        straightLineNote: 'Straight-line calculators give slightly different figures (roughly 190–199 km) depending on the exact reference point used in each city.',
        drivingDistance: 'approx. 226–230 km (about 140–143 miles)',
        drivingDuration: '2 hours 30 minutes – 3 hours',
        trainDuration: 'approx. 1 hour 10 minutes',

        intro: [
            "Rome and Naples are about 190–199 km apart in a straight line, with a driving distance of roughly 226–230 km via the A1 motorway, typically taking 2.5 to 3 hours depending on traffic.",
            "The route is also one of Italy's busiest and fastest rail corridors, so the train option is worth comparing carefully against driving or a private transfer.",
        ],

        centreVsDoorToDoor: [
            "The figures above are measured city centre to city centre. Your real distance will vary depending on your exact pickup point (including whether you're starting from Rome Fiumicino Airport, which is southwest of the city centre) and your destination in Naples — the city, the airport, or a point further along the coast.",
            "A private transfer is priced for your actual addresses, so the quoted journey time already reflects your real start and end points.",
        ],

        byCar: [
            "The drive from Rome to Naples covers about 226–230 km via the A1 Autostrada del Sole and typically takes 2 hours 30 minutes to 3 hours, with traffic around both cities being the main variable.",
        ],
        byCarRoad: 'the A1 Autostrada del Sole',

        byTrain: [
            "Frecciarossa high-speed trains connect Roma Termini and Napoli Centrale in about 1 hour 10 minutes, with departures roughly every 15–30 minutes — one of the busiest and most frequent high-speed routes in Italy. That is station-to-station time; getting to Termini and on from Napoli Centrale to your final destination adds to the total.",
        ],

        byPrivateTransfer: [
            "A private transfer covers the same route door-to-door, which is especially useful if you're continuing on to Pompeii, Sorrento or the Amalfi Coast rather than stopping in central Naples, since it avoids an extra change of transport.",
            "For pricing, vehicle options and booking, see our dedicated Rome to Naples taxi transfer page.",
        ],
        routePageSlug: 'rome-to-naples-taxi',
        routePageLabel: 'Rome to Naples Taxi Transfer',

        popularStops: [
            { name: 'Montecassino', note: 'Home to the historic hilltop abbey, roughly midway along the A1 route between Rome and Naples.' },
        ],

        travelTimeFactors: [
            'Traffic around Rome and Naples, particularly at weekday peaks.',
            'Whether your start or end point is an airport (Rome Fiumicino or Naples Capodichino) rather than a city centre.',
            'For train travel, the time needed to reach Termini and to continue on from Napoli Centrale.',
        ],

        bestWay: [
            "The high-speed train is very fast station to station and runs frequently, making it a strong option for a straightforward city-to-city trip. If you're continuing beyond Naples itself — to Pompeii, Sorrento or the Amalfi Coast — or travelling with a group or luggage, a private transfer that goes directly to your final destination usually saves the extra connection.",
        ],

        faqs: [
            { q: 'How far is Naples from Rome?', a: "About 190–199 km in a straight line, or roughly 226–230 km by road — a drive of 2.5 to 3 hours." },
            { q: 'How long does the train take from Rome to Naples?', a: "Frecciarossa high-speed trains take about 1 hour 10 minutes, with very frequent departures throughout the day." },
            { q: 'Is the train faster than driving from Rome to Naples?', a: "Station to station, yes, significantly. But if your final destination is beyond central Naples — Pompeii, Sorrento or the Amalfi Coast — a private transfer avoids an extra connection and can work out just as convenient." },
            { q: 'Can I stop somewhere between Rome and Naples?', a: "Montecassino Abbey, roughly midway on the A1, is a popular stop for those travelling by car or private transfer." },
            { q: 'Is the distance different from Rome Fiumicino Airport?', a: "Yes — Fiumicino is southwest of central Rome, so journeys starting there to Naples are somewhat different in distance and time than from the city centre." },
        ],
    },
    {
        slug: 'milan-to-venice-distance',
        itSlug: 'distanza-da-milano-a-venezia',
        origin: 'Milan',
        dest: 'Venice',
        seoTitle: 'Milan to Venice Distance – Km, Miles & Travel Time',
        metaDescription: 'How far is Venice from Milan? Straight-line, driving and train distances compared, with real travel times by car, train and private transfer.',
        h1: 'Milan to Venice Distance',
        heroImage: '/images/venice.webp',

        straightLineDistance: 'approx. 246 km (about 153 miles)',
        straightLineNote: 'The straight-line air distance is approximately 246 km; sources vary slightly depending on the exact reference points used.',
        drivingDistance: 'approx. 265–280 km (about 165–174 miles)',
        drivingDuration: '2 hours 40 minutes – 3 hours 15 minutes',
        trainDuration: 'approx. 2 hours 30 minutes – 2 hours 40 minutes',

        intro: [
            "Milan and Venice are about 246 km apart in a straight line, with a driving distance of roughly 265–280 km along the A4 motorway. Under normal traffic that's about 2 hours 40 minutes to 3 hours 15 minutes, though the A4 can slow considerably during peak holiday periods or congestion around Brescia and Verona.",
            "Venice itself is only reachable by car as far as Piazzale Roma or the Tronchetto car parks on the mainland edge of the lagoon — the historic centre is pedestrian and boat access only, which matters for door-to-door planning.",
        ],

        centreVsDoorToDoor: [
            "The figures above cover Milan city centre to Venice's mainland vehicle access point (Piazzale Roma). From there, reaching a specific hotel in the historic centre means a further walk or water-taxi/vaporetto trip — no vehicle, private or otherwise, can drive into central Venice.",
            "Your real journey time also depends on your Milan starting point — city centre or one of the three Milan airports (Malpensa, Linate or Bergamo) — which changes the distance to Venice accordingly.",
        ],

        byCar: [
            "Driving from Milan to Venice covers about 265–280 km via the A4 motorway, passing Bergamo, Brescia, Verona and Vicenza. Under light traffic the drive takes around 2 hours 40 minutes; allow closer to 3 hours 15 minutes or more at busier times.",
        ],
        byCarRoad: 'the A4 motorway',

        byTrain: [
            "High-speed trains connect Milano Centrale and Venezia Santa Lucia (in the historic centre) in about 2 hours 30 to 2 hours 40 minutes, with frequent daily departures. Because the Santa Lucia train station sits right at the edge of the historic centre, the train is often the most direct way to reach central Venice itself.",
        ],

        byPrivateTransfer: [
            "A private transfer takes you door-to-door from Milan to Venice's mainland (Piazzale Roma or your hotel if it's on the mainland/Mestre side), which is ideal for luggage or a group, though reaching a hotel inside the historic centre still requires a final boat or walking leg.",
            "For pricing, vehicle options and booking, see our dedicated Milan to Venice taxi transfer page.",
        ],
        routePageSlug: 'milan-to-venice-taxi',
        routePageLabel: 'Milan to Venice Taxi Transfer',

        popularStops: [
            { name: 'Verona', note: 'Directly on the A4 route, roughly two-thirds of the way to Venice — a popular stop for its Roman arena and historic centre.' },
            { name: 'Vicenza', note: 'Also on the A4 corridor between Verona and Venice, known for its Palladian architecture.' },
        ],

        travelTimeFactors: [
            'Traffic on the A4, especially around Brescia and Verona and during peak holiday travel.',
            'Whether you\'re starting from Milan city centre or one of its three airports.',
            'That central Venice itself is only reachable by boat or on foot from Piazzale Roma, regardless of how you arrive on the mainland.',
        ],

        bestWay: [
            "For reaching Venice's historic centre specifically, the train is usually the most direct option, since Santa Lucia station sits right at its edge. For groups, heavy luggage, or a start point away from Milano Centrale, a private transfer to the mainland (with a final short boat or walking leg into the centre) is often more comfortable.",
        ],

        faqs: [
            { q: 'How far is Venice from Milan?', a: "About 246 km in a straight line, or roughly 265–280 km by road, with a drive of around 2 hours 40 minutes to 3 hours 15 minutes depending on traffic." },
            { q: 'How long is the train from Milan to Venice?', a: "High-speed trains take about 2 hours 30 to 2 hours 40 minutes between Milano Centrale and Venezia Santa Lucia, right in the historic centre." },
            { q: 'Can I drive into central Venice?', a: "No — the historic centre has no road access. Cars can only reach Piazzale Roma or the Tronchetto car parks on the mainland edge; from there it's on foot or by boat." },
            { q: 'Is the train better than driving to Venice?', a: "For reaching the historic centre itself, yes, since the train station sits right at its edge. Driving or a private transfer is more practical if you're heading to the Venice mainland (Mestre) or continuing elsewhere." },
            { q: 'Which Milan airport is closest to Venice?', a: "Distance-wise there's little difference between Milan's airports for a Venice trip; Linate is closest to the city centre, while Malpensa and Bergamo are further out, which can add to the overall journey depending on where you start." },
        ],
    },
    {
        slug: 'naples-to-amalfi-coast-distance',
        itSlug: 'distanza-da-napoli-alla-costiera-amalfitana',
        origin: 'Naples',
        dest: 'Amalfi Coast',
        seoTitle: 'Naples to Amalfi Coast Distance – Km & Travel Time',
        metaDescription: 'How far is the Amalfi Coast from Naples? Straight-line and driving distance to Amalfi compared, with real travel times by car, train/bus and private transfer.',
        h1: 'Naples to Amalfi Coast Distance',
        heroImage: '/images/almafi.webp',

        straightLineDistance: 'approx. 37–38 km (about 23 miles) to Amalfi town',
        straightLineNote: '"Amalfi Coast" covers many towns; Amalfi town itself is used here as the reference point. The gap between the ~38 km straight-line figure and the longer driving distance below is unusually large for this route, because the coast road has to follow the mountainous coastline rather than cut across it.',
        drivingDistance: 'approx. 60–65 km (about 37–40 miles) to Amalfi town',
        drivingDuration: '1 hour 30 minutes – 2 hours',
        trainDuration: 'No direct train — nearest stations are Salerno or Sorrento, then bus or ferry',

        intro: [
            "Naples and Amalfi town sit only about 37–38 km apart as the crow flies, but the actual road distance is around 60–65 km, because the SS163 coast road has to trace every bay and headland along the cliffs rather than cutting directly across. That difference is much larger than on a typical inland route.",
            "\"Amalfi Coast\" spans several towns — Positano, Amalfi, Ravello and others — so your real distance and time will vary depending on which one you're heading to.",
        ],

        centreVsDoorToDoor: [
            "The figures above use Amalfi town as the reference point. Positano, closer to Sorrento, is reached via a different stretch of coast road and has its own distinct travel time; Ravello sits above Amalfi and adds a further climb.",
            "There is no direct train to any Amalfi Coast town — public transport means a train to Salerno or Sorrento followed by a SITA bus or a seasonal ferry, which adds real time beyond the driving figures above. A private transfer is the only door-to-door option that avoids this change entirely.",
        ],

        byCar: [
            "Driving from Naples to Amalfi covers about 60–65 km via Salerno and the SS163 coast road (or via Sorrento from the west), and takes roughly 1 hour 30 minutes to 2 hours under normal conditions. The SS163 is narrow and winding with sharp bends, so allow more time in the busy summer season when traffic on the coast road slows significantly.",
        ],
        byCarRoad: 'the SS163 Amalfitana coast road',

        byTrain: [
            "There is no direct train to the Amalfi Coast — the rail line doesn't reach the coast itself. The usual public-transport route is a train from Naples to Salerno, then a SITA bus along the coast road to Amalfi, Positano or Ravello (or, from the Sorrento side, the Circumvesuviana train followed by bus or a seasonal ferry). Each connection adds waiting and journey time on top of the driving figures above.",
        ],

        byPrivateTransfer: [
            "A private transfer is the only way to travel door-to-door without changing onto a bus, since it drives the coast road directly to your hotel — a real advantage given the lack of rail access and the awkward local bus connections.",
            "For pricing, vehicle options and booking, see our dedicated Naples to Amalfi Coast taxi transfer page.",
        ],
        routePageSlug: 'naples-to-amalfi-coast-taxi',
        routePageLabel: 'Naples to Amalfi Coast Taxi Transfer',

        popularStops: [
            { name: 'Vietri sul Mare', note: 'The gateway town where the SS163 coast road begins, just past Salerno.' },
        ],

        travelTimeFactors: [
            'Season — the SS163 coast road gets significantly busier from May to October.',
            'Which Amalfi Coast town you\'re actually heading to (Positano, Amalfi and Ravello each have a different distance and route).',
            'Traffic through Salerno or Sorrento at the start of the coast road.',
            'For public transport, waiting time for the connecting SITA bus or ferry.',
        ],

        bestWay: [
            "Given there's no direct train and the local bus connections take real, hard-to-predict time, a private transfer is usually the most straightforward way to reach a specific Amalfi Coast hotel directly, especially with luggage. Public transport (train plus SITA bus) is a workable budget option for those travelling light and with flexible time.",
        ],

        faqs: [
            { q: 'How far is the Amalfi Coast from Naples?', a: "Using Amalfi town as the reference point, it's about 37–38 km in a straight line, but the driving distance is roughly 60–65 km via the winding SS163 coast road, taking 1.5 to 2 hours." },
            { q: 'Why is the driving distance so much longer than the straight-line distance?', a: "The SS163 coast road has to follow the cliffs and bays of the Amalfi coastline rather than cutting across, which adds significantly more distance than on a typical inland route." },
            { q: 'Is there a direct train to the Amalfi Coast?', a: "No — there is no rail line along the Amalfi Coast. You would need to take a train to Salerno or Sorrento and then a SITA bus (or a seasonal ferry) to reach Amalfi, Positano or Ravello." },
            { q: 'Is Positano the same distance as Amalfi from Naples?', a: "No — Positano and Amalfi are reached via different stretches of coast road and are not the same distance from Naples; each town along the coast has its own travel time." },
            { q: 'What is the fastest way from Naples to the Amalfi Coast?', a: "A private transfer travelling directly by road is generally the most predictable door-to-door option, since it avoids the connection and waiting time involved in the train-plus-bus public transport route." },
        ],
    },
    {
        slug: 'rome-to-pompeii-distance',
        itSlug: 'distanza-da-roma-a-pompei',
        origin: 'Rome',
        dest: 'Pompeii',
        seoTitle: 'Rome to Pompeii Distance – Km, Miles & Travel Time',
        metaDescription: 'How far is Pompeii from Rome? Straight-line, driving and train distances compared, with real travel times by car, train and private transfer.',
        h1: 'Rome to Pompeii Distance',
        heroImage: '/images/naples.webp',

        straightLineDistance: 'approx. 210–211 km (about 130–131 miles)',
        straightLineNote: 'The straight-line air distance is approximately 210–211 km.',
        drivingDistance: 'approx. 240 km (about 149 miles)',
        drivingDuration: '2 hours 30 minutes – 3 hours',
        trainDuration: 'No direct train — approx. 1 hour 45 minutes – 2 hours 10 minutes via Naples with a connection',

        intro: [
            "Rome and Pompeii are about 210–211 km apart in a straight line, with a driving distance of roughly 240 km via the A1 motorway, typically taking 2.5 to 3 hours.",
            "There's no direct train to Pompeii from Rome, which makes the connection time an important part of comparing your options.",
        ],

        centreVsDoorToDoor: [
            "The figures above are measured to central Rome and the Pompei Scavi archaeological site. Starting from Rome Fiumicino Airport instead of the city centre changes the distance and time somewhat, since the airport sits southwest of central Rome.",
            "A private transfer takes you directly to the site entrance, avoiding the walk between Naples Centrale and the Circumvesuviana platforms that the train option requires.",
        ],

        byCar: [
            "Driving from Rome to Pompeii covers about 240 km via the A1 and A3 motorways and takes roughly 2 hours 30 minutes to 3 hours, depending on traffic around Rome and Naples.",
        ],
        byCarRoad: 'the A1 and A3 motorways',

        byTrain: [
            "There's no direct train from Rome to Pompeii. The usual route is a Frecciarossa high-speed train from Roma Termini to Napoli Centrale (about 1 hour 10 minutes), followed by a change onto the Circumvesuviana line to Pompei Scavi – Villa dei Misteri (around 35 minutes). Including the walk between platforms at Naples Centrale and waiting for the connecting train, the realistic total is around 1 hour 45 minutes to 2 hours 10 minutes door-to-station.",
        ],

        byPrivateTransfer: [
            "A private transfer covers the whole route in one ride with no change of train or station, arriving directly at the Pompeii entrance — useful for a day trip where you want to maximise time at the site rather than in transit.",
            "For pricing, vehicle options and booking, see our dedicated Rome to Pompeii taxi transfer page.",
        ],
        routePageSlug: 'rome-to-pompeii-taxi',
        routePageLabel: 'Rome to Pompeii Taxi Transfer',

        popularStops: [
            { name: 'Montecassino', note: 'The historic hilltop abbey, roughly midway along the A1 route between Rome and the Naples area.' },
        ],

        travelTimeFactors: [
            'Traffic around Rome and Naples, particularly at weekday peaks.',
            'For train travel, the connection time between the Frecciarossa arrival and the Circumvesuviana departure at Naples Centrale.',
            'Whether you\'re continuing on to Naples or Sorrento afterwards rather than returning directly to Rome.',
        ],

        bestWay: [
            "For a day trip where time at the site matters most, a private transfer avoids the station change and walking involved in the train route. The train can work well for budget-conscious, lighter-luggage travellers comfortable with one connection at Naples Centrale.",
        ],

        faqs: [
            { q: 'How far is Pompeii from Rome?', a: "About 210–211 km in a straight line, or roughly 240 km by road — a drive of 2.5 to 3 hours." },
            { q: 'Is there a direct train from Rome to Pompeii?', a: "No. You need to take a high-speed train from Roma Termini to Napoli Centrale (about 1 hour 10 minutes), then change to the Circumvesuviana line to Pompei Scavi (around 35 minutes)." },
            { q: 'How long does the whole trip take by train, including the connection?', a: "Realistically around 1 hour 45 minutes to 2 hours 10 minutes door-to-station, once you include the walk between platforms and waiting time for the Circumvesuviana at Naples Centrale." },
            { q: 'Can I do Rome to Pompeii as a day trip?', a: "Yes — it's a popular day trip, especially by private transfer, which can also wait while you tour the site and bring you straight back to Rome." },
            { q: 'What is the closest station to the Pompeii ruins?', a: "Pompei Scavi – Villa dei Misteri, on the Circumvesuviana line, sits right by the main entrance to the archaeological site." },
        ],
    },
    {
        slug: 'venice-to-verona-distance',
        itSlug: 'distanza-da-venezia-a-verona',
        origin: 'Venice',
        dest: 'Verona',
        seoTitle: 'Venice to Verona Distance – Km, Miles & Travel Time',
        metaDescription: 'How far is Verona from Venice? Straight-line, driving and train distances compared, with real travel times by car, train and private transfer.',
        h1: 'Venice to Verona Distance',
        heroImage: '/images/venice.webp',

        straightLineDistance: 'approx. 103–105 km (about 64–65 miles)',
        straightLineNote: 'The straight-line air distance is approximately 103–105 km depending on the exact reference points used.',
        drivingDistance: 'approx. 115–119 km (about 71–74 miles)',
        drivingDuration: '1 hour 15 minutes – 1 hour 30 minutes',
        trainDuration: 'approx. 55 minutes – 1 hour 15 minutes on faster services; up to 1 hour 50 minutes on regional trains',

        intro: [
            "Venice and Verona are about 103–105 km apart in a straight line, with a driving distance of roughly 115–119 km along the A4 motorway, typically taking 1 hour 15 to 1 hour 30 minutes.",
            "As with any Venice route, the starting point on the Venice side matters: journeys begin at Piazzale Roma (the mainland vehicle limit) or the Venice mainland/Mestre, not the floating historic centre itself.",
        ],

        centreVsDoorToDoor: [
            "The figures above are measured from Venice's mainland access point to central Verona. If your Venice hotel is in the historic centre (islands), add the time to get by boat or on foot to Piazzale Roma before any car journey can begin.",
            "In Verona, the historic centre is compact and mostly walkable from the drop-off point, so the extra door-to-door time there is generally small.",
        ],

        byCar: [
            "Driving from Venice (Piazzale Roma/Mestre) to Verona covers about 115–119 km via the A4 motorway and takes roughly 1 hour 15 to 1 hour 30 minutes under normal traffic.",
        ],
        byCarRoad: 'the A4 motorway',

        byTrain: [
            "Trains between Venezia Santa Lucia and Verona Porta Nuova run at least hourly, with faster services taking around 55 minutes to 1 hour 15 minutes and regional trains taking up to about 1 hour 50 minutes. Since Santa Lucia sits at the edge of Venice's historic centre, the train is often the most direct way to start this journey.",
        ],

        byPrivateTransfer: [
            "A private transfer collects you from your Venice mainland hotel or Piazzale Roma and takes you directly to your Verona address, which is convenient with luggage or for a group, and avoids checking train timetables.",
            "For pricing, vehicle options and booking, see our dedicated Venice to Verona taxi transfer page.",
        ],
        routePageSlug: 'venice-to-verona-taxi',
        routePageLabel: 'Venice to Verona Taxi Transfer',

        popularStops: [
            { name: 'Vicenza', note: 'Directly on the A4 route and rail line between Venice and Verona, known for its Palladian villas and architecture.' },
        ],

        travelTimeFactors: [
            'Traffic on the A4, particularly during peak periods.',
            'Whether your Venice starting point is on the mainland or requires a boat/walk from the historic centre first.',
            'Whether you take a faster or regional train service, which affects journey time significantly.',
        ],

        bestWay: [
            "For a straightforward city-to-city trip, the train is quick and frequent, especially on faster services. A private transfer is worth choosing with luggage, a group, or if your Venice hotel and Verona destination aren't near either station.",
        ],

        faqs: [
            { q: 'How far is Verona from Venice?', a: "About 103–105 km in a straight line, or roughly 115–119 km by road — a drive of 1 hour 15 to 1 hour 30 minutes." },
            { q: 'How long is the train from Venice to Verona?', a: "Faster services take about 55 minutes to 1 hour 15 minutes; regional trains can take up to around 1 hour 50 minutes. Trains run at least hourly." },
            { q: 'Can I drive from central Venice to Verona?', a: "Not directly — you first need to reach Piazzale Roma or the mainland by boat or on foot, since the historic centre has no road access, before a car journey to Verona can start." },
            { q: 'Is the train or a private transfer better for Venice to Verona?', a: "The train is efficient for a simple city-to-city trip. A private transfer is more convenient with luggage or a group, or if you want a direct door-to-door ride without a station-to-station journey." },
            { q: 'Can I stop in Vicenza on the way?', a: "Yes — Vicenza sits directly on the route between Venice and Verona, both by road and by rail, and is known for its Palladian architecture." },
        ],
    },
    {
        slug: 'milan-to-turin-distance',
        itSlug: 'distanza-da-milano-a-torino',
        origin: 'Milan',
        dest: 'Turin',
        seoTitle: 'Milan to Turin Distance – Km, Miles & Travel Time',
        metaDescription: 'How far is Turin from Milan? Straight-line, driving and train distances compared, with real travel times by car, train and private transfer.',
        h1: 'Milan to Turin Distance',
        heroImage: '/images/hero.webp',

        straightLineDistance: 'approx. 125 km (about 78 miles)',
        straightLineNote: 'The straight-line air distance is approximately 125 km.',
        drivingDistance: 'approx. 140–144 km (about 87–90 miles)',
        drivingDuration: '1 hour 20 minutes – 1 hour 40 minutes',
        trainDuration: 'approx. 44–50 minutes on Frecciarossa; up to 1 hour 40 minutes on regional trains',

        intro: [
            "Milan and Turin are about 125 km apart in a straight line, with a driving distance of roughly 140–144 km along the A4 motorway, typically taking 1 hour 20 to 1 hour 40 minutes.",
            "Because the terrain between the two cities is largely flat, the gap between the straight-line and driving distances is relatively small compared with routes that cross hills or coastline.",
        ],

        centreVsDoorToDoor: [
            "The figures above are measured city centre to city centre. Starting from one of Milan's airports (Malpensa, Linate or Bergamo) instead of the city centre changes the distance and time to Turin, sometimes significantly depending on which airport.",
            "A private transfer is quoted for your specific pickup and drop-off addresses, whether that's a city-centre hotel, an office or an airport.",
        ],

        byCar: [
            "Driving from Milan to Turin covers about 140–144 km via the A4 motorway and takes roughly 1 hour 20 to 1 hour 40 minutes under normal traffic.",
        ],
        byCarRoad: 'the A4 motorway',

        byTrain: [
            "This is one of Italy's fastest short high-speed routes: Frecciarossa and Italo trains connect Milano Centrale and Torino Porta Nuova in as little as 44–50 minutes, with departures at least twice an hour. Regional trains cover the same route but take considerably longer, up to around 1 hour 40 minutes.",
        ],

        byPrivateTransfer: [
            "A private transfer takes you directly between your Milan and Turin addresses without a station stop, which is convenient for business travel, groups or luggage.",
            "For pricing, vehicle options and booking, see our dedicated Milan to Turin taxi transfer page.",
        ],
        routePageSlug: 'milan-to-turin-taxi',
        routePageLabel: 'Milan to Turin Taxi Transfer',

        popularStops: [
            { name: 'Novara', note: 'A town directly on the A4 route and rail line between Milan and Turin.' },
        ],

        travelTimeFactors: [
            'Traffic on the A4, especially around Milan and Turin themselves.',
            'Whether you\'re starting from a Milan city-centre address or one of its three airports.',
            'Whether you take a high-speed Frecciarossa/Italo service or a slower regional train.',
        ],

        bestWay: [
            "For a fast city-to-city trip, the high-speed train is hard to beat — under an hour, station to station, with frequent departures. A private transfer is worth choosing for door-to-door convenience, a group, luggage, or when either end of your trip is an airport rather than a city centre.",
        ],

        faqs: [
            { q: 'How far is Turin from Milan?', a: "About 125 km in a straight line, or roughly 140–144 km by road — a drive of 1 hour 20 to 1 hour 40 minutes." },
            { q: 'How long is the fast train from Milan to Turin?', a: "Frecciarossa and Italo high-speed trains take as little as 44–50 minutes between Milano Centrale and Torino Porta Nuova, with frequent departures." },
            { q: 'Is the train much faster than driving?', a: "Station to station, yes — the fastest trains take under an hour versus 1 hour 20 minutes or more by road. A private transfer trades some of that speed for a direct door-to-door ride." },
            { q: 'Does it matter which Milan airport I start from?', a: "Yes — Malpensa, Linate and Bergamo are all different distances from Turin, so your journey time depends on which airport you're using." },
            { q: 'Are all trains from Milan to Turin equally fast?', a: "No — high-speed Frecciarossa and Italo services take under 50 minutes, while regional trains on the same route can take up to around 1 hour 40 minutes." },
        ],
    },
    {
        slug: 'rome-to-vatican-distance',
        itSlug: 'distanza-da-roma-al-vaticano',
        origin: 'Rome',
        dest: 'Vatican City',
        seoTitle: 'Rome to Vatican Distance – Km & Travel Time',
        metaDescription: 'How far is the Vatican from Rome city centre? Distance and travel time by car, on foot and by private transfer, from different parts of Rome.',
        h1: 'Rome to Vatican Distance',
        heroImage: '/images/rome airport.webp',

        straightLineDistance: 'approx. 3–4 km (about 2–2.5 miles) from central Rome',
        straightLineNote: 'The Vatican sits inside Rome, not outside it, so there is no single "distance from Rome" — the real figure depends entirely on which part of the city you start from. Historic-centre starting points on the west bank of the Tiber (near Piazza Navona) are closer than points further east.',
        drivingDistance: 'approx. 2–5 km (about 1.5–3 miles), depending on starting point',
        drivingDuration: '10–20 minutes by car outside peak traffic',
        trainDuration: 'Not applicable — no direct train; the Metro (Line A, Ottaviano station) is the nearest rail option',

        intro: [
            "Unlike most \"distance\" questions on this site, Rome to Vatican isn't a point-to-point journey between two cities — the Vatican is an independent city-state entirely surrounded by Rome, near the historic centre. So the real answer to \"how far is it\" depends almost entirely on where in Rome you're starting from, not on a single fixed figure.",
            "This page focuses on what actually matters for planning: typical distances and times from the main tourist and hotel areas of central Rome, and the practical options for getting there.",
        ],

        centreVsDoorToDoor: [
            "From Piazza Navona or the area around the Pantheon, it's roughly 1.5 km to St Peter's Square — about an 18–20 minute walk. From further east (Trevi Fountain, Termini station area), expect 3–4 km and 30–45 minutes on foot.",
            "By car the distance is short in every case — typically 2–5 km — but actual journey time depends heavily on traffic and on the fact that vehicle access right up to St Peter's Square is restricted; a driver will normally drop you as close as traffic rules allow, with a short walk to finish.",
        ],

        byCar: [
            "Driving to the Vatican from most central Rome addresses covers only a few kilometres, but the historic centre's narrow streets, one-way systems and limited-traffic zones (ZTL) mean the drive can take longer than the short distance suggests — typically 10–20 minutes outside peak hours, more during Wednesday general audiences or major events when the area around St Peter's Square sees significant pedestrian and traffic restrictions.",
        ],
        byCarRoad: 'central Rome\'s city streets (no motorway is involved for this short a distance)',

        byTrain: [
            "There is no direct overground train to the Vatican. The closest option is Rome's Metro Line A, which stops at Ottaviano–San Pietro, about a 10-minute walk from St Peter's Square. From most central hotels, a taxi or private transfer covers the same short distance without a station walk at either end.",
        ],

        byPrivateTransfer: [
            "For a short, specific hop like this, a private transfer's main advantage is convenience: pickup from your exact hotel or address, no walking to a Metro station, and a driver who knows exactly where vehicles can and can't stop near St Peter's Square.",
            "For pricing and booking, see our dedicated Rome to Vatican taxi transfer page.",
        ],
        routePageSlug: 'rome-to-vatican-taxi',
        routePageLabel: 'Rome to Vatican Taxi Transfer',

        popularStops: [],

        travelTimeFactors: [
            'Your exact starting point in Rome — the historic centre is much closer than areas further east or south.',
            'Wednesday papal general audiences and major Vatican events, which bring extra crowds and road restrictions around St Peter\'s Square.',
            'Traffic and restricted vehicle access in Rome\'s historic centre generally.',
            'Whether you\'re walking, in which case river crossings and one-way pedestrian routes affect the practical route more than the straight-line distance.',
        ],

        bestWay: [
            "If you're already staying near the historic centre, walking is often just as quick as a short car ride once you account for traffic and drop-off restrictions. From further out, or with limited time, mobility needs, or during a Wednesday audience, a private transfer or taxi to the nearest practical drop-off point is more comfortable.",
        ],

        faqs: [
            { q: 'How far is the Vatican from Rome city centre?', a: "It depends on your starting point — roughly 1.5 km (18–20 minutes' walk) from Piazza Navona, or 3–4 km (30–45 minutes' walk) from areas further east like Termini. The Vatican is inside Rome, not a separate destination outside it." },
            { q: 'Can I walk from central Rome to the Vatican?', a: "Yes — for most historic-centre hotels it's a comfortable 20–40 minute walk, and many visitors do it as a scenic route along or near the Tiber." },
            { q: 'Is it worth taking a taxi to the Vatican?', a: "For a short distance with no luggage, walking or the Metro (Line A to Ottaviano) can be just as fast. A taxi or private transfer is worth it with luggage, mobility considerations, poor weather, or when you want a specific pickup time." },
            { q: 'Why is there no single distance figure for Rome to Vatican?', a: "Because the Vatican sits inside Rome rather than being a separate town — the real distance depends entirely on which part of the city you're travelling from." },
            { q: 'Does traffic near the Vatican get busy?', a: "Yes, especially on Wednesday mornings for the papal general audience and around major religious events, when both pedestrian and vehicle traffic increase significantly near St Peter's Square." },
        ],
    },
    {
        slug: 'florence-to-siena-distance',
        itSlug: 'distanza-da-firenze-a-siena',
        origin: 'Florence',
        dest: 'Siena',
        seoTitle: 'Florence to Siena Distance – Km & Travel Time',
        metaDescription: 'How far is Siena from Florence? Driving distance and time via the fast SR2 and the scenic Chianti route, plus train and private transfer options.',
        h1: 'Florence to Siena Distance',
        heroImage: '/images/Tuscany Wine.webp',

        straightLineDistance: 'approx. 55–60 km (about 34–37 miles)',
        straightLineNote: 'Straight-line distance is a less useful reference here than usual, since the two practical driving routes differ meaningfully from each other in both distance and character.',
        drivingDistance: 'approx. 50–69 km depending on route (about 31–43 miles)',
        drivingDuration: '50 minutes (fast route) to 1 hour 30 minutes (scenic route)',
        trainDuration: 'approx. 1 hour 10 minutes (direct) to 1 hour 40 minutes',

        intro: [
            "Florence to Siena is unusual among Tuscan routes in having two genuinely different roads, not just one route with variable traffic: the fast SR2 Superstrada and the scenic SR222 \"Chiantigiana\" through the Chianti wine region. Which one applies depends on whether you're prioritising speed or the journey itself.",
            "This page compares both, plus the train and private transfer, so you can choose based on what matters for your trip.",
        ],

        centreVsDoorToDoor: [
            "The times below are for the direct city-to-city drive. Add extra time if your Florence pickup point is outside the centre or if you're stopping at any of the Chianti towns along the SR222 — that route is popular specifically because it invites stops, not because it's the quickest way through.",
        ],

        byCar: [
            "The fast route follows the SR2 Superstrada Firenze–Siena, a free four-lane expressway along the western edge of Chianti, covering the drive in about 50 minutes with no stops.",
            "The scenic alternative follows the SR222 \"Via Chiantigiana\" directly through the Chianti wine region — about 69 km and roughly 1 hour 30 minutes, roughly 15 minutes longer than the SR2 but passing directly through Chianti's vineyards and villages rather than skirting them.",
        ],
        byCarRoad: 'the SR2 Superstrada (fast) or the SR222 Via Chiantigiana (scenic, through Chianti)',

        byTrain: [
            "Regional trains run from Firenze Santa Maria Novella to Siena with up to 8 direct services a day, taking about 1 hour 10 minutes on the fastest direct trains and up to around 1 hour 40 minutes on slower ones with more stops. Services run roughly every 60–90 minutes.",
        ],

        byPrivateTransfer: [
            "A private transfer lets you choose the route that suits your trip — the direct SR2 if you just need to get to Siena, or the SR222 through Chianti with the flexibility to stop at a vineyard or hill town along the way, something neither the train nor a fixed-route coach can offer.",
            "For pricing and booking, see our dedicated Florence to Siena taxi transfer page.",
        ],
        routePageSlug: 'florence-to-siena-taxi',
        routePageLabel: 'Florence to Siena Taxi Transfer',

        popularStops: [
            { name: 'Chianti wine region', note: 'Directly along the SR222 route — the reason most travellers choose the scenic road over the faster SR2.' },
            { name: 'Castellina in Chianti', note: 'One of the well-known Chianti villages sitting directly on the Via Chiantigiana between Florence and Siena.' },
        ],

        travelTimeFactors: [
            'Which route you take — the SR2 and SR222 differ by roughly 15–40 minutes depending on conditions.',
            'Traffic leaving Florence, especially during weekday peaks.',
            'Whether you stop in Chianti along the scenic route.',
            'For train travel, whether you catch a direct service or one with more stops.',
        ],

        bestWay: [
            "If Siena itself is the goal and time is limited, the SR2 or the direct train are both efficient. If the journey through Chianti is part of the appeal, a private transfer on the SR222 — with the option to stop — makes more sense than either the fast road or a fixed train timetable.",
        ],

        faqs: [
            { q: 'How far is Siena from Florence?', a: "It depends on the route: about 50 minutes via the fast SR2 Superstrada, or around 69 km and 1 hour 30 minutes via the scenic SR222 Chiantigiana through the Chianti wine region." },
            { q: 'Which route is better, the SR2 or the Chianti road?', a: "The SR2 is faster and more direct. The SR222 (Via Chiantigiana) takes longer but passes through Chianti's vineyards and villages — it's the popular choice when the drive itself is part of the trip." },
            { q: 'Is there a direct train from Florence to Siena?', a: "Yes — regional trains run directly from Santa Maria Novella to Siena in about 1 hour 10 minutes on the fastest services, with up to 8 direct connections a day." },
            { q: 'Can I stop in Chianti on the way to Siena?', a: "Yes, if you take the SR222 route by car or private transfer — it runs directly through the Chianti wine region, unlike the faster SR2 which skirts around it." },
            { q: 'Is it worth driving instead of taking the train to Siena?', a: "If you want to stop in Chianti or you're travelling with luggage or as a group, driving or a private transfer is more flexible. For a direct city-to-city trip alone, the train is a straightforward, efficient option." },
        ],
    },
    {
        slug: 'rome-fiumicino-to-sorrento-distance',
        itSlug: 'distanza-dallaeroporto-di-fiumicino-a-sorrento',
        origin: 'Rome Fiumicino Airport',
        dest: 'Sorrento',
        seoTitle: 'Rome Fiumicino to Sorrento Distance & Travel Time',
        metaDescription: 'How far is Sorrento from Rome Fiumicino Airport? Driving distance, typical travel time and transport options for this popular airport-to-coast route.',
        h1: 'Rome Fiumicino to Sorrento Distance',
        heroImage: '/images/almafi.webp',

        straightLineDistance: 'approx. 210–220 km (about 130–137 miles)',
        straightLineNote: 'Straight-line distance is a rough reference only on a route this long and indirect — the real driving distance is significantly greater because the road has to skirt Naples and follow the coast.',
        drivingDistance: 'approx. 280–290 km (about 174–180 miles)',
        drivingDuration: '3 hours – 3 hours 30 minutes',
        trainDuration: 'No direct train — approx. 2 hours 30 minutes to 3 hours via Naples with a connection',

        intro: [
            "Rome Fiumicino Airport to Sorrento is one of the longer airport transfers covered on this site — around 280–290 km, mostly motorway, finishing on the coastal approach into the Sorrento peninsula. It's a common route for travellers flying into Rome and heading straight to the Amalfi Coast area without stopping in the city.",
            "Because it's a multi-hour journey, the practical differences between driving, the train (with a change), and a private transfer are worth understanding before you book.",
        ],

        centreVsDoorToDoor: [
            "The figures above are airport-to-town figures. Your exact time will vary a little depending on your specific hotel or address in Sorrento, and on which Fiumicino terminal you land at, but the difference is minor compared with the length of the overall journey.",
        ],

        byCar: [
            "Driving from Fiumicino to Sorrento covers roughly 280–290 km via the A1 and A3 motorways, skirting Naples, and typically takes 3 hours to 3 hours 30 minutes depending on traffic — especially around Naples itself, which can add real delay at peak times.",
        ],
        byCarRoad: 'the A1 and A3 motorways, skirting Naples',

        byTrain: [
            "There is no direct train from Fiumicino to Sorrento. The practical route is the Leonardo Express or a regional train into Rome, a high-speed train from Roma Termini to Napoli Centrale, and then the Circumvesuviana line to Sorrento — three separate legs with connections, realistically totalling 2.5–3+ hours of travel plus waiting and change time, and it involves handling luggage across multiple stations.",
        ],

        byPrivateTransfer: [
            "For a journey this long with connections this awkward by train, a private transfer's main advantage is doing the whole route in one vehicle, with no station changes or luggage handling along the way — meaningful on a 3-hour-plus journey straight off a flight.",
            "For pricing and booking, see our dedicated Rome Fiumicino to Sorrento taxi transfer page.",
        ],
        routePageSlug: 'rome-fiumicino-to-sorrento-taxi',
        routePageLabel: 'Rome Fiumicino to Sorrento Taxi Transfer',

        popularStops: [
            { name: 'Pompeii', note: 'Directly on the route between Naples and Sorrento — a common stop to break up the long drive.' },
        ],

        travelTimeFactors: [
            'Traffic around Naples, which the route passes directly alongside.',
            'Time of year — summer weekends see significantly heavier traffic on the approach to Sorrento.',
            'Your Fiumicino arrival terminal and time, if connecting straight off a flight.',
            'Whether you add a stop, such as Pompeii, along the way.',
        ],

        bestWay: [
            "Given the length of the journey and the lack of a direct train, most travellers making this specific trip choose either driving themselves or a private transfer. The train is possible but involves multiple changes and is generally only worth it for solo travellers comfortable managing connections and luggage across three legs.",
        ],

        faqs: [
            { q: 'How far is Sorrento from Rome Fiumicino Airport?', a: "About 280–290 km by road, a drive of roughly 3 to 3.5 hours via the A1 and A3 motorways past Naples." },
            { q: 'Is there a direct train from Fiumicino to Sorrento?', a: "No. It requires multiple legs — into Rome, a high-speed train to Naples, then the Circumvesuviana to Sorrento — realistically taking 2.5 to 3+ hours including connections." },
            { q: 'Can I stop at Pompeii on the way to Sorrento?', a: "Yes — Pompeii sits directly on the route between Naples and Sorrento and is a popular stop to break up the drive." },
            { q: 'Is this a long transfer to do right after a flight?', a: "It's one of the longer airport transfers on this route network, at around 3 hours-plus. A private transfer with a professional driver is a comfortable way to do it directly after landing, without managing train connections." },
            { q: 'Does traffic around Naples affect this route much?', a: "Yes — the drive passes directly alongside Naples, and traffic there, especially at peak times, is one of the main variables affecting overall journey time." },
        ],
    },
    {
        slug: 'rome-fiumicino-to-civitavecchia-distance',
        itSlug: 'distanza-dallaeroporto-di-fiumicino-a-civitavecchia',
        origin: 'Rome Fiumicino Airport',
        dest: 'Civitavecchia',
        seoTitle: 'Fiumicino to Civitavecchia Distance & Travel Time',
        metaDescription: 'How far is Civitavecchia cruise port from Rome Fiumicino Airport? Driving distance, typical journey time and transport options compared.',
        h1: 'Rome Fiumicino to Civitavecchia Distance',
        heroImage: '/images/cruise-port-transfer.webp',

        straightLineDistance: 'approx. 55–60 km (about 34–37 miles)',
        straightLineNote: 'Straight-line and driving distance are close on this route, since it runs fairly directly along the coast with no major detour.',
        drivingDistance: 'approx. 60–70 km (about 37–43 miles)',
        drivingDuration: '50 minutes – 1 hour',
        trainDuration: 'approx. 45–60 minutes on regional trains',

        intro: [
            "Rome Fiumicino Airport to Civitavecchia is a short, direct coastal route, mainly travelled by cruise passengers flying into Rome and heading straight to the port rather than into the city. At roughly 60–70 km, it's a much shorter transfer than most other routes on this site.",
            "Because embarkation timing matters for cruise travel, this page focuses on realistic journey time and what can affect it, alongside the plain distance.",
        ],

        centreVsDoorToDoor: [
            "The figures above are airport-to-port. Since Civitavecchia's cruise terminal is a single, well-defined destination (unlike a city with many possible hotel addresses), the door-to-door time is close to the airport-to-port time in almost every case.",
        ],

        byCar: [
            "Driving from Fiumicino to Civitavecchia covers about 60–70 km via the A12 motorway along the coast, typically taking 50 minutes to an hour under normal conditions.",
        ],
        byCarRoad: 'the A12 motorway',

        byTrain: [
            "Regional trains connect Roma Termini (via Fiumicino's rail link) to Civitavecchia in roughly 45–60 minutes, running fairly frequently. This is a genuinely practical option for a light-luggage traveller, though it still requires getting from the airport into a Rome station first and then from Civitavecchia's station to the port terminal.",
        ],

        byPrivateTransfer: [
            "For cruise passengers, a private transfer's main advantage is a single door-to-door ride straight to the correct cruise terminal, with no station changes or terminal-finding involved — useful when embarkation has a fixed check-in window and luggage is a factor.",
            "For pricing and booking, see our dedicated Rome Fiumicino to Civitavecchia taxi transfer page.",
        ],
        routePageSlug: 'rome-fiumicino-to-civitavecchia-taxi',
        routePageLabel: 'Rome Fiumicino to Civitavecchia Taxi Transfer',

        popularStops: [],

        travelTimeFactors: [
            'Traffic on the A12, particularly around Rome\'s outer areas.',
            'Your Fiumicino arrival terminal and flight landing time.',
            'Cruise embarkation-day congestion at the port itself, especially around peak check-in windows.',
            'Weather and general road conditions.',
        ],

        bestWay: [
            "For cruise embarkation specifically, a private transfer with flight tracking is generally the most reliable option, since it removes the uncertainty of connecting from the airport into Rome and back out to the coast by train. The train is a reasonable budget option for light-luggage travellers with a flexible schedule.",
        ],

        faqs: [
            { q: 'How far is Civitavecchia from Rome Fiumicino Airport?', a: "About 60–70 km by road, a drive of roughly 50 minutes to an hour via the A12 motorway." },
            { q: 'Can I take the train from Fiumicino to Civitavecchia?', a: "Yes — regional trains connect the two, taking roughly 45–60 minutes, though you'll need to get from the airport to a Rome station first and from the Civitavecchia station to the port terminal." },
            { q: 'Is this a good transfer to arrange for a cruise embarkation?', a: "Yes — many cruise passengers flying into Fiumicino use exactly this route. A private transfer with flight tracking is a common choice to avoid embarkation-day timing risk." },
            { q: 'How much time should I allow between landing and my cruise departure?', a: "Cruise lines generally recommend several hours of buffer for flights arriving on embarkation day; the transfer itself is under an hour, but allow time for baggage claim, the drive, and port check-in procedures." },
            { q: 'Is the drive to Civitavecchia scenic?', a: "It runs along the coast on the A12, with some sea views, though it's a fairly direct motorway drive rather than a slow scenic route." },
        ],
    },
    {
        slug: 'naples-airport-to-sorrento-distance',
        itSlug: 'distanza-dallaeroporto-di-napoli-a-sorrento',
        origin: 'Naples Airport',
        dest: 'Sorrento',
        seoTitle: 'Naples Airport to Sorrento Distance & Travel Time',
        metaDescription: 'How far is Sorrento from Naples Airport? Driving distance, typical travel time and transport options for this popular coastal route.',
        h1: 'Naples Airport to Sorrento Distance',
        heroImage: '/images/almafi.webp',

        straightLineDistance: 'approx. 40–45 km (about 25–28 miles)',
        straightLineNote: 'The driving distance is noticeably longer than the straight-line figure because the route has to go around the Bay of Naples rather than across it.',
        drivingDistance: 'approx. 50 km (about 31 miles)',
        drivingDuration: '55 minutes – 1 hour 20 minutes',
        trainDuration: 'approx. 70–80 minutes on the Circumvesuviana',

        intro: [
            "Naples Airport to Sorrento is one of the most frequently travelled routes on the Amalfi Coast gateway, covering about 50 km around the Bay of Naples. It's short enough to be manageable by several methods, but traffic on the final coastal stretch makes the exact time genuinely variable.",
            "This page compares driving, the train, and a private transfer so you know what to expect before you travel.",
        ],

        centreVsDoorToDoor: [
            "The figures above are airport-to-town. Sorrento itself is compact, so once you're in town, reaching most hotels adds only a few minutes — the bigger variable is traffic on the approach roads, not the last stretch within Sorrento.",
        ],

        byCar: [
            "Driving from Naples Airport to Sorrento covers about 50 km via the A3 motorway and the SS145 coastal road, typically taking 55 minutes to 1 hour 20 minutes. Best-case journeys under light traffic can be closer to 55 minutes; summer weekends and peak season regularly push this toward the upper end or beyond.",
        ],
        byCarRoad: 'the A3 motorway, then the SS145 coastal road',

        byTrain: [
            "The Circumvesuviana line runs from Naples (with a connection from the airport into the city) to Sorrento in roughly 70–80 minutes. It's a practical, inexpensive option, though trains can be crowded, especially in summer, and it isn't a direct airport-to-Sorrento service — you need to reach a Naples station first.",
        ],

        byPrivateTransfer: [
            "A private transfer covers the same route door-to-door from the arrivals hall straight to your Sorrento hotel, avoiding both the Circumvesuviana's crowding and the need to navigate a station connection with luggage.",
            "For pricing and booking, see our dedicated Naples Airport to Sorrento taxi transfer page.",
        ],
        routePageSlug: 'naples-airport-to-sorrento-taxi',
        routePageLabel: 'Naples Airport to Sorrento Taxi Transfer',

        popularStops: [],

        travelTimeFactors: [
            'Season — summer weekends significantly increase traffic on the coastal approach to Sorrento.',
            'Traffic around Naples itself before reaching the A3.',
            'Time of day, with weekday evening peaks adding delay.',
            'For the Circumvesuviana, waiting time for the connection from the airport into Naples.',
        ],

        bestWay: [
            "For a straightforward arrival with luggage, a private transfer is the most predictable door-to-door option, particularly in peak season. The Circumvesuviana is a solid budget choice for light travellers comfortable with a busier train and one connection.",
        ],

        faqs: [
            { q: 'How far is Sorrento from Naples Airport?', a: "About 50 km by road, a drive of roughly 55 minutes to 1 hour 20 minutes depending on traffic, especially in peak season." },
            { q: 'Is the Circumvesuviana a good way to get to Sorrento?', a: "It's a practical, budget-friendly option taking about 70–80 minutes, though it isn't direct from the airport (you need to reach a Naples station first) and can get crowded in summer." },
            { q: 'Why does the driving time vary so much?', a: "The final stretch is a coastal road that gets significantly busier in summer and at weekends — the same 50 km drive can take under an hour in light traffic or well over that at peak times." },
            { q: 'Is a private transfer worth it for this route?', a: "For a direct arrival with luggage, especially in peak season, yes — it avoids the Circumvesuviana connection and crowding and goes straight to your hotel." },
            { q: 'Can I combine this trip with a stop in Pompeii?', a: "Yes — Pompeii is close to the A3 route between Naples and Sorrento and is a common add-on stop for travellers with time to spare." },
        ],
    },
    {
        slug: 'naples-airport-to-positano-distance',
        itSlug: 'distanza-dallaeroporto-di-napoli-a-positano',
        origin: 'Naples Airport',
        dest: 'Positano',
        seoTitle: 'Naples Airport to Positano Distance & Travel Time',
        metaDescription: 'How far is Positano from Naples Airport? Driving distance along the Amalfi Coast road, typical travel time and transport options.',
        h1: 'Naples Airport to Positano Distance',
        heroImage: '/images/almafi.webp',

        straightLineDistance: 'approx. 45–50 km (about 28–31 miles)',
        straightLineNote: 'The driving distance is significantly longer than the straight-line figure because the SS163 coast road follows every bay and headland rather than cutting across.',
        drivingDistance: 'approx. 61 km (about 38 miles)',
        drivingDuration: '1 hour 12 minutes – 1 hour 40 minutes',
        trainDuration: 'No direct train — nearest station is Sorrento, then bus or ferry',

        intro: [
            "Naples Airport to Positano covers about 61 km, running via the A3 motorway before joining the SS163 coast road for the final, more dramatic stretch into Positano. It's a well-travelled but genuinely variable route — the coast road's narrow, winding character means traffic has an outsized effect on journey time.",
            "This page sets out realistic driving times and the practical alternatives, since there's no direct public transport option all the way to Positano.",
        ],

        centreVsDoorToDoor: [
            "Positano is built on steep terrain with very limited vehicle access — most hotels are reached via steps rather than a direct driveway, so allow a little extra time for the final approach and luggage handling regardless of how you travel.",
        ],

        byCar: [
            "Driving from Naples Airport to Positano covers about 61 km via the A3 motorway and the SS163 coast road, typically taking 1 hour 12 minutes under normal conditions. Saturday mornings and summer weekends commonly add 20–30 minutes or more on the narrow Meta-to-Positano stretch of the coast road.",
        ],
        byCarRoad: 'the A3 motorway, then the SS163 Amalfitana coast road',

        byTrain: [
            "There is no train to Positano — the rail line doesn't reach the Amalfi Coast. The typical public-transport route is the Circumvesuviana to Sorrento, then a SITA bus or seasonal ferry on to Positano, adding real connection and waiting time beyond the driving figures above.",
        ],

        byPrivateTransfer: [
            "Given the lack of rail access and the awkward bus/ferry connections, a private transfer is the most direct way to reach Positano from the airport — driven the whole way with no changes, and dropped as close to your hotel as the town's steep, limited access allows.",
            "For pricing and booking, see our dedicated Naples Airport to Positano taxi transfer page.",
        ],
        routePageSlug: 'naples-airport-to-positano-taxi',
        routePageLabel: 'Naples Airport to Positano Taxi Transfer',

        popularStops: [
            { name: 'Vietri sul Mare', note: 'The gateway town where the SS163 coast road begins, passed en route.' },
        ],

        travelTimeFactors: [
            'Season — the SS163 gets significantly busier from May to October.',
            'Day of the week — Saturday changeover traffic is a known bottleneck on this route.',
            'Traffic through Naples and Castellammare before reaching the coast road.',
            'Positano\'s limited vehicle access, which adds a short walk/steps at the very end regardless of transport method.',
        ],

        bestWay: [
            "Given there's no direct public transport and the coast road's traffic is genuinely unpredictable, most travellers with luggage choose a private transfer for this route. It won't avoid coast-road traffic entirely, but it removes the connection and waiting time that the bus/ferry alternative adds.",
        ],

        faqs: [
            { q: 'How far is Positano from Naples Airport?', a: "About 61 km by road, a drive of roughly 1 hour 12 minutes under normal conditions, via the A3 motorway and the SS163 coast road." },
            { q: 'Why does the drive to Positano take longer at weekends?', a: "The SS163 coast road is narrow with limited overtaking room, and Saturday changeover traffic (as one week's visitors leave and the next arrive) is a known cause of delays, adding 20–30 minutes or more." },
            { q: 'Is there a train to Positano?', a: "No — the rail line doesn't reach the Amalfi Coast. The usual public-transport route is the Circumvesuviana to Sorrento, then a SITA bus or seasonal ferry." },
            { q: 'Can a car reach my hotel in Positano directly?', a: "Not always — Positano's steep, narrow streets mean many hotels are reached via steps rather than a driveway. Drivers get you as close as possible and help with luggage from there." },
            { q: 'Is a private transfer the best option for this route?', a: "For travellers with luggage or without a flexible schedule, yes — it avoids the bus/ferry connection required by public transport and drives the whole route directly." },
        ],
    },
    {
        slug: 'naples-airport-to-amalfi-distance',
        itSlug: 'distanza-dallaeroporto-di-napoli-ad-amalfi',
        origin: 'Naples Airport',
        dest: 'Amalfi',
        seoTitle: 'Naples Airport to Amalfi Distance & Travel Time',
        metaDescription: 'How far is Amalfi town from Naples Airport? Driving distance along the coast road, realistic travel time and transport options.',
        h1: 'Naples Airport to Amalfi Distance',
        heroImage: '/images/almafi.webp',

        straightLineDistance: 'approx. 48–55 km (about 30–34 miles)',
        straightLineNote: 'Sources vary somewhat on the exact figure (roughly 64–74 km by road depending on the reference point used), reflecting how sensitive this route is to the precise start and end address on a winding coast road.',
        drivingDistance: 'approx. 65–70 km (about 40–43 miles)',
        drivingDuration: '1 hour 50 minutes under normal conditions; 2–3 hours in peak season',
        trainDuration: 'No direct train — nearest stations are Salerno or Sorrento, then bus or ferry',

        intro: [
            "Naples Airport to Amalfi town covers roughly 65–70 km, but the driving time varies more than almost any other route on this site: about 1 hour 50 minutes under normal conditions, stretching to 2–3 hours on a busy summer day. The road itself — the SS163 Amalfitana — is the reason.",
            "This page sets realistic expectations for the drive and lays out the alternatives, since there's no direct public transport option either.",
        ],

        centreVsDoorToDoor: [
            "Amalfi town's centre is more accessible by car than Positano's, but parking is still limited, so private transfers typically drop close to the centre with a short walk to most hotels.",
        ],

        byCar: [
            "The route runs via the A3 motorway to Vietri sul Mare, then the SS163 Amalfitana coast road through Positano to Amalfi, covering about 65–70 km. Allow 1 hour 50 minutes under normal conditions; summer peak season (May–October) can extend this to 2–3 hours due to SS163 congestion, particularly on weekend changeover days.",
        ],
        byCarRoad: 'the A3 motorway to Vietri sul Mare, then the SS163 Amalfitana coast road',

        byTrain: [
            "There is no direct train to Amalfi — the coastline has no rail line. The typical public-transport route is a train to Salerno (the eastern gateway to the coast) or Sorrento (the western one), followed by a SITA bus or seasonal ferry, adding real connection time on top of the driving figures above.",
        ],

        byPrivateTransfer: [
            "Given the lack of rail access and the coast road's unpredictable traffic, a private transfer is the most direct way to reach Amalfi — one vehicle for the whole journey, with a driver experienced on the SS163's hairpin bends.",
            "For pricing and booking, see our dedicated Naples Airport to Amalfi taxi transfer page.",
        ],
        routePageSlug: 'naples-airport-to-amalfi-taxi',
        routePageLabel: 'Naples Airport to Amalfi Taxi Transfer',

        popularStops: [
            { name: 'Positano', note: 'Directly on the SS163 route between Naples and Amalfi — many travellers combine both in one trip.' },
            { name: 'Vietri sul Mare', note: 'The gateway town where the SS163 coast road begins.' },
        ],

        travelTimeFactors: [
            'Season — May to October sees significantly heavier SS163 traffic.',
            'Day of the week — weekend changeover days are typically the busiest.',
            'Whether you\'re travelling via Positano (common, but adds time) or a more direct stretch of the coast road.',
            'Traffic through Naples and Salerno before reaching the coast road itself.',
        ],

        bestWay: [
            "Because journey time on this route varies so widely with the season, and there's no direct public transport, a private transfer with a driver who knows the SS163 is the most reliable way to manage a route this variable — particularly in peak season.",
        ],

        faqs: [
            { q: 'How far is Amalfi from Naples Airport?', a: "About 65–70 km by road, though sources vary slightly depending on the exact reference points used. The drive normally takes around 1 hour 50 minutes, but can extend to 2–3 hours in peak season." },
            { q: 'Why does the drive to Amalfi take so much longer in summer?', a: "The SS163 Amalfitana coast road is narrow with limited overtaking, and May–October sees far heavier tourist traffic, particularly around Positano, which the route also passes through." },
            { q: 'Is there a train to Amalfi?', a: "No — there's no rail line on the Amalfi Coast. You'd need a train to Salerno or Sorrento, then a SITA bus or seasonal ferry to reach Amalfi town." },
            { q: 'Does the route pass through Positano?', a: "Yes, typically — the SS163 runs through Positano on its way to Amalfi, which is why many travellers combine both towns in a single trip." },
            { q: 'What\'s the most reliable way to reach Amalfi from the airport?', a: "A private transfer with a driver experienced on the coast road is generally the most predictable option, especially given how much traffic conditions vary by season." },
        ],
    },
    {
        slug: 'naples-airport-to-pompeii-distance',
        itSlug: 'distanza-dallaeroporto-di-napoli-a-pompei',
        origin: 'Naples Airport',
        dest: 'Pompeii',
        seoTitle: 'Naples Airport to Pompeii Distance & Travel Time',
        metaDescription: 'How far is Pompeii from Naples Airport? Driving distance, typical journey time and transport options for visiting the ruins.',
        h1: 'Naples Airport to Pompeii Distance',
        heroImage: '/images/naples.webp',

        straightLineDistance: 'approx. 20–24 km (about 12–15 miles)',
        straightLineNote: 'This is one of the shorter, more direct routes covered on this site — straight-line and driving distance are fairly close.',
        drivingDistance: 'approx. 28 km (about 17 miles)',
        drivingDuration: '24–40 minutes',
        trainDuration: 'approx. 40–50 minutes via the Circumvesuviana, with a connection from the airport into Naples',

        intro: [
            "Naples Airport to Pompeii is one of the shortest routes on this site — about 28 km, making it an easy add-on for arrival or departure day. It's a popular way to see the ruins without dedicating a full separate day.",
            "This page covers the realistic driving time, the train alternative, and what affects the journey.",
        ],

        centreVsDoorToDoor: [
            "The figures above are to the Pompei Scavi archaeological site entrance, the natural destination for this route rather than a city centre.",
        ],

        byCar: [
            "Driving from Naples Airport to Pompeii covers about 28 km via the A3 motorway and typically takes 24 to 40 minutes, depending on traffic. Weekday mornings (8–10am) and summer weekends see the heaviest congestion on this stretch of the A3.",
        ],
        byCarRoad: 'the A3 motorway',

        byTrain: [
            "The Circumvesuviana line connects Naples to Pompei Scavi – Villa dei Misteri, right by the site entrance, in about 30–40 minutes from central Naples. From the airport, add the connection time to reach a Naples station first — realistically 40–50 minutes door to station in total.",
        ],

        byPrivateTransfer: [
            "For a short add-on visit like this, especially straight off a flight with luggage, a private transfer avoids the Circumvesuviana connection and can wait while you tour the site before continuing to your final destination.",
            "For pricing and booking, see our dedicated Naples Airport to Pompeii taxi transfer page.",
        ],
        routePageSlug: 'naples-airport-to-pompeii-taxi',
        routePageLabel: 'Naples Airport to Pompeii Taxi Transfer',

        popularStops: [],

        travelTimeFactors: [
            'Weekday morning traffic (8–10am) on the A3.',
            'Summer weekend congestion, both on the road and around the site entrance itself.',
            'Whether you\'re continuing on to Sorrento or the Amalfi Coast afterwards rather than returning to the airport.',
        ],

        bestWay: [
            "Given the short distance, either driving/private transfer or the Circumvesuviana work well. A private transfer is the more convenient choice straight off a flight with luggage, or if you want the driver to wait during your visit and continue on afterwards.",
        ],

        faqs: [
            { q: 'How far is Pompeii from Naples Airport?', a: "About 28 km by road, a drive of roughly 24 to 40 minutes via the A3 motorway depending on traffic." },
            { q: 'Can I visit Pompeii straight after landing?', a: "Yes — it's a short, practical add-on to an arrival, especially with a private transfer that can store your luggage and wait while you tour the site." },
            { q: 'Is the Circumvesuviana a good way to reach Pompeii from the airport?', a: "It's workable — about 40–50 minutes door to station once you include the connection from the airport into Naples — but a private transfer is more direct if you have luggage." },
            { q: 'What\'s the closest station to the Pompeii ruins?', a: "Pompei Scavi – Villa dei Misteri, on the Circumvesuviana line, sits right by the main entrance." },
            { q: 'Can I continue to Sorrento or the Amalfi Coast after Pompeii?', a: "Yes — Pompeii sits directly on the route toward Sorrento and the Amalfi Coast, so many travellers combine a stop here with continuing onward rather than returning to Naples." },
        ],
    },
    {
        slug: 'milan-malpensa-to-como-distance',
        itSlug: 'distanza-dallaeroporto-di-malpensa-a-como',
        origin: 'Milan Malpensa Airport',
        dest: 'Como',
        seoTitle: 'Milan Malpensa to Como Distance & Travel Time',
        metaDescription: 'How far is Lake Como from Milan Malpensa Airport? Driving distance, typical travel time and train options for reaching Como town.',
        h1: 'Milan Malpensa to Como Distance',
        heroImage: '/images/Lake Como.webp',

        straightLineDistance: 'approx. 35 km (about 22 miles)',
        straightLineNote: 'Malpensa sits northwest of Milan, already closer to Lake Como than the city centre is — one reason this is a popular direct airport-to-lake route.',
        drivingDistance: 'approx. 52 km (about 32 miles)',
        drivingDuration: '42–60 minutes',
        trainDuration: 'approx. 1 hour 15 minutes on the fastest service (one change); around 2 hours on average with more stops',

        intro: [
            "Milan Malpensa Airport to Como is a genuinely convenient route — Malpensa sits northwest of Milan, already on the way to the lake, so this transfer is often quicker than heading into the city first. It covers about 52 km by road.",
            "This page compares driving and train options, since both are realistic choices for this specific route.",
        ],

        centreVsDoorToDoor: [
            "The figures above are to Como town. If you're headed further up the lake — Bellagio or Varenna, for example — expect meaningfully more time; this page covers the Malpensa-to-Como leg specifically.",
        ],

        byCar: [
            "Driving from Malpensa to Como covers about 52 km via the A8/A9 motorways and typically takes 42 to 60 minutes, depending on traffic around the airport and approaching Como.",
        ],
        byCarRoad: 'the A8/A9 motorways',

        byTrain: [
            "Train options exist but require at least one change; the fastest journeys take around 1 hour 15 minutes, while the average, including less convenient connections, is closer to 2 hours. For a direct airport arrival with luggage, this makes driving or a private transfer noticeably more convenient than the rail option on this specific route.",
        ],

        byPrivateTransfer: [
            "A private transfer takes you directly from the Malpensa arrivals hall to your Como hotel with no station change, which matters more here than on many routes given the train's need for a connection.",
            "For pricing and booking, see our dedicated Milan Malpensa to Como taxi transfer page.",
        ],
        routePageSlug: 'milan-malpensa-to-como-taxi',
        routePageLabel: 'Milan Malpensa to Como Taxi Transfer',

        popularStops: [],

        travelTimeFactors: [
            'Traffic around Malpensa and on the approach into Como.',
            'For train travel, the connection time at the changeover station.',
            'Which part of the lake you\'re ultimately headed to — this page covers Como town specifically.',
        ],

        bestWay: [
            "For a direct arrival with luggage, driving or a private transfer is generally more convenient than the train on this route, since the train requires a change and the road route is short and fairly direct.",
        ],

        faqs: [
            { q: 'How far is Como from Milan Malpensa Airport?', a: "About 35 km in a straight line, or roughly 52 km by road — a drive of 42 to 60 minutes." },
            { q: 'Is Malpensa closer to Lake Como than central Milan?', a: "Yes — Malpensa sits northwest of Milan, already on the way to the lake, so this route is often quicker than travelling from the city centre." },
            { q: 'Is the train a good option from Malpensa to Como?', a: "It's possible but requires at least one change, with journeys taking anywhere from about 1 hour 15 minutes to close to 2 hours depending on the connection — driving is generally more direct." },
            { q: 'Can I reach Bellagio or Varenna directly from Malpensa?', a: "This page covers the Malpensa-to-Como leg; towns further up the lake such as Bellagio or Varenna take meaningfully longer and are worth checking separately." },
            { q: 'Is a private transfer worth it for this route?', a: "For a direct arrival with luggage, yes — it avoids the train's required connection and goes straight to your hotel." },
        ],
    },
    {
        slug: 'milan-malpensa-to-stresa-distance',
        itSlug: 'distanza-dallaeroporto-di-malpensa-a-stresa',
        origin: 'Milan Malpensa Airport',
        dest: 'Stresa',
        seoTitle: 'Milan Malpensa to Stresa Distance & Travel Time',
        metaDescription: 'How far is Stresa on Lake Maggiore from Milan Malpensa Airport? Driving distance and typical travel time for this direct airport-to-lake route.',
        h1: 'Milan Malpensa to Stresa Distance',
        heroImage: '/images/Lake Como.webp',

        straightLineDistance: 'approx. 30–35 km (about 19–22 miles)',
        straightLineNote: 'Sources give a range for the road distance too (roughly 45–55 km) — Stresa sits close enough to Malpensa that small differences in the exact start and end point noticeably affect the figure.',
        drivingDistance: 'approx. 50–55 km (about 31–34 miles)',
        drivingDuration: '44–60 minutes',
        trainDuration: 'Limited direct options — check current timetables; driving is the more established route',

        intro: [
            "Milan Malpensa Airport to Stresa, on Lake Maggiore, is one of the shortest and most direct airport-to-lake transfers on this site — around 50–55 km, mostly motorway. Stresa is the main gateway to the Borromean Islands, making this a popular route for lake-bound arrivals.",
            "This page sets out the driving distance and time, since that's the practical option most travellers use for this specific route.",
        ],

        centreVsDoorToDoor: [
            "The figures above are to central Stresa. Since Stresa itself is a compact lakefront town, the difference between the town-centre figure and a specific hotel address is generally small.",
        ],

        byCar: [
            "Driving from Malpensa to Stresa covers about 50–55 km via the A26 motorway toward Gravellona Toce, taking the Carpugnino exit for Stresa, and typically takes 44 to 60 minutes depending on traffic.",
        ],
        byCarRoad: 'the A26 motorway',

        byTrain: [
            "Rail options between Malpensa and Stresa are limited and often involve a change; driving or a private transfer is the more straightforward and commonly used route for this specific journey. If considering the train, check current timetables directly, since service patterns on this connection are less frequent than on major intercity lines.",
        ],

        byPrivateTransfer: [
            "A private transfer takes you directly from the Malpensa arrivals hall to your Stresa hotel or the lakefront, with flight monitoring so early or delayed landings don't disrupt the pickup.",
            "For pricing and booking, see our dedicated Milan Malpensa to Stresa taxi transfer page.",
        ],
        routePageSlug: 'milan-malpensa-to-stresa-taxi',
        routePageLabel: 'Milan Malpensa to Stresa Taxi Transfer',

        popularStops: [],

        travelTimeFactors: [
            'Traffic around Malpensa and on the A26.',
            'Weather conditions, which can affect the motorway approach in the wider lakes region.',
            'Your exact Stresa destination, if not the town centre itself.',
        ],

        bestWay: [
            "Given the short, direct motorway distance and the limited rail alternative, most travellers use driving or a private transfer for this route. A private transfer adds flight monitoring and door-to-door convenience without you needing to navigate the drive yourself after a flight.",
        ],

        faqs: [
            { q: 'How far is Stresa from Milan Malpensa Airport?', a: "About 30–35 km in a straight line, or roughly 50–55 km by road — a drive of 44 to 60 minutes via the A26 motorway." },
            { q: 'Why is Stresa a popular arrival point?', a: "Stresa is the main gateway to the Borromean Islands on Lake Maggiore, and its short distance from Malpensa makes it one of the easiest lakes to reach directly from the airport." },
            { q: 'Is there a direct train from Malpensa to Stresa?', a: "Rail options are limited and often require a change; driving or a private transfer is the more established route for this specific journey." },
            { q: 'How long does the drive really take?', a: "Typically 44 to 60 minutes under normal traffic via the A26 motorway toward Gravellona Toce." },
            { q: 'Is a private transfer a good option for this route?', a: "Yes, particularly for a direct arrival — it includes flight monitoring, so timing adjusts automatically if your flight is early or delayed." },
        ],
    },
];

export function getAllDistancePages(): DistancePage[] {
    return distancePages;
}

export function findDistancePage(slug: string): DistancePage | null {
    return distancePages.find((d) => d.slug === slug) || null;
}
