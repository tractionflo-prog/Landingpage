import { Inbox, Flame, CreditCard, Users, Check } from "lucide-react";

const MODULES = [
  { name: "Inbox", note: "Every conversation, prioritized", Icon: Inbox },
  { name: "Opportunities", note: "Buyers surfaced daily", Icon: Flame },
  { name: "Payments", note: "Get paid in the chat", Icon: CreditCard },
  { name: "Customers", note: "Re-engage and resell", Icon: Users },
];

export function OnePlatform() {
  return (
    <div className="h-[280px] w-full sm:h-[300px]">
      <div className="flex h-full flex-col rounded-[12px] border border-[#0073EA]/30 bg-white p-4 shadow-[0_4px_16px_rgba(0,115,234,0.12)]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-[8px] bg-[#0073EA] text-[11px] font-bold text-white">
              TF
            </span>
            <span className="text-[13px] font-bold tracking-[-0.01em] text-[#111]">TractionFlo</span>
          </div>
          <span className="rounded-full bg-[#EFF6FF] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-[#0060C7]">
            1 login
          </span>
        </div>

        {/* connected rail */}
        <ul className="relative mt-4 flex-1">
          <span className="absolute bottom-3 left-[15px] top-3 w-px bg-[#d7ec9a]" aria-hidden />
          {MODULES.map((m) => {
            const { Icon } = m;
            return (
              <li key={m.name} className="relative flex items-center gap-3 py-[7px]">
                <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#EFF6FF] text-[#0060C7] ring-4 ring-white">
                  <Icon size={15} strokeWidth={2} />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[13px] font-bold leading-tight text-[#111]">{m.name}</p>
                  <p className="truncate text-[11px] text-[#888]">{m.note}</p>
                </div>
                <Check size={15} className="shrink-0 text-[#0060C7]" strokeWidth={3} />
              </li>
            );
          })}
        </ul>

        <p className="mt-2 rounded-[10px] bg-[#111] px-3 py-2 text-center text-[11.5px] font-semibold text-white">
          Hello → reply → paid → resell. One place.
        </p>
      </div>
    </div>
  );
}
