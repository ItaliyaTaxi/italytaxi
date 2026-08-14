// Italian translations for approved existing English /route/[slug] pages —
// Phase B of the Route Expansion 2026 plan (30 routes, hand-picked from the
// 92 legacy English-only routes for genuine Italian-language commercial
// intent — not a translate-everything pass).
//
// Each entry maps an EXISTING English route (by `slugEn`, verified against
// page-data.ts/extra-routes*.ts) to new, natively-written Italian content,
// WITHOUT touching that English route's own data, title or metadata.
// Shaped like `ClusterRoute` minus the `en` field, so `/it/route/[slug]/
// page.tsx` renders it with the same template already used for the 22 live
// cluster routes, and `page-data.ts` patches `itSlug` onto the matching
// English route object (see the loop after `routes[]`) to drive hreflang.
//
// distance/duration/from/to are copied verbatim from each route's existing
// English data — see page-data.ts and extra-routes-*.ts — so both language
// versions state identical facts.
import type { ClusterRouteContent } from './new-regions-routes-data';

const prenotazioneIt = (from: string, to: string) => ({
    h2: 'Come Funziona la Prenotazione',
    p: [
        `Prenotare il tuo trasferimento da ${from} a ${to} richiede pochi minuti: compila il modulo con i dettagli del ritiro, il numero di volo (se applicabile), data, ora e numero di passeggeri, e riceverai un prezzo fisso confermato prima di pagare qualsiasi cosa.`,
        `Una volta prenotato, il tuo autista monitora automaticamente il tuo volo, quindi atterraggi anticipati, ritardi e cambi di gate vengono gestiti senza che tu debba chiamare nessuno. La cancellazione gratuita è disponibile fino a 24 ore prima del ritiro.`,
    ],
});

export interface ExistingRouteItTranslation {
    slugEn: string;   // must match an existing routes[] slug — never a new route
    slugIt: string;
    from: string;
    to: string;
    hero_image: string;
    imageAlt: string;
    distance: string;
    duration: string;
    it: ClusterRouteContent;
}

export const existingRouteItTranslations: ExistingRouteItTranslation[] = [

    {
        slugEn: 'rome-to-florence-taxi',
        slugIt: 'trasferimento-roma-firenze',
        from: 'Rome', to: 'Florence',
        hero_image: 'https://images.unsplash.com/photo-1529260830199-42c24126f198?auto=format&fit=crop&q=60&w=1200',
        imageAlt: 'Vista del Duomo di Firenze da un\'auto privata in transito',
        distance: '~277 km', duration: '~3 ore',
        it: {
            title: 'Transfer Privato da Roma a Firenze',
            metaTitle: 'Trasferimento Roma - Firenze',
            metaDescription: 'Prenota un taxi privato da Roma a Firenze. Prezzo fisso, autista professionista, sosta facoltativa in Chianti, servizio porta a porta lungo uno dei percorsi più suggestivi d\'Italia.',
            description: 'Un trasferimento privato da Roma a Firenze copre circa 277 km lungo l\'Autostrada del Sole in circa 3 ore, con la possibilità di una sosta panoramica in Chianti lungo il tragitto. Niente cambi di treno né bagagli da trascinare in stazione: solo un\'auto comoda, un autista professionista e un prezzo concordato in anticipo.',
            highlights: ['Servizio porta a porta da Roma a Firenze', 'Sosta facoltativa nella campagna toscana del Chianti', 'Tutti i pedaggi autostradali inclusi', 'Wi-Fi e acqua in bottiglia a bordo', 'Cancellazione gratuita fino a 24 ore prima'],
            sections: [
                {
                    h2: 'Dettagli del Percorso',
                    p: [
                        'Il tragitto segue l\'Autostrada del Sole (A1) per circa 277 km, con un tempo di percorrenza di circa 3 ore in condizioni normali di traffico. Il tuo autista ti preleva direttamente dal tuo hotel o indirizzo a Roma e ti porta fino alla porta del tuo alloggio a Firenze.',
                        'Chi desidera spezzare il viaggio può richiedere una sosta fotografica o una breve visita in una tenuta del Chianti lungo il percorso — basta comunicarlo al momento della prenotazione.',
                    ],
                },
                {
                    h2: 'Perché Scegliere un Transfer Privato',
                    p: [
                        'Il treno alta velocità collega Roma e Firenze in circa 1 ora e 30 minuti, più veloce sulla carta — ma un transfer privato porta bagagli e persone dalla porta di casa alla porta dell\'hotel, senza il tragitto verso la stazione, l\'attesa in banchina o il trasporto dei bagagli su più mezzi. È la scelta naturale per famiglie, gruppi con molti bagagli o chi vuole semplicemente godersi il viaggio senza pensieri logistici.',
                    ],
                },
                prenotazioneIt('Roma', 'Firenze'),
            ],
            faqs: [
                { q: 'Quanto dura il trasferimento da Roma a Firenze?', a: 'Circa 3 ore lungo l\'Autostrada del Sole (A1), traffico permettendo.' },
                { q: 'Posso fare una sosta in Chianti lungo il tragitto?', a: 'Sì, una sosta fotografica o una breve visita a una tenuta vinicola può essere organizzata — comunicalo al momento della prenotazione.' },
                { q: 'Il prezzo include i pedaggi autostradali?', a: 'Sì, il prezzo fisso concordato include tutti i pedaggi, il carburante e l\'autista.' },
                { q: 'È più conveniente del treno alta velocità?', a: 'Il treno è più veloce come tempo di percorrenza puro, ma il transfer privato offre un servizio porta a porta senza cambi né trasporto bagagli in stazione — la scelta preferita da famiglie e gruppi.' },
            ],
            relatedLinks: [
                { href: '/city/rome', label: 'Servizio Taxi Roma' },
                { href: '/city/florence', label: 'Servizio Taxi Firenze' },
                { href: '/it/route/trasferimento-firenze-chianti', label: 'Transfer Firenze - Chianti' },
                { href: '/route/rome-to-naples-taxi', label: 'Rome to Naples Transfer' },
            ],
        },
    },

    {
        slugEn: 'rome-to-naples-taxi',
        slugIt: 'trasferimento-roma-napoli',
        from: 'Rome', to: 'Naples',
        hero_image: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?auto=format&fit=crop&q=60&w=1200',
        imageAlt: 'Lungomare di Napoli con il Vesuvio sullo sfondo',
        distance: '~226 km', duration: '~2,5 ore',
        it: {
            title: 'Transfer Privato da Roma a Napoli',
            metaTitle: 'Trasferimento Roma - Napoli',
            metaDescription: 'Taxi privato da Roma a Napoli. Prezzo fisso, autista di lingua inglese, sosta facoltativa a Pompei, servizio diretto porta a porta senza treni affollati.',
            description: 'Viaggia da Roma a Napoli con il nostro servizio di taxi privato. Un trasferimento diretto porta a porta di circa 226 km, con la possibilità di una sosta a Pompei lungo il percorso, senza dover affrontare treni affollati o cambi di stazione.',
            highlights: ['Servizio diretto porta a porta', 'Sosta facoltativa a Pompei', 'Nessun costo nascosto', 'Autista locale di lingua inglese', 'Cancellazione gratuita fino a 24 ore prima'],
            sections: [
                {
                    h2: 'Dettagli del Percorso',
                    p: [
                        'Il tragitto copre circa 226 km lungo l\'A1, con un tempo di percorrenza di circa 2 ore e mezza. Il tuo autista ti preleva dal tuo indirizzo a Roma e ti accompagna direttamente a destinazione a Napoli, con la possibilità di una sosta a Pompei per chi vuole visitare gli scavi lungo il tragitto.',
                    ],
                },
                {
                    h2: 'Perché Scegliere un Transfer Privato',
                    p: [
                        'Il treno alta velocità è rapido, ma richiede il trasporto dei bagagli fino alla stazione di Roma Termini e poi da Napoli Centrale alla destinazione finale. Un transfer privato elimina entrambi i passaggi, con un\'unica corsa dalla porta di partenza alla porta di arrivo, a un prezzo fisso concordato in anticipo.',
                    ],
                },
                prenotazioneIt('Roma', 'Napoli'),
            ],
            faqs: [
                { q: 'Quanto dura il trasferimento da Roma a Napoli?', a: 'Circa 2 ore e mezza lungo l\'autostrada A1, traffico permettendo.' },
                { q: 'Posso includere una sosta a Pompei?', a: 'Sì, una sosta agli scavi di Pompei può essere aggiunta al percorso — comunicalo in fase di prenotazione.' },
                { q: 'Il prezzo è fisso o cambia in base al traffico?', a: 'Il prezzo è fisso e concordato prima della partenza, indipendentemente dal traffico.' },
                { q: 'L\'autista parla inglese?', a: 'Sì, tutti i nostri autisti sono professionisti locali di lingua inglese.' },
            ],
            relatedLinks: [
                { href: '/city/rome', label: 'Servizio Taxi Roma' },
                { href: '/city/naples', label: 'Servizio Taxi Napoli' },
                { href: '/it/route/trasferimento-roma-pompei', label: 'Transfer Roma - Pompei' },
                { href: '/route/naples-to-sorrento-taxi', label: 'Naples to Sorrento Transfer' },
            ],
        },
    },

    {
        slugEn: 'rome-to-pompeii-taxi',
        slugIt: 'trasferimento-roma-pompei',
        from: 'Rome', to: 'Pompeii',
        hero_image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=60&w=1200',
        imageAlt: 'Rovine antiche di Pompei con il Vesuvio sullo sfondo',
        distance: '~240 km', duration: '~2,5 ore',
        it: {
            title: 'Transfer Privato da Roma a Pompei',
            metaTitle: 'Trasferimento Roma - Pompei',
            metaDescription: 'Visita gli scavi di Pompei da Roma con un taxi privato. Autista dedicato fino all\'ingresso principale, opzioni di sola andata o gita di un giorno, combinabile con Napoli.',
            description: 'Visita le antiche rovine di Pompei da Roma con un taxi privato. Il tuo autista dedicato ti porta direttamente all\'ingresso principale del sito, con opzioni di ritorno flessibili e la possibilità di organizzare una gita di un giorno completa.',
            highlights: ['Arrivo diretto all\'ingresso di Pompei', 'Opzioni di sola andata o gita giornaliera', 'Combinabile con Napoli o Ercolano', 'Tutti i pedaggi inclusi', 'Cancellazione gratuita fino a 24 ore prima'],
            sections: [
                {
                    h2: 'Dettagli del Percorso',
                    p: [
                        'Il tragitto da Roma a Pompei copre circa 240 km e richiede circa 2 ore e mezza. Il tuo autista ti accompagna direttamente all\'ingresso principale degli scavi, evitando il parcheggio e la ricerca di trasporto pubblico all\'arrivo.',
                    ],
                },
                {
                    h2: 'Gita di un Giorno o Sola Andata',
                    p: [
                        'Molti visitatori scelgono di prenotare l\'intera giornata: l\'autista aspetta durante la visita agli scavi e riporta poi a Roma o prosegue verso Napoli o la Costiera Amalfitana. In alternativa, è possibile prenotare solo la tratta di andata.',
                    ],
                },
                prenotazioneIt('Roma', 'Pompei'),
            ],
            faqs: [
                { q: 'Quanto dura il tragitto da Roma a Pompei?', a: 'Circa 2 ore e mezza, traffico permettendo.' },
                { q: 'L\'autista può aspettare durante la visita agli scavi?', a: 'Sì, è possibile prenotare l\'attesa dell\'autista per una gita di andata e ritorno in giornata.' },
                { q: 'Posso combinare la visita con Napoli?', a: 'Sì, è possibile aggiungere una tappa a Napoli o proseguire verso la Costiera Amalfitana nello stesso viaggio.' },
                { q: 'Dove viene lasciato il gruppo esattamente?', a: 'Direttamente all\'ingresso principale del sito archeologico di Pompei.' },
            ],
            relatedLinks: [
                { href: '/city/rome', label: 'Servizio Taxi Roma' },
                { href: '/city/naples', label: 'Servizio Taxi Napoli' },
                { href: '/it/route/trasferimento-roma-napoli', label: 'Transfer Roma - Napoli' },
                { href: '/route/naples-airport-to-pompeii-taxi', label: 'Naples Airport to Pompeii Transfer' },
            ],
        },
    },

    {
        slugEn: 'rome-to-sorrento-taxi',
        slugIt: 'trasferimento-roma-sorrento',
        from: 'Rome', to: 'Sorrento',
        hero_image: '/images/almafi.webp',
        imageAlt: 'Costiera di Sorrento vista dalla strada panoramica',
        distance: '~270 km', duration: '~3 ore 30 min',
        it: {
            title: 'Transfer Privato da Roma a Sorrento',
            metaTitle: 'Trasferimento Roma - Sorrento',
            metaDescription: 'Taxi privato da Roma a Sorrento con sosta facoltativa a Pompei. Prezzo fisso, autista di lingua inglese, servizio porta a porta senza cambi di treno.',
            description: 'Transfer privato da Roma a Sorrento con sosta facoltativa a Pompei. Viaggia porta a porta fino alla penisola sorrentina in tutta comodità, evitando il treno alta velocità seguito dalla coincidenza locale.',
            highlights: ['Servizio porta a porta Roma - Sorrento', 'Sosta facoltativa a Pompei lungo il tragitto', 'Tutti i pedaggi autostradali inclusi', 'Autista di lingua inglese', 'Prezzo fisso tutto incluso'],
            sections: [
                {
                    h2: 'Dettagli del Percorso',
                    p: [
                        'Il tragitto copre circa 270 km e richiede circa 3 ore e mezza via A1 e A3, con l\'ultimo tratto lungo la costa sorrentina. Il tuo autista ti preleva a Roma e ti accompagna direttamente al tuo hotel a Sorrento.',
                    ],
                },
                {
                    h2: 'Perché Scegliere un Transfer Privato',
                    p: [
                        'Raggiungere Sorrento con mezzi pubblici significa il treno alta velocità fino a Napoli, poi la Circumvesuviana, affollata e con poco spazio per i bagagli. Un transfer privato è un\'unica corsa diretta, con la possibilità di una sosta a Pompei lungo il percorso.',
                    ],
                },
                prenotazioneIt('Roma', 'Sorrento'),
            ],
            faqs: [
                { q: 'Quanto dura il trasferimento da Roma a Sorrento?', a: 'Circa 3 ore e 30 minuti via A1 e A3, traffico permettendo.' },
                { q: 'Posso fare una sosta a Pompei lungo il tragitto?', a: 'Sì, è possibile organizzare una sosta agli scavi di Pompei — comunicalo alla prenotazione.' },
                { q: 'Il prezzo include i pedaggi?', a: 'Sì, il prezzo fisso tutto incluso copre pedaggi, carburante e autista.' },
                { q: 'È più comodo del treno più la Circumvesuviana?', a: 'Sì per chi viaggia con bagagli — la Circumvesuviana è spesso affollata e con poco spazio, mentre il transfer privato è un\'unica corsa diretta.' },
            ],
            relatedLinks: [
                { href: '/city/rome', label: 'Servizio Taxi Roma' },
                { href: '/city/sorrento', label: 'Servizio Taxi Sorrento' },
                { href: '/it/route/trasferimento-aeroporto-fiumicino-sorrento', label: 'Transfer Aeroporto Fiumicino - Sorrento' },
                { href: '/route/rome-to-positano-taxi', label: 'Rome to Positano Transfer' },
            ],
        },
    },

    {
        slugEn: 'rome-to-siena-taxi',
        slugIt: 'trasferimento-roma-siena',
        from: 'Rome', to: 'Siena',
        hero_image: '/images/Tuscany Wine.webp',
        imageAlt: 'Piazza del Campo a Siena al tramonto',
        distance: '~230 km', duration: '~3 ore',
        it: {
            title: 'Transfer Privato da Roma a Siena',
            metaTitle: 'Trasferimento Roma - Siena',
            metaDescription: 'Taxi privato da Roma a Siena, cuore medievale della Toscana. Sosta facoltativa in Umbria o in una tenuta vinicola, servizio porta a porta con prezzo fisso.',
            description: 'Transfer privato da Roma a Siena, il cuore medievale della Toscana. Viaggia porta a porta con soste facoltative in Umbria o nella campagna vinicola toscana lungo il tragitto.',
            highlights: ['Servizio porta a porta Roma - Siena', 'Sosta facoltativa a Orvieto o in cantina', 'Tutti i pedaggi inclusi', 'Autista di lingua inglese', 'Prezzo fisso tutto incluso'],
            sections: [
                {
                    h2: 'Dettagli del Percorso',
                    p: [
                        'Il tragitto copre circa 230 km e richiede circa 3 ore, attraversando la campagna umbra e toscana. Il tuo autista ti accompagna direttamente in Piazza del Campo o al tuo hotel nel centro storico di Siena.',
                    ],
                },
                {
                    h2: 'Soste Lungo il Tragitto',
                    p: [
                        'Molti viaggiatori scelgono di spezzare il viaggio con una sosta a Orvieto o in una tenuta vinicola toscana — basta segnalarlo al momento della prenotazione per pianificare i tempi insieme al tuo autista.',
                    ],
                },
                prenotazioneIt('Roma', 'Siena'),
            ],
            faqs: [
                { q: 'Quanto dura il trasferimento da Roma a Siena?', a: 'Circa 3 ore, traffico permettendo.' },
                { q: 'Posso fare una sosta a Orvieto lungo il tragitto?', a: 'Sì, una sosta a Orvieto o in una cantina toscana può essere organizzata su richiesta.' },
                { q: 'Dove avviene il ritiro a Roma?', a: 'Dal tuo hotel, appartamento o indirizzo scelto ovunque a Roma.' },
                { q: 'Il prezzo è fisso?', a: 'Sì, concordato prima della partenza, senza sorprese all\'arrivo.' },
            ],
            relatedLinks: [
                { href: '/city/rome', label: 'Servizio Taxi Roma' },
                { href: '/it/route/trasferimento-firenze-siena', label: 'Transfer Firenze - Siena' },
                { href: '/it/route/trasferimento-firenze-chianti', label: 'Transfer Firenze - Chianti' },
            ],
        },
    },

    {
        slugEn: 'rome-fiumicino-to-sorrento-taxi',
        slugIt: 'trasferimento-aeroporto-fiumicino-sorrento',
        from: 'Rome Fiumicino Airport', to: 'Sorrento',
        hero_image: '/images/rome airport.webp',
        imageAlt: 'Auto privata all\'Aeroporto di Roma Fiumicino diretta verso Sorrento',
        distance: '~280 km', duration: '~3 ore 30 min',
        it: {
            title: 'Transfer Privato da Aeroporto Fiumicino a Sorrento',
            metaTitle: 'Trasferimento Fiumicino - Sorrento',
            metaDescription: 'Transfer privato porta a porta dall\'Aeroporto di Roma Fiumicino (FCO) a Sorrento. Accoglienza in aeroporto, monitoraggio del volo, sosta facoltativa a Pompei.',
            description: 'Transfer privato porta a porta dall\'Aeroporto di Roma Fiumicino (FCO) a Sorrento. Evita i cambi di treno e viaggia direttamente verso la costa sorrentina con un autista di lingua inglese, con la possibilità di una sosta a Pompei lungo il percorso.',
            highlights: ['Accoglienza all\'arrivo a Fiumicino', 'Monitoraggio del volo incluso', 'Sosta facoltativa a Pompei', 'Servizio porta a porta fino al tuo hotel a Sorrento', 'Prezzo fisso tutto incluso'],
            sections: [
                {
                    h2: 'Dettagli del Percorso',
                    p: [
                        'Il tragitto copre circa 280 km e richiede circa 3 ore e mezza, via A1 e A3, con la parte finale lungo la costa sorrentina. Il tuo autista ti aspetta nella sala arrivi di Fiumicino con un cartello con il tuo nome.',
                    ],
                },
                {
                    h2: 'Perché Scegliere un Transfer Privato',
                    p: [
                        'Con un volo appena atterrato, l\'ultima cosa che si desidera è gestire cambi di treno con i bagagli. Il tuo volo viene monitorato automaticamente, quindi ritardi o anticipi non influiscono sul ritiro, e il viaggio prosegue in un\'unica corsa diretta fino a Sorrento.',
                    ],
                },
                prenotazioneIt('Aeroporto di Roma Fiumicino', 'Sorrento'),
            ],
            faqs: [
                { q: 'Dove mi aspetta l\'autista a Fiumicino?', a: 'Nella sala arrivi, con un cartello con il tuo nome, monitorando automaticamente il tuo volo.' },
                { q: 'Quanto dura il transfer fino a Sorrento?', a: 'Circa 3 ore e 30 minuti, traffico permettendo.' },
                { q: 'Posso fare una sosta a Pompei?', a: 'Sì, una sosta agli scavi di Pompei può essere organizzata lungo il tragitto.' },
                { q: 'Cosa succede se il mio volo è in ritardo?', a: 'Il tuo volo è monitorato automaticamente, quindi l\'autista si adatta al tuo orario di atterraggio reale, senza costi aggiuntivi.' },
            ],
            relatedLinks: [
                { href: '/city/sorrento', label: 'Servizio Taxi Sorrento' },
                { href: '/it/route/trasferimento-roma-sorrento', label: 'Transfer Roma (centro città) - Sorrento' },
                { href: '/route/naples-airport-to-sorrento-taxi', label: 'Naples Airport to Sorrento Transfer' },
            ],
        },
    },

    {
        slugEn: 'rome-fiumicino-to-civitavecchia-taxi',
        slugIt: 'trasferimento-fiumicino-civitavecchia',
        from: 'Rome Fiumicino Airport', to: 'Civitavecchia Port',
        hero_image: '/images/cruise-port-transfer.webp',
        imageAlt: 'Nave da crociera ormeggiata al porto di Civitavecchia',
        distance: '~70 km', duration: '~1 ora',
        it: {
            title: 'Transfer Privato da Aeroporto Fiumicino a Civitavecchia',
            metaTitle: 'Trasferimento Fiumicino - Civitavecchia',
            metaDescription: 'Transfer diretto dall\'Aeroporto di Roma Fiumicino al porto di Civitavecchia. Ideale per chi parte in crociera, con monitoraggio del volo e ritiro garantito.',
            description: 'Transfer privato diretto dall\'Aeroporto di Roma Fiumicino al porto crocieristico di Civitavecchia. Ideale per i passeggeri di crociere che devono raggiungere la nave in modo rapido e affidabile, con monitoraggio del volo e ritiro garantito.',
            highlights: ['Transfer diretto aeroporto-nave', 'Monitoraggio del volo per l\'imbarco', 'Assistenza con i bagagli', 'Nessun cambio di treno', 'Prezzo fisso tutto incluso'],
            sections: [
                {
                    h2: 'Dettagli del Percorso',
                    p: [
                        'Il tragitto copre circa 70 km e richiede circa un\'ora. Il tuo autista ti aspetta nella sala arrivi di Fiumicino e ti accompagna direttamente al terminal crociere di Civitavecchia corrispondente alla tua nave.',
                    ],
                },
                {
                    h2: 'Pensato per l\'Imbarco in Crociera',
                    p: [
                        'L\'orario di imbarco conta. Comunicaci l\'orario di partenza della tua nave alla prenotazione, così il tuo autista pianifica il ritiro con un margine adeguato, tenendo conto del monitoraggio del tuo volo in caso di ritardo.',
                    ],
                },
                prenotazioneIt('Aeroporto di Roma Fiumicino', 'Civitavecchia'),
            ],
            faqs: [
                { q: 'Quanto dura il tragitto da Fiumicino a Civitavecchia?', a: 'Circa un\'ora, traffico permettendo.' },
                { q: 'L\'autista conosce l\'orario di imbarco della mia nave?', a: 'Sì, comunicalo alla prenotazione così il tuo autista pianifica un margine di sicurezza adeguato.' },
                { q: 'Cosa succede se il mio volo arriva in ritardo?', a: 'Il volo è monitorato automaticamente, quindi il ritiro si adatta al tuo orario di atterraggio reale.' },
                { q: 'C\'è assistenza per i bagagli da crociera?', a: 'Sì, il tuo autista aiuta con i bagagli sia in aeroporto che al terminal crociere.' },
            ],
            relatedLinks: [
                { href: '/it/route/trasferimento-roma-civitavecchia', label: 'Transfer Roma (centro città) - Civitavecchia' },
                { href: '/route/civitavecchia-to-rome-fiumicino-taxi', label: 'Civitavecchia to Rome Fiumicino (return leg)' },
            ],
        },
    },

    {
        slugEn: 'naples-airport-to-sorrento-taxi',
        slugIt: 'trasferimento-aeroporto-napoli-sorrento',
        from: 'Naples Airport', to: 'Sorrento',
        hero_image: '/images/almafi.webp',
        imageAlt: 'Penisola sorrentina vista dall\'alto lungo la costa',
        distance: '~50 km', duration: '~1 ora 15 min',
        it: {
            title: 'Transfer Privato da Aeroporto di Napoli a Sorrento',
            metaTitle: 'Trasferimento Aeroporto Napoli - Sorrento',
            metaDescription: 'Transfer privato dall\'Aeroporto di Napoli Capodichino (NAP) a Sorrento. Il modo più comodo per raggiungere la penisola sorrentina, evitando la Circumvesuviana affollata.',
            description: 'Transfer privato dall\'Aeroporto di Napoli Capodichino (NAP) a Sorrento. Il modo più semplice e comodo per raggiungere la penisola sorrentina, evitando la Circumvesuviana affollata con un servizio porta a porta.',
            highlights: ['Accoglienza all\'arrivo a Napoli', 'Servizio porta a porta fino al tuo hotel a Sorrento', 'Seggiolini per bambini su richiesta', 'Evita il treno affollato', 'Prezzo fisso tutto incluso'],
            sections: [
                {
                    h2: 'Dettagli del Percorso',
                    p: [
                        'Il tragitto copre circa 50 km e richiede circa 1 ora e 15 minuti via A3. Il tuo autista ti aspetta nella sala arrivi con un cartello con il tuo nome e ti accompagna direttamente al tuo hotel a Sorrento.',
                    ],
                },
                {
                    h2: 'Perché Evitare la Circumvesuviana',
                    p: [
                        'La Circumvesuviana collega Napoli a Sorrento, ma è nota per l\'affollamento, lo spazio limitato per i bagagli e il rischio di borseggio sulle carrozze più affollate. Un transfer privato elimina questi rischi con un\'unica corsa diretta e confortevole.',
                    ],
                },
                prenotazioneIt('Aeroporto di Napoli', 'Sorrento'),
            ],
            faqs: [
                { q: 'Quanto dura il transfer dall\'Aeroporto di Napoli a Sorrento?', a: 'Circa 1 ora e 15 minuti via autostrada A3, traffico permettendo.' },
                { q: 'È più sicuro della Circumvesuviana?', a: 'Molti viaggiatori lo preferiscono per lo spazio bagagli garantito e per evitare l\'affollamento e il rischio di borseggio delle carrozze più piene.' },
                { q: 'Sono disponibili seggiolini per bambini?', a: 'Sì, su richiesta al momento della prenotazione.' },
                { q: 'L\'autista monitora il mio volo?', a: 'Sì, automaticamente, così ritardi o anticipi non influiscono sul ritiro.' },
            ],
            relatedLinks: [
                { href: '/airport/naples', label: 'Guida Aeroporto di Napoli Capodichino' },
                { href: '/city/sorrento', label: 'Servizio Taxi Sorrento' },
                { href: '/it/route/trasferimento-napoli-sorrento', label: 'Transfer Napoli (città) - Sorrento' },
                { href: '/it/route/trasferimento-aeroporto-napoli-positano', label: 'Transfer Aeroporto Napoli - Positano' },
            ],
        },
    },

    {
        slugEn: 'naples-airport-to-positano-taxi',
        slugIt: 'trasferimento-aeroporto-napoli-positano',
        from: 'Naples Airport', to: 'Positano',
        hero_image: '/images/almafi.webp',
        imageAlt: 'Villaggio a picco sul mare di Positano lungo la Costiera Amalfitana',
        distance: '~60 km', duration: '~1 ora 30 min',
        it: {
            title: 'Transfer Privato da Aeroporto di Napoli a Positano',
            metaTitle: 'Trasferimento Aeroporto Napoli - Positano',
            metaDescription: 'Transfer privato dall\'Aeroporto di Napoli a Positano lungo la famosa strada della Costiera Amalfitana. Autista esperto, servizio porta a porta fino al tuo alloggio.',
            description: 'Transfer privato dall\'Aeroporto di Napoli a Positano lungo la famosa strada della Costiera Amalfitana. Lascia che un autista locale esperto affronti i tornanti mentre tu goditi il panorama, con sbarco porta a porta al tuo alloggio a Positano.',
            highlights: ['Autista esperto sulla strada costiera amalfitana', 'Servizio porta a porta fino al tuo hotel a Positano', 'Soste fotografiche su richiesta', 'Assistenza bagagli sulle scalinate', 'Prezzo fisso tutto incluso'],
            sections: [
                {
                    h2: 'Dettagli del Percorso',
                    p: [
                        'Il tragitto copre circa 60 km e richiede circa 1 ora e 30 minuti via A3 e poi la SS163 costiera. Il tuo autista ti aspetta nella sala arrivi con un cartello con il tuo nome.',
                    ],
                },
                {
                    h2: 'Un Autista che Conosce la Costa',
                    p: [
                        'La SS163 è nota per i suoi tornanti panoramici ma stretti. Un autista locale esperto rende il viaggio rilassante invece che stressante, con lo sbarco al punto più vicino al tuo alloggio — alcune proprietà a Positano richiedono una breve camminata con gradini, e il tuo autista ti aiuterà con i bagagli.',
                    ],
                },
                prenotazioneIt('Aeroporto di Napoli', 'Positano'),
            ],
            faqs: [
                { q: 'Quanto dura il transfer dall\'Aeroporto di Napoli a Positano?', a: 'Circa 1 ora e 30 minuti via A3 e SS163 costiera, più lento in alta stagione estiva.' },
                { q: 'L\'autista si ferma per foto panoramiche?', a: 'Sì, su richiesta lungo la SS163.' },
                { q: 'Come funziona lo sbarco a Positano vista la conformazione a scalinate del paese?', a: 'Il tuo autista ti lascia al punto più vicino accessibile al tuo alloggio e aiuta con i bagagli fino all\'ingresso.' },
                { q: 'Il prezzo è fisso indipendentemente dal traffico estivo?', a: 'Sì, il prezzo è concordato in anticipo e non cambia in base al traffico.' },
            ],
            relatedLinks: [
                { href: '/airport/naples', label: 'Guida Aeroporto di Napoli Capodichino' },
                { href: '/city/positano', label: 'Servizio Taxi Positano' },
                { href: '/it/route/trasferimento-aeroporto-napoli-sorrento', label: 'Transfer Aeroporto Napoli - Sorrento' },
                { href: '/it/route/trasferimento-aeroporto-napoli-amalfi', label: 'Transfer Aeroporto Napoli - Amalfi' },
            ],
        },
    },

    {
        slugEn: 'naples-airport-to-amalfi-taxi',
        slugIt: 'trasferimento-aeroporto-napoli-amalfi',
        from: 'Naples Airport', to: 'Amalfi',
        hero_image: '/images/almafi.webp',
        imageAlt: 'Cattedrale di Amalfi e porticciolo sulla Costiera Amalfitana',
        distance: '~70 km', duration: '~1 ora 45 min',
        it: {
            title: 'Transfer Privato da Aeroporto di Napoli ad Amalfi',
            metaTitle: 'Trasferimento Aeroporto Napoli - Amalfi',
            metaDescription: 'Transfer privato porta a porta dall\'Aeroporto di Napoli ad Amalfi. Percorso panoramico lungo la costa, autista professionista, possibile estensione a Ravello.',
            description: 'Transfer privato porta a porta dall\'Aeroporto di Napoli alla città di Amalfi. Percorri la strada costiera panoramica in tutta comodità con un autista professionista e arriva rilassato nel cuore della Costiera Amalfitana.',
            highlights: ['Percorso panoramico lungo la Costiera Amalfitana', 'Servizio porta a porta fino al tuo hotel ad Amalfi', 'Estensione facoltativa a Ravello', 'Seggiolini per bambini su richiesta', 'Prezzo fisso tutto incluso'],
            sections: [
                {
                    h2: 'Dettagli del Percorso',
                    p: [
                        'Il tragitto copre circa 70 km e richiede circa 1 ora e 45 minuti via A3 e SS163. Il tuo autista ti aspetta all\'arrivo con un cartello con il tuo nome e ti accompagna direttamente al tuo hotel ad Amalfi.',
                    ],
                },
                {
                    h2: 'Un\'Estensione a Ravello',
                    p: [
                        'Ravello si trova pochi minuti sopra Amalfi, in posizione panoramica. Se desideri visitarla lo stesso giorno, comunicalo alla prenotazione — il tuo autista può includere una sosta o un\'estensione del percorso.',
                    ],
                },
                prenotazioneIt('Aeroporto di Napoli', 'Amalfi'),
            ],
            faqs: [
                { q: 'Quanto dura il transfer dall\'Aeroporto di Napoli ad Amalfi?', a: 'Circa 1 ora e 45 minuti via A3 e SS163 costiera.' },
                { q: 'Posso aggiungere una tappa a Ravello?', a: 'Sì, un\'estensione a Ravello può essere organizzata lo stesso giorno — comunicalo alla prenotazione.' },
                { q: 'Sono disponibili seggiolini per bambini?', a: 'Sì, su richiesta.' },
                { q: 'Il transfer arriva fino al centro di Amalfi?', a: 'Sì, lo sbarco avviene al tuo hotel o al punto più vicino accessibile nel centro di Amalfi.' },
            ],
            relatedLinks: [
                { href: '/airport/naples', label: 'Guida Aeroporto di Napoli Capodichino' },
                { href: '/city/amalfi', label: 'Servizio Taxi Amalfi' },
                { href: '/it/route/trasferimento-aeroporto-napoli-ravello', label: 'Transfer Aeroporto Napoli - Ravello' },
                { href: '/it/route/trasferimento-aeroporto-napoli-positano', label: 'Transfer Aeroporto Napoli - Positano' },
            ],
        },
    },

    {
        slugEn: 'naples-airport-to-pompeii-taxi',
        slugIt: 'trasferimento-aeroporto-napoli-pompei',
        from: 'Naples Airport', to: 'Pompeii',
        hero_image: '/images/naples.webp',
        imageAlt: 'Ingresso degli scavi archeologici di Pompei',
        distance: '~30 km', duration: '~40 min',
        it: {
            title: 'Transfer Privato da Aeroporto di Napoli a Pompei',
            metaTitle: 'Trasferimento Aeroporto Napoli - Pompei',
            metaDescription: 'Transfer rapido dall\'Aeroporto di Napoli agli scavi di Pompei. Perfetto per una visita il giorno dell\'arrivo o della partenza, sbarco diretto vicino all\'ingresso.',
            description: 'Transfer privato rapido dall\'Aeroporto di Napoli al sito archeologico di Pompei. Perfetto per visitare le rovine il giorno dell\'arrivo o della partenza, con sbarco diretto vicino all\'ingresso.',
            highlights: ['Diretto all\'ingresso di Pompei', 'Ideale per una visita il giorno dell\'arrivo', 'Estensione facoltativa al Vesuvio', 'Bagagli custoditi durante la visita', 'Prezzo fisso tutto incluso'],
            sections: [
                {
                    h2: 'Dettagli del Percorso',
                    p: [
                        'Il tragitto copre circa 30 km e richiede circa 40 minuti — il più breve tra i transfer dall\'Aeroporto di Napoli verso la Costiera. Il tuo autista ti accompagna direttamente all\'ingresso del sito archeologico.',
                    ],
                },
                {
                    h2: 'Ideale per il Giorno dell\'Arrivo',
                    p: [
                        'Con soli 40 minuti di percorrenza, molti viaggiatori scelgono di visitare Pompei direttamente il giorno dell\'arrivo prima di raggiungere l\'alloggio finale, oppure il giorno della partenza prima del volo — il tuo autista può custodire i bagagli o proseguire dopo la visita.',
                    ],
                },
                prenotazioneIt('Aeroporto di Napoli', 'Pompei'),
            ],
            faqs: [
                { q: 'Quanto dura il transfer dall\'Aeroporto di Napoli a Pompei?', a: 'Circa 40 minuti, il più breve tra i transfer verso la Costiera.' },
                { q: 'Posso visitare Pompei il giorno del mio arrivo?', a: 'Sì, è un\'opzione molto comune vista la breve durata del tragitto.' },
                { q: 'I bagagli restano al sicuro durante la visita?', a: 'Sì, possono essere custoditi nel veicolo o l\'autista può proseguire dopo la visita, secondo accordi presi alla prenotazione.' },
                { q: 'Posso aggiungere una tappa al Vesuvio?', a: 'Sì, un\'estensione al Vesuvio può essere organizzata su richiesta.' },
            ],
            relatedLinks: [
                { href: '/airport/naples', label: 'Guida Aeroporto di Napoli Capodichino' },
                { href: '/city/naples', label: 'Servizio Taxi Napoli' },
                { href: '/it/route/trasferimento-roma-pompei', label: 'In arrivo da Roma? Transfer Roma - Pompei' },
            ],
        },
    },

    {
        slugEn: 'naples-to-sorrento-taxi',
        slugIt: 'trasferimento-napoli-sorrento',
        from: 'Naples', to: 'Sorrento',
        hero_image: '/images/almafi.webp',
        imageAlt: 'Città di Napoli con vista sulla baia verso Sorrento',
        distance: '~50 km', duration: '~1 ora 15 min',
        it: {
            title: 'Transfer Privato da Napoli a Sorrento',
            metaTitle: 'Trasferimento Napoli - Sorrento',
            metaDescription: 'Transfer privato dal centro città o dal porto di Napoli a Sorrento. Alternativa comoda porta a porta alla Circumvesuviana affollata, ideale anche per crocieristi.',
            description: 'Transfer privato dal centro città o dal porto di Napoli a Sorrento. L\'alternativa comoda e porta a porta alla Circumvesuviana affollata, ideale sia per i passeggeri di crociere sia per chi visita la città.',
            highlights: ['Servizio porta a porta Napoli - Sorrento', 'Evita il treno locale affollato', 'Ritiro disponibile al porto crocieristico', 'Seggiolini per bambini su richiesta', 'Prezzo fisso tutto incluso'],
            sections: [
                {
                    h2: 'Dettagli del Percorso',
                    p: [
                        'Il tragitto copre circa 50 km e richiede circa 1 ora e 15 minuti via A3. Il ritiro può avvenire dal tuo hotel a Napoli, da un indirizzo in città o direttamente dal terminal del porto crocieristico.',
                    ],
                },
                {
                    h2: 'Una Corsa Diretta invece della Circumvesuviana',
                    p: [
                        'La Circumvesuviana collega Napoli a Sorrento con oltre 30 fermate e spazio bagagli limitato, spesso affollata in alta stagione. Un transfer privato è un\'unica corsa diretta e confortevole, con il tuo autista che gestisce i bagagli a entrambe le estremità.',
                    ],
                },
                prenotazioneIt('Napoli', 'Sorrento'),
            ],
            faqs: [
                { q: 'Il ritiro è disponibile dal porto crocieristico di Napoli?', a: 'Sì, il ritiro può avvenire direttamente al terminal crociere — comunica il tuo punto di partenza esatto alla prenotazione.' },
                { q: 'Quanto dura il tragitto?', a: 'Circa 1 ora e 15 minuti via autostrada A3, traffico permettendo.' },
                { q: 'È più comodo della Circumvesuviana?', a: 'Sì per chi viaggia con bagagli — la Circumvesuviana ha oltre 30 fermate e spazio limitato, mentre il transfer privato è diretto.' },
                { q: 'Sono disponibili seggiolini per bambini?', a: 'Sì, su richiesta al momento della prenotazione.' },
            ],
            relatedLinks: [
                { href: '/city/naples', label: 'Servizio Taxi Napoli' },
                { href: '/city/sorrento', label: 'Servizio Taxi Sorrento' },
                { href: '/it/route/trasferimento-aeroporto-napoli-sorrento', label: 'In arrivo in aereo? Transfer Aeroporto Napoli - Sorrento' },
                { href: '/route/naples-cruise-port-to-sorrento-taxi', label: 'Naples Cruise Port to Sorrento Transfer' },
            ],
        },
    },

    {
        slugEn: 'milan-to-lake-como-taxi',
        slugIt: 'trasferimento-milano-lago-di-como',
        from: 'Milan', to: 'Lake Como',
        hero_image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&q=60&w=1200',
        imageAlt: 'Vista panoramica del Lago di Como dalle colline circostanti',
        distance: '~50 km', duration: '~45 min',
        it: {
            title: 'Transfer Privato da Milano al Lago di Como',
            metaTitle: 'Trasferimento Milano - Lago di Como',
            metaDescription: 'Taxi privato da Milano al Lago di Como. Percorso diretto dal centro città o dall\'Aeroporto di Malpensa, sbarco a Como, Bellagio o Varenna.',
            description: 'Lascia il centro di Milano e raggiungi le sponde mozzafiato del Lago di Como con il nostro taxi privato. Autisti professionisti e il percorso più diretto dal centro di Milano o dall\'Aeroporto di Malpensa.',
            highlights: ['Servizio diretto da Milano o dall\'Aeroporto di Malpensa', 'Sbarco a Como, Bellagio o Varenna', 'Prezzo trasparente su richiesta', 'Percorso panoramico lungolago', 'Cancellazione gratuita fino a 24 ore prima'],
            sections: [
                {
                    h2: 'Dettagli del Percorso',
                    p: [
                        'Il tragitto da Milano copre circa 50 km e richiede circa 45 minuti. Il tuo autista ti preleva dal tuo hotel o indirizzo a Milano e ti accompagna direttamente sulle sponde del lago, con sbarco a Como, Bellagio, Varenna o qualsiasi altra località tu preferisca.',
                    ],
                },
                {
                    h2: 'Perché Scegliere un Transfer Privato',
                    p: [
                        'Il Lago di Como non ha un unico centro — Como città, Bellagio e Varenna sono destinazioni diverse su sponde diverse, spesso difficili da raggiungere in modo diretto con i mezzi pubblici. Un transfer privato ti porta esattamente dove desideri, in un\'unica corsa.',
                    ],
                },
                prenotazioneIt('Milano', 'Lago di Como'),
            ],
            faqs: [
                { q: 'Quanto dura il trasferimento da Milano al Lago di Como?', a: 'Circa 45 minuti, traffico permettendo.' },
                { q: 'Posso scegliere lo sbarco a Bellagio o Varenna invece di Como città?', a: 'Sì, indica la tua destinazione esatta sul lago alla prenotazione.' },
                { q: 'È disponibile anche dall\'Aeroporto di Malpensa?', a: 'Sì, il Lago di Como è più vicino a Malpensa che a Milano stessa — vedi il nostro transfer diretto Malpensa - Como.' },
                { q: 'Il prezzo cambia in base alla destinazione sul lago?', a: 'Il prezzo dipende dalla distanza esatta — richiedi un preventivo indicando la tua destinazione precisa.' },
            ],
            relatedLinks: [
                { href: '/city/milan', label: 'Servizio Taxi Milano' },
                { href: '/city/como', label: 'Servizio Taxi Como' },
                { href: '/it/route/trasferimento-malpensa-como', label: 'In arrivo a Malpensa? Transfer Malpensa - Como' },
                { href: '/tour/lake-como', label: 'Tour del Lago di Como' },
            ],
        },
    },

    {
        slugEn: 'milan-malpensa-to-como-taxi',
        slugIt: 'trasferimento-malpensa-como',
        from: 'Milan Malpensa Airport', to: 'Como',
        hero_image: '/images/Lake Como.webp',
        imageAlt: 'Lungolago di Como con le montagne sullo sfondo',
        distance: '~50 km', duration: '~50 min',
        it: {
            title: 'Transfer Privato da Aeroporto di Malpensa a Como',
            metaTitle: 'Trasferimento Malpensa - Como',
            metaDescription: 'Transfer privato dall\'Aeroporto di Milano Malpensa direttamente al Lago di Como. Malpensa è più vicina al lago che a Milano — salta la città con un autista professionista.',
            description: 'Transfer privato dall\'Aeroporto di Milano Malpensa direttamente al Lago di Como. Malpensa è più vicina al lago che a Milano stessa, quindi salta la città e vai dritto a Como, Bellagio o Varenna con un autista professionista.',
            highlights: ['Diretto al lago — salta Milano', 'Sbarco a Como, Bellagio o Varenna', 'Monitoraggio del volo incluso', 'Assistenza bagagli', 'Prezzo fisso tutto incluso'],
            sections: [
                {
                    h2: 'Dettagli del Percorso',
                    p: [
                        'Il tragitto copre circa 50 km e richiede circa 50 minuti. Il tuo autista ti aspetta nella sala arrivi di Malpensa con un cartello con il tuo nome e ti accompagna direttamente sulle sponde del lago.',
                    ],
                },
                {
                    h2: 'Malpensa è Più Vicina al Lago di Milano',
                    p: [
                        'Molti visitatori non lo sanno: l\'Aeroporto di Malpensa è geograficamente più vicino al Lago di Como che al centro di Milano. Se la tua destinazione finale è il lago, non ha senso passare dalla città — il tuo autista ti porta direttamente a destinazione.',
                    ],
                },
                prenotazioneIt('Aeroporto di Malpensa', 'Como'),
            ],
            faqs: [
                { q: 'Malpensa è davvero più vicina al Lago di Como che a Milano?', a: 'Sì, geograficamente il lago è più vicino a Malpensa che al centro di Milano, rendendo questo transfer particolarmente diretto.' },
                { q: 'Posso scegliere Bellagio o Varenna invece di Como città?', a: 'Sì, indica la destinazione esatta sul lago alla prenotazione.' },
                { q: 'L\'autista monitora il mio volo?', a: 'Sì, automaticamente, così ritardi o anticipi non influiscono sul ritiro.' },
                { q: 'Quanto dura il transfer?', a: 'Circa 50 minuti, traffico permettendo.' },
            ],
            relatedLinks: [
                { href: '/city/como', label: 'Servizio Taxi Como' },
                { href: '/it/route/trasferimento-milano-lago-di-como', label: 'Partendo da Milano città? Transfer Milano - Lago di Como' },
                { href: '/it/route/trasferimento-malpensa-stresa', label: 'Transfer Malpensa - Stresa (Lago Maggiore)' },
                { href: '/tour/lake-como', label: 'Tour del Lago di Como' },
            ],
        },
    },

    {
        slugEn: 'milan-malpensa-to-stresa-taxi',
        slugIt: 'trasferimento-malpensa-stresa',
        from: 'Milan Malpensa Airport', to: 'Stresa',
        hero_image: '/images/Lake Como.webp',
        imageAlt: 'Isole Borromee viste da Stresa sul Lago Maggiore',
        distance: '~40 km', duration: '~45 min',
        it: {
            title: 'Transfer Privato da Aeroporto di Malpensa a Stresa',
            metaTitle: 'Trasferimento Malpensa - Stresa',
            metaDescription: 'Transfer privato dall\'Aeroporto di Malpensa a Stresa sul Lago Maggiore. Raggiungi rapidamente le Isole Borromee con un\'auto privata porta a porta.',
            description: 'Transfer privato dall\'Aeroporto di Milano Malpensa a Stresa, sul Lago Maggiore. Raggiungi la porta d\'accesso alle Isole Borromee in modo rapido e confortevole con un\'auto privata porta a porta.',
            highlights: ['Porta d\'accesso alle Isole Borromee', 'Transfer molto breve da Malpensa', 'Servizio porta a porta fino al tuo hotel sul lago', 'Monitoraggio del volo incluso', 'Prezzo fisso tutto incluso'],
            sections: [
                {
                    h2: 'Dettagli del Percorso',
                    p: [
                        'Il tragitto copre circa 40 km e richiede circa 45 minuti — uno dei transfer più brevi da Malpensa verso una destinazione lacustre. Il tuo autista ti aspetta all\'arrivo e ti accompagna direttamente a Stresa.',
                    ],
                },
                {
                    h2: 'La Porta d\'Accesso al Lago Maggiore',
                    p: [
                        'Stresa è il punto di partenza classico per visitare le Isole Borromee — Isola Bella, Isola dei Pescatori e Isola Madre — raggiungibili con traghetti regolari dal lungolago del paese, a pochi passi dal tuo punto di sbarco.',
                    ],
                },
                prenotazioneIt('Aeroporto di Malpensa', 'Stresa'),
            ],
            faqs: [
                { q: 'Quanto dura il transfer da Malpensa a Stresa?', a: 'Circa 45 minuti, uno dei tragitti più brevi da Malpensa verso i laghi.' },
                { q: 'Da Stresa posso raggiungere le Isole Borromee facilmente?', a: 'Sì, i traghetti partono regolarmente dal lungolago di Stresa, a pochi passi dal punto di sbarco.' },
                { q: 'L\'autista monitora il mio volo?', a: 'Sì, automaticamente.' },
                { q: 'Il prezzo è fisso?', a: 'Sì, concordato prima della partenza.' },
            ],
            relatedLinks: [
                { href: '/it/route/trasferimento-malpensa-como', label: 'Transfer Malpensa - Como (Lago di Como)' },
                { href: '/route/milan-to-stresa-taxi', label: 'Milan to Stresa Transfer' },
            ],
        },
    },

    {
        slugEn: 'milan-to-portofino-taxi',
        slugIt: 'trasferimento-milano-portofino',
        from: 'Milan', to: 'Portofino',
        hero_image: '/images/Lake Como.webp',
        imageAlt: 'Porticciolo colorato di Portofino sulla Riviera Ligure',
        distance: '~190 km', duration: '~2 ore 30 min',
        it: {
            title: 'Transfer Privato da Milano a Portofino',
            metaTitle: 'Trasferimento Milano - Portofino',
            metaDescription: 'Taxi privato da Milano al glamour borgo marinaro di Portofino. Servizio porta a porta sulla Riviera Ligure, sosta facoltativa a Santa Margherita.',
            description: 'Transfer privato da Milano al glamour borgo marinaro di Portofino. Viaggia porta a porta verso la Riviera Ligure in tutta comodità, con un autista professionista che gestisce l\'ultimo tratto panoramico costiero.',
            highlights: ['Servizio porta a porta Milano - Portofino', 'Destinazione glamour sulla Riviera', 'Sosta facoltativa a Santa Margherita', 'Tutti i pedaggi inclusi', 'Prezzo fisso tutto incluso'],
            sections: [
                {
                    h2: 'Dettagli del Percorso',
                    p: [
                        'Il tragitto copre circa 190 km e richiede circa 2 ore e 30 minuti. Il tuo autista ti preleva a Milano e ti accompagna lungo l\'autostrada verso la costa ligure, fino al porticciolo di Portofino.',
                    ],
                },
                {
                    h2: 'Una Sosta a Santa Margherita Ligure',
                    p: [
                        'Santa Margherita Ligure si trova pochi minuti prima di Portofino e offre un\'atmosfera più tranquilla della celebre baia. Una sosta può essere aggiunta al tragitto su richiesta.',
                    ],
                },
                prenotazioneIt('Milano', 'Portofino'),
            ],
            faqs: [
                { q: 'Quanto dura il trasferimento da Milano a Portofino?', a: 'Circa 2 ore e 30 minuti, traffico permettendo.' },
                { q: 'Posso fare una sosta a Santa Margherita Ligure?', a: 'Sì, una sosta può essere organizzata lungo il tragitto.' },
                { q: 'Il prezzo include i pedaggi autostradali?', a: 'Sì, tutti i pedaggi sono inclusi nel prezzo fisso.' },
                { q: 'Il transfer arriva fino al porticciolo di Portofino?', a: 'Sì, lo sbarco avviene nel punto più vicino accessibile al centro di Portofino.' },
            ],
            relatedLinks: [
                { href: '/city/milan', label: 'Servizio Taxi Milano' },
                { href: '/city/portofino', label: 'Servizio Taxi Portofino' },
                { href: '/route/genoa-airport-to-cinque-terre-taxi', label: 'Visiting the Cinque Terre too? Genoa Airport Transfer' },
            ],
        },
    },

    {
        slugEn: 'florence-to-pisa-taxi',
        slugIt: 'trasferimento-firenze-pisa',
        from: 'Florence', to: 'Pisa',
        hero_image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=60&w=1200',
        imageAlt: 'Torre pendente di Pisa in una giornata di sole',
        distance: '~80 km', duration: '~1 ora',
        it: {
            title: 'Transfer Privato da Firenze a Pisa',
            metaTitle: 'Trasferimento Firenze - Pisa',
            metaDescription: 'Viaggia da Firenze a Pisa comodamente con il nostro taxi privato. Raggiungi la Torre Pendente con un autista professionista di lingua inglese, porta a porta.',
            description: 'Viaggia da Firenze a Pisa in tutta comodità con il nostro servizio di taxi privato. Raggiungi l\'iconica Torre Pendente con un autista professionista di lingua inglese e un servizio porta a porta.',
            highlights: ['Servizio diretto porta a porta', 'Sosta alla Torre Pendente di Pisa', 'Nessun costo nascosto', 'Autista di lingua inglese', 'Cancellazione gratuita fino a 24 ore prima'],
            sections: [
                {
                    h2: 'Dettagli del Percorso',
                    p: [
                        'Il tragitto copre circa 80 km e richiede circa un\'ora lungo la FI-PI-LI. Il tuo autista ti preleva a Firenze e ti accompagna direttamente a Pisa, con possibilità di sosta a Piazza dei Miracoli per vedere la Torre Pendente.',
                    ],
                },
                {
                    h2: 'Perché Scegliere un Transfer Privato',
                    p: [
                        'Un transfer privato permette di visitare Pisa senza vincoli di orario dei treni, con la possibilità di fermarsi il tempo desiderato alla Torre Pendente prima di proseguire verso la destinazione finale, che sia l\'Aeroporto di Pisa o un\'altra tappa del viaggio.',
                    ],
                },
                prenotazioneIt('Firenze', 'Pisa'),
            ],
            faqs: [
                { q: 'Quanto dura il trasferimento da Firenze a Pisa?', a: 'Circa un\'ora lungo la superstrada FI-PI-LI, traffico permettendo.' },
                { q: 'Posso fermarmi alla Torre Pendente?', a: 'Sì, una sosta a Piazza dei Miracoli può essere inclusa nel percorso.' },
                { q: 'Il transfer arriva fino all\'Aeroporto di Pisa?', a: 'Sì, se la tua destinazione finale è l\'aeroporto, comunicalo alla prenotazione.' },
                { q: 'L\'autista parla inglese?', a: 'Sì, tutti i nostri autisti sono professionisti di lingua inglese.' },
            ],
            relatedLinks: [
                { href: '/city/florence', label: 'Servizio Taxi Firenze' },
                { href: '/it/route/trasferimento-aeroporto-pisa-firenze', label: 'Transfer Aeroporto Pisa - Firenze' },
                { href: '/it/route/trasferimento-firenze-lucca', label: 'Transfer Firenze - Lucca' },
            ],
        },
    },

    {
        slugEn: 'florence-to-siena-taxi',
        slugIt: 'trasferimento-firenze-siena',
        from: 'Florence', to: 'Siena',
        hero_image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=60&w=1200',
        imageAlt: 'Piazza del Campo a Siena vista dall\'alto',
        distance: '~70 km', duration: '~1,5 ore',
        it: {
            title: 'Transfer Privato da Firenze a Siena',
            metaTitle: 'Trasferimento Firenze - Siena',
            metaDescription: 'Scopri la Siena medievale con un taxi privato da Firenze. Attraversa la campagna del Chianti e arriva in Piazza del Campo con un autista professionista.',
            description: 'Scopri la Siena medievale con un taxi privato da Firenze. Attraversa la splendida campagna vinicola del Chianti e arriva alla suggestiva Piazza del Campo con un autista professionista.',
            highlights: ['Percorso panoramico attraverso il Chianti', 'Sbarco in Piazza del Campo', 'Opzioni per gita di un giorno disponibili', 'Autista di lingua inglese', 'Cancellazione gratuita fino a 24 ore prima'],
            sections: [
                {
                    h2: 'Dettagli del Percorso',
                    p: [
                        'Il tragitto copre circa 70 km e richiede circa un\'ora e mezza, attraversando le colline del Chianti. Il tuo autista ti accompagna direttamente a Piazza del Campo o al tuo hotel nel centro storico di Siena.',
                    ],
                },
                {
                    h2: 'Gita di un Giorno con Ritorno a Firenze',
                    p: [
                        'Molti visitatori scelgono di prenotare l\'intera giornata: l\'autista aspetta durante la visita al centro storico di Siena e riporta poi a Firenze in serata.',
                    ],
                },
                prenotazioneIt('Firenze', 'Siena'),
            ],
            faqs: [
                { q: 'Quanto dura il trasferimento da Firenze a Siena?', a: 'Circa un\'ora e mezza, attraversando la campagna del Chianti.' },
                { q: 'Posso prenotare una gita di andata e ritorno in giornata?', a: 'Sì, l\'autista può aspettare durante la visita e riportarti a Firenze.' },
                { q: 'Dove avviene lo sbarco a Siena?', a: 'A Piazza del Campo o al tuo hotel nel centro storico.' },
                { q: 'Il prezzo include eventuali soste fotografiche nel Chianti?', a: 'Sì, brevi soste possono essere incluse senza costi aggiuntivi — comunicalo alla prenotazione.' },
            ],
            relatedLinks: [
                { href: '/city/florence', label: 'Servizio Taxi Firenze' },
                { href: '/it/route/trasferimento-roma-siena', label: 'In arrivo da Roma? Transfer Roma - Siena' },
                { href: '/it/route/trasferimento-firenze-chianti', label: 'Transfer Firenze - Chianti' },
            ],
        },
    },

    {
        slugEn: 'florence-to-lucca-taxi',
        slugIt: 'trasferimento-firenze-lucca',
        from: 'Florence', to: 'Lucca',
        hero_image: '/images/Tuscany Wine.webp',
        imageAlt: 'Mura storiche della città di Lucca in Toscana',
        distance: '~80 km', duration: '~1 ora',
        it: {
            title: 'Transfer Privato da Firenze a Lucca',
            metaTitle: 'Trasferimento Firenze - Lucca',
            metaDescription: 'Transfer o gita di un giorno da Firenze alla città murata di Lucca. Servizio porta a porta con estensione facoltativa a Pisa, autista di lingua inglese.',
            description: 'Transfer privato o gita di un giorno da Firenze alla città murata di Lucca. Viaggia porta a porta verso una delle città toscane più rilassate e affascinanti, con estensione facoltativa a Pisa.',
            highlights: ['Servizio porta a porta Firenze - Lucca', 'Combinazione facoltativa con Pisa', 'L\'autista può aspettare per una gita di un giorno', 'Autista di lingua inglese', 'Prezzo fisso tutto incluso'],
            sections: [
                {
                    h2: 'Dettagli del Percorso',
                    p: [
                        'Il tragitto copre circa 80 km e richiede circa un\'ora. Il tuo autista ti accompagna direttamente all\'interno o nei pressi delle mura storiche di Lucca, a seconda dell\'indirizzo esatto.',
                    ],
                },
                {
                    h2: 'Combinabile con Pisa',
                    p: [
                        'Lucca e Pisa distano solo una ventina di minuti l\'una dall\'altra. Molti visitatori combinano le due città nello stesso giorno — comunicalo alla prenotazione per pianificare l\'itinerario con il tuo autista.',
                    ],
                },
                prenotazioneIt('Firenze', 'Lucca'),
            ],
            faqs: [
                { q: 'Quanto dura il trasferimento da Firenze a Lucca?', a: 'Circa un\'ora, traffico permettendo.' },
                { q: 'Posso combinare la visita con Pisa nello stesso giorno?', a: 'Sì, le due città distano solo circa 20 minuti — un itinerario combinato può essere organizzato.' },
                { q: 'L\'autista può aspettare mentre visito il centro di Lucca?', a: 'Sì, l\'attesa può essere inclusa nella prenotazione per una gita di andata e ritorno.' },
                { q: 'Il transfer entra all\'interno delle mura di Lucca?', a: 'Il centro storico ha limitazioni al traffico veicolare, quindi lo sbarco avviene al punto accessibile più vicino al tuo indirizzo.' },
            ],
            relatedLinks: [
                { href: '/city/florence', label: 'Servizio Taxi Firenze' },
                { href: '/it/route/trasferimento-firenze-pisa', label: 'Transfer Firenze - Pisa' },
            ],
        },
    },

    {
        slugEn: 'florence-to-chianti-wine-region-taxi',
        slugIt: 'trasferimento-firenze-chianti',
        from: 'Florence', to: 'Chianti Wine Region',
        hero_image: '/images/Tuscany Wine.webp',
        imageAlt: 'Vigneti ondulati della regione del Chianti in Toscana',
        distance: '~30–60 km', duration: '~40–60 min',
        it: {
            title: 'Transfer Privato da Firenze al Chianti',
            metaTitle: 'Trasferimento Firenze - Chianti',
            metaDescription: 'Trascorri una giornata in Chianti con un autista privato da Firenze. Prezzo fisso, itinerario flessibile tra le cantine, autista sobrio per tutto il gruppo.',
            description: 'Trascorri una giornata rilassante in Chianti con un autista privato dal tuo hotel di Firenze. Ci occupiamo noi delle strade tortuose di campagna mentre tu ti godi i vigneti e assaggi i vini a base di Sangiovese. Prezzo fisso, servizio porta a porta e un autista sobrio così tutto il gruppo può degustare liberamente in ogni tenuta.',
            highlights: ['Transfer privato porta a porta dal tuo hotel di Firenze nel cuore del Chianti Classico', 'Un autista dedicato e sobrio così ogni membro del gruppo può degustare il vino', 'Itinerario flessibile costruito intorno ai borghi e alle tenute che vuoi visitare', 'Prezzo fisso concordato, senza tassametro né sovrapprezzi a sorpresa', 'Autisti di lingua inglese e veicoli climatizzati per 1-8 ospiti', 'Accoglienza al tuo hotel con ritiro facile anche all\'interno della ZTL di Firenze'],
            sections: [
                {
                    h2: 'Dettagli del Percorso',
                    p: [
                        'Il Chianti si estende a sud di Firenze, con le tenute vinicole principali a circa 30-60 km dal centro città, raggiungibili in 40-60 minuti a seconda della zona esatta scelta. Il tuo autista ti preleva dal tuo hotel a Firenze — anche all\'interno della ZTL — e costruisce l\'itinerario della giornata intorno alle cantine che desideri visitare.',
                    ],
                },
                {
                    h2: 'Un Autista Sobrio per Tutto il Gruppo',
                    p: [
                        'Il vantaggio principale di un transfer privato per una giornata di degustazioni è semplice: il tuo autista resta sobrio, così ogni persona del gruppo può assaggiare liberamente in ogni tenuta, senza dover designare qualcuno che rinuncia al vino per guidare.',
                    ],
                },
                prenotazioneIt('Firenze', 'Chianti'),
            ],
            faqs: [
                { q: 'Quanto dura il tragitto fino al Chianti?', a: 'Circa 40-60 minuti a seconda della zona esatta, poiché il Chianti copre un\'area vasta a sud di Firenze.' },
                { q: 'Posso scegliere quali cantine visitare?', a: 'Sì, l\'itinerario è flessibile e costruito intorno alle tue preferenze — comunicale alla prenotazione o discutine con il tuo autista.' },
                { q: 'L\'autista aspetta durante le degustazioni?', a: 'Sì, l\'autista resta con te per tutta la giornata, spostandosi tra le tenute scelte.' },
                { q: 'Il ritiro è possibile anche nella ZTL di Firenze?', a: 'Sì, il ritiro in hotel all\'interno della zona a traffico limitato è gestito regolarmente dai nostri autisti.' },
            ],
            relatedLinks: [
                { href: '/city/florence', label: 'Servizio Taxi Firenze' },
                { href: '/it/route/trasferimento-firenze-siena', label: 'Transfer Firenze - Siena' },
                { href: '/it/route/trasferimento-roma-firenze', label: 'Transfer Roma - Firenze' },
            ],
        },
    },

    {
        slugEn: 'pisa-airport-to-florence-taxi',
        slugIt: 'trasferimento-aeroporto-pisa-firenze',
        from: 'Pisa Airport', to: 'Florence',
        hero_image: '/images/Tuscany Wine.webp',
        imageAlt: 'Skyline del Duomo di Firenze al tramonto',
        distance: '~85 km', duration: '~1 ora',
        it: {
            title: 'Transfer Privato da Aeroporto di Pisa a Firenze',
            metaTitle: 'Trasferimento Aeroporto Pisa - Firenze',
            metaDescription: 'Transfer privato dall\'Aeroporto di Pisa (PSA) a Firenze. Arrivo diretto al tuo hotel in meno di un\'ora, sosta facoltativa alla Torre Pendente lungo il percorso.',
            description: 'Transfer privato dall\'Aeroporto di Pisa (PSA) a Firenze. Viaggia direttamente fino al tuo hotel fiorentino in meno di un\'ora, con una sosta facoltativa alla Torre Pendente lungo il percorso.',
            highlights: ['Servizio porta a porta fino al centro di Firenze', 'Sosta facoltativa alla Torre Pendente', 'Sbarco conforme alle regole ZTL dell\'hotel', 'Monitoraggio del volo incluso', 'Prezzo fisso tutto incluso'],
            sections: [
                {
                    h2: 'Dettagli del Percorso',
                    p: [
                        'Il tragitto copre circa 85 km e richiede circa un\'ora lungo la FI-PI-LI. Il tuo autista ti aspetta all\'arrivo con un cartello con il tuo nome e ti accompagna direttamente al tuo hotel a Firenze.',
                    ],
                },
                {
                    h2: 'Una Sosta alla Torre Pendente',
                    p: [
                        'Molti viaggiatori scelgono di fermarsi a Piazza dei Miracoli prima di proseguire verso Firenze, approfittando del fatto che l\'aeroporto si trova a pochi minuti dalla Torre Pendente — comunicalo alla prenotazione.',
                    ],
                },
                prenotazioneIt('Aeroporto di Pisa', 'Firenze'),
            ],
            faqs: [
                { q: 'Quanto dura il transfer dall\'Aeroporto di Pisa a Firenze?', a: 'Circa un\'ora lungo la superstrada FI-PI-LI, traffico permettendo.' },
                { q: 'Posso fermarmi alla Torre Pendente lungo il tragitto?', a: 'Sì, una sosta a Piazza dei Miracoli può essere inclusa — comunicalo alla prenotazione.' },
                { q: 'Il transfer rispetta le regole della ZTL di Firenze?', a: 'Sì, lo sbarco avviene nel punto conforme più vicino al tuo hotel se questo si trova nella zona a traffico limitato.' },
                { q: 'L\'autista monitora il mio volo?', a: 'Sì, automaticamente, così ritardi non influiscono sul ritiro.' },
            ],
            relatedLinks: [
                { href: '/city/florence', label: 'Servizio Taxi Firenze' },
                { href: '/it/route/trasferimento-firenze-pisa', label: 'Transfer Firenze - Pisa (direzione opposta)' },
            ],
        },
    },

    {
        slugEn: 'venice-to-verona-taxi',
        slugIt: 'trasferimento-venezia-verona',
        from: 'Venice', to: 'Verona',
        hero_image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&q=60&w=1200',
        imageAlt: 'Centro storico di Verona con il fiume Adige',
        distance: '~115 km', duration: '~1,5 ore',
        it: {
            title: 'Transfer Privato da Venezia a Verona',
            metaTitle: 'Trasferimento Venezia - Verona',
            metaDescription: 'Taxi privato da Venezia a Verona, la città di Romeo e Giulietta. Ritiro da Piazzale Roma o Venezia Mestre, transfer diretto al centro storico.',
            description: 'Viaggia da Venezia a Verona in taxi privato e scopri la romantica città di Romeo e Giulietta. Un transfer comodo e diretto da Piazzale Roma o da Venezia Mestre fino al centro storico di Verona.',
            highlights: ['Diretto al centro storico di Verona', 'Ritiro da Piazzale Roma o Venezia Mestre', 'Tutti i pedaggi inclusi', 'Autista di lingua inglese', 'Cancellazione gratuita fino a 24 ore prima'],
            sections: [
                {
                    h2: 'Dettagli del Percorso',
                    p: [
                        'Il tragitto copre circa 115 km e richiede circa un\'ora e mezza. Poiché il centro storico di Venezia è privo di auto, il ritiro avviene a Piazzale Roma (l\'ultimo punto raggiungibile su ruote) o direttamente a Venezia Mestre sulla terraferma.',
                    ],
                },
                {
                    h2: 'Perché Scegliere un Transfer Privato',
                    p: [
                        'Un transfer privato ti porta direttamente al centro storico di Verona, senza i cambi di treno o gli orari fissi del trasporto pubblico, con tutto lo spazio necessario per i bagagli.',
                    ],
                },
                prenotazioneIt('Venezia', 'Verona'),
            ],
            faqs: [
                { q: 'Dove avviene il ritiro a Venezia, visto che il centro è senza auto?', a: 'A Piazzale Roma, l\'ultimo punto raggiungibile su ruote, oppure a Venezia Mestre sulla terraferma.' },
                { q: 'Quanto dura il trasferimento a Verona?', a: 'Circa un\'ora e mezza, traffico permettendo.' },
                { q: 'Il prezzo include i pedaggi autostradali?', a: 'Sì, tutti i pedaggi sono inclusi nel prezzo fisso.' },
                { q: 'Il transfer arriva fino al centro storico di Verona?', a: 'Sì, lo sbarco avviene nel punto accessibile più vicino al tuo hotel o indirizzo nel centro.' },
            ],
            relatedLinks: [
                { href: '/city/venice', label: 'Servizio Taxi Venezia' },
                { href: '/it/route/trasferimento-aeroporto-verona-lago-di-garda', label: 'Transfer Aeroporto Verona - Lago di Garda' },
                { href: '/route/milan-to-venice-taxi', label: 'Milan to Venice Transfer' },
            ],
        },
    },

    {
        slugEn: 'verona-airport-to-lake-garda-taxi',
        slugIt: 'trasferimento-aeroporto-verona-lago-di-garda',
        from: 'Verona Airport', to: 'Lake Garda',
        hero_image: '/images/Lake Como.webp',
        imageAlt: 'Sponde del Lago di Garda con le montagne sullo sfondo',
        distance: '~35 km', duration: '~40 min',
        it: {
            title: 'Transfer Privato da Aeroporto di Verona al Lago di Garda',
            metaTitle: 'Trasferimento Aeroporto Verona - Lago di Garda',
            metaDescription: 'Transfer privato dall\'Aeroporto di Verona Villafranca al Lago di Garda. Raggiungi Sirmione, Bardolino o Lazise rapidamente con un\'auto privata porta a porta.',
            description: 'Transfer privato dall\'Aeroporto di Verona Villafranca al Lago di Garda. Raggiungi Sirmione, Bardolino, Lazise o qualsiasi altro resort lacustre rapidamente con un\'auto privata porta a porta.',
            highlights: ['Aeroporto più vicino al Lago di Garda', 'Sbarco in qualsiasi resort lacustre', 'Transfer breve e agevole', 'Monitoraggio del volo incluso', 'Prezzo fisso tutto incluso'],
            sections: [
                {
                    h2: 'Dettagli del Percorso',
                    p: [
                        'Il tragitto copre circa 35 km e richiede circa 40 minuti — uno dei transfer più brevi verso una destinazione lacustre in Italia. Il tuo autista ti aspetta all\'arrivo e ti accompagna direttamente al tuo resort sul lago.',
                    ],
                },
                {
                    h2: 'L\'Aeroporto Più Vicino al Lago',
                    p: [
                        'L\'Aeroporto di Verona è geograficamente il più vicino al Lago di Garda tra gli scali del nord Italia, rendendo questo transfer particolarmente rapido rispetto a un arrivo da Milano o Venezia.',
                    ],
                },
                prenotazioneIt('Aeroporto di Verona', 'Lago di Garda'),
            ],
            faqs: [
                { q: 'Quanto dura il transfer dall\'Aeroporto di Verona al Lago di Garda?', a: 'Circa 40 minuti, uno dei tragitti più brevi verso i laghi italiani.' },
                { q: 'Posso scegliere Sirmione, Bardolino o Lazise come destinazione?', a: 'Sì, indica il resort esatto sul lago alla prenotazione.' },
                { q: 'L\'autista monitora il mio volo?', a: 'Sì, automaticamente.' },
                { q: 'È l\'aeroporto più conveniente per il Lago di Garda?', a: 'Sì, geograficamente è il più vicino tra gli scali del nord Italia.' },
            ],
            relatedLinks: [
                { href: '/it/route/trasferimento-venezia-verona', label: 'Transfer Venezia - Verona' },
                { href: '/route/venice-to-verona-taxi', label: 'Coming from Venice? Venice to Verona Transfer' },
            ],
        },
    },

    {
        slugEn: 'catania-airport-to-taormina-taxi',
        slugIt: 'trasferimento-aeroporto-catania-taormina',
        from: 'Catania Airport', to: 'Taormina',
        hero_image: '/images/beach-transfer.webp',
        imageAlt: 'Cittadina di Taormina a picco sul mare Ionio in Sicilia',
        distance: '~60 km', duration: '~1 ora',
        it: {
            title: 'Transfer Privato da Aeroporto di Catania a Taormina',
            metaTitle: 'Trasferimento Aeroporto Catania - Taormina',
            metaDescription: 'Transfer privato dall\'Aeroporto di Catania (CTA) a Taormina. Il modo più comodo per raggiungere la città più famosa della Sicilia, con vista facoltativa sull\'Etna.',
            description: 'Transfer privato dall\'Aeroporto di Catania (CTA) al resort a picco sul mare di Taormina. Il modo più rapido e confortevole per raggiungere la città più famosa della Sicilia, con servizio porta a porta e vista facoltativa sull\'Etna.',
            highlights: ['Diretto al centro di Taormina', 'Sbarco vicino alla zona pedonale', 'Estensione facoltativa all\'Etna', 'Autista siciliano di lingua inglese', 'Prezzo fisso tutto incluso'],
            sections: [
                {
                    h2: 'Dettagli del Percorso',
                    p: [
                        'Il tragitto copre circa 60 km e richiede circa un\'ora. Il tuo autista ti aspetta nella sala arrivi di Catania con un cartello con il tuo nome e ti accompagna direttamente a Taormina.',
                    ],
                },
                {
                    h2: 'Una Vista Facoltativa sull\'Etna',
                    p: [
                        'Il percorso verso Taormina costeggia le pendici dell\'Etna. Se il tempo lo permette, il tuo autista può proporre una breve sosta panoramica — comunicalo alla prenotazione se interessato.',
                    ],
                },
                prenotazioneIt('Aeroporto di Catania', 'Taormina'),
            ],
            faqs: [
                { q: 'Quanto dura il transfer dall\'Aeroporto di Catania a Taormina?', a: 'Circa un\'ora, traffico permettendo.' },
                { q: 'Dove avviene lo sbarco a Taormina?', a: 'Nel punto accessibile più vicino alla zona pedonale del centro storico.' },
                { q: 'Posso aggiungere una sosta panoramica sull\'Etna?', a: 'Sì, su richiesta e a seconda delle condizioni meteo del giorno.' },
                { q: 'L\'autista è del posto?', a: 'Sì, i nostri autisti siciliani conoscono bene il territorio e parlano inglese.' },
            ],
            relatedLinks: [
                { href: '/airport/catania-fontanarossa', label: 'Guida Aeroporto di Catania' },
                { href: '/city/taormina', label: 'Servizio Taxi Taormina' },
                { href: '/route/catania-airport-to-noto-taxi', label: 'Catania Airport to Noto Transfer' },
            ],
        },
    },

    {
        slugEn: 'bari-airport-to-alberobello-taxi',
        slugIt: 'trasferimento-aeroporto-bari-alberobello',
        from: 'Bari Airport', to: 'Alberobello',
        hero_image: '/images/beach-transfer.webp',
        imageAlt: 'Case a trullo di Alberobello in Puglia',
        distance: '~60 km', duration: '~1 ora',
        it: {
            title: 'Transfer Privato da Aeroporto di Bari ad Alberobello',
            metaTitle: 'Trasferimento Aeroporto Bari - Alberobello',
            metaDescription: 'Transfer privato dall\'Aeroporto di Bari ad Alberobello, patria dei trulli patrimonio UNESCO. Servizio porta a porta nel cuore della Valle d\'Itria.',
            description: 'Transfer privato dall\'Aeroporto di Bari ad Alberobello, patria delle case a trullo patrimonio UNESCO. Viaggia direttamente nel cuore della Valle d\'Itria con un autista professionista porta a porta.',
            highlights: ['Diretto alla città dei trulli', 'Porta d\'accesso alla Valle d\'Itria', 'Sosta facoltativa a Locorotondo', 'Autista di lingua inglese', 'Prezzo fisso tutto incluso'],
            sections: [
                {
                    h2: 'Dettagli del Percorso',
                    p: [
                        'Il tragitto copre circa 60 km e richiede circa un\'ora. Il tuo autista ti aspetta all\'arrivo con un cartello con il tuo nome e ti accompagna direttamente ad Alberobello.',
                    ],
                },
                {
                    h2: 'La Valle d\'Itria',
                    p: [
                        'Alberobello è la porta d\'accesso alla Valle d\'Itria, con borghi bianchi come Locorotondo e Cisternino nelle vicinanze. Una sosta a Locorotondo può essere aggiunta al tragitto su richiesta.',
                    ],
                },
                prenotazioneIt('Aeroporto di Bari', 'Alberobello'),
            ],
            faqs: [
                { q: 'Quanto dura il transfer dall\'Aeroporto di Bari ad Alberobello?', a: 'Circa un\'ora, traffico permettendo.' },
                { q: 'Posso aggiungere una sosta a Locorotondo?', a: 'Sì, su richiesta al momento della prenotazione.' },
                { q: 'Il transfer entra nel centro storico dei trulli?', a: 'Sì, lo sbarco avviene nel punto accessibile più vicino al centro storico.' },
                { q: 'L\'autista parla inglese?', a: 'Sì, tutti i nostri autisti sono professionisti di lingua inglese.' },
            ],
            relatedLinks: [
                { href: '/city/bari', label: 'Servizio Taxi Bari' },
                { href: '/route/bari-airport-to-polignano-a-mare-taxi', label: 'Bari Airport to Polignano a Mare Transfer' },
            ],
        },
    },

    {
        slugEn: 'rome-fiumicino-to-colosseum-taxi',
        slugIt: 'trasferimento-fiumicino-colosseo',
        from: 'Rome Fiumicino Airport', to: 'Colosseum',
        hero_image: '/images/rome airport.webp',
        imageAlt: 'Colosseo di Roma illuminato al tramonto',
        distance: '~32 km', duration: '~45–60 min',
        it: {
            title: 'Transfer Privato da Aeroporto Fiumicino al Colosseo',
            metaTitle: 'Trasferimento Fiumicino - Colosseo',
            metaDescription: 'Transfer privato dall\'Aeroporto di Roma Fiumicino al Colosseo. Accoglienza con cartello con il tuo nome, monitoraggio del volo, servizio porta a porta.',
            description: 'Atterrato a Roma Fiumicino e diretto verso il cuore antico della città? Il nostro transfer privato da Fiumicino al Colosseo ti porta direttamente dalla sala arrivi alla zona del Colosseo o al tuo hotel nelle vicinanze. Un autista professionista ti accoglie con un cartello con il tuo nome, aiuta con i bagagli e ti accompagna porta a porta a un prezzo fisso concordato.',
            highlights: ['Accoglienza personale con cartello con il tuo nome nella sala arrivi FCO', 'Monitoraggio del volo in tempo reale con attesa gratuita dopo l\'atterraggio', 'Prezzo fisso tutto incluso concordato prima del viaggio', 'Autisti professionisti di lingua inglese che conoscono Roma', 'Servizio porta a porta da Fiumicino alla zona del Colosseo', 'Disponibile 24/7 per voli mattutini, serali o in coincidenza'],
            sections: [
                {
                    h2: 'Dettagli del Percorso',
                    p: [
                        'Il tragitto copre circa 32 km e richiede circa 45-60 minuti a seconda del traffico. Il tuo autista ti aspetta nella sala arrivi con un cartello con il tuo nome, pronto a partire non appena hai ritirato i bagagli.',
                    ],
                },
                {
                    h2: 'Sbarco Vicino al Colosseo',
                    p: [
                        'La zona intorno al Colosseo è soggetta a limitazioni del traffico veicolare in alcune strade. Il tuo autista ti lascia nel punto consentito più vicino, che sia il tuo hotel o l\'area pedonale del Colosseo stesso.',
                    ],
                },
                prenotazioneIt('Aeroporto di Roma Fiumicino', 'Colosseo'),
            ],
            faqs: [
                { q: 'Dove esattamente può fermarsi l\'autista vicino al Colosseo?', a: 'Le strade immediatamente accanto al Colosseo sono pedonali e a traffico limitato, quindi il tuo autista si ferma nel punto consentito più vicino, come l\'area di Piazza del Colosseo, oppure alla porta del tuo hotel dove l\'accesso è permesso.' },
                { q: 'Quanto dura il transfer da Fiumicino al Colosseo?', a: 'Circa 45-60 minuti, traffico permettendo.' },
                { q: 'L\'autista monitora il mio volo?', a: 'Sì, automaticamente, così ritardi o anticipi non influiscono sul ritiro.' },
                { q: 'Posso richiedere una sosta fotografica lungo il percorso?', a: 'Sì, comunicalo alla prenotazione così l\'autista può pianificare i tempi.' },
            ],
            relatedLinks: [
                { href: '/city/rome', label: 'Servizio Taxi Roma' },
                { href: '/it/route/trasferimento-roma-firenze', label: 'Transfer Roma - Firenze' },
            ],
        },
    },

    {
        slugEn: 'rome-to-civitavecchia-taxi',
        slugIt: 'trasferimento-roma-civitavecchia',
        from: 'Rome', to: 'Civitavecchia Cruise Port',
        hero_image: '/images/hero.webp',
        imageAlt: 'Nave da crociera al porto di Civitavecchia vicino Roma',
        distance: '~80 km', duration: '~1 h 15 – 1 h 30 min',
        it: {
            title: 'Transfer Privato da Roma a Civitavecchia',
            metaTitle: 'Trasferimento Roma - Civitavecchia',
            metaDescription: 'Taxi privato dal centro di Roma al porto crocieristico di Civitavecchia. Ritiro in hotel, sbarco al terminal corretto, prezzo fisso, disponibile 24/7.',
            description: 'In viaggio da Roma verso il porto crocieristico di Civitavecchia? Il nostro transfer privato ti preleva dalla porta del tuo hotel e percorre i circa 80 km a nord-ovest fino al terminal corretto della tua nave. Niente bagagli da trascinare su un treno né ricerca della navetta portuale, solo un prezzo fisso, autisti di lingua inglese e tempistiche senza stress prima dell\'imbarco.',
            highlights: ['Ritiro porta a porta da qualsiasi hotel o indirizzo a Roma', 'Sbarco al terminal crocieristico esatto della tua nave a Civitavecchia', 'Prezzo fisso concordato alla prenotazione, senza costi extra a sorpresa', 'Autisti professionisti di lingua inglese', 'Disponibile 24/7, incluse le partenze molto mattutine', 'Assistenza bagagli e spazio per valigie da crociera'],
            sections: [
                {
                    h2: 'Dettagli del Percorso',
                    p: [
                        'Il tragitto copre circa 80 km e richiede circa 1 ora e 15-30 minuti. Il tuo autista ti preleva dal tuo hotel a Roma e ti accompagna direttamente al terminal crociere corrispondente alla tua nave.',
                    ],
                },
                {
                    h2: 'Pensato per l\'Orario di Imbarco',
                    p: [
                        'Comunicaci l\'orario di partenza della tua nave alla prenotazione, così il tuo autista pianifica il ritiro con un margine adeguato per l\'imbarco, senza fretta.',
                    ],
                },
                prenotazioneIt('Roma', 'Civitavecchia'),
            ],
            faqs: [
                { q: 'Quanto dura il tragitto da Roma a Civitavecchia?', a: 'Circa 1 ora e 15-30 minuti, traffico permettendo.' },
                { q: 'Il transfer arriva fino al terminal esatto della mia nave?', a: 'Sì, indica il nome della tua nave o compagnia di crociera alla prenotazione e ti accompagniamo al terminal corretto.' },
                { q: 'Sono disponibili partenze molto presto al mattino?', a: 'Sì, il servizio è disponibile 24 ore su 24, sette giorni su sette.' },
                { q: 'C\'è assistenza per i bagagli da crociera?', a: 'Sì, il tuo autista aiuta con i bagagli sia al ritiro che al terminal.' },
            ],
            relatedLinks: [
                { href: '/city/rome', label: 'Servizio Taxi Roma' },
                { href: '/it/route/trasferimento-fiumicino-civitavecchia', label: 'In arrivo in aereo? Transfer Fiumicino - Civitavecchia' },
            ],
        },
    },

    {
        slugEn: 'rome-to-amalfi-taxi',
        slugIt: 'trasferimento-roma-amalfi',
        from: 'Rome', to: 'Amalfi',
        hero_image: '/images/hero.webp',
        imageAlt: 'Costiera Amalfitana con vista sulla città di Amalfi',
        distance: '~270 km', duration: '~3 h 30 min – 4 h',
        it: {
            title: 'Transfer Privato da Roma ad Amalfi',
            metaTitle: 'Trasferimento Roma - Amalfi',
            metaDescription: 'Taxi privato da Roma ad Amalfi. Autista di lingua inglese esperto sulla SS163, servizio porta a porta fino al centro di Amalfi, prezzo fisso.',
            description: 'Viaggia da Roma ad Amalfi in tutta comodità con un transfer privato porta a porta. Copri circa 270 km in tre ore e mezza-quattro, con un autista di lingua inglese che conosce bene la tortuosa strada costiera SS163, ti preleva al tuo hotel a Roma e ti lascia vicino alla Cattedrale di Sant\'Andrea.',
            highlights: ['Prezzo fisso concordato prima della partenza, senza supplementi a sorpresa', 'Accoglienza al tuo hotel, appartamento o indirizzo a Roma', 'Autisti professionisti di lingua inglese esperti sulla SS163', 'Servizio porta a porta fino al punto più vicino consentito al lungomare di Amalfi', 'Veicoli moderni, dalle berline ai minivan, Mercedes Classe V e minibus', 'Disponibile 24/7 con assistenza bagagli e soste panoramiche facoltative'],
            sections: [
                {
                    h2: 'Dettagli del Percorso',
                    p: [
                        'Il tragitto copre circa 270 km e richiede circa 3 ore e mezza-4 ore lungo l\'A1 e poi la SS163 costiera. Il tuo autista ti preleva a Roma e ti accompagna direttamente ad Amalfi.',
                    ],
                },
                {
                    h2: 'Perché Scegliere un Transfer Privato',
                    p: [
                        'Il tragitto verso Amalfi è lungo e la strada costiera finale richiede esperienza. Un transfer privato ti risparmia i cambi di treno e autobus, con un autista che conosce bene i tornanti della SS163.',
                    ],
                },
                prenotazioneIt('Roma', 'Amalfi'),
            ],
            faqs: [
                { q: 'Quanto dura il trasferimento da Roma ad Amalfi?', a: 'Circa 3 ore e mezza-4 ore, traffico permettendo.' },
                { q: 'Il prezzo è fisso indipendentemente dalla stagione?', a: 'Sì, il prezzo è concordato prima della partenza e non cambia.' },
                { q: 'Posso fare soste panoramiche lungo la SS163?', a: 'Sì, su richiesta al momento della prenotazione.' },
                { q: 'Che tipo di veicoli sono disponibili?', a: 'Berline, minivan, Mercedes Classe V e minibus per gruppi più numerosi.' },
            ],
            relatedLinks: [
                { href: '/city/rome', label: 'Servizio Taxi Roma' },
                { href: '/city/amalfi', label: 'Servizio Taxi Amalfi' },
                { href: '/it/route/trasferimento-roma-positano', label: 'Transfer Roma - Positano' },
            ],
        },
    },

    {
        slugEn: 'rome-to-positano-taxi',
        slugIt: 'trasferimento-roma-positano',
        from: 'Rome', to: 'Positano',
        hero_image: '/images/hero.webp',
        imageAlt: 'Villaggio a picco sul mare di Positano sulla Costiera Amalfitana',
        distance: '~270 km', duration: '~3 h 30 min – 4 h',
        it: {
            title: 'Transfer Privato da Roma a Positano',
            metaTitle: 'Trasferimento Roma - Positano',
            metaDescription: 'Taxi privato da Roma a Positano. Autista di lingua inglese esperto sulla strada costiera amalfitana, servizio porta a porta, prezzo fisso.',
            description: 'Viaggia da Roma a Positano in tutta comodità con un transfer privato porta a porta. I nostri autisti di lingua inglese gestiscono per te il lungo tragitto verso sud e la tortuosa strada della Costiera Amalfitana, così puoi rilassarti e goderti il paesaggio fino a uno dei borghi a picco sul mare più belli d\'Italia.',
            highlights: ['Prezzo fisso concordato, senza costi nascosti o sovrapprezzi', 'Accoglienza al tuo hotel o indirizzo a Roma', 'Autisti professionisti di lingua inglese esperti sulla strada costiera', 'Berline moderne, minivan, Mercedes Classe V e minibus', 'Servizio porta a porta con assistenza bagagli', 'Disponibile 24/7 con prenotazione anticipata'],
            sections: [
                {
                    h2: 'Dettagli del Percorso',
                    p: [
                        'Il tragitto copre circa 270 km e richiede circa 3 ore e mezza-4 ore lungo l\'A1 e poi la SS163 costiera. Il tuo autista ti preleva a Roma e ti accompagna direttamente a Positano.',
                    ],
                },
                {
                    h2: 'Uno Sbarco Adatto alle Scalinate di Positano',
                    p: [
                        'Positano è costruita su una scogliera ripida, e alcuni alloggi richiedono una breve camminata dal punto di sbarco. Il tuo autista ti aiuta con i bagagli fino all\'ingresso più vicino accessibile.',
                    ],
                },
                prenotazioneIt('Roma', 'Positano'),
            ],
            faqs: [
                { q: 'Quanto dura il trasferimento da Roma a Positano?', a: 'Circa 3 ore e mezza-4 ore, traffico permettendo.' },
                { q: 'Il transfer arriva fino al mio hotel a Positano?', a: 'Lo sbarco avviene al punto più vicino accessibile, con assistenza dell\'autista per i bagagli sulle eventuali scalinate.' },
                { q: 'Posso fare una sosta lungo il tragitto?', a: 'Sì, soste panoramiche possono essere organizzate su richiesta.' },
                { q: 'Il prezzo include tutti i pedaggi?', a: 'Sì, il prezzo fisso tutto incluso copre pedaggi, carburante e autista.' },
            ],
            relatedLinks: [
                { href: '/city/rome', label: 'Servizio Taxi Roma' },
                { href: '/city/positano', label: 'Servizio Taxi Positano' },
                { href: '/it/route/trasferimento-roma-amalfi', label: 'Transfer Roma - Amalfi' },
                { href: '/it/route/trasferimento-roma-sorrento', label: 'Transfer Roma - Sorrento' },
            ],
        },
    },

    {
        slugEn: 'rome-to-assisi-taxi',
        slugIt: 'trasferimento-roma-assisi',
        from: 'Rome', to: 'Assisi',
        hero_image: '/images/hero.webp',
        imageAlt: 'Basilica di San Francesco ad Assisi in Umbria',
        distance: '~175 km', duration: '~2 h – 2 h 15 min',
        it: {
            title: 'Transfer Privato da Roma ad Assisi',
            metaTitle: 'Trasferimento Roma - Assisi',
            metaDescription: 'Taxi privato da Roma ad Assisi, città patrimonio UNESCO. Ideale per pellegrini e famiglie, prezzo fisso, opzione andata e ritorno con attesa dell\'autista.',
            description: 'Viaggia da Roma alla città collinare di Assisi, patrimonio UNESCO, con un transfer privato porta a porta. Copri circa 175 km in circa 2 ore, un servizio adatto a pellegrini, famiglie e piccoli gruppi che preferiscono un\'auto diretta invece dei treni con coincidenze, con prezzo fisso e autista di lingua inglese.',
            highlights: ['Servizio diretto porta a porta dal tuo hotel a Roma ad Assisi, circa 175 km in circa 2 ore', 'Prezzo fisso concordato alla prenotazione, senza sorprese sul tassametro', 'Autisti professionisti di lingua inglese disponibili 24/7', 'Opzione andata e ritorno con l\'autista che aspetta durante la visita', 'Berline comode, minivan, Mercedes Classe V e minibus per gruppi numerosi', 'Ideale per gruppi in pellegrinaggio e famiglie che evitano le coincidenze ferroviarie'],
            sections: [
                {
                    h2: 'Dettagli del Percorso',
                    p: [
                        'Il tragitto copre circa 175 km e richiede circa 2 ore-2 ore e 15 minuti. Il tuo autista ti preleva dal tuo hotel a Roma e ti accompagna direttamente ad Assisi.',
                    ],
                },
                {
                    h2: 'Andata e Ritorno in Giornata',
                    p: [
                        'Molti gruppi in pellegrinaggio scelgono di prenotare l\'intera giornata: l\'autista aspetta durante la visita alla Basilica di San Francesco e al centro storico, per poi riportare il gruppo a Roma in serata.',
                    ],
                },
                prenotazioneIt('Roma', 'Assisi'),
            ],
            faqs: [
                { q: 'Quanto dura il trasferimento da Roma ad Assisi?', a: 'Circa 2 ore-2 ore e 15 minuti, traffico permettendo.' },
                { q: 'Posso prenotare l\'andata e ritorno in giornata?', a: 'Sì, l\'autista può aspettare durante la visita e riportarti a Roma.' },
                { q: 'È adatto a gruppi in pellegrinaggio?', a: 'Sì, è una delle richieste più comuni per questo transfer, con veicoli adatti a gruppi numerosi.' },
                { q: 'Il prezzo è fisso indipendentemente dal numero di soste?', a: 'Il prezzo base è fisso; eventuali soste aggiuntive vanno concordate alla prenotazione.' },
            ],
            relatedLinks: [
                { href: '/city/rome', label: 'Servizio Taxi Roma' },
                { href: '/it/route/trasferimento-roma-siena', label: 'Transfer Roma - Siena' },
            ],
        },
    },
];
