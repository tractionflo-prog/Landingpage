import type { LeadSubmission } from "@/lib/validations/lead";
import { agentBrand } from "@/lib/agent";
import { siteConfig } from "@/lib/seo";

const BLACK = "#0a0a0a";
const MUTED = "#6b6b6b";
const BORDER = "#ECECEC";
const LOGO_URL = `${siteConfig.url}/apple-icon?v=3`;
const LOGO_ORANGE = "#FF5A1F";
const GRADIENT =
  "linear-gradient(90deg,#c9b8f0 0%,#a6d3ea 30%,#f4c496 55%,#f3bcd6 78%,#a9d3ba 100%)";

function esc(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function emailShell(content: string, preheader?: string) {
  const preheaderBlock = preheader
    ? `<div style="display:none;max-height:0;overflow:hidden;mso-hide:all;font-size:1px;line-height:1px;color:#f5f5f5;opacity:0;">${esc(
        preheader
      )}${"&#8199;&#65279;&nbsp;".repeat(30)}</div>`
    : "";

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>TractionFlo</title>
</head>
<body style="margin:0;padding:0;background:#f5f5f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;">
  ${preheaderBlock}
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f5;padding:32px 16px;">
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
  <tr>
    <td style="padding:0 0 20px 0;">
      <table role="presentation" cellpadding="0" cellspacing="0">
        <tr>
          <td style="vertical-align:middle;font-size:0;line-height:0;">
            <img src="${LOGO_URL}" width="36" height="36" alt="TractionFlo" style="display:block;border-radius:9px;" />
          </td>
          <td style="padding-left:10px;font-size:17px;font-weight:700;color:${BLACK};letter-spacing:-0.02em;vertical-align:middle;">Traction<span style="color:${LOGO_ORANGE};">Flo</span></td>
        </tr>
      </table>
    </td>
  </tr>

  <tr>
    <td style="background:#ffffff;border-radius:20px;border:1px solid ${BORDER};overflow:hidden;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td style="height:4px;background:${GRADIENT};font-size:0;line-height:0;">&nbsp;</td>
        </tr>
        <tr>
          <td style="padding:36px 32px 32px 32px;">
            <h1 style="margin:0 0 16px 0;font-size:28px;font-weight:700;line-height:1.15;letter-spacing:-0.03em;color:${BLACK};">
              You're in, ${firstName}.
            </h1>

            <p style="margin:0 0 14px 0;font-size:16px;line-height:1.65;color:${MUTED};">
              Your early access spot to TractionFlo is confirmed.
            </p>
            <p style="margin:0;font-size:16px;line-height:1.65;color:${MUTED};">
              We're putting the finishing touches on ${agentBrand.name} — your AI voice agent that calls your leads and books discovery calls on your calendar. The moment we launch, you'll get access.
            </p>

            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:28px;background:#fafafa;border:1px solid ${BORDER};border-radius:14px;">
              <tr>
                <td style="padding:18px 20px;">
                  <p style="margin:0 0 6px 0;font-size:13px;font-weight:600;color:${BLACK};">What happens next</p>
                  <p style="margin:0;font-size:14px;line-height:1.55;color:${MUTED};">
                    You'll get an email from us the moment your access is ready — you're at the front of the line. Questions before then? Email
                    <a href="mailto:${siteConfig.supportEmail}" style="color:${BLACK};font-weight:600;text-decoration:none;">${siteConfig.supportEmail}</a>.
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>

  <tr>
    <td style="padding:24px 8px 0 8px;text-align:center;">
      <p style="margin:0 0 6px 0;font-size:13px;font-weight:600;color:#999;">
        ${siteConfig.tagline}
      </p>
      <p style="margin:0;font-size:12px;color:#bbb;">
        You received this because you signed up at ${siteConfig.url.replace(/^https?:\/\//, "")}.
      </p>
    </td>
  </tr>`;

  return emailShell(
    body,
    `Your early access spot is confirmed, ${firstName}. You'll get access the moment we launch.`
  );
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
          <td style="vertical-align:middle;font-size:0;line-height:0;">
            <img src="${LOGO_URL}" width="32" height="32" alt="TractionFlo" style="display:block;border-radius:8px;" />
          </td>
          <td style="padding-left:10px;font-size:15px;font-weight:700;color:${BLACK};vertical-align:middle;">New signup</td>
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
            <p style="margin:0;font-size:22px;font-weight:700;color:${BLACK};letter-spacing:-0.02em;">${name}</p>
            <p style="margin:6px 0 0 0;font-size:15px;">
              <a href="mailto:${email}" style="color:${BLACK};font-weight:600;">${email}</a>
            </p>
            <p style="margin:8px 0 0 0;font-size:12px;color:#aaa;">Submitted ${submitted}</p>
          </td>
        </tr>
        <tr>
          <td style="padding-top:20px;">
            <a href="mailto:${email}?subject=Welcome%20to%20TractionFlo" style="display:inline-block;background:${BLACK};color:#fff;font-size:13px;font-weight:600;text-decoration:none;padding:12px 20px;border-radius:999px;">
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
  return `You're in, ${firstName}.

Your early access spot to TractionFlo is confirmed.

We're putting the finishing touches on ${agentBrand.name} — your AI voice agent that calls your leads and books discovery calls on your calendar. The moment we launch, you'll get access.

What happens next:
You'll get an email from us the moment your access is ready — you're at the front of the line. Questions before then? Email ${siteConfig.supportEmail}.

— TractionFlo
${siteConfig.tagline}`;
}

export function buildFounderNotificationText(data: LeadSubmission) {
  return `New signup: ${data.name} (${data.email})`;
}
