"use client";

import { Flame, MessageCircle, Sparkles } from "lucide-react";
import {
  HERO_DEMO_HANDNOTE,
  HERO_DEMO_STATS,
  MESSAGE_PEOPLE,
  SUGGESTED_REPLY,
} from "@/lib/heroDemo";

/** Static hero demo for mobile — no typing or loop animations. */
export function HeroDemoStatic() {
  return (
    <div className="relative">
      <div className="card p-5">
        <div className="mb-4 flex items-center justify-between gap-3">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#999]">
              Today&apos;s opportunities
            </p>
            <p className="mt-1 text-[15px] font-bold text-[#111]">
              People you should message
            </p>
          </div>
          <span className="flex items-center gap-1 rounded-full bg-[#f4fce0] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-[#4d7c0f]">
            <Flame size={12} />
            4 warm
          </span>
        </div>

        <ul className="space-y-2">
          {MESSAGE_PEOPLE.map((person, i) => (
            <li
              key={person.handle}
              className={`flex items-center gap-3 rounded-[12px] border px-3 py-2.5 ${
                i === 0
                  ? "border-[#bef227]/70 bg-[#f4fce0]/40"
                  : "border-black/[0.06] bg-[#fafafa]"
              }`}
            >
              <div
                className="h-9 w-9 shrink-0 rounded-full border-2 border-white shadow-sm"
                style={{ background: person.avatar }}
              />
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center justify-between gap-1">
                  <p className="text-[13px] font-bold text-[#111]">@{person.handle}</p>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide ${person.badgeClass}`}
                  >
                    {person.badge}
                  </span>
                </div>
                <p className="mt-0.5 flex items-center gap-1 text-[12px] text-[#666]">
                  {person.badge === "High intent" ? (
                    <Sparkles size={12} className="shrink-0 text-[#8ab800]" />
                  ) : (
                    <MessageCircle size={12} className="shrink-0 text-[#999]" />
                  )}
                  {person.signal}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-4 rounded-[14px] border border-black/[0.07] bg-white p-3">
          <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#999]">
            Suggested reply · @{MESSAGE_PEOPLE[0].handle}
          </p>
          <p className="mt-2 text-[14px] leading-relaxed text-[#111]">{SUGGESTED_REPLY}</p>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2 rounded-[14px] bg-[#f7f7f7] px-2 py-4">
          {HERO_DEMO_STATS.map(({ n, label }) => (
            <div key={label} className="text-center">
              <p className="text-[22px] font-bold leading-none tracking-tight text-[#111]">{n}</p>
              <p className="mt-1 text-[10px] leading-tight text-[#888]">{label}</p>
            </div>
          ))}
        </div>
      </div>

      <p className="font-hand mt-4 text-right text-[1.1rem] text-[#6fa800]">
        {HERO_DEMO_HANDNOTE}
      </p>
    </div>
  );
}
