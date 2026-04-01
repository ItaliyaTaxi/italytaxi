// Bing URL Submission API - submits 100 URLs for indexing
// This file is gitignored — do NOT commit it (contains API key)

const API_KEY = '855d7a6f206b4d3cb0f5120fa3e5bd86';
const BASE_URL = 'https://www.italytaxiservice.com';
const BING_ENDPOINT = 'https://ssl.bing.com/webmaster/api.svc/json/SubmitUrlbatch';

const urls = [
  // Static pages
  `${BASE_URL}/`,
  `${BASE_URL}/about-us`,
  `${BASE_URL}/contact`,
  `${BASE_URL}/book-now`,
  `${BASE_URL}/faq`,
  `${BASE_URL}/drivers`,
  `${BASE_URL}/coverage-areas`,
  `${BASE_URL}/blog`,
  `${BASE_URL}/privacy-policy`,
  `${BASE_URL}/terms-and-conditions`,
  `${BASE_URL}/airport`,
  `${BASE_URL}/city`,
  `${BASE_URL}/services`,
  `${BASE_URL}/border`,
  `${BASE_URL}/tour`,

  // Service pages
  `${BASE_URL}/services/airport-transfers`,
  `${BASE_URL}/services/city-to-city`,
  `${BASE_URL}/services/private-tours`,
  `${BASE_URL}/services/hotel-transfers`,
  `${BASE_URL}/services/business-taxi`,
  `${BASE_URL}/services/hourly-taxi`,
  `${BASE_URL}/services/wedding-transfers`,
  `${BASE_URL}/services/wedding-events`,
  `${BASE_URL}/services/cruise-port-transfers`,

  // Attraction transfers
  `${BASE_URL}/attraction-transfer/amalfi-coast-taxi-transfer`,
  `${BASE_URL}/attraction-transfer/arena-di-verona-taxi-transfer`,
  `${BASE_URL}/attraction-transfer/capri-island-taxi-transfer`,
  `${BASE_URL}/attraction-transfer/castel-dell-ovo-taxi-transfer`,
  `${BASE_URL}/attraction-transfer/cinque-terre-taxi-transfer`,
  `${BASE_URL}/attraction-transfer/colosseum-taxi-transfer`,
  `${BASE_URL}/attraction-transfer/costa-smeralda-taxi-transfer`,
  `${BASE_URL}/attraction-transfer/dolomites-taxi-transfer`,
  `${BASE_URL}/attraction-transfer/elba-island-taxi-transfer`,
  `${BASE_URL}/attraction-transfer/florence-cathedral-taxi-transfer`,
  `${BASE_URL}/attraction-transfer/lake-como-taxi-transfer`,
  `${BASE_URL}/attraction-transfer/lake-garda-taxi-transfer`,
  `${BASE_URL}/attraction-transfer/lake-maggiore-taxi-transfer`,
  `${BASE_URL}/attraction-transfer/leaning-tower-of-pisa-taxi-transfer`,
  `${BASE_URL}/attraction-transfer/mole-antonelliana-taxi-transfer`,
  `${BASE_URL}/attraction-transfer/mount-etna-taxi-transfer`,
  `${BASE_URL}/attraction-transfer/paestum-temples-taxi-transfer`,
  `${BASE_URL}/attraction-transfer/pantheon-taxi-transfer`,
  `${BASE_URL}/attraction-transfer/piazza-del-campo-taxi-transfer`,
  `${BASE_URL}/attraction-transfer/pompeii-taxi-transfer`,

  // Beach transfers
  `${BASE_URL}/beach-transfer/amalfi-coast-taxi`,
  `${BASE_URL}/beach-transfer/cala-luna-beach-transfer`,
  `${BASE_URL}/beach-transfer/camogli-taxi-transfer`,
  `${BASE_URL}/beach-transfer/capri-island-taxi`,
  `${BASE_URL}/beach-transfer/conero-beach-taxi`,
  `${BASE_URL}/beach-transfer/costa-smeralda-taxi`,
  `${BASE_URL}/beach-transfer/elba-beach-taxi`,
  `${BASE_URL}/beach-transfer/ischia-beach-taxi`,
  `${BASE_URL}/beach-transfer/lido-venezia-beach-taxi`,
  `${BASE_URL}/beach-transfer/otranto-beach-taxi`,
  `${BASE_URL}/beach-transfer/polignano-a-mare-beach-taxi`,
  `${BASE_URL}/beach-transfer/portofino-taxi-transfer`,
  `${BASE_URL}/beach-transfer/positano-beach-taxi`,
  `${BASE_URL}/beach-transfer/rimini-beach-taxi`,
  `${BASE_URL}/beach-transfer/san-vito-lo-capo-taxi`,
  `${BASE_URL}/beach-transfer/sardinia-beach-transfers`,
  `${BASE_URL}/beach-transfer/sirolo-beach-taxi`,
  `${BASE_URL}/beach-transfer/sperlonga-taxi-transfer`,
  `${BASE_URL}/beach-transfer/taormina-beach-transfer`,
  `${BASE_URL}/beach-transfer/tropea-beach-taxi`,

  // Border crossings
  `${BASE_URL}/border/italy-to-switzerland`,
  `${BASE_URL}/border/italy-to-france`,
  `${BASE_URL}/border/italy-to-austria`,
  `${BASE_URL}/border/italy-to-germany`,
  `${BASE_URL}/border/italy-to-slovenia`,
  `${BASE_URL}/border/italy-to-croatia`,

  // More attraction transfers
  `${BASE_URL}/attraction-transfer/rialto-bridge-taxi-transfer`,
  `${BASE_URL}/attraction-transfer/royal-palace-caserta-taxi-transfer`,
  `${BASE_URL}/attraction-transfer/san-gimignano-taxi-transfer`,
  `${BASE_URL}/attraction-transfer/sassi-matera-taxi-transfer`,
  `${BASE_URL}/attraction-transfer/st-marks-basilica-taxi-transfer`,
  `${BASE_URL}/attraction-transfer/trevi-fountain-taxi-transfer`,
  `${BASE_URL}/attraction-transfer/trulli-alberobello-taxi-transfer`,
  `${BASE_URL}/attraction-transfer/uffizi-gallery-taxi-transfer`,
  `${BASE_URL}/attraction-transfer/valley-of-the-temples-taxi-transfer`,
  `${BASE_URL}/attraction-transfer/vatican-museums-taxi-transfer`,

  // Airport pages
  `${BASE_URL}/airport/rome-fiumicino`,
  `${BASE_URL}/airport/rome-ciampino`,
  `${BASE_URL}/airport/milan-malpensa`,
  `${BASE_URL}/airport/milan-linate`,
  `${BASE_URL}/airport/venice-marco-polo`,
  `${BASE_URL}/airport/naples`,
  `${BASE_URL}/airport/florence`,
  `${BASE_URL}/airport/bologna`,
  `${BASE_URL}/airport/catania`,
  `${BASE_URL}/airport/palermo`,
].slice(0, 100);

async function submitBatch(urlBatch) {
  const body = {
    siteUrl: BASE_URL,
    urlList: urlBatch,
  };

  const response = await fetch(`${BING_ENDPOINT}?apikey=${API_KEY}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(body),
  });

  const text = await response.text();
  return { status: response.status, body: text };
}

async function main() {
  console.log(`Submitting ${urls.length} URLs to Bing...`);

  // Bing allows up to 500 URLs per request but let's batch in groups of 100
  const BATCH_SIZE = 100;
  for (let i = 0; i < urls.length; i += BATCH_SIZE) {
    const batch = urls.slice(i, i + BATCH_SIZE);
    console.log(`\nBatch ${Math.floor(i / BATCH_SIZE) + 1}: submitting ${batch.length} URLs...`);

    const result = await submitBatch(batch);
    console.log(`  Status: ${result.status}`);
    console.log(`  Response: ${result.body}`);

    if (result.status !== 200) {
      console.error('  ERROR: submission failed');
      process.exit(1);
    }
  }

  console.log('\nDone! All URLs submitted successfully.');
}

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
