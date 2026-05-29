"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  Flame,
  Check,
  CalendarCheck,
  RefreshCw,
  Wifi,
  Signal,
  Sparkles,
  Zap,
} from "lucide-react";
import { HERO_SCENARIOS, type HeroOutcome, type HeroScenario } from "@/lib/heroDemo";

type Phase = "spot" | "compose" | "send" | "outcome";

const STEPS = ["Spot", "Personalize", "Close"] as const;
const stepOf: Record<Phase, number> = { spot: 0, compose: 1, send: 1, outcome: 2 };

function StatusBar() {
  return (
    <div className="flex shrink-0 items-end justify-between px-7 pb-1.5 pt-12 text-[#111]">
      <span className="text-[13px] font-semibold tracking-tight">9:41</span>
      <div className="flex items-center gap-1.5">
        <Signal size={14} strokeWidth={2.4} />
        <Wifi size={14} strokeWidth={2.4} />
        <span className="ml-0.5 flex h-3.5 w-6 items-center rounded-[3px] border border-[#111]/40 p-[1.5px]">
          <span className="h-full w-[70%] rounded-[1px] bg-[#111]" />
        </span>
      </div>
    </div>
  );
}

/** Renders the reply with the personalized phrase highlighted. */
function PersonalizedText({ s, dark }: { s: HeroScenario; dark?: boolean }) {
  const i = s.reply.indexOf(s.highlight);
  if (i === -1) return <>{s.reply}</>;
  const before = s.reply.slice(0, i);
  const after = s.reply.slice(i + s.highlight.length);
  return (
    <>
      {before}
      <span
        className={`rounded px-0.5 font-semibold ${
          dark ? "bg-[#bef227]/30 text-[#eaffb0]" : "bg-[#bef227]/45 text-[#111]"
        }`}
      >
        {s.highlight}
      </span>
      {after}
    </>
  );
}

function OutcomeBanner({ outcome }: { outcome: HeroOutcome }) {
  const Icon = outcome.kind === "booked" ? CalendarCheck : outcome.kind === "repeat" ? RefreshCw : Check;
  return (
    <motion.div
      className="flex items-center gap-2.5 rounded-[14px] bg-[#111] px-3.5 py-3 text-white"
      initial={{ opacity: 0, y: 10, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
    >
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#bef227] text-[#111]">
        <Icon size={15} strokeWidth={2.6} />
      </span>
      <p className="flex-1 text-[12.5px] font-bold leading-tight">{outcome.label}</p>
      {outcome.amount && <span className="text-[16px] font-bold tracking-tight">{outcome.amount}</span>}
    </motion.div>
  );
}

export function HeroPhone() {
  const [idx, setIdx] = useState(0);
  const [phase, setPhase] = useState<Phase>("spot");
  const [typed, setTyped] = useState("");

  const s = HERO_SCENARIOS[idx];

  useEffect(() => {
    if (phase !== "spot") return;
    const t = setTimeout(() => setPhase("compose"), s.incoming ? 1700 : 1300);
    return () => clearTimeout(t);
  }, [phase, s.incoming]);

  // TractionFlo writes a message personalized to this person
  useEffect(() => {
    if (phase !== "compose") return;
    if (typed.length >= s.reply.length) {
      const t = setTimeout(() => setPhase("send"), 700);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setTyped(s.reply.slice(0, typed.length + 1)), 26);
    return () => clearTimeout(t);
  }, [phase, typed, s.reply]);

  // sent automatically
  useEffect(() => {
    if (phase !== "send") return;
    const t = setTimeout(() => setPhase("outcome"), 900);
    return () => clearTimeout(t);
  }, [phase]);

  useEffect(() => {
    if (phase !== "outcome") return;
    const t = setTimeout(() => {
      setIdx((i) => (i + 1) % HERO_SCENARIOS.length);
      setTyped("");
      setPhase("spot");
    }, 2600);
    return () => clearTimeout(t);
  }, [phase]);

  const activeStep = stepOf[phase];

  return (
    <div className="hero-phone">
      <div className="hero-phone-island" />
      <div className="hero-phone-screen">
        <StatusBar />

        {/* conversation header */}
        <div className="flex shrink-0 items-center gap-2.5 border-b border-black/[0.06] px-3 pb-2.5">
          <ChevronLeft size={20} className="text-[#bbb]" />
          <span className="h-8 w-8 shrink-0 rounded-full ring-2 ring-white" style={{ background: s.avatar }} />
          <div className="min-w-0 flex-1">
            <p className="text-[13.5px] font-bold leading-tight text-[#111]">@{s.handle}</p>
            <p className="text-[10.5px] text-[#9a9a9a]">Instagram · Active now</p>
          </div>
          <span className="flex items-center gap-1 rounded-full bg-[#f4fce0] px-2 py-1 text-[9.5px] font-bold uppercase tracking-wide text-[#4d7c0f]">
            <span className="h-1 w-1 rounded-full bg-[#8ab800]" /> TractionFlo
          </span>
        </div>

        {/* step indicator */}
        <div className="flex shrink-0 items-center gap-1.5 px-4 py-2.5">
          {STEPS.map((label, i) => (
            <div key={label} className="flex flex-1 items-center gap-1.5">
              <span
                className={`flex h-5 items-center gap-1 rounded-full px-2 text-[10px] font-bold uppercase tracking-wide transition-colors ${
                  i <= activeStep ? "bg-[#bef227] text-[#111]" : "bg-black/[0.05] text-[#bbb]"
                }`}
              >
                {i < activeStep ? <Check size={10} strokeWidth={3.5} /> : `${i + 1}`}
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* chat body */}
        <div className="flex min-h-0 flex-1 flex-col gap-2.5 overflow-hidden px-4 pb-2">
          {/* spotted banner */}
          <div className="flex items-center gap-2 rounded-[12px] border border-[#bef227]/50 bg-[#f4fce0]/60 px-3 py-2">
            <Flame size={13} className="shrink-0 text-[#f97316]" />
            <p className="text-[11.5px] font-semibold leading-tight text-[#3d5a00]">
              <span className="font-bold">TractionFlo spotted a buyer</span> · {s.spotted}
            </p>
          </div>

          <AnimatePresence mode="popLayout">
            {/* incoming message */}
            {s.incoming && (
              <motion.div
                key={`in-${idx}`}
                className="max-w-[80%] self-start rounded-[16px] rounded-bl-[5px] bg-[#f1f1f3] px-3.5 py-2.5"
                initial={{ opacity: 0, y: 8, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-[12.5px] leading-snug text-[#222]">{s.incoming}</p>
              </motion.div>
            )}

            {/* TractionFlo personalizes the message for this person */}
            {phase === "compose" && (
              <motion.div
                key={`sug-${idx}`}
                className="rounded-[14px] border border-[#bef227]/60 bg-white p-2.5 shadow-sm"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                <p className="mb-1 flex items-center gap-1 text-[9.5px] font-bold uppercase tracking-[0.08em] text-[#5a8a00]">
                  <Sparkles size={11} /> Personalizing for @{s.handle}
                </p>
                <p className="text-[12.5px] leading-snug text-[#111]">
                  <PersonalizedText s={s} />
                  {typed.length < s.reply.length && (
                    <motion.span
                      className="ml-0.5 inline-block h-[1em] w-px bg-[#111] align-middle"
                      animate={{ opacity: [1, 0] }}
                      transition={{ repeat: Infinity, duration: 0.7 }}
                    />
                  )}
                </p>
              </motion.div>
            )}

            {/* sent automatically */}
            {(phase === "send" || phase === "outcome") && (
              <motion.div
                key={`out-${idx}`}
                className="max-w-[82%] self-end rounded-[16px] rounded-br-[5px] bg-[#111] px-3.5 py-2.5"
                initial={{ opacity: 0, y: 8, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-[12.5px] leading-snug text-white">
                  <PersonalizedText s={s} dark />
                </p>
                <p className="mt-1 flex items-center justify-end gap-0.5 text-[9px] text-[#bef227]">
                  <Zap size={9} className="fill-[#bef227]" /> Sent automatically
                </p>
              </motion.div>
            )}

            {/* outcome */}
            {phase === "outcome" && (
              <motion.div key={`res-${idx}`} layout className="mt-auto">
                <OutcomeBanner outcome={s.outcome} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* reassurance + scenario dots */}
        <div className="shrink-0 border-t border-black/[0.05]">
          <p className="flex items-center justify-center gap-1.5 pt-2.5 text-[10px] font-medium text-[#9a9a9a]">
            <Sparkles size={12} className="text-[#8ab800]" /> Personalized to each person — never a generic blast
          </p>
          <div className="flex items-center justify-center gap-1.5 py-2.5">
            {HERO_SCENARIOS.map((sc, i) => (
              <span
                key={sc.handle}
                className={`h-1.5 rounded-full transition-all ${
                  i === idx ? "w-5 bg-[#9bcf1f]" : "w-1.5 bg-black/15"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
