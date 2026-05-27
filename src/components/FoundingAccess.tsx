import { Check } from "lucide-react";
import { HandAnnotation } from "@/components/ui/HandAnnotation";
import { QuizTrigger } from "@/components/quiz/QuizTrigger";
import {
  FOUNDER_BENEFITS,
  FOUNDER_DISCOUNT_PERCENT,
  FOUNDER_PRO_PRICE_EXAMPLE,
  FOUNDER_SPOTS_TOTAL,
  founderPriceExample,
  foundingCopy,
} from "@/lib/founding";

export function FoundingAccess() {
  return (
    <section id="founding" className="section-grey" aria-labelledby="founding-heading">
      <div className="page-wrap">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
          <div className="min-w-0">
            <p className="inline-flex items-center gap-2 rounded-full border border-[#bef227]/60 bg-[#f4fce0] px-3 py-1.5 text-[12px] font-bold uppercase tracking-[0.08em] text-[#111]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#8ab800]" aria-hidden />
              {foundingCopy.spotsLabel}
            </p>
            <h2 id="founding-heading" className="t-section mt-4">
              Be an early founder.
              <br />
              Not just another user.
            </h2>
            <p className="t-body mt-5 max-w-md">
              Join while we build. Get {FOUNDER_DISCOUNT_PERCENT}% of Pro pricing forever — locked
              in before public launch.
            </p>

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
            <p className="mt-3 text-[14px] text-[#888]">No credit card. Free to join.</p>
          </div>

          <div className="relative min-w-0 lg:pt-2">
            <HandAnnotation className="mb-4 block text-right lg:absolute lg:right-0 lg:-top-1 lg:mb-0">
              {foundingCopy.limitedShort} →
            </HandAnnotation>

            <div className="founder-pricing-card mt-2 lg:mt-8">
              <p className="founder-pricing-hero">90 days free</p>
              <p className="mt-3 text-[15px] font-medium text-[#666]">while we shape the product with you</p>

              <p className="mt-8 text-[15px] font-medium text-[#666]">then only</p>
              <p className="mt-2 text-[2.25rem] font-bold leading-none tracking-[-0.04em] text-[#111] md:text-[2.75rem]">
                {FOUNDER_DISCOUNT_PERCENT}% of Pro pricing
              </p>
              <p className="mt-2 text-[16px] font-semibold text-[#111]">locked forever</p>

              <div className="mt-8 rounded-[14px] bg-[#fafafa] px-5 py-4 text-left">
                <p className="text-[14px] leading-relaxed text-[#666]">
                  Example: if Pro is{" "}
                  <strong className="font-semibold text-[#111]">${FOUNDER_PRO_PRICE_EXAMPLE}/mo</strong>,
                  you pay{" "}
                  <strong className="font-semibold text-[#8ab800]">${founderPriceExample}/mo</strong>
                </p>
              </div>

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
