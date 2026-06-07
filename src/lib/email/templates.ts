import { formatAnswerLabel, QUIZ_QUESTIONS } from "@/lib/quiz/questions";
import type { LeadSubmission } from "@/lib/validations/lead";

const LIME = "#bef227";
const LIME_SOFT = "#f4fce0";
const BLACK = "#111111";
const MUTED = "#666666";
const BORDER = "#eaeaea";

function esc(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

const PERKS = [
  "Founding access reserved",
  "Founder pricing unlocked",
  "Early feature access enabled",
  "Product updates activated",
  "Priority feedback access enabled",
];

function perkRows() {
  return PERKS.map(
    (p) => `
    <tr>
      <td style="padding:0 0 10px 0;vertical-align:top;width:28px;">
        <div style="width:22px;height:22px;background:${LIME};border-radius:50%;text-align:center;line-height:22px;font-size:12px;color:${BLACK};font-weight:700;">✓</div>
      </td>
      <td style="padding:0 0 10px 0;font-size:14px;color:${BLACK};line-height:1.4;">${p}</td>
    </tr>`
  ).join("");
}

function quizAnswerRows(answers: Record<string, string>) {
  return QUIZ_QUESTIONS.map((q) => {
    const label = answers[q.id]
      ? esc(formatAnswerLabel(q.id, answers[q.id]))
      : "—";
    return `
    <tr>
      <td style="padding:12px 0;border-bottom:1px solid ${BORDER};font-size:13px;color:${MUTED};line-height:1.4;width:55%;">${esc(q.question)}</td>
      <td style="padding:12px 0;border-bottom:1px solid ${BORDER};font-size:14px;font-weight:600;color:${BLACK};text-align:right;line-height:1.4;">${label}</td>
    </tr>`;
  }).join("");
}

function emailShell(content: string) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>TractionFlo</title>
</head>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;">
          ${content}
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export function buildWelcomeEmailHtml(data: LeadSubmission) {
  const firstName = esc(data.name.split(" ")[0]);

  const body = `
  <!-- Logo bar -->
  <tr>
    <td style="padding:0 0 20px 0;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td>
            <table role="presentation" cellpadding="0" cellspacing="0">
              <tr>
                <td style="background:${LIME};border-radius:10px;width:36px;height:36px;text-align:center;vertical-align:middle;font-size:13px;font-weight:800;color:${BLACK};">TF</td>
                <td style="padding-left:10px;font-size:17px;font-weight:700;color:${BLACK};letter-spacing:-0.02em;">TractionFlo</td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>

  <!-- Main card -->
  <tr>
    <td style="background:#ffffff;border-radius:20px;border:1px solid ${BORDER};overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.06);">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">

        <!-- Lime top strip -->
        <tr>
          <td style="height:4px;background:${LIME};font-size:0;line-height:0;">&nbsp;</td>
        </tr>

        <tr>
          <td style="padding:36px 32px 28px 32px;">

            <!-- Badge -->
            <table role="presentation" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
              <tr>
                <td style="background:${LIME_SOFT};border:1px solid ${LIME};border-radius:999px;padding:8px 16px;">
                  <span style="font-size:10px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:${BLACK};">Limited founding access</span>
                  <span style="margin-left:6px;font-size:11px;">✓</span>
                </td>
              </tr>
            </table>

            <!-- Headline -->
            <h1 style="margin:0 0 8px 0;font-size:32px;font-weight:800;line-height:1.05;letter-spacing:-0.03em;color:${BLACK};">
              You're in, ${firstName}.
            </h1>
            <p style="margin:0 0 24px 0;font-size:20px;font-weight:700;line-height:1.2;color:${BLACK};">
              Not just another subscriber.
            </p>

            <p style="margin:0 0 12px 0;font-size:16px;line-height:1.65;color:${MUTED};">
              You're joining early creators and businesses helping shape TractionFlo — spot warm leads in your DMs, follow up faster, and turn conversations into customers.
            </p>
            <p style="margin:0 0 28px 0;font-size:16px;line-height:1.65;color:${MUTED};">
              Your founding spot is reserved. We'll reach out personally when early access opens.
            </p>

            <!-- Preparing card -->
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#fafafa;border:1px solid ${BORDER};border-radius:16px;margin-bottom:28px;">
              <tr>
                <td style="padding:24px;">
                  <p style="margin:0 0 16px 0;font-size:14px;font-weight:700;color:${BLACK};">
                    ✦ &nbsp;TractionFlo is preparing your spot...
                  </p>
                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px;">
                    <tr>
                      <td style="background:#ebebeb;border-radius:999px;height:8px;overflow:hidden;">
                        <div style="width:100%;height:8px;background:${LIME};border-radius:999px;"></div>
                      </td>
                    </tr>
                  </table>
                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                    ${perkRows()}
                  </table>
                </td>
              </tr>
            </table>

            <!-- Stats row -->
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#fafafa;border:1px solid ${BORDER};border-radius:14px;margin-bottom:28px;">
              <tr>
                <td style="padding:18px 20px;text-align:center;">
                  <p style="margin:0;font-size:15px;color:${MUTED};">
                    <strong style="color:${BLACK};font-size:16px;">Limited</strong> founder spots — and they're filling fast
                  </p>
                  <p style="margin:8px 0 0 0;font-size:13px;color:${MUTED};">
                    Instagram first &nbsp;·&nbsp; TikTok + YouTube coming next
                  </p>
                </td>
              </tr>
            </table>

          </td>
        </tr>
      </table>
    </td>
  </tr>

  <!-- Footer -->
  <tr>
    <td style="padding:24px 8px 0 8px;text-align:center;">
      <p style="margin:0 0 6px 0;font-size:13px;font-weight:600;color:#999;letter-spacing:0.02em;">
        Less setup. More conversations.
      </p>
      <p style="margin:0;font-size:12px;color:#bbb;">
        You received this because you joined TractionFlo founding access.
      </p>
    </td>
  </tr>`;

  return emailShell(body);
}

export function buildFounderNotificationHtml(data: LeadSubmission) {
  const name = esc(data.name);
  const email = esc(data.email);
  const submitted = new Date().toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  const body = `
  <tr>
    <td style="padding:0 0 16px 0;">
      <table role="presentation" cellpadding="0" cellspacing="0">
        <tr>
          <td style="background:${LIME};border-radius:8px;width:32px;height:32px;text-align:center;vertical-align:middle;font-size:11px;font-weight:800;color:${BLACK};">TF</td>
          <td style="padding-left:10px;font-size:15px;font-weight:700;color:${BLACK};">New founding lead</td>
        </tr>
      </table>
    </td>
  </tr>

  <tr>
    <td style="background:#ffffff;border-radius:16px;border:1px solid ${BORDER};padding:28px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">

        <tr>
          <td style="padding-bottom:20px;border-bottom:1px solid ${BORDER};">
            <p style="margin:0 0 4px 0;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.1em;color:#999;">Contact</p>
            <p style="margin:0;font-size:22px;font-weight:800;color:${BLACK};letter-spacing:-0.02em;">${name}</p>
            <p style="margin:6px 0 0 0;font-size:15px;">
              <a href="mailto:${email}" style="color:${BLACK};font-weight:600;">${email}</a>
            </p>
            <p style="margin:8px 0 0 0;font-size:12px;color:#aaa;">Submitted ${submitted}</p>
          </td>
        </tr>

        <tr>
          <td style="padding-top:20px;">
            <p style="margin:0 0 12px 0;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.1em;color:#999;">Quiz responses</p>
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
              ${quizAnswerRows(data.answers)}
            </table>
          </td>
        </tr>

        <tr>
          <td style="padding-top:20px;">
            <a href="mailto:${email}?subject=Welcome%20to%20TractionFlo%20Founding%20Access" style="display:inline-block;background:${BLACK};color:#fff;font-size:13px;font-weight:600;text-decoration:none;padding:12px 20px;border-radius:999px;">
              Reply to ${name.split(" ")[0]} →
            </a>
          </td>
        </tr>

      </table>
    </td>
  </tr>`;

  return emailShell(body);
}

export function buildWelcomeEmailText(data: LeadSubmission) {
  const firstName = data.name.split(" ")[0];
  return `You're in, ${firstName} — Not just another subscriber.

Your TractionFlo founding access is reserved.

What's unlocked:
${PERKS.map((p) => `✓ ${p}`).join("\n")}

Limited founder spots — and they're filling fast. Instagram first — TikTok + YouTube coming next.

We'll email you when early access opens.

— TractionFlo
Less setup. More conversations.`;
}

export function buildFounderNotificationText(data: LeadSubmission) {
  const lines = QUIZ_QUESTIONS.map((q) => {
    const label = data.answers[q.id]
      ? formatAnswerLabel(q.id, data.answers[q.id])
      : "—";
    return `${q.question}\n→ ${label}`;
  }).join("\n\n");

  return `New founding lead: ${data.name} (${data.email})

Quiz responses:
${lines}`;
}
