'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * Cloudflare Turnstile, rendered explicitly.
 *
 * Explicit rendering (rather than the implicit `class="cf-turnstile"` form) is
 * what Cloudflare's setup guidance recommends for a page that stays mounted
 * after a submission: a token is redeemed exactly once at siteverify, so a
 * form that fails validation and is retried needs a fresh one. Keeping the
 * widget id lets us call `turnstile.reset(id)` to get it.
 *
 * The token is written into a hidden input named `cf-turnstile-response`,
 * which is the field name Cloudflare's own server-side examples read. That
 * means it travels with the ordinary FormData of a Server Action submission
 * and with the JSON body of the contact form, with no special handling.
 *
 * A token is redeemed exactly once at siteverify, so a form that is submitted
 * again needs a fresh challenge. Callers get one by changing this component's
 * React `key` (both forms key it on the attempt number), which remounts the
 * widget and renders a new challenge. That keeps the reset an ordinary mount,
 * with no imperative reset call and no state juggling.
 *
 * The site key is public by design — it is visible in the page source of every
 * Turnstile deployment. Only the secret key is sensitive, and that is read
 * exclusively on the server in lib/security/turnstile.ts.
 */

const SCRIPT_SRC = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
const SCRIPT_ID = 'cf-turnstile-script';

/** Overridable per environment; falls back to the project's public site key. */
const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || '0x4AAAAAAGL7RcDIrWbqFpUb';

interface TurnstileApi {
    render: (
        el: HTMLElement,
        opts: {
            sitekey: string;
            action?: string;
            theme?: 'auto' | 'light' | 'dark';
            callback?: (token: string) => void;
            'expired-callback'?: () => void;
            'error-callback'?: () => void;
            'timeout-callback'?: () => void;
        },
    ) => string | undefined;
    reset: (widgetId?: string) => void;
    remove: (widgetId?: string) => void;
}

declare global {
    interface Window {
        turnstile?: TurnstileApi;
    }
}

let scriptPromise: Promise<void> | null = null;

function loadTurnstileScript(): Promise<void> {
    if (typeof window === 'undefined') return Promise.resolve();
    if (window.turnstile) return Promise.resolve();
    if (scriptPromise) return scriptPromise;

    scriptPromise = new Promise<void>((resolve, reject) => {
        const existing = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;
        if (existing) {
            existing.addEventListener('load', () => resolve());
            existing.addEventListener('error', () => reject(new Error('Turnstile script failed to load')));
            return;
        }
        const s = document.createElement('script');
        s.id = SCRIPT_ID;
        s.src = SCRIPT_SRC;
        s.async = true;
        s.defer = true;
        s.onload = () => resolve();
        s.onerror = () => reject(new Error('Turnstile script failed to load'));
        document.head.appendChild(s);
    });

    return scriptPromise;
}

export interface TurnstileWidgetProps {
    /** The `action` this surface mints tokens for; verified server-side. */
    action: string;
    /** Receives the current token, or '' when there is none. */
    onToken?: (token: string) => void;
    className?: string;
}

export default function TurnstileWidget({ action, onToken, className }: TurnstileWidgetProps) {
    const holder = useRef<HTMLDivElement | null>(null);
    const widgetId = useRef<string | undefined>(undefined);
    const [token, setToken] = useState('');
    const [failed, setFailed] = useState(false);

    // Callers pass a stable setter (React's own setState), so using it
    // directly as an effect dependency does not churn the widget.
    const publish = useCallback(
        (value: string) => {
            setToken(value);
            onToken?.(value);
        },
        [onToken],
    );

    useEffect(() => {
        let cancelled = false;

        loadTurnstileScript()
            .then(() => {
                if (cancelled || !holder.current || !window.turnstile) return;
                if (widgetId.current !== undefined) return; // already rendered

                widgetId.current = window.turnstile.render(holder.current, {
                    sitekey: SITE_KEY,
                    action,
                    theme: 'auto',
                    callback: (t) => publish(t),
                    // A token is short-lived; drop it so the form cannot send a stale one.
                    'expired-callback': () => publish(''),
                    'timeout-callback': () => publish(''),
                    'error-callback': () => {
                        publish('');
                        setFailed(true);
                    },
                });
            })
            .catch(() => {
                if (!cancelled) setFailed(true);
            });

        return () => {
            cancelled = true;
            if (widgetId.current !== undefined && window.turnstile) {
                try {
                    window.turnstile.remove(widgetId.current);
                } catch {
                    /* the widget may already be gone with the DOM node */
                }
                widgetId.current = undefined;
            }
        };
    }, [action, publish]);


    return (
        <div className={className}>
            {/* Cloudflare renders the challenge into this element. */}
            <div ref={holder} />
            {/* The field name Cloudflare's server-side examples read. */}
            <input type="hidden" name="cf-turnstile-response" value={token} readOnly />
            {failed && (
                <p className="mt-2 text-xs text-red-400">
                    The verification widget could not load. Please refresh the page, or contact us on WhatsApp.
                </p>
            )}
        </div>
    );
}
