import { Navbar } from "@/components/Navbar";
import { VoiceHero } from "@/components/landing/VoiceHero";
import { RevenueLeak } from "@/components/landing/RevenueLeak";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { PersonalizedAtScale } from "@/components/landing/PersonalizedAtScale";
import { LeadMemory } from "@/components/landing/LeadMemory";
import { WithWithout } from "@/components/landing/WithWithout";
import { Faq } from "@/components/landing/Faq";
import { FinalCallCta } from "@/components/landing/FinalCallCta";
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
      <Navbar />
      <main id="main-content" className="lp-page">
        <VoiceHero />
        <RevenueLeak />
        <HowItWorks />
        <PersonalizedAtScale />
        <LeadMemory />
        <WithWithout />
        <Faq />
        <FinalCallCta />
      </main>
      <Footer />
      <StickyMobileCta />
    </>
  );
}
