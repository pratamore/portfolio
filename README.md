# Portofolio Agung (Next.js)

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```

- Teks, proyek, dan kontak: `lib/content.ts`
- Gambar proyek: `public/projects/` (ganti file .svg dengan .jpg/.png lalu ubah `image` di `lib/content.ts`)
- Foto profil: taruh `public/foto.jpg`, lalu ubah `photo` di `lib/content.ts`
- Warna & gaya: `app/globals.css`

## Deploy ke Vercel
1. Push folder ini ke GitHub (folder `agung-portfolio` harus menjadi root repo, atau atur **Root Directory** di Vercel ke folder ini).
2. Import repo di vercel.com → Framework otomatis terdeteksi **Next.js** → Deploy.
3. Font dimuat lewat `next/font` (di-host sendiri saat build) dan versi paket dikunci, jadi tampilannya sama dengan lokal.
