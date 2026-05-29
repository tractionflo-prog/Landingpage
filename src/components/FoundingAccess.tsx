import { Check } from "lucide-react";
import { HandAnnotation } from "@/components/ui/HandAnnotation";
import { QuizTrigger } from "@/components/quiz/QuizTrigger";
import {
  FOUNDER_BENEFITS,
  FOUNDER_DISCOUNT_PERCENT,
  FOUNDER_SPOTS_TOTAL,
  foundingCopy,
} from "@/lib/founding";
import { pageStory } from "@/lib/pageStory";

export function FoundingAccess() {
  const { founding } = pageStory;

  return (
    <section id="founding" className="offer-glow section-grey" aria-labelledby="founding-heading">
      <div className="page-wrap">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
          <div className="min-w-0">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#999]">
              {founding.eyebrow}
            </p>
            <h2 id="founding-heading" className="t-section mt-3">
              Be an early founder.
              <br />
              Not just another user.
            </h2>
            <p className="t-body mt-5 max-w-md">{founding.subhead}</p>

            <ul className="mt-8 space-y-4">
              {FOUNDER_BENEFITS.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#eef9c4]">
                    <Check size={14} className="text-[#6fa800]" strokeWidth={2.5} />
                  </span>
                  <span className="text-[15px] font-medium leading-snug text-[#111]">{benefit}</span>
                </li>
              ))}
            </ul>

            <QuizTrigger size="lg" className="btn-lime-mobile-full mt-10">
              {foundingCopy.cta}
            </QuizTrigger>
            <p className="mt-3 text-[13px] font-medium text-[#888]">
              90 days free · No credit card · {FOUNDER_SPOTS_TOTAL} spots only
            </p>

            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
              {[
                "Cancel anytime",
                "No card to join",
                "Price locked for life",
              ].map((item) => (
                <span key={item} className="flex items-center gap-1.5 text-[13px] font-medium text-[#555]">
                  <Check size={14} className="text-[#6fa800]" strokeWidth={2.5} />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative min-w-0 lg:pt-2">
            <HandAnnotation className="mb-4 block text-right lg:absolute lg:right-0 lg:-top-1 lg:mb-0">
              {foundingCopy.limitedShort} →
            </HandAnnotation>

            <div className="founder-pricing-card mt-2 lg:mt-8">
              <p className="founder-pricing-hero">90 days free</p>
              <p className="mt-3 text-[15px] font-medium text-[#666]">
                Full access while we build with you
              </p>

              <p className="mt-8 text-[15px] font-medium text-[#666]">Then only</p>
              <p className="mt-2 text-[2.25rem] font-bold leading-none tracking-[-0.04em] text-[#111] md:text-[2.75rem]">
                {FOUNDER_DISCOUNT_PERCENT}% of Pro pricing
              </p>
              <p className="mt-2 text-[16px] font-semibold text-[#111]">locked forever</p>
              <p className="mt-3 text-[14px] leading-relaxed text-[#666]">
                Whatever Pro costs at launch, you stay at a tenth of it — for life.
              </p>

              <p className="mt-8 text-[13px] font-bold uppercase tracking-[0.12em] text-[#111]">
                {FOUNDER_SPOTS_TOTAL} spots only
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
