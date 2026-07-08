/**
 * Live "Customer Pipeline" board — data model for the hero animation.
 * Cards flow left→right across the stages, mirroring how TractionFlo
 * moves a conversation from first touch to repeat customer / referral.
 */

export type BadgeKind = "won" | "onboarding" | "repeat" | "referral";

export type StageBadge = {
  label: string;
  kind: BadgeKind;
};

export type BoardColumn = {
  id: string;
  title: string;
  /** Dot + accent color for the column header. */
  accent: string;
  /** Soft tint for the header chip. */
  tint: string;
  /** Aggregate value shown under the column title. */
  value: string;
  /** Total count shown in the header pill. */
  count: number;
  /** Possible status lines a card shows while sitting in this stage. */
  statuses: string[];
  /** Optional badge applied to cards in this stage. */
  badge?: StageBadge;
};

export const BOARD_COLUMNS: BoardColumn[] = [
  {
    id: "new",
    title: "New",
    accent: "#8B5CF6",
    tint: "#F5F3FF",
    value: "$3,600",
    count: 12,
    statuses: ['commented "Price?"', "new follower", "replied to story", "liked 3 posts", "sent a DM"],
  },
  {
    id: "engaged",
    title: "Engaged",
    accent: "#FF5A1F",
    tint: "#FFF7ED",
    value: "$7,900",
    count: 18,
    statuses: ["asked about coaching", "product question", "interested in course", "wants details"],
  },
  {
    id: "qualified",
    title: "Qualified",
    accent: "#3B82F6",
    tint: "#EFF6FF",
    value: "$9,200",
    count: 9,
    statuses: ["budget confirmed", "ready for details", "call booked", "high intent"],
  },
  {
    id: "checkout",
    title: "Checkout Sent",
    accent: "#06B6D4",
    tint: "#ECFEFF",
    value: "$11,450",
    count: 7,
    statuses: ["checkout sent", "waiting for payment", "invoice sent"],
  },
  {
    id: "won",
    title: "Won",
    accent: "#22C55E",
    tint: "#F0FDF4",
    value: "$10,450",
    count: 11,
    statuses: ["paid $497", "paid $997", "paid $297"],
    badge: { label: "Won", kind: "won" },
  },
  {
    id: "onboarding",
    title: "Onboarding",
    accent: "#0EA5E9",
    tint: "#F0F9FF",
    value: "$4,000",
    count: 5,
    statuses: ["onboarding", "kickoff scheduled", "welcome sent"],
    badge: { label: "Onboarding", kind: "onboarding" },
  },
  {
    id: "referral",
    title: "Repeat / Referral",
    accent: "#F59E0B",
    tint: "#FFFBEB",
    value: "$6,000",
    count: 6,
    statuses: ["repeat buyer", "referred a friend", "left a review"],
    badge: { label: "Repeat", kind: "repeat" },
  },
];

export const LAST_STAGE = BOARD_COLUMNS.length - 1;

/** Names cycled through the pipeline as new leads arrive. */
export const LEAD_NAMES = [
  "Sarah M.",
  "Alex T.",
  "James K.",
  "Jordan P.",
  "Mia R.",
  "Chris L.",
  "Taylor W.",
  "Sam D.",
  "Priya S.",
  "David B.",
  "Olivia C.",
  "Ashley J.",
  "Kevin R.",
  "Daniel M.",
  "Sophie L.",
  "Laura G.",
  "Michael P.",
  "Emma W.",
  "Noah B.",
  "Chloe H.",
] as const;

/** Relative time labels per stage — later stages feel "older". */
export const STAGE_TIME: string[] = [
  "2m ago",
  "18m ago",
  "1h ago",
  "45m ago",
  "2h ago",
  "1d ago",
  "2d ago",
];

export type BoardCard = {
  id: string;
  name: string;
  stage: number;
  status: string;
  time: string;
};

/** Deterministic avatar color from a name. */
const AVATAR_COLORS = [
  ["#f9a8d4", "#f472b6"],
  ["#fcd34d", "#fb923c"],
  ["#7dd3fc", "#38bdf8"],
  ["#c4b5fd", "#a78bfa"],
  ["#86efac", "#4ade80"],
  ["#fca5a5", "#f87171"],
  ["#a5b4fc", "#818cf8"],
  ["#5eead4", "#2dd4bf"],
] as const;

export function avatarFor(name: string): { from: string; to: string; initials: string } {
  const code = name.split("").reduce((sum, c) => sum + c.charCodeAt(0), 0);
  const [from, to] = AVATAR_COLORS[code % AVATAR_COLORS.length]!;
  const initials = name
    .split(/[\s.]+/)
    .filter(Boolean)
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
  return { from, to, initials };
}

export function statusForStage(stage: number, seed: number): string {
  const list = BOARD_COLUMNS[stage].statuses;
  return list[seed % list.length]!;
}

/** Referral column alternates between Repeat and Referral badges. */
export function badgeForStage(stage: number, seed: number): StageBadge | undefined {
  const col = BOARD_COLUMNS[stage];
  if (!col.badge) return undefined;
  if (col.id === "referral") {
    return seed % 2 === 0
      ? { label: "Repeat", kind: "repeat" }
      : { label: "Referral", kind: "referral" };
  }
  return col.badge;
}

/** Seed cards spread across every stage so the board looks alive on load. */
export const INITIAL_CARDS: BoardCard[] = [
  { id: "c1", name: "Sarah M.", stage: 0, status: 'commented "Price?"', time: "2m ago" },
  { id: "c2", name: "Alex T.", stage: 0, status: "new follower", time: "3m ago" },
  { id: "c3", name: "James K.", stage: 0, status: "replied to story", time: "5m ago" },
  { id: "c4", name: "Jordan P.", stage: 1, status: "asked about coaching", time: "18m ago" },
  { id: "c5", name: "Mia R.", stage: 1, status: "product question", time: "18m ago" },
  { id: "c6", name: "Chris L.", stage: 1, status: "interested in course", time: "22m ago" },
  { id: "c7", name: "Taylor W.", stage: 2, status: "budget confirmed", time: "1h ago" },
  { id: "c8", name: "Sam D.", stage: 2, status: "ready for details", time: "2h ago" },
  { id: "c9", name: "Priya S.", stage: 2, status: "call booked", time: "3h ago" },
  { id: "c10", name: "David B.", stage: 3, status: "checkout sent", time: "45m ago" },
  { id: "c11", name: "Olivia C.", stage: 3, status: "waiting for payment", time: "1h ago" },
  { id: "c12", name: "Ashley J.", stage: 4, status: "paid $497", time: "2h ago" },
  { id: "c13", name: "Kevin R.", stage: 4, status: "paid $997", time: "2h ago" },
  { id: "c14", name: "Daniel M.", stage: 5, status: "onboarding", time: "1d ago" },
  { id: "c15", name: "Sophie L.", stage: 5, status: "welcome sent", time: "1d ago" },
  { id: "c16", name: "Laura G.", stage: 6, status: "repeat buyer", time: "2d ago" },
  { id: "c17", name: "Michael P.", stage: 6, status: "referred a friend", time: "3d ago" },
];

export const BOARD_STATS = {
  activeOpportunities: 57,
  pipelineValue: 42600,
  wonCustomers: 23,
  revenueThisMonth: 18450,
  tasksDue: 3,
};

export const TICK_MS = 2200;
