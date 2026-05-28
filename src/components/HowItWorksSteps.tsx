import { BrushHighlight } from "@/components/ui/BrushHighlight";
import { Reveal } from "@/components/ui/Reveal";
import { pageStory } from "@/lib/pageStory";

export function HowItWorksSteps() {
  const { steps } = pageStory;

  return (
    <section id="how-it-works" className="section-grey" aria-labelledby="steps-heading">
      <div className="page-wrap">
        <Reveal>
          <p className="text-center text-[11px] font-bold uppercase tracking-[0.14em] text-[#999]">
            {steps.eyebrow}
          </p>
          <h2 id="steps-heading" className="t-section mx-auto mt-3 max-w-[640px] text-center">
            Three steps. <BrushHighlight>That&apos;s it.</BrushHighlight>
          </h2>
          <p className="t-body mx-auto mt-4 max-w-[520px] text-center">{steps.subhead}</p>
        </Reveal>

        <ol className="mt-10 grid gap-4 md:mt-12 md:grid-cols-3 md:gap-5">
          {steps.items.map((item) => (
            <li key={item.step} className="card card-lift p-6 md:p-7">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#bef227] text-[14px] font-bold text-[#111]">
                {item.step}
              </span>
              <h3 className="mt-5 text-[17px] font-bold tracking-[-0.02em]">{item.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-[#666]">{item.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
