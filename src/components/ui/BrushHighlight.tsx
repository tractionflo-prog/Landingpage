export function BrushHighlight({ children }: { children: React.ReactNode }) {
  return (
    <span className="brush-wrap">
      {children}
      <svg
        className="brush-svg"
        viewBox="0 0 200 24"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d="M2 18 C30 8, 50 22, 80 14 S130 6, 198 16 L198 22 L2 22 Z"
          fill="#bef227"
          opacity="0.95"
        />
      </svg>
    </span>
  );
}
