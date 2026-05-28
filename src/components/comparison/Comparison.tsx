import { X } from "lucide-react";
import { BrushHighlight } from "@/components/ui/BrushHighlight";
import { HandAnnotation } from "@/components/ui/HandAnnotation";
import { Reveal } from "@/components/ui/Reveal";
import { pageStory } from "@/lib/pageStory";
import { OldWayVisual } from "./OldWayVisual";
import { ComparisonDemo } from "./ComparisonDemo";
import { ComparisonDemoStatic } from "./ComparisonDemoStatic";

const OLD = [
  "Complex automation builders",
  "Hours of setup",
  "Hard to maintain",
  "Built for technical users",
];

export function Comparison() {
  const { comparison } = pageStory;

  return (
    <section id="comparison" className="section-grey" aria-labelledby="comparison-heading">
      <div className="page-wrap">
        <Reveal>
          <p className="text-center text-[11px] font-bold uppercase tracking-[0.14em] text-[#999]">
            {comparison.eyebrow}
          </p>
          <h2 id="comparison-heading" className="t-section mx-auto mt-3 max-w-[720px] text-center">
            Same revenue. <BrushHighlight>10× simpler.</BrushHighlight>
          </h2>
          <p className="mx-auto mt-4 max-w-[560px] text-center text-[1.0625rem] text-[#666]">
            {comparison.subhead}
          </p>
        </Reveal>

        <div className="relative mt-10 grid gap-5 sm:mt-12 sm:gap-6 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch lg:gap-5">
          <div className="card p-4 sm:p-6">
            <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.14em] text-[#999]">
              The old way
            </p>
            <OldWayVisual />
            <div className="grid grid-cols-1 gap-y-2 sm:grid-cols-2 sm:gap-x-4">
              {OLD.map((item) => (
                <div key={item} className="flex items-center gap-2 text-[13px] text-[#666]">
                  <X size={15} className="shrink-0 text-[#f87171]" strokeWidth={2.5} />
                  {item}
                </div>
              ))}
            </div>
            <HandAnnotation className="mt-5 !text-[#f87171]">
              Complex. Slow. Easy to quit.
            </HandAnnotation>
          </div>

          <div className="flex items-center justify-center py-2 lg:py-0">
            <span className="vs-badge">VS</span>
          </div>

          <div className="md:hidden">
            <ComparisonDemoStatic />
          </div>
          <div className="hidden md:block">
            <ComparisonDemo />
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-[600px] text-center text-[14px] leading-relaxed text-[#666] sm:text-[15px]">
          {comparison.note}
        </p>
      </div>
    </section>
  );
}
