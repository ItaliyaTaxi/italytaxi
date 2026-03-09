import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.improvmx.com',
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false, // STARTTLS on port 587
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
    requireTLS: true,
});

interface SendEmailOptions {
    to: string;
    subject: string;
    text?: string;
    html?: string;
}

export async function sendEmail({ to, subject, text, html }: SendEmailOptions) {
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
        console.warn('SMTP credentials not configured — email skipped');
        return;
    }

    await transporter.sendMail({
        from: process.env.EMAIL_FROM || `"Italy Taxi Service" <${process.env.SMTP_USER}>`,
        to,
        subject,
        text,
        html,
    });
}
