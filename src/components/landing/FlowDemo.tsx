"use client";

import { useCallback, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check, Pause, Play } from "lucide-react";
import { demoCases } from "@/lib/landing/callDemo";
import { agentBrand } from "@/lib/agent";

type Phase = "idle" | "connecting" | "live" | "booked";
type Playback = "idle" | "playing" | "paused" | "done";

const CASE_INDEX = 0;
const active = demoCases[CASE_INDEX];
const SIMPLE_LINES = [0, 1, 4];

export function FlowDemo() {
  const reduce = useReducedMotion();

  const [phase, setPhase] = useState<Phase>("idle");
  const [shown, setShown] = useState(0);
  const [playback, setPlayback] = useState<Playback>("idle");

  const { lead, transcript, outcome, program } = active;
  const lines = SIMPLE_LINES.map((i) => transcript[i]).filter(Boolean);
  const firstName = lead.name.split(" ")[0];
  const current = shown > 0 ? lines[shown - 1] : null;

  const audioElRef = useRef<HTMLAudioElement | null>(null);
  const runRef = useRef(0);
  const pausedRef = useRef(false);
  const pauseWaitersRef = useRef<Array<() => void>>([]);

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
      const timeout = window.setTimeout(finish, 13000);

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

  const runDemo = useCallback(async () => {
    const runId = ++runRef.current;
    pausedRef.current = false;
    pauseWaitersRef.current.forEach((resolve) => resolve());
    pauseWaitersRef.current = [];
    resetAudio();

    setPlayback("playing");
    setShown(0);
    setPhase("connecting");

    try {
      await sleep(1800, runId);

      setPhase("live");
      for (let i = 0; i < lines.length; i++) {
        setShown(i + 1);
        await playClip(SIMPLE_LINES[i], runId);
        if (runRef.current !== runId) return;
        await sleep(350, runId);
      }

      await sleep(600, runId);
      setPhase("booked");
      setPlayback("done");
    } catch {
      return;
    }
  }, [lines.length]);

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

  const isLive = phase === "live";
  const isBooked = phase === "booked";
  const isActive = playback === "playing" || playback === "paused";
  const pulse = (isLive || phase === "connecting") && playback === "playing";

  const primaryLabel =
    playback === "playing"
      ? "Pause"
      : playback === "paused"
        ? "Resume"
        : playback === "done"
          ? "Replay call"
          : "Hear the call";

  const PrimaryIcon = playback === "playing" ? Pause : Play;

  return (
    <div className="lp-voice-moment" id="product">
      <div className={`lp-voice-ring${pulse ? " is-live" : ""}${isBooked ? " is-booked" : ""}`}>
        <span className="lp-voice-ring-ripple lp-voice-ring-ripple--1" aria-hidden />
        <span className="lp-voice-ring-ripple lp-voice-ring-ripple--2" aria-hidden />
        <span className="lp-voice-ring-ripple lp-voice-ring-ripple--3" aria-hidden />
        <span className="lp-voice-ring-core">
          {isBooked && playback !== "playing" && playback !== "paused" ? (
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
        {playback === "paused" ? (
          <>Paused · pick up where you left off</>
        ) : isBooked && playback === "done" ? (
          <>
            <span className="lp-voice-status-dot is-green" />
            {outcome.status} · {outcome.when}
          </>
        ) : isLive ? (
          <>
            <span className="lp-voice-status-dot" />
            Live with {firstName} · free-class lead
          </>
        ) : phase === "connecting" && isActive ? (
          <>Calling {firstName} · {program ?? "free-class lead"}…</>
        ) : (
          <>Ready to hear {firstName}&rsquo;s follow-up call</>
        )}
      </p>

      <div className="lp-voice-line-wrap">
        <AnimatePresence mode="wait">
          {isBooked && playback === "done" ? (
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
              She joined your free class, said she wasn&rsquo;t ready — tap below to hear{" "}
              {agentBrand.name} call her back.
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <button
        type="button"
        className={`lp-voice-audio${isActive ? " is-on" : ""}${playback === "paused" ? " is-paused" : ""}`}
        onClick={handlePrimary}
        aria-pressed={playback === "playing"}
      >
        <PrimaryIcon size={14} />
        {primaryLabel}
      </button>
    </div>
  );
}
