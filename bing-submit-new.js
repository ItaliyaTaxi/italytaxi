// Bing URL Submission API — submits pages that haven't been submitted before.
// Tracks cumulative submission history in bing-submitted-log.json (gitignored)
// so repeated runs only ever submit what's new since the last run, unlike the
// old bing-index.js which had one hardcoded, unmaintained list.
//
// Usage: node bing-submit-new.js [--dry-run]
//
// This file is gitignored — do NOT commit it (contains API key).

const fs = require('fs');
const path = require('path');

const API_KEY = 'f79e85d0d94847cdb66fca223884c8d8';
const SITE_URL = 'https://www.italytaxiservice.com';
const BING_API_BASE = 'https://ssl.bing.com/webmaster/api.svc/json';
const SITEMAP_URL = `${SITE_URL}/sitemap.xml`;
const LOG_FILE = path.join(__dirname, 'bing-submitted-log.json');

const DRY_RUN = process.argv.includes('--dry-run');

function loadLog() {
  if (!fs.existsSync(LOG_FILE)) return { submitted: {} };
  return JSON.parse(fs.readFileSync(LOG_FILE, 'utf8'));
}

function saveLog(log) {
  fs.writeFileSync(LOG_FILE, JSON.stringify(log, null, 2));
}

// Seed the log with URLs already known to have been submitted via the old
// bing-index.js script, so we don't re-submit those unnecessarily.
function seedFromOldScript(log) {
  const oldScriptPath = path.join(__dirname, 'bing-index.js');
  if (!fs.existsSync(oldScriptPath)) return;
  const content = fs.readFileSync(oldScriptPath, 'utf8');
  const re = /\$\{BASE_URL\}([^`]*)`/g;
  let m;
  const now = new Date().toISOString();
  while ((m = re.exec(content)) !== null) {
    const url = SITE_URL + m[1];
    if (!log.submitted[url]) log.submitted[url] = now + ' (backfilled from bing-index.js)';
  }
}

async function fetchSitemapUrls() {
  const res = await fetch(SITEMAP_URL);
  const xml = await res.text();
  const matches = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)];
  return matches.map((m) => m[1]);
}

async function getQuota() {
  const url = `${BING_API_BASE}/GetUrlSubmissionQuota?siteUrl=${encodeURIComponent(SITE_URL + '/')}&apikey=${API_KEY}`;
  const res = await fetch(url);
  const json = await res.json();
  return json.d;
}

async function submitBatch(urlBatch) {
  const body = { siteUrl: SITE_URL, urlList: urlBatch };
  const res = await fetch(`${BING_API_BASE}/SubmitUrlbatch?apikey=${API_KEY}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(body),
  });
  const text = await res.text();
  return { status: res.status, body: text };
}

// The 10 "Where to Meet Your Driver" airport-cluster posts just added this
// session — most time-sensitive to get indexed, so they go first regardless
// of quota pressure from the rest of the backlog.
const NEW_CLUSTER_SLUGS_EN = [
  'where-meet-driver-rome-fiumicino',
  'driver-pickup-rome-ciampino',
  'meet-driver-milan-malpensa',
  'meet-driver-milan-linate',
  'driver-pickup-venice-marco-polo',
  'meet-driver-florence-airport',
  'meet-driver-naples-airport',
  'driver-pickup-bologna-marconi',
  'meet-driver-catania-airport',
  'driver-pickup-palermo-airport',
];
const NEW_CLUSTER_SLUGS_IT = [];
const NEW_CLUSTER_SLUGS = new Set([...NEW_CLUSTER_SLUGS_EN, ...NEW_CLUSTER_SLUGS_IT]);

// Priority: new cluster posts, then Italian pages (previously never
// submitted at all), then everything else in sitemap order.
function prioritize(urls) {
  const score = (u) => {
    const slug = u.split('/').pop();
    if (NEW_CLUSTER_SLUGS.has(slug)) return 0;
    if (u.startsWith(`${SITE_URL}/it/`) || u === `${SITE_URL}/it`) return 1;
    if (u.includes('/blog/')) return 2;
    return 3;
  };
  return [...urls].sort((a, b) => score(a) - score(b));
}

async function main() {
  const log = loadLog();
  seedFromOldScript(log);

  console.log('Fetching current sitemap...');
  const sitemapUrls = await fetchSitemapUrls();
  console.log(`Sitemap has ${sitemapUrls.length} URLs.`);

  // sitemap.xml is statically prerendered at build/deploy time, so it doesn't
  // yet include blog posts seeded directly into Supabase since the last
  // deploy — union in the known new-cluster URLs explicitly so they still
  // get submitted even though they're missing from the current sitemap.
  const newClusterUrls = [
    ...NEW_CLUSTER_SLUGS_EN.map((slug) => `${SITE_URL}/blog/${slug}`),
    ...NEW_CLUSTER_SLUGS_IT.map((slug) => `${SITE_URL}/it/blog/${slug}`),
  ];
  const allUrls = [...new Set([...sitemapUrls, ...newClusterUrls])];
  console.log(`+ ${newClusterUrls.filter((u) => !sitemapUrls.includes(u)).length} new-cluster URLs missing from the (stale) sitemap, added explicitly.`);

  const notSubmitted = prioritize(allUrls.filter((u) => !log.submitted[u]));
  console.log(`${notSubmitted.length} URLs not yet submitted.`);

  if (notSubmitted.length === 0) {
    console.log('Nothing to do — everything in the sitemap has already been submitted.');
    return;
  }

  const quota = await getQuota();
  console.log(`Bing quota: ${quota.DailyQuota}/day, ${quota.MonthlyQuota}/month.`);

  const batch = notSubmitted.slice(0, quota.DailyQuota);
  console.log(`\nSubmitting ${batch.length} URLs (capped by daily quota)...`);
  if (DRY_RUN) {
    console.log('[dry run] would submit:');
    batch.forEach((u) => console.log('  ' + u));
    return;
  }

  // SubmitUrlbatch allows up to 500 per call; daily quota (100) is the binding limit here.
  const result = await submitBatch(batch);
  console.log(`Status: ${result.status}`);
  console.log(`Response: ${result.body}`);

  if (result.status !== 200) {
    console.error('ERROR: submission failed, not updating log.');
    process.exit(1);
  }

  const now = new Date().toISOString();
  batch.forEach((u) => { log.submitted[u] = now; });
  saveLog(log);

  const remaining = notSubmitted.length - batch.length;
  console.log(`\nDone. ${batch.length} URLs submitted and logged.`);
  if (remaining > 0) {
    console.log(`${remaining} URLs still remain — re-run this script tomorrow (daily quota resets) to continue.`);
  }
}

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
