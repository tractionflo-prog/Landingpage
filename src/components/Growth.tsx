import {
  Magnet,
  ShoppingCart,
  Calendar,
  Users,
  BarChart3,
} from "lucide-react";

const CARDS = [
  {
    Icon: Magnet,
    title: "Get more leads",
    desc: "Capture more people from comments, DMs and engagement.",
  },
  {
    Icon: ShoppingCart,
    title: "Sell more",
    desc: "Qualify leads, answer questions and close more sales.",
  },
  {
    Icon: Calendar,
    title: "Book more calls",
    desc: "Fill your calendar with qualified prospects on autopilot.",
  },
  {
    Icon: Users,
    title: "Engage & nurture",
    desc: "Follow up, re-engage and turn cold leads into warm buyers.",
  },
  {
    Icon: BarChart3,
    title: "Increase revenue",
    desc: "More conversations. More leads. More customers.",
  },
];

export function Growth() {
  return (
    <section id="growth" className="section-white">
      <div className="page-wrap">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {CARDS.map(({ Icon, title, desc }) => (
            <div key={title} className="growth-card">
              <div className="growth-icon">
                <Icon size={22} strokeWidth={1.5} />
              </div>
              <h3 className="mt-5 text-[17px] font-bold tracking-[-0.02em]">{title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-[#666]">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
