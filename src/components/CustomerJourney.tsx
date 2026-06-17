import { Radar, MessageCircle, UserCheck, DollarSign } from "lucide-react";
import { Fragment } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { pageStory } from "@/lib/pageStory";
import { ACCENTS } from "@/lib/accents";

const STEP_STYLE = [
  { icon: Radar, accent: ACCENTS.pink },
  { icon: MessageCircle, accent: ACCENTS.orange },
  { icon: UserCheck, accent: ACCENTS.blue },
  { icon: DollarSign, accent: ACCENTS.green },
];

export function CustomerJourney() {
  const { journey } = pageStory;

  return (
    <section id="journey" className="section-white" aria-labelledby="journey-heading">
      <div className="page-wrap">
        <Reveal>
          <p className="text-center text-[12px] font-bold uppercase tracking-[0.16em] text-[#EC4899]">
            {journey.eyebrow}
          </p>
          <h2 id="journey-heading" className="t-section mx-auto mt-4 max-w-[620px] text-center">
            {journey.headline}
          </h2>
          {journey.subhead && (
            <p className="t-body mx-auto mt-4 max-w-[560px] text-center">{journey.subhead}</p>
          )}
        </Reveal>

        <ol className="mx-auto mt-16 grid max-w-[1000px] gap-10 sm:grid-cols-2 lg:flex lg:items-start lg:justify-between lg:gap-4">
          {journey.steps.map((step, i) => {
            const { icon: Icon, accent } = STEP_STYLE[i] ?? STEP_STYLE[0];
            const isLast = i === journey.steps.length - 1;
            return (
              <Fragment key={step.label}>
                <li className="flex flex-1 flex-col items-center text-center lg:px-2">
                  <span
                    className="flex h-16 w-16 items-center justify-center rounded-[18px]"
                    style={{ background: accent.bg, color: accent.fg }}
                  >
                    <Icon size={28} strokeWidth={1.8} />
                  </span>
                  <p className="mt-5 text-[16px] font-bold tracking-[-0.01em] text-[#0a0a0a]">
                    {i + 1}. {step.label}
                  </p>
                  <p className="mt-2 max-w-[210px] text-[13px] leading-relaxed text-[#6b6b6b]">
                    {step.text}
                  </p>
                </li>
                {!isLast && (
                  <span className="hidden shrink-0 self-start pt-8 lg:block" aria-hidden>
                    <svg width="48" height="12" viewBox="0 0 48 12">
                      <line x1="0" y1="6" x2="40" y2="6" stroke="#d4d4d4" strokeWidth="2" strokeDasharray="4 4" />
                      <path d="M40 2 L46 6 L40 10" fill="none" stroke="#d4d4d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                )}
              </Fragment>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
