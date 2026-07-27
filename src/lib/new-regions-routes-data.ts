// Bilingual (EN/IT) route data for three new SEO clusters: Amalfi Coast /
// Sorrento / Capri, Sicily, and Sardinia. Checked against the existing 92
// /route/* pairs before writing — "Naples Airport to Positano" and "Naples
// Airport to Amalfi" already existed and are deliberately NOT duplicated
// here; "Catania Airport to Taormina" and "Palermo Airport to Cefalù"
// likewise already existed, so their reverse legs were built instead.
//
// Each entry carries fully separate English and Italian content (not a
// translation pass over the same object) — see `en` and `it` below.
//
// English pages are produced by mapping `en` into the existing RouteData
// shape and spreading into `routes` in page-data.ts, so /route/[slug]
// renders them with zero template changes. Italian pages are served by the
// new /it/route/[slug] page, which reads `it` directly from this file.
import type { RouteData } from './page-data';

export interface ClusterRouteContent {
    title: string;
    metaTitle: string;
    metaDescription: string;
    description: string;
    highlights: string[];
    sections: { h2: string; p: string[] }[];
    faqs: { q: string; a: string }[];
    relatedLinks: { href: string; label: string }[];
}

export interface ClusterRoute {
    slugEn: string;
    slugIt: string;
    from: string;
    to: string;
    hero_image: string;
    imageAlt: string;
    distance: string;
    duration: string;
    en: ClusterRouteContent;
    it: ClusterRouteContent;
}

const COAST_IMG = 'https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&q=60&w=1200';
const AMALFI_IMG = '/images/almafi.webp';
const NAPLES_IMG = '/images/naples.jpg';
const PALERMO_IMG = '/images/palermo-taxi.webp';
const ETNA_IMG = 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&q=60&w=1200';
const SICILY_BAROQUE_IMG = 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=60&w=1200';
const AGRIGENTO_IMG = 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&q=60&w=1200';
const SARDINIA_IMG = 'https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?auto=format&fit=crop&q=60&w=1200';
const SARDINIA_BEACH_IMG = 'https://images.unsplash.com/photo-1590523278191-995cbcda646b?auto=format&fit=crop&q=60&w=1200';
const SARDINIA_COVE_IMG = 'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?auto=format&fit=crop&q=60&w=1200';

const bookingSectionEn = (from: string, to: string) => ({
    h2: 'How Booking Works',
    p: [
        `Booking your ${from} to ${to} transfer takes a couple of minutes: fill in the form with your pickup details, flight number (if applicable), date, time and passenger count, and you'll receive a confirmed, fixed price before you pay anything.`,
        `Once booked, your driver tracks your flight automatically, so early landings, delays and gate changes are handled without you needing to call anyone. Free cancellation is available up to 24 hours before pickup.`,
    ],
});

const bookingSectionIt = (from: string, to: string) => ({
    h2: 'Come Funziona la Prenotazione',
    p: [
        `Prenotare il tuo trasferimento da ${from} a ${to} richiede pochi minuti: compila il modulo con i dettagli del ritiro, il numero di volo (se applicabile), data, ora e numero di passeggeri, e riceverai un prezzo fisso confermato prima di pagare qualsiasi cosa.`,
        `Una volta prenotato, il tuo autista monitora automaticamente il tuo volo, quindi atterraggi anticipati, ritardi e cambi di gate vengono gestiti senza che tu debba chiamare nessuno. La cancellazione gratuita è disponibile fino a 24 ore prima del ritiro.`,
    ],
});

export const clusterRoutes: ClusterRoute[] = [

    // ═══════════════════════════ AMALFI COAST / SORRENTO / CAPRI ═══════════════════════════

    {
        slugEn: 'naples-airport-to-ravello-taxi',
        slugIt: 'trasferimento-aeroporto-napoli-ravello',
        from: 'Naples Airport',
        to: 'Ravello',
        hero_image: AMALFI_IMG,
        imageAlt: 'Clifftop gardens of Ravello overlooking the Amalfi Coast',
        distance: '~75 km',
        duration: '~1 h 45 min',
        en: {
            title: 'Naples Airport to Ravello Transfer',
            metaTitle: 'Naples Airport to Ravello Private Transfer',
            metaDescription: 'Book a private taxi from Naples Airport to Ravello. Fixed price, English-speaking driver, meet & greet at arrivals, door-to-door to your hotel in Ravello.',
            description: 'Ravello sits high above the Amalfi Coast, and getting there from Naples Airport means climbing the SS163 coastal road before turning inland and uphill — not a route you want to attempt with luggage and public transport connections. Our private transfer takes you directly from the arrivals hall to your hotel or villa in Ravello, at a fixed price agreed before you fly.',
            highlights: ['Direct door-to-door service, no transfers', 'Fixed price agreed before travel', 'Driver experienced on Ravello\'s hill roads', 'Meet & greet with flight tracking', 'Free 60-minute waiting time after landing'],
            sections: [
                {
                    h2: 'Route Details',
                    p: [
                        'The journey from Naples Airport to Ravello covers about 75 km and takes roughly 1 hour 45 minutes, following the A3 motorway toward Salerno before joining the SS163 Amalfi coastal road and climbing the final stretch up to Ravello\'s hilltop position, some 350 metres above sea level.',
                        'Your driver meets you in the arrivals hall holding a name sign, with your flight tracked automatically so delays don\'t affect your pickup. Drop-off is at the nearest road-accessible point to your Ravello hotel — some properties require a short walk from the vehicle, which your driver will help you navigate with your luggage.',
                    ],
                },
                {
                    h2: 'Why Choose a Private Transfer',
                    p: [
                        'There is no direct public transport to Ravello from Naples Airport — you\'d need a train to Salerno, a bus to Amalfi, and a second bus climbing the hill, each with its own timetable and luggage handling. A private transfer removes all of that, in one booked, fixed-price journey with a driver who knows exactly where to stop for each hotel.',
                    ],
                },
                bookingSectionEn('Naples Airport', 'Ravello'),
            ],
            faqs: [
                { q: 'How long does the transfer from Naples Airport to Ravello take?', a: 'Around 1 hour 45 minutes, depending on traffic on the SS163 coastal road, which can be slower in July and August.' },
                { q: 'Is there a direct bus from Naples Airport to Ravello?', a: 'No — reaching Ravello by public transport means a train to Salerno, a bus to Amalfi, and a further local bus uphill. A private transfer is a single direct journey.' },
                { q: 'Can my driver help with luggage on Ravello\'s hill roads?', a: 'Yes — many Ravello hotels sit above the main road, and your driver will help carry luggage to the nearest accessible entrance.' },
                { q: 'Can I stop in Positano or Amalfi on the way?', a: 'Yes, a scenic stop can be arranged along the SS163 — let us know when booking so your driver can plan the timing.' },
            ],
            relatedLinks: [
                { href: '/airport/naples', label: 'Naples Capodichino Airport Guide' },
                { href: '/city/ravello', label: 'Ravello Taxi Service' },
                { href: '/city/amalfi-coast', label: 'Amalfi Coast Overview' },
                { href: '/tour/amalfi-coast', label: 'Amalfi Coast Tour' },
                { href: '/route/naples-airport-to-belmond-caruso-ravello-taxi', label: 'Naples Airport to Belmond Hotel Caruso' },
                { href: '/route/positano-to-ravello-taxi', label: 'Positano to Ravello Transfer' },
                { href: '/route/naples-airport-to-positano-taxi', label: 'Naples Airport to Positano Transfer' },
                { href: '/route/naples-airport-to-amalfi-taxi', label: 'Naples Airport to Amalfi Transfer' },
            ],
        },
        it: {
            title: 'Transfer da Aeroporto di Napoli a Ravello',
            metaTitle: 'Transfer Privato Aeroporto di Napoli - Ravello',
            metaDescription: 'Prenota un taxi privato dall\'Aeroporto di Napoli a Ravello. Prezzo fisso, autista di lingua inglese, accoglienza in aeroporto, servizio porta a porta fino al tuo hotel.',
            description: 'Ravello sorge in alto sopra la Costiera Amalfitana, e raggiungerla dall\'Aeroporto di Napoli significa percorrere la SS163 costiera prima di svoltare verso l\'interno e salire — non un tragitto da affrontare con bagagli e mezzi pubblici. Il nostro transfer privato ti porta direttamente dall\'arrivo al tuo hotel o alla tua villa a Ravello, a un prezzo fisso concordato prima della partenza.',
            highlights: ['Servizio diretto porta a porta, senza cambi', 'Prezzo fisso concordato in anticipo', 'Autista esperto sulle strade collinari di Ravello', 'Accoglienza con monitoraggio del volo', '60 minuti di attesa gratuita dopo l\'atterraggio'],
            sections: [
                {
                    h2: 'Dettagli del Percorso',
                    p: [
                        'Il tragitto dall\'Aeroporto di Napoli a Ravello copre circa 75 km e richiede all\'incirca 1 ora e 45 minuti, seguendo l\'autostrada A3 verso Salerno prima di immettersi sulla SS163 costiera amalfitana e affrontare la salita finale fino alla posizione collinare di Ravello, a circa 350 metri sul livello del mare.',
                        'Il tuo autista ti aspetta nella sala arrivi con un cartello con il tuo nome, monitorando automaticamente il volo così eventuali ritardi non influiscono sul ritiro. Lo sbarco avviene nel punto stradale più vicino al tuo hotel a Ravello — alcune strutture richiedono una breve camminata dal veicolo, e il tuo autista ti aiuterà con i bagagli.',
                    ],
                },
                {
                    h2: 'Perché Scegliere un Transfer Privato',
                    p: [
                        'Non esiste un trasporto pubblico diretto per Ravello dall\'Aeroporto di Napoli — servirebbe un treno per Salerno, un autobus per Amalfi e un secondo autobus per la salita, ciascuno con i propri orari e la gestione dei bagagli. Un transfer privato elimina tutto questo, in un unico viaggio prenotato a prezzo fisso con un autista che sa esattamente dove fermarsi per ogni hotel.',
                    ],
                },
                bookingSectionIt('Aeroporto di Napoli', 'Ravello'),
            ],
            faqs: [
                { q: 'Quanto dura il transfer dall\'Aeroporto di Napoli a Ravello?', a: 'Circa 1 ora e 45 minuti, a seconda del traffico sulla SS163 costiera, che può essere più lento a luglio e agosto.' },
                { q: 'C\'è un autobus diretto dall\'Aeroporto di Napoli a Ravello?', a: 'No — raggiungere Ravello con i mezzi pubblici richiede un treno per Salerno, un autobus per Amalfi e un ulteriore autobus locale in salita. Un transfer privato è un unico viaggio diretto.' },
                { q: 'Il mio autista può aiutarmi con i bagagli sulle strade collinari di Ravello?', a: 'Sì — molti hotel di Ravello si trovano sopra la strada principale, e il tuo autista ti aiuterà a portare i bagagli fino all\'ingresso più vicino accessibile.' },
                { q: 'Posso fare una sosta a Positano o Amalfi lungo il tragitto?', a: 'Sì, è possibile organizzare una sosta panoramica lungo la SS163 — comunicalo al momento della prenotazione così l\'autista potrà pianificare i tempi.' },
            ],
            relatedLinks: [
                { href: '/airport/naples', label: 'Guida Aeroporto di Napoli Capodichino' },
                { href: '/city/ravello', label: 'Servizio Taxi Ravello' },
                { href: '/city/amalfi-coast', label: 'Panoramica Costiera Amalfitana' },
                { href: '/tour/amalfi-coast', label: 'Tour della Costiera Amalfitana' },
                { href: '/it/route/trasferimento-aeroporto-napoli-belmond-caruso-ravello', label: 'Aeroporto di Napoli - Belmond Hotel Caruso' },
                { href: '/it/route/trasferimento-positano-ravello', label: 'Transfer Positano - Ravello' },
                { href: '/route/naples-airport-to-positano-taxi', label: 'Naples Airport to Positano Transfer' },
                { href: '/route/naples-airport-to-amalfi-taxi', label: 'Naples Airport to Amalfi Transfer' },
            ],
        },
    },

    {
        slugEn: 'naples-airport-to-praiano-taxi',
        slugIt: 'trasferimento-aeroporto-napoli-praiano',
        from: 'Naples Airport',
        to: 'Praiano',
        hero_image: AMALFI_IMG,
        imageAlt: 'Quiet coastal village of Praiano on the Amalfi Coast',
        distance: '~65 km',
        duration: '~1 h 30 min',
        en: {
            title: 'Naples Airport to Praiano Transfer',
            metaTitle: 'Naples Airport to Praiano Private Transfer',
            metaDescription: 'Private taxi from Naples Airport to Praiano. Fixed price, meet & greet, door-to-door service to this quieter stretch of the Amalfi Coast between Positano and Amalfi.',
            description: 'Praiano sits on the Amalfi Coast between the crowds of Positano and Amalfi, quieter than both but just as scenic, with the SS163 running directly through the village. Our private transfer collects you at Naples Airport arrivals and takes you straight to your hotel, no transfers, no waiting at bus stops with luggage.',
            highlights: ['Direct transfer, no changes required', 'Fixed price agreed before you fly', 'Ideal for Positano/Amalfi day-trip base', 'Meet & greet with flight tracking', 'Free waiting time after landing'],
            sections: [
                {
                    h2: 'Route Details',
                    p: [
                        'The drive from Naples Airport to Praiano is about 65 km and takes approximately 1 hour 30 minutes via the A3 motorway to Castellammare di Stabia, then the SS163 coastal road through Positano toward Praiano.',
                        'Your driver waits in the arrivals hall with a name sign and tracks your flight, so an early or delayed landing doesn\'t change your pickup. Drop-off is at your hotel entrance or the nearest accessible point along the SS163.',
                    ],
                },
                {
                    h2: 'Why Choose a Private Transfer',
                    p: [
                        'Praiano has no dedicated rail link and relies on the same SITA bus route that serves Positano and Amalfi — meaning crowded summer buses with limited luggage space. A private transfer is a single, comfortable journey timed to your actual flight, not a bus schedule.',
                    ],
                },
                bookingSectionEn('Naples Airport', 'Praiano'),
            ],
            faqs: [
                { q: 'How far is Praiano from Naples Airport?', a: 'About 65 km, taking roughly 1 hour 30 minutes by private transfer via the A3 motorway and the SS163 coastal road.' },
                { q: 'Is Praiano a good base for visiting Positano and Amalfi?', a: 'Yes — it sits roughly midway between both towns on the SS163, making short private transfers or taxis to either one easy to arrange.' },
                { q: 'Can I book a return transfer from Praiano to the airport?', a: 'Yes, return transfers work exactly the same way — just book both legs, or contact us to arrange your return before departure.' },
                { q: 'Does the driver track my flight for delays?', a: 'Yes, your flight number is monitored automatically, so your driver adjusts to your actual landing time.' },
            ],
            relatedLinks: [
                { href: '/airport/naples', label: 'Naples Capodichino Airport Guide' },
                { href: '/city/positano', label: 'Positano Taxi Service' },
                { href: '/city/amalfi', label: 'Amalfi Taxi Service' },
                { href: '/city/amalfi-coast', label: 'Amalfi Coast Overview' },
                { href: '/route/sorrento-to-positano-taxi', label: 'Sorrento to Positano Transfer' },
            ],
        },
        it: {
            title: 'Transfer da Aeroporto di Napoli a Praiano',
            metaTitle: 'Transfer Privato Aeroporto di Napoli - Praiano',
            metaDescription: 'Taxi privato dall\'Aeroporto di Napoli a Praiano. Prezzo fisso, accoglienza in aeroporto, servizio porta a porta verso questo tratto più tranquillo della Costiera Amalfitana.',
            description: 'Praiano sorge sulla Costiera Amalfitana tra la folla di Positano e Amalfi, più tranquilla di entrambe ma altrettanto suggestiva, con la SS163 che attraversa direttamente il paese. Il nostro transfer privato ti preleva all\'arrivo dell\'Aeroporto di Napoli e ti porta direttamente al tuo hotel, senza cambi, senza attese alle fermate dell\'autobus con i bagagli.',
            highlights: ['Transfer diretto, nessun cambio richiesto', 'Prezzo fisso concordato prima della partenza', 'Base ideale per gite giornaliere a Positano/Amalfi', 'Accoglienza con monitoraggio del volo', 'Attesa gratuita dopo l\'atterraggio'],
            sections: [
                {
                    h2: 'Dettagli del Percorso',
                    p: [
                        'Il tragitto dall\'Aeroporto di Napoli a Praiano è di circa 65 km e richiede circa 1 ora e 30 minuti tramite l\'autostrada A3 fino a Castellammare di Stabia, poi la SS163 costiera attraverso Positano verso Praiano.',
                        'Il tuo autista ti aspetta nella sala arrivi con un cartello con il tuo nome e monitora il tuo volo, quindi un atterraggio anticipato o in ritardo non modifica il ritiro. Lo sbarco avviene all\'ingresso del tuo hotel o nel punto più vicino accessibile lungo la SS163.',
                    ],
                },
                {
                    h2: 'Perché Scegliere un Transfer Privato',
                    p: [
                        'Praiano non ha un collegamento ferroviario dedicato e dipende dalla stessa linea di autobus SITA che serve Positano e Amalfi — il che significa autobus affollati d\'estate con spazio limitato per i bagagli. Un transfer privato è un viaggio unico e confortevole, calibrato sul tuo volo reale, non su un orario di autobus.',
                    ],
                },
                bookingSectionIt('Aeroporto di Napoli', 'Praiano'),
            ],
            faqs: [
                { q: 'Quanto dista Praiano dall\'Aeroporto di Napoli?', a: 'Circa 65 km, con un transfer privato di circa 1 ora e 30 minuti tramite l\'autostrada A3 e la SS163 costiera.' },
                { q: 'Praiano è una buona base per visitare Positano e Amalfi?', a: 'Sì — si trova più o meno a metà strada tra le due località sulla SS163, rendendo facili brevi transfer privati o taxi verso entrambe.' },
                { q: 'Posso prenotare un transfer di ritorno da Praiano all\'aeroporto?', a: 'Sì, i transfer di ritorno funzionano allo stesso modo — prenota entrambe le tratte, oppure contattaci per organizzare il ritorno prima della partenza.' },
                { q: 'L\'autista monitora il mio volo in caso di ritardi?', a: 'Sì, il numero del tuo volo viene monitorato automaticamente, così l\'autista si adatta al tuo orario di atterraggio reale.' },
            ],
            relatedLinks: [
                { href: '/airport/naples', label: 'Guida Aeroporto di Napoli Capodichino' },
                { href: '/city/positano', label: 'Servizio Taxi Positano' },
                { href: '/city/amalfi', label: 'Servizio Taxi Amalfi' },
                { href: '/city/amalfi-coast', label: 'Panoramica Costiera Amalfitana' },
                { href: '/it/route/trasferimento-sorrento-positano', label: 'Transfer Sorrento - Positano' },
            ],
        },
    },

    {
        slugEn: 'naples-airport-to-capri-taxi',
        slugIt: 'trasferimento-aeroporto-napoli-capri',
        from: 'Naples Airport',
        to: 'Capri',
        hero_image: AMALFI_IMG,
        imageAlt: 'Capri island cliffs and harbour off the Sorrento peninsula',
        distance: '~20 km + ferry',
        duration: '~1 h 15 min total',
        en: {
            title: 'Naples Airport to Capri Transfer',
            metaTitle: 'Naples Airport to Capri Private Transfer & Ferry',
            metaDescription: 'Naples Airport to Capri transfer, coordinated door-to-port with your ferry crossing. Fixed-price taxi to Molo Beverello, professional driver, meet & greet.',
            description: 'Capri is an island, so "Naples Airport to Capri" is really two legs: a private taxi from the airport to Naples\' ferry port, then a hydrofoil or ferry across to Capri. We handle the first leg and coordinate the timing so you make your crossing comfortably, without the added stress of navigating Naples traffic to the port yourself.',
            highlights: ['Airport to port transfer in a private vehicle', 'Timed to your ferry departure', 'Meet & greet with flight tracking', 'Luggage assistance at both ends', 'Ferry booking guidance on request'],
            sections: [
                {
                    h2: 'Route Details',
                    p: [
                        'Your driver takes you from Naples Airport to Molo Beverello or Calata di Massa ferry terminal, about 7 km and roughly 20 minutes depending on city traffic. From there, hydrofoils to Capri take around 45–50 minutes, so allow about 1 hour 15 minutes door-to-port-to-boarding in total.',
                        'We recommend booking your ferry crossing in advance, especially in summer — your driver will time the airport pickup to give you a comfortable buffer before your scheduled departure, not a rushed dash through the port.',
                    ],
                },
                {
                    h2: 'Why Choose a Private Transfer',
                    p: [
                        'Naples city traffic on the way to the port can be unpredictable, and public buses from the airport involve a change and don\'t reliably sync with ferry departure times. A private transfer gets you to the terminal with margin to spare, without the anxiety of missing your boat.',
                    ],
                },
                bookingSectionEn('Naples Airport', 'the Capri ferry terminal'),
            ],
            faqs: [
                { q: 'Does the transfer include the ferry ticket to Capri?', a: 'No, the private transfer covers the airport-to-port leg by road; ferry tickets are booked separately, and we\'re happy to advise on timetables.' },
                { q: 'How long does the whole journey to Capri take?', a: 'About 20 minutes by road to the port, plus a 45–50 minute hydrofoil crossing — roughly 1 hour 15 minutes in total, plus boarding time.' },
                { q: 'Which port do ferries to Capri leave from?', a: 'Mainly Molo Beverello, with some services from Calata di Massa nearby — your driver will confirm the correct terminal based on your ferry booking.' },
                { q: 'Can I do this transfer directly from Sorrento instead?', a: 'Yes — see our Sorrento to Capri route, which uses the closer Marina Piccola crossing.' },
            ],
            relatedLinks: [
                { href: '/airport/naples', label: 'Naples Capodichino Airport Guide' },
                { href: '/city/naples', label: 'Naples City Transfers' },
                { href: '/city/sorrento', label: 'Sorrento Taxi Service' },
                { href: '/tour/amalfi-coast', label: 'Amalfi Coast Tour' },
                { href: '/beach-transfer/capri-island-taxi', label: 'Capri Island Beach Transfer' },
            ],
        },
        it: {
            title: 'Transfer da Aeroporto di Napoli a Capri',
            metaTitle: 'Transfer Privato Aeroporto di Napoli - Capri (con Traghetto)',
            metaDescription: 'Transfer dall\'Aeroporto di Napoli a Capri, coordinato porta-molo con la traversata in traghetto. Taxi a prezzo fisso per Molo Beverello, autista professionale, accoglienza in aeroporto.',
            description: 'Capri è un\'isola, quindi "Aeroporto di Napoli a Capri" è in realtà un percorso in due tratte: un taxi privato dall\'aeroporto al porto di Napoli, poi un aliscafo o traghetto verso Capri. Ci occupiamo della prima tratta e coordiniamo i tempi in modo da farti effettuare la traversata comodamente, senza lo stress aggiuntivo di dover affrontare da solo il traffico di Napoli verso il porto.',
            highlights: ['Transfer aeroporto-porto in veicolo privato', 'Tempistica calibrata sulla partenza del traghetto', 'Accoglienza con monitoraggio del volo', 'Assistenza bagagli a entrambe le tappe', 'Consulenza sulla prenotazione del traghetto su richiesta'],
            sections: [
                {
                    h2: 'Dettagli del Percorso',
                    p: [
                        'Il tuo autista ti porta dall\'Aeroporto di Napoli al terminal traghetti di Molo Beverello o Calata di Massa, circa 7 km e all\'incirca 20 minuti a seconda del traffico cittadino. Da lì, gli aliscafi per Capri impiegano circa 45-50 minuti, quindi calcola circa 1 ora e 15 minuti in totale dalla porta all\'imbarco.',
                        'Consigliamo di prenotare la traversata in anticipo, specialmente in estate — il tuo autista calibrerà il ritiro in aeroporto per darti un margine comodo prima della partenza programmata, senza corse affannose nel porto.',
                    ],
                },
                {
                    h2: 'Perché Scegliere un Transfer Privato',
                    p: [
                        'Il traffico cittadino di Napoli verso il porto può essere imprevedibile, e gli autobus pubblici dall\'aeroporto richiedono un cambio e non si sincronizzano in modo affidabile con gli orari dei traghetti. Un transfer privato ti porta al terminal con margine sufficiente, senza l\'ansia di perdere la barca.',
                    ],
                },
                bookingSectionIt('Aeroporto di Napoli', 'il terminal traghetti per Capri'),
            ],
            faqs: [
                { q: 'Il transfer include il biglietto del traghetto per Capri?', a: 'No, il transfer privato copre solo la tratta aeroporto-porto su strada; i biglietti del traghetto si prenotano separatamente, e siamo felici di consigliarti sugli orari.' },
                { q: 'Quanto dura l\'intero viaggio verso Capri?', a: 'Circa 20 minuti su strada fino al porto, più una traversata in aliscafo di 45-50 minuti — circa 1 ora e 15 minuti in totale, più il tempo di imbarco.' },
                { q: 'Da quale porto partono i traghetti per Capri?', a: 'Principalmente da Molo Beverello, con alcuni servizi da Calata di Massa nelle vicinanze — il tuo autista confermerà il terminal corretto in base alla tua prenotazione del traghetto.' },
                { q: 'Posso fare questo transfer direttamente da Sorrento?', a: 'Sì — consulta il nostro percorso Sorrento-Capri, che utilizza la traversata più vicina da Marina Piccola.' },
            ],
            relatedLinks: [
                { href: '/airport/naples', label: 'Guida Aeroporto di Napoli Capodichino' },
                { href: '/city/naples', label: 'Transfer Città di Napoli' },
                { href: '/city/sorrento', label: 'Servizio Taxi Sorrento' },
                { href: '/tour/amalfi-coast', label: 'Tour della Costiera Amalfitana' },
                { href: '/beach-transfer/capri-island-taxi', label: 'Transfer Spiaggia Isola di Capri' },
            ],
        },
    },

    {
        slugEn: 'sorrento-to-positano-taxi',
        slugIt: 'trasferimento-sorrento-positano',
        from: 'Sorrento',
        to: 'Positano',
        hero_image: COAST_IMG,
        imageAlt: 'Coastal road between Sorrento and Positano on the Amalfi Coast',
        distance: '~20 km',
        duration: '~40-50 min',
        en: {
            title: 'Sorrento to Positano Transfer',
            metaTitle: 'Sorrento to Positano Private Taxi Transfer',
            metaDescription: 'Private taxi from Sorrento to Positano along the Amalfi Coast road. Fixed price, door-to-door, professional driver familiar with the SS163.',
            description: 'Sorrento and Positano are only about 20 km apart, but the SS163 coastal road between them is narrow, winding and often congested in season — one of the most scenic drives in Italy, and one best left to a local driver. Our private transfer takes you door-to-door in comfort, whichever direction you\'re travelling.',
            highlights: ['Short but scenic coastal drive', 'Fixed price, no meter surprises', 'Driver experienced on the SS163', 'Door-to-door, both directions available', 'Ideal for day trips or hotel changes'],
            sections: [
                {
                    h2: 'Route Details',
                    p: [
                        'The distance is around 20 km via the SS145 and SS163, but the road\'s hairpin bends and seasonal traffic mean the drive typically takes 40 to 50 minutes rather than what the distance alone would suggest — longer in July and August, particularly around midday.',
                        'Pickup is at your Sorrento hotel or a central point in town, with drop-off at your Positano hotel or the nearest accessible spot — many Positano properties are reached via steps from the main road, and your driver will help with luggage to that point.',
                    ],
                },
                {
                    h2: 'Why Choose a Private Transfer',
                    p: [
                        'The SITA bus connecting Sorrento and Positano is affordable but often standing-room-only in peak season, with strict luggage limits. A private transfer gives you a fixed departure time, a seat guaranteed, and space for your bags — worth it for a scenic but slow-moving road.',
                    ],
                },
                bookingSectionEn('Sorrento', 'Positano'),
            ],
            faqs: [
                { q: 'How long does the drive from Sorrento to Positano take?', a: 'Typically 40 to 50 minutes, depending on season and time of day — the SS163 coastal road is narrow and can be slow in summer.' },
                { q: 'Can I book this transfer in the Positano to Sorrento direction too?', a: 'Yes, transfers run both ways at the same fixed price — just specify your direction when booking.' },
                { q: 'Is the coastal road safe in a private car?', a: 'Yes — our drivers are experienced on the SS163\'s bends and know the passing points; it\'s a demanding road for unfamiliar self-drivers, but routine for our team.' },
                { q: 'Can I stop for photos along the way?', a: 'Short photo stops can usually be arranged — mention it when booking so your driver can plan the timing.' },
            ],
            relatedLinks: [
                { href: '/city/sorrento', label: 'Sorrento Taxi Service' },
                { href: '/city/positano', label: 'Positano Taxi Service' },
                { href: '/city/amalfi-coast', label: 'Amalfi Coast Overview' },
                { href: '/route/sorrento-to-amalfi-taxi', label: 'Sorrento to Amalfi Transfer' },
                { href: '/route/positano-to-ravello-taxi', label: 'Positano to Ravello Transfer' },
                { href: '/route/naples-airport-to-le-sirenuse-positano-taxi', label: 'Naples Airport to Le Sirenuse' },
            ],
        },
        it: {
            title: 'Transfer da Sorrento a Positano',
            metaTitle: 'Taxi Privato Sorrento - Positano',
            metaDescription: 'Taxi privato da Sorrento a Positano lungo la strada costiera amalfitana. Prezzo fisso, porta a porta, autista professionale esperto sulla SS163.',
            description: 'Sorrento e Positano distano solo circa 20 km, ma la SS163 costiera che le collega è stretta, tortuosa e spesso congestionata in stagione — una delle strade più panoramiche d\'Italia, meglio lasciata a un autista del posto. Il nostro transfer privato ti porta porta a porta in comodità, in qualsiasi direzione tu stia viaggiando.',
            highlights: ['Tragitto costiero breve ma panoramico', 'Prezzo fisso, nessuna sorpresa sul contatore', 'Autista esperto sulla SS163', 'Porta a porta, disponibile in entrambe le direzioni', 'Ideale per gite giornaliere o cambi di hotel'],
            sections: [
                {
                    h2: 'Dettagli del Percorso',
                    p: [
                        'La distanza è di circa 20 km via SS145 e SS163, ma i tornanti della strada e il traffico stagionale fanno sì che il tragitto richieda tipicamente 40-50 minuti, più a lungo di quanto la sola distanza suggerirebbe — ancora di più a luglio e agosto, in particolare verso mezzogiorno.',
                        'Il ritiro avviene presso il tuo hotel a Sorrento o in un punto centrale del paese, con arrivo al tuo hotel a Positano o nel punto accessibile più vicino — molte strutture di Positano si raggiungono tramite scalinate dalla strada principale, e il tuo autista ti aiuterà con i bagagli fino a quel punto.',
                    ],
                },
                {
                    h2: 'Perché Scegliere un Transfer Privato',
                    p: [
                        'L\'autobus SITA che collega Sorrento e Positano è economico ma spesso pieno all\'inverosimile nell\'alta stagione, con rigidi limiti di bagaglio. Un transfer privato ti garantisce un orario di partenza fisso, un posto a sedere garantito e spazio per le valigie — vale la pena su una strada panoramica ma lenta.',
                    ],
                },
                bookingSectionIt('Sorrento', 'Positano'),
            ],
            faqs: [
                { q: 'Quanto dura il tragitto da Sorrento a Positano?', a: 'Tipicamente 40-50 minuti, a seconda della stagione e dell\'ora del giorno — la SS163 costiera è stretta e può essere lenta in estate.' },
                { q: 'Posso prenotare questo transfer anche nella direzione Positano-Sorrento?', a: 'Sì, i transfer funzionano in entrambe le direzioni allo stesso prezzo fisso — specifica semplicemente la direzione al momento della prenotazione.' },
                { q: 'La strada costiera è sicura in auto privata?', a: 'Sì — i nostri autisti hanno esperienza sulle curve della SS163 e conoscono i punti di sorpasso; è una strada impegnativa per chi guida da solo senza esperienza, ma di routine per il nostro team.' },
                { q: 'Posso fermarmi per delle foto lungo il tragitto?', a: 'Brevi soste fotografiche di solito si possono organizzare — menzionalo al momento della prenotazione così l\'autista potrà pianificare i tempi.' },
            ],
            relatedLinks: [
                { href: '/city/sorrento', label: 'Servizio Taxi Sorrento' },
                { href: '/city/positano', label: 'Servizio Taxi Positano' },
                { href: '/city/amalfi-coast', label: 'Panoramica Costiera Amalfitana' },
                { href: '/it/route/trasferimento-sorrento-amalfi', label: 'Transfer Sorrento - Amalfi' },
                { href: '/it/route/trasferimento-positano-ravello', label: 'Transfer Positano - Ravello' },
                { href: '/it/route/trasferimento-aeroporto-napoli-le-sirenuse-positano', label: 'Aeroporto di Napoli - Le Sirenuse' },
            ],
        },
    },

    {
        slugEn: 'sorrento-to-amalfi-taxi',
        slugIt: 'trasferimento-sorrento-amalfi',
        from: 'Sorrento',
        to: 'Amalfi',
        hero_image: COAST_IMG,
        imageAlt: 'Amalfi town seafront viewed from the coastal road',
        distance: '~34 km',
        duration: '~1 h 10 min',
        en: {
            title: 'Sorrento to Amalfi Transfer',
            metaTitle: 'Sorrento to Amalfi Private Taxi Transfer',
            metaDescription: 'Private taxi from Sorrento to Amalfi town along the SS163 coastal road. Fixed price, professional driver, door-to-door service.',
            description: 'The drive from Sorrento to Amalfi is the classic Amalfi Coast experience — cliffside villages, hairpin turns and sea views the entire way. It\'s also a longer, more demanding drive than most visitors expect, which is exactly why a private transfer with a local driver makes such a difference.',
            highlights: ['Full classic Amalfi Coast scenic drive', 'Fixed price agreed in advance', 'Driver experienced on the SS163', 'Door-to-door to your Amalfi hotel', 'Return transfers available'],
            sections: [
                {
                    h2: 'Route Details',
                    p: [
                        'Sorrento to Amalfi covers about 34 km via the SS163, passing through Positano and Praiano en route, and typically takes around 1 hour 10 minutes — longer during peak summer traffic, when the road can back up around Positano\'s narrow centre.',
                        'Pickup is at your Sorrento hotel, with drop-off at your Amalfi hotel or the town\'s central area near Piazza Duomo, from where most accommodation is within easy walking distance.',
                    ],
                },
                {
                    h2: 'Why Choose a Private Transfer',
                    p: [
                        'Self-driving this road is possible but stressful for first-timers — narrow lanes, tour coaches, and scooters overtaking on blind bends. A private transfer lets you actually enjoy the views instead of watching the road, and skips the parking problem entirely once you arrive in car-unfriendly Amalfi.',
                    ],
                },
                bookingSectionEn('Sorrento', 'Amalfi'),
            ],
            faqs: [
                { q: 'How long is the drive from Sorrento to Amalfi?', a: 'Around 1 hour 10 minutes under normal conditions, longer in July and August due to traffic through Positano.' },
                { q: 'Does the route pass through Positano?', a: 'Yes, the SS163 runs directly through Positano — a stop there can be arranged if you\'d like to break up the journey.' },
                { q: 'Where does the driver drop me off in Amalfi?', a: 'At your hotel if road-accessible, or the town centre near Piazza Duomo, which is walkable to most accommodation.' },
                { q: 'Can I book a one-way transfer, or only round trip?', a: 'One-way transfers are available — book the return separately when you know your onward plans.' },
            ],
            relatedLinks: [
                { href: '/city/sorrento', label: 'Sorrento Taxi Service' },
                { href: '/city/amalfi', label: 'Amalfi Taxi Service' },
                { href: '/city/positano', label: 'Positano Taxi Service' },
                { href: '/route/sorrento-to-positano-taxi', label: 'Sorrento to Positano Transfer' },
                { href: '/route/naples-airport-to-hotel-santa-caterina-amalfi-taxi', label: 'Naples Airport to Hotel Santa Caterina' },
            ],
        },
        it: {
            title: 'Transfer da Sorrento ad Amalfi',
            metaTitle: 'Taxi Privato Sorrento - Amalfi',
            metaDescription: 'Taxi privato da Sorrento ad Amalfi lungo la strada costiera SS163. Prezzo fisso, autista professionale, servizio porta a porta.',
            description: 'Il tragitto da Sorrento ad Amalfi è l\'esperienza classica della Costiera Amalfitana — borghi a picco sul mare, tornanti e vista sul mare per tutto il percorso. È anche un tragitto più lungo e impegnativo di quanto la maggior parte dei visitatori si aspetti, ed è proprio per questo che un transfer privato con un autista del posto fa una tale differenza.',
            highlights: ['Percorso panoramico classico della Costiera Amalfitana', 'Prezzo fisso concordato in anticipo', 'Autista esperto sulla SS163', 'Porta a porta fino al tuo hotel ad Amalfi', 'Transfer di ritorno disponibili'],
            sections: [
                {
                    h2: 'Dettagli del Percorso',
                    p: [
                        'Da Sorrento ad Amalfi si percorrono circa 34 km via SS163, passando per Positano e Praiano lungo il tragitto, e si impiega tipicamente circa 1 ora e 10 minuti — più a lungo durante il traffico estivo, quando la strada può congestionarsi intorno allo stretto centro di Positano.',
                        'Il ritiro avviene presso il tuo hotel a Sorrento, con arrivo al tuo hotel ad Amalfi o nella zona centrale del paese vicino a Piazza Duomo, da dove la maggior parte delle strutture è raggiungibile facilmente a piedi.',
                    ],
                },
                {
                    h2: 'Perché Scegliere un Transfer Privato',
                    p: [
                        'Guidare da soli su questa strada è possibile ma stressante per chi non la conosce — corsie strette, pullman turistici e scooter che sorpassano in curve cieche. Un transfer privato ti permette di goderti davvero il panorama invece di tenere gli occhi sulla strada, ed elimina del tutto il problema del parcheggio una volta arrivati nella Amalfi poco adatta alle auto.',
                    ],
                },
                bookingSectionIt('Sorrento', 'Amalfi'),
            ],
            faqs: [
                { q: 'Quanto dura il tragitto da Sorrento ad Amalfi?', a: 'Circa 1 ora e 10 minuti in condizioni normali, più a lungo a luglio e agosto per il traffico attraverso Positano.' },
                { q: 'Il percorso passa per Positano?', a: 'Sì, la SS163 attraversa direttamente Positano — è possibile organizzare una sosta lì se desideri spezzare il viaggio.' },
                { q: 'Dove mi lascia l\'autista ad Amalfi?', a: 'Al tuo hotel se accessibile su strada, oppure nel centro del paese vicino a Piazza Duomo, raggiungibile a piedi dalla maggior parte delle strutture.' },
                { q: 'Posso prenotare un transfer di sola andata, o solo andata e ritorno?', a: 'Sono disponibili transfer di sola andata — prenota il ritorno separatamente quando conosci i tuoi piani successivi.' },
            ],
            relatedLinks: [
                { href: '/city/sorrento', label: 'Servizio Taxi Sorrento' },
                { href: '/city/amalfi', label: 'Servizio Taxi Amalfi' },
                { href: '/city/positano', label: 'Servizio Taxi Positano' },
                { href: '/it/route/trasferimento-sorrento-positano', label: 'Transfer Sorrento - Positano' },
                { href: '/it/route/trasferimento-aeroporto-napoli-hotel-santa-caterina-amalfi', label: 'Aeroporto di Napoli - Hotel Santa Caterina' },
            ],
        },
    },

    {
        slugEn: 'positano-to-ravello-taxi',
        slugIt: 'trasferimento-positano-ravello',
        from: 'Positano',
        to: 'Ravello',
        hero_image: AMALFI_IMG,
        imageAlt: 'View from Ravello down toward Positano and the Amalfi coastline',
        distance: '~18 km',
        duration: '~40-50 min',
        en: {
            title: 'Positano to Ravello Transfer',
            metaTitle: 'Positano to Ravello Private Taxi Transfer',
            metaDescription: 'Private taxi from Positano to Ravello. Fixed price, door-to-door service up to Ravello\'s clifftop gardens, professional driver.',
            description: 'Positano and Ravello are both Amalfi Coast icons, but they sit at opposite ends of the terrain — Positano tumbling down to the sea, Ravello perched high on the ridge above Amalfi. Our private transfer handles the coastal drive and the climb, so you arrive relaxed rather than car-sick from the switchbacks.',
            highlights: ['Popular day-trip pairing, easily arranged', 'Fixed price for the full journey', 'Handles both the coast road and the climb', 'Door-to-door service', 'Return transfers available same day'],
            sections: [
                {
                    h2: 'Route Details',
                    p: [
                        'The journey covers about 18 km — first along the SS163 toward Amalfi, then turning inland and climbing roughly 350 metres up to Ravello — and takes 40 to 50 minutes depending on traffic through Amalfi\'s centre.',
                        'Many visitors do this as a half-day trip: gardens at Villa Rufolo or Villa Cimbrone in Ravello, lunch, then back down to Positano by evening. We can arrange the return leg as part of the same booking.',
                    ],
                },
                {
                    h2: 'Why Choose a Private Transfer',
                    p: [
                        'Reaching Ravello from Positano by public transport means a bus to Amalfi and a second bus climbing the hill — workable, but slow and inflexible if you want to linger over lunch or the gardens. A private transfer waits for you and adjusts to your schedule.',
                    ],
                },
                bookingSectionEn('Positano', 'Ravello'),
            ],
            faqs: [
                { q: 'Can I book this as a round trip with waiting time in Ravello?', a: 'Yes — let us know your planned itinerary and we can arrange a driver to wait or return at a set time.' },
                { q: 'How long does the climb up to Ravello take?', a: 'The uphill stretch from Amalfi adds about 15–20 minutes to the coastal drive, depending on traffic.' },
                { q: 'Is this a common day-trip combination?', a: 'Very — Positano and Ravello are two of the coast\'s most photographed spots, and pairing them in one day is a popular private-transfer itinerary.' },
                { q: 'Can I add a stop in Amalfi on the way?', a: 'Yes, since Amalfi sits directly on the route — a short stop is easy to include.' },
            ],
            relatedLinks: [
                { href: '/city/positano', label: 'Positano Taxi Service' },
                { href: '/city/ravello', label: 'Ravello Taxi Service' },
                { href: '/city/amalfi', label: 'Amalfi Taxi Service' },
                { href: '/route/naples-airport-to-ravello-taxi', label: 'Naples Airport to Ravello Transfer' },
                { href: '/route/naples-airport-to-belmond-caruso-ravello-taxi', label: 'Naples Airport to Belmond Hotel Caruso' },
            ],
        },
        it: {
            title: 'Transfer da Positano a Ravello',
            metaTitle: 'Taxi Privato Positano - Ravello',
            metaDescription: 'Taxi privato da Positano a Ravello. Prezzo fisso, servizio porta a porta fino ai giardini panoramici di Ravello, autista professionale.',
            description: 'Positano e Ravello sono entrambe icone della Costiera Amalfitana, ma si trovano agli estremi opposti del territorio — Positano che scende verso il mare, Ravello arroccata in alto sulla cresta sopra Amalfi. Il nostro transfer privato gestisce la strada costiera e la salita, così arrivi rilassato invece che stordito dai tornanti.',
            highlights: ['Combinazione popolare per gite giornaliere, facile da organizzare', 'Prezzo fisso per l\'intero viaggio', 'Gestisce sia la strada costiera che la salita', 'Servizio porta a porta', 'Transfer di ritorno disponibili in giornata'],
            sections: [
                {
                    h2: 'Dettagli del Percorso',
                    p: [
                        'Il viaggio copre circa 18 km — prima lungo la SS163 verso Amalfi, poi svoltando verso l\'interno e salendo di circa 350 metri fino a Ravello — e richiede 40-50 minuti a seconda del traffico nel centro di Amalfi.',
                        'Molti visitatori fanno questo come gita di mezza giornata: i giardini di Villa Rufolo o Villa Cimbrone a Ravello, pranzo, poi ritorno a Positano in serata. Possiamo organizzare la tratta di ritorno come parte della stessa prenotazione.',
                    ],
                },
                {
                    h2: 'Perché Scegliere un Transfer Privato',
                    p: [
                        'Raggiungere Ravello da Positano con i mezzi pubblici significa un autobus per Amalfi e un secondo autobus per la salita — fattibile, ma lento e poco flessibile se vuoi soffermarti sul pranzo o sui giardini. Un transfer privato ti aspetta e si adatta al tuo programma.',
                    ],
                },
                bookingSectionIt('Positano', 'Ravello'),
            ],
            faqs: [
                { q: 'Posso prenotarlo come andata e ritorno con attesa a Ravello?', a: 'Sì — comunicaci il tuo itinerario previsto e potremo organizzare un autista che aspetti o torni a un orario stabilito.' },
                { q: 'Quanto tempo aggiunge la salita fino a Ravello?', a: 'Il tratto in salita da Amalfi aggiunge circa 15-20 minuti al tragitto costiero, a seconda del traffico.' },
                { q: 'È una combinazione comune per una gita giornaliera?', a: 'Molto — Positano e Ravello sono due dei luoghi più fotografati della costiera, e abbinarli in un giorno è un itinerario popolare per il transfer privato.' },
                { q: 'Posso aggiungere una sosta ad Amalfi lungo il tragitto?', a: 'Sì, dato che Amalfi si trova direttamente sul percorso — una breve sosta è facile da includere.' },
            ],
            relatedLinks: [
                { href: '/city/positano', label: 'Servizio Taxi Positano' },
                { href: '/city/ravello', label: 'Servizio Taxi Ravello' },
                { href: '/city/amalfi', label: 'Servizio Taxi Amalfi' },
                { href: '/it/route/trasferimento-aeroporto-napoli-ravello', label: 'Aeroporto di Napoli - Ravello' },
                { href: '/it/route/trasferimento-aeroporto-napoli-belmond-caruso-ravello', label: 'Aeroporto di Napoli - Belmond Hotel Caruso' },
            ],
        },
    },

    {
        slugEn: 'naples-airport-to-le-sirenuse-positano-taxi',
        slugIt: 'trasferimento-aeroporto-napoli-le-sirenuse-positano',
        from: 'Naples Airport',
        to: 'Le Sirenuse, Positano',
        hero_image: COAST_IMG,
        imageAlt: 'Positano hillside where Le Sirenuse hotel overlooks the sea',
        distance: '~60 km',
        duration: '~1 h 30-45 min',
        en: {
            title: 'Naples Airport to Le Sirenuse Transfer',
            metaTitle: 'Naples Airport to Le Sirenuse Positano Transfer',
            metaDescription: 'Private transfer from Naples Airport to Le Sirenuse, Positano. Fixed price, meet & greet, direct door-to-door service to one of the Amalfi Coast\'s best-known hotels.',
            description: 'Le Sirenuse sits on the hillside above Positano\'s beach, one of the Amalfi Coast\'s most recognised addresses. Our private transfer takes you directly from Naples Airport arrivals to the hotel entrance, with luggage assistance for the final steps most vehicles can\'t avoid on Positano\'s pedestrian lanes.',
            highlights: ['Direct to Le Sirenuse, no transfers', 'Fixed price agreed before travel', 'Meet & greet with flight tracking', 'Luggage help on Positano\'s stepped lanes', 'Free 60-minute waiting time after landing'],
            sections: [
                {
                    h2: 'Route Details',
                    p: [
                        'The transfer covers around 60 km via the A3 motorway and the SS163 coastal road, and typically takes 1 hour 30 to 45 minutes depending on traffic — Positano\'s access road can back up in peak summer afternoons.',
                        'Vehicles cannot reach Le Sirenuse\'s entrance directly due to Positano\'s pedestrian streets — your driver drops you at the nearest accessible point, a short walk from the hotel, and helps carry luggage that final stretch.',
                    ],
                },
                {
                    h2: 'Why Choose a Private Transfer',
                    p: [
                        'Arriving at a hotel like Le Sirenuse after a long flight is not the moment for a crowded bus and a luggage-laden walk from a random drop point. A private transfer is timed to your flight, monitored for delays, and gets you as close to the door as the town\'s geography allows.',
                    ],
                },
                bookingSectionEn('Naples Airport', 'Le Sirenuse, Positano'),
            ],
            faqs: [
                { q: 'Can the car reach the hotel entrance directly?', a: 'Vehicles reach the nearest accessible point to Le Sirenuse — Positano\'s central lanes are pedestrian, so the final short stretch is on foot, with luggage assistance from your driver.' },
                { q: 'How long is the transfer from Naples Airport?', a: 'Around 1 hour 30 to 45 minutes, depending on traffic on the SS163, especially in July and August.' },
                { q: 'Is the price fixed regardless of flight delays?', a: 'Yes — your flight is tracked automatically and the agreed price doesn\'t change for landing-time adjustments.' },
                { q: 'Can I book a return transfer to the airport for departure?', a: 'Yes, simply book both legs, or contact us once your return flight is confirmed.' },
            ],
            relatedLinks: [
                { href: '/airport/naples', label: 'Naples Capodichino Airport Guide' },
                { href: '/city/positano', label: 'Positano Taxi Service' },
                { href: '/route/naples-airport-to-il-san-pietro-positano-taxi', label: 'Naples Airport to Il San Pietro di Positano' },
                { href: '/route/sorrento-to-positano-taxi', label: 'Sorrento to Positano Transfer' },
                { href: '/tour/amalfi-coast', label: 'Amalfi Coast Tour' },
            ],
        },
        it: {
            title: 'Transfer da Aeroporto di Napoli a Le Sirenuse',
            metaTitle: 'Transfer Aeroporto di Napoli - Le Sirenuse Positano',
            metaDescription: 'Transfer privato dall\'Aeroporto di Napoli a Le Sirenuse, Positano. Prezzo fisso, accoglienza in aeroporto, servizio porta a porta verso uno degli hotel più noti della Costiera Amalfitana.',
            description: 'Le Sirenuse sorge sulla collina sopra la spiaggia di Positano, uno degli indirizzi più riconosciuti della Costiera Amalfitana. Il nostro transfer privato ti porta direttamente dall\'arrivo dell\'Aeroporto di Napoli all\'ingresso dell\'hotel, con assistenza per i bagagli negli ultimi passi che la maggior parte dei veicoli non può evitare sui vicoli pedonali di Positano.',
            highlights: ['Diretto a Le Sirenuse, senza cambi', 'Prezzo fisso concordato prima della partenza', 'Accoglienza con monitoraggio del volo', 'Aiuto con i bagagli sui vicoli a gradini di Positano', '60 minuti di attesa gratuita dopo l\'atterraggio'],
            sections: [
                {
                    h2: 'Dettagli del Percorso',
                    p: [
                        'Il transfer copre circa 60 km via autostrada A3 e la SS163 costiera, e richiede tipicamente da 1 ora e 30 a 1 ora e 45 minuti a seconda del traffico — la strada d\'accesso a Positano può congestionarsi nei pomeriggi estivi di punta.',
                        'I veicoli non possono raggiungere direttamente l\'ingresso di Le Sirenuse a causa delle vie pedonali di Positano — il tuo autista ti lascia nel punto accessibile più vicino, a breve distanza a piedi dall\'hotel, e aiuta a portare i bagagli per quell\'ultimo tratto.',
                    ],
                },
                {
                    h2: 'Perché Scegliere un Transfer Privato',
                    p: [
                        'Arrivare in un hotel come Le Sirenuse dopo un lungo volo non è il momento per un autobus affollato e una camminata con i bagagli da un punto di sbarco casuale. Un transfer privato è calibrato sul tuo volo, monitorato per i ritardi, e ti porta il più vicino possibile alla porta, per quanto la geografia del paese consenta.',
                    ],
                },
                bookingSectionIt('Aeroporto di Napoli', 'Le Sirenuse, Positano'),
            ],
            faqs: [
                { q: 'L\'auto può raggiungere direttamente l\'ingresso dell\'hotel?', a: 'I veicoli raggiungono il punto accessibile più vicino a Le Sirenuse — i vicoli centrali di Positano sono pedonali, quindi l\'ultimo breve tratto è a piedi, con l\'assistenza del tuo autista per i bagagli.' },
                { q: 'Quanto dura il transfer dall\'Aeroporto di Napoli?', a: 'Circa 1 ora e 30-45 minuti, a seconda del traffico sulla SS163, specialmente a luglio e agosto.' },
                { q: 'Il prezzo è fisso anche in caso di ritardo del volo?', a: 'Sì — il tuo volo viene monitorato automaticamente e il prezzo concordato non cambia per aggiustamenti dell\'orario di atterraggio.' },
                { q: 'Posso prenotare un transfer di ritorno in aeroporto per la partenza?', a: 'Sì, basta prenotare entrambe le tratte, oppure contattaci una volta confermato il volo di ritorno.' },
            ],
            relatedLinks: [
                { href: '/airport/naples', label: 'Guida Aeroporto di Napoli Capodichino' },
                { href: '/city/positano', label: 'Servizio Taxi Positano' },
                { href: '/it/route/trasferimento-aeroporto-napoli-il-san-pietro-positano', label: 'Aeroporto di Napoli - Il San Pietro di Positano' },
                { href: '/it/route/trasferimento-sorrento-positano', label: 'Transfer Sorrento - Positano' },
                { href: '/tour/amalfi-coast', label: 'Tour della Costiera Amalfitana' },
            ],
        },
    },

    {
        slugEn: 'naples-airport-to-il-san-pietro-positano-taxi',
        slugIt: 'trasferimento-aeroporto-napoli-il-san-pietro-positano',
        from: 'Naples Airport',
        to: 'Il San Pietro di Positano',
        hero_image: COAST_IMG,
        imageAlt: 'Clifftop terraces near Positano typical of Il San Pietro\'s setting',
        distance: '~62 km',
        duration: '~1 h 30-45 min',
        en: {
            title: 'Naples Airport to Il San Pietro di Positano Transfer',
            metaTitle: 'Naples Airport to Il San Pietro di Positano Transfer',
            metaDescription: 'Private transfer from Naples Airport to Il San Pietro di Positano. Fixed price, meet & greet, door-to-door to this clifftop Relais & Châteaux hotel.',
            description: 'Il San Pietro di Positano sits just outside the town centre, built into the cliffside with its own private access road — one of the few Positano-area hotels a vehicle can reach almost to the door. Our private transfer takes you there directly from Naples Airport, at a fixed price agreed before you fly.',
            highlights: ['Near-door drop-off, unlike central Positano hotels', 'Fixed price agreed before travel', 'Meet & greet with flight tracking', 'Comfortable vehicle for the coastal drive', 'Free 60-minute waiting time after landing'],
            sections: [
                {
                    h2: 'Route Details',
                    p: [
                        'The journey is about 62 km via the A3 motorway and SS163, typically taking 1 hour 30 to 45 minutes. Il San Pietro sits just east of central Positano on the SS163, with its own driveway, so your driver can take you almost to the entrance rather than the pedestrian drop-offs required in the town centre.',
                    ],
                },
                {
                    h2: 'Why Choose a Private Transfer',
                    p: [
                        'This is one of the coast\'s more secluded hotels, and public transport doesn\'t serve its driveway at all — you\'d be dropped in central Positano and need a taxi for the final stretch regardless. A private transfer skips that entirely, in one booked journey from the airport.',
                    ],
                },
                bookingSectionEn('Naples Airport', 'Il San Pietro di Positano'),
            ],
            faqs: [
                { q: 'Can the driver reach the hotel\'s own driveway?', a: 'Yes — Il San Pietro has private road access, so your driver can take you much closer to the entrance than at most central Positano hotels.' },
                { q: 'How long is the drive from Naples Airport?', a: 'Around 1 hour 30 to 45 minutes via the A3 and SS163, longer during peak summer traffic.' },
                { q: 'Is this transfer available for a return trip to the airport?', a: 'Yes, book the return leg separately once your departure flight is confirmed.' },
                { q: 'Can I combine this with a stop in Positano town?', a: 'Yes, a brief stop in central Positano can be arranged on the way if time allows.' },
            ],
            relatedLinks: [
                { href: '/airport/naples', label: 'Naples Capodichino Airport Guide' },
                { href: '/city/positano', label: 'Positano Taxi Service' },
                { href: '/route/naples-airport-to-le-sirenuse-positano-taxi', label: 'Naples Airport to Le Sirenuse' },
                { href: '/route/sorrento-to-positano-taxi', label: 'Sorrento to Positano Transfer' },
                { href: '/tour/amalfi-coast', label: 'Amalfi Coast Tour' },
            ],
        },
        it: {
            title: 'Transfer da Aeroporto di Napoli a Il San Pietro di Positano',
            metaTitle: 'Transfer Aeroporto di Napoli - Il San Pietro di Positano',
            metaDescription: 'Transfer privato dall\'Aeroporto di Napoli a Il San Pietro di Positano. Prezzo fisso, accoglienza in aeroporto, porta a porta verso questo hotel Relais & Châteaux a picco sul mare.',
            description: 'Il San Pietro di Positano sorge appena fuori dal centro del paese, costruito nella scogliera con una propria strada di accesso privata — uno dei pochi hotel della zona di Positano che un veicolo può raggiungere quasi fino alla porta. Il nostro transfer privato ti porta lì direttamente dall\'Aeroporto di Napoli, a un prezzo fisso concordato prima della partenza.',
            highlights: ['Sbarco quasi alla porta, a differenza degli hotel del centro di Positano', 'Prezzo fisso concordato prima della partenza', 'Accoglienza con monitoraggio del volo', 'Veicolo confortevole per il tragitto costiero', '60 minuti di attesa gratuita dopo l\'atterraggio'],
            sections: [
                {
                    h2: 'Dettagli del Percorso',
                    p: [
                        'Il viaggio è di circa 62 km via autostrada A3 e SS163, richiedendo tipicamente da 1 ora e 30 a 1 ora e 45 minuti. Il San Pietro si trova appena a est del centro di Positano sulla SS163, con un proprio vialetto d\'accesso, quindi il tuo autista può portarti quasi fino all\'ingresso invece degli sbarchi pedonali richiesti nel centro del paese.',
                    ],
                },
                {
                    h2: 'Perché Scegliere un Transfer Privato',
                    p: [
                        'Questo è uno degli hotel più appartati della costiera, e i mezzi pubblici non servono affatto il suo vialetto — verresti comunque lasciato nel centro di Positano e avresti bisogno di un taxi per l\'ultimo tratto. Un transfer privato elimina del tutto questo passaggio, in un unico viaggio prenotato dall\'aeroporto.',
                    ],
                },
                bookingSectionIt('Aeroporto di Napoli', 'Il San Pietro di Positano'),
            ],
            faqs: [
                { q: 'L\'autista può raggiungere il vialetto privato dell\'hotel?', a: 'Sì — Il San Pietro ha un accesso stradale privato, quindi il tuo autista può portarti molto più vicino all\'ingresso rispetto alla maggior parte degli hotel del centro di Positano.' },
                { q: 'Quanto dura il tragitto dall\'Aeroporto di Napoli?', a: 'Circa 1 ora e 30-45 minuti via A3 e SS163, più a lungo durante il traffico estivo di punta.' },
                { q: 'Questo transfer è disponibile anche per il ritorno in aeroporto?', a: 'Sì, prenota la tratta di ritorno separatamente una volta confermato il volo di partenza.' },
                { q: 'Posso combinarlo con una sosta nel paese di Positano?', a: 'Sì, se il tempo lo consente si può organizzare una breve sosta nel centro di Positano lungo il tragitto.' },
            ],
            relatedLinks: [
                { href: '/airport/naples', label: 'Guida Aeroporto di Napoli Capodichino' },
                { href: '/city/positano', label: 'Servizio Taxi Positano' },
                { href: '/it/route/trasferimento-aeroporto-napoli-le-sirenuse-positano', label: 'Aeroporto di Napoli - Le Sirenuse' },
                { href: '/it/route/trasferimento-sorrento-positano', label: 'Transfer Sorrento - Positano' },
                { href: '/tour/amalfi-coast', label: 'Tour della Costiera Amalfitana' },
            ],
        },
    },

    {
        slugEn: 'naples-airport-to-hotel-santa-caterina-amalfi-taxi',
        slugIt: 'trasferimento-aeroporto-napoli-hotel-santa-caterina-amalfi',
        from: 'Naples Airport',
        to: 'Hotel Santa Caterina, Amalfi',
        hero_image: AMALFI_IMG,
        imageAlt: 'Amalfi coastline near Hotel Santa Caterina\'s clifftop setting',
        distance: '~75 km',
        duration: '~1 h 40 min',
        en: {
            title: 'Naples Airport to Hotel Santa Caterina Amalfi Transfer',
            metaTitle: 'Naples Airport to Hotel Santa Caterina Amalfi Transfer',
            metaDescription: 'Private transfer from Naples Airport to Hotel Santa Caterina, Amalfi. Fixed price, meet & greet, door-to-door to one of the coast\'s classic clifftop hotels.',
            description: 'Hotel Santa Caterina sits just outside Amalfi\'s centre on its own stretch of cliff, with a private elevator down to its beach club — a short but pleasant final approach after the drive from Naples Airport. Our private transfer takes you directly there, tracked to your flight and fixed in price.',
            highlights: ['Direct to Hotel Santa Caterina\'s entrance', 'Fixed price agreed before travel', 'Meet & greet with flight tracking', 'Comfortable vehicle for the coastal drive', 'Free 60-minute waiting time after landing'],
            sections: [
                {
                    h2: 'Route Details',
                    p: [
                        'The transfer covers roughly 75 km via the A3 motorway to Salerno, then the SS163 coastal road, and typically takes about 1 hour 40 minutes. Hotel Santa Caterina sits just west of central Amalfi with direct road access, so your driver can take you to the entrance itself.',
                    ],
                },
                {
                    h2: 'Why Choose a Private Transfer',
                    p: [
                        'After a flight, the last thing you want is a bus to Amalfi followed by a taxi search for the final stretch to the hotel. A private transfer is one booked journey, door-to-door, with a driver tracking your actual landing time rather than a scheduled one.',
                    ],
                },
                bookingSectionEn('Naples Airport', 'Hotel Santa Caterina, Amalfi'),
            ],
            faqs: [
                { q: 'Does the car reach the hotel entrance directly?', a: 'Yes — Hotel Santa Caterina has direct road access just outside Amalfi\'s pedestrian centre.' },
                { q: 'How long does the transfer take from Naples Airport?', a: 'Around 1 hour 40 minutes via the A3 and SS163, longer in peak summer traffic.' },
                { q: 'Can I arrange a stop in Amalfi town on arrival?', a: 'Yes, a short stop in central Amalfi can be added if you\'d like to see Piazza Duomo before checking in.' },
                { q: 'Is a return transfer to the airport available?', a: 'Yes, book both legs together or arrange the return once your departure flight is set.' },
            ],
            relatedLinks: [
                { href: '/airport/naples', label: 'Naples Capodichino Airport Guide' },
                { href: '/city/amalfi', label: 'Amalfi Taxi Service' },
                { href: '/route/sorrento-to-amalfi-taxi', label: 'Sorrento to Amalfi Transfer' },
                { href: '/route/naples-airport-to-belmond-caruso-ravello-taxi', label: 'Naples Airport to Belmond Hotel Caruso' },
                { href: '/tour/amalfi-coast', label: 'Amalfi Coast Tour' },
            ],
        },
        it: {
            title: 'Transfer da Aeroporto di Napoli a Hotel Santa Caterina Amalfi',
            metaTitle: 'Transfer Aeroporto di Napoli - Hotel Santa Caterina Amalfi',
            metaDescription: 'Transfer privato dall\'Aeroporto di Napoli a Hotel Santa Caterina, Amalfi. Prezzo fisso, accoglienza in aeroporto, porta a porta verso uno degli hotel classici a picco sul mare della costiera.',
            description: 'Hotel Santa Caterina sorge appena fuori dal centro di Amalfi sul suo tratto di scogliera privato, con un ascensore privato che scende alla sua spiaggia — un ultimo tratto breve ma piacevole dopo il tragitto dall\'Aeroporto di Napoli. Il nostro transfer privato ti porta lì direttamente, monitorato sul tuo volo e a prezzo fisso.',
            highlights: ['Diretto all\'ingresso dell\'Hotel Santa Caterina', 'Prezzo fisso concordato prima della partenza', 'Accoglienza con monitoraggio del volo', 'Veicolo confortevole per il tragitto costiero', '60 minuti di attesa gratuita dopo l\'atterraggio'],
            sections: [
                {
                    h2: 'Dettagli del Percorso',
                    p: [
                        'Il transfer copre circa 75 km via autostrada A3 fino a Salerno, poi la SS163 costiera, e richiede tipicamente circa 1 ora e 40 minuti. Hotel Santa Caterina si trova appena a ovest del centro di Amalfi con accesso stradale diretto, quindi il tuo autista può portarti fino all\'ingresso stesso.',
                    ],
                },
                {
                    h2: 'Perché Scegliere un Transfer Privato',
                    p: [
                        'Dopo un volo, l\'ultima cosa che vuoi è un autobus per Amalfi seguito dalla ricerca di un taxi per l\'ultimo tratto fino all\'hotel. Un transfer privato è un unico viaggio prenotato, porta a porta, con un autista che monitora il tuo orario di atterraggio reale invece di uno programmato.',
                    ],
                },
                bookingSectionIt('Aeroporto di Napoli', 'Hotel Santa Caterina, Amalfi'),
            ],
            faqs: [
                { q: 'L\'auto raggiunge direttamente l\'ingresso dell\'hotel?', a: 'Sì — Hotel Santa Caterina ha accesso stradale diretto appena fuori dal centro pedonale di Amalfi.' },
                { q: 'Quanto dura il transfer dall\'Aeroporto di Napoli?', a: 'Circa 1 ora e 40 minuti via A3 e SS163, più a lungo nel traffico estivo di punta.' },
                { q: 'Posso organizzare una sosta nel paese di Amalfi all\'arrivo?', a: 'Sì, è possibile aggiungere una breve sosta nel centro di Amalfi se desideri vedere Piazza Duomo prima del check-in.' },
                { q: 'È disponibile un transfer di ritorno in aeroporto?', a: 'Sì, prenota entrambe le tratte insieme oppure organizza il ritorno una volta stabilito il volo di partenza.' },
            ],
            relatedLinks: [
                { href: '/airport/naples', label: 'Guida Aeroporto di Napoli Capodichino' },
                { href: '/city/amalfi', label: 'Servizio Taxi Amalfi' },
                { href: '/it/route/trasferimento-sorrento-amalfi', label: 'Transfer Sorrento - Amalfi' },
                { href: '/it/route/trasferimento-aeroporto-napoli-belmond-caruso-ravello', label: 'Aeroporto di Napoli - Belmond Hotel Caruso' },
                { href: '/tour/amalfi-coast', label: 'Tour della Costiera Amalfitana' },
            ],
        },
    },

    {
        slugEn: 'naples-airport-to-belmond-caruso-ravello-taxi',
        slugIt: 'trasferimento-aeroporto-napoli-belmond-caruso-ravello',
        from: 'Naples Airport',
        to: 'Belmond Hotel Caruso, Ravello',
        hero_image: AMALFI_IMG,
        imageAlt: 'Belmond Hotel Caruso\'s clifftop gardens above Ravello',
        distance: '~75 km',
        duration: '~1 h 45-55 min',
        en: {
            title: 'Naples Airport to Belmond Hotel Caruso Transfer',
            metaTitle: 'Naples Airport to Belmond Hotel Caruso Ravello Transfer',
            metaDescription: 'Private transfer from Naples Airport to Belmond Hotel Caruso, Ravello. Fixed price, meet & greet, door-to-door to this clifftop landmark hotel.',
            description: 'Belmond Hotel Caruso occupies a former 11th-century palazzo on Ravello\'s highest point, with an infinity pool looking straight down the coast. Reaching it means the full climb up from the coastal road — our private transfer handles that drive so your arrival is the relaxing part, not the journey.',
            highlights: ['Direct to Belmond Hotel Caruso\'s entrance', 'Fixed price agreed before travel', 'Driver experienced on Ravello\'s hill roads', 'Meet & greet with flight tracking', 'Free 60-minute waiting time after landing'],
            sections: [
                {
                    h2: 'Route Details',
                    p: [
                        'The journey covers about 75 km via the A3 motorway and the SS163 coastal road, then the climb up to Ravello, typically taking 1 hour 45 to 55 minutes depending on traffic through Amalfi and Atrani en route.',
                        'The hotel sits at the top of Ravello, above the town\'s pedestrian centre, but is reachable by road — your driver takes you to the entrance directly.',
                    ],
                },
                {
                    h2: 'Why Choose a Private Transfer',
                    p: [
                        'There is no practical public transport option that reaches Ravello\'s hilltop hotels comfortably with luggage — it means at least two changes of bus. A private transfer is a single, fixed-price journey timed to your flight.',
                    ],
                },
                bookingSectionEn('Naples Airport', 'Belmond Hotel Caruso, Ravello'),
            ],
            faqs: [
                { q: 'How long is the drive to Belmond Hotel Caruso from Naples Airport?', a: 'Around 1 hour 45 to 55 minutes, including the climb up to Ravello from the coastal road.' },
                { q: 'Can the vehicle reach the hotel entrance?', a: 'Yes, Belmond Hotel Caruso has direct road access at the top of Ravello.' },
                { q: 'Can I stop in Amalfi or Positano on the way up?', a: 'Yes, a scenic stop can be arranged along the SS163 before the climb to Ravello.' },
                { q: 'Is a return transfer to the airport available?', a: 'Yes — book the return leg once your departure flight is confirmed.' },
            ],
            relatedLinks: [
                { href: '/airport/naples', label: 'Naples Capodichino Airport Guide' },
                { href: '/city/ravello', label: 'Ravello Taxi Service' },
                { href: '/route/naples-airport-to-ravello-taxi', label: 'Naples Airport to Ravello Transfer' },
                { href: '/route/positano-to-ravello-taxi', label: 'Positano to Ravello Transfer' },
                { href: '/tour/amalfi-coast', label: 'Amalfi Coast Tour' },
            ],
        },
        it: {
            title: 'Transfer da Aeroporto di Napoli a Belmond Hotel Caruso Ravello',
            metaTitle: 'Transfer Aeroporto di Napoli - Belmond Hotel Caruso Ravello',
            metaDescription: 'Transfer privato dall\'Aeroporto di Napoli a Belmond Hotel Caruso, Ravello. Prezzo fisso, accoglienza in aeroporto, porta a porta verso questo hotel simbolo a picco sul mare.',
            description: 'Belmond Hotel Caruso occupa un antico palazzo dell\'XI secolo nel punto più alto di Ravello, con una piscina a sfioro che guarda dritto lungo la costa. Raggiungerlo significa affrontare l\'intera salita dalla strada costiera — il nostro transfer privato gestisce quel tragitto, così il tuo arrivo è la parte rilassante, non il viaggio.',
            highlights: ['Diretto all\'ingresso del Belmond Hotel Caruso', 'Prezzo fisso concordato prima della partenza', 'Autista esperto sulle strade collinari di Ravello', 'Accoglienza con monitoraggio del volo', '60 minuti di attesa gratuita dopo l\'atterraggio'],
            sections: [
                {
                    h2: 'Dettagli del Percorso',
                    p: [
                        'Il viaggio copre circa 75 km via autostrada A3 e la SS163 costiera, poi la salita fino a Ravello, richiedendo tipicamente da 1 ora e 45 a 1 ora e 55 minuti a seconda del traffico attraverso Amalfi e Atrani lungo il tragitto.',
                        'L\'hotel si trova nella parte più alta di Ravello, sopra il centro pedonale del paese, ma è raggiungibile su strada — il tuo autista ti porta direttamente all\'ingresso.',
                    ],
                },
                {
                    h2: 'Perché Scegliere un Transfer Privato',
                    p: [
                        'Non esiste un\'opzione di trasporto pubblico pratica che raggiunga comodamente con i bagagli gli hotel in cima a Ravello — significherebbe almeno due cambi di autobus. Un transfer privato è un viaggio unico a prezzo fisso, calibrato sul tuo volo.',
                    ],
                },
                bookingSectionIt('Aeroporto di Napoli', 'Belmond Hotel Caruso, Ravello'),
            ],
            faqs: [
                { q: 'Quanto dura il tragitto per il Belmond Hotel Caruso dall\'Aeroporto di Napoli?', a: 'Circa 1 ora e 45-55 minuti, inclusa la salita fino a Ravello dalla strada costiera.' },
                { q: 'Il veicolo può raggiungere l\'ingresso dell\'hotel?', a: 'Sì, il Belmond Hotel Caruso ha accesso stradale diretto nella parte alta di Ravello.' },
                { q: 'Posso fermarmi ad Amalfi o Positano durante la salita?', a: 'Sì, è possibile organizzare una sosta panoramica lungo la SS163 prima della salita verso Ravello.' },
                { q: 'È disponibile un transfer di ritorno in aeroporto?', a: 'Sì — prenota la tratta di ritorno una volta confermato il volo di partenza.' },
            ],
            relatedLinks: [
                { href: '/airport/naples', label: 'Guida Aeroporto di Napoli Capodichino' },
                { href: '/city/ravello', label: 'Servizio Taxi Ravello' },
                { href: '/it/route/trasferimento-aeroporto-napoli-ravello', label: 'Aeroporto di Napoli - Ravello' },
                { href: '/it/route/trasferimento-positano-ravello', label: 'Transfer Positano - Ravello' },
                { href: '/tour/amalfi-coast', label: 'Tour della Costiera Amalfitana' },
            ],
        },
    },

    {
        slugEn: 'naples-airport-to-excelsior-vittoria-sorrento-taxi',
        slugIt: 'trasferimento-aeroporto-napoli-excelsior-vittoria-sorrento',
        from: 'Naples Airport',
        to: 'Grand Hotel Excelsior Vittoria, Sorrento',
        hero_image: NAPLES_IMG,
        imageAlt: 'Sorrento clifftop overlooking the Bay of Naples',
        distance: '~50 km',
        duration: '~50-60 min',
        en: {
            title: 'Naples Airport to Excelsior Vittoria Sorrento Transfer',
            metaTitle: 'Naples Airport to Excelsior Vittoria Sorrento Transfer',
            metaDescription: 'Private transfer from Naples Airport to Grand Hotel Excelsior Vittoria, Sorrento. Fixed price, meet & greet, direct door-to-door service.',
            description: 'Grand Hotel Excelsior Vittoria sits on Sorrento\'s clifftop overlooking the Bay of Naples, with direct road access unlike much of the historic centre. Our private transfer takes you straight there from Naples Airport arrivals, at a fixed price with no meter and no surprises.',
            highlights: ['Direct to the hotel entrance', 'Fixed price agreed before travel', 'Meet & greet with flight tracking', 'Shortest of the Amalfi-area hotel transfers', 'Free 60-minute waiting time after landing'],
            sections: [
                {
                    h2: 'Route Details',
                    p: [
                        'At about 50 km via the A3 motorway, this is one of the shorter hotel transfers in the region, typically taking 50 to 60 minutes. The Excelsior Vittoria has its own gated driveway just off Sorrento\'s Piazza Tasso, so your driver can take you directly to the entrance.',
                    ],
                },
                {
                    h2: 'Why Choose a Private Transfer',
                    p: [
                        'Sorrento is well connected by train from Naples, but that still means a taxi or walk with luggage from the station to the hotel. A private transfer is one direct journey, timed to your flight, with no station change in between.',
                    ],
                },
                bookingSectionEn('Naples Airport', 'Grand Hotel Excelsior Vittoria, Sorrento'),
            ],
            faqs: [
                { q: 'How long is the transfer from Naples Airport to Sorrento?', a: 'Typically 50 to 60 minutes via the A3 motorway, one of the shorter transfers on this coast.' },
                { q: 'Does the car reach the hotel\'s entrance directly?', a: 'Yes — the Excelsior Vittoria has its own driveway just off Piazza Tasso, reachable by car.' },
                { q: 'Can I continue on to Positano or Amalfi from Sorrento the same day?', a: 'Yes, see our Sorrento to Positano and Sorrento to Amalfi transfer pages for onward journeys.' },
                { q: 'Is a return transfer to the airport available?', a: 'Yes, book both legs together or arrange the return once your flight is confirmed.' },
            ],
            relatedLinks: [
                { href: '/airport/naples', label: 'Naples Capodichino Airport Guide' },
                { href: '/city/sorrento', label: 'Sorrento Taxi Service' },
                { href: '/route/sorrento-to-positano-taxi', label: 'Sorrento to Positano Transfer' },
                { href: '/route/sorrento-to-amalfi-taxi', label: 'Sorrento to Amalfi Transfer' },
                { href: '/tour/amalfi-coast', label: 'Amalfi Coast Tour' },
            ],
        },
        it: {
            title: 'Transfer da Aeroporto di Napoli a Excelsior Vittoria Sorrento',
            metaTitle: 'Transfer Aeroporto di Napoli - Excelsior Vittoria Sorrento',
            metaDescription: 'Transfer privato dall\'Aeroporto di Napoli al Grand Hotel Excelsior Vittoria, Sorrento. Prezzo fisso, accoglienza in aeroporto, servizio porta a porta diretto.',
            description: 'Il Grand Hotel Excelsior Vittoria sorge sulla scogliera di Sorrento affacciata sul Golfo di Napoli, con accesso stradale diretto a differenza di gran parte del centro storico. Il nostro transfer privato ti porta direttamente lì dall\'arrivo dell\'Aeroporto di Napoli, a prezzo fisso senza contatore e senza sorprese.',
            highlights: ['Diretto all\'ingresso dell\'hotel', 'Prezzo fisso concordato prima della partenza', 'Accoglienza con monitoraggio del volo', 'Il più breve tra i transfer verso gli hotel della zona amalfitana', '60 minuti di attesa gratuita dopo l\'atterraggio'],
            sections: [
                {
                    h2: 'Dettagli del Percorso',
                    p: [
                        'Con circa 50 km via autostrada A3, questo è uno dei transfer verso hotel più brevi della regione, richiedendo tipicamente 50-60 minuti. L\'Excelsior Vittoria ha un proprio vialetto con cancello appena fuori Piazza Tasso a Sorrento, quindi il tuo autista può portarti direttamente all\'ingresso.',
                    ],
                },
                {
                    h2: 'Perché Scegliere un Transfer Privato',
                    p: [
                        'Sorrento è ben collegata in treno da Napoli, ma significa comunque un taxi o una camminata con i bagagli dalla stazione all\'hotel. Un transfer privato è un unico viaggio diretto, calibrato sul tuo volo, senza cambio di stazione nel mezzo.',
                    ],
                },
                bookingSectionIt('Aeroporto di Napoli', 'Grand Hotel Excelsior Vittoria, Sorrento'),
            ],
            faqs: [
                { q: 'Quanto dura il transfer dall\'Aeroporto di Napoli a Sorrento?', a: 'Tipicamente 50-60 minuti via autostrada A3, uno dei transfer più brevi di questa costiera.' },
                { q: 'L\'auto raggiunge direttamente l\'ingresso dell\'hotel?', a: 'Sì — l\'Excelsior Vittoria ha un proprio vialetto appena fuori Piazza Tasso, raggiungibile in auto.' },
                { q: 'Posso proseguire per Positano o Amalfi da Sorrento lo stesso giorno?', a: 'Sì, consulta le nostre pagine transfer Sorrento-Positano e Sorrento-Amalfi per i proseguimenti.' },
                { q: 'È disponibile un transfer di ritorno in aeroporto?', a: 'Sì, prenota entrambe le tratte insieme oppure organizza il ritorno una volta confermato il volo.' },
            ],
            relatedLinks: [
                { href: '/airport/naples', label: 'Guida Aeroporto di Napoli Capodichino' },
                { href: '/city/sorrento', label: 'Servizio Taxi Sorrento' },
                { href: '/it/route/trasferimento-sorrento-positano', label: 'Transfer Sorrento - Positano' },
                { href: '/it/route/trasferimento-sorrento-amalfi', label: 'Transfer Sorrento - Amalfi' },
                { href: '/tour/amalfi-coast', label: 'Tour della Costiera Amalfitana' },
            ],
        },
    },

    // ═══════════════════════════════════════ SICILY ═══════════════════════════════════════

    {
        slugEn: 'taormina-to-catania-airport-taxi',
        slugIt: 'trasferimento-taormina-aeroporto-catania',
        from: 'Taormina',
        to: 'Catania Airport',
        hero_image: COAST_IMG,
        imageAlt: 'Taormina hillside town overlooking the Sicilian coast',
        distance: '~55 km',
        duration: '~50 min',
        en: {
            title: 'Taormina to Catania Airport Transfer',
            metaTitle: 'Taormina to Catania Airport Private Transfer',
            metaDescription: 'Private taxi from Taormina to Catania Airport. Fixed price, door-to-door pickup from your hotel, professional driver, flight-timed departure.',
            description: 'Leaving Taormina for a flight means descending from the hill town to the coastal motorway toward Catania — straightforward with a private driver who times your pickup against your actual flight, rather than guessing at bus connections from a town with no train station of its own.',
            highlights: ['Direct hotel pickup in Taormina', 'Fixed price agreed before travel', 'Timed to your flight\'s departure', 'Comfortable vehicle for the drive down', 'Covers both Taormina town and Mazzarò'],
            sections: [
                {
                    h2: 'Route Details',
                    p: [
                        'The journey covers about 55 km via the A18 motorway and typically takes around 50 minutes, though Taormina\'s own access road can add time during peak summer traffic.',
                        'Pickup is at your Taormina hotel — in town, on the hillside, or down at Mazzarò by the cable car — with your driver timing departure to comfortably make check-in for your flight.',
                    ],
                },
                {
                    h2: 'Why Choose a Private Transfer',
                    p: [
                        'Taormina has no train station of its own (the nearest, Taormina-Giardini, is down the hill and still needs a further connection to the airport) — a private transfer removes that extra leg entirely, direct from your hotel to departures.',
                    ],
                },
                bookingSectionEn('Taormina', 'Catania Airport'),
            ],
            faqs: [
                { q: 'How long before my flight should I leave Taormina?', a: 'For the roughly 50-minute drive, we recommend departing at least 2.5 hours before a European flight, more for long-haul — your driver can advise based on your specific flight.' },
                { q: 'Does the driver pick up directly from my hotel?', a: 'Yes, whether you\'re staying in Taormina\'s historic centre or down at Mazzarò.' },
                { q: 'Is there a faster way than a private transfer?', a: 'Not really — Taormina has no direct train to the airport, so a private transfer is typically the fastest door-to-door option.' },
                { q: 'Can I book this alongside my arrival transfer?', a: 'Yes, most guests book both legs together when planning their trip.' },
            ],
            relatedLinks: [
                { href: '/airport/catania-fontanarossa', label: 'Catania Fontanarossa Airport Guide' },
                { href: '/city/taormina', label: 'Taormina Taxi Service' },
                { href: '/route/catania-airport-to-mount-etna-taxi', label: 'Catania Airport to Mount Etna Transfer' },
                { href: '/route/catania-airport-to-syracuse-taxi', label: 'Catania Airport to Syracuse Transfer' },
                { href: '/services/airport-transfers', label: 'Airport Transfer Services' },
            ],
        },
        it: {
            title: 'Transfer da Taormina all\'Aeroporto di Catania',
            metaTitle: 'Transfer Privato Taormina - Aeroporto di Catania',
            metaDescription: 'Taxi privato da Taormina all\'Aeroporto di Catania. Prezzo fisso, ritiro porta a porta dal tuo hotel, autista professionale, partenza calibrata sul volo.',
            description: 'Lasciare Taormina per un volo significa scendere dal paese collinare verso l\'autostrada costiera in direzione Catania — semplice con un autista privato che calibra il ritiro sul tuo volo reale, invece di indovinare le coincidenze degli autobus da un paese privo di una propria stazione ferroviaria.',
            highlights: ['Ritiro diretto dall\'hotel a Taormina', 'Prezzo fisso concordato prima della partenza', 'Calibrato sull\'orario di partenza del tuo volo', 'Veicolo confortevole per la discesa', 'Copre sia il paese di Taormina che Mazzarò'],
            sections: [
                {
                    h2: 'Dettagli del Percorso',
                    p: [
                        'Il viaggio copre circa 55 km via autostrada A18 e richiede tipicamente circa 50 minuti, anche se la strada d\'accesso di Taormina può aggiungere tempo durante il traffico estivo di punta.',
                        'Il ritiro avviene presso il tuo hotel a Taormina — in paese, sulla collina, o giù a Mazzarò vicino alla funivia — con il tuo autista che calibra la partenza per farti arrivare comodamente in tempo per il check-in del volo.',
                    ],
                },
                {
                    h2: 'Perché Scegliere un Transfer Privato',
                    p: [
                        'Taormina non ha una propria stazione ferroviaria (la più vicina, Taormina-Giardini, è a valle e richiede comunque un ulteriore collegamento per l\'aeroporto) — un transfer privato elimina del tutto questa tratta aggiuntiva, direttamente dal tuo hotel alle partenze.',
                    ],
                },
                bookingSectionIt('Taormina', 'l\'Aeroporto di Catania'),
            ],
            faqs: [
                { q: 'Quanto tempo prima del volo dovrei partire da Taormina?', a: 'Per il tragitto di circa 50 minuti, consigliamo di partire almeno 2 ore e mezza prima di un volo europeo, di più per i voli intercontinentali — il tuo autista può consigliarti in base al tuo volo specifico.' },
                { q: 'L\'autista mi preleva direttamente dall\'hotel?', a: 'Sì, sia che tu alloggi nel centro storico di Taormina sia giù a Mazzarò.' },
                { q: 'C\'è un modo più veloce di un transfer privato?', a: 'Non proprio — Taormina non ha un treno diretto per l\'aeroporto, quindi un transfer privato è tipicamente l\'opzione porta a porta più veloce.' },
                { q: 'Posso prenotarlo insieme al mio transfer di arrivo?', a: 'Sì, la maggior parte degli ospiti prenota entrambe le tratte insieme quando pianifica il viaggio.' },
            ],
            relatedLinks: [
                { href: '/airport/catania-fontanarossa', label: 'Guida Aeroporto di Catania Fontanarossa' },
                { href: '/city/taormina', label: 'Servizio Taxi Taormina' },
                { href: '/it/route/trasferimento-aeroporto-catania-etna', label: 'Aeroporto di Catania - Etna' },
                { href: '/it/route/trasferimento-aeroporto-catania-siracusa', label: 'Aeroporto di Catania - Siracusa' },
                { href: '/services/airport-transfers', label: 'Servizi di Transfer Aeroportuale' },
            ],
        },
    },

    {
        slugEn: 'catania-airport-to-syracuse-taxi',
        slugIt: 'trasferimento-aeroporto-catania-siracusa',
        from: 'Catania Airport',
        to: 'Syracuse',
        hero_image: SICILY_BAROQUE_IMG,
        imageAlt: 'Baroque architecture of Ortigia, Syracuse\'s old town',
        distance: '~65 km',
        duration: '~1 hour',
        en: {
            title: 'Catania Airport to Syracuse Transfer',
            metaTitle: 'Catania Airport to Syracuse Private Transfer',
            metaDescription: 'Private taxi from Catania Airport to Syracuse. Fixed price, meet & greet, door-to-door to Ortigia or the wider city, professional driver.',
            description: 'Syracuse — with the Baroque old town of Ortigia at its heart — is one of Sicily\'s essential stops, and a straightforward private transfer from Catania Airport, running down the coastal autostrada rather than requiring a train change in Catania itself.',
            highlights: ['Direct transfer, no city-centre train change', 'Fixed price agreed before travel', 'Meet & greet with flight tracking', 'Door-to-door to Ortigia or your hotel', 'Free 60-minute waiting time after landing'],
            sections: [
                {
                    h2: 'Route Details',
                    p: [
                        'The drive covers about 65 km via the A18/SS114, typically taking around 1 hour. Syracuse\'s historic centre, Ortigia, is a small island connected by bridge — your driver will confirm the best drop-off point given your hotel\'s exact location, since some of Ortigia\'s narrowest lanes are pedestrian-only.',
                    ],
                },
                {
                    h2: 'Why Choose a Private Transfer',
                    p: [
                        'The train from Catania Airport to Syracuse involves a change at Catania Centrale and doesn\'t run especially frequently — a private transfer is a single direct journey, timed to your flight rather than a timetable.',
                    ],
                },
                bookingSectionEn('Catania Airport', 'Syracuse'),
            ],
            faqs: [
                { q: 'How long does the transfer from Catania Airport to Syracuse take?', a: 'Around 1 hour via the A18/SS114 motorway, depending on traffic.' },
                { q: 'Can the driver drop me directly in Ortigia?', a: 'Yes, as close as the narrow historic lanes allow — some streets are pedestrian-only, so your driver will confirm the nearest accessible point to your hotel.' },
                { q: 'Is there a direct train instead?', a: 'There\'s a rail connection, but it requires a change at Catania Centrale station, making a private transfer the more direct option from the airport.' },
                { q: 'Can I stop at Mount Etna or Taormina en route?', a: 'These aren\'t directly on the way to Syracuse, but can be arranged as a separate day trip from Catania or Syracuse.' },
            ],
            relatedLinks: [
                { href: '/airport/catania-fontanarossa', label: 'Catania Fontanarossa Airport Guide' },
                { href: '/route/catania-airport-to-mount-etna-taxi', label: 'Catania Airport to Mount Etna Transfer' },
                { href: '/route/taormina-to-catania-airport-taxi', label: 'Taormina to Catania Airport Transfer' },
                { href: '/services/private-tours', label: 'Private Sightseeing Tours' },
                { href: '/book-now', label: 'Book Your Sicily Transfer' },
            ],
        },
        it: {
            title: 'Transfer da Aeroporto di Catania a Siracusa',
            metaTitle: 'Transfer Privato Aeroporto di Catania - Siracusa',
            metaDescription: 'Taxi privato dall\'Aeroporto di Catania a Siracusa. Prezzo fisso, accoglienza in aeroporto, porta a porta a Ortigia o in città, autista professionale.',
            description: 'Siracusa — con il centro barocco di Ortigia nel suo cuore — è una delle tappe essenziali della Sicilia, e un transfer privato diretto dall\'Aeroporto di Catania è semplice, percorrendo l\'autostrada costiera invece di richiedere un cambio di treno nella stessa Catania.',
            highlights: ['Transfer diretto, nessun cambio di treno in centro città', 'Prezzo fisso concordato prima della partenza', 'Accoglienza con monitoraggio del volo', 'Porta a porta fino a Ortigia o al tuo hotel', '60 minuti di attesa gratuita dopo l\'atterraggio'],
            sections: [
                {
                    h2: 'Dettagli del Percorso',
                    p: [
                        'Il tragitto copre circa 65 km via A18/SS114, richiedendo tipicamente circa 1 ora. Il centro storico di Siracusa, Ortigia, è una piccola isola collegata da un ponte — il tuo autista confermerà il miglior punto di sbarco in base alla posizione esatta del tuo hotel, dato che alcuni dei vicoli più stretti di Ortigia sono pedonali.',
                    ],
                },
                {
                    h2: 'Perché Scegliere un Transfer Privato',
                    p: [
                        'Il treno dall\'Aeroporto di Catania a Siracusa richiede un cambio alla stazione di Catania Centrale e non è particolarmente frequente — un transfer privato è un unico viaggio diretto, calibrato sul tuo volo piuttosto che su un orario.',
                    ],
                },
                bookingSectionIt('Aeroporto di Catania', 'Siracusa'),
            ],
            faqs: [
                { q: 'Quanto dura il transfer dall\'Aeroporto di Catania a Siracusa?', a: 'Circa 1 ora via autostrada A18/SS114, a seconda del traffico.' },
                { q: 'L\'autista può lasciarmi direttamente a Ortigia?', a: 'Sì, il più vicino possibile per quanto i vicoli storici stretti consentano — alcune strade sono pedonali, quindi l\'autista confermerà il punto accessibile più vicino al tuo hotel.' },
                { q: 'C\'è un treno diretto in alternativa?', a: 'Esiste un collegamento ferroviario, ma richiede un cambio alla stazione di Catania Centrale, rendendo il transfer privato l\'opzione più diretta dall\'aeroporto.' },
                { q: 'Posso fermarmi all\'Etna o a Taormina lungo il tragitto?', a: 'Non sono direttamente sul percorso per Siracusa, ma possono essere organizzati come gita giornaliera separata da Catania o Siracusa.' },
            ],
            relatedLinks: [
                { href: '/airport/catania-fontanarossa', label: 'Guida Aeroporto di Catania Fontanarossa' },
                { href: '/it/route/trasferimento-aeroporto-catania-etna', label: 'Aeroporto di Catania - Etna' },
                { href: '/it/route/trasferimento-taormina-aeroporto-catania', label: 'Taormina - Aeroporto di Catania' },
                { href: '/services/private-tours', label: 'Tour Privati' },
                { href: '/book-now', label: 'Prenota il Tuo Transfer in Sicilia' },
            ],
        },
    },

    {
        slugEn: 'catania-airport-to-mount-etna-taxi',
        slugIt: 'trasferimento-aeroporto-catania-etna',
        from: 'Catania Airport',
        to: 'Mount Etna',
        hero_image: ETNA_IMG,
        imageAlt: 'Mount Etna\'s volcanic slopes above the Sicilian coast',
        distance: '~45 km',
        duration: '~1 hour',
        en: {
            title: 'Catania Airport to Mount Etna Transfer',
            metaTitle: 'Catania Airport to Mount Etna Private Transfer',
            metaDescription: 'Private taxi from Catania Airport to Mount Etna (Rifugio Sapienza). Fixed price, meet & greet, professional driver familiar with the mountain roads.',
            description: 'Europe\'s largest active volcano is close enough to Catania Airport for a direct transfer straight from arrivals — useful whether you\'re heading up for a cable car and crater excursion or continuing on to accommodation on Etna\'s slopes.',
            highlights: ['Direct airport-to-mountain transfer', 'Fixed price agreed before travel', 'Driver familiar with Etna\'s mountain roads', 'Meet & greet with flight tracking', 'Ideal for cable car / crater excursions'],
            sections: [
                {
                    h2: 'Route Details',
                    p: [
                        'The transfer covers about 45 km, typically taking around 1 hour to reach Rifugio Sapienza on Etna\'s southern side, the main starting point for cable car and jeep excursions to the craters. Roads climb steadily and can be affected by seasonal closures at altitude — your driver will confirm current access before you travel.',
                    ],
                },
                {
                    h2: 'Why Choose a Private Transfer',
                    p: [
                        'There\'s no direct public transport from Catania Airport to Etna\'s excursion base — you\'d need to reach Catania city first, then a separate bus service. A private transfer goes straight from arrivals to the mountain.',
                    ],
                },
                bookingSectionEn('Catania Airport', 'Mount Etna'),
            ],
            faqs: [
                { q: 'How long does it take to reach Mount Etna from the airport?', a: 'Around 1 hour to Rifugio Sapienza, the main excursion base on Etna\'s south side.' },
                { q: 'Does the transfer include the cable car or crater excursion?', a: 'No, the transfer covers transport only — cable car tickets and guided crater excursions are booked separately on-site or in advance.' },
                { q: 'Can the driver wait while I do the excursion?', a: 'Waiting time can be arranged — let us know your planned excursion length when booking.' },
                { q: 'Is Mount Etna accessible year-round?', a: 'Generally yes, though access to the highest points can be affected by snow and seasonal closures in winter — your driver will have current information.' },
            ],
            relatedLinks: [
                { href: '/airport/catania-fontanarossa', label: 'Catania Fontanarossa Airport Guide' },
                { href: '/city/taormina', label: 'Taormina Taxi Service' },
                { href: '/route/taormina-to-catania-airport-taxi', label: 'Taormina to Catania Airport Transfer' },
                { href: '/route/catania-airport-to-syracuse-taxi', label: 'Catania Airport to Syracuse Transfer' },
                { href: '/services/private-tours', label: 'Private Sightseeing Tours' },
            ],
        },
        it: {
            title: 'Transfer da Aeroporto di Catania all\'Etna',
            metaTitle: 'Transfer Privato Aeroporto di Catania - Etna',
            metaDescription: 'Taxi privato dall\'Aeroporto di Catania all\'Etna (Rifugio Sapienza). Prezzo fisso, accoglienza in aeroporto, autista esperto sulle strade di montagna.',
            description: 'Il vulcano attivo più grande d\'Europa è abbastanza vicino all\'Aeroporto di Catania da permettere un transfer diretto proprio dall\'arrivo — utile sia che tu stia salendo per un\'escursione in funivia al cratere, sia che tu stia proseguendo verso un alloggio sulle pendici dell\'Etna.',
            highlights: ['Transfer diretto aeroporto-montagna', 'Prezzo fisso concordato prima della partenza', 'Autista esperto sulle strade di montagna dell\'Etna', 'Accoglienza con monitoraggio del volo', 'Ideale per escursioni in funivia o al cratere'],
            sections: [
                {
                    h2: 'Dettagli del Percorso',
                    p: [
                        'Il transfer copre circa 45 km, richiedendo tipicamente circa 1 ora per raggiungere il Rifugio Sapienza sul versante sud dell\'Etna, il principale punto di partenza per le escursioni in funivia e jeep verso i crateri. Le strade salgono costantemente e possono essere soggette a chiusure stagionali in quota — il tuo autista confermerà l\'accesso attuale prima del viaggio.',
                    ],
                },
                {
                    h2: 'Perché Scegliere un Transfer Privato',
                    p: [
                        'Non esiste un trasporto pubblico diretto dall\'Aeroporto di Catania alla base delle escursioni sull\'Etna — dovresti prima raggiungere la città di Catania, poi un servizio di autobus separato. Un transfer privato va dritto dall\'arrivo alla montagna.',
                    ],
                },
                bookingSectionIt('Aeroporto di Catania', 'l\'Etna'),
            ],
            faqs: [
                { q: 'Quanto tempo serve per raggiungere l\'Etna dall\'aeroporto?', a: 'Circa 1 ora fino al Rifugio Sapienza, la principale base per le escursioni sul versante sud dell\'Etna.' },
                { q: 'Il transfer include la funivia o l\'escursione al cratere?', a: 'No, il transfer copre solo il trasporto — i biglietti della funivia e le escursioni guidate al cratere si prenotano separatamente in loco o in anticipo.' },
                { q: 'L\'autista può aspettare mentre faccio l\'escursione?', a: 'Il tempo di attesa può essere organizzato — comunicaci la durata prevista dell\'escursione al momento della prenotazione.' },
                { q: 'L\'Etna è accessibile tutto l\'anno?', a: 'In generale sì, anche se l\'accesso ai punti più alti può essere condizionato da neve e chiusure stagionali in inverno — il tuo autista avrà informazioni aggiornate.' },
            ],
            relatedLinks: [
                { href: '/airport/catania-fontanarossa', label: 'Guida Aeroporto di Catania Fontanarossa' },
                { href: '/city/taormina', label: 'Servizio Taxi Taormina' },
                { href: '/it/route/trasferimento-taormina-aeroporto-catania', label: 'Taormina - Aeroporto di Catania' },
                { href: '/it/route/trasferimento-aeroporto-catania-siracusa', label: 'Aeroporto di Catania - Siracusa' },
                { href: '/services/private-tours', label: 'Tour Privati' },
            ],
        },
    },

    {
        slugEn: 'palermo-airport-to-palermo-city-taxi',
        slugIt: 'trasferimento-aeroporto-palermo-citta',
        from: 'Palermo Airport',
        to: 'Palermo City Centre',
        hero_image: PALERMO_IMG,
        imageAlt: 'Palermo city centre streets and historic architecture',
        distance: '~35 km',
        duration: '~35-40 min',
        en: {
            title: 'Palermo Airport to Palermo City Centre Transfer',
            metaTitle: 'Palermo Airport to Palermo City Transfer',
            metaDescription: 'Private taxi from Palermo Airport to Palermo city centre. Fixed price, meet & greet, door-to-door to your hotel, professional driver.',
            description: 'Palermo Falcone-Borsellino Airport sits about 35 km from the Sicilian capital, and while a train connects the two, a private transfer takes you directly to your hotel door rather than the station, with luggage handled and your flight tracked for delays.',
            highlights: ['Direct door-to-door to your hotel', 'Fixed price agreed before travel', 'Meet & greet with flight tracking', 'Faster than train + onward taxi', 'Free 60-minute waiting time after landing'],
            sections: [
                {
                    h2: 'Route Details',
                    p: [
                        'The transfer covers about 35 km, typically taking 35 to 40 minutes via the A29 motorway, depending on traffic entering the city centre.',
                        'Your driver meets you in the arrivals hall with a name sign and takes you directly to your hotel, wherever it sits within Palermo\'s historic centre or wider city.',
                    ],
                },
                {
                    h2: 'Why Choose a Private Transfer',
                    p: [
                        'The Trinacria Express train reaches Palermo Centrale station, but from there you still need a taxi or a walk with luggage to your actual hotel. A private transfer is one single journey, door-to-door.',
                    ],
                },
                bookingSectionEn('Palermo Airport', 'Palermo city centre'),
            ],
            faqs: [
                { q: 'How far is Palermo Airport from the city?', a: 'About 35 km, with a private transfer typically taking 35 to 40 minutes.' },
                { q: 'Is there a train alternative?', a: 'Yes, the Trinacria Express, but it only reaches Palermo Centrale station, not your hotel — a private transfer is direct.' },
                { q: 'Can I book onward transfers to Cefalù or Agrigento from Palermo?', a: 'Yes, see our dedicated Palermo Airport to Cefalù and Palermo Airport to Agrigento transfer pages.' },
                { q: 'Does the price change if my flight is delayed?', a: 'No — your flight is tracked automatically and the fixed price agreed at booking doesn\'t change.' },
            ],
            relatedLinks: [
                { href: '/airport/palermo', label: 'Palermo Airport Guide' },
                { href: '/city/palermo', label: 'Palermo Taxi Service' },
                { href: '/route/cefalu-to-palermo-airport-taxi', label: 'Cefalù to Palermo Airport Transfer' },
                { href: '/route/palermo-airport-to-agrigento-taxi', label: 'Palermo Airport to Agrigento Transfer' },
                { href: '/services/airport-transfers', label: 'Airport Transfer Services' },
            ],
        },
        it: {
            title: 'Transfer da Aeroporto di Palermo al Centro Città',
            metaTitle: 'Transfer Aeroporto di Palermo - Centro Città',
            metaDescription: 'Taxi privato dall\'Aeroporto di Palermo al centro città. Prezzo fisso, accoglienza in aeroporto, porta a porta fino al tuo hotel, autista professionale.',
            description: 'L\'Aeroporto di Palermo Falcone-Borsellino si trova a circa 35 km dal capoluogo siciliano, e sebbene un treno colleghi i due punti, un transfer privato ti porta direttamente alla porta del tuo hotel invece che alla stazione, con i bagagli gestiti e il volo monitorato per eventuali ritardi.',
            highlights: ['Porta a porta diretto fino al tuo hotel', 'Prezzo fisso concordato prima della partenza', 'Accoglienza con monitoraggio del volo', 'Più veloce di treno + taxi successivo', '60 minuti di attesa gratuita dopo l\'atterraggio'],
            sections: [
                {
                    h2: 'Dettagli del Percorso',
                    p: [
                        'Il transfer copre circa 35 km, richiedendo tipicamente 35-40 minuti via autostrada A29, a seconda del traffico in ingresso al centro città.',
                        'Il tuo autista ti aspetta nella sala arrivi con un cartello con il tuo nome e ti porta direttamente al tuo hotel, ovunque si trovi nel centro storico di Palermo o nella città più ampia.',
                    ],
                },
                {
                    h2: 'Perché Scegliere un Transfer Privato',
                    p: [
                        'Il treno Trinacria Express raggiunge la stazione di Palermo Centrale, ma da lì serve comunque un taxi o una camminata con i bagagli fino al tuo hotel reale. Un transfer privato è un unico viaggio, porta a porta.',
                    ],
                },
                bookingSectionIt('Aeroporto di Palermo', 'il centro di Palermo'),
            ],
            faqs: [
                { q: 'Quanto dista l\'Aeroporto di Palermo dalla città?', a: 'Circa 35 km, con un transfer privato che richiede tipicamente 35-40 minuti.' },
                { q: 'C\'è un\'alternativa in treno?', a: 'Sì, il Trinacria Express, ma raggiunge solo la stazione di Palermo Centrale, non il tuo hotel — un transfer privato è diretto.' },
                { q: 'Posso prenotare transfer successivi verso Cefalù o Agrigento da Palermo?', a: 'Sì, consulta le nostre pagine dedicate ai transfer Aeroporto di Palermo-Cefalù e Aeroporto di Palermo-Agrigento.' },
                { q: 'Il prezzo cambia se il mio volo è in ritardo?', a: 'No — il tuo volo viene monitorato automaticamente e il prezzo fisso concordato alla prenotazione non cambia.' },
            ],
            relatedLinks: [
                { href: '/airport/palermo', label: 'Guida Aeroporto di Palermo' },
                { href: '/city/palermo', label: 'Servizio Taxi Palermo' },
                { href: '/it/route/trasferimento-cefalu-aeroporto-palermo', label: 'Cefalù - Aeroporto di Palermo' },
                { href: '/it/route/trasferimento-aeroporto-palermo-agrigento', label: 'Aeroporto di Palermo - Agrigento' },
                { href: '/services/airport-transfers', label: 'Servizi di Transfer Aeroportuale' },
            ],
        },
    },

    {
        slugEn: 'cefalu-to-palermo-airport-taxi',
        slugIt: 'trasferimento-cefalu-aeroporto-palermo',
        from: 'Cefalù',
        to: 'Palermo Airport',
        hero_image: SICILY_BAROQUE_IMG,
        imageAlt: 'Cefalù\'s medieval cathedral and beachfront old town',
        distance: '~70 km',
        duration: '~1 hour',
        en: {
            title: 'Cefalù to Palermo Airport Transfer',
            metaTitle: 'Cefalù to Palermo Airport Private Transfer',
            metaDescription: 'Private taxi from Cefalù to Palermo Airport. Fixed price, hotel pickup, timed to your flight, professional driver.',
            description: 'Leaving Cefalù\'s beachfront old town for a flight is straightforward by private transfer — a direct run along the A20 motorway to Palermo Airport, with pickup at your hotel and departure timed against your actual flight.',
            highlights: ['Direct hotel pickup in Cefalù', 'Fixed price agreed before travel', 'Timed to your flight\'s departure', 'Comfortable vehicle for the coastal drive', 'Covers both Cefalù old town and nearby resorts'],
            sections: [
                {
                    h2: 'Route Details',
                    p: [
                        'The journey covers about 70 km via the A20 motorway and typically takes around 1 hour, running along Sicily\'s northern coast toward Palermo.',
                    ],
                },
                {
                    h2: 'Why Choose a Private Transfer',
                    p: [
                        'Cefalù does have a train station with services toward Palermo, but reaching the airport itself from Palermo Centrale still requires a further connection — a private transfer skips both changes, direct from your hotel to departures.',
                    ],
                },
                bookingSectionEn('Cefalù', 'Palermo Airport'),
            ],
            faqs: [
                { q: 'How long before my flight should I leave Cefalù?', a: 'For the roughly 1-hour drive, we recommend leaving at least 2.5–3 hours before a European flight — your driver can advise based on your specific departure.' },
                { q: 'Does the driver pick up from my hotel in Cefalù?', a: 'Yes, whether you\'re in the old town or a resort along the coast nearby.' },
                { q: 'Is the train a faster option?', a: 'Not typically — it requires a change in Palermo and doesn\'t run directly to the airport, whereas a private transfer is one direct trip.' },
                { q: 'Can I book this alongside an arrival transfer for my trip?', a: 'Yes, most guests book both the arrival and departure legs together.' },
            ],
            relatedLinks: [
                { href: '/airport/palermo', label: 'Palermo Airport Guide' },
                { href: '/route/palermo-airport-to-palermo-city-taxi', label: 'Palermo Airport to Palermo City Transfer' },
                { href: '/route/palermo-airport-to-agrigento-taxi', label: 'Palermo Airport to Agrigento Transfer' },
                { href: '/services/airport-transfers', label: 'Airport Transfer Services' },
                { href: '/book-now', label: 'Book Your Sicily Transfer' },
            ],
        },
        it: {
            title: 'Transfer da Cefalù all\'Aeroporto di Palermo',
            metaTitle: 'Transfer Privato Cefalù - Aeroporto di Palermo',
            metaDescription: 'Taxi privato da Cefalù all\'Aeroporto di Palermo. Prezzo fisso, ritiro in hotel, calibrato sul volo, autista professionale.',
            description: 'Lasciare il centro storico di Cefalù affacciato sul mare per un volo è semplice con un transfer privato — un tragitto diretto lungo l\'autostrada A20 fino all\'Aeroporto di Palermo, con ritiro presso il tuo hotel e partenza calibrata sul tuo volo reale.',
            highlights: ['Ritiro diretto dall\'hotel a Cefalù', 'Prezzo fisso concordato prima della partenza', 'Calibrato sull\'orario di partenza del tuo volo', 'Veicolo confortevole per il tragitto costiero', 'Copre sia il centro storico di Cefalù che i resort vicini'],
            sections: [
                {
                    h2: 'Dettagli del Percorso',
                    p: [
                        'Il viaggio copre circa 70 km via autostrada A20 e richiede tipicamente circa 1 ora, percorrendo la costa settentrionale della Sicilia in direzione Palermo.',
                    ],
                },
                {
                    h2: 'Perché Scegliere un Transfer Privato',
                    p: [
                        'Cefalù ha effettivamente una stazione ferroviaria con collegamenti verso Palermo, ma raggiungere l\'aeroporto stesso da Palermo Centrale richiede comunque un ulteriore collegamento — un transfer privato elimina entrambi i cambi, diretto dal tuo hotel alle partenze.',
                    ],
                },
                bookingSectionIt('Cefalù', 'l\'Aeroporto di Palermo'),
            ],
            faqs: [
                { q: 'Quanto tempo prima del volo dovrei partire da Cefalù?', a: 'Per il tragitto di circa 1 ora, consigliamo di partire almeno 2 ore e mezza-3 ore prima di un volo europeo — il tuo autista può consigliarti in base alla tua partenza specifica.' },
                { q: 'L\'autista mi preleva dal mio hotel a Cefalù?', a: 'Sì, sia che tu sia nel centro storico sia in un resort lungo la costa vicina.' },
                { q: 'Il treno è un\'opzione più veloce?', a: 'Non tipicamente — richiede un cambio a Palermo e non arriva direttamente all\'aeroporto, mentre un transfer privato è un unico viaggio diretto.' },
                { q: 'Posso prenotarlo insieme a un transfer di arrivo per il mio viaggio?', a: 'Sì, la maggior parte degli ospiti prenota insieme sia la tratta di arrivo che quella di partenza.' },
            ],
            relatedLinks: [
                { href: '/airport/palermo', label: 'Guida Aeroporto di Palermo' },
                { href: '/it/route/trasferimento-aeroporto-palermo-citta', label: 'Aeroporto di Palermo - Centro Città' },
                { href: '/it/route/trasferimento-aeroporto-palermo-agrigento', label: 'Aeroporto di Palermo - Agrigento' },
                { href: '/services/airport-transfers', label: 'Servizi di Transfer Aeroportuale' },
                { href: '/book-now', label: 'Prenota il Tuo Transfer in Sicilia' },
            ],
        },
    },

    {
        slugEn: 'palermo-airport-to-agrigento-taxi',
        slugIt: 'trasferimento-aeroporto-palermo-agrigento',
        from: 'Palermo Airport',
        to: 'Agrigento',
        hero_image: AGRIGENTO_IMG,
        imageAlt: 'The Valley of the Temples near Agrigento, Sicily',
        distance: '~130 km',
        duration: '~1 h 50 min',
        en: {
            title: 'Palermo Airport to Agrigento Transfer',
            metaTitle: 'Palermo Airport to Agrigento Private Transfer',
            metaDescription: 'Private taxi from Palermo Airport to Agrigento and the Valley of the Temples. Fixed price, meet & greet, professional driver for the longer inland drive.',
            description: 'Agrigento and the Valley of the Temples sit on Sicily\'s southern coast, a longer inland drive from Palermo Airport than most transfers on this island — exactly the kind of journey where a fixed price agreed in advance and a comfortable vehicle matter most.',
            highlights: ['Longest of our Sicily airport transfers, fully fixed-price', 'Meet & greet with flight tracking', 'Comfortable vehicle for the inland drive', 'Direct to your Agrigento hotel', 'Free 60-minute waiting time after landing'],
            sections: [
                {
                    h2: 'Route Details',
                    p: [
                        'The journey covers about 130 km via the A19 and SS189, typically taking around 1 hour 50 minutes across Sicily\'s interior. This is significantly longer than our other Sicily transfers, so we recommend confirming pickup timing carefully with your driver, especially for early or late flights.',
                    ],
                },
                {
                    h2: 'Why Choose a Private Transfer',
                    p: [
                        'There\'s no direct train from Palermo Airport to Agrigento — you\'d need to reach Palermo Centrale first, then a train that itself takes over 2 hours. A private transfer is a single, more direct journey at a fixed price.',
                    ],
                },
                bookingSectionEn('Palermo Airport', 'Agrigento'),
            ],
            faqs: [
                { q: 'How long is the drive from Palermo Airport to Agrigento?', a: 'Around 1 hour 50 minutes via the A19 motorway and SS189, one of the longer transfers in our Sicily network.' },
                { q: 'Is the price fixed for this longer route?', a: 'Yes, agreed and confirmed before you fly, regardless of the distance.' },
                { q: 'Can I visit the Valley of the Temples directly from the airport?', a: 'The transfer takes you to Agrigento; a stop at the Valley of the Temples can be arranged as part of the same journey if timing allows.' },
                { q: 'Is this route also available in reverse, Agrigento to the airport?', a: 'Yes, transfers run in both directions at the same fixed price.' },
            ],
            relatedLinks: [
                { href: '/airport/palermo', label: 'Palermo Airport Guide' },
                { href: '/route/palermo-airport-to-palermo-city-taxi', label: 'Palermo Airport to Palermo City Transfer' },
                { href: '/attraction-transfer/valley-of-the-temples-taxi-transfer', label: 'Valley of the Temples Transfer' },
                { href: '/services/private-tours', label: 'Private Sightseeing Tours' },
                { href: '/book-now', label: 'Book Your Sicily Transfer' },
            ],
        },
        it: {
            title: 'Transfer da Aeroporto di Palermo ad Agrigento',
            metaTitle: 'Transfer Privato Aeroporto di Palermo - Agrigento',
            metaDescription: 'Taxi privato dall\'Aeroporto di Palermo ad Agrigento e alla Valle dei Templi. Prezzo fisso, accoglienza in aeroporto, autista professionale per il tragitto più lungo verso l\'interno.',
            description: 'Agrigento e la Valle dei Templi si trovano sulla costa meridionale della Sicilia, un tragitto verso l\'interno più lungo rispetto alla maggior parte dei transfer su quest\'isola dall\'Aeroporto di Palermo — esattamente il tipo di viaggio in cui un prezzo fisso concordato in anticipo e un veicolo confortevole contano di più.',
            highlights: ['Il più lungo tra i nostri transfer aeroportuali in Sicilia, interamente a prezzo fisso', 'Accoglienza con monitoraggio del volo', 'Veicolo confortevole per il tragitto verso l\'interno', 'Diretto al tuo hotel ad Agrigento', '60 minuti di attesa gratuita dopo l\'atterraggio'],
            sections: [
                {
                    h2: 'Dettagli del Percorso',
                    p: [
                        'Il viaggio copre circa 130 km via A19 e SS189, richiedendo tipicamente circa 1 ora e 50 minuti attraverso l\'entroterra siciliano. Questo è significativamente più lungo rispetto ai nostri altri transfer in Sicilia, quindi consigliamo di confermare attentamente i tempi di ritiro con il tuo autista, specialmente per voli mattutini o serali.',
                    ],
                },
                {
                    h2: 'Perché Scegliere un Transfer Privato',
                    p: [
                        'Non esiste un treno diretto dall\'Aeroporto di Palermo ad Agrigento — dovresti prima raggiungere Palermo Centrale, poi un treno che da solo impiega oltre 2 ore. Un transfer privato è un unico viaggio più diretto a prezzo fisso.',
                    ],
                },
                bookingSectionIt('Aeroporto di Palermo', 'Agrigento'),
            ],
            faqs: [
                { q: 'Quanto dura il tragitto dall\'Aeroporto di Palermo ad Agrigento?', a: 'Circa 1 ora e 50 minuti via autostrada A19 e SS189, uno dei transfer più lunghi nella nostra rete siciliana.' },
                { q: 'Il prezzo è fisso anche per questo tragitto più lungo?', a: 'Sì, concordato e confermato prima della partenza, indipendentemente dalla distanza.' },
                { q: 'Posso visitare la Valle dei Templi direttamente dall\'aeroporto?', a: 'Il transfer ti porta ad Agrigento; una sosta alla Valle dei Templi può essere organizzata come parte dello stesso viaggio se i tempi lo consentono.' },
                { q: 'Questo percorso è disponibile anche al contrario, da Agrigento all\'aeroporto?', a: 'Sì, i transfer funzionano in entrambe le direzioni allo stesso prezzo fisso.' },
            ],
            relatedLinks: [
                { href: '/airport/palermo', label: 'Guida Aeroporto di Palermo' },
                { href: '/it/route/trasferimento-aeroporto-palermo-citta', label: 'Aeroporto di Palermo - Centro Città' },
                { href: '/attraction-transfer/valley-of-the-temples-taxi-transfer', label: 'Transfer Valle dei Templi' },
                { href: '/services/private-tours', label: 'Tour Privati' },
                { href: '/book-now', label: 'Prenota il Tuo Transfer in Sicilia' },
            ],
        },
    },

    // ═══════════════════════════════════════ SARDINIA ═══════════════════════════════════════

    {
        slugEn: 'olbia-airport-to-porto-cervo-taxi',
        slugIt: 'trasferimento-aeroporto-olbia-porto-cervo',
        from: 'Olbia Airport',
        to: 'Porto Cervo',
        hero_image: SARDINIA_IMG,
        imageAlt: 'Porto Cervo marina on Sardinia\'s Costa Smeralda',
        distance: '~30 km',
        duration: '~30-35 min',
        en: {
            title: 'Olbia Airport to Porto Cervo Transfer',
            metaTitle: 'Olbia Airport to Porto Cervo Private Transfer',
            metaDescription: 'Private taxi from Olbia Airport to Porto Cervo, Costa Smeralda. Fixed price, meet & greet, door-to-door to your hotel or villa.',
            description: 'Porto Cervo is the flagship town of the Costa Smeralda, and the drive up from Olbia Airport is short but busy in peak summer — exactly when a fixed price agreed in advance and a driver who knows the coast\'s narrow lanes matter most.',
            highlights: ['Short, direct transfer from arrivals', 'Fixed price — no summer surge pricing', 'Meet & greet with flight tracking', 'Driver experienced on Costa Smeralda roads', 'Free 60-minute waiting time after landing'],
            sections: [
                {
                    h2: 'Route Details',
                    p: [
                        'The transfer covers about 30 km and typically takes 30 to 35 minutes, though the coastal roads around Porto Cervo can slow considerably in August. Your driver takes you directly to your hotel or villa, with luggage assistance throughout.',
                    ],
                },
                {
                    h2: 'Why Choose a Private Transfer',
                    p: [
                        'Public transport options to Porto Cervo from the airport are limited and infrequent, and taxi availability at the rank can be inconsistent during peak arrival banks in high season. Booking ahead means your driver is already positioned and tracking your flight.',
                    ],
                },
                bookingSectionEn('Olbia Airport', 'Porto Cervo'),
            ],
            faqs: [
                { q: 'How long is the transfer from Olbia Airport to Porto Cervo?', a: 'Typically 30 to 35 minutes, longer in August when Costa Smeralda traffic peaks.' },
                { q: 'Is the price fixed even in high season?', a: 'Yes — your price is agreed and confirmed before you fly, with no seasonal surge pricing.' },
                { q: 'Can the driver take me to a private villa rather than a hotel?', a: 'Yes, just provide the address at booking and your driver will confirm the route in advance.' },
                { q: 'Can I book onward transfers to Porto Rotondo or Baia Sardinia?', a: 'Yes, see our dedicated transfer pages for both destinations.' },
            ],
            relatedLinks: [
                { href: '/airport/olbia', label: 'Olbia Costa Smeralda Airport Guide' },
                { href: '/route/olbia-airport-to-porto-rotondo-taxi', label: 'Olbia Airport to Porto Rotondo Transfer' },
                { href: '/route/olbia-airport-to-baia-sardinia-taxi', label: 'Olbia Airport to Baia Sardinia Transfer' },
                { href: '/services/airport-transfers', label: 'Airport Transfer Services' },
                { href: '/book-now', label: 'Book Your Sardinia Transfer' },
            ],
        },
        it: {
            title: 'Transfer da Aeroporto di Olbia a Porto Cervo',
            metaTitle: 'Transfer Privato Aeroporto di Olbia - Porto Cervo',
            metaDescription: 'Taxi privato dall\'Aeroporto di Olbia a Porto Cervo, Costa Smeralda. Prezzo fisso, accoglienza in aeroporto, porta a porta fino al tuo hotel o villa.',
            description: 'Porto Cervo è la località di punta della Costa Smeralda, e il tragitto dall\'Aeroporto di Olbia è breve ma trafficato nell\'alta stagione estiva — proprio quando un prezzo fisso concordato in anticipo e un autista che conosce le strette strade della costa contano di più.',
            highlights: ['Transfer breve e diretto dall\'arrivo', 'Prezzo fisso — nessun aumento di prezzo estivo', 'Accoglienza con monitoraggio del volo', 'Autista esperto sulle strade della Costa Smeralda', '60 minuti di attesa gratuita dopo l\'atterraggio'],
            sections: [
                {
                    h2: 'Dettagli del Percorso',
                    p: [
                        'Il transfer copre circa 30 km e richiede tipicamente 30-35 minuti, anche se le strade costiere intorno a Porto Cervo possono rallentare notevolmente ad agosto. Il tuo autista ti porta direttamente al tuo hotel o villa, con assistenza per i bagagli durante tutto il tragitto.',
                    ],
                },
                {
                    h2: 'Perché Scegliere un Transfer Privato',
                    p: [
                        'Le opzioni di trasporto pubblico verso Porto Cervo dall\'aeroporto sono limitate e poco frequenti, e la disponibilità di taxi al posteggio può essere incostante durante i picchi di arrivo in alta stagione. Prenotare in anticipo significa che il tuo autista è già posizionato e monitora il tuo volo.',
                    ],
                },
                bookingSectionIt('Aeroporto di Olbia', 'Porto Cervo'),
            ],
            faqs: [
                { q: 'Quanto dura il transfer dall\'Aeroporto di Olbia a Porto Cervo?', a: 'Tipicamente 30-35 minuti, di più ad agosto quando il traffico della Costa Smeralda è al culmine.' },
                { q: 'Il prezzo è fisso anche in alta stagione?', a: 'Sì — il prezzo viene concordato e confermato prima della partenza, senza aumenti stagionali.' },
                { q: 'L\'autista può portarmi in una villa privata invece che in hotel?', a: 'Sì, basta fornire l\'indirizzo al momento della prenotazione e il tuo autista confermerà il percorso in anticipo.' },
                { q: 'Posso prenotare transfer successivi verso Porto Rotondo o Baia Sardegna?', a: 'Sì, consulta le nostre pagine dedicate ai transfer per entrambe le destinazioni.' },
            ],
            relatedLinks: [
                { href: '/airport/olbia', label: 'Guida Aeroporto di Olbia Costa Smeralda' },
                { href: '/it/route/trasferimento-aeroporto-olbia-porto-rotondo', label: 'Aeroporto di Olbia - Porto Rotondo' },
                { href: '/it/route/trasferimento-aeroporto-olbia-baia-sardegna', label: 'Aeroporto di Olbia - Baia Sardegna' },
                { href: '/services/airport-transfers', label: 'Servizi di Transfer Aeroportuale' },
                { href: '/book-now', label: 'Prenota il Tuo Transfer in Sardegna' },
            ],
        },
    },

    {
        slugEn: 'olbia-airport-to-porto-rotondo-taxi',
        slugIt: 'trasferimento-aeroporto-olbia-porto-rotondo',
        from: 'Olbia Airport',
        to: 'Porto Rotondo',
        hero_image: SARDINIA_BEACH_IMG,
        imageAlt: 'Porto Rotondo\'s marina and coastline near Olbia',
        distance: '~28 km',
        duration: '~30 min',
        en: {
            title: 'Olbia Airport to Porto Rotondo Transfer',
            metaTitle: 'Olbia Airport to Porto Rotondo Private Transfer',
            metaDescription: 'Private taxi from Olbia Airport to Porto Rotondo. Fixed price, meet & greet, door-to-door service to your hotel or villa.',
            description: 'Porto Rotondo sits just along the coast from Porto Cervo, quieter but equally elegant, and one of the shortest transfers from Olbia Airport on the Costa Smeralda. A private transfer means you\'re at your villa or hotel within half an hour of landing.',
            highlights: ['One of the shortest Costa Smeralda transfers', 'Fixed price — no seasonal surcharges', 'Meet & greet with flight tracking', 'Direct to villa or hotel', 'Free 60-minute waiting time after landing'],
            sections: [
                {
                    h2: 'Route Details',
                    p: [
                        'The journey is about 28 km and typically takes around 30 minutes, making Porto Rotondo one of the quickest Costa Smeralda destinations to reach from the airport.',
                    ],
                },
                {
                    h2: 'Why Choose a Private Transfer',
                    p: [
                        'With no meaningful public transport link and taxi availability unpredictable in peak season, a pre-booked private transfer guarantees your driver is waiting and tracking your specific flight.',
                    ],
                },
                bookingSectionEn('Olbia Airport', 'Porto Rotondo'),
            ],
            faqs: [
                { q: 'How long is the transfer to Porto Rotondo?', a: 'Around 30 minutes, one of the shortest transfers on the Costa Smeralda.' },
                { q: 'Can I combine this with a stop in Olbia town?', a: 'Yes, a brief stop can be arranged if time allows.' },
                { q: 'Is pricing different for peak summer dates?', a: 'No — the price agreed at booking is fixed regardless of season.' },
                { q: 'Can I book a return transfer for my departure?', a: 'Yes, book both legs together or arrange the return once your flight is confirmed.' },
            ],
            relatedLinks: [
                { href: '/airport/olbia', label: 'Olbia Costa Smeralda Airport Guide' },
                { href: '/route/olbia-airport-to-porto-cervo-taxi', label: 'Olbia Airport to Porto Cervo Transfer' },
                { href: '/route/olbia-airport-to-baia-sardinia-taxi', label: 'Olbia Airport to Baia Sardinia Transfer' },
                { href: '/services/airport-transfers', label: 'Airport Transfer Services' },
                { href: '/book-now', label: 'Book Your Sardinia Transfer' },
            ],
        },
        it: {
            title: 'Transfer da Aeroporto di Olbia a Porto Rotondo',
            metaTitle: 'Transfer Privato Aeroporto di Olbia - Porto Rotondo',
            metaDescription: 'Taxi privato dall\'Aeroporto di Olbia a Porto Rotondo. Prezzo fisso, accoglienza in aeroporto, servizio porta a porta fino al tuo hotel o villa.',
            description: 'Porto Rotondo si trova appena lungo la costa da Porto Cervo, più tranquilla ma altrettanto elegante, e uno dei transfer più brevi dall\'Aeroporto di Olbia sulla Costa Smeralda. Un transfer privato significa essere alla tua villa o hotel entro mezz\'ora dall\'atterraggio.',
            highlights: ['Uno dei transfer più brevi della Costa Smeralda', 'Prezzo fisso — nessun supplemento stagionale', 'Accoglienza con monitoraggio del volo', 'Diretto a villa o hotel', '60 minuti di attesa gratuita dopo l\'atterraggio'],
            sections: [
                {
                    h2: 'Dettagli del Percorso',
                    p: [
                        'Il viaggio è di circa 28 km e richiede tipicamente circa 30 minuti, rendendo Porto Rotondo una delle destinazioni della Costa Smeralda più rapide da raggiungere dall\'aeroporto.',
                    ],
                },
                {
                    h2: 'Perché Scegliere un Transfer Privato',
                    p: [
                        'Senza un collegamento di trasporto pubblico significativo e con la disponibilità di taxi imprevedibile in alta stagione, un transfer privato prenotato in anticipo garantisce che il tuo autista sia già in attesa e monitori il tuo volo specifico.',
                    ],
                },
                bookingSectionIt('Aeroporto di Olbia', 'Porto Rotondo'),
            ],
            faqs: [
                { q: 'Quanto dura il transfer per Porto Rotondo?', a: 'Circa 30 minuti, uno dei transfer più brevi sulla Costa Smeralda.' },
                { q: 'Posso combinarlo con una sosta nel paese di Olbia?', a: 'Sì, se i tempi lo consentono si può organizzare una breve sosta.' },
                { q: 'Il prezzo cambia nelle date di alta stagione estiva?', a: 'No — il prezzo concordato alla prenotazione è fisso indipendentemente dalla stagione.' },
                { q: 'Posso prenotare un transfer di ritorno per la partenza?', a: 'Sì, prenota entrambe le tratte insieme oppure organizza il ritorno una volta confermato il volo.' },
            ],
            relatedLinks: [
                { href: '/airport/olbia', label: 'Guida Aeroporto di Olbia Costa Smeralda' },
                { href: '/it/route/trasferimento-aeroporto-olbia-porto-cervo', label: 'Aeroporto di Olbia - Porto Cervo' },
                { href: '/it/route/trasferimento-aeroporto-olbia-baia-sardegna', label: 'Aeroporto di Olbia - Baia Sardegna' },
                { href: '/services/airport-transfers', label: 'Servizi di Transfer Aeroportuale' },
                { href: '/book-now', label: 'Prenota il Tuo Transfer in Sardegna' },
            ],
        },
    },

    {
        slugEn: 'olbia-airport-to-baia-sardinia-taxi',
        slugIt: 'trasferimento-aeroporto-olbia-baia-sardegna',
        from: 'Olbia Airport',
        to: 'Baia Sardinia',
        hero_image: SARDINIA_COVE_IMG,
        imageAlt: 'Baia Sardinia\'s beach cove on the Costa Smeralda',
        distance: '~35 km',
        duration: '~35-40 min',
        en: {
            title: 'Olbia Airport to Baia Sardinia Transfer',
            metaTitle: 'Olbia Airport to Baia Sardinia Private Transfer',
            metaDescription: 'Private taxi from Olbia Airport to Baia Sardinia. Fixed price, meet & greet, door-to-door service to this popular Costa Smeralda beach town.',
            description: 'Baia Sardinia is one of the Costa Smeralda\'s most popular beach towns, a little further round the coast from Porto Cervo. Our private transfer takes you directly there from Olbia Airport arrivals, at a fixed price with no summer surcharges.',
            highlights: ['Direct transfer to this popular beach town', 'Fixed price — no seasonal surcharges', 'Meet & greet with flight tracking', 'Comfortable vehicle for the coastal drive', 'Free 60-minute waiting time after landing'],
            sections: [
                {
                    h2: 'Route Details',
                    p: [
                        'The transfer covers about 35 km and typically takes 35 to 40 minutes, with coastal roads that can slow in peak August traffic around the Costa Smeralda\'s busiest beach towns.',
                    ],
                },
                {
                    h2: 'Why Choose a Private Transfer',
                    p: [
                        'Baia Sardinia has no rail link and limited public bus service — a private transfer is timed to your flight and takes you directly to your accommodation, without connections or timetables to work around.',
                    ],
                },
                bookingSectionEn('Olbia Airport', 'Baia Sardinia'),
            ],
            faqs: [
                { q: 'How long is the transfer to Baia Sardinia?', a: 'Typically 35 to 40 minutes, longer during peak August traffic.' },
                { q: 'Is Baia Sardinia far from Porto Cervo?', a: 'They\'re both on the Costa Smeralda, a short drive apart — combining a visit to both in one trip is easy to arrange.' },
                { q: 'Can I book a private transfer for a group?', a: 'Yes, larger vehicles are available for groups — mention your party size when booking.' },
                { q: 'Is a return transfer available for departure?', a: 'Yes, book both legs together or arrange the return once your flight is confirmed.' },
            ],
            relatedLinks: [
                { href: '/airport/olbia', label: 'Olbia Costa Smeralda Airport Guide' },
                { href: '/route/olbia-airport-to-porto-cervo-taxi', label: 'Olbia Airport to Porto Cervo Transfer' },
                { href: '/route/olbia-airport-to-porto-rotondo-taxi', label: 'Olbia Airport to Porto Rotondo Transfer' },
                { href: '/services/airport-transfers', label: 'Airport Transfer Services' },
                { href: '/book-now', label: 'Book Your Sardinia Transfer' },
            ],
        },
        it: {
            title: 'Transfer da Aeroporto di Olbia a Baia Sardegna',
            metaTitle: 'Transfer Privato Aeroporto di Olbia - Baia Sardegna',
            metaDescription: 'Taxi privato dall\'Aeroporto di Olbia a Baia Sardegna. Prezzo fisso, accoglienza in aeroporto, servizio porta a porta verso questa popolare località balneare della Costa Smeralda.',
            description: 'Baia Sardegna è una delle località balneari più popolari della Costa Smeralda, un po\' più avanti lungo la costa rispetto a Porto Cervo. Il nostro transfer privato ti porta lì direttamente dall\'arrivo dell\'Aeroporto di Olbia, a prezzo fisso senza supplementi estivi.',
            highlights: ['Transfer diretto verso questa popolare località balneare', 'Prezzo fisso — nessun supplemento stagionale', 'Accoglienza con monitoraggio del volo', 'Veicolo confortevole per il tragitto costiero', '60 minuti di attesa gratuita dopo l\'atterraggio'],
            sections: [
                {
                    h2: 'Dettagli del Percorso',
                    p: [
                        'Il transfer copre circa 35 km e richiede tipicamente 35-40 minuti, con strade costiere che possono rallentare nel traffico di punta di agosto intorno alle località balneari più frequentate della Costa Smeralda.',
                    ],
                },
                {
                    h2: 'Perché Scegliere un Transfer Privato',
                    p: [
                        'Baia Sardegna non ha collegamenti ferroviari e ha un servizio di autobus pubblico limitato — un transfer privato è calibrato sul tuo volo e ti porta direttamente al tuo alloggio, senza coincidenze o orari da rispettare.',
                    ],
                },
                bookingSectionIt('Aeroporto di Olbia', 'Baia Sardegna'),
            ],
            faqs: [
                { q: 'Quanto dura il transfer per Baia Sardegna?', a: 'Tipicamente 35-40 minuti, di più durante il traffico di punta di agosto.' },
                { q: 'Baia Sardegna è lontana da Porto Cervo?', a: 'Sono entrambe sulla Costa Smeralda, a breve distanza in auto — combinare una visita a entrambe in un solo viaggio è facile da organizzare.' },
                { q: 'Posso prenotare un transfer privato per un gruppo?', a: 'Sì, sono disponibili veicoli più grandi per gruppi — indica il numero di persone al momento della prenotazione.' },
                { q: 'È disponibile un transfer di ritorno per la partenza?', a: 'Sì, prenota entrambe le tratte insieme oppure organizza il ritorno una volta confermato il volo.' },
            ],
            relatedLinks: [
                { href: '/airport/olbia', label: 'Guida Aeroporto di Olbia Costa Smeralda' },
                { href: '/it/route/trasferimento-aeroporto-olbia-porto-cervo', label: 'Aeroporto di Olbia - Porto Cervo' },
                { href: '/it/route/trasferimento-aeroporto-olbia-porto-rotondo', label: 'Aeroporto di Olbia - Porto Rotondo' },
                { href: '/services/airport-transfers', label: 'Servizi di Transfer Aeroportuale' },
                { href: '/book-now', label: 'Prenota il Tuo Transfer in Sardegna' },
            ],
        },
    },

    {
        slugEn: 'cagliari-airport-to-villasimius-taxi',
        slugIt: 'trasferimento-aeroporto-cagliari-villasimius',
        from: 'Cagliari Airport',
        to: 'Villasimius',
        hero_image: SARDINIA_BEACH_IMG,
        imageAlt: 'Villasimius beaches on Sardinia\'s southeastern coast',
        distance: '~50 km',
        duration: '~50-55 min',
        en: {
            title: 'Cagliari Airport to Villasimius Transfer',
            metaTitle: 'Cagliari Airport to Villasimius Private Transfer',
            metaDescription: 'Private taxi from Cagliari Airport to Villasimius. Fixed price, meet & greet, door-to-door to one of southern Sardinia\'s top beach resorts.',
            description: 'Villasimius, on Sardinia\'s southeastern tip, is one of the island\'s most popular beach destinations, with turquoise coves that draw comparisons to the Caribbean. Our private transfer from Cagliari Airport takes you there directly, at a fixed price agreed before you fly.',
            highlights: ['Direct transfer to a top beach destination', 'Fixed price — no seasonal surcharges', 'Meet & greet with flight tracking', 'Comfortable vehicle for the coastal drive', 'Free 60-minute waiting time after landing'],
            sections: [
                {
                    h2: 'Route Details',
                    p: [
                        'The journey covers about 50 km and typically takes 50 to 55 minutes via the SS125 coastal road, running southeast from Cagliari past a string of beaches toward Villasimius.',
                    ],
                },
                {
                    h2: 'Why Choose a Private Transfer',
                    p: [
                        'Public bus service from the airport to Villasimius is limited and requires a change in Cagliari itself — a private transfer is one direct journey, timed to your flight and comfortable for the drive along the coast.',
                    ],
                },
                bookingSectionEn('Cagliari Airport', 'Villasimius'),
            ],
            faqs: [
                { q: 'How long is the transfer from Cagliari Airport to Villasimius?', a: 'Around 50 to 55 minutes via the SS125 coastal road.' },
                { q: 'Is the price fixed for peak summer travel?', a: 'Yes, the price agreed at booking doesn\'t change for seasonal demand.' },
                { q: 'Can I stop at Cagliari city on the way?', a: 'A brief stop can be arranged if timing allows — mention it when booking.' },
                { q: 'Is a return transfer to the airport available?', a: 'Yes, book both legs together or arrange the return once your departure flight is confirmed.' },
            ],
            relatedLinks: [
                { href: '/airport/cagliari', label: 'Cagliari Elmas Airport Guide' },
                { href: '/route/cagliari-airport-to-chia-taxi', label: 'Cagliari Airport to Chia Transfer' },
                { href: '/services/airport-transfers', label: 'Airport Transfer Services' },
                { href: '/book-now', label: 'Book Your Sardinia Transfer' },
            ],
        },
        it: {
            title: 'Transfer da Aeroporto di Cagliari a Villasimius',
            metaTitle: 'Transfer Privato Aeroporto di Cagliari - Villasimius',
            metaDescription: 'Taxi privato dall\'Aeroporto di Cagliari a Villasimius. Prezzo fisso, accoglienza in aeroporto, porta a porta verso uno dei migliori resort balneari della Sardegna meridionale.',
            description: 'Villasimius, sulla punta sudorientale della Sardegna, è una delle destinazioni balneari più popolari dell\'isola, con calette turchesi che richiamano paragoni con i Caraibi. Il nostro transfer privato dall\'Aeroporto di Cagliari ti porta lì direttamente, a un prezzo fisso concordato prima della partenza.',
            highlights: ['Transfer diretto verso una destinazione balneare di punta', 'Prezzo fisso — nessun supplemento stagionale', 'Accoglienza con monitoraggio del volo', 'Veicolo confortevole per il tragitto costiero', '60 minuti di attesa gratuita dopo l\'atterraggio'],
            sections: [
                {
                    h2: 'Dettagli del Percorso',
                    p: [
                        'Il viaggio copre circa 50 km e richiede tipicamente 50-55 minuti via SS125 costiera, percorrendo verso sudest da Cagliari oltre una serie di spiagge in direzione Villasimius.',
                    ],
                },
                {
                    h2: 'Perché Scegliere un Transfer Privato',
                    p: [
                        'Il servizio di autobus pubblico dall\'aeroporto a Villasimius è limitato e richiede un cambio nella stessa Cagliari — un transfer privato è un unico viaggio diretto, calibrato sul tuo volo e confortevole per il tragitto lungo la costa.',
                    ],
                },
                bookingSectionIt('Aeroporto di Cagliari', 'Villasimius'),
            ],
            faqs: [
                { q: 'Quanto dura il transfer dall\'Aeroporto di Cagliari a Villasimius?', a: 'Circa 50-55 minuti via SS125 costiera.' },
                { q: 'Il prezzo è fisso per i viaggi in alta stagione estiva?', a: 'Sì, il prezzo concordato alla prenotazione non cambia per la domanda stagionale.' },
                { q: 'Posso fermarmi in città a Cagliari lungo il tragitto?', a: 'Se i tempi lo consentono si può organizzare una breve sosta — menzionalo al momento della prenotazione.' },
                { q: 'È disponibile un transfer di ritorno in aeroporto?', a: 'Sì, prenota entrambe le tratte insieme oppure organizza il ritorno una volta confermato il volo di partenza.' },
            ],
            relatedLinks: [
                { href: '/airport/cagliari', label: 'Guida Aeroporto di Cagliari Elmas' },
                { href: '/it/route/trasferimento-aeroporto-cagliari-chia', label: 'Aeroporto di Cagliari - Chia' },
                { href: '/services/airport-transfers', label: 'Servizi di Transfer Aeroportuale' },
                { href: '/book-now', label: 'Prenota il Tuo Transfer in Sardegna' },
            ],
        },
    },

    {
        slugEn: 'cagliari-airport-to-chia-taxi',
        slugIt: 'trasferimento-aeroporto-cagliari-chia',
        from: 'Cagliari Airport',
        to: 'Chia',
        hero_image: SARDINIA_COVE_IMG,
        imageAlt: 'Chia\'s dune-backed beaches on Sardinia\'s southern coast',
        distance: '~55 km',
        duration: '~55-60 min',
        en: {
            title: 'Cagliari Airport to Chia Transfer',
            metaTitle: 'Cagliari Airport to Chia Private Transfer',
            metaDescription: 'Private taxi from Cagliari Airport to Chia. Fixed price, meet & greet, door-to-door service to this dune-backed beach destination in southern Sardinia.',
            description: 'Chia\'s dune-backed beaches and lagoon are among southern Sardinia\'s most photographed spots, a scenic but slightly longer drive from Cagliari Airport than Villasimius on the opposite coast. Our private transfer handles the drive so you arrive ready for the beach, not tired from public transport connections.',
            highlights: ['Direct transfer to a scenic beach destination', 'Fixed price — no seasonal surcharges', 'Meet & greet with flight tracking', 'Comfortable vehicle for the coastal drive', 'Free 60-minute waiting time after landing'],
            sections: [
                {
                    h2: 'Route Details',
                    p: [
                        'The journey covers about 55 km and typically takes 55 to 60 minutes via the SS195 coastal road southwest from Cagliari.',
                    ],
                },
                {
                    h2: 'Why Choose a Private Transfer',
                    p: [
                        'Chia has no rail link and bus service from the airport is indirect, usually requiring a change in Cagliari. A private transfer is a single direct journey, comfortable for the drive and timed to your flight.',
                    ],
                },
                bookingSectionEn('Cagliari Airport', 'Chia'),
            ],
            faqs: [
                { q: 'How long is the transfer from Cagliari Airport to Chia?', a: 'Around 55 to 60 minutes via the SS195 coastal road.' },
                { q: 'Is Chia a good base for beach holidays?', a: 'Yes — it\'s known for some of southern Sardinia\'s most striking dune-backed beaches and a scenic lagoon.' },
                { q: 'Can I book this transfer for a group with extra luggage?', a: 'Yes, larger vehicles are available — mention your group size and luggage when booking.' },
                { q: 'Is a return transfer to the airport available?', a: 'Yes, book both legs together or arrange the return once your departure flight is confirmed.' },
            ],
            relatedLinks: [
                { href: '/airport/cagliari', label: 'Cagliari Elmas Airport Guide' },
                { href: '/route/cagliari-airport-to-villasimius-taxi', label: 'Cagliari Airport to Villasimius Transfer' },
                { href: '/services/airport-transfers', label: 'Airport Transfer Services' },
                { href: '/book-now', label: 'Book Your Sardinia Transfer' },
            ],
        },
        it: {
            title: 'Transfer da Aeroporto di Cagliari a Chia',
            metaTitle: 'Transfer Privato Aeroporto di Cagliari - Chia',
            metaDescription: 'Taxi privato dall\'Aeroporto di Cagliari a Chia. Prezzo fisso, accoglienza in aeroporto, servizio porta a porta verso questa destinazione balneare tra le dune nella Sardegna meridionale.',
            description: 'Le spiagge di Chia, incorniciate dalle dune, e la sua laguna sono tra i luoghi più fotografati della Sardegna meridionale, un tragitto panoramico ma leggermente più lungo dall\'Aeroporto di Cagliari rispetto a Villasimius sulla costa opposta. Il nostro transfer privato gestisce il tragitto così arrivi pronto per la spiaggia, non stanco per le coincidenze dei mezzi pubblici.',
            highlights: ['Transfer diretto verso una destinazione balneare panoramica', 'Prezzo fisso — nessun supplemento stagionale', 'Accoglienza con monitoraggio del volo', 'Veicolo confortevole per il tragitto costiero', '60 minuti di attesa gratuita dopo l\'atterraggio'],
            sections: [
                {
                    h2: 'Dettagli del Percorso',
                    p: [
                        'Il viaggio copre circa 55 km e richiede tipicamente 55-60 minuti via SS195 costiera verso sudovest da Cagliari.',
                    ],
                },
                {
                    h2: 'Perché Scegliere un Transfer Privato',
                    p: [
                        'Chia non ha collegamenti ferroviari e il servizio di autobus dall\'aeroporto è indiretto, di solito richiede un cambio a Cagliari. Un transfer privato è un unico viaggio diretto, confortevole per il tragitto e calibrato sul tuo volo.',
                    ],
                },
                bookingSectionIt('Aeroporto di Cagliari', 'Chia'),
            ],
            faqs: [
                { q: 'Quanto dura il transfer dall\'Aeroporto di Cagliari a Chia?', a: 'Circa 55-60 minuti via SS195 costiera.' },
                { q: 'Chia è una buona base per vacanze al mare?', a: 'Sì — è nota per alcune delle spiagge tra dune più suggestive della Sardegna meridionale e una laguna panoramica.' },
                { q: 'Posso prenotare questo transfer per un gruppo con bagagli extra?', a: 'Sì, sono disponibili veicoli più grandi — indica il numero di persone e i bagagli al momento della prenotazione.' },
                { q: 'È disponibile un transfer di ritorno in aeroporto?', a: 'Sì, prenota entrambe le tratte insieme oppure organizza il ritorno una volta confermato il volo di partenza.' },
            ],
            relatedLinks: [
                { href: '/airport/cagliari', label: 'Guida Aeroporto di Cagliari Elmas' },
                { href: '/it/route/trasferimento-aeroporto-cagliari-villasimius', label: 'Aeroporto di Cagliari - Villasimius' },
                { href: '/services/airport-transfers', label: 'Servizi di Transfer Aeroportuale' },
                { href: '/book-now', label: 'Prenota il Tuo Transfer in Sardegna' },
            ],
        },
    },
];

/** English RouteData entries, ready to spread into the main `routes` array in page-data.ts. */
export const newClusterRoutesEn: RouteData[] = clusterRoutes.map((r) => ({
    slug: r.slugEn,
    from: r.from,
    to: r.to,
    title: r.en.title,
    hero_image: r.hero_image,
    description: r.en.description,
    distance: r.distance,
    duration: r.duration,
    highlights: r.en.highlights,
    faqs: r.en.faqs,
    metaTitle: r.en.metaTitle,
    metaDescription: r.en.metaDescription,
    imageAlt: r.imageAlt,
    sections: r.en.sections,
    vehicleOptions: true,
    relatedLinks: r.en.relatedLinks,
    itSlug: r.slugIt,
}));
