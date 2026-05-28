"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { QuizTrigger } from "@/components/quiz/QuizTrigger";

const links = [
  { label: "Problem", href: "#problem" },
  { label: "Outcomes", href: "#growth" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Compare", href: "#comparison" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 border-b border-black/[0.06] bg-white/95 backdrop-blur-md supports-[backdrop-filter]:bg-white/90"
      role="banner"
    >
      <div className="page-wrap hidden h-[68px] items-center md:grid md:grid-cols-[1fr_auto_1fr]">
        <a href="/" className="flex items-center gap-2.5 no-underline text-[#111]">
          <span className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-[#bef227] text-[13px] font-bold">
            TF
          </span>
          <span className="text-[17px] font-bold tracking-[-0.02em]">TractionFlo</span>
        </a>

        <nav className="flex items-center justify-center gap-5 lg:gap-6" aria-label="Main navigation">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-[14px] font-medium text-[#666] no-underline hover:text-[#111]"
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
        <a href="/" className="flex items-center gap-2 no-underline text-[#111]">
          <span className="flex h-8 w-8 items-center justify-center rounded-[8px] bg-[#bef227] text-[11px] font-bold">
            TF
          </span>
          <span className="font-bold">TractionFlo</span>
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
