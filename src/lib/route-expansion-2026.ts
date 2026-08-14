// Route Expansion 2026 — Phase A1 (10 routes) + Phase A2 (10 routes), approved
// via the Route Expansion Audit. Each entry targets a genuinely distinct
// origin/search intent from every existing route (verified against all 246
// pre-existing slugs across routes/cities/airports/attractions/beaches/day-
// trips/tours/border pages before this file was written — zero collisions).
// Spread into `routes` in page-data.ts, same pattern as extra-routes*.ts.
import type { RouteData } from './page-data';

const bookingSection = (from: string, to: string) => ({
    h2: 'How Booking Works',
    p: [
        `Booking your ${from} to ${to} transfer takes a couple of minutes: fill in the form with your pickup details, date, time and passenger count, and you'll receive a confirmed, fixed price before you pay anything.`,
        `Once booked, your driver tracks your flight, train or ship automatically, so early arrivals, delays and schedule changes are handled without you needing to call anyone. Free cancellation is available up to 24 hours before pickup.`,
    ],
});

export const routeExpansion2026: RouteData[] = [

    // ═══════════════════════════ PHASE A1 ═══════════════════════════

    // ── Napoli Centrale cluster (train-arrival intent) ──────────────────────
    {
        slug: 'napoli-centrale-to-sorrento-taxi',
        from: 'Napoli Centrale',
        to: 'Sorrento',
        title: 'Napoli Centrale to Sorrento Taxi Transfer',
        metaTitle: 'Napoli Centrale to Sorrento Private Transfer',
        metaDescription: "Private taxi from Napoli Centrale station to Sorrento. Skip the crowded Circumvesuviana train — fixed price, meet & greet, direct A3 motorway route, door to door.",
        hero_image: '/images/almafi.webp',
        imageAlt: 'Private transfer car on the coast road toward Sorrento',
        description: "If you've arrived in Naples by high-speed train, Napoli Centrale is not the end of the journey to Sorrento — it's the start of a choice. Most travellers default to the Circumvesuviana, the slow, crowded regional line that stops more than 30 times before reaching Sorrento, offering little room for luggage and a well-known pickpocket risk on the busiest carriages. Our private transfer skips all of that: your driver meets you at the station and takes you directly onto the A3 motorway toward Castellammare di Stabia and the Sorrentine coast, door to door.",
        distance: '~48 km',
        duration: '~1 hour 10 min',
        highlights: [
            'Meet & greet at Napoli Centrale, no station navigation needed',
            'Direct motorway route — avoids the Circumvesuviana entirely',
            'Door-to-door drop-off at your Sorrento hotel',
            'Train tracked automatically — waits if your Frecciarossa runs late',
            'Fixed all-inclusive price agreed before you travel',
        ],
        sections: [
            {
                h2: 'Where Your Driver Meets You',
                p: [
                    "Napoli Centrale is one of Italy's busiest stations, with multiple exits and levels that can be disorienting after a long train ride. Your driver waits at the main exit on Piazza Garibaldi holding a name sign, so you don't have to search for a taxi rank or figure out which exit leads where.",
                    "From the station, the drive follows the A3 motorway south past Torre Annunziata and Castellammare di Stabia before climbing the final stretch into Sorrento — a single, direct route with no changes, no platform waits and no standing room only.",
                ],
            },
            {
                h2: 'Why Skip the Circumvesuviana',
                p: [
                    "The Circumvesuviana regional train connects Naples to Sorrento in theory, but in practice it means dragging luggage through a different, less central station (Napoli Porta Nolana), a journey of 60-70 minutes with over 30 stops, minimal luggage space, and carriages that get seriously crowded in summer. A private transfer from Napoli Centrale removes every one of those friction points in one direct ride.",
                ],
            },
            bookingSection('Napoli Centrale', 'Sorrento'),
        ],
        faqs: [
            { q: 'Where exactly at Napoli Centrale does the driver wait?', a: 'At the main station exit on Piazza Garibaldi, holding a sign with your name — the easiest and most visible meeting point at a station with multiple exits.' },
            { q: 'Is this faster than the Circumvesuviana train?', a: 'Yes, usually — the Circumvesuviana takes 60-70 minutes with over 30 stops and standing-room crowding in season, while a private transfer takes around 1 hour 10 minutes door to door via the A3 motorway with no stops.' },
            { q: 'What if my high-speed train from Rome or Florence is delayed?', a: "We track your train, so a delayed Frecciarossa or Italo doesn't affect your pickup — your driver adjusts automatically." },
            { q: 'Can the driver help with heavy luggage at the station?', a: "Yes — your driver assists with luggage from the exit to the vehicle, and again at your Sorrento hotel." },
            { q: 'Can I combine this with a Pompeii stop on the way?', a: "Yes, a short stop at Pompeii can be arranged along the A3 route — let us know when booking so the timing can be planned." },
        ],
        vehicleOptions: true,
        relatedLinks: [
            { href: '/city/naples', label: 'Naples Taxi Service' },
            { href: '/city/sorrento', label: 'Sorrento Taxi Service' },
            { href: '/route/naples-airport-to-sorrento-taxi', label: 'Naples Airport to Sorrento (flying in instead?)' },
            { href: '/route/napoli-centrale-to-positano-taxi', label: 'Napoli Centrale to Positano Transfer' },
            { href: '/route/napoli-centrale-to-amalfi-taxi', label: 'Napoli Centrale to Amalfi Transfer' },
        ],
    },
    {
        slug: 'napoli-centrale-to-positano-taxi',
        from: 'Napoli Centrale',
        to: 'Positano',
        title: 'Napoli Centrale to Positano Taxi Transfer',
        metaTitle: 'Napoli Centrale to Positano Private Transfer',
        metaDescription: "Private taxi from Napoli Centrale station to Positano. One direct ride instead of train-plus-bus — fixed price, meet & greet, door-to-door to your hotel.",
        hero_image: '/images/almafi.webp',
        imageAlt: 'Cliffside village of Positano seen from the coastal road',
        description: "Reaching Positano from Napoli Centrale by public transport means the Circumvesuviana to Sorrento followed by a second connection — a SITA bus along the coast road — with luggage in tow for both legs. Our private transfer replaces that whole chain with one direct ride: your driver meets you at the station and takes the A3 motorway toward Castellammare di Stabia before joining the SS163 coastal road into Positano.",
        distance: '~58 km',
        duration: '~1 hour 25 min',
        highlights: [
            'Meet & greet at Napoli Centrale, no train-then-bus connection',
            'Single direct ride via the A3 and SS163 coastal road',
            'Door-to-door drop-off at your Positano hotel or the nearest accessible point',
            'Train tracked automatically for delayed arrivals',
            'Fixed all-inclusive price agreed before you travel',
        ],
        sections: [
            {
                h2: 'Where Your Driver Meets You',
                p: [
                    "Your driver waits at Napoli Centrale's main exit on Piazza Garibaldi with a name sign. From there it's a single journey — the A3 motorway south, then onto the SS163 coastal road for the final approach into Positano, where many hotels sit above the main road and require a short walk from the drop-off point.",
                ],
            },
            {
                h2: 'Why Not Train Plus Bus',
                p: [
                    "Getting to Positano by public transport from Napoli Centrale means the Circumvesuviana to Sorrento (60-70 minutes, over 30 stops), then a SITA bus along the SS163 that can take another 40-50 minutes in summer traffic, with no guaranteed luggage space on either leg. A private transfer is one booked journey, timed to your actual train, with your bags handled the whole way.",
                ],
            },
            bookingSection('Napoli Centrale', 'Positano'),
        ],
        faqs: [
            { q: 'How long does the transfer from Napoli Centrale to Positano take?', a: 'Around 1 hour 25 minutes via the A3 motorway and SS163 coastal road, traffic depending — busier in July and August.' },
            { q: 'Is this quicker than the train-plus-bus route?', a: "Usually — the Circumvesuviana-to-SITA-bus combination often takes close to 2 hours with two changes and luggage handling at each. A private transfer is one direct ride." },
            { q: "Can the driver reach my hotel directly?", a: "Most Positano hotels are reachable, though some cliffside properties are only accessible on foot from the nearest road point — your driver will help with luggage to the entrance." },
            { q: 'Does the driver track my train for delays?', a: "Yes, so a late-running Frecciarossa or Italo doesn't affect your pickup time." },
            { q: 'Can I stop in Sorrento along the way?', a: 'Yes, a short stop can be arranged on the A3/SS163 route — mention it when booking.' },
        ],
        vehicleOptions: true,
        relatedLinks: [
            { href: '/city/naples', label: 'Naples Taxi Service' },
            { href: '/city/positano', label: 'Positano Taxi Service' },
            { href: '/route/naples-airport-to-positano-taxi', label: 'Naples Airport to Positano (flying in instead?)' },
            { href: '/route/napoli-centrale-to-sorrento-taxi', label: 'Napoli Centrale to Sorrento Transfer' },
            { href: '/route/napoli-centrale-to-amalfi-taxi', label: 'Napoli Centrale to Amalfi Transfer' },
            { href: '/route/sorrento-to-positano-taxi', label: 'Sorrento to Positano Transfer' },
        ],
    },
    {
        slug: 'napoli-centrale-to-amalfi-taxi',
        from: 'Napoli Centrale',
        to: 'Amalfi',
        title: 'Napoli Centrale to Amalfi Taxi Transfer',
        metaTitle: 'Napoli Centrale to Amalfi Private Transfer',
        metaDescription: "Private taxi from Napoli Centrale station to Amalfi. Skip the Circumvesuviana-plus-SITA-bus route — fixed price, meet & greet, direct door-to-door transfer.",
        hero_image: '/images/almafi.webp',
        imageAlt: 'Amalfi town cathedral steps and harbour on the Amalfi Coast',
        description: "Amalfi is the furthest of the coast's main towns from Naples by road, and the public-transport route reflects that — a Circumvesuviana train to Sorrento, then a long SITA bus ride along the full length of the SS163. A private transfer from Napoli Centrale covers the same distance directly, taking the A3 motorway south before joining the coastal road for the final scenic stretch into Amalfi.",
        distance: '~68 km',
        duration: '~1 hour 40 min',
        highlights: [
            'Meet & greet at Napoli Centrale, single direct journey',
            'A3 motorway plus SS163 coastal road — no train-to-bus change',
            'Door-to-door to your Amalfi hotel',
            'Train tracked automatically for delays',
            'Fixed all-inclusive price agreed before you travel',
        ],
        sections: [
            {
                h2: 'Where Your Driver Meets You',
                p: [
                    "Your driver waits at Napoli Centrale's main exit on Piazza Garibaldi with a name sign. The route runs south on the A3 motorway to Castellammare di Stabia, then follows the SS163 coastal road past Positano and Praiano before reaching Amalfi's harbourfront.",
                ],
            },
            {
                h2: 'The Full-Coast Public Transport Alternative',
                p: [
                    "Reaching Amalfi from Napoli Centrale by public transport is the longest of the coast connections — Circumvesuviana to Sorrento, then a SITA bus covering the entire SS163 past Positano, often 1.5 hours or more in season traffic, with luggage on both legs. A private transfer covers the same ground in one direct, comfortable ride.",
                ],
            },
            bookingSection('Napoli Centrale', 'Amalfi'),
        ],
        faqs: [
            { q: 'How long does the transfer from Napoli Centrale to Amalfi take?', a: 'Around 1 hour 40 minutes via the A3 motorway and SS163 coastal road — longer in peak summer traffic.' },
            { q: 'Is this the longest of the Napoli Centrale coast transfers?', a: "Yes — Amalfi is the furthest of the three main coast towns from Naples by road, though still a single direct journey rather than a multi-leg public transport trip." },
            { q: 'Can I stop in Positano on the way to Amalfi?', a: 'Yes, a scenic stop can be arranged along the SS163 — let your driver know when booking.' },
            { q: 'Does the driver track my train?', a: "Yes, so a delayed Frecciarossa or Italo doesn't affect your pickup." },
            { q: 'Can I continue to Ravello from Amalfi the same day?', a: 'Yes, Ravello is a short additional drive from Amalfi and can be added to your booking.' },
        ],
        vehicleOptions: true,
        relatedLinks: [
            { href: '/city/naples', label: 'Naples Taxi Service' },
            { href: '/city/amalfi', label: 'Amalfi Taxi Service' },
            { href: '/route/naples-airport-to-amalfi-taxi', label: 'Naples Airport to Amalfi (flying in instead?)' },
            { href: '/route/napoli-centrale-to-sorrento-taxi', label: 'Napoli Centrale to Sorrento Transfer' },
            { href: '/route/napoli-centrale-to-positano-taxi', label: 'Napoli Centrale to Positano Transfer' },
        ],
    },

    // ── Naples Cruise Port cluster (shore-excursion intent) ─────────────────
    {
        slug: 'naples-cruise-port-to-sorrento-taxi',
        from: 'Naples Cruise Port',
        to: 'Sorrento',
        title: 'Naples Cruise Port to Sorrento Taxi Transfer',
        metaTitle: 'Naples Cruise Port to Sorrento Private Transfer',
        metaDescription: "Private shore-excursion transfer from Naples Stazione Marittima cruise terminal to Sorrento. Fixed price, timed to your ship's schedule, round trip available.",
        hero_image: '/images/naples.jpg',
        imageAlt: 'Cruise ship docked at Naples Stazione Marittima with the bay behind',
        description: "Disembarking at Naples' Stazione Marittima cruise terminal puts you a short drive from Sorrento, but port traffic and the walk from your gangway to a taxi rank can eat into a limited shore-excursion window. Our private transfer has your driver waiting at the terminal exit the moment you clear the port gate, ready to take the A3 motorway south to Sorrento and back in time for your ship's departure.",
        distance: '~50 km',
        duration: '~1 hour 15 min',
        highlights: [
            'Driver waits at the Stazione Marittima terminal exit',
            'Timed to your ship\'s docking and all-aboard schedule',
            'Direct A3 motorway route to Sorrento — no port-traffic stress',
            'Round-trip available so you\'re back before departure',
            'Fixed all-inclusive price agreed before you travel',
        ],
        sections: [
            {
                h2: 'Meeting Point at the Cruise Terminal',
                p: [
                    "Naples' Stazione Marittima is a working port with several berths, and finding ground transport can mean a longer walk than expected once you're off the gangway. Your driver waits just outside the terminal exit with a name sign, so you're in the car within minutes of clearing the port gate — not queuing for a taxi rank shared with several other ships' passengers.",
                    "The route to Sorrento follows the A3 motorway south past Castellammare di Stabia, avoiding the worst of central Naples traffic that a coach transfer would otherwise sit in.",
                ],
            },
            {
                h2: 'Built Around Your Ship\'s Schedule',
                p: [
                    "Shore excursions live or die on timing. We ask for your ship's docking and all-aboard times when you book, so your driver plans the return leg with a comfortable buffer — not a rushed dash back to the terminal. If your booking is a full-day excursion, the driver can wait in Sorrento or return at an agreed pickup time.",
                ],
            },
            bookingSection('Naples Cruise Port', 'Sorrento'),
        ],
        faqs: [
            { q: 'Where at the cruise terminal does the driver meet me?', a: 'Just outside the Stazione Marittima terminal exit, holding a sign with your name — no need to search the port for ground transport.' },
            { q: 'Can this be booked as a round trip back to the ship?', a: "Yes — most guests book it as a round trip timed to their ship's all-aboard time, with the driver either waiting in Sorrento or returning at an agreed pickup time." },
            { q: 'How much time should I allow given the all-aboard deadline?', a: "Tell us your ship's schedule when booking — your driver builds in a comfortable margin so you're back at the terminal well before all-aboard, not cutting it close." },
            { q: 'Is this different from the Naples Airport to Sorrento transfer?', a: "Yes — this route starts at the Stazione Marittima cruise terminal on the waterfront, not the airport, so pickup location and timing are built entirely around your ship's docking schedule." },
            { q: 'Can I do a shorter visit instead of a full day in Sorrento?', a: 'Yes, tell us how much time you have and we\'ll build the round trip around it.' },
        ],
        vehicleOptions: true,
        relatedLinks: [
            { href: '/city/naples', label: 'Naples Taxi Service' },
            { href: '/city/sorrento', label: 'Sorrento Taxi Service' },
            { href: '/route/naples-airport-to-sorrento-taxi', label: 'Naples Airport to Sorrento (flying in instead?)' },
            { href: '/route/naples-cruise-port-to-amalfi-taxi', label: 'Naples Cruise Port to Amalfi Transfer' },
            { href: '/route/naples-cruise-port-to-pompeii-taxi', label: 'Naples Cruise Port to Pompeii Transfer' },
            { href: '/route/rome-to-civitavecchia-taxi', label: 'Docking at Civitavecchia instead? Rome Cruise Transfers' },
        ],
    },
    {
        slug: 'naples-cruise-port-to-amalfi-taxi',
        from: 'Naples Cruise Port',
        to: 'Amalfi',
        title: 'Naples Cruise Port to Amalfi Taxi Transfer',
        metaTitle: 'Naples Cruise Port to Amalfi Private Transfer',
        metaDescription: "Private shore-excursion transfer from Naples Stazione Marittima cruise terminal to Amalfi. Fixed price, timed to your ship's all-aboard deadline.",
        hero_image: '/images/almafi.webp',
        imageAlt: 'Amalfi harbour with the coastal road winding above',
        description: "Amalfi is a longer shore excursion from Naples' Stazione Marittima than Sorrento, so timing against your ship's schedule matters even more. Our private transfer has your driver waiting at the terminal exit the moment you disembark, taking the A3 motorway and then the SS163 coastal road directly to Amalfi, with the return trip planned around your all-aboard time.",
        distance: '~70 km',
        duration: '~1 hour 45 min',
        highlights: [
            'Driver waits at the Stazione Marittima terminal exit',
            'Round trip timed to your ship\'s all-aboard deadline',
            'Direct A3 + SS163 coastal route to Amalfi',
            'No port-traffic delays eating into your shore time',
            'Fixed all-inclusive price agreed before you travel',
        ],
        sections: [
            {
                h2: 'Meeting Point and Route',
                p: [
                    "Your driver waits at the Stazione Marittima terminal exit with a name sign, ready to leave as soon as you clear the port gate. The route runs the A3 motorway south to Castellammare di Stabia, then the SS163 coastal road past Positano to Amalfi's harbourfront.",
                ],
            },
            {
                h2: 'Managing the Longer Round Trip',
                p: [
                    "Because Amalfi is roughly 30 minutes further than Sorrento, the margin against your ship's all-aboard time matters more. Tell us your docking and departure times when booking, and your driver will plan a return schedule that gets you back to the terminal with a genuine safety buffer, not a rushed one.",
                ],
            },
            bookingSection('Naples Cruise Port', 'Amalfi'),
        ],
        faqs: [
            { q: 'Is Amalfi a realistic shore excursion from Naples?', a: "Yes, with a private transfer — allow roughly 1 hour 45 minutes each way, so it suits ships with a longer port call rather than a very short call." },
            { q: 'Where does the driver meet me at the port?', a: 'Just outside the Stazione Marittima terminal exit, holding a name sign.' },
            { q: 'What if my ship\'s schedule is tight?', a: "Tell us your docking and all-aboard times when booking — if the window is too tight for Amalfi specifically, we can suggest Sorrento or Pompeii instead, which are shorter round trips." },
            { q: 'Can the driver wait in Amalfi while I explore?', a: 'Yes, waiting time can be included in your booking, or an agreed pickup time set instead.' },
            { q: 'Can I combine Amalfi with a stop in Positano?', a: 'Yes, a brief stop can be arranged along the SS163 if your schedule allows.' },
        ],
        vehicleOptions: true,
        relatedLinks: [
            { href: '/city/naples', label: 'Naples Taxi Service' },
            { href: '/city/amalfi', label: 'Amalfi Taxi Service' },
            { href: '/route/naples-airport-to-amalfi-taxi', label: 'Naples Airport to Amalfi (flying in instead?)' },
            { href: '/route/naples-cruise-port-to-sorrento-taxi', label: 'Naples Cruise Port to Sorrento Transfer' },
            { href: '/route/naples-cruise-port-to-pompeii-taxi', label: 'Naples Cruise Port to Pompeii Transfer' },
        ],
    },
    {
        slug: 'naples-cruise-port-to-pompeii-taxi',
        from: 'Naples Cruise Port',
        to: 'Pompeii',
        title: 'Naples Cruise Port to Pompeii Taxi Transfer',
        metaTitle: 'Naples Cruise Port to Pompeii Private Transfer',
        metaDescription: "Private shore-excursion transfer from Naples Stazione Marittima cruise terminal to Pompeii. Fixed price, ideal for shorter port calls, round trip available.",
        hero_image: '/images/naples.jpg',
        imageAlt: 'Ancient ruins of Pompeii with Mount Vesuvius in the background',
        description: "Pompeii is the classic short shore excursion from Naples — close enough to fit a half-day call, far enough to feel like a genuine day out. Our private transfer collects you at the Stazione Marittima terminal exit and drives you directly to the archaeological site entrance, with the driver available to wait or return at an agreed time so you're back at the port well before all-aboard.",
        distance: '~35 km',
        duration: '~45 min',
        highlights: [
            'Driver waits at the Stazione Marittima terminal exit',
            'Shortest of the Naples cruise excursions — fits shorter port calls',
            'Direct to the Pompeii site entrance',
            'Round trip timed to your ship\'s schedule',
            'Fixed all-inclusive price agreed before you travel',
        ],
        sections: [
            {
                h2: 'Built for a Half-Day Port Call',
                p: [
                    "At around 45 minutes each way, Pompeii is the most time-efficient of the Naples shore excursions — a realistic option even on ships with a shorter Naples call. Your driver meets you at the Stazione Marittima terminal exit and drives directly to the Pompeii entrance, avoiding the coach-tour queues that build up at the site's main gate.",
                ],
            },
            {
                h2: 'Waiting or Return Pickup',
                p: [
                    "A typical Pompeii visit runs 2-3 hours. You can have your driver wait nearby, or arrange a fixed return pickup time — either way, tell us your ship's all-aboard time when booking so the schedule leaves a genuine margin for getting back to the terminal.",
                ],
            },
            bookingSection('Naples Cruise Port', 'Pompeii'),
        ],
        faqs: [
            { q: 'How much time do I need for Pompeii on a shore excursion?', a: 'Most visitors spend 2-3 hours at the site; with a 45-minute drive each way, allow roughly 4 hours total from leaving the ship to returning.' },
            { q: 'Where does the driver meet me at the port?', a: 'Just outside the Stazione Marittima terminal exit, holding a name sign.' },
            { q: 'Can the driver wait while I visit the ruins?', a: 'Yes, waiting time can be included, or you can arrange a fixed return pickup instead.' },
            { q: 'Is this quicker than a coach shore excursion?', a: "Usually, yes — private transfers skip the group-coach loading process and go straight to the site entrance rather than a general parking area." },
            { q: 'Can I add Mount Vesuvius if time allows?', a: 'If your port call is long enough, a Vesuvius add-on can be arranged — mention it when booking so the timing can be checked against your ship\'s schedule.' },
        ],
        vehicleOptions: true,
        relatedLinks: [
            { href: '/city/naples', label: 'Naples Taxi Service' },
            { href: '/route/naples-airport-to-pompeii-taxi', label: 'Naples Airport to Pompeii (flying in instead?)' },
            { href: '/route/naples-cruise-port-to-sorrento-taxi', label: 'Naples Cruise Port to Sorrento Transfer' },
            { href: '/route/naples-cruise-port-to-amalfi-taxi', label: 'Naples Cruise Port to Amalfi Transfer' },
            { href: '/route/rome-to-pompeii-taxi', label: 'Visiting from Rome instead? Rome to Pompeii' },
        ],
    },

    // ── Bergamo Airport → Milan (budget-carrier, no-rail-link intent) ──────
    {
        slug: 'bergamo-airport-to-milan-taxi',
        from: 'Milan Bergamo Airport',
        to: 'Milan',
        title: 'Bergamo Airport to Milan Taxi Transfer',
        metaTitle: 'Bergamo Airport to Milan Private Transfer',
        metaDescription: "Private taxi from Milan Bergamo Airport (BGY) to Milan. No direct rail link exists — skip the coach-plus-metro route with a fixed-price, door-to-door transfer.",
        hero_image: '/images/milan airport.jpg',
        imageAlt: 'Private car on the motorway approaching Milan skyline',
        description: "Milan Bergamo (BGY) has no direct rail link into the city — reaching central Milan by public transport means a coach to Milano Centrale, followed by getting from the station to your actual hotel, two separate legs with luggage. Our private transfer covers the same ~45 km in one direct ride, door to door, with your driver already positioned in arrivals and tracking your flight before you land.",
        distance: '~48 km',
        duration: '~55–65 min',
        highlights: [
            'Meet & greet in the BGY arrivals hall',
            'Door-to-door — no coach-then-metro connection',
            'Real-time flight tracking, including delayed low-cost arrivals',
            'Free waiting time after landing',
            'Fixed all-inclusive price agreed before you travel',
        ],
        sections: [
            {
                h2: 'Why This Route Matters at Bergamo',
                p: [
                    "Bergamo is northern Italy's largest low-cost hub, but it sits about 45 km northeast of central Milan with no direct train connection. The standard alternative is a coach service to Milano Centrale — affordable, but it drops you at the station rather than your hotel, and can run infrequently outside peak hours.",
                    "A private transfer solves both problems at once: one direct ride from the arrivals hall to your exact Milan address, with no second leg and no station-to-hotel taxi needed afterward.",
                ],
            },
            {
                h2: 'Built for Low-Cost Flight Schedules',
                p: [
                    "Bergamo is served heavily by Ryanair and other budget carriers, whose schedules can shift. Your flight is tracked automatically, so your driver adjusts to your actual landing time — useful for the early-morning and late-evening slots common on low-cost routes.",
                ],
            },
            bookingSection('Milan Bergamo Airport', 'Milan'),
        ],
        faqs: [
            { q: 'Is there a train from Bergamo Airport to Milan?', a: 'No — there is no direct rail link. A coach service runs to Milano Centrale, or a private transfer covers the same route door-to-door in one leg.' },
            { q: 'How long does the transfer from Bergamo Airport to Milan take?', a: 'Typically 55 to 65 minutes, depending on traffic on the approach into the city.' },
            { q: 'Where does the driver meet me at Bergamo?', a: 'In the single arrivals hall, holding a sign with your name — straightforward to spot given the terminal\'s manageable size.' },
            { q: 'Does the driver track delayed Ryanair or Wizz Air flights?', a: 'Yes, your flight is monitored automatically and the driver adjusts to your actual landing time.' },
            { q: 'Can I be dropped at a specific Milan neighbourhood or hotel?', a: 'Yes — door-to-door means any address in Milan, not just the central station.' },
        ],
        vehicleOptions: true,
        relatedLinks: [
            { href: '/airport/bergamo', label: 'Milan Bergamo Airport Guide' },
            { href: '/city/milan', label: 'Milan Taxi Service' },
            { href: '/route/milan-malpensa-to-como-taxi', label: 'Continuing to Lake Como instead? Malpensa to Como' },
            { href: '/route/milan-to-turin-taxi', label: 'Milan to Turin Transfer' },
        ],
    },

    // ── Treviso Airport → Venice (budget-carrier, no-rail-link intent) ─────
    {
        slug: 'treviso-airport-to-venice-taxi',
        from: 'Treviso Airport',
        to: 'Venice',
        title: 'Treviso Airport to Venice Taxi Transfer',
        metaTitle: 'Treviso Airport to Venice Private Transfer',
        metaDescription: 'Private taxi from Treviso Airport (TSF) to Venice Piazzale Roma. No direct rail link exists — fixed price, meet & greet, direct door-to-door transfer.',
        hero_image: '/images/venice airport.webp',
        imageAlt: 'Private car approaching Piazzale Roma at the edge of Venice\'s car-free centre',
        description: "Treviso Airport (TSF) is Venice's busy low-cost hub, but it has no direct rail link and sits about 40 km from the city — meaning most arriving passengers face a bus into Treviso town followed by a second connection toward Venice. Our private transfer skips both legs, taking you directly to Piazzale Roma, the edge of Venice's car-free historic centre, where your onward journey by foot or water taxi begins.",
        distance: '~40 km',
        duration: '~45–55 min',
        highlights: [
            'Meet & greet in the TSF arrivals hall',
            'Direct to Piazzale Roma — no Treviso-town bus connection',
            'Real-time flight tracking for low-cost carrier schedules',
            'Luggage assistance at both ends',
            'Fixed all-inclusive price agreed before you travel',
        ],
        sections: [
            {
                h2: 'Why This Route Matters at Treviso',
                p: [
                    "Treviso is used heavily by Ryanair and Wizz Air as a lower-cost alternative to Venice Marco Polo, but with no rail connection, reaching Venice by public transport usually means a bus into Treviso itself, then a further bus or train toward the city — two changes with luggage before you've even reached the car-free zone.",
                    "A private transfer takes you directly to Piazzale Roma in one ride, the standard drop-off point for Venice since no vehicle can enter the historic centre beyond this square.",
                ],
            },
            {
                h2: 'What Happens at Piazzale Roma',
                p: [
                    "Piazzale Roma is Venice's last point reachable by road — from there, the historic centre is on foot or by water taxi/vaporetto. Your driver helps unload luggage at the drop-off point; if your accommodation is deeper into the city, a water taxi or the vaporetto public boat continues the final leg.",
                ],
            },
            bookingSection('Treviso Airport', 'Venice'),
        ],
        faqs: [
            { q: 'Is there a train from Treviso Airport to Venice?', a: 'No — there is no direct rail link. Public transport requires a bus connection via Treviso town; a private transfer goes directly to Piazzale Roma in one ride.' },
            { q: 'How long does the transfer take?', a: 'Typically 45 to 55 minutes, depending on traffic on the approach to Venice.' },
            { q: 'Where does the transfer drop me off?', a: 'At Piazzale Roma — the last point reachable by road, since Venice\'s historic centre is car-free beyond this square.' },
            { q: 'What happens after Piazzale Roma?', a: 'Your driver assists with luggage at the drop-off; onward travel into the historic centre continues by foot or water taxi/vaporetto, depending on your accommodation.' },
            { q: 'Does the driver track delayed flights?', a: 'Yes, your flight is monitored automatically, useful given how often low-cost schedules shift.' },
        ],
        vehicleOptions: true,
        relatedLinks: [
            { href: '/airport/treviso', label: 'Treviso Airport Guide' },
            { href: '/city/venice', label: 'Venice Taxi Service' },
            { href: '/route/venice-to-verona-taxi', label: 'Venice to Verona Transfer' },
            { href: '/route/milan-to-venice-taxi', label: 'Milan to Venice Transfer' },
        ],
    },

    // ── Ciampino cluster (budget-carrier onward routes) ─────────────────────
    {
        slug: 'ciampino-to-sorrento-taxi',
        from: 'Rome Ciampino Airport',
        to: 'Sorrento',
        title: 'Rome Ciampino to Sorrento Taxi Transfer',
        metaTitle: 'Rome Ciampino to Sorrento Private Transfer',
        metaDescription: 'Private taxi from Rome Ciampino Airport (CIA) to Sorrento. Fixed price, meet & greet, direct A1/A3 motorway route avoiding central Rome traffic.',
        hero_image: '/images/almafi.webp',
        imageAlt: 'Coastal road toward Sorrento with the Bay of Naples visible below',
        description: "Landing at Ciampino with Ryanair or Wizz Air doesn't mean your Sorrento trip has to start with a detour into central Rome. Our private transfer collects you directly from Ciampino's arrivals hall and heads south, joining the A1 and A3 motorways toward Naples and the Sorrentine peninsula — the same direct route Fiumicino passengers use, just starting a little further south.",
        distance: '~260 km',
        duration: '~3 hours 15 min',
        highlights: [
            'Meet & greet at Rome Ciampino arrivals',
            'Direct south — no need to detour through central Rome first',
            'Door-to-door to your Sorrento hotel',
            'Flight tracked automatically for low-cost carrier delays',
            'Fixed all-inclusive price agreed before you travel',
        ],
        sections: [
            {
                h2: 'Starting South of Rome Saves Time',
                p: [
                    "Ciampino sits south of central Rome, so a transfer to Sorrento doesn't need to cross the city first — your driver joins the A1 motorway heading south directly from the airport, then the A3 toward Naples and onward to the Sorrentine coast.",
                    "This makes the Ciampino-to-Sorrento run marginally shorter than the equivalent trip starting from a central Rome hotel, since the city-centre traffic that adds time to the start of that journey simply isn't part of this one.",
                ],
            },
            {
                h2: 'Built Around Low-Cost Schedules',
                p: [
                    "Ciampino is Rome's Ryanair and Wizz Air hub, and low-cost schedules can run early, late or delayed. Your flight is tracked automatically, so your driver is positioned in arrivals for your actual landing time, with free waiting time included.",
                ],
            },
            bookingSection('Rome Ciampino Airport', 'Sorrento'),
        ],
        faqs: [
            { q: 'How long does the transfer from Ciampino to Sorrento take?', a: 'Around 3 hours 15 minutes via the A1 and A3 motorways, traffic depending.' },
            { q: 'Is this route different from flying into Fiumicino?', a: 'The destination and driving route are similar, but pickup starts at Ciampino rather than Fiumicino — useful if your low-cost flight only serves CIA, since it avoids detouring through Rome first.' },
            { q: 'Can I stop in Naples or Pompeii on the way?', a: 'Yes, a stop can be arranged along the A3 route — let us know when booking.' },
            { q: 'Does the driver track Ryanair and Wizz Air flights?', a: 'Yes, your flight is monitored automatically and the driver adjusts to your actual landing time.' },
            { q: 'Can I book a return transfer from Sorrento to Ciampino?', a: 'Yes, return transfers work the same way — book both legs, or arrange your return before departure.' },
        ],
        vehicleOptions: true,
        relatedLinks: [
            { href: '/airport/rome-ciampino', label: 'Rome Ciampino Airport Guide' },
            { href: '/city/sorrento', label: 'Sorrento Taxi Service' },
            { href: '/route/rome-fiumicino-to-sorrento-taxi', label: 'Flying into Fiumicino instead? Fiumicino to Sorrento' },
            { href: '/route/ciampino-to-naples-taxi', label: 'Rome Ciampino to Naples Transfer' },
            { href: '/route/rome-to-sorrento-taxi', label: 'Rome (city centre) to Sorrento Transfer' },
        ],
    },
    {
        slug: 'ciampino-to-naples-taxi',
        from: 'Rome Ciampino Airport',
        to: 'Naples',
        title: 'Rome Ciampino to Naples Taxi Transfer',
        metaTitle: 'Rome Ciampino to Naples Private Transfer',
        metaDescription: 'Private taxi from Rome Ciampino Airport (CIA) to Naples. Fixed price, meet & greet, direct A1 motorway route — a convenient start for the Amalfi Coast.',
        hero_image: '/images/naples.jpg',
        imageAlt: 'Naples waterfront with Mount Vesuvius in the distance',
        description: "Ciampino's position south of central Rome makes it a genuinely convenient starting point for Naples — your driver joins the A1 motorway heading south straight from the arrivals hall, without first crossing through the city the way a Fiumicino pickup would need to.",
        distance: '~210 km',
        duration: '~2 hours 15 min',
        highlights: [
            'Meet & greet at Rome Ciampino arrivals',
            'Direct south on the A1 — no central Rome detour',
            'Door-to-door to your Naples hotel or address',
            'Flight tracked automatically for delays',
            'Fixed all-inclusive price agreed before you travel',
        ],
        sections: [
            {
                h2: 'Route Details',
                p: [
                    "The drive from Ciampino to Naples covers roughly 210 km on the A1 Autostrada del Sole, typically 2 hours 15 minutes depending on traffic around both cities. Because Ciampino already sits south of central Rome, this transfer starts closer to the motorway on-ramp than a pickup from a central Rome hotel would.",
                ],
            },
            {
                h2: 'A Common Route for Onward Amalfi Coast Travel',
                p: [
                    "Many travellers landing at Ciampino use Naples as a staging point before continuing to Sorrento, Positano or Capri. If that's your plan, mention it when booking — a stop in Naples itself, or a continuation straight to the coast, can both be arranged as part of the same journey.",
                ],
            },
            bookingSection('Rome Ciampino Airport', 'Naples'),
        ],
        faqs: [
            { q: 'How long does the transfer from Ciampino to Naples take?', a: 'Around 2 hours 15 minutes via the A1 motorway, traffic depending.' },
            { q: 'Is Ciampino a good starting point for the Amalfi Coast?', a: 'Yes — Ciampino sits south of central Rome, so this route to Naples (and onward to the coast) avoids the city-centre traffic a Fiumicino-origin transfer would face at the start of the journey.' },
            { q: 'Can I continue straight to Sorrento or Positano instead of stopping in Naples?', a: 'Yes — this can be booked as a longer through-transfer if you\'d rather not overnight in Naples.' },
            { q: 'Does the driver track low-cost carrier delays?', a: 'Yes, your flight is monitored automatically.' },
            { q: 'Can I book a return transfer from Naples to Ciampino?', a: 'Yes, arrange both legs when booking or contact us for your return.' },
        ],
        vehicleOptions: true,
        relatedLinks: [
            { href: '/airport/rome-ciampino', label: 'Rome Ciampino Airport Guide' },
            { href: '/city/naples', label: 'Naples Taxi Service' },
            { href: '/route/rome-to-naples-taxi', label: 'Rome (city centre) to Naples Transfer' },
            { href: '/route/ciampino-to-sorrento-taxi', label: 'Rome Ciampino to Sorrento Transfer' },
            { href: '/route/rome-fiumicino-to-rome-ciampino-taxi', label: 'Flying into Fiumicino instead? Airport-to-Airport Transfer' },
        ],
    },

    // ═══════════════════════════ PHASE A2 ═══════════════════════════

    {
        slug: 'ciampino-to-positano-taxi',
        from: 'Rome Ciampino Airport',
        to: 'Positano',
        title: 'Rome Ciampino to Positano Taxi Transfer',
        metaTitle: 'Rome Ciampino to Positano Private Transfer',
        metaDescription: 'Private taxi from Rome Ciampino Airport (CIA) to Positano. Fixed price, meet & greet, direct A1/SS163 route avoiding central Rome traffic.',
        hero_image: '/images/almafi.webp',
        imageAlt: 'Vista panoramica di Positano dalla strada costiera — cliffside village of Positano seen from the coast road',
        description: "Landing at Ciampino for a Positano holiday means your driver starts the journey already south of central Rome, joining the A1 motorway before heading toward the coast and the SS163 for the final approach into the village. It's the same direct route Fiumicino passengers use, just without the detour through the city centre first.",
        distance: '~260 km',
        duration: '~3 hours 45 min',
        highlights: [
            'Meet & greet at Rome Ciampino arrivals',
            'Direct south — no central Rome detour',
            'Experienced driver on the SS163 coastal road',
            'Door-to-door to your Positano hotel or nearest accessible point',
            'Fixed all-inclusive price agreed before you travel',
        ],
        sections: [
            {
                h2: 'Route Details',
                p: [
                    "The drive covers roughly 260 km via the A1 motorway south, then the SS163 coastal road for the final stretch into Positano. Because Ciampino already sits south of central Rome, this route avoids the city-centre traffic that adds time to a Fiumicino-origin transfer.",
                    "Positano's cliffside layout means some accommodation sits above the main road — your driver will help with luggage on any steps or short walks to the entrance.",
                ],
            },
            {
                h2: 'Built for Low-Cost Schedules',
                p: [
                    "Ciampino is Rome's Ryanair and Wizz Air hub, and low-cost schedules shift often. Your flight is tracked automatically, so your driver adjusts to your actual landing time, with free waiting time included.",
                ],
            },
            bookingSection('Rome Ciampino Airport', 'Positano'),
        ],
        faqs: [
            { q: 'How long does the transfer from Ciampino to Positano take?', a: 'Around 3 hours 45 minutes via the A1 and SS163 coastal road, longer in peak summer traffic.' },
            { q: 'Is this different from a Fiumicino-origin transfer?', a: 'The destination and route are similar, but pickup starts at Ciampino, avoiding the central Rome traffic a Fiumicino transfer would cross at the start.' },
            { q: 'Can the driver help with luggage at my hotel?', a: "Yes — many Positano properties sit above the main road, and your driver assists with luggage to the nearest accessible entrance." },
            { q: 'Does the driver track Ryanair or Wizz Air delays?', a: 'Yes, your flight is monitored automatically.' },
        ],
        vehicleOptions: true,
        relatedLinks: [
            { href: '/airport/rome-ciampino', label: 'Rome Ciampino Airport Guide' },
            { href: '/city/positano', label: 'Positano Taxi Service' },
            { href: '/route/ciampino-to-sorrento-taxi', label: 'Rome Ciampino to Sorrento Transfer' },
            { href: '/route/rome-to-positano-taxi', label: 'Flying into Fiumicino or starting from Rome? Rome to Positano' },
        ],
    },

    // ── Lake Como named villages (Bellagio + Varenna, city + airport origin) ─
    {
        slug: 'milan-to-bellagio-taxi',
        from: 'Milan',
        to: 'Bellagio',
        title: 'Milan to Bellagio Taxi Transfer',
        metaTitle: 'Milan to Bellagio Private Transfer',
        metaDescription: "Private taxi from Milan to Bellagio, the 'Pearl of Lake Como'. Fixed price, door-to-door service directly to the village — no ferry or train changes.",
        hero_image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&q=60&w=1200',
        imageAlt: 'Promenade of Bellagio on Lake Como with mountains behind',
        description: "Bellagio sits on the promontory where Lake Como splits into its three branches, widely regarded as the lake's most photogenic village — and its position means public transport involves a train to Como or Varenna followed by a ferry crossing. Our private transfer skips both legs, driving you directly around the lake to Bellagio's doorstep.",
        distance: '~80 km',
        duration: '~1 hour 30 min',
        highlights: [
            'Direct to Bellagio — no train-plus-ferry connection',
            'Door-to-door to your hotel in the village',
            'Fixed price agreed before you travel',
            'Room for luggage — no ferry deck queues',
            'Available for a day trip or one-way transfer',
        ],
        sections: [
            {
                h2: 'Route Details',
                p: [
                    "The drive from Milan covers roughly 80 km, taking about 1 hour 30 minutes around the lake's western or eastern shore road depending on traffic. Your driver takes you directly into Bellagio's centre, close to the ferry landing and main promenade.",
                ],
            },
            {
                h2: 'Why Not Train Plus Ferry',
                p: [
                    "Reaching Bellagio by public transport means a train to Como San Giovanni or Varenna, then a ferry crossing timed to the boat schedule — workable for a day trip, awkward with luggage for a longer stay. A private transfer is one direct ride, on your own schedule.",
                ],
            },
            bookingSection('Milan', 'Bellagio'),
        ],
        faqs: [
            { q: 'How long does the transfer from Milan to Bellagio take?', a: 'Around 1 hour 30 minutes, depending on which side of the lake the route takes and traffic.' },
            { q: 'Is this quicker than the train-plus-ferry route?', a: 'It\'s more direct — no waiting for a ferry connection or carrying luggage across a dock, though the actual time can be similar depending on ferry timing.' },
            { q: 'Can the driver wait while I explore Bellagio for a day trip?', a: 'Yes, waiting time or a return pickup can both be arranged when booking.' },
            { q: 'Is this route available from Malpensa Airport instead of Milan city?', a: 'Yes — see our separate Malpensa to Bellagio transfer, a shorter drive since Malpensa sits closer to the lake.' },
        ],
        vehicleOptions: true,
        relatedLinks: [
            { href: '/city/milan', label: 'Milan Taxi Service' },
            { href: '/city/como', label: 'Como Taxi Service' },
            { href: '/route/malpensa-to-bellagio-taxi', label: 'Flying into Malpensa instead? Malpensa to Bellagio' },
            { href: '/route/milan-to-varenna-taxi', label: 'Milan to Varenna Transfer' },
            { href: '/route/milan-malpensa-to-como-taxi', label: 'Milan Malpensa to Como Transfer' },
            { href: '/tour/lake-como', label: 'Lake Como Tour' },
        ],
    },
    {
        slug: 'malpensa-to-bellagio-taxi',
        from: 'Milan Malpensa Airport',
        to: 'Bellagio',
        title: 'Milan Malpensa to Bellagio Taxi Transfer',
        metaTitle: 'Malpensa Airport to Bellagio Private Transfer',
        metaDescription: "Private taxi from Milan Malpensa Airport to Bellagio on Lake Como. Skip Milan entirely — fixed price, meet & greet, direct door-to-door transfer.",
        hero_image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&q=60&w=1200',
        imageAlt: 'Bellagio village on Lake Como seen from the water',
        description: "Malpensa sits closer to Lake Como than to central Milan, which makes flying directly into a Bellagio holiday more straightforward than it might seem. Your driver waits in arrivals and takes you around the lake directly to the village, without any need to pass through Milan.",
        distance: '~85 km',
        duration: '~1 hour 35 min',
        highlights: [
            'Meet & greet in the Malpensa arrivals hall',
            'Skip Milan entirely — direct to the lake',
            'Door-to-door to your hotel in Bellagio',
            'Flight tracking included for delays',
            'Fixed all-inclusive price agreed before you travel',
        ],
        sections: [
            {
                h2: 'Route Details',
                p: [
                    "The drive from Malpensa covers roughly 85 km and takes about 1 hour 35 minutes around the lake. Your driver waits in the arrivals hall with a name sign and heads directly for Bellagio — no detour through Milan required.",
                ],
            },
            {
                h2: 'A Genuinely Direct Arrival',
                p: [
                    "Many travellers assume a Milan airport arrival means starting in the city, but Malpensa's position west of Milan puts it closer to the southern tip of the lake than the city centre is. This transfer takes advantage of that — arriving straight into your Lake Como holiday.",
                ],
            },
            bookingSection('Milan Malpensa Airport', 'Bellagio'),
        ],
        faqs: [
            { q: 'Is Malpensa really closer to Lake Como than Milan?', a: 'Yes — geographically Malpensa sits closer to the southern end of the lake than central Milan does, making this a genuinely direct route.' },
            { q: 'How long does the transfer take?', a: 'Around 1 hour 35 minutes, traffic depending.' },
            { q: 'Does the driver track my flight?', a: 'Yes, automatically, so early or delayed landings don\'t affect your pickup.' },
            { q: 'Can I book this as a round trip back to Malpensa?', a: 'Yes, arrange both legs when booking, or contact us for your return before departure.' },
        ],
        vehicleOptions: true,
        relatedLinks: [
            { href: '/city/como', label: 'Como Taxi Service' },
            { href: '/route/milan-to-bellagio-taxi', label: 'Starting from Milan city instead? Milan to Bellagio' },
            { href: '/route/malpensa-to-varenna-taxi', label: 'Malpensa to Varenna Transfer' },
            { href: '/route/milan-malpensa-to-como-taxi', label: 'Milan Malpensa to Como Transfer' },
        ],
    },
    {
        slug: 'milan-to-varenna-taxi',
        from: 'Milan',
        to: 'Varenna',
        title: 'Milan to Varenna Taxi Transfer',
        metaTitle: 'Milan to Varenna Private Transfer',
        metaDescription: 'Private taxi from Milan to Varenna, the quieter eastern-shore village on Lake Como. Fixed price, door-to-door service, no train-plus-ferry connection.',
        hero_image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&q=60&w=1200',
        imageAlt: 'Lakeside promenade of Varenna on the eastern shore of Lake Como',
        description: "Varenna sits on Lake Como's quieter eastern shore, a genuine alternative to Bellagio's crowds with the same lakefront charm. Reaching it directly by car means driving around or across the lake rather than relying on the Milan-Lecco train line and a walk up from the station — our private transfer handles the whole route in one ride.",
        distance: '~90 km',
        duration: '~1 hour 40 min',
        highlights: [
            'Direct to Varenna — no train-then-walk-uphill route',
            'Door-to-door to your lakefront hotel',
            'Quieter alternative to Bellagio, same lake',
            'Fixed price agreed before you travel',
            'Available for a day trip or one-way transfer',
        ],
        sections: [
            {
                h2: 'Route Details',
                p: [
                    "The drive from Milan covers roughly 90 km, taking about 1 hour 40 minutes around the eastern side of the lake. Your driver takes you directly to Varenna's lakefront, close to the promenade and the historic centre.",
                ],
            },
            {
                h2: 'Varenna vs the Train Line',
                p: [
                    "Varenna does have its own train station (Varenna-Esino) on the Milan-Lecco-Sondrio line, but it sits above the village, meaning a walk downhill with luggage after arrival. A private transfer takes you directly to your accommodation, at street level, without the walk.",
                ],
            },
            bookingSection('Milan', 'Varenna'),
        ],
        faqs: [
            { q: 'How long does the transfer from Milan to Varenna take?', a: 'Around 1 hour 40 minutes, traffic depending.' },
            { q: 'Doesn\'t Varenna have a train station?', a: 'Yes, Varenna-Esino, but it sits above the village — a private transfer takes you directly to your accommodation without the walk downhill.' },
            { q: 'Can I visit Bellagio from Varenna the same day?', a: 'Yes, a passenger ferry connects the two villages across the lake, or your driver can arrange the trip by road.' },
            { q: 'Is this route available from Malpensa Airport instead?', a: 'Yes — see our Malpensa to Varenna transfer for a direct airport-origin option.' },
        ],
        vehicleOptions: true,
        relatedLinks: [
            { href: '/city/milan', label: 'Milan Taxi Service' },
            { href: '/city/como', label: 'Como Taxi Service' },
            { href: '/route/malpensa-to-varenna-taxi', label: 'Flying into Malpensa instead? Malpensa to Varenna' },
            { href: '/route/milan-to-bellagio-taxi', label: 'Milan to Bellagio Transfer' },
        ],
    },
    {
        slug: 'malpensa-to-varenna-taxi',
        from: 'Milan Malpensa Airport',
        to: 'Varenna',
        title: 'Milan Malpensa to Varenna Taxi Transfer',
        metaTitle: 'Malpensa Airport to Varenna Private Transfer',
        metaDescription: "Private taxi from Milan Malpensa Airport to Varenna on Lake Como's eastern shore. Fixed price, meet & greet, direct door-to-door transfer — skip Milan.",
        hero_image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&q=60&w=1200',
        imageAlt: 'Colourful waterfront buildings of Varenna on Lake Como',
        description: "Varenna is further around the lake from Malpensa than Bellagio or Como, but still a direct drive rather than a train-and-ferry combination. Your driver waits in arrivals and takes you straight to the village's lakefront, skipping Milan entirely.",
        distance: '~95 km',
        duration: '~1 hour 50 min',
        highlights: [
            'Meet & greet in the Malpensa arrivals hall',
            'Skip Milan entirely — direct to the lake',
            'Door-to-door to your lakefront hotel in Varenna',
            'Flight tracking included for delays',
            'Fixed all-inclusive price agreed before you travel',
        ],
        sections: [
            {
                h2: 'Route Details',
                p: [
                    "The drive from Malpensa covers roughly 95 km and takes about 1 hour 50 minutes, the longest of the Malpensa-to-Como-villages transfers since Varenna sits furthest around the lake. Your driver waits in arrivals with a name sign and heads directly for the village.",
                ],
            },
            {
                h2: 'A Quieter Lake Como Base',
                p: [
                    "Varenna sees a fraction of Bellagio's summer crowds while offering the same lakefront views and pastel-coloured houses, making it a popular choice for travellers who want Lake Como without the peak-season bustle.",
                ],
            },
            bookingSection('Milan Malpensa Airport', 'Varenna'),
        ],
        faqs: [
            { q: 'How long does the transfer from Malpensa to Varenna take?', a: 'Around 1 hour 50 minutes, the longest of the Malpensa-to-lake-village routes since Varenna sits furthest around the lake.' },
            { q: 'Why choose Varenna over Bellagio?', a: 'Varenna offers the same lakefront charm with noticeably fewer crowds, especially in peak summer months.' },
            { q: 'Does the driver track my flight?', a: 'Yes, automatically, so delays don\'t affect your pickup.' },
            { q: 'Can I book a round trip back to Malpensa?', a: 'Yes, arrange both legs at booking or contact us for your return.' },
        ],
        vehicleOptions: true,
        relatedLinks: [
            { href: '/city/como', label: 'Como Taxi Service' },
            { href: '/route/milan-to-varenna-taxi', label: 'Starting from Milan city instead? Milan to Varenna' },
            { href: '/route/malpensa-to-bellagio-taxi', label: 'Malpensa to Bellagio Transfer' },
        ],
    },

    // ── Sicily secondary cluster (Val di Noto + Monreale + Agrigento) ───────
    {
        slug: 'catania-airport-to-noto-taxi',
        from: 'Catania Airport',
        to: 'Noto',
        title: 'Catania Airport to Noto Taxi Transfer',
        metaTitle: 'Catania Airport to Noto Private Transfer',
        metaDescription: "Private taxi from Catania Airport (CTA) to Noto, Sicily's Baroque masterpiece town. Fixed price, door-to-door, no rental car needed for the Val di Noto.",
        hero_image: '/images/beach-transfer.webp',
        imageAlt: 'Golden Baroque architecture of Noto\'s main cathedral in Sicily',
        description: "Noto is the showpiece of the Val di Noto, a UNESCO World Heritage cluster of Sicilian Baroque towns rebuilt in golden stone after the 1693 earthquake. It sits far enough from Catania that public transport is genuinely impractical for a day visit — our private transfer covers the distance directly, door to door.",
        distance: '~90 km',
        duration: '~1 hour 15 min',
        highlights: [
            'Direct to Noto\'s historic centre',
            'No car rental or bus timetable needed',
            'Door-to-door to your hotel or the old town',
            'English-speaking Sicilian driver',
            'Fixed all-inclusive price agreed before you travel',
        ],
        sections: [
            {
                h2: 'Route Details',
                p: [
                    "The drive from Catania Airport covers roughly 90 km, taking about 1 hour 15 minutes south along the coast. Your driver meets you in the arrivals hall with a name sign and takes you directly to Noto's historic centre.",
                ],
            },
            {
                h2: 'Why a Private Transfer Suits Noto',
                p: [
                    "Bus connections from Catania to Noto exist but run infrequently, and the drop-off point can be a walk from the old town's honey-coloured cathedral and palazzi. A private transfer takes you directly there, with the flexibility to combine Noto with nearby Modica or Ragusa in the same trip.",
                ],
            },
            bookingSection('Catania Airport', 'Noto'),
        ],
        faqs: [
            { q: 'How long does the transfer from Catania Airport to Noto take?', a: 'Around 1 hour 15 minutes, traffic depending.' },
            { q: 'Is Noto worth a day trip from Catania?', a: 'Yes — its Baroque old town is one of Sicily\'s most photographed, and a private transfer makes it a comfortable half-day or full-day excursion.' },
            { q: 'Can I combine Noto with Ragusa or Modica?', a: 'Yes, both are within reach of Noto — mention your itinerary when booking so the route can be planned together.' },
            { q: 'Does the driver track my flight for delays?', a: 'Yes, automatically.' },
        ],
        vehicleOptions: true,
        relatedLinks: [
            { href: '/airport/catania-fontanarossa', label: 'Catania Airport Guide' },
            { href: '/route/catania-airport-to-taormina-taxi', label: 'Catania Airport to Taormina Transfer' },
            { href: '/route/catania-airport-to-ragusa-taxi', label: 'Catania Airport to Ragusa Transfer' },
        ],
    },
    {
        slug: 'catania-airport-to-ragusa-taxi',
        from: 'Catania Airport',
        to: 'Ragusa',
        title: 'Catania Airport to Ragusa Taxi Transfer',
        metaTitle: 'Catania Airport to Ragusa Private Transfer',
        metaDescription: 'Private taxi from Catania Airport (CTA) to Ragusa, home of Ragusa Ibla and the Montalbano filming locations. Fixed price, door-to-door service.',
        hero_image: '/images/beach-transfer.webp',
        imageAlt: 'Baroque rooftops of Ragusa Ibla in southeastern Sicily',
        description: "Ragusa splits into two — the modern upper town and Ragusa Ibla, the Baroque lower town familiar to fans of the Montalbano TV series, connected by steep stairways and narrow streets. Our private transfer drives you directly from Catania Airport to whichever part of the city you're staying in, avoiding the limited bus connections south.",
        distance: '~110 km',
        duration: '~1 hour 30 min',
        highlights: [
            'Direct to Ragusa or Ragusa Ibla',
            'No bus connections or timetables to plan around',
            'Door-to-door to your hotel',
            'English-speaking Sicilian driver',
            'Fixed all-inclusive price agreed before you travel',
        ],
        sections: [
            {
                h2: 'Route Details',
                p: [
                    "The drive from Catania Airport covers roughly 110 km, taking about 1 hour 30 minutes. Your driver can drop you in the modern upper town or, where vehicle access allows, closer to Ragusa Ibla's Baroque quarter below.",
                ],
            },
            {
                h2: 'Two Towns in One',
                p: [
                    "Ragusa Ibla's steep, stepped streets mean a vehicle can only get so close to its heart — your driver will advise the best accessible drop-off point for your specific accommodation and help with luggage from there.",
                ],
            },
            bookingSection('Catania Airport', 'Ragusa'),
        ],
        faqs: [
            { q: 'How long does the transfer from Catania Airport to Ragusa take?', a: 'Around 1 hour 30 minutes, traffic depending.' },
            { q: 'Can the driver take me directly to Ragusa Ibla?', a: 'Vehicles can reach close to Ragusa Ibla, though its steepest streets are pedestrian-only — your driver will advise the best drop-off for your hotel.' },
            { q: 'Can I combine this with a visit to Noto or Modica?', a: 'Yes, both are nearby — mention your plans when booking.' },
            { q: 'Is there public transport between Catania and Ragusa?', a: 'Bus connections exist but run infrequently; a private transfer is direct and doesn\'t depend on a timetable.' },
        ],
        vehicleOptions: true,
        relatedLinks: [
            { href: '/airport/catania-fontanarossa', label: 'Catania Airport Guide' },
            { href: '/route/catania-airport-to-noto-taxi', label: 'Catania Airport to Noto Transfer' },
            { href: '/route/catania-airport-to-agrigento-taxi', label: 'Catania Airport to Agrigento Transfer' },
        ],
    },
    {
        slug: 'palermo-airport-to-monreale-taxi',
        from: 'Palermo Airport',
        to: 'Monreale',
        title: 'Palermo Airport to Monreale Taxi Transfer',
        metaTitle: 'Palermo Airport to Monreale Private Transfer',
        metaDescription: "Private taxi from Palermo Airport (PMO) to Monreale, home of Sicily's famous cathedral mosaics. Fixed price, direct transfer bypassing Palermo city.",
        hero_image: '/images/palermo-taxi.webp',
        imageAlt: 'Golden mosaics inside Monreale Cathedral near Palermo',
        description: "Monreale sits on a hillside above Palermo, its cathedral holding one of the largest cycles of Byzantine-style gold mosaics in the world. Our private transfer takes you directly there from Palermo Airport, bypassing the city centre rather than requiring a transfer through it first.",
        distance: '~35 km',
        duration: '~40 min',
        highlights: [
            'Direct to Monreale — bypass Palermo city',
            'Short, easy transfer from the airport',
            'Door-to-door to your hotel or the cathedral square',
            'English-speaking Sicilian driver',
            'Fixed all-inclusive price agreed before you travel',
        ],
        sections: [
            {
                h2: 'Route Details',
                p: [
                    "The drive from Palermo Airport covers roughly 35 km, taking about 40 minutes. Rather than routing through central Palermo, your driver takes the more direct road up to Monreale's hillside position.",
                ],
            },
            {
                h2: 'A Short, Worthwhile Detour',
                p: [
                    "Monreale is often visited as a half-day trip from Palermo, but arriving directly from the airport means you can see the cathedral's mosaics and cloister before even checking into your accommodation, if your schedule allows.",
                ],
            },
            bookingSection('Palermo Airport', 'Monreale'),
        ],
        faqs: [
            { q: 'How long does the transfer from Palermo Airport to Monreale take?', a: 'Around 40 minutes, traffic depending.' },
            { q: 'Is Monreale worth visiting straight from the airport?', a: "Yes — many visitors see the cathedral's mosaics on arrival day before continuing to their accommodation, if their schedule allows." },
            { q: 'Does this route go through Palermo city centre?', a: 'No, the transfer takes the more direct route to Monreale rather than routing through central Palermo.' },
            { q: 'Can the driver wait while I visit the cathedral?', a: 'Yes, waiting time can be included when booking.' },
        ],
        vehicleOptions: true,
        relatedLinks: [
            { href: '/airport/palermo', label: 'Palermo Airport Guide' },
            { href: '/city/palermo', label: 'Palermo Taxi Service' },
            { href: '/route/palermo-airport-to-cefalu-taxi', label: 'Palermo Airport to Cefalù Transfer' },
        ],
    },
    {
        slug: 'catania-airport-to-agrigento-taxi',
        from: 'Catania Airport',
        to: 'Agrigento',
        title: 'Catania Airport to Agrigento Taxi Transfer',
        metaTitle: 'Catania Airport to Agrigento Private Transfer',
        metaDescription: "Private taxi from Catania Airport (CTA) to Agrigento's Valley of the Temples. Long-distance fixed-price transfer for east-to-west Sicily itineraries.",
        hero_image: '/images/beach-transfer.webp',
        imageAlt: 'Ancient Greek temple columns in the Valley of the Temples, Agrigento',
        description: "Agrigento's Valley of the Temples is one of the best-preserved collections of Greek temples outside Greece itself, but it sits on Sicily's southern coast, a genuine cross-island journey from Catania. Our private transfer covers the full distance directly, suited to travellers building an east-to-west Sicily itinerary rather than a quick day trip.",
        distance: '~165 km',
        duration: '~2 hours 15 min',
        highlights: [
            'Direct cross-island transfer, no changes',
            'Ideal for east-to-west Sicily itineraries',
            'Door-to-door to your hotel or the archaeological park',
            'English-speaking Sicilian driver',
            'Fixed all-inclusive price agreed before you travel',
        ],
        sections: [
            {
                h2: 'Route Details',
                p: [
                    "The drive from Catania Airport covers roughly 165 km, taking about 2 hours 15 minutes across the island's interior. Your driver takes you directly to your Agrigento hotel or to the Valley of the Temples archaeological park entrance.",
                ],
            },
            {
                h2: 'A Cross-Island Journey, Not a Day Trip',
                p: [
                    "At over two hours each way, this suits travellers relocating from Catania or eastern Sicily (Taormina, Syracuse) toward Agrigento as part of a longer trip, rather than a same-day round trip. Luggage space and a comfortable vehicle matter more here than on the shorter Sicily transfers.",
                ],
            },
            bookingSection('Catania Airport', 'Agrigento'),
        ],
        faqs: [
            { q: 'How long does the transfer from Catania Airport to Agrigento take?', a: 'Around 2 hours 15 minutes across the island\'s interior.' },
            { q: 'Is this a day-trip route or a one-way relocation?', a: "Most guests use it as a one-way relocation toward Agrigento as part of a longer Sicily itinerary, rather than a same-day round trip." },
            { q: 'Does the transfer go directly to the Valley of the Temples?', a: 'Yes, drop-off at the archaeological park entrance or your Agrigento hotel can both be arranged.' },
            { q: 'Is there a shorter route to Agrigento from elsewhere in Sicily?', a: 'Yes — see our Palermo Airport to Agrigento transfer, a shorter drive if you\'re arriving via Palermo instead.' },
        ],
        vehicleOptions: true,
        relatedLinks: [
            { href: '/airport/catania-fontanarossa', label: 'Catania Airport Guide' },
            { href: '/route/catania-airport-to-ragusa-taxi', label: 'Catania Airport to Ragusa Transfer' },
            { href: '/route/palermo-airport-to-agrigento-taxi', label: 'Flying into Palermo instead? Palermo Airport to Agrigento' },
        ],
    },

    // ── Genoa Airport → Cinque Terre (close-proximity, point-to-point) ──────
    {
        slug: 'genoa-airport-to-cinque-terre-taxi',
        from: 'Genoa Airport',
        to: 'Cinque Terre',
        title: 'Genoa Airport to Cinque Terre Taxi Transfer',
        metaTitle: 'Genoa Airport to Cinque Terre Private Transfer',
        metaDescription: 'Private taxi from Genoa Airport (GOA) to the Cinque Terre gateway. Much closer than Florence — fixed price, direct point-to-point transfer.',
        hero_image: 'https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&q=60&w=1200',
        imageAlt: 'Colourful cliffside houses of the Cinque Terre villages',
        description: "Genoa Airport sits far closer to the Cinque Terre than Florence does, making it the more direct starting point if your flight allows it. Because the five villages are largely car-free, your driver brings you to the gateway of La Spezia or Levanto, where you continue by the scenic regional train or ferry into Monterosso, Vernazza, Corniglia, Manarola and Riomaggiore.",
        distance: '~100 km',
        duration: '~1 hour 20 min',
        highlights: [
            'Much shorter transfer than from Florence',
            'Meet & greet in the Genoa arrivals hall',
            'Direct to the La Spezia or Levanto gateway',
            'Point-to-point transfer — not a group day-tour',
            'Fixed all-inclusive price agreed before you travel',
        ],
        sections: [
            {
                h2: 'Route Details',
                p: [
                    "The drive from Genoa Airport covers roughly 100 km along the A12 motorway, taking about 1 hour 20 minutes to reach La Spezia or Levanto — the two gateway towns where onward travel into the car-free villages continues by regional train or ferry.",
                ],
            },
            {
                h2: 'A Direct Transfer, Not a Group Tour',
                p: [
                    "This is a private, point-to-point transfer to the Cinque Terre gateway — not a scheduled group day-tour from Florence. If you're flying into Genoa specifically for the Ligurian coast, this route gets you there in a fraction of the time a Florence-origin trip would take.",
                ],
            },
            bookingSection('Genoa Airport', 'Cinque Terre (La Spezia / Levanto)'),
        ],
        faqs: [
            { q: 'How long does the transfer from Genoa Airport to the Cinque Terre take?', a: 'Around 1 hour 20 minutes to La Spezia or Levanto, the gateway towns for the car-free villages.' },
            { q: 'Can the driver take me into Monterosso or Vernazza directly?', a: 'No — the five villages are largely closed to private vehicles, so your driver brings you to La Spezia or Levanto, and you continue by the scenic regional train or ferry.' },
            { q: 'Is this faster than coming from Florence?', a: 'Yes, significantly — Genoa is much closer to the Cinque Terre than Florence, making this the more direct option if your flight allows it.' },
            { q: 'Does the driver track my flight?', a: 'Yes, automatically, so delays don\'t affect your pickup.' },
        ],
        vehicleOptions: true,
        relatedLinks: [
            { href: '/airport/genoa', label: 'Genoa Airport Guide' },
            { href: '/route/florence-to-cinque-terre-taxi', label: 'Flying into Florence instead? Florence to Cinque Terre' },
            { href: '/route/milan-to-portofino-taxi', label: 'Visiting Portofino too? Milan to Portofino Transfer' },
        ],
    },
];
