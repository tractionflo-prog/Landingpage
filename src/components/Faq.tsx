"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { OutcomeStats } from "@/components/ui/OutcomeStats";
import { QuizTrigger } from "@/components/quiz/QuizTrigger";
import { conversionCopy } from "@/lib/conversion";
import { pageStory } from "@/lib/pageStory";
import { siteConfig } from "@/lib/seo";

export function Faq() {
  const { faq } = pageStory;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-white sec-purple" aria-labelledby="faq-heading">
      <div className="page-wrap max-w-[760px]">
        <div className="flex justify-center">
          <span className="cv-eyebrow">
            <span className="cv-idx">{faq.index}</span>
            <span className="cv-label">{faq.eyebrow}</span>
          </span>
        </div>
        <h2 id="faq-heading" className="t-section mt-5 text-center">
          {faq.headline} <span className="sec-accent-text">{faq.headlineAccent}</span>
        </h2>

        <ul className="mx-auto mt-10 space-y-3">
          {faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={item.q} className="card overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                >
                  <span className="text-[15px] font-bold text-[#111] sm:text-[16px]">{item.q}</span>
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-transform duration-200 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    style={{ background: "var(--sec-accent-soft)", color: "var(--sec-accent-ink)" }}
                  >
                    <Plus size={16} strokeWidth={2.5} />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-[14px] leading-relaxed text-[#666] sm:px-6 sm:text-[15px]">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>

        <OutcomeStats stats={faq.stats} className="mt-10" />

        <div className="mt-10 text-center">
          <p className="text-[15px] font-semibold text-[#111]">Still on the fence?</p>
          <p className="mt-1 text-[14px] text-[#666]">
            It&apos;s free for 90 days. The only risk is losing your founder spot.
          </p>
          <p className="mt-3 text-[14px] text-[#666]">
            Questions?{" "}
            <a
              href={`mailto:${siteConfig.supportEmail}`}
              className="font-medium text-[#111] underline-offset-2 hover:underline"
            >
              {siteConfig.supportEmail}
            </a>
          </p>
          <QuizTrigger size="lg" className="btn-lime-mobile-full mt-6">
            {conversionCopy.primaryCta}
          </QuizTrigger>
        </div>
      </div>
    </section>
  );
}
