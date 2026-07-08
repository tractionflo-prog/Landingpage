import { Reveal } from "@/components/ui/Reveal";
import { SignupBlock } from "./SignupBlock";
import { agentBrand } from "@/lib/agent";

const BADGES = ["No credit card", "Cancel anytime", "For coaches"];

export function FinalCallCta() {
  return (
    <section className="lp-final lp-final--dark" id="get-started">
      <div className="page-wrap">
        <Reveal className="lp-final-inner">
          <div className="lp-final-glow" aria-hidden />
          <p className="lp-eyebrow lp-eyebrow--onDark">
            <span className="lp-eyebrow-mark" />
            Start today
          </p>
          <h2 className="lp-final-title">
            Your next client is already<br className="hidden sm:block" /> on your list.
          </h2>
          <p className="lp-final-sub">
            Get free access, connect your leads, and let {agentBrand.name} start booking discovery
            calls on autopilot &mdash; while you coach.
          </p>
          <SignupBlock size="lg" className="lp-final-signup" />
          <div className="lp-final-badges">
            {BADGES.map((b) => (
              <span key={b}>{b}</span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
