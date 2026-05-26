"use client";

import {
  MessageCircle,
  Send,
  HelpCircle,
  Clock,
  User,
  ArrowDown,
} from "lucide-react";
import { BrushHighlight } from "@/components/ui/BrushHighlight";

const steps = [
  { Icon: MessageCircle, label: "People comment" },
  { Icon: Send, label: "People DM" },
  { Icon: HelpCircle, label: "People ask pricing" },
  { Icon: Clock, label: "You reply late" },
  { Icon: User, label: "They disappear" },
  { Icon: ArrowDown, label: "Revenue lost" },
];

export function Problem() {
  return (
    <section id="problem" className="section-grey" aria-labelledby="problem-heading">
      <div className="page-wrap">
        <h2 id="problem-heading" className="t-section mx-auto max-w-[720px] text-center">
          You&apos;re losing growth opportunities{" "}
          <BrushHighlight>every day.</BrushHighlight>
        </h2>

        <div className="problem-flow mt-14">
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

        <div className="mt-14 text-center">
          <p className="t-body">Most businesses don&apos;t have a traffic problem.</p>
          <p className="mt-2 text-[1.125rem] font-semibold text-[#111] md:text-[1.25rem]">
            They have a <span className="text-highlight">follow-up and system</span> problem.
          </p>
        </div>
      </div>
    </section>
  );
}
