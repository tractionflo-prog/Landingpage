"use client";

import { ArrowRight } from "lucide-react";
import { useQuiz } from "@/components/quiz/QuizProvider";

export function AnnouncementBar() {
  const { openQuiz } = useQuiz();

  return (
    <div className="announce-bar">
      <button
        type="button"
        onClick={openQuiz}
        className="inline-flex items-center gap-2 hover:opacity-90"
      >
        <span className="announce-dot" aria-hidden />
        <span>
          <strong className="font-semibold">Founding access is open</strong> — 90 days free, only
          100 spots
        </span>
        <span className="inline-flex items-center gap-0.5 font-semibold text-[#bef227]">
          Get yours <ArrowRight size={13} />
        </span>
      </button>
    </div>
  );
}
