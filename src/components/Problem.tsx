import { MessageCircle, Send, CircleDashed, AtSign, UserPlus, ArrowDown } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { pageStory } from "@/lib/pageStory";
import { ACCENTS, type AccentKey } from "@/lib/accents";

const ITEM_ICONS = [MessageCircle, Send, CircleDashed, AtSign, UserPlus];

export function Problem() {
  const { problem } = pageStory;

  return (
    <section id="problem" className="section-grey" aria-labelledby="problem-heading">
      <div className="page-wrap">
        <Reveal>
          <p className="text-center text-[12px] font-bold uppercase tracking-[0.16em] text-[#EC4899]">
            {problem.eyebrow}
          </p>
          <h2 id="problem-heading" className="t-section mx-auto mt-4 max-w-[680px] text-center">
            {problem.headline}
          </h2>
          <p className="t-body mx-auto mt-5 max-w-[640px] text-center">{problem.body}</p>
        </Reveal>

        <Reveal>
          <div className="mx-auto mt-12 grid max-w-[760px] grid-cols-2 gap-3 sm:grid-cols-5">
            {problem.items.map((item, i) => {
              const Icon = ITEM_ICONS[i] ?? MessageCircle;
              const accent = ACCENTS[item.color as AccentKey];
              return (
                <div
                  key={item.label}
                  className="tf-soft tf-lift flex flex-col items-center rounded-[16px] border border-[#ECECEC] bg-white px-3 py-4 text-center"
                >
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-[11px]"
                    style={{ background: accent.bg, color: accent.fg }}
                  >
                    <Icon size={18} strokeWidth={1.9} />
                  </span>
                  <p className="mt-2.5 text-[12.5px] font-bold text-[#0a0a0a]">{item.label}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-6 flex flex-col items-center gap-2 text-center">
            <ArrowDown size={18} className="text-[#d4d4d4]" aria-hidden />
            <p className="text-[13.5px] font-semibold text-[#9a9a9a]">
              Lost every day without a system to capture them.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
