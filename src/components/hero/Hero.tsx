"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Check, ArrowDown, Clock, Zap, Inbox, Target } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { QuizTrigger } from "@/components/quiz/QuizTrigger";
import { conversionCopy } from "@/lib/conversion";

const OUTCOME_ICONS: Record<string, LucideIcon> = {
  clock: Clock,
  zap: Zap,
  inbox: Inbox,
  target: Target,
};
import { pageStory } from "@/lib/pageStory";

const HeroBoard = dynamic(() => import("./HeroBoard").then((m) => ({ default: m.HeroBoard })), {
  loading: () => <div className="hb-window hb-window--skeleton" aria-hidden />,
  ssr: false,
});

function IgGlyph({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  );
}

const fade = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function Hero() {
  const { hero } = pageStory;

  return (
    <section
      className="hero hero-lux relative overflow-hidden !pt-12 !pb-16 sm:!pt-16 sm:!pb-20 md:!pt-20"
      aria-labelledby="hero-heading"
    >
      <div className="hero-bg" aria-hidden />

      <div className="page-wrap relative z-[1]">
        <motion.div className="mx-auto max-w-[840px] text-center" initial="hidden" animate="show">
          <motion.p
            className="hero-eyebrow mx-auto inline-flex items-center gap-2"
            variants={fade}
            custom={0}
          >
            <span className="hero-eyebrow-ig" aria-hidden>
              <IgGlyph size={12} />
            </span>
            {hero.eyebrow}
          </motion.p>

          <motion.h1 id="hero-heading" className="hero-headline mt-6" variants={fade} custom={1}>
            {hero.headlinePre}
            <span className="hero-pill">
              {hero.headlineAccent}
              <svg className="hero-pill-underline" viewBox="0 0 120 8" preserveAspectRatio="none" aria-hidden>
                <path d="M2 6 Q60 1 118 5" fill="none" stroke="#FF5A1F" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </span>
            <span className="hero-pill-period">.</span>
          </motion.h1>

          <motion.p className="hero-sub mx-auto mt-6 max-w-[620px]" variants={fade} custom={2}>
            {hero.subhead}
          </motion.p>

          <motion.div
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
            variants={fade}
            custom={3}
          >
            <QuizTrigger size="lg" className="btn-lime-mobile-full">
              Start 90-Day Free Trial
            </QuizTrigger>
            <a
              href="#journey"
              className="btn-ghost btn-lime-mobile-full inline-flex min-h-[48px] items-center gap-2 px-6 text-[15px]"
            >
              See How It Works
              <ArrowDown size={15} strokeWidth={2.4} />
            </a>
          </motion.div>

          <motion.p
            className="mt-4 text-[13px] font-medium text-[#8a8a8a]"
            variants={fade}
            custom={4}
          >
            {conversionCopy.riskReversal}
          </motion.p>

          <motion.ul
            className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2"
            variants={fade}
            custom={5}
          >
            {hero.trust.map((t) => (
              <li
                key={t}
                className="flex items-center gap-1.5 text-[13px] font-medium text-[#4b4b4b]"
              >
                <Check size={14} strokeWidth={3} className="text-[#FF5A1F]" />
                {t}
              </li>
            ))}
          </motion.ul>

        </motion.div>

        <motion.div
          className="hero-board-stage mt-14 sm:mt-16"
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero-board-glow" aria-hidden />
          <div className="hero-board-wrap hero-board-float">
            <HeroBoard />
          </div>
        </motion.div>

        <motion.div
          className="mx-auto mt-12 grid max-w-[920px] grid-cols-2 gap-3 sm:mt-14 sm:grid-cols-4 sm:gap-4"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {hero.outcomes.map((o) => {
            const Icon = OUTCOME_ICONS[o.icon] ?? Clock;
            return (
              <div key={o.label} className="hero-outcome">
                <span className="hero-outcome-icon">
                  <Icon size={17} strokeWidth={2.2} />
                </span>
                <p className="hero-outcome-value">{o.value}</p>
                <p className="hero-outcome-label">{o.label}</p>
                <p className="hero-outcome-sub">{o.sub}</p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
