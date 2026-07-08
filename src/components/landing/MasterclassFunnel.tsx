import { OutcomeStrip } from "./OutcomeStrip";
import { funnelExample } from "@/lib/landing/funnelDemo";

const STRIP = funnelExample.stages.map((stage) => ({
  v: stage.value,
  l: stage.label,
}));

export function MasterclassFunnel() {
  return (
    <section className="lp-funnel-strip" id="funnel" aria-label="Example masterclass funnel">
      <div className="page-wrap">
        <OutcomeStrip items={STRIP} />
        <p className="lp-funnel-strip-note">
          {funnelExample.title} · {funnelExample.conversionLabel} · {funnelExample.disclaimer}
        </p>
      </div>
    </section>
  );
}
