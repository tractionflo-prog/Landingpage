"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import {
  ChevronLeft,
  Phone,
  Video,
  Camera,
  Mic,
  Image as ImageIcon,
  Heart,
  Gift,
  Lock,
  CreditCard,
  CheckCircle2,
  Rocket,
  CornerUpLeft,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { pageStory } from "@/lib/pageStory";

const HANDLE = "maya.coaches";
const IG_SENT = "linear-gradient(160deg,#4F5BD5 0%,#7A3FD0 55%,#A22FB5 100%)";
const IG_RING = "linear-gradient(135deg,#FEDA75,#FA7E1E 30%,#D62976 60%,#962FBF 80%,#4F5BD5)";

type Side = "in" | "out" | "center";
type Msg = { side: Side; typing: boolean; el: ReactNode };

function Avatar({ size = 28, ring = false }: { size?: number; ring?: boolean }) {
  const inner = (
    <span
      className="flex shrink-0 items-center justify-center rounded-full font-bold text-white"
      style={{ width: size, height: size, fontSize: size * 0.4, background: "linear-gradient(135deg,#F9A8D4,#F472B6)" }}
      aria-hidden
    >
      M
    </span>
  );
  if (!ring) return inner;
  return (
    <span className="inline-flex rounded-full p-[2px]" style={{ background: IG_RING }}>
      <span className="rounded-full bg-white p-[2px]">{inner}</span>
    </span>
  );
}

function In({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-end gap-1.5">
      <Avatar size={24} />
      <span className="max-w-[74%] rounded-[20px] rounded-bl-[6px] bg-[#EFEFEF] px-3.5 py-2 text-[14px] leading-snug text-[#0a0a0a]">
        {children}
      </span>
    </div>
  );
}

function Out({ children }: { children: ReactNode }) {
  return (
    <div className="flex justify-end">
      <span
        className="max-w-[74%] rounded-[20px] rounded-br-[6px] px-3.5 py-2 text-[14px] leading-snug text-white"
        style={{ background: IG_SENT }}
      >
        {children}
      </span>
    </div>
  );
}

function TypingDots({ side }: { side: "in" | "out" }) {
  const isIn = side === "in";
  return (
    <div className={isIn ? "flex items-end gap-1.5" : "flex justify-end"}>
      {isIn && <Avatar size={24} />}
      <span
        className={`flex items-center gap-1 rounded-[20px] px-4 py-3 ${
          isIn ? "rounded-bl-[6px] bg-[#EFEFEF]" : "rounded-br-[6px]"
        }`}
        style={!isIn ? { background: IG_SENT } : undefined}
      >
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="h-1.5 w-1.5 rounded-full"
            style={{ background: isIn ? "#9a9a9a" : "#ffffff" }}
            animate={{ opacity: [0.3, 1, 0.3], y: [0, -2, 0] }}
            transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.15 }}
          />
        ))}
      </span>
    </div>
  );
}

const OfferCard = (
  <div className="flex justify-end">
    <div className="max-w-[74%] rounded-[16px] p-3" style={{ background: "#FFF7ED", border: "1px solid #F9731633" }}>
      <p className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.08em] text-[#C2620E]">
        <Gift size={13} /> This week only
      </p>
      <p className="mt-1 text-[13.5px] font-bold text-[#0a0a0a]">Free bonus 1:1 session</p>
      <p className="text-[12px] text-[#6b6b6b]">added to your coaching program</p>
    </div>
  </div>
);

const PayCard = (
  <div className="flex justify-end">
    <div className="max-w-[78%] overflow-hidden rounded-[16px] border border-[#ECECEC] bg-white">
      <div className="flex items-center justify-between gap-3 px-3.5 py-3">
        <div>
          <p className="text-[13.5px] font-bold text-[#0a0a0a]">1:1 Coaching Program</p>
          <p className="text-[12px] text-[#9a9a9a]">Secure checkout</p>
        </div>
        <p className="text-[16px] font-extrabold text-[#0a0a0a]">$2,500</p>
      </div>
      <div className="flex items-center justify-center gap-1.5 bg-[#2563EB] py-2.5 text-[13px] font-bold text-white">
        <Lock size={12} strokeWidth={2.6} /> Pay $2,500
        <CreditCard size={13} strokeWidth={2.4} />
      </div>
    </div>
  </div>
);

const SuccessCard = (
  <div className="flex justify-center pt-1">
    <div className="w-full max-w-[280px] rounded-[16px] p-4 text-center" style={{ background: "#F0FDF4", border: "1px solid #22C55E33" }}>
      <CheckCircle2 size={22} className="mx-auto text-[#22C55E]" />
      <p className="mt-1.5 text-[13px] font-bold text-[#15803d]">Payment successful 🎉</p>
      <p className="mt-0.5 text-[20px] font-extrabold text-[#0a0a0a]">$2,500</p>
      <p className="mt-0.5 text-[11px] text-[#9a9a9a]">Receipt sent to {HANDLE}</p>
    </div>
  </div>
);

const OnboardCard = (
  <div className="flex justify-end">
    <div className="flex max-w-[78%] items-center gap-2.5 rounded-[16px] border border-[#ECECEC] bg-white px-3.5 py-3">
      <span className="flex h-8 w-8 items-center justify-center rounded-[9px] bg-[#F5F3FF] text-[#8B5CF6]">
        <Rocket size={16} />
      </span>
      <div>
        <p className="text-[13px] font-bold text-[#0a0a0a]">Onboarding started</p>
        <p className="text-[11.5px] text-[#9a9a9a]">Welcome email &amp; next steps sent</p>
      </div>
    </div>
  </div>
);

const ReelContext = (
  <div className="flex items-end gap-1.5">
    <Avatar size={24} />
    <div className="max-w-[74%]">
      <p className="mb-1 flex items-center gap-1 pl-1 text-[10.5px] text-[#9a9a9a]">
        <CornerUpLeft size={11} /> Replied to your reel
      </p>
      <div className="flex items-center gap-2 rounded-[16px] bg-[#EFEFEF] p-1.5">
        <span className="h-9 w-9 shrink-0 rounded-[10px]" style={{ background: IG_RING }} aria-hidden />
        <span className="pr-2 text-[12.5px] text-[#6b6b6b]">“Confidence isn’t taught, it’s built”</span>
      </div>
      <span className="mt-1 inline-block rounded-[20px] rounded-bl-[6px] bg-[#EFEFEF] px-3.5 py-2 text-[14px] text-[#0a0a0a]">
        this is SO me 🥹 do you take 1:1 clients??
      </span>
    </div>
  </div>
);

const MESSAGES: Msg[] = [
  { side: "in", typing: false, el: ReelContext },
  { side: "out", typing: true, el: <Out>heyy maya!! 💛 so glad that one resonated</Out> },
  { side: "out", typing: true, el: <Out>i do take a few 1:1 clients each month — mind if i ask what you’re working on right now?</Out> },
  { side: "in", typing: true, el: <In>i run a small coaching biz but i feel stuck.. lots of followers, barely any paying clients 😞</In> },
  { side: "out", typing: true, el: <Out>ahh i hear this constantly. you’re not short on attention — you’re short on a system to turn it into clients</Out> },
  { side: "out", typing: true, el: <Out>that’s exactly the gap we’d fix together</Out> },
  { side: "in", typing: true, el: <In>okay that’s literally my problem 😩 how does the program actually work?</In> },
  { side: "out", typing: true, el: <Out>great q! it’s 12 weeks, 1:1. we nail your offer, build a simple daily content + DM flow, and i give you the exact scripts so convos stop going cold</Out> },
  { side: "out", typing: true, el: <Out>we meet weekly on zoom, and you’ve got me on voxer between calls for quick questions 🙌</Out> },
  { side: "in", typing: true, el: <In>ooh i love that. how soon do people usually see results?</In> },
  { side: "out", typing: true, el: <Out>most clients book their first discovery calls within week 1–2 once the DM flow is live — then closing gets really fun 😄</Out> },
  { side: "in", typing: true, el: <In>amazing.. what’s the investment?</In> },
  { side: "out", typing: true, el: <Out>it’s $2,500 for the full 12 weeks — or 3 monthly payments if that’s easier 💛</Out> },
  { side: "in", typing: true, el: <In>that’s doable, and honestly i’m so ready to commit this time 🙏</In> },
  { side: "out", typing: true, el: <Out>love that maya 🥰 you’re exactly who i built this for</Out> },
  { side: "out", typing: true, el: <Out>and since you’re starting this week, i’ll add a bonus 1:1 session on me 🎁</Out> },
  { side: "out", typing: false, el: OfferCard },
  { side: "in", typing: true, el: <In>yes please!! 😍 how do i get started?</In> },
  { side: "out", typing: true, el: <Out>easy — here’s your secure checkout, takes 30 secs 👇</Out> },
  { side: "out", typing: false, el: PayCard },
  { side: "center", typing: false, el: SuccessCard },
  { side: "out", typing: true, el: <Out>eeee welcome in maya!! 🎉 so excited to work with you</Out> },
  { side: "out", typing: true, el: <Out>check your inbox — your onboarding + first worksheet are waiting 🚀</Out> },
  { side: "out", typing: false, el: OnboardCard },
];

export function LiveExample() {
  const { liveExample } = pageStory;
  const startRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const inView = useInView(startRef, { once: true, margin: "-80px" });

  const [visible, setVisible] = useState(0);
  const [typingSide, setTypingSide] = useState<"in" | "out" | null>(null);
  const [animate, setAnimate] = useState(true);

  // On mobile (and reduced motion) skip the streaming animation.
  useEffect(() => {
    const reduce =
      window.matchMedia("(max-width: 767px)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setAnimate(false);
      setVisible(MESSAGES.length);
    }
  }, []);

  // Sequencer.
  useEffect(() => {
    if (!animate || !inView) return;
    if (visible >= MESSAGES.length) {
      setTypingSide(null);
      return;
    }
    const next = MESSAGES[visible];
    let t2: ReturnType<typeof setTimeout>;
    const reveal = () => {
      setTypingSide(null);
      setVisible((v) => v + 1);
    };
    if (next.typing && next.side !== "center") {
      setTypingSide(next.side);
      t2 = setTimeout(reveal, 750 + Math.random() * 350);
    } else {
      t2 = setTimeout(reveal, 320);
    }
    return () => clearTimeout(t2);
  }, [animate, inView, visible]);

  // Auto-scroll the thread as it fills.
  useEffect(() => {
    const el = bodyRef.current;
    if (el && animate) el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [visible, typingSide, animate]);

  return (
    <section id="example" className="section-grey" aria-labelledby="example-heading">
      <div className="page-wrap">
        <Reveal>
          <p className="text-center text-[12px] font-bold uppercase tracking-[0.16em] text-[#EC4899]">
            {liveExample.eyebrow}
          </p>
          <h2 id="example-heading" className="t-section mx-auto mt-4 max-w-[620px] text-center">
            {liveExample.headline}
          </h2>
          <p className="t-body mx-auto mt-4 max-w-[560px] text-center">{liveExample.subhead}</p>
        </Reveal>

        <Reveal>
          <div ref={startRef} className="tf-soft mx-auto mt-12 max-w-[420px] overflow-hidden rounded-[30px] border border-[#ECECEC] bg-white">
            {/* IG DM header */}
            <div className="flex items-center gap-3 border-b border-[#F0F0F0] px-4 py-3">
              <ChevronLeft size={22} className="text-[#0a0a0a]" />
              <Avatar size={36} ring />
              <div className="min-w-0 leading-tight">
                <p className="text-[14px] font-semibold text-[#0a0a0a]">{HANDLE}</p>
                <p className="text-[11.5px] text-[#9a9a9a]">{typingSide ? "typing…" : "Active now"}</p>
              </div>
              <div className="ml-auto flex items-center gap-4 text-[#0a0a0a]">
                <Phone size={19} />
                <Video size={20} />
              </div>
            </div>

            {/* Thread */}
            <div
              ref={bodyRef}
              className="space-y-2 overflow-y-auto bg-white px-3.5 py-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              style={animate ? { height: "clamp(440px, 56vh, 560px)" } : undefined}
            >
              <p className="py-1 text-center text-[11px] font-medium text-[#b5b5b5]">Today 9:41 AM</p>

              {MESSAGES.slice(0, visible).map((m, i) => (
                <motion.div
                  key={i}
                  initial={animate ? { opacity: 0, y: 10, scale: 0.98 } : false}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                >
                  {m.el}
                </motion.div>
              ))}

              {typingSide && <TypingDots side={typingSide} />}

              {visible >= MESSAGES.length && (
                <p className="pr-1 pt-0.5 text-right text-[10.5px] text-[#b5b5b5]">Seen</p>
              )}
            </div>

            {/* IG composer */}
            <div className="flex items-center gap-2.5 border-t border-[#F0F0F0] px-3 py-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white" style={{ background: IG_RING }}>
                <Camera size={16} />
              </span>
              <div className="flex flex-1 items-center justify-between rounded-full bg-[#F1F1F2] px-4 py-2">
                <span className="text-[13px] text-[#9a9a9a]">Message...</span>
                <div className="flex items-center gap-3 text-[#0a0a0a]">
                  <Mic size={16} />
                  <ImageIcon size={16} />
                  <Heart size={16} />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
