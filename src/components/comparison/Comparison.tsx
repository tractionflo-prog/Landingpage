import { BrushHighlight } from "@/components/ui/BrushHighlight";
import { HandAnnotation } from "@/components/ui/HandAnnotation";
import { Reveal } from "@/components/ui/Reveal";
import { pageStory } from "@/lib/pageStory";
import { ScatteredTools } from "./ScatteredTools";
import { OnePlatform } from "./OnePlatform";

export function Comparison() {
  const { comparison } = pageStory;

  return (
    <section id="comparison" className="section-white" aria-labelledby="comparison-heading">
      <div className="page-wrap">
        <Reveal>
          <p className="text-center text-[11px] font-bold uppercase tracking-[0.14em] text-[#999]">
            {comparison.eyebrow}
          </p>
          <h2 id="comparison-heading" className="t-section mx-auto mt-3 max-w-[720px] text-center">
            More Tools. More Leaks.
            <br />
            One System. <BrushHighlight>More Revenue.</BrushHighlight>
          </h2>
          <p className="mx-auto mt-4 max-w-[560px] text-center text-[1.0625rem] text-[#666]">
            {comparison.subhead}
          </p>
        </Reveal>

        <div className="relative mt-10 grid gap-5 sm:mt-12 sm:gap-6 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch lg:gap-5">
          <div className="card flex flex-col p-4 sm:p-6">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#999]">
                The old way
              </p>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#fee2e2] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-[#c0292b]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#ef4444]" /> Disconnected
              </span>
            </div>
            <ScatteredTools />
            <HandAnnotation className="mt-4 !text-[#f87171]">
              Five tools. Five bills. One mess.
            </HandAnnotation>
          </div>

          <div className="flex items-center justify-center py-2 lg:py-0">
            <span className="vs-badge">VS</span>
          </div>

          <div className="card flex flex-col p-4 sm:p-6">
            <div className="mb-4 flex items-center justify-between">
              <span className="inline-block rounded-full bg-[#bef227] px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-[#111]">
                TractionFlo
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#f4fce0] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-[#4d7c0f]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#8ab800]" /> Connected
              </span>
            </div>
            <OnePlatform />
            <HandAnnotation className="mt-4">Everything in one place. →</HandAnnotation>
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-[600px] text-center text-[14px] leading-relaxed text-[#666] sm:text-[15px]">
          {comparison.note}
        </p>
      </div>
    </section>
  );
}
