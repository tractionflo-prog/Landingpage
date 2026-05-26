"use client";

import { QuizProvider } from "@/components/quiz/QuizProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return <QuizProvider>{children}</QuizProvider>;
}
