import { User, Briefcase, Building2, GraduationCap, LineChart } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { GradientText } from "@/components/ui/GradientText";
import { pageStory } from "@/lib/pageStory";
import { ACCENTS, type AccentKey } from "@/lib/accents";

const ICONS = [User, Briefcase, Building2, GraduationCap, LineChart];

export function WhoItsFor() {
  const { whoItsFor } = pageStory;

  return (
    <section id="who" className="section-grey !py-16 md:!py-20" aria-labelledby="who-heading">
      <div className="page-wrap">
        <Reveal>
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-14">
            <h2 id="who-heading" className="text-[clamp(1.5rem,3.5vw,2rem)] font-bold leading-tight tracking-[-0.02em] text-[#0a0a0a]">
              {whoItsFor.headlinePre}
              <GradientText>{whoItsFor.headlineAccent}</GradientText>
            </h2>

            <div className="grid grid-cols-3 gap-x-4 gap-y-8 sm:grid-cols-5">
              {whoItsFor.personas.map((p, i) => {
                const Icon = ICONS[i] ?? User;
                const accent = ACCENTS[p.color as AccentKey];
                return (
                  <div key={p.label} className="flex flex-col items-center gap-2.5 text-center">
                    <span
                      className="flex h-12 w-12 items-center justify-center rounded-[14px]"
                      style={{ background: accent.bg, color: accent.fg }}
                    >
                      <Icon size={22} strokeWidth={1.8} />
                    </span>
                    <span className="text-[12.5px] font-semibold leading-tight text-[#0a0a0a]">
                      {p.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
