const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const env = Object.fromEntries(fs.readFileSync('.env','utf-8').split('\n').filter(l=>l&&!l.startsWith('#')&&l.includes('=')).map(l=>{const[k,...v]=l.split('=');return[k.trim(),v.join('=').trim()];}));
const supabase = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);
(async()=>{
  const {data,error}=await supabase.from('blogs').select('slug,title,status').order('created_at',{ascending:true});
  if(error){console.error(error.message);return;}
  console.log(`TOTAL BLOGS: ${data.length}\n`);
  data.forEach((b,i)=>console.log(`${String(i+1).padStart(2)}. [${b.status}] ${b.slug}`));
})();
