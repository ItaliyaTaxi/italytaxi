/**
 * Corrects a factual error in the already-published Ecomondo 2026 article
 * (EN: /blog/ecomondo-2026-transfers, IT: /it/blog/transfer-ecomondo-2026).
 *
 * The published text quoted a "Shuttle Italy Airport" fare of ~€27 one-way /
 * €45 return. The official Ecomondo 2026 shuttle timetable PDF (published by
 * Ecomondo/IEG for this exact event, shuttleitalyairport.it) shows the real
 * fares: €5.00 online, €30.00 on board or at the airport desk — one-way
 * only, no return fare, and a fixed 4-departure-per-day timetable tied to
 * the exhibition dates. This script replaces the paragraph with corrected,
 * source-verified figures in both languages.
 *
 * Run:  node seed_fix_ecomondo_shuttle_fare.js
 */
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');

const env = Object.fromEntries(
  fs.readFileSync('.env', 'utf-8').split('\n')
    .filter(l => l && !l.startsWith('#') && l.includes('='))
    .map(l => { const [k, ...v] = l.split('='); return [k.trim(), v.join('=').trim()]; })
);
const supabase = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);

const EN_OLD = `A named third-party operator, Shuttle Italy Airport, also runs a direct coach between Bologna Airport and Rimini without the station change, at a published fare of around €27 one-way or €45 return at the time of writing — a genuine alternative worth knowing about even if you choose a private transfer instead.`;

const EN_NEW = `For Ecomondo 2026 specifically, Shuttle Italy Airport runs a dedicated shuttle bus between Bologna Airport and the Rimini Expo Centre's Riminifiera station stop, with four scheduled departures a day in each direction on exhibition days. Official fares (confirmed on the organiser's own website at the time of writing) are €5 one-way booked online in advance, or €30 if bought on board or at the airport arrivals desk — there's no discounted return fare, so each leg is booked separately. Because it runs to a fixed timetable tied to the show dates, it suits travellers whose schedule lines up with the published departures rather than anyone needing an on-demand pickup.`;

const IT_OLD = `Un operatore terzo, Shuttle Italy Airport, gestisce anche una navetta diretta tra l'aeroporto di Bologna e Rimini senza cambio alla stazione, con una tariffa pubblicata di circa 27 euro a tratta o 45 euro per l'andata e ritorno al momento della stesura — un'alternativa reale da conoscere anche se poi si sceglie un transfer privato.`;

const IT_NEW = `Per Ecomondo 2026 nello specifico, Shuttle Italy Airport gestisce una navetta dedicata tra l'aeroporto di Bologna e la fermata Riminifiera della Fiera di Rimini, con quattro corse giornaliere in ciascuna direzione nei giorni di manifestazione. Le tariffe ufficiali (confermate sul sito dell'organizzatore al momento della stesura) sono di 5 euro a tratta se acquistate online in anticipo, oppure 30 euro se acquistate a bordo o al desk arrivi in aeroporto — non è previsto uno sconto per l'andata e ritorno, quindi ogni tratta si acquista separatamente. Trattandosi di un orario fisso legato ai giorni di fiera, è adatto a chi ha orari compatibili con le partenze programmate, non a chi ha bisogno di un ritiro su richiesta.`;

async function run() {
  const { data: enRow, error: enErr } = await supabase
    .from('blogs').select('id, content').eq('slug', 'ecomondo-2026-transfers').single();
  if (enErr) throw enErr;
  if (!enRow.content.includes(EN_OLD)) throw new Error('EN_OLD not found verbatim in EN content — aborting, no changes made');
  const enNewContent = enRow.content.replace(EN_OLD, EN_NEW);
  const { error: enUpdateErr } = await supabase
    .from('blogs').update({ content: enNewContent, updated_at: new Date().toISOString() }).eq('id', enRow.id);
  if (enUpdateErr) throw enUpdateErr;
  console.log('EN updated. Old length:', enRow.content.length, 'New length:', enNewContent.length);

  const { data: itRow, error: itErr } = await supabase
    .from('blogs').select('id, content').eq('slug', 'transfer-ecomondo-2026').single();
  if (itErr) throw itErr;
  if (!itRow.content.includes(IT_OLD)) throw new Error('IT_OLD not found verbatim in IT content — aborting, no changes made');
  const itNewContent = itRow.content.replace(IT_OLD, IT_NEW);
  const { error: itUpdateErr } = await supabase
    .from('blogs').update({ content: itNewContent, updated_at: new Date().toISOString() }).eq('id', itRow.id);
  if (itUpdateErr) throw itUpdateErr;
  console.log('IT updated. Old length:', itRow.content.length, 'New length:', itNewContent.length);
}

run().catch((e) => { console.error('FAILED:', e.message); process.exit(1); });
