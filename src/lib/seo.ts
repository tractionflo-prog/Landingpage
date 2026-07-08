import { agentBrand } from "./agent";

export const siteConfig = {
  name: "TractionFlo",
  title: `TractionFlo — ${agentBrand.metaTitle}`,
  description:
    `Turn masterclass sign-ups into booked discovery calls. ${agentBrand.name}, TractionFlo's AI voice agent, re-engages the leads who weren't ready, remembers every conversation, and books calls on your calendar.`,
  tagline: "Turn masterclass sign-ups into booked discovery calls",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "https://www.tractionflo.com",
  keywords: [
    "TractionFlo",
    agentBrand.name,
    "AI voice agent for coaches",
    "coach lead follow up",
    "masterclass lead recovery",
    "AI appointment setter for coaches",
    "course creator sales automation",
    "discovery call booking AI",
    "manifestation coach leads",
    "webinar follow up automation",
    "AI phone agent for courses",
    "enroll more coaching clients",
    "cold lead recovery for coaches",
  ],
  creator: "TractionFlo",
  locale: "en_US",
  supportEmail: "support@tractionflo.com",
};

export function absoluteUrl(path = "") {
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}

/** Bump when OG art changes so X/LinkedIn fetch a fresh preview URL. */
export const OG_IMAGE_VERSION = "15";

export function ogImageUrl() {
  return `${absoluteUrl("/opengraph-image")}?v=${OG_IMAGE_VERSION}`;
}
