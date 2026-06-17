import { Users, Gift, Lock, MessageCircle } from "lucide-react";

const ITEMS = [
  { icon: Users, title: "Built for social media managers", sub: "Made for the way you actually work." },
  { icon: Gift, title: "90 days free", sub: "Full access, no credit card." },
  { icon: Lock, title: "Founder pricing for life", sub: "Lock the lowest price we'll ever offer." },
  { icon: MessageCircle, title: "Build it with us", sub: "Shape the roadmap as an early member." },
];

export function SocialProof() {
  return (
    <section className="border-y border-[#E5E7EB] bg-[#F6F7FB]" aria-label="Why join early">
      <div className="page-wrap !py-10">
        <p className="text-center text-[12px] font-semibold uppercase tracking-[0.14em] text-[#9CA3AF]">
          We&apos;re just getting started — join as a founding member
        </p>
        <div className="mx-auto mt-7 grid max-w-[960px] gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {ITEMS.map(({ icon: Icon, title, sub }) => (
            <div key={title} className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EFF6FF] text-[#0073EA]">
                <Icon size={19} strokeWidth={1.9} />
              </span>
              <div>
                <p className="text-[14px] font-bold leading-snug text-[#111827]">{title}</p>
                <p className="mt-0.5 text-[12.5px] leading-relaxed text-[#6B7280]">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
