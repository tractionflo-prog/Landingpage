"use client";

import {
  ArrowLeft,
  Calendar,
  CheckCircle2,
  ChevronDown,
  Clock,
  MapPin,
  MessageCircle,
  MoreHorizontal,
  MoreVertical,
  Send,
  Sparkles,
  Star,
  Target,
  UserCheck,
  UserPlus,
  Users,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { OutcomeStats } from "@/components/ui/OutcomeStats";
import { pageStory } from "@/lib/pageStory";

const FEATURE_ICONS: Record<string, LucideIcon> = {
  profile: Users,
  intent: Target,
  action: Zap,
};

type TL = { icon: LucideIcon; fg: string; bg: string; title: string; sub: string; time: string };
const TIMELINE: TL[] = [
  { icon: MessageCircle, fg: "#EC4899", bg: "#FDF2F8", title: "Commented on your post", sub: "“How much is the coaching program?”", time: "Mon, 9:41 AM" },
  { icon: Sparkles, fg: "#D6297C", bg: "#FCE7F3", title: "Replied to your story", sub: "“This looks exactly what I need!”", time: "Tue, 7:32 PM" },
  { icon: Send, fg: "#3B82F6", bg: "#EFF6FF", title: "Sent you a DM", sub: "Asked about pricing and availability", time: "Thu, 11:08 AM" },
  { icon: CheckCircle2, fg: "#16A34A", bg: "#F0FDF4", title: "AI qualified the lead", sub: "Budget: $1,500 · Goal: 1:1 Coaching", time: "Thu, 11:10 AM" },
  { icon: Calendar, fg: "#8B5CF6", bg: "#F5F3FF", title: "Booked a call", sub: "Discovery Call for May 18, 2024", time: "Fri, 2:45 PM" },
  { icon: UserCheck, fg: "#0EA5E9", bg: "#F0F9FF", title: "Moved to Onboarding", sub: "Call completed. Ready to start.", time: "Sat, 10:20 AM" },
];

const ABOUT = [
  { label: "Interests", value: "Coaching", pill: true },
  { label: "Budget", value: "$1,500" },
  { label: "Goal", value: "Lose weight & build confidence" },
  { label: "Source", value: "Instagram – Post Comment" },
];

const QUESTIONS = [
  "How much is the program?",
  "What’s included in the 1:1 coaching?",
  "Do you offer payment plans?",
];

export function CustomerView() {
  const { customerView: cv } = pageStory;

  return (
    <section id="customer-view" className="section-white sec-blue" aria-labelledby="cv-heading">
      <div className="page-wrap">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,360px)_1fr] lg:items-center lg:gap-12">
          {/* Left narrative */}
          <Reveal className="min-w-0">
            <span className="cv-eyebrow">
              <span className="cv-idx">{cv.index}</span>
              <span className="cv-label">{cv.eyebrow}</span>
            </span>

            <h2 id="cv-heading" className="opp-headline mt-6">
              {cv.headlinePre} <br className="hidden sm:block" />
              {cv.headlineAccent}
            </h2>

            <p className="t-body-sm mt-5 max-w-[400px]">{cv.subhead}</p>

            <div className="mt-8 space-y-5">
              {cv.features.map((f) => {
                const Icon = FEATURE_ICONS[f.icon] ?? Users;
                return (
                  <div key={f.title} className="flex items-start gap-3.5">
                    <span className="cv-feature-icon">
                      <Icon size={18} strokeWidth={2} />
                    </span>
                    <div>
                      <p className="text-[14.5px] font-bold text-[#0a0a0a]">{f.title}</p>
                      <p className="mt-0.5 max-w-[300px] text-[13px] leading-relaxed text-[var(--text-muted)]">{f.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-9 flex items-start gap-3">
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full" style={{ background: "var(--sec-accent-soft)", color: "var(--sec-accent-ink)" }}>
                <Zap size={15} strokeWidth={2.4} fill="currentColor" />
              </span>
              <p className="max-w-[260px] text-[13px] font-medium leading-snug text-[#0a0a0a]">{cv.socialProof}</p>
            </div>
          </Reveal>

          {/* Right — app window */}
          <Reveal delay={0.1} className="min-w-0">
            <div className="cv-window">
              {/* top bar */}
              <div className="cv-topbar">
                <span className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#52525b]">
                  <ArrowLeft size={15} strokeWidth={2.2} />
                  Back to pipeline
                </span>
                <div className="flex items-center gap-2">
                  <span className="cv-topbtn">
                    <UserPlus size={13} strokeWidth={2.2} />
                    Take over
                    <ChevronDown size={13} strokeWidth={2.2} />
                  </span>
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-[#ececec] text-[#71717a]">
                    <MoreVertical size={15} strokeWidth={2.2} />
                  </span>
                </div>
              </div>

              <div className="p-5">
                {/* profile header */}
                <div className="flex items-center gap-4">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full text-[16px] font-bold text-white" style={{ background: "linear-gradient(135deg,#f472b6,#a855f7)" }}>
                    JW
                  </span>
                  <div className="min-w-0">
                    <p className="flex items-center gap-1.5 text-[17px] font-extrabold tracking-[-0.01em] text-[#0a0a0a]">
                      Jessica Williams
                      <Star size={15} className="text-[#f59e0b]" fill="#f59e0b" strokeWidth={0} />
                    </p>
                    <div className="mt-1.5 flex flex-wrap items-center gap-2">
                      <span className="cv-pill" style={{ background: "#FFF7ED", color: "#EA580C" }}>Warm Lead</span>
                      <span className="inline-flex items-center gap-1 text-[12px] font-medium text-[#71717a]">
                        <Sparkles size={12} className="text-[#D6297C]" /> @jessica.w
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="cv-meta"><MapPin size={12} /> Toronto, Canada</span>
                  <span className="cv-meta"><Clock size={12} /> Engaged 4d ago</span>
                </div>

                {/* tabs */}
                <div className="cv-tabs">
                  {["Overview", "Timeline", "Conversations", "Notes", "Files", "Activity"].map((t, i) => (
                    <span key={t} className={`cv-tab ${i === 0 ? "is-active" : ""}`}>{t}</span>
                  ))}
                </div>

                {/* body grid */}
                <div className="cv-body">
                  {/* timeline */}
                  <div className="cv-card p-4">
                    <div className="flex items-center justify-between">
                      <p className="text-[13.5px] font-bold text-[#0a0a0a]">Interaction Timeline</p>
                      <span className="cv-select">All interactions <ChevronDown size={13} /></span>
                    </div>

                    <div className="cv-timeline mt-3">
                      <div className="cv-tl-rail" aria-hidden />
                      {TIMELINE.map((item) => {
                        const Icon = item.icon;
                        return (
                          <div key={item.title} className="cv-tl-item">
                            <span className="cv-tl-icon" style={{ background: item.bg, color: item.fg }}>
                              <Icon size={15} strokeWidth={2.2} />
                            </span>
                            <div className="min-w-0 flex-1">
                              <div className="flex items-start justify-between gap-3">
                                <p className="text-[13px] font-bold text-[#0a0a0a]">{item.title}</p>
                                <span className="whitespace-nowrap text-[11px] text-[#a3a3a3]">{item.time}</span>
                              </div>
                              <p className="mt-0.5 text-[12px] leading-relaxed text-[var(--text-muted)]">{item.sub}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* sidebar */}
                  <div className="space-y-4">
                    <div className="cv-card p-4">
                      <p className="text-[13px] font-bold text-[#0a0a0a]">About Jessica</p>
                      <div className="mt-2">
                        {ABOUT.map((row) => (
                          <div key={row.label} className="cv-about-row">
                            <span className="text-[#a3a3a3]">{row.label}</span>
                            {row.pill ? (
                              <span className="rounded-md bg-[#F0FDF4] px-2 py-0.5 text-[11.5px] font-semibold text-[#16A34A]">{row.value}</span>
                            ) : (
                              <span className="text-right font-semibold text-[#0a0a0a]">{row.value}</span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="cv-card p-4">
                      <p className="text-[13px] font-bold text-[#0a0a0a]">Questions Asked</p>
                      <div className="mt-3 space-y-2.5">
                        {QUESTIONS.map((q) => (
                          <div key={q} className="flex items-start gap-2">
                            <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-[#22C55E]" strokeWidth={2.2} />
                            <span className="text-[12.5px] leading-snug text-[#3f3f46]">{q}</span>
                          </div>
                        ))}
                      </div>
                      <button className="mt-3 rounded-lg border border-[#ececec] px-3 py-1.5 text-[12px] font-semibold text-[#52525b]">
                        View all (3)
                      </button>
                    </div>

                    <div className="cv-nba">
                      <p className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.08em]" style={{ color: "var(--sec-accent-ink)" }}>
                        <Zap size={12} strokeWidth={2.5} fill="currentColor" /> Next Best Action
                      </p>
                      <p className="mt-2 text-[15px] font-extrabold text-[#0a0a0a]">Send payment options</p>
                      <p className="mt-1.5 text-[12.5px] leading-relaxed text-[var(--text-muted)]">
                        Jessica showed strong intent and asked about pricing.
                      </p>
                      <div className="mt-3.5 flex items-center gap-2">
                        <button className="inline-flex items-center gap-2 rounded-lg bg-[#0a0a0a] px-4 py-2 text-[12.5px] font-semibold text-white">
                          <Send size={13} strokeWidth={2.2} /> Send Message
                        </button>
                        <button className="flex h-8 w-9 items-center justify-center rounded-lg border bg-white" style={{ borderColor: "var(--sec-accent)", color: "var(--sec-accent-ink)" }}>
                          <MoreHorizontal size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <OutcomeStats stats={cv.stats} className="mt-12" />
      </div>
    </section>
  );
}
