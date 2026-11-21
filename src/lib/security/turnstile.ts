/**
 * Server-side Cloudflare Turnstile verification.
 *
 * Every public submission path calls `verifyTurnstile()` before anything is
 * written to the database or emailed. The browser widget alone proves nothing:
 * a bot can post the form fields directly to a Server Action or an API route
 * without ever loading our JavaScript, which is how the current spam arrives.
 * Only the siteverify response below decides whether a submission continues.
 *
 * Deliberately fails closed. If TURNSTILE_SECRET_KEY is not set, verification
 * returns false rather than silently passing — a missing key must never become
 * an open door. That means the key has to exist in the deployment environment
 * before this ships, or every submission will be rejected.
 */

const SITEVERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

/** The standard field name the Turnstile widget writes into the form. */
export const TURNSTILE_FIELD = 'cf-turnstile-response';

/**
 * Hostnames Cloudflare may legitimately report for our own widget. Checking
 * this stops a token minted on someone else's site from being replayed here.
 *
 * The development hosts are added only outside production. Cloudflare's own
 * setup guidance is explicit that a production backend must never accept
 * localhost in its hostname allowlist, because doing so re-opens the replay
 * hole the check exists to close.
 */
const ALLOWED_HOSTNAMES = new Set(
    process.env.NODE_ENV === 'production'
        ? ['italytaxiservice.com', 'www.italytaxiservice.com']
        : ['italytaxiservice.com', 'www.italytaxiservice.com', 'localhost', '127.0.0.1'],
);

/**
 * Vercel preview deployments build with NODE_ENV=production but are served
 * from a *.vercel.app hostname, so the strict list above would reject a
 * perfectly genuine submission made while testing a preview.
 *
 * This allowance is gated on VERCEL_ENV, which Vercel sets to 'preview' only
 * for preview deployments and to 'production' for the production one. On
 * production the branch is therefore never taken and the hostname check stays
 * exactly as strict as before — this cannot widen production.
 */
function hostnameAllowed(hostname: string): boolean {
    if (ALLOWED_HOSTNAMES.has(hostname)) return true;
    if (process.env.VERCEL_ENV === 'preview' && hostname.endsWith('.vercel.app')) return true;
    return false;
}

export type TurnstileResult = { ok: true } | { ok: false; reason: string };

interface SiteverifyResponse {
    success?: boolean;
    hostname?: string;
    action?: string;
    challenge_ts?: string;
    'error-codes'?: string[];
}

/**
 * The `data-action` value each protected surface renders its widget with.
 * Cloudflare echoes it back from siteverify, so checking it means a token
 * minted on the contact form cannot be spent on the booking form.
 */
export const TURNSTILE_ACTIONS = {
    booking: 'booking-quote',
    contact: 'contact-message',
} as const;

export type TurnstileAction = (typeof TURNSTILE_ACTIONS)[keyof typeof TURNSTILE_ACTIONS];

/**
 * Human-readable mapping for the error codes we act on. `timeout-or-duplicate`
 * is Cloudflare's single code for both an expired token and one that has
 * already been redeemed, which covers the "expired or reused" requirement.
 */
function describe(codes: string[] | undefined): string {
    if (!codes || codes.length === 0) return 'verification failed';
    if (codes.includes('timeout-or-duplicate')) return 'token expired or already used';
    if (codes.includes('invalid-input-response')) return 'token invalid';
    if (codes.includes('missing-input-response')) return 'token missing';
    if (codes.includes('invalid-input-secret') || codes.includes('missing-input-secret')) {
        return 'server verification key is not configured correctly';
    }
    return codes.join(', ');
}

export async function verifyTurnstile(
    token: unknown,
    remoteIp?: string | null,
    expectedAction?: TurnstileAction,
): Promise<TurnstileResult> {
    const secret = process.env.TURNSTILE_SECRET_KEY;
    if (!secret) {
        // Fail closed, and say so loudly in the logs so a misconfigured
        // deployment is obvious rather than quietly unprotected.
        console.error('[TURNSTILE] TURNSTILE_SECRET_KEY is not set — rejecting submission.');
        return { ok: false, reason: 'verification unavailable' };
    }

    if (typeof token !== 'string' || token.trim() === '') {
        return { ok: false, reason: 'token missing' };
    }
    // Cloudflare tokens are well under this; anything longer is not a token.
    if (token.length > 2048) {
        return { ok: false, reason: 'token malformed' };
    }

    const body = new URLSearchParams({ secret, response: token.trim() });
    if (remoteIp) body.set('remoteip', remoteIp);

    let data: SiteverifyResponse;
    try {
        const res = await fetch(SITEVERIFY_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body,
            // Never let a slow siteverify hang a submission indefinitely.
            signal: AbortSignal.timeout(10_000),
            cache: 'no-store',
        });
        data = (await res.json()) as SiteverifyResponse;
    } catch (e) {
        console.error('[TURNSTILE] siteverify request failed:', e instanceof Error ? e.message : e);
        return { ok: false, reason: 'verification unavailable' };
    }

    if (!data.success) {
        return { ok: false, reason: describe(data['error-codes']) };
    }

    // A successful token still has to have been issued for one of our hosts.
    if (data.hostname && !hostnameAllowed(data.hostname)) {
        console.warn('[TURNSTILE] token verified for unexpected hostname:', data.hostname);
        return { ok: false, reason: 'token issued for a different site' };
    }

    // ...and for the surface it is being spent on.
    if (expectedAction && data.action && data.action !== expectedAction) {
        console.warn('[TURNSTILE] action mismatch: got', data.action, 'expected', expectedAction);
        return { ok: false, reason: 'token issued for a different form' };
    }

    return { ok: true };
}

/**
 * Best-effort client address, for siteverify's `remoteip` and for logging.
 * Behind Cloudflare and Vercel the left-most x-forwarded-for entry is the
 * visitor; CF-Connecting-IP is preferred where present because Cloudflare sets
 * it itself and it cannot be spoofed by the client.
 */
export function clientIpFrom(headers: Headers): string | null {
    const cf = headers.get('cf-connecting-ip');
    if (cf) return cf.trim();
    const xff = headers.get('x-forwarded-for');
    if (xff) return xff.split(',')[0]?.trim() || null;
    return headers.get('x-real-ip')?.trim() || null;
}
