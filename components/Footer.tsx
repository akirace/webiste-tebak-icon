"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Gamepad2,
  Mail,
  Shield,
  FileText,
  Heart,
  Send,
  CheckCircle,
  ExternalLink,
} from "lucide-react";

export default function Footer() {
  const [feedbackEmail, setFeedbackEmail] = useState("");
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [year, setYear] = useState("2026");

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (feedbackEmail.trim()) {
      setSubmitted(true);
      setTimeout(() => {
        setFeedbackEmail("");
        setFeedbackMessage("");
        setSubmitted(false);
      }, 4000);
    }
  };

  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-violet-600 via-indigo-500 to-cyan-400 p-[2px] shadow-lg shadow-violet-500/25">
                <div className="w-full h-full bg-zinc-950 rounded-[10px] flex items-center justify-center">
                  <Gamepad2 className="w-5 h-5 text-violet-400" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl text-white tracking-tight">
                  Tebak Icon
                </span>
                <span className="text-[10px] tracking-wider uppercase font-semibold text-violet-400">
                  Developed by AckerLabs
                </span>
              </div>
            </Link>

            <p className="text-sm text-zinc-400 leading-relaxed">
              Tebak Icon adalah game asah otak dan trivia gambar yang menyenangkan,
              edukatif, dan ramah keluarga. Jelajahi ribuan ikon logo merek, benda,
              dan budaya pop dari seluruh penjuru dunia.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-zinc-500">
              <span>Studio:</span>
              <span className="font-semibold text-zinc-300">AckerLabs Studio Indonesia</span>
            </div>
          </div>

          {/* Col 2: Navigasi Cepat */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Navigasi
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#fitur" className="hover:text-violet-400 transition-colors">
                  Fitur Game
                </a>
              </li>
              <li>
                <a href="#cara-main" className="hover:text-violet-400 transition-colors">
                  Cara Bermain
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-violet-400 transition-colors">
                  FAQ & Tanya Jawab
                </a>
              </li>
              <li>
                <a
                  href="https://play.google.com/store/apps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1 text-emerald-400 font-medium"
                >
                  Download Game <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Halaman Legal & Kepatuhan */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Legal & Kepatuhan
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-violet-400 transition-colors flex items-center gap-1.5"
                >
                  <Shield className="w-3.5 h-3.5 text-violet-400" />
                  <span>Kebijakan Privasi</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-violet-400 transition-colors flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5 text-violet-400" />
                  <span>Syarat & Ketentuan</span>
                </Link>
              </li>
              <li>
                <a
                  href="/app-ads.txt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-zinc-300 transition-colors text-xs text-zinc-500 flex items-center gap-1"
                >
                  <span>app-ads.txt (Verifikasi AdMob)</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </li>
            </ul>

            <div className="pt-2 text-xs text-zinc-500 leading-relaxed border-t border-zinc-900">
              Mendukung penuh standar periklanan transparan Google AdMob dan kepatuhan Google Play Developer Policy.
            </div>
          </div>

          {/* Col 4: Kontak & Kirim Masukan */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Bantuan & Kontak
            </h4>
            <p className="text-xs text-zinc-400">
              Ada pertanyaan, saran level baru, atau kendala di dalam game? Hubungi kami langsung:
            </p>

            <a
              href="mailto:support@ackerlabs.com"
              className="inline-flex items-center gap-2 text-sm text-zinc-200 hover:text-violet-400 transition-colors font-medium"
            >
              <Mail className="w-4 h-4 text-violet-400" />
              <span>support@ackerlabs.com</span>
            </a>

            {/* Quick feedback box */}
            <form onSubmit={handleFeedbackSubmit} className="space-y-2 pt-2">
              <div className="flex gap-1.5">
                <input
                  type="email"
                  required
                  placeholder="Ketik email Anda..."
                  value={feedbackEmail}
                  onChange={(e) => setFeedbackEmail(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-1.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-violet-500"
                />
                <button
                  type="submit"
                  className="bg-violet-600 hover:bg-violet-500 text-white px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors flex-shrink-0"
                >
                  <Send className="w-3 h-3" />
                </button>
              </div>
              {submitted && (
                <div className="text-[11px] text-emerald-400 flex items-center gap-1">
                  <CheckCircle className="w-3 h-3" />
                  <span>Terima kasih! Pesan terkirim ke tim AckerLabs.</span>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="mt-14 pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 text-center sm:text-left">
          <div>
            © {year} <span className="text-zinc-300 font-semibold">AckerLabs</span>. Seluruh Hak Cipta Dilindungi Undang-Undang.
          </div>
          <div className="flex items-center gap-1">
            <span>Dibuat dengan dedikasi untuk penggemar game asah otak di Indonesia</span>
            <Heart className="w-3 h-3 text-rose-500 fill-rose-500 inline ml-1" />
          </div>
        </div>
      </div>
    </footer>
  );
}
