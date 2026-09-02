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
    GEOM_MILAN_PORTOFINO, GEOM_MILAN_STRESA, GEOM_NAPLES_SORRENTO, GEOM_NAPLES_POSITANO, GEOM_NAPLES_SALERNO,
    COORD_ROME, COORD_SIENA, COORD_FLORENCE, COORD_BOLOGNA, COORD_LUCCA, COORD_SANGIMIGNANO, COORD_MONTEPULCIANO,
    COORD_MILAN, COORD_PORTOFINO, COORD_STRESA, COORD_NAPLES, COORD_SORRENTO, COORD_POSITANO, COORD_SALERNO,
} from './route-geometry';

export type JourneyType = 'intercity' | 'city-to-city' | 'countryside' | 'hilltown' | 'coastal' | 'lake';

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
            "Distance and drive time are identical whichever direction you're travelling — Florence to Bologna or Bologna to Florence — so everything on this page applies equally to both.",
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
            { q: 'Is the distance the same from Bologna to Florence?', a: "Yes — the road distance, drive time and train time are identical in both directions. This page and the figures on it apply equally whether you're travelling from Florence to Bologna or from Bologna to Florence." },
        ],
        relatedLinks: [
            { href: '/route/florence-to-bologna-taxi', label: 'Florence to Bologna Taxi Transfer' },
            { href: '/route/bologna-to-florence-taxi', label: 'Bologna to Florence Taxi Transfer' },
            { href: '/distance/florence-to-pisa-distance', label: 'Florence to Pisa Distance' },
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

    // ═══════════════════════════ MILAN → PORTOFINO ═══════════════════════════
    {
        slug: 'milan-to-portofino-distance',
        itSlug: 'distanza-da-milano-a-portofino',
        origin: 'Milan',
        dest: 'Portofino',
        journeyType: 'coastal',
        journeyTypeLabel: 'Lombardy → Liguria · Motorway to the Riviera',
        seoTitle: 'Milan to Portofino Distance – Km, Route & Travel Time',
        metaDescription: 'How far is Portofino from Milan? Real driving distance via the A7 and A12 motorways to the Italian Riviera, with route map and public transport comparison.',
        h1: 'Distance from Milan to Portofino',
        heroSubtitle: 'South from Lombardy\'s business capital to a car-free harbour village on the Italian Riviera — a motorway run that ends on foot.',
        map: {
            origin: { name: 'Milan (Duomo)', lat: COORD_MILAN.lat, lon: COORD_MILAN.lon },
            destination: { name: 'Portofino', lat: COORD_PORTOFINO.lat, lon: COORD_PORTOFINO.lon },
            geometry: GEOM_MILAN_PORTOFINO,
        },
        drivingDistanceKm: 'approx. 170–175 km',
        drivingDurationRange: '2 hours 15 minutes – 2 hours 40 minutes',
        snapshot: [
            { label: 'Region change', value: 'Lombardy → Liguria' },
            { label: 'Route type', value: 'Long motorway, coastal finish' },
            { label: 'Main roads', value: 'A7, then A12 Autostrada dei Fiori' },
            { label: 'Destination access', value: 'Car-free harbour — park outside' },
        ],
        howFarIsIt: [
            'By road, Milan and Portofino are approximately 170–175 km apart — a genuinely long cross-regional drive, not a quick hop. Most sources converge in this range, though the exact figure shifts a little depending on the precise starting point in Milan and which of Portofino\'s car parks you\'re counting as the endpoint, since the village itself has no through road for cars.',
            'That last point matters more here than on most routes on this site: Portofino\'s tiny harbour piazzetta has never been open to general vehicle traffic, so your real door-to-door distance includes walking in from one of the paid car parks on the approach to the village, not driving directly to the waterfront.',
        ],
        journeySteps: [
            { label: 'Leaving Milan', description: 'The route joins the A7 motorway heading south out of the city, the same corridor used for traffic toward Genoa and the Ligurian coast.' },
            { label: 'The A7 to Genoa', description: 'The A7 covers the bulk of the distance — roughly 130 km — running south through Lombardy and Piedmont before descending toward Genoa\'s motorway ring.' },
            { label: 'Onto the A12 Autostrada dei Fiori', description: 'At Genoa, the route joins the A12, a coastal motorway known for its heavy concentration of tunnels and viaducts as it threads along the Ligurian cliffs, continuing to the Rapallo exit.' },
            { label: 'The final approach', description: 'From the Rapallo exit, a roughly 15-minute local road leads through Santa Margherita Ligure to Portofino, ending at one of the paid car parks just outside the harbour — the village\'s historic centre itself is closed to cars.' },
        ],
        journeyTimeNote: [
            'This route runs through some of the busiest motorway corridors in northern Italy, so timing matters. Summer weekends and holiday periods bring significant Riviera-bound traffic on the A12, and the Genoa motorway interchange — where several major routes converge — is a recurring bottleneck regardless of season.',
        ],
        understandingJourney: [
            'This is the longest of the routes covered on this site, and it feels that way at the wheel — the first hour and a half is a straightforward motorway run south through Lombardy and Piedmont on the A7, well before any hint of the coast appears.',
            'The character changes at Genoa, where the route picks up the A12 Autostrada dei Fiori. This stretch is a genuine feat of road engineering, built through a landscape where the mountains meet the sea almost without any flat ground — long tunnels alternate with viaducts perched above the water, one of the more dramatic stretches of motorway driving in Italy.',
            'Portofino itself is the payoff, and also the reason this journey can\'t end at a normal drop-off point. The village\'s famous piazzetta, ringed by pastel houses and yacht moorings, has no room and no permission for through traffic — every visitor, whether arriving by car, bus or boat, covers the final stretch on foot.',
        ],
        highlights: [
            { title: 'Two distinct motorways, two different drives', description: 'The A7\'s inland run to Genoa and the A12\'s coastal, tunnel-heavy stretch to Rapallo are genuinely different driving experiences within the same journey.' },
            { title: 'A gateway through Santa Margherita Ligure', description: 'The final approach passes directly through this elegant resort town, which many visitors combine with Portofino on the same day.' },
            { title: 'A harbour village that ends every journey on foot', description: 'No form of transport — car, bus, or boat — reaches Portofino\'s piazzetta directly; the walk-in is part of arriving, not an inconvenience unique to driving.' },
        ],
        transportOptions: [
            { mode: 'Private transfer / taxi', time: '2h15–2h40', note: 'Door-to-door to the edge of Portofino without navigating the Genoa interchange or hunting for parking.' },
            { mode: 'Train + local train + bus', time: 'Roughly 2.5–3 hours', note: 'Milano Centrale to Genova Piazza Principe takes about 1h30–1h47 on hourly services, then a further regional train continues along the coast to Santa Margherita Ligure–Portofino station, followed by bus 82 into the village (about 13 minutes, running every 30 minutes).' },
            { mode: 'Self-driving', time: '2h15–2h40', note: 'Straightforward on the motorway, but budget extra time for Riviera traffic on summer weekends and for finding parking near the village.' },
        ],
        transportNote: 'There is no way to shortcut the final stretch into Portofino — every option, including a private transfer, ends with a walk from a car park or bus stop into the piazzetta.',
        planningTips: [
            { title: 'Confirm which Portofino car park you\'re aiming for', description: 'Several paid car parks serve the village from different approach roads — knowing which one in advance saves circling during busy periods.' },
            { title: 'Consider combining with Santa Margherita Ligure', description: 'Since the route passes directly through this resort town on the way in, many visitors treat it as a natural stop rather than a separate trip.' },
            { title: 'Avoid summer weekend afternoons on the A12 if possible', description: 'This stretch of coastal motorway is one of the most congested in Liguria during peak season — a mid-morning or weekday departure tends to be considerably smoother.' },
        ],
        ctaHeading: 'Planning this trip from Milan?',
        ctaText: 'A private transfer covers the full route, including the Genoa interchange and the final walk-in — see our Milan to Portofino taxi transfer for details.',
        ctaAnchor: 'View the Milan to Portofino transfer',
        routePageSlug: 'milan-to-portofino-taxi',
        faqs: [
            { q: 'How far is Portofino from Milan?', a: 'Approximately 170–175 km by road, via the A7 motorway to Genoa and then the A12 Autostrada dei Fiori toward Rapallo.' },
            { q: 'How long does the drive take?', a: 'Typically 2 hours 15 minutes to 2 hours 40 minutes under normal conditions, longer on summer weekends when Riviera-bound traffic builds on the A12.' },
            { q: 'Can I drive directly into Portofino village?', a: 'No — the historic piazzetta has no through road for cars. Every visitor parks at one of the car parks on the approach and walks the final stretch in.' },
            { q: 'Is the train a realistic alternative to driving?', a: 'It works, but involves a change — Milan to Genoa by train, a further regional service to Santa Margherita Ligure–Portofino station, then bus 82 into the village. The full journey typically takes around 2.5 to 3 hours.' },
            { q: 'Is it worth stopping in Santa Margherita Ligure on the way?', a: 'Many visitors do, since the approach road to Portofino passes directly through this resort town — it\'s a natural place to break the journey rather than a detour.' },
        ],
        relatedLinks: [
            { href: '/route/milan-to-portofino-taxi', label: 'Milan to Portofino Taxi Transfer' },
            { href: '/route/milan-to-stresa-taxi', label: 'Milan to Stresa Taxi Transfer' },
            { href: '/distance/milan-to-stresa-distance', label: 'Milan to Stresa Distance' },
        ],
    },

    // ═══════════════════════════ MILAN → STRESA ═══════════════════════════
    {
        slug: 'milan-to-stresa-distance',
        itSlug: 'distanza-da-milano-a-stresa',
        origin: 'Milan',
        dest: 'Stresa',
        journeyType: 'lake',
        journeyTypeLabel: 'Lombardy → Piedmont · Gateway to Lake Maggiore',
        seoTitle: 'Milan to Stresa Distance – Km, Route & Travel Time',
        metaDescription: 'How far is Stresa from Milan? Real driving distance via the A8 and A26 motorways to Lake Maggiore, with route map, tolls and train comparison.',
        h1: 'Distance from Milan to Stresa',
        heroSubtitle: 'A short run northwest from Milan to the belle-époque lakefront of Stresa, gateway to Lake Maggiore\'s Borromean Islands.',
        map: {
            origin: { name: 'Milan (Duomo)', lat: COORD_MILAN.lat, lon: COORD_MILAN.lon },
            destination: { name: 'Stresa', lat: COORD_STRESA.lat, lon: COORD_STRESA.lon },
            geometry: GEOM_MILAN_STRESA,
        },
        drivingDistanceKm: 'approx. 90 km',
        drivingDurationRange: '1 hour 15 minutes – 1 hour 30 minutes',
        snapshot: [
            { label: 'Region change', value: 'Lombardy → Piedmont' },
            { label: 'Route type', value: 'Short, direct motorway run' },
            { label: 'Main roads', value: 'A8, then A26' },
            { label: 'Tolls', value: 'Approx. €5–14' },
        ],
        howFarIsIt: [
            'Milan and Stresa are close by the standards of this site — roughly 90 km apart by road, one of the shorter journeys covered here. The route runs almost entirely on motorway, so unlike some longer or more rural routes, the practical distance doesn\'t vary much based on the exact pickup point within Milan.',
            'This is a genuinely direct route: northwest out of the city on the A8, then a short stretch of the A26 to reach the lake shore, without the kind of local-road finish that adds uncertainty to some of the other journeys on this site.',
        ],
        journeySteps: [
            { label: 'Leaving Milan', description: 'The route joins the A8 motorway, signposted toward Laghi–Sesto Calende–Varese, heading northwest away from the city.' },
            { label: 'Onto the A26', description: 'The A8 connects to the A26 motorway, signposted toward Gravellona Toce, which continues north toward the lakes region.' },
            { label: 'Exiting at Carpugnino', description: 'The route leaves the A26 at the Carpugnino exit, from which local signs lead directly to Stresa.' },
            { label: 'Arriving at the lakefront', description: 'A short final stretch reaches Stresa\'s lakefront promenade, with its historic hotels and the boat piers for the Borromean Islands.' },
        ],
        journeyTimeNote: [
            'Because this route is almost entirely motorway, travel time is relatively predictable compared with routes that finish on local roads. The main variables are ordinary Milan-area traffic near the start of the journey and summer lake-district traffic on weekends, when Stresa draws day-trippers from across northern Italy.',
        ],
        understandingJourney: [
            'This is one of the more compact journeys on this site — under an hour and a half in normal conditions — and the route reflects that: almost the entire distance runs on two connected motorways, the A8 and the A26, with none of the winding local-road stretches that define some of the longer or more rural routes covered here.',
            'The A26 section in particular is a fast, modern motorway built to serve the lakes region, and the transition from Milan\'s urban sprawl to the mountains framing Lake Maggiore happens relatively quickly once you\'re on it.',
            'Stresa itself has been a lakeside resort since the 19th century, and its grand belle-époque hotels along the lungolago reflect that history. It\'s the main departure point for boats to the Borromean Islands — Isola Bella, Isola Madre and Isola dei Pescatori — which sit just offshore in the lake.',
        ],
        highlights: [
            { title: 'One of the shorter, more direct routes on this site', description: 'At roughly 90 km on two connected motorways, this is a considerably more compact journey than the cross-regional routes to Liguria or Campania.' },
            { title: 'A historic resort town, not a village', description: 'Unlike some smaller lake or hill-town destinations, Stresa has a full lakefront promenade, hotels and year-round infrastructure built around tourism since the 1800s.' },
            { title: 'The gateway to the Borromean Islands', description: 'Stresa\'s boat piers are the main departure point for the islands in Lake Maggiore, a detail that shapes why many travellers are making this specific journey.' },
        ],
        transportOptions: [
            { mode: 'Private transfer / taxi', time: '1h15–1h30', note: 'Door-to-door to the lakefront, useful if you\'re continuing straight on to a boat departure.' },
            { mode: 'Direct train', time: 'From around 1 hour on the fastest services', note: 'Trenitalia and Trenord run direct trains from Milano Centrale (and Porta Garibaldi) roughly hourly on the historic Simplon line; journey times vary by service type.' },
            { mode: 'Self-driving', time: '1h15–1h30', note: 'A straightforward motorway drive via the A8 and A26; tolls run approximately €5–14 depending on vehicle class.' },
        ],
        transportNote: 'This is one of the few routes on this site where the direct train is a genuinely strong alternative to driving — Stresa sits directly on a historic main line from Milan, with no change required.',
        planningTips: [
            { title: 'Check the boat schedule before you travel', description: 'If the Borromean Islands are the goal, timing your arrival in Stresa around the ferry timetable avoids a wait at the pier.' },
            { title: 'Weekday travel is noticeably quieter', description: 'Stresa is a popular day-trip destination from Milan, so summer weekends bring more traffic on the approach roads and more crowds at the lakefront and boat piers.' },
            { title: 'The train is worth comparing directly', description: 'Given the direct line and roughly hourly service, it\'s worth weighing the train against driving specifically on this route, unlike some others where public transport is a distant second option.' },
        ],
        ctaHeading: 'Heading to Lake Maggiore from Milan?',
        ctaText: 'A private transfer gets you to the lakefront without the motorway or the walk from parking — see our Milan to Stresa taxi transfer for details.',
        ctaAnchor: 'View the Milan to Stresa transfer',
        routePageSlug: 'milan-to-stresa-taxi',
        faqs: [
            { q: 'How far is Stresa from Milan?', a: 'Approximately 90 km by road, via the A8 and A26 motorways — one of the shorter journeys covered on this site.' },
            { q: 'How long does the drive take?', a: 'Typically 1 hour 15 minutes to 1 hour 30 minutes under normal conditions, with tolls of roughly €5–14 depending on vehicle class.' },
            { q: 'Is the train a good alternative to driving?', a: 'Yes — Stresa sits directly on a historic main line from Milan, with roughly hourly direct services and no change required, making it one of the stronger train alternatives among the routes on this site.' },
            { q: 'Does Stresa have its own train station?', a: 'Yes, a historic station on the Simplon line connecting Milan to Switzerland, within walking distance of the lakefront and boat piers.' },
            { q: 'Why do people travel from Milan to Stresa specifically?', a: 'Stresa is the main departure point for boats to the Borromean Islands in Lake Maggiore, which is the primary reason for this particular journey.' },
        ],
        relatedLinks: [
            { href: '/route/milan-to-stresa-taxi', label: 'Milan to Stresa Taxi Transfer' },
            { href: '/route/milan-to-portofino-taxi', label: 'Milan to Portofino Taxi Transfer' },
            { href: '/distance/milan-to-portofino-distance', label: 'Milan to Portofino Distance' },
        ],
    },

    // ═══════════════════════════ NAPLES → SORRENTO ═══════════════════════════
    {
        slug: 'naples-to-sorrento-distance',
        itSlug: 'distanza-da-napoli-a-sorrento',
        origin: 'Naples',
        dest: 'Sorrento',
        journeyType: 'coastal',
        journeyTypeLabel: 'Campania · Gateway to the Sorrentine Peninsula',
        seoTitle: 'Naples to Sorrento Distance – Km, Route & Travel Time',
        metaDescription: 'How far is Sorrento from Naples? Real driving distance via the A3 and SS145, with route map and a direct comparison against the Circumvesuviana train.',
        h1: 'Distance from Naples to Sorrento',
        heroSubtitle: 'South along the bay from Naples to the clifftop town that anchors the Sorrentine Peninsula and the approach to the Amalfi Coast.',
        map: {
            origin: { name: 'Naples (Piazza del Plebiscito)', lat: COORD_NAPLES.lat, lon: COORD_NAPLES.lon },
            destination: { name: 'Sorrento', lat: COORD_SORRENTO.lat, lon: COORD_SORRENTO.lon },
            geometry: GEOM_NAPLES_SORRENTO,
        },
        drivingDistanceKm: 'approx. 50 km',
        drivingDurationRange: '50 minutes – 1 hour 15 minutes',
        snapshot: [
            { label: 'Route type', value: 'Motorway + coastal state road' },
            { label: 'Main roads', value: 'A3, then SS145' },
            { label: 'Train alternative', value: 'Circumvesuviana, ~1h10, every ~30 min' },
            { label: 'Traffic sensitivity', value: 'High in summer' },
        ],
        howFarIsIt: [
            'Naples and Sorrento are about 50 km apart by road — a short distance on paper, though the journey takes longer than the distance alone would suggest. The route leaves the A3 motorway partway through and finishes on the SS145, a coastal state road that slows things down through Castellammare di Stabia and the built-up towns along the Sorrentine Peninsula.',
            'The gap between "distance" and "travel time" is unusually wide on this route. In free-flowing conditions the drive can be done in under an hour, but this corridor carries heavy local traffic year-round and even heavier tourist traffic in summer, so real journey times vary more than the road distance alone implies.',
        ],
        journeySteps: [
            { label: 'Leaving Naples', description: 'The route joins the A3 motorway heading south, the main corridor toward Salerno and the coast.' },
            { label: 'Exiting at Castellammare di Stabia', description: 'The route leaves the A3 to join the SS145, a coastal state road that continues along the base of the Sorrentine Peninsula.' },
            { label: 'Along the SS145', description: 'This stretch runs through a near-continuous chain of towns — Castellammare, Vico Equense, Meta — with more traffic lights and local traffic than a motorway.' },
            { label: 'Arriving in Sorrento', description: 'The road reaches Sorrento\'s town centre near Piazza Tasso, the hub of the town perched on cliffs above the Marina Piccola.' },
        ],
        journeyTimeNote: [
            'This is one of the more traffic-sensitive routes on this site. The SS145 corridor serves a dense string of towns with everyday local traffic, and from roughly May to October it also carries a heavy volume of tourists heading toward Sorrento and onward to the Amalfi Coast, so summer travel times can run well above the free-flow figure.',
        ],
        understandingJourney: [
            'This route splits cleanly into two very different halves. The first part, on the A3 motorway, is fast and unremarkable — standard Italian motorway driving south out of Naples. The second half, after exiting onto the SS145, is a different experience entirely: a coastal state road threading through one town after another along the base of the Sorrentine Peninsula, with sea views opening up between the buildings.',
            'Unlike a rural or countryside route, this corridor is genuinely built-up for almost its whole length — Castellammare di Stabia, Vico Equense and Meta effectively run into one another, so the drive feels more like moving through a chain of coastal towns than through open countryside.',
            'Sorrento itself sits on a clifftop above its small harbour, the Marina Piccola, and functions as the practical gateway to the peninsula and the wider Amalfi Coast — many journeys that continue further along the coast, whether by road or boat, start from here.',
        ],
        highlights: [
            { title: 'A route defined by two different road types', description: 'The fast A3 motorway section and the slower, town-threading SS145 give this journey a genuinely two-part character rather than one continuous driving experience.' },
            { title: 'A near-continuous string of coastal towns', description: 'Castellammare di Stabia, Vico Equense and Meta run together along the SS145, making this one of the more built-up routes on this site rather than a rural drive.' },
            { title: 'A well-known and genuinely competitive train alternative', description: 'The Circumvesuviana line runs frequently and directly between Naples and Sorrento, giving this route one of the clearer public-transport choices covered here.' },
        ],
        transportOptions: [
            { mode: 'Private transfer / taxi', time: '50min–1h15', note: 'Door-to-door and free of the Circumvesuviana\'s crowding, though still subject to the same road traffic as any vehicle on the SS145.' },
            { mode: 'Circumvesuviana train', time: 'Approx. 1 hour 10 minutes', note: 'Runs directly between Naples and Sorrento roughly every 30 minutes — a genuinely practical option, though the trains are basic and can be crowded, especially in summer.' },
            { mode: 'Self-driving', time: '50min–1h15', note: 'Via the A3 then SS145; expect the coastal stretch to be considerably slower than the motorway portion, especially through town centres.' },
        ],
        transportNote: 'Of the routes on this site, this is one where the train is most directly comparable to driving — the Circumvesuviana connects the two towns without a change, though comfort and crowding are real trade-offs against a private transfer.',
        planningTips: [
            { title: 'Expect the SS145 to be the slow part', description: 'The motorway portion of this route is quick; nearly all of the variability comes from the coastal towns the SS145 passes through.' },
            { title: 'Avoid the Circumvesuviana at peak times if you have luggage', description: 'The line is a genuinely useful option but was not built with large suitcases in mind — it gets crowded, especially on summer weekends and around midday.' },
            { title: 'This route is often a step toward the wider Amalfi Coast', description: 'Many travellers treat Sorrento as a gateway rather than the final stop, continuing on by road, bus or seasonal ferry — worth factoring into onward planning.' },
        ],
        ctaHeading: 'Heading to Sorrento from Naples?',
        ctaText: 'Skip the crowded Circumvesuviana with a door-to-door private transfer — see our Naples to Sorrento taxi transfer for details.',
        ctaAnchor: 'View the Naples to Sorrento transfer',
        routePageSlug: 'naples-to-sorrento-taxi',
        faqs: [
            { q: 'How far is Sorrento from Naples?', a: 'Approximately 50 km by road, via the A3 motorway and the SS145 coastal state road.' },
            { q: 'How long does the drive take?', a: 'Typically 50 minutes to 1 hour 15 minutes, though the SS145 section through Castellammare di Stabia, Vico Equense and Meta can slow things down considerably in summer.' },
            { q: 'Is the Circumvesuviana train a good option?', a: 'Yes — it runs directly between Naples and Sorrento in about 1 hour 10 minutes, roughly every 30 minutes, making it one of the more genuinely useful train alternatives among the routes on this site, though it can be crowded.' },
            { q: 'Why does this route take longer than the distance suggests?', a: 'Only part of the journey is on the A3 motorway — the rest runs on the SS145, a coastal state road through a near-continuous string of towns, which is inherently slower than motorway driving.' },
            { q: 'Is Sorrento a good base for the wider Amalfi Coast?', a: 'Yes — Sorrento functions as a practical gateway to the Sorrentine Peninsula and the Amalfi Coast, with onward road, bus and seasonal boat connections starting from the town.' },
        ],
        relatedLinks: [
            { href: '/route/naples-to-sorrento-taxi', label: 'Naples to Sorrento Taxi Transfer' },
            { href: '/route/naples-to-positano-taxi', label: 'Naples to Positano Taxi Transfer' },
            { href: '/distance/naples-to-positano-distance', label: 'Naples to Positano Distance' },
        ],
    },

    // ═══════════════════════════ NAPLES → POSITANO ═══════════════════════════
    {
        slug: 'naples-to-positano-distance',
        itSlug: 'distanza-da-napoli-a-positano',
        origin: 'Naples',
        dest: 'Positano',
        journeyType: 'coastal',
        journeyTypeLabel: 'Campania · Onto the Amalfi Coast Road',
        seoTitle: 'Naples to Positano Distance – Km, Route & Travel Time',
        metaDescription: 'How far is Positano from Naples? Real driving distance via the A3 and the SS163 Amalfi coast road, with route map, seasonal traffic notes and toll information.',
        h1: 'Distance from Naples to Positano',
        heroSubtitle: 'From the Campanian mainland onto the SS163, the cliffside road that carries every journey along the Amalfi Coast to Positano.',
        map: {
            origin: { name: 'Naples (Piazza del Plebiscito)', lat: COORD_NAPLES.lat, lon: COORD_NAPLES.lon },
            destination: { name: 'Positano', lat: COORD_POSITANO.lat, lon: COORD_POSITANO.lon },
            geometry: GEOM_NAPLES_POSITANO,
        },
        drivingDistanceKm: 'approx. 60–65 km',
        drivingDurationRange: '1 hour 15 minutes off-peak; 2–2.5 hours in high season',
        snapshot: [
            { label: 'Route type', value: 'Motorway + cliffside coast road' },
            { label: 'Main roads', value: 'A3, then SS163 Amalfitana' },
            { label: 'A3 tolls', value: 'Approx. €3–6' },
            { label: 'Season sensitivity', value: 'Very high (May–October)' },
        ],
        howFarIsIt: [
            'Naples and Positano are roughly 60–65 km apart by road, though sources vary somewhat depending on the exact starting point in Naples and whether the measurement runs to the town centre or the edge of Positano. What matters more than the distance itself is that a significant part of the route runs on the SS163 Amalfitana — a narrow, cliffside road that behaves nothing like a motorway.',
            'This is one of the routes on this site where distance and travel time genuinely diverge the most. The same roughly 60 km can take anywhere from just over an hour to well over two, entirely depending on the season and time of day.',
        ],
        journeySteps: [
            { label: 'Leaving Naples', description: 'The route joins the A3 motorway heading south toward Salerno.' },
            { label: 'Exiting at Vietri sul Mare', description: 'The route leaves the A3 at Vietri sul Mare, the eastern gateway to the Amalfi Coast, joining the SS163 Amalfitana.' },
            { label: 'Along the SS163 Amalfitana', description: 'This roughly 50 km state road is carved directly into the cliffside, winding through Amalfi, Praiano and Meta before reaching Positano — narrow, with frequent tight bends and limited overtaking room.' },
            { label: 'Arriving in Positano', description: 'The road descends into Positano, a town built almost vertically into the cliff, with the final stretch into the centre often the tightest and slowest part of the whole journey.' },
        ],
        journeyTimeNote: [
            'Seasonal timing matters more on this route than almost any other covered on this site. In light traffic the drive takes around 1 hour 15 minutes to 1 hour 30 minutes, but during the May-to-October high season it commonly takes 2 to 2.5 hours, with single-lane bottlenecks between Meta and Positano adding a further 20 to 30 minutes on busy summer weekends.',
        ],
        understandingJourney: [
            'This route has two genuinely different characters. The A3 motorway section to Vietri sul Mare is fast and conventional. Everything changes once the route joins the SS163 Amalfitana — a road carved directly into vertical cliffside, built long before modern traffic volumes existed, and never widened to match them.',
            'The SS163 is famous for good reason: it\'s one of the most scenically dramatic coastal roads in Italy, with the sea dropping away directly below the roadway for long stretches. But that same geography — a narrow shelf cut into rock, with the mountain on one side and a cliff on the other — is exactly why the road can\'t simply absorb more traffic during busy periods.',
            'Positano itself is built almost vertically down the cliff face toward the sea, and the final approach into the town reflects that: tight switchbacks and very limited road width mean the last few minutes are often the slowest part of the entire journey from Naples, whatever the time of year.',
        ],
        highlights: [
            { title: 'A motorway-to-cliff-road journey, not a single continuous type of drive', description: 'The fast A3 section and the narrow, winding SS163 are different enough that this route can\'t be judged by distance alone.' },
            { title: 'One of the most dramatic coastal roads in Italy', description: 'The SS163 Amalfitana runs largely at the edge of the cliffside for its full length between Vietri sul Mare and Positano.' },
            { title: 'A route with no meaningful train alternative', description: 'Unlike Naples–Sorrento or Naples–Salerno, there is no rail line along this stretch of coast, which shapes every transport decision for this specific journey.' },
        ],
        transportOptions: [
            { mode: 'Private transfer / taxi', time: '1h15 off-peak; 2–2.5h high season', note: 'Door-to-door on a road with no realistic self-navigation shortcuts, and no parking to search for in central Positano.' },
            { mode: 'Circumvesuviana train + SITA bus', time: 'Roughly 2–3 hours total', note: 'Train to Sorrento (about 1h10, every ~30 min), then a SITA bus onward to Positano (every 30–60 minutes, tickets must be bought in advance, not on board).' },
            { mode: 'Seasonal ferry (Apr–Oct)', time: 'Roughly 1.5–2 hours', note: 'Operators including Alicost and Travelmar run 2–3 sailings a day from Naples to Positano in season; only one crossing a day runs in winter.' },
            { mode: 'Self-driving', time: '1h15 off-peak; 2–2.5h high season', note: 'Via the A3 then SS163; the coast road has very limited overtaking and can back up significantly on summer weekends.' },
        ],
        transportNote: 'There is no rail option on this route, which makes it different from most others on this site — the realistic choices are driving, a private transfer, a train-plus-bus combination, or a seasonal ferry, each with a genuinely different time and comfort trade-off.',
        planningTips: [
            { title: 'Build in a wide time buffer in high season', description: 'Between May and October, treat 2 to 2.5 hours as the realistic planning figure, not the 1h15 off-peak time, especially for anything with a fixed arrival deadline.' },
            { title: 'Consider the ferry between April and October', description: 'When it\'s running, the seasonal boat from Naples avoids the SS163 entirely and can be genuinely faster than driving during peak traffic periods.' },
            { title: 'Buy SITA bus tickets before boarding if using public transport', description: 'Tickets are not sold on board — they need to be bought in advance at a station bar or newsstand, which can catch first-time visitors out.' },
        ],
        ctaHeading: 'Planning a trip to Positano from Naples?',
        ctaText: 'Let an experienced driver handle the SS163\'s cliffside bends — see our Naples to Positano taxi transfer for details.',
        ctaAnchor: 'View the Naples to Positano transfer',
        routePageSlug: 'naples-to-positano-taxi',
        faqs: [
            { q: 'How far is Positano from Naples?', a: 'Approximately 60–65 km by road, via the A3 motorway to Vietri sul Mare and then the SS163 Amalfitana coast road.' },
            { q: 'How long does the drive take?', a: 'Around 1 hour 15 minutes in light traffic, but commonly 2 to 2.5 hours during the May-to-October high season, when the SS163 gets significantly busier.' },
            { q: 'Is there a direct train to Positano?', a: 'No — there is no rail line along this stretch of the Amalfi Coast. The public transport option is the Circumvesuviana train to Sorrento followed by a SITA bus onward.' },
            { q: 'Is the ferry a good alternative?', a: 'When it runs — roughly April to October — yes, with 2 to 3 sailings a day from Naples taking around 1.5 to 2 hours, avoiding the coast road entirely. Only one crossing a day operates in winter.' },
            { q: 'Why does traffic affect this route so much more than others?', a: 'The SS163 is a narrow road carved into the cliffside with very limited overtaking room, so even moderate increases in traffic volume during high season create disproportionate delays.' },
        ],
        relatedLinks: [
            { href: '/route/naples-to-positano-taxi', label: 'Naples to Positano Taxi Transfer' },
            { href: '/route/naples-to-sorrento-taxi', label: 'Naples to Sorrento Taxi Transfer' },
            { href: '/distance/naples-to-sorrento-distance', label: 'Naples to Sorrento Distance' },
        ],
    },

    // ═══════════════════════════ NAPLES → SALERNO ═══════════════════════════
    {
        slug: 'naples-to-salerno-distance',
        itSlug: 'distanza-da-napoli-a-salerno',
        origin: 'Naples',
        dest: 'Salerno',
        journeyType: 'city-to-city',
        journeyTypeLabel: 'Campania · City-to-City Gateway to the Coast',
        seoTitle: 'Naples to Salerno Distance – Km, Route & Travel Time',
        metaDescription: 'How far is Salerno from Naples? Real driving distance via the A3 motorway, with route map and a direct comparison against Trenitalia\'s frequent direct trains.',
        h1: 'Distance from Naples to Salerno',
        heroSubtitle: 'A quick motorway run between two proper Campanian cities — and, for many travellers, the practical eastern gateway to the Amalfi Coast.',
        map: {
            origin: { name: 'Naples (Piazza del Plebiscito)', lat: COORD_NAPLES.lat, lon: COORD_NAPLES.lon },
            destination: { name: 'Salerno', lat: COORD_SALERNO.lat, lon: COORD_SALERNO.lon },
            geometry: GEOM_NAPLES_SALERNO,
        },
        drivingDistanceKm: 'approx. 55–58 km',
        drivingDurationRange: '50 minutes – 1 hour 10 minutes',
        snapshot: [
            { label: 'Route type', value: 'City-to-city motorway run' },
            { label: 'Main road', value: 'A3 motorway' },
            { label: 'Train alternative', value: 'Trenitalia, frequent, 30–55 min' },
            { label: 'Destination', value: 'Full city, ferry gateway' },
        ],
        howFarIsIt: [
            'Naples and Salerno are approximately 55–58 km apart by road, almost entirely along the A3 motorway. By rail the distance is slightly shorter, at just under 48 km, reflecting the more direct line the railway takes compared with the motorway\'s route.',
            'Unlike some of the other journeys on this site, this one connects two substantial cities rather than a city and a resort town or village, so the destination itself — not just the road — has proper year-round infrastructure at the other end.',
        ],
        journeySteps: [
            { label: 'Leaving Naples', description: 'The route joins the A3 motorway heading south, the main corridor connecting Naples to the Cilento and Calabria beyond Salerno.' },
            { label: 'The A3 corridor', description: 'This is a fast, direct motorway stretch, historically the primary road link between the two cities and still the fastest route by car.' },
            { label: 'Approaching Salerno', description: 'The motorway meets Salerno\'s urban ring roads on the northern edge of the city.' },
            { label: 'Arriving in Salerno', description: 'The route continues into the city centre near Piazza della Concordia, close to Salerno\'s seafront and passenger ferry terminal.' },
        ],
        journeyTimeNote: [
            'Traffic on the A3 can build during peak commuting hours, since this corridor serves regular business and commuter traffic between the two cities in addition to tourist traffic heading toward the Amalfi Coast and Cilento — it isn\'t a purely leisure route, which shapes when it tends to get busy.',
        ],
        understandingJourney: [
            'This is a more straightforward, businesslike journey than most others on this site — a direct motorway run between two working Campanian cities, without the narrow coast roads, hill-town climbs or single-track bottlenecks that define some of the other routes covered here.',
            'That practicality is exactly why the route matters commercially: Salerno functions as the eastern gateway to the Amalfi Coast, considerably easier to reach by both road and rail than towns further along the SS163, which is why many travellers heading to Amalfi, Ravello or Cetara route through here rather than via Sorrento.',
            'Salerno itself is a full city with its own seafront, historic centre and a working port — including a passenger ferry terminal used for coastal connections in season — a different kind of destination from the resort villages that some of the other routes on this site lead to.',
        ],
        highlights: [
            { title: 'A genuine city-to-city motorway run', description: 'Unlike routes that end at a resort village or hill town, this one connects two proper cities with full year-round infrastructure at both ends.' },
            { title: 'A frequent, genuinely fast train alternative', description: 'Trenitalia runs frequent direct services on this well-served intercity line, with some of the fastest journey times of any train route featured on this site.' },
            { title: 'The practical eastern gateway to the Amalfi Coast', description: 'Salerno\'s road and rail links make it a common starting point for onward travel to Amalfi, Ravello and Cetara, distinct from the Sorrento-side approach to the coast.' },
        ],
        transportOptions: [
            { mode: 'Trenitalia train', time: 'Roughly 30–55 minutes', note: 'Frequent direct services between Napoli Centrale and Salerno, with the fastest trains around 30 minutes and regional services closer to 45–55 minutes; departures run roughly every 20–30 minutes.' },
            { mode: 'Private transfer / taxi', time: '50min–1h10', note: 'Door-to-door, useful if continuing straight on to an Amalfi Coast destination or the ferry terminal without a station transfer.' },
            { mode: 'Self-driving', time: '50min–1h10', note: 'A direct A3 motorway run; traffic is generally lighter outside peak commuting hours.' },
        ],
        transportNote: 'This is one of the routes on this site where the train is a clearly strong option in its own right — a direct, frequent, well-established intercity line — rather than a slower fallback to driving.',
        planningTips: [
            { title: 'Consider the train if you don\'t need a car in Salerno', description: 'Given the frequency and speed of direct services, the train is a genuinely competitive option here in a way it isn\'t on several of the other routes on this site.' },
            { title: 'Factor in onward travel if Salerno is a stopover', description: 'Many travellers pass through Salerno en route to Amalfi, Ravello or Cetara — worth planning the connection onward rather than treating Salerno as the final stop.' },
            { title: 'The ferry terminal is close to the centre', description: 'If continuing by boat along the coast, Salerno\'s passenger terminal is within walking distance of the city centre, unlike some more spread-out arrival points.' },
        ],
        ctaHeading: 'Continuing on to the Amalfi Coast?',
        ctaText: 'A private transfer takes you straight to Salerno\'s centre or ferry terminal — see our Naples to Salerno taxi transfer for details.',
        ctaAnchor: 'View the Naples to Salerno transfer',
        routePageSlug: 'naples-to-salerno-taxi',
        faqs: [
            { q: 'How far is Salerno from Naples?', a: 'Approximately 55–58 km by road via the A3 motorway; slightly shorter by rail, at just under 48 km.' },
            { q: 'How long does the drive take?', a: 'Typically 50 minutes to 1 hour 10 minutes under normal conditions, with the A3 carrying regular commuter traffic in addition to tourist traffic.' },
            { q: 'Is the train faster than driving?', a: 'It can be — Trenitalia runs frequent direct services, with the fastest trains taking around 30 minutes, making this one of the more genuinely competitive train routes on this site.' },
            { q: 'Why do people travel from Naples to Salerno specifically?', a: 'Salerno functions as the practical eastern gateway to the Amalfi Coast, with easier road and rail access than towns further along the coast road, making it a common route toward Amalfi, Ravello and Cetara.' },
            { q: 'Does Salerno have a ferry terminal?', a: 'Yes — a passenger ferry terminal close to the city centre serves seasonal coastal connections, useful for travellers continuing along the coast by boat.' },
        ],
        relatedLinks: [
            { href: '/route/naples-to-salerno-taxi', label: 'Naples to Salerno Taxi Transfer' },
            { href: '/route/naples-to-positano-taxi', label: 'Naples to Positano Taxi Transfer' },
            { href: '/distance/naples-to-sorrento-distance', label: 'Naples to Sorrento Distance' },
        ],
    },
];

export function getAllRichDistancePages(): RichDistancePage[] {
    return richDistancePages;
}

export function findRichDistancePage(slug: string): RichDistancePage | null {
    return richDistancePages.find((p) => p.slug === slug) || null;
}
