import { Check, X } from "lucide-react";
import { BrushHighlight } from "@/components/ui/BrushHighlight";
import { pageStory } from "@/lib/pageStory";

export function WhoFor() {
  const { whoFor } = pageStory;

  return (
    <section id="who-for" className="section-grey" aria-labelledby="who-for-heading">
      <div className="page-wrap max-w-[900px]">
        <p className="text-center text-[11px] font-bold uppercase tracking-[0.14em] text-[#999]">
          {whoFor.eyebrow}
        </p>
        <h2 id="who-for-heading" className="t-section mx-auto mt-3 max-w-[620px] text-center">
          Built for people who <BrushHighlight>sell in the DMs.</BrushHighlight>
        </h2>

        <div className="mt-10 grid gap-4 sm:gap-5 md:grid-cols-2">
          <div className="card card-lift p-6 sm:p-7">
            <p className="text-[13px] font-bold uppercase tracking-[0.1em] text-[#4d7c0f]">
              TractionFlo is for you if
            </p>
            <ul className="mt-5 space-y-3">
              {whoFor.forYou.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#eef9c4]">
                    <Check size={14} className="text-[#6fa800]" strokeWidth={2.5} />
                  </span>
                  <span className="text-[15px] font-medium leading-snug text-[#111]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card p-6 sm:p-7">
            <p className="text-[13px] font-bold uppercase tracking-[0.1em] text-[#999]">
              Probably not for you if
            </p>
            <ul className="mt-5 space-y-3">
              {whoFor.notForYou.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#f4f4f5]">
                    <X size={14} className="text-[#aaa]" strokeWidth={2.5} />
                  </span>
                  <span className="text-[15px] font-medium leading-snug text-[#777]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
