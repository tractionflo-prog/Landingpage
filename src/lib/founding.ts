import { conversionCopy } from "./conversion";

export const FOUNDER_SPOTS_TOTAL = 100;

/** Example public Pro price for founder offer (Option B). Update when launch pricing is set. */
export const FOUNDER_PRO_PRICE_EXAMPLE = 99;
export const FOUNDER_DISCOUNT_PERCENT = 10;

export const founderPriceExample = (
  (FOUNDER_PRO_PRICE_EXAMPLE * FOUNDER_DISCOUNT_PERCENT) /
  100
).toFixed(2);

export const foundingCopy = {
  cta: conversionCopy.offerCta,
  spotsLabel: "Only 100 founder spots",
  spotsShort: conversionCopy.scarcityLine,
  limited: "When they're gone, this offer is gone.",
  limitedShort: "100 spots only",
  urgency: "100 founders. Then the door closes.",
} as const;

export const FOUNDER_BENEFITS = [
  "90 days free — test everything, pay nothing",
  "Founder pricing locked forever",
  "Every feature we ship, included",
  "Direct line to shape the product",
] as const;
