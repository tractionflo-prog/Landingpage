"use client";

import { motion } from "framer-motion";
import { BrushHighlight } from "@/components/ui/BrushHighlight";
import { HandAnnotation } from "@/components/ui/HandAnnotation";
import { pageStory } from "@/lib/pageStory";

export function About() {
  const { founderNote } = pageStory;

  return (
    <section id="about" className="section-grey" aria-labelledby="about-heading">
      <div className="page-wrap max-w-[760px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card relative p-7 sm:p-10"
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#999]">
            {founderNote.eyebrow}
          </p>
          <h2 id="about-heading" className="t-section mt-3">
            The Gap Between Creators And The Top 1% Isn&apos;t Content.
            <br />
            <BrushHighlight>It&apos;s Systems.</BrushHighlight>
          </h2>

          <div className="mt-6 space-y-4">
            {founderNote.body.map((para) => (
              <p key={para} className="text-[15px] leading-relaxed text-[#555] sm:text-[16px]">
                {para}
              </p>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#bef227] text-[14px] font-bold text-[#111]">
              TF
            </span>
            <HandAnnotation className="!mt-0">{founderNote.signoff}</HandAnnotation>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
