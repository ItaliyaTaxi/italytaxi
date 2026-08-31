// Italian content for the "rich" distance-page design variant. Numeric facts
// (distance, duration, map geometry) are never duplicated here — always
// looked up from richDistancePages via slugEn, so the two languages can
// never state different figures. Editorial content is natively written for
// Italian search intent ("Quanto dista X da Y?"), not translated from the
// English copy — headings, emphasis and structure were composed fresh per
// route, following the same pattern already used in
// it-translations-existing-routes.ts / distance-pages-it-data.ts.

export interface RichSnapshotStatIt { label: string; value: string; }
export interface RichJourneyStepIt { label: string; description: string; }
export interface RichHighlightIt { title: string; description: string; }
export interface RichTransportOptionIt { mode: string; time: string; note: string; }
export interface RichPlanningTipIt { title: string; description: string; }
export interface RichFaqIt { q: string; a: string; }
export interface RichRelatedLinkIt { href: string; label: string; }

export interface RichDistancePageIt {
    slugEn: string;
    slugIt: string;
    origin: string;
    dest: string;
    journeyTypeLabel: string;
    seoTitle: string;
    metaDescription: string;
    h1: string;
    heroSubtitle: string;
    snapshot: RichSnapshotStatIt[];
    howFarIsIt: string[];
    journeySteps: RichJourneyStepIt[];
    journeyTimeNote: string[];
    understandingJourney: string[];
    highlights: RichHighlightIt[];
    transportOptions: RichTransportOptionIt[];
    transportNote: string;
    planningTips: RichPlanningTipIt[];
    ctaHeading: string;
    ctaText: string;
    ctaAnchor: string;
    routePageSlugIt?: string;
    routePageLabelIt?: string;
    faqs: RichFaqIt[];
    relatedLinks: RichRelatedLinkIt[];
}

export const richDistancePagesIt: RichDistancePageIt[] = [
    // ═══════════════════════════ ROMA → SIENA ═══════════════════════════
    {
        slugEn: 'rome-to-siena-distance',
        slugIt: 'distanza-da-roma-a-siena',
        origin: 'Roma',
        dest: 'Siena',
        journeyTypeLabel: 'Lazio → Toscana · Percorso stradale a lunga distanza',
        seoTitle: 'Distanza Roma Siena – Quanto Dista e Quanto Ci Vuole',
        metaDescription: 'Quanto dista Siena da Roma? Distanza stradale reale, tempo di percorrenza via A1 e superstrada Siena-Bettolle, con mappa del tragitto e confronto tra auto, bus e treno.',
        h1: 'Distanza da Roma a Siena',
        heroSubtitle: 'Il più lungo dei classici tragitti toscani da Roma — fuori dal Lazio, attraverso la Val di Chiana, fino alle colline del senese.',
        snapshot: [
            { label: 'Cambio di regione', value: 'Lazio → Toscana' },
            { label: 'Tipo di percorso', value: 'Lungo tragitto intercity' },
            { label: 'Strada principale', value: 'A1 poi superstrada Siena-Bettolle' },
            { label: 'Centro di destinazione', value: 'ZTL interamente pedonale' },
        ],
        howFarIsIt: [
            'Su strada, Roma e Siena distano circa 232-235 km — le due cifre su cui convergono la maggior parte degli strumenti di mappatura, a seconda del punto di riferimento esatto usato in ciascuna città. È una distanza decisamente superiore a quella in linea d\'aria, perché il percorso diretto non segue affatto una linea retta: risale l\'A1 verso nord ben oltre la direzione più diretta verso Siena, prima di piegare a ovest, dato che non esiste un\'autostrada che tagli in diagonale questo tratto dell\'Italia centrale.',
            'Il divario tra una stima generica online e il tuo viaggio reale dipende soprattutto da due fattori: da quale indirizzo di Roma parti (il centro storico rispetto, ad esempio, a un aeroporto o a un hotel dal lato di Termini cambia le cose di diversi chilometri) e dove sei effettivamente diretto a Siena — dato che le auto non possono raggiungere Piazza del Campo, la tua reale distanza porta a porta include l\'ultimo tratto a piedi da dove parcheggi.',
        ],
        journeySteps: [
            { label: 'Partenza da Roma', description: 'Il percorso si immette sull\'A1 Autostrada del Sole in direzione nord, la stessa utilizzata dal traffico verso Firenze, quindi il primo tratto può essere trafficato nelle ore di punta in uscita dalla città.' },
            { label: 'La Val di Chiana', description: 'Dopo circa due ore, l\'A1 entra nell\'ampia Val di Chiana agricola — una campagna più pianeggiante e aperta rispetto alle colline più a nord — prima che la strada verso Siena si stacchi.' },
            { label: 'Uscita Valdichiana', description: 'Si lascia l\'A1 allo svincolo Valdichiana per immettersi sulla superstrada Siena-Bettolle (parte del corridoio E78/RA3), una strada veloce a doppia carreggiata che copre il resto del tragitto verso ovest.' },
            { label: 'Arrivo a Siena', description: 'La superstrada si avvicina a Siena da sud-est; da qui l\'ultimo tratto si svolge su strade urbane ordinarie fino a uno dei parcheggi appena fuori dalle mura storiche.' },
        ],
        journeyTimeNote: [
            'L\'intervallo di tempo indicato riflette una variabilità reale, non una cifra garantita. L\'A1 in questo tratto tra Lazio e Toscana sostiene un notevole volume di traffico a lunga percorrenza, quindi le ore di punta dei giorni feriali in uscita da Roma e il traffico di rientro della domenica sera sono i momenti più a rischio di ritardo reale. I lavori in corso sono una caratteristica normale, per quanto imprevedibile, di un\'autostrada così trafficata, e i weekend estivi portano più traffico vacanziero rispetto a un viaggio infrasettimanale fuori stagione.',
        ],
        understandingJourney: [
            'Questo è il più lungo dei cinque percorsi trattati in questa pagina, e si percepisce chiaramente alla guida: per quasi due ore il tragitto è un viaggio autostradale semplice attraverso il Lazio e verso la Toscana meridionale, con il paesaggio che cambia gradualmente dalla periferia di Roma alla campagna ondulata della Val di Chiana, senza una singola transizione drammatica.',
            'Il carattere del viaggio cambia una volta lasciata l\'A1. La superstrada Siena-Bettolle è un tipo di strada genuinamente diverso — una doppia carreggiata veloce e gratuita (non un\'autostrada a pedaggio) costruita appositamente per collegare Siena alla rete nazionale senza passare per Firenze, e ti porta in un territorio più collinare e tipicamente toscano per l\'ultimo tratto prima della città.',
            'Siena stessa sorge su tre colline, e il suo impianto urbano medievale non è mai stato pensato per le automobili. Comunque si arrivi, la realtà pratica è la stessa: si parcheggia in uno dei parcheggi multipiano o presso le porte della città — Porta Ovile, Porta Laterina o il parcheggio sotterraneo Il Campo sono i più utilizzati — per poi proseguire a piedi negli ultimi minuti verso il centro storico. Piazza del Campo, la celebre piazza a conchiglia di Siena, non è raggiungibile in auto in alcun modo.',
        ],
        highlights: [
            { title: 'Un vero cambio di regione', description: 'A differenza di un breve spostamento nella stessa regione, questo tragitto attraversa dal Lazio alla Toscana, con il carattere della campagna che cambia sensibilmente intorno alla Val di Chiana.' },
            { title: 'Due tipi di strada distinti', description: 'Autostrada per la maggior parte della distanza, poi una superstrada gratuita e senza pedaggio per l\'avvicinamento finale — un\'esperienza di guida diversa da un unico tratto autostradale ininterrotto.' },
            { title: 'Un centro medievale senza auto', description: 'Il centro storico di Siena, inclusa Piazza del Campo, non ha alcun accesso veicolare — il viaggio in auto termina necessariamente con una breve camminata, qualunque sia il parcheggio scelto.' },
        ],
        transportOptions: [
            { mode: 'Transfer privato / taxi', time: '2h40-3h15', note: 'Porta a porta, senza dover cercare parcheggio vicino alle mura o gestire la navigazione su un\'autostrada che non si conosce.' },
            { mode: 'Bus diretto (FlixBus)', time: 'circa 2h30-3h', note: 'Parte da Roma Tiburtina direttamente per Siena (Piazza Gramsci), dentro le mura — su questo percorso è realmente competitivo con l\'auto.' },
            { mode: 'Treno', time: 'circa 3-4h', note: 'Richiede un cambio a Chiusi o Grosseto, e la stazione di Siena si trova sotto il centro storico — spesso più lento del bus diretto su questo specifico percorso.' },
            { mode: 'Guida autonoma', time: '2h40-3h15', note: 'Semplice in autostrada, ma bisogna considerare la camminata dal parcheggio al centro storico una volta arrivati.' },
        ],
        transportNote: 'Da notare: su questo percorso specifico, il bus diretto è spesso più rapido del treno per arrivare in città, dato che il treno richiede un cambio e la linea ferroviaria di Siena arriva dall\'esterno delle mura antiche — l\'opposto di quanto avviene su collegamenti ferroviari più diretti altrove in Toscana.',
        planningTips: [
            { title: 'Conferma il punto di ritiro a Roma', description: 'Un hotel vicino a Termini e uno vicino all\'aeroporto di Fiumicino aggiungono quantità di tempo molto diverse su un viaggio di oltre 230 km — vale la pena confermarlo prima di fissare un orario di partenza.' },
            { title: 'Prevedi l\'ultima camminata verso Siena', description: 'Ovunque tu venga lasciato o parcheggi, Piazza del Campo è comunque a pochi minuti a piedi — considera qualche minuto in più se hai bagagli.' },
            { title: 'Evita se possibile il traffico di punta in uscita da Roma', description: 'Partire fuori dalle ore di punta dei giorni feriali riduce la parte meno prevedibile di un viaggio altrimenti scorrevole in autostrada.' },
        ],
        ctaHeading: 'Stai organizzando questo viaggio?',
        ctaText: 'Se preferisci evitare la navigazione autostradale e la camminata dal parcheggio, il nostro transfer privato Roma-Siena copre l\'intero percorso porta a porta.',
        ctaAnchor: 'Scopri il transfer Roma-Siena',
        routePageSlugIt: 'trasferimento-roma-siena',
        routePageLabelIt: 'Transfer Privato Roma - Siena',
        faqs: [
            { q: 'Quanto dista Siena da Roma su strada?', a: 'Circa 232-235 km su strada, via autostrada A1 e superstrada Siena-Bettolle — decisamente più della distanza in linea d\'aria, poiché nessuna strada collega direttamente le due città.' },
            { q: 'Quanto ci vuole in auto da Roma a Siena?', a: 'In genere 2 ore e 40 minuti - 3 ore e 15 minuti in condizioni normali, con il tratto sull\'A1 che copre la maggior parte di questo tempo prima della superstrada gratuita verso Siena.' },
            { q: 'La distanza totale può variare in base al punto di ritiro a Roma?', a: 'Sì — un ritiro vicino all\'aeroporto di Fiumicino o dal lato opposto di Roma rispetto all\'A1 può aggiungere diversi chilometri rispetto a una partenza dal centro, dato che il primo tratto del viaggio si svolge interamente nell\'area di Roma.' },
            { q: 'Un transfer privato è utile per chi viaggia con bagagli?', a: 'Sì, in particolare su questo percorso — il centro storico di Siena non ha accesso veicolare, quindi un transfer privato che conosce i parcheggi più vicini al tuo alloggio ti evita di doverlo capire da solo all\'arrivo.' },
            { q: 'È più veloce il treno o il bus da Roma a Siena?', a: 'Su questo percorso specifico, il bus diretto è spesso più rapido del treno per arrivare in città, dato che il treno richiede un cambio a Chiusi o Grosseto e la stazione di Siena si trova fuori dalle mura antiche.' },
        ],
        relatedLinks: [
            { href: '/it/route/trasferimento-roma-siena', label: 'Transfer Privato Roma - Siena' },
            { href: '/it/distance/distanza-da-roma-a-firenze', label: 'Distanza da Roma a Firenze' },
            { href: '/it/distance/distanza-da-firenze-a-siena', label: 'Distanza da Firenze a Siena' },
        ],
    },

    // ═══════════════════════════ FIRENZE → BOLOGNA ═══════════════════════════
    {
        slugEn: 'florence-to-bologna-distance',
        slugIt: 'distanza-da-firenze-a-bologna',
        origin: 'Firenze',
        dest: 'Bologna',
        journeyTypeLabel: 'Grande percorso città-città · Attraversamento appenninico',
        seoTitle: 'Quanto Dista Bologna da Firenze? Distanza e Tempi',
        metaDescription: 'Quanto dista Bologna da Firenze? Distanza stradale attraverso l\'Appennino sull\'A1, mappata e confrontata con il celebre collegamento ferroviario ad alta velocità.',
        h1: 'Distanza da Firenze a Bologna',
        heroSubtitle: 'Due grandi città separate dagli Appennini — un percorso dove l\'opzione più veloce non è l\'automobile.',
        snapshot: [
            { label: 'Tipo di percorso', value: 'Città-città (entrambe importanti)' },
            { label: 'Strada principale', value: 'A1 Autostrada del Sole' },
            { label: 'Territorio', value: 'Attraversamento degli Appennini' },
            { label: 'Opzione più veloce', value: 'Il treno — non l\'auto' },
        ],
        howFarIsIt: [
            'Le fonti per questo percorso variano più della media: le cifre sulla distanza in auto vanno da circa 102 km fino a 115 km a seconda dello strumento e dei punti di riferimento esatti, in gran parte perché sia "Firenze" sia "Bologna" coprono un ragionevole ventaglio di possibili punti di riferimento nel centro città, e perché l\'esatto tracciato dell\'A1 tra le montagne fa sì che piccole differenze di percorso si sommino sulla distanza.',
            'La distanza in linea d\'aria tra le due è un po\' più breve, dato che l\'A1 non segue affatto una linea retta — piega per seguire il terreno appenninico, attraversando una lunga sequenza di gallerie e viadotti anziché tagliare direttamente verso nord. Questo è uno dei percorsi in cui la differenza tra la distanza "in linea d\'aria" e quella "su strada" è genuinamente spiegata dalle montagne di mezzo, non da un percorso urbano indiretto.',
        ],
        journeySteps: [
            { label: 'Partenza da Firenze', description: 'L\'A1 inizia sul lato settentrionale della città e sale quasi subito verso le colline pedemontane appenniniche.' },
            { label: 'L\'attraversamento della montagna', description: 'Questo è il tratto caratterizzante del percorso: l\'autostrada alterna gallerie e viadotti sopraelevati attraverso l\'Appennino, inclusa la galleria Firenze-Sud, una delle più lunghe di tutta l\'A1.' },
            { label: 'Discesa verso la pianura', description: 'A nord delle montagne la strada scende nell\'avvicinamento pianeggiante della Pianura Padana verso Bologna, dove il terreno — e la guida — diventano sensibilmente più semplici.' },
            { label: 'Arrivo a Bologna', description: 'L\'A1 si collega al sistema di tangenziali di Bologna sul lato meridionale della città, con l\'ultimo tratto su strade urbane ordinarie fino al centro.' },
        ],
        journeyTimeNote: [
            'Poiché gran parte di questo percorso attraversa gallerie di montagna e viadotti, il meteo e gli incidenti di traffico qui possono avere un effetto sproporzionato sul tempo di viaggio rispetto a una distanza equivalente su autostrada piatta e aperta — un rallentamento o una chiusura nel tratto montano non ha vie alternative. Anche il regolare traffico pendolare e merci tra due grandi città rende le ore di punta dei giorni feriali sensibilmente più trafficate di una guida a metà giornata fuori orario.',
        ],
        understandingJourney: [
            'Questo percorso si legge diversamente dagli altri in questa pagina perché entrambe le estremità sono grandi città, non una città e un piccolo borgo toscano — Firenze e Bologna sono capoluoghi regionali con propri aeroporti, università e snodi di trasporto, e la strada che le collega è di conseguenza un\'infrastruttura seria, non una tranquilla strada di campagna.',
            'L\'attraversamento appenninico è il fulcro di questo tragitto. Costruire un\'autostrada in questo tratto di montagne ha richiesto una quantità straordinaria di gallerie e opere di ingegneria, e l\'esperienza di guida lo riflette: lunghe gallerie, viadotti elevati, e una strada che non corre mai davvero in piano fino a raggiungere la pianura a nord delle montagne, vicino a Bologna.',
            'Ciò che rende questo percorso davvero particolare, però, è il confronto tra i mezzi di trasporto. La linea ferroviaria ad alta velocità tra Firenze e Bologna attraversa le stesse montagne tramite un sistema di gallerie dedicato, e i treni più veloci coprono la distanza in circa 35 minuti — nettamente più rapido dei circa 90 minuti di guida. Per un percorso tra due grandi città ben collegate, qui il treno non è semplicemente un\'alternativa all\'auto, è chiaramente l\'opzione più rapida per chi non ha specifico bisogno di un veicolo all\'arrivo.',
        ],
        highlights: [
            { title: 'Un vero attraversamento di montagna', description: 'L\'A1 in questo tratto è una delle sezioni autostradali italiane con la maggiore componente ingegneristica, con un\'estesa sequenza di gallerie e viadotti attraverso l\'Appennino.' },
            { title: 'Due grandi città ben collegate', description: 'A differenza di un percorso di campagna, entrambe le estremità dispongono di infrastrutture urbane complete — è un percorso tra snodi di trasporto, non da uno snodo a un borgo.' },
            { title: 'Un\'alternativa ferroviaria davvero più veloce', description: 'I circa 35 minuti del treno alta velocità sono un vantaggio insolitamente netto per questo tipo di confronto — la maggior parte dei percorsi su questo sito non ha un\'opzione ferroviaria così superiore alla guida.' },
        ],
        transportOptions: [
            { mode: 'Treno alta velocità', time: 'circa 35 minuti', note: 'L\'opzione di riferimento su questo percorso — nessuna fermata, attraverso una galleria appenninica dedicata.' },
            { mode: 'Guida / transfer privato', time: '1h25-1h45', note: 'Sensato se serve un veicolo a Bologna, o se si viaggia con bagagli e si preferisce un tragitto porta a porta anziché un arrivo in stazione.' },
            { mode: 'Treno regionale', time: 'Più lungo del servizio alta velocità', note: 'Ferma più frequentemente; il servizio alta velocità resta l\'opzione ferroviaria più rapida.' },
        ],
        transportNote: 'Data la netta differenza di velocità del treno rispetto alla guida su questo percorso, la scelta pratica di solito dipende dal fatto che serva o meno un\'auto a Bologna — per un semplice viaggio città-città, il treno è difficile da battere in termini di tempo.',
        planningTips: [
            { title: 'Valuta se ti serve davvero un\'auto a Bologna', description: 'Dato il vantaggio di velocità del treno, conviene decidere in anticipo se avere un veicolo a destinazione sia effettivamente necessario per i tuoi programmi.' },
            { title: 'Controlla il traffico nelle ore di punta dei feriali', description: 'Trattandosi di un percorso tra due grandi città lavorative, il traffico nelle ore di punta a entrambe le estremità è un fattore più rilevante che su un tranquillo percorso di campagna.' },
            { title: 'Prevedi un margine extra nel tratto di montagna', description: 'Poiché un tratto esteso attraversa gallerie con possibilità limitate di sorpasso o percorsi alternativi, considera un piccolo margine di tempo se i tuoi piani successivi sono legati a un orario preciso.' },
        ],
        ctaHeading: 'Ti serve un\'auto per questa tappa del viaggio?',
        ctaText: 'Quando avere un veicolo a Bologna conta più della pura velocità, il nostro transfer privato Firenze-Bologna copre il tragitto in auto porta a porta.',
        ctaAnchor: 'Vedi il transfer Firenze-Bologna',
        routePageSlugIt: undefined,
        routePageLabelIt: undefined,
        faqs: [
            { q: 'Quanto dista Bologna da Firenze?', a: 'Su strada, circa 102-115 km a seconda del percorso esatto e dei punti di riferimento usati — l\'intervallo riflette una variazione reale tra gli strumenti di mappatura su questa particolare coppia di città.' },
            { q: 'Quanto ci vuole in auto?', a: 'In genere 1 ora e 25 minuti - 1 ora e 45 minuti, determinato in gran parte dall\'attraversamento appenninico, che l\'A1 affronta tramite un\'estesa serie di gallerie e viadotti.' },
            { q: 'È più veloce guidare o prendere il treno?', a: 'No — questo è uno dei percorsi in cui il treno è chiaramente più veloce. Il servizio alta velocità copre la distanza in circa 35 minuti attraverso una galleria di montagna dedicata, ben al di sotto della metà del tempo tipico in auto.' },
            { q: 'Il traffico influisce sul tempo di viaggio?', a: 'Sì, in particolare nelle ore di punta dei giorni feriali intorno a entrambe le città, e all\'interno del tratto in galleria, dove le possibilità di percorso alternativo in caso di rallentamento sono limitate.' },
            { q: 'Perché l\'intervallo di distanza in auto è così ampio per questo percorso?', a: 'Perché "Firenze" e "Bologna" coprono ciascuna un ventaglio di punti di riferimento plausibili nel centro città, e piccole differenze si sommano su un percorso che attraversa un territorio montuoso anziché una strada diretta e pianeggiante.' },
        ],
        relatedLinks: [
            { href: '/it/route/trasferimento-firenze-pisa', label: 'Transfer Privato Firenze - Pisa' },
            { href: '/it/distance/distanza-dallaeroporto-di-pisa-a-firenze', label: 'Distanza Aeroporto di Pisa - Firenze' },
            { href: '/it/distance/distanza-da-firenze-a-lucca', label: 'Distanza da Firenze a Lucca' },
        ],
    },

    // ═══════════════════════════ FIRENZE → LUCCA ═══════════════════════════
    {
        slugEn: 'florence-to-lucca-distance',
        slugIt: 'distanza-da-firenze-a-lucca',
        origin: 'Firenze',
        dest: 'Lucca',
        journeyTypeLabel: 'Toscana ovest · Arrivo in città murata',
        seoTitle: 'Distanza Firenze Lucca – Km e Accesso alla ZTL',
        metaDescription: 'Quanto dista Lucca da Firenze? Distanza stradale reale via A11, tempo di percorrenza e cosa sapere sulla ZTL 24 ore su 24 di Lucca prima di arrivare in auto.',
        h1: 'Distanza da Firenze a Lucca',
        heroSubtitle: 'Verso ovest, attraverso la Toscana, fino a una delle città murate meglio conservate della regione — dove il viaggio in auto termina alle mura, non alla porta.',
        snapshot: [
            { label: 'Tipo di percorso', value: 'Toscana ovest, autostrada diretta' },
            { label: 'Strada principale', value: 'A11 Firenze-Mare' },
            { label: 'Destinazione', value: 'Città murata rinascimentale' },
            { label: 'Nota sull\'accesso', value: 'ZTL 24 ore su 24 dentro le mura' },
        ],
        howFarIsIt: [
            'La distanza stradale da Firenze a Lucca è di circa 75-80 km, quasi interamente sull\'autostrada A11 — un rapporto più diretto tra distanza in linea d\'aria e distanza su strada rispetto ad altri percorsi di questa pagina, dato che il corridoio dell\'A11 procede verso ovest in modo abbastanza efficiente senza deviazioni importanti.',
            'La principale fonte di variazione riguarda meno la strada in sé e più il punto esatto di partenza e arrivo in ciascuna città. Una partenza dal centro di Firenze e una destinazione appena fuori le mura di Lucca si collocano verso l\'estremità inferiore di questo intervallo; partire dalla periferia di Firenze o dover raggiungere un indirizzo specifico che richiede di girare intorno alle mura una volta arrivati può aggiungere qualche chilometro e qualche minuto in più.',
        ],
        journeySteps: [
            { label: 'Partenza da Firenze', description: 'L\'A11 (Autostrada Firenze-Mare) inizia sul lato occidentale della città e punta direttamente verso la costa.' },
            { label: 'Attraversamento della Toscana occidentale', description: 'L\'autostrada attraversa il paesaggio più pianeggiante della valle dell\'Arno a ovest di Firenze, passando vicino a Prato, Pistoia e Montecatini prima che il territorio si apra verso Lucca.' },
            { label: 'Avvicinamento a Lucca', description: 'L\'uscita autostradale porta su strade ordinarie per l\'avvicinamento finale, con le caratteristiche mura rinascimentali di Lucca visibili ben prima di raggiungerle.' },
            { label: 'Arrivo alle mura', description: 'L\'accesso veicolare termina alle mura stesse — il centro storico all\'interno è sottoposto a una zona a traffico limitato attiva 24 ore su 24, quindi il viaggio in auto si conclude in un parcheggio appena fuori.' },
        ],
        journeyTimeNote: [
            'Questo è un tragitto più breve e prevedibile rispetto ad altri percorsi trattati qui, ma non è immune da ritardi — il traffico intorno alle tangenziali di Firenze all\'inizio del viaggio, e intorno alle strade di accesso a Lucca durante l\'alta stagione turistica, sono i due punti più probabili in cui aggiungere tempo a un tragitto altrimenti scorrevole in autostrada.',
        ],
        understandingJourney: [
            'Dove il percorso Roma-Siena è definito dalla sua lunghezza e quello Firenze-Bologna dall\'attraversamento montano, questo viaggio è definito da ciò che accade proprio alla fine: Lucca è una delle poche città italiane ad aver conservato intatto l\'intero circuito delle proprie mura rinascimentali, e la città ha costruito le sue moderne regole di circolazione direttamente intorno a questo fatto.',
            'Il tragitto in sé, al contrario, è semplice — quasi tutta la distanza si percorre su un\'unica autostrada, l\'A11, che corre verso ovest da Firenze attraverso il paesaggio più pianeggiante della valle dell\'Arno, senza le salite collinari dei percorsi verso Siena o Montepulciano.',
            'La cosa davvero utile da sapere prima di arrivare è il sistema di accesso di Lucca. Il centro storico all\'interno delle mura applica una Zona a Traffico Limitato (ZTL) attiva 24 ore su 24, controllata da telecamere per la lettura targhe a ogni porta — non esiste un sistema di permessi con adesivo, quindi se il tuo alloggio è dentro le mura, l\'hotel deve registrare in anticipo la tua targa. Per la maggior parte dei visitatori che arrivano senza questa disposizione, le mura stesse diventano il naturale punto di arrivo del viaggio, con il centro compatto e prevalentemente pianeggiante facilmente esplorabile a piedi o, come fanno molti abitanti del luogo, in bicicletta lungo la sommità dei bastioni.',
        ],
        highlights: [
            { title: 'Un tragitto diretto, su un\'unica autostrada', description: 'Quasi tutto il percorso si svolge sull\'A11, senza l\'attraversamento montano o i cambi di strada multipli che caratterizzano altri viaggi di questa pagina.' },
            { title: 'Un circuito completo di mura cittadine', description: 'Le fortificazioni rinascimentali di Lucca sono sopravvissute intatte e circondano completamente il centro storico — un fatto raro tra le città italiane di queste dimensioni.' },
            { title: 'Una zona di accesso verificata, attiva 24 ore su 24', description: 'La ZTL qui è attiva tutto il giorno con controllo tramite telecamere a ogni porta, non solo durante le ore diurne come in alcuni altri centri storici.' },
        ],
        transportOptions: [
            { mode: 'Transfer privato / taxi', time: '55min-1h15', note: 'Ti lascia alle mura senza dover fare ricerche autonome su parcheggi o sistema ZTL.' },
            { mode: 'Treno diretto', time: 'Genuinamente competitivo', note: 'Firenze e Lucca si trovano sulla stessa linea ferroviaria regionale con servizi diretti — un\'alternativa realistica alla guida su questo percorso specifico.' },
            { mode: 'Guida autonoma', time: '55min-1h15', note: 'Semplice sull\'A11, ma bisognerà comunque parcheggiare fuori dalle mura — verifica se il tuo hotel è dentro la ZTL prima di partire.' },
        ],
        transportNote: 'A differenza di alcuni percorsi più orientati alla campagna in questa pagina, Lucca si trova direttamente su una linea ferroviaria regionale da Firenze, quindi qui il treno è un\'alternativa genuinamente pratica e diretta — non solo un\'opzione teorica che richiede più cambi.',
        planningTips: [
            { title: 'Verifica se il tuo hotel è dentro le mura', description: 'Se lo è, chiedi in anticipo come registrare la targa per la ZTL — di solito è una procedura rapida, ma deve avvenire prima di passare una porta in auto, non dopo.' },
            { title: 'Prevedi di parcheggiare e proseguire a piedi', description: 'Comunque tu arrivi, esplorare il centro di Lucca avviene a piedi o in bicicletta — la città murata non è davvero una destinazione da percorrere in auto una volta dentro.' },
            { title: 'Gita di un giorno o pernottamento funzionano entrambi bene', description: 'A meno di un\'ora e mezza da Firenze, questa è una facile gita di un giorno, ma il ritmo rilassato di Lucca la rende anche una valida tappa per una notte, se l\'itinerario lo consente.' },
        ],
        ctaHeading: 'Vuoi evitare di doverti informare sulla ZTL?',
        ctaText: 'Un transfer privato per Lucca si occupa per te della discesa fuori dalle mura — scopri il nostro transfer taxi Firenze-Lucca.',
        ctaAnchor: 'Esplora il transfer Firenze-Lucca',
        routePageSlugIt: 'trasferimento-firenze-lucca',
        routePageLabelIt: 'Transfer Privato Firenze - Lucca',
        faqs: [
            { q: 'Quanto dista Lucca da Firenze?', a: 'Circa 75-80 km su strada, quasi interamente lungo l\'autostrada A11 in direzione ovest da Firenze verso la costa.' },
            { q: 'Quanto ci vuole per il tragitto in auto?', a: 'In genere 55 minuti - 1 ora e 15 minuti in condizioni di traffico normali, il che rende questo uno dei percorsi più prevedibili di questa pagina.' },
            { q: 'Qual è la differenza tra auto e treno su questo percorso?', a: 'Entrambe sono opzioni realmente pratiche — Lucca si trova direttamente su una linea ferroviaria regionale da Firenze, quindi, a differenza di alcuni percorsi di campagna, il treno è un\'alternativa reale alla guida, non un ripiego con più cambi.' },
            { q: 'Posso entrare in auto nel centro storico di Lucca?', a: 'No — l\'area dentro le mura rinascimentali di Lucca applica una zona a traffico limitato attiva 24 ore su 24, controllata da telecamere per la lettura targhe a ogni porta. I visitatori senza targa registrata parcheggiano fuori dalle mura e proseguono a piedi.' },
            { q: 'Lucca è una buona gita di un giorno da Firenze?', a: 'Sì — a meno di un\'ora e mezza di distanza, con un tragitto semplice su un\'unica autostrada, è una delle gite toscane più comode da Firenze.' },
        ],
        relatedLinks: [
            { href: '/it/route/trasferimento-firenze-lucca', label: 'Transfer Privato Firenze - Lucca' },
            { href: '/it/distance/distanza-dallaeroporto-di-pisa-a-lucca', label: 'Distanza Aeroporto di Pisa - Lucca' },
            { href: '/it/distance/distanza-da-firenze-a-bologna', label: 'Distanza da Firenze a Bologna' },
        ],
    },

    // ═══════════════════════════ FIRENZE → SAN GIMIGNANO ═══════════════════════════
    {
        slugEn: 'florence-to-san-gimignano-distance',
        slugIt: 'distanza-da-firenze-a-san-gimignano',
        origin: 'Firenze',
        dest: 'San Gimignano',
        journeyTypeLabel: 'Campagna toscana · Borgo medievale collinare',
        seoTitle: 'Quanto Dista San Gimignano da Firenze? Km e Tempi',
        metaDescription: 'Quanto dista San Gimignano da Firenze? Distanza stradale via superstrada Firenze-Siena e Poggibonsi, tempo di guida reale e consigli per organizzare la gita.',
        h1: 'Distanza da Firenze a San Gimignano',
        heroSubtitle: 'Un tragitto più breve nella campagna toscana rispetto alle grandi città della regione — con arrivo in un borgo collinare di torri medievali.',
        snapshot: [
            { label: 'Tipo di percorso', value: 'Campagna toscana, tratto breve' },
            { label: 'Strada principale', value: 'Superstrada Firenze-Siena + strade locali' },
            { label: 'Destinazione', value: 'Borgo medievale in collina' },
            { label: 'Adatto per', value: 'Mezza giornata o giornata intera' },
        ],
        howFarIsIt: [
            'Questo è uno dei tragitti più brevi trattati in questa pagina — circa 55-60 km su strada, all\'incirca due terzi della distanza del percorso Firenze-Bologna pur partendo dalla stessa città. Questa distanza relativamente breve e diretta è uno dei motivi per cui San Gimignano funziona bene come gita di mezza giornata, senza richiedere un\'intera giornata come alcuni borghi collinari toscani più lontani.',
            'La variabile principale che incide sulla tua distanza reale è l\'ultimo tratto: dopo aver lasciato la veloce superstrada vicino a Poggibonsi, il percorso prosegue su strade secondarie fino a San Gimignano stessa, e il punto esatto della città verso cui sei diretto — le mura, un\'area di parcheggio specifica, o un hotel appena fuori — incide in modo modesto sul totale.',
        ],
        journeySteps: [
            { label: 'Partenza da Firenze', description: 'Il percorso inizia brevemente sull\'A1 prima di passare sulla superstrada Firenze-Siena (la stessa strada veloce usata per l\'ultimo tratto del percorso Roma-Siena), in direzione sud-ovest.' },
            { label: 'Verso Poggibonsi', description: 'La superstrada copre la maggior parte della distanza in modo efficiente, attraversando una campagna toscana aperta anziché un tessuto urbano denso.' },
            { label: 'Uscita a Poggibonsi Nord', description: 'Lasciando qui la superstrada, il percorso prosegue su strade secondarie per l\'ultimo tratto — decisamente più lento rispetto alla strada percorsa finora, ma anche il punto in cui il paesaggio diventa più distintamente toscano.' },
            { label: 'Arrivo a San Gimignano', description: 'Le celebri torri della città diventano visibili da una certa distanza tra le colline circostanti, prima che la strada raggiunga le aree di parcheggio appena fuori dalle mura.' },
        ],
        journeyTimeNote: [
            'Poiché una parte significativa di questo percorso si svolge su strade secondarie anziché interamente in autostrada, il tempo di guida è un po\' più sensibile all\'orario e alla stagione rispetto a un percorso interamente autostradale — le strade di accesso a San Gimignano possono essere sensibilmente più trafficate nell\'alta stagione estiva, quando la città è una meta molto richiesta per gite di un giorno.',
        ],
        understandingJourney: [
            'San Gimignano è il più breve e il più genuinamente "di campagna" tra i percorsi toscani trattati in questa pagina. A differenza del tragitto verso Bologna, non c\'è alcun attraversamento montano, e a differenza del più lungo viaggio verso Montepulciano, l\'intero tragitto si copre comodamente in poco più di un\'ora — un percorso pensato per una gita mirata di un giorno, non per un viaggio più lungo con pernottamento in mente.',
            'La strada stessa cambia carattere a metà percorso. Il primo tratto, sulla superstrada Firenze-Siena, è veloce ed efficiente — la stessa strada, peraltro, che copre parte del percorso Roma-Siena su questo sito. Ma San Gimignano non si trova su quel corridoio principale; si lascia la superstrada a Poggibonsi e si conclude il viaggio su strade più piccole tra le colline, il punto in cui il tragitto inizia anche a somigliare a una vera guida in campagna.',
            'Ciò che rende San Gimignano stessa così particolare è il suo profilo: un gruppo di torri medievali in pietra, originariamente costruite da famiglie nobili rivali come dimostrazione di ricchezza e prestigio, che ancora domina la città a distanza. Come la maggior parte dei borghi toscani, il centro storico applica una zona a traffico limitato con parcheggi dedicati ai visitatori appena fuori dalle mura, e l\'intera città è abbastanza compatta da esplorare interamente a piedi una volta arrivati.',
        ],
        highlights: [
            { title: 'Il tragitto toscano più breve di questa pagina', description: 'Con circa 55-60 km, questo è un percorso sensibilmente più breve rispetto a Bologna, Lucca o Montepulciano — adatto a una visita di mezza giornata.' },
            { title: 'Un vero cambio di carattere della strada', description: 'Superstrada veloce per la maggior parte della distanza, poi un passaggio a strade di campagna più piccole per l\'avvicinamento finale — una sensazione diversa da un\'unica autostrada ininterrotta.' },
            { title: 'Un profilo unico in tutta la Toscana', description: 'Le torri medievali sopravvissute di San Gimignano sono visibili dalle strade di accesso ben prima di raggiungere la città stessa.' },
        ],
        transportOptions: [
            { mode: 'Transfer privato / taxi', time: '53min-1h10', note: 'Servizio diretto porta-parcheggio, utile dato che San Gimignano non ha una propria stazione ferroviaria.' },
            { mode: 'Bus via Poggibonsi', time: 'circa 2 ore', note: 'Un\'opzione di trasporto pubblico reale, ma con un cambio a Poggibonsi e un tempo totale di viaggio decisamente superiore alla guida.' },
            { mode: 'Guida autonoma', time: '53min-1h10', note: 'Semplice, anche se l\'ultimo tratto su strade locali richiede di considerare un po\' di tempo in più rispetto a una stima puramente autostradale.' },
        ],
        transportNote: 'San Gimignano non ha una stazione ferroviaria, quindi il trasporto pubblico qui significa un bus con cambio a Poggibonsi — un\'opzione valida per una giornata rilassata, ma che richiede circa il doppio del tempo rispetto alla guida.',
        planningTips: [
            { title: 'Questo tragitto si adatta sia a mezza giornata sia a una giornata intera', description: 'Data la distanza più breve, San Gimignano può essere combinata con un\'altra tappa vicina, come Siena o la zona del Chianti, in un\'unica giornata più lunga da Firenze.' },
            { title: 'Aspettati che l\'ultimo tratto sia più lento', description: 'Le strade secondarie dopo Poggibonsi fanno parte del fascino, ma non sono veloci — considera questo aspetto per qualsiasi programma con tempi stretti.' },
            { title: 'La folla estiva incide anche sull\'accesso, non solo sul centro città', description: 'San Gimignano è una meta molto richiesta in alta stagione, e questo può significare strade locali più trafficate e parcheggi più pieni, non solo un centro città più affollato.' },
        ],
        ctaHeading: 'Stai organizzando una gita di un giorno?',
        ctaText: 'Evita il cambio di strada a Poggibonsi e vai porta a porta con il nostro transfer privato Firenze-San Gimignano.',
        ctaAnchor: 'Verifica le opzioni per Firenze-San Gimignano',
        routePageSlugIt: undefined,
        routePageLabelIt: undefined,
        faqs: [
            { q: 'Quanto dista San Gimignano da Firenze?', a: 'Circa 55-60 km su strada — uno dei percorsi toscani più brevi di questo sito, via superstrada Firenze-Siena e strade locali attraverso Poggibonsi.' },
            { q: 'Quanto dura il tragitto stradale?', a: 'In genere 53 minuti - 1 ora e 10 minuti, con l\'ultimo tratto dopo Poggibonsi su strade secondarie anziché sulla più veloce superstrada.' },
            { q: 'San Gimignano è adatta a una gita di un giorno da Firenze?', a: 'Sì — a meno di un\'ora e un quarto di distanza, è comodamente gestibile come gita di mezza giornata o giornata intera, e la sua breve distanza la rende facile da combinare con un\'altra tappa vicina.' },
            { q: 'Esiste un treno per San Gimignano?', a: 'No — San Gimignano non ha una stazione ferroviaria. L\'opzione di trasporto pubblico è un bus via Poggibonsi, che richiede circa due ore in totale, decisamente più della guida.' },
            { q: 'Posso entrare in auto nel centro storico di San Gimignano?', a: 'No — come la maggior parte dei borghi collinari toscani, il centro storico è una zona a traffico limitato con parcheggi dedicati ai visitatori appena fuori dalle mura; la città si esplora a piedi.' },
        ],
        relatedLinks: [
            { href: '/it/distance/distanza-da-firenze-a-siena', label: 'Distanza da Firenze a Siena' },
            { href: '/it/route/trasferimento-roma-siena', label: 'Transfer Privato Roma - Siena' },
            { href: '/it/distance/distanza-da-firenze-a-montepulciano', label: 'Distanza da Firenze a Montepulciano' },
        ],
    },

    // ═══════════════════════════ FIRENZE → MONTEPULCIANO ═══════════════════════════
    {
        slugEn: 'florence-to-montepulciano-distance',
        slugIt: 'distanza-da-firenze-a-montepulciano',
        origin: 'Firenze',
        dest: 'Montepulciano',
        journeyTypeLabel: 'Toscana del sud · Campagna della Val d\'Orcia',
        seoTitle: 'Distanza Firenze Montepulciano – Il Viaggio in Val d\'Orcia',
        metaDescription: 'Quanto dista Montepulciano da Firenze? Distanza stradale, tempo di guida attraverso la campagna della Val d\'Orcia e cosa sapere prima di arrivare in questo borgo collinare.',
        h1: 'Distanza da Firenze a Montepulciano',
        heroSubtitle: 'Il più lungo dei percorsi di campagna toscani da Firenze in questa pagina — un viaggio che termina con una vera salita verso le colline.',
        snapshot: [
            { label: 'Tipo di percorso', value: 'Campagna della Toscana del sud' },
            { label: 'Carattere del percorso', value: 'Paesaggio della Val d\'Orcia' },
            { label: 'Destinazione', value: 'Borgo collinare, salita finale' },
            { label: 'Adatto per', value: 'Giornata intera o pernottamento' },
        ],
        howFarIsIt: [
            'Con circa 110-115 km, questo è il più lungo dei quattro percorsi di campagna toscani trattati in questa pagina — sensibilmente più distante di San Gimignano o Lucca, e vicino, come distanza, al percorso Firenze-Bologna, anche se il carattere del viaggio è completamente diverso.',
            'Poiché l\'avvicinamento finale a Montepulciano comporta strade locali che salgono verso le colline anziché una singola uscita autostradale, la distanza esatta dipende più del solito da dove si trova effettivamente la destinazione all\'interno della città — la differenza tra i parcheggi più bassi e un punto specifico vicino a Piazza Grande, in cima, è un tratto aggiuntivo reale, per quanto breve.',
        ],
        journeySteps: [
            { label: 'Partenza da Firenze', description: 'Il viaggio si dirige verso sud, in linea di massima verso la Val d\'Orcia, senza seguire un\'unica autostrada dedicata per tutto il tragitto.' },
            { label: 'Nella Val d\'Orcia', description: 'Il percorso attraversa questo paesaggio patrimonio UNESCO fatto di colline ondulate, strade fiancheggiate da cipressi e case coloniche — ampiamente considerato uno dei tratti più scenografici di guida in campagna in Toscana.' },
            { label: 'Via San Quirico d\'Orcia', description: 'Il percorso prosegue sulla SP146, una nota strada panoramica che serve anche la vicina Pienza prima di svoltare verso Montepulciano.' },
            { label: 'La salita verso Montepulciano', description: 'L\'avvicinamento finale è davvero in salita — Montepulciano sorge su un lungo crinale, e l\'ultimo tratto verso la città comporta una vera ascesa anziché un arrivo pianeggiante.' },
        ],
        journeyTimeNote: [
            'Il tempo di guida su questo percorso è determinato da più del solo traffico: una parte significativa si svolge su strade locali e provinciali attraverso la campagna collinare anziché in autostrada, quindi il ritmo è naturalmente più lento di quanto suggerirebbe la distanza in linea retta — e questo prima ancora di considerare variabili tipiche come il traffico dei giorni feriali vicino a Firenze o la congestione stagionale sulle strade molto frequentate della Val d\'Orcia in estate.',
        ],
        understandingJourney: [
            'Dei quattro viaggi di campagna toscani in questa pagina, questo è sia il più lungo sia quello che lascia più completamente la rete autostradale. Dove il percorso verso San Gimignano usa una superstrada veloce per la maggior parte della distanza, il tragitto verso Montepulciano trascorre una quota molto più ampia del viaggio sul tipo di strade per cui la Val d\'Orcia è realmente famosa — più strette, più lente, fiancheggiate dai cipressi e dalle colline ondulate che compaiono in tante fotografie della campagna toscana.',
            'Non è un percorso da affrontare di corsa. La SP146 attraverso San Quirico d\'Orcia verso Pienza e Montepulciano è una strada genuinamente panoramica di per sé, non solo un modo per coprire distanza, e molti viaggiatori considerano il tragitto stesso parte della destinazione, non solo il mezzo per raggiungerla.',
            'Anche l\'arrivo a Montepulciano è diverso dagli altri borghi collinari di questa pagina. La città sorge lungo uno stretto crinale a un\'altitudine reale, e l\'ultimo tratto verso il centro storico è una salita evidente — un avvicinamento a piedi più lungo e più ripido dai parcheggi esterni rispetto a San Gimignano, che si trova su una collina relativamente più dolce. Come per gli altri centri storici trattati in questa pagina, l\'accesso veicolare dentro le mura è riservato a residenti e permessi, con parcheggi dedicati ai visitatori (da P1 a P8) appena fuori.',
        ],
        highlights: [
            { title: 'Il percorso di campagna più lungo da Firenze qui trattato', description: 'Con 110-115 km, questo copre una distanza sensibilmente maggiore rispetto agli altri percorsi verso borghi collinari toscani di questa pagina.' },
            { title: 'Un viaggio attraverso la Val d\'Orcia stessa', description: 'Una quota consistente del tragitto attraversa direttamente questo paesaggio patrimonio mondiale UNESCO, non solo ai suoi margini.' },
            { title: 'Una vera salita collinare all\'arrivo', description: 'La posizione di Montepulciano su un lungo crinale rende l\'avvicinamento finale a piedi più ripido e più lungo rispetto ad alcuni altri borghi collinari toscani.' },
        ],
        transportOptions: [
            { mode: 'Transfer privato / taxi', time: '1h35-2h15', note: 'Particolarmente utile qui, dato quanto del percorso si svolge su strade locali più lente anziché in autostrada — non serve orientarsi da soli tra le strade di campagna della Val d\'Orcia.' },
            { mode: 'Guida autonoma', time: '1h35-2h15', note: 'Una scelta popolare proprio perché il tragitto in sé è panoramico — ma aspettati un ritmo decisamente diverso da un percorso basato su autostrada.' },
            { mode: 'Trasporto pubblico', time: 'Più cambi, decisamente più lungo', note: 'Montepulciano non è su una linea ferroviaria diretta da Firenze; raggiungerla senza auto comporta in genere un treno più un bus di collegamento, con un\'aggiunta di tempo significativa.' },
        ],
        transportNote: 'Questo è uno dei percorsi meno pratici di questa pagina per il trasporto pubblico — senza una linea ferroviaria diretta per Montepulciano, guidare o un transfer privato sono la scelta realistica per la maggior parte dei viaggiatori, non semplicemente un\'opzione tra tante ugualmente valide.',
        planningTips: [
            { title: 'Considera questa come una gita più lunga, o pianifica di pernottare', description: 'Dato il tempo di guida in entrambe le direzioni, questo percorso si adatta sia a una giornata intera dedicata al viaggio sia a un pernottamento a Montepulciano o nei dintorni.' },
            { title: 'Conferma esattamente dove in città devi arrivare', description: 'Poiché l\'avvicinamento finale è una vera salita, sapere se la destinazione è vicina ai parcheggi più bassi o su, verso Piazza Grande, incide su quanto cammino (o quale opzione di parcheggio) ha senso.' },
            { title: 'Considera la Val d\'Orcia come parte del viaggio, non solo transito', description: 'Molti viaggiatori inseriscono una sosta lungo la SP146 — il paesaggio in questo tratto è un motivo genuino per scegliere proprio questa strada anziché il percorso più veloce possibile.' },
        ],
        ctaHeading: 'Preferisci lasciare la guida a qualcun altro?',
        ctaText: 'Un transfer privato copre l\'intero percorso — inclusa la salita verso il centro — scopri il nostro transfer taxi Firenze-Montepulciano.',
        ctaAnchor: 'Vedi il transfer Firenze-Montepulciano',
        routePageSlugIt: undefined,
        routePageLabelIt: undefined,
        faqs: [
            { q: 'Quanto dista Montepulciano da Firenze?', a: 'Circa 110-115 km su strada — il più lungo dei quattro percorsi di campagna toscani trattati su questo sito, che si svolge in gran parte attraverso la Val d\'Orcia.' },
            { q: 'Quanto ci vuole per guidare?', a: 'In genere 1 ora e 35 minuti - 2 ore e 15 minuti, dato che una parte sostanziale del percorso si svolge su strade locali e provinciali anziché in autostrada.' },
            { q: 'La destinazione finale all\'interno di Montepulciano influisce sul viaggio?', a: 'Sì, più che in altri borghi collinari — Montepulciano sorge lungo un crinale, quindi se sei diretto ai parcheggi più bassi o su, vicino a Piazza Grande, fa una reale differenza sull\'ultimo tratto, che è una vera salita.' },
            { q: 'Esiste un treno diretto da Firenze a Montepulciano?', a: 'No — Montepulciano non è su una linea ferroviaria diretta da Firenze. Raggiungerla con i mezzi pubblici comporta in genere un treno più un bus di collegamento, con un\'aggiunta di tempo considerevole rispetto alla guida.' },
            { q: 'Vale la pena il tragitto in sé, o è solo un modo per arrivarci?', a: 'Il percorso attraversa la Val d\'Orcia, un paesaggio patrimonio UNESCO considerato tra i più scenografici della campagna toscana — molti viaggiatori considerano il tragitto parte dell\'esperienza, non semplice tempo di transito.' },
        ],
        relatedLinks: [
            { href: '/it/distance/distanza-da-firenze-a-san-gimignano', label: 'Distanza da Firenze a San Gimignano' },
            { href: '/it/distance/distanza-da-firenze-a-siena', label: 'Distanza da Firenze a Siena' },
            { href: '/it/route/trasferimento-roma-siena', label: 'Transfer Privato Roma - Siena' },
        ],
    },

    // ═══════════════════════════ MILANO → PORTOFINO ═══════════════════════════
    {
        slugEn: 'milan-to-portofino-distance',
        slugIt: 'distanza-da-milano-a-portofino',
        origin: 'Milano',
        dest: 'Portofino',
        journeyTypeLabel: 'Lombardia → Liguria · Autostrada verso la Riviera',
        seoTitle: 'Distanza Milano Portofino – Km, Percorso e Tempi',
        metaDescription: 'Quanto dista Portofino da Milano? Distanza stradale reale via autostrada A7 e A12 verso la Riviera Ligure, con mappa del percorso e confronto con treno e bus.',
        h1: 'Distanza da Milano a Portofino',
        heroSubtitle: 'Verso sud dalla capitale economica della Lombardia fino a un borgo marinaro senza auto sulla Riviera Ligure — un tragitto autostradale che termina a piedi.',
        snapshot: [
            { label: 'Cambio di regione', value: 'Lombardia → Liguria' },
            { label: 'Tipo di percorso', value: 'Lungo tragitto autostradale' },
            { label: 'Strade principali', value: 'A7, poi A12 Autostrada dei Fiori' },
            { label: 'Accesso alla destinazione', value: 'Borgo senza auto — si parcheggia fuori' },
        ],
        howFarIsIt: [
            'Su strada, Milano e Portofino distano circa 170-175 km — un tragitto genuinamente lungo, non certo un salto rapido. La maggior parte delle fonti converge su questo intervallo, anche se la cifra esatta varia leggermente a seconda del punto di partenza preciso a Milano e di quale dei parcheggi di Portofino si considera come punto di arrivo, dato che il borgo stesso non ha una strada carrozzabile che lo attraversi.',
            'Questo dettaglio conta più qui che sulla maggior parte degli altri percorsi di questo sito: la piazzetta del porticciolo di Portofino non è mai stata aperta al traffico veicolare generico, quindi la tua distanza reale porta a porta include una camminata da uno dei parcheggi a pagamento sull\'accesso al borgo, non una guida diretta fino al lungomare.',
        ],
        journeySteps: [
            { label: 'Partenza da Milano', description: 'Il percorso si immette sull\'autostrada A7 in direzione sud, lo stesso corridoio usato per il traffico verso Genova e la costa ligure.' },
            { label: 'L\'A7 verso Genova', description: 'L\'A7 copre la maggior parte della distanza — circa 130 km — attraversando la Lombardia e il Piemonte verso sud prima di scendere verso il raccordo autostradale di Genova.' },
            { label: 'Sull\'A12 Autostrada dei Fiori', description: 'A Genova, il percorso si immette sull\'A12, un\'autostrada costiera nota per l\'alta concentrazione di gallerie e viadotti mentre corre lungo le scogliere liguri, fino all\'uscita di Rapallo.' },
            { label: 'L\'ultimo tratto', description: 'Dall\'uscita di Rapallo, una strada locale di circa 15 minuti attraversa Santa Margherita Ligure fino a Portofino, terminando in uno dei parcheggi a pagamento appena fuori dal porticciolo — il centro storico del borgo è chiuso alle auto.' },
        ],
        journeyTimeNote: [
            'Questo percorso attraversa alcuni dei corridoi autostradali più trafficati del nord Italia, quindi i tempi contano. I weekend estivi e i periodi di vacanza portano un traffico significativo verso la Riviera sull\'A12, e il nodo autostradale di Genova — dove convergono diverse arterie principali — è un punto di congestione ricorrente indipendentemente dalla stagione.',
        ],
        understandingJourney: [
            'Questo è il più lungo tra i percorsi trattati su questo sito, e si percepisce chiaramente alla guida — la prima ora e mezza è un semplice tragitto autostradale verso sud attraverso Lombardia e Piemonte sull\'A7, ben prima che compaia qualsiasi accenno di costa.',
            'Il carattere cambia a Genova, dove il percorso si immette sull\'A12 Autostrada dei Fiori. Questo tratto è un\'autentica opera di ingegneria stradale, costruita in un territorio dove le montagne incontrano il mare quasi senza terreno pianeggiante — lunghe gallerie si alternano a viadotti sospesi sull\'acqua, uno dei tratti autostradali più spettacolari d\'Italia.',
            'Portofino stessa è il premio finale, ed è anche il motivo per cui questo viaggio non può concludersi in un normale punto di sbarco. La celebre piazzetta del borgo, circondata da case color pastello e ormeggi per yacht, non ha spazio né autorizzazione per il traffico di passaggio — ogni visitatore, che arrivi in auto, bus o barca, copre l\'ultimo tratto a piedi.',
        ],
        highlights: [
            { title: 'Due autostrade distinte, due guide diverse', description: 'Il tragitto verso l\'interno dell\'A7 fino a Genova e il tratto costiero dell\'A12, ricco di gallerie, verso Rapallo sono esperienze di guida genuinamente diverse all\'interno dello stesso viaggio.' },
            { title: 'Un accesso attraverso Santa Margherita Ligure', description: 'L\'ultimo tratto attraversa direttamente questa elegante località balneare, che molti visitatori combinano con Portofino nella stessa giornata.' },
            { title: 'Un borgo marinaro che si raggiunge sempre a piedi', description: 'Nessun mezzo di trasporto — auto, bus o barca — raggiunge direttamente la piazzetta di Portofino; la camminata finale fa parte dell\'arrivo, non un inconveniente esclusivo di chi guida.' },
        ],
        transportOptions: [
            { mode: 'Transfer privato / taxi', time: '2h15-2h40', note: 'Porta a porta fino al limite di Portofino, senza dover affrontare il nodo di Genova o cercare parcheggio.' },
            { mode: 'Treno + treno regionale + bus', time: 'Circa 2,5-3 ore in totale', note: 'Milano Centrale-Genova Piazza Principe richiede circa 1h30-1h47 con servizi orari, poi un treno regionale prosegue lungo la costa fino alla stazione di Santa Margherita Ligure-Portofino, seguito dal bus 82 fino al borgo (circa 13 minuti, ogni 30 minuti).' },
            { mode: 'Guida autonoma', time: '2h15-2h40', note: 'Semplice in autostrada, ma prevedi tempo extra per il traffico della Riviera nei weekend estivi e per la ricerca di parcheggio vicino al borgo.' },
        ],
        transportNote: 'Non esiste una scorciatoia per l\'ultimo tratto verso Portofino — ogni opzione, incluso un transfer privato, termina con una camminata da un parcheggio o da una fermata bus fino alla piazzetta.',
        planningTips: [
            { title: 'Conferma quale parcheggio di Portofino stai considerando', description: 'Diversi parcheggi a pagamento servono il borgo da strade di accesso differenti — saperlo in anticipo evita di girare a vuoto nei periodi di maggiore affluenza.' },
            { title: 'Valuta una sosta a Santa Margherita Ligure', description: 'Dato che il percorso attraversa direttamente questa località balneare, molti visitatori la considerano una tappa naturale anziché un viaggio separato.' },
            { title: 'Evita se possibile i pomeriggi dei weekend estivi sull\'A12', description: 'Questo tratto di autostrada costiera è tra i più congestionati della Liguria in alta stagione — una partenza a metà mattina o nei giorni feriali è generalmente molto più scorrevole.' },
        ],
        ctaHeading: 'Stai organizzando questo viaggio da Milano?',
        ctaText: 'Un transfer privato copre l\'intero percorso, incluso il nodo di Genova e la camminata finale — scopri il nostro transfer Milano-Portofino.',
        ctaAnchor: 'Scopri il transfer Milano-Portofino',
        routePageSlugIt: 'trasferimento-milano-portofino',
        routePageLabelIt: 'Transfer Privato Milano - Portofino',
        faqs: [
            { q: 'Quanto dista Portofino da Milano?', a: 'Circa 170-175 km su strada, via autostrada A7 fino a Genova e poi A12 Autostrada dei Fiori verso Rapallo.' },
            { q: 'Quanto ci vuole in auto?', a: 'In genere 2 ore e 15 minuti - 2 ore e 40 minuti in condizioni normali, di più nei weekend estivi quando cresce il traffico verso la Riviera sull\'A12.' },
            { q: 'Posso guidare direttamente fino al borgo di Portofino?', a: 'No — la storica piazzetta non ha strade carrozzabili. Ogni visitatore parcheggia in uno dei parcheggi sull\'accesso e percorre a piedi l\'ultimo tratto.' },
            { q: 'Il treno è un\'alternativa realistica alla guida?', a: 'Funziona, ma richiede un cambio — treno da Milano a Genova, poi un ulteriore servizio regionale fino alla stazione di Santa Margherita Ligure-Portofino, quindi il bus 82 fino al borgo. Il viaggio completo richiede in genere circa 2,5-3 ore.' },
            { q: 'Vale la pena fermarsi a Santa Margherita Ligure lungo il tragitto?', a: 'Molti visitatori lo fanno, dato che la strada di accesso a Portofino attraversa direttamente questa località balneare — è una tappa naturale più che una deviazione.' },
        ],
        relatedLinks: [
            { href: '/it/route/trasferimento-milano-portofino', label: 'Transfer Privato Milano - Portofino' },
            { href: '/it/distance/distanza-da-milano-a-stresa', label: 'Distanza da Milano a Stresa' },
        ],
    },

    // ═══════════════════════════ MILANO → STRESA ═══════════════════════════
    {
        slugEn: 'milan-to-stresa-distance',
        slugIt: 'distanza-da-milano-a-stresa',
        origin: 'Milano',
        dest: 'Stresa',
        journeyTypeLabel: 'Lombardia → Piemonte · Accesso al Lago Maggiore',
        seoTitle: 'Quanto Dista Stresa da Milano? Km e Tempi di Percorrenza',
        metaDescription: 'Quanto dista Stresa da Milano? Distanza stradale reale via autostrada A8 e A26 verso il Lago Maggiore, con mappa del percorso, pedaggi e confronto col treno.',
        h1: 'Distanza da Milano a Stresa',
        heroSubtitle: 'Un breve tragitto a nord-ovest da Milano fino al lungolago in stile belle époque di Stresa, porta d\'accesso alle Isole Borromee.',
        snapshot: [
            { label: 'Cambio di regione', value: 'Lombardia → Piemonte' },
            { label: 'Tipo di percorso', value: 'Tragitto autostradale breve e diretto' },
            { label: 'Strade principali', value: 'A8, poi A26' },
            { label: 'Pedaggi', value: 'Circa €5-14' },
        ],
        howFarIsIt: [
            'Milano e Stresa sono vicine rispetto agli standard di questo sito — circa 90 km su strada, uno dei tragitti più brevi qui trattati. Il percorso si svolge quasi interamente in autostrada, quindi, a differenza di alcuni percorsi più lunghi o rurali, la distanza pratica non varia molto in base al punto esatto di ritiro a Milano.',
            'Questo è un percorso genuinamente diretto: verso nord-ovest fuori città sull\'A8, poi un breve tratto dell\'A26 per raggiungere la riva del lago, senza quel tipo di finale su strade locali che aggiunge incertezza ad altri tragitti di questo sito.',
        ],
        journeySteps: [
            { label: 'Partenza da Milano', description: 'Il percorso si immette sull\'autostrada A8, con indicazioni per Laghi-Sesto Calende-Varese, in direzione nord-ovest fuori città.' },
            { label: 'Sull\'A26', description: 'L\'A8 si collega all\'autostrada A26, con indicazioni per Gravellona Toce, che prosegue verso nord in direzione dei laghi.' },
            { label: 'Uscita a Carpugnino', description: 'Il percorso lascia l\'A26 all\'uscita di Carpugnino, da cui la segnaletica locale porta direttamente a Stresa.' },
            { label: 'Arrivo sul lungolago', description: 'Un breve tratto finale raggiunge il lungolago di Stresa, con i suoi alberghi storici e gli imbarcaderi per le Isole Borromee.' },
        ],
        journeyTimeNote: [
            'Dato che questo percorso è quasi interamente autostradale, il tempo di viaggio è relativamente prevedibile rispetto a tragitti che terminano su strade locali. Le variabili principali sono il traffico ordinario nell\'area di Milano all\'inizio del viaggio e il traffico estivo dei weekend nella zona dei laghi, quando Stresa attira visitatori giornalieri da tutto il nord Italia.',
        ],
        understandingJourney: [
            'Questo è uno dei tragitti più compatti di questo sito — meno di un\'ora e mezza in condizioni normali — e il percorso lo riflette: quasi tutta la distanza si svolge su due autostrade collegate, l\'A8 e l\'A26, senza i tratti tortuosi su strade locali che caratterizzano alcuni dei percorsi più lunghi o rurali qui trattati.',
            'Il tratto sull\'A26 in particolare è un\'autostrada veloce e moderna costruita per servire la zona dei laghi, e il passaggio dalla periferia urbana di Milano alle montagne che incorniciano il Lago Maggiore avviene relativamente in fretta una volta imboccata.',
            'Stresa stessa è una località di villeggiatura lacustre fin dall\'Ottocento, e i suoi grandi alberghi in stile belle époque lungo il lungolago riflettono questa storia. È il principale punto di partenza per le barche verso le Isole Borromee — Isola Bella, Isola Madre e Isola dei Pescatori — che si trovano appena al largo del lago.',
        ],
        highlights: [
            { title: 'Uno dei tragitti più brevi e diretti di questo sito', description: 'Con circa 90 km su due autostrade collegate, questo è un viaggio decisamente più compatto rispetto ai percorsi trans-regionali verso la Liguria o la Campania.' },
            { title: 'Una località di villeggiatura storica, non un borgo', description: 'A differenza di alcune destinazioni lacustri o collinari più piccole, Stresa ha un lungolago completo, alberghi e un\'infrastruttura turistica attiva tutto l\'anno fin dall\'Ottocento.' },
            { title: 'La porta d\'accesso alle Isole Borromee', description: 'Gli imbarcaderi di Stresa sono il principale punto di partenza per le isole del Lago Maggiore, un dettaglio che spiega perché molti viaggiatori affrontano proprio questo tragitto.' },
        ],
        transportOptions: [
            { mode: 'Transfer privato / taxi', time: '1h15-1h30', note: 'Porta a porta fino al lungolago, utile se si prosegue direttamente verso l\'imbarco di una barca.' },
            { mode: 'Treno diretto', time: 'A partire da circa 1 ora sui servizi più veloci', note: 'Trenitalia e Trenord gestiscono treni diretti da Milano Centrale (e Porta Garibaldi) circa ogni ora sulla storica linea del Sempione; i tempi variano in base al tipo di servizio.' },
            { mode: 'Guida autonoma', time: '1h15-1h30', note: 'Un tragitto autostradale semplice via A8 e A26; i pedaggi si aggirano intorno a €5-14 a seconda della categoria del veicolo.' },
        ],
        transportNote: 'Questo è uno dei pochi percorsi di questo sito dove il treno diretto è un\'alternativa genuinamente valida alla guida — Stresa si trova direttamente su una storica linea principale da Milano, senza bisogno di cambi.',
        planningTips: [
            { title: 'Controlla gli orari delle barche prima di partire', description: 'Se l\'obiettivo sono le Isole Borromee, calibrare l\'arrivo a Stresa sugli orari dei traghetti evita attese all\'imbarcadero.' },
            { title: 'I giorni feriali sono nettamente più tranquilli', description: 'Stresa è una meta popolare per gite di un giorno da Milano, quindi i weekend estivi portano più traffico sulle strade di accesso e più affollamento sul lungolago e agli imbarcaderi.' },
            { title: 'Vale la pena confrontare seriamente il treno', description: 'Data la linea diretta e la frequenza pressoché oraria, conviene valutare il treno rispetto alla guida proprio su questo percorso, a differenza di altri dove il trasporto pubblico resta un\'opzione secondaria.' },
        ],
        ctaHeading: 'Diretto al Lago Maggiore da Milano?',
        ctaText: 'Un transfer privato ti porta fino al lungolago senza autostrada né camminate dal parcheggio — scopri il nostro transfer Milano-Stresa.',
        ctaAnchor: 'Scopri il transfer Milano-Stresa',
        routePageSlugIt: undefined,
        routePageLabelIt: undefined,
        faqs: [
            { q: 'Quanto dista Stresa da Milano?', a: 'Circa 90 km su strada, via autostrada A8 e A26 — uno dei tragitti più brevi trattati su questo sito.' },
            { q: 'Quanto ci vuole in auto?', a: 'In genere 1 ora e 15 minuti - 1 ora e 30 minuti in condizioni normali, con pedaggi di circa €5-14 a seconda della categoria del veicolo.' },
            { q: 'Il treno è una buona alternativa alla guida?', a: 'Sì — Stresa si trova direttamente su una storica linea principale da Milano, con servizi diretti circa ogni ora e senza bisogno di cambi, rendendola una delle alternative ferroviarie più valide tra i percorsi di questo sito.' },
            { q: 'Stresa ha una propria stazione ferroviaria?', a: 'Sì, una stazione storica sulla linea del Sempino che collega Milano alla Svizzera, a pochi passi dal lungolago e dagli imbarcaderi.' },
            { q: 'Perché si viaggia proprio da Milano a Stresa?', a: 'Stresa è il principale punto di partenza per le barche verso le Isole Borromee nel Lago Maggiore, che è il motivo principale di questo specifico tragitto.' },
        ],
        relatedLinks: [
            { href: '/it/distance/distanza-da-milano-a-portofino', label: 'Distanza da Milano a Portofino' },
        ],
    },

    // ═══════════════════════════ NAPOLI → SORRENTO ═══════════════════════════
    {
        slugEn: 'naples-to-sorrento-distance',
        slugIt: 'distanza-da-napoli-a-sorrento',
        origin: 'Napoli',
        dest: 'Sorrento',
        journeyTypeLabel: 'Campania · Porta d\'accesso alla Penisola Sorrentina',
        seoTitle: 'Quanto Dista Sorrento da Napoli? Km e Tempi di Percorrenza',
        metaDescription: 'Quanto dista Sorrento da Napoli? Distanza stradale reale via A3 e SS145, con mappa del percorso e confronto diretto con il treno Circumvesuviana.',
        h1: 'Distanza da Napoli a Sorrento',
        heroSubtitle: 'Verso sud lungo il golfo, da Napoli alla città affacciata sulla scogliera che è la porta d\'accesso alla Penisola Sorrentina e alla Costiera Amalfitana.',
        snapshot: [
            { label: 'Tipo di percorso', value: 'Autostrada + strada statale costiera' },
            { label: 'Strade principali', value: 'A3, poi SS145' },
            { label: 'Alternativa in treno', value: 'Circumvesuviana, ~1h10, ogni ~30 min' },
            { label: 'Sensibilità al traffico', value: 'Alta in estate' },
        ],
        howFarIsIt: [
            'Napoli e Sorrento distano circa 50 km su strada — una distanza breve sulla carta, anche se il viaggio richiede più tempo di quanto la sola distanza suggerirebbe. Il percorso lascia l\'autostrada A3 a metà strada e termina sulla SS145, una strada statale costiera che rallenta l\'andatura attraversando Castellammare di Stabia e i centri abitati della Penisola Sorrentina.',
            'Il divario tra "distanza" e "tempo di percorrenza" è insolitamente ampio su questo tragitto. In condizioni di traffico scorrevole il viaggio si può fare in meno di un\'ora, ma questo corridoio sostiene un traffico locale intenso tutto l\'anno, ancora più marcato in estate, quindi i tempi reali variano più di quanto la sola distanza stradale lasci intendere.',
        ],
        journeySteps: [
            { label: 'Partenza da Napoli', description: 'Il percorso si immette sull\'autostrada A3 in direzione sud, il corridoio principale verso Salerno e la costa.' },
            { label: 'Uscita a Castellammare di Stabia', description: 'Il percorso lascia l\'A3 per immettersi sulla SS145, una strada statale costiera che prosegue lungo la base della Penisola Sorrentina.' },
            { label: 'Lungo la SS145', description: 'Questo tratto attraversa una catena quasi ininterrotta di centri abitati — Castellammare, Vico Equense, Meta — con più semafori e traffico locale rispetto a un\'autostrada.' },
            { label: 'Arrivo a Sorrento', description: 'La strada raggiunge il centro di Sorrento vicino a Piazza Tasso, il cuore della città affacciata sulle scogliere sopra la Marina Piccola.' },
        ],
        journeyTimeNote: [
            'Questo è uno dei percorsi più sensibili al traffico di questo sito. Il corridoio della SS145 serve una fitta serie di centri abitati con traffico locale quotidiano, e da maggio a ottobre circa sostiene anche un intenso flusso turistico verso Sorrento e, di conseguenza, verso la Costiera Amalfitana, quindi i tempi di viaggio estivi possono superare ampiamente il valore in condizioni di traffico scorrevole.',
        ],
        understandingJourney: [
            'Questo percorso si divide nettamente in due metà molto diverse. La prima parte, sull\'autostrada A3, è veloce e senza particolarità — una normale guida autostradale italiana verso sud, fuori da Napoli. La seconda metà, dopo l\'uscita sulla SS145, è un\'esperienza completamente diversa: una strada statale costiera che attraversa un centro abitato dopo l\'altro lungo la base della Penisola Sorrentina, con la vista sul mare che si apre tra gli edifici.',
            'A differenza di un percorso rurale o di campagna, questo corridoio è genuinamente urbanizzato per quasi tutta la sua lunghezza — Castellammare di Stabia, Vico Equense e Meta si susseguono quasi senza soluzione di continuità, quindi il viaggio somiglia più a un attraversamento di una catena di centri costieri che a una guida in aperta campagna.',
            'Sorrento stessa sorge su una scogliera sopra il suo piccolo porto, la Marina Piccola, e funge da porta d\'accesso pratica alla penisola e alla più ampia Costiera Amalfitana — molti viaggi che proseguono lungo la costa, sia su strada sia in barca, partono proprio da qui.',
        ],
        highlights: [
            { title: 'Un percorso definito da due tipi di strada molto diversi', description: 'Il tratto veloce dell\'A3 e la SS145, più lenta e attraversata da centri abitati, danno a questo tragitto un carattere genuinamente in due parti anziché un\'unica esperienza di guida continua.' },
            { title: 'Una catena quasi ininterrotta di centri costieri', description: 'Castellammare di Stabia, Vico Equense e Meta si susseguono lungo la SS145, rendendo questo uno dei percorsi più urbanizzati di questo sito piuttosto che una guida rurale.' },
            { title: 'Un\'alternativa ferroviaria nota e genuinamente competitiva', description: 'La linea Circumvesuviana collega Napoli e Sorrento con frequenza e in modo diretto, offrendo su questo percorso una delle scelte di trasporto pubblico più chiare qui trattate.' },
        ],
        transportOptions: [
            { mode: 'Transfer privato / taxi', time: '50min-1h15', note: 'Porta a porta e senza l\'affollamento della Circumvesuviana, pur restando soggetto allo stesso traffico stradale di qualsiasi veicolo sulla SS145.' },
            { mode: 'Treno Circumvesuviana', time: 'Circa 1 ora e 10 minuti', note: 'Collega direttamente Napoli e Sorrento circa ogni 30 minuti — un\'opzione genuinamente pratica, anche se i treni sono essenziali e possono essere affollati, specialmente in estate.' },
            { mode: 'Guida autonoma', time: '50min-1h15', note: 'Via A3 poi SS145; prevedi che il tratto costiero sia decisamente più lento della parte autostradale, specialmente attraverso i centri abitati.' },
        ],
        transportNote: 'Tra i percorsi di questo sito, questo è uno di quelli in cui il treno è più direttamente paragonabile alla guida — la Circumvesuviana collega le due città senza cambi, anche se comfort e affollamento restano compromessi reali rispetto a un transfer privato.',
        planningTips: [
            { title: 'Aspettati che la SS145 sia il tratto più lento', description: 'La parte autostradale di questo percorso è rapida; quasi tutta la variabilità deriva dai centri costieri attraversati dalla SS145.' },
            { title: 'Evita la Circumvesuviana nelle ore di punta se hai bagagli', description: 'La linea è un\'opzione genuinamente utile ma non è stata pensata per valigie ingombranti — si affolla, specialmente nei weekend estivi e a metà giornata.' },
            { title: 'Questo percorso è spesso un passaggio verso la più ampia Costiera Amalfitana', description: 'Molti viaggiatori considerano Sorrento una porta d\'accesso più che la tappa finale, proseguendo su strada, in bus o con traghetti stagionali — utile da considerare per la pianificazione successiva.' },
        ],
        ctaHeading: 'Diretto a Sorrento da Napoli?',
        ctaText: 'Evita l\'affollamento della Circumvesuviana con un transfer privato porta a porta — scopri il nostro transfer Napoli-Sorrento.',
        ctaAnchor: 'Scopri il transfer Napoli-Sorrento',
        routePageSlugIt: 'trasferimento-napoli-sorrento',
        routePageLabelIt: 'Transfer Privato Napoli - Sorrento',
        faqs: [
            { q: 'Quanto dista Sorrento da Napoli?', a: 'Circa 50 km su strada, via autostrada A3 e strada statale costiera SS145.' },
            { q: 'Quanto ci vuole in auto?', a: 'In genere 50 minuti - 1 ora e 15 minuti, anche se il tratto sulla SS145 attraverso Castellammare di Stabia, Vico Equense e Meta può rallentare parecchio in estate.' },
            { q: 'Il treno Circumvesuviana è una buona opzione?', a: 'Sì — collega direttamente Napoli e Sorrento in circa 1 ora e 10 minuti, circa ogni 30 minuti, rendendola una delle alternative ferroviarie più genuinamente utili tra i percorsi di questo sito, anche se può essere affollata.' },
            { q: 'Perché questo percorso richiede più tempo di quanto suggerisca la distanza?', a: 'Solo una parte del viaggio si svolge sull\'autostrada A3 — il resto avviene sulla SS145, una strada statale costiera che attraversa una catena quasi ininterrotta di centri abitati, intrinsecamente più lenta della guida autostradale.' },
            { q: 'Sorrento è una buona base per la Costiera Amalfitana?', a: 'Sì — Sorrento funge da porta d\'accesso pratica alla Penisola Sorrentina e alla Costiera Amalfitana, con collegamenti su strada, in bus e con traghetti stagionali che partono dalla città.' },
        ],
        relatedLinks: [
            { href: '/it/route/trasferimento-napoli-sorrento', label: 'Transfer Privato Napoli - Sorrento' },
            { href: '/it/distance/distanza-da-napoli-a-salerno', label: 'Distanza da Napoli a Salerno' },
        ],
    },

    // ═══════════════════════════ NAPOLI → POSITANO ═══════════════════════════
    {
        slugEn: 'naples-to-positano-distance',
        slugIt: 'distanza-da-napoli-a-positano',
        origin: 'Napoli',
        dest: 'Positano',
        journeyTypeLabel: 'Campania · Sulla Strada Statale Amalfitana',
        seoTitle: 'Distanza Napoli Positano – Km, Percorso e Tempi',
        metaDescription: 'Quanto dista Positano da Napoli? Distanza stradale reale via A3 e SS163 Amalfitana, con mappa del percorso, traffico stagionale e informazioni sui pedaggi.',
        h1: 'Distanza da Napoli a Positano',
        heroSubtitle: 'Dalla terraferma campana alla SS163, la strada a picco sul mare che porta ogni viaggio lungo la Costiera Amalfitana fino a Positano.',
        snapshot: [
            { label: 'Tipo di percorso', value: 'Autostrada + strada costiera a picco sul mare' },
            { label: 'Strade principali', value: 'A3, poi SS163 Amalfitana' },
            { label: 'Pedaggi A3', value: 'Circa €3-6' },
            { label: 'Sensibilità stagionale', value: 'Molto alta (maggio-ottobre)' },
        ],
        howFarIsIt: [
            'Napoli e Positano distano circa 60-65 km su strada, anche se le fonti variano leggermente a seconda del punto di partenza esatto a Napoli e se la misurazione arriva al centro città o al limite di Positano. Ciò che conta più della distanza in sé è che una parte significativa del percorso si svolge sulla SS163 Amalfitana — una strada stretta, a picco sulla scogliera, che non si comporta affatto come un\'autostrada.',
            'Questo è uno dei percorsi di questo sito in cui distanza e tempo di percorrenza divergono maggiormente. Gli stessi circa 60 km possono richiedere da poco più di un\'ora a ben oltre due, a seconda quasi interamente della stagione e dell\'orario.',
        ],
        journeySteps: [
            { label: 'Partenza da Napoli', description: 'Il percorso si immette sull\'autostrada A3 in direzione sud verso Salerno.' },
            { label: 'Uscita a Vietri sul Mare', description: 'Il percorso lascia l\'A3 a Vietri sul Mare, la porta orientale della Costiera Amalfitana, immettendosi sulla SS163 Amalfitana.' },
            { label: 'Lungo la SS163 Amalfitana', description: 'Questa strada statale di circa 50 km è scavata direttamente nella scogliera, snodandosi attraverso Amalfi, Praiano e Meta prima di raggiungere Positano — stretta, con curve frequenti e poco spazio per il sorpasso.' },
            { label: 'Arrivo a Positano', description: 'La strada scende verso Positano, un paese costruito quasi in verticale nella scogliera, con l\'ultimo tratto verso il centro spesso il punto più stretto e lento dell\'intero viaggio.' },
        ],
        journeyTimeNote: [
            'La stagionalità conta su questo percorso più che su quasi ogni altro trattato in questo sito. In condizioni di traffico leggero il viaggio richiede circa 1 ora e 15 minuti - 1 ora e 30 minuti, ma durante l\'alta stagione da maggio a ottobre richiede comunemente 2-2,5 ore, con strozzature a corsia unica tra Meta e Positano che aggiungono altri 20-30 minuti nei weekend estivi più trafficati.',
        ],
        understandingJourney: [
            'Questo percorso ha due caratteri genuinamente diversi. Il tratto autostradale sull\'A3 fino a Vietri sul Mare è veloce e convenzionale. Tutto cambia una volta immessi sulla SS163 Amalfitana — una strada scavata direttamente in una scogliera verticale, costruita ben prima che esistessero i volumi di traffico attuali, e mai allargata per adattarsi ad essi.',
            'La SS163 è famosa, e a ragione: è una delle strade costiere più scenografiche d\'Italia, con il mare che si apre direttamente sotto la carreggiata per lunghi tratti. Ma proprio questa geografia — una mensola stretta scavata nella roccia, con la montagna da un lato e la scogliera dall\'altro — è il motivo per cui la strada non può semplicemente assorbire più traffico nei periodi di maggiore affluenza.',
            'Positano stessa è costruita quasi in verticale lungo la parete della scogliera verso il mare, e l\'ultimo tratto d\'accesso al paese lo riflette: tornanti stretti e una larghezza stradale molto limitata fanno sì che gli ultimi minuti siano spesso la parte più lenta dell\'intero viaggio da Napoli, indipendentemente dal periodo dell\'anno.',
        ],
        highlights: [
            { title: 'Un viaggio dall\'autostrada alla strada a picco sulla scogliera', description: 'Il tratto veloce dell\'A3 e la stretta e tortuosa SS163 sono abbastanza diversi da rendere impossibile giudicare questo percorso dalla sola distanza.' },
            { title: 'Una delle strade costiere più spettacolari d\'Italia', description: 'La SS163 Amalfitana corre in gran parte sul bordo della scogliera per tutta la sua lunghezza tra Vietri sul Mare e Positano.' },
            { title: 'Un percorso senza una vera alternativa ferroviaria', description: 'A differenza di Napoli-Sorrento o Napoli-Salerno, su questo tratto di costa non esiste una linea ferroviaria, il che condiziona ogni decisione di trasporto per questo specifico viaggio.' },
        ],
        transportOptions: [
            { mode: 'Transfer privato / taxi', time: '1h15 fuori stagione; 2-2,5h in alta stagione', note: 'Porta a porta su una strada senza scorciatoie realistiche per chi guida da solo, e senza parcheggio da cercare nel centro di Positano.' },
            { mode: 'Treno Circumvesuviana + bus SITA', time: 'Circa 2-3 ore in totale', note: 'Treno fino a Sorrento (circa 1h10, ogni ~30 min), poi un bus SITA in coincidenza verso Positano (ogni 30-60 minuti, biglietti da acquistare in anticipo, non a bordo).' },
            { mode: 'Traghetto stagionale (apr-ott)', time: 'Circa 1,5-2 ore', note: 'Compagnie come Alicost e Travelmar effettuano 2-3 corse al giorno da Napoli a Positano in stagione; in inverno resta operativa una sola corsa giornaliera.' },
            { mode: 'Guida autonoma', time: '1h15 fuori stagione; 2-2,5h in alta stagione', note: 'Via A3 poi SS163; la strada costiera ha pochissimo spazio per il sorpasso e può incolonnarsi parecchio nei weekend estivi.' },
        ],
        transportNote: 'Su questo percorso non esiste un\'opzione ferroviaria, il che lo distingue dalla maggior parte degli altri trattati su questo sito — le scelte realistiche sono guidare, un transfer privato, una combinazione treno più bus, o un traghetto stagionale, ciascuna con un compromesso di tempo e comfort genuinamente diverso.',
        planningTips: [
            { title: 'Prevedi un ampio margine di tempo in alta stagione', description: 'Tra maggio e ottobre, considera 2-2,5 ore come cifra realistica di pianificazione, non l\'1h15 di bassa stagione, specialmente per impegni con un orario fisso.' },
            { title: 'Valuta il traghetto tra aprile e ottobre', description: 'Quando è in funzione, il battello stagionale da Napoli evita del tutto la SS163 e può essere genuinamente più veloce della guida nei periodi di traffico intenso.' },
            { title: 'Acquista i biglietti del bus SITA prima di salire, se usi i mezzi pubblici', description: 'I biglietti non si vendono a bordo — vanno acquistati in anticipo in un bar della stazione o in edicola, un dettaglio che può cogliere impreparati i visitatori alla prima esperienza.' },
        ],
        ctaHeading: 'Stai organizzando un viaggio a Positano da Napoli?',
        ctaText: 'Lascia che un autista esperto gestisca le curve a picco sulla SS163 — scopri il nostro transfer Napoli-Positano.',
        ctaAnchor: 'Scopri il transfer Napoli-Positano',
        routePageSlugIt: undefined,
        routePageLabelIt: undefined,
        faqs: [
            { q: 'Quanto dista Positano da Napoli?', a: 'Circa 60-65 km su strada, via autostrada A3 fino a Vietri sul Mare e poi la SS163 Amalfitana.' },
            { q: 'Quanto ci vuole in auto?', a: 'Circa 1 ora e 15 minuti con traffico leggero, ma comunemente 2-2,5 ore durante l\'alta stagione da maggio a ottobre, quando la SS163 diventa molto più trafficata.' },
            { q: 'Esiste un treno diretto per Positano?', a: 'No — su questo tratto della Costiera Amalfitana non esiste una linea ferroviaria. L\'opzione di trasporto pubblico è il treno Circumvesuviana fino a Sorrento seguito da un bus SITA.' },
            { q: 'Il traghetto è una buona alternativa?', a: 'Quando è in funzione — da circa aprile a ottobre — sì, con 2-3 corse al giorno da Napoli che richiedono circa 1,5-2 ore, evitando del tutto la strada costiera. In inverno opera una sola corsa al giorno.' },
            { q: 'Perché il traffico influisce su questo percorso più che su altri?', a: 'La SS163 è una strada stretta scavata nella scogliera con pochissimo spazio per il sorpasso, quindi anche aumenti moderati del volume di traffico in alta stagione creano ritardi sproporzionati.' },
        ],
        relatedLinks: [
            { href: '/it/distance/distanza-da-napoli-a-sorrento', label: 'Distanza da Napoli a Sorrento' },
            { href: '/it/distance/distanza-da-napoli-a-salerno', label: 'Distanza da Napoli a Salerno' },
        ],
    },

    // ═══════════════════════════ NAPOLI → SALERNO ═══════════════════════════
    {
        slugEn: 'naples-to-salerno-distance',
        slugIt: 'distanza-da-napoli-a-salerno',
        origin: 'Napoli',
        dest: 'Salerno',
        journeyTypeLabel: 'Campania · Collegamento Città-Città verso la Costa',
        seoTitle: 'Quanto Dista Salerno da Napoli? Km e Tempi di Percorrenza',
        metaDescription: 'Quanto dista Salerno da Napoli? Distanza stradale reale via autostrada A3, con mappa del percorso e confronto diretto con i frequenti treni Trenitalia.',
        h1: 'Distanza da Napoli a Salerno',
        heroSubtitle: 'Un rapido tragitto autostradale tra due vere città campane — e, per molti viaggiatori, la porta d\'accesso pratica orientale alla Costiera Amalfitana.',
        snapshot: [
            { label: 'Tipo di percorso', value: 'Collegamento autostradale città-città' },
            { label: 'Strada principale', value: 'Autostrada A3' },
            { label: 'Alternativa in treno', value: 'Trenitalia, frequente, 30-55 min' },
            { label: 'Destinazione', value: 'Città vera e propria, porta d\'accesso ai traghetti' },
        ],
        howFarIsIt: [
            'Napoli e Salerno distano circa 55-58 km su strada, quasi interamente lungo l\'autostrada A3. In treno la distanza è leggermente inferiore, poco meno di 48 km, a riflesso del percorso più diretto seguito dalla linea ferroviaria rispetto al tracciato autostradale.',
            'A differenza di alcuni altri tragitti di questo sito, questo collega due città vere e proprie anziché una città e una località balneare o un borgo, quindi anche la destinazione stessa — non solo la strada — dispone di un\'infrastruttura completa e attiva tutto l\'anno.',
        ],
        journeySteps: [
            { label: 'Partenza da Napoli', description: 'Il percorso si immette sull\'autostrada A3 in direzione sud, il corridoio principale che collega Napoli al Cilento e alla Calabria oltre Salerno.' },
            { label: 'Il corridoio dell\'A3', description: 'Questo è un tratto autostradale rapido e diretto, storicamente il principale collegamento stradale tra le due città e tuttora il percorso più veloce in auto.' },
            { label: 'Avvicinamento a Salerno', description: 'L\'autostrada si collega alla tangenziale di Salerno sul lato settentrionale della città.' },
            { label: 'Arrivo a Salerno', description: 'Il percorso prosegue nel centro città vicino a Piazza della Concordia, a breve distanza dal lungomare di Salerno e dal terminal passeggeri dei traghetti.' },
        ],
        journeyTimeNote: [
            'Il traffico sull\'A3 può aumentare nelle ore di punta pendolari, dato che questo corridoio sostiene traffico regolare di lavoro e pendolarismo tra le due città oltre al traffico turistico verso la Costiera Amalfitana e il Cilento — non è un percorso puramente turistico, il che condiziona i momenti in cui tende a essere più trafficato.',
        ],
        understandingJourney: [
            'Questo è un tragitto più semplice e concreto rispetto alla maggior parte degli altri trattati su questo sito — un collegamento autostradale diretto tra due città campane operative, senza le strette strade costiere, le salite verso i borghi collinari o le strozzature a corsia unica che caratterizzano altri percorsi qui trattati.',
            'Questa concretezza è proprio il motivo per cui il percorso conta a livello pratico: Salerno funge da porta d\'accesso orientale alla Costiera Amalfitana, decisamente più facile da raggiungere sia su strada sia in treno rispetto ai centri più avanti lungo la SS163, motivo per cui molti viaggiatori diretti ad Amalfi, Ravello o Cetara passano di qui piuttosto che da Sorrento.',
            'Salerno stessa è una città a tutti gli effetti, con un proprio lungomare, un centro storico e un porto attivo — incluso un terminal passeggeri per traghetti usato per i collegamenti costieri stagionali — un tipo di destinazione diverso dalle località di villeggiatura verso cui portano alcuni degli altri percorsi di questo sito.',
        ],
        highlights: [
            { title: 'Un vero collegamento autostradale città-città', description: 'A differenza di percorsi che terminano in una località balneare o in un borgo collinare, questo collega due città vere e proprie, entrambe con infrastrutture complete attive tutto l\'anno.' },
            { title: 'Un\'alternativa in treno frequente e genuinamente veloce', description: 'Trenitalia gestisce servizi diretti frequenti su questa linea intercity ben servita, con alcuni dei tempi di percorrenza più rapidi tra i tragitti in treno trattati su questo sito.' },
            { title: 'La porta d\'accesso orientale pratica alla Costiera Amalfitana', description: 'I collegamenti stradali e ferroviari di Salerno la rendono un punto di partenza comune per proseguire verso Amalfi, Ravello e Cetara, distinto dall\'accesso alla costa dal lato di Sorrento.' },
        ],
        transportOptions: [
            { mode: 'Treno Trenitalia', time: 'Circa 30-55 minuti', note: 'Servizi diretti frequenti tra Napoli Centrale e Salerno, con i treni più veloci intorno ai 30 minuti e i regionali più vicini a 45-55 minuti; partenze circa ogni 20-30 minuti.' },
            { mode: 'Transfer privato / taxi', time: '50min-1h10', note: 'Porta a porta, utile se si prosegue direttamente verso una destinazione della Costiera Amalfitana o il terminal traghetti senza passare dalla stazione.' },
            { mode: 'Guida autonoma', time: '50min-1h10', note: 'Un tragitto diretto sull\'autostrada A3; il traffico è generalmente più leggero fuori dalle ore di punta pendolari.' },
        ],
        transportNote: 'Questo è uno dei percorsi di questo sito in cui il treno è un\'opzione chiaramente valida di per sé — una linea intercity diretta, frequente e consolidata — anziché un ripiego più lento rispetto alla guida.',
        planningTips: [
            { title: 'Valuta il treno se non ti serve un\'auto a Salerno', description: 'Data la frequenza e la velocità dei servizi diretti, il treno è un\'opzione genuinamente competitiva qui, in un modo che non lo è su diversi altri percorsi di questo sito.' },
            { title: 'Considera il proseguimento se Salerno è una tappa intermedia', description: 'Molti viaggiatori passano da Salerno diretti ad Amalfi, Ravello o Cetara — conviene pianificare il collegamento successivo anziché considerare Salerno come tappa finale.' },
            { title: 'Il terminal traghetti è vicino al centro', description: 'Se prosegui in barca lungo la costa, il terminal passeggeri di Salerno è a breve distanza a piedi dal centro città, a differenza di alcuni punti di partenza più decentrati.' },
        ],
        ctaHeading: 'Prosegui verso la Costiera Amalfitana?',
        ctaText: 'Un transfer privato ti porta direttamente al centro di Salerno o al terminal traghetti — scopri il nostro transfer Napoli-Salerno.',
        ctaAnchor: 'Scopri il transfer Napoli-Salerno',
        routePageSlugIt: undefined,
        routePageLabelIt: undefined,
        faqs: [
            { q: 'Quanto dista Salerno da Napoli?', a: 'Circa 55-58 km su strada via autostrada A3; leggermente meno in treno, poco sotto i 48 km.' },
            { q: 'Quanto ci vuole in auto?', a: 'In genere 50 minuti - 1 ora e 10 minuti in condizioni normali, con l\'A3 che sostiene traffico pendolare regolare oltre a quello turistico.' },
            { q: 'Il treno è più veloce della guida?', a: 'Può esserlo — Trenitalia gestisce servizi diretti frequenti, con i treni più veloci che impiegano circa 30 minuti, rendendo questo uno dei percorsi in treno più competitivi di questo sito.' },
            { q: 'Perché si viaggia proprio da Napoli a Salerno?', a: 'Salerno funge da porta d\'accesso orientale pratica alla Costiera Amalfitana, con un accesso su strada e in treno più semplice rispetto ai centri più avanti lungo la strada costiera, il che la rende un percorso comune verso Amalfi, Ravello e Cetara.' },
            { q: 'Salerno ha un terminal traghetti?', a: 'Sì — un terminal passeggeri vicino al centro città serve i collegamenti costieri stagionali, utile per chi prosegue lungo la costa in barca.' },
        ],
        relatedLinks: [
            { href: '/it/distance/distanza-da-napoli-a-positano', label: 'Distanza da Napoli a Positano' },
            { href: '/it/distance/distanza-da-napoli-a-sorrento', label: 'Distanza da Napoli a Sorrento' },
        ],
    },
];

export function getAllRichDistancePagesIt(): RichDistancePageIt[] {
    return richDistancePagesIt;
}

export function findRichDistancePageIt(slugIt: string): RichDistancePageIt | null {
    return richDistancePagesIt.find((p) => p.slugIt === slugIt) || null;
}
