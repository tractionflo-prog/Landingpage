"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { CalendarCheck, Check, Pause, Phone, Play, RotateCcw, Sparkles } from "lucide-react";
import { demoCases } from "@/lib/landing/callDemo";
import { agentBrand } from "@/lib/agent";

type Phase = "idle" | "connecting" | "live" | "booked";
type Playback = "idle" | "playing" | "paused" | "done";

const CASE_INDEX = 0;
const active = demoCases[CASE_INDEX];

const KNOWS = [
  "Joined your free class · 32 days ago",
  'Said she wasn\u2019t ready to invest — "not yet"',
  "Goal: career transition + financial abundance",
];

const BOOKED_CHIPS = ["Objection resolved", "Prep workbook sent", "Coach briefed"];

export function FlowDemo() {
  const reduce = useReducedMotion();

  const [phase, setPhase] = useState<Phase>("idle");
  const [shown, setShown] = useState(0);
  const [playback, setPlayback] = useState<Playback>("idle");
  const [seconds, setSeconds] = useState(0);

  const { lead, transcript, outcome } = active;
  const firstName = lead.name.split(" ")[0];

  const audioElRef = useRef<HTMLAudioElement | null>(null);
  const runRef = useRef(0);
  const pausedRef = useRef(false);
  const pauseWaitersRef = useRef<Array<() => void>>([]);
  const feedRef = useRef<HTMLDivElement | null>(null);

  const getAudio = () => {
    if (!audioElRef.current && typeof window !== "undefined") {
      const el = new Audio();
      el.preload = "auto";
      audioElRef.current = el;
    }
    return audioElRef.current;
  };

  const waitIfPaused = () =>
    new Promise<void>((resolve) => {
      if (!pausedRef.current) {
        resolve();
        return;
      }
      pauseWaitersRef.current.push(resolve);
    });

  const pausePlayback = () => {
    pausedRef.current = true;
    setPlayback("paused");
    try {
      audioElRef.current?.pause();
    } catch {
      /* no-op */
    }
  };

  const resumePlayback = () => {
    pausedRef.current = false;
    pauseWaitersRef.current.forEach((resolve) => resolve());
    pauseWaitersRef.current = [];
    setPlayback("playing");
    try {
      void audioElRef.current?.play();
    } catch {
      /* no-op */
    }
  };

  const resetAudio = () => {
    const a = audioElRef.current;
    if (!a) return;
    try {
      a.pause();
      a.currentTime = 0;
      a.onended = null;
      a.onerror = null;
    } catch {
      /* no-op */
    }
  };

  const sleep = async (ms: number, runId: number) => {
    let elapsed = 0;
    while (elapsed < ms) {
      if (runRef.current !== runId) throw new Error("cancelled");
      if (pausedRef.current) await waitIfPaused();
      if (runRef.current !== runId) throw new Error("cancelled");
      await new Promise((resolve) => window.setTimeout(resolve, 100));
      elapsed += 100;
    }
  };

  const playClip = async (lineIndex: number, runId: number) => {
    const a = getAudio();
    if (!a) return;

    a.src = `/audio/c${CASE_INDEX}l${lineIndex}.mp3`;
    a.currentTime = 0;

    await new Promise<void>((resolve) => {
      let settled = false;
      const finish = () => {
        if (settled) return;
        settled = true;
        a.onended = null;
        a.onerror = null;
        resolve();
      };

      a.onended = finish;
      a.onerror = finish;
      const timeout = window.setTimeout(finish, 20000);

      const tick = async () => {
        while (!settled) {
          if (runRef.current !== runId) {
            window.clearTimeout(timeout);
            finish();
            return;
          }

          if (pausedRef.current) {
            try {
              a.pause();
            } catch {
              /* no-op */
            }
            await waitIfPaused();
            continue;
          }

          if (a.paused && !a.ended) {
            try {
              await a.play();
            } catch {
              finish();
              return;
            }
          }

          if (a.ended) {
            window.clearTimeout(timeout);
            finish();
            return;
          }

          await new Promise((r) => window.setTimeout(r, 100));
        }
      };

      void tick();
    });
  };

  const runDemo = async () => {
    const runId = ++runRef.current;
    pausedRef.current = false;
    pauseWaitersRef.current.forEach((resolve) => resolve());
    pauseWaitersRef.current = [];
    resetAudio();

    setPlayback("playing");
    setShown(0);
    setSeconds(0);
    setPhase("connecting");

    try {
      await sleep(1600, runId);

      setPhase("live");
      for (let i = 0; i < transcript.length; i++) {
        setShown(i + 1);
        await playClip(i, runId);
        if (runRef.current !== runId) return;
        await sleep(300, runId);
      }

      await sleep(500, runId);
      setPhase("booked");
      setPlayback("done");
    } catch {
      return;
    }
  };

  const handlePrimary = () => {
    if (playback === "playing") {
      pausePlayback();
      return;
    }
    if (playback === "paused") {
      resumePlayback();
      return;
    }
    void runDemo();
  };

  /* stop everything if the component unmounts mid-call */
  useEffect(
    () => () => {
      runRef.current++;
      pausedRef.current = false;
      pauseWaitersRef.current.forEach((resolve) => resolve());
      pauseWaitersRef.current = [];
      resetAudio();
    },
    []
  );

  /* call timer — ticks only while live audio is playing */
  useEffect(() => {
    if (playback !== "playing" || phase !== "live") return;
    const id = window.setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => window.clearInterval(id);
  }, [playback, phase]);

  /* keep the newest message in view */
  useEffect(() => {
    const feed = feedRef.current;
    if (!feed) return;
    feed.scrollTo({ top: feed.scrollHeight, behavior: reduce ? "auto" : "smooth" });
  }, [shown, phase, reduce]);

  const isLive = phase === "live";
  const isBooked = phase === "booked";
  const isActive = playback === "playing" || playback === "paused";
  const ringing = phase === "connecting" && playback === "playing";
  const timer = `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;

  const primaryLabel =
    playback === "playing"
      ? "Pause"
      : playback === "paused"
        ? "Resume"
        : playback === "done"
          ? "Replay call"
          : "Hear the call";

  const PrimaryIcon =
    playback === "playing" ? Pause : playback === "done" ? RotateCcw : Play;

  return (
    <div className="lp-demo2">
      {/* call header */}
      <div className="lp-demo2-head">
        <div className="lp-demo2-id">
          <span className={`lp-demo2-avatar${ringing ? " is-ringing" : ""}${isLive && playback === "playing" ? " is-live" : ""}`}>
            {lead.initials}
          </span>
          <div className="lp-demo2-who">
            <p className="lp-demo2-name">{lead.name}</p>
            <p className="lp-demo2-meta">{lead.title} · went quiet 32 days ago</p>
          </div>
        </div>

        <span
          className={`lp-demo2-state${isLive || ringing ? " is-live" : ""}${isBooked ? " is-booked" : ""}`}
        >
          {isBooked ? (
            <>
              <Check size={12} strokeWidth={3} /> Booked
            </>
          ) : ringing ? (
            <>
              <Phone size={12} strokeWidth={2.5} /> Calling…
            </>
          ) : isLive ? (
            <>
              <span className="lp-demo2-state-dot" /> {timer}
            </>
          ) : playback === "paused" ? (
            <>Paused · {timer}</>
          ) : (
            <>Ready</>
          )}
        </span>
      </div>

      {/* conversation feed */}
      <div className="lp-demo2-feed" ref={feedRef}>
        {phase === "idle" ? (
          <div className="lp-demo2-intro">
            <p className="lp-demo2-intro-label">
              <Sparkles size={13} strokeWidth={2.5} />
              What {agentBrand.name} remembers about {firstName}
            </p>
            <ul className="lp-demo2-knows">
              {KNOWS.map((k) => (
                <li key={k}>{k}</li>
              ))}
            </ul>
            <p className="lp-demo2-intro-hint">
              Tap play to hear {agentBrand.name} call her back — and book her.
            </p>
          </div>
        ) : (
          <>
            {transcript.slice(0, shown).map((line, i) => (
              <motion.div
                key={line.at + line.speaker}
                className={`lp-demo2-msg lp-demo2-msg--${line.speaker}`}
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                {line.recall && (
                  <span className="lp-demo2-recall">
                    <Sparkles size={11} strokeWidth={2.5} />
                    Remembers · {line.recall.note}
                  </span>
                )}
                <div className="lp-demo2-bubble">
                  <span className="lp-demo2-speaker">
                    {line.speaker === "agent" ? agentBrand.name : line.name}
                    {line.speaker === "agent" && i + 1 === shown && playback === "playing" && (
                      <span className="lp-demo2-eq" aria-hidden>
                        <i />
                        <i />
                        <i />
                      </span>
                    )}
                  </span>
                  {line.text}
                </div>
              </motion.div>
            ))}

            {isBooked && (
              <motion.div
                className="lp-demo2-outcome"
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="lp-demo2-outcome-icon">
                  <CalendarCheck size={18} strokeWidth={2.2} />
                </span>
                <div className="lp-demo2-outcome-body">
                  <p className="lp-demo2-outcome-title">{outcome.status}</p>
                  <p className="lp-demo2-outcome-when">{outcome.when}</p>
                  <div className="lp-demo2-outcome-chips">
                    {BOOKED_CHIPS.map((c) => (
                      <span key={c}>
                        <Check size={10} strokeWidth={3} />
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </>
        )}
      </div>

      {/* control bar */}
      <div className="lp-demo2-bar">
        <button
          type="button"
          className={`lp-demo2-btn${isActive ? " is-on" : ""}`}
          onClick={handlePrimary}
          aria-pressed={playback === "playing"}
        >
          <PrimaryIcon size={14} strokeWidth={2.5} />
          {primaryLabel}
        </button>
        <p className="lp-demo2-bar-note">
          Real product flow · {transcript.length} turns · ~1 min
        </p>
      </div>
    </div>
  );
}
