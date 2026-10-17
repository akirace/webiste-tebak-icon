import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, ArrowLeft, Mail, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Kebijakan Privasi | Tebak Icon - AckerLabs",
  description:
    "Kebijakan Privasi untuk aplikasi dan game Android Tebak Icon oleh AckerLabs. Penjelasan transparan mengenai data, Google AdMob, dan hak pengguna.",
};

export default function PrivacyPolicyPage() {
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
              <Shield className="w-3.5 h-3.5" />
              <span>DOKUMEN HUKUM RESMI</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Kebijakan Privasi (Privacy Policy)
            </h1>
            <p className="text-sm text-zinc-400">
              Terakhir diperbarui: <strong>17 Oktober 2026</strong> • Berlaku untuk aplikasi Android:{" "}
              <strong className="text-zinc-200">Tebak Icon (AckerLabs)</strong>
            </p>
          </div>

          {/* Legal Content Body */}
          <div className="prose prose-invert max-w-none space-y-8 text-zinc-300 text-sm sm:text-base leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                1. Pengantar & Komitmen Kami
              </h2>
              <p>
                Selamat datang di <strong>Tebak Icon</strong>, game teka-teki asah otak yang dikembangkan
                oleh <strong>AckerLabs</strong> (&quot;kami&quot;, &quot;pengembang&quot;). Kami sangat menghormati dan berkomitmen penuh untuk melindungi privasi setiap pengguna (&quot;Anda&quot;).
              </p>
              <p>
                Kebijakan Privasi ini menerangkan bagaimana data Anda dikumpulkan, digunakan, serta dilindungi saat Anda mengunduh, menginstal, dan memainkan game <strong>Tebak Icon</strong> melalui platform Google Play Store.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                2. Informasi yang Kami Kumpulkan
              </h2>
              <p>
                Game <strong>Tebak Icon</strong> tidak mewajibkan Anda untuk membuat akun dengan nama lengkap, alamat fisik, nomor telepon, maupun informasi identitas pribadi (PII) sensitif lainnya. Data yang mungkin diproses secara otomatis meliputi:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-zinc-300">
                <li>
                  <strong>Informasi Perangkat:</strong> Model perangkat keras, versi sistem operasi Android, resolusi layar, bahasa perangkat, dan pengaturan regional.
                </li>
                <li>
                  <strong>Data Aktivitas Permainan:</strong> Level yang telah diselesaikan, skor tertinggi, koin virtual, dan pencapaian (achievement) yang disimpan secara lokal di perangkat Anda atau melalui layanan cloud Google Play Games.
                </li>
                <li>
                  <strong>Pengenal Iklan & Diagnostik:</strong> Google Advertising ID (GAID), log kesalahan aplikasi (crash logs), dan metrik performa teknis untuk meningkatkan kestabilan game.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                3. Layanan Pihak Ketiga & Integrasi Iklan (Google AdMob)
              </h2>
              <p>
                Untuk menjaga agar game ini dapat dinikmati secara <strong>gratis</strong> oleh semua pemain, kami bermitra dengan penyedia layanan periklanan dan analitik pihak ketiga terpercaya:
              </p>
              <div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-5 space-y-4">
                <div>
                  <h3 className="font-bold text-white flex items-center justify-between">
                    <span>Google AdMob (Google LLC)</span>
                    <a
                      href="https://policies.google.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-violet-400 hover:underline inline-flex items-center gap-1"
                    >
                      Kebijakan Google <ExternalLink className="w-3 h-3" />
                    </a>
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                    Digunakan untuk menampilkan iklan spanduk (banner), iklan peralihan (interstitial), dan iklan video berhadiah (rewarded video). AdMob dapat mengumpulkan dan memproses ID Iklan Android serta data interaksi untuk menayangkan iklan yang relevan atau non-personalisasi sesuai dengan preferensi privasi Anda.
                  </p>
                </div>

                <div className="border-t border-zinc-800/80 pt-3">
                  <h3 className="font-bold text-white flex items-center justify-between">
                    <span>Google Play Services & Firebase</span>
                    <a
                      href="https://policies.google.com/technologies/partner-sites"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-violet-400 hover:underline inline-flex items-center gap-1"
                    >
                      Info Kemitraan Google <ExternalLink className="w-3 h-3" />
                    </a>
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                    Menyediakan infrastruktur sinkronisasi papan skor (Leaderboard), pencadangan penyimpanan, serta pelaporan bug otomatis jika aplikasi mengalami crash.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                4. Kontrol Privasi & Personalisasi Iklan oleh Pengguna
              </h2>
              <p>
                Anda memiliki hak penuh untuk mengontrol pengumpulan ID Iklan di perangkat Android Anda kapan saja melalui langkah berikut:
              </p>
              <ol className="list-decimal pl-5 space-y-1.5 text-zinc-300">
                <li>Buka menu <strong>Pengaturan (Settings)</strong> pada smartphone Android Anda.</li>
                <li>Pilih menu <strong>Google</strong> &gt; <strong>Iklan (Ads)</strong>.</li>
                <li>Pilih opsi <strong>Reset ID Iklan</strong> atau aktifkan <strong>Hapus ID Iklan / Nonaktifkan Personalisasi Iklan</strong>.</li>
              </ol>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                5. Perlindungan Privasi Anak-Anak (COPPA Compliance)
              </h2>
              <p>
                Game <strong>Tebak Icon</strong> dirancang untuk dinikmati oleh khalayak umum serta keluarga. Kami secara sadar tidak mengumpulkan informasi identitas pribadi apa pun dari anak-anak di bawah usia 13 tahun (atau batas usia yang berlaku di yurisdiksi Anda). Jika Anda adalah orang tua atau wali dan mendapati anak Anda memberikan data pribadi tanpa persetujuan, silakan hubungi kami agar kami dapat segera mengambil tindakan penghapusan.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                6. Keamanan Data
              </h2>
              <p>
                Kami menerapkan standar pengamanan administratif dan teknis yang wajar untuk melindungi integritas data yang dikirim dan diproses melalui aplikasi kami. Namun, perlu dipahami bahwa tidak ada metode transmisi internet nirkabel yang dijamin 100% mutlak tanpa risiko.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                7. Perubahan pada Kebijakan Privasi
              </h2>
              <p>
                Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu untuk menyesuaikan dengan pembaruan fitur aplikasi atau regulasi hukum yang berlaku. Versi terbaru akan selalu tersedia di halaman ini dengan tanggal pembaruan yang tercantum di bagian atas.
              </p>
            </section>

            <section className="space-y-3 pt-4 border-t border-zinc-800">
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                8. Hubungi Kami
              </h2>
              <p>
                Apabila Anda memiliki pertanyaan, klarifikasi, atau permintaan terkait Kebijakan Privasi ini, silakan hubungi tim pengembang AckerLabs melalui:
              </p>
              <div className="flex items-center gap-2 text-violet-400 font-semibold mt-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:support@ackerlabs.com" className="hover:underline">
                  support@ackerlabs.com
                </a>
              </div>
              <p className="text-xs text-zinc-500 mt-1">
                AckerLabs Studio • Pengembang Resmi Aplikasi Tebak Icon di Google Play
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
