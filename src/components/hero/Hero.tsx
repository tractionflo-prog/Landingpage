"use client";

import { BrushHighlight } from "@/components/ui/BrushHighlight";
import { QuizTrigger } from "@/components/quiz/QuizTrigger";
import { foundingCopy } from "@/lib/founding";
import { HeroDemo } from "./HeroDemo";
import { HeroDemoStatic } from "./HeroDemoStatic";

const AVATARS = ["#f9a8d4", "#7dd3fc", "#fcd34d", "#c4b5fd", "#6ee7b7"];

function IgIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="section-white !pt-10 !pb-12 sm:!pt-12 sm:!pb-16 md:!pt-16 md:!pb-20" aria-labelledby="hero-heading">
      <div className="page-wrap grid items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-10">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-[#bef227]/60 bg-[#f4fce0] px-3 py-1.5 text-[12px] font-bold uppercase tracking-[0.08em] text-[#111]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#8ab800]" aria-hidden />
            {foundingCopy.spotsShort} · {foundingCopy.limitedShort}
          </p>

          <h1 id="hero-heading" className="t-hero mt-4 sm:mt-5">
            Help businesses
            <br />
            grow with{" "}
            <BrushHighlight>intelligent workflows.</BrushHighlight>
          </h1>

          <p className="t-body mt-6 max-w-[440px]">
            Turn comments, DMs and followers into leads, follow-ups and customers.
          </p>
          <p className="mt-3 text-[1.0625rem] leading-[1.65] text-[#111]">
            Without complex builders.
            <br />
            Without setup headaches.
          </p>

          <QuizTrigger size="lg" className="btn-lime-mobile-full mt-6 sm:mt-8" />

          <div className="mt-6 flex items-center gap-3">
            <div className="flex -space-x-2">
              {AVATARS.map((c, i) => (
                <div
                  key={i}
                  className="h-9 w-9 rounded-full border-2 border-white"
                  style={{ background: c }}
                />
              ))}
            </div>
            <p className="text-[14px] text-[#666]">
              <strong className="font-semibold text-[#111]">100</strong> founder spots — limited
              availability
            </p>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-2 text-[14px] text-[#666]">
            <span className="flex items-center gap-1.5 font-medium text-[#111]">
              <IgIcon /> Instagram first
            </span>
            <span className="text-[#ddd]">|</span>
            <span>TikTok + YouTube coming next</span>
          </div>
        </div>

        <div className="md:hidden">
          <HeroDemoStatic />
        </div>
        <div className="hidden md:block">
          <HeroDemo />
        </div>
      </div>
    </section>
  );
}
