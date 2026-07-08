"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { QuizTrigger } from "@/components/quiz/QuizTrigger";
import { Logo } from "@/components/ui/Logo";
import { conversionCopy } from "@/lib/conversion";

const links = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Compare", href: "#compare" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="lp-nav" role="banner">
      <div className="page-wrap lp-nav-inner">
        <a href="#top" className="lp-nav-brand" aria-label="TractionFlo home">
          <Logo size={30} />
          <span>
            Traction<span className="lp-nav-flo">Flo</span>
          </span>
        </a>

        <nav className="lp-nav-links" aria-label="Primary">
          {links.map((l) => (
            <a key={l.label} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="lp-nav-actions">
          <QuizTrigger variant="pillDark" className="lp-btn--sm" showArrow={false}>
            {conversionCopy.stickyCta}
          </QuizTrigger>
        </div>

        <button
          type="button"
          className="lp-nav-burger"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="lp-mobile-nav"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav id="lp-mobile-nav" className="lp-nav-mobile" aria-label="Mobile">
          {links.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <div onClick={() => setOpen(false)} className="mt-2">
            <QuizTrigger variant="pillDark" className="w-full" showArrow={false}>
              {conversionCopy.primaryCta}
            </QuizTrigger>
          </div>
        </nav>
      )}
    </header>
  );
}
