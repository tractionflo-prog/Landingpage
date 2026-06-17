"use client";

import { motion } from "framer-motion";
import { Check, Play, Star } from "lucide-react";
import { QuizTrigger } from "@/components/quiz/QuizTrigger";
import { GradientText } from "@/components/ui/GradientText";
import { conversionCopy } from "@/lib/conversion";
import { pageStory } from "@/lib/pageStory";
import { HeroFlowVisual } from "./HeroFlowVisual";

const AVATARS = [
  ["#f9a8d4", "#f472b6"],
  ["#fcd34d", "#fb923c"],
  ["#7dd3fc", "#38bdf8"],
  ["#c4b5fd", "#a78bfa"],
  ["#86efac", "#4ade80"],
] as const;

const fade = {
  hidden: { opacity: 0, y: 22 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function Hero() {
  const { hero } = pageStory;

  return (
    <section
      className="hero section-white relative overflow-hidden !pt-14 !pb-20 sm:!pt-20 sm:!pb-24 md:!pt-24 md:!pb-28"
      aria-labelledby="hero-heading"
    >
      <div className="hero-glow" aria-hidden />
      <div className="hero-content page-wrap relative z-[1] grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
        <motion.div className="min-w-0" initial="hidden" animate="show">
          <motion.p
            className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white px-3.5 py-1.5 text-[12.5px] font-semibold text-[#0a0a0a] shadow-[0_1px_2px_rgba(16,24,40,0.04)]"
            variants={fade}
            custom={0}
          >
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: "linear-gradient(135deg,#F97316,#EC4899)" }}
              aria-hidden
            />
            {hero.eyebrow}
          </motion.p>

          <motion.h1 id="hero-heading" className="t-hero mt-5" variants={fade} custom={1}>
            {hero.headlinePre}
            <GradientText>{hero.headlineAccent}</GradientText>
          </motion.h1>

          <motion.p className="t-body mt-6 max-w-[520px]" variants={fade} custom={2}>
            {hero.subhead}
          </motion.p>

          <motion.div className="mt-8 flex flex-wrap items-center gap-3" variants={fade} custom={3}>
            <QuizTrigger size="lg" className="btn-lime-mobile-full">
              {conversionCopy.primaryCta}
            </QuizTrigger>
            <a
              href="#example"
              className="btn-ghost btn-lime-mobile-full inline-flex min-h-[48px] items-center gap-2 px-6 text-[15px]"
            >
              <Play size={15} strokeWidth={2.4} />
              Watch Demo
            </a>
          </motion.div>

          <motion.p
            className="mt-7 flex items-center gap-2 text-[13.5px] font-medium text-[var(--text-muted)]"
            variants={fade}
            custom={4}
          >
            <Check size={15} strokeWidth={2.8} className="shrink-0 text-[#22C55E]" />
            {hero.secondaryTrust}
          </motion.p>

          <motion.div className="mt-7 flex items-center gap-3" variants={fade} custom={5}>
            <div className="flex -space-x-2.5">
              {AVATARS.map(([from, to], i) => (
                <span
                  key={i}
                  className="h-8 w-8 rounded-full border-2 border-white"
                  style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
                  aria-hidden
                />
              ))}
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-0.5" aria-hidden>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={13} className="fill-[#FBBF24] text-[#FBBF24]" />
                ))}
              </div>
              <p className="mt-0.5 text-[12.5px] font-medium text-[var(--text-muted)]">
                {hero.socialProof}
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="demo-stage min-w-0"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative">
            <HeroFlowVisual />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
