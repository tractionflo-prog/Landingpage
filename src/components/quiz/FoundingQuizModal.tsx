"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, ArrowLeft, Loader2 } from "lucide-react";
import { QUIZ_QUESTIONS } from "@/lib/quiz/questions";
import { conversionCopy } from "@/lib/conversion";
import { foundingCopy } from "@/lib/founding";
import { WaitlistSuccessScreen } from "./WaitlistSuccessScreen";

type FoundingQuizModalProps = {
  open: boolean;
  onClose: () => void;
};

type Step = number | "contact" | "success";

const TOTAL = QUIZ_QUESTIONS.length + 1; // questions + contact

export function FoundingQuizModal({ open, onClose }: FoundingQuizModalProps) {
  const [step, setStep] = useState<Step>(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const isSuccess = step === "success";

  const progress = (() => {
    if (step === "contact") return ((QUIZ_QUESTIONS.length + 0.5) / TOTAL) * 100;
    return ((Number(step) + 0.5) / TOTAL) * 100;
  })();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) {
      setStep(0);
      setAnswers({});
      setName("");
      setEmail("");
      setError("");
      setLoading(false);
    }
  }, [open]);

  const selectAnswer = (questionId: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
    if (typeof step === "number" && step < QUIZ_QUESTIONS.length - 1) {
      setTimeout(() => setStep(step + 1), 200);
    } else if (typeof step === "number") {
      setTimeout(() => setStep("contact"), 200);
    }
  };

  const submit = async () => {
    setError("");
    if (!name.trim() || !email.trim()) {
      setError("Please enter your name and email.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), answers }),
      });

      const json = await res.json();
      if (!res.ok) {
        setError(json.error ?? "Something went wrong. Please try again.");
        return;
      }
      setStep("success");
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const goBack = () => {
    if (step === "contact") setStep(QUIZ_QUESTIONS.length - 1);
    else if (typeof step === "number" && step > 0) setStep(step - 1);
  };

  const headerTitle = step === "contact" ? foundingCopy.spotsLabel : "Join Founding Access";
  const headerSub = step === "contact" ? foundingCopy.limited : "Takes 30 seconds · Free";

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-end justify-center p-0 sm:items-center sm:p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
            aria-label="Close"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="quiz-title"
            className="relative flex max-h-[94vh] w-full max-w-lg flex-col overflow-hidden rounded-t-[24px] bg-white shadow-2xl sm:rounded-[24px]"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ type: "spring", damping: 28, stiffness: 320 }}
          >
            <div className="flex items-center justify-between border-b border-black/[0.06] px-5 py-4">
              <div className="flex flex-col gap-0.5">
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-[8px] bg-[#bef227] text-[11px] font-bold">
                    TF
                  </span>
                  <span className="text-sm font-semibold">{headerTitle}</span>
                </div>
                <span className="pl-10 text-[11px] font-medium text-[#888]">{headerSub}</span>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg p-2 hover:bg-[#f5f5f5]"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>

            {!isSuccess && (
              <div className="h-1 bg-[#f0f0f0]">
                <motion.div
                  className="h-full bg-[#bef227]"
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            )}

            <div className="flex-1 overflow-y-auto px-5 py-6 md:px-7 md:py-7">
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <WaitlistSuccessScreen key="success" name={name} email={email} onClose={onClose} />
                ) : step === "contact" ? (
                  <motion.div
                    key="contact"
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -16 }}
                  >
                    <p className="text-[12px] font-semibold uppercase tracking-wide text-[#999]">
                      Last step
                    </p>
                    <h2
                      id="quiz-title"
                      className="mt-2 text-[1.5rem] font-bold leading-tight tracking-tight"
                    >
                      Lock your founder spot
                    </h2>
                    <p className="mt-2 text-[14px] leading-relaxed text-[#666]">
                      We&apos;ll email you the moment your access opens — plus 90 days free and
                      founder pricing for life.
                    </p>
                    <div className="mt-6 space-y-4">
                      <div>
                        <label htmlFor="quiz-name" className="mb-1.5 block text-sm font-medium">
                          Name
                        </label>
                        <input
                          id="quiz-name"
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Your name"
                          className="w-full rounded-[12px] border border-black/[0.1] px-4 py-3 text-[15px] outline-none focus:border-[#bef227] focus:ring-2 focus:ring-[#bef227]/30"
                        />
                      </div>
                      <div>
                        <label htmlFor="quiz-email" className="mb-1.5 block text-sm font-medium">
                          Email
                        </label>
                        <input
                          id="quiz-email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="you@business.com"
                          className="w-full rounded-[12px] border border-black/[0.1] px-4 py-3 text-[15px] outline-none focus:border-[#bef227] focus:ring-2 focus:ring-[#bef227]/30"
                        />
                      </div>
                    </div>
                    {error && <p className="mt-3 text-sm text-red-500">{error}</p>}
                    <p className="mt-4 text-[13px] text-[#888]">{conversionCopy.riskReversal}</p>
                  </motion.div>
                ) : (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -16 }}
                  >
                    <p className="text-[12px] font-semibold uppercase tracking-wide text-[#999]">
                      Question {Number(step) + 1} of {QUIZ_QUESTIONS.length}
                    </p>
                    <h2
                      id="quiz-title"
                      className="mt-2 text-[1.35rem] font-bold leading-snug tracking-tight md:text-[1.5rem]"
                    >
                      {QUIZ_QUESTIONS[Number(step)].question}
                    </h2>
                    <ul className="mt-6 space-y-2.5">
                      {QUIZ_QUESTIONS[Number(step)].options.map((opt) => {
                        const selected = answers[QUIZ_QUESTIONS[Number(step)].id] === opt.value;
                        return (
                          <li key={opt.value}>
                            <button
                              type="button"
                              onClick={() =>
                                selectAnswer(QUIZ_QUESTIONS[Number(step)].id, opt.value)
                              }
                              className={`w-full rounded-[14px] border px-4 py-3.5 text-left text-[15px] font-medium transition-all ${
                                selected
                                  ? "border-[#bef227] bg-[#f4fce0] ring-2 ring-[#bef227]/40"
                                  : "border-black/[0.08] bg-white hover:border-black/20 hover:bg-[#fafafa]"
                              }`}
                            >
                              {opt.label}
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {!isSuccess && (
              <div className="flex items-center justify-between gap-3 border-t border-black/[0.06] px-5 py-4">
                <button
                  type="button"
                  onClick={goBack}
                  disabled={step === 0}
                  className="inline-flex items-center gap-1 rounded-full px-4 py-2.5 text-sm font-medium text-[#666] disabled:invisible hover:bg-[#f5f5f5]"
                >
                  <ArrowLeft size={16} />
                  Back
                </button>

                {step === "contact" ? (
                  <button
                    type="button"
                    onClick={submit}
                    disabled={loading}
                    className="btn-lime btn-lime-md min-w-[140px]"
                  >
                    {loading ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <>
                        {foundingCopy.cta}
                        <ArrowRight size={16} />
                      </>
                    )}
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      const q = QUIZ_QUESTIONS[step as number];
                      if (answers[q.id]) {
                        if (step < QUIZ_QUESTIONS.length - 1) setStep((step as number) + 1);
                        else setStep("contact");
                      }
                    }}
                    disabled={!answers[QUIZ_QUESTIONS[step as number]?.id]}
                    className="btn-lime btn-lime-md disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Continue
                    <ArrowRight size={16} />
                  </button>
                )}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
