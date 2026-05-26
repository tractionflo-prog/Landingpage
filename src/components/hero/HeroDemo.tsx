"use client";

import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Send, Check, Users, MessageCircle, Flame } from "lucide-react";

const MSG = "Help me sell more coaching";
const ITEMS = [
  "Capture GUIDE comments",
  "Answer pricing questions instantly",
  "Follow up tomorrow",
  "Track warm leads",
  "Re-engage silent leads",
  "Suggest next actions to grow revenue",
];
const PCTS = [15, 40, 70, 100];

export function HeroDemo() {
  const [phase, setPhase] = useState<"type" | "send" | "gen" | "list" | "stats">("type");
  const [text, setText] = useState("");
  const [pct, setPct] = useState(0);
  const [checks, setChecks] = useState(0);
  const [key, setKey] = useState(0);

  const reset = useCallback(() => {
    setPhase("type");
    setText("");
    setPct(0);
    setChecks(0);
    setKey((k) => k + 1);
  }, []);

  useEffect(() => {
    const t = setTimeout(reset, 10000);
    return () => clearTimeout(t);
  }, [key, reset]);

  useEffect(() => {
    if (phase !== "type") return;
    if (text.length >= MSG.length) {
      return void setTimeout(() => setPhase("send"), 350);
    }
    const t = setTimeout(() => setText(MSG.slice(0, text.length + 1)), 42);
    return () => clearTimeout(t);
  }, [phase, text]);

  useEffect(() => {
    if (phase !== "send") return;
    const t = setTimeout(() => setPhase("gen"), 450);
    return () => clearTimeout(t);
  }, [phase]);

  useEffect(() => {
    if (phase !== "gen") return;
    let i = 0;
    const go = () => {
      if (i >= PCTS.length) {
        setPhase("list");
        return;
      }
      setPct(PCTS[i++]);
      setTimeout(go, 500);
    };
    const t = setTimeout(go, 200);
    return () => clearTimeout(t);
  }, [phase, key]);

  useEffect(() => {
    if (phase !== "list") return;
    if (checks >= ITEMS.length) return void setTimeout(() => setPhase("stats"), 500);
    const t = setTimeout(() => setChecks((c) => c + 1), 240);
    return () => clearTimeout(t);
  }, [phase, checks]);

  return (
    <div className="relative">
      <div className="card p-6 md:p-7">
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-[#999]">You</p>
        <div className="mb-5 flex items-center gap-3 rounded-[14px] border border-black/[0.07] bg-[#fafafa] px-4 py-3">
          <span className="flex-1 text-[15px] text-[#111]">
            {text}
            {phase === "type" && (
              <motion.span
                className="ml-0.5 inline-block h-[1em] w-px bg-[#111]"
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.7 }}
              />
            )}
          </span>
          <motion.div
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#111] text-white"
            animate={phase === "send" ? { scale: [1, 0.9, 1] } : {}}
          >
            <Send size={16} />
          </motion.div>
        </div>

        {(phase === "gen" || phase === "list" || phase === "stats") && (
          <div className="mb-5">
            <div className="mb-3 flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-[8px] bg-[#bef227] text-[10px] font-bold">
                TF
              </span>
              <span className="text-[14px] font-bold">TractionFlo</span>
              <span className="text-[14px] text-[#888]">Generating your workflow...</span>
            </div>
            <div className="h-[10px] overflow-hidden rounded-full bg-black/[0.06]">
              <motion.div
                className="h-full rounded-full bg-[#bef227]"
                animate={{ width: `${pct}%` }}
                transition={{ duration: 0.4 }}
              />
            </div>
            <div className="mt-2 flex justify-between text-[11px] text-[#aaa]">
              {PCTS.map((p) => (
                <span key={p} className={pct >= p ? "font-semibold text-[#111]" : ""}>
                  {p}%
                </span>
              ))}
            </div>
          </div>
        )}

        {(phase === "list" || phase === "stats") && (
          <ul className="mb-5 space-y-[10px]">
            {ITEMS.map((item, i) => (
              <li
                key={item}
                className="flex items-center gap-2.5 text-[14px]"
                style={{ opacity: i < checks ? 1 : 0.25 }}
              >
                <span
                  className={`flex h-5 w-5 items-center justify-center rounded-full ${
                    i < checks ? "bg-[#bef227]" : "bg-black/[0.06]"
                  }`}
                >
                  {i < checks && <Check size={12} strokeWidth={3} />}
                </span>
                {item}
              </li>
            ))}
          </ul>
        )}

        {phase === "stats" && (
          <div className="grid grid-cols-3 gap-2 rounded-[14px] bg-[#f7f7f7] px-2 py-4">
            <Stat icon={<Users size={16} className="mx-auto text-[#8ab800]" />} n={43} label="Leads captured" />
            <Stat icon={<MessageCircle size={16} className="mx-auto text-[#888]" />} n={12} label="Pricing conversations" />
            <Stat icon={<Flame size={16} className="mx-auto text-[#f97316]" />} n={5} label="Warm leads today" />
          </div>
        )}
      </div>

      {phase === "stats" && (
        <p className="font-hand absolute -bottom-8 right-0 text-right md:-bottom-6">
          Real results. Every day. →
        </p>
      )}
    </div>
  );
}

function Stat({ icon, n, label }: { icon: React.ReactNode; n: number; label: string }) {
  return (
    <div className="text-center">
      {icon}
      <p className="mt-1 text-[22px] font-bold leading-none tracking-tight">{n}</p>
      <p className="mt-1 text-[10px] leading-tight text-[#888] md:text-[11px]">{label}</p>
    </div>
  );
}
