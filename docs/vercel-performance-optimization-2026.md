# Vercel Performance Audit & Optimization Report

**Goal:** cut Fast Origin Transfer (10.15/10 GB) and ISR Reads (1.1M/1M) by ≥70% with zero change to UI, SEO, URLs, or functionality.

**Method:** full codebase audit (not guesswork) — grepped every file in `src/` for every dynamic-rendering trigger listed in the brief, checked every `page.tsx` with a `[slug]`/`[token]` segment for `generateStaticParams`, read `sitemap.ts`/`next.config.ts`/both root layouts/the one API route in full, and verified every fix against two real `next build` runs (before/after) plus a live local `next start` for the URL-structure work done earlier this session. Numbers below for "current" state reflect the code as it was before this session's fixes.

---

## TL;DR — what was actually wrong

This app has **no middleware, no `force-dynamic`, no `cookies()`/`headers()`/`draftMode()`, no `searchParams`, and no `fetch(..., { cache: 'no-store' })` anywhere** — the entire "audit every dynamic-rendering trigger" list in the brief comes back empty except for one deliberately-dynamic page (a tokenized invoice lookup, which *should* stay dynamic). The site's ~1,100 SEO pages (city/airport/route/tour/border/attraction/beach-transfer/hotel-transfer pages) were **already** 100% static via `generateStaticParams`, built from local data arrays.

The entire overage traces to **two specific, narrow bugs**:

1. **`sitemap.ts` had no `revalidate` export.** Because it queries Supabase, Next.js couldn't treat it as static — every single hit (and sitemaps get hit constantly by crawlers) re-ran a full recursive filesystem walk of `src/app` *and* a live Supabase query *and* transferred the entire ~1,100-URL XML body, uncached, from the origin function.
2. **The blog `[slug]` pages had no `generateStaticParams`.** All 185 English + 20 Italian blog posts were being rendered **on-demand, per-request**, not pre-built — despite having `export const revalidate = 60` set, that export alone doesn't statically pre-render a `[slug]` route without `generateStaticParams`, so every post view was closer to `force-dynamic` in practice, and even the 60-second cache window was constantly being re-earned from scratch for 205 separate URLs.

Fixing these two, plus three smaller items, is a very high-confidence path to the ≥70% target — see estimates in the ranked table below.

---

## Ranked list of top offenders (Task 12)

Ranked by estimated contribution to Fast Origin Transfer + ISR Reads, based on: page/URL count × realistic crawl/visit frequency × payload size × revalidate window. I don't have direct access to your Vercel Analytics dashboard from this environment — if your plan exposes a per-route usage breakdown, cross-check it against this ranking; the reasoning here is derived from the codebase, not observed request logs.

| Rank | Route(s) | Why it was expensive | Status |
|---|---|---|---|
| 1 | `/sitemap.xml` | No cache signal at all → **every** crawler hit re-executed a recursive `fs.readdirSync` walk of the entire app directory + a live Supabase query for all published blogs + transferred the full ~1,100-URL XML, uncached, every time. Sitemaps are re-crawled very frequently (often multiple times/day per bot), so this alone could plausibly account for the largest single share of Fast Origin Transfer. | **Fixed** |
| 2 | `/blog/[slug]` (185 posts) | No `generateStaticParams` → on-demand render per request, every single blog page view (real visitors *and* the far higher volume of search-engine crawl traffic across 185 unique URLs) hit the origin function, ran a joined Supabase query (`select('*, bloggers(*)')`) *and* a second query for related posts. | **Fixed** |
| 3 | `/it/blog/[slug]` (20 posts) | Same bug as #2, smaller page count. | **Fixed** |
| 4 | `/blog` listing | `select('*')` pulled every column — including `content`, the largest field per row (5–20 KB of HTML) — for all 185 posts, on every regeneration, when the listing only renders 7 of ~20 columns. Combined with the 60s window, this was a lot of wasted egress/processing per regen. | **Fixed** |
| 5 | `/it/blog` listing | Same 60s-window issue as #4; its `select()` was already narrow (no fix needed there). | **Fixed** |
| 6 | `/tour` hub page | Minor: raw `<img>` bypassing `next/image` for 5 tour cards → no AVIF/WebP conversion, no responsive `sizes`, no automatic lazy-loading. Low impact (5 images, low-traffic page) but free to fix. | **Fixed** |
| 7 | The other ~1,100 SEO pages (`/city`, `/airport`, `/route`, `/tour`, `/border`, `/attraction-transfer/*`, `/beach-transfer/*`, hotel-transfer pages, etc.) | Already fully static via `generateStaticParams` from local data arrays, zero live data fetching. **Not a contributor** — confirmed, not assumed. | No action needed |
| 8 | `/api/contact` | Single API route, POST-only mutation (form submission), inherently never CDN-cached by design, low real-user frequency. **Not a meaningful contributor.** | No action needed |
| 9 | `/invoice/[token]` | Correctly dynamic (private, tokenized, security-sensitive lookup) — the one legitimate exception to "add generateStaticParams everywhere." Low traffic (one lookup per client, not crawled — noindex). | No action needed |

---

## Detailed findings (Task 13 format)

### 1. `src/app/sitemap.ts`

- **Line:** no `revalidate` export existed (fix added at line 15, right after `BASE_URL`).
- **Why it increases usage:** `sitemap()` is an `async` function that calls `supabase.from('blogs').select(...)` and does sequential `fs.readdirSync` recursion across the whole `src/app` tree twice (once for static routes, once for dynamic-segment slugs). Without a cache signal, Next.js has no basis to treat this as anything but dynamic — every request re-executes all of that and re-transfers the full response body.
- **Current behavior (before fix):** every hit to `/sitemap.xml` → full origin execution + full XML transfer, unconditionally.
- **Optimized behavior:** `export const revalidate = 3600;` — now cached for 1 hour; subsequent hits within that window are served from cache with zero origin execution.
- **Estimated reduction:** if the sitemap was being crawled even a few times an hour (realistic for a 1,100-page SEO site under active bot attention), this alone could cut sitemap-related Fast Origin Transfer by **95–99%** (hourly cap vs. unbounded per-request execution).

### 2. `src/app/(site)/blog/[slug]/page.tsx`

- **Lines:** added `generateStaticParams()` (after the `getBlog` cache function, ~line 24); changed `export const revalidate = 60` → `3600` (was line 60).
- **Why it increases usage:** no `generateStaticParams` meant none of the 185 English posts were pre-rendered at build time; each was generated fresh on first request per deployment/cache-eviction cycle, and the 60-second window meant frequent re-earning of that per-URL cache across 185 separate pages under crawl traffic.
- **Current behavior:** on-demand render per request (until cached), re-checked every 60 seconds thereafter, across 185 URLs.
- **Optimized behavior:** all 185 posts pre-rendered as static HTML at build time (verified in build output: `● /blog/[slug]` with 185 paths, was `ƒ` dynamic before); revalidate window widened to 1 hour. Content here is batch-seeded via scripts, not continuously hand-edited, so an hour of staleness has no practical downside.
- **Estimated reduction:** ISR reads/regenerations for this route: **~98–99%** (60s → 3600s window is a 60x reduction in check frequency alone, compounded by no longer needing a cold on-demand render for every not-yet-cached URL).

### 3. `src/app/it/blog/[slug]/page.tsx`

- **Lines:** added `generateStaticParams()` (~line 29); `revalidate` 60 → 3600 (was line 84).
- Same bug, same fix, same reasoning as #2, scoped to the 20 Italian posts. Verified in build output: `● /it/blog/[slug]` with 20 paths, was `ƒ` dynamic before.

### 4. `src/app/(site)/blog/page.tsx`

- **Lines:** `select('*')` → narrowed to `select('id, title, slug, excerpt, featured_image_url, category, published_at, read_time')` (was line 28); `revalidate` 60 → 3600 (was line 23).
- **Why it increases usage:** the listing card only ever renders those 7 fields (confirmed by reading the full render body), but was fetching every column for all 185 rows, including `content` — the single largest field per row.
- **Optimized behavior:** same visual output, ~5-8x less data fetched per regeneration, and regenerations now 60x less frequent.

### 5. `src/app/it/blog/page.tsx`

- **Line:** `revalidate` 60 → 3600 (was line 22). `select()` was already narrow — no change needed there.

### 6. `src/app/(site)/tour/page.tsx`

- **Lines:** added `import Image from 'next/image'` (line 5); replaced raw `<img>` with `next/image`'s `Image` (`fill` + `sizes`) at the tour-card image (was line 90).
- **Why it increases usage:** raw `<img>` skips Next's automatic AVIF/WebP conversion, responsive `srcset` generation, and default lazy-loading.
- **Optimized behavior:** identical visual output (same `object-cover`/hover-scale classes), now gets format conversion, responsive sizing (`100vw` mobile / `50vw` tablet / `33vw` desktop grid), and lazy-loads by default since no `priority` prop is set. Low-impact fix (5 images, low-traffic page) but zero-risk and free.

### 7. `package.json`

- **Lines:** removed `nodemailer` + `@types/nodemailer` (dependencies) and `axios` (devDependency).
- **Why:** confirmed via repo-wide grep — zero imports anywhere in `src/` or the root-level scripts. Pure dead weight.
- **Effect:** doesn't move the two metrics in question (unused deps are already excluded from serverless function bundles by Vercel's file tracing), but is explicit, zero-risk hygiene per the brief's bundle-optimization ask.

### Areas audited with **no changes needed** (confirmed clean, not assumed)

| Area | Finding |
|---|---|
| `force-dynamic`, `cookies()`, `headers()`, `draftMode()` | Zero occurrences anywhere in `src/` |
| `no-store` / `no-cache` | Zero occurrences anywhere in `src/` |
| `searchParams` | Zero occurrences in `src/app` |
| Middleware | No `middleware.ts` exists at all — nothing to optimize |
| `robots.ts` | Doesn't exist as a route — `public/robots.txt` is a plain static file, served directly by the CDN with zero server cost. Already optimal. |
| Root layouts (`(site)/layout.tsx`, `it/layout.tsx`) | Static metadata objects, no data fetching, no dynamic APIs. Already optimal. |
| API routes | Exactly one (`/api/contact`), a POST-only mutation that's inherently uncacheable by nature (form submission) and low-frequency. Nothing to cache here. |
| `generateStaticParams` coverage | Checked every `[slug]`/`[token]` page in the app (12 total): 11/12 already had it; the blog pair was the only gap (now fixed). The 12th (`/invoice/[token]`) correctly remains dynamic — it's a private, security-sensitive tokenized lookup, not an SEO page. |
| Raw `fetch()` calls | Exactly one in the whole codebase — a client-side POST from the contact form to `/api/contact`. Runs in the browser, not billed as origin transfer/ISR at all. |
| `next.config.ts` images config | Already serves AVIF → WebP → original, responsive `deviceSizes`/`imageSizes`, and a 1-year `minimumCacheTTL`. Already optimal, no changes made. |
| `attraction-transfer/*` and `beach-transfer/*` (51 pages) | Individually hardcoded static `page.tsx` files, zero data fetching. Already maximally static — better than ISR, since there's no revalidation cost at all. |
| Caching headers / ETag / conditional requests | Handled automatically by Next.js and Vercel's platform for all static/ISR content — no manual header implementation was missing or needed. |

---

## Estimated aggregate impact

| Metric | Primary driver fixed | Estimated reduction |
|---|---|---|
| Fast Origin Transfer | Sitemap now cached hourly instead of executing+transferring on every crawl hit; 205 blog pages now pre-built instead of rendered per-request | **70–90%** |
| ISR Reads | 205 blog pages converted from "cold on-demand generation, 60s window" to "pre-built, 3600s window" — a ~60x reduction in check/regeneration frequency alone | **90%+** |
| Function Invocations | Same 205 pages + sitemap no longer invoke the origin function on cache-hit requests | Large reduction, proportional to the above |
| Edge Requests | Unaffected — this metric tracks total requests reaching Vercel's edge network regardless of cache outcome, which this work doesn't change | No material change expected |

These are engineering estimates grounded in the actual page counts and window changes (verified via build output), not a guess — but only Vercel's own dashboard after a real deployment period can confirm the exact percentage against your specific traffic mix. Recommend checking the Usage tab again after ~48–72 hours on the new deploy.

---

## Verification performed

- `tsc --noEmit`: clean after every change.
- Full `next build` (fresh `npm install` after dependency removal): exit code 0, zero warnings/errors.
- Confirmed via build output diff: `/blog/[slug]` and `/it/blog/[slug]` changed from `ƒ` (Dynamic) to `● ` (SSG) with all 185 + 20 paths listed as pre-rendered, both showing the new `1h` revalidate window in the build summary.
- Confirmed `/sitemap.xml` now shows the `1h` revalidate window in the build summary (previously dynamic/uncached).
- Confirmed `/tour` and `/tour/[slug]` still render correctly, no regression.
- Confirmed zero remaining `nodemailer`/`axios` references anywhere before removing them from `package.json`.

**Not deployed** — as with all other work this session, these changes are local and uncommitted. Nothing will affect the live Vercel usage numbers until this is committed, pushed, and redeployed.
