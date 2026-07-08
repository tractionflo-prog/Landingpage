import { QuizTrigger } from "@/components/quiz/QuizTrigger";
import { Logo } from "@/components/ui/Logo";
import { conversionCopy } from "@/lib/conversion";
import { siteConfig } from "@/lib/seo";

const links = [
  { label: "How it works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
  { label: "Support", href: `mailto:${siteConfig.supportEmail}` },
];

export function Footer() {
  return (
    <footer className="lp-footer">
      <div className="page-wrap">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <Logo size={30} />
            <span className="lp-footer-brand">
              Traction<span className="lp-nav-flo">Flo</span>
            </span>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="lp-footer-link">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-6 flex flex-col gap-4 border-t border-black/[0.06] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="lp-footer-copy">
            © {new Date().getFullYear()} TractionFlo ·{" "}
            <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>
          </p>
          <QuizTrigger size="md" variant="pillDark" showArrow={false}>
            {conversionCopy.primaryCta}
          </QuizTrigger>
        </div>
      </div>
    </footer>
  );
}
