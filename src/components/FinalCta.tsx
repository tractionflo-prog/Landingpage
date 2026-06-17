import { Check } from "lucide-react";
import { QuizTrigger } from "@/components/quiz/QuizTrigger";
import { Reveal } from "@/components/ui/Reveal";
import { BrushHighlight } from "@/components/ui/BrushHighlight";
import { conversionCopy } from "@/lib/conversion";
import { pageStory } from "@/lib/pageStory";

export function FinalCta() {
  const { finalCta } = pageStory;

  return (
    <section id="final-cta" className="final-cta-band" aria-labelledby="final-cta-heading">
      <div className="page-wrap text-center">
        <Reveal>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(0,115,234,0.2)] bg-[#EFF6FF] px-3 py-1 text-[12px] font-bold uppercase tracking-[0.08em] text-[#0073EA]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#0073EA]" aria-hidden />
            {conversionCopy.scarcityLine}
          </span>
          <h2 id="final-cta-heading" className="t-section mx-auto mt-5 max-w-[680px]">
            {finalCta.headline}
            <br />
            <BrushHighlight>{finalCta.headlineAccent}</BrushHighlight>
          </h2>
          {finalCta.subhead && (
            <p className="t-body mx-auto mt-4 max-w-[520px]">{finalCta.subhead}</p>
          )}
          <QuizTrigger size="lg" className="btn-lime-mobile-full mt-8">
            {conversionCopy.primaryCta}
          </QuizTrigger>
          <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px] font-medium text-[#6B7280]">
            {finalCta.trust.map((t) => (
              <li key={t} className="flex items-center gap-1.5">
                <Check size={14} strokeWidth={2.6} className="text-[#0073EA]" />
                {t}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
