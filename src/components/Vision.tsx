"use client";

import {
  BarChart3,
  Brain,
  Heart,
  Mail,
  MessageCircle,
  Music2,
  Phone,
  Play,
  Sparkles,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { OutcomeStats } from "@/components/ui/OutcomeStats";
import { pageStory } from "@/lib/pageStory";
import { ACCENTS, type AccentKey } from "@/lib/accents";

const ROAD_ICONS: Record<string, LucideIcon> = {
  comment: MessageCircle,
  brain: Brain,
  zap: Zap,
  chart: BarChart3,
  heart: Heart,
};

function IgGlyph({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5.5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
    </svg>
  );
}

function BrandTile({ brand, size = 44 }: { brand: string; size?: number }) {
  const s = { width: size, height: size } as const;
  switch (brand) {
    case "whatsapp":
      return <span className="vs-tile" style={{ ...s, background: "#25D366" }}><Phone size={size * 0.5} fill="#fff" strokeWidth={0} /></span>;
    case "instagram":
      return <span className="vs-tile" style={{ ...s, background: "var(--ig-gradient)" }}><IgGlyph size={size * 0.52} /></span>;
    case "tiktok":
      return <span className="vs-tile" style={{ ...s, background: "#0a0a0a" }}><Music2 size={size * 0.5} strokeWidth={2.2} /></span>;
    case "facebook":
      return <span className="vs-tile" style={{ ...s, background: "#1877F2", fontWeight: 800, fontSize: size * 0.6, fontFamily: "Georgia, serif" }}>f</span>;
    case "youtube":
      return <span className="vs-tile" style={{ ...s, background: "#FF0000" }}><Play size={size * 0.46} fill="#fff" strokeWidth={0} /></span>;
    case "email":
      return <span className="vs-tile" style={{ ...s, background: "linear-gradient(135deg,#6366f1,#8b5cf6)" }}><Mail size={size * 0.48} strokeWidth={2.2} /></span>;
    case "tractionflo":
      return <span className="vs-tile" style={{ ...s, borderRadius: size * 0.32, background: "#0a0a0a", fontWeight: 800, fontSize: size * 0.5 }}>F</span>;
    default:
      return <span className="vs-tile" style={s} />;
  }
}

type Platform = { name: string; desc: string; status: string; brand: string; top: number; left: number };

function PlatformCard({ p }: { p: Platform }) {
  return (
    <div className="vs-card">
      <span className={`vs-pill ${p.status === "available" ? "available" : "soon"}`}>
        {p.status === "available" ? "Available" : "Coming Soon"}
      </span>
      <div className="mt-2.5 flex justify-center">
        <BrandTile brand={p.brand} size={44} />
      </div>
      <p className="mt-2.5 text-[13px] font-extrabold text-[#0a0a0a]">{p.name}</p>
      <p className="mt-0.5 text-[10.5px] leading-tight text-[var(--text-muted)]">{p.desc}</p>
    </div>
  );
}

function CenterCard() {
  return (
    <div className="vs-center">
      <div className="flex justify-center">
        <BrandTile brand="tractionflo" size={52} />
      </div>
      <p className="mt-2.5 text-[15px] font-extrabold tracking-[-0.01em] text-[#0a0a0a]">TractionFlo</p>
      <p className="mt-1 text-[11px] leading-tight text-[var(--text-muted)]">One customer view.<br />Every conversation.</p>
    </div>
  );
}

const CENTER = { top: 42, left: 50 };

export function Vision() {
  const { vision: v } = pageStory;

  return (
    <section id="vision" className="section-white sec-pink" aria-labelledby="vision-heading">
      <div className="page-wrap">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,380px)_1fr] lg:gap-12">
          {/* Left narrative */}
          <Reveal>
            <span className="cv-eyebrow">
              <span className="cv-idx">{v.index}</span>
              <span className="cv-label">{v.eyebrow}</span>
            </span>
            <h2 id="vision-heading" className="opp-headline mt-6">
              Starts with Instagram.<br />
              Built for every customer{" "}
              <span className="relative inline-block" style={{ color: "var(--sec-accent-ink)" }}>
                {v.headlineAccent}
                <svg className="absolute -bottom-1 left-0 w-full" height="7" viewBox="0 0 120 7" preserveAspectRatio="none" aria-hidden>
                  <path d="M2 5 Q60 0 118 4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
            <p className="t-body-sm mt-6 max-w-[400px]">{v.subhead}</p>

            <div className="vs-callout mt-7 flex items-start gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-white shadow-sm" style={{ color: "var(--sec-accent-ink)" }}>
                <Sparkles size={17} strokeWidth={2.2} />
              </span>
              <div>
                <p className="text-[13.5px] font-bold text-[#0a0a0a]">{v.callout.title}</p>
                <p className="mt-1 text-[12.5px] leading-relaxed text-[var(--text-muted)]">{v.callout.text}</p>
              </div>
            </div>
          </Reveal>

          {/* Right hub */}
          <Reveal delay={0.1} className="min-w-0">
            {/* desktop stage */}
            <div className="vs-stage hidden lg:block">
              <div className="vs-ring" style={{ width: 340, height: 340 }} aria-hidden />
              <div className="vs-ring" style={{ width: 560, height: 560 }} aria-hidden />

              <svg className="vs-connectors" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
                {v.platforms.map((p) => (
                  <line key={p.name} x1={CENTER.left} y1={CENTER.top} x2={p.left} y2={p.top} />
                ))}
              </svg>

              <CenterCard />

              {v.platforms.map((p, i) => (
                <div key={p.name} className="vs-node" style={{ top: `${p.top}%`, left: `${p.left}%` }}>
                  <motion.div
                    className="vs-card"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <span className={`vs-pill ${p.status === "available" ? "available" : "soon"}`}>
                      {p.status === "available" ? "Available" : "Coming Soon"}
                    </span>
                    <div className="mt-2.5 flex justify-center">
                      <BrandTile brand={p.brand} size={44} />
                    </div>
                    <p className="mt-2.5 text-[13px] font-extrabold text-[#0a0a0a]">{p.name}</p>
                    <p className="mt-0.5 text-[10.5px] leading-tight text-[var(--text-muted)]">{p.desc}</p>
                  </motion.div>
                </div>
              ))}
            </div>

            {/* mobile stack */}
            <div className="lg:hidden">
              <div className="mx-auto mb-6 w-[180px]">
                <CenterCard />
              </div>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 [&_.vs-card]:w-full">
                {v.platforms.map((p) => (
                  <PlatformCard key={p.name} p={p} />
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Road ahead banner */}
        <Reveal delay={0.1}>
          <div className="vs-road mt-12 grid gap-8 p-7 lg:grid-cols-[minmax(0,280px)_1fr] lg:gap-10">
            <div>
              <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.12em]" style={{ color: "var(--sec-accent-ink)" }}>
                <Sparkles size={13} strokeWidth={2.4} /> {v.roadLabel}
              </p>
              <p className="mt-3 text-[19px] font-extrabold leading-tight tracking-[-0.02em] text-[#0a0a0a]">
                {v.roadHeadlinePre}<br />{v.roadHeadlinePost}
              </p>
              <p className="mt-2 text-[12.5px] leading-relaxed text-[var(--text-muted)]">{v.roadText}</p>
            </div>

            <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2 xl:grid-cols-5">
              {v.roadItems.map((item) => {
                const Icon = ROAD_ICONS[item.icon] ?? MessageCircle;
                const a = ACCENTS[item.color as AccentKey] ?? ACCENTS.pink;
                return (
                  <div key={item.title}>
                    <span className="vs-road-icon" style={{ background: a.bg, color: a.fg }}>
                      <Icon size={16} strokeWidth={2} />
                    </span>
                    <p className="mt-2.5 text-[13px] font-bold text-[#0a0a0a]">{item.title}</p>
                    <p className="mt-0.5 text-[11.5px] leading-relaxed text-[var(--text-muted)]">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>

        <OutcomeStats stats={v.stats} className="mt-12" />

        <p className="mt-8 flex items-center justify-center gap-2 text-center text-[13px] text-[var(--text-muted)]">
          <Heart size={14} style={{ color: "var(--sec-accent-ink)" }} fill="currentColor" strokeWidth={0} />
          {v.mission}
        </p>
      </div>
    </section>
  );
}
