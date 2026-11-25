import { defineCloudflareConfig } from '@opennextjs/cloudflare';
import r2IncrementalCache from '@opennextjs/cloudflare/overrides/incremental-cache/r2-incremental-cache';

/**
 * OpenNext configuration for running this Next.js app on Cloudflare Workers.
 *
 * The incremental cache is what makes ISR work. Without it, the 1,300-odd
 * prerendered pages would still be served from static assets, but a page with
 * `revalidate` set — the Supabase-backed blog, for example — could never
 * refresh without a full redeploy. R2 is Cloudflare's own recommendation here;
 * Workers KV is explicitly discouraged because it is eventually consistent,
 * which would let a stale page win a race against a fresh one.
 *
 * Requires an R2 bucket bound as NEXT_INC_CACHE_R2_BUCKET in wrangler.jsonc.
 * Create it once with:
 *
 *   npx wrangler r2 bucket create italytaxi-next-cache
 *
 * If R2 is not enabled on the account, delete the `incrementalCache` line and
 * the binding in wrangler.jsonc: the site still builds and serves, it simply
 * stops revalidating pages between deployments.
 */
export default defineCloudflareConfig({
    incrementalCache: r2IncrementalCache,
});
