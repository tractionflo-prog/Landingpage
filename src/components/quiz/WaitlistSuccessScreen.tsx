"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { conversionCopy } from "@/lib/conversion";
import { foundingCopy } from "@/lib/founding";
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
        className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#bef227]"
      >
        <Check size={32} strokeWidth={2.5} className="text-[#111]" />
      </motion.div>

      <span className="inline-flex items-center gap-1.5 rounded-full border border-[#bef227]/50 bg-[#f4fce0] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-[#111]">
        {foundingCopy.spotsShort} ✓
      </span>

      <h2
        id="quiz-title"
        className="mt-5 text-[2rem] font-bold leading-[1.05] tracking-[-0.03em] md:text-[2.25rem]"
      >
        You&apos;re in{firstName ? `, ${firstName}` : ""}.
      </h2>

      <p className="mx-auto mt-3 max-w-[320px] text-[15px] leading-relaxed text-[#666]">
        {email ? (
          <>
            Check <strong className="font-medium text-[#111]">{email}</strong> for your
            confirmation.
          </>
        ) : (
          <>Check your inbox for your confirmation.</>
        )}
      </p>

      <p className="mx-auto mt-2 max-w-[300px] text-[14px] font-medium text-[#666]">
        {foundingCopy.limited}
      </p>
      <p className="mx-auto mt-1 max-w-[300px] text-[14px] text-[#999]">
        You&apos;re ahead of everyone still missing buyers in their DMs.
      </p>

      <p
        className="font-hand mx-auto mt-6 text-[1.2rem] text-[#6fa800]"
        style={{ transform: "rotate(-2deg)" }}
      >
        Founders get more →
      </p>

      <button type="button" onClick={onClose} className="btn-lime btn-lime-lg mt-8 w-full sm:w-auto sm:min-w-[200px]">
        Done
      </button>

      <p className="mt-5 text-[12px] text-[#bbb]">{conversionCopy.riskReversal}</p>
    </motion.div>
  );
}
