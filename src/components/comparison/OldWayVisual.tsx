/** Stylized automation-builder canvas — messy nodes + crossing wires. */
export function OldWayVisual() {
  return (
    <div className="relative mb-5 overflow-hidden rounded-[14px] border border-[#e0e0e0] bg-[#f0f0f2]">
      {/* faux app chrome */}
      <div className="flex items-center gap-1.5 border-b border-[#e0e0e0] bg-[#fafafa] px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
        <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
        <span className="h-2 w-2 rounded-full bg-[#28c840]" />
        <span className="ml-2 text-[10px] font-medium text-[#999]">Automation builder</span>
      </div>

      <div className="relative h-[200px] md:h-[220px]">
        <svg
          viewBox="0 0 400 220"
          className="h-full w-full"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden
        >
          <defs>
            <pattern id="dots" width="16" height="16" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="0.8" fill="#d4d4d8" />
            </pattern>
            <marker id="arrowGrey" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
              <path d="M0,0 L8,4 L0,8 Z" fill="#94a3b8" />
            </marker>
            <filter id="nodeShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="1" stdDeviation="2" floodOpacity="0.12" />
            </filter>
          </defs>

          {/* canvas */}
          <rect width="400" height="220" fill="url(#dots)" />

          {/* crossing wires — bezier curves */}
          <g fill="none" strokeWidth="1.5" markerEnd="url(#arrowGrey)">
            <path d="M 95 72 C 130 72, 130 48, 168 48" stroke="#94a3b8" />
            <path d="M 95 72 C 120 90, 140 100, 168 108" stroke="#a8b4c4" />
            <path d="M 95 72 C 80 100, 70 120, 58 138" stroke="#94a3b8" strokeDasharray="4 3" />
            <path d="M 232 48 C 260 48, 270 70, 298 78" stroke="#94a3b8" />
            <path d="M 232 108 C 250 108, 265 95, 298 78" stroke="#b0bac7" />
            <path d="M 232 108 C 255 130, 280 150, 310 162" stroke="#94a3b8" />
            <path d="M 168 108 C 195 130, 210 150, 232 168" stroke="#a8b4c4" />
            <path d="M 58 138 C 90 155, 130 168, 168 168" stroke="#94a3b8" />
            <path d="M 298 78 C 320 60, 340 45, 358 38" stroke="#b0bac7" />
            <path d="M 310 162 C 335 162, 350 150, 358 130" stroke="#94a3b8" strokeDasharray="4 3" />
            <path d="M 168 48 C 200 30, 220 25, 232 48" stroke="#c4cdd8" opacity="0.8" />
          </g>

          {/* nodes */}
          <Node x={28} y={52} w={68} h={40} label="Trigger" sub="New comment" accent="#3b82f6" />
          <Node x={148} y={28} w={72} h={40} label="IF" sub="keyword = ?" accent="#f59e0b" />
          <Node x={148} y={88} w={72} h={40} label="Delay" sub="Wait 2 hours" accent="#8b5cf6" />
          <Node x={268} y={58} w={68} h={40} label="Send DM" sub="Template #4" accent="#10b981" />
          <Node x={28} y={118} w={68} h={40} label="Filter" sub="3 conditions" accent="#f59e0b" />
          <Node x={148} y={148} w={72} h={40} label="Branch" sub="A / B / C" accent="#ef4444" />
          <Node x={268} y={142} w={68} h={40} label="Webhook" sub="POST /api" accent="#6366f1" />
          <Node x={318} y={22} w={62} h={32} label="Error" sub="!" accent="#ef4444" small />
          <Node x={318} y={118} w={62} h={32} label="Retry" sub="×3" accent="#64748b" small />

          {/* error badge */}
          <g transform="translate(198, 128)">
            <circle r="10" fill="#fef2f2" stroke="#fecaca" strokeWidth="1" />
            <text x="0" y="4" textAnchor="middle" fontSize="11" fill="#ef4444" fontWeight="bold">
              !
            </text>
          </g>
        </svg>

        {/* overwhelm overlay — slight blur + fade like mockup */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/40" />
        <div
          className="pointer-events-none absolute inset-0 backdrop-blur-[0.5px]"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.55) 100%)",
          }}
        />
      </div>
    </div>
  );
}

function Node({
  x,
  y,
  w,
  h,
  label,
  sub,
  accent,
  small,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  sub: string;
  accent: string;
  small?: boolean;
}) {
  const r = small ? 6 : 8;
  const fontSize = small ? 9 : 10;
  const subSize = small ? 7.5 : 8;

  return (
    <g filter="url(#nodeShadow)">
      <rect x={x} y={y} width={w} height={h} rx={r} fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
      <rect x={x + 1} y={y + 6} width={3} height={h - 12} rx={1.5} fill={accent} />
      <text x={x + 11} y={y + (small ? 14 : 16)} fontSize={fontSize} fontWeight="600" fill="#1e293b">
        {label}
      </text>
      <text x={x + 11} y={y + (small ? 24 : 28)} fontSize={subSize} fill="#94a3b8">
        {sub}
      </text>
      <circle cx={x + w} cy={y + h / 2} r={3.5} fill="#fff" stroke="#cbd5e1" strokeWidth="1.2" />
      <circle cx={x} cy={y + h / 2} r={3.5} fill="#fff" stroke="#cbd5e1" strokeWidth="1.2" />
    </g>
  );
}
