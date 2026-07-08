"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { OutcomeStrip } from "./OutcomeStrip";
import { languageSamples } from "@/lib/landing/callDemo";
import { agentBrand } from "@/lib/agent";

const POINTS = [
  { top: "6%", left: "14%" },
  { top: "20%", left: "63%" },
  { top: "45%", left: "2%" },
  { top: "58%", left: "70%" },
  { top: "82%", left: "26%" },
  { top: "88%", left: "60%" },
];

const MINI = [0.5, 0.9, 0.4, 0.75, 0.55, 0.95, 0.45, 0.7];

const BENEFITS = [
  {
    title: "Speaks your lead's language",
    body: "Natural, fluent conversations in 30+ languages — every masterclass sign-up hears from you in their own words.",
  },
  {
    title: "Handles objections in real time",
    body: `Not ready yet, need to think about it, price concerns — ${agentBrand.name} responds with context and moves them toward a discovery call.`,
  },
  {
    title: "Works your whole waitlist at once",
    body: `${agentBrand.name} calls every cold lead in parallel — no VAs, no scripts to write, no leads sitting in your inbox.`,
  },
];

const OUTCOMES = [
  { v: "30+", l: "Languages" },
  { v: "1:1", l: "Your tone" },
  { v: "Parallel", l: "All leads" },
  { v: "Live", l: "Objections" },
];

export function PersonalizedAtScale() {
  const reduce = useReducedMotion();

  return (
    <section className="lp-scale" id="scale">
      <div className="page-wrap lp-scale-grid">
        <div className="lp-scale-copy">
          <Reveal>
            <p className="lp-eyebrow">
              <span className="lp-eyebrow-mark" />
              Meet {agentBrand.name} — thousands of conversations
            </p>
            <h2 className="lp-h2">
              Personalized at scale.
              <br />
              In any language.
            </h2>
            <p className="lp-sub">
              {agentBrand.name} adapts to each lead&rsquo;s goals, objections, and
              language — so every follow-up still feels like you, one to one.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <ul className="lp-benefits">
              {BENEFITS.map((b, i) => (
                <li key={b.title}>
                  <span className="lp-benefit-idx">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="lp-benefit-title">{b.title}</p>
                    <p className="lp-benefit-body">{b.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.12}>
            <OutcomeStrip items={OUTCOMES} layout="narrow" />
          </Reveal>
        </div>

        <div className="lp-globe" aria-hidden>
          <div className="lp-globe-core">
            <svg viewBox="0 0 320 320" className="lp-globe-lines">
              <circle cx="160" cy="160" r="150" />
              <ellipse cx="160" cy="160" rx="150" ry="58" />
              <ellipse cx="160" cy="160" rx="150" ry="112" />
              <ellipse cx="160" cy="160" rx="60" ry="150" />
              <ellipse cx="160" cy="160" rx="118" ry="150" />
              <line x1="10" y1="160" x2="310" y2="160" />
            </svg>
          </div>

          {languageSamples.map((s, i) => {
            const p = POINTS[i % POINTS.length];
            return (
              <motion.div
                key={s.language}
                className="lp-lang"
                style={{ top: p.top, left: p.left }}
                initial={reduce ? false : { opacity: 0, y: 12, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.5, delay: 0.08 * i, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="lp-lang-top">
                  <span className="lp-lang-wave">
                    {MINI.map((h, j) => (
                      <i key={j} style={{ "--h": h, animationDelay: `${j * 0.09}s` } as React.CSSProperties} />
                    ))}
                  </span>
                  <span className="lp-lang-name">{s.language}</span>
                </div>
                <p className="lp-lang-text">{s.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
