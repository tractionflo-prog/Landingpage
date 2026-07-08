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

// The inbox "display name" is the single biggest lever on open rates, so we
// control the name explicitly and keep the address configurable separately.
// Override the name per-environment with RESEND_FROM_NAME (e.g. a founder name).
function getFromEmail() {
  const name = process.env.RESEND_FROM_NAME ?? "TractionFlo";

  // Address precedence: explicit RESEND_FROM_ADDRESS → parsed from the legacy
  // RESEND_FROM_EMAIL ("Name <addr>") → Resend sandbox fallback.
  const legacy = process.env.RESEND_FROM_EMAIL;
  const address =
    process.env.RESEND_FROM_ADDRESS ??
    legacy?.match(/<([^>]+)>/)?.[1] ??
    (legacy && legacy.includes("@") && !legacy.includes("<") ? legacy : undefined) ??
    "onboarding@resend.dev";

  return `${name} <${address}>`;
}

export async function sendWelcomeEmail(data: LeadSubmission) {
  const resend = getResend();
  const firstName = data.name.split(" ")[0];

  await resend.emails.send({
    from: getFromEmail(),
    to: data.email,
    subject: `${firstName}, your early access spot is confirmed — TractionFlo`,
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
