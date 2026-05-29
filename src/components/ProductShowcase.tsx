"use client";

import { useState } from "react";
import {
  Inbox,
  Flame,
  CreditCard,
  Users,
  Check,
  Search,
  Send,
  ArrowUpRight,
} from "lucide-react";
import { pageStory } from "@/lib/pageStory";

const TAB_ICONS: Record<string, typeof Inbox> = {
  inbox: Inbox,
  opportunities: Flame,
  payments: CreditCard,
  customers: Users,
};

const NAV_COUNT: Record<string, string> = {
  inbox: "12",
  opportunities: "5",
  payments: "3",
  customers: "48",
};

function Avatar({ from, to, size = 38 }: { from: string; to: string; size?: number }) {
  return (
    <span
      className="shrink-0 rounded-full ring-2 ring-white"
      style={{
        width: size,
        height: size,
        background: `linear-gradient(135deg, ${from}, ${to})`,
      }}
    />
  );
}

function PanelHeader({ title, sub, action }: { title: string; sub: string; action?: string }) {
  return (
    <div className="flex items-start justify-between gap-3 border-b border-black/[0.06] px-5 py-4">
      <div>
        <p className="text-[15px] font-bold tracking-[-0.01em] text-[#111]">{title}</p>
        <p className="mt-0.5 text-[12.5px] text-[#777]">{sub}</p>
      </div>
      {action && (
        <span className="hidden items-center gap-1.5 rounded-full border border-black/[0.08] bg-white px-3 py-1.5 text-[12px] font-semibold text-[#555] sm:inline-flex">
          <Search size={13} /> {action}
        </span>
      )}
    </div>
  );
}

function InboxPanel() {
  const rows = [
    { n: "Sarah K.", h: "sarah.k", m: "How much is your coaching?", t: "2m", hot: true, c: ["#f9a8d4", "#f472b6"] },
    { n: "Mike R.", h: "mike.r", m: "Do you have this in size M?", t: "14m", hot: true, c: ["#7dd3fc", "#38bdf8"] },
    { n: "Jade L.", h: "jade.l", m: "Watched every story · never messaged", t: "1h", hot: true, c: ["#fcd34d", "#fbbf24"] },
    { n: "Alex T.", h: "alex.t", m: "Loved the last drop 🔥", t: "3h", hot: false, c: ["#c4b5fd", "#a78bfa"] },
  ];
  return (
    <div>
      <PanelHeader title="Inbox" sub="Sorted by who's most ready to buy" action="Search" />
      <ul className="divide-y divide-black/[0.05]">
        {rows.map((r) => (
          <li key={r.h} className="flex items-center gap-3 px-5 py-3.5 transition-colors hover:bg-[#fafafa]">
            <Avatar from={r.c[0]} to={r.c[1]} />
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <p className="text-[13.5px] font-bold text-[#111]">{r.n}</p>
                {r.hot && (
                  <span className="rounded-full bg-[#f4fce0] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-[#4d7c0f]">
                    Hot
                  </span>
                )}
              </div>
              <p className="truncate text-[12.5px] text-[#777]">{r.m}</p>
            </div>
            <div className="flex flex-col items-end gap-1.5">
              <span className="text-[11px] text-[#aaa]">{r.t}</span>
              {r.hot && <span className="h-2 w-2 rounded-full bg-[#9bcf1f]" />}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function OpportunitiesPanel() {
  const rows = [
    { n: "Sarah K.", s: "Asked about pricing twice", score: 94, c: ["#f9a8d4", "#f472b6"] },
    { n: "Mike R.", s: "Replied to your story", score: 88, c: ["#7dd3fc", "#38bdf8"] },
    { n: "Jade L.", s: "Saved your post 3× this week", score: 81, c: ["#fcd34d", "#fbbf24"] },
  ];
  return (
    <div>
      <PanelHeader title="Opportunities" sub="Buyers showing real signals today" />
      <ul className="space-y-3 p-5">
        {rows.map((r) => (
          <li
            key={r.n}
            className="flex items-center gap-3 rounded-[14px] border border-black/[0.06] bg-[#fafafa] p-3.5"
          >
            <Avatar from={r.c[0]} to={r.c[1]} />
            <div className="min-w-0 flex-1">
              <p className="text-[13.5px] font-bold text-[#111]">{r.n}</p>
              <p className="text-[12px] text-[#777]">{r.s}</p>
              <div className="mt-2 flex items-center gap-2">
                <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-black/[0.07]">
                  <span className="block h-full rounded-full bg-[#9bcf1f]" style={{ width: `${r.score}%` }} />
                </span>
                <span className="text-[11px] font-bold text-[#6fa800]">{r.score}%</span>
              </div>
            </div>
            <button className="inline-flex shrink-0 items-center gap-1 rounded-full bg-[#bef227] px-3 py-2 text-[12px] font-bold text-[#111]">
              <Send size={12} /> Reply
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PaymentsPanel() {
  const rows = [
    { n: "Sarah K.", item: "1:1 Coaching — 4 weeks", amt: "$240", paid: true, c: ["#f9a8d4", "#f472b6"] },
    { n: "Mike R.", item: "Starter bundle", amt: "$180", paid: false, c: ["#7dd3fc", "#38bdf8"] },
  ];
  return (
    <div>
      <PanelHeader title="Payments" sub="Collected right inside the chat" />
      <div className="px-5 pt-5">
        <div className="flex items-end justify-between rounded-[14px] bg-[#111] px-5 py-4 text-white">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wide text-white/55">Collected this month</p>
            <p className="mt-1 text-[26px] font-bold tracking-tight">$1,240</p>
          </div>
          <span className="mb-1 inline-flex items-center gap-1 rounded-full bg-[#bef227] px-2.5 py-1 text-[11px] font-bold text-[#111]">
            <ArrowUpRight size={12} /> +3 today
          </span>
        </div>
      </div>
      <ul className="space-y-2.5 p-5">
        {rows.map((r) => (
          <li
            key={r.n}
            className="flex items-center gap-3 rounded-[14px] border border-black/[0.06] bg-white p-3.5"
          >
            <Avatar from={r.c[0]} to={r.c[1]} size={34} />
            <div className="min-w-0 flex-1">
              <p className="text-[13.5px] font-bold text-[#111]">{r.n}</p>
              <p className="truncate text-[12px] text-[#777]">{r.item}</p>
            </div>
            <span className="text-[15px] font-bold tracking-tight text-[#111]">{r.amt}</span>
            {r.paid ? (
              <span className="inline-flex items-center gap-1 rounded-full bg-[#eef9c4] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-[#4d7c0f]">
                <Check size={11} strokeWidth={3} /> Paid
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#fff7ed] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-[#c2620c]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#f59e0b]" /> Sent
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

function CustomersPanel() {
  const rows = [
    { n: "Sarah K.", item: "1:1 Coaching", ltv: "$420 · 2 orders", c: ["#f9a8d4", "#f472b6"] },
    { n: "Mike R.", item: "Starter bundle", ltv: "$180 · 1 order", c: ["#7dd3fc", "#38bdf8"] },
    { n: "Alex T.", item: "Repeat customer", ltv: "$960 · 4 orders", c: ["#c4b5fd", "#a78bfa"] },
  ];
  return (
    <div>
      <PanelHeader title="Customers" sub="Everyone who bought — ready to resell" action="Search" />
      <ul className="divide-y divide-black/[0.05]">
        {rows.map((r) => (
          <li key={r.n} className="flex items-center gap-3 px-5 py-3.5 transition-colors hover:bg-[#fafafa]">
            <Avatar from={r.c[0]} to={r.c[1]} />
            <div className="min-w-0 flex-1">
              <p className="text-[13.5px] font-bold text-[#111]">{r.n}</p>
              <p className="text-[12px] text-[#777]">{r.item}</p>
            </div>
            <span className="hidden text-[12px] font-semibold text-[#555] sm:block">{r.ltv}</span>
            <button className="inline-flex shrink-0 items-center gap-1 rounded-full border border-black/[0.08] px-3 py-1.5 text-[12px] font-semibold text-[#444]">
              <Send size={12} /> Message
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const PANELS: Record<string, () => React.ReactElement> = {
  inbox: InboxPanel,
  opportunities: OpportunitiesPanel,
  payments: PaymentsPanel,
  customers: CustomersPanel,
};

export function ProductShowcase() {
  const { showcase } = pageStory;
  const [tab, setTab] = useState<string>(showcase.tabs[0].id);
  const active = showcase.tabs.find((t) => t.id === tab) ?? showcase.tabs[0];
  const Panel = PANELS[tab] ?? InboxPanel;

  return (
    <section id="product" className="section-grey" aria-labelledby="product-heading">
      <div className="page-wrap">
        <p className="text-center text-[11px] font-bold uppercase tracking-[0.14em] text-[#999]">
          {showcase.eyebrow}
        </p>
        <h2 id="product-heading" className="t-section mx-auto mt-3 max-w-[720px] text-center">
          {showcase.headline}
        </h2>
        <p className="mx-auto mt-4 max-w-[560px] text-center text-[1.0625rem] text-[#666]">
          {showcase.subhead}
        </p>

        <div className="showcase-stage mx-auto mt-10 max-w-[940px] sm:mt-12">
          <div className="app-window">
            {/* window chrome */}
            <div className="app-topbar">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              <div className="mx-auto flex items-center gap-2 rounded-md bg-white px-3 py-1 text-[11px] font-medium text-[#999] ring-1 ring-black/[0.06]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#9bcf1f]" />
                app.tractionflo.com
              </div>
            </div>

            <div className="flex flex-col md:grid md:grid-cols-[210px_1fr]">
              {/* sidebar */}
              <nav
                className="flex gap-1 overflow-x-auto border-b border-black/[0.06] bg-[#fbfbfa] p-2.5 md:flex-col md:overflow-visible md:border-b-0 md:border-r"
                role="tablist"
                aria-label="Platform areas"
              >
                <div className="mb-1 hidden items-center gap-2 px-2 py-2 md:flex">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#bef227] text-[11px] font-bold text-[#111]">
                    TF
                  </span>
                  <span className="text-[13px] font-bold tracking-[-0.01em] text-[#111]">TractionFlo</span>
                </div>
                {showcase.tabs.map((t) => {
                  const Icon = TAB_ICONS[t.id] ?? Inbox;
                  const isActive = tab === t.id;
                  return (
                    <button
                      key={t.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setTab(t.id)}
                      className={`app-nav-item ${isActive ? "app-nav-item-active" : ""}`}
                    >
                      <Icon size={16} strokeWidth={1.9} />
                      <span className="flex-1 text-left">{t.label}</span>
                      <span
                        className={`hidden rounded-full px-1.5 py-0.5 text-[10px] font-bold md:inline ${
                          isActive ? "bg-white/70 text-[#4d7c0f]" : "bg-black/[0.05] text-[#999]"
                        }`}
                      >
                        {NAV_COUNT[t.id]}
                      </span>
                    </button>
                  );
                })}
              </nav>

              {/* active panel */}
              <div className="min-h-[340px] min-w-0 bg-white">
                <Panel />
              </div>
            </div>
          </div>
        </div>

        <p className="mx-auto mt-6 max-w-[480px] text-center text-[14px] leading-relaxed text-[#777]">
          <span className="font-semibold text-[#111]">{active.title}.</span> {active.text}
        </p>
      </div>
    </section>
  );
}
