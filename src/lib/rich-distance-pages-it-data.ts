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
];

export function getAllRichDistancePagesIt(): RichDistancePageIt[] {
    return richDistancePagesIt;
}

export function findRichDistancePageIt(slugIt: string): RichDistancePageIt | null {
    return richDistancePagesIt.find((p) => p.slugIt === slugIt) || null;
}
