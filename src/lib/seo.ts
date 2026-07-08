import { agentBrand } from "./agent";

export const siteConfig = {
  name: "TractionFlo",
  title: "AI Voice Agent for Coaches — Books Clients on Your Calendar | TractionFlo",
  description:
    `${agentBrand.name}, TractionFlo's AI voice agent, calls your leads back, handles objections in 30+ languages, and books discovery calls on your calendar. Built for fitness, yoga, manifestation & business coaches. Free access — no credit card.`,
  tagline: "The AI voice agent that turns quiet leads into booked clients",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "https://www.tractionflo.com",
  keywords: [
    "AI voice agent",
    "voice agent",
    "AI voice agent for coaches",
    "AI phone agent",
    "voice AI for lead follow up",
    "AI appointment setter",
    "AI appointment setter for coaches",
    "AI that calls leads",
    "automated lead follow up calls",
    "AI cold calling for coaches",
    "discovery call booking AI",
    "AI sales agent for coaches",
    "lead recovery for coaches",
    "fitness coach lead follow up",
    "yoga studio lead follow up",
    "manifestation coach leads",
    "webinar follow up automation",
    "TractionFlo",
    agentBrand.name,
  ],
  creator: "TractionFlo",
  locale: "en_US",
  supportEmail: "support@tractionflo.com",
  appLoginUrl:
    process.env.NEXT_PUBLIC_APP_LOGIN_URL?.replace(/\/$/, "") ??
    "https://app.tractionflo.com",
};

export function absoluteUrl(path = "") {
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}

/** Bump when OG art changes so X/LinkedIn fetch a fresh preview URL. */
export const OG_IMAGE_VERSION = "17";

export function ogImageUrl() {
  return `${absoluteUrl("/opengraph-image")}?v=${OG_IMAGE_VERSION}`;
}
