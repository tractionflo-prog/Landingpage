import { HEADLINE_GRADIENT } from "@/lib/accents";

export function GradientText({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`bg-clip-text text-transparent ${className}`}
      style={{ backgroundImage: HEADLINE_GRADIENT, WebkitTextFillColor: "transparent" }}
    >
      {children}
    </span>
  );
}
