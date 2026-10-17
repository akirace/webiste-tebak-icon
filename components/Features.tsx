"use client";

import React from "react";
import {
  Timer,
  Coffee,
  Layers,
  Lightbulb,
  Trophy,
  Zap,
  Flame,
  HelpCircle,
  Award,
  Sparkles,
} from "lucide-react";

export default function Features() {
  const mainFeatures = [
    {
      icon: Coffee,
      secondaryIcon: Timer,
      title: "Dua Mode Permainan Seru",
      badge: "Mode Permainan",
      description:
        "Pilih 'Mode Santai' untuk bermain rileks tanpa tekanan waktu, atau aktifkan 'Mode Kilat (Time Attack)' untuk menguji kecepatan berpikir detik demi detik memacu adrenalin!",
      gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
      borderGlow: "group-hover:border-amber-500/50",
      iconColor: "text-amber-400",
    },
    {
      icon: Layers,
      title: "Koleksi Ikon Lengkap & Beragam",
      badge: "Kategori Menarik",
      description:
        "Tebak ikon mulai dari Brand Dunia, Karakter Game, Gadget & Teknologi, Kuliner, Film Populer, hingga Benda Sehari-hari yang siap menguji wawasanmu!",
      gradient: "from-violet-500/20 via-indigo-500/10 to-transparent",
      borderGlow: "group-hover:border-violet-500/50",
      iconColor: "text-violet-400",
    },
    {
      icon: Lightbulb,
      title: "Sistem Koin & Bantuan Cerdas (Hint)",
      badge: "Fitur Booster",
      description:
        "Mentok di level sulit? Jangan panik! Gunakan fitur buka huruf pertama, singkirkan huruf yang tidak terpakai (50:50), atau lewati level menggunakan koin kemenanganmu.",
      gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
      borderGlow: "group-hover:border-cyan-500/50",
      iconColor: "text-cyan-400",
    },
    {
      icon: Trophy,
      title: "Pencapaian & Papan Peringkat Global",
      badge: "Kompetitif",
      description:
        "Kumpulkan poin dan piala kemenangan! Raih title tertinggi 'Master Trivia Ikon' dan bandingkan peringkat skormu dengan teman serta pemain di seluruh dunia.",
      gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
      borderGlow: "group-hover:border-emerald-500/50",
      iconColor: "text-emerald-400",
    },
    {
      icon: Flame,
      title: "Update Konten & Level Berkala",
      badge: "Konten Segar",
      description:
        "Tebak Icon terus dikembangkan oleh AckerLabs dengan penambahan paket ikon baru, event musiman, dan teka-teki segar yang menantang.",
      gradient: "from-rose-500/20 via-pink-500/10 to-transparent",
      borderGlow: "group-hover:border-rose-500/50",
      iconColor: "text-rose-400",
    },
    {
      icon: Sparkles,
      title: "Desain Modern, Bersih & Ramah Mata",
      badge: "User Experience",
      description:
        "Antarmuka minimalis nan futuristik dengan animasi halus, efek audio memuaskan, dan warna kontras tinggi yang nyaman dimainkan berjam-jam.",
      gradient: "from-indigo-500/20 via-purple-500/10 to-transparent",
      borderGlow: "group-hover:border-indigo-500/50",
      iconColor: "text-indigo-400",
    },
  ];

  return (
    <section id="fitur" className="py-20 sm:py-28 relative">
      {/* Background glow dots */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-violet-600/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-cyan-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-semibold text-violet-400">
            <Zap className="w-3.5 h-3.5" />
            <span>FITUR UNGGULAN TEBAK ICON</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Sensasi Tebak Gambar dengan{" "}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Fitur Terlengkap
            </span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-400">
            Didesain khusus untuk pecinta teka-teki, asah otak, dan game trivia.
            Setiap fitur dibangun untuk memberikan pengalaman bermain terbaik.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {mainFeatures.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className={`group relative rounded-3xl p-7 bg-zinc-900/60 border border-zinc-800/80 hover:bg-zinc-900/90 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-950/30 overflow-hidden ${feature.borderGlow}`}
              >
                {/* Subtle gradient corner accent */}
                <div
                  className={`absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br ${feature.gradient} blur-2xl group-hover:scale-150 transition-transform duration-500`}
                />

                <div className="relative space-y-4">
                  {/* Icon & Badge */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-zinc-800/90 border border-zinc-700/80 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                      <Icon className={`w-6 h-6 ${feature.iconColor}`} />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-zinc-800/80 text-zinc-300 border border-zinc-700/50">
                      {feature.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white group-hover:text-violet-300 transition-colors">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
