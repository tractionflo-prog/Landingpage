"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  CalendarCheck,
  CircleDot,
  LayoutGrid,
  MessageSquare,
  Phone,
  Search,
  Settings,
  Sparkles,
  TriangleAlert,
  Users,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { OutcomeStrip } from "./OutcomeStrip";
import { Logo } from "@/components/ui/Logo";
import { agentBrand } from "@/lib/agent";
import { memoryLead, demoMemory, memoryNextAction, type MemoryEvent } from "@/lib/landing/callDemo";

const NAV = [
  { label: "Dashboard", icon: LayoutGrid },
  { label: "Conversations", icon: MessageSquare },
  { label: "Leads", icon: Users },
  { label: agentBrand.name, icon: Phone },
  { label: "Lead Memory", icon: Sparkles, active: true },
  { label: "Settings", icon: Settings },
];

const TABS = ["History", "Contact", "Objections", "Next steps"];

const EVENT_ICON: Record<MemoryEvent["type"], typeof Phone> = {
  attended: Users,
  call: Phone,
  objection: TriangleAlert,
  booked: CalendarCheck,
  note: CircleDot,
};

const BENEFITS = [
  "Remembers every masterclass note, call, and objection",
  "Knows when each lead is ready — and what to say next",
  "Never asks the same question twice or forgets a promise",
  "Gets sharper with every conversation in your pipeline",
];

const OUTCOMES = [
  { v: "Every call", l: "Logged automatically" },
  { v: "Every objection", l: "Remembered" },
  { v: "Smart", l: "Next best action" },
  { v: "Zero", l: "Repeated questions" },
];

export function LeadMemory() {
  const reduce = useReducedMotion();

  return (
    <section className="lp-memory" id="memory">
      <div className="page-wrap lp-memory-grid">
        <div className="lp-memory-copy">
          <Reveal>
            <p className="lp-eyebrow">
              <span className="lp-eyebrow-mark" />
              Lead memory that never forgets
            </p>
            <h2 className="lp-h2">
              Remembers every detail.
              <br />
              So you enroll more.
            </h2>
            <p className="lp-sub">
              TractionFlo captures every masterclass signup, call, and objection — so
              {agentBrand.name} always picks up exactly where the conversation left off.
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <ul className="lp-check-list">
              {BENEFITS.map((b) => (
                <li key={b}>
                  <span className="lp-check">
                    <CalendarCheck size={13} strokeWidth={2.5} />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <OutcomeStrip items={OUTCOMES} />
          </Reveal>
        </div>

        <Reveal className="lp-memory-visual" delay={0.1}>
          <div className="lp-app">
            <nav className="lp-app-side" aria-hidden>
              <div className="lp-app-brand">
                <Logo size={22} />
                <span>TractionFlo</span>
              </div>
              <ul>
                {NAV.map((n) => (
                  <li key={n.label} className={n.active ? "is-active" : ""}>
                    <n.icon size={15} />
                    <span>{n.label}</span>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="lp-app-main">
              <div className="lp-app-bar">
                <span className="lp-app-search">
                  <Search size={14} />
                  <span>Search lead memory…</span>
                </span>
                <span className="lp-app-lead-pill">{memoryLead.name}</span>
              </div>

              <div className="lp-app-tabs">
                {TABS.map((t, i) => (
                  <span key={t} className={i === 0 ? "is-active" : ""}>
                    {t}
                  </span>
                ))}
              </div>

              <ol className="lp-timeline">
                {demoMemory.map((e, i) => {
                  const Icon = EVENT_ICON[e.type];
                  return (
                    <motion.li
                      key={e.date + e.title}
                      className={`lp-tl-item lp-tl-item--${e.type}`}
                      initial={reduce ? false : { opacity: 0, x: 12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-10%" }}
                      transition={{ duration: 0.45, delay: 0.06 * i, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <span className="lp-tl-rail" aria-hidden>
                        <span className="lp-tl-dot">
                          <Icon size={12} strokeWidth={2.5} />
                        </span>
                      </span>
                      <div className="lp-tl-body">
                        <div className="lp-tl-head">
                          <p className="lp-tl-title">{e.title}</p>
                          <span className="lp-tl-date">{e.date}</span>
                        </div>
                        <p className="lp-tl-detail">{e.detail}</p>
                        {e.type === "booked" && (
                          <span className="lp-tl-badge">
                            <CalendarCheck size={12} strokeWidth={2.5} /> Booked
                          </span>
                        )}
                      </div>
                    </motion.li>
                  );
                })}
              </ol>

              <div className="lp-nba">
                <span className="lp-nba-mark">
                  <Sparkles size={14} />
                </span>
                <div>
                  <p className="lp-nba-label">{memoryNextAction.label}</p>
                  <p className="lp-nba-value">{memoryNextAction.value}</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
