import { Lock, Zap, MessageSquare, Sparkles, Headphones } from "lucide-react";
import { HandAnnotation } from "@/components/ui/HandAnnotation";
import { QuizTrigger } from "@/components/quiz/QuizTrigger";

function IgIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
    </svg>
  );
}

const BENEFITS = [
  { Icon: Lock, text: "Founder pricing locked forever" },
  { Icon: Zap, text: "Early access before public launch" },
  { Icon: MessageSquare, text: "Shape the product with your feedback" },
  { Icon: IgIcon, text: "Instagram-first growth playbooks", custom: true },
  { Icon: Sparkles, text: "New features first" },
  { Icon: Headphones, text: "Direct founder support" },
];

export function FoundingAccess() {
  return (
    <section id="founding" className="section-grey" aria-labelledby="founding-heading">
      <div className="page-wrap">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 id="founding-heading" className="t-section">
              Be an early founder.
              <br />
              Not just another user.
            </h2>
            <p className="t-body mt-5 max-w-md">
              Get lifetime founder benefits and help shape the future of TractionFlo.
            </p>
            <QuizTrigger size="lg" className="btn-lime-mobile-full mt-6 sm:mt-8" />
            <p className="mt-3 text-[14px] text-[#888]">No credit card. It&apos;s free.</p>
          </div>

          <div className="relative sm:pt-11">
            <HandAnnotation className="mb-3 block text-right sm:absolute sm:right-0 sm:top-0 sm:mb-0 sm:whitespace-nowrap">
              Limited spots only →
            </HandAnnotation>
            <div className="grid gap-3 sm:grid-cols-2">
              {BENEFITS.map(({ Icon, text, custom }) => (
                <div
                  key={text}
                  className="flex items-start gap-3 rounded-[14px] border border-black/[0.06] bg-white p-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-[#eef9c4]">
                    {custom ? <Icon /> : <Icon size={18} strokeWidth={1.5} />}
                  </div>
                  <p className="text-[14px] font-medium leading-snug">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
