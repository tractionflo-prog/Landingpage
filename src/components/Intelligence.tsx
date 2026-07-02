"use client";

import {
  ArrowRight,
  AtSign,
  BookOpen,
  Brain,
  Calendar,
  CircleDashed,
  Database,
  DollarSign,
  Heart,
  MessageCircle,
  Send,
  Sparkles,
  Split,
  Target,
  TrendingUp,
  UserPlus,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { pageStory } from "@/lib/pageStory";
import { ACCENTS, type AccentKey } from "@/lib/accents";

const ICONS: Record<string, LucideIcon> = {
  brain: Brain, target: Target, predict: Split, learn: TrendingUp,
  comment: MessageCircle, dm: Send, story: CircleDashed, mention: AtSign, follow: UserPlus,
  history: Database, heart: Heart, book: BookOpen, users: Users,
  calendar: Calendar, dollar: DollarSign,
};

function acc(color: string) {
  return ACCENTS[color as AccentKey] ?? ACCENTS.pink;
}

function ContextCard({ item, stub }: { item: { title: string; text: string; icon: string; color: string }; stub: "l" | "r" }) {
  const Icon = ICONS[item.icon] ?? Database;
  const a = acc(item.color);
  return (
    <div className={`in-card stub-${stub}`}>
      <div className="flex items-start gap-2.5">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[9px]" style={{ background: a.bg, color: a.fg }}>
          <Icon size={15} strokeWidth={2} />
        </span>
        <div>
          <p className="text-[12.5px] font-bold text-[#0a0a0a]">{item.title}</p>
          <p className="mt-0.5 text-[11px] leading-relaxed text-[var(--text-muted)]">{item.text}</p>
        </div>
      </div>
    </div>
  );
}

export function Intelligence() {
  const { intelligence: it } = pageStory;

  return (
    <section id="intelligence" className="section-white" aria-labelledby="intel-heading">
      <div className="page-wrap">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-12">
          {/* Left narrative */}
          <Reveal>
            <span className="cv-eyebrow">
              <span className="cv-idx">{it.index}</span>
              <span className="cv-label">{it.eyebrow}</span>
            </span>
            <h2 id="intel-heading" className="opp-headline mt-6">
              {it.headlinePre}
              <span style={{ color: "#84cc16" }}>{it.headlineAccent}</span>
            </h2>
            <p className="t-body-sm mt-5 max-w-[400px]">{it.subhead}</p>

            <div className="mt-8 space-y-5">
              {it.features.map((f) => {
                const Icon = ICONS[f.icon] ?? Brain;
                const a = acc(f.color);
                return (
                  <div key={f.title} className="flex items-start gap-3.5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[11px]" style={{ background: a.bg, color: a.fg }}>
                      <Icon size={18} strokeWidth={2} />
                    </span>
                    <div>
                      <p className="text-[14px] font-bold text-[#0a0a0a]">{f.title}</p>
                      <p className="mt-0.5 max-w-[300px] text-[12.5px] leading-relaxed text-[var(--text-muted)]">{f.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>

          {/* Right diagram */}
          <Reveal delay={0.1} className="min-w-0">
            <p className="in-anno mb-3 hidden text-right lg:block">{it.annoTop}</p>

            {/* inputs */}
            <div className="grid grid-cols-5 gap-2">
              {it.inputs.map((inp) => {
                const Icon = ICONS[inp.icon] ?? MessageCircle;
                return (
                  <div key={inp.label} className="in-chip">
                    <Icon size={17} strokeWidth={2} style={{ color: acc(inp.color).fg }} />
                    {inp.label}
                  </div>
                );
              })}
            </div>

            <div className="in-vline" aria-hidden />

            {/* middle */}
            <div className="grid gap-4 lg:grid-cols-[minmax(0,160px)_minmax(0,1fr)_minmax(0,160px)] lg:items-center lg:gap-7">
              <div className="space-y-3">
                {it.contextLeft.map((c) => <ContextCard key={c.title} item={c} stub="r" />)}
              </div>

              <motion.div
                className="in-profile"
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full text-[14px] font-bold text-white" style={{ background: "linear-gradient(135deg,#f472b6,#a855f7)" }}>
                    JW
                  </span>
                  <div>
                    <p className="text-[15px] font-extrabold tracking-[-0.01em] text-[#0a0a0a]">{it.profile.name}</p>
                    <span className="mt-1 inline-flex items-center gap-1 rounded-md bg-[#F0FDF4] px-2 py-0.5 text-[11px] font-semibold text-[#16A34A]">
                      <TrendingUp size={12} strokeWidth={2.4} /> {it.profile.badge}
                    </span>
                  </div>
                </div>
                <div className="mt-3">
                  {it.profile.fields.map(([k, v]) => (
                    <div key={k} className="in-field">
                      <span className="text-[#a3a3a3]">{k}</span>
                      <span className="text-right font-semibold text-[#0a0a0a]">{v}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <div className="space-y-3">
                {it.contextRight.map((c) => <ContextCard key={c.title} item={c} stub="l" />)}
              </div>
            </div>

            <div className="in-vline" aria-hidden />

            {/* NBA + annotations */}
            <div className="mb-1.5 hidden items-end justify-between gap-6 lg:flex">
              <span className="in-anno max-w-[150px]">{it.annoLeft}</span>
              <span className="in-anno max-w-[190px] text-right">{it.annoRight}</span>
            </div>
            <div className="in-nba">
              <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.06em] text-[#65A30D]">
                <Sparkles size={13} strokeWidth={2.4} /> {it.nba.label}
              </div>
              <p className="mt-2 text-[15px] font-bold text-[#0a0a0a]">{it.nba.title}</p>
              <div className="mt-3.5 flex items-center justify-between gap-3">
                <button className="inline-flex items-center gap-2 rounded-lg bg-[#0a0a0a] px-4 py-2 text-[12.5px] font-semibold text-white">
                  {it.nba.cta} <ArrowRight size={14} strokeWidth={2.4} />
                </button>
                <span className="rounded-md bg-[#dcfce7] px-2.5 py-1 text-[11px] font-semibold text-[#16A34A]">{it.nba.tag}</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Bottom banner */}
        <Reveal delay={0.1}>
          <div className="in-banner mt-12 flex flex-col gap-6 p-6 lg:flex-row lg:items-center">
            <div className="flex items-center gap-4 lg:max-w-[320px]">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] bg-[#c6f24e] text-[#3f6212]">
                <Sparkles size={20} strokeWidth={2.2} />
              </span>
              <div>
                <p className="text-[14.5px] font-bold text-[#0a0a0a]">{it.banner.title}</p>
                <p className="mt-0.5 text-[12.5px] leading-relaxed text-[var(--text-muted)]">{it.banner.text}</p>
              </div>
            </div>
            <div className="flex flex-1 flex-wrap gap-x-8 gap-y-4 lg:justify-end">
              {it.stats.map((s) => {
                const Icon = ICONS[s.icon] ?? MessageCircle;
                const a = acc(s.color);
                return (
                  <div key={s.label} className="flex items-center gap-2.5">
                    <span className="in-stat-icon" style={{ background: a.bg, color: a.fg }}>
                      <Icon size={16} strokeWidth={2} />
                    </span>
                    <div className="leading-tight">
                      <p className="text-[17px] font-extrabold tracking-[-0.02em] text-[#0a0a0a]">{s.value}</p>
                      <p className="text-[11.5px] text-[var(--text-muted)]">{s.label}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
