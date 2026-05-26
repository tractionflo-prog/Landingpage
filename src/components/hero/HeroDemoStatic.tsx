"use client";

import { Send, Check, Users, MessageCircle, Flame } from "lucide-react";

const ITEMS = [
  "Capture GUIDE comments",
  "Answer pricing questions instantly",
  "Follow up tomorrow",
  "Track warm leads",
  "Re-engage silent leads",
  "Suggest next actions to grow revenue",
];

/** Static hero demo for mobile — no typing, progress, or loop animations. */
export function HeroDemoStatic() {
  return (
    <div className="relative">
      <div className="card p-5">
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-[#999]">You</p>
        <div className="mb-5 flex items-center gap-3 rounded-[14px] border border-black/[0.07] bg-[#fafafa] px-4 py-3">
          <span className="flex-1 text-[15px] text-[#111]">Help me sell more coaching</span>
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#111] text-white">
            <Send size={16} />
          </div>
        </div>

        <div className="mb-5">
          <div className="mb-3 flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-[8px] bg-[#bef227] text-[10px] font-bold">
              TF
            </span>
            <span className="text-[14px] font-bold">TractionFlo</span>
            <span className="text-[14px] text-[#888]">Workflow ready</span>
          </div>
          <div className="h-[10px] overflow-hidden rounded-full bg-black/[0.06]">
            <div className="h-full w-full rounded-full bg-[#bef227]" />
          </div>
        </div>

        <ul className="mb-5 space-y-[10px]">
          {ITEMS.map((item) => (
            <li key={item} className="flex items-center gap-2.5 text-[14px]">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#bef227]">
                <Check size={12} strokeWidth={3} />
              </span>
              {item}
            </li>
          ))}
        </ul>

        <div className="grid grid-cols-3 gap-2 rounded-[14px] bg-[#f7f7f7] px-2 py-4">
          <Stat icon={<Users size={16} className="mx-auto text-[#8ab800]" />} n={43} label="Leads captured" />
          <Stat
            icon={<MessageCircle size={16} className="mx-auto text-[#888]" />}
            n={12}
            label="Pricing conversations"
          />
          <Stat icon={<Flame size={16} className="mx-auto text-[#f97316]" />} n={5} label="Warm leads today" />
        </div>
      </div>

      <p className="font-hand mt-4 text-right text-[1.1rem] text-[#6fa800]">Real results. Every day. →</p>
    </div>
  );
}

function Stat({ icon, n, label }: { icon: React.ReactNode; n: number; label: string }) {
  return (
    <div className="text-center">
      {icon}
      <p className="mt-1 text-[22px] font-bold leading-none tracking-tight">{n}</p>
      <p className="mt-1 text-[10px] leading-tight text-[#888]">{label}</p>
    </div>
  );
}
