import { QuizTrigger } from "@/components/quiz/QuizTrigger";
import { Reveal } from "@/components/ui/Reveal";
import { conversionCopy } from "@/lib/conversion";
import { pageStory } from "@/lib/pageStory";

export function FinalCta() {
  const { finalCta } = pageStory;

  return (
    <section id="final-cta" className="final-cta-band" aria-labelledby="final-cta-heading">
      <div className="page-wrap text-center">
        <Reveal>
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#bef227]">
            {finalCta.eyebrow}
          </p>
          <h2
            id="final-cta-heading"
            className="mx-auto mt-3 max-w-[680px] text-[2rem] font-bold leading-[1.08] tracking-[-0.03em] text-white sm:text-[2.5rem] md:text-[3rem]"
          >
            {finalCta.headline}
          </h2>
          <p className="mx-auto mt-5 max-w-[480px] text-[1.0625rem] leading-relaxed text-white/70">
            {finalCta.subhead}
          </p>
          <QuizTrigger size="lg" className="btn-lime-mobile-full mt-8">
            {conversionCopy.primaryCta}
          </QuizTrigger>
          <p className="mt-3 text-[13px] font-medium text-white/55">{conversionCopy.riskReversal}</p>
        </Reveal>
      </div>
    </section>
  );
}
