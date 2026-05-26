type SectionHeadingProps = {
  children: React.ReactNode;
  className?: string;
  align?: "center" | "left";
  id?: string;
};

export function SectionHeading({
  children,
  className = "",
  align = "center",
  id,
}: SectionHeadingProps) {
  return (
    <h2
      id={id}
      className={`section-heading ${align === "center" ? "mx-auto text-center" : ""} ${className}`}
    >
      {children}
    </h2>
  );
}
