type LogoProps = {
  /** Pixel size of the square mark. */
  size?: number;
  /** "outline" for light backgrounds, "solid" for dark/app-icon contexts. */
  variant?: "outline" | "solid";
  className?: string;
  title?: string;
};

const ACCENT = "#FF5A1F";

/** TractionFlo brand mark: rounded square, bold "T", orange accent dot. */
export function Logo({ size = 36, variant = "outline", className, title = "TractionFlo" }: LogoProps) {
  const solid = variant === "solid";
  const stroke = solid ? "#ffffff" : "#0A0A0A";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      role="img"
      aria-label={title}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {solid ? (
        <rect x="4" y="4" width="92" height="92" rx="22" fill="#0A0A0A" />
      ) : (
        <rect x="6" y="6" width="88" height="88" rx="22" stroke={stroke} strokeWidth="7" />
      )}
      <path d="M33 40 H67" stroke={stroke} strokeWidth="9" strokeLinecap="round" />
      <path d="M50 40 V66" stroke={stroke} strokeWidth="9" strokeLinecap="round" />
      <circle cx="65" cy="63" r="6" fill={ACCENT} />
    </svg>
  );
}
