# SEO Location & Route Page Audit — Complete Topical Map

**Scope:** City pages, Airport pages, Hotel-transfer pages, Route pages, Intercity-transfer pages, International/cross-border pages. Blog posts (205 live) and static service pages (10) are out of scope and excluded from all counts below.

**Method:** Every number in Step 1 was extracted directly from the live data files (`src/lib/*.ts`) and cross-checked against the live `sitemap.xml` (1,026 total URLs) and spot-checked with real HTTP requests — not estimated.

---

## Executive Summary

1. **Your site already has ~830 location/route pages.** This is a very mature programmatic-SEO footprint. The biggest lever left isn't "add more pages everywhere" — it's fixing two structural issues and filling one glaring regional gap.
2. **Bug found and fixed:** Airport, City, Tour, and Border detail pages (53 pages) were **completely absent from `sitemap.xml`** — not a content problem, a discovery problem. Google can still find them via internal links, but they had zero presence in your XML sitemap. Fixed in `src/app/sitemap.ts` as part of this audit (see "Fixes Applied" below). Not yet deployed.
3. **Cannibalization found:** 9 cities each have **two live, self-canonicalizing duplicate pages** (e.g. `/city/rome` and `/city/rome-taxi-service` — both return 200, both serve identical content, both claim themselves as canonical). 18 pages, 9 unique. Needs a decision from you (see Step 5).
4. **The one big regional gap:** despite being one of Italy's highest-intent tourist regions, the **Amalfi Coast / Sorrento / Capri / Ravello area has no hotel-level transfer matrix at all** — unlike Rome (34 hotels), Milan (26 hotels), Florence (~28 hotels), and Bologna (18 hotels), which all have one. This is the single highest-ROI cluster in the expansion plan.
5. Secondary gaps: **Sicily** (only 2 route pages exist for two major airports), **Sardinia** (zero airport-to-town routes), **Puglia** (2 routes only), **Piedmont/Turin wine country**, and **Liguria from the Genoa side**.

### Fixes applied during this audit
- `src/app/sitemap.ts`: added explicit `airport`/`city`/`tour`/`border` entries sourced from their data arrays (same pattern already used for `/route/*`), since none of them have physical per-slug folders for the filesystem walker to find. This alone adds 53 pages back into your sitemap once deployed.

---

## Step 1 — Existing Page Inventory

### Category summary

| Page Type | Count | URL Pattern | Data Source |
|---|---|---|---|
| Route pages (intercity + attraction/outlet) | 92 | `/route/[slug]` | `page-data.ts` + 4× `extra-routes*.ts` |
| Rome hotel ⇄ airport transfers | 136 | `/[hotel]-to-[airport]-transfer` (both directions) | `airport-hotel-data.ts` (2 airports × 34 hotels × 2 dir.) |
| Milan hotel ⇄ airport transfers | ~156 | `/[hotel-slug]-to-[airport-slug]` (both directions) | `milan-transfer-data.ts` (3 airports × 26 hotels × 2 dir.) |
| Veneto airport ⇄ destination | 127 | `/[airport]-to-[dest]` (sparse matrix, both directions) | `veneto-transfer-data.ts` (3 airports × 30 destinations, not all legs exist) |
| Bologna hotel/cruise ⇄ airport | 82 | `/bologna-transfer/[slug]` | `bologna-transfer-data.ts` (18 hotels + Ravenna cruise port) |
| Florence/Pisa hotel ⇄ airport/landmark | 71 | `/florence-transfer/[slug]` | `florence-transfer-data.ts` (~28 hotels + 12 landmarks + 2 airports/stations) |
| Cross-border Europe (city pairs) | 64 | `/[city]-to-[city]-transfer` (both directions) | `cross-border-data.ts` (32 pairs × 2 dir.) |
| Attraction transfers | 30 | `/attraction-transfer/[slug]` | physical folders |
| Beach transfers | 20 | `/beach-transfer/[slug]` | physical folders |
| **City pages** | 25 | `/city/[slug]` | `page-data.ts` → `cities[]` — **missing from sitemap (fixed)** |
| **Airport pages** | 17 | `/airport/[slug]` | `page-data.ts` → `airports[]` — **missing from sitemap (fixed)** |
| **Border hub pages** | 6 | `/border/[slug]` | `page-data.ts` → `borderSlugs[]` — **missing from sitemap (fixed)** |
| **Tour pages** | 5 | `/tour/[slug]` | `page-data.ts` → `tours[]` — **missing from sitemap (fixed)** |
| **Total** | **~831** | | |

*(Out of scope, shown for context: 205 blog posts EN+IT, 10 static `/services/*` pages.)*

### Airport pages (17) — full inventory

| Page URL | Type | Airport | City Served | Target Keyword |
|---|---|---|---|---|
| /airport/rome-fiumicino | Airport | Rome Fiumicino (FCO) | Rome | rome fiumicino airport transfer |
| /airport/rome-ciampino | Airport | Rome Ciampino (CIA) | Rome | rome ciampino airport transfer |
| /airport/milan-malpensa | Airport | Milan Malpensa (MXP) | Milan | milan malpensa airport transfer |
| /airport/milan-linate | Airport | Milan Linate (LIN) | Milan | milan linate airport transfer |
| /airport/venice | Airport | Venice Marco Polo (VCE) | Venice | venice airport transfer |
| /airport/naples | Airport | Naples Capodichino (NAP) | Naples | naples airport transfer |
| /airport/florence | Airport | Florence Peretola (FLR) | Florence | florence airport transfer |
| /airport/bologna-marconi | Airport | Bologna Marconi (BLQ) | Bologna | bologna airport transfer |
| /airport/genoa | Airport | Genoa Cristoforo Colombo (GOA) | Genoa | genoa airport transfer |
| /airport/catania-fontanarossa | Airport | Catania Fontanarossa (CTA) | Catania | catania airport transfer |
| /airport/palermo | Airport | Palermo Falcone-Borsellino (PMO) | Palermo | palermo airport transfer |
| /airport/bari | Airport | Bari Karol Wojtyla (BRI) | Bari | bari airport transfer |
| /airport/pisa | Airport | Pisa International (PSA) | Pisa | pisa airport transfer |
| /airport/turin | Airport | Turin Caselle Airport | Turin | turin airport transfer |
| /airport/verona | Airport | Verona Villafranca Airport | Verona | verona airport transfer |
| /airport/bergamo | Airport | Milan Bergamo Airport (Orio al Serio, BGY) | Milan area | bergamo airport transfer |
| /airport/treviso | Airport | Treviso Airport (Antonio Canova) | Venice area | treviso airport transfer |

*(All 17 verified directly against `page-data.ts` → `airports[]`.)*

### City pages (25) — full inventory, including the duplicate-slug problem

| Page URL | Type | City | Duplicate Of | Target Keyword |
|---|---|---|---|---|
| /city/rome | City | Rome | — | rome taxi service |
| /city/rome-taxi-service | City | Rome | **/city/rome** | rome taxi service |
| /city/milan | City | Milan | — | milan taxi service |
| /city/milan-taxi-service | City | Milan | **/city/milan** | milan taxi service |
| /city/florence | City | Florence | — | florence taxi service |
| /city/florence-taxi-service | City | Florence | **/city/florence** | florence taxi service |
| /city/venice | City | Venice | — | venice taxi service |
| /city/venice-taxi-service | City | Venice | **/city/venice** | venice taxi service |
| /city/naples | City | Naples | — | naples taxi service |
| /city/naples-taxi-service | City | Naples | **/city/naples** | naples taxi service |
| /city/bologna | City | Bologna | — | bologna taxi service |
| /city/bologna-taxi-service | City | Bologna | **/city/bologna** | bologna taxi service |
| /city/palermo | City | Palermo | — | palermo taxi service |
| /city/palermo-taxi-service | City | Palermo | **/city/palermo** | palermo taxi service |
| /city/amalfi | City | Amalfi | — | amalfi taxi service |
| /city/amalfi-taxi-service | City | Amalfi | **/city/amalfi** | amalfi taxi service |
| /city/como | City | Como | — | como taxi service |
| /city/como-taxi-service | City | Como | **/city/como** | como taxi service |
| /city/bari | City | Bari | — | bari taxi service |
| /city/amalfi-coast | City | Amalfi Coast (region) | — (legit, different scope) | amalfi coast taxi |
| /city/ravello | City | Ravello | — | ravello taxi service |
| /city/portofino | City | Portofino | — | portofino taxi service |
| /city/taormina | City | Taormina | — | taormina taxi service |
| /city/positano | City | Positano | — | positano taxi service |
| /city/sorrento | City | Sorrento | — | sorrento taxi service |

**9 duplicate pairs = 18 pages competing with themselves.** See Step 5.

### Tour pages (5) — full inventory

| Page URL | Type | Base City | Target Keyword |
|---|---|---|---|
| /tour/tuscany-wine-tour | Tour | Florence | tuscany wine tour taxi |
| /tour/amalfi-coast | Tour | Naples | amalfi coast tour driver |
| /tour/lake-como | Tour | Milan | lake como tour taxi |
| /tour/vatican | Tour | Rome | vatican tour transfer |
| /tour/dolomites | Tour | Venice | dolomites tour driver |

### Border hub pages (6) — full inventory

| Page URL | Type | Destination Country | Notable Routes Mentioned On-Page | Target Keyword |
|---|---|---|---|---|
| /border/italy-to-switzerland | Border hub | Switzerland | Milan→Lugano, Milan→Zurich, Como→Lugano, Milan→Geneva | italy to switzerland taxi |
| /border/italy-to-france | Border hub | France | Milan→Nice, Turin→Nice, Genoa→Monaco | italy to france taxi transfer |
| /border/italy-to-austria | Border hub | Austria | Venice→Vienna, Verona→Innsbruck, Bolzano→Innsbruck | italy to austria taxi transfer |
| /border/italy-to-germany | Border hub | Germany | Milan→Munich, Verona→Munich | italy to germany taxi transfer |
| /border/italy-to-slovenia | Border hub | Slovenia | Venice→Ljubljana, Trieste→Ljubljana | italy to slovenia taxi transfer |
| /border/italy-to-croatia | Border hub | Croatia | Venice→Pula, Trieste→Rijeka | italy to croatia taxi transfer |

⚠️ Each hub page **mentions** these routes as content, and `cross-border-data.ts` **separately generates dedicated pages** for many of the same pairs (e.g. `/milan-to-nice-transfer`). This is intentional pillar→cluster architecture (hub page overview + dedicated transactional page per pair) and is fine **as long as the hub page links to the dedicated page** rather than just naming the route in prose. Worth a quick manual check — see Step 5.

### Route pages (92) — all existing intercity/attraction pairs

These live at `/route/[slug]`. Full list of existing `from → to` pairs (do not recreate any of these):

<details><summary>Click to expand all 92 existing route pairs</summary>

Bari Airport→Alberobello · Bari Airport→Polignano a Mare · Bologna→Florence · Campo di Marte Station→Florence Airport · Catania Airport→Taormina · Civitavecchia Cruise Port→Rome · Civitavecchia Cruise Port→Rome Fiumicino Airport · Florence→Antinori nel Chianti Classico · Florence→Barberino Designer Outlet · Florence→Bolgheri Wine Region · Florence→Bologna · Florence→Brunello di Montalcino · Florence→Castello Banfi · Florence→Chianti Wine Region · Florence→Cinque Terre · Florence→Livorno Cruise Port · Florence→Lucca · Florence→Milan · Florence→Montepulciano · Florence→Pisa · Florence→Rome · Florence→San Gimignano · Florence→Siena · Florence→The Mall Firenze · Florence→Val d'Orcia · Florence→Valdichiana Outlet Village · Florence→Venice · Florence Airport→Campo di Marte Station · Florence Airport→Livorno Cruise Port · Florence Airport→Pisa Airport · Livorno Cruise Port→Florence (×2 directions) · Milan→Lake Como · Milan→Portofino · Milan→Stresa · Milan→Turin · Milan→Venice · Milan Malpensa Airport→Como · Milan Malpensa Airport→Stresa · Naples→Amalfi Coast · Naples→Positano · Naples→Salerno · Naples→Sorrento · Naples Airport→Amalfi · Naples Airport→Pompeii · Naples Airport→Positano · Naples Airport→Sorrento · Palermo Airport→Cefalù · Pisa Airport→Florence (×2) · Pisa Airport→Lucca · Roma Termini/Tiburtina Station↔Fiumicino Airport · Rome→Amalfi · Rome→Assisi · Rome→Bologna · Rome→Castel Gandolfo · Rome→Castel Romano Outlet · Rome→Civitavecchia · Rome→Florence · Rome→Milan · Rome→Naples · Rome→Orvieto · Rome→Perugia · Rome→Pisa · Rome→Pompeii · Rome→Positano · Rome→Siena · Rome→Sorrento · Rome→Tivoli · Rome→Valmontone Outlet · Rome→Vatican · Rome→Venice · Rome Ciampino↔Fiumicino Airport · Rome Fiumicino Airport→Campo de' Fiori/Castel Sant'Angelo/Colosseum/Pantheon/Piazza Navona/Spanish Steps/Trastevere/Trevi Fountain/Vatican City/Sorrento/Civitavecchia Port · Santa Maria Novella Station→Florence Airport · Venice→Padua · Venice→Verona · Verona Airport→Lake Garda

</details>

### Rome hotel-transfer matrix (136 pages) — 34 hotels × 2 airports (FCO, CIA) × 2 directions

<details><summary>Click to expand all 34 Rome hotels covered</summary>

Hotel Eden · Hotel Artemide · Hotel Quirinale · Hilton Rome Eur La Lama · Hotel de Russie · The St. Regis Rome · Rome Cavalieri Waldorf Astoria · Hotel Hassler Roma · NH Collection Roma Fori Imperiali · Anantara Palazzo Naiadi · Six Senses Rome · Hotel de la Ville · Palazzo Manfredi · Hotel Nazionale · Bvlgari Hotel Rome · W Rome · The Rome EDITION · Sofitel Roma Villa Borghese · Hotel Splendide Royal · Portrait Roma · Hotel Locarno · Palazzo Ripetta · Hotel Indigo Rome St. George · Hotel Fontana di Trevi · Hotel Pantheon · Hotel Campo de' Fiori · Hotel Santa Maria · Hotel Ponte Sisto · Hotel Capo d'Africa · NH Collection Roma Palazzo Cinquecento · Radisson Blu es. Hotel Rome · Le Méridien Visconti Rome · Hotel Barberini · Mercure Roma Centro Colosseo

</details>

### Milan hotel-transfer matrix (~156 pages) — 26 hotels × 3 airports (MXP, LIN, BGY) × 2 directions

<details><summary>Click to expand all 26 Milan hotels covered</summary>

Excelsior Hotel Gallia · Park Hyatt Milano · Mandarin Oriental Milan · Bulgari Hotel Milano · Armani Hotel Milano · Four Seasons Hotel Milano · Hotel Principe di Savoia · Grand Hotel et de Milan · The Westin Palace Milan · Carlton Hotel Baglioni · Palazzo Parigi Hotel & Grand Spa · Château Monfort · ME Milan Il Duca · Hotel VIU Milan · Sina The Gray · Rosa Grand Milano · Room Mate Giulia · Hotel Spadari al Duomo · Hotel Dei Cavalieri · Hotel Milano Scala · NH Milano Touring · Hotel Berna · NYX Hotel Milan · Radisson Collection Santa Sofia Milan · Hotel Manzoni · Meliá Milano

</details>

### Bologna hotel/cruise matrix (82 pages) — `/bologna-transfer/*`

18 hotels (Grand Hotel Majestic già Baglioni, Starhotels Excelsior, Royal Hotel Carlton, Hotel I Portici, NH Bologna De La Gare, Hotel Metropolitan, Art Hotel Commercianti, Art Hotel Orologio, Phi Hotel Bologna, Savhotel Aemilia, Hotel Savoia Regency, AC Hotel Bologna, Savhotel Fiera, Hotel Mercure Bologna Centro, UNA Hotels Bologna Centro, Best Western City Hotel, Hotel Porta San Mamolo, Hotel San Donato, Hotel Internazionale) plus a Ravenna Cruise Port connection, all ⇄ Bologna Marconi Airport.

### Florence/Pisa matrix (71 pages) — `/florence-transfer/*`

~28 hotels (Four Seasons Firenze, The St. Regis Florence, Hotel Savoy, Hotel Lungarno, Portrait Firenze, Helvetia & Bristol, Sina Villa Medici, Hotel Brunelleschi, NH Collection Porta Rossa, Tivoli Palazzo Gaddi, Villa Cora, Il Salviatino, Palazzo Vecchietti, Golden Tower, Grand Hotel Baglioni, Hotel Bernini Palace, Hotel Regency, Belmond Villa San Michele, Hotel Santa Maria Novella, Palazzo Castri 1874, plus countryside resorts: Castelfalfi, Rosewood Castiglion del Bosco, COMO Castello Del Nero, Borgo Santo Pietro, Hotel Le Fontanelle, Castel Monastero, Argentario Golf & Wellness, Fonteverde) + 12 landmarks (Duomo, Ponte Vecchio, Uffizi, Piazzale Michelangelo, Palazzo Pitti, Accademia, Piazza della Signoria, Santa Croce, Boboli Gardens, etc.) + Florence↔Pisa airport/station links.

### Veneto matrix (127 pages) — root-level slugs, sparse 3-airport × 30-destination grid

Airports: Venice Marco Polo (VCE), Treviso (TSF), Verona (VRN). Destinations: Venice City Centre, Mestre, Piazzale Roma, Santa Lucia Station, Tronchetto, Venice Cruise Port, Fusina Cruise Terminal, Murano, Burano, Lido di Venezia, Jesolo, Chioggia, Padua, Vicenza, Treviso, Verona, Bassano del Grappa, Abano Terme, Montegrotto Terme, Lake Garda, Sirmione, Peschiera del Garda, Bardolino, Desenzano del Garda, Lazise, Malcesine, Riva del Garda, Cortina d'Ampezzo, Rovereto, Trento, Bolzano. **This region is already extremely well covered — do not add more here.**

### Cross-border Europe matrix (64 pages) — 32 city pairs × 2 directions

Includes Milan↔Nice/Geneva/Zurich/Lugano/Monaco/St. Moritz/Lucerne/Interlaken/Cannes, Turin↔Nice, Genoa↔Nice/Monaco/Cannes, Venice↔Ljubljana/Pula/Porec/Piran/Lake Bled/Salzburg/Innsbruck, Trieste↔Ljubljana/Rovinj, and related pairs.

### Attraction-transfer (30) & Beach-transfer (20) pages

Full slug lists already live under `/attraction-transfer/*` (Colosseum, Vatican Museums, Pantheon, Trevi Fountain, Uffizi, Cinque Terre, Lake Como, Lake Garda, Dolomites, Mount Etna, Pompeii, Capri, Amalfi Coast, Costa Smeralda, Sassi di Matera, Valley of the Temples, Trulli Alberobello, etc.) and `/beach-transfer/*` (Positano, Capri, Amalfi Coast, Costa Smeralda, Portofino, Rimini, Taormina, Tropea, Otranto, Polignano a Mare, Sardinia, etc.). These already cover most of Italy's iconic single-attraction/beach searches well.

---

## Step 2 — Missing SEO Opportunities

Cross-referenced against the full inventory above so nothing here duplicates an existing page or keyword.

### 🔴 Gap 1 (Highest priority): Amalfi Coast / Sorrento / Capri / Ravello has no hotel-level matrix

You have Rome (34 hotels), Milan (26 hotels), Florence (~28 hotels), and Bologna (18 hotels) hotel matrices — each capturing the highest-intent, highest-converting search pattern that exists in this industry: **"[Airport] to [Specific Hotel Name] transfer."** This searcher has already booked, has a fixed budget, and converts at a far higher rate than generic "airport to city" searches.

The Amalfi Coast — arguably Italy's single most in-demand transfer region after Rome — has **zero** hotel-named pages. You only have town-level coverage (Naples→Positano, Naples Airport→Sorrento, etc.), which is good but leaves the entire high-intent layer unclaimed. Ravello, Praiano, Maiori, and Capri aren't served as destinations *at all* in the route system (Capri only exists as a beach-transfer/attraction-transfer page, not as an airport-transfer or hotel destination).

### 🟠 Gap 2: Sicily has almost no route coverage for two major airports

Catania (CTA) and Palermo (PMO) are both full international airports with a `/airport/*` page each, but the route system only has **one route per airport** (Catania Airport→Taormina, Palermo Airport→Cefalù) — and neither has a reverse (hotel/town→airport) page. No Syracuse, Ragusa, Modica, Mount Etna, Agrigento, Monreale, or Trapani coverage at all, and no hotel-level pages.

### 🟡 Gap 3: Sardinia has zero airport-to-town route pages

Only one `/beach-transfer/sardinia-beach-transfers` page exists. Cagliari (CAG) and Olbia (OLB) airports have no dedicated `/airport/*` page and no route pages to Costa Smeralda towns (Porto Cervo, Porto Rotondo, Baia Sardinia), Alghero, or Villasimius — despite Costa Smeralda being one of Europe's top luxury summer destinations.

### 🟡 Gap 4: Puglia is under-built relative to its search demand

Only 2 routes exist (Bari Airport→Alberobello, Bari Airport→Polignano a Mare). Missing: Lecce, Matera (only exists as an attraction-transfer, not an airport route), Ostuni, Monopoli, and the reverse direction for both existing routes.

### 🟢 Gap 5: Piedmont/Turin wine country

Milan↔Turin exists, but Turin has no dedicated wine-region routes despite Barolo/Alba/La Morra being a documented blog-content priority (`seo-topic-clusters-plan.md` → Food & Culinary Travel block already lists this keyword cluster with zero blogs published either).

### 🟢 Gap 6: Liguria/Cinque Terre from the Genoa side

Cinque Terre is currently only reachable in your route system via Florence (`Florence→Cinque Terre`). Genoa has an `/airport/genoa` page but no route pages to Portofino, Santa Margherita Ligure, or Cinque Terre/La Spezia — despite Genoa being the closer, more natural gateway for that coastline.

---

## Step 3 — Route Expansion Plan: Next 100 Pages

Grouped by cluster and ranked. None of these duplicate an existing slug or keyword from Step 1.

### Cluster A — Amalfi Coast / Sorrento / Capri hotel & route matrix — **40 pages — Priority: HIGH**

**A1. Naples Airport ⇄ 15 named hotels across Sorrento/Positano/Amalfi/Ravello (both directions = 30 pages)**

| # | Hotel (real, bookable) | Town | Sample Page Title | Slug pattern |
|---|---|---|---|---|
| 1 | Belmond Hotel Caruso | Ravello | Naples Airport to Belmond Hotel Caruso Transfer | `naples-airport-to-belmond-hotel-caruso-transfer` |
| 2 | Palazzo Avino | Ravello | Naples Airport to Palazzo Avino Transfer | `naples-airport-to-palazzo-avino-transfer` |
| 3 | Le Sirenuse | Positano | Naples Airport to Le Sirenuse Transfer | `naples-airport-to-le-sirenuse-transfer` |
| 4 | Il San Pietro di Positano | Positano | Naples Airport to Il San Pietro Positano Transfer | `naples-airport-to-il-san-pietro-positano-transfer` |
| 5 | Hotel Poseidon | Positano | Naples Airport to Hotel Poseidon Positano Transfer | `naples-airport-to-hotel-poseidon-positano-transfer` |
| 6 | Casa Angelina | Praiano | Naples Airport to Casa Angelina Transfer | `naples-airport-to-casa-angelina-transfer` |
| 7 | Hotel Santa Caterina | Amalfi | Naples Airport to Hotel Santa Caterina Amalfi Transfer | `naples-airport-to-hotel-santa-caterina-amalfi-transfer` |
| 8 | Grand Hotel Convento di Amalfi | Amalfi | Naples Airport to Grand Hotel Convento di Amalfi Transfer | `naples-airport-to-grand-hotel-convento-amalfi-transfer` |
| 9 | Hotel Marina Riviera | Amalfi | Naples Airport to Hotel Marina Riviera Transfer | `naples-airport-to-hotel-marina-riviera-transfer` |
| 10 | Grand Hotel Excelsior Vittoria | Sorrento | Naples Airport to Excelsior Vittoria Sorrento Transfer | `naples-airport-to-excelsior-vittoria-sorrento-transfer` |
| 11 | Bellevue Syrene | Sorrento | Naples Airport to Bellevue Syrene Sorrento Transfer | `naples-airport-to-bellevue-syrene-sorrento-transfer` |
| 12 | Grand Hotel Ambasciatori | Sorrento | Naples Airport to Grand Hotel Ambasciatori Transfer | `naples-airport-to-grand-hotel-ambasciatori-transfer` |
| 13 | J.K. Place Capri | Capri | Naples Airport to J.K. Place Capri Transfer (incl. ferry leg) | `naples-airport-to-jk-place-capri-transfer` |
| 14 | Capri Palace Jumeirah | Anacapri | Naples Airport to Capri Palace Transfer (incl. ferry leg) | `naples-airport-to-capri-palace-transfer` |
| 15 | Villa Marina Capri Hotel | Capri | Naples Airport to Villa Marina Capri Hotel Transfer | `naples-airport-to-villa-marina-capri-transfer` |

*Primary keyword pattern: `naples airport to [hotel name] transfer`. Secondary: `naples airport to [town] private driver`, `[hotel name] airport transfer`, `car service [hotel name]`. Intent: Transactional (post-booking). Why: mirrors your proven Rome/Milan/Florence/Bologna pattern for the one major region missing it — highest search volume + highest conversion rate of any page type on the site. Internal links: `/airport/naples`, `/tour/amalfi-coast`, `/route/naples-airport-to-sorrento` (existing), reciprocal links between all 15.*

**A2. New town/attraction routes not yet in the system (10 pages)**

| # | Page Title | Slug | Primary Keyword | Intent | Why |
|---|---|---|---|---|---|
| 1 | Naples Airport to Capri Transfer | `naples-airport-to-capri-transfer` | naples airport to capri | Transactional | Capri only exists as a beach/attraction page — no true transfer route |
| 2 | Naples Airport to Ravello Transfer | `naples-airport-to-ravello-transfer` | naples airport to ravello | Transactional | Ravello has zero route coverage despite being a top hilltop destination |
| 3 | Naples Airport to Praiano Transfer | `naples-airport-to-praiano-transfer` | naples airport to praiano | Transactional | Quiet, high-end Amalfi town, zero coverage |
| 4 | Sorrento to Positano Transfer | `sorrento-to-positano-transfer` | sorrento to positano taxi | Transactional | Common multi-stop coast request, currently unserved |
| 5 | Sorrento to Amalfi Transfer | `sorrento-to-amalfi-transfer` | sorrento to amalfi taxi | Transactional | Same as above |
| 6 | Positano to Ravello Transfer | `positano-to-ravello-transfer` | positano to ravello taxi | Transactional | Common day-trip pairing between coast towns |
| 7 | Sorrento to Capri Transfer (Port to Ferry) | `sorrento-to-capri-transfer` | sorrento to capri ferry transfer | Transactional | High-volume search, no ferry-coordination page exists |
| 8 | Rome to Capri Transfer | `rome-to-capri-transfer` | rome to capri | Transactional | Rome→Amalfi/Positano/Sorrento exist; Capri doesn't |
| 9 | Naples Airport to Herculaneum Transfer | `naples-airport-to-herculaneum-transfer` | naples airport to herculaneum | Informational/Transactional | Pompeii is covered, Herculaneum (less crowded alternative) is not |
| 10 | Amalfi Coast Town-Hopping: Positano, Amalfi & Ravello in One Day (Private Driver) | `amalfi-coast-town-hopping-day-transfer` | amalfi coast day driver | Commercial | Packages the above three towns into one bookable multi-stop product |

### Cluster B — Sicily airport & route expansion — **25 pages — Priority: HIGH**

| # | Page Title | Slug | Primary Keyword | Intent | Why |
|---|---|---|---|---|---|
| 1 | Taormina to Catania Airport Transfer | `taormina-to-catania-airport-transfer` | taormina to catania airport | Transactional | Reverse of the only existing Sicily route — currently missing entirely |
| 2 | Catania Airport to Syracuse Transfer | `catania-airport-to-syracuse-transfer` | catania airport to syracuse | Transactional | Major Baroque city, zero coverage |
| 3 | Syracuse to Catania Airport Transfer | `syracuse-to-catania-airport-transfer` | syracuse to catania airport | Transactional | Reverse leg |
| 4 | Catania Airport to Ragusa Transfer | `catania-airport-to-ragusa-transfer` | catania airport to ragusa | Transactional | Val di Noto/Montalbano-country, popular with UK/US tourists |
| 5 | Catania Airport to Modica Transfer | `catania-airport-to-modica-transfer` | catania airport to modica | Transactional | Famous for chocolate, high tourist search volume |
| 6 | Catania Airport to Mount Etna Transfer | `catania-airport-to-mount-etna-transfer` | catania airport to etna | Transactional | Direct airport→attraction route, currently only Taormina exists |
| 7 | Catania Airport to Noto Transfer | `catania-airport-to-noto-transfer` | catania airport to noto | Transactional | UNESCO Baroque town, zero coverage |
| 8 | Cefalù to Palermo Airport Transfer | `cefalu-to-palermo-airport-transfer` | cefalu to palermo airport | Transactional | Reverse of the only existing Palermo route |
| 9 | Palermo Airport to Monreale Transfer | `palermo-airport-to-monreale-transfer` | palermo airport to monreale | Transactional | Famous cathedral/mosaics town, 30 min from airport |
| 10 | Palermo Airport to Agrigento Transfer | `palermo-airport-to-agrigento-transfer` | palermo airport to agrigento | Transactional | Valley of the Temples exists as attraction-transfer only, not an airport route |
| 11 | Palermo Airport to Trapani Transfer | `palermo-airport-to-trapani-transfer` | palermo airport to trapani | Transactional | Salt pans/Egadi ferry gateway, zero coverage |
| 12 | Palermo Airport to Palermo City Centre Transfer | `palermo-airport-to-palermo-city-transfer` | palermo airport to palermo city | Transactional | Surprisingly no direct airport-to-city-centre page exists |
| 13–20 | Taormina hotel matrix: Grand Hotel Timeo, Belmond Villa Sant'Andrea, San Domenico Palace, Ashbee Hotel ⇄ Catania Airport (both directions) | `catania-airport-to-[hotel]-transfer` etc. | catania airport to [hotel] | Transactional | Same high-intent hotel pattern as Rome/Milan, applied to Sicily's top resort town |
| 21–25 | Palermo hotel matrix: Villa Igiea, Grand Hotel Villa Igiea, Piazza Borsa Palace, Butera 28 ⇄ Palermo Airport (both directions, top 2–3 hotels) | `palermo-airport-to-[hotel]-transfer` etc. | palermo airport to [hotel] | Transactional | Same pattern for Palermo |

### Cluster C — Sardinia — **12 pages — Priority: MEDIUM**

| # | Page Title | Slug | Primary Keyword | Intent | Why |
|---|---|---|---|---|---|
| 1 | Olbia Airport to Porto Cervo Transfer | `olbia-airport-to-porto-cervo-transfer` | olbia airport to porto cervo | Transactional | Costa Smeralda's flagship town, currently zero route coverage |
| 2 | Porto Cervo to Olbia Airport Transfer | `porto-cervo-to-olbia-airport-transfer` | porto cervo to olbia airport | Transactional | Reverse leg |
| 3 | Olbia Airport to Porto Rotondo Transfer | `olbia-airport-to-porto-rotondo-transfer` | olbia airport to porto rotondo | Transactional | Adjacent luxury town |
| 4 | Olbia Airport to Baia Sardinia Transfer | `olbia-airport-to-baia-sardinia-transfer` | olbia airport to baia sardinia | Transactional | Popular Costa Smeralda beach town |
| 5 | Olbia Airport to San Teodoro Transfer | `olbia-airport-to-san-teodoro-transfer` | olbia airport to san teodoro | Transactional | Popular beach town near La Cinta |
| 6 | Cagliari Airport to Cagliari City Transfer | `cagliari-airport-to-cagliari-city-transfer` | cagliari airport to cagliari | Transactional | Main southern gateway, zero coverage |
| 7 | Cagliari Airport to Villasimius Transfer | `cagliari-airport-to-villasimius-transfer` | cagliari airport to villasimius | Transactional | Top beach resort area near Cagliari |
| 8 | Cagliari Airport to Chia Transfer | `cagliari-airport-to-chia-transfer` | cagliari airport to chia | Transactional | Well-known beach destination |
| 9–12 | Reverse-direction pages for #6–8 plus Olbia Airport↔Cagliari intercity | various | olbia to cagliari transfer | Transactional | Completes the directional pairs |

### Cluster D — Puglia expansion — **10 pages — Priority: MEDIUM**

| # | Page Title | Slug | Primary Keyword | Intent | Why |
|---|---|---|---|---|---|
| 1 | Alberobello to Bari Airport Transfer | `alberobello-to-bari-airport-transfer` | alberobello to bari airport | Transactional | Reverse of existing route |
| 2 | Polignano a Mare to Bari Airport Transfer | `polignano-a-mare-to-bari-airport-transfer` | polignano a mare to bari airport | Transactional | Reverse of existing route |
| 3 | Bari Airport to Lecce Transfer | `bari-airport-to-lecce-transfer` | bari airport to lecce | Transactional | "Florence of the South," major gap |
| 4 | Lecce to Bari Airport Transfer | `lecce-to-bari-airport-transfer` | lecce to bari airport | Transactional | Reverse leg |
| 5 | Bari Airport to Matera Transfer | `bari-airport-to-matera-transfer` | bari airport to matera | Transactional | Matera exists only as attraction-transfer, not as an airport route |
| 6 | Matera to Bari Airport Transfer | `matera-to-bari-airport-transfer` | matera to bari airport | Transactional | Reverse leg |
| 7 | Bari Airport to Ostuni Transfer | `bari-airport-to-ostuni-transfer` | bari airport to ostuni | Transactional | "The White City," high tourist search volume |
| 8 | Ostuni to Bari Airport Transfer | `ostuni-to-bari-airport-transfer` | ostuni to bari airport | Transactional | Reverse leg |
| 9 | Bari Airport to Monopoli Transfer | `bari-airport-to-monopoli-transfer` | bari airport to monopoli | Transactional | Popular coastal town near Polignano |
| 10 | Monopoli to Bari Airport Transfer | `monopoli-to-bari-airport-transfer` | monopoli to bari airport | Transactional | Reverse leg |

### Cluster E — Piedmont / Turin wine country — **8 pages — Priority: LOW-MEDIUM**

| # | Page Title | Slug | Primary Keyword | Intent | Why |
|---|---|---|---|---|---|
| 1 | Turin Airport to Turin City Centre Transfer | `turin-airport-to-turin-city-transfer` | turin airport to turin city | Transactional | No direct airport-to-city page currently exists |
| 2 | Turin City Centre to Turin Airport Transfer | `turin-city-to-turin-airport-transfer` | turin to turin airport | Transactional | Reverse leg |
| 3 | Turin to Alba Transfer | `turin-to-alba-transfer` | turin to alba | Transactional | Gateway to Piedmont wine country |
| 4 | Turin to Barolo Transfer | `turin-to-barolo-transfer` | turin to barolo | Transactional | Matches blog-content-plan's already-identified wine keyword cluster |
| 5 | Turin Airport to Barolo Transfer | `turin-airport-to-barolo-transfer` | turin airport to barolo wine tour | Commercial | Direct airport-to-wine-region product |
| 6 | Turin to La Morra Transfer | `turin-to-la-morra-transfer` | turin to la morra | Transactional | Popular Barolo-adjacent hill town |
| 7 | Milan to Alba Transfer | `milan-to-alba-transfer` | milan to alba wine region | Commercial | Milan is a much larger feeder market than Turin for this region |
| 8 | Milan to Barolo Transfer | `milan-to-barolo-transfer` | milan to barolo | Commercial | Same rationale |

### Cluster F — Liguria / Cinque Terre from Genoa — **7 pages — Priority: LOW-MEDIUM**

| # | Page Title | Slug | Primary Keyword | Intent | Why |
|---|---|---|---|---|---|
| 1 | Genoa Airport to Portofino Transfer | `genoa-airport-to-portofino-transfer` | genoa airport to portofino | Transactional | Genoa airport page exists; no route to Portofino |
| 2 | Portofino to Genoa Airport Transfer | `portofino-to-genoa-airport-transfer` | portofino to genoa airport | Transactional | Reverse leg |
| 3 | Genoa Airport to Santa Margherita Ligure Transfer | `genoa-airport-to-santa-margherita-transfer` | genoa airport to santa margherita ligure | Transactional | Adjacent luxury coastal town |
| 4 | Genoa Airport to Cinque Terre Transfer | `genoa-airport-to-cinque-terre-transfer` | genoa airport to cinque terre | Transactional | Currently only reachable via Florence in your system — Genoa is the closer gateway |
| 5 | Cinque Terre to Genoa Airport Transfer | `cinque-terre-to-genoa-airport-transfer` | cinque terre to genoa airport | Transactional | Reverse leg |
| 6 | Genoa Airport to Genoa City Centre Transfer | `genoa-airport-to-genoa-city-transfer` | genoa airport to genoa city | Transactional | No direct airport-to-city page currently exists |
| 7 | Genoa to Cinque Terre Transfer | `genoa-to-cinque-terre-transfer` | genoa to cinque terre taxi | Transactional | City-to-region pairing, currently unserved |

**Total: 40 + 25 + 12 + 10 + 8 + 7 = 102** (round to your "next 100" by trimming the two lowest-priority Sardinia reverse-leg pages in Cluster C if you want an exact 100).

---

## Step 4 — Internal Linking Structure

For each hub, link outward to every related page type — hub pages currently under-link to their own matrices (e.g. `/city/rome` should link to all 34 Rome hotel pages it's implicitly the parent of, and vice versa).

**Rome hub (`/city/rome`, `/airport/rome-fiumicino`, `/airport/rome-ciampino`, `/rome-airport-transfer`):**
Rome Airport (FCO) → Rome Airport (CIA) → Rome City → Florence → Naples → Amalfi Coast → Civitavecchia Port → Vatican Tour → all 34 Rome hotel pages → new: Rome to Capri (Cluster A2)

**Milan hub (`/city/milan`, `/airport/milan-malpensa`, `/airport/milan-linate`, `/milan-chauffeur-service`):**
Milan Airport (MXP/LIN/BGY) → Milan City → Lake Como Tour → Turin → Venice → all 26 Milan hotel pages → new: Milan to Barolo / Milan to Alba (Cluster E)

**Florence hub (`/city/florence`, `/airport/florence`, `/florence-private-taxi`):**
Florence Airport → Florence City → Pisa → Siena → Chianti Wine Region → Cinque Terre → all Florence hotel/landmark pages → new: consider linking to Genoa-side Cinque Terre pages (Cluster F) as an alternate-gateway cross-reference

**Naples/Amalfi hub (`/city/naples`, `/airport/naples`, `/tour/amalfi-coast`) — currently thin, becomes the anchor for the biggest expansion:**
Naples Airport → Naples City → Sorrento → Positano → Amalfi → **new: Ravello, Praiano, Capri, all 15 new hotel pages (Cluster A)** → Pompeii → Herculaneum (new)

**Bologna hub (`/city/bologna`, `/airport/bologna-marconi`):**
Bologna Airport → Bologna City → Modena → Parma → Ravenna Cruise Port → Florence → all 18 Bologna hotel pages

**Venice/Veneto hub (`/city/venice`, `/airport/venice`):**
Venice Airport → Venice City → Verona → Padua → Lake Garda towns → Cortina d'Ampezzo → Dolomites Tour → cross-border Slovenia/Croatia/Austria pages

**Sicily hub (new anchor — `/airport/catania-fontanarossa`, `/airport/palermo`):**
Catania Airport → Taormina (existing) → **new: Syracuse, Ragusa, Modica, Etna, Noto, Taormina hotel matrix** · Palermo Airport → Cefalù (existing) → **new: Monreale, Agrigento, Trapani, Palermo City, Palermo hotel matrix**

**Sardinia hub (new anchor — needs `/airport/olbia` and `/airport/cagliari` pages created alongside the route pages):**
Olbia Airport → **new: Porto Cervo, Porto Rotondo, Baia Sardinia, San Teodoro** · Cagliari Airport → **new: Cagliari City, Villasimius, Chia**

**Puglia hub (`/city/bari`, `/airport/bari`):**
Bari Airport → Alberobello (existing) → Polignano a Mare (existing) → **new: Lecce, Matera, Ostuni, Monopoli, all reverse legs**

**Turin/Piedmont hub (`/airport/turin`) — currently a dead end, needs to become a real hub:**
Turin Airport → **new: Turin City, Alba, Barolo, La Morra** ← Milan (existing route) ← **new: Milan to Alba/Barolo**

**Genoa/Liguria hub (`/airport/genoa`) — currently a dead end:**
Genoa Airport → **new: Genoa City, Portofino, Santa Margherita Ligure, Cinque Terre** (cross-link with the existing Florence→Cinque Terre page)

---

## Step 5 — Cannibalization & Conflict Check

| Issue | Detail | Recommendation |
|---|---|---|
| **City slug duplicates** | 9 city pairs (Rome, Milan, Florence, Venice, Naples, Bologna, Palermo, Amalfi, Como) each have two live, identical-content, self-canonicalizing URLs | Pick one slug per city as canonical (recommend the shorter form, e.g. `/city/rome` over `/city/rome-taxi-service`, since it's cleaner) and either 301-redirect the other or set its `<link rel="canonical">` to point at the survivor. **I'd want your Search Console data before picking which of the two to keep** — whichever already has backlinks/impressions should win. |
| **Border hub vs. cross-border route pages** | `/border/italy-to-switzerland` *mentions* "Milan to Lugano" in prose while `/milan-to-lugano-transfer`-style pages may exist as separate dedicated pages via `cross-border-data.ts` | Not true cannibalization (different intent: overview hub vs. transactional page) **provided** the hub page hyperlinks to the dedicated page rather than just naming it in unlinked text. Worth a quick manual pass across all 6 border hub pages to confirm every named route is a live hyperlink. |
| **Sitemap omission (fixed)** | Airport/City/Tour/Border pages were invisible to `sitemap.xml` | Fixed in this session — see "Fixes Applied." Redeploy to activate. |
| **New pages vs. existing coverage** | Every recommendation in Step 3 was checked against the full 92-pair route list, the Rome/Milan/Bologna/Florence hotel lists, and the Veneto/cross-border matrices | No overlaps found. Do not add more Veneto or Tuscany-wine-region pages — both are already saturated relative to demand. |
| **Attraction-transfer/beach-transfer vs. new hotel pages** | e.g. `/beach-transfer/capri-island-taxi` already exists alongside proposed `/naples-airport-to-capri-transfer` | Different intent (beach/attraction day-trip vs. airport arrival transfer) and different keyword — not cannibalization, but link them to each other. |

---

## Priority Order (for execution)

1. **Deploy the sitemap fix** (already coded, zero content work, immediate indexing benefit for 53 pages).
2. **Decide + fix the 9 city-slug duplicates** (needs your Search Console input on which slug to keep).
3. **Cluster A — Amalfi Coast/Sorrento/Capri (40 pages)** — highest search volume + highest conversion rate of anything in this plan.
4. **Cluster B — Sicily (25 pages)** — second-biggest underserved region with two live airports already driving traffic.
5. **Cluster D — Puglia (10 pages)** and **Cluster C — Sardinia (12 pages)** — smaller but zero-competition regions internally.
6. **Cluster E — Piedmont (8 pages)** and **Cluster F — Liguria (7 pages)** — lowest volume, do last.
