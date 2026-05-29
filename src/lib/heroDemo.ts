export type HeroOutcome = {
  kind: "paid" | "booked" | "repeat";
  label: string;
  amount?: string;
};

export type HeroScenario = {
  name: string;
  handle: string;
  avatar: string;
  spotted: string;
  incoming?: string;
  reply: string;
  /** The part of the reply that proves it's personalized to this person. */
  highlight: string;
  outcome: HeroOutcome;
};

export const HERO_SCENARIOS: HeroScenario[] = [
  {
    name: "Sarah",
    handle: "sarah.k",
    avatar: "#f9a8d4",
    spotted: "Asked about pricing",
    incoming: "How much is your coaching? 👀",
    reply: "Hi Sarah! You asked about the coaching — it's $240 for 4 weeks, 1:1. Want the link?",
    highlight: "You asked about the coaching",
    outcome: { kind: "paid", label: "Paid in the chat", amount: "$240" },
  },
  {
    name: "Jade",
    handle: "jade.l",
    avatar: "#fcd34d",
    spotted: "Watched every story · never messaged",
    reply: "Hey Jade! I noticed you catch every story 🙌 want the details on the program?",
    highlight: "I noticed you catch every story",
    outcome: { kind: "booked", label: "Call booked" },
  },
  {
    name: "Alex",
    handle: "alex.t",
    avatar: "#c4b5fd",
    spotted: "Bought before · back again",
    incoming: "Is the new drop available?",
    reply: "Welcome back Alex! Since you loved the last drop, want me to set you up again?",
    highlight: "Since you loved the last drop",
    outcome: { kind: "repeat", label: "Repeat order", amount: "$180" },
  },
];

// kept for any legacy reference
export const MESSAGE_PEOPLE = HERO_SCENARIOS.map((s) => ({
  handle: s.handle,
  signal: s.spotted,
  badge: "High intent",
  badgeClass: "bg-[#f4fce0] text-[#4d7c0f]",
  avatar: s.avatar,
}));

export const SUGGESTED_REPLY = HERO_SCENARIOS[0].reply;
