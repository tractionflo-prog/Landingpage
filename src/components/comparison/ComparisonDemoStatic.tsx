"use client";

import { Send, Check } from "lucide-react";
import { HandAnnotation } from "@/components/ui/HandAnnotation";

const INPUT = "Show me followers ready to buy";
const STEPS = [
  "Describe your goal",
  "Identify warm followers",
  "Automated follow-up",
  "Simple and fast",
];

/** Static comparison demo for mobile — no typing animation. */
export function ComparisonDemoStatic() {
  return (
    <div className="relative h-full">
      <span className="mb-3 inline-block rounded-full bg-[#bef227] px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-[#111]">
        TractionFlo
      </span>
      <div className="card h-full p-5">
        <div className="flex gap-3 rounded-[14px] border border-black/[0.07] bg-[#fafafa] px-4 py-3">
          <p className="flex-1 text-[14px] leading-relaxed">{INPUT}</p>
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#111] text-white">
            <Send size={16} />
          </div>
        </div>
        <ul className="mt-5 space-y-2.5">
          {STEPS.map((s) => (
            <li key={s} className="flex items-center gap-2.5 text-[14px]">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#bef227]">
                <Check size={12} strokeWidth={3} />
              </span>
              {s}
            </li>
          ))}
        </ul>
        <HandAnnotation className="mt-6">Know who to message. Close faster. →</HandAnnotation>
      </div>
    </div>
  );
}
