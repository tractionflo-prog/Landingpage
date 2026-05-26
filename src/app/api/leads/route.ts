import { NextResponse } from "next/server";
import { leadSubmissionSchema } from "@/lib/validations/lead";
import { createAdminClient } from "@/lib/supabase/admin";
import { sendFounderNotification, sendWelcomeEmail } from "@/lib/email";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = leadSubmissionSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid submission", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const data = parsed.data;
    const supabase = createAdminClient();

    const { error: dbError } = await supabase.from("leads").upsert(
      {
        email: data.email.toLowerCase().trim(),
        name: data.name.trim(),
        answers: data.answers,
        source: "founding_quiz",
        updated_at: new Date().toISOString(),
      },
      { onConflict: "email" }
    );

    if (dbError) {
      console.error("Supabase insert error:", dbError);
      return NextResponse.json(
        { error: "Could not save your details. Please try again." },
        { status: 500 }
      );
    }

    try {
      await Promise.all([
        sendWelcomeEmail(data),
        sendFounderNotification(data),
      ]);
    } catch (emailError) {
      console.error("Resend error:", emailError);
      // Lead is saved — don't fail the user if email fails
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Lead API error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
