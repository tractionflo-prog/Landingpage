"use client";

import { createContext, useCallback, useContext, useState } from "react";
import { FoundingQuizModal } from "./FoundingQuizModal";

type QuizContextValue = {
  openQuiz: () => void;
  closeQuiz: () => void;
  isOpen: boolean;
};

const QuizContext = createContext<QuizContextValue | null>(null);

export function QuizProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openQuiz = useCallback(() => setIsOpen(true), []);
  const closeQuiz = useCallback(() => setIsOpen(false), []);

  return (
    <QuizContext.Provider value={{ openQuiz, closeQuiz, isOpen }}>
      {children}
      <FoundingQuizModal open={isOpen} onClose={closeQuiz} />
    </QuizContext.Provider>
  );
}

export function useQuiz() {
  const ctx = useContext(QuizContext);
  if (!ctx) throw new Error("useQuiz must be used within QuizProvider");
  return ctx;
}
