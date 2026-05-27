export const FOUNDER_SPOTS_TOTAL = 100;

/** Example public Pro price for founder offer (Option B). Update when launch pricing is set. */
export const FOUNDER_PRO_PRICE_EXAMPLE = 99;
export const FOUNDER_DISCOUNT_PERCENT = 10;

export const founderPriceExample = (
  (FOUNDER_PRO_PRICE_EXAMPLE * FOUNDER_DISCOUNT_PERCENT) /
  100
).toFixed(2);

export const foundingCopy = {
  cta: "Claim Founding Access",
  spotsLabel: "First 100 founders only",
  spotsShort: "Only 100 founder spots",
  limited: "Limited availability — don't miss out",
  limitedShort: "100 spots only",
  urgency: "First 100 founders only. Limited availability.",
} as const;

export const FOUNDER_BENEFITS = [
  "90 days free while we shape the product with you",
  "Lock founder pricing forever",
  "Get every future feature",
  "Help shape the product",
  "Never available again",
] as const;
