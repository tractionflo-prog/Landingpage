"use client";

import { motion } from "framer-motion";
import {
  MessageCircle,
  Send,
  MessageSquare,
  Users,
  MessagesSquare,
  UserCheck,
  CalendarCheck,
  DollarSign,
  CalendarClock,
  Phone,
  Music2,
  Play,
} from "lucide-react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const DUR = 1.8;

function IgGlyph({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  );
}

const ACTIVITY = [
  { icon: MessageCircle, value: 50, label: "Comments", accent: "#EC4899", bg: "#FDF2F8" },
  { icon: Send, value: 23, label: "DMs", accent: "#F43F5E", bg: "#FFF1F2" },
  { icon: MessageSquare, value: 12, label: "Story Replies", accent: "#8B5CF6", bg: "#F5F3FF" },
  { icon: Users, value: 37, label: "New Followers", accent: "#3B82F6", bg: "#EFF6FF" },
];

const STAGES = [
  { icon: MessagesSquare, title: "Conversation Started", sub: "Engages instantly", accent: "#3B82F6", bg: "#EFF6FF" },
  { icon: UserCheck, title: "Qualified Leads", sub: "Leads are scored & qualified", accent: "#8B5CF6", bg: "#F5F3FF" },
  { icon: CalendarCheck, title: "Booked Calls", sub: "Calls are scheduled", accent: "#F43F5E", bg: "#FFF1F2" },
  { icon: DollarSign, title: "Payments Collected", sub: "Payments are processed", accent: "#22C55E", bg: "#F0FDF4" },
];

const PLATFORMS = [
  { name: "Instagram", status: "Live now", live: true, render: <span className="text-white"><IgGlyph size={15} /></span>, bg: "linear-gradient(135deg,#FEDA75,#FA7E1E 30%,#D62976 60%,#962FBF 80%,#4F5BD5)" },
  { name: "Facebook", status: "Coming soon", live: false, render: <span className="text-[13px] font-black text-white">f</span>, bg: "#1877F2" },
  { name: "WhatsApp", status: "Coming soon", live: false, render: <Phone size={14} className="text-white" />, bg: "#25D366" },
  { name: "TikTok", status: "Coming soon", live: false, render: <Music2 size={14} className="text-white" />, bg: "#0a0a0a" },
  { name: "YouTube", status: "Coming soon", live: false, render: <Play size={13} className="fill-white text-white" />, bg: "#FF0000" },
];

function Arrow() {
  return (
    <span className="hidden shrink-0 items-center self-center lg:flex" aria-hidden>
      <svg width="26" height="12" viewBox="0 0 26 12">
        <line x1="0" y1="6" x2="18" y2="6" stroke="#cfcfcf" strokeWidth="1.6" strokeDasharray="3 3" />
        <path d="M18 2 L24 6 L18 10" fill="none" stroke="#cfcfcf" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

function ResultChart() {
  return (
    <svg viewBox="0 0 200 56" className="h-full w-full" preserveAspectRatio="none" aria-hidden>
      <defs>
        <linearGradient id="res-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
        </linearGradient>
      </defs>
      <motion.path
        d="M0,48 C24,44 36,38 56,40 C84,43 96,24 124,22 C150,20 172,12 200,6"
        fill="none"
        stroke="#8B5CF6"
        strokeWidth="2.2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.7, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.path
        d="M0,48 C24,44 36,38 56,40 C84,43 96,24 124,22 C150,20 172,12 200,6 L200,56 L0,56 Z"
        fill="url(#res-fill)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.8 }}
      />
    </svg>
  );
}

export function HeroFlowVisual() {
  return (
    <div className="mx-auto w-full max-w-[560px]">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-stretch lg:gap-1.5">
        {/* Client account */}
        <div className="tf-soft flex-1 rounded-[18px] border border-[#ECECEC] bg-white p-4">
          <p className="text-[13px] font-bold text-[#0a0a0a]">Social Activity</p>
          <p className="text-[10.5px] text-[var(--text-muted)]">This Month</p>
          <div className="mt-4 space-y-3.5">
            {ACTIVITY.map(({ icon: Icon, value, label, accent, bg }) => (
              <div key={label} className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[9px]" style={{ background: bg, color: accent }}>
                  <Icon size={15} strokeWidth={2} />
                </span>
                <div className="leading-tight">
                  <p className="text-[17px] font-extrabold tracking-[-0.02em] text-[#0a0a0a]">
                    <AnimatedCounter value={value} duration={DUR} />
                  </p>
                  <p className="text-[10.5px] text-[var(--text-muted)]">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Arrow />

        {/* Revenue engine */}
        <div
          className="tf-soft flex-[1.15] rounded-[18px] border-[1.5px] bg-white p-4"
          style={{ borderColor: "#FBBF7399" }}
        >
          <div className="flex flex-col items-center text-center">
            <span className="flex h-10 w-10 items-center justify-center rounded-[11px] bg-[#0a0a0a] text-[13px] font-bold text-white">
              TF
            </span>
            <p className="mt-2 text-[14px] font-extrabold tracking-[-0.01em] text-[#0a0a0a]">TractionFlo</p>
            <p className="text-[10.5px] text-[var(--text-muted)]">Revenue Engine</p>
          </div>
          <div className="mt-4 space-y-3">
            {STAGES.map(({ icon: Icon, title, sub, accent, bg }) => (
              <div key={title} className="flex items-start gap-2.5">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[8px]" style={{ background: bg, color: accent }}>
                  <Icon size={14} strokeWidth={2} />
                </span>
                <div className="leading-tight">
                  <p className="text-[12px] font-bold text-[#0a0a0a]">{title}</p>
                  <p className="text-[10px] text-[var(--text-muted)]">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Arrow />

        {/* Results */}
        <div className="tf-soft flex-1 rounded-[18px] border border-[#ECECEC] bg-white p-4">
          <p className="text-[13px] font-bold text-[#0a0a0a]">Results This Month</p>
          <p className="text-[10.5px] text-[var(--text-muted)]">Last 30 days</p>
          <div className="mt-4 space-y-3.5">
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[9px] bg-[#F0FDF4] text-[#22C55E]">
                <Users size={15} strokeWidth={2} />
              </span>
              <div className="leading-tight">
                <p className="text-[17px] font-extrabold tracking-[-0.02em] text-[#0a0a0a]">
                  <AnimatedCounter value={17} duration={DUR} />
                </p>
                <p className="text-[10.5px] text-[var(--text-muted)]">Qualified Leads</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[9px] bg-[#F5F3FF] text-[#8B5CF6]">
                <CalendarClock size={15} strokeWidth={2} />
              </span>
              <div className="leading-tight">
                <p className="text-[17px] font-extrabold tracking-[-0.02em] text-[#0a0a0a]">
                  <AnimatedCounter value={8} duration={DUR} />
                </p>
                <p className="text-[10.5px] text-[var(--text-muted)]">Booked Calls</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[9px] bg-[#F0FDF4] text-[#22C55E]">
                <DollarSign size={15} strokeWidth={2} />
              </span>
              <div className="leading-tight">
                <p className="text-[17px] font-extrabold tracking-[-0.02em] text-[#0a0a0a]">
                  $<AnimatedCounter value={12450} duration={DUR} />
                </p>
                <p className="text-[10.5px] text-[var(--text-muted)]">Revenue Generated</p>
              </div>
            </div>
            <div className="mt-1 h-[52px] w-full rounded-[10px] bg-[#FAFAFB] p-1.5">
              <ResultChart />
            </div>
          </div>
        </div>
      </div>

      {/* Platform bar */}
      <div className="tf-soft mt-3 rounded-[18px] border border-[#ECECEC] bg-white px-4 py-3">
        <div className="flex flex-wrap items-center justify-between gap-y-3">
          {PLATFORMS.map((p) => (
            <div key={p.name} className="flex items-center gap-2">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[9px]" style={{ background: p.bg }}>
                {p.render}
              </span>
              <div className="leading-tight">
                <p className="text-[11.5px] font-bold text-[#0a0a0a]">{p.name}</p>
                <p className={`text-[9.5px] font-semibold ${p.live ? "text-[#22C55E]" : "text-[var(--text-muted)]"}`}>
                  {p.status}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
