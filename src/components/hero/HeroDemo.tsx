"use client";

import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Flame, MessageCircle, Sparkles } from "lucide-react";
import {
  HERO_DEMO_HANDNOTE,
  HERO_DEMO_STATS,
  MESSAGE_PEOPLE,
  SUGGESTED_REPLY,
} from "@/lib/heroDemo";

type Phase = "reveal" | "focus" | "reply" | "stats";

export function HeroDemo() {
  const [phase, setPhase] = useState<Phase>("reveal");
  const [visible, setVisible] = useState(0);
  const [reply, setReply] = useState("");
  const [key, setKey] = useState(0);

  const reset = useCallback(() => {
    setPhase("reveal");
    setVisible(0);
    setReply("");
    setKey((k) => k + 1);
  }, []);

  useEffect(() => {
    const t = setTimeout(reset, 10000);
    return () => clearTimeout(t);
  }, [key, reset]);

  useEffect(() => {
    if (phase !== "reveal") return;
    if (visible >= MESSAGE_PEOPLE.length) {
      return void setTimeout(() => setPhase("focus"), 400);
    }
    const t = setTimeout(() => setVisible((v) => v + 1), 280);
    return () => clearTimeout(t);
  }, [phase, visible]);

  useEffect(() => {
    if (phase !== "focus") return;
    const t = setTimeout(() => setPhase("reply"), 600);
    return () => clearTimeout(t);
  }, [phase]);

  useEffect(() => {
    if (phase !== "reply") return;
    if (reply.length >= SUGGESTED_REPLY.length) {
      return void setTimeout(() => setPhase("stats"), 500);
    }
    const t = setTimeout(() => setReply(SUGGESTED_REPLY.slice(0, reply.length + 1)), 36);
    return () => clearTimeout(t);
  }, [phase, reply]);

  return (
    <div className="relative">
      <div className="card p-6 md:p-7">
        <div className="mb-4 flex items-center justify-between gap-3">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#999]">
              Today&apos;s opportunities
            </p>
            <p className="mt-1 text-[15px] font-bold text-[#111]">
              People you should message
            </p>
          </div>
          <span className="flex items-center gap-1 rounded-full bg-[#f4fce0] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-[#4d7c0f]">
            <Flame size={12} />
            {visible} warm
          </span>
        </div>

        <ul className="space-y-2">
          {MESSAGE_PEOPLE.map((person, i) => {
            const shown = i < visible;
            const focused = phase !== "reveal" && i === 0 && shown;
            return (
              <motion.li
                key={person.handle}
                className={`flex items-center gap-3 rounded-[12px] border px-3 py-2.5 transition-colors ${
                  focused
                    ? "border-[#bef227]/70 bg-[#f4fce0]/40"
                    : "border-black/[0.06] bg-[#fafafa]"
                }`}
                initial={{ opacity: 0, y: 8 }}
                animate={shown ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className="h-9 w-9 shrink-0 rounded-full border-2 border-white shadow-sm"
                  style={{ background: person.avatar }}
                />
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-1">
                    <p className="text-[13px] font-bold text-[#111]">@{person.handle}</p>
                    <span
                      className={`rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide ${person.badgeClass}`}
                    >
                      {person.badge}
                    </span>
                  </div>
                  <p className="mt-0.5 flex items-center gap-1 text-[12px] text-[#666]">
                    {person.badge === "High intent" ? (
                      <Sparkles size={12} className="shrink-0 text-[#8ab800]" />
                    ) : (
                      <MessageCircle size={12} className="shrink-0 text-[#999]" />
                    )}
                    {person.signal}
                  </p>
                </div>
              </motion.li>
            );
          })}
        </ul>

        {(phase === "focus" || phase === "reply" || phase === "stats") && (
          <motion.div
            className="mt-4 rounded-[14px] border border-black/[0.07] bg-white p-3"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#999]">
              Suggested reply · @{MESSAGE_PEOPLE[0].handle}
            </p>
            <p className="mt-2 min-h-[2.5rem] text-[14px] leading-relaxed text-[#111]">
              {reply}
              {phase === "reply" && reply.length < SUGGESTED_REPLY.length && (
                <motion.span
                  className="ml-0.5 inline-block h-[1em] w-px bg-[#111]"
                  animate={{ opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.7 }}
                />
              )}
            </p>
          </motion.div>
        )}

        {phase === "stats" && (
          <motion.div
            className="mt-4 grid grid-cols-3 gap-2 rounded-[14px] bg-[#f7f7f7] px-2 py-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {HERO_DEMO_STATS.map(({ n, label }) => (
              <div key={label} className="text-center">
                <p className="text-[22px] font-bold leading-none tracking-tight text-[#111]">{n}</p>
                <p className="mt-1 text-[10px] leading-tight text-[#888] md:text-[11px]">{label}</p>
              </div>
            ))}
          </motion.div>
        )}
      </div>

      {phase === "stats" && (
        <p className="font-hand absolute -bottom-8 right-0 text-right md:-bottom-6">
          {HERO_DEMO_HANDNOTE}
        </p>
      )}
    </div>
  );
}
