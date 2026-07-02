import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/hero/Hero";
import { Opportunity } from "@/components/Opportunity";
import { CustomerView } from "@/components/CustomerView";
import { HowItWorks } from "@/components/HowItWorks";
import { Vision } from "@/components/Vision";
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
        <Opportunity />
        <CustomerView />
        <HowItWorks />
        <Vision />
        <FoundingAccess />
        <Faq />
      </main>
      <Footer />
      <StickyMobileCta />
    </>
  );
}
