"use client";

import { QuizProvider } from "@/components/quiz/QuizProvider";
import { MotionProvider } from "@/components/MotionProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MotionProvider>
      <QuizProvider>{children}</QuizProvider>
    </MotionProvider>
  );
}
