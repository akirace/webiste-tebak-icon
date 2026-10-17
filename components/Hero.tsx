"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, CheckCircle2 } from "lucide-react";
import GooglePlayButton from "./GooglePlayButton";

export default function Hero() {
  return (
    <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-32 overflow-hidden">
      {/* Background radial gradient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[500px] bg-gradient-to-tr from-violet-600/20 via-indigo-500/15 to-cyan-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293715_1px,transparent_1px),linear-gradient(to_bottom,#1f293715_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copywriting & CTA */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6 sm:space-y-8">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-950/70 border border-violet-700/50 shadow-inner shadow-violet-500/20 text-xs sm:text-sm font-semibold text-violet-300">
              <Sparkles className="w-4 h-4 text-violet-400 animate-spin" style={{ animationDuration: "8s" }} />
              <span>Game Asah Otak & Tebak Gambar Seru #1</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12]">
              Tebak Ikonnya,{" "}
              <span className="bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
                Buktikan Kejeniusanmu!
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg lg:text-xl text-zinc-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Seberapa tajam ingatan dan wawasanmu? Uji kehebatanmu menebak kombinasi
              ikon unik, teka-teki visual seru, brand ternama, dan benda sehari-hari.
              Mainkan santai atau pacu adrenalinmu sekarang!
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <GooglePlayButton size="lg" />

              <a
                href="#fitur"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-sm font-semibold text-zinc-300 hover:text-white bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 transition-all shadow-md"
              >
                Pelajari Fitur Game
              </a>
            </div>

            {/* Feature Badges */}
            <div className="pt-6 border-t border-zinc-800/80 flex flex-wrap items-center justify-center lg:justify-start gap-5 text-xs sm:text-sm text-zinc-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>100% Gratis & Ringan</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-violet-400" />
                <span>Mode Santai & Time Attack</span>
              </div>
            </div>
          </div>

          {/* Right Column: Smartphone Mockup with Real Game Screenshot */}
          <div className="lg:col-span-5 flex justify-center relative">
            {/* Phone outer aura glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-violet-600/30 via-cyan-500/20 to-indigo-600/30 rounded-[50px] blur-2xl opacity-75 -z-10" />

            {/* Smartphone Case Frame */}
            <div className="w-[280px] sm:w-[320px] rounded-[48px] p-3 sm:p-3.5 bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-950 shadow-2xl shadow-violet-950/70 border border-zinc-700/80 relative transform hover:scale-[1.02] transition-transform duration-300">
              {/* Phone Speaker & Camera Punch-hole */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 h-4 bg-zinc-950/90 rounded-full flex items-center justify-center gap-2 z-30 pointer-events-none">
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-800 border border-zinc-700" />
                <div className="w-8 h-1 rounded-full bg-zinc-800" />
              </div>

              {/* Screen Display Container */}
              <div className="w-full rounded-[38px] overflow-hidden border border-zinc-800/90 bg-[#090a1a] shadow-inner relative aspect-[9/19.5]">
                <Image
                  src="/hero-screenshot.jpg"
                  alt="Screenshot Gameplay Tebak Icon - Level 01"
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 280px, 320px"
                />

                {/* Subtle glass reflection overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.08] pointer-events-none" />
              </div>

              {/* Floating Game Clue Badge */}
              <div className="absolute -bottom-3 -right-3 sm:-right-4 bg-zinc-900/95 border border-violet-500/50 rounded-2xl p-2.5 sm:p-3 shadow-xl shadow-black/60 flex items-center gap-2.5 backdrop-blur-md">
                <div className="w-9 h-9 rounded-xl bg-violet-600/20 border border-violet-500/40 flex items-center justify-center text-lg">
                  ⏰
                </div>
                <div>
                  <div className="text-xs font-bold text-white leading-tight">Level 01 • Benda</div>
                  <div className="text-[10px] text-emerald-400 font-semibold leading-tight">Jawaban: Jam Tangan</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
