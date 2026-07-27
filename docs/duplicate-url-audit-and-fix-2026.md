# Duplicate URL Audit & Fix — City Pages

## Summary

9 cities had two live, indexable pages targeting the identical search intent — a clean slug and a `-taxi-service`-suffixed twin. Both returned HTTP 200, both rendered identical content (the underlying `cityData.ts` content lookup is keyed by city *name*, not slug), and both carried a **self-referencing canonical tag** (`canonical: /city/${slug}`), meaning neither page deferred to the other. This is textbook keyword cannibalization: two URLs splitting the same ranking signals for the same query instead of consolidating them onto one.

## Audit Table

| Duplicate URL | Primary URL (kept) | Content Diff | Canonical (before) | Internal Links Pointing to Duplicate | Sitemap (before) | Action Taken |
|---|---|---|---|---|---|---|
| `/city/rome-taxi-service` | `/city/rome` | None — identical | Self (`/city/rome-taxi-service`) | Footer, Coverage, PopularDestinations, rome-airport-transfer, route/[slug] `cityServiceHref()` | Not included (bug, fixed separately) | 301 + link update + removed from data |
| `/city/milan-taxi-service` | `/city/milan` | None — identical | Self | Footer, Coverage, PopularDestinations, milan-chauffeur-service, route/[slug] | Not included | 301 + link update + removed from data |
| `/city/florence-taxi-service` | `/city/florence` | None — identical | Self | Footer, Coverage, PopularDestinations, florence-private-taxi, route/[slug] | Not included | 301 + link update + removed from data |
| `/city/venice-taxi-service` | `/city/venice` | None — identical | Self | Footer, Coverage, PopularDestinations, route/[slug] | Not included | 301 + link update + removed from data |
| `/city/naples-taxi-service` | `/city/naples` | None — identical | Self | Footer, Coverage, PopularDestinations, route/[slug] | Not included | 301 + link update + removed from data |
| `/city/bologna-taxi-service` | `/city/bologna` | None — identical | Self | PopularDestinations, BolognaTransferContent, BolognaCruiseContent, route/[slug] | Not included | 301 + link update + removed from data |
| `/city/palermo-taxi-service` | `/city/palermo` | None — identical | Self | Coverage, route/[slug] | Not included | 301 + link update + removed from data |
| `/city/amalfi-taxi-service` | `/city/amalfi` | None — identical | Self | Coverage, route/[slug] | Not included | 301 + link update + removed from data |
| `/city/como-taxi-service` | `/city/como` | None — identical | Self | Coverage, route/[slug] | Not included | 301 + link update + removed from data |

**Recommendation applied throughout:** keep the clean slug (`/city/{city}`), remove the `-taxi-service` variant — per your explicit instruction, no Search Console tie-break was needed this round.

## Implementation

1. **301 redirects added** — `next.config.ts` → `redirects()`, all 9 pairs, `permanent: true`. These stay in place indefinitely (not just until the next deploy) so any external backlinks or bookmarks to the old URLs keep working instead of 404ing.
2. **Duplicate entries removed** from `cities` array in `src/lib/page-data.ts` — `generateStaticParams()` for `/city/[slug]` no longer produces the 9 duplicate pages at all, so there's no live page left to compete with the canonical one.
3. **Internal links updated** to point directly at the primary URL (no more redirect hop) in: `Footer.tsx`, `Coverage.tsx`, `PopularDestinations.tsx`, `BolognaTransferContent.tsx`, `BolognaCruiseContent.tsx`, `rome-airport-transfer/page.tsx`, `milan-chauffeur-service/page.tsx`, `florence-private-taxi/page.tsx`, and the dynamic `cityServiceHref()` helper in `route/[slug]/page.tsx` (this last one generates a link on **every one of the 92 `/route/*` pages**, so fixing it alone corrects internal linking site-wide going forward, including for all new pages built in this same session).
4. **Sitemap**: the duplicate slugs were never in `sitemap.xml` to begin with (that was a separate bug, already fixed in the prior audit session) — so no sitemap removal step was needed here; confirmed no `-taxi-service` entries can reappear since `sitemap.ts` sources city URLs directly from the now-deduplicated `cities` array.
5. **Canonical tags**: no per-page change was needed — each surviving page already self-canonicalizes correctly (`/city/rome`, etc.); removing the duplicate's competing self-canonical simply eliminates the second, conflicting claim.

## Sequencing (per "do not delete before confirming redirects")

Redirects were added to `next.config.ts` in the same edit pass as the data removal — Next.js evaluates `redirects()` before filesystem/dynamic route resolution, so the 301 fires regardless of whether the old slug still exists in `generateStaticParams`. A full production build (`npm run build`) was run afterward to confirm no build errors from the removal and that the route manifest reflects the change. **Verify the redirect fires with a real 301 status once this is deployed** — I can't hit a live Vercel deployment from this environment, only `tsc`/`next build` locally.

## Verification performed

- `tsc --noEmit`: clean.
- `next build`: run in background; see final SEO verification report for the result.
- Confirmed exactly 16 city slugs remain (was 25), matching the 9 removed pairs.
- Confirmed zero remaining `-taxi-service` references anywhere in `src/`.
