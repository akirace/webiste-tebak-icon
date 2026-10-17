import React from "react";
import GooglePlayButton from "./GooglePlayButton";
import { DownloadCloud, Sparkles, CheckCircle2 } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background glow and gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-violet-950/20 to-zinc-950 -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-violet-600/25 via-indigo-600/20 to-cyan-500/20 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <div className="rounded-3xl bg-zinc-900/80 border border-violet-500/30 p-8 sm:p-12 lg:p-16 shadow-2xl shadow-violet-950/50 relative overflow-hidden">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none" />

          <div className="relative space-y-6 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-950/80 border border-violet-700/60 text-xs font-semibold text-violet-300">
              <Sparkles className="w-3.5 h-3.5" />
              <span>GRATIS DI ANDROID</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Siap Menjadi Master Trivia?{" "}
              <span className="bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
                Unduh Tebak Icon Sekarang!
              </span>
            </h2>

            <p className="text-base sm:text-lg text-zinc-300">
              Ajak teman dan keluargamu bersaing menebak ratusan ikon unik.
              Uji memori, asah fokus, dan rasakan kepuasan menyelesaikan level demi level.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <GooglePlayButton size="lg" />
            </div>

            {/* Checklist */}
            <div className="pt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-zinc-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Gratis 100% Selamanya</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Ukuran Ringan (&lt; 25 MB)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Desain Bersih & Ramah Mata</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
