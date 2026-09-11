import nodemailer from 'nodemailer';
import { env } from '../config/env.js';

let transporter;

function getTransporter() {
  if (!env.SMTP_HOST || !env.SMTP_USER || !env.SMTP_PASS) return null;

  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: env.SMTP_HOST,
      port: env.SMTP_PORT || 587,
      secure: Number(env.SMTP_PORT) === 465,
      auth: {
        user: env.SMTP_USER,
        pass: env.SMTP_PASS
      }
    });
  }

  return transporter;
}

export async function sendContactNotification(contact) {
  const mailer = getTransporter();

  if (!mailer || !env.CONTACT_RECEIVER_EMAIL) {
    console.warn('SMTP is not configured; contact saved without email notification.');
    return;
  }

  await mailer.sendMail({
    from: env.MAIL_FROM || env.SMTP_USER,
    to: env.CONTACT_RECEIVER_EMAIL,
    replyTo: contact.email,
    subject: `Portfolio enquiry: ${contact.subject || 'New message'}`,
    text: [
      `Name: ${contact.name}`,
      `Email: ${contact.email}`,
      `Service: ${contact.service || '-'}`,
      `Budget: ${contact.budget || '-'}`,
      '',
      contact.message
    ].join('\n')
  });
}
