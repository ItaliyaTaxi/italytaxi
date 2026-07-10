// Data for the programmatic Italy cross-border transfer cluster: private
// international transfers between Italy and neighbouring countries, both
// directions. Root-level slugs (…-to-…-transfer), rendered by the root [slug]
// route. Country-level border/customs/toll facts are kept in one map (DRY and
// accurate); route-level data adds the crossing point, distance, time, scenic
// highlights, towns and attractions. Distances/times are realistic approximations.

export interface CountryInfo {
    name: string;
    schengen: string;   // passport / Schengen note
    customs: string;    // customs note
    toll: string;       // vignette / toll note
}

export const countries: Record<string, CountryInfo> = {
    CH: {
        name: 'Switzerland',
        schengen: 'Switzerland is part of the Schengen Area, so there are normally no passport checks at the border — but carry a valid passport or national ID, as spot checks can happen.',
        customs: 'Switzerland is outside the EU customs union, so occasional customs checks apply; simply declare any goods above the duty-free allowance.',
        toll: 'Swiss motorways use an annual vignette (motorway sticker) rather than toll booths. Our vehicles already carry a valid vignette, so there is nothing for you to buy or arrange.',
    },
    FR: {
        name: 'France',
        schengen: 'Italy and France are both founding Schengen members, so there are no routine border controls — just carry a valid passport or ID card for occasional spot checks.',
        customs: 'As both countries are in the EU, there are no customs formalities for your personal belongings.',
        toll: 'The journey uses Italian autostrada and French autoroute tolls, all included in your fixed, all-inclusive fare.',
    },
    MC: {
        name: 'Monaco',
        schengen: 'Monaco is not formally an EU or Schengen member, but it shares a fully open border with France, so in practice you arrive without any checks — carry a valid passport or ID.',
        customs: 'Monaco is in a customs union with France and the EU, so there are no customs formalities for personal items.',
        toll: 'French autoroute and Italian autostrada tolls are included in your fixed fare — no cash needed at the barriers.',
    },
    AT: {
        name: 'Austria',
        schengen: 'Italy and Austria are both in the Schengen Area, so there are no routine passport checks at the Brenner — carry a valid passport or ID for occasional spot checks.',
        customs: 'As EU members, there are no customs formalities for your personal belongings.',
        toll: 'Austria requires a motorway vignette and the Brenner Pass carries a separate toll; both are included in your fixed fare.',
    },
    SI: {
        name: 'Slovenia',
        schengen: 'Italy and Slovenia are both in the Schengen Area, so the border is open with no routine passport controls — carry a valid passport or ID.',
        customs: 'As EU members, there are no customs formalities for personal items.',
        toll: 'Slovenia uses an electronic motorway vignette (e-vignette); our vehicles are fully covered and all tolls are included in your fixed fare.',
    },
    HR: {
        name: 'Croatia',
        schengen: 'Croatia joined the Schengen Area in January 2023, so the Italy–Slovenia and Slovenia–Croatia borders no longer have routine passport controls — a much smoother crossing than before. Carry a valid passport or ID.',
        customs: 'As EU members, there are no customs formalities for your personal belongings.',
        toll: 'The Slovenian e-vignette and Croatian motorway tolls are all included in your fixed fare.',
    },
};

export interface CrossBorderRoute {
    fromSlug: string;
    from: string;
    toSlug: string;
    to: string;
    countryCode: keyof typeof countries; // destination country (the "abroad" end)
    fromAirport?: boolean;               // origin is an airport (flight monitoring applies)
    distance: string;
    duration: string;
    roads: string;      // driving route description
    crossing: string;   // named border crossing
    scenic: string[];
    towns: string[];
    attractions: string[]; // at the foreign destination
    description: string;   // 2 factual sentences about the route
    image: string;
}

const IMG = '/images/hero.webp';

export const crossBorderRoutes: CrossBorderRoute[] = [
    // ─────────────── SWITZERLAND ───────────────
    { fromSlug: 'milan', from: 'Milan', toSlug: 'lugano', to: 'Lugano', countryCode: 'CH', distance: '~80 km', duration: '~1 hour', roads: 'the A9 motorway to the Como–Chiasso crossing, then the Swiss A2', crossing: 'Chiasso–Brogeda', scenic: ['Lake Como', 'Lake Lugano (Ceresio)', 'the wooded Mendrisiotto hills'], towns: ['Como', 'Chiasso', 'Mendrisio'], attractions: ['Lake Lugano promenade', 'Monte Brè', 'the old town of Lugano'], description: 'Milan to Lugano is one of the most popular Italy–Switzerland transfers, a short and scenic run up past Lake Como to the Italian-speaking Swiss canton of Ticino. The A9/A2 motorway crossing at Chiasso is quick and, with a valid Swiss vignette on our vehicles, entirely seamless.', image: IMG },
    { fromSlug: 'milan', from: 'Milan', toSlug: 'zurich', to: 'Zurich', countryCode: 'CH', distance: '~280 km', duration: '~3 hours 15 min', roads: 'the A9 and Swiss A2 over the Gotthard', crossing: 'Chiasso, then the Gotthard road tunnel', scenic: ['the Gotthard massif', 'Lake Lucerne', 'the alpine Ticino valleys'], towns: ['Lugano', 'Bellinzona', 'Lucerne'], attractions: ['Lake Zurich', 'Zurich old town (Altstadt)', 'Bahnhofstrasse'], description: 'Milan to Zurich is a spectacular trans-alpine transfer over the Gotthard, linking Italy\'s business capital with Switzerland\'s. A private car turns a complex rail journey into a comfortable door-to-door ride through the heart of the Alps.', image: IMG },
    { fromSlug: 'milan', from: 'Milan', toSlug: 'lucerne', to: 'Lucerne', countryCode: 'CH', distance: '~270 km', duration: '~3 hours', roads: 'the A2 over the Gotthard', crossing: 'Chiasso, then the Gotthard tunnel', scenic: ['the Gotthard Pass', 'Lake Lucerne', 'the Reuss valley'], towns: ['Bellinzona', 'Altdorf'], attractions: ['Chapel Bridge (Kapellbrücke)', 'Lake Lucerne', 'Mount Pilatus'], description: 'Milan to Lucerne crosses the Gotthard to one of Switzerland\'s most beautiful lakeside cities. The private transfer follows the classic alpine corridor, arriving directly at your Lucerne hotel or lakeside address.', image: IMG },
    { fromSlug: 'milan', from: 'Milan', toSlug: 'geneva', to: 'Geneva', countryCode: 'CH', distance: '~400 km', duration: '~4 hours', roads: 'the Simplon Pass and the Valais motorway along Lake Geneva', crossing: 'Simplon / Grand-Saint-Bernard', scenic: ['the Simplon Pass', 'the Valais vineyards', 'Lake Geneva (Lac Léman)'], towns: ['Sion', 'Montreux', 'Lausanne'], attractions: ['the Jet d\'Eau', 'Lake Geneva waterfront', 'the Old Town'], description: 'Milan to Geneva is a long but breathtaking alpine transfer via the Simplon and the shores of Lake Geneva. For groups and travellers with luggage it is far more relaxing than multiple train changes.', image: IMG },
    { fromSlug: 'milan', from: 'Milan', toSlug: 'interlaken', to: 'Interlaken', countryCode: 'CH', distance: '~330 km', duration: '~3 hours 45 min', roads: 'the A2 over the Gotthard, then via Lucerne and the Brünig', crossing: 'Chiasso, then the Gotthard tunnel', scenic: ['the Gotthard', 'Lake Lucerne', 'the Brünig Pass', 'the Bernese Oberland'], towns: ['Lucerne', 'Brienz'], attractions: ['Lake Brienz and Lake Thun', 'the Jungfrau region', 'Harder Kulm'], description: 'Milan to Interlaken is the gateway transfer to the Jungfrau region, crossing the Gotthard and skirting Lake Lucerne to the twin lakes of the Bernese Oberland. A private car makes this multi-stage alpine route effortless.', image: IMG },
    { fromSlug: 'milan', from: 'Milan', toSlug: 'st-moritz', to: 'St. Moritz', countryCode: 'CH', distance: '~200 km', duration: '~3 hours', roads: 'the SS36 up Lake Como to Chiavenna and the Maloja Pass', crossing: 'Castasegna–Maloja', scenic: ['Lake Como', 'the Bregaglia valley', 'the Maloja Pass', 'the Engadine'], towns: ['Como', 'Chiavenna', 'Maloja'], attractions: ['Lake St. Moritz', 'the Engadine peaks', 'Corviglia'], description: 'Milan to St. Moritz climbs from Lake Como through the Bregaglia valley and over the Maloja Pass into the glamorous Engadine. It is a stunning drive that a chauffeur handles with ease, including in the ski season.', image: IMG },
    { fromSlug: 'como', from: 'Como', toSlug: 'lugano', to: 'Lugano', countryCode: 'CH', distance: '~35 km', duration: '~40 min', roads: 'the A9 to the Chiasso crossing, then the Swiss A2', crossing: 'Chiasso–Brogeda', scenic: ['Lake Como', 'Lake Lugano'], towns: ['Chiasso', 'Mendrisio'], attractions: ['Lugano lakefront', 'Monte Brè', 'Gandria village'], description: 'Como to Lugano is a short lake-to-lake hop across the Swiss border into Ticino. The crossing at Chiasso is quick, making it an easy day-trip or onward-connection transfer.', image: IMG },
    { fromSlug: 'lake-como', from: 'Lake Como', toSlug: 'st-moritz', to: 'St. Moritz', countryCode: 'CH', distance: '~110 km', duration: '~2 hours 30 min', roads: 'the SS36 to Chiavenna and the Maloja Pass', crossing: 'Castasegna–Maloja', scenic: ['upper Lake Como', 'Chiavenna', 'the Maloja Pass', 'the Engadine lakes'], towns: ['Chiavenna', 'Maloja'], attractions: ['St. Moritz lake', 'the Engadine', 'the Bernina scenery'], description: 'Lake Como to St. Moritz links two of the Alps\' most storied holiday spots, climbing the Bregaglia and Maloja into the Engadine. A private transfer is the most comfortable way to make this scenic mountain crossing.', image: IMG },
    { fromSlug: 'verona', from: 'Verona', toSlug: 'lugano', to: 'Lugano', countryCode: 'CH', distance: '~230 km', duration: '~2 hours 45 min', roads: 'the A4 to Milan, then the A9 to Chiasso and the Swiss A2', crossing: 'Chiasso–Brogeda', scenic: ['the Lombard plain', 'Lake Lugano'], towns: ['Milan', 'Como', 'Chiasso'], attractions: ['Lake Lugano', 'Monte Brè', 'Lugano old town'], description: 'Verona to Lugano crosses Lombardy and the Swiss border into Ticino in a single comfortable ride. It is a popular transfer for travellers combining Lake Garda and the Swiss lakes.', image: IMG },

    // ─────────────── FRANCE ───────────────
    { fromSlug: 'milan', from: 'Milan', toSlug: 'nice', to: 'Nice', countryCode: 'FR', distance: '~330 km', duration: '~3 hours 30 min', roads: 'the A7/A10 Ligurian coast motorway to Ventimiglia, then the French A8', crossing: 'Ventimiglia–Menton', scenic: ['the Italian Riviera', 'the Ligurian coast', 'the French Riviera'], towns: ['Genoa', 'Savona', 'Sanremo', 'Menton'], attractions: ['the Promenade des Anglais', 'Old Nice (Vieux Nice)', 'Castle Hill'], description: 'Milan to Nice runs down to the Ligurian coast and along the Riviera to the French border at Ventimiglia. Both countries are in Schengen, so the crossing is seamless, and the coastal scenery is superb.', image: IMG },
    { fromSlug: 'milan', from: 'Milan', toSlug: 'cannes', to: 'Cannes', countryCode: 'FR', distance: '~360 km', duration: '~3 hours 50 min', roads: 'the A10 to Ventimiglia, then the A8 past Nice', crossing: 'Ventimiglia–Menton', scenic: ['the Riviera coastline', 'the Bay of Cannes'], towns: ['Genoa', 'Sanremo', 'Nice', 'Antibes'], attractions: ['La Croisette', 'Le Suquet old town', 'the Îles de Lérins'], description: 'Milan to Cannes follows the Riviera to the glamorous heart of the Côte d\'Azur, ideal for the film festival and yachting seasons. A chauffeur handles the long coastal route while you relax.', image: IMG },
    { fromSlug: 'turin', from: 'Turin', toSlug: 'nice', to: 'Nice', countryCode: 'FR', distance: '~220 km', duration: '~2 hours 45 min', roads: 'the A6/A10 via the coast, or the Col de Tende', crossing: 'Ventimiglia–Menton (or Col de Tende)', scenic: ['the Maritime Alps', 'the Riviera'], towns: ['Cuneo', 'Ventimiglia', 'Menton'], attractions: ['the Promenade des Anglais', 'Old Nice', 'the seafront'], description: 'Turin to Nice links Piedmont with the Côte d\'Azur, either along the coast via Ventimiglia or through the Maritime Alps. A private transfer is the simplest way to cross between the two regions.', image: IMG },
    { fromSlug: 'genoa', from: 'Genoa', toSlug: 'nice', to: 'Nice', countryCode: 'FR', distance: '~200 km', duration: '~2 hours 15 min', roads: 'the A10 Autostrada dei Fiori to Ventimiglia, then the A8', crossing: 'Ventimiglia–Menton', scenic: ['the Italian & French Riviera', 'the Ligurian coast'], towns: ['Savona', 'Sanremo', 'Menton'], attractions: ['the Promenade des Anglais', 'Old Nice', 'Castle Hill'], description: 'Genoa to Nice is a classic Riviera transfer along the Autostrada dei Fiori and across the Ventimiglia border. The whole route hugs the coast between two great Mediterranean cities.', image: IMG },
    { fromSlug: 'genoa', from: 'Genoa', toSlug: 'cannes', to: 'Cannes', countryCode: 'FR', distance: '~230 km', duration: '~2 hours 30 min', roads: 'the A10 to Ventimiglia, then the A8', crossing: 'Ventimiglia–Menton', scenic: ['the Riviera coastline'], towns: ['Sanremo', 'Nice', 'Antibes'], attractions: ['La Croisette', 'Cannes old town', 'the Lérins islands'], description: 'Genoa to Cannes carries you along the Ligurian and French Rivieras to the Côte d\'Azur. It is a favourite for cruise passengers and festival-goers who want a door-to-door coastal transfer.', image: IMG },
    { fromSlug: 'sanremo', from: 'Sanremo', toSlug: 'nice', to: 'Nice', countryCode: 'FR', distance: '~60 km', duration: '~1 hour', roads: 'the A10 to the Ventimiglia border, then the A8', crossing: 'Ventimiglia–Menton', scenic: ['the Riviera dei Fiori', 'the French Riviera'], towns: ['Ventimiglia', 'Menton'], attractions: ['Old Nice', 'the Promenade des Anglais', 'Menton\'s gardens (en route)'], description: 'Sanremo to Nice is a short cross-border Riviera hop past Ventimiglia and Menton. It is a quick, scenic transfer often combined with a stop in Monaco.', image: IMG },

    // ─────────────── MONACO ───────────────
    { fromSlug: 'milan', from: 'Milan', toSlug: 'monaco', to: 'Monaco', countryCode: 'MC', distance: '~300 km', duration: '~3 hours 15 min', roads: 'the A10 to Ventimiglia, then the A8 to the Monaco exit', crossing: 'Ventimiglia–Menton (open border into Monaco)', scenic: ['the Italian & French Riviera', 'the approach to Monte-Carlo'], towns: ['Genoa', 'Sanremo', 'Menton'], attractions: ['the Monte-Carlo Casino', 'the Prince\'s Palace', 'Port Hercule'], description: 'Milan to Monaco follows the Riviera to the principality, a favourite for the Grand Prix and yacht show. A private chauffeur navigates Monaco\'s tight, controlled streets directly to your hotel or the harbour.', image: IMG },
    { fromSlug: 'milan-malpensa-airport', from: 'Milan Malpensa Airport', toSlug: 'monaco', to: 'Monaco', countryCode: 'MC', fromAirport: true, distance: '~330 km', duration: '~3 hours 30 min', roads: 'the A7/A10 to Ventimiglia, then the A8 to Monaco', crossing: 'Ventimiglia–Menton (open border into Monaco)', scenic: ['the Ligurian coast', 'the French Riviera'], towns: ['Genoa', 'Sanremo', 'Menton'], attractions: ['the Monte-Carlo Casino', 'Port Hercule', 'the Oceanographic Museum'], description: 'Milan Malpensa Airport to Monaco connects a major intercontinental gateway with the principality in one seamless ride, with flight monitoring and meet & greet. It spares arriving travellers a complicated train-and-transfer journey along the coast.', image: IMG },
    { fromSlug: 'genoa', from: 'Genoa', toSlug: 'monaco', to: 'Monaco', countryCode: 'MC', distance: '~170 km', duration: '~2 hours', roads: 'the A10 Autostrada dei Fiori to Ventimiglia, then the A8', crossing: 'Ventimiglia–Menton (open border into Monaco)', scenic: ['the Riviera coast'], towns: ['Savona', 'Sanremo', 'Menton'], attractions: ['Monte-Carlo', 'Larvotto beach', 'the Oceanographic Museum'], description: 'Genoa to Monaco is a coastal Riviera transfer especially popular with cruise passengers docking in Genoa. The A10 hugs the shore to Ventimiglia before the short hop into the principality.', image: IMG },

    // ─────────────── AUSTRIA ───────────────
    { fromSlug: 'venice', from: 'Venice', toSlug: 'innsbruck', to: 'Innsbruck', countryCode: 'AT', distance: '~380 km', duration: '~4 hours', roads: 'the A27/A22 up the Adige valley over the Brenner Pass (the A13 in Austria)', crossing: 'Brennero–Brenner', scenic: ['the Dolomites', 'the Adige valley', 'the Brenner Pass', 'the Wipptal'], towns: ['Trento', 'Bolzano', 'Brennero'], attractions: ['Innsbruck old town', 'the Nordkette cable car', 'the Golden Roof'], description: 'Venice to Innsbruck crosses the Alps over the historic Brenner Pass to the Tyrolean capital. The scenic climb up the Adige valley is one of the great alpine drives, handled comfortably by a private car.', image: IMG },
    { fromSlug: 'verona', from: 'Verona', toSlug: 'innsbruck', to: 'Innsbruck', countryCode: 'AT', distance: '~280 km', duration: '~3 hours', roads: 'the A22 up the Adige valley over the Brenner', crossing: 'Brennero–Brenner', scenic: ['the Adige valley', 'the Dolomite foothills', 'the Brenner Pass'], towns: ['Trento', 'Bolzano', 'Vipiteno'], attractions: ['Innsbruck old town', 'the Nordkette', 'Ambras Castle'], description: 'Verona to Innsbruck runs straight up the Adige/Brenner corridor to Tyrol, one of the most direct Italy–Austria routes. It is a popular ski-season and summer-holiday transfer.', image: IMG },
    { fromSlug: 'bolzano', from: 'Bolzano', toSlug: 'innsbruck', to: 'Innsbruck', countryCode: 'AT', distance: '~120 km', duration: '~1 hour 30 min', roads: 'the A22 over the Brenner, then the Austrian A13', crossing: 'Brennero–Brenner', scenic: ['the Isarco valley', 'the Brenner Pass', 'the Wipptal'], towns: ['Vipiteno (Sterzing)', 'Brennero'], attractions: ['Innsbruck old town', 'the Golden Roof', 'Wilten Basilica'], description: 'Bolzano to Innsbruck is a short, spectacular Brenner crossing between South Tyrol and Tyrol. The two alpine capitals are linked by a quick motorway hop over the pass.', image: IMG },
    { fromSlug: 'venice', from: 'Venice', toSlug: 'salzburg', to: 'Salzburg', countryCode: 'AT', distance: '~430 km', duration: '~4 hours 30 min', roads: 'the A4/A23 to Tarvisio, then the Austrian A2/A10 Tauern via Villach', crossing: 'Tarvisio–Arnoldstein', scenic: ['the Carnic Alps', 'the Tauern', 'the Carinthian lakes'], towns: ['Udine', 'Villach'], attractions: ['Salzburg old town', 'Mirabell Palace and Gardens', 'Hohensalzburg Fortress'], description: 'Venice to Salzburg crosses the eastern Alps via Tarvisio and Carinthia to Mozart\'s city. It is a long but scenic transfer that a private car makes far simpler than the multi-change train.', image: IMG },

    // ─────────────── SLOVENIA ───────────────
    { fromSlug: 'venice', from: 'Venice', toSlug: 'ljubljana', to: 'Ljubljana', countryCode: 'SI', distance: '~245 km', duration: '~2 hours 30 min', roads: 'the A4 past Trieste to the Sežana crossing, then the Slovenian A1', crossing: 'Fernetti–Fernetiči / Sežana', scenic: ['the Karst plateau', 'the Gulf of Trieste'], towns: ['Trieste', 'Postojna'], attractions: ['Ljubljana old town', 'the Triple Bridge', 'Ljubljana Castle'], description: 'Venice to Ljubljana runs east past Trieste and across the Karst into the Slovenian capital. With both countries in Schengen the border is open, making it a smooth two-and-a-half-hour transfer.', image: IMG },
    { fromSlug: 'venice-airport', from: 'Venice Airport', toSlug: 'ljubljana', to: 'Ljubljana', countryCode: 'SI', fromAirport: true, distance: '~250 km', duration: '~2 hours 40 min', roads: 'the A4 past Trieste to Sežana, then the Slovenian A1', crossing: 'Fernetti–Fernetiči / Sežana', scenic: ['the Karst plateau', 'the Gulf of Trieste'], towns: ['Trieste', 'Postojna'], attractions: ['Ljubljana old town', 'the Triple Bridge', 'Tivoli Park'], description: 'Venice Airport to Ljubljana links Marco Polo directly with the Slovenian capital, with flight monitoring and meet & greet. It is the easiest way to start a Slovenia trip straight from your flight.', image: IMG },
    { fromSlug: 'trieste', from: 'Trieste', toSlug: 'ljubljana', to: 'Ljubljana', countryCode: 'SI', distance: '~90 km', duration: '~1 hour 15 min', roads: 'the A4/H4 via the Fernetiči or Sežana crossing', crossing: 'Fernetti–Fernetiči / Sežana', scenic: ['the Karst (Carso)', 'Karst vineyards'], towns: ['Sežana', 'Postojna'], attractions: ['Ljubljana old town', 'Ljubljana Castle', 'Postojna Cave (nearby)'], description: 'Trieste to Ljubljana is a short cross-border transfer over the Karst into Slovenia. It is a quick, open-border hop ideal for cruise passengers and business travellers.', image: IMG },
    { fromSlug: 'venice', from: 'Venice', toSlug: 'lake-bled', to: 'Lake Bled', countryCode: 'SI', distance: '~290 km', duration: '~3 hours', roads: 'the A4 past Trieste, then the Slovenian A1 past Ljubljana toward the Julian Alps', crossing: 'Fernetti–Fernetiči / Sežana', scenic: ['the Karst', 'the Julian Alps', 'the Lake Bled setting'], towns: ['Trieste', 'Ljubljana'], attractions: ['Lake Bled island', 'Bled Castle', 'Vintgar Gorge'], description: 'Venice to Lake Bled reaches Slovenia\'s fairy-tale alpine lake in about three hours via Trieste and Ljubljana. A private car delivers you straight to the lakeside, avoiding awkward rail and bus connections.', image: IMG },
    { fromSlug: 'venice', from: 'Venice', toSlug: 'piran', to: 'Piran', countryCode: 'SI', distance: '~190 km', duration: '~2 hours 15 min', roads: 'the A4 past Trieste to the Slovenian coast (Istria)', crossing: 'Rabuiese–Škofije', scenic: ['the Gulf of Trieste', 'the Slovenian Istrian coast'], towns: ['Trieste', 'Koper'], attractions: ['Piran old town', 'Tartini Square', 'the Adriatic seafront'], description: 'Venice to Piran follows the coast past Trieste to Slovenia\'s prettiest seaside town, a Venetian-Gothic gem on the Istrian peninsula. The open Schengen border makes it a straightforward coastal transfer.', image: IMG },

    // ─────────────── CROATIA ───────────────
    { fromSlug: 'venice', from: 'Venice', toSlug: 'rovinj', to: 'Rovinj', countryCode: 'HR', distance: '~250 km', duration: '~3 hours', roads: 'the A4 past Trieste, through Slovenia into Croatian Istria (the A9 Istrian Y)', crossing: 'Italy–Slovenia then Slovenia–Croatia (both Schengen)', scenic: ['the Gulf of Trieste', 'the Slovenian coast', 'the Istrian countryside'], towns: ['Trieste', 'Koper', 'Poreč'], attractions: ['Rovinj old town', 'St. Euphemia\'s church', 'the Istrian coast'], description: 'Venice to Rovinj reaches the most romantic town on the Istrian coast, and since Croatia joined Schengen in 2023 the border crossings are quick and check-free. A private transfer avoids the slow, connection-heavy public route.', image: IMG },
    { fromSlug: 'venice', from: 'Venice', toSlug: 'porec', to: 'Poreč', countryCode: 'HR', distance: '~230 km', duration: '~2 hours 45 min', roads: 'the A4 past Trieste, through Slovenia into Croatian Istria (the A9)', crossing: 'Italy–Slovenia then Slovenia–Croatia (both Schengen)', scenic: ['Istria', 'the Adriatic coast'], towns: ['Trieste', 'Koper'], attractions: ['the Euphrasian Basilica (UNESCO)', 'Poreč old town', 'the Adriatic beaches'], description: 'Venice to Poreč links the lagoon with the UNESCO-listed Istrian resort town, now a smooth ride thanks to Croatia\'s 2023 Schengen entry. It is a popular summer transfer for the Istrian coast.', image: IMG },
    { fromSlug: 'venice', from: 'Venice', toSlug: 'pula', to: 'Pula', countryCode: 'HR', distance: '~280 km', duration: '~3 hours 15 min', roads: 'via Trieste, Slovenia and the Istrian A9 to the tip of Istria', crossing: 'Italy–Slovenia then Slovenia–Croatia (both Schengen)', scenic: ['Istria', 'the Adriatic coast'], towns: ['Trieste', 'Poreč', 'Rovinj'], attractions: ['the Pula Arena (Roman amphitheatre)', 'Cape Kamenjak', 'the Istrian coast'], description: 'Venice to Pula reaches the southern tip of Istria and its magnificent Roman arena. With Croatia in Schengen the border is seamless, and a private car covers the route in a single comfortable ride.', image: IMG },
    { fromSlug: 'trieste', from: 'Trieste', toSlug: 'rovinj', to: 'Rovinj', countryCode: 'HR', distance: '~110 km', duration: '~1 hour 45 min', roads: 'from Trieste through Slovenian Istria into Croatia (the A9)', crossing: 'Slovenia then Croatia (both Schengen)', scenic: ['Slovenian & Croatian Istria', 'the Adriatic coast'], towns: ['Koper', 'Poreč'], attractions: ['Rovinj old town', 'St. Euphemia', 'the Lim Fjord'], description: 'Trieste to Rovinj is a short cross-border transfer down the Istrian coast, quick and check-free since Croatia joined Schengen. It is ideal for cruise passengers and coastal holidaymakers.', image: IMG },
];

export type CrossBorderDirection = 'outbound' | 'inbound'; // outbound = Italy→abroad, inbound = abroad→Italy

export interface CrossBorderCombo {
    route: CrossBorderRoute;
    origin: string;
    originSlug: string;
    dest: string;
    destSlug: string;
    slug: string;
    direction: CrossBorderDirection;
}

export function getAllCrossBorderTransfers(): CrossBorderCombo[] {
    const out: CrossBorderCombo[] = [];
    for (const r of crossBorderRoutes) {
        out.push({ route: r, origin: r.from, originSlug: r.fromSlug, dest: r.to, destSlug: r.toSlug, slug: `${r.fromSlug}-to-${r.toSlug}-transfer`, direction: 'outbound' });
        out.push({ route: r, origin: r.to, originSlug: r.toSlug, dest: r.from, destSlug: r.fromSlug, slug: `${r.toSlug}-to-${r.fromSlug}-transfer`, direction: 'inbound' });
    }
    return out;
}

export function findCrossBorderTransfer(slug: string): CrossBorderCombo | null {
    return getAllCrossBorderTransfers().find((t) => t.slug === slug) || null;
}

export function relatedCrossBorder(countryCode: string, excludeSlug: string, limit = 6): CrossBorderCombo[] {
    return getAllCrossBorderTransfers().filter((t) => t.route.countryCode === countryCode && t.slug !== excludeSlug).slice(0, limit);
}
