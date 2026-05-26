"use client";

import { motion } from "framer-motion";
import { MessageCircle, Zap, Target } from "lucide-react";
import { BrushHighlight } from "@/components/ui/BrushHighlight";
import { HandAnnotation } from "@/components/ui/HandAnnotation";

const pillars = [
  {
    Icon: MessageCircle,
    title: "Conversations first",
    text: "Growth starts in comments and DMs — not inside a complex builder.",
  },
  {
    Icon: Zap,
    title: "Workflows, not widgets",
    text: "Describe what you want. TractionFlo builds the follow-up system for you.",
  },
  {
    Icon: Target,
    title: "Built for outcomes",
    text: "More leads, more follow-ups, more customers — without the setup headache.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function About() {
  return (
    <section id="about" className="section-white">
      <div className="page-wrap">
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#999]"
          >
            About TractionFlo
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="t-section mt-3"
          >
            We help businesses grow with{" "}
            <BrushHighlight>intelligent workflows.</BrushHighlight>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="t-body mx-auto mt-6 max-w-2xl"
          >
            TractionFlo turns social conversations into leads, follow-ups and customers.
            No drag-and-drop builders. No endless arrows. Just describe your goal — we
            handle the workflow.
          </motion.p>
        </div>

        <motion.div
          className="mt-14 grid gap-4 md:grid-cols-3 md:gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {pillars.map(({ Icon, title, text }, i) => (
            <motion.div
              key={title}
              custom={i}
              variants={fadeUp}
              className="card p-6 md:p-7"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-[12px] bg-[#eef9c4]">
                <Icon size={22} strokeWidth={1.5} className="text-[#111]" />
              </div>
              <h3 className="mt-5 text-[17px] font-bold tracking-[-0.02em]">{title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-[#666]">{text}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="relative mt-12 text-center"
        >
          <p className="mx-auto max-w-xl text-[15px] leading-relaxed text-[#666]">
            We&apos;re early. We&apos;re building in public with founders who care about
            follow-up, not features for features&apos; sake.
          </p>
          <HandAnnotation className="mt-6 inline-block">
            Built for creators &amp; businesses →
          </HandAnnotation>
        </motion.div>
      </div>
    </section>
  );
}
