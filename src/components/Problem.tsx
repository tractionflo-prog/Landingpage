import { ArrowUpRight, Check, TrendingUp } from "lucide-react";
import { BrushHighlight } from "@/components/ui/BrushHighlight";
import { Reveal } from "@/components/ui/Reveal";
import { pageStory } from "@/lib/pageStory";

const TRAFFIC = [
  { label: "New followers", value: "+320 / wk" },
  { label: "DMs & comments", value: "48 new" },
  { label: "Story & post engagement", value: "High" },
];

const LEAK = [
  { label: "Reached out to buy", count: "48", width: "100%", tone: "#d4d4d8", text: "#666" },
  { label: "Replied to — too late", count: "31", width: "66%", tone: "#fbbf24", text: "#92660a" },
  { label: "Never got a reply", count: "12", width: "27%", tone: "#fb923c", text: "#b4530c" },
  { label: "Bought from someone else", count: "9", width: "20%", tone: "#ef4444", text: "#c0292b" },
];

export function Problem() {
  const { problem } = pageStory;

  return (
    <section id="problem" className="section-white" aria-labelledby="problem-heading">
      <div className="page-wrap">
        <Reveal>
          <p className="text-center text-[11px] font-bold uppercase tracking-[0.14em] text-[#999]">
            {problem.eyebrow}
          </p>
          <h2 id="problem-heading" className="t-section mx-auto mt-3 max-w-[760px] text-center">
            You don&apos;t have a traffic problem. You have a{" "}
            <BrushHighlight>follow-up problem.</BrushHighlight>
          </h2>
          <p className="mx-auto mt-4 max-w-[520px] text-center text-[1.0625rem] leading-relaxed text-[#666]">
            {problem.subhead}
          </p>
        </Reveal>

        <div className="mx-auto mt-10 grid max-w-[860px] gap-4 sm:mt-12 md:grid-cols-2 md:gap-5">
          {/* Traffic — fine */}
          <div className="card-lift rounded-[18px] border border-black/[0.07] bg-white p-6">
            <div className="flex items-center justify-between">
              <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#999]">Your traffic</p>
              <span className="inline-flex items-center gap-1 rounded-full bg-[#eef9c4] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-[#4d7c0f]">
                <Check size={11} strokeWidth={3} /> Healthy
              </span>
            </div>
            <p className="mt-2 text-[17px] font-bold tracking-[-0.01em] text-[#111]">You&apos;re winning here</p>

            <ul className="mt-5 space-y-2.5">
              {TRAFFIC.map((r) => (
                <li
                  key={r.label}
                  className="flex items-center justify-between rounded-[12px] bg-[#fafafa] px-3.5 py-3"
                >
                  <span className="text-[13.5px] text-[#555]">{r.label}</span>
                  <span className="inline-flex items-center gap-1 text-[13.5px] font-bold text-[#3f6212]">
                    <ArrowUpRight size={14} strokeWidth={2.5} /> {r.value}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-[13px] font-medium text-[#888]">More reach won&apos;t fix the leak.</p>
          </div>

          {/* Follow-up — leaking */}
          <div className="card-lift rounded-[18px] border border-[#fca5a5]/50 bg-gradient-to-b from-[#fff5f5] to-white p-6">
            <div className="flex items-center justify-between">
              <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#b91c1c]/70">Your follow-up</p>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#fee2e2] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-[#c0292b]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#ef4444]" /> Leaking
              </span>
            </div>
            <p className="mt-2 text-[17px] font-bold tracking-[-0.01em] text-[#111]">Where the money leaks</p>

            <ul className="mt-5 space-y-3">
              {LEAK.map((r, i) => (
                <li key={r.label}>
                  <div className="mb-1 flex items-center justify-between">
                    <span
                      className={`text-[13px] ${i === LEAK.length - 1 ? "font-bold text-[#111]" : "text-[#555]"}`}
                    >
                      {r.label}
                    </span>
                    <span className="text-[13px] font-bold tabular-nums" style={{ color: r.text }}>
                      {r.count}
                    </span>
                  </div>
                  <span className="block h-2 overflow-hidden rounded-full bg-black/[0.05]">
                    <span className="block h-full rounded-full" style={{ width: r.width, background: r.tone }} />
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mx-auto mt-12 max-w-[560px] text-center text-[1.0625rem] font-semibold text-[#111] sm:mt-14">
          {problem.close}
        </p>

        <div className="mx-auto mt-8 flex max-w-[640px] items-start gap-3 rounded-[16px] border border-[#bef227]/40 bg-[#f4fce0]/50 px-5 py-4 sm:items-center sm:justify-center sm:text-center">
          <TrendingUp size={18} className="mt-0.5 shrink-0 text-[#4d7c0f] sm:mt-0" strokeWidth={2.2} />
          <p className="text-[14px] font-medium leading-relaxed text-[#333] sm:text-[15px]">
            {problem.roi}
          </p>
        </div>
      </div>
    </section>
  );
}
