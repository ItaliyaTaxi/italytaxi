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

    popularStops: DistanceStop[];

    travelTimeFactors: string[];

    bestWay: string[];

    faqs: DistanceFaq[];
}

export const distancePages: DistancePage[] = [
    {
        slug: 'florence-to-pisa-distance',
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
];

export function getAllDistancePages(): DistancePage[] {
    return distancePages;
}

export function findDistancePage(slug: string): DistancePage | null {
    return distancePages.find((d) => d.slug === slug) || null;
}
