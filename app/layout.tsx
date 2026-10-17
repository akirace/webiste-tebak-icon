import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#090D16",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Tebak Icon - Game Asah Otak & Trivia Ikon Seru | AckerLabs",
  description:
    "Uji ketajaman matamu dan asah otakmu dengan Tebak Icon! Tebak ratusan ikon merek terkenal, teknologi, game, dan budaya pop. Download gratis sekarang di Google Play Store.",
  keywords: [
    "Tebak Icon",
    "AckerLabs",
    "Game Tebak Gambar",
    "Game Asah Otak",
    "Trivia Logo",
    "Tebak Logo",
    "Game Trivia Android",
    "Kuis Gambar Seru",
  ],
  authors: [{ name: "AckerLabs", url: "https://ackerlabs.com" }],
  creator: "AckerLabs",
  publisher: "AckerLabs",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Tebak Icon - Game Asah Otak & Trivia Ikon Seru | AckerLabs",
    description:
      "Uji ketajaman matamu dan asah otakmu dengan Tebak Icon! Tebak ratusan ikon merek terkenal, teknologi, game, dan budaya pop.",
    url: "https://tebakicon.ackerlabs.com",
    siteName: "Tebak Icon by AckerLabs",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tebak Icon - Game Trivia & Asah Otak Android",
    description:
      "Tebak ratusan ikon merek, game, dan benda seru! Main santai atau pacu adrenalinmu di Time Attack.",
    creator: "@AckerLabs",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#090D16] text-zinc-100 font-sans">
        {children}
      </body>
    </html>
  );
}
