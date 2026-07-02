import { z } from "zod";

export const leadSubmissionSchema = z.object({
  name: z.string().min(1, "Name is required").max(120),
  email: z.string().email("Enter a valid email"),
  answers: z.record(z.string(), z.string()).optional().default({}),
});

export type LeadSubmission = z.infer<typeof leadSubmissionSchema>;
