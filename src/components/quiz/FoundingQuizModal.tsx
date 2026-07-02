"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Loader2 } from "lucide-react";
import { conversionCopy } from "@/lib/conversion";
import { foundingCopy } from "@/lib/founding";
import { trackFoundingAccessSignup } from "@/lib/analytics";
import { WaitlistSuccessScreen } from "./WaitlistSuccessScreen";

type FoundingQuizModalProps = {
  open: boolean;
  onClose: () => void;
};

export function FoundingQuizModal({ open, onClose }: FoundingQuizModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

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
      setName("");
      setEmail("");
      setError("");
      setLoading(false);
      setSuccess(false);
    }
  }, [open]);

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
        body: JSON.stringify({ name: name.trim(), email: email.trim() }),
      });

      const json = await res.json();
      if (!res.ok) {
        setError(json.error ?? "Something went wrong. Please try again.");
        return;
      }
      trackFoundingAccessSignup();
      setSuccess(true);
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !loading) submit();
  };

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
                  <span className="flex h-8 w-8 items-center justify-center rounded-[8px] bg-[#0a0a0a] text-[11px] font-bold text-white">
                    TF
                  </span>
                  <span className="text-sm font-semibold">
                    {success ? foundingCopy.spotsLabel : "Start your free trial"}
                  </span>
                </div>
                <span className="pl-10 text-[11px] font-medium text-[#888]">
                  {success ? foundingCopy.limited : "90 days free · No credit card"}
                </span>
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

            <div className="flex-1 overflow-y-auto px-5 py-6 md:px-7 md:py-7">
              <AnimatePresence mode="wait">
                {success ? (
                  <WaitlistSuccessScreen key="success" name={name} email={email} onClose={onClose} />
                ) : (
                  <motion.div
                    key="contact"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                  >
                    <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#3f7d5c]">
                      Founder access
                    </p>
                    <h2
                      id="quiz-title"
                      className="mt-2 text-[1.5rem] font-bold leading-tight tracking-tight"
                    >
                      Start your 90-day free trial
                    </h2>
                    <p className="mt-2 text-[14px] leading-relaxed text-[#666]">
                      Enter your name and email and we&apos;ll set up your access — 90 days free and
                      founder pricing locked in for life.
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
                          onKeyDown={onKeyDown}
                          placeholder="Your name"
                          autoFocus
                          className="w-full rounded-[12px] border border-black/[0.1] px-4 py-3 text-[15px] outline-none focus:border-[#0a0a0a] focus:ring-2 focus:ring-[#0a0a0a]/10"
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
                          onKeyDown={onKeyDown}
                          placeholder="you@business.com"
                          className="w-full rounded-[12px] border border-black/[0.1] px-4 py-3 text-[15px] outline-none focus:border-[#0a0a0a] focus:ring-2 focus:ring-[#0a0a0a]/10"
                        />
                      </div>
                    </div>
                    {error && <p className="mt-3 text-sm text-red-500">{error}</p>}
                    <p className="mt-4 text-[13px] text-[#888]">{conversionCopy.riskReversal}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {!success && (
              <div className="flex items-center justify-end gap-3 border-t border-black/[0.06] px-5 py-4">
                <button
                  type="button"
                  onClick={submit}
                  disabled={loading}
                  className="btn-lime btn-lime-md min-w-[180px]"
                >
                  {loading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <>
                      {conversionCopy.primaryCta}
                      <ArrowRight size={16} />
                    </>
                  )}
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
