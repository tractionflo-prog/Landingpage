"use client";

import { ArrowRight } from "lucide-react";
import { conversionCopy } from "@/lib/conversion";
import { useQuiz } from "./QuizProvider";

type Variant = "default" | "pillDark" | "ghost";

type QuizTriggerProps = {
  size?: "md" | "lg";
  /** Presentation only — behavior (opening the signup) is unchanged. */
  variant?: Variant;
  className?: string;
  children?: React.ReactNode;
  showArrow?: boolean;
};

const variantClass = (variant: Variant, size: "md" | "lg") => {
  if (variant === "pillDark") return `lp-btn lp-btn--dark${size === "lg" ? " lp-btn--lg" : ""}`;
  if (variant === "ghost") return `lp-btn lp-btn--ghost${size === "lg" ? " lp-btn--lg" : ""}`;
  return `btn-lime ${size === "lg" ? "btn-lime-lg" : "btn-lime-md"}`;
};

export function QuizTrigger({
  size = "md",
  variant = "default",
  className = "",
  children = conversionCopy.primaryCta,
  showArrow = true,
}: QuizTriggerProps) {
  const { openQuiz } = useQuiz();

  return (
    <button
      type="button"
      onClick={openQuiz}
      className={`inline-flex items-center justify-center gap-2 ${variantClass(variant, size)} ${className}`}
    >
      {children}
      {showArrow && <ArrowRight className="h-4 w-4" />}
    </button>
  );
}
