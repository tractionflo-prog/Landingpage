export const siteConfig = {
  name: "TractionFlo",
  title: "TractionFlo — Intelligent Workflows for Business Growth",
  description:
    "Turn comments, DMs and followers into leads, follow-ups and customers. Same outcomes, 10× simpler — without complex builders or setup headaches.",
  tagline: "Intelligent workflows for business growth",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "https://www.tractionflo.com",
  keywords: [
    "TractionFlo",
    "Instagram automation",
    "DM automation",
    "lead generation",
    "social media workflows",
    "creator tools",
    "comment to DM",
    "business growth",
    "follow-up automation",
    "intelligent workflows",
  ],
  creator: "TractionFlo",
  locale: "en_US",
};

export function absoluteUrl(path = "") {
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}

/** Bump when OG art changes so X/LinkedIn fetch a fresh preview URL. */
export const OG_IMAGE_VERSION = "3";

export function ogImageUrl() {
  return `${absoluteUrl("/opengraph-image")}?v=${OG_IMAGE_VERSION}`;
}
