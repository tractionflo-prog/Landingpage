import { agentBrand } from "../agent";

/** Illustrative masterclass funnel — example scenario, not customer claims. */
export const funnelExample = {
  title: "Example: one masterclass launch",
  stages: [
    {
      value: "127",
      label: "Sign-ups",
      detail: "Everyone who registered for your free class",
    },
    {
      value: "94",
      label: '"Not yet"',
      detail: "Interested, but didn't book or buy",
    },
    {
      value: "94",
      label: "Called back",
      detail: `${agentBrand.name} re-engaged each one with context`,
    },
    {
      value: "18",
      label: "Calls booked",
      detail: "Ready leads landed on your calendar",
      highlight: true,
    },
  ],
  conversionLabel: "14% of your masterclass list booked a discovery call",
  conversionNote: "18 discovery calls from 127 free sign-ups in this example.",
  disclaimer:
    "Illustrative example for one masterclass launch. Results vary by niche, offer, list quality, and follow-up timing.",
} as const;

export const funnelOutcomes = [
  { v: "14%", l: "List → discovery call" },
  { v: "94", l: "Leads called back" },
  { v: "24/7", l: "Automatic follow-up" },
  { v: "0", l: "Manual dialing" },
] as const;
