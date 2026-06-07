"use client";

import { motion } from "framer-motion";
import { Flame, TrendingUp } from "lucide-react";
import { BrushHighlight } from "@/components/ui/BrushHighlight";
import { QuizTrigger } from "@/components/quiz/QuizTrigger";
import { conversionCopy } from "@/lib/conversion";
import { pageStory } from "@/lib/pageStory";
import { HeroPhone } from "./HeroPhone";

const AVATARS = ["#f9a8d4", "#7dd3fc", "#fcd34d", "#c4b5fd", "#6ee7b7"];

function IgIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
    </svg>
  );
}

const fade = {
  hidden: { opacity: 0, y: 22 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function Hero() {
  const { hero } = pageStory;

  return (
    <section
      className="hero section-white !pt-10 !pb-14 sm:!pt-12 sm:!pb-16 md:!pt-16 md:!pb-24"
      aria-labelledby="hero-heading"
    >
      <div className="hero-aura" aria-hidden />
      <div className="hero-grid" aria-hidden />

      <div className="hero-content page-wrap grid items-center gap-10 sm:gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
        <motion.div initial="hidden" animate="show">
          <motion.div variants={fade} custom={0}>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#bef227]/50 bg-[#f4fce0] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.1em] text-[#3d5a00]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#8ab800]" aria-hidden />
              {hero.eyebrow}
            </span>
          </motion.div>

          <motion.h1
            id="hero-heading"
            className="t-hero mt-5"
            variants={fade}
            custom={1}
          >
            Most Creators Build Audiences.
            <br />
            The Top 1% Build <BrushHighlight>Revenue Systems.</BrushHighlight>
          </motion.h1>

          <motion.p className="t-body mt-5 max-w-[480px]" variants={fade} custom={2}>
            {hero.subhead}
          </motion.p>

          <motion.ul className="mt-6 space-y-2.5" variants={fade} custom={3}>
            {hero.bullets.map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-[15px] font-medium text-[#333]">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#eef9c4] text-[#6fa800]">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </motion.ul>

          <motion.div variants={fade} custom={4}>
            <QuizTrigger size="lg" className="btn-lime-mobile-full mt-8">
              {conversionCopy.primaryCta}
            </QuizTrigger>
            <p className="mt-3 flex items-center gap-1.5 text-[13px] font-semibold text-[#4d7c0f]">
              <TrendingUp size={14} /> {hero.roi}
            </p>
            <p className="mt-1.5 text-[13px] font-medium text-[#888]">
              90 days free · No credit card · Limited founder spots
            </p>
          </motion.div>

          <motion.div className="mt-7 flex flex-wrap items-center gap-3" variants={fade} custom={5}>
            <div className="flex -space-x-2">
              {AVATARS.map((c, i) => (
                <span
                  key={i}
                  className="h-8 w-8 rounded-full border-2 border-white shadow-sm"
                  style={{ background: c }}
                  aria-hidden
                />
              ))}
            </div>
            <p className="text-[13px] text-[#666]">
              <strong className="font-semibold text-[#111]">Founders</strong> are claiming spots now
            </p>
            <span className="text-[#ddd]">·</span>
            <span className="flex items-center gap-1.5 text-[13px] font-medium text-[#555]">
              <IgIcon /> Instagram first
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          className="demo-stage flex justify-center"
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="float-badge floaty left-[-4px] top-16 z-20 hidden lg:inline-flex">
            <Flame size={13} className="text-[#f97316]" /> New warm lead
          </span>
          <span className="float-badge floaty-slow right-[-4px] bottom-28 z-20 hidden lg:inline-flex">
            <TrendingUp size={13} className="text-[#6fa800]" /> Paid in chat
          </span>

          <HeroPhone />
        </motion.div>
      </div>
    </section>
  );
}
