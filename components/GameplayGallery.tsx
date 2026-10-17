"use client";

import React, { useState } from "react";
import {
  Gamepad2,
  FolderKanban,
  Gift,
  Trophy,
  CheckCircle,
  Sparkles,
  ArrowRight,
  Eye,
  Star,
  Flame,
} from "lucide-react";

export default function GameplayGallery() {
  const [activeTab, setActiveTab] = useState(0);

  const screens = [
    {
      id: "gameplay",
      tabTitle: "Arena Tebak Ikon",
      icon: Gamepad2,
      heading: "Tampilan Quiz Inti: Bersih, Cepat & Responsif",
      subheading:
        "Tebak gambar ikon misterius dengan tampilan beresolusi tinggi. Susun huruf acak menjadi jawaban yang tepat sebelum waktu habis!",
      badge: "Inti Gameplay",
      previewType: "quiz",
    },
    {
      id: "categories",
      tabTitle: "Kategori Beragam",
      icon: FolderKanban,
      heading: "Eksplorasi Ratusan Level di Berbagai Kategori",
      subheading:
        "Mulai dari Brand & Logo Global, Karakter Game, Kuliner Nusantara, Teknologi, hingga Film Populer. Bebas pilih kategori favoritmu!",
      badge: "Koleksi Lengkap",
      previewType: "categories",
    },
    {
      id: "rewards",
      tabTitle: "Bonus & Bantuan",
      icon: Gift,
      heading: "Klaim Koin Harian & Manfaatkan Booster Cerdas",
      subheading:
        "Putar roda keberuntungan setiap hari untuk memenangkan koin gratis! Gunakan koin untuk membuka huruf sulit atau membuang huruf jebakan.",
      badge: "Sistem Reward",
      previewType: "rewards",
    },
    {
      id: "leaderboard",
      tabTitle: "Peringkat & Prestasi",
      icon: Trophy,
      heading: "Papan Peringkat Global & Koleksi Medali",
      subheading:
        "Buktikan kamu yang terpintar! Naikkan skor kombo dan pamerkan pencapaian serta piala bergengsi kepada teman-temanmu.",
      badge: "Kompetisi",
      previewType: "leaderboard",
    },
  ];

  const current = screens[activeTab];

  return (
    <section id="preview" className="py-20 sm:py-28 bg-zinc-950 relative border-t border-zinc-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-semibold text-cyan-400">
            <Eye className="w-3.5 h-3.5" />
            <span>PREVIEW GAMEPLAY & ANTARMUKA</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Lihat Seberapa Serunya{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              Tebak Icon
            </span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-400">
            Didesain dengan antarmuka yang sangat bersih, mudah dipahami pemain segala usia,
            serta penuh animasi visual yang memuaskan.
          </p>
        </div>

        {/* Tab Selection Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {screens.map((screen, idx) => {
            const Icon = screen.icon;
            const isActive = activeTab === idx;
            return (
              <button
                key={screen.id}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-600/30 border border-violet-400/40 scale-105"
                    : "bg-zinc-900/90 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-zinc-400"}`} />
                <span>{screen.tabTitle}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Screen Display Showcase */}
        <div className="rounded-3xl bg-zinc-900/60 border border-zinc-800 p-6 sm:p-10 lg:p-12 relative overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Description Column */}
            <div className="lg:col-span-5 space-y-5 text-left">
              <span className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-violet-950/80 text-violet-300 border border-violet-800">
                {current.badge}
              </span>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
                {current.heading}
              </h3>

              <p className="text-zinc-400 text-base leading-relaxed">
                {current.subheading}
              </p>

              <div className="pt-4 space-y-2.5 text-sm text-zinc-300">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Visual ikon tajam & HD di semua layar handphone</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Navigasi instan tanpa loading lama</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Efek suara seru & haptic feedback getar</span>
                </div>
              </div>
            </div>

            {/* Right Screen Visual Preview Box */}
            <div className="lg:col-span-7 flex justify-center">
              <div className="w-full max-w-md bg-zinc-950 rounded-3xl border border-zinc-800 p-5 shadow-2xl">
                {/* 1. QUIZ PREVIEW */}
                {current.previewType === "quiz" && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                      <span className="text-xs font-bold text-violet-400">Level 50 • Merek Dunia</span>
                      <span className="text-xs font-bold text-amber-400">🪙 2,800 Koin</span>
                    </div>

                    <div className="h-44 rounded-2xl bg-gradient-to-tr from-red-600/20 via-zinc-900 to-zinc-900 border border-red-500/40 flex flex-col items-center justify-center relative">
                      {/* Stylized YouTube Play Icon */}
                      <div className="w-16 h-12 bg-red-600 rounded-xl flex items-center justify-center shadow-lg shadow-red-600/40">
                        <div className="w-0 h-0 border-y-6 border-y-transparent border-l-10 border-l-white ml-1" />
                      </div>
                      <span className="mt-2 text-xs font-medium text-zinc-400">Platform Video Terbesar</span>
                    </div>

                    <div className="flex justify-center gap-1.5">
                      {["Y", "O", "U", "T", "U", "B", "E"].map((char, i) => (
                        <div
                          key={i}
                          className="w-8 h-9 rounded-lg bg-zinc-800 border border-red-500/60 font-black text-white flex items-center justify-center text-sm shadow"
                        >
                          {char}
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-center gap-2 pt-2">
                      <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5" /> Sempurna! +100 Skor
                      </span>
                    </div>
                  </div>
                )}

                {/* 2. CATEGORIES PREVIEW */}
                {current.previewType === "categories" && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                      <span className="text-xs font-bold text-zinc-300">Pilih Kategori Ikon</span>
                      <span className="text-xs text-zinc-500">6 Kategori Terbuka</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5">
                      {[
                        { title: "Brand Global", count: "120 Level", color: "from-blue-600/30 to-indigo-600/10 border-blue-500/50", icon: "🌐" },
                        { title: "Karakter Game", count: "90 Level", color: "from-purple-600/30 to-violet-600/10 border-purple-500/50", icon: "🎮" },
                        { title: "Kuliner & Resto", count: "80 Level", color: "from-amber-600/30 to-yellow-600/10 border-amber-500/50", icon: "🍔" },
                        { title: "Teknologi & App", count: "85 Level", color: "from-cyan-600/30 to-teal-600/10 border-cyan-500/50", icon: "⚡" },
                      ].map((cat, i) => (
                        <div
                          key={i}
                          className={`p-3.5 rounded-xl bg-gradient-to-br ${cat.color} border text-left flex flex-col justify-between h-24`}
                        >
                          <div className="text-xl">{cat.icon}</div>
                          <div>
                            <div className="text-xs font-bold text-white">{cat.title}</div>
                            <div className="text-[10px] text-zinc-400">{cat.count}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 3. REWARDS PREVIEW */}
                {current.previewType === "rewards" && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                      <span className="text-xs font-bold text-zinc-300">Roda Hadiah Harian</span>
                      <span className="text-xs text-emerald-400 font-semibold">1 Putaran Gratis!</span>
                    </div>

                    <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 text-center space-y-3">
                      <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-tr from-amber-400 to-orange-500 flex items-center justify-center text-3xl shadow-lg shadow-amber-500/20 animate-pulse">
                        🎁
                      </div>
                      <div>
                        <div className="font-extrabold text-white text-sm">Selamat Datang Pemain Baru!</div>
                        <div className="text-xs text-zinc-400">Klaim bonus 500 koin awal untuk bantuan pertama</div>
                      </div>
                      <button className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs shadow-md">
                        Klaim 500 Koin Sekarang
                      </button>
                    </div>
                  </div>
                )}

                {/* 4. LEADERBOARD PREVIEW */}
                {current.previewType === "leaderboard" && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
                      <span className="text-xs font-bold text-zinc-300">Peringkat Teratas Indonesia</span>
                      <span className="text-xs text-amber-400">Musim 2026</span>
                    </div>

                    <div className="space-y-2">
                      {[
                        { rank: "👑 1", name: "Rian_Gamer99", score: "24,850 Pts", badge: "Gold" },
                        { rank: "🥈 2", name: "SitiTrivia_ID", score: "22,400 Pts", badge: "Silver" },
                        { rank: "🥉 3", name: "BudiMasterMind", score: "20,100 Pts", badge: "Bronze" },
                        { rank: "📍 12", name: "Kamu (Player)", score: "12,450 Pts", badge: "Top 5%" },
                      ].map((item, i) => (
                        <div
                          key={i}
                          className={`flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium ${
                            item.badge === "Top 5%"
                              ? "bg-violet-950/60 border border-violet-700/60 text-violet-200"
                              : "bg-zinc-900 border border-zinc-800/80 text-zinc-300"
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            <span className="font-bold">{item.rank}</span>
                            <span>{item.name}</span>
                          </div>
                          <span className="font-extrabold text-white">{item.score}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
