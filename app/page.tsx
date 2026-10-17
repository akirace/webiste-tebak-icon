import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowToPlay from "@/components/HowToPlay";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#090D16] text-zinc-100 selection:bg-violet-500 selection:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <HowToPlay />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
