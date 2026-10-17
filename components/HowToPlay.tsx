import React from "react";
import { Search, Keyboard, Sparkles, Trophy } from "lucide-react";

export default function HowToPlay() {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Perhatikan Ikon",
      description:
        "Amati gambar logo, brand, atau ikon benda yang muncul di tengah layar. Setiap detail bisa menjadi petunjuk utama!",
      color: "from-blue-500/20 to-cyan-500/10",
      textColor: "text-cyan-400",
    },
    {
      number: "02",
      icon: Keyboard,
      title: "Susun Huruf",
      description:
        "Sentuh huruf-huruf acak di keyboard virtual untuk mengisi kotak jawaban dengan kata atau nama yang tepat.",
      color: "from-violet-500/20 to-purple-500/10",
      textColor: "text-violet-400",
    },
    {
      number: "03",
      icon: Sparkles,
      title: "Manfaatkan Bantuan",
      description:
        "Terjebak di level sulit? Gunakan booster Hint untuk membuka huruf kunci atau membuang huruf pengalih perhatian.",
      color: "from-amber-500/20 to-orange-500/10",
      textColor: "text-amber-400",
    },
    {
      number: "04",
      icon: Trophy,
      title: "Raih Koin & Naikkan Peringkat",
      description:
        "Dapatkan koin emas setiap kali berhasil menebak benar. Naikkan levelmu dan jadilah juara di leaderboard!",
      color: "from-emerald-500/20 to-teal-500/10",
      textColor: "text-emerald-400",
    },
  ];

  return (
    <section id="cara-main" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-semibold text-emerald-400">
            <span>PANDUAN PEMAIN</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Cara Bermain{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Sangat Mudah & Seru
            </span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-400">
            Hanya butuh beberapa detik untuk mulai bermain. Cocok dimainkan saat waktu luang,
            santai bersama keluarga, atau mengasah konsentrasi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative rounded-3xl p-6 sm:p-7 bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900 transition-all duration-200 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-zinc-800 flex items-center justify-center border border-zinc-700/60 group-hover:scale-105 transition-transform">
                      <Icon className={`w-6 h-6 ${step.textColor}`} />
                    </div>
                    <span className="text-2xl font-black text-zinc-700 group-hover:text-zinc-500 transition-colors">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">
                    {step.title}
                  </h3>

                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-800/60 flex items-center text-xs font-semibold text-zinc-500 group-hover:text-zinc-300 transition-colors">
                  <span>Langkah {step.number}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
