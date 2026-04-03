const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');

const envFile = fs.readFileSync('.env', 'utf-8');
const env = Object.fromEntries(
  envFile.split('\n').filter(line => line && !line.startsWith('#') && line.includes('=')).map(line => {
    const [key, ...value] = line.split('=');
    return [key.trim(), value.join('=').trim()];
  })
);

const supabase = createClient(
  env.NEXT_PUBLIC_SUPABASE_URL,
  env.SUPABASE_SERVICE_ROLE_KEY
);

async function check() {
  const { data: countData, error: countError, count } = await supabase.from('blogs').select('*', { count: 'exact', head: true }).eq('status', 'published');
  if (countError) {
    console.error('Count failed', countError);
  } else {
    console.log('Total published blogs:', count);
  }
}
check();
