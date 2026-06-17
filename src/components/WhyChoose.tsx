import { Target, MessageCircle, BarChart3, Clock } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { pageStory } from "@/lib/pageStory";

const ICONS = [Target, MessageCircle, BarChart3, Clock];

export function WhyChoose() {
  const { whyChoose } = pageStory;

  return (
    <section id="why-choose" className="section-white" aria-labelledby="why-choose-heading">
      <div className="page-wrap">
        <Reveal>
          <h2 id="why-choose-heading" className="t-section mx-auto max-w-[720px] text-center">
            {whyChoose.headline}
          </h2>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-[1000px] gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {whyChoose.items.map((item, i) => {
            const Icon = ICONS[i] ?? Target;
            return (
              <div key={item.label} className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EFF6FF] text-[#0073EA]">
                  <Icon size={20} strokeWidth={1.9} />
                </span>
                <div>
                  <p className="text-[15px] font-bold text-[#111827]">{item.label}</p>
                  <p className="mt-1 text-[13px] leading-relaxed text-[#6B7280]">{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
