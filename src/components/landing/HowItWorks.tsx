import { Reveal } from "@/components/ui/Reveal";
import { agentBrand } from "@/lib/agent";
import { CalendarCheck, PhoneCall, Upload } from "lucide-react";
import { OutcomeStrip } from "./OutcomeStrip";
import { SignupBlock } from "./SignupBlock";

const STEPS = [
  {
    icon: Upload,
    title: "Connect your leads",
    body: "Import everyone who joined a masterclass, opted into a freebie, or booked and ghosted — from your funnel, CRM, or a CSV.",
    metric: "5 min setup",
  },
  {
    icon: PhoneCall,
    title: `${agentBrand.name} calls with full context`,
    body: "It remembers what each lead attended, what they wanted, and their last objection — then has a natural conversation and handles it.",
    metric: "24/7 calling",
  },
  {
    icon: CalendarCheck,
    title: "Discovery calls land on your calendar",
    body: "Interested leads are qualified and booked straight onto your calendar, with a full call summary waiting for you.",
    metric: "Zero manual notes",
  },
];

const OUTCOMES = [
  { v: "Today", l: "Go live" },
  { v: "100%", l: "Called back" },
  { v: "Full", l: "Context" },
  { v: "Auto", l: "Follow-up" },
];

export function HowItWorks() {
  return (
    <section className="lp-steps" id="how-it-works">
      <div className="page-wrap">
        <header className="lp-steps-head">
          <p className="lp-eyebrow">
            <span className="lp-eyebrow-mark" />
            How it works
          </p>
          <h2 className="lp-h2">
            More discovery calls from the
            <br />
            leads you already have.
          </h2>
          <p className="lp-sub">
            {agentBrand.name} re-engages the sign-ups who weren&rsquo;t ready yet — calling, remembering,
            and booking discovery calls so you fill your calendar without chasing anyone.
          </p>
        </header>

        <Reveal delay={0.06}>
          <ol className="lp-steps-grid">
            {STEPS.map((s, i) => (
              <li key={s.title}>
                <span className="lp-step-idx">{String(i + 1).padStart(2, "0")}</span>
                <span className="lp-step-icon">
                  <s.icon size={20} strokeWidth={2} />
                </span>
                <h3 className="lp-step-title">{s.title}</h3>
                <p className="lp-step-body">{s.body}</p>
                <span className="lp-step-metric">{s.metric}</span>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={0.1}>
          <OutcomeStrip items={OUTCOMES} />
        </Reveal>

        <Reveal delay={0.14}>
          <div className="lp-steps-close">
            <p className="lp-steps-close-lead">Your leads are already on the list. Start calling them back.</p>
            <SignupBlock size="lg" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
