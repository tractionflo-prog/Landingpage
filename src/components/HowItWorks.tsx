"use client";

import { ArrowRight, BarChart3, Check, MessageSquare, Shield, TrendingUp, User } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { OutcomeStats } from "@/components/ui/OutcomeStats";
import { pageStory } from "@/lib/pageStory";
import { ACCENTS, type AccentKey } from "@/lib/accents";

function IgGlyph({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5.5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
    </svg>
  );
}

type Step = { icon: string; title: string; text: string; color: string; check: boolean };

function StepIcon({ s }: { s: Step }) {
  const a = ACCENTS[s.color as AccentKey] ?? ACCENTS.pink;
  if (s.icon === "instagram") {
    return (
      <span className="hw-icon" style={{ background: "#FDF2F8" }}>
        <span className="flex h-9 w-9 items-center justify-center rounded-[10px] text-white" style={{ background: "var(--ig-gradient)" }}>
          <IgGlyph size={19} />
        </span>
        {s.check && <span className="hw-icon-check"><Check size={11} strokeWidth={3} /></span>}
      </span>
    );
  }
  const Icon = s.icon === "capture" ? MessageSquare : s.icon === "forward" ? User : BarChart3;
  return (
    <span className="hw-icon" style={{ background: a.bg, color: a.fg }}>
      <Icon size={28} strokeWidth={1.9} />
      {s.check && <span className="hw-icon-check"><Check size={11} strokeWidth={3} /></span>}
    </span>
  );
}

export function HowItWorks() {
  const { howItWorks: h } = pageStory;
  const [proofBold, proofRest] = h.proof.split(" who ");

  return (
    <section id="journey" className="section-white sec-orange" aria-labelledby="how-heading">
      <div className="page-wrap">
        <Reveal className="max-w-[640px]">
          <span className="hw-eyebrow">
            <span className="idx">{h.index}</span>
            <span className="lbl">{h.eyebrow}</span>
          </span>
          <h2 id="how-heading" className="opp-headline mt-6">{h.headline}</h2>
          <p className="t-body-sm mt-4 max-w-[440px]">{h.subhead}</p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="hw-row mt-16">
            <div className="hw-rail" aria-hidden />
            {[25, 50, 75].map((l) => (
              <span key={l} className="hw-arrow" style={{ left: `${l}%` }} aria-hidden>
                <ArrowRight size={14} strokeWidth={2.6} />
              </span>
            ))}

            {h.steps.map((s, i) => (
              <motion.div
                key={s.title}
                className="hw-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="hw-badge">{i + 1}</span>
                <StepIcon s={s} />
                <p className="mt-4 text-[16px] font-bold leading-tight tracking-[-0.01em] text-[#0a0a0a]">{s.title}</p>
                <p className="mt-2 text-[12.5px] leading-relaxed text-[var(--text-muted)]">{s.text}</p>
              </motion.div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="hw-banner mt-8 grid gap-6 p-6 md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-8">
            <div className="flex items-start gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] bg-white shadow-sm" style={{ color: "var(--sec-accent-ink)" }}>
                <Shield size={20} strokeWidth={2.2} />
              </span>
              <div>
                <p className="text-[14px] font-bold text-[#0a0a0a]">{h.control.title}</p>
                <p className="mt-0.5 text-[12.5px] leading-relaxed text-[var(--text-muted)]">{h.control.text}</p>
              </div>
            </div>

            <div className="hidden h-12 w-px bg-[var(--sec-accent)] md:block" aria-hidden />

            <div className="flex items-start gap-3.5">
              <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] bg-white shadow-sm" style={{ color: "var(--sec-accent-ink)" }}>
                <TrendingUp size={20} strokeWidth={2.2} />
              </span>
              <div>
                <p className="text-[14px] font-bold text-[#0a0a0a]">More customers, less busywork.</p>
                <p className="mt-0.5 text-[12.5px] leading-relaxed text-[var(--text-muted)]">
                  <span className="font-bold text-[#0a0a0a]">{proofBold}</span>
                  {proofRest ? ` who ${proofRest}` : ""}
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <OutcomeStats stats={h.stats} className="mt-8" />
      </div>
    </section>
  );
}
