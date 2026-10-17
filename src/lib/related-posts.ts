/**
 * Topical "related posts" selection for the blog detail pages.
 *
 * Both blog routes previously ordered by `published_at` and took the first
 * three, which meant every article in a language showed the same three newest
 * posts — no topical signal at all, and no inbound links for older articles.
 *
 * Signals actually available on the `blogs` table (verified against the live
 * data before this was written):
 *   - `category`      populated on all 288 published rows, but fragmented:
 *                     "Travel Guide" vs "Travel Guides", "Airport Guides" vs
 *                     "Airport Guide". Normalised below rather than trusted raw.
 *   - `focus_keyword` populated on 100% of published rows — the strongest
 *                     per-article topic signal we have.
 *   - `title`         always present.
 *   - `tags`          non-empty on only 4 of 288 rows, so it is NOT used as a
 *                     relevance signal; it would silently do nothing.
 *
 * Shared tokens are weighted by inverse document frequency so that site-wide
 * words ("italy", "airport", "transfer") count for almost nothing while
 * distinctive ones ("fiumicino", "wheelchair", "civitavecchia") carry the match.
 */

export type RelatedCandidate = {
    id?: string | number;
    title: string;
    slug: string;
    excerpt?: string | null;
    featured_image_url?: string | null;
    category?: string | null;
    focus_keyword?: string | null;
    read_time?: string | null;
    published_at?: string | null;
};

/**
 * Words that cannot indicate what an article is about, in either site language.
 *
 * Three groups, all verified as noise against the live corpus:
 *  1. ordinary function words;
 *  2. site-wide domain terms — the whole site is Italian airport taxi
 *     transfers, so "airport", "transfer", "taxi" and "italy" appear
 *     everywhere and discriminate nothing;
 *  3. headline furniture from the shared title templates. These are the ones
 *     that actually broke the first attempt: "How to Get from X to Y Centre:
 *     Every Option Compared" exists for several routes, so Fiumicino→Rome
 *     scored 19 against Malpensa→Milan purely on
 *     "centre/every/option/compared/city" while sharing no subject at all.
 */
const STOPWORDS = new Set([
    // English
    'a', 'an', 'the', 'and', 'or', 'of', 'to', 'from', 'in', 'on', 'at', 'for', 'with', 'by', 'as',
    'is', 'are', 'was', 'were', 'be', 'been', 'do', 'does', 'did', 'can', 'could', 'should', 'would',
    'will', 'you', 'your', 'yours', 'we', 'our', 'ours', 'they', 'their', 'them', 'it', 'its', 'this',
    'that', 'these', 'those', 'what', 'how', 'why', 'when', 'which', 'where', 'who', 'whom', 'if',
    'then', 'than', 'but', 'not', 'no', 'nor', 'so', 'too', 'very', 'just', 'only', 'more', 'most',
    'less', 'least', 'much', 'many', 'any', 'all', 'both', 'each', 'few', 'other', 'some', 'such',
    'own', 'same', 'there', 'here', 'about', 'into', 'over', 'under', 'after', 'before', 'between',
    'during', 'while', 'because', 'guide', 'guides', 'complete', 'need', 'needs', 'know', 'get',
    'getting', 'everything', 'things', 'vs', 'versus',
    // Site-wide domain terms: present across the whole corpus, so useless as
    // a relevance signal even though some are not especially frequent.
    'italy', 'italian', 'italians', 'airport', 'airports', 'transfer', 'transfers', 'taxi', 'taxis',
    'travel', 'travels', 'traveling', 'travelling', 'traveler', 'travelers', 'traveller', 'travellers',
    'tourist', 'tourists', 'service', 'services', 'private', 'driver', 'drivers', 'ride', 'rides',
    'trasferimento', 'trasferimenti', 'aeroporto', 'aeroporti', 'italia', 'italiano', 'italiana',
    'viaggio', 'viaggi', 'viaggiare', 'autista', 'autisti', 'servizio', 'servizi', 'privato', 'privata',
    // Headline furniture from the shared title templates.
    'centre', 'center', 'centro', 'city', 'citta', 'every', 'option', 'options', 'opzioni', 'compared',
    'comparison', 'confronto', 'expect', 'aspettarsi', 'take', 'takes', 'best', 'better', 'worth',
    'visit', 'visiting', 'visitare', 'work', 'works', 'funziona', 'really', 'actually', 'davvero',
    'make', 'use', 'using', 'find', 'finding', 'trovare', 'arrive', 'arriving', 'arrivare', 'arrivo',
    'tips', 'advice', 'consigli', 'questions', 'domande', 'way', 'ways', 'time', 'times', 'day', 'days',
    'easily', 'should', 'guida', 'guide', 'come', 'cosa', 'quali', 'tutte', 'tutti',
    // Italian
    'il', 'lo', 'la', 'gli', 'le', 'un', 'uno', 'una', 'di', 'del', 'dello', 'della', 'dei', 'degli',
    'delle', 'dal', 'dallo', 'dalla', 'dai', 'dagli', 'dalle', 'nel', 'nello', 'nella', 'nei', 'negli',
    'nelle', 'con', 'col', 'su', 'sul', 'sullo', 'sulla', 'sui', 'sugli', 'sulle', 'per', 'tra', 'fra',
    'ed', 'od', 'ma', 'se', 'che', 'chi', 'cui', 'come', 'dove', 'quando', 'perche', 'non', 'si', 'ci',
    'vi', 'ne', 'piu', 'meno', 'molto', 'tutto', 'tutti', 'tutte', 'ogni', 'quale', 'quali', 'sono',
    'essere', 'avere', 'fare', 'cosa', 'quanto', 'guida', 'tutte', 'tutto',
]);

/** Fold accents and case so "perché"/"perche" and "Più"/"piu" tokenise alike. */
const fold = (s: string) =>
    s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

/** "Travel Guides" and "Travel Guide" are the same shelf; so are the
 *  "Airport Guide(s)" variants. Collapse case, spacing and a trailing plural. */
export function normalizeCategory(category?: string | null): string {
    if (!category) return '';
    return fold(category).replace(/[^a-z0-9]+/g, ' ').trim().replace(/s\b/g, '');
}

function tokenize(...parts: Array<string | null | undefined>): Set<string> {
    const out = new Set<string>();
    for (const p of parts) {
        if (!p) continue;
        for (const raw of fold(p).split(/[^a-z0-9]+/)) {
            if (raw.length < 3) continue;
            if (STOPWORDS.has(raw)) continue;
            if (/^\d+$/.test(raw)) continue; // bare years: "2026" is not a topic
            out.add(raw);
        }
    }
    return out;
}

/**
 * How distinctive a single shared token must be to carry a match on its own,
 * expressed as a share of the corpus. A token held by 10% of articles or fewer
 * qualifies alone; anything broader needs a second token or the same category.
 *
 * This is a share rather than a fixed score because IDF is scaled by corpus
 * size: the Italian pool (~57 published) spans a much narrower IDF range than
 * the English one (~231), so a hard-coded threshold tuned on English silently
 * rejected correct Italian matches — "fiumicino" links five Italian articles
 * but scored below a fixed 2.6.
 */
const QUALIFY_DF_SHARE = 0.1;
/** Same (normalised) category is corroborating evidence, never sufficient on
 *  its own — deliberately below MIN_SCORE. */
const CATEGORY_BONUS = 1.5;
/** A token carried by more than this share of the corpus describes the whole
 *  site rather than one article ("italy", "airport", "transfer") and is
 *  ignored outright. Without this, several such words sum past MIN_SCORE and
 *  produce confident-looking but unrelated matches. */
const MAX_DOC_SHARE = 0.15;

/**
 * Rank `pool` by topical closeness to `current` and return at most `limit`.
 *
 * The caller passes the whole same-language published pool from a single
 * query; scoring happens in memory, so there is one database round trip per
 * page regardless of how many candidates exist.
 *
 * Returns fewer than `limit` items — including none — rather than padding with
 * unrelated articles. If nothing clears the relevance bar, falls back to the
 * most recent posts sharing the current article's category, and if there is no
 * usable category, returns an empty array so the caller can render nothing.
 */
export function rankRelated(
    current: Pick<RelatedCandidate, 'slug' | 'title' | 'category' | 'focus_keyword'>,
    pool: RelatedCandidate[],
    limit = 3,
): RelatedCandidate[] {
    const candidates = (pool || []).filter((p) => p && p.slug && p.slug !== current.slug);
    if (candidates.length === 0) return [];

    const currentTokens = tokenize(current.focus_keyword, current.title);
    const currentCat = normalizeCategory(current.category);

    // Document frequency across the pool (plus the current article) so that
    // ubiquitous words are discounted automatically.
    const docTokens = candidates.map((c) => tokenize(c.focus_keyword, c.title));
    const df = new Map<string, number>();
    for (const toks of [...docTokens, currentTokens]) {
        for (const t of toks) df.set(t, (df.get(t) || 0) + 1);
    }
    const total = docTokens.length + 1;
    const idf = (t: string) => Math.log(total / (1 + (df.get(t) || 0)));
    // Small corpora (the Italian pool is ~57) need a floor, or the share-based
    // cutoff would discard tokens that are in fact distinctive.
    const dfCeiling = Math.max(3, Math.round(total * MAX_DOC_SHARE));
    const informative = (t: string) => (df.get(t) || 0) <= dfCeiling;
    const minScore = Math.log(total / (1 + Math.max(2, Math.round(total * QUALIFY_DF_SHARE))));

    const scored = candidates.map((c, i) => {
        let score = 0;
        for (const t of docTokens[i]) {
            if (currentTokens.has(t) && informative(t)) score += idf(t);
        }
        const sameCat = currentCat !== '' && normalizeCategory(c.category) === currentCat;
        if (sameCat) score += CATEGORY_BONUS;
        return { post: c, score, sameCat };
    });

    const recencyDesc = (a: { post: RelatedCandidate }, b: { post: RelatedCandidate }) =>
        String(b.post.published_at || '').localeCompare(String(a.post.published_at || ''));

    const qualified = scored
        .filter((s) => s.score >= minScore)
        .sort((a, b) => b.score - a.score || recencyDesc(a, b))
        .slice(0, limit);

    if (qualified.length > 0) return qualified.map((s) => s.post);

    // Nothing cleared the bar: same-category recency is still topical, and is
    // better than showing the three newest posts regardless of subject.
    return scored
        .filter((s) => s.sameCat)
        .sort(recencyDesc)
        .slice(0, limit)
        .map((s) => s.post);
}
