export const siteConfig = {
  name: "TractionFlo",
  title: "TractionFlo — Never Lose a Buyer in Your DMs Again",
  description:
    "Your followers are already asking to buy. TractionFlo shows you who's ready, what to say, and helps you reply before they buy from someone else.",
  tagline: "Never lose a buyer in your DMs again",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "https://www.tractionflo.com",
  keywords: [
    "TractionFlo",
    "Instagram DMs",
    "warm leads",
    "lead generation",
    "creator sales",
    "comment to DM",
    "business growth",
    "DM follow-up",
    "Instagram sales",
  ],
  creator: "TractionFlo",
  locale: "en_US",
};

export function absoluteUrl(path = "") {
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}

/** Bump when OG art changes so X/LinkedIn fetch a fresh preview URL. */
export const OG_IMAGE_VERSION = "5";

export function ogImageUrl() {
  return `${absoluteUrl("/opengraph-image")}?v=${OG_IMAGE_VERSION}`;
}
