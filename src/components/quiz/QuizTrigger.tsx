"use client";

import { ArrowRight } from "lucide-react";
import { useQuiz } from "./QuizProvider";

type QuizTriggerProps = {
  size?: "md" | "lg";
  className?: string;
  children?: React.ReactNode;
};

export function QuizTrigger({
  size = "md",
  className = "",
  children = "Join Founding Access",
}: QuizTriggerProps) {
  const { openQuiz } = useQuiz();

  return (
    <button
      type="button"
      onClick={openQuiz}
      className={`btn-lime inline-flex items-center justify-center gap-2 ${size === "lg" ? "btn-lime-lg" : "btn-lime-md"} ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4" />
    </button>
  );
}
