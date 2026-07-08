"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { conversionCopy } from "@/lib/conversion";
import { foundingCopy } from "@/lib/founding";
import { agentBrand } from "@/lib/agent";

type WaitlistSuccessScreenProps = {
  name?: string;
  email?: string;
  onClose: () => void;
};

export function WaitlistSuccessScreen({ name, email, onClose }: WaitlistSuccessScreenProps) {
  const firstName = name?.trim().split(" ")[0];

  return (
    <motion.div
      className="py-2 text-center"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#16A34A]"
      >
        <Check size={32} strokeWidth={2.5} className="text-white" />
      </motion.div>

      <span className="lp-quiz-eyebrow inline-flex rounded-full border border-[rgba(22,163,74,0.18)] bg-[#F0FDF4] px-3 py-1 normal-case tracking-normal text-[#15803D]">
        {foundingCopy.spotsShort} ✓
      </span>

      <h2 id="quiz-success-title" className="lp-quiz-title mt-5 text-[2rem] md:text-[2.25rem]">
        You&apos;re in{firstName ? `, ${firstName}` : ""}.
      </h2>

      <p className="lp-quiz-body mx-auto mt-3 max-w-[320px]">
        {email ? (
          <>
            Check <strong className="font-semibold text-[#111]">{email}</strong> for your
            confirmation.
          </>
        ) : (
          <>Check your inbox for your confirmation.</>
        )}
      </p>

      <p className="lp-quiz-body mx-auto mt-2 max-w-[320px] font-medium">
        {foundingCopy.limited}
      </p>
      <p className="lp-quiz-note mx-auto mt-1 max-w-[320px]">
        We&apos;ll reach out personally to get {agentBrand.name} calling your masterclass leads.
      </p>

      <button
        type="button"
        onClick={onClose}
        className="lp-btn lp-btn--dark lp-btn--lg mt-8 w-full sm:w-auto sm:min-w-[200px]"
      >
        Done
      </button>

      <p className="lp-quiz-note mt-5">{conversionCopy.riskReversal}</p>
    </motion.div>
  );
}
