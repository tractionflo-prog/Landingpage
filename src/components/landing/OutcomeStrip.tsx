type OutcomeItem = { v: string; l: string };

type OutcomeStripProps = {
  items: OutcomeItem[];
  /** Use in side-by-side sections where the strip sits in a half-width column. */
  layout?: "wide" | "narrow";
};

export function OutcomeStrip({ items, layout = "wide" }: OutcomeStripProps) {
  return (
    <ul
      className={`lp-outcome-strip${layout === "narrow" ? " lp-outcome-strip--narrow" : ""}`}
      aria-label="Outcomes"
    >
      {items.map((item) => (
        <li key={item.l}>
          <span className="lp-outcome-v">{item.v}</span>
          <span className="lp-outcome-l">{item.l}</span>
        </li>
      ))}
    </ul>
  );
}
