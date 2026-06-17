import { Check, X } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { pageStory } from "@/lib/pageStory";

export function Comparison() {
  const { compare } = pageStory;

  return (
    <section id="compare" className="section-white" aria-labelledby="compare-heading">
      <div className="page-wrap">
        <Reveal>
          <p className="text-center text-[12px] font-bold uppercase tracking-[0.16em] text-[#EC4899]">
            {compare.eyebrow}
          </p>
          <h2 id="compare-heading" className="t-section mx-auto mt-4 max-w-[680px] text-center">
            {compare.headline}
          </h2>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-[860px] items-start gap-5 sm:grid-cols-2">
          {/* Others */}
          <div className="tf-soft tf-lift rounded-[20px] border border-[#ECECEC] bg-white p-7">
            <p className="text-[16px] font-bold text-[#9a9a9a]">{compare.others.name}</p>
            <ul className="mt-6 space-y-4">
              {compare.others.points.map((p) => (
                <li key={p} className="flex items-center gap-3 text-[15px] text-[#6b6b6b]">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F5F5F5] text-[#bdbdbd]">
                    <X size={13} strokeWidth={3} />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {/* TractionFlo — highlighted */}
          <div
            className="tf-soft tf-lift relative rounded-[20px] border-2 p-7"
            style={{ background: "#FFF7ED", borderColor: "#FBBF7333" }}
          >
            {compare.us.badge && (
              <span className="absolute right-5 top-6 rounded-full bg-[#FCEBD8] px-3 py-1 text-[11px] font-bold text-[#C2620E]">
                {compare.us.badge}
              </span>
            )}
            <div className="flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-[7px] bg-[#0a0a0a] text-[11px] font-bold text-white">
                TF
              </span>
              <p className="text-[16px] font-extrabold text-[#0a0a0a]">{compare.us.name}</p>
            </div>
            <ul className="mt-6 space-y-4">
              {compare.us.points.map((p) => (
                <li key={p} className="flex items-center gap-3 text-[15px] font-semibold text-[#0a0a0a]">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#22C55E] text-white">
                    <Check size={14} strokeWidth={3} />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
