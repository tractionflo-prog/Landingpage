import { Check } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { pageStory } from "@/lib/pageStory";

function CardShell({
  num,
  title,
  children,
  caption,
}: {
  num: number;
  title: string;
  children: React.ReactNode;
  caption: string;
}) {
  return (
    <div className="flex flex-col rounded-[14px] border border-[#E5E7EB] bg-white p-4 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
      <div className="flex items-center gap-2">
        <span className="flex h-6 w-6 items-center justify-center rounded-[7px] bg-[#0073EA] text-[12px] font-bold text-white">
          {num}
        </span>
        <span className="text-[14px] font-bold tracking-[-0.01em] text-[#111827]">{title}</span>
      </div>
      <div className="mt-3 flex-1 rounded-[10px] border border-[#EEF0F4] bg-[#FBFBFC] p-2.5">
        {children}
      </div>
      <p className="mt-3 text-[12px] leading-relaxed text-[#6B7280]">{caption}</p>
    </div>
  );
}

function Dot({ from, to, size = 22 }: { from: string; to: string; size?: number }) {
  return (
    <span
      className="shrink-0 rounded-full"
      style={{ width: size, height: size, background: `linear-gradient(135deg, ${from}, ${to})` }}
    />
  );
}

function InboxCard() {
  const channels = ["All", "Instagram", "TikTok", "WhatsApp", "Facebook", "YouTube"];
  const msgs = [
    { n: "Sarah Johnson", m: "Replied to your story", c: ["#f9a8d4", "#f472b6"] },
    { n: "Mike Anderson", m: "Commented on a post", c: ["#7dd3fc", "#38bdf8"] },
    { n: "Emma Wilson", m: "Sent you a message", c: ["#fcd34d", "#fbbf24"] },
    { n: "James Carter", m: "Started following you", c: ["#c4b5fd", "#a78bfa"] },
    { n: "Monica Brown", m: "Replied to your story", c: ["#86efac", "#4ade80"] },
  ];
  return (
    <div className="flex gap-2">
      <ul className="hidden w-[64px] shrink-0 flex-col gap-1 sm:flex">
        {channels.map((c, i) => (
          <li
            key={c}
            className={`rounded-[6px] px-1.5 py-1 text-[9px] font-medium ${
              i === 0 ? "bg-[#EFF6FF] text-[#0073EA]" : "text-[#9CA3AF]"
            }`}
          >
            {c}
          </li>
        ))}
      </ul>
      <ul className="flex-1 space-y-1.5">
        {msgs.map((r) => (
          <li key={r.n} className="flex items-center gap-2 rounded-[7px] bg-white px-2 py-1.5 ring-1 ring-[#EEF0F4]">
            <Dot from={r.c[0]} to={r.c[1]} size={18} />
            <div className="min-w-0">
              <p className="truncate text-[10.5px] font-bold text-[#111827]">{r.n}</p>
              <p className="truncate text-[9px] text-[#9CA3AF]">{r.m}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function QualificationCard() {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Dot from="#f9a8d4" to="#f472b6" size={20} />
          <span className="text-[11px] font-bold text-[#111827]">Sarah Johnson</span>
        </div>
        <span className="rounded-full bg-[#FEF3C7] px-2 py-0.5 text-[8.5px] font-bold uppercase text-[#B45309]">
          High Intent
        </span>
      </div>
      <div className="space-y-1.5">
        <p className="ml-auto w-fit max-w-[85%] rounded-[8px] bg-[#0073EA] px-2 py-1 text-[9.5px] text-white">
          What are you looking to achieve?
        </p>
        <p className="w-fit max-w-[85%] rounded-[8px] bg-white px-2 py-1 text-[9.5px] text-[#374151] ring-1 ring-[#EEF0F4]">
          I want to get more coaching clients.
        </p>
        <p className="ml-auto w-fit max-w-[85%] rounded-[8px] bg-[#0073EA] px-2 py-1 text-[9.5px] text-white">
          What&apos;s your monthly budget?
        </p>
        <p className="w-fit max-w-[85%] rounded-[8px] bg-white px-2 py-1 text-[9.5px] font-semibold text-[#0073EA] ring-1 ring-[#EEF0F4]">
          $2,000+
        </p>
      </div>
      <div className="flex items-center justify-between rounded-[8px] bg-[#EFF6FF] px-2.5 py-1.5">
        <div>
          <p className="text-[9px] text-[#6B7280]">Lead Score</p>
          <p className="text-[8.5px] text-[#9CA3AF]">Status</p>
        </div>
        <div className="text-right">
          <p className="text-[11px] font-bold text-[#0073EA]">92/100</p>
          <p className="text-[8.5px] font-semibold text-[#00B070]">Qualified Lead</p>
        </div>
      </div>
    </div>
  );
}

function OffersCard() {
  return (
    <div className="space-y-2">
      <p className="text-[9px] font-semibold uppercase tracking-wide text-[#9CA3AF]">Recommended Offer</p>
      <div className="flex items-center gap-2 rounded-[8px] bg-white p-2 ring-1 ring-[#EEF0F4]">
        <Dot from="#0073EA" to="#4DA3FF" size={26} />
        <div className="min-w-0">
          <p className="truncate text-[10.5px] font-bold text-[#111827]">90-Day Coaching Program</p>
          <p className="text-[11px] font-bold text-[#0073EA]">$1,997</p>
        </div>
      </div>
      <button className="w-full rounded-[8px] bg-[#0073EA] py-1.5 text-[10px] font-bold text-white">
        Send Offer
      </button>
      <div className="rounded-[8px] bg-white p-2 ring-1 ring-[#EEF0F4]">
        <p className="text-[8.5px] text-[#9CA3AF]">Payment Link Sent</p>
        <p className="truncate text-[9px] font-medium text-[#0073EA]">pay.tractionflo.com/offer1234</p>
      </div>
      <div className="flex items-center justify-between rounded-[8px] bg-[#ECFDF3] px-2.5 py-1.5">
        <div>
          <p className="text-[9.5px] font-bold text-[#111827]">Payment Completed</p>
          <p className="text-[10.5px] font-bold text-[#00B070]">$1,997</p>
        </div>
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#00B070] text-white">
          <Check size={12} strokeWidth={3} />
        </span>
      </div>
    </div>
  );
}

function RevenueCard() {
  const stats = [
    { label: "Revenue Generated", value: "$18,420", delta: "+24%" },
    { label: "Qualified Leads", value: "124", delta: "+18%" },
    { label: "Booked Calls", value: "37", delta: "+22%" },
    { label: "Customers", value: "18", delta: "+20%" },
  ];
  return (
    <div className="space-y-2">
      <div className="flex justify-end">
        <span className="rounded-full bg-white px-2 py-0.5 text-[8.5px] font-semibold text-[#6B7280] ring-1 ring-[#EEF0F4]">
          This Month ▾
        </span>
      </div>
      <div className="grid grid-cols-2 gap-1.5">
        {stats.map((s) => (
          <div key={s.label} className="rounded-[8px] bg-white p-1.5 ring-1 ring-[#EEF0F4]">
            <p className="text-[8px] text-[#9CA3AF]">{s.label}</p>
            <div className="flex items-baseline gap-1">
              <span className="text-[12px] font-bold text-[#111827]">{s.value}</span>
              <span className="text-[8px] font-bold text-[#00B070]">{s.delta}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="rounded-[8px] bg-white p-2 ring-1 ring-[#EEF0F4]">
        <p className="text-[8.5px] text-[#9CA3AF]">Revenue Over Time</p>
        <svg width="100%" height="46" viewBox="0 0 160 46" fill="none" preserveAspectRatio="none" className="mt-1">
          <polyline
            points="2,40 28,34 54,36 80,22 106,26 132,12 158,6"
            stroke="#0073EA"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

const CARDS = [InboxCard, QualificationCard, OffersCard, RevenueCard];

export function ProductShowcase() {
  const { showcase } = pageStory;

  return (
    <section id="product" className="section-grey" aria-labelledby="product-heading">
      <div className="page-wrap">
        <Reveal>
          <h2 id="product-heading" className="t-section mx-auto max-w-[720px] text-center">
            {showcase.headline}
          </h2>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-[1120px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {showcase.tabs.map((tab, i) => {
            const Card = CARDS[i] ?? InboxCard;
            return (
              <CardShell key={tab.id} num={i + 1} title={tab.title} caption={tab.text}>
                <Card />
              </CardShell>
            );
          })}
        </div>
      </div>
    </section>
  );
}
