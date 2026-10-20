import { timingSafeEqual } from 'node:crypto';
import { NextRequest, NextResponse } from 'next/server';
import { createLead } from '@/lib/leads/createLead';
import { leadBrands, sendLeadNotifications } from '@/lib/leads/notify';
import { leadSourceSites, type LeadInput, type LeadSourceSite } from '@/lib/leads/types';

/**
 * Server-to-server lead intake.
 *
 * This is the only way another website can put a lead into this CRM. It is
 * reached from the other site's *server*, never from a visitor's browser, so
 * there is no CORS header here on purpose: a browser cannot use this endpoint
 * and a bearer token is not something to ship to one.
 *
 * What it does, in order: authenticate, rate-limit, parse, normalise and
 * validate, create the lead through the same `createLead()` the on-site form
 * uses, then send the same two emails through the same provider. Success is
 * returned only after the row is durably in the database — the email step
 * cannot turn a saved lead into a failure, and a failed save is never
 * reported as a success.
 *
 * It can only insert. It holds no read, update or delete path, so a leaked
 * token could create junk leads but could not read a customer list, change a
 * status, or touch anything else in the CRM.
 */

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/** Requests per window, per client address. Overridable per deployment. */
const RATE_LIMIT = Number(process.env.LEAD_INTAKE_RATE_LIMIT) || 20;
const RATE_WINDOW_MS = Number(process.env.LEAD_INTAKE_RATE_WINDOW_MS) || 10 * 60 * 1000;

/**
 * In-process rate limiting. Good enough to blunt a single abusive client and
 * honest about its limit: on a platform that runs several instances, each
 * keeps its own counter, so this is a speed bump rather than a guarantee. A
 * shared store (Upstash, Redis, or a Postgres table) would make it exact, and
 * is noted in the deployment documentation rather than added unasked.
 */
const hits = new Map<string, { count: number; resetAt: number }>();

function rateLimited(key: string): boolean {
    const now = Date.now();
    const entry = hits.get(key);

    if (!entry || entry.resetAt < now) {
        hits.set(key, { count: 1, resetAt: now + RATE_WINDOW_MS });
        if (hits.size > 5000) {
            for (const [k, v] of hits) if (v.resetAt < now) hits.delete(k);
        }
        return false;
    }

    entry.count += 1;
    return entry.count > RATE_LIMIT;
}

function authorised(req: NextRequest): boolean {
    const expected = process.env.LEAD_INTAKE_TOKEN;
    if (!expected) return false;

    const header = req.headers.get('authorization') || '';
    const match = /^Bearer\s+(.+)$/i.exec(header.trim());
    if (!match) return false;

    const provided = Buffer.from(match[1]);
    const wanted = Buffer.from(expected);
    if (provided.length !== wanted.length) return false;
    return timingSafeEqual(provided, wanted);
}

const str = (value: unknown, max = 500): string =>
    typeof value === 'string' ? value.trim().slice(0, max) : '';

const count = (value: unknown): number | undefined => {
    const n = Number(value);
    return Number.isInteger(n) && n >= 0 && n <= 99 ? n : undefined;
};

/** "YYYY-MM-DDTHH:MM", the format the existing rows already use. */
const isDatetime = (value: string) => /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}/.test(value);

type Leg = { pickup?: unknown; dropoff?: unknown; datetime?: unknown; travelReference?: unknown };

/**
 * Map an incoming payload onto the canonical lead.
 *
 * The mapping lives here rather than on the sending site, so a site that
 * posts leads never has to know this CRM's column names, and a change to the
 * schema is a change in one project.
 */
function toLeadInput(body: Record<string, unknown>): { lead?: LeadInput; error?: string } {
    const sourceSite = str(body.source) as LeadSourceSite;
    if (!leadSourceSites.includes(sourceSite)) {
        return { error: 'Unknown or missing source site.' };
    }

    const contact = (body.contact ?? {}) as Record<string, unknown>;
    const party = (body.party ?? {}) as Record<string, unknown>;
    const luggage = (body.luggage ?? {}) as Record<string, unknown>;
    const outbound = (body.outbound ?? {}) as Leg;
    const inbound = (body.inbound ?? null) as Leg | null;

    const fullName = str(contact.name, 200);
    const email = str(contact.email, 200);
    const phone = str(contact.phone, 60);
    const pickup = str(outbound.pickup, 300);
    const dropoff = str(outbound.dropoff, 300);
    const datetime = str(outbound.datetime, 40);

    if (!fullName) return { error: 'A name is required.' };
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) return { error: 'A valid email is required.' };
    if (!pickup) return { error: 'A pickup location is required.' };
    if (!dropoff) return { error: 'A drop-off location is required.' };
    if (!isDatetime(datetime)) return { error: 'A valid trip date and time is required.' };

    const adults = count(party.adults) ?? 1;
    const children = count(party.children) ?? 0;
    const hold = count(luggage.hold);
    const cabin = count(luggage.cabin);

    const luggageSummary =
        hold === undefined && cabin === undefined
            ? undefined
            : `${hold ?? 0} hold, ${cabin ?? 0} cabin`;

    const hasReturn = !!inbound && isDatetime(str(inbound.datetime, 40));

    return {
        lead: {
            sourceSite,
            sourceForm: str(body.sourceForm, 120) || 'Website Form',
            fullName,
            email,
            phone,
            pickupLocation: pickup,
            dropoffLocation: dropoff,
            bookingDatetime: datetime,
            flightNumber: str(outbound.travelReference, 120) || undefined,
            hasReturnTrip: hasReturn,
            ...(hasReturn && inbound
                ? {
                      returnPickupLocation: str(inbound.pickup, 300),
                      returnDropoffLocation: str(inbound.dropoff, 300),
                      returnDatetime: str(inbound.datetime, 40),
                      returnFlightNumber: str(inbound.travelReference, 120) || undefined,
                  }
                : {}),
            passengers: Math.max(1, adults + children),
            adults,
            children,
            childAges: str(party.childAges, 200) || undefined,
            luggage: luggageSummary,
            luggageHold: hold,
            luggageCabin: cabin,
            serviceType: str(body.service, 60) || undefined,
            customerMessage: str(body.notes, 2000) || undefined,
            locale: str(body.locale, 8) || undefined,
            idempotencyKey: str(body.idempotencyKey, 120) || undefined,
        },
    };
}

export async function POST(req: NextRequest) {
    if (!authorised(req)) {
        // Deliberately uninformative: an unauthenticated caller learns nothing
        // about whether the token exists, is wrong, or is merely unset here.
        return NextResponse.json({ ok: false, error: 'Unauthorized' }, { status: 401 });
    }

    const client =
        req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
    if (rateLimited(client)) {
        return NextResponse.json({ ok: false, error: 'Too many requests' }, { status: 429 });
    }

    let body: Record<string, unknown>;
    try {
        body = (await req.json()) as Record<string, unknown>;
    } catch {
        return NextResponse.json({ ok: false, error: 'Invalid JSON body' }, { status: 400 });
    }

    const { lead, error } = toLeadInput(body);
    if (!lead) {
        return NextResponse.json({ ok: false, error }, { status: 422 });
    }

    let created;
    try {
        created = await createLead(lead);
    } catch (e) {
        // Log the failure, not the customer's details.
        console.error('[LEADS] save failed for', lead.sourceSite, e instanceof Error ? e.message : e);
        return NextResponse.json({ ok: false, error: 'Could not save the lead' }, { status: 502 });
    }

    // The lead is durably saved from here on. Emails are best-effort: a retry
    // of a deduplicated request must not send the notifications a second time.
    let notified = { adminSent: false, customerSent: false };
    if (!created.deduplicated) {
        notified = await sendLeadNotifications(lead, leadBrands[lead.sourceSite]);
    }

    return NextResponse.json({
        ok: true,
        id: created.id,
        reference: created.id ? String(created.id).slice(0, 8).toUpperCase() : null,
        deduplicated: created.deduplicated,
        fullSchema: created.fullSchema,
        notified,
    });
}

/** Anything other than POST is not part of this endpoint's contract. */
export async function GET() {
    return NextResponse.json({ ok: false, error: 'Method not allowed' }, { status: 405 });
}
