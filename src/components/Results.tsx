import { Radar, MessageSquare, UserCheck, CalendarCheck, Crown } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { pageStory } from "@/lib/pageStory";
import { ACCENTS, type AccentKey } from "@/lib/accents";

const METRIC_ICONS = [Radar, MessageSquare, UserCheck, CalendarCheck, Crown];

export function Results() {
  const { results } = pageStory;

  return (
    <section id="results" className="section-grey" aria-labelledby="results-heading">
      <div className="page-wrap">
        <Reveal>
          <p className="text-center text-[12px] font-bold uppercase tracking-[0.16em] text-[#EC4899]">
            {results.eyebrow}
          </p>
          <h2 id="results-heading" className="t-section mx-auto mt-4 max-w-[620px] text-center">
            {results.headline}
          </h2>
          <p className="t-body mx-auto mt-4 max-w-[560px] text-center">{results.subhead}</p>
        </Reveal>

        <Reveal>
          <div className="mx-auto mt-12 grid max-w-[1000px] grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {results.metrics.map((m, i) => {
              const Icon = METRIC_ICONS[i] ?? Radar;
              const accent = ACCENTS[m.color as AccentKey];
              return (
                <div
                  key={m.label}
                  className="tf-soft tf-lift flex flex-col rounded-[18px] border border-[#ECECEC] bg-white p-5"
                >
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-[11px]"
                    style={{ background: accent.bg, color: accent.fg }}
                  >
                    <Icon size={19} strokeWidth={1.9} />
                  </span>
                  <p className="mt-4 text-[30px] font-extrabold leading-none tracking-[-0.02em] text-[#0a0a0a]">
                    <AnimatedCounter value={m.value} />
                  </p>
                  <p className="mt-2 text-[13px] font-medium leading-snug text-[#6b6b6b]">{m.label}</p>
                </div>
              );
            })}
          </div>

          <p className="mt-6 text-center text-[12.5px] text-[#9a9a9a]">
            Illustrative example of the metrics TractionFlo tracks for you.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
