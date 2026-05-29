import { Users, MessageCircle, Tag, CreditCard, UserCheck } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { pageStory } from "@/lib/pageStory";

const ICONS = [Users, MessageCircle, Tag, CreditCard, UserCheck];

export function CustomerJourney() {
  const { journey } = pageStory;

  return (
    <section id="journey" className="section-white" aria-labelledby="journey-heading">
      <div className="page-wrap">
        <Reveal>
          <p className="text-center text-[11px] font-bold uppercase tracking-[0.14em] text-[#999]">
            {journey.eyebrow}
          </p>
          <h2 id="journey-heading" className="t-section mx-auto mt-3 max-w-[680px] text-center">
            {journey.headline}
          </h2>
          <p className="mx-auto mt-4 max-w-[520px] text-center text-[1.0625rem] text-[#666]">
            {journey.subhead}
          </p>
        </Reveal>

        <div className="relative mt-12 sm:mt-14">
          {/* connecting line (desktop) */}
          <div
            className="absolute left-0 right-0 top-7 hidden h-px lg:block"
            style={{
              background:
                "linear-gradient(90deg, rgba(0,0,0,0.08) 0%, rgba(155,207,31,0.5) 60%, #bef227 100%)",
            }}
            aria-hidden
          />
          <ol className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
            {journey.steps.map((step, i) => {
              const Icon = ICONS[i] ?? Users;
              const isLast = i === journey.steps.length - 1;
              return (
                <li key={step.label} className="flex flex-col items-center text-center lg:px-1">
                  <span
                    className={`relative flex h-14 w-14 items-center justify-center rounded-2xl shadow-sm ring-4 ring-white ${
                      isLast
                        ? "bg-[#bef227] text-[#111]"
                        : "bg-white text-[#6fa800] ring-white"
                    }`}
                    style={
                      isLast
                        ? { boxShadow: "0 8px 24px -6px rgba(190,242,39,0.6)" }
                        : { border: "1px solid rgba(0,0,0,0.08)" }
                    }
                  >
                    <Icon size={22} strokeWidth={1.7} />
                    <span
                      className={`absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold ${
                        isLast ? "bg-[#111] text-white" : "bg-[#111] text-white"
                      }`}
                    >
                      {i + 1}
                    </span>
                  </span>
                  <p className="mt-4 text-[15px] font-bold tracking-[-0.01em] text-[#111]">
                    {step.label}
                  </p>
                  <p className="mt-1.5 max-w-[200px] text-[12.5px] leading-relaxed text-[#666]">
                    {step.text}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
