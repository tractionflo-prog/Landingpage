import { QuizTrigger } from "@/components/quiz/QuizTrigger";
import { conversionCopy } from "@/lib/conversion";
import { siteConfig } from "@/lib/seo";

const links = [
  { label: "Why TractionFlo", href: "#compare" },
  { label: "Demo", href: "#example" },
  { label: "How It Works", href: "#journey" },
  { label: "Pricing", href: "#founding" },
  { label: "Support", href: `mailto:${siteConfig.supportEmail}` },
];

export function Footer() {
  return (
    <footer className="border-t border-black/[0.06] bg-white py-8 pb-[max(2rem,env(safe-area-inset-bottom))]">
      <div className="page-wrap">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-[#0a0a0a] text-[11px] font-bold text-white">
              TF
            </span>
            <span className="font-semibold">TractionFlo</span>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-[13px] font-medium text-[#666] no-underline hover:text-[#111]"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-6 flex flex-col gap-4 border-t border-black/[0.06] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[13px] text-[#888]">
            © {new Date().getFullYear()} TractionFlo ·{" "}
            <a
              href={`mailto:${siteConfig.supportEmail}`}
              className="font-medium text-[#666] no-underline hover:text-[#111]"
            >
              {siteConfig.supportEmail}
            </a>
          </p>
          <QuizTrigger size="md">{conversionCopy.primaryCta}</QuizTrigger>
        </div>
      </div>
    </footer>
  );
}
