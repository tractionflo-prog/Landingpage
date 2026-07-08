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
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <section className="lp-hero lp-hero--center lp-hero--clean" id="top">
      <div className="page-wrap">
        <div className="lp-hero-inner">
          <motion.p className="lp-eyebrow" {...rise(0)}>
            <span className="lp-eyebrow-mark" />
            For coaches &amp; course creators
          </motion.p>

          <motion.h1 className="lp-hero-title" {...rise(0.05)}>
            Your masterclass leads said &ldquo;not yet.&rdquo;
            <br className="hidden sm:block" />{" "}
            <span className="lp-hero-accent">{agentBrand.name} books them anyway.</span>
          </motion.h1>

          <motion.p className="lp-hero-sub" {...rise(0.12)}>
            After your free training, most sign-ups go quiet. {agentBrand.name} calls each one back,
            remembers what they shared, handles the &ldquo;I&rsquo;m not ready&rdquo; objection,
            and puts discovery calls on your calendar &mdash; while you coach.
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
          A masterclass lead who wasn&rsquo;t ready — called back and booked.
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
