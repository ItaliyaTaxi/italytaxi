import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// All outbound emails come from this verified domain address
const FROM_ADDRESS = 'Italy Taxi Service <booking@italytaxiservice.com>';

interface SendEmailOptions {
    to: string;
    subject: string;
    html: string;
    text?: string;
}

export async function sendEmail({ to, subject, html, text }: SendEmailOptions) {
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
    });

    if (error) {
        console.error('[MAILER] Resend error:', error);
        throw new Error(error.message);
    }

    console.log(`[MAILER] Email sent to ${to} — id: ${data?.id}`);
}
