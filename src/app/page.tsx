import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/hero/Hero";
import { Problem } from "@/components/Problem";
import { Comparison } from "@/components/comparison/Comparison";
import { Workflows } from "@/components/workflows/Workflows";
import { Growth } from "@/components/Growth";
import { About } from "@/components/About";
import { FoundingAccess } from "@/components/FoundingAccess";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
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
