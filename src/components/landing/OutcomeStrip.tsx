type OutcomeItem = { v: string; l: string };

export function OutcomeStrip({ items }: { items: OutcomeItem[] }) {
  return (
    <ul className="lp-outcome-strip" aria-label="Outcomes">
      {items.map((item) => (
        <li key={item.l}>
          <span className="lp-outcome-v">{item.v}</span>
          <span className="lp-outcome-l">{item.l}</span>
        </li>
      ))}
    </ul>
  );
}
