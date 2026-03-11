import nodemailer from 'nodemailer';

function createTransporter(user: string, pass: string) {
    return nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'smtp.improvmx.com',
        port: Number(process.env.SMTP_PORT) || 465,
        secure: true, // SSL on port 465 — not blocked by ISPs or Vercel
        auth: { user, pass },
    });
}

interface SendEmailOptions {
    to: string;
    subject: string;
    text?: string;
    html?: string;
    fromAccount?: 'booking' | 'info';
}

export async function sendEmail({ to, subject, text, html, fromAccount = 'booking' }: SendEmailOptions) {
    const user = fromAccount === 'info'
        ? process.env.INFO_SMTP_USER
        : process.env.BOOKING_SMTP_USER;

    const pass = fromAccount === 'info'
        ? process.env.INFO_SMTP_PASS
        : process.env.BOOKING_SMTP_PASS;

    const fromEmail = fromAccount === 'info'
        ? process.env.INFO_EMAIL
        : process.env.BOOKING_EMAIL;

    if (!user || !pass) {
        console.warn(`SMTP credentials not configured for "${fromAccount}" — email skipped`);
        return;
    }

    const transporter = createTransporter(user.trim(), pass.trim());

    await transporter.sendMail({
        from: `"Italy Taxi Service" <${(fromEmail || user).trim()}>`,
        to,
        subject,
        text,
        html,
    });
}
