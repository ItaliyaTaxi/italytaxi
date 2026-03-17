const fs = require('fs');

const envFile = fs.readFileSync('.env', 'utf-8');
const env = Object.fromEntries(
  envFile.split('\n').filter(line => line && !line.startsWith('#') && line.includes('=')).map(line => {
    const [key, ...value] = line.split('=');
    return [key.trim(), value.join('=').trim()];
  })
);

async function check() {
  const res = await fetch(`${env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/`, {
    headers: {
      apikey: env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    }
  });
  const data = await res.json();
  console.log(JSON.stringify(data.definitions, null, 2));
}

check().catch(console.error);
