import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/hero/Hero";
import { Problem } from "@/components/Problem";
import { DmPersonas } from "@/components/DmPersonas";
import { CustomerJourney } from "@/components/CustomerJourney";
import { ProductShowcase } from "@/components/ProductShowcase";
import { Comparison } from "@/components/comparison/Comparison";
import { About } from "@/components/About";
import { Faq } from "@/components/Faq";
import { FoundingAccess } from "@/components/FoundingAccess";
import { FinalCta } from "@/components/FinalCta";
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
        {/* 1. Hook — audience already trying to buy */}
        <Hero />
        {/* 2. Real problem — traffic vs follow-up */}
        <Problem />
        {/* 3. Personal attention — every interested follower */}
        <DmPersonas />
        {/* 4. Customer journey — follower to paid customer */}
        <CustomerJourney />
        {/* 5. Product showcase — inbox, opportunities, payments, customers */}
        <ProductShowcase />
        {/* 6. Old way vs TractionFlo — many tools vs one platform */}
        <Comparison />
        {/* 7. Trust — founder's note */}
        <About />
        {/* 8. Handle objections */}
        <Faq />
        {/* 9. The offer */}
        <FoundingAccess />
        {/* 10. Final CTA — stop losing customers */}
        <FinalCta />
      </main>
      <Footer />
      <StickyMobileCta />
    </>
  );
}
