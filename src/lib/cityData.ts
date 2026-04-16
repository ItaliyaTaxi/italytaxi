/**
 * cityData.ts
 *
 * Unique, city-specific content for /city/[slug] and /airport/[slug] pages.
 * Keyed by the CITY NAME (lowercased) so both Rome and rome-taxi-service slugs
 * resolve to the same rich data via `getCityData(city.name)`.
 *
 * Adding a new city: copy an entry, change the key, and fill in the fields.
 */

export interface CityRichData {
  /** Key landmarks that we serve — used in the "Key Landmarks" section */
  landmarks: { name: string; description: string }[];
  /** 100+ word pickup instructions specific to this city */
  pickupInstructions: string;
  /** City-specific travel tips for visitors */
  localTips: string;
}

const cityDataMap: Record<string, CityRichData> = {
  rome: {
    landmarks: [
      { name: 'Colosseum', description: 'Drop-off at Via Sacra — 2-min walk to main entrance, avoiding tourist bus congestion.' },
      { name: 'Vatican Museums', description: 'Direct drop to Viale Vaticano entrance, with NCC licence for ZTL access.' },
      { name: 'Trevi Fountain', description: 'Nearest drop point at Via della Stamperia — 60 seconds on foot.' },
      { name: 'Pantheon', description: 'Drop-off at Piazza della Rotonda — ZTL-compliant access with licensed plates.' },
      { name: 'Trastevere', description: 'Door-to-door service into Rome\'s most atmospheric neighbourhood.' },
      { name: 'Borghese Gallery', description: 'Entrance on Viale dell\'Uccelliera — direct drop, no parking stress.' },
    ],
    pickupInstructions:
      'For hotel pickups in Rome, your driver will meet you at the main hotel entrance at your scheduled time, holding a name sign. If your hotel is inside a Zona a Traffico Limitato (ZTL restricted zone), our drivers hold the required NCC licence for legal access — any unlicensed cab cannot legally enter these areas. For cruise passengers arriving at Civitavecchia port, we meet at the terminal exit. For Fiumicino (FCO) arrivals, meet your driver in the arrivals hall after customs, name sign displayed — typically Terminals 1, 2, or 3. For Ciampino (CIA) arrivals, your driver waits in the single arrivals hall. Allow 60 minutes of free waiting time after your flight lands before any waiting charges apply. All Rome pickups include complimentary luggage assistance into the vehicle.',
    localTips:
      'Rome\'s ZTL zones are active 6:30–23:00 daily in the historic centre. Standard taxis (white with a meter) cannot enter legally — our NCC fleet can, saving you a 15-minute walk with luggage. Avoid booking rides during the 17:00–19:00 evening rush on Via del Corso and the areas surrounding Termini station. The best time for sightseeing transfers is before 9:00 or after 20:00 when traffic in the historic core thins significantly. If visiting the Vatican, Wednesdays (papal audience) and Sunday mornings (12:00 Angelus) produce extreme pedestrian congestion around St. Peter\'s Square — factor in extra transit time.',
  },

  milan: {
    landmarks: [
      { name: 'Duomo di Milano', description: 'Drop-off at Piazza del Duomo — ZTL access included for the fashion square.' },
      { name: 'The Last Supper (Santa Maria delle Grazie)', description: 'Direct to Corso Magenta — book tickets months in advance.' },
      { name: 'Galleria Vittorio Emanuele II', description: 'Adjacent to Duomo drop point — Italy\'s most opulent shopping arcade.' },
      { name: 'Brera Design District', description: 'Heart of Milan\'s design quarter — door-to-door service.' },
      { name: 'San Siro Stadium', description: 'Match-day transfers with post-match pickup coordination.' },
      { name: 'Navigli Canals', description: 'Evening aperitivo district — late-night return pickups available 24/7.' },
    ],
    pickupInstructions:
      'Milan hotel pickups are straightforward as most luxury properties are outside the Area C congestion zone. However, the central Area C operates Monday to Friday 07:30–19:30 with a €5 access charge — our vehicles are pre-registered for Area C daily access, so there are no surcharges to you. For Malpensa Airport (MXP) arrivals, your driver meets you at the designated meeting point inside Terminal 1 or Terminal 2 arrivals halls. For Linate Airport (LIN) arrivals, the driver waits inside the single arrivals hall. For Bergamo Orio al Serio (BGY) arrivals — commonly used by Ryanair — provide us your terminal gate number and we will coordinate accordingly. All Milan pickups include luggage handling and complimentary bottled water.',
    localTips:
      'Milan\'s Area C charge applies on weekdays only — weekend rides into the centre are unrestricted. If attending Milan Fashion Week (September/February) or the Salone del Mobile design fair (April), book transfers at least 72 hours in advance as vehicle availability reduces sharply. The M1 and M3 metro lines are efficient for short city hops but entirely impractical with luggage. For business travellers headed to the Fiera Milano expo complex at Pero, allow an extra 30 minutes during fair days. The Navigli canal district gets extremely busy on Saturday evenings — evening pickup from this area may require a short walk to a designated pickup point on a side street.',
  },

  venice: {
    landmarks: [
      { name: 'Piazzale Roma', description: 'The only vehicle access point to the island — we drop here for water taxi connections.' },
      { name: 'Venice Mestre Train Station', description: 'Mainland hub for onward rail travel — door-to-door from any Veneto hotel.' },
      { name: 'Rialto Bridge', description: 'Drop-off at Piazzale Roma + water taxi coordination if required.' },
      { name: 'Murano, Burano & Torcello islands', description: 'Mainland transfers with water taxi liaison for the island leg.' },
      { name: 'Dolomites mountain access', description: 'Day-trip transfers from Venice to Cortina d\'Ampezzo and Belluno.' },
      { name: 'Verona Arena', description: 'Direct city-to-city transfer from Venice — 75 minutes.' },
    ],
    pickupInstructions:
      'Venice is a car-free city — no vehicle can drive onto the island. For hotel pickups on the Venice Lagoon islands, our taxi drops you at Piazzale Roma (the road terminus on the island edge) where you can board a water taxi or vaporetto (waterbus) for the final leg. For Mestre hotel pickups (the mainland area of Venice), we collect directly from your hotel entrance. For Marco Polo Airport (VCE) arrivals, your driver meets you in the main arrivals hall at the designated meeting point. If your hotel is on the island, provide us the nearest water taxi stop and we will coordinate the handover. For cruise passengers departing from Venice cruise terminal, we collect from the terminal exit — confirm your departure terminal (Marittima, San Basilio, or Fusina) when booking.',
    localTips:
      'Venice Carnival (February) and Vogalonga rowing festival (May) create extreme access congestion on the causeways and at Piazzale Roma. Book transfers 1–2 weeks in advance during these periods. For luggage-heavy arrivals, wheeled bags struggle on Venice\'s cobblestones and canal bridges — consider using a porter (facchino) for the water taxi leg. Water taxis to the island run €15–€110 depending on your destination within the lagoon. The Alilaguna airport boat service is cheaper but takes 80 minutes to reach central Venice versus 30 minutes by private water taxi. Acqua alta (high water flooding) can affect Piazzale Roma access between November and April — our drivers monitor tidal alerts and communicate proactively.',
  },

  florence: {
    landmarks: [
      { name: 'Uffizi Gallery', description: 'Drop-off on Lungarno degli Archibusieri — 2-min walk to Piazzale degli Uffizi.' },
      { name: 'Florence Cathedral (Duomo)', description: 'Nearest drop at Piazza San Giovanni — ZTL access with NCC licence.' },
      { name: 'Ponte Vecchio', description: 'Direct drop at Borgo San Jacopo for the iconic medieval bridge.' },
      { name: 'Piazzale Michelangelo', description: 'Panoramic hilltop viewpoint — direct road access maintained.' },
      { name: 'Boboli Gardens', description: 'Entrance on Piazza Pitti — short flat walk from vehicle drop.' },
      { name: 'Chianti Wine Country', description: 'Day-trip service to Greve, Panzano, and Radda wine estates.' },
    ],
    pickupInstructions:
      'Florence has one of Italy\'s strictest ZTL (restricted traffic) zones, covering almost the entire historic centre. The ZTL operates 7:30–20:00 Monday to Saturday and 7:30–16:00 on Sundays (check for seasonal changes). Our NCC-licensed fleet has pre-registered access, meaning we can collect you from your hotel door regardless of its ZTL location without incurring fines that affect standard taxis. For Peretola Airport (FLR) arrivals, your driver meets you in the arrivals hall, typically 15–20 minutes from landing to the city centre. For Santa Maria Novella train station pickups, your driver will meet you at the taxi rank on the Piazza side, name sign visible. Please confirm your hotel\'s exact street address at booking so we can plan ZTL access routing accordingly.',
    localTips:
      'Book Uffizi and Accademia (Michelangelo\'s David) tickets well in advance — especially in summer — as walk-up queues can last 3–4 hours. The transfer from Pisa Airport to central Florence takes approximately 1 hour if you fly into PSA — a good alternative to FLR for budget carriers. The Oltrarno neighbourhood (south of Arno) is less tourist-heavy and has excellent restaurants — ask your driver for suggestions. Evening drives along the Lungarno riverside roads offer some of Italy\'s most romantic city views. For day trips to Siena, allocate a full day — the scenic Chianti Classico route adds 30 minutes but is absolutely worth it. Florence city centre is best explored in the mornings before 11:00 when tour groups arrive at major sites.',
  },

  naples: {
    landmarks: [
      { name: 'Pompeii Archaeological Site', description: 'Direct 30-min transfer from Naples — entrance on Via Villa dei Misteri.' },
      { name: 'Castel dell\'Ovo', description: 'Drop at Borgo Marinari — the city\'s oldest seafront castle.' },
      { name: 'Spaccanapoli (historic centre)', description: 'ZTL-compliant access to Naples\' ancient spine road.' },
      { name: 'Capri Island ferry terminal', description: 'Drop-off at Molo Beverello or Calata di Massa ferry terminals.' },
      { name: 'Herculaneum', description: '20-minute transfer from Naples — less crowded than Pompeii, equally dramatic.' },
      { name: 'Naples National Archaeological Museum', description: 'Home to the finest Pompeii artefacts — direct drop on Piazza Museo.' },
    ],
    pickupInstructions:
      'Naples is a vibrant, complex city with a chaotic but navigable traffic system. For hotel pickups in the historic centre, confirm whether your address is inside the ZTL zone when booking — our NCC-licensed drivers can enter all restricted zones legally. For Capodichino Airport (NAP) arrivals, your driver waits in the arrivals hall with a name sign. NAP is just 7km from the city, making it a fast 15–20 minute transfer under normal conditions. For Amalfi Coast bound passengers, all outbound journeys use the SS163 coastal road or the A3 motorway via Salerno depending on your destination village. For cruise passengers arriving at Stazione Transit (Molo Beverello), your driver meets at the port exit. Pompeii-bound transfers depart directly from your Naples hotel — journey time 30–35 minutes via the A3.',
    localTips:
      'Naples traffic is notoriously unpredictable — always allow an extra 20 minutes for airport transfers from the city centre during morning (08:00–10:00) and evening (17:00–20:00) rush hours. The Amalfi Coast road (SS163) is spectacular but narrow and slow — a journey to Positano from Naples takes 90–120 minutes depending on season and time of day; to Ravello, allow 2 hours. August is peak Amalfi Coast season — book coastal transfers at least 1 week ahead. Naples is also the best base for day trips to Pompeii, Herculaneum, Vesuvius, and Capri. The city\'s street food (pizza fritta, sfogliatella) is excellent — ask your driver for the best local spots off the tourist trail.',
  },

  amalfi: {
    landmarks: [
      { name: 'Amalfi Cathedral (Sant\'Andrea)', description: 'Direct drop to Piazza del Duomo — the town\'s iconic centrepiece.' },
      { name: 'Valle delle Ferriere', description: 'Scenic gorge walk — drop at the northern trailhead.' },
      { name: 'Paper Museum', description: 'Unique 13th-century paper mill — a short walk from the main square.' },
      { name: 'Ravello (hilltop)', description: 'Connected by our coastal transfers — 8km uphill from Amalfi town.' },
      { name: 'Praiano', description: 'Quieter Amalfi Coast village — intermediate stop on coastal runs.' },
      { name: 'Positano', description: '18km westward along the SS163 — 30–45 minutes depending on traffic.' },
    ],
    pickupInstructions:
      'Amalfi\'s main square (Piazza del Duomo) is the central meeting point for most hotel pickups, as the town\'s narrow lanes limit vehicle access. Your driver will confirm the exact pickup point when your booking is confirmed — typically the nearest accessible road to your accommodation. Many cliff-side hotels require guests to descend steps to the road level; our drivers will assist with luggage at the road access point. For transfers beginning on the Amalfi Coast, your driver will collect from your confirmed location along the SS163 coastal road or the uphill village roads. Allow extra time for busy summer mornings (July–August) as the coastal road frequently queues between 10:00 and 14:00. Evening transfers off the coast (post-sunset) are generally faster as tourist traffic clears.',
    localTips:
      'The Amalfi Coast is best experienced either very early in the morning (before 09:00) or in the late afternoon when the main tourist coach traffic has passed. The SS163 is a single carriageway with passing places — our drivers are experienced on this route and know every passing place and junction. Parking in Amalfi, Positano, and Ravello is extremely limited and expensive for self-drive visitors — our door-to-door service eliminates this entirely. If visiting Ravello, the hilltop gardens at Villa Rufolo and Villa Cimbrone have strict morning entry — arrive early for the best light and fewest crowds. Boat trips to Capri and the Grotto Azzurra depart from the Amalfi port and are weather-dependent; check conditions before departing your hotel.',
  },

  positano: {
    landmarks: [
      { name: 'Spiaggia Grande beach', description: 'Central Positano beach — vehicle drop at the upper road, short walk down.' },
      { name: 'Church of Santa Maria Assunta', description: 'Famous majolica-tiled dome — drop at the top of Via Pasitea.' },
      { name: 'Path of the Gods trailhead', description: 'Epic walking trail to Nocelle — drop at Bomerano village.' },
      { name: 'Li Galli Islands viewpoint', description: 'Best viewed from the beach promenade or boat trips.' },
      { name: 'Praiano', description: 'Quieter neighbouring village — 10-minute coastal drive.' },
      { name: 'Amalfi town', description: '18km eastward — 30–45 min on the SS163.' },
    ],
    pickupInstructions:
      'Positano is built on a vertiginous cliff with a single main road (Via Pasitea / SS163) running through it. Vehicle access to most hotels involves navigating the upper road and steep descent paths or internal staircases. Your driver will meet you at the nearest road-accessible point to your hotel — confirmed at booking. For arrivals: if coming from Naples, the transfer takes 90 minutes; from Salerno 60 minutes. For Naples Airport arrivals connecting to Positano, allow 2 hours total journey time. Do not attempt to drive personally in Positano — parking is virtually non-existent and the one-way system is extremely complex for unfamiliar visitors. Our drivers know every property by name and will co-ordinate your precise pickup with full local knowledge.',
    localTips:
      'Positano gets heavily congested from late morning to early afternoon in July and August — book transfers for early morning or evening departures whenever possible. The internal shuttle bus (SITA) runs up and down Via Pasitea but does not handle luggage. Water taxis operate between Positano, Amalfi, and Capri in summer — ask at the Spiaggia Grande jetty. The best Positano photo viewpoint is from the top of Via Positanesi d\'America looking back across the cliffside. Groceries and pharmacies are easier to find in Amalfi town (larger supermarket) — ask your driver if you need a stop en route. Positano boutiques sell locally-made sandals at premium prices — worth the splurge on a pair crafted to your foot.',
  },

  sorrento: {
    landmarks: [
      { name: 'Piazza Tasso', description: 'Sorrento\'s main square and social hub — direct vehicle access.' },
      { name: 'Museo Correale di Terranova', description: 'Premier decorative arts museum — drop at Via Correale.' },
      { name: 'Marina Piccola', description: 'Ferry terminal for Capri and Naples — 10-minute walk from centre.' },
      { name: 'Marina Grande', description: 'Historic fishing village — separate lower harbour with restaurant strip.' },
      { name: 'Capri Ferry Terminal', description: 'Ferry to Capri departs from Marina Piccola — confirm timetable in advance.' },
      { name: 'Pompeii', description: '30-minute transfer via A3 motorway — ideal day-trip base.' },
    ],
    pickupInstructions:
      'Sorrento is relatively compact and accessible compared to other Amalfi Coast towns, making it an ideal base for exploring the region. Hotel pickups in Sorrento centre are straightforward — your driver arrives at the hotel entrance at the confirmed time. For Naples Airport (NAP) arrivals heading to Sorrento, the transfer takes approximately 45–60 minutes depending on route and time of day. For arrivals continuing to the Amalfi Coast from Sorrento, outbound transfers connect through the inland A3 + SS145 route to avoid the narrow coastal SS163 where feasible. For Capri-bound guests, your driver will drop at Marina Piccola ferry terminal — confirm your ferry departure time and allow 20 minutes pre-departure.',
    localTips:
      'Sorrento is the most practical base for the Amalfi Coast region — better hotel infrastructure, more dining options, and direct ferry connections to Naples, Capri, and Ischia. Limoncello and locally-made ceramics are Sorrento\'s best souvenirs — shop on Corso Italia. The Circumvesuviana train connects Sorrento to Pompeii (30 min) and Naples (70 min) — cheap but slow and pickpocket-prone; private transfer is far more comfortable, especially with luggage. The evening passeggiata on Piazza Tasso is genuinely lovely — plan dinner in the old town lanes. Sorrento\'s cliffs mean there is no proper beach in town — the flat areas (Bagni della Regina Giovanna cove, 3km west) require a transfer or a tough hike.',
  },

  'lake como': {
    landmarks: [
      { name: 'Bellagio', description: 'Lake Como\'s most elegant village — direct road access from Como city.' },
      { name: 'Villa Carlotta', description: 'Stunning lakeside botanical garden in Tremezzo — direct drop at entrance.' },
      { name: 'Villa del Balbianello', description: 'UNESCO-listed villa (James Bond filming location) — Lenno access point.' },
      { name: 'Varenna', description: 'Romantic east-bank village — accessed via lakeside road or ferry.' },
      { name: 'Villa d\'Este (Cernobbio)', description: 'Legendary five-star hotel and gardens — 5km from Como city.' },
      { name: 'Como Cable Car (Brunate)', description: 'Foot of the cable car at Piazza de Gasperi, Como.' },
    ],
    pickupInstructions:
      'Lake Como is a 50km-long lake with dozens of towns along its shores — confirm your specific destination town when booking (Como city, Bellagio, Varenna, Menaggio, Cernobbio, Tremezzo, etc.) as driving times vary significantly from Milan. From Milan Malpensa Airport (MXP), the transfer to Como city takes approximately 50 minutes; to Bellagio, approximately 80 minutes. From Milan city centre, allow 60–75 minutes to Como city depending on traffic. For hotel pickups along the lake, your driver will confirm the nearest road-accessible point — some waterfront properties in Bellagio require a short walk from the vehicle dropoff. Ferry services connect the main towns but are weather-dependent and slow — private transfer is far more reliable, especially with luggage.',
    localTips:
      'Lake Como is extremely popular April through October — book transfers at least 48 hours in advance during this period. Bellagio is the jewel of the lake but its access road from the southern tip is narrow and slow (allow 30 extra minutes from Como). Villa del Balbianello requires pre-booking and is access-restricted to water taxi or a 20-minute walk — waterfront arrivals only. The SP72 lakeside road from Como to Menaggio is scenic but heavily congested on summer weekends — our drivers use the inland SS340 bypass when faster. George Clooney\'s Villa Oleandra in Laglio adds 20 minutes to any driving route between Como and Bellagio (the village road narrows significantly near Villa Oleandra). Winter months (Nov–Feb) are quiet, affordable, and pleasant for misty lake walks.',
  },

  bologna: {
    landmarks: [
      { name: 'Two Towers (Asinelli e Garisenda)', description: 'Medieval landmark at the heart of the portico city — drop at Piazza di Porta Ravegnana.' },
      { name: 'Piazza Maggiore', description: 'Bologna\'s grand central square with the Basilica di San Petronio.' },
      { name: 'Mercato di Mezzo', description: 'Historic covered food market — heart of Bolognese gastronomy.' },
      { name: 'Ferrari Museum (Modena)', description: '40-minute transfer — the spiritual home of the Prancing Horse.' },
      { name: 'Parco Regionale dei Colli Bolognesi', description: 'Rolling Apennine foothills — wine tasting and farmhouse visits.' },
      { name: 'Archiginnasio of Bologna', description: 'World\'s oldest university library — drop at Piazza Galvani.' },
    ],
    pickupInstructions:
      'Bologna\'s historic centre is largely pedestrianised with a ZTL operative 7:00–20:00. Our NCC-licensed drivers can access all hotels inside the ZTL zone legally. For Bologna Marconi Airport (BLQ) arrivals, the transfer to the city centre takes approximately 20 minutes — your driver meets you in the main arrivals hall. For train passengers arriving at Bologna Centrale station, your driver will meet you at the main taxi rank outside the station\'s central exit. The city\'s famous 38km of covered porticoes (portici) are unique to Bologna — most of the historic centre is navigable under cover even in rain. For Modena-bound guests (Ferrari Museum), confirm your preferred museum entrance time so we can plan departure accordingly from your Bologna hotel.',
    localTips:
      'Bologna is arguably Italy\'s finest food city — the birthplace of ragù alla bolognese, mortadella, tortellini, and tagliatelle. The Quadrilatero market district (surrounding Mercato di Mezzo) is best explored on foot between 08:00 and 13:00. The Salumeria Simoni on Via Drapperie is the most famous deli for cured meats. For day trips, Modena and Parma are equidistant (45 minutes each) and form a perfect Emilia-Romagna gastronomic triangle. The Ferrari Museum in Modena and the Lamborghini Museum in Sant\'Agata Bolognese are popular combines — we can do both in a single day trip. Bologna\'s university district (university founded 1088, the world\'s oldest) comes alive in the evenings with student nightlife in the cobblestone streets.',
  },
};

/**
 * Lookup city rich data by city name (case-insensitive).
 * Returns undefined if no specific data is available — the template falls back gracefully.
 */
export function getCityData(cityName: string): CityRichData | undefined {
  return cityDataMap[cityName.toLowerCase()];
}
