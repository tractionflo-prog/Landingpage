"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SignupBlock } from "./SignupBlock";
import { agentBrand } from "@/lib/agent";

const FAQS = [
  {
    q: "Will it sound like a robot?",
    a: `No. ${agentBrand.name} sounds natural — pauses, listens, and responds to what your lead actually says. Prospects hear a real conversation, not a rigid script or a robocall.`,
  },
  {
    q: "Which leads can it call?",
    a: "Anyone who showed interest but didn't enroll — masterclass sign-ups, webinar attendees, waitlist contacts, past clients who went quiet. It works best on warm leads who already know your work.",
  },
  {
    q: "Will this annoy my audience or get me in trouble?",
    a: `You control who gets called, when, and how often. ${agentBrand.name} respects your calling windows and consent settings, and honors opt-outs immediately — so outreach stays on your terms.`,
  },
  {
    q: "What happens when someone is ready to enroll?",
    a: `${agentBrand.name} books a discovery call on your calendar and sends the invite. Leads who aren't ready yet are remembered and followed up with automatically — with the right context each time.`,
  },
  {
    q: "How long does it take to set up?",
    a: `Most coaches are live the same afternoon. Upload your lead list, link your calendar, and ${agentBrand.name} starts calling — no scripts to write and no VA to manage.`,
  },
  {
    q: "What does it cost?",
    a: `Get free access — no credit card required. You only grow your usage once ${agentBrand.name} is actually booking discovery calls for you.`,
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="lp-faq" id="faq">
      <div className="page-wrap lp-faq-grid">
        <div className="lp-faq-intro">
          <Reveal>
            <p className="lp-eyebrow">
              <span className="lp-eyebrow-mark" />
              Questions, answered
            </p>
            <h2 className="lp-h2">
              Everything you&rsquo;re
              <br />
              wondering.
            </h2>
            <p className="lp-sub">
              Straight answers about how {agentBrand.name} works for coaches, who {agentBrand.name} calls,
              and what it costs.
            </p>
          </Reveal>
        </div>

        <Reveal className="lp-faq-list" delay={0.06}>
          <ul>
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              return (
                <li key={f.q} className={isOpen ? "is-open" : ""}>
                  <button
                    type="button"
                    className="lp-faq-q"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span>{f.q}</span>
                    <Plus size={18} className="lp-faq-icon" />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        className="lp-faq-a"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <p>{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <div className="lp-faq-close page-wrap">
          <p className="lp-faq-close-lead">No credit card. Live in one afternoon.</p>
          <SignupBlock size="lg" />
        </div>
      </Reveal>
    </section>
  );
}
