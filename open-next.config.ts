import { defineCloudflareConfig } from '@opennextjs/cloudflare';
import staticAssetsIncrementalCache from '@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache';

/**
 * OpenNext configuration for running this Next.js app on Cloudflare Workers.
 *
 * ## Why the cache is backed by static assets
 *
 * `next build` produces about 1,890 prerendered cache entries for this site.
 * On Workers those entries have to live somewhere the Worker can read, and the
 * three candidates behave very differently on the Free plan:
 *
 *   Workers KV  — ruled out. The Free plan allows 1,000 writes per day, and
 *                 populating the cache writes one key per entry. The very
 *                 first deploy would stop partway through with the daily write
 *                 limit reached, leaving the site half-populated.
 *   R2          — works, and would give full on-demand revalidation. Not used
 *                 here because enabling R2 can require a payment method on the
 *                 account, and this deployment is meant to need none.
 *   Static      — what is used. The entries ship as ordinary static assets
 *   assets        under `cdn-cgi/_next_cache`, which only the Worker can read.
 *                 Static assets have no write limit and no per-request cost,
 *                 and the Free plan allows 20,000 files per version against
 *                 the ~2,050 this site produces.
 *
 * ## The one behavioural consequence
 *
 * This cache is read-only: `set()` is a no-op that logs. Pages are therefore
 * served exactly as `next build` rendered them, and a page with `revalidate`
 * set does not refresh between deploys. That affects /blog, /it/blog, their
 * [slug] pages and /sitemap.xml, all of which read the Supabase `blogs` table.
 *
 * What still works without a redeploy: a blog post published at a slug that
 * did not exist at build time. Those routes leave `dynamicParams` at its
 * default, so the Worker renders the new post on demand.
 *
 * What needs a redeploy: an edit to a post that was already prerendered, and
 * the new post appearing in the /blog listing and in sitemap.xml.
 *
 * Switching to full revalidation later is a two-line change — create an R2
 * bucket, bind it as NEXT_INC_CACHE_R2_BUCKET in wrangler.jsonc, and import
 * `overrides/incremental-cache/r2-incremental-cache` here instead.
 */
export default defineCloudflareConfig({
    incrementalCache: staticAssetsIncrementalCache,
});
