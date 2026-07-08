"use client";

import {
  ArrowUpRight,
  Calendar,
  CheckCircle2,
  Clock,
  CreditCard,
  Heart,
  HelpCircle,
  MessageCircle,
  Send,
  Sparkles,
  User,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { pageStory } from "@/lib/pageStory";

const ICONS: Record<string, LucideIcon> = {
  comment: MessageCircle,
  conversation: Send,
  questions: HelpCircle,
  discovery: Calendar,
  payment: CreditCard,
  onboarding: User,
  referral: Heart,
};

const COLORS: Record<string, string> = {
  pink: "#EC4899",
  blue: "#3B82F6",
  sky: "#0EA5E9",
  green: "#22C55E",
  orange: "#FF5A1F",
  purple: "#8B5CF6",
  rose: "#F43F5E",
};

function Bubbles({ items }: { items: string[] }) {
  return (
    <div className="space-y-1.5">
      {items.map((t) => (
        <p key={t} className="jr-bubble">{t}</p>
      ))}
    </div>
  );
}

function StepBody({ id }: { id: string }) {
  switch (id) {
    case "comment":
      return (
        <>
          <div className="flex items-center gap-2">
            <span className="jr-avatar h-7 w-7 text-[10px]" style={{ background: "linear-gradient(135deg,#f472b6,#a855f7)" }}>J</span>
            <div className="leading-tight">
              <p className="text-[12px] font-bold text-[#0a0a0a]">Jessica</p>
              <p className="text-[10px] text-[#a3a3a3]">on your post</p>
            </div>
          </div>
          <p className="jr-bubble mt-2.5">How much is your coaching?</p>
        </>
      );
    case "conversation":
      return <Bubbles items={["Thanks for reaching out! I’d love to help.", "What are you hoping to achieve?"]} />;
    case "questions":
      return <Bubbles items={["Do you offer 1:1 coaching?", "Yes! I have 1:1 and group programs."]} />;
    case "discovery":
      return (
        <div className="rounded-[10px] border border-[#d8efdd] bg-white p-2.5">
          <p className="text-[12px] font-bold text-[#0a0a0a]">Discovery Call</p>
          <p className="mt-1.5 flex items-center gap-1.5 text-[11px] text-[#52525b]"><Calendar size={11} /> Tue, May 14</p>
          <p className="mt-1 flex items-center gap-1.5 text-[11px] text-[#52525b]"><Clock size={11} /> 11:00 AM EST</p>
          <span className="mt-2 inline-flex items-center gap-1 rounded-md bg-[#F0FDF4] px-2 py-0.5 text-[10.5px] font-semibold text-[#16A34A]">
            <CheckCircle2 size={11} strokeWidth={2.4} /> Confirmed
          </span>
        </div>
      );
    case "payment":
      return (
        <div className="flex flex-col items-center py-1 text-center">
          <span className="text-[20px]">🎉</span>
          <p className="mt-1 text-[11px] font-medium text-[#b45309]">Payment successful!</p>
          <p className="mt-0.5 text-[20px] font-extrabold tracking-[-0.02em] text-[#0a0a0a]">$1,500</p>
          <p className="text-[10.5px] font-semibold text-[#6366F1]">via Stripe</p>
        </div>
      );
    case "onboarding":
      return (
        <>
          <p className="text-[12px] font-bold text-[#0a0a0a]">Welcome aboard, Jessica! 🎉</p>
          <div className="mt-2 space-y-1.5">
            {["Welcome email", "Access to portal", "Resources shared", "First session set"].map((t) => (
              <p key={t} className="flex items-center gap-1.5 text-[11px] text-[#3f3f46]">
                <CheckCircle2 size={12} className="shrink-0 text-[#22C55E]" strokeWidth={2.4} /> {t}
              </p>
            ))}
          </div>
        </>
      );
    case "referral":
      return (
        <div className="flex flex-col items-center py-1 text-center">
          <div className="flex -space-x-2">
            <span className="jr-avatar h-8 w-8 border-2 border-white text-[11px]" style={{ background: "linear-gradient(135deg,#f472b6,#db2777)" }}>A</span>
            <span className="jr-avatar h-8 w-8 border-2 border-white text-[11px]" style={{ background: "linear-gradient(135deg,#60a5fa,#2563eb)" }}>M</span>
          </div>
          <p className="mt-2 text-[11.5px] font-bold leading-tight text-[#0a0a0a]">Jessica referred<br />2 friends</p>
          <Heart size={16} className="mt-1.5 text-[#F43F5E]" fill="#F43F5E" strokeWidth={0} />
        </div>
      );
    default:
      return null;
  }
}

export function CustomerJourney() {
  const { journey } = pageStory;

  return (
    <section id="journey" className="section-white" aria-labelledby="journey-heading">
      <div className="page-wrap">
        {/* Header */}
        <Reveal className="max-w-[620px]">
          <span className="cv-eyebrow">
            <span className="cv-idx">{journey.index}</span>
            <span className="cv-label">{journey.eyebrow}</span>
          </span>
          <h2 id="journey-heading" className="opp-headline mt-6">
            {journey.headlinePre} <br className="hidden sm:block" />
            <span style={{ color: "#84cc16" }}>{journey.headlineAccent}</span>
          </h2>
          <p className="t-body-sm mt-5 max-w-[540px]">{journey.subhead}</p>
        </Reveal>

        {/* Timeline */}
        <Reveal delay={0.08}>
          <div className="jr-track mt-14">
            <div className="jr-rail" aria-hidden />
            {journey.steps.map((step, i) => {
              const Icon = ICONS[step.id] ?? MessageCircle;
              const color = COLORS[step.color] ?? COLORS.pink;
              return (
                <motion.div
                  key={step.id}
                  className="jr-step"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="jr-icon" style={{ color }}>
                    <Icon size={20} strokeWidth={2.1} />
                  </span>

                  <div className={`jr-card ${step.tint ? `tint-${step.tint}` : ""}`}>
                    <div className="flex items-start gap-1.5">
                      <span className="jr-num mt-0.5" style={{ background: color }}>{i + 1}</span>
                      <p className="text-[12.5px] font-bold leading-tight text-[#0a0a0a]">{step.title}</p>
                    </div>
                    <div className="mt-2.5">
                      <StepBody id={step.id} />
                    </div>
                    <p className="jr-time">{step.time}</p>
                  </div>

                  <p className="jr-caption">
                    <ArrowUpRight size={12} className="mr-0.5 inline text-[#c4c4c4]" />
                    {step.caption}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </Reveal>

        {/* Bottom banner */}
        <Reveal delay={0.1}>
          <div className="jr-banner mt-12 flex flex-col gap-4 p-5 md:flex-row md:items-center md:gap-6">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] bg-[#c6f24e] text-[#3f6212]">
              <Sparkles size={20} strokeWidth={2.2} />
            </span>
            <p className="text-[14px] font-medium text-[#0a0a0a] md:max-w-[340px]">
              {journey.banner}
              <span className="font-extrabold">{journey.bannerHighlight}</span>
            </p>
            <div className="flex flex-1 flex-wrap gap-x-6 gap-y-2 md:justify-end">
              {journey.proofPoints.map((p) => (
                <span key={p} className="jr-proof">
                  <CheckCircle2 size={15} className="text-[#84cc16]" strokeWidth={2.2} />
                  {p}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
