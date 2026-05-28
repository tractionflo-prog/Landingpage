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
    "close sales in Instagram DMs",
    "Instagram DM sales tool",
    "warm leads in DMs",
    "convert followers into customers",
    "social selling for creators",
    "DM lead generation",
    "Instagram sales for coaches",
    "creator sales tool",
    "DM follow-up",
    "spot buyers in comments",
  ],
  creator: "TractionFlo",
  locale: "en_US",
};

export function absoluteUrl(path = "") {
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}

/** Bump when OG art changes so X/LinkedIn fetch a fresh preview URL. */
export const OG_IMAGE_VERSION = "6";

export function ogImageUrl() {
  return `${absoluteUrl("/opengraph-image")}?v=${OG_IMAGE_VERSION}`;
}
