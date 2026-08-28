// Data for the "rich" distance-page design variant — a visually distinct,
// map-driven route-guide format used ONLY for this batch of 5 Tuscany/Lazio
// routes. It intentionally does not reuse DistancePage's schema or template
// (DistancePageContent.tsx / distance-pages-data.ts are untouched), so
// existing distance pages keep rendering exactly as before.
//
// Route geometry and distances come from route-geometry.ts, which documents
// its own sourcing (OSRM real road-network routing, not invented). Every
// other factual claim here (tolls, ZTL rules, train/bus times, road names)
// was independently researched per route — see the implementation report
// for sources; nothing here is templated by swapping place names.

import {
    GEOM_ROME_SIENA, GEOM_FLORENCE_BOLOGNA, GEOM_FLORENCE_LUCCA, GEOM_FLORENCE_SANGIMIGNANO, GEOM_FLORENCE_MONTEPULCIANO,
    COORD_ROME, COORD_SIENA, COORD_FLORENCE, COORD_BOLOGNA, COORD_LUCCA, COORD_SANGIMIGNANO, COORD_MONTEPULCIANO,
} from './route-geometry';

export type JourneyType = 'intercity' | 'city-to-city' | 'countryside' | 'hilltown';

export interface RichSnapshotStat { label: string; value: string; }
export interface RichJourneyStep { label: string; description: string; }
export interface RichHighlight { title: string; description: string; }
export interface RichTransportOption { mode: string; time: string; note: string; }
export interface RichPlanningTip { title: string; description: string; }
export interface RichFaq { q: string; a: string; }
export interface RichRelatedLink { href: string; label: string; }

export interface RichDistancePage {
    slug: string;
    itSlug?: string; // slug of this page's Italian twin at /it/distance/{itSlug} — drives hreflang, mirrors DistancePage.itSlug
    origin: string;
    dest: string;
    journeyType: JourneyType;
    journeyTypeLabel: string; // small badge text shown in the hero
    seoTitle: string;
    metaDescription: string;
    h1: string;
    heroSubtitle: string;
    map: {
        origin: { name: string; lat: number; lon: number };
        destination: { name: string; lat: number; lon: number };
        geometry: [number, number][];
    };
    drivingDistanceKm: string;
    drivingDurationRange: string;
    snapshot: RichSnapshotStat[];
    howFarIsIt: string[];
    journeySteps: RichJourneyStep[];
    journeyTimeNote: string[];
    understandingJourney: string[];
    highlights: RichHighlight[];
    transportOptions: RichTransportOption[];
    transportNote: string;
    planningTips: RichPlanningTip[];
    ctaHeading: string;
    ctaText: string;
    ctaAnchor: string;
    routePageSlug: string;
    faqs: RichFaq[];
    relatedLinks: RichRelatedLink[];
}

export const richDistancePages: RichDistancePage[] = [
    // ═══════════════════════════ ROME → SIENA ═══════════════════════════
    {
        slug: 'rome-to-siena-distance',
        itSlug: 'distanza-da-roma-a-siena',
        origin: 'Rome',
        dest: 'Siena',
        journeyType: 'intercity',
        journeyTypeLabel: 'Lazio → Tuscany · Long-distance road journey',
        seoTitle: 'Rome to Siena Distance – How Far & How Long by Road',
        metaDescription: 'How far is Siena from Rome? Real road distance, driving time via the A1 and Siena–Bettolle superstrada, and a mapped route comparing car, bus and train.',
        h1: 'Rome to Siena Distance',
        heroSubtitle: 'The longest of Tuscany\'s classic road journeys from Rome — out of Lazio, across the Val di Chiana, and up into the hills of Siena province.',
        map: {
            origin: { name: 'Rome', lat: COORD_ROME.lat, lon: COORD_ROME.lon },
            destination: { name: 'Siena', lat: COORD_SIENA.lat, lon: COORD_SIENA.lon },
            geometry: GEOM_ROME_SIENA,
        },
        drivingDistanceKm: 'approx. 232–235 km',
        drivingDurationRange: '2 hours 40 minutes – 3 hours 15 minutes',
        snapshot: [
            { label: 'Region change', value: 'Lazio → Tuscany' },
            { label: 'Journey type', value: 'Long intercity drive' },
            { label: 'Main road', value: 'A1 then Siena–Bettolle superstrada' },
            { label: 'Destination centre', value: 'Fully pedestrian ZTL' },
        ],
        howFarIsIt: [
            "By road, Rome and Siena are roughly 232–235 km apart — the two figures most mapping tools converge on once you account for exactly which point in each city is used as the reference. This is meaningfully more than the straight-line distance between them, because the direct route isn't a straight line at all: it runs north on the A1 well past the most direct bearing to Siena before turning west, since there is no motorway that cuts diagonally across this stretch of central Italy.",
            "The gap between a generic online distance estimate and your actual trip usually comes down to two things: which Rome address you're starting from (central Rome versus, say, an airport or a hotel near the Termini side of the city changes things by several kilometres) and where in Siena you're actually headed — since cars can't reach Piazza del Campo itself, your effective door-to-door distance includes the final stretch on foot from wherever you park.",
        ],
        journeySteps: [
            { label: 'Leaving Rome', description: 'The route joins the A1 Autostrada del Sole heading north, the same motorway used for Florence-bound traffic, so the first stretch can be busy at peak times leaving the city.' },
            { label: 'The Val di Chiana', description: 'After roughly two hours, the A1 crosses into the broad agricultural Val di Chiana — flatter, more open countryside than the hills further north — before the road toward Siena splits off.' },
            { label: 'Valdichiana exit', description: 'You leave the A1 at the Valdichiana interchange and pick up the Siena–Bettolle superstrada (part of the E78/RA3 corridor), a fast dual-carriageway road that carries the rest of the journey west.' },
            { label: 'Arriving at Siena', description: 'The superstrada approaches Siena from the south-east; from here the final stretch is on ordinary city roads to one of the car parks just outside the historic walls.' },
        ],
        journeyTimeNote: [
            "The driving-time range above reflects real variability, not a single guaranteed figure. The A1 through this stretch of Lazio and Tuscany carries a significant volume of long-distance traffic, so weekday rush hours around Rome and Sunday-evening return traffic in the other direction are the times most likely to add real delay. Roadworks are a normal, if unpredictable, feature of a motorway this heavily used, and summer weekends bring more holiday traffic than a midweek trip out of season.",
        ],
        understandingJourney: [
            "This is the longest of the five routes covered on this page, and it reads that way on the road: for close to two hours, the drive is straightforward motorway travel through Lazio and into southern Tuscany, with the landscape changing gradually from Rome's outskirts to the rolling farmland of the Val di Chiana rather than through any single dramatic transition.",
            "The character of the trip changes once you leave the A1. The Siena–Bettolle superstrada is a genuinely different kind of road — a free, fast dual carriageway (not a motorway with tolls) that was built specifically to connect Siena to the national network without routing traffic through Florence, and it carries you into hillier, more classically Tuscan terrain for the last stretch before the city.",
            "Siena itself sits on three ridges, and its medieval street plan was never built for cars. However you arrive, the practical reality is the same: you'll park at one of the multi-storey or gate-side car parks just outside the walls — Porta Ovile, Porta Laterina, or the underground Il Campo garage are the most commonly used — and walk the final few minutes into the historic centre. Piazza del Campo, Siena's famous shell-shaped main square, is not reachable by car at all.",
        ],
        highlights: [
            { title: 'A genuine region change', description: 'Unlike a same-region hop, this drive crosses from Lazio into Tuscany, with the character of the countryside shifting noticeably around the Val di Chiana.' },
            { title: 'Two distinct road types', description: 'Motorway for most of the distance, then a free, non-tolled superstrada for the final approach — a different driving experience from a single unbroken motorway run.' },
            { title: 'A car-free medieval core', description: 'Siena\'s historic centre, including Piazza del Campo, has no vehicle access at all — the drive necessarily ends with a short walk, whichever car park you use.' },
        ],
        transportOptions: [
            { mode: 'Private transfer / taxi', time: '2h40–3h15', note: 'Door-to-door, no need to find parking near the walls or manage your own navigation on an unfamiliar motorway.' },
            { mode: 'Direct bus (FlixBus)', time: 'approx. 2h30–3h', note: 'Runs from Rome Tiburtina directly to Siena (Piazza Gramsci), inside the walls — genuinely competitive with driving on this route.' },
            { mode: 'Train', time: 'approx. 3–4h', note: 'Requires a change at Chiusi or Grosseto, and Siena\'s own station sits below the old town — often slower overall than the direct bus on this specific route.' },
            { mode: 'Self-driving', time: '2h40–3h15', note: 'Straightforward on the motorway, but factor in the walk from parking to the historic centre once you arrive.' },
        ],
        transportNote: "Worth noting: on this particular route, the direct bus is often quicker door-to-town than the train, since the train involves a change and Siena's rail line approaches from outside the old walls — the opposite of what's true on faster, more direct rail corridors elsewhere in Tuscany.",
        planningTips: [
            { title: 'Confirm your Rome pickup point', description: 'A hotel near Termini and one near Fiumicino Airport add meaningfully different amounts of time to a 230+ km trip — worth confirming before you fix a departure time.' },
            { title: 'Plan for the final walk into Siena', description: 'Wherever you\'re dropped or park, Piazza del Campo itself is a short walk away on foot — build a few extra minutes in if you have luggage.' },
            { title: 'Avoid peak Rome-exit traffic if you can', description: 'Leaving Rome outside the weekday morning rush shortens the least predictable part of an otherwise steady motorway journey.' },
        ],
        ctaHeading: 'Planning this journey?',
        ctaText: 'If you\'d rather skip the motorway navigation and the walk from parking, our Rome to Siena private transfer covers the whole route door-to-door.',
        ctaAnchor: 'See Rome to Siena taxi transfer options',
        routePageSlug: 'rome-to-siena-taxi',
        faqs: [
            { q: 'How far is Siena from Rome by road?', a: 'Approximately 232–235 km by road, via the A1 motorway and the Siena–Bettolle superstrada — noticeably more than the straight-line distance because no direct road connects the two cities.' },
            { q: 'How long does it take to drive from Rome to Siena?', a: 'Typically 2 hours 40 minutes to 3 hours 15 minutes under normal conditions, with the A1 stretch accounting for most of that time before the faster, tolled-free superstrada into Siena.' },
            { q: 'Can the total distance vary depending on the pickup location in Rome?', a: 'Yes — a pickup near Fiumicino Airport or on the far side of Rome from the A1 can add a meaningful number of kilometres compared with a central starting point, since the whole first stretch of the journey is within greater Rome itself.' },
            { q: 'Is a private transfer useful for travelling with luggage?', a: 'Yes, particularly on this route — Siena\'s historic centre has no vehicle access, so a private transfer that knows the car parks closest to your accommodation saves working that out yourself on arrival.' },
            { q: 'Is the train or the bus faster from Rome to Siena?', a: "On this specific route, the direct bus is often faster door-to-town than the train, since the train requires a change at Chiusi or Grosseto and Siena's station is outside the old walls." },
        ],
        relatedLinks: [
            { href: '/route/rome-to-siena-taxi', label: 'Rome to Siena Taxi Transfer' },
            { href: '/distance/rome-to-florence-distance', label: 'Rome to Florence Distance' },
            { href: '/distance/florence-to-siena-distance', label: 'Florence to Siena Distance' },
        ],
    },

    // ═══════════════════════════ FLORENCE → BOLOGNA ═══════════════════════════
    {
        slug: 'florence-to-bologna-distance',
        itSlug: 'distanza-da-firenze-a-bologna',
        origin: 'Florence',
        dest: 'Bologna',
        journeyType: 'city-to-city',
        journeyTypeLabel: 'Major city-to-city route · Apennine crossing',
        seoTitle: 'Florence to Bologna Distance – Road & Rail Compared',
        metaDescription: 'How far is Bologna from Florence? Road distance and drive time across the Apennines on the A1, mapped and compared against the famously fast train link.',
        h1: 'Florence to Bologna Distance',
        heroSubtitle: 'Two major cities separated by the Apennine mountains — a route where the fastest option isn\'t the car.',
        map: {
            origin: { name: 'Florence', lat: COORD_FLORENCE.lat, lon: COORD_FLORENCE.lon },
            destination: { name: 'Bologna', lat: COORD_BOLOGNA.lat, lon: COORD_BOLOGNA.lon },
            geometry: GEOM_FLORENCE_BOLOGNA,
        },
        drivingDistanceKm: 'approx. 102–115 km',
        drivingDurationRange: '1 hour 25 minutes – 1 hour 45 minutes',
        snapshot: [
            { label: 'Journey type', value: 'City-to-city (both major)' },
            { label: 'Main road', value: 'A1 Autostrada del Sole' },
            { label: 'Terrain', value: 'Apennine mountain crossing' },
            { label: 'Fastest option', value: 'Train — not the car' },
        ],
        howFarIsIt: [
            "Sources for this route vary more than most: driving-distance figures range from around 102 km up to 115 km depending on the tool and the exact endpoints used, largely because \"Florence\" and \"Bologna\" both cover a reasonable spread of possible city-centre reference points, and because the A1's exact alignment through the mountains means small routing differences compound over the distance.",
            "The straight-line distance between the two is somewhat shorter still, since the A1 doesn't run in a straight line at all — it bends to follow the Apennine terrain, threading through a long sequence of tunnels and viaducts rather than cutting directly north. This is one route where the difference between \"as the crow flies\" and \"the road distance\" is genuinely explained by the mountains in between, not by an indirect city approach.",
        ],
        journeySteps: [
            { label: 'Leaving Florence', description: 'The A1 picks up on the northern edge of the city and climbs almost immediately into the foothills of the Apennines.' },
            { label: 'The mountain crossing', description: 'This is the defining stretch of the route: the motorway alternates between tunnels and elevated viaducts through the Apennines, including the Firenze-Sud tunnel, one of the longest on the whole A1.' },
            { label: 'Descent toward the plain', description: 'North of the mountains the road drops onto the flat Po Valley approach to Bologna, where the terrain — and the driving — becomes noticeably easier.' },
            { label: 'Arriving in Bologna', description: 'The A1 meets Bologna\'s ring road system on the city\'s southern side, with the final stretch on ordinary urban roads into the centre.' },
        ],
        journeyTimeNote: [
            "Because a large part of this route runs through mountain tunnels and over viaducts, weather and traffic incidents here can have an outsized effect on journey time compared with an equivalent distance on flat, open motorway — a closure or slowdown in the mountain section has nowhere to reroute around. Regular commuter and freight traffic between two major cities also means weekday peak hours are genuinely busier than an off-peak midday drive.",
        ],
        understandingJourney: [
            "This route reads differently from the others on this page because both ends are major cities, not a city and a small Tuscan town — Florence and Bologna are regional capitals with their own airports, universities and transport hubs, and the road connecting them is correspondingly a serious piece of infrastructure rather than a quiet countryside road.",
            "The Apennine crossing is the story of this drive. Building a motorway through this stretch of mountains required an extraordinary amount of tunnelling and bridge engineering, and the driving experience reflects that: long tunnels, high viaducts, and a road that never really runs flat until it reaches the plain north of the mountains near Bologna.",
            "What makes this route genuinely unusual, though, is the transport comparison. The high-speed rail line between Florence and Bologna runs through the same mountains via a dedicated tunnel system, and the fastest trains cover the distance in around 35 minutes — dramatically faster than the roughly 90-minute drive. For a route between two well-connected major cities, the train isn't just an alternative to driving here, it's the clearly quicker option for anyone not specifically needing a vehicle at the other end.",
        ],
        highlights: [
            { title: 'A serious mountain crossing', description: 'The A1 through this stretch is one of the more engineering-intensive sections of Italian motorway, with an extended sequence of tunnels and viaducts through the Apennines.' },
            { title: 'Two well-connected major cities', description: 'Unlike a countryside route, both ends have full city infrastructure — this is a route between transport hubs, not a hub-to-village trip.' },
            { title: 'A genuinely faster rail alternative', description: 'The high-speed train\'s roughly 35-minute journey time is unusually decisive for this kind of comparison — most routes on this site don\'t have a train option that beats driving by this much.' },
        ],
        transportOptions: [
            { mode: 'High-speed train', time: 'approx. 35 minutes', note: 'The standout option on this route — no stops, running through a dedicated Apennine rail tunnel.' },
            { mode: 'Driving / private transfer', time: '1h25–1h45', note: 'Sensible if you need a vehicle in Bologna, or are travelling with luggage and want a door-to-door ride rather than a city-centre station arrival.' },
            { mode: 'Regional train', time: 'Longer than the high-speed service', note: 'Stops more frequently; the high-speed service is the faster rail option specifically.' },
        ],
        transportNote: "Given how much faster the train is here compared with driving, the practical choice on this route usually comes down to whether you actually need a car at the Bologna end — for a straightforward city-to-city trip, the train is difficult to beat on time.",
        planningTips: [
            { title: 'Weigh up whether you need a car in Bologna', description: 'Given the train\'s speed advantage, it\'s worth deciding early whether having a vehicle at your Bologna destination is actually necessary for your plans.' },
            { title: 'Check for weekday peak traffic', description: 'As a route between two major working cities, rush-hour traffic at both ends is a bigger factor here than on a quieter countryside route.' },
            { title: 'Allow extra margin around the mountain section', description: 'Because a large stretch runs through tunnels with limited overtaking or rerouting options, build in a small time buffer if your onward plans are time-sensitive.' },
        ],
        ctaHeading: 'Need a car for this leg of your trip?',
        ctaText: 'When a vehicle at the Bologna end matters more than raw speed, our Florence to Bologna private transfer handles the drive door-to-door.',
        ctaAnchor: 'View the Florence to Bologna transfer',
        routePageSlug: 'florence-to-bologna-taxi',
        faqs: [
            { q: 'How far is Bologna from Florence?', a: 'By road, roughly 102–115 km depending on the exact route and reference points used — the range reflects genuine variation between mapping tools on this particular pair of cities.' },
            { q: 'How long does it take by car?', a: 'Typically 1 hour 25 minutes to 1 hour 45 minutes, largely determined by the Apennine mountain crossing, which the A1 navigates via an extended series of tunnels and viaducts.' },
            { q: 'Is driving faster than the train?', a: "No — this is one route where the train is clearly faster. The high-speed service covers the distance in around 35 minutes through a dedicated mountain tunnel, well under half the typical driving time." },
            { q: 'Does traffic affect the journey time?', a: 'Yes, particularly at weekday peak hours around both cities, and within the mountain tunnel section itself, where there\'s limited ability to reroute around any slowdown or incident.' },
            { q: 'Why is the driving distance range so wide for this route?', a: "Because \"Florence\" and \"Bologna\" each cover a range of plausible city-centre reference points, and small differences compound over a route that runs through mountainous terrain rather than a direct, flat road." },
        ],
        relatedLinks: [
            { href: '/route/florence-to-bologna-taxi', label: 'Florence to Bologna Taxi Transfer' },
            { href: '/distance/florence-to-pisa-distance', label: 'Florence to Pisa Distance' },
            { href: '/distance/pisa-airport-to-florence-distance', label: 'Pisa Airport to Florence Distance' },
        ],
    },

    // ═══════════════════════════ FLORENCE → LUCCA ═══════════════════════════
    {
        slug: 'florence-to-lucca-distance',
        itSlug: 'distanza-da-firenze-a-lucca',
        origin: 'Florence',
        dest: 'Lucca',
        journeyType: 'countryside',
        journeyTypeLabel: 'Tuscany west · Walled-city arrival',
        seoTitle: 'Florence to Lucca Distance – Road Distance & ZTL Access',
        metaDescription: 'How far is Lucca from Florence? Real road distance via the A11, drive time, and what to know about Lucca\'s 24/7 ZTL before arriving by car.',
        h1: 'Florence to Lucca Distance',
        heroSubtitle: 'West across Tuscany to one of the region\'s best-preserved walled cities — where the drive ends at the ramparts, not the door.',
        map: {
            origin: { name: 'Florence', lat: COORD_FLORENCE.lat, lon: COORD_FLORENCE.lon },
            destination: { name: 'Lucca', lat: COORD_LUCCA.lat, lon: COORD_LUCCA.lon },
            geometry: GEOM_FLORENCE_LUCCA,
        },
        drivingDistanceKm: 'approx. 75–80 km',
        drivingDurationRange: '55 minutes – 1 hour 15 minutes',
        snapshot: [
            { label: 'Journey type', value: 'Tuscany west, direct motorway' },
            { label: 'Main road', value: 'A11 Firenze–Mare' },
            { label: 'Destination', value: 'Walled Renaissance city' },
            { label: 'Access note', value: '24/7 ZTL inside the walls' },
        ],
        howFarIsIt: [
            "The road distance from Florence to Lucca runs approximately 75–80 km, almost entirely on the A11 motorway — a more direct relationship between straight-line and road distance than several of the other routes on this page, since the A11 corridor runs fairly efficiently west without major detours.",
            "The main source of variation is less about the road itself and more about where in each city you start and finish. A city-centre Florence departure and a Lucca destination just outside the walls will sit toward the lower end of that range; starting from Florence's outskirts or heading to a specific address that requires navigating around the walls once you arrive can add a few kilometres and a few minutes either way.",
        ],
        journeySteps: [
            { label: 'Leaving Florence', description: 'The A11 (Autostrada Firenze–Mare, \"Florence to the sea\") begins on the city\'s western edge and heads directly toward the coast.' },
            { label: 'Crossing western Tuscany', description: 'The motorway runs through the flatter Arno-valley landscape west of Florence, passing near Prato, Pistoia and Montecatini before the terrain opens out toward Lucca.' },
            { label: 'Approaching Lucca', description: 'The motorway exit brings you onto ordinary roads for the final approach, with Lucca\'s distinctive Renaissance walls visible well before you reach them.' },
            { label: 'Arriving at the walls', description: 'Vehicle access ends at the walls themselves — the historic centre inside is under a 24-hour limited traffic zone, so the drive concludes at a car park just outside.' },
        ],
        journeyTimeNote: [
            "This is a shorter, more predictable drive than several of the other routes here, but it's not immune to delay — traffic around Florence's own ring roads at the start of the journey, and around Lucca's approach roads during peak tourist season, are the two points most likely to add time to an otherwise straightforward motorway run.",
        ],
        understandingJourney: [
            "Where the Rome–Siena route is defined by its length and the Florence–Bologna route by its mountain crossing, this journey is defined by what happens at the very end of it: Lucca is one of the few Italian cities to have kept its complete circuit of Renaissance walls intact, and the city has built its modern traffic rules directly around that fact.",
            "The drive itself, by contrast, is straightforward — almost the entire distance is covered on a single motorway, the A11, running west from Florence through the flatter landscape of the Arno valley rather than climbing into hills the way the routes toward Siena or Montepulciano do.",
            "The genuinely useful thing to know before you arrive is Lucca's access system. The historic centre inside the walls operates a Zona a Traffico Limitato (ZTL) around the clock, enforced by number-plate cameras at every gate — there's no exemption sticker system, so if your accommodation is inside the walls, the hotel needs to register your plate in advance. For most visitors arriving without that arrangement, the walls themselves become the natural end point of the drive, with the compact, largely flat centre easily explored on foot or, as many locals do, by bicycle along the top of the ramparts.",
        ],
        highlights: [
            { title: 'A direct, single-motorway drive', description: 'Almost the whole route runs on the A11, without the mountain crossing or the multi-road changes that some of the other journeys on this page involve.' },
            { title: 'A complete circuit of city walls', description: 'Lucca\'s Renaissance-era fortifications survive intact and fully encircle the old town — a rare thing among Italian cities of this size.' },
            { title: 'A verified round-the-clock access zone', description: 'The ZTL here runs 24 hours a day with camera enforcement at every gate, not just during daytime hours as in some other historic centres.' },
        ],
        transportOptions: [
            { mode: 'Private transfer / taxi', time: '55min–1h15', note: 'Drops you at the walls without you needing to research parking or the ZTL system yourself.' },
            { mode: 'Direct train', time: 'Genuinely competitive', note: 'Florence and Lucca sit on the same regional rail line with direct services — a realistic alternative to driving on this particular route.' },
            { mode: 'Self-driving', time: '55min–1h15', note: 'Simple on the A11, but you\'ll need to park outside the walls regardless — check whether your hotel is inside the ZTL before you set off.' },
        ],
        transportNote: "Unlike some of the more countryside-oriented routes on this page, Lucca is directly on a regional rail line from Florence, so the train is a genuinely practical, direct alternative here — not just a theoretical option requiring several changes.",
        planningTips: [
            { title: 'Check whether your hotel is inside the walls', description: 'If it is, ask in advance about registering your number plate for the ZTL — it\'s usually a quick process, but it needs to happen before you drive through a gate, not after.' },
            { title: 'Plan to park and walk', description: 'Whichever way you arrive, exploring Lucca\'s centre happens on foot or by bike — the walled town itself is not really a driving destination once you\'re inside.' },
            { title: 'Day-trip or overnight both work well', description: 'At under an hour and a half from Florence, this is an easy day trip, but Lucca\'s relaxed pace also makes it a worthwhile overnight stop if your itinerary allows.' },
        ],
        ctaHeading: 'Want to skip the ZTL research?',
        ctaText: 'A private transfer to Lucca handles the drop-off outside the walls for you — see our Florence to Lucca taxi transfer for details.',
        ctaAnchor: 'Explore the Florence to Lucca transfer',
        routePageSlug: 'florence-to-lucca-taxi',
        faqs: [
            { q: 'How far is Lucca from Florence?', a: 'Approximately 75–80 km by road, almost entirely along the A11 motorway heading west from Florence toward the coast.' },
            { q: 'How long does the drive take?', a: 'Typically 55 minutes to 1 hour 15 minutes under normal traffic conditions, making this one of the more predictable routes on this page.' },
            { q: 'What is the difference between driving and train travel here?', a: 'Both are genuinely practical — Lucca sits directly on a regional rail line from Florence, so unlike some countryside routes, the train is a real alternative to driving rather than a multi-change fallback.' },
            { q: 'Can I drive into the historic centre of Lucca?', a: "No — the area inside Lucca's Renaissance walls operates a 24-hour limited traffic zone (ZTL) enforced by number-plate cameras at every gate. Visitors without a registered plate park outside the walls and continue on foot." },
            { q: 'Is Lucca a good day trip from Florence?', a: 'Yes — at under an hour and a half away with a straightforward, mostly single-motorway drive, it\'s one of the more convenient Tuscan day trips from Florence.' },
        ],
        relatedLinks: [
            { href: '/route/florence-to-lucca-taxi', label: 'Florence to Lucca Taxi Transfer' },
            { href: '/distance/florence-to-pisa-distance', label: 'Florence to Pisa Distance' },
            { href: '/distance/pisa-airport-to-lucca-distance', label: 'Pisa Airport to Lucca Distance' },
        ],
    },

    // ═══════════════════════════ FLORENCE → SAN GIMIGNANO ═══════════════════════════
    {
        slug: 'florence-to-san-gimignano-distance',
        itSlug: 'distanza-da-firenze-a-san-gimignano',
        origin: 'Florence',
        dest: 'San Gimignano',
        journeyType: 'hilltown',
        journeyTypeLabel: 'Tuscan countryside · Medieval hill town',
        seoTitle: 'Florence to San Gimignano Distance – Km & Drive Time',
        metaDescription: 'How far is San Gimignano from Florence? Road distance via the Firenze–Siena superstrada and Poggibonsi, real drive time, and day-trip planning notes.',
        h1: 'Florence to San Gimignano Distance',
        heroSubtitle: 'A shorter hop into the Tuscan countryside than the region\'s bigger cities — ending at a hilltop town of medieval towers.',
        map: {
            origin: { name: 'Florence', lat: COORD_FLORENCE.lat, lon: COORD_FLORENCE.lon },
            destination: { name: 'San Gimignano', lat: COORD_SANGIMIGNANO.lat, lon: COORD_SANGIMIGNANO.lon },
            geometry: GEOM_FLORENCE_SANGIMIGNANO,
        },
        drivingDistanceKm: 'approx. 55–60 km',
        drivingDurationRange: '53 minutes – 1 hour 10 minutes',
        snapshot: [
            { label: 'Journey type', value: 'Tuscany countryside, shorter hop' },
            { label: 'Main road', value: 'Firenze–Siena superstrada + local roads' },
            { label: 'Destination', value: 'Hilltop medieval town' },
            { label: 'Suits', value: 'Half-day or full-day trip' },
        ],
        howFarIsIt: [
            "This is one of the shorter journeys on this page — around 55–60 km by road, roughly two-thirds the distance of the Florence–Bologna route despite both starting from the same city. The relatively short, direct road distance is one of the reasons San Gimignano works well as a half-day trip rather than requiring a full day the way some of Tuscany's more distant hill towns do.",
            "The main variable affecting your actual distance is the final stretch: after leaving the fast superstrada near Poggibonsi, the route continues on secondary roads into San Gimignano itself, and exactly where in town you're headed — the walls, a specific parking area, or a hotel just outside — makes a modest difference to the total.",
        ],
        journeySteps: [
            { label: 'Leaving Florence', description: 'The route starts briefly on the A1 before switching onto the Firenze–Siena superstrada (the same fast road used for the Rome–Siena route\'s final stretch), heading south-west.' },
            { label: 'Toward Poggibonsi', description: 'The superstrada covers the bulk of the distance efficiently, running through open Tuscan countryside rather than dense development.' },
            { label: 'Exiting at Poggibonsi Nord', description: 'Leaving the superstrada here, the route continues on secondary roads for the final stretch — noticeably slower-paced than the road so far, but also where the countryside scenery becomes more distinctly Tuscan.' },
            { label: 'Arriving at San Gimignano', description: 'The town\'s famous towers become visible from some distance across the surrounding hills before the road reaches the parking areas just outside the walls.' },
        ],
        journeyTimeNote: [
            "Because a meaningful part of this route runs on secondary roads rather than a motorway throughout, the driving time is somewhat more sensitive to the time of day and season than a route that's entirely motorway-based — the approach roads into San Gimignano can be noticeably busier in peak summer, when the town is a major day-trip destination.",
        ],
        understandingJourney: [
            "San Gimignano is the shortest and most distinctly \"countryside\" of the Tuscan routes covered on this page. Unlike the drive to Bologna, there's no mountain crossing, and unlike the longer haul to Montepulciano, the whole trip is comfortably achievable in under an hour and a quarter — this is a route built for a focused day trip, not a longer journey with an overnight stop in mind.",
            "The road itself changes character partway through. The first stretch, on the Firenze–Siena superstrada, is fast and efficient — the same road, in fact, that carries part of the Rome–Siena route on this site. But San Gimignano isn't on that main corridor; you leave it at Poggibonsi and finish the journey on smaller roads through the hills, which is also where the trip starts to feel more like a genuine countryside drive.",
            "What makes San Gimignano itself distinctive is its skyline: a cluster of medieval stone towers, originally built by rival noble families as a display of wealth and status, that still dominates the town from a distance. Like most Tuscan hill towns, the historic centre operates a limited traffic zone with dedicated visitor parking just outside the walls, and the whole town is compact enough to explore entirely on foot once you arrive.",
        ],
        highlights: [
            { title: 'The shortest Tuscan hop on this page', description: 'At around 55–60 km, this is a meaningfully shorter drive than the routes to Bologna, Lucca or Montepulciano — well suited to a half-day visit.' },
            { title: 'A genuine road-character change', description: 'Fast superstrada for most of the distance, then a shift onto smaller countryside roads for the final approach — a different feel from a single unbroken motorway.' },
            { title: 'A skyline unlike anywhere else in Tuscany', description: 'San Gimignano\'s surviving medieval towers are visible from the approach roads well before you reach the town itself.' },
        ],
        transportOptions: [
            { mode: 'Private transfer / taxi', time: '53min–1h10', note: 'Direct door-to-parking-area service, useful since San Gimignano has no rail station of its own.' },
            { mode: 'Bus via Poggibonsi', time: 'approx. 2 hours', note: 'A genuine public-transport option, but with a change at Poggibonsi and a total journey time considerably longer than driving.' },
            { mode: 'Self-driving', time: '53min–1h10', note: 'Straightforward, though the final stretch on local roads means it\'s worth allowing a little extra time versus a pure motorway estimate.' },
        ],
        transportNote: "San Gimignano has no train station, so public transport here means a bus with a change at Poggibonsi — a workable option for a relaxed day, but one that takes roughly double the driving time.",
        planningTips: [
            { title: 'This suits a half-day as easily as a full day', description: 'Given the shorter distance, San Gimignano can be combined with another nearby stop, such as Siena or the Chianti wine region, in a single longer day out from Florence.' },
            { title: 'Expect the final stretch to be slower', description: 'The secondary roads after Poggibonsi are part of the charm, but they\'re not fast — factor this into any tight timing.' },
            { title: 'Summer crowds affect the approach as well as the town', description: 'San Gimignano is a major draw in peak season, and that can mean busier local roads and fuller car parks, not just a busier town centre.' },
        ],
        ctaHeading: 'Planning a day trip?',
        ctaText: 'Skip the Poggibonsi road change and go door-to-door with our Florence to San Gimignano private taxi transfer.',
        ctaAnchor: 'Check Florence to San Gimignano transfer options',
        routePageSlug: 'florence-to-san-gimignano-taxi',
        faqs: [
            { q: 'How far is San Gimignano from Florence?', a: 'Approximately 55–60 km by road — one of the shorter Tuscan routes on this site, via the Firenze–Siena superstrada and local roads through Poggibonsi.' },
            { q: 'How long does the road journey take?', a: 'Typically 53 minutes to 1 hour 10 minutes, with the final stretch after Poggibonsi on secondary roads rather than the faster superstrada.' },
            { q: 'Is San Gimignano suitable for a day trip from Florence?', a: 'Yes — at under an hour and a quarter away, it\'s comfortably manageable as a half-day or full-day trip, and its short distance makes it easy to combine with another nearby stop.' },
            { q: 'Is there a train to San Gimignano?', a: 'No — San Gimignano has no railway station. The public-transport option is a bus via Poggibonsi, taking roughly two hours in total, considerably longer than driving.' },
            { q: 'Can I drive into San Gimignano\'s historic centre?', a: 'No — like most Tuscan hill towns, the historic centre is a limited traffic zone with dedicated visitor parking just outside the walls; the town itself is explored on foot.' },
        ],
        relatedLinks: [
            { href: '/route/florence-to-san-gimignano-taxi', label: 'Florence to San Gimignano Taxi Transfer' },
            { href: '/distance/florence-to-siena-distance', label: 'Florence to Siena Distance' },
            { href: '/route/florence-to-siena-taxi', label: 'Florence to Siena Taxi Transfer' },
        ],
    },

    // ═══════════════════════════ FLORENCE → MONTEPULCIANO ═══════════════════════════
    {
        slug: 'florence-to-montepulciano-distance',
        itSlug: 'distanza-da-firenze-a-montepulciano',
        origin: 'Florence',
        dest: 'Montepulciano',
        journeyType: 'hilltown',
        journeyTypeLabel: 'Southern Tuscany · Val d\'Orcia countryside',
        seoTitle: 'Florence to Montepulciano Distance – Road Trip via Val d\'Orcia',
        metaDescription: 'How far is Montepulciano from Florence? Road distance, drive time through the Val d\'Orcia countryside, and what to know before arriving at this hill town.',
        h1: 'Florence to Montepulciano Distance',
        heroSubtitle: 'The longest of Florence\'s Tuscan countryside routes on this page — a journey that ends with a genuine climb into the hills.',
        map: {
            origin: { name: 'Florence', lat: COORD_FLORENCE.lat, lon: COORD_FLORENCE.lon },
            destination: { name: 'Montepulciano', lat: COORD_MONTEPULCIANO.lat, lon: COORD_MONTEPULCIANO.lon },
            geometry: GEOM_FLORENCE_MONTEPULCIANO,
        },
        drivingDistanceKm: 'approx. 110–115 km',
        drivingDurationRange: '1 hour 35 minutes – 2 hours 15 minutes',
        snapshot: [
            { label: 'Journey type', value: 'Southern Tuscany countryside' },
            { label: 'Route character', value: 'Val d\'Orcia landscape' },
            { label: 'Destination', value: 'Hill town, steep final approach' },
            { label: 'Suits', value: 'Full-day trip or overnight stay' },
        ],
        howFarIsIt: [
            "At around 110–115 km, this is the longest of the four Tuscan countryside routes covered on this page — noticeably further than San Gimignano or Lucca, and closer in distance to the Florence–Bologna route, though the character of the journey is entirely different.",
            "Because the final approach into Montepulciano involves local roads climbing into the hills rather than a single motorway exit, the exact distance depends more than usual on where within the town your destination actually is — the difference between the lower car parks and a specific point near Piazza Grande at the top of the hill is a genuine, if short, additional stretch.",
        ],
        journeySteps: [
            { label: 'Leaving Florence', description: 'The journey heads south, broadly in the direction of the Val d\'Orcia rather than following a single dedicated motorway the whole way.' },
            { label: 'Into the Val d\'Orcia', description: 'The route passes through this UNESCO-listed landscape of rolling hills, cypress-lined roads and farmhouses — widely considered one of the most scenic stretches of countryside driving in Tuscany.' },
            { label: 'Via San Quirico d\'Orcia', description: 'The route continues on the SP146, a well-known scenic road that also serves nearby Pienza before turning toward Montepulciano.' },
            { label: 'The climb to Montepulciano', description: 'The final approach is genuinely uphill — Montepulciano sits on a long ridge, and the last stretch into town involves a real climb rather than a flat arrival.' },
        ],
        journeyTimeNote: [
            "This route's driving time is shaped by more than traffic alone: a meaningful part of it runs on local and provincial roads through hill country rather than motorway, so the pace is naturally slower than a straight-line distance would suggest, and that's before accounting for typical variables like weekday traffic near Florence or seasonal congestion on the popular Val d'Orcia roads in summer.",
        ],
        understandingJourney: [
            "Of the four Tuscan countryside journeys on this page, this is both the longest and the one that most fully leaves the motorway network behind. Where the San Gimignano route uses a fast superstrada for most of its distance, the drive to Montepulciano spends a much larger share of the journey on the kind of roads the Val d'Orcia is actually famous for — narrower, slower, and lined with the cypress trees and rolling hills that appear in so many photographs of the Tuscan countryside.",
            "This isn't a route to rush. The SP146 through San Quirico d'Orcia toward Pienza and Montepulciano is a genuinely scenic road in its own right, not just a means of covering distance, and many travellers treat the drive itself as part of the destination rather than simply the way to get there.",
            "The arrival at Montepulciano is also distinct from the other hill towns on this page. The town sits along a narrow ridge at real elevation, and the final stretch into the historic centre is a noticeable climb — a longer, steeper approach on foot from the outer car parks than at San Gimignano, which sits on a comparatively gentler hill. As with the other historic centres covered here, vehicle access inside the walls is restricted to residents and permit holders, with dedicated visitor parking (P1 through P8) just outside.",
        ],
        highlights: [
            { title: 'The longest countryside route from Florence here', description: 'At 110–115 km, this covers meaningfully more ground than the other Tuscan hill-town routes on this page.' },
            { title: 'A drive through the Val d\'Orcia itself', description: 'A large share of the journey passes directly through this UNESCO World Heritage landscape, not just past its edge.' },
            { title: 'A genuine hilltop climb on arrival', description: 'Montepulciano\'s position on a long ridge means the final approach on foot is steeper and longer than at some other Tuscan hill towns.' },
        ],
        transportOptions: [
            { mode: 'Private transfer / taxi', time: '1h35–2h15', note: 'Particularly useful here given how much of the route runs on slower local roads rather than motorway — no need to navigate the Val d\'Orcia\'s country roads yourself.' },
            { mode: 'Self-driving', time: '1h35–2h15', note: 'A popular choice specifically because the drive itself is scenic — but expect a genuinely different pace from a motorway-based route.' },
            { mode: 'Public transport', time: 'Multiple changes, considerably longer', note: 'Montepulciano is not on a direct rail line from Florence; reaching it without a car typically involves a train plus connecting bus, adding significant time.' },
        ],
        transportNote: "This is one of the least practical routes on this page for public transport — with no direct rail line to Montepulciano, driving or a private transfer is the realistic choice for most travellers rather than one option among several equally good ones.",
        planningTips: [
            { title: 'Treat this as a longer day trip, or plan to stay over', description: 'Given the driving time in both directions, this suits either a full day dedicated to the trip or an overnight stay in or near Montepulciano.' },
            { title: 'Confirm exactly where in town you need to reach', description: 'Because the final approach is a genuine climb, knowing whether your destination is near the lower car parks or up by Piazza Grande affects how much walking (or which parking option) makes sense.' },
            { title: 'Consider the Val d\'Orcia as part of the trip, not just transit', description: 'Many travellers build in a stop along the SP146 — the scenery through this stretch is a genuine reason to take this particular road rather than the fastest possible route.' },
        ],
        ctaHeading: 'Prefer someone else to handle the drive?',
        ctaText: 'A private transfer covers the whole route — including the climb into town — see our Florence to Montepulciano taxi transfer for details.',
        ctaAnchor: 'View the Florence to Montepulciano transfer',
        routePageSlug: 'florence-to-montepulciano-taxi',
        faqs: [
            { q: 'How far is Montepulciano from Florence?', a: 'Approximately 110–115 km by road — the longest of the four Tuscan countryside routes covered on this site, running largely through the Val d\'Orcia.' },
            { q: 'How long does it take to drive?', a: 'Typically 1 hour 35 minutes to 2 hours 15 minutes, reflecting that a substantial part of the route runs on local and provincial roads rather than motorway.' },
            { q: 'Does the final destination within Montepulciano affect the journey?', a: 'Yes, more than at some other hill towns — Montepulciano sits along a ridge, so whether you\'re headed to the lower car parks or up near Piazza Grande makes a real difference to the last stretch, which is a genuine climb.' },
            { q: 'Is there a direct train from Florence to Montepulciano?', a: 'No — Montepulciano is not on a direct rail line from Florence. Reaching it by public transport typically involves a train plus a connecting bus, adding considerable time compared with driving.' },
            { q: 'Is the drive itself worth doing, or just a means to get there?', a: 'The route runs through the Val d\'Orcia, a UNESCO-listed landscape considered one of the most scenic parts of the Tuscan countryside — many travellers treat the drive as part of the experience rather than simply transit time.' },
        ],
        relatedLinks: [
            { href: '/route/florence-to-montepulciano-taxi', label: 'Florence to Montepulciano Taxi Transfer' },
            { href: '/distance/florence-to-san-gimignano-distance', label: 'Florence to San Gimignano Distance' },
            { href: '/distance/florence-to-siena-distance', label: 'Florence to Siena Distance' },
        ],
    },
];

export function getAllRichDistancePages(): RichDistancePage[] {
    return richDistancePages;
}

export function findRichDistancePage(slug: string): RichDistancePage | null {
    return richDistancePages.find((p) => p.slug === slug) || null;
}
