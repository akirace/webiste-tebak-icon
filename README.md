# Tebak Icon - Landing Page Resmi (AckerLabs)

Website landing page modern, cepat, dan responsif untuk game Android **"Tebak Icon"** yang dikembangkan oleh **AckerLabs**. Dibangun dengan **Next.js (App Router)**, **TypeScript**, dan **Tailwind CSS**.

---

## 🚀 Fitur & Halaman

1. **Hero Section Modern**:
   - Tagline memikat & copywriting game trivia tebak ikon.
   - Tombol Call-to-Action (CTA) **"Download di Google Play"** dengan badge resmi.
   - **Interactive Smartphone Mockup**: Preview simulator gameplay kuis tebak kata dengan tombol huruf yang dapat dicoba langsung oleh pengunjung.
2. **Fitur Unggulan (Features Showcase)**:
   - Dua mode permainan: **Mode Santai** & **Mode Kilat (Time Attack)**.
   - Koleksi ikon beragam (Brand dunia, game, kuliner, gadget, film).
   - Sistem koin, booster bantuan cerdas (Hint / 50:50).
   - Papan peringkat global & medali pencapaian.
   - Update konten berkala & desain ramah mata.
3. **Cara Bermain (Step-by-Step Guide)**:
   - Panduan 4 langkah mudah untuk pemain baru.
4. **FAQ (Tanya Jawab)**:
   - Accordion interaktif menjawab pertanyaan seputar lisensi, kategori, dan koin.
5. **Halaman Legal (Wajib Google Play & AdMob)**:
   - `/privacy-policy`: Kebijakan Privasi lengkap (kepatuhan data Google AdMob, ID Iklan Android GAID, hak pengguna, COPPA).
   - `/terms`: Syarat & Ketentuan Penggunaan (Fair Use trademark trivia disclaimer, aturan koin virtual).
7. **File Verifikasi Google AdMob (`app-ads.txt`)**:
   - Berada di folder `/public/app-ads.txt` dan dapat diakses langsung via `https://domain-anda.com/app-ads.txt`.

---

## 📁 Struktur Direktori

```
tebak-icon/
├── app/
│   ├── globals.css           # Tema warna gelap gaming, efek glow, & scrollbar custom
│   ├── layout.tsx            # Root layout dengan SEO Metadata & Open Graph lengkap
│   ├── page.tsx              # Halaman utama landing page
│   ├── privacy-policy/
│   │   └── page.tsx          # Halaman Kebijakan Privasi (Privacy Policy)
│   └── terms/
│       └── page.tsx          # Halaman Syarat & Ketentuan (Terms of Service)
├── components/
│   ├── Navbar.tsx            # Navigasi sticky glassmorphism & mobile drawer
│   ├── Hero.tsx              # Hero banner + simulator smartphone interaktif
│   ├── GooglePlayButton.tsx  # Komponen tombol badge Google Play resmi
│   ├── Features.tsx          # Kartu fitur unggulan dengan icon Lucide
│   ├── HowToPlay.tsx         # Panduan cara bermain 4 langkah
│   ├── FAQ.tsx               # Tanya jawab accordion
│   ├── CTASection.tsx        # Banner konversi download game
│   └── Footer.tsx            # Footer studio AckerLabs, link legal, & form kontak
├── public/
│   └── app-ads.txt           # File verifikasi penayang Google AdMob
└── package.json
```

---

## 🛠️ Cara Menjalankan Secara Lokal

1. **Pastikan dependencies terinstal**:
   ```bash
   npm install
   ```

2. **Jalankan development server**:
   ```bash
   npm run dev
   ```

3. Buka browser dan akses:
   - Landing Page: `http://localhost:3000`
   - Privacy Policy: `http://localhost:3000/privacy-policy`
   - Terms of Service: `http://localhost:3000/terms`
   - File AdMob: `http://localhost:3000/app-ads.txt`

---

## 🌐 Cara Deploy ke Vercel (Rekomendasi)

Next.js App Router dioptimalkan untuk langsung dideploy ke platform Vercel secara gratis dan cepat:

1. **Push source code ke repository GitHub** (atau GitLab / Bitbucket).
2. Buka dashboard [Vercel](https://vercel.com) dan pilih **"Add New Project"**.
3. Import repository project `tebak-icon` Anda.
4. Vercel akan secara otomatis mendeteksi konfigurasi Next.js:
   - **Framework Preset**: Next.js
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
5. Klik **"Deploy"**. Dalam hitungan detik website akan live dengan domain `.vercel.app` atau sambungkan dengan domain kustom Anda (misalnya `tebakicon.ackerlabs.com`).

---

## 📱 Konfigurasi Google AdMob (`app-ads.txt`)

Setelah domain kustom Anda aktif (misalnya `https://ackerlabs.com`), lakukan langkah berikut:
1. Buka file `public/app-ads.txt`.
2. Ganti `pub-XXXXXXXXXXXXXXXX` dengan **Publisher ID** asli dari dashboard Google AdMob Anda:
   ```text
   google.com, pub-1234567890123456, DIRECT, f08c47fec0942fa0
   ```
3. Lakukan deploy ulang (`git push`).
4. Buka menu **app-ads.txt** di dashboard AdMob Anda dan verifikasi domain developer Anda.
