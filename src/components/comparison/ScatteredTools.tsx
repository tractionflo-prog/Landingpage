import { MessageCircle, Bot, Sheet, Link2, Clock } from "lucide-react";

const TOOLS = [
  { name: "DM app", Icon: MessageCircle, color: "#ec4899", pos: { top: "2%", left: "1%" }, rot: -5 },
  { name: "Bot builder", Icon: Bot, color: "#6366f1", pos: { top: "0%", left: "52%" }, rot: 5 },
  { name: "Leads sheet", Icon: Sheet, color: "#10b981", pos: { top: "38%", left: "27%" }, rot: -2 },
  { name: "Payment link", Icon: Link2, color: "#f59e0b", pos: { top: "64%", left: "2%" }, rot: 4 },
  { name: "Follow-ups", Icon: Clock, color: "#64748b", pos: { top: "66%", left: "53%" }, rot: -6 },
];

export function ScatteredTools() {
  return (
    <div className="relative h-[280px] w-full sm:h-[300px]">
      {/* broken connectors */}
      <svg viewBox="0 0 400 300" className="absolute inset-0 h-full w-full" aria-hidden>
        <g stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="5 4" fill="none">
          <path d="M70 60 C 130 110, 150 120, 190 150" />
          <path d="M300 60 C 270 110, 250 125, 220 150" />
          <path d="M190 195 C 150 230, 130 240, 90 250" />
          <path d="M250 195 C 270 225, 280 235, 300 250" />
        </g>
        {[
          [132, 108],
          [262, 110],
          [128, 232],
          [276, 226],
        ].map(([x, y], i) => (
          <g key={i} transform={`translate(${x} ${y})`}>
            <circle r="9" fill="#fef2f2" stroke="#fecaca" strokeWidth="1" />
            <path d="M-3.5 -3.5 L3.5 3.5 M3.5 -3.5 L-3.5 3.5" stroke="#ef4444" strokeWidth="1.6" strokeLinecap="round" />
          </g>
        ))}
      </svg>

      {/* tool cards */}
      {TOOLS.map((t) => {
        const { Icon } = t;
        return (
          <div
            key={t.name}
            className="absolute w-[132px] rounded-[13px] border border-black/[0.08] bg-white px-3 py-2.5 shadow-[0_6px_18px_-8px_rgba(0,0,0,0.18)]"
            style={{ ...t.pos, transform: `rotate(${t.rot}deg)` }}
          >
            <div className="flex items-center gap-2">
              <span
                className="flex h-6 w-6 shrink-0 items-center justify-center rounded-[7px]"
                style={{ background: `${t.color}1a`, color: t.color }}
              >
                <Icon size={13} strokeWidth={2} />
              </span>
              <span className="text-[12.5px] font-bold text-[#333]">{t.name}</span>
            </div>
            <p className="mt-1.5 text-[10px] text-[#aaa]">own login · own bill</p>
          </div>
        );
      })}
    </div>
  );
}
