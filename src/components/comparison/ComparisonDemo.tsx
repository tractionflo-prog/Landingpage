"use client";

import { useCallback, useEffect, useState } from "react";
import { Send, Check } from "lucide-react";
import { HandAnnotation } from "@/components/ui/HandAnnotation";

const INPUT = "When someone comments GUIDE send my PDF and follow up tomorrow";
const STEPS = [
  "Trigger connected",
  "PDF attached",
  "FAQ enabled",
  "Follow-up scheduled",
  "Lead tracking enabled",
  "Done.",
];

export function ComparisonDemo() {
  const [typed, setTyped] = useState("");
  const [done, setDone] = useState(0);
  const [started, setStarted] = useState(false);

  const run = useCallback(() => {
    setTyped("");
    setDone(0);
    setStarted(true);
  }, []);

  useEffect(() => {
    const el = document.getElementById("tf-way");
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && !started && run(),
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [started, run]);

  useEffect(() => {
    if (!started) return;
    if (typed.length < INPUT.length) {
      const t = setTimeout(() => setTyped(INPUT.slice(0, typed.length + 1)), 30);
      return () => clearTimeout(t);
    }
    if (done < STEPS.length) {
      const t = setTimeout(() => setDone((d) => d + 1), 350);
      return () => clearTimeout(t);
    }
  }, [started, typed, done]);

  return (
    <div id="tf-way" className="relative h-full">
      <span className="mb-3 inline-block rounded-full bg-[#bef227] px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-[#111]">
        The TractionFlo way
      </span>
      <div className="card h-full p-6">
        <div className="flex gap-3 rounded-[14px] border border-black/[0.07] bg-[#fafafa] px-4 py-3">
          <p className="flex-1 text-[14px] leading-relaxed">
            {typed}
            {typed.length < INPUT.length && started && (
              <span className="inline-block h-4 w-px animate-pulse bg-[#111]" />
            )}
          </p>
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#111] text-white">
            <Send size={16} />
          </div>
        </div>
        <ul className="mt-5 space-y-2.5">
          {STEPS.map((s, i) => (
            <li
              key={s}
              className="flex items-center gap-2.5 text-[14px]"
              style={{ opacity: i < done ? 1 : 0.2 }}
            >
              <span
                className={`flex h-5 w-5 items-center justify-center rounded-full ${
                  i < done ? "bg-[#bef227]" : "bg-black/[0.06]"
                }`}
              >
                {i < done && <Check size={12} strokeWidth={3} />}
              </span>
              {s}
            </li>
          ))}
        </ul>
      </div>
      {done >= STEPS.length && (
        <HandAnnotation className="mt-4 md:absolute md:-bottom-1 md:right-0">
          Describe your goal.
          <br />
          We build the workflow.
        </HandAnnotation>
      )}
    </div>
  );
}
