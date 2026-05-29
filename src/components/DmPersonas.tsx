import { Flame, HelpCircle, Eye, RefreshCw } from "lucide-react";
import { QuizTrigger } from "@/components/quiz/QuizTrigger";
import { Reveal } from "@/components/ui/Reveal";
import { conversionCopy } from "@/lib/conversion";
import { pageStory } from "@/lib/pageStory";

const ICONS = [Flame, HelpCircle, Eye, RefreshCw];

type PersonaItem = {
  tag: string;
  signal: string;
  star?: boolean;
  starLabel?: string;
};

export function DmPersonas() {
  const { personas } = pageStory;

  return (
    <section id="who-to-message" className="section-grey" aria-labelledby="personas-heading">
      <div className="page-wrap">
        <Reveal>
          <p className="text-center text-[11px] font-bold uppercase tracking-[0.14em] text-[#999]">
            {personas.eyebrow}
          </p>
          <h2 id="personas-heading" className="t-section mx-auto mt-3 max-w-[680px] text-center">
            {personas.headline}
          </h2>
          <p className="mx-auto mt-4 max-w-[480px] text-center text-[1.0625rem] text-[#666]">
            {personas.subhead}
          </p>
        </Reveal>

        <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {(personas.items as readonly PersonaItem[]).map((item, i) => {
            const Icon = ICONS[i] ?? Flame;
            return (
              <div
                key={item.tag}
                className={`card-lift relative flex flex-col gap-3 rounded-[16px] border p-5 ${
                  item.star
                    ? "border-[#bef227] bg-[#f4fce0]/50 ring-1 ring-[#bef227]/40"
                    : "border-black/[0.07] bg-white"
                }`}
              >
                {item.star && item.starLabel && (
                  <span className="absolute -top-2.5 left-4 rounded-full bg-[#bef227] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-[#1a1a1a]">
                    {item.starLabel}
                  </span>
                )}
                <span
                  className={`flex h-9 w-9 items-center justify-center rounded-[10px] ${
                    item.star ? "bg-[#bef227] text-[#111]" : "bg-[#f4fce0] text-[#6fa800]"
                  }`}
                >
                  <Icon size={18} strokeWidth={1.8} />
                </span>
                <div>
                  <p className="text-[15px] font-bold tracking-[-0.01em] text-[#111]">{item.tag}</p>
                  <p className="mt-1 text-[13.5px] leading-relaxed text-[#666]">{item.signal}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-9 flex flex-col items-center text-center">
          <p className="max-w-[480px] text-[1.0625rem] font-semibold text-[#111]">
            {personas.note}
          </p>
          <QuizTrigger size="lg" className="btn-lime-mobile-full mt-6">
            {conversionCopy.primaryCta}
          </QuizTrigger>
          <p className="mt-3 text-[13px] font-medium text-[#888]">{conversionCopy.riskReversal}</p>
        </div>
      </div>
    </section>
  );
}
