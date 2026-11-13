/** Switch the two live Florence Marathon posts to the Duomo photo.
 *
 *  Run AFTER this branch is merged and deployed:
 *    node update_florence_marathon_images.js
 *
 *  It refuses to change anything until all three images return 200 on the
 *  live site, so the posts never point at a missing image. It changes only
 *  featured_image_url and the `image` of the SportsEvent node in the post's
 *  JSON-LD; the rest of the content is left untouched. */
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const { enPost } = require('./seed_florence_marathon_2026');
const it = require('./seed_florence_marathon_2026_it');
const itPost = it.itPost || Object.values(it).find((v) => v && v.content);

const SITE = 'https://www.italytaxiservice.com';
const LD = /(<script type="application\/ld\+json">)([\s\S]*?)(<\/script>)/;
const eventImage = (post) => JSON.parse(post.content.match(LD)[2])['@graph'].find((x) => x['@type'] === 'SportsEvent').image;

async function run() {
  const images = eventImage(enPost);
  for (const url of images) {
    const res = await fetch(url, { method: 'HEAD' });
    if (res.status !== 200) { console.error(`Not live yet (${res.status}): ${url}\nMerge and deploy first, then run this again.`); process.exit(1); }
  }

  const env = Object.fromEntries(fs.readFileSync('.env', 'utf-8').split('\n').filter((l) => l && !l.startsWith('#') && l.includes('=')).map((l) => { const [k, ...v] = l.split('='); return [k.trim(), v.join('=').trim()]; }));
  const supabase = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);

  for (const post of [enPost, itPost]) {
    const { data: row, error } = await supabase.from('blogs').select('id,content').eq('slug', post.slug).single();
    if (error) { console.error(post.slug, error); process.exit(1); }
    const m = row.content.match(LD);
    const ld = JSON.parse(m[2]);
    ld['@graph'].find((x) => x['@type'] === 'SportsEvent').image = eventImage(post);
    const content = row.content.replace(LD, m[1] + JSON.stringify(ld) + m[3]);
    const { error: e } = await supabase.from('blogs').update({ content, featured_image_url: post.featured_image_url }).eq('id', row.id);
    if (e) { console.error(post.slug, e); process.exit(1); }
    console.log(`Updated ${post.slug}`);
  }
  console.log('Done. Pages refresh within an hour.');
}

if (require.main === module) run();
