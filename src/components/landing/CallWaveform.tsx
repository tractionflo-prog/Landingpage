"use client";

import { useEffect, useState } from "react";

/**
 * Self-contained, JS-driven call waveform. Isolated so only this element
 * re-renders on each tick, and it stays alive regardless of CSS
 * reduced-motion gating (this is the core product demo).
 */
export function CallWaveform({ active, bars = 30 }: { active: boolean; bars?: number }) {
  const [t, setT] = useState(0);

  useEffect(() => {
    if (!active) return;
    const id = window.setInterval(() => setT((v) => v + 1), 120);
    return () => window.clearInterval(id);
  }, [active]);

  return (
    <div className="lp-call-wave" aria-hidden>
      {Array.from({ length: bars }).map((_, i) => {
        const wave =
          Math.abs(Math.sin(i * 0.6 + t * 0.5)) * 0.7 +
          Math.abs(Math.sin(i * 0.27 + t * 0.33)) * 0.3;
        const h = active ? 0.18 + wave * 0.82 : 0.12;
        return (
          <span
            key={i}
            className="lp-call-bar"
            style={{ height: `calc(4px + ${h.toFixed(3)} * 32px)`, transform: "none" }}
          />
        );
      })}
    </div>
  );
}
