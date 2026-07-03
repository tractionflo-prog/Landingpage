"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { QuizTrigger } from "@/components/quiz/QuizTrigger";
import { Logo } from "@/components/ui/Logo";

const links = [
  { label: "The Opportunity", href: "#opportunity" },
  { label: "How It Works", href: "#journey" },
  { label: "Pricing", href: "#founding" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 border-b border-[#E5E7EB] bg-white md:bg-white/95 md:backdrop-blur-md md:supports-[backdrop-filter]:bg-white/90"
      role="banner"
    >
      <div className="page-wrap hidden h-[68px] items-center md:grid md:grid-cols-[1fr_auto_1fr]">
        <a href="/" className="flex items-center gap-2.5 no-underline text-[#111827]">
          <Logo size={34} />
          <span className="text-[17px] font-bold tracking-[-0.02em]">
            Traction<span className="text-[#FF5A1F]">Flo</span>
          </span>
        </a>

        <nav className="flex items-center justify-center gap-5 lg:gap-6" aria-label="Main navigation">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-[14px] font-medium text-[#6B7280] no-underline hover:text-[#111827]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex justify-end">
          <QuizTrigger size="md" />
        </div>
      </div>

      <div className="page-wrap flex h-[60px] items-center justify-between md:hidden">
        <a href="/" className="flex items-center gap-2 no-underline text-[#111827]">
          <Logo size={30} />
          <span className="font-bold">
            Traction<span className="text-[#FF5A1F]">Flo</span>
          </span>
        </a>
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="border-t border-black/[0.06] bg-white px-6 py-4 md:hidden"
          aria-label="Mobile navigation"
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="block py-2.5 text-[15px] font-medium no-underline text-[#333]"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <div className="mt-3" onClick={() => setOpen(false)}>
            <QuizTrigger size="md" className="w-full" />
          </div>
        </nav>
      )}
    </header>
  );
}
