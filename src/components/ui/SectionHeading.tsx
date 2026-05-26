type SectionHeadingProps = {
  children: React.ReactNode;
  className?: string;
  align?: "center" | "left";
};

export function SectionHeading({
  children,
  className = "",
  align = "center",
}: SectionHeadingProps) {
  return (
    <h2
      className={`section-heading ${align === "center" ? "mx-auto text-center" : ""} ${className}`}
    >
      {children}
    </h2>
  );
}
