export type QuizQuestion = {
  id: string;
  question: string;
  options: { value: string; label: string }[];
};

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: "business_type",
    question: "What best describes your business?",
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
    question: "What's your biggest growth bottleneck right now?",
    options: [
      { value: "slow_replies", label: "I reply to DMs too slowly" },
      { value: "no_followup", label: "No follow-up system" },
      { value: "losing_leads", label: "Leads go cold and disappear" },
      { value: "manual_work", label: "Too much manual DM work" },
      { value: "cant_scale", label: "Can't scale without hiring" },
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
    question: "Where do most of your conversations happen?",
    options: [
      { value: "instagram", label: "Instagram" },
      { value: "tiktok", label: "TikTok" },
      { value: "youtube", label: "YouTube" },
      { value: "multiple", label: "Multiple platforms" },
    ],
  },
  {
    id: "primary_goal",
    question: "What would help you most in the next 90 days?",
    options: [
      { value: "more_leads", label: "Capture more leads" },
      { value: "more_sales", label: "Close more sales" },
      { value: "save_time", label: "Save hours every week" },
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
