import { QuizTrigger } from "@/components/quiz/QuizTrigger";
import { conversionCopy } from "@/lib/conversion";

type SignupBlockProps = {
  size?: "md" | "lg";
  align?: "center" | "left";
  className?: string;
  children?: React.ReactNode;
  showRisk?: boolean;
};

export function SignupBlock({
  size = "md",
  align = "center",
  className = "",
  children,
  showRisk = true,
}: SignupBlockProps) {
  return (
    <div className={`lp-signup-block lp-signup-block--${align} ${className}`.trim()}>
      <QuizTrigger size={size} variant="pillDark" showArrow={size === "lg"}>
        {children ?? conversionCopy.primaryCta}
      </QuizTrigger>
      {showRisk && <p className="lp-signup-risk">{conversionCopy.riskReversal}</p>}
    </div>
  );
}
