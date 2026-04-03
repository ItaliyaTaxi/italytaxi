import nodemailer from 'nodemailer';

function createTransporter(user: string, pass: string) {
    const port = Number(process.env.SMTP_PORT) || 465;
    return nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'smtp.improvmx.com',
        port,
        secure: port === 465, // SSL on port 465, STARTTLS on 587
        auth: { user, pass },
        tls: { rejectUnauthorized: false } // Helps with testing and temporary SSL mismatches
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

    try {
        await transporter.sendMail({
            from: `"Italy Taxi Service" <${(fromEmail || user).trim()}>`,
            to,
            subject,
            text,
            html,
            replyTo: (fromEmail || user).trim(),
        });
        console.log(`[MAILER] Successfully sent email to ${to} via ${user.trim()}`);
    } catch (error) {
        console.error(`[MAILER] Error sending email to ${to}:`, error);
        throw error;
    }
}
