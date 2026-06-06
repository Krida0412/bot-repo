# Panduan Deploy & Maintenance

## Arsitektur Deploy (GitHub Actions → Vercel)

Deploy berjalan lewat **GitHub Actions** (`.github/workflows/deploy.yml`), BUKAN
build langsung di Vercel. Alasannya:

- Vercel Hobby cuma 8GB RAM → `next build` selalu **OOM** (gagal).
- Build lokal Windows kena bug `spawn cmd.exe ENOENT` di `vercel build`.

Solusinya: build jalan di **runner GitHub (16GB RAM, repo harus PUBLIC)**, lalu
hasil prebuild-nya di-upload ke Vercel pakai `vercel deploy --prebuilt`.

### Alur tiap `git push` ke `main`:
1. GitHub Actions checkout + `pnpm install`
2. `vercel pull` ambil setting project
3. Inject `.env` produksi dari secret `DOTENV_PRODUCTION` (termasuk var Sensitive
   yang tidak ikut ke-pull)
4. `vercel build --prod` → compile SPA (Vite) + Next.js jadi `.vercel/output`
5. `vercel deploy --prebuilt --prod --archive=tgz` → upload ke Vercel

> **Vercel auto-build dimatikan** (Settings → Git → Ignored Build Step = `exit 0`)
> supaya Vercel tidak ikut build sendiri (yang pasti OOM).

---

## Cara Deploy Perubahan (Apapun)

Cukup commit + push ke `main`. GitHub Actions otomatis build & deploy:

```bash
git add -A
git commit -m "pesan commit"
git push
```

Pantau progress di tab **Actions** repo GitHub. Build penuh makan ~5-8 menit.

> Tidak perlu lagi build SPA manual di lokal — runner GitHub yang urus semua.

---

## Secret & Env yang Dibutuhkan

**GitHub repo secrets** (Settings → Secrets and variables → Actions):

| Secret | Isi |
|--------|-----|
| `VERCEL_TOKEN` | Token dari vercel.com/account/settings/tokens |
| `DOTENV_PRODUCTION` | Seluruh isi `.env` produksi (APP_URL = domain Vercel) |

Kalau ada perubahan env produksi, update **dua tempat**: secret `DOTENV_PRODUCTION`
(untuk build) DAN Environment Variables di Vercel dashboard (untuk runtime).

---

## Environment Variables

Semua env var ada di `.env` (JANGAN commit ke git).
Untuk Vercel, copy ke: Project Settings → Environment Variables.

| Variable | Fungsi |
|----------|--------|
| `DATABASE_URL` | Koneksi Prisma Postgres (pakai `pooled.db.prisma.io`) |
| `DATABASE_DRIVER` | `node` |
| `KEY_VAULTS_SECRET` | Enkripsi API key user |
| `AUTH_SECRET` | Session auth |
| `APP_URL` | URL domain Vercel kamu |
| `DEEPSEEK_API_KEY` | AI provider |
| `S3_*` | Cloudflare R2 storage |
| `SEARCH_PROVIDERS` | `tavily` |
| `TAVILY_API_KEY` | Web search |
| `CRAWLER_IMPLS` | `tavily` |

---

## Migrasi Database

Migrasi sudah jalan otomatis saat Vercel build (`db:migrate` di `build:vercel`).

Kalau perlu migrasi manual (misal buat DB baru):

```bash
# Sementara ganti DATABASE_URL ke direct connection:
# pooled.db.prisma.io → db.prisma.io (hapus "pooled.")
bun run db:migrate
# Setelah selesai, kembalikan ke pooled.
```

⚠️ Migrasi HARUS pakai direct connection (`db.prisma.io`), bukan pooled.

---

## Development Lokal

```bash
# Jalankan frontend + backend sekaligus
bun run dev

# Akses di browser
http://localhost:3010
```

---

## Catatan Penting

1. **ICU tokenizer**: Migrasi 0093 pakai `default` tokenizer (bukan `icu`) karena Prisma Postgres tidak support ICU. Search tetap jalan normal untuk bahasa Indonesia/Inggris.

2. **Cloud Sandbox**: Butuh Community Profile gratis di LobeHub. Aktif otomatis setelah user klik "Create Your Profile".

3. **Onboarding default model**: DeepSeek (bukan Gemini). Diubah di `packages/business/const/src/llm.ts`.

4. **CORS R2**: Pastikan domain Vercel kamu di-allow di Cloudflare R2 → bucket → Settings → CORS policy.
