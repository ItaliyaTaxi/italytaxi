import { Resend } from 'resend';

/**
 * The client is built on first use rather than at module load.
 *
 * `new Resend(undefined)` throws, and because that used to happen while the
 * module was being evaluated it took down every route that imported the
 * mailer — including the lead-capture paths — before `sendEmail`'s own
 * "key not set, skip" guard could do anything. Deferring it means a missing
 * key degrades to "no email sent" the way that guard always intended, and a
 * lead is still captured.
 */
let client: Resend | null = null;

function getResend(): Resend {
    if (!client) client = new Resend(process.env.RESEND_API_KEY);
    return client;
}

const FROM_ADDRESS = 'Italy Taxi Service <bookings@italytaxiservice.com>';
const REPLY_TO = 'italytaxiservicee@gmail.com';

interface EmailAttachment {
    filename: string;
    content?: Buffer | string;
    path?: string;
    contentType?: string;
}

interface SendEmailOptions {
    to: string;
    subject: string;
    html: string;
    replyTo?: string;
    text?: string;
    attachments?: EmailAttachment[];
}

export async function sendEmail({ to, subject, html, replyTo, text, attachments }: SendEmailOptions) {
    if (!process.env.RESEND_API_KEY) {
        console.warn('[MAILER] RESEND_API_KEY not set — email skipped');
        return;
    }

    const { data, error } = await getResend().emails.send({
        from: FROM_ADDRESS,
        to,
        subject,
        html,
        text,
        replyTo: replyTo ?? REPLY_TO,
        ...(attachments && attachments.length ? { attachments } : {}),
    });

    if (error) {
        console.error('[MAILER] Resend error:', error);
        throw new Error(error.message);
    }

    console.log(`[MAILER] Email sent to ${to} — id: ${data?.id}`);
}
