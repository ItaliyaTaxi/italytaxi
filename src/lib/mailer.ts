import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

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

    const { data, error } = await resend.emails.send({
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
