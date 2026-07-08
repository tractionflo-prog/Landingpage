"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { agentBrand } from "@/lib/agent";
import { FlowDemo } from "./FlowDemo";
import { SignupBlock } from "./SignupBlock";

const TRUST = ["No credit card", "Live in one afternoon", "Cancel anytime"];

export function VoiceHero() {
  const reduce = useReducedMotion();

  const rise = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 14 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <section className="lp-hero lp-hero--center lp-hero--clean" id="top">
      <div className="lp-cinema" aria-hidden>
        <span className="lp-cinema-orb lp-cinema-orb--warm" />
        <span className="lp-cinema-orb lp-cinema-orb--cool" />
        <span className="lp-cinema-orb lp-cinema-orb--base" />
        <span className="lp-cinema-grid" />
        <span className="lp-cinema-beam" />
        <span className="lp-cinema-grain" />
        <span className="lp-cinema-vignette" />
      </div>
      <div className="page-wrap">
        <div className="lp-hero-inner">
          <motion.p className="lp-eyebrow" {...rise(0)}>
            <span className="lp-eyebrow-mark" />
            Fitness · Yoga · Manifestation · Every coach
          </motion.p>

          <motion.h1 className="lp-hero-title" {...rise(0.05)}>
            Stop chasing leads.
            <br className="hidden sm:block" />{" "}
            <span className="lp-hero-accent">Start booking clients.</span>
          </motion.h1>

          <motion.p className="lp-hero-sub" {...rise(0.12)}>
            People try your free class, say they&rsquo;ll think about it — then go quiet.
            {" "}{agentBrand.name}, your AI voice agent, calls each one back and books the ready
            ones on your calendar. While you coach.
          </motion.p>

          <motion.div {...rise(0.2)}>
            <SignupBlock size="lg" />
          </motion.div>

          <motion.ul className="lp-hero-trust" {...rise(0.28)}>
            {TRUST.map((t) => (
              <li key={t}>
                <Check size={14} strokeWidth={2.5} />
                {t}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.p className="lp-hero-caption" {...rise(0.34)}>
          <span className="lp-live-pill">
            <span className="lp-live-dot" />
            Coach demo
          </span>
          A lead who said &ldquo;not yet&rdquo; — called back and booked.
        </motion.p>

        <motion.div className="lp-hero-demo" {...rise(0.4)}>
          <FlowDemo />
        </motion.div>

        <motion.div className="lp-hero-convert" {...rise(0.48)}>
          <p className="lp-hero-convert-lead">See it work? Start recovering your list today.</p>
          <SignupBlock size="lg" showRisk={false} />
        </motion.div>
      </div>
    </section>
  );
}
