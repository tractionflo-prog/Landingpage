import { BrushHighlight } from "@/components/ui/BrushHighlight";

const PEOPLE = [
  {
    name: "Sarah M.",
    reason: "Asked questions about automation",
    avatar: "linear-gradient(135deg, #f9a8d4, #fbcfe8)",
  },
  {
    name: "Rohan K.",
    reason: "Keeps engaging with your content",
    avatar: "linear-gradient(135deg, #7dd3fc, #bae6fd)",
  },
  {
    name: "Neha P.",
    reason: "Saved your lead magnet posts",
    avatar: "linear-gradient(135deg, #fcd34d, #fde68a)",
  },
] as const;

const SUGGESTED_MESSAGE = "Curious — what are you trying to set up?";

export function WhoToMessage() {
  return (
    <section id="who-to-message" className="section-grey" aria-labelledby="who-to-message-heading">
      <div className="page-wrap">
        {/* Same 2-col grid as Founder Access — columns line up */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
          <div className="min-w-0">
            <h2 id="who-to-message-heading" className="t-section">
              Your next customer already{" "}
              <BrushHighlight>follows you.</BrushHighlight>
            </h2>
            <p className="t-body mt-6 max-w-md">
              Stop guessing who to message.
              <br />
              See the followers already showing interest and turn conversations into customers.
            </p>
          </div>

          <div className="card min-w-0 p-5 sm:p-6 md:p-7">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#999]">
              People you should message today
            </p>

            <ul className="mt-6 divide-y divide-black/[0.06]">
              {PEOPLE.map((person) => (
                <li key={person.name} className="flex gap-4 py-5 first:pt-0 last:pb-0">
                  <div
                    className="h-11 w-11 shrink-0 rounded-full"
                    style={{ background: person.avatar }}
                    aria-hidden
                  />
                  <div className="min-w-0">
                    <p className="text-[15px] font-bold tracking-[-0.02em] text-[#111]">{person.name}</p>
                    <p className="mt-0.5 text-[14px] leading-snug text-[#666]">{person.reason}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-[14px] bg-[#fafafa] px-4 py-4 sm:px-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#999]">
                Suggested message
              </p>
              <p className="mt-2 text-[15px] leading-relaxed text-[#111]">
                &ldquo;{SUGGESTED_MESSAGE}&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
