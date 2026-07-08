import { Navbar } from "@/components/Navbar";
import { VoiceHero } from "@/components/landing/VoiceHero";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { PersonalizedAtScale } from "@/components/landing/PersonalizedAtScale";
import { LeadMemory } from "@/components/landing/LeadMemory";
import { SignupBand } from "@/components/landing/SignupBand";
import { Faq } from "@/components/landing/Faq";
import { FinalCallCta } from "@/components/landing/FinalCallCta";
import { Footer } from "@/components/Footer";
import { StickyMobileCta } from "@/components/StickyMobileCta";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo";
import { agentBrand } from "@/lib/agent";

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
        <HowItWorks />
        <PersonalizedAtScale />
        <LeadMemory />
        <SignupBand
          headline="Stop leaving discovery calls on the table."
          sub={`Connect your masterclass list and let ${agentBrand.name} call every lead who wasn't ready.`}
        />
        <Faq />
        <FinalCallCta />
      </main>
      <Footer />
      <StickyMobileCta />
    </>
  );
}
