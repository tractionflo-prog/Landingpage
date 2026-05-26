import { z } from "zod";
import { QUIZ_QUESTIONS } from "@/lib/quiz/questions";

const answerShape = QUIZ_QUESTIONS.reduce(
  (acc, q) => {
    acc[q.id] = z.string().min(1);
    return acc;
  },
  {} as Record<string, z.ZodString>
);

export const leadSubmissionSchema = z.object({
  name: z.string().min(1, "Name is required").max(120),
  email: z.string().email("Enter a valid email"),
  answers: z.object(answerShape),
});

export type LeadSubmission = z.infer<typeof leadSubmissionSchema>;
