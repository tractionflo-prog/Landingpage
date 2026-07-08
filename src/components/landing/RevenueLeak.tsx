import { Reveal } from "@/components/ui/Reveal";
import { agentBrand } from "@/lib/agent";
import { ArrowRight, CalendarX, MessagesSquare, RefreshCcw } from "lucide-react";

const LEAKS = [
  {
    icon: CalendarX,
    title: "Sign-ups go quiet after your free class",
    body: "They loved the session, said they'd think about it — then life happened. A week later your offer is a distant memory.",
    fix: `${agentBrand.name} calls back within days, while your class is still fresh.`,
  },
  {
    icon: MessagesSquare,
    title: "Manual follow-up doesn't scale",
    body: "DMs, reminder emails, VA scripts — following up with a hundred leads personally is a full-time job you don't have time for.",
    fix: `${agentBrand.name} has a real conversation with every single lead, in parallel.`,
  },
  {
    icon: RefreshCcw,
    title: "So you launch again to replace them",
    body: "Instead of recovering the leads you paid for, you spend more on ads and another launch to fill the same leaky bucket.",
    fix: `${agentBrand.name} turns your existing list into booked discovery calls.`,
  },
];

export function RevenueLeak() {
  return (
    <section className="lp-why" id="why">
      <div className="page-wrap">
        <header className="lp-why-head">
          <p className="lp-eyebrow">
            <span className="lp-eyebrow-mark" />
            The leak in every launch
          </p>
          <h2 className="lp-h2">
            Most of your leads never buy.
            <br />
            Not because they said no.
          </h2>
          <p className="lp-sub">
            They said &ldquo;not yet&rdquo; — and nobody followed up before the moment passed.
            That&rsquo;s where the revenue goes.
          </p>
        </header>

        <Reveal delay={0.06}>
          <ul className="lp-why-grid">
            {LEAKS.map((leak) => (
              <li key={leak.title} className="lp-why-card">
                <span className="lp-why-icon">
                  <leak.icon size={20} strokeWidth={2} />
                </span>
                <h3 className="lp-why-title">{leak.title}</h3>
                <p className="lp-why-body">{leak.body}</p>
                <p className="lp-why-fix">
                  <ArrowRight size={14} strokeWidth={2.5} />
                  {leak.fix}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
