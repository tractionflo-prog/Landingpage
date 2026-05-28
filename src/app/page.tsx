import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/hero/Hero";
import { Problem } from "@/components/Problem";
import { WhoFor } from "@/components/WhoFor";
import { Growth } from "@/components/Growth";
import { HowItWorksSteps } from "@/components/HowItWorksSteps";
import { Workflows } from "@/components/workflows/Workflows";
import { Comparison } from "@/components/comparison/Comparison";
import { About } from "@/components/About";
import { Faq } from "@/components/Faq";
import { FoundingAccess } from "@/components/FoundingAccess";
import { Footer } from "@/components/Footer";
import { StickyMobileCta } from "@/components/StickyMobileCta";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main id="main-content">
        {/* 1. Hook + live product preview */}
        <Hero />
        {/* 2. Agitate the pain */}
        <Problem />
        {/* 3. How it works — the simple concept */}
        <HowItWorksSteps />
        {/* 4. See it in action — live scenarios */}
        <Workflows />
        {/* 5. Why not the old way */}
        <Comparison />
        {/* 6. What you get — outcomes strip */}
        <Growth />
        {/* 7. Qualify the visitor */}
        <WhoFor />
        {/* 8. Trust — founder's note */}
        <About />
        {/* 9. Handle objections */}
        <Faq />
        {/* 10. The offer / close */}
        <FoundingAccess />
      </main>
      <Footer />
      <StickyMobileCta />
    </>
  );
}
