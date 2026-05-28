export type QuizQuestion = {
  id: string;
  question: string;
  options: { value: string; label: string }[];
};

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: "business_type",
    question: "What best describes you?",
    options: [
      { value: "creator", label: "Creator / influencer" },
      { value: "coach", label: "Coach or consultant" },
      { value: "agency", label: "Agency or freelancer" },
      { value: "ecommerce", label: "E-commerce / brand" },
      { value: "other", label: "Other" },
    ],
  },
  {
    id: "biggest_challenge",
    question: "What's costing you the most sales right now?",
    options: [
      { value: "slow_replies", label: "I reply too slow — buyers go cold" },
      { value: "no_followup", label: "I don't know who to message first" },
      { value: "losing_leads", label: "I miss DMs and lose ready buyers" },
      { value: "manual_work", label: "I live in my inbox but still miss people" },
      { value: "cant_scale", label: "I can't keep up as volume grows" },
    ],
  },
  {
    id: "weekly_volume",
    question: "How many comments or DMs do you get per week?",
    options: [
      { value: "under_50", label: "Under 50" },
      { value: "50_200", label: "50 – 200" },
      { value: "200_500", label: "200 – 500" },
      { value: "500_plus", label: "500+" },
    ],
  },
  {
    id: "primary_platform",
    question: "Where do most buyers find you?",
    options: [
      { value: "instagram", label: "Instagram" },
      { value: "tiktok", label: "TikTok" },
      { value: "youtube", label: "YouTube" },
      { value: "multiple", label: "Multiple platforms" },
    ],
  },
  {
    id: "primary_goal",
    question: "If TractionFlo worked perfectly, what would change first?",
    options: [
      { value: "more_leads", label: "I'd catch every warm lead" },
      { value: "more_sales", label: "I'd close more from my DMs" },
      { value: "save_time", label: "I'd spend less time guessing who to message" },
      { value: "all", label: "All of the above" },
    ],
  },
];

export function formatAnswerLabel(
  questionId: string,
  value: string
): string {
  const q = QUIZ_QUESTIONS.find((item) => item.id === questionId);
  return q?.options.find((o) => o.value === value)?.label ?? value;
}
