/**
 * Submission checks shared by the public booking form and the contact form.
 *
 * These run on the server, after Turnstile and before anything is written or
 * emailed. They exist because the observed spam satisfies the browser's own
 * `required` / `type="email"` rules perfectly well — those are hints for
 * humans, not a gate, and a direct POST never sees them at all.
 *
 * Nothing here tries to be clever about who a visitor is. Each rule targets a
 * property of the submission that is either impossible for a genuine booking
 * (a pickup time that has already passed in Italy) or a precise match for the
 * observed pattern (a customer name identical to the page it was sent from).
 */

/**
 * Honeypot field name. Chosen to look plausible to a form-filling bot while
 * meaning nothing to us. A real visitor never sees or fills it.
 */
export const HONEYPOT_FIELD = 'company_website';

/**
 * How far in the past a pickup time may be before it is rejected.
 *
 * Not zero on purpose: a visitor can legitimately pick 14:00, spend twenty
 * minutes filling the rest of the form, and submit at 14:05. Rejecting that
 * would be a bug, not protection. The observed spam used times hours past.
 */
const PAST_GRACE_MINUTES = 45;

/** Beyond this, a date is a typo or a bot, not a booking. */
const MAX_FUTURE_DAYS = 730;

export type Rejection = { field: string; reason: string };

export interface SubmissionCheck {
    /** Hard failures. Non-empty means: do not save, do not email. */
    rejections: Rejection[];
    /**
     * Soft signals. These never reject on their own; they are summarised onto
     * the lead so a human can see why it looked unusual.
     */
    flags: string[];
}

/* ────────────────────────────── honeypot ────────────────────────────── */

/** True when the hidden field was filled, i.e. the sender is automated. */
export function honeypotTripped(value: unknown): boolean {
    return typeof value === 'string' && value.trim() !== '';
}

/* ─────────────────────── Europe/Rome date & time ─────────────────────── */

/** Current wall-clock date and minute-of-day in Italy, without a dependency. */
function romeNow(): { ymd: string; minutes: number } {
    const parts = new Intl.DateTimeFormat('en-CA', {
        timeZone: 'Europe/Rome',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    }).formatToParts(new Date());

    const get = (type: string) => parts.find((p) => p.type === type)?.value ?? '';
    const hour = Number(get('hour')) % 24; // en-CA can render midnight as 24
    return {
        ymd: `${get('year')}-${get('month')}-${get('day')}`,
        minutes: hour * 60 + Number(get('minute')),
    };
}

/**
 * Validate a `YYYY-MM-DDTHH:MM` value as a pickup time.
 *
 * The value is the wall-clock time the visitor chose, and the journey happens
 * in Italy, so it is compared against Italian wall-clock time. No UTC
 * conversion is involved in either direction, which is what makes this correct
 * across daylight-saving changes.
 */
export function checkBookingDatetime(raw: string, field = 'datetime'): Rejection[] {
    const value = (raw || '').trim();

    const m = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})/.exec(value);
    if (!m) return [{ field, reason: 'Please provide the trip date and time.' }];

    const [, y, mo, d, hh, mm] = m;
    const year = Number(y);
    const month = Number(mo);
    const day = Number(d);
    const hour = Number(hh);
    const minute = Number(mm);

    if (month < 1 || month > 12 || day < 1 || day > 31 || hour > 23 || minute > 59) {
        return [{ field, reason: 'That date and time is not valid.' }];
    }
    // Reject impossible calendar dates (31 February and similar).
    const probe = new Date(Date.UTC(year, month - 1, day));
    if (probe.getUTCMonth() !== month - 1 || probe.getUTCDate() !== day) {
        return [{ field, reason: 'That date does not exist.' }];
    }

    const now = romeNow();
    const ymd = `${y}-${mo}-${d}`;

    if (ymd < now.ymd) {
        return [{ field, reason: 'The pickup date has already passed (Italian time).' }];
    }
    if (ymd === now.ymd && hour * 60 + minute < now.minutes - PAST_GRACE_MINUTES) {
        return [{ field, reason: 'The pickup time has already passed today (Italian time).' }];
    }

    const daysAhead = (Date.UTC(year, month - 1, day) - Date.parse(`${now.ymd}T00:00:00Z`)) / 86_400_000;
    if (daysAhead > MAX_FUTURE_DAYS) {
        return [{ field, reason: 'That date is too far in the future.' }];
    }

    return [];
}

/* ──────────────────────────── field validation ──────────────────────────── */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/**
 * Phone sanity only. Deliberately permissive about country: a +1 number is a
 * perfectly ordinary American or Canadian customer booking a transfer in
 * Italy, so the country code is never a reason to reject. All this rejects is
 * something that is not a phone number at all.
 */
function phoneLooksReal(phone: string): boolean {
    const digits = phone.replace(/\D/g, '');
    return digits.length >= 7 && digits.length <= 15;
}

/** Collapse case, accents and punctuation so two labels can be compared. */
function normalise(value: string): string {
    return value
        .normalize('NFKD')
        .replace(/[̀-ͯ]/g, '')
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, ' ')
        .trim();
}

/**
 * The signature of the current spam: the "customer name" is lifted from the
 * page or the destination — "Venice To Dolomites Day Trip", "Lake Como" — so
 * it matches the form's own source label or one of the journey's locations.
 * A genuine customer is not called the name of the page they are on.
 */
function nameLooksDerived(name: string, sourceForm: string, pickup: string, dropoff: string): boolean {
    const n = normalise(name);
    if (n.length < 4) return false;

    const candidates = [sourceForm, pickup, dropoff].map(normalise).filter((c) => c.length >= 4);
    for (const c of candidates) {
        if (n === c) return true;
        // Containment is only tested against multi-word labels — page titles
        // and form names like "Venice To Dolomites Day Trip". A bare place
        // name must never reach this test: "Verona", "Milano", "Napoli" and
        // "Torino" are all six letters and all common Italian surnames, so
        // matching them by containment would refuse real customers. Single
        // words are handled by the equality check above and the bare-word rule
        // below instead.
        if (c.includes(' ') && c.length >= 12 && n.length >= 8 && (c.includes(n) || n.includes(c))) {
            return true;
        }
    }

    // The signature of the live attack: pickup and drop-off are both set to a
    // single bare word that is the passenger's own forename.
    //
    // All three conditions are required, and the narrowness is deliberate.
    // Italian surnames are very often place names — Verona, Milano, Romano —
    // so "name token appears in a location" on its own would refuse real
    // customers. Demanding that both ends are identical, bare and equal to the
    // passenger's own name leaves no plausible genuine booking: a real
    // round trip within a city is given as an address or a station, not as the
    // traveller's first name.
    const pu = normalise(pickup);
    const doff = normalise(dropoff);
    const bareWord = (v: string) => v.length >= 4 && !v.includes(' ') && !/\d/.test(v);
    if (pu === doff && bareWord(pu)) {
        const nameTokens = new Set(n.split(' ').filter((t) => t.length >= 4));
        if (nameTokens.has(pu)) return true;
    }

    // "Day Trip", "Taxi Transfer", "Airport Transfer" as a person's name.
    return /\b(day trip|transfer|taxi|airport|shuttle|booking|quote)\b/.test(n);
}

export interface BookingFields {
    name: string;
    email: string;
    phone: string;
    pickup: string;
    dropoff: string;
    datetime: string;
    sourceForm: string;
}

/**
 * Validate the booking fields and collect soft signals.
 *
 * Identical pickup and drop-off is a *flag*, never a rejection: a round-trip
 * enquiry, an hourly hire, or a wedding car genuinely starts and ends at the
 * same address. It only contributes to the suspicion score below.
 */
export function checkBooking(fields: BookingFields): SubmissionCheck {
    const rejections: Rejection[] = [];
    const flags: string[] = [];

    const name = (fields.name || '').trim();
    const email = (fields.email || '').trim();
    const phone = (fields.phone || '').trim();
    const pickup = (fields.pickup || '').trim();
    const dropoff = (fields.dropoff || '').trim();

    if (name.length < 2) rejections.push({ field: 'name', reason: 'Please provide your name.' });
    if (name.length > 120) rejections.push({ field: 'name', reason: 'That name is too long.' });
    if (!EMAIL_RE.test(email)) rejections.push({ field: 'email', reason: 'Please provide a valid email address.' });
    if (email.length > 200) rejections.push({ field: 'email', reason: 'That email address is too long.' });
    if (!phoneLooksReal(phone)) rejections.push({ field: 'phone', reason: 'Please provide a valid phone number.' });
    if (!pickup) rejections.push({ field: 'pickup', reason: 'Please provide a pickup location.' });
    if (!dropoff) rejections.push({ field: 'dropoff', reason: 'Please provide a drop-off location.' });
    if (pickup.length > 300 || dropoff.length > 300) {
        rejections.push({ field: 'pickup', reason: 'That location is too long.' });
    }

    rejections.push(...checkBookingDatetime(fields.datetime));

    // Links in a name or a location are never a booking detail.
    if (/https?:\/\/|\bwww\.|\[url=|<a\s/i.test(`${name} ${pickup} ${dropoff}`)) {
        rejections.push({ field: 'name', reason: 'Links are not accepted in these fields.' });
    }

    if (nameLooksDerived(name, fields.sourceForm, pickup, dropoff)) {
        rejections.push({ field: 'name', reason: 'Please provide the passenger’s name.' });
    }

    if (pickup && dropoff && normalise(pickup) === normalise(dropoff)) {
        flags.push('pickup and drop-off are identical');
    }

    return { rejections, flags };
}

/* ───────────────────────── duplicate detection ───────────────────────── */

/** Minutes within which an identical enquiry is treated as a duplicate. */
const DUPLICATE_WINDOW_MINUTES = 30;

interface MinimalSupabase {
    from: (table: string) => {
        select: (columns: string) => {
            gte: (column: string, value: string) => {
                or: (filter: string) => {
                    limit: (n: number) => Promise<{ data: unknown[] | null; error: unknown }>;
                };
            };
        };
    };
}

/**
 * True when the same enquiry already arrived in the last half hour.
 *
 * Reads the existing `bookings` table — no new table and no schema change. The
 * match is deliberately narrow: same contact *and* same journey *and* same
 * requested time. A customer who sends a second, different enquiry is not
 * blocked, and neither is a second passenger from the same household.
 */
export async function isDuplicateBooking(
    supabase: unknown,
    fields: Pick<BookingFields, 'email' | 'phone' | 'pickup' | 'dropoff' | 'datetime'>,
): Promise<boolean> {
    const since = new Date(Date.now() - DUPLICATE_WINDOW_MINUTES * 60_000).toISOString();
    const email = (fields.email || '').trim().toLowerCase();
    const phone = (fields.phone || '').trim();

    const quoted = (v: string) => `"${v.replace(/"/g, '')}"`;
    const identity = [
        email ? `email.eq.${quoted(email)}` : null,
        phone ? `phone.eq.${quoted(phone)}` : null,
    ].filter(Boolean).join(',');
    if (!identity) return false;

    try {
        const { data, error } = await (supabase as MinimalSupabase)
            .from('bookings')
            .select('id, email, phone, pickup_location, dropoff_location, booking_datetime, created_at')
            .gte('created_at', since)
            .or(identity)
            .limit(25);

        if (error || !data) return false;

        return data.some((row) => {
            const r = row as Record<string, unknown>;
            return (
                normalise(String(r.pickup_location ?? '')) === normalise(fields.pickup) &&
                normalise(String(r.dropoff_location ?? '')) === normalise(fields.dropoff) &&
                String(r.booking_datetime ?? '').slice(0, 16) === fields.datetime.slice(0, 16)
            );
        });
    } catch {
        // A duplicate check must never be the reason a genuine lead is lost.
        return false;
    }
}

/* ──────────────────────────── contact form ──────────────────────────── */

export interface ContactFields {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
}

export function checkContact(fields: ContactFields): SubmissionCheck {
    const rejections: Rejection[] = [];
    const flags: string[] = [];

    const name = (fields.name || '').trim();
    const email = (fields.email || '').trim();
    const subject = (fields.subject || '').trim();
    const message = (fields.message || '').trim();
    const phone = (fields.phone || '').trim();

    if (name.length < 2 || name.length > 120) rejections.push({ field: 'name', reason: 'Please provide your name.' });
    if (!EMAIL_RE.test(email) || email.length > 200) {
        rejections.push({ field: 'email', reason: 'Please provide a valid email address.' });
    }
    if (subject.length < 2 || subject.length > 200) {
        rejections.push({ field: 'subject', reason: 'Please provide a subject.' });
    }
    if (message.length < 10) rejections.push({ field: 'message', reason: 'Please include a little more detail.' });
    if (message.length > 5000) rejections.push({ field: 'message', reason: 'That message is too long.' });
    if (phone && !phoneLooksReal(phone)) {
        rejections.push({ field: 'phone', reason: 'Please provide a valid phone number.' });
    }

    const linkCount = (message.match(/https?:\/\/|\bwww\./gi) || []).length;
    if (linkCount >= 3) rejections.push({ field: 'message', reason: 'Too many links.' });
    else if (linkCount > 0) flags.push(`${linkCount} link(s) in message`);

    if (/\[url=|\[link=|<a\s+href/i.test(message)) {
        rejections.push({ field: 'message', reason: 'Markup is not accepted in the message.' });
    }

    return { rejections, flags };
}
