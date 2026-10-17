import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FileText, ArrowLeft, Mail, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Syarat & Ketentuan | Tebak Icon - AckerLabs",
  description:
    "Syarat dan Ketentuan Penggunaan aplikasi game Tebak Icon oleh AckerLabs. Ketentuan lisensi, disclaimer trivia, dan hak kekayaan intelektual.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#090D16] text-zinc-100 selection:bg-violet-500 selection:text-white">
      <Navbar />

      <main className="flex-1 py-12 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb back */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Kembali ke Beranda</span>
            </Link>
          </div>

          {/* Header */}
          <div className="space-y-4 mb-12 border-b border-zinc-800 pb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-950/80 border border-violet-800 text-xs font-semibold text-violet-300">
              <FileText className="w-3.5 h-3.5" />
              <span>SYARAT LAYANAN & ATURAN PENGGUNAAN</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Syarat & Ketentuan (Terms of Service)
            </h1>
            <p className="text-sm text-zinc-400">
              Terakhir diperbarui: <strong>17 Oktober 2026</strong> • Aplikasi:{" "}
              <strong className="text-zinc-200">Tebak Icon (AckerLabs)</strong>
            </p>
          </div>

          {/* Legal Content Body */}
          <div className="prose prose-invert max-w-none space-y-8 text-zinc-300 text-sm sm:text-base leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                1. Penerimaan Syarat
              </h2>
              <p>
                Dengan mengunduh, menginstal, atau memainkan game <strong>Tebak Icon</strong> yang dikembangkan oleh <strong>AckerLabs</strong>, Anda menyatakan telah membaca, memahami, dan setuju untuk terikat secara hukum oleh Syarat & Ketentuan ini. Jika Anda tidak menyetujui ketentuan apa pun di sini, Anda dipersilakan untuk tidak menggunakan atau menghapus aplikasi ini dari perangkat Anda.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                2. Hak Kekayaan Intelektual & Penafian Trivia (Fair Use)
              </h2>
              <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-600/40 text-amber-200 text-xs sm:text-sm space-y-2">
                <div className="flex items-center gap-2 font-bold text-amber-300">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>Penafian Merek Dagang & Hak Cipta Ikon (Trademark Disclaimer)</span>
                </div>
                <p>
                  Semua logo, lambang, ikon merek dagang, dan karakter yang ditampilkan dalam game ini adalah hak cipta dan/atau merek dagang terdaftar milik masing-masing perusahaan dan entitas pemiliknya. Penggunaan gambar ikon bersangkutan dalam format teka-teki kuis ini dilakukan semata-mata untuk tujuan trivia, edukasi, apresiasi budaya pop, dan identifikasi di bawah doktrin <em>Fair Use</em> (Penggunaan Wajar).
                </p>
              </div>
              <p>
                Seluruh kode sumber, desain visual antarmuka pengguna (UI/UX), efek audio asli, dan aset game internal yang dibuat oleh <strong>AckerLabs</strong> adalah hak milik eksklusif AckerLabs dan dilindungi oleh undang-undang hak cipta Republik Indonesia dan konvensi internasional.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                3. Lisensi Terbatas Pengguna
              </h2>
              <p>
                AckerLabs memberikan Anda lisensi yang bersifat pribadi, non-eksklusif, tidak dapat dialihkan, dan dapat dibatalkan sewaktu-waktu untuk mengunduh dan memainkan game ini hanya untuk keperluan hiburan pribadi dan non-komersial.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                4. Koin Virtual & Barang Dalam Game
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-zinc-300">
                <li>
                  Koin virtual, booster petunjuk (hint), dan item virtual lainnya yang diperoleh dalam game <strong>Tebak Icon</strong> tidak memiliki nilai moneter nyata di dunia nyata.
                </li>
                <li>
                  Item dan koin virtual tidak dapat ditukarkan, diuangkan kembali, atau dipindahtangankan kepada pengguna lain.
                </li>
                <li>
                  AckerLabs berhak sewaktu-waktu mengatur, memodifikasi, atau mengatur ulang saldo koin virtual demi menjaga keseimbangan permainan (game balance) atau pembaruan level.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                5. Larangan Perilaku Pengguna
              </h2>
              <p>Saat menggunakan aplikasi Tebak Icon, Anda setuju untuk tidak:</p>
              <ul className="list-disc pl-5 space-y-1.5 text-zinc-300">
                <li>Melakukan dekompilasi, reverse engineer, membongkar paket APK, atau memodifikasi file permainan secara tidak sah.</li>
                <li>Menggunakan bot, script otomatis, atau perangkat lunak cheat pihak ketiga untuk memanipulasi koin atau skor papan peringkat.</li>
                <li>Menghalangi atau memanipulasi sistem penayangan iklan legal yang disematkan melalui Google AdMob.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                6. Penafian Jaminan (Disclaimer of Warranty)
              </h2>
              <p>
                Aplikasi disediakan atas dasar &quot;SEBAGAIMANA ADANYA&quot; (&quot;AS IS&quot;) dan &quot;SEBAGAIMANA TERSEDIA&quot; tanpa jaminan dalam bentuk apa pun, baik tersurat maupun tersirat. AckerLabs tidak menjamin bahwa aplikasi akan selalu bebas dari gangguan teknis, bug, atau bebas dari kesalahan pada semua varian perangkat keras Android.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                7. Batasan Tanggung Jawab
              </h2>
              <p>
                Sepanjang diizinkan oleh hukum yang berlaku, AckerLabs tidak bertanggung jawab atas kerugian langsung, tidak langsung, insidental, atau konsekuensial yang timbul dari penggunaan atau ketidakmampuan Anda untuk memainkan aplikasi ini.
              </p>
            </section>

            <section className="space-y-3 pt-4 border-t border-zinc-800">
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                8. Hubungi Kami
              </h2>
              <p>
                Jika Anda memiliki pertanyaan mengenai Syarat & Ketentuan ini atau ingin menyampaikan permintaan hukum, silakan hubungi kami di:
              </p>
              <div className="flex items-center gap-2 text-violet-400 font-semibold mt-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:support@ackerlabs.com" className="hover:underline">
                  support@ackerlabs.com
                </a>
              </div>
              <p className="text-xs text-zinc-500 mt-1">
                AckerLabs Studio • Tebak Icon Official
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
