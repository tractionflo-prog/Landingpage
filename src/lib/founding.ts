import { conversionCopy } from "./conversion";

export const foundingCopy = {
  cta: conversionCopy.offerCta,
  spotsLabel: "Limited founder spots",
  spotsShort: conversionCopy.scarcityLine,
  limited: "When they're gone, this offer is gone.",
  limitedShort: "Limited spots",
  urgency: "Founder spots are limited. Then the door closes.",
} as const;

export const FOUNDER_BENEFITS = [
  "Get free access — no credit card required",
  "Founder pricing locked forever",
  "Every feature we ship, included",
  "Direct line to shape the product",
] as const;
