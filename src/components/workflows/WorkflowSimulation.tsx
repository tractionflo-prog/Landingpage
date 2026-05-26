"use client";

import { Fragment, useEffect, useState } from "react";
import { ArrowRight, FileText, Check, Loader2 } from "lucide-react";

type Tab = "comment" | "faq" | "broadcasts" | "followups";

export function WorkflowSimulation({ tab }: { tab: Tab }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    setStep(0);
    const id = setInterval(() => setStep((s) => (s + 1) % 4), 2000);
    return () => clearInterval(id);
  }, [tab]);

  if (tab === "comment") return <CommentFlow step={step} />;
  if (tab === "faq") return <FaqFlow step={step} />;
  if (tab === "broadcasts")
    return (
      <GenericFlow
        step={step}
        steps={[
          { t: "Select audience", b: "847 warm followers" },
          { t: "Compose message", b: "New cohort opens Monday" },
          { t: "Send broadcast", b: "Sending to 847..." },
          { t: "Replies tracked", b: "23 interested · 8 booked" },
        ]}
      />
    );
  return (
    <GenericFlow
      step={step}
      steps={[
        { t: "Silent lead", b: "@maya — no reply 3 days" },
        { t: "Follow-up drafted", b: "Still want the guide?" },
        { t: "Message sent", b: "Scheduled 10:00 AM" },
        { t: "Re-engaged", b: "Reply received ✓" },
      ]}
    />
  );
}

function FlowWrap({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-w-[680px] items-start gap-2 overflow-x-auto pb-1 md:min-w-0">
      {children}
    </div>
  );
}

function Step({
  title,
  active,
  children,
}: {
  title: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`wf-step transition-all ${active ? "ring-2 ring-[#bef227] ring-offset-2" : "opacity-70"}`}
      style={{ transform: active ? "translateY(-2px)" : "none" }}
    >
      <p className="text-[12px] font-medium text-[#888]">{title}</p>
      <div className="mt-3">{children}</div>
    </div>
  );
}

function Arrow() {
  return <ArrowRight size={18} className="mt-10 shrink-0 text-[#ccc]" />;
}

function CommentFlow({ step }: { step: number }) {
  const cards = [
    {
      title: "Instagram comment",
      body: (
        <div className="flex gap-2">
          <div className="h-8 w-8 shrink-0 rounded-full bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045]" />
          <div>
            <p className="text-[13px] font-bold">jonahfit</p>
            <p className="mt-1 rounded-[12px] bg-[#f4f4f4] px-2.5 py-1.5 text-[13px]">GUIDE 👇</p>
          </div>
        </div>
      ),
    },
    {
      title: "DM starts",
      body: (
        <div>
          <div className="mb-1.5 flex items-center gap-1.5">
            <span className="flex h-5 w-5 items-center justify-center rounded bg-[#bef227] text-[7px] font-bold">TF</span>
            <span className="text-[12px] font-bold">TractionFlo</span>
          </div>
          <p className="rounded-[12px] bg-[#eef9c4] px-2.5 py-1.5 text-[13px]">Hi! Here&apos;s the guide 👋</p>
        </div>
      ),
    },
    {
      title: "Guide sent",
      body: (
        <div className="flex items-center gap-2 rounded-[10px] border border-black/[0.06] bg-[#f8f8f8] p-2">
          <FileText size={22} className="text-[#8ab800]" />
          <div>
            <p className="text-[13px] font-semibold">Guide.pdf</p>
            <p className="text-[11px] text-[#999]">Sent</p>
          </div>
        </div>
      ),
    },
    {
      title: "Lead saved",
      body: (
        <div className="flex gap-2">
          <div className="h-8 w-8 shrink-0 rounded-full bg-gradient-to-br from-[#833ab4] to-[#fcb045]" />
          <div>
            <p className="text-[13px] font-bold">jonahfit</p>
            <p className="flex items-center gap-1 text-[12px] text-[#666]">
              New lead captured <Check size={14} className="text-[#8ab800]" strokeWidth={3} />
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <FlowWrap>
      {cards.map((c, i) => (
        <Fragment key={c.title}>
          <Step title={c.title} active={step === i}>
            {c.body}
          </Step>
          {i < 3 && <Arrow />}
        </Fragment>
      ))}
    </FlowWrap>
  );
}

function FaqFlow({ step }: { step: number }) {
  const cards = [
    {
      title: "Question appears",
      body: <p className="rounded-[12px] bg-[#f4f4f4] px-2.5 py-2 text-[13px]">How much is coaching?</p>,
    },
    {
      title: "Thinking",
      body: (
        <div className="flex items-center gap-2 text-[13px] text-[#888]">
          {step === 1 ? <Loader2 size={16} className="animate-spin" /> : "···"}
          Processing...
        </div>
      ),
    },
    {
      title: "Answer generated",
      body: (
        <p className="rounded-[12px] bg-[#eef9c4] px-2.5 py-2 text-[13px]">
          Plans start at $297/mo.
        </p>
      ),
    },
    {
      title: "Lead tagged",
      body: (
        <span className="inline-block rounded-full bg-[#eef9c4] px-2.5 py-1 text-[12px] font-medium">
          Pricing intent
        </span>
      ),
    },
  ];

  return (
    <FlowWrap>
      {cards.map((c, i) => (
        <Fragment key={c.title}>
          <Step title={c.title} active={step === i}>
            {c.body}
          </Step>
          {i < 3 && <Arrow />}
        </Fragment>
      ))}
    </FlowWrap>
  );
}

function GenericFlow({
  step,
  steps,
}: {
  step: number;
  steps: { t: string; b: string }[];
}) {
  return (
    <FlowWrap>
      {steps.map((s, i) => (
        <Fragment key={s.t}>
          <Step title={s.t} active={step === i}>
            <p className="text-[13px]">{s.b}</p>
          </Step>
          {i < 3 && <Arrow />}
        </Fragment>
      ))}
    </FlowWrap>
  );
}
