// Italian distance-page data. Two categories, mirroring the established
// pattern from new-regions-routes-data.ts / it-translations-existing-routes.ts:
//
//   1. `existingDistancePageItTranslations` — natively-written Italian content
//      for the 9 distance pages that already exist in English only
//      (distance-pages-data.ts). Numeric facts (straightLineDistance,
//      drivingDistance, drivingDuration, trainDuration) are NOT duplicated
//      here — the Italian page looks them up from the English entry via
//      `slugEn` at render time, so the two languages can never state
//      different numbers for the same route.
//
//   2. `newDistancePagesIt` — Italian halves of the 10 brand-new bilingual
//      distance pages (their English halves are appended directly into
//      `distancePages` in distance-pages-data.ts). Facts ARE duplicated here
//      only because TypeScript needs a self-contained object per page — the
//      author (this session) copied every figure verbatim from the same
//      research used for the English half, never re-derived independently.
//
// Four routes have no dedicated Italian commercial route page yet (verified
// against new-regions-routes-data.ts / it-translations-existing-routes.ts):
// Rome→Vatican, Milan→Venice, Naples→Amalfi Coast, Milan→Turin. Their
// `routePageSlugIt` is left undefined; the IT distance-page template falls
// back to a link to the relevant IT services hub instead of a non-existent
// or English-language commercial page — see /it/distance/[slug]/page.tsx.

export interface DistanceStopIt {
    name: string;
    note: string;
}

export interface DistanceFaqIt {
    q: string;
    a: string;
}

export interface DistanceLangContentIt {
    seoTitle: string;
    metaDescription: string;
    h1: string;
    intro: string[];
    centreVsDoorToDoor: string[];
    byCar: string[];
    byCarRoad: string;
    byCarAlt?: string;
    byTrain: string[];
    byPrivateTransfer: string[];
    routePageSlugIt?: string;   // undefined where no IT commercial route page exists yet
    routePageLabelIt?: string;
    popularStops: DistanceStopIt[];
    travelTimeFactors: string[];
    bestWay: string[];
    faqs: DistanceFaqIt[];
}

export interface ExistingDistancePageItTranslation {
    slugEn: string;  // must match an existing distancePages[] slug
    slugIt: string;
    origin: string;  // Italian display form
    dest: string;
    it: DistanceLangContentIt;
}

export const existingDistancePageItTranslations: ExistingDistancePageItTranslation[] = [
    {
        slugEn: 'florence-to-pisa-distance',
        slugIt: 'distanza-da-firenze-a-pisa',
        origin: 'Firenze', dest: 'Pisa',
        it: {
            seoTitle: 'Distanza Firenze Pisa – Km e Tempo di Percorrenza',
            metaDescription: 'Quanto dista Pisa da Firenze? Distanza in linea d\'aria, in auto e in treno a confronto, con tempi di percorrenza reali per ogni mezzo.',
            h1: 'Distanza da Firenze a Pisa',
            intro: [
                'Firenze e Pisa distano circa 68 km in linea d\'aria, ma la distanza stradale tra i due centri è maggiore — circa 85 km — perché il percorso segue la valle dell\'Arno anziché una linea retta. Il dato che conta davvero per organizzare il viaggio è la distanza in auto o in treno, non quella in linea d\'aria, quindi qui trovi entrambe.',
                'Di seguito la distanza in auto, in treno e cosa significano in termini di tempo reale di viaggio, oltre a come i dati "centro-centro" differiscono da un vero tragitto porta a porta.',
            ],
            centreVsDoorToDoor: [
                'La maggior parte delle distanze pubblicate — inclusi gli 85 km indicati sopra — sono misurate da centro a centro (ad esempio da Piazza della Signoria a Firenze fino all\'area della Torre Pendente a Pisa). È un riferimento utile, ma non coincide con la tua reale distanza porta a porta.',
                'Se il tuo hotel è fuori dal centro storico, o sei diretto all\'aeroporto di Pisa anziché al centro città, il tuo tempo di viaggio reale sarà diverso dal dato centro-centro — a volte di 15-20 minuti in più, considerando l\'uscita dalla ZTL di Firenze o il tratto finale verso il tuo indirizzo specifico a Pisa. Un transfer privato viene prenotato porta a porta, quindi il tempo indicato riflette già i tuoi reali punti di partenza e arrivo.',
            ],
            byCar: [
                'In auto da Firenze a Pisa si percorrono circa 85 km, normalmente in 1 ora e 5 minuti - 1 ora e 20 minuti, a seconda del traffico e dell\'orario. Il percorso diretto segue la FI-PI-LI (superstrada Firenze-Pisa-Livorno), una strada a doppia carreggiata gratuita che attraversa la valle dell\'Arno verso ovest.',
            ],
            byCarRoad: 'la superstrada FI-PI-LI (Firenze-Pisa-Livorno)',
            byCarAlt: 'Un\'alternativa più lunga passa per l\'autostrada A11 attraverso Lucca; aggiunge distanza e pedaggi rispetto al percorso diretto FI-PI-LI, quindi la maggior parte degli automobilisti la sceglie solo per fare tappa a Lucca lungo il tragitto.',
            byTrain: [
                'Il treno è un\'opzione diretta, senza cambi: i Regionali Veloci collegano Firenze Santa Maria Novella e Pisa Centrale in circa 50-65 minuti, con partenze all\'incirca ogni ora. Il tempo di percorrenza da solo non racconta tutta la storia: bisogna comunque arrivare a Santa Maria Novella e, all\'arrivo, raggiungere la destinazione finale da Pisa Centrale (il centro storico è a 15-20 minuti a piedi o con un breve taxi/bus dalla stazione, mentre l\'aeroporto di Pisa richiede un ulteriore tragitto).',
            ],
            byPrivateTransfer: [
                'Un transfer privato copre lo stesso percorso porta a porta, senza camminate verso la stazione, senza orari da rispettare e senza cambio tra treno e taxi all\'arrivo a Pisa. È particolarmente utile con bagagli, per una coincidenza con un volo dall\'aeroporto di Pisa, o quando il punto di ritiro a Firenze è fuori dal centro.',
                'Per prezzi, opzioni di veicolo e prenotazione, visita la nostra pagina dedicata al transfer privato Firenze - Pisa.',
            ],
            routePageSlugIt: 'trasferimento-firenze-pisa',
            routePageLabelIt: 'Transfer Privato Firenze - Pisa',
            popularStops: [
                { name: 'Empoli', note: 'Cittadina mercantile pressappoco a metà strada lungo la FI-PI-LI, nota per il centro storico e la tradizione vetraria.' },
                { name: 'San Miniato', note: 'Borgo collinare appena fuori dal percorso principale tra Firenze e Pisa, famoso per il tartufo bianco e il centro panoramico.' },
                { name: 'Lucca', note: 'Non sul percorso diretto, ma raggiungibile con l\'alternativa via A11 — una città rinascimentale murata che vale la deviazione per chi ha tempo extra.' },
            ],
            travelTimeFactors: [
                'Traffico intorno a Firenze, specialmente nelle ore di punta mattutine e serali dei giorni feriali.',
                'Il punto di partenza e arrivo esatto — un hotel in centro rispetto a un indirizzo fuori dalla ZTL, oppure Pisa città rispetto all\'aeroporto.',
                'Condizioni meteo e stradali generali, che possono allungare i tempi in certe giornate.',
                'Per il treno, il tempo necessario per raggiungere la stazione e, all\'arrivo, la destinazione finale da Pisa Centrale.',
            ],
            bestWay: [
                'Non esiste un\'unica risposta "più veloce" valida per tutti — dipende da dove parti e dove arrivi, oltre che dai bagagli o dal numero di persone. Il treno è rapido da stazione a stazione, ma aggiunge tempo per arrivare e ripartire dalle stazioni. Guidare da soli offre flessibilità ma significa affrontare il traffico e il parcheggio a Firenze. Un transfer privato è in genere l\'opzione più prevedibile per i tempi porta a porta, perché viene calcolato sui tuoi indirizzi reali e non sul centro città.',
            ],
            faqs: [
                { q: 'Quanto dista Firenze da Pisa?', a: 'Circa 68 km in linea d\'aria, ma la distanza in auto tra i due centri è di circa 85 km, con un tempo di percorrenza di 1 ora e 5 minuti - 1 ora e 20 minuti a seconda del traffico.' },
                { q: 'Perché la distanza in auto è maggiore di quella in linea d\'aria?', a: 'La distanza in linea d\'aria ignora completamente le strade — è una misurazione diretta tra due punti. La strada reale, la superstrada FI-PI-LI, segue la valle dell\'Arno anziché una linea retta, aggiungendo circa 17 km alla distanza reale in auto.' },
                { q: 'Qual è la differenza tra distanza centro-centro e porta a porta?', a: 'Le distanze pubblicate come gli 85 km indicati sono misurate tra i due centri città. La tua distanza reale porta a porta dipende dal tuo hotel o indirizzo specifico a Firenze e dalla destinazione a Pisa (centro città o aeroporto), e può aggiungere tempo a entrambe le estremità.' },
                { q: 'Qual è il modo più veloce per andare da Firenze a Pisa?', a: 'Dipende dal punto di partenza e arrivo. Il treno diretto impiega circa 50-65 minuti, ma questo non include il tempo per raggiungere Santa Maria Novella o per arrivare alla destinazione finale da Pisa Centrale. Un transfer privato o l\'auto coprono direttamente la distanza porta a porta, il che può risultare più veloce nel complesso una volta considerato il tempo di accesso alla stazione — specialmente con bagagli o quando l\'alloggio non è vicino alla stazione.' },
                { q: 'Posso visitare Pisa in gita di un giorno da Firenze?', a: 'Sì — con un tempo di percorrenza di circa un\'ora in ciascuna direzione, in treno o con transfer privato, Pisa è una meta popolare per una mezza giornata o giornata intera da Firenze, con tempo sufficiente per vedere la Torre Pendente, Piazza dei Miracoli e il centro storico.' },
                { q: 'L\'aeroporto di Pisa è alla stessa distanza del centro città?', a: 'No. L\'aeroporto di Pisa (Galileo Galilei) si trova ai margini meridionali della città, a breve distanza dal centro e dalla stazione ferroviaria. Se sei diretto a un volo anziché al centro di Pisa, considera questo tratto aggiuntivo.' },
            ],
        },
    },
    {
        slugEn: 'rome-to-florence-distance',
        slugIt: 'distanza-da-roma-a-firenze',
        origin: 'Roma', dest: 'Firenze',
        it: {
            seoTitle: 'Distanza Roma Firenze – Km e Tempo di Percorrenza',
            metaDescription: 'Quanto dista Firenze da Roma? Distanza in linea d\'aria, in auto e in treno a confronto, con tempi reali per auto, treno e transfer privato.',
            h1: 'Distanza da Roma a Firenze',
            intro: [
                'Roma e Firenze distano circa 231 km in linea d\'aria, ma la distanza in auto tra i due centri è di circa 275-280 km, poiché l\'autostrada A1 segue le valli fluviali e attraversa le colline dell\'Umbria e della Toscana meridionale anziché una linea diretta.',
                'Questa distanza è la stessa in entrambe le direzioni — da Roma a Firenze o da Firenze a Roma — quindi i dati qui sotto valgono per entrambi i sensi di marcia.',
            ],
            centreVsDoorToDoor: [
                'Le distanze sopra indicate sono misurate da centro a centro (ad esempio tra il centro storico di Roma e il Duomo di Firenze). La tua reale distanza porta a porta varia in base al tuo hotel o indirizzo specifico e al fatto che tu parta da un centro città o da un aeroporto come Roma Fiumicino.',
                'Un transfer privato viene calcolato sui tuoi indirizzi reali, quindi riflette il tuo tragitto effettivo anziché una stima generica centro-centro.',
            ],
            byCar: [
                'Il tragitto in auto tra Roma e Firenze copre circa 275-280 km e richiede circa 3 ore - 3 ore e 15 minuti lungo l\'Autostrada del Sole (A1), la principale autostrada nord-sud d\'Italia. Il traffico intorno a entrambe le città, soprattutto nelle ore di punta, può allungare i tempi.',
            ],
            byCarRoad: 'l\'Autostrada del Sole (A1)',
            byCarAlt: 'Alcuni automobilisti spezzano il viaggio con una sosta a Orvieto o nella zona del Chianti, che aggiunge tempo ma non distanza significativa, trovandosi entrambe vicine al percorso diretto.',
            byTrain: [
                'È una delle linee ad alta velocità più importanti d\'Italia: i treni Frecciarossa collegano Roma Termini e Firenze Santa Maria Novella in circa 1 ora e 40 minuti, con partenze frequenti durante tutta la giornata. Come per ogni viaggio in treno, questo dato è da stazione a stazione — resta comunque necessario raggiungere Termini o Santa Maria Novella e, all\'arrivo, proseguire fino all\'indirizzo finale.',
            ],
            byPrivateTransfer: [
                'Un transfer privato copre lo stesso percorso porta a porta, particolarmente utile con bagagli, per un gruppo, o quando il punto di ritiro e destinazione non sono vicini a nessuna delle due stazioni.',
                'Per prezzi, opzioni di veicolo e prenotazione, visita la nostra pagina dedicata al transfer privato Roma - Firenze.',
            ],
            routePageSlugIt: 'trasferimento-roma-firenze',
            routePageLabelIt: 'Transfer Privato Roma - Firenze',
            popularStops: [
                { name: 'Orvieto', note: 'Suggestivo borgo umbro su uno sperone di roccia, proprio accanto all\'A1, noto per la cattedrale gotica — tappa popolare per chi viaggia in auto tra le due città.' },
            ],
            travelTimeFactors: [
                'Traffico intorno a Roma e Firenze, specialmente nelle ore di punta dei giorni feriali.',
                'Il punto di partenza e arrivo esatto — centro città rispetto a un aeroporto come Roma Fiumicino.',
                'Per il treno, il tempo necessario per raggiungere Termini o Santa Maria Novella.',
                'L\'eventuale sosta a Orvieto lungo il percorso.',
            ],
            bestWay: [
                'Il treno alta velocità è davvero rapido da centro a centro, e per chi viaggia da solo con pochi bagagli è difficile da battere. Per gruppi, famiglie, bagagli ingombranti, o quando una delle due estremità del viaggio è un aeroporto o un indirizzo lontano dalle stazioni, un transfer privato o l\'auto offrono un tempo porta a porta più prevedibile, perché non sono limitati alle due stazioni.',
            ],
            faqs: [
                { q: 'Quanto dista Firenze da Roma?', a: 'Circa 231 km in linea d\'aria, o circa 275-280 km su strada, con un tempo di percorrenza di 3 ore - 3 ore e 15 minuti in auto.' },
                { q: 'Quanto dista Roma da Firenze?', a: 'La stessa distanza in senso inverso — circa 275-280 km su strada, o 231 km in linea d\'aria. La distanza non cambia con la direzione.' },
                { q: 'Quanto impiega il treno tra Roma e Firenze?', a: 'I treni Frecciarossa ad alta velocità coprono il percorso in circa 1 ora e 40 minuti, una delle connessioni intercity più rapide e frequenti d\'Italia.' },
                { q: 'È più veloce guidare o prendere il treno da Roma a Firenze?', a: 'Il treno è più veloce da stazione a stazione. Ma una volta considerato il tempo per raggiungere Termini e Santa Maria Novella, un transfer privato che copre i tuoi indirizzi reali può risultare altrettanto rapido nel complesso, soprattutto con bagagli o per un gruppo.' },
                { q: 'Posso fare tappa in Toscana o Umbria lungo il percorso?', a: 'Sì — Orvieto si trova proprio lungo l\'A1 ed è una tappa popolare, mentre la zona del Chianti è una breve deviazione se viaggi in auto o con transfer privato.' },
                { q: 'La distanza è la stessa partendo dall\'aeroporto di Roma Fiumicino?', a: 'No — Fiumicino si trova a sud-ovest del centro di Roma, quindi la distanza e il tempo di percorrenza verso Firenze partendo dall\'aeroporto sono leggermente diversi rispetto al centro città.' },
            ],
        },
    },
    {
        slugEn: 'milan-to-lake-como-distance',
        slugIt: 'distanza-da-milano-al-lago-di-como',
        origin: 'Milano', dest: 'Lago di Como',
        it: {
            seoTitle: 'Distanza Milano Lago di Como – Km e Tempo',
            metaDescription: 'Quanto dista il Lago di Como da Milano? Distanza in linea d\'aria, in auto e in treno, con tempi reali per raggiungere Como.',
            h1: 'Distanza da Milano al Lago di Como',
            intro: [
                'Milano e Como, all\'estremità meridionale del lago, distano circa 39-40 km in linea d\'aria, con una distanza stradale di circa 50-55 km percorribile in 45 minuti - 1 ora in auto. Questo rende Como uno dei laghi più vicini e facili da raggiungere da Milano.',
                '"Lago di Como" comprende molte località — Como, Cernobbio, Bellagio, Varenna e altre — quindi la distanza esatta dipende dalla meta scelta. I dati qui si riferiscono al centro di Como, il più vicino e comune punto di riferimento.',
            ],
            centreVsDoorToDoor: [
                'Le distanze sopra sono misurate fino al centro di Como. Se la destinazione è più a nord sul lago — ad esempio Bellagio o Varenna — il tragitto richiede decisamente più tempo; questa pagina si concentra sul tratto Milano-Como.',
                'Un transfer privato viene calcolato sul tuo hotel o indirizzo specifico, qualunque sia la località del lago scelta, anziché su un dato generico del centro città.',
            ],
            byCar: [
                'In auto da Milano a Como si percorrono circa 50-55 km lungo le autostrade A8/A9, in genere in 45 minuti - 1 ora, a seconda del traffico intorno a Milano.',
            ],
            byCarRoad: 'le autostrade A8/A9',
            byTrain: [
                'Trenord gestisce collegamenti diretti da Milano Centrale (e altre stazioni milanesi) a Como San Giovanni in circa 40 minuti, con partenze frequenti — uno dei collegamenti ferroviari più comodi da Milano. Per raggiungere le località più a nord sul lago con i mezzi pubblici, di solito serve un ulteriore collegamento in bus o battello da Como.',
            ],
            byPrivateTransfer: [
                'Un transfer privato ti porta direttamente dal tuo hotel o indirizzo a Como — o più avanti sul lago — senza cambio su bus o battello, particolarmente comodo con bagagli.',
                'Per prezzi, opzioni di veicolo e prenotazione, visita la nostra pagina dedicata al transfer privato Milano - Lago di Como.',
            ],
            routePageSlugIt: 'trasferimento-milano-lago-di-como',
            routePageLabelIt: 'Transfer Privato Milano - Lago di Como',
            popularStops: [],
            travelTimeFactors: [
                'Traffico in uscita da Milano, soprattutto nelle ore di punta dei giorni feriali.',
                'La specifica località del lago di destinazione — Como è la più vicina, Bellagio e Varenna sono più distanti.',
                'Per il treno, eventuali collegamenti aggiuntivi in bus o battello oltre Como.',
            ],
            bestWay: [
                'Per un viaggio diretto verso il centro di Como, il treno diretto è rapido e semplice. Per Bellagio, Varenna o altre località del lago, oppure con bagagli o in gruppo, un transfer privato che arriva direttamente all\'indirizzo finale è di solito più comodo dei collegamenti treno più battello.',
            ],
            faqs: [
                { q: 'Quanto dista il Lago di Como da Milano?', a: 'Como, all\'estremità meridionale del lago, dista circa 39-40 km in linea d\'aria da Milano, o circa 50-55 km su strada — un tragitto di 45 minuti-1 ora.' },
                { q: 'Bellagio è alla stessa distanza da Milano di Como?', a: 'No — Bellagio si trova più avanti sul lago, generalmente altri 30-60 minuti oltre Como via strada, a seconda del traffico e del percorso lacustre scelto.' },
                { q: 'Quanto dura il treno da Milano al Lago di Como?', a: 'I treni Trenord diretti raggiungono Como San Giovanni in circa 40 minuti da Milano, con partenze frequenti durante la giornata.' },
                { q: 'Posso raggiungere Bellagio o Varenna in treno da Milano?', a: 'Varenna ha una propria stazione sulla linea principale, raggiungibile da Milano in circa un\'ora. Bellagio non ha una stazione ferroviaria, quindi serve un collegamento in battello o bus da Como o Varenna.' },
                { q: 'L\'aeroporto di Malpensa è più vicino al Lago di Como del centro di Milano?', a: 'Sì — Malpensa si trova a nord-ovest di Milano, più vicino al lago, quindi i transfer dall\'aeroporto verso Como o le altre località del lago sono spesso più rapidi rispetto al centro città.' },
            ],
        },
    },
    {
        slugEn: 'rome-to-naples-distance',
        slugIt: 'distanza-da-roma-a-napoli',
        origin: 'Roma', dest: 'Napoli',
        it: {
            seoTitle: 'Distanza Roma Napoli – Km e Tempo di Percorrenza',
            metaDescription: 'Quanto dista Napoli da Roma? Distanza in linea d\'aria, in auto e in treno a confronto, con tempi reali per auto, treno e transfer privato.',
            h1: 'Distanza da Roma a Napoli',
            intro: [
                'Roma e Napoli distano circa 190-199 km in linea d\'aria, con una distanza stradale di circa 226-230 km lungo l\'autostrada A1, che richiede in genere 2,5-3 ore a seconda del traffico.',
                'Il percorso è anche una delle linee ferroviarie ad alta velocità più trafficate d\'Italia, quindi l\'opzione treno merita un confronto attento con guida e transfer privato.',
            ],
            centreVsDoorToDoor: [
                'I dati sopra sono misurati da centro a centro. La distanza reale varia in base al punto di partenza esatto (incluso se si parte dall\'aeroporto di Roma Fiumicino, a sud-ovest della città) e alla destinazione a Napoli — la città, l\'aeroporto o un punto più avanti lungo la costa.',
                'Un transfer privato viene calcolato sui tuoi indirizzi reali, quindi il tempo indicato riflette già il tuo effettivo punto di partenza e arrivo.',
            ],
            byCar: [
                'Il tragitto in auto da Roma a Napoli copre circa 226-230 km lungo l\'Autostrada del Sole (A1) e richiede in genere 2 ore e 30 minuti - 3 ore, con il traffico intorno alle due città come variabile principale.',
            ],
            byCarRoad: 'l\'Autostrada del Sole (A1)',
            byTrain: [
                'I treni Frecciarossa ad alta velocità collegano Roma Termini e Napoli Centrale in circa 1 ora e 10 minuti, con partenze ogni 15-30 minuti circa — una delle linee alta velocità più frequenti d\'Italia. Questo è il tempo da stazione a stazione; raggiungere Termini e proseguire da Napoli Centrale verso la destinazione finale si aggiunge al totale.',
            ],
            byPrivateTransfer: [
                'Un transfer privato copre lo stesso percorso porta a porta, particolarmente utile se si prosegue verso Pompei, Sorrento o la Costiera Amalfitana anziché fermarsi nel centro di Napoli, evitando un cambio di mezzo aggiuntivo.',
                'Per prezzi, opzioni di veicolo e prenotazione, visita la nostra pagina dedicata al transfer privato Roma - Napoli.',
            ],
            routePageSlugIt: 'trasferimento-roma-napoli',
            routePageLabelIt: 'Transfer Privato Roma - Napoli',
            popularStops: [
                { name: 'Montecassino', note: 'Sede della storica abbazia collinare, pressappoco a metà strada lungo l\'A1 tra Roma e Napoli.' },
            ],
            travelTimeFactors: [
                'Traffico intorno a Roma e Napoli, in particolare nelle ore di punta dei giorni feriali.',
                'Se il punto di partenza o arrivo è un aeroporto (Roma Fiumicino o Napoli Capodichino) anziché un centro città.',
                'Per il treno, il tempo necessario per raggiungere Termini e proseguire da Napoli Centrale.',
            ],
            bestWay: [
                'Il treno alta velocità è molto rapido da stazione a stazione e ha frequenze elevate, un\'ottima opzione per un semplice viaggio città-città. Se si prosegue oltre Napoli — verso Pompei, Sorrento o la Costiera Amalfitana — o si viaggia in gruppo o con bagagli, un transfer privato che arriva direttamente a destinazione di solito evita il cambio aggiuntivo.',
            ],
            faqs: [
                { q: 'Quanto dista Napoli da Roma?', a: 'Circa 190-199 km in linea d\'aria, o circa 226-230 km su strada — un tragitto di 2,5-3 ore.' },
                { q: 'Quanto dura il treno da Roma a Napoli?', a: 'I treni Frecciarossa ad alta velocità impiegano circa 1 ora e 10 minuti, con partenze molto frequenti durante la giornata.' },
                { q: 'Il treno è più veloce della guida da Roma a Napoli?', a: 'Da stazione a stazione sì, decisamente. Ma se la destinazione finale è oltre il centro di Napoli — Pompei, Sorrento o la Costiera Amalfitana — un transfer privato evita un cambio aggiuntivo e può risultare altrettanto comodo.' },
                { q: 'Posso fare una sosta tra Roma e Napoli?', a: 'L\'Abbazia di Montecassino, pressappoco a metà dell\'A1, è una tappa popolare per chi viaggia in auto o con transfer privato.' },
                { q: 'La distanza è diversa partendo dall\'aeroporto di Roma Fiumicino?', a: 'Sì — Fiumicino si trova a sud-ovest del centro di Roma, quindi i viaggi che partono da lì verso Napoli hanno distanza e tempi leggermente diversi rispetto al centro città.' },
            ],
        },
    },
    {
        slugEn: 'milan-to-venice-distance',
        slugIt: 'distanza-da-milano-a-venezia',
        origin: 'Milano', dest: 'Venezia',
        it: {
            seoTitle: 'Distanza Milano Venezia – Km e Tempo di Percorrenza',
            metaDescription: 'Quanto dista Venezia da Milano? Distanza in linea d\'aria, in auto e in treno a confronto, con tempi reali per ogni mezzo.',
            h1: 'Distanza da Milano a Venezia',
            intro: [
                'Milano e Venezia distano circa 246 km in linea d\'aria, con una distanza stradale di circa 265-280 km lungo l\'autostrada A4. In condizioni normali il viaggio richiede circa 2 ore e 40 minuti - 3 ore e 15 minuti, anche se l\'A4 può rallentare notevolmente nei periodi di punta o per la congestione intorno a Brescia e Verona.',
                'Venezia stessa è raggiungibile in auto solo fino a Piazzale Roma o ai parcheggi del Tronchetto, all\'estremità del centro storico affacciata sulla terraferma — il centro storico è raggiungibile solo a piedi o in barca, un dettaglio importante per organizzare un tragitto porta a porta.',
            ],
            centreVsDoorToDoor: [
                'I dati sopra coprono il tragitto dal centro di Milano fino al punto di accesso veicolare di Venezia sulla terraferma (Piazzale Roma). Da lì, raggiungere un hotel specifico nel centro storico richiede un\'ulteriore camminata o un tragitto in vaporetto/taxi acqueo — nessun veicolo, privato o pubblico, può entrare nel centro storico di Venezia.',
                'Il tempo di viaggio reale dipende anche dal punto di partenza a Milano — centro città o uno dei tre aeroporti milanesi (Malpensa, Linate o Bergamo) — che modifica la distanza verso Venezia di conseguenza.',
            ],
            byCar: [
                'In auto da Milano a Venezia si percorrono circa 265-280 km lungo l\'autostrada A4, passando per Bergamo, Brescia, Verona e Vicenza. Con traffico scorrevole il tragitto richiede circa 2 ore e 40 minuti; nei periodi più trafficati considera fino a 3 ore e 15 minuti o più.',
            ],
            byCarRoad: 'l\'autostrada A4',
            byTrain: [
                'I treni alta velocità collegano Milano Centrale e Venezia Santa Lucia (nel centro storico) in circa 2 ore e 30 - 2 ore e 40 minuti, con partenze frequenti ogni giorno. Poiché la stazione di Santa Lucia si trova proprio ai margini del centro storico, il treno è spesso il modo più diretto per raggiungere il cuore di Venezia.',
            ],
            byPrivateTransfer: [
                'Un transfer privato ti porta porta a porta da Milano fino alla terraferma veneziana (Piazzale Roma o il tuo hotel se si trova sul lato Mestre/terraferma), ideale per bagagli o gruppi, anche se raggiungere un hotel nel centro storico richiede comunque un ultimo tratto in barca o a piedi.',
                'Per prezzi, opzioni di veicolo e prenotazione, visita la nostra pagina dedicata al transfer privato Milano - Venezia.',
            ],
            routePageSlugIt: undefined,
            routePageLabelIt: undefined,
            popularStops: [
                { name: 'Verona', note: 'Direttamente sul percorso dell\'A4, a circa due terzi del tragitto verso Venezia — tappa popolare per l\'Arena e il centro storico.' },
                { name: 'Vicenza', note: 'Anch\'essa lungo il corridoio dell\'A4 tra Verona e Venezia, nota per l\'architettura palladiana.' },
            ],
            travelTimeFactors: [
                'Traffico sull\'A4, in particolare intorno a Brescia e Verona e nei periodi di punta.',
                'Se si parte dal centro di Milano o da uno dei tre aeroporti.',
                'Il fatto che il centro storico di Venezia sia raggiungibile solo in barca o a piedi da Piazzale Roma, indipendentemente da come si arriva sulla terraferma.',
            ],
            bestWay: [
                'Per raggiungere il centro storico di Venezia, il treno è di solito l\'opzione più diretta, dato che la stazione di Santa Lucia si trova proprio ai suoi margini. Per gruppi, bagagli ingombranti, o un punto di partenza diverso da Milano Centrale, un transfer privato fino alla terraferma (con un ultimo breve tratto in barca o a piedi verso il centro) è spesso più comodo.',
            ],
            faqs: [
                { q: 'Quanto dista Venezia da Milano?', a: 'Circa 246 km in linea d\'aria, o circa 265-280 km su strada, con un tragitto di circa 2 ore e 40 minuti - 3 ore e 15 minuti a seconda del traffico.' },
                { q: 'Quanto dura il treno da Milano a Venezia?', a: 'I treni alta velocità impiegano circa 2 ore e 30 - 2 ore e 40 minuti tra Milano Centrale e Venezia Santa Lucia, proprio nel centro storico.' },
                { q: 'Posso entrare in auto nel centro storico di Venezia?', a: 'No — il centro storico non ha accesso stradale. Le auto possono raggiungere solo Piazzale Roma o i parcheggi del Tronchetto sulla terraferma; da lì si prosegue a piedi o in barca.' },
                { q: 'Il treno è meglio della guida per Venezia?', a: 'Per raggiungere il centro storico sì, dato che la stazione si trova proprio ai suoi margini. Guidare o un transfer privato sono più pratici se sei diretto verso la terraferma veneziana (Mestre) o vuoi proseguire altrove.' },
                { q: 'Quale aeroporto di Milano è più vicino a Venezia?', a: 'In termini di distanza la differenza tra gli aeroporti milanesi è modesta per un viaggio verso Venezia; Linate è il più vicino al centro città, mentre Malpensa e Bergamo sono più lontani, il che può influire sul tempo totale a seconda del punto di partenza.' },
            ],
        },
    },
    {
        slugEn: 'naples-to-amalfi-coast-distance',
        slugIt: 'distanza-da-napoli-alla-costiera-amalfitana',
        origin: 'Napoli', dest: 'Costiera Amalfitana',
        it: {
            seoTitle: 'Distanza Napoli Costiera Amalfitana – Km e Tempo',
            metaDescription: 'Quanto dista la Costiera Amalfitana da Napoli? Distanza in linea d\'aria e in auto verso Amalfi, con tempi reali per auto, bus/treno e transfer privato.',
            h1: 'Distanza da Napoli alla Costiera Amalfitana',
            intro: [
                'Napoli e Amalfi distano solo circa 37-38 km in linea d\'aria, ma la distanza stradale reale è di circa 60-65 km, perché la SS163 deve seguire ogni baia e promontorio lungo le scogliere anziché tagliare in linea retta. Questa differenza è molto maggiore rispetto a un tipico percorso nell\'entroterra.',
                '"Costiera Amalfitana" comprende diverse località — Positano, Amalfi, Ravello e altre — quindi la distanza e il tempo reali variano in base alla meta scelta.',
            ],
            centreVsDoorToDoor: [
                'I dati sopra usano Amalfi come punto di riferimento. Positano, più vicina a Sorrento, si raggiunge tramite un altro tratto della statale costiera con un proprio tempo di percorrenza; Ravello si trova sopra Amalfi e richiede un\'ulteriore salita.',
                'Non esiste un treno diretto verso nessuna località della Costiera Amalfitana — i mezzi pubblici richiedono un treno fino a Salerno o Sorrento seguito da un bus SITA o un traghetto stagionale, il che aggiunge tempo reale oltre ai dati di guida sopra indicati. Un transfer privato è l\'unica opzione porta a porta che evita del tutto questo cambio.',
            ],
            byCar: [
                'In auto da Napoli ad Amalfi si percorrono circa 60-65 km via Salerno e la statale costiera SS163 (oppure via Sorrento dal lato ovest), in circa 1 ora e 30 minuti - 2 ore in condizioni normali. La SS163 è stretta e tortuosa con curve strette, quindi nella stagione estiva il traffico sulla costiera rallenta notevolmente.',
            ],
            byCarRoad: 'la statale costiera SS163 Amalfitana',
            byTrain: [
                'Non esiste un treno diretto verso la Costiera Amalfitana — la linea ferroviaria non raggiunge la costa. Il percorso tipico con mezzi pubblici è un treno da Napoli a Salerno, poi un bus SITA lungo la costiera fino ad Amalfi, Positano o Ravello (oppure, dal lato di Sorrento, la Circumvesuviana seguita da bus o traghetto stagionale). Ogni cambio aggiunge attesa e tempo di viaggio oltre ai dati di guida sopra.',
            ],
            byPrivateTransfer: [
                'Un transfer privato è l\'unico modo per viaggiare porta a porta senza cambiare su un bus, perché percorre direttamente la statale costiera fino al tuo hotel — un vero vantaggio data la mancanza di collegamento ferroviario e le coincidenze scomode dei bus locali.',
                'Per prezzi, opzioni di veicolo e prenotazione, visita la nostra pagina dedicata al transfer privato Napoli - Costiera Amalfitana.',
            ],
            routePageSlugIt: undefined,
            routePageLabelIt: undefined,
            popularStops: [
                { name: 'Vietri sul Mare', note: 'La cittadina d\'ingresso dove inizia la statale costiera SS163, appena dopo Salerno.' },
            ],
            travelTimeFactors: [
                'Stagione — la statale SS163 diventa molto più trafficata da maggio a ottobre.',
                'La specifica località della Costiera Amalfitana di destinazione (Positano, Amalfi e Ravello hanno ciascuna distanza e percorso diversi).',
                'Traffico attraverso Salerno o Sorrento all\'inizio della statale costiera.',
                'Per i mezzi pubblici, il tempo di attesa per la coincidenza con il bus SITA o il traghetto.',
            ],
            bestWay: [
                'Dato che non esiste un treno diretto e le coincidenze con i bus locali richiedono tempi reali difficili da prevedere, un transfer privato è di solito il modo più diretto per raggiungere un hotel specifico sulla Costiera Amalfitana, specialmente con bagagli. I mezzi pubblici (treno più bus SITA) restano un\'opzione economica valida per chi viaggia leggero e con tempo flessibile.',
            ],
            faqs: [
                { q: 'Quanto dista la Costiera Amalfitana da Napoli?', a: 'Usando Amalfi come punto di riferimento, circa 37-38 km in linea d\'aria, ma la distanza in auto è di circa 60-65 km lungo la tortuosa SS163, con un tragitto di 1,5-2 ore.' },
                { q: 'Perché la distanza in auto è così maggiore di quella in linea d\'aria?', a: 'La statale SS163 deve seguire le scogliere e le baie della costiera amalfitana anziché tagliare in linea retta, il che aggiunge distanza significativa rispetto a un percorso tipico nell\'entroterra.' },
                { q: 'Esiste un treno diretto per la Costiera Amalfitana?', a: 'No — non c\'è una linea ferroviaria lungo la Costiera Amalfitana. Serve un treno fino a Salerno o Sorrento, poi un bus SITA (o un traghetto stagionale) per raggiungere Amalfi, Positano o Ravello.' },
                { q: 'Positano è alla stessa distanza di Amalfi da Napoli?', a: 'No — Positano e Amalfi si raggiungono tramite tratti diversi della statale costiera e non hanno la stessa distanza da Napoli; ogni località della costiera ha il proprio tempo di percorrenza.' },
                { q: 'Qual è il modo più veloce per andare da Napoli alla Costiera Amalfitana?', a: 'Un transfer privato che percorre direttamente la strada è generalmente l\'opzione porta a porta più prevedibile, perché evita il cambio e l\'attesa richiesti dal percorso con mezzi pubblici (treno più bus).' },
            ],
        },
    },
    {
        slugEn: 'rome-to-pompeii-distance',
        slugIt: 'distanza-da-roma-a-pompei',
        origin: 'Roma', dest: 'Pompei',
        it: {
            seoTitle: 'Distanza Roma Pompei – Km e Tempo di Percorrenza',
            metaDescription: 'Quanto dista Pompei da Roma? Distanza in linea d\'aria, in auto e in treno a confronto, con tempi reali per auto, treno e transfer privato.',
            h1: 'Distanza da Roma a Pompei',
            intro: [
                'Roma e Pompei distano circa 210-211 km in linea d\'aria, con una distanza stradale di circa 240 km lungo l\'autostrada A1, che richiede in genere 2,5-3 ore.',
                'Non esiste un treno diretto da Roma a Pompei, il che rende il tempo di coincidenza una parte importante del confronto tra le opzioni.',
            ],
            centreVsDoorToDoor: [
                'I dati sopra sono misurati fino al centro di Roma e al sito archeologico di Pompei Scavi. Partire dall\'aeroporto di Roma Fiumicino anziché dal centro città modifica leggermente distanza e tempi, poiché l\'aeroporto si trova a sud-ovest del centro di Roma.',
                'Un transfer privato ti porta direttamente all\'ingresso del sito, evitando la camminata tra i binari di Napoli Centrale e quelli della Circumvesuviana richiesta dall\'opzione treno.',
            ],
            byCar: [
                'In auto da Roma a Pompei si percorrono circa 240 km lungo le autostrade A1 e A3, in circa 2 ore e 30 minuti - 3 ore, a seconda del traffico intorno a Roma e Napoli.',
            ],
            byCarRoad: 'le autostrade A1 e A3',
            byTrain: [
                'Non esiste un treno diretto da Roma a Pompei. Il percorso tipico è un treno Frecciarossa ad alta velocità da Roma Termini a Napoli Centrale (circa 1 ora e 10 minuti), seguito da un cambio sulla linea Circumvesuviana fino a Pompei Scavi - Villa dei Misteri (circa 35 minuti). Includendo la camminata tra i binari a Napoli Centrale e l\'attesa per la coincidenza, il totale realistico è di circa 1 ora e 45 minuti - 2 ore e 10 minuti porta-stazione.',
            ],
            byPrivateTransfer: [
                'Un transfer privato copre l\'intero percorso in un\'unica corsa senza cambio di treno o stazione, arrivando direttamente all\'ingresso di Pompei — utile per una gita di un giorno in cui si vuole massimizzare il tempo al sito anziché in viaggio.',
                'Per prezzi, opzioni di veicolo e prenotazione, visita la nostra pagina dedicata al transfer privato Roma - Pompei.',
            ],
            routePageSlugIt: 'trasferimento-roma-pompei',
            routePageLabelIt: 'Transfer Privato Roma - Pompei',
            popularStops: [
                { name: 'Montecassino', note: 'La storica abbazia collinare, pressappoco a metà strada lungo l\'A1 tra Roma e l\'area di Napoli.' },
            ],
            travelTimeFactors: [
                'Traffico intorno a Roma e Napoli, in particolare nelle ore di punta dei giorni feriali.',
                'Per il treno, il tempo di coincidenza tra l\'arrivo del Frecciarossa e la partenza della Circumvesuviana a Napoli Centrale.',
                'Se si prosegue verso Napoli o Sorrento anziché tornare direttamente a Roma.',
            ],
            bestWay: [
                'Per una gita di un giorno in cui il tempo al sito conta di più, un transfer privato evita il cambio di stazione e la camminata richiesti dal percorso in treno. Il treno può funzionare bene per chi viaggia con budget limitato, bagagli leggeri e si trova a proprio agio con una coincidenza a Napoli Centrale.',
            ],
            faqs: [
                { q: 'Quanto dista Pompei da Roma?', a: 'Circa 210-211 km in linea d\'aria, o circa 240 km su strada — un tragitto di 2,5-3 ore.' },
                { q: 'Esiste un treno diretto da Roma a Pompei?', a: 'No. Serve un treno alta velocità da Roma Termini a Napoli Centrale (circa 1 ora e 10 minuti), poi un cambio sulla linea Circumvesuviana fino a Pompei Scavi (circa 35 minuti).' },
                { q: 'Quanto dura l\'intero viaggio in treno, incluso il cambio?', a: 'Realisticamente circa 1 ora e 45 minuti - 2 ore e 10 minuti porta-stazione, includendo la camminata tra i binari e l\'attesa della Circumvesuviana a Napoli Centrale.' },
                { q: 'Posso fare Roma-Pompei come gita di un giorno?', a: 'Sì — è una gita di un giorno molto popolare, specialmente con transfer privato, che può anche aspettare durante la visita al sito e riportarti direttamente a Roma.' },
                { q: 'Qual è la stazione più vicina agli scavi di Pompei?', a: 'Pompei Scavi - Villa dei Misteri, sulla linea Circumvesuviana, si trova proprio accanto all\'ingresso principale del sito archeologico.' },
            ],
        },
    },
    {
        slugEn: 'venice-to-verona-distance',
        slugIt: 'distanza-da-venezia-a-verona',
        origin: 'Venezia', dest: 'Verona',
        it: {
            seoTitle: 'Distanza Venezia Verona – Km e Tempo di Percorrenza',
            metaDescription: 'Quanto dista Verona da Venezia? Distanza in linea d\'aria, in auto e in treno a confronto, con tempi reali per ogni mezzo.',
            h1: 'Distanza da Venezia a Verona',
            intro: [
                'Venezia e Verona distano circa 103-105 km in linea d\'aria, con una distanza stradale di circa 115-119 km lungo l\'autostrada A4, percorribile in genere in 1 ora e 15 - 1 ora e 30 minuti.',
                'Come per ogni percorso da Venezia, conta molto il punto di partenza sul lato veneziano: i viaggi iniziano da Piazzale Roma (il limite veicolare della terraferma) o dalla terraferma/Mestre, non dal centro storico galleggiante.',
            ],
            centreVsDoorToDoor: [
                'I dati sopra sono misurati dal punto di accesso veneziano sulla terraferma fino al centro di Verona. Se il tuo hotel a Venezia è nel centro storico (isole), aggiungi il tempo per raggiungere in barca o a piedi Piazzale Roma prima che possa iniziare qualsiasi tragitto in auto.',
                'A Verona il centro storico è compatto e per lo più percorribile a piedi dal punto di arrivo, quindi il tempo porta a porta aggiuntivo lì è generalmente contenuto.',
            ],
            byCar: [
                'In auto da Venezia (Piazzale Roma/Mestre) a Verona si percorrono circa 115-119 km lungo l\'autostrada A4, in circa 1 ora e 15 - 1 ora e 30 minuti con traffico normale.',
            ],
            byCarRoad: 'l\'autostrada A4',
            byTrain: [
                'I treni tra Venezia Santa Lucia e Verona Porta Nuova partono almeno ogni ora, con i servizi più rapidi che impiegano circa 55 minuti - 1 ora e 15 minuti e i regionali fino a circa 1 ora e 50 minuti. Poiché Santa Lucia si trova ai margini del centro storico di Venezia, il treno è spesso il modo più diretto per iniziare questo viaggio.',
            ],
            byPrivateTransfer: [
                'Un transfer privato ti preleva dal tuo hotel sulla terraferma veneziana o da Piazzale Roma e ti porta direttamente al tuo indirizzo a Verona, comodo con bagagli o in gruppo, ed evita di dover controllare gli orari dei treni.',
                'Per prezzi, opzioni di veicolo e prenotazione, visita la nostra pagina dedicata al transfer privato Venezia - Verona.',
            ],
            routePageSlugIt: 'trasferimento-venezia-verona',
            routePageLabelIt: 'Transfer Privato Venezia - Verona',
            popularStops: [
                { name: 'Vicenza', note: 'Direttamente sul percorso dell\'A4 e sulla linea ferroviaria tra Venezia e Verona, nota per le ville palladiane e l\'architettura.' },
            ],
            travelTimeFactors: [
                'Traffico sull\'A4, in particolare nei periodi di punta.',
                'Se il punto di partenza a Venezia è sulla terraferma o richiede prima un tragitto in barca/a piedi dal centro storico.',
                'Se si sceglie un servizio ferroviario più rapido o regionale, il che incide notevolmente sul tempo di viaggio.',
            ],
            bestWay: [
                'Per un semplice viaggio città-città, il treno è rapido e frequente, specialmente sui servizi più veloci. Un transfer privato vale la pena con bagagli, in gruppo, o se il tuo hotel a Venezia e la destinazione a Verona non sono vicini a nessuna delle due stazioni.',
            ],
            faqs: [
                { q: 'Quanto dista Verona da Venezia?', a: 'Circa 103-105 km in linea d\'aria, o circa 115-119 km su strada — un tragitto di 1 ora e 15 - 1 ora e 30 minuti.' },
                { q: 'Quanto dura il treno da Venezia a Verona?', a: 'I servizi più rapidi impiegano circa 55 minuti - 1 ora e 15 minuti; i regionali possono arrivare a circa 1 ora e 50 minuti. I treni partono almeno ogni ora.' },
                { q: 'Posso guidare dal centro storico di Venezia fino a Verona?', a: 'Non direttamente — devi prima raggiungere Piazzale Roma o la terraferma in barca o a piedi, dato che il centro storico non ha accesso stradale, prima che possa iniziare un tragitto in auto verso Verona.' },
                { q: 'È meglio il treno o un transfer privato per Venezia-Verona?', a: 'Il treno è efficiente per un semplice viaggio città-città. Un transfer privato è più comodo con bagagli o in gruppo, o se desideri un tragitto diretto porta a porta senza un viaggio stazione-stazione.' },
                { q: 'Posso fare tappa a Vicenza lungo il percorso?', a: 'Sì — Vicenza si trova direttamente sul percorso tra Venezia e Verona, sia su strada che in treno, ed è nota per la sua architettura palladiana.' },
            ],
        },
    },
    {
        slugEn: 'milan-to-turin-distance',
        slugIt: 'distanza-da-milano-a-torino',
        origin: 'Milano', dest: 'Torino',
        it: {
            seoTitle: 'Distanza Milano Torino – Km e Tempo di Percorrenza',
            metaDescription: 'Quanto dista Torino da Milano? Distanza in linea d\'aria, in auto e in treno a confronto, con tempi reali per ogni mezzo.',
            h1: 'Distanza da Milano a Torino',
            intro: [
                'Milano e Torino distano circa 125 km in linea d\'aria, con una distanza stradale di circa 140-144 km lungo l\'autostrada A4, percorribile in genere in 1 ora e 20 - 1 ora e 40 minuti.',
                'Poiché il territorio tra le due città è per lo più pianeggiante, la differenza tra la distanza in linea d\'aria e quella in auto è relativamente contenuta rispetto ai percorsi che attraversano colline o coste.',
            ],
            centreVsDoorToDoor: [
                'I dati sopra sono misurati da centro a centro. Partire da uno degli aeroporti di Milano (Malpensa, Linate o Bergamo) anziché dal centro città modifica la distanza e il tempo verso Torino, a volte in modo significativo a seconda dell\'aeroporto.',
                'Un transfer privato viene calcolato sui tuoi indirizzi specifici di ritiro e destinazione, che si tratti di un hotel in centro, un ufficio o un aeroporto.',
            ],
            byCar: [
                'In auto da Milano a Torino si percorrono circa 140-144 km lungo l\'autostrada A4, in circa 1 ora e 20 - 1 ora e 40 minuti con traffico normale.',
            ],
            byCarRoad: 'l\'autostrada A4',
            byTrain: [
                'È una delle linee alta velocità più rapide d\'Italia su breve tratta: i treni Frecciarossa e Italo collegano Milano Centrale e Torino Porta Nuova in appena 44-50 minuti, con partenze almeno due volte l\'ora. I treni regionali coprono lo stesso percorso ma impiegano molto più tempo, fino a circa 1 ora e 40 minuti.',
            ],
            byPrivateTransfer: [
                'Un transfer privato ti porta direttamente tra i tuoi indirizzi a Milano e Torino senza fermata in stazione, comodo per viaggi di lavoro, gruppi o bagagli.',
                'Per prezzi, opzioni di veicolo e prenotazione, visita la nostra pagina dedicata al transfer privato Milano - Torino.',
            ],
            routePageSlugIt: undefined,
            routePageLabelIt: undefined,
            popularStops: [
                { name: 'Novara', note: 'Città direttamente sul percorso dell\'A4 e sulla linea ferroviaria tra Milano e Torino.' },
            ],
            travelTimeFactors: [
                'Traffico sull\'A4, specialmente intorno a Milano e Torino stesse.',
                'Se si parte da un indirizzo nel centro di Milano o da uno dei tre aeroporti.',
                'Se si sceglie un servizio alta velocità Frecciarossa/Italo o un treno regionale più lento.',
            ],
            bestWay: [
                'Per un viaggio rapido città-città, il treno alta velocità è difficile da battere — meno di un\'ora, da stazione a stazione, con partenze frequenti. Un transfer privato vale la pena per la comodità porta a porta, con un gruppo, bagagli, o quando una delle due estremità del viaggio è un aeroporto anziché un centro città.',
            ],
            faqs: [
                { q: 'Quanto dista Torino da Milano?', a: 'Circa 125 km in linea d\'aria, o circa 140-144 km su strada — un tragitto di 1 ora e 20 - 1 ora e 40 minuti.' },
                { q: 'Quanto dura il treno veloce da Milano a Torino?', a: 'I treni alta velocità Frecciarossa e Italo impiegano appena 44-50 minuti tra Milano Centrale e Torino Porta Nuova, con partenze frequenti.' },
                { q: 'Il treno è molto più veloce della guida?', a: 'Da stazione a stazione sì — i treni più rapidi impiegano meno di un\'ora contro 1 ora e 20 minuti o più su strada. Un transfer privato scambia parte di questa velocità con un tragitto diretto porta a porta.' },
                { q: 'Conta da quale aeroporto di Milano parto?', a: 'Sì — Malpensa, Linate e Bergamo sono tutti a distanze diverse da Torino, quindi il tempo di viaggio dipende da quale aeroporto stai usando.' },
                { q: 'Tutti i treni da Milano a Torino sono ugualmente veloci?', a: 'No — i servizi alta velocità Frecciarossa e Italo impiegano meno di 50 minuti, mentre i treni regionali sullo stesso percorso possono arrivare a circa 1 ora e 40 minuti.' },
            ],
        },
    },
];

// ─────────────────────────────────────────────────────────────────────────
// Part 2 — Italian halves of the 10 brand-new bilingual distance pages.
// English halves live in distancePages[] (distance-pages-data.ts).
// ─────────────────────────────────────────────────────────────────────────

export interface NewDistancePageIt {
    slugEn: string;
    slugIt: string;
    origin: string;
    dest: string;
    heroImage: string;
    it: DistanceLangContentIt;
}

export const newDistancePagesIt: NewDistancePageIt[] = [
    {
        slugEn: 'rome-to-vatican-distance',
        slugIt: 'distanza-da-roma-al-vaticano',
        origin: 'Roma', dest: 'Città del Vaticano',
        heroImage: '/images/rome airport.webp',
        it: {
            seoTitle: 'Distanza Roma Vaticano – Km e Tempo di Percorrenza',
            metaDescription: 'Quanto dista il Vaticano dal centro di Roma? Distanza e tempi in auto, a piedi e con transfer privato dalle diverse zone della città.',
            h1: 'Distanza da Roma al Vaticano',
            intro: [
                'A differenza della maggior parte delle pagine di questo sito, Roma-Vaticano non è un tragitto tra due città distinte — la Città del Vaticano è uno stato indipendente interamente circondato da Roma, vicino al centro storico. Quindi la vera risposta a "quanto dista" dipende quasi interamente dalla zona di Roma da cui si parte, non da un unico dato fisso.',
                'Questa pagina si concentra su ciò che conta davvero per organizzare la visita: distanze e tempi tipici dalle principali zone turistiche e alberghiere del centro di Roma, e le opzioni pratiche per arrivarci.',
            ],
            centreVsDoorToDoor: [
                'Da Piazza Navona o dalla zona del Pantheon sono circa 1,5 km fino a Piazza San Pietro — circa 18-20 minuti a piedi. Da zone più a est (Fontana di Trevi, area Termini), conta 3-4 km e 30-45 minuti a piedi.',
                'In auto la distanza è breve in ogni caso — tipicamente 2-5 km — ma il tempo di viaggio reale dipende molto dal traffico e dal fatto che l\'accesso veicolare fino a Piazza San Pietro è limitato; un autista ti farà scendere il più vicino possibile secondo le norme sulla circolazione, con una breve camminata finale.',
            ],
            byCar: [
                'Guidare verso il Vaticano dalla maggior parte degli indirizzi del centro di Roma copre solo pochi chilometri, ma le strade strette del centro storico, i sensi unici e le zone a traffico limitato (ZTL) fanno sì che il tragitto possa richiedere più tempo di quanto suggerisca la breve distanza — in genere 10-20 minuti fuori dalle ore di punta, di più durante le udienze generali del mercoledì o eventi importanti, quando l\'area intorno a Piazza San Pietro registra significative limitazioni pedonali e veicolari.',
            ],
            byCarRoad: 'le strade del centro di Roma (nessuna autostrada è coinvolta per una distanza così breve)',
            byTrain: [
                'Non esiste un treno diretto per il Vaticano. L\'opzione più vicina è la Linea A della metropolitana di Roma, con fermata a Ottaviano-San Pietro, a circa 10 minuti a piedi da Piazza San Pietro. Dalla maggior parte degli hotel del centro, un taxi o un transfer privato copre la stessa breve distanza senza dover camminare fino a una stazione.',
            ],
            byPrivateTransfer: [
                'Per un tragitto breve e specifico come questo, il vantaggio principale di un transfer privato è la comodità: ritiro dal tuo hotel o indirizzo esatto, nessuna camminata verso una stazione della metro, e un autista che sa esattamente dove i veicoli possono e non possono fermarsi vicino a Piazza San Pietro.',
                'Per prezzi e prenotazione, visita la nostra pagina dedicata al transfer privato Roma - Vaticano.',
            ],
            routePageSlugIt: undefined,
            routePageLabelIt: undefined,
            popularStops: [],
            travelTimeFactors: [
                'Il punto di partenza esatto a Roma — il centro storico è molto più vicino rispetto alle zone più a est o a sud.',
                'Le udienze generali del mercoledì e i grandi eventi vaticani, che portano folla aggiuntiva e limitazioni stradali intorno a Piazza San Pietro.',
                'Traffico e accesso veicolare limitato nel centro storico di Roma in generale.',
                'Se ci si sposta a piedi, gli attraversamenti del fiume e i percorsi pedonali a senso unico incidono sul tragitto pratico più della distanza in linea d\'aria.',
            ],
            bestWay: [
                'Se alloggi già vicino al centro storico, camminare è spesso altrettanto rapido di un breve tragitto in auto una volta considerati traffico e limitazioni di accesso. Da zone più lontane, con tempo limitato, esigenze di mobilità, o durante un\'udienza del mercoledì, un transfer privato o un taxi fino al punto di discesa più pratico sono più comodi.',
            ],
            faqs: [
                { q: 'Quanto dista il Vaticano dal centro di Roma?', a: 'Dipende dal punto di partenza — circa 1,5 km (18-20 minuti a piedi) da Piazza Navona, o 3-4 km (30-45 minuti a piedi) da zone più a est come Termini. Il Vaticano si trova all\'interno di Roma, non è una destinazione separata fuori città.' },
                { q: 'Posso camminare dal centro di Roma al Vaticano?', a: 'Sì — per la maggior parte degli hotel del centro storico è una comoda camminata di 20-40 minuti, e molti visitatori la percorrono come tragitto panoramico lungo o vicino al Tevere.' },
                { q: 'Conviene prendere un taxi per il Vaticano?', a: 'Per una breve distanza senza bagagli, camminare o la metro (Linea A fino a Ottaviano) possono essere altrettanto rapidi. Un taxi o transfer privato conviene con bagagli, esigenze di mobilità, maltempo, o quando si desidera un orario di ritiro specifico.' },
                { q: 'Perché non esiste un dato unico di distanza Roma-Vaticano?', a: 'Perché il Vaticano si trova all\'interno di Roma anziché essere una città separata — la distanza reale dipende interamente dalla zona della città da cui si parte.' },
                { q: 'Il traffico vicino al Vaticano è intenso?', a: 'Sì, specialmente il mercoledì mattina per l\'udienza generale del Papa e in occasione di grandi eventi religiosi, quando sia il traffico pedonale che quello veicolare aumentano notevolmente vicino a Piazza San Pietro.' },
            ],
        },
    },
    {
        slugEn: 'florence-to-siena-distance',
        slugIt: 'distanza-da-firenze-a-siena',
        origin: 'Firenze', dest: 'Siena',
        heroImage: '/images/Tuscany Wine.webp',
        it: {
            seoTitle: 'Distanza Firenze Siena – Km e Tempo di Percorrenza',
            metaDescription: 'Quanto dista Siena da Firenze? Distanza e tempi in auto lungo la SR2 veloce e la panoramica strada del Chianti, più treno e transfer privato.',
            h1: 'Distanza da Firenze a Siena',
            intro: [
                'Firenze-Siena è un percorso toscano insolito, perché offre due strade davvero diverse, non solo un unico itinerario con traffico variabile: la SR2 Superstrada veloce e la panoramica SR222 "Chiantigiana" attraverso la zona del Chianti. Quale scegliere dipende dal dare priorità alla velocità o al viaggio in sé.',
                'Questa pagina confronta entrambe le opzioni, oltre a treno e transfer privato, per scegliere in base a ciò che conta per il tuo viaggio.',
            ],
            centreVsDoorToDoor: [
                'I tempi sotto indicati si riferiscono al tragitto diretto città-città. Aggiungi tempo extra se il punto di ritiro a Firenze è fuori dal centro o se ti fermi in una delle località del Chianti lungo la SR222 — quella strada è scelta proprio perché invita a fare soste, non perché sia la via più rapida.',
            ],
            byCar: [
                'Il percorso veloce segue la SR2 Superstrada Firenze-Siena, una superstrada gratuita a quattro corsie lungo il bordo occidentale del Chianti, che copre il tragitto in circa 50 minuti senza soste.',
                'L\'alternativa panoramica segue la SR222 "Via Chiantigiana" direttamente attraverso la zona del Chianti — circa 69 km e circa 1 ora e 30 minuti, circa 15 minuti in più della SR2 ma passando direttamente tra vigneti e borghi del Chianti anziché costeggiarli.',
            ],
            byCarRoad: 'la SR2 Superstrada (veloce) o la SR222 Via Chiantigiana (panoramica, attraverso il Chianti)',
            byTrain: [
                'I treni regionali collegano Firenze Santa Maria Novella a Siena con fino a 8 collegamenti diretti al giorno, impiegando circa 1 ora e 10 minuti sui treni diretti più rapidi e fino a circa 1 ora e 40 minuti su quelli più lenti con più fermate. I servizi partono all\'incirca ogni 60-90 minuti.',
            ],
            byPrivateTransfer: [
                'Un transfer privato ti permette di scegliere il percorso più adatto al tuo viaggio — la SR2 diretta se devi solo arrivare a Siena, oppure la SR222 attraverso il Chianti con la flessibilità di fermarti in una cantina o in un borgo lungo il tragitto, cosa che né il treno né un pullman a orario fisso possono offrire.',
                'Per prezzi e prenotazione, visita la nostra pagina dedicata al transfer privato Firenze - Siena.',
            ],
            routePageSlugIt: 'trasferimento-firenze-siena',
            routePageLabelIt: 'Transfer Privato Firenze - Siena',
            popularStops: [
                { name: 'Zona del Chianti', note: 'Direttamente lungo il percorso della SR222 — il motivo per cui molti viaggiatori scelgono la strada panoramica anziché la più veloce SR2.' },
                { name: 'Castellina in Chianti', note: 'Uno dei borghi più noti del Chianti, situato proprio sulla Via Chiantigiana tra Firenze e Siena.' },
            ],
            travelTimeFactors: [
                'Quale percorso si sceglie — la SR2 e la SR222 differiscono di circa 15-40 minuti a seconda delle condizioni.',
                'Traffico in uscita da Firenze, soprattutto nelle ore di punta dei giorni feriali.',
                'Se si fa sosta nel Chianti lungo il percorso panoramico.',
                'Per il treno, se si prende un servizio diretto o uno con più fermate.',
            ],
            bestWay: [
                'Se l\'obiettivo è Siena e il tempo è limitato, la SR2 o il treno diretto sono entrambi efficienti. Se il tragitto attraverso il Chianti fa parte del fascino del viaggio, un transfer privato sulla SR222 — con possibilità di fermarsi — ha più senso sia della strada veloce che di un orario ferroviario fisso.',
            ],
            faqs: [
                { q: 'Quanto dista Siena da Firenze?', a: 'Dipende dal percorso: circa 50 minuti via la SR2 Superstrada veloce, oppure circa 69 km e 1 ora e 30 minuti via la panoramica SR222 Chiantigiana attraverso la zona del Chianti.' },
                { q: 'Meglio la SR2 o la strada del Chianti?', a: 'La SR2 è più veloce e diretta. La SR222 (Via Chiantigiana) richiede più tempo ma attraversa vigneti e borghi del Chianti — è la scelta preferita quando il viaggio in sé fa parte dell\'esperienza.' },
                { q: 'Esiste un treno diretto da Firenze a Siena?', a: 'Sì — i treni regionali collegano direttamente Santa Maria Novella a Siena in circa 1 ora e 10 minuti sui servizi più rapidi, con fino a 8 collegamenti diretti al giorno.' },
                { q: 'Posso fermarmi nel Chianti andando verso Siena?', a: 'Sì, se prendi il percorso della SR222 in auto o con transfer privato — attraversa direttamente la zona del Chianti, a differenza della più veloce SR2 che la costeggia soltanto.' },
                { q: 'Conviene guidare invece di prendere il treno per Siena?', a: 'Se vuoi fermarti nel Chianti o viaggi con bagagli o in gruppo, guidare o un transfer privato sono più flessibili. Per un semplice viaggio città-città, il treno resta un\'opzione diretta ed efficiente.' },
            ],
        },
    },
    {
        slugEn: 'rome-fiumicino-to-sorrento-distance',
        slugIt: 'distanza-dallaeroporto-di-fiumicino-a-sorrento',
        origin: 'Aeroporto di Roma Fiumicino', dest: 'Sorrento',
        heroImage: '/images/almafi.webp',
        it: {
            seoTitle: 'Distanza Fiumicino Sorrento – Km e Tempo',
            metaDescription: 'Quanto dista Sorrento dall\'aeroporto di Roma Fiumicino? Distanza in auto, tempo di percorrenza tipico e opzioni di trasporto per questo transfer.',
            h1: 'Distanza dall\'Aeroporto di Fiumicino a Sorrento',
            intro: [
                'Roma Fiumicino-Sorrento è uno dei transfer aeroportuali più lunghi tra quelli trattati su questo sito — circa 280-290 km, prevalentemente autostrada, con l\'ultimo tratto costiero verso la penisola sorrentina. È un percorso comune per chi atterra a Roma e prosegue direttamente verso la Costiera Amalfitana senza fermarsi in città.',
                'Trattandosi di un viaggio di più ore, vale la pena capire le differenze pratiche tra guida, treno (con cambio) e transfer privato prima di prenotare.',
            ],
            centreVsDoorToDoor: [
                'I dati sopra sono da aeroporto a città. Il tempo esatto varia leggermente in base al tuo hotel o indirizzo specifico a Sorrento e al terminal di arrivo a Fiumicino, ma la differenza è minima rispetto alla lunghezza complessiva del viaggio.',
            ],
            byCar: [
                'In auto da Fiumicino a Sorrento si percorrono circa 280-290 km lungo le autostrade A1 e A3, costeggiando Napoli, in genere 3 ore - 3 ore e 30 minuti a seconda del traffico — in particolare intorno a Napoli, che può causare ritardi reali nelle ore di punta.',
            ],
            byCarRoad: 'le autostrade A1 e A3, costeggiando Napoli',
            byTrain: [
                'Non esiste un treno diretto da Fiumicino a Sorrento. Il percorso pratico è il Leonardo Express o un treno regionale fino a Roma, un treno alta velocità da Roma Termini a Napoli Centrale, e infine la Circumvesuviana fino a Sorrento — tre tratte separate con coincidenze, per un totale realistico di 2,5-3+ ore di viaggio più attese e cambi, gestendo i bagagli tra più stazioni.',
            ],
            byPrivateTransfer: [
                'Per un viaggio così lungo con coincidenze così scomode in treno, il vantaggio principale di un transfer privato è percorrere l\'intero tragitto con un unico veicolo, senza cambi di stazione o bagagli da spostare — un aspetto rilevante su un viaggio di oltre 3 ore appena scesi da un volo.',
                'Per prezzi e prenotazione, visita la nostra pagina dedicata al transfer privato Fiumicino - Sorrento.',
            ],
            routePageSlugIt: 'trasferimento-aeroporto-fiumicino-sorrento',
            routePageLabelIt: 'Transfer Privato Fiumicino - Sorrento',
            popularStops: [
                { name: 'Pompei', note: 'Direttamente sul percorso tra Napoli e Sorrento — una tappa comune per spezzare il lungo tragitto.' },
            ],
            travelTimeFactors: [
                'Traffico intorno a Napoli, che il percorso costeggia direttamente.',
                'Periodo dell\'anno — i weekend estivi vedono traffico molto più intenso nell\'ultimo tratto verso Sorrento.',
                'Il terminal e l\'orario di arrivo a Fiumicino, se il transfer segue direttamente un volo.',
                'L\'eventuale sosta a Pompei lungo il percorso.',
            ],
            bestWay: [
                'Data la lunghezza del viaggio e l\'assenza di un treno diretto, la maggior parte dei viaggiatori sceglie di guidare o un transfer privato per questo tragitto specifico. Il treno è possibile ma comporta più cambi ed è generalmente vantaggioso solo per chi viaggia da solo e ha dimestichezza con coincidenze e bagagli su tre tratte.',
            ],
            faqs: [
                { q: 'Quanto dista Sorrento dall\'aeroporto di Roma Fiumicino?', a: 'Circa 280-290 km su strada, un tragitto di 3-3,5 ore lungo le autostrade A1 e A3 oltrepassando Napoli.' },
                { q: 'Esiste un treno diretto da Fiumicino a Sorrento?', a: 'No. Servono più tratte — verso Roma, un treno alta velocità fino a Napoli, poi la Circumvesuviana fino a Sorrento — per un totale realistico di 2,5-3+ ore incluse le coincidenze.' },
                { q: 'Posso fare tappa a Pompei andando verso Sorrento?', a: 'Sì — Pompei si trova direttamente sul percorso tra Napoli e Sorrento ed è una tappa popolare per spezzare il viaggio.' },
                { q: 'È un transfer lungo da fare subito dopo un volo?', a: 'È uno dei transfer aeroportuali più lunghi di questa rete di percorsi, oltre 3 ore. Un transfer privato con autista professionista è un modo comodo per affrontarlo direttamente dopo l\'atterraggio, senza gestire coincidenze in treno.' },
                { q: 'Il traffico intorno a Napoli influisce molto su questo percorso?', a: 'Sì — il tragitto costeggia direttamente Napoli, e il traffico lì, specialmente nelle ore di punta, è una delle principali variabili che incidono sul tempo di viaggio complessivo.' },
            ],
        },
    },
    {
        slugEn: 'rome-fiumicino-to-civitavecchia-distance',
        slugIt: 'distanza-dallaeroporto-di-fiumicino-a-civitavecchia',
        origin: 'Aeroporto di Roma Fiumicino', dest: 'Civitavecchia',
        heroImage: '/images/cruise-port-transfer.webp',
        it: {
            seoTitle: 'Distanza Fiumicino Civitavecchia – Km e Tempo',
            metaDescription: 'Quanto dista il porto di Civitavecchia dall\'aeroporto di Roma Fiumicino? Distanza in auto, tempo di viaggio tipico e opzioni di trasporto.',
            h1: 'Distanza dall\'Aeroporto di Fiumicino a Civitavecchia',
            intro: [
                'Roma Fiumicino-Civitavecchia è un percorso costiero breve e diretto, seguito soprattutto dai passeggeri di crociera che atterrano a Roma e proseguono direttamente verso il porto anziché entrare in città. Con circa 60-70 km, è un transfer molto più corto della maggior parte degli altri percorsi trattati su questo sito.',
                'Dato che i tempi di imbarco contano molto per chi viaggia in crociera, questa pagina si concentra sul tempo di viaggio realistico e su cosa può influenzarlo, oltre alla semplice distanza.',
            ],
            centreVsDoorToDoor: [
                'I dati sopra sono da aeroporto a porto. Poiché il terminal crociere di Civitavecchia è una destinazione singola e ben definita (a differenza di una città con molti possibili indirizzi alberghieri), il tempo porta a porta è molto vicino al tempo aeroporto-porto in quasi tutti i casi.',
            ],
            byCar: [
                'In auto da Fiumicino a Civitavecchia si percorrono circa 60-70 km lungo l\'autostrada A12 costiera, in genere 50 minuti - 1 ora in condizioni normali.',
            ],
            byCarRoad: 'l\'autostrada A12',
            byTrain: [
                'I treni regionali collegano Roma Termini (via il collegamento ferroviario di Fiumicino) a Civitavecchia in circa 45-60 minuti, con buona frequenza. È un\'opzione davvero pratica per chi viaggia con pochi bagagli, anche se richiede comunque di raggiungere prima una stazione romana dall\'aeroporto e poi il terminal del porto dalla stazione di Civitavecchia.',
            ],
            byPrivateTransfer: [
                'Per i passeggeri di crociera, il vantaggio principale di un transfer privato è un unico tragitto porta a porta fino al terminal crociere corretto, senza cambi di stazione o ricerca del terminal — utile quando l\'imbarco ha una finestra di check-in fissa e i bagagli sono da considerare.',
                'Per prezzi e prenotazione, visita la nostra pagina dedicata al transfer privato Fiumicino - Civitavecchia.',
            ],
            routePageSlugIt: 'trasferimento-aeroporto-fiumicino-civitavecchia',
            routePageLabelIt: 'Transfer Privato Fiumicino - Civitavecchia',
            popularStops: [],
            travelTimeFactors: [
                'Traffico sull\'A12, in particolare nelle zone periferiche di Roma.',
                'Terminal e orario di atterraggio a Fiumicino.',
                'Congestione del giorno di imbarco al porto stesso, specialmente nelle fasce orarie di punta per il check-in.',
                'Condizioni meteo e stradali generali.',
            ],
            bestWay: [
                'Per l\'imbarco su una crociera in particolare, un transfer privato con monitoraggio del volo è generalmente l\'opzione più affidabile, perché elimina l\'incertezza di collegare l\'aeroporto a Roma e poi alla costa in treno. Il treno resta un\'opzione economica ragionevole per chi viaggia con pochi bagagli e ha orari flessibili.',
            ],
            faqs: [
                { q: 'Quanto dista Civitavecchia dall\'aeroporto di Roma Fiumicino?', a: 'Circa 60-70 km su strada, un tragitto di circa 50 minuti - 1 ora lungo l\'autostrada A12.' },
                { q: 'Posso prendere il treno da Fiumicino a Civitavecchia?', a: 'Sì — i treni regionali collegano le due località in circa 45-60 minuti, anche se dovrai prima raggiungere una stazione romana dall\'aeroporto e poi il terminal del porto dalla stazione di Civitavecchia.' },
                { q: 'È un buon transfer da organizzare per l\'imbarco su una crociera?', a: 'Sì — molti passeggeri di crociera che atterrano a Fiumicino usano proprio questo percorso. Un transfer privato con monitoraggio del volo è una scelta comune per evitare il rischio legato ai tempi del giorno di imbarco.' },
                { q: 'Quanto tempo devo prevedere tra l\'atterraggio e la partenza della crociera?', a: 'Le compagnie di crociera raccomandano generalmente diverse ore di margine per i voli in arrivo nel giorno di imbarco; il transfer in sé dura meno di un\'ora, ma considera anche il tempo per il ritiro bagagli, il tragitto e le procedure di check-in al porto.' },
                { q: 'Il tragitto verso Civitavecchia è panoramico?', a: 'Corre lungo la costa sull\'A12, con alcuni scorci sul mare, anche se è un percorso autostradale piuttosto diretto più che una lenta strada panoramica.' },
            ],
        },
    },
    {
        slugEn: 'naples-airport-to-sorrento-distance',
        slugIt: 'distanza-dallaeroporto-di-napoli-a-sorrento',
        origin: 'Aeroporto di Napoli', dest: 'Sorrento',
        heroImage: '/images/almafi.webp',
        it: {
            seoTitle: 'Distanza Aeroporto Napoli Sorrento – Km e Tempo',
            metaDescription: 'Quanto dista Sorrento dall\'aeroporto di Napoli? Distanza in auto, tempo di percorrenza tipico e opzioni di trasporto per questo percorso costiero.',
            h1: 'Distanza dall\'Aeroporto di Napoli a Sorrento',
            intro: [
                'Aeroporto di Napoli-Sorrento è uno dei percorsi più frequentati verso la porta d\'accesso alla Costiera Amalfitana, circa 50 km intorno al Golfo di Napoli. È abbastanza breve da essere gestibile con diversi mezzi, ma il traffico sul tratto costiero finale rende il tempo esatto genuinamente variabile.',
                'Questa pagina confronta guida, treno e transfer privato così saprai cosa aspettarti prima di partire.',
            ],
            centreVsDoorToDoor: [
                'I dati sopra sono da aeroporto a città. Sorrento è compatta, quindi una volta in città raggiungere la maggior parte degli hotel richiede solo qualche minuto in più — la variabile maggiore è il traffico sulle strade di accesso, non l\'ultimo tratto dentro Sorrento.',
            ],
            byCar: [
                'In auto dall\'aeroporto di Napoli a Sorrento si percorrono circa 50 km lungo l\'autostrada A3 e la statale costiera SS145, in genere 55 minuti - 1 ora e 20 minuti. Nei casi migliori con traffico leggero si arriva a 55 minuti; i weekend estivi e l\'alta stagione spingono regolarmente verso la fascia alta o oltre.',
            ],
            byCarRoad: 'l\'autostrada A3, poi la statale costiera SS145',
            byTrain: [
                'La linea Circumvesuviana collega Napoli (con coincidenza dall\'aeroporto in città) a Sorrento in circa 70-80 minuti. È un\'opzione pratica ed economica, anche se i treni possono essere affollati, specialmente in estate, e non è un servizio diretto aeroporto-Sorrento — devi prima raggiungere una stazione a Napoli.',
            ],
            byPrivateTransfer: [
                'Un transfer privato copre lo stesso percorso porta a porta dalla sala arrivi fino al tuo hotel a Sorrento, evitando sia l\'affollamento della Circumvesuviana sia la necessità di gestire una coincidenza in stazione con i bagagli.',
                'Per prezzi e prenotazione, visita la nostra pagina dedicata al transfer privato Aeroporto Napoli - Sorrento.',
            ],
            routePageSlugIt: 'trasferimento-aeroporto-napoli-sorrento',
            routePageLabelIt: 'Transfer Privato Aeroporto Napoli - Sorrento',
            popularStops: [],
            travelTimeFactors: [
                'Stagione — i weekend estivi aumentano notevolmente il traffico sull\'accesso costiero a Sorrento.',
                'Traffico intorno a Napoli prima di raggiungere l\'A3.',
                'Orario della giornata, con le ore di punta serali dei feriali che aggiungono ritardi.',
                'Per la Circumvesuviana, il tempo di attesa per la coincidenza dall\'aeroporto verso Napoli.',
            ],
            bestWay: [
                'Per un arrivo diretto con bagagli, un transfer privato è l\'opzione porta a porta più prevedibile, in particolare in alta stagione. La Circumvesuviana è una solida scelta economica per chi viaggia leggero e non è infastidito da un treno più affollato e una coincidenza.',
            ],
            faqs: [
                { q: 'Quanto dista Sorrento dall\'aeroporto di Napoli?', a: 'Circa 50 km su strada, un tragitto di circa 55 minuti - 1 ora e 20 minuti a seconda del traffico, specialmente in alta stagione.' },
                { q: 'La Circumvesuviana è un buon modo per arrivare a Sorrento?', a: 'È un\'opzione pratica ed economica, circa 70-80 minuti, anche se non è diretta dall\'aeroporto (devi prima raggiungere una stazione a Napoli) e può essere affollata in estate.' },
                { q: 'Perché il tempo di guida varia così tanto?', a: 'L\'ultimo tratto è una strada costiera che diventa molto più trafficata in estate e nei weekend — lo stesso tragitto di 50 km può richiedere meno di un\'ora con traffico leggero o molto di più nei momenti di punta.' },
                { q: 'Vale la pena un transfer privato per questo percorso?', a: 'Per un arrivo diretto con bagagli, specialmente in alta stagione, sì — evita la coincidenza e l\'affollamento della Circumvesuviana e arriva direttamente al tuo hotel.' },
                { q: 'Posso combinare questo viaggio con una sosta a Pompei?', a: 'Sì — Pompei è vicina al percorso dell\'A3 tra Napoli e Sorrento ed è una tappa aggiuntiva comune per chi ha tempo a disposizione.' },
            ],
        },
    },
    {
        slugEn: 'naples-airport-to-positano-distance',
        slugIt: 'distanza-dallaeroporto-di-napoli-a-positano',
        origin: 'Aeroporto di Napoli', dest: 'Positano',
        heroImage: '/images/almafi.webp',
        it: {
            seoTitle: 'Distanza Aeroporto Napoli Positano – Km e Tempo',
            metaDescription: 'Quanto dista Positano dall\'aeroporto di Napoli? Distanza in auto lungo la Costiera Amalfitana, tempo di percorrenza e opzioni di trasporto.',
            h1: 'Distanza dall\'Aeroporto di Napoli a Positano',
            intro: [
                'Aeroporto di Napoli-Positano copre circa 61 km, percorrendo l\'autostrada A3 prima di immettersi sulla statale costiera SS163 per il tratto finale, più suggestivo, verso Positano. È un percorso molto frequentato ma genuinamente variabile — il carattere stretto e tortuoso della statale costiera fa sì che il traffico incida in modo significativo sul tempo di viaggio.',
                'Questa pagina indica tempi di guida realistici e le alternative pratiche, dato che non esiste un\'opzione di trasporto pubblico diretta fino a Positano.',
            ],
            centreVsDoorToDoor: [
                'Positano è costruita su un terreno molto ripido con accesso veicolare estremamente limitato — la maggior parte degli hotel si raggiunge tramite scalinate anziché un vialetto diretto, quindi prevedi un po\' di tempo extra per l\'avvicinamento finale e la gestione dei bagagli, qualunque sia il mezzo scelto.',
            ],
            byCar: [
                'In auto dall\'aeroporto di Napoli a Positano si percorrono circa 61 km lungo l\'autostrada A3 e la statale costiera SS163, in genere 1 ora e 12 minuti in condizioni normali. I sabati mattina e i weekend estivi aggiungono comunemente 20-30 minuti o più sul tratto stretto tra Meta e Positano.',
            ],
            byCarRoad: 'l\'autostrada A3, poi la statale costiera SS163 Amalfitana',
            byTrain: [
                'Non esiste un treno per Positano — la linea ferroviaria non raggiunge la Costiera Amalfitana. Il percorso tipico con mezzi pubblici è la Circumvesuviana fino a Sorrento, poi un bus SITA o un traghetto stagionale fino a Positano, che aggiunge tempo reale di coincidenza e attesa oltre ai dati di guida sopra.',
            ],
            byPrivateTransfer: [
                'Data la mancanza di collegamento ferroviario e le coincidenze scomode di bus/traghetto, un transfer privato è il modo più diretto per raggiungere Positano dall\'aeroporto — guidato per l\'intero tragitto senza cambi, e con la discesa il più vicino possibile al tuo hotel compatibilmente con l\'accesso limitato della città.',
                'Per prezzi e prenotazione, visita la nostra pagina dedicata al transfer privato Aeroporto Napoli - Positano.',
            ],
            routePageSlugIt: 'trasferimento-aeroporto-napoli-positano',
            routePageLabelIt: 'Transfer Privato Aeroporto Napoli - Positano',
            popularStops: [
                { name: 'Vietri sul Mare', note: 'La cittadina d\'ingresso dove inizia la statale costiera SS163, attraversata lungo il percorso.' },
            ],
            travelTimeFactors: [
                'Stagione — la SS163 diventa molto più trafficata da maggio a ottobre.',
                'Giorno della settimana — il traffico del sabato per il cambio turno è un collo di bottiglia noto su questo percorso.',
                'Traffico attraverso Napoli e Castellammare prima di raggiungere la statale costiera.',
                'L\'accesso veicolare limitato di Positano, che aggiunge una breve camminata/scalinata finale indipendentemente dal mezzo di trasporto.',
            ],
            bestWay: [
                'Dato che non esiste un trasporto pubblico diretto e il traffico sulla statale costiera è genuinamente imprevedibile, la maggior parte dei viaggiatori con bagagli sceglie un transfer privato per questo percorso. Non eviterà del tutto il traffico della statale, ma elimina il tempo di coincidenza e attesa che l\'alternativa bus/traghetto comporta.',
            ],
            faqs: [
                { q: 'Quanto dista Positano dall\'aeroporto di Napoli?', a: 'Circa 61 km su strada, un tragitto di circa 1 ora e 12 minuti in condizioni normali, lungo l\'autostrada A3 e la statale costiera SS163.' },
                { q: 'Perché il viaggio verso Positano dura di più nei weekend?', a: 'La statale costiera SS163 è stretta con poco spazio per il sorpasso, e il traffico del sabato per il cambio turno (mentre i visitatori di una settimana partono e quelli della prossima arrivano) è una causa nota di ritardi, che aggiunge 20-30 minuti o più.' },
                { q: 'Esiste un treno per Positano?', a: 'No — la linea ferroviaria non raggiunge la Costiera Amalfitana. Il percorso tipico con mezzi pubblici è la Circumvesuviana fino a Sorrento, poi un bus SITA o un traghetto stagionale.' },
                { q: 'Un\'auto può raggiungere direttamente il mio hotel a Positano?', a: 'Non sempre — le strade ripide e strette di Positano fanno sì che molti hotel si raggiungano tramite scalinate anziché un vialetto. Gli autisti ti portano il più vicino possibile e aiutano con i bagagli da lì.' },
                { q: 'Un transfer privato è la scelta migliore per questo percorso?', a: 'Per chi viaggia con bagagli o senza orari flessibili, sì — evita la coincidenza bus/traghetto richiesta dai mezzi pubblici e percorre l\'intero tragitto direttamente.' },
            ],
        },
    },
    {
        slugEn: 'naples-airport-to-amalfi-distance',
        slugIt: 'distanza-dallaeroporto-di-napoli-ad-amalfi',
        origin: 'Aeroporto di Napoli', dest: 'Amalfi',
        heroImage: '/images/almafi.webp',
        it: {
            seoTitle: 'Distanza Aeroporto Napoli Amalfi – Km e Tempo',
            metaDescription: 'Quanto dista Amalfi dall\'aeroporto di Napoli? Distanza in auto lungo la statale costiera, tempo di viaggio realistico e opzioni di trasporto.',
            h1: 'Distanza dall\'Aeroporto di Napoli ad Amalfi',
            intro: [
                'Aeroporto di Napoli-Amalfi copre circa 65-70 km, ma il tempo di guida varia più di quasi ogni altro percorso di questo sito: circa 1 ora e 50 minuti in condizioni normali, fino a 2-3 ore in una giornata estiva trafficata. La strada stessa — la SS163 Amalfitana — è la ragione.',
                'Questa pagina imposta aspettative realistiche sul tragitto ed elenca le alternative, dato che non esiste nemmeno un\'opzione di trasporto pubblico diretta.',
            ],
            centreVsDoorToDoor: [
                'Il centro di Amalfi è più accessibile in auto rispetto a Positano, ma i parcheggi restano limitati, quindi i transfer privati normalmente scendono vicino al centro con una breve camminata verso la maggior parte degli hotel.',
            ],
            byCar: [
                'Il percorso segue l\'autostrada A3 fino a Vietri sul Mare, poi la statale costiera SS163 Amalfitana attraverso Positano fino ad Amalfi, per circa 65-70 km. Prevedi 1 ora e 50 minuti in condizioni normali; l\'alta stagione estiva (maggio-ottobre) può estendere il tragitto a 2-3 ore per la congestione sulla SS163, in particolare nei giorni di cambio turno del weekend.',
            ],
            byCarRoad: 'l\'autostrada A3 fino a Vietri sul Mare, poi la statale costiera SS163 Amalfitana',
            byTrain: [
                'Non esiste un treno diretto per Amalfi — la costiera non ha una linea ferroviaria. Il percorso tipico con mezzi pubblici è un treno fino a Salerno (l\'accesso orientale alla costiera) o Sorrento (quello occidentale), seguito da un bus SITA o un traghetto stagionale, che aggiunge tempo reale di coincidenza oltre ai dati di guida sopra.',
            ],
            byPrivateTransfer: [
                'Data la mancanza di collegamento ferroviario e il traffico imprevedibile della statale costiera, un transfer privato è il modo più diretto per raggiungere Amalfi — un unico veicolo per l\'intero viaggio, con un autista esperto delle curve a gomito della SS163.',
                'Per prezzi e prenotazione, visita la nostra pagina dedicata al transfer privato Aeroporto Napoli - Amalfi.',
            ],
            routePageSlugIt: 'trasferimento-aeroporto-napoli-amalfi',
            routePageLabelIt: 'Transfer Privato Aeroporto Napoli - Amalfi',
            popularStops: [
                { name: 'Positano', note: 'Direttamente sul percorso della SS163 tra Napoli e Amalfi — molti viaggiatori combinano entrambe le tappe in un unico viaggio.' },
                { name: 'Vietri sul Mare', note: 'La cittadina d\'ingresso dove inizia la statale costiera SS163.' },
            ],
            travelTimeFactors: [
                'Stagione — da maggio a ottobre il traffico sulla SS163 è molto più intenso.',
                'Giorno della settimana — i giorni di cambio turno del weekend sono in genere i più trafficati.',
                'Se si passa da Positano (comune, ma aggiunge tempo) o da un tratto più diretto della statale costiera.',
                'Traffico attraverso Napoli e Salerno prima di raggiungere la statale costiera stessa.',
            ],
            bestWay: [
                'Poiché il tempo di viaggio su questo percorso varia così tanto con la stagione, e non esiste un trasporto pubblico diretto, un transfer privato con un autista esperto della SS163 è il modo più affidabile per gestire un percorso così variabile — soprattutto in alta stagione.',
            ],
            faqs: [
                { q: 'Quanto dista Amalfi dall\'aeroporto di Napoli?', a: 'Circa 65-70 km su strada, anche se le fonti variano leggermente a seconda dei punti di riferimento esatti usati. Il tragitto richiede normalmente circa 1 ora e 50 minuti, ma può estendersi a 2-3 ore in alta stagione.' },
                { q: 'Perché il viaggio verso Amalfi richiede molto più tempo d\'estate?', a: 'La statale costiera SS163 Amalfitana è stretta con poco spazio per il sorpasso, e da maggio a ottobre il traffico turistico è molto più intenso, in particolare intorno a Positano, che il percorso attraversa.' },
                { q: 'Esiste un treno per Amalfi?', a: 'No — non c\'è una linea ferroviaria sulla Costiera Amalfitana. Serve un treno fino a Salerno o Sorrento, poi un bus SITA o un traghetto stagionale per raggiungere Amalfi.' },
                { q: 'Il percorso passa da Positano?', a: 'Sì, in genere — la SS163 attraversa Positano nel tragitto verso Amalfi, motivo per cui molti viaggiatori combinano entrambe le località in un unico viaggio.' },
                { q: 'Qual è il modo più affidabile per raggiungere Amalfi dall\'aeroporto?', a: 'Un transfer privato con un autista esperto della statale costiera è generalmente l\'opzione più prevedibile, soprattutto considerando quanto variano le condizioni del traffico a seconda della stagione.' },
            ],
        },
    },
    {
        slugEn: 'naples-airport-to-pompeii-distance',
        slugIt: 'distanza-dallaeroporto-di-napoli-a-pompei',
        origin: 'Aeroporto di Napoli', dest: 'Pompei',
        heroImage: '/images/naples.webp',
        it: {
            seoTitle: 'Distanza Aeroporto Napoli Pompei – Km e Tempo',
            metaDescription: 'Quanto dista Pompei dall\'aeroporto di Napoli? Distanza in auto, tempo di viaggio tipico e opzioni di trasporto per visitare gli scavi.',
            h1: 'Distanza dall\'Aeroporto di Napoli a Pompei',
            intro: [
                'Aeroporto di Napoli-Pompei è uno dei percorsi più brevi di questo sito — circa 28 km, il che lo rende un facile complemento al giorno di arrivo o partenza. È un modo popolare per vedere gli scavi senza dedicare un\'intera giornata separata.',
                'Questa pagina copre il tempo di guida realistico, l\'alternativa in treno e cosa influisce sul viaggio.',
            ],
            centreVsDoorToDoor: [
                'I dati sopra sono fino all\'ingresso del sito archeologico di Pompei Scavi, la destinazione naturale per questo percorso anziché un centro città.',
            ],
            byCar: [
                'In auto dall\'aeroporto di Napoli a Pompei si percorrono circa 28 km lungo l\'autostrada A3, in genere 24-40 minuti a seconda del traffico. Le mattine dei giorni feriali (8-10) e i weekend estivi registrano la congestione maggiore su questo tratto dell\'A3.',
            ],
            byCarRoad: 'l\'autostrada A3',
            byTrain: [
                'La linea Circumvesuviana collega Napoli a Pompei Scavi - Villa dei Misteri, proprio accanto all\'ingresso del sito, in circa 30-40 minuti dal centro di Napoli. Dall\'aeroporto, aggiungi il tempo di coincidenza per raggiungere prima una stazione a Napoli — realisticamente 40-50 minuti porta-stazione in totale.',
            ],
            byPrivateTransfer: [
                'Per una breve visita complementare come questa, specialmente appena scesi da un volo con bagagli, un transfer privato evita la coincidenza della Circumvesuviana e può aspettare mentre visiti il sito prima di proseguire verso la tua destinazione finale.',
                'Per prezzi e prenotazione, visita la nostra pagina dedicata al transfer privato Aeroporto Napoli - Pompei.',
            ],
            routePageSlugIt: 'trasferimento-aeroporto-napoli-pompei',
            routePageLabelIt: 'Transfer Privato Aeroporto Napoli - Pompei',
            popularStops: [],
            travelTimeFactors: [
                'Traffico mattutino nei giorni feriali (8-10) sull\'A3.',
                'Congestione dei weekend estivi, sia sulla strada che intorno all\'ingresso del sito stesso.',
                'Se si prosegue verso Sorrento o la Costiera Amalfitana anziché tornare in aeroporto.',
            ],
            bestWay: [
                'Data la breve distanza, sia guidare/transfer privato sia la Circumvesuviana funzionano bene. Un transfer privato è la scelta più comoda subito dopo un volo con bagagli, o se vuoi che l\'autista aspetti durante la visita e prosegua poi con te.',
            ],
            faqs: [
                { q: 'Quanto dista Pompei dall\'aeroporto di Napoli?', a: 'Circa 28 km su strada, un tragitto di circa 24-40 minuti lungo l\'autostrada A3 a seconda del traffico.' },
                { q: 'Posso visitare Pompei subito dopo l\'atterraggio?', a: 'Sì — è un complemento pratico e breve a un arrivo, specialmente con un transfer privato che può custodire i bagagli e aspettare durante la visita al sito.' },
                { q: 'La Circumvesuviana è un buon modo per raggiungere Pompei dall\'aeroporto?', a: 'È fattibile — circa 40-50 minuti porta-stazione includendo la coincidenza dall\'aeroporto verso Napoli — ma un transfer privato è più diretto se hai bagagli.' },
                { q: 'Qual è la stazione più vicina agli scavi di Pompei?', a: 'Pompei Scavi - Villa dei Misteri, sulla linea Circumvesuviana, si trova proprio accanto all\'ingresso principale.' },
                { q: 'Posso proseguire verso Sorrento o la Costiera Amalfitana dopo Pompei?', a: 'Sì — Pompei si trova direttamente sul percorso verso Sorrento e la Costiera Amalfitana, quindi molti viaggiatori combinano una sosta qui con la prosecuzione del viaggio anziché tornare a Napoli.' },
            ],
        },
    },
    {
        slugEn: 'milan-malpensa-to-como-distance',
        slugIt: 'distanza-dallaeroporto-di-malpensa-a-como',
        origin: 'Aeroporto di Milano Malpensa', dest: 'Como',
        heroImage: '/images/Lake Como.webp',
        it: {
            seoTitle: 'Distanza Malpensa Como – Km e Tempo di Percorrenza',
            metaDescription: 'Quanto dista il Lago di Como dall\'aeroporto di Milano Malpensa? Distanza in auto, tempo di viaggio tipico e opzioni in treno per raggiungere Como.',
            h1: 'Distanza dall\'Aeroporto di Malpensa a Como',
            intro: [
                'Aeroporto di Milano Malpensa-Como è un percorso davvero comodo — Malpensa si trova a nord-ovest di Milano, già sulla strada verso il lago, quindi questo transfer è spesso più rapido che passare prima dalla città. Copre circa 52 km su strada.',
                'Questa pagina confronta guida e treno, dato che entrambe sono opzioni realistiche per questo percorso specifico.',
            ],
            centreVsDoorToDoor: [
                'I dati sopra sono fino al centro di Como. Se sei diretto più avanti sul lago — ad esempio Bellagio o Varenna — prevedi decisamente più tempo; questa pagina copre nello specifico il tratto Malpensa-Como.',
            ],
            byCar: [
                'In auto da Malpensa a Como si percorrono circa 52 km lungo le autostrade A8/A9, in genere 42-60 minuti, a seconda del traffico intorno all\'aeroporto e in avvicinamento a Como.',
            ],
            byCarRoad: 'le autostrade A8/A9',
            byTrain: [
                'Esistono opzioni in treno ma richiedono almeno un cambio; i tragitti più rapidi impiegano circa 1 ora e 15 minuti, mentre la media, incluse coincidenze meno comode, è più vicina alle 2 ore. Per un arrivo diretto in aeroporto con bagagli, questo rende la guida o un transfer privato notevolmente più comodi del treno su questo percorso specifico.',
            ],
            byPrivateTransfer: [
                'Un transfer privato ti porta direttamente dalla sala arrivi di Malpensa al tuo hotel a Como senza cambio in stazione, un vantaggio più importante qui che su molti altri percorsi, dato che il treno richiede una coincidenza.',
                'Per prezzi e prenotazione, visita la nostra pagina dedicata al transfer privato Malpensa - Como.',
            ],
            routePageSlugIt: 'trasferimento-aeroporto-malpensa-como',
            routePageLabelIt: 'Transfer Privato Malpensa - Como',
            popularStops: [],
            travelTimeFactors: [
                'Traffico intorno a Malpensa e in avvicinamento a Como.',
                'Per il treno, il tempo di coincidenza nella stazione di cambio.',
                'La specifica zona del lago di destinazione finale — questa pagina copre nello specifico il centro di Como.',
            ],
            bestWay: [
                'Per un arrivo diretto con bagagli, guidare o un transfer privato sono generalmente più comodi del treno su questo percorso, dato che il treno richiede un cambio e il tragitto su strada è breve e piuttosto diretto.',
            ],
            faqs: [
                { q: 'Quanto dista Como dall\'aeroporto di Malpensa?', a: 'Circa 35 km in linea d\'aria, o circa 52 km su strada — un tragitto di 42-60 minuti.' },
                { q: 'Malpensa è più vicino al Lago di Como rispetto al centro di Milano?', a: 'Sì — Malpensa si trova a nord-ovest di Milano, già sulla strada verso il lago, quindi questo percorso è spesso più rapido rispetto a partire dal centro città.' },
                { q: 'Il treno è una buona opzione da Malpensa a Como?', a: 'È possibile ma richiede almeno un cambio, con tragitti che vanno da circa 1 ora e 15 minuti a quasi 2 ore a seconda della coincidenza — guidare è generalmente più diretto.' },
                { q: 'Posso raggiungere direttamente Bellagio o Varenna da Malpensa?', a: 'Questa pagina copre il tratto Malpensa-Como; le località più avanti sul lago come Bellagio o Varenna richiedono decisamente più tempo e vale la pena verificarle separatamente.' },
                { q: 'Vale la pena un transfer privato per questo percorso?', a: 'Per un arrivo diretto con bagagli, sì — evita il cambio richiesto dal treno e arriva direttamente al tuo hotel.' },
            ],
        },
    },
    {
        slugEn: 'milan-malpensa-to-stresa-distance',
        slugIt: 'distanza-dallaeroporto-di-malpensa-a-stresa',
        origin: 'Aeroporto di Milano Malpensa', dest: 'Stresa',
        heroImage: '/images/Lake Como.webp',
        it: {
            seoTitle: 'Distanza Malpensa Stresa – Km e Tempo di Percorrenza',
            metaDescription: 'Quanto dista Stresa sul Lago Maggiore dall\'aeroporto di Milano Malpensa? Distanza in auto e tempo di viaggio tipico per questo percorso diretto.',
            h1: 'Distanza dall\'Aeroporto di Malpensa a Stresa',
            intro: [
                'Aeroporto di Milano Malpensa-Stresa, sul Lago Maggiore, è uno dei transfer aeroporto-lago più brevi e diretti di questo sito — circa 50-55 km, prevalentemente autostrada. Stresa è la principale porta d\'accesso alle Isole Borromee, il che rende questo percorso molto richiesto da chi è diretto al lago.',
                'Questa pagina indica distanza e tempo di guida, dato che è l\'opzione pratica più usata per questo percorso specifico.',
            ],
            centreVsDoorToDoor: [
                'I dati sopra sono fino al centro di Stresa. Trattandosi di una cittadina lacustre compatta, la differenza tra il dato del centro città e un indirizzo alberghiero specifico è generalmente minima.',
            ],
            byCar: [
                'In auto da Malpensa a Stresa si percorrono circa 50-55 km lungo l\'autostrada A26 verso Gravellona Toce, con uscita a Carpugnino per Stresa, in genere 44-60 minuti a seconda del traffico.',
            ],
            byCarRoad: 'l\'autostrada A26',
            byTrain: [
                'Le opzioni ferroviarie tra Malpensa e Stresa sono limitate e spesso richiedono un cambio; guidare o un transfer privato è il percorso più diretto e comunemente usato per questo viaggio specifico. Se consideri il treno, verifica gli orari aggiornati direttamente, poiché la frequenza dei servizi su questo collegamento è inferiore rispetto alle grandi linee intercity.',
            ],
            byPrivateTransfer: [
                'Un transfer privato ti porta direttamente dalla sala arrivi di Malpensa al tuo hotel a Stresa o al lungolago, con monitoraggio del volo così che atterraggi anticipati o ritardati non compromettano il ritiro.',
                'Per prezzi e prenotazione, visita la nostra pagina dedicata al transfer privato Malpensa - Stresa.',
            ],
            routePageSlugIt: 'trasferimento-aeroporto-malpensa-stresa',
            routePageLabelIt: 'Transfer Privato Malpensa - Stresa',
            popularStops: [],
            travelTimeFactors: [
                'Traffico intorno a Malpensa e sull\'A26.',
                'Condizioni meteo, che possono influire sull\'avvicinamento autostradale nell\'area dei laghi in generale.',
                'La destinazione esatta a Stresa, se diversa dal centro città.',
            ],
            bestWay: [
                'Data la distanza breve e diretta in autostrada e l\'alternativa ferroviaria limitata, la maggior parte dei viaggiatori usa la guida o un transfer privato per questo percorso. Un transfer privato aggiunge monitoraggio del volo e comodità porta a porta senza dover affrontare tu stesso la guida dopo un volo.',
            ],
            faqs: [
                { q: 'Quanto dista Stresa dall\'aeroporto di Malpensa?', a: 'Circa 30-35 km in linea d\'aria, o circa 50-55 km su strada — un tragitto di 44-60 minuti lungo l\'autostrada A26.' },
                { q: 'Perché Stresa è una meta di arrivo così popolare?', a: 'Stresa è la principale porta d\'accesso alle Isole Borromee sul Lago Maggiore, e la sua breve distanza da Malpensa la rende uno dei laghi più facili da raggiungere direttamente dall\'aeroporto.' },
                { q: 'Esiste un treno diretto da Malpensa a Stresa?', a: 'Le opzioni ferroviarie sono limitate e spesso richiedono un cambio; guidare o un transfer privato è il percorso più consolidato per questo viaggio specifico.' },
                { q: 'Quanto dura realmente il tragitto in auto?', a: 'In genere 44-60 minuti con traffico normale lungo l\'autostrada A26 verso Gravellona Toce.' },
                { q: 'Un transfer privato è una buona opzione per questo percorso?', a: 'Sì, in particolare per un arrivo diretto — include il monitoraggio del volo, così l\'orario si adatta automaticamente se il tuo volo è in anticipo o in ritardo.' },
            ],
        },
    },
];

export function getAllItDistancePages() {
    return [...existingDistancePageItTranslations, ...newDistancePagesIt];
}
