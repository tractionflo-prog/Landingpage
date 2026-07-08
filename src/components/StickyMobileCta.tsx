"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useQuiz } from "@/components/quiz/QuizProvider";
import { conversionCopy } from "@/lib/conversion";

export function StickyMobileCta() {
  const { openQuiz, isOpen } = useQuiz();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const past = window.scrollY > window.innerHeight * 0.9;
      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - window.innerHeight * 0.6;
      setShow(past && !nearBottom);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && !isOpen && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", damping: 26, stiffness: 320 }}
          className="lp-sticky-bar md:hidden"
        >
          <div className="lp-sticky-bar-inner">
            <div className="min-w-0">
              <p className="lp-sticky-title truncate">Recover your list</p>
              <p className="lp-sticky-sub truncate">{conversionCopy.scarcityLine}</p>
            </div>
            <button
              type="button"
              onClick={openQuiz}
              className="lp-btn lp-btn--dark lp-btn--sm shrink-0"
            >
              {conversionCopy.stickyCta}
              <ArrowRight size={16} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
