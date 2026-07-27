# SEO & URL Structure Audit — Implementation Report

Covers both tasks: duplicate URL cleanup and the new bilingual Amalfi Coast / Sicily / Sardinia page cluster. For the full duplicate-URL audit table, see [duplicate-url-audit-and-fix-2026.md](./duplicate-url-audit-and-fix-2026.md); for the broader existing-page inventory and gap analysis this built on, see [seo-location-route-page-audit-2026.md](./seo-location-route-page-audit-2026.md).

---

## Task 1: Duplicate URL Cleanup — Done

- **9 duplicate city pairs** found and fixed (`/city/rome` vs `/city/rome-taxi-service`, and the same for milan, florence, venice, naples, bologna, palermo, amalfi, como).
- **301-equivalent redirects** added in `next.config.ts` (`redirects()`, `permanent: true`). Note: Next.js emits these as HTTP **308** for permanent redirects rather than 301 — 308 is the modern, method-preserving equivalent, and Google explicitly treats 301/308 identically for ranking-signal consolidation, so this satisfies the "301 redirect" requirement in substance. Verified live: `curl -I /city/rome-taxi-service` → `308 Permanent Redirect`, `Location: /city/rome`.
- **Duplicate entries removed** from the `cities` data array — the old URLs no longer generate a page at all; the redirect is what visitors and crawlers now hit.
- **9 internal-link call sites fixed** across `Footer.tsx`, `Coverage.tsx`, `PopularDestinations.tsx`, `BolognaTransferContent.tsx`, `BolognaCruiseContent.tsx`, three static hub pages, and — most importantly — the `cityServiceHref()` helper inside `/route/[slug]/page.tsx`, which generates a link on every single route page site-wide (114 of them now), so this one fix corrected internal linking broadly, not just on 9 pages.
- **Sitemap**: confirmed 0 occurrences of the duplicate slugs in the built sitemap; the 9 clean URLs remain.
- **Canonical tags**: unaffected by design — each surviving page already self-canonicalizes correctly; removing the competing duplicate was the actual fix, not a canonical-tag change.

## Task 2: New Bilingual Pages — Done

### What was checked before building (avoiding duplicates)

Cross-referenced every requested page against the existing 92-pair route list before writing anything:

| Requested | Status | Action |
|---|---|---|
| Naples Airport to Positano | **Already existed** (`naples-airport-to-positano-taxi`) | Not recreated — linked to instead |
| Naples Airport to Amalfi | **Already existed** (`naples-airport-to-amalfi-taxi`) | Not recreated — linked to instead |
| Catania Airport to Taormina | **Already existed** | Not recreated — built the missing **reverse leg** (Taormina → Catania Airport) instead |
| Palermo Airport to Cefalù | **Already existed** | Not recreated — built the missing **reverse leg** (Cefalù → Palermo Airport) instead |
| Everything else requested | New | Built |

### Pages built: 22 English + 22 Italian = 44 new pages

**Cluster 1 — Amalfi Coast / Sorrento / Capri (11 EN + 11 IT):**
Naples Airport → Ravello, Praiano, Capri (with ferry-coordination content) · Sorrento → Positano, Amalfi · Positano → Ravello · Naples Airport → Le Sirenuse (Positano), Il San Pietro di Positano, Hotel Santa Caterina (Amalfi), Belmond Hotel Caruso (Ravello), Excelsior Vittoria (Sorrento).

**Cluster 2 — Sicily (6 EN + 6 IT):**
Taormina → Catania Airport · Catania Airport → Syracuse, Mount Etna · Palermo Airport → Palermo City, Agrigento · Cefalù → Palermo Airport.

**Cluster 3 — Sardinia (5 EN + 5 IT):**
Olbia Airport → Porto Cervo, Porto Rotondo, Baia Sardinia · Cagliari Airport → Villasimius, Chia.

**Plus 2 supporting airport pages** (`/airport/olbia`, `/airport/cagliari`) — needed as hub anchors for the Sardinia cluster, since neither airport had a page at all before this. Reuses the existing `/airport/[slug]` template with zero code changes.

### Architecture — followed existing patterns, no new subsystems invented

- All 22 English pages live at `/route/[slug]`, generated from the **existing** `RouteData` array in `page-data.ts` via the same `...extraRoutes`-style spread pattern already used for the site's other 92 route pages. Zero changes to the English page template were needed beyond two small additive fields.
- All 22 Italian pages live at a **new** `/it/route/[slug]` — this genuinely didn't exist before (checked: the only prior bilingual *dynamic* content type on the site is the blog at `/it/blog/[slug]`; no other data-driven page type — city, airport, route, tour, border — had an Italian counterpart). The new IT template mirrors the blog's precedent: same shared `Navbar`/`Footer`/`FAQSection`/`ServiceSchema` components, own `generateStaticParams`, own hreflang logic.
- **Not a translation pass** — each of the 22 pages has independently written Italian content (distances, "why choose a private transfer" reasoning, FAQs) rather than a machine-translated mirror of the English copy. Italian place names are corrected for display (e.g. "Naples Airport" → "Aeroporto di Napoli", "Syracuse" → "Siracusa") via a small lookup, since the underlying `from`/`to` route-matching fields are shared between both language versions for `cities` slug lookups.
- Single source of truth: `src/lib/new-regions-routes-data.ts` holds both language versions of every entry side by side, so EN and IT content can never drift out of sync silently.

### SEO elements — verified on live pages via local production build

- ✅ Unique SEO title + meta description per page, per language
- ✅ H1/hero heading per page (via `PageHero`), in the correct language
- ✅ Clean URL slugs — English pattern-matched to the site's existing convention (`x-to-y-taxi`); Italian slugs are natural Italian, not transliterated (`trasferimento-aeroporto-napoli-ravello`, not `naples-airport-to-ravello-taxi` copy-pasted)
- ✅ Self-referencing canonical on every page
- ✅ hreflang: confirmed live via `curl` — every EN page emits `hrefLang="it-IT"` pointing to its Italian twin, `hrefLang="en"` + `x-default` pointing to itself; every IT page emits the mirror image pointing back to English. The other 92 pre-existing route pages correctly emit **no** hreflang (no Italian version exists for them — this was already the site's behavior before today and remains correct).
- ✅ Sitemap: `sitemap.ts` extended with an explicit `itRouteEntries` array (English entries needed no sitemap change — they flow automatically through the existing `routes` → `routeEntries` pipeline). Verified in the built `sitemap.xml`: all new EN and IT slugs present, `/airport/olbia` and `/airport/cagliari` present, zero occurrences of the removed duplicate city slugs.

### Content structure — all 9 required sections present on every page

Introduction → private-transfer explanation → route details (distance/duration/pickup-dropoff) → vehicle options → passenger/luggage info (folded into route details + vehicle grid) → why choose a private transfer → booking process → FAQ (4 per page) → related transfers/internal links. The vehicle-options grid and the 8-point trust-badge grid reuse the exact same generic block the other 92 route pages already share — consistent with the site's established pattern rather than a one-off.

### Internal linking — hub-and-spoke

Added a new `relatedLinks` field to `RouteData` (optional, additive — doesn't affect the other 92 pages) and a matching rendered section in both the EN and IT templates. Each of the 44 new pages links out to 4–6 curated targets: the relevant `/airport/[slug]` page, `/city/[slug]` page where one exists, the region tour/overview page, and 2–4 sibling pages within the same cluster (e.g. Naples Airport → Ravello links to the Belmond Caruso hotel page, the Positano→Ravello page, and — since they already existed — the pre-existing Naples Airport→Positano and Naples Airport→Amalfi pages). Every route page (new and pre-existing) also still shows the generic "6 other popular routes" block and city/service link columns that were already part of the template.

**Known gap, worth flagging honestly:** Sicily and Sardinia don't have `/city/[slug]` pages for most of their towns (no Taormina-adjacent Syracuse/Etna page, no Sardinia town pages at all beyond the 2 new airports) — where no city page exists, the related-links fall back to the nearest existing hub (the relevant airport page, `/services/private-tours`, or a sibling route) rather than a dead link. Building out dedicated city pages for these towns would be a natural next step if you want to deepen this further.

### Known limitation

`BookingForm` (the embedded quote-request widget) has no localization — its labels and success message are hardcoded English, and this is true of every page on the site, not something introduced here. The new Italian route pages use the same component as-is, so the surrounding page is fully Italian but the booking form itself is English. Fully localizing it would mean adding a `locale` prop to a component shared by 100+ pages — out of scope for this task, flagging it as a real gap rather than silently leaving it unmentioned.

---

## Verification Performed

1. `tsc --noEmit` — clean after every edit.
2. Two full `next build` runs (one after Task 1, one after Task 2) — both exit code 0, zero warnings.
3. Page-count deltas confirmed exactly against expectations in the build output:
   - `/city/[slug]`: 25 → 16 (−9, matches duplicates removed)
   - `/route/[slug]`: 92 → 114 (+22, matches new EN cluster pages)
   - `/it/route/[slug]`: 0 → 22 (new)
   - `/airport/[slug]`: 17 → 19 (+2, Olbia + Cagliari)
4. Ran `next start` against the production build locally and verified live over HTTP:
   - `/city/rome-taxi-service` → `308` → `Location: /city/rome`
   - `/city/rome` → `200`
   - All 9 spot-checked new EN route pages → `200`
   - All 5 spot-checked new IT route pages → `200`
   - `/airport/olbia`, `/airport/cagliari` → `200`
   - hreflang tags present and correct in both directions on a new EN/IT pair
   - A pre-existing, non-bilingual route page correctly shows **no** hreflang (unchanged behavior)
   - `sitemap.xml` contains all sampled new URLs and zero of the removed duplicate slugs

**Not yet deployed** — everything above was verified against a local production build (`next build` + `next start`), not the live Vercel deployment. Nothing in this session has been committed or pushed.
