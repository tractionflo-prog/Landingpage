import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/hero/Hero";
import { Problem } from "@/components/Problem";
import { Comparison } from "@/components/comparison/Comparison";
import { Workflows } from "@/components/workflows/Workflows";
import { Growth } from "@/components/Growth";
import { About } from "@/components/About";
import { FoundingAccess } from "@/components/FoundingAccess";
import { Footer } from "@/components/Footer";
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
        <Comparison />
        <Workflows />
        <Growth />
        <About />
        <FoundingAccess />
      </main>
      <Footer />
    </>
  );
}
