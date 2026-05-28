"use client";

import {
  HelpCircle,
  Heart,
  Clock,
  UserX,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import { BrushHighlight } from "@/components/ui/BrushHighlight";
import { pageStory } from "@/lib/pageStory";

const steps = [
  { Icon: HelpCircle, label: "Question" },
  { Icon: Heart, label: "Interest" },
  { Icon: Clock, label: "Late reply" },
  { Icon: UserX, label: "Competitor" },
  { Icon: TrendingDown, label: "Revenue lost" },
];

export function Problem() {
  const { problem } = pageStory;

  return (
    <section id="problem" className="section-white" aria-labelledby="problem-heading">
      <div className="page-wrap">
        <p className="text-center text-[11px] font-bold uppercase tracking-[0.14em] text-[#999]">
          {problem.eyebrow}
        </p>
        <h2 id="problem-heading" className="t-section mx-auto mt-3 max-w-[720px] text-center">
          Every missed DM is{" "}
          <BrushHighlight>missed revenue.</BrushHighlight>
        </h2>
        <p className="mx-auto mt-4 max-w-[520px] text-center text-[1.0625rem] leading-relaxed text-[#666]">
          {problem.subhead}
        </p>

        <div className="problem-flow mt-12 sm:mt-14">
          {steps.map(({ Icon, label }) => (
            <div key={label} className="problem-icon-box">
              <div className="problem-icon-inner">
                <Icon size={28} strokeWidth={1.4} className="text-[#333]" />
              </div>
              <p className="text-center text-[13px] font-medium leading-snug text-[#333] md:text-[14px]">
                {label}
              </p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-[560px] text-center text-[1.0625rem] font-semibold text-[#111] sm:mt-14">
          {problem.close}
        </p>

        <div className="mx-auto mt-8 flex max-w-[640px] items-start gap-3 rounded-[16px] border border-[#bef227]/40 bg-[#f4fce0]/50 px-5 py-4 sm:items-center sm:justify-center sm:text-center">
          <TrendingUp size={18} className="mt-0.5 shrink-0 text-[#4d7c0f] sm:mt-0" strokeWidth={2.2} />
          <p className="text-[14px] font-medium leading-relaxed text-[#333] sm:text-[15px]">
            {problem.roi}
          </p>
        </div>
      </div>
    </section>
  );
}
