"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Apakah game Tebak Icon ini 100% gratis dimainkan?",
      a: "Ya! Game Tebak Icon dapat diunduh dan dimainkan secara gratis melalui Google Play Store. Semua ratusan level bisa diselesaikan tanpa kewajiban melakukan pembelian apa pun.",
    },
    {
      q: "Bagaimana cara membuka kategori dan level baru?",
      a: "Setiap kali Anda berhasil menebak ikon dan menyelesaikan level pada suatu kategori, kategori dan level berikutnya akan terbuka secara otomatis dengan tantangan yang semakin menarik!",
    },
    {
      q: "Bagaimana cara mendapatkan koin jika koin saya habis?",
      a: "Anda mendapatkan koin gratis setiap kali berhasil menebak ikon dengan benar, mendapatkan bonus kombo beruntun, serta memutar Roda Keberuntungan Harian (Daily Spin). Anda juga dapat menonton video sponsor berhadiah singkat untuk mendapatkan koin instan.",
    },
    {
      q: "Apakah game ini aman untuk anak-anak dan keluarga?",
      a: "Sangat aman. Konten visual dan pertanyaan di dalam Tebak Icon telah dikurasi dengan ramah keluarga (family-friendly) untuk melatih daya ingat, konsentrasi, serta menambah wawasan umum.",
    },
    {
      q: "Bagaimana cara melaporkan bug atau memberi saran level baru?",
      a: "Kami dari tim AckerLabs sangat menghargai masukan Anda! Silakan kirimkan email ke support@ackerlabs.com atau hubungi kami melalui formulir kontak di bagian bawah halaman ini.",
    },
  ];

  return (
    <section id="faq" className="py-20 sm:py-28 relative bg-zinc-950/60 border-t border-zinc-800/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-semibold text-amber-400">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>PERTANYAAN UMUM</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Sering Ditanyakan{" "}
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              (FAQ)
            </span>
          </h2>

          <p className="text-base text-zinc-400">
            Punya pertanyaan mengenai cara main, koin, atau teknis aplikasi? Temukan jawabannya di sini.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-zinc-800/90 bg-zinc-900/60 transition-colors overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 cursor-pointer hover:bg-zinc-800/40 transition-colors"
                >
                  <span className="font-bold text-white text-base sm:text-lg">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-zinc-400 flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-amber-400" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-zinc-300 text-sm sm:text-base leading-relaxed border-t border-zinc-800/40 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
