export const siteConfig = {
  name: "TractionFlo",
  title: "TractionFlo — Turn Your DMs Into Paying Customers",
  description:
    "Your audience is already trying to buy from you. TractionFlo turns your Instagram DMs and comments into paying customers — spot who's ready, auto-reply with a message personalized to each one, and get paid. All in one place.",
  tagline: "Turn your DMs into paying customers",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "https://www.tractionflo.com",
  keywords: [
    "TractionFlo",
    "turn DMs into customers",
    "sell in Instagram DMs",
    "get paid in DMs",
    "Instagram DM sales platform",
    "convert followers into customers",
    "social selling for creators",
    "DM commerce",
    "Instagram sales for coaches",
    "all-in-one creator sales tool",
    "DM follow-up and payments",
    "spot buyers in comments",
  ],
  creator: "TractionFlo",
  locale: "en_US",
};

export function absoluteUrl(path = "") {
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}

/** Bump when OG art changes so X/LinkedIn fetch a fresh preview URL. */
export const OG_IMAGE_VERSION = "9";

export function ogImageUrl() {
  return `${absoluteUrl("/opengraph-image")}?v=${OG_IMAGE_VERSION}`;
}
