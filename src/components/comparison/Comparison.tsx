import { X } from "lucide-react";
import { BrushHighlight } from "@/components/ui/BrushHighlight";
import { HandAnnotation } from "@/components/ui/HandAnnotation";
import { OldWayVisual } from "./OldWayVisual";
import { ComparisonDemo } from "./ComparisonDemo";

const OLD = [
  "Open builder",
  "Connect arrows",
  "Add conditions",
  "Test workflow",
  "Fix errors",
  "Waste hours",
];

export function Comparison() {
  return (
    <section id="comparison" className="section-white" aria-labelledby="comparison-heading">
      <div className="page-wrap">
        <h2 id="comparison-heading" className="t-section text-center">
          Same outcomes.
          <br />
          <BrushHighlight>10× simpler.</BrushHighlight>
        </h2>

        <div className="relative mt-8 grid gap-5 sm:mt-12 sm:gap-6 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch lg:gap-5">
          {/* OLD */}
          <div className="card p-4 sm:p-6">
            <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.14em] text-[#999]">
              The old way
            </p>
            <OldWayVisual />
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {OLD.map((item) => (
                <div key={item} className="flex items-center gap-2 text-[13px] text-[#666]">
                  <X size={15} className="shrink-0 text-[#f87171]" strokeWidth={2.5} />
                  {item}
                </div>
              ))}
            </div>
            <HandAnnotation className="mt-5 !text-[#f87171]">
              Complex. Confusing. Time-consuming.
            </HandAnnotation>
          </div>

          {/* VS */}
          <div className="flex items-center justify-center py-2 lg:py-0">
            <span className="vs-badge">VS</span>
          </div>

          {/* NEW */}
          <ComparisonDemo />
        </div>
      </div>
    </section>
  );
}
