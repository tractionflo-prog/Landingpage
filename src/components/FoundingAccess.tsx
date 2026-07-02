import { Check } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { OutcomeStats } from "@/components/ui/OutcomeStats";
import { QuizTrigger } from "@/components/quiz/QuizTrigger";
import { pageStory } from "@/lib/pageStory";

export function FoundingAccess() {
  const { founding } = pageStory;

  return (
    <section id="founding" className="section-white sec-green" aria-labelledby="founding-heading">
      <div className="page-wrap">
        <Reveal>
          <div className="flex justify-center">
            <span className="cv-eyebrow">
              <span className="cv-idx">{founding.index}</span>
              <span className="cv-label">{founding.eyebrow}</span>
            </span>
          </div>
          <h2 id="founding-heading" className="t-section mx-auto mt-5 max-w-[620px] text-center">
            {founding.headline}
          </h2>
          <p className="t-body mx-auto mt-4 max-w-[560px] text-center">{founding.subhead}</p>
        </Reveal>

        <OutcomeStats stats={founding.stats} className="mx-auto mt-10 max-w-[680px]" />

        <Reveal>
          <div
            className="tf-soft mx-auto mt-8 max-w-[680px] rounded-[24px] border p-[1px]"
            style={{ borderColor: "var(--sec-accent)", background: "var(--sec-accent-soft)" }}
          >
            <div className="rounded-[23px] bg-white px-7 py-9 sm:px-10 sm:py-10">
              {/* Plan + price */}
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center gap-3">
                  <p className="text-[15px] font-bold text-[#0a0a0a]">{founding.planName}</p>
                  <span
                    className="rounded-full px-3 py-1 text-[11px] font-bold"
                    style={{ background: "var(--sec-accent-soft)", color: "var(--sec-accent-ink)" }}
                  >
                    {founding.publicPrice}
                  </span>
                </div>
                <div className="mt-5 flex items-baseline justify-center gap-1">
                  <span className="text-[56px] font-extrabold leading-none tracking-[-0.03em] text-[#0a0a0a]">
                    {founding.price}
                  </span>
                  <span className="text-[16px] font-semibold text-[#6b6b6b]">{founding.period}</span>
                </div>
                <p className="mt-3 text-[14px] font-medium text-[#6b6b6b]">{founding.priceNote}</p>

                <QuizTrigger size="lg" className="btn-lime-mobile-full mt-7 w-full sm:w-auto">
                  {founding.cta}
                </QuizTrigger>

                <p className="mt-4 flex items-center gap-2 text-[13px] font-semibold text-[#0a0a0a]">
                  <span
                    className="h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ background: "var(--sec-accent-ink)" }}
                    aria-hidden
                  />
                  {founding.scarcity}
                </p>
                <p className="mt-1 text-[12.5px] text-[#9a9a9a]">{founding.fineprint}</p>
              </div>

              <div className="my-8 h-px bg-[#ECECEC]" />

              {/* Features + founder benefits */}
              <div className="grid gap-8 sm:grid-cols-2">
                <div>
                  <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#9a9a9a]">
                    Everything included
                  </p>
                  <ul className="mt-4 space-y-3">
                    {founding.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-[14px] text-[#0a0a0a]">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#22C55E] text-white">
                          <Check size={12} strokeWidth={3} />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#9a9a9a]">
                    Founder benefits
                  </p>
                  <ul className="mt-4 space-y-3">
                    {founding.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-[14px] text-[#0a0a0a]">
                        <span
                          className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-white"
                          style={{ background: "var(--sec-accent-ink)" }}
                        >
                          <Check size={12} strokeWidth={3} />
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
