"use client";

import { AtSign, Heart, MessageCircle, Send, UserPlus, ArrowUpRight, CircleDot } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { pageStory } from "@/lib/pageStory";

function IgGlyph({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5.5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
    </svg>
  );
}

type Notif = {
  type: string;
  time: string;
  msg: string;
  icon: LucideIcon;
  fg: string;
  bg: string;
  initials: string;
  avatar: string;
  pos: { top: number; left: number };
  delay: number;
};

const NOTIFS: Notif[] = [
  {
    type: "New Follower", time: "2m ago", msg: "@jessica.doe started following you",
    icon: UserPlus, fg: "#16A34A", bg: "#F0FDF4", initials: "JD",
    avatar: "linear-gradient(135deg,#34d399,#059669)", pos: { top: 20, left: 21 }, delay: 0,
  },
  {
    type: "Comment", time: "4m ago", msg: "How much does this cost?",
    icon: MessageCircle, fg: "#EC4899", bg: "#FDF2F8", initials: "AL",
    avatar: "linear-gradient(135deg,#f472b6,#db2777)", pos: { top: 13, left: 61 }, delay: 0.4,
  },
  {
    type: "Story Reply", time: "6m ago", msg: "This is exactly what I was looking for!",
    icon: CircleDot, fg: "#F43F5E", bg: "#FFF1F2", initials: "MK",
    avatar: "linear-gradient(135deg,#fb7185,#e11d48)", pos: { top: 36, left: 83 }, delay: 0.8,
  },
  {
    type: "DM", time: "3m ago", msg: "Hi! I’m interested in your services.",
    icon: Send, fg: "#3B82F6", bg: "#EFF6FF", initials: "TR",
    avatar: "linear-gradient(135deg,#60a5fa,#2563eb)", pos: { top: 45, left: 13 }, delay: 0.2,
  },
  {
    type: "Mention", time: "8m ago", msg: "@yourbrand this looks amazing! 🔥",
    icon: AtSign, fg: "#8B5CF6", bg: "#F5F3FF", initials: "SP",
    avatar: "linear-gradient(135deg,#a78bfa,#7c3aed)", pos: { top: 60, left: 83 }, delay: 0.6,
  },
  {
    type: "Comment", time: "7m ago", msg: "Do you ship to Canada?",
    icon: MessageCircle, fg: "#EC4899", bg: "#FDF2F8", initials: "NW",
    avatar: "linear-gradient(135deg,#f9a8d4,#ec4899)", pos: { top: 71, left: 21 }, delay: 1,
  },
  {
    type: "Liked your post", time: "9m ago", msg: "User liked your recent post",
    icon: Heart, fg: "#F43F5E", bg: "#FFF1F2", initials: "Br",
    avatar: "linear-gradient(135deg,#fca5a5,#f43f5e)", pos: { top: 84, left: 44 }, delay: 0.5,
  },
  {
    type: "DM", time: "10m ago", msg: "Can I get more details?",
    icon: Send, fg: "#3B82F6", bg: "#EFF6FF", initials: "Ev",
    avatar: "linear-gradient(135deg,#38bdf8,#0ea5e9)", pos: { top: 78, left: 70 }, delay: 0.9,
  },
];

type OrbitCfg = { radius: number; duration: number; dir: 1 | -1; nodes: { grad: string; label: string }[] };
const ORBITS: OrbitCfg[] = [
  {
    radius: 250, duration: 52, dir: 1,
    nodes: [
      { grad: "linear-gradient(135deg,#c4b5fd,#8b5cf6)", label: "R" },
      { grad: "linear-gradient(135deg,#fda4af,#f43f5e)", label: "M" },
      { grad: "linear-gradient(135deg,#93c5fd,#3b82f6)", label: "K" },
      { grad: "linear-gradient(135deg,#86efac,#22c55e)", label: "T" },
      { grad: "linear-gradient(135deg,#fbcfe8,#ec4899)", label: "A" },
      { grad: "linear-gradient(135deg,#fcd34d,#f59e0b)", label: "S" },
    ],
  },
  {
    radius: 155, duration: 40, dir: -1,
    nodes: [
      { grad: "linear-gradient(135deg,#67e8f9,#06b6d4)", label: "L" },
      { grad: "linear-gradient(135deg,#fca5a5,#ef4444)", label: "J" },
      { grad: "linear-gradient(135deg,#d8b4fe,#a855f7)", label: "D" },
      { grad: "linear-gradient(135deg,#5eead4,#14b8a6)", label: "C" },
    ],
  },
];

function NotifCard({ n }: { n: Notif }) {
  const Icon = n.icon;
  return (
    <div className="opp-card">
      <div className="opp-card-head">
        <span className="flex h-6 w-6 items-center justify-center rounded-[7px]" style={{ background: n.bg, color: n.fg }}>
          <Icon size={13} strokeWidth={2.2} />
        </span>
        <span className="opp-card-type">{n.type}</span>
        <span className="opp-card-time">{n.time}</span>
      </div>
      <div className="opp-card-body">
        <span className="opp-avatar" style={{ background: n.avatar }}>{n.initials}</span>
        <p className="opp-card-msg">{n.msg}</p>
      </div>
    </div>
  );
}

function IgCenter() {
  return (
    <>
      <span className="opp-pulse" aria-hidden />
      <span className="opp-pulse d2" aria-hidden />
      <div className="opp-center">
        <IgGlyph size={44} />
      </div>
      <Heart className="opp-heart" size={22} fill="#f43f5e" strokeWidth={0} aria-hidden />
    </>
  );
}

function Orbit({ cfg, reduce }: { cfg: OrbitCfg; reduce: boolean | null }) {
  const size = cfg.radius * 2;
  return (
    <motion.div
      className="opp-orbit"
      style={{ width: size, height: size }}
      animate={reduce ? undefined : { rotate: 360 * cfg.dir }}
      transition={{ duration: cfg.duration, repeat: Infinity, ease: "linear" }}
    >
      {cfg.nodes.map((node, i) => {
        const angle = (i / cfg.nodes.length) * Math.PI * 2;
        const x = Math.round(cfg.radius + cfg.radius * Math.cos(angle));
        const y = Math.round(cfg.radius + cfg.radius * Math.sin(angle));
        return (
          <div key={i} className="opp-orbit-node" style={{ left: x, top: y }}>
            <motion.span
              className="opp-bubble"
              style={{ position: "static", background: node.grad, transform: "none" }}
              animate={reduce ? undefined : { rotate: -360 * cfg.dir }}
              transition={{ duration: cfg.duration, repeat: Infinity, ease: "linear" }}
            >
              {node.label}
            </motion.span>
          </div>
        );
      })}
    </motion.div>
  );
}

export function Opportunity() {
  const { opportunity: o } = pageStory;
  const reduce = useReducedMotion();

  return (
    <section id="opportunity" className="section-white opp-section sec-purple" aria-labelledby="opportunity-heading">
      <div className="page-wrap">
        {/* Header */}
        <Reveal className="max-w-[640px]">
          <span className="opp-eyebrow">
            <span className="opp-idx">{o.index}</span>
            <span className="opp-label">{o.eyebrow}</span>
          </span>
          <h2 id="opportunity-heading" className="opp-headline mt-6">
            {o.headlinePre} <br className="hidden sm:block" />
            {o.headlineAccent}
          </h2>
          <p className="t-body-sm mt-5 max-w-[500px] whitespace-pre-line">{o.subhead}</p>
        </Reveal>

        {/* Desktop orbit */}
        <div className="opp-stage hidden lg:block">
          <div className="opp-live absolute right-2 top-2" aria-hidden>
            <span className="opp-live-dot" />
            Live · {NOTIFS.length} new
          </div>

          <div className="opp-ring" style={{ width: 310, height: 310 }} aria-hidden />
          <div className="opp-ring" style={{ width: 500, height: 500 }} aria-hidden />
          <div className="opp-ring" style={{ width: 600, height: 600 }} aria-hidden />

          <div className="opp-center-bloom" aria-hidden />

          {/* connector lines from core to each card */}
          <svg className="opp-connectors" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
            {NOTIFS.map((n) => (
              <line key={n.type + n.time} x1="50" y1="50" x2={n.pos.left} y2={n.pos.top} />
            ))}
          </svg>

          {ORBITS.map((cfg, i) => (
            <Orbit key={i} cfg={cfg} reduce={reduce} />
          ))}

          <IgCenter />

          {NOTIFS.map((n) => (
            <motion.div
              key={n.type + n.time}
              className="opp-card-abs"
              style={{ top: `${n.pos.top}%`, left: `${n.pos.left}%` }}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: n.delay * 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                animate={reduce ? undefined : { y: [0, -9, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: n.delay }}
              >
                <NotifCard n={n} />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Mobile version */}
        <div className="mt-10 lg:hidden">
          <div className="relative mx-auto mb-8 flex h-24 w-24 items-center justify-center">
            <IgCenter />
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {NOTIFS.map((n) => (
              <div key={n.type + n.time} className="mx-auto w-full max-w-[300px] sm:max-w-none [&_.opp-card]:w-full">
                <NotifCard n={n} />
              </div>
            ))}
          </div>
        </div>

        {/* Kicker */}
        <div className="tf-divider mt-16" />
        <Reveal className="mt-10 flex items-center gap-5">
          <span
            className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full text-[#0a0a0a] shadow-[0_10px_28px_rgba(16,24,40,0.16)]"
            style={{ background: "var(--sec-accent)" }}
          >
            <ArrowUpRight size={26} strokeWidth={2.4} />
          </span>
          <p className="text-[clamp(1.25rem,2.6vw,1.9rem)] font-semibold leading-tight tracking-[-0.02em] text-[#0a0a0a]">
            {o.kicker}
            <br />
            <span className="font-extrabold">
              {o.kickerAccentPre}
              <span className="opp-underline">{o.kickerAccent}</span>
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
