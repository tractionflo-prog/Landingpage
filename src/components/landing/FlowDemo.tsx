"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { Check, Volume2, VolumeX } from "lucide-react";
import { demoCases } from "@/lib/landing/callDemo";
import { agentBrand } from "@/lib/agent";

type Phase = "connecting" | "live" | "booked";

const CASE_INDEX = 0;
const active = demoCases[CASE_INDEX];
const SIMPLE_LINES = [0, 1, 4];

export function FlowDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });
  const reduce = useReducedMotion();

  const [phase, setPhase] = useState<Phase>("connecting");
  const [shown, setShown] = useState(0);
  const [audioOn, setAudioOn] = useState(false);

  const { lead, transcript, outcome, program } = active;
  const lines = SIMPLE_LINES.map((i) => transcript[i]).filter(Boolean);
  const firstName = lead.name.split(" ")[0];
  const current = shown > 0 ? lines[shown - 1] : null;

  const audioOnRef = useRef(false);
  useEffect(() => {
    audioOnRef.current = audioOn;
  }, [audioOn]);

  const audioElRef = useRef<HTMLAudioElement | null>(null);
  const getAudio = () => {
    if (!audioElRef.current && typeof window !== "undefined") {
      const el = new Audio();
      el.preload = "auto";
      audioElRef.current = el;
    }
    return audioElRef.current;
  };

  const playClip = (lineIndex: number) =>
    new Promise<void>((resolve) => {
      const a = getAudio();
      if (!a) return resolve();
      try {
        a.src = `/audio/c${CASE_INDEX}l${lineIndex}.mp3`;
        a.currentTime = 0;
        let done = false;
        const finish = () => {
          if (!done) {
            done = true;
            a.onended = null;
            a.onerror = null;
            resolve();
          }
        };
        a.onended = finish;
        a.onerror = finish;
        const p = a.play();
        if (p && typeof p.catch === "function") p.catch(() => finish());
        setTimeout(finish, 13000);
      } catch {
        resolve();
      }
    });

  const toggleAudio = () => {
    const next = !audioOn;
    setAudioOn(next);
    const a = getAudio();
    if (!a) return;
    if (next) {
      const idx = phase === "live" && shown > 0 ? SIMPLE_LINES[shown - 1] : SIMPLE_LINES[0];
      try {
        a.src = `/audio/c${CASE_INDEX}l${idx}.mp3`;
        a.currentTime = 0;
        a.play()?.catch(() => {});
      } catch {
        /* no-op */
      }
    } else {
      try {
        a.pause();
      } catch {
        /* no-op */
      }
    }
  };

  useEffect(() => {
    if (!inView) return;
    let cancelled = false;
    const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

    (async () => {
      while (!cancelled) {
        setPhase("connecting");
        setShown(0);
        await sleep(1800);
        if (cancelled) return;

        setPhase("live");
        for (let i = 0; i < lines.length; i++) {
          setShown(i + 1);
          if (audioOnRef.current) {
            await playClip(SIMPLE_LINES[i]);
            await sleep(350);
          } else {
            await sleep(2800);
          }
          if (cancelled) return;
        }

        await sleep(600);
        if (cancelled) return;

        setPhase("booked");
        await sleep(4000);
      }
    })();

    return () => {
      cancelled = true;
      audioElRef.current?.pause();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  const isLive = phase === "live";
  const isBooked = phase === "booked";
  const pulse = isLive || phase === "connecting";

  return (
    <div className="lp-voice-moment" id="product" ref={ref}>
      <div className={`lp-voice-ring${pulse ? " is-live" : ""}${isBooked ? " is-booked" : ""}`}>
        <span className="lp-voice-ring-ripple lp-voice-ring-ripple--1" aria-hidden />
        <span className="lp-voice-ring-ripple lp-voice-ring-ripple--2" aria-hidden />
        <span className="lp-voice-ring-ripple lp-voice-ring-ripple--3" aria-hidden />
        <span className="lp-voice-ring-core">
          {isBooked ? (
            <Check size={28} strokeWidth={2.5} />
          ) : (
            <span className="lp-voice-ring-bars" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <i
                  key={i}
                  style={{ animationDelay: `${i * 0.12}s` }}
                  className={pulse ? "is-on" : ""}
                />
              ))}
            </span>
          )}
        </span>
      </div>

      <p className="lp-voice-status">
        {isBooked ? (
          <>
            <span className="lp-voice-status-dot is-green" />
            {outcome.status} · {outcome.when}
          </>
        ) : isLive ? (
          <>
            <span className="lp-voice-status-dot" />
            Live with {firstName} · masterclass lead
          </>
        ) : (
          <>Calling {firstName} · {program ?? "masterclass lead"}…</>
        )}
      </p>

      <div className="lp-voice-line-wrap">
        <AnimatePresence mode="wait">
          {isBooked ? (
            <motion.p
              key="done"
              className="lp-voice-line lp-voice-line--muted"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              Discovery call confirmed. Prep workbook sent.
            </motion.p>
          ) : current ? (
            <motion.p
              key={current.at + current.speaker}
              className={`lp-voice-line lp-voice-line--${current.speaker}`}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              {current.text}
            </motion.p>
          ) : (
            <motion.p
              key="wait"
              className="lp-voice-line lp-voice-line--muted"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              She joined your free masterclass, said she wasn&rsquo;t ready — now {agentBrand.name} is calling her back.
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <button
        type="button"
        className={`lp-voice-audio${audioOn ? " is-on" : ""}`}
        onClick={toggleAudio}
        aria-pressed={audioOn}
      >
        {audioOn ? <Volume2 size={14} /> : <VolumeX size={14} />}
        {audioOn ? "Sound on" : "Hear the call"}
      </button>
    </div>
  );
}
