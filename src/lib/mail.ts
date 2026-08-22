import nodemailer from "nodemailer";

export const CONTACT_MAILBOX = "info@naustudio.org";

type MailConfig = {
  host: string;
  port: number;
  secure: boolean;
  user: string;
  pass: string;
  from: string;
  to: string;
};

export function getMailConfig(): MailConfig | null {
  const user = process.env.SMTP_USER?.trim() || CONTACT_MAILBOX;
  const pass = process.env.SMTP_PASS?.trim();
  if (!pass) return null;

  const port = Number(process.env.SMTP_PORT) || 587;

  return {
    host: process.env.SMTP_HOST?.trim() || "smtp.gmail.com",
    port,
    secure: process.env.SMTP_SECURE === "true" || port === 465,
    user,
    pass,
    from: process.env.CONTACT_FROM?.trim() || CONTACT_MAILBOX,
    to: process.env.CONTACT_TO?.trim() || CONTACT_MAILBOX,
  };
}

export async function sendContactEmail(input: {
  name: string;
  email: string;
  message: string;
}) {
  const config = getMailConfig();
  if (!config) {
    throw new Error("Mail is not configured");
  }

  const transporter = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure,
    auth: {
      user: config.user,
      pass: config.pass,
    },
  });

  const message = input.message.trim() || "(no message)";

  await transporter.sendMail({
    from: config.from,
    to: config.to,
    replyTo: `${input.name} <${input.email}>`,
    subject: `New enquiry from ${input.name}`,
    text: [
      `Name: ${input.name}`,
      `Email: ${input.email}`,
      "",
      message,
    ].join("\n"),
  });
}
