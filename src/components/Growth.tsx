import {
  Magnet,
  ShoppingCart,
  Calendar,
  Users,
  BarChart3,
} from "lucide-react";
import { BrushHighlight } from "@/components/ui/BrushHighlight";
import { Reveal } from "@/components/ui/Reveal";
import { pageStory } from "@/lib/pageStory";

const CARDS = [
  {
    Icon: Magnet,
    title: "Get more leads",
    desc: "From the followers you already have.",
  },
  {
    Icon: ShoppingCart,
    title: "Sell more",
    desc: "Reply while intent is still hot.",
  },
  {
    Icon: Calendar,
    title: "Book more calls",
    desc: "With people who already raised their hand.",
  },
  {
    Icon: Users,
    title: "Re-engage followers",
    desc: "Wake up silent buyers before they churn.",
  },
  {
    Icon: BarChart3,
    title: "Increase revenue",
    desc: "Without buying more ads or posting more.",
  },
];

export function Growth() {
  const { outcomes } = pageStory;

  return (
    <section id="growth" className="section-white" aria-labelledby="growth-heading">
      <div className="page-wrap">
        <Reveal>
          <p className="text-center text-[11px] font-bold uppercase tracking-[0.14em] text-[#999]">
            {outcomes.eyebrow}
          </p>
          <h2 id="growth-heading" className="t-section mx-auto mt-3 max-w-[720px] text-center">
            Five outcomes. <BrushHighlight>One inbox.</BrushHighlight>
          </h2>
          <p className="mx-auto mt-4 max-w-[480px] text-center text-[1.0625rem] text-[#666]">
            {outcomes.subhead}
          </p>
        </Reveal>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4">
          {CARDS.map(({ Icon, title }) => (
            <div
              key={title}
              className="card-lift flex flex-col items-center gap-3 rounded-[16px] border border-black/[0.07] bg-white px-3 py-6 text-center"
            >
              <div className="growth-icon">
                <Icon size={20} strokeWidth={1.6} />
              </div>
              <p className="text-[14px] font-bold leading-snug tracking-[-0.01em]">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
