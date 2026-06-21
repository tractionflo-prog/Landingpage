export const siteConfig = {
  name: "TractionFlo",
  title: "TractionFlo — Turn Social Media Engagement Into Paying Customers",
  description:
    "TractionFlo helps creators, coaches, consultants and agencies turn comments, DMs, story replies and followers into qualified opportunities and paying customers — from first interaction to payment.",
  tagline: "Turn social media engagement into paying customers",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "https://www.tractionflo.com",
  keywords: [
    "TractionFlo",
    "turn engagement into customers",
    "convert followers into customers",
    "Instagram DM sales platform",
    "capture leads from comments and DMs",
    "social media revenue system",
    "qualify leads from social media",
    "get paid in DMs",
    "sales tool for creators and coaches",
    "lead generation for agencies",
    "DM follow-up and payments",
    "spot buyers in comments",
  ],
  creator: "TractionFlo",
  locale: "en_US",
  supportEmail: "support@tractionflo.com",
};

export function absoluteUrl(path = "") {
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}

/** Bump when OG art changes so X/LinkedIn fetch a fresh preview URL. */
export const OG_IMAGE_VERSION = "12";

export function ogImageUrl() {
  return `${absoluteUrl("/opengraph-image")}?v=${OG_IMAGE_VERSION}`;
}
