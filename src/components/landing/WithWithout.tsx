import { Reveal } from "@/components/ui/Reveal";
import { agentBrand } from "@/lib/agent";
import { Check, X } from "lucide-react";
import { SignupBlock } from "./SignupBlock";

const WITHOUT = [
  "Leads go cold within days of your free class",
  "Follow-up = DMs and email blasts most people ignore",
  "You chase, take notes, and reschedule by hand",
  "Every launch starts from zero — new ads, new leads",
];

const WITH = [
  `${agentBrand.name} calls every lead back while interest is hot`,
  "A real two-way conversation, not another broadcast",
  "Objections handled, calls booked, notes written for you",
  "Your existing list keeps producing discovery calls",
];

export function WithWithout() {
  return (
    <section className="lp-vs" id="compare">
      <div className="page-wrap">
        <header className="lp-vs-head">
          <p className="lp-eyebrow">
            <span className="lp-eyebrow-mark" />
            The difference
          </p>
          <h2 className="lp-h2">
            Same list. Very different
            <br />
            calendar.
          </h2>
        </header>

        <Reveal delay={0.06}>
          <div className="lp-vs-grid">
            <div className="lp-vs-col lp-vs-col--without">
              <p className="lp-vs-label">Without TractionFlo</p>
              <ul>
                {WITHOUT.map((item) => (
                  <li key={item}>
                    <span className="lp-vs-mark lp-vs-mark--x">
                      <X size={13} strokeWidth={2.5} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="lp-vs-col lp-vs-col--with">
              <p className="lp-vs-label">
                With {agentBrand.name}
                <span className="lp-vs-label-pill">TractionFlo</span>
              </p>
              <ul>
                {WITH.map((item) => (
                  <li key={item}>
                    <span className="lp-vs-mark lp-vs-mark--check">
                      <Check size={13} strokeWidth={2.5} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="lp-vs-close">
            <SignupBlock size="lg" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
