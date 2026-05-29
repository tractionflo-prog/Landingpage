import { conversionCopy } from "./conversion";

export const FOUNDER_SPOTS_TOTAL = 25;

/** Founders pay this share of whatever the public Pro price is at launch. */
export const FOUNDER_DISCOUNT_PERCENT = 10;

export const foundingCopy = {
  cta: conversionCopy.offerCta,
  spotsLabel: "Only 25 founder spots",
  spotsShort: conversionCopy.scarcityLine,
  limited: "When they're gone, this offer is gone.",
  limitedShort: "25 spots only",
  urgency: "25 founders. Then the door closes.",
} as const;

export const FOUNDER_BENEFITS = [
  "90 days free — test everything, pay nothing",
  "Founder pricing locked forever",
  "Every feature we ship, included",
  "Direct line to shape the product",
] as const;
