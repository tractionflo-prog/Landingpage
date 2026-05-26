import { Resend } from "resend";
import type { LeadSubmission } from "@/lib/validations/lead";
import {
  buildFounderNotificationHtml,
  buildFounderNotificationText,
  buildWelcomeEmailHtml,
  buildWelcomeEmailText,
} from "@/lib/email/templates";

function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error("Missing RESEND_API_KEY");
  return new Resend(key);
}

function getFromEmail() {
  return process.env.RESEND_FROM_EMAIL ?? "TractionFlo <onboarding@resend.dev>";
}

export async function sendWelcomeEmail(data: LeadSubmission) {
  const resend = getResend();
  const firstName = data.name.split(" ")[0];

  await resend.emails.send({
    from: getFromEmail(),
    to: data.email,
    subject: `${firstName}, you're in — TractionFlo founding access reserved ✓`,
    html: buildWelcomeEmailHtml(data),
    text: buildWelcomeEmailText(data),
  });
}

export async function sendFounderNotification(data: LeadSubmission) {
  const notifyEmail = process.env.RESEND_NOTIFY_EMAIL;
  if (!notifyEmail) return;

  const resend = getResend();

  await resend.emails.send({
    from: getFromEmail(),
    to: notifyEmail,
    subject: `🟢 New founder: ${data.name}`,
    html: buildFounderNotificationHtml(data),
    text: buildFounderNotificationText(data),
    replyTo: data.email,
  });
}
