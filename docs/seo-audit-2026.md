# Technical SEO Audit — italytaxiservice.com (2026)

> Senior Technical SEO consultant audit, grounded in the live codebase (Next.js 16 / Supabase).
> **Scope honesty:** sections that require live tools I cannot access are clearly flagged
> **[NEEDS LIVE DATA]** with the exact reports to pull. I have not fabricated GSC/CWV/SERP numbers.

---

## 0. What I could and couldn't measure

| Area | Method | Status |
|---|---|---|
| Technical config, schema, canonicals, sitemap, robots, internal links, content depth | Direct code inspection | ✅ Grounded findings |
| Core Web Vitals / PageSpeed scores | Requires Lighthouse/PSI on live URLs | ⚠️ Assessed from code; **run PSI to confirm** |
| Search Console (queries, CTR, clicks, impressions, positions 8–20) | Requires GSC access/export | ❌ **[NEEDS LIVE DATA]** — methodology provided |
| Competitor SERP gap | Requires live SERP/Ahrefs/Semrush | ⚠️ Framework + named competitors; **specifics need a tool** |
| Traffic/lead impact | Directional estimates from intent + position math | ⚠️ Labeled as estimates, not promises |

---

## 1. Technical SEO

### ✅ Working well (verified in code)
- **Robots.txt** — allows everything except `/crm/`, with explicit Googlebot/Bingbot/AhrefsBot groups + sitemap. Clean.
- **Sitemap** (`src/app/sitemap.ts`) — dynamic, pulls all static routes + dynamic (city/airport/route/border/attraction/beach/tour) + published blogs; sensible priorities; auto-updates.
- **Canonicals** — `metadataBase` set to `https://www.italytaxiservice.com`; city/airport/route/border/service pages set `alternates.canonical` in `generateMetadata`.
- **Redirects** — apex→www (307) and http→https (308) confirmed; single canonical host.
- **Image optimization** — `next.config.ts` serves AVIF→WebP, responsive `deviceSizes`, `compress: true`.
- **Indexability** — only `/crm/*` is `noindex` (meta + `X-Robots-Tag`); `/invoice/[token]` correctly noindex (private). Everything commercial is indexable.
- **Rendering** — ISR (`revalidate=60`) on blog/dynamic pages → fresh content, fast TTFB.

### ⚠️ Issues to fix
| # | Issue | Where | Fix |
|---|---|---|---|
| T1 | **No `BreadcrumbList` schema** on city/airport/route/service/attraction/beach pages | `Breadcrumb.tsx` emits it but isn't imported into those templates | Import & render `<Breadcrumb>` (or emit BreadcrumbList JSON-LD) in each dynamic template — **high impact, low effort** (breadcrumb rich results + entity clarity) |
| T2 | **`border/[slug]` has no Schema and no FAQ** | `src/app/border/[slug]/page.tsx` | Add `ServiceSchema` + `FAQSection` like the other templates |
| T3 | **Broken internal links risk** from blog cross-links to unpublished slugs | Caught several this session (e.g. `day-trips-from-rome-without-a-car`) | Add a build-time link checker (script) over blog `content` vs published slugs + static routes |
| T4 | **CWV not measured** | Live | Run PageSpeed Insights on home, a city, an airport, a route, a blog; confirm LCP < 2.5s, INP < 200ms, CLS < 0.1 |
| T5 | **Hero images** — confirm `priority`/`fetchpriority=high` only on LCP image, lazy-load below-fold | Templates | Audit `<Image priority>` usage; one priority image per page |

### Core Web Vitals — [partly NEEDS LIVE DATA]
Code signals are good (next/image AVIF, preloads in `layout.tsx`, compression, ISR). **Action:** run PSI/CrUX on 5 template types; watch for (a) LCP from large hero images, (b) CLS from web-font swap or unsized images, (c) INP from heavy client components (the CRM is noindex so excluded).

---

## 2. On-Page SEO

### ✅ Verified
- Title tags & meta descriptions generated per page via `generateMetadata` (city/airport/route/border).
- `Article` + `FAQPage` + `BreadcrumbList` + `ImageObject` + `LocalBusiness/TaxiService` schema now emitted on **all blog posts** (added this session).
- Global `Organization` + `LocalBusiness/TaxiService` + `WebSite` + `WebPage` schema in `JsonLd.tsx`.
- `ServiceSchema` on city/airport/route/service templates; `FAQSection` with FAQ schema on most.

### ⚠️ Issues
| # | Issue | Detail | Fix |
|---|---|---|---|
| O1 | **Generic/duplicate city meta fallback** | City pages without custom copy fall back to "Explore this beautiful Italian destination with our premium private transfer services…" — identical across many cities | Write a unique 150–160-char meta per city using `{cityName}` + a distinct hook (landmarks, drive times) |
| O2 | **Templated titles risk near-duplication** | `Taxi Service in {city} \| Private Transfers` is fine, but ensure each city/airport/route H1 + intro is unique | Add 2–3 unique sentences per page (drive time, ZTL note, landmark drop points) |
| O3 | **Breadcrumb schema missing** (see T1) | Hurts breadcrumb rich snippet eligibility | Render Breadcrumb on all templates |
| O4 | **Keyword cannibalization watchpoints** | `milan-airport-transfer-options` (blog) vs `milan-airports-to-city-center-and-beyond` (blog) vs `/milan-chauffeur-service` (page); `private-transfers-rome-fiumicino-airport-2026` (blog) vs `/rome-airport-transfer` (page) | Set the **page** as canonical commercial target; ensure blogs link *up* to it with descriptive anchors and don't target the identical head term. Audit anchor text. |
| O5 | **Image ALT on dynamic templates** | Confirm city/airport/route hero + inline images have keyworded ALT (blogs use SEO title) | Set `alt="{Service} in {Location} — Italy Taxi Service"` pattern |
| O6 | **Internal linking depth** | Blogs now link well to money pages; reverse links (money page → supporting blogs) are sparse | Add a "Helpful guides" block to each city/airport/route/service page linking 3–5 relevant blogs (two-way authority) |

---

## 3. Content SEO

### Findings (grounded in code + project memory)
- **Thin pages:** prior audit flagged ~17 beach-transfer pages + some attraction-transfer pages as thin; city/airport **testimonials are generic** (same 3 reused). This is the **biggest content liability** — "crawled, not indexed" risk.
- **Duplicate content:** generic city meta fallback (O1) + reused testimonials = near-duplicate signals across location pages.
- **Location/airport/route page quality:** structurally good (schema, FAQ, internal links) but need **unique body content** (drive times, fares, terminals, ZTL drop points, local landmarks) to differentiate.
- **Blog content:** ~90 posts now, strong topical coverage of logistics, cruise, airport, destination, events. EEAT is the gap.
- **Missing commercial pages:** no **per-cruise-port landing pages** (Civitavecchia, Livorno, Naples, La Spezia, Salerno, Genoa, Savona, Messina, Venice, Bari) — currently only `/services/cruise-port-transfers`. **High-value build.** Also missing: train-station transfer pages (Termini→FCO, Centrale→MXP), ski-transfer pages.
- **Missing informational content:** covered well by the 90 blogs; remaining gaps in the 50-topic list below.

### E-E-A-T improvements (exact)
1. **Author + reviewer bylines** on blogs ("Written by … · Reviewed by the Italy Taxi Service dispatch team") with a real author bio page.
2. **First-hand operational detail** — exact drive times, € fares, terminal/drop points, ZTL specifics (you have this expertise; surface it).
3. **Unique reviews** per city/airport (replace the reused 3) — pull real ones, mark up with `Review`/`AggregateRating`.
4. **Trust signals** — NCC licence numbers, insurance, "X years / X transfers completed", contact + physical presence.
5. **Last-updated dates** visible on pages (you have `updated_at`).

---

## 4. Search Console Analysis — [NEEDS LIVE DATA]

I don't have GSC access, so I won't invent numbers. Here's exactly what to pull and how to action it. **Export from GSC → Performance → last 28 days vs previous 28 days.**

| Report | Filter | Action |
|---|---|---|
| **Positions 8–20** ("striking distance") | Avg position 8–20, sort by impressions | These rank page 1–2 bottom; a content refresh + internal links can push to top 5. Prioritise commercial queries. |
| **High impressions, low CTR** | CTR < 2% AND impressions > 100 | Rewrite title/meta for the query (see CTR section); add FAQ to win PAA. |
| **Pages losing clicks (28d)** | Compare date ranges, sort click delta asc | Diagnose: ranking drop, SERP feature loss, seasonality, cannibalization. Refresh + re-link. |
| **Pages losing impressions** | Impression delta asc | Usually ranking/indexation loss — check coverage report for "Crawled – not indexed" (your thin pages). |
| **Keyword opportunities** | Queries with impressions but no dedicated page | Map to a new route/blog (see lists below). |

**Send me a GSC export (CSV) and I'll turn it into a prioritized, page-by-page action list.** Also connect Bing Webmaster Tools (you already have IndexNow keys).

---

## 5. Competitor Gap Analysis — [framework; specifics NEED a SERP tool]

Top players in Italy transfers/airport taxi: **Welcome Pickups, Suntransfers, Daytrip, Blacklane, GetTransfer, Civitatis, Kiwitaxi, AirportTransfer.com**, plus strong local operators (RomeCabs, Benvenuto Limos).

**Pattern of what they do that you can beat or match:**
1. **Massive route-page coverage** (hundreds of from→to pages with fixed prices) — your 12 routes are far behind; see 100-route list.
2. **Visible fixed prices** on route pages (you should show indicative € to win commercial intent + capture "X to Y price" queries).
3. **Aggregated reviews / Trustpilot widgets** — strong trust signals.
4. **Per-port and per-station landing pages** (you lack these).
5. **Multi-language** (IT/DE/FR/ES) — huge for an Italy transfer site; check if you can localize high-value pages.

**Where you can win:** depth of genuinely useful blog content (you now have 90 posts), local operational detail, and a tightly internally-linked cluster architecture most aggregators lack.

---

## 6. Deliverables

### 6A. Priority fixes

**🔴 HIGH (do in 0–30 days — biggest ranking/lead lift)**
1. **Fix thin location/attraction/beach pages** (unique body content + unique testimonials). *Resolves "crawled-not-indexed"; unlocks indexation of ~40+ pages.*
2. **Add BreadcrumbList schema to all templates** (T1) + **schema/FAQ to border pages** (T2). *Rich results + entity clarity sitewide.*
3. **Build per-cruise-port landing pages** (10) and **add visible indicative prices** to route pages. *Captures high-intent commercial queries competitors own.*
4. **Unique city meta descriptions** (O1) + kill duplicate fallback. *CTR + dedupe.*
5. **Two-way internal linking** — money pages → supporting blogs (O6).

**🟡 MEDIUM (30–60 days)**
6. Launch first 30 of the 100 new route pages (priced).
7. EEAT: author/reviewer bylines, licence/trust signals, real reviews + `AggregateRating`.
8. Run PSI on 5 templates; fix any LCP/CLS issues (T4/T5).
9. Build train-station transfer pages (Termini→FCO, Centrale→MXP, etc.).
10. CTR rewrites for top 20 pages (see 6E once GSC data is in).

**🟢 LOW (60–90 days)**
11. Remaining 70 route pages.
12. Multi-language for top 20 pages (start with IT).
13. 50 new blog topics (below), 2–3/week.
14. Trustpilot/review widget integration.

### 6B. Estimated impact (directional — not guaranteed)
- **Thin-page fix:** indexing 40+ currently-suppressed pages → potentially **+15–30% organic impressions** within 60–90 days as they enter the index.
- **100 priced route pages:** route queries are high-commercial-intent, low-difficulty long-tail; even modest rankings → **the single biggest lead driver.** Estimate **+20–40% qualified transfer leads** at maturity (6 months), assuming priced CTAs.
- **CTR rewrites (positions 5–15):** moving CTR from ~2% to ~5% on existing impressions is often **+30–50% clicks on affected pages** with no ranking change.
- **Breadcrumb/FAQ schema:** incremental CTR via rich results, low-single-digit %.

*These are scenario estimates from intent + position math; actuals depend on competition and execution. I'll tighten them once you share GSC baselines.*

### 6C. 90-Day Roadmap
- **Weeks 1–2:** Fix thin pages (templates + unique content); add Breadcrumb schema sitewide; border schema/FAQ; unique city metas. Pull GSC export → striking-distance list.
- **Weeks 3–4:** Build 10 cruise-port pages + add indicative prices to existing 12 routes; two-way internal links; CTR rewrites for top 20 (from GSC).
- **Weeks 5–8:** Launch 30 priced route pages; EEAT (bylines, reviews, trust); PSI fixes; train-station pages.
- **Weeks 9–12:** 70 remaining route pages; 12–18 new blogs; begin IT localization of top 20 pages; review-widget + AggregateRating.
- **Ongoing:** weekly GSC review, IndexNow submission of new URLs, monthly broken-link + coverage check.

---

### 6D. 100 New Route Pages to Create (`/route/{from}-to-{to}-taxi`)

> Slugs follow your existing pattern. Add indicative € price + drive time + FAQ to each. Grouped by type. (Excludes your 12 existing routes.)

**Airport → City / Resort (highest commercial intent) — 30**
1. rome-fiumicino-to-rome-city-centre  2. rome-ciampino-to-rome  3. rome-fiumicino-to-civitavecchia-port  4. rome-fiumicino-to-sorrento  5. rome-fiumicino-to-naples  6. naples-airport-to-sorrento  7. naples-airport-to-positano  8. naples-airport-to-amalfi  9. naples-airport-to-pompeii  10. naples-airport-to-salerno  11. milan-malpensa-to-milan-city-centre  12. milan-malpensa-to-como  13. milan-malpensa-to-bergamo  14. milan-malpensa-to-stresa-lake-maggiore  15. milan-linate-to-milan-city-centre  16. milan-malpensa-to-lugano  17. pisa-airport-to-florence  18. pisa-airport-to-lucca  19. florence-airport-to-florence-city-centre  20. florence-airport-to-siena  21. catania-airport-to-taormina  22. catania-airport-to-syracuse  23. palermo-airport-to-palermo  24. palermo-airport-to-cefalu  25. bari-airport-to-polignano-a-mare  26. bari-airport-to-alberobello  27. verona-airport-to-lake-garda  28. venice-airport-to-venice  29. venice-airport-to-treviso  30. olbia-airport-to-porto-cervo

**City ↔ City / Day-trip — 25**
31. rome-to-tivoli  32. rome-to-orvieto  33. rome-to-assisi  34. rome-to-siena  35. rome-to-amalfi-coast  36. rome-to-sorrento  37. florence-to-bologna  38. florence-to-lucca  39. florence-to-san-gimignano  40. florence-to-montepulciano  41. florence-to-chianti  42. milan-to-bergamo  43. milan-to-portofino  44. milan-to-cinque-terre  45. milan-to-stresa  46. naples-to-sorrento  47. naples-to-positano  48. naples-to-salerno  49. naples-to-caserta  50. venice-to-padua  51. venice-to-treviso  52. venice-to-cortina  53. bologna-to-florence  54. turin-to-milan  55. rome-to-frascati

**Cruise Port ↔ City/Airport — 20**
56. civitavecchia-to-rome-fiumicino-airport  57. civitavecchia-to-rome-city  58. naples-port-to-pompeii  59. naples-port-to-sorrento  60. naples-port-to-amalfi  61. salerno-port-to-amalfi  62. salerno-port-to-positano  63. livorno-port-to-florence  64. livorno-port-to-pisa  65. livorno-port-to-lucca  66. la-spezia-port-to-cinque-terre  67. la-spezia-port-to-florence  68. genoa-port-to-portofino  69. savona-port-to-genoa  70. messina-port-to-taormina  71. messina-port-to-etna  72. venice-port-to-venice-airport  73. trieste-port-to-venice  74. bari-port-to-alberobello  75. palermo-port-to-palermo-city

**Train Station ↔ Airport/Port — 15**
76. roma-termini-to-fiumicino-airport  77. roma-termini-to-ciampino-airport  78. roma-termini-to-civitavecchia-port  79. milano-centrale-to-malpensa-airport  80. milano-centrale-to-linate-airport  81. milano-centrale-to-bergamo-airport  82. firenze-smn-to-pisa-airport  83. firenze-smn-to-florence-airport  84. napoli-centrale-to-naples-airport  85. napoli-centrale-to-sorrento  86. venezia-santa-lucia-to-venice-airport  87. venezia-mestre-to-venice-airport  88. verona-porta-nuova-to-verona-airport  89. bologna-centrale-to-bologna-airport  90. torino-porta-nuova-to-turin-airport

**Cross-border / Long-distance — 10**
91. milan-to-lugano-switzerland  92. milan-to-zermatt  93. como-to-lugano  94. venice-to-ljubljana  95. turin-to-chamonix  96. milan-to-st-moritz  97. rome-to-florence-to-venice (multi-stop tour)  98. naples-to-rome  99. florence-to-rome-airport  100. bologna-to-milan

---

### 6E. CTR improvements for top pages (apply once GSC confirms which rank 3–15)
General high-impact title/meta patterns for transfer pages — implement on commercial templates now, refine with GSC data:
- **Add the number + benefit:** "Rome Airport Transfer from €50 — Fixed Price, 24/7" (price + reassurance beats generic titles).
- **Add the year:** "(2026)" on guides/events to signal freshness.
- **Add a power phrase to meta:** "Meet & greet · flight tracking · no hidden fees · book in 60 seconds."
- **Front-load the keyword** in the title; keep ≤60 chars.
- **Add FAQ schema** to win People-Also-Ask real estate on informational queries.
- **Match search intent in the H1** (question pages get question H1s).
- **Test "vs" and "how much" framings** for comparison/price queries.

*Provide the GSC "high-impressions/low-CTR" export and I'll write exact title+meta rewrites per URL.*

---

### 6F. 50 New Blog Topics (gap-checked vs ~90 published)

> Remaining white space after this session's 26 publishes. Each maps to a commercial page.

**Pricing & cost (commercial) — 10**
1. How Much Is a Taxi from Naples Airport to the Amalfi Coast?  2. Rome to Florence Private Transfer Cost  3. How Much Is a Water Taxi in Venice?  4. Malpensa to Milan Taxi Price Explained  5. Pisa Airport to Florence Cost  6. How Much Is a Private Driver for a Day in Tuscany?  7. Civitavecchia to Rome Transfer Cost  8. Catania to Taormina Taxi Price  9. How Much Does an Italy Airport Transfer Cost? (national)  10. Are Fixed-Price Transfers Cheaper Than the Meter?

**Destination/day-trip guides — 12**
11. Best Day Trips from Rome Without a Car  12. Best Day Trips from Naples  13. Pompeii & Vesuvius in One Day  14. Hidden Gems in Tuscany  15. Lake Como vs Lake Garda  16. Capri in One Day from Naples/Sorrento  17. Best Beaches Near Rome  18. Best Day Trips from Venice  19. Cinque Terre Without the Crowds  20. Best of the Dolomites by Private Car  21. Sicily in 5 Days: Private Driver Itinerary  22. Puglia Road Trip Without Driving

**Airport-specific — 8**
23. Pisa Airport Complete Guide  24. Naples Airport Arrival Guide  25. Venice Marco Polo Arrival Guide  26. Bologna Airport to City Guide  27. Catania Airport Guide  28. Florence Airport (Peretola) Guide  29. Which Milan Airport Should You Fly Into?  30. Bergamo Airport to Milan & the Lakes

**Practical/seasonal — 10**
31. Best Time to Visit the Amalfi Coast  32. Italy in Winter: Where to Go  33. Christmas in Rome: Travel Guide  34. Easter in Italy & the Vatican  35. Italy in October: Weather & Where  36. Driving in Italy: What Tourists Must Know  37. Italian Train Strikes: How to Plan Around Them  38. Public Holidays in Italy 2026  39. Is the Roma Pass / OMNIA Worth It?  40. Accessible Travel in Italy: Wheelchair Transfers

**Niche commercial/trust — 10**
41. Group & Minibus Transfers in Italy  42. Executive & Corporate Travel in Italy  43. Italy Honeymoon Transfers & Romantic Drives  44. Multi-City Italy Itinerary by Private Driver  45. Shore Excursions vs Independent Cruise Tours  46. Are Private Transfers Worth It in Italy?  47. How to Choose a Reliable Italy Transfer Company  48. NCC vs Taxi in Italy: What's the Difference?  49. Pet-Friendly Transfers in Italy  50. VIP & Luxury Travel Across Italy

---

## Immediate next actions (this week)
1. Ship **Breadcrumb schema sitewide** + **border schema/FAQ** (small code change, big coverage win).
2. Start the **thin-page content fix** (location/attraction/beach) — the highest-ROI item.
3. Send the **GSC 28-day export** so I can produce the exact striking-distance + CTR-rewrite list.
4. Approve the **first 30 route pages** (priced) for build.
