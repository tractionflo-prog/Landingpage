import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/hero/Hero";
import { Problem } from "@/components/Problem";
import { Comparison } from "@/components/Comparison";
import { LiveExample } from "@/components/LiveExample";
import { CustomerJourney } from "@/components/CustomerJourney";
import { Results } from "@/components/Results";
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
      <Navbar />
      <main id="main-content">
        <Hero />
        <Problem />
        <CustomerJourney />
        <LiveExample />
        <Comparison />
        <Results />
        <Faq />
        <FoundingAccess />
      </main>
      <Footer />
      <StickyMobileCta />
    </>
  );
}
