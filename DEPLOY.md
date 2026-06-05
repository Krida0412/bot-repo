# Panduan Deploy & Maintenance

## Arsitektur Build

Aplikasi ini terdiri dari 2 bagian:

| Bagian | Build tool | Di mana di-build | Kenapa |
|--------|-----------|------------------|--------|
| **SPA (frontend/UI)** | Vite | Lokal (PC kamu) | Butuh RAM > 8GB, Vercel gak kuat |
| **Next.js (backend/API)** | Next.js | Vercel | Cukup ringan, muat di Vercel |

SPA yang sudah di-build disimpan di `public/_spa/` dan di-commit ke git.
Vercel hanya menjalankan `next build` + `db:migrate`.

---

## Kapan Perlu Build Ulang SPA (Lokal)

**HANYA jika kamu mengubah file-file ini:**
- `src/routes/` — halaman/page
- `src/features/` — komponen fitur
- `src/components/` — komponen UI
- `src/store/` — state management
- `src/spa/` — entry point & router
- `src/styles/` — styling
- `src/hooks/` — custom hooks
- `src/locales/` — terjemahan
- `packages/` — shared packages

**TIDAK perlu build ulang SPA jika:**
- Hanya ubah environment variables
- Hanya ubah `src/app/` (backend API routes)
- Hanya ubah `src/server/` (server logic)
- Hanya ubah database migrations

---

## Cara Build Ulang SPA

Jalankan di terminal (di folder project ini):

```bash
# 1. Build SPA
bun run build:spa:raw

# 2. Copy hasil build ke public/_spa
bun run build:spa:copy

# 3. Commit & push
git add -A
git commit -m "🔄 rebuild SPA"
git push
```

Vercel akan otomatis redeploy setelah push.

---

## Cara Deploy Perubahan Backend (Tanpa Rebuild SPA)

Cukup:

```bash
git add -A
git commit -m "pesan commit"
git push
```

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
