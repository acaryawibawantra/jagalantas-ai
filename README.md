# JAGALANTAS AI

Sistem pengawasan lalu lintas cerdas perkotaan berbasis kecerdasan buatan (AI) untuk mendeteksi, merekam, dan menganalisis berbagai jenis pelanggaran lalu lintas (seperti parkir liar, okupasi jalur sepeda, dan sterilisasi jalur busway) secara real-time.

Proyek ini merupakan purwarupa (prototype) penuh yang terdiri dari aplikasi Frontend berbasis web dashboard interaktif dan Backend API berbasis data simulasi.

---

## Struktur Proyek

Repositori ini dikelola menggunakan struktur monorepo terpisah:

```text
jagalantas-ai/
├── .vscode/               # Konfigurasi editor Workspace
├── backend/               # Python FastAPI Service (API & ML)
└── frontend/              # Next.js React Application (Dashboard)
```

---

## Analisis Repositori (Keamanan & Kelayakan)

Repositori Anda saat ini **sangat aman** dan sudah siap untuk dipublikasikan secara umum (public repository) karena:
1. **File Kredensial Diabaikan**: File sensitif seperti `.env` (backend) dan `.env.local` (frontend) telah terdaftar di `.gitignore` masing-masing folder sehingga tidak akan pernah terunggah ke GitHub.
2. **Dependencies Bersih**: Folder besar seperti `node_modules` dan `venv` diabaikan dengan benar, menghindari ukuran repositori yang membengkak.
3. **File Sementara Diabaikan**: Direktori cache seperti `.next` dan `__pycache__` tidak terunggah ke repositori.

---

## Panduan Menjalankan Proyek Secara Lokal

### 1. Prasyarat (Prerequisites)
Pastikan komputer Anda sudah terinstal:
* [Node.js](https://nodejs.org/) (versi 18 ke atas)
* [Python](https://www.python.org/) (versi 3.9 ke atas)

---

### 2. Menjalankan Backend (FastAPI)

1. Masuk ke direktori backend:
   ```bash
   cd backend
   ```
2. Buat virtual environment (jika belum ada):
   ```bash
   python -m venv venv
   ```
3. Aktifkan virtual environment:
   * **macOS/Linux**: `source venv/bin/activate`
   * **Windows**: `venv\Scripts\activate`
4. Instal paket dependensi:
   ```bash
   pip install -r requirements.txt
   ```
5. Salin konfigurasi environment:
   ```bash
   cp .env.example .env
   ```
6. Jalankan server backend:
   ```bash
   uvicorn app.main:app --reload --port 8000
   ```
   * API akan tersedia di: `http://localhost:8000`
   * Dokumentasi Swagger: `http://localhost:8000/docs`

---

### 3. Menjalankan Frontend (Next.js)

1. Buka terminal baru dan masuk ke direktori frontend:
   ```bash
   cd frontend
   ```
2. Instal dependensi Node:
   ```bash
   npm install
   ```
3. Jalankan aplikasi frontend dalam mode pengembangan:
   ```bash
   npm run dev
   ```
   * Dashboard akan tersedia di: `http://localhost:3000`

---

## Rencana Deployment

### Frontend (Next.js) -> Vercel
* Dideploy menggunakan integrasi GitHub otomatis ke **Vercel**.
* Atur **Root Directory** ke folder `frontend` pada panel konfigurasi Vercel.

### Backend (FastAPI) -> Render / Hugging Face Spaces
* Dideploy ke **Render** sebagai *Web Service* dengan command:
  * **Build Command**: `pip install -r requirements.txt`
  * **Start Command**: `uvicorn app.main:app --host 0.0.0.0 --port $PORT`
* Atur **Root Directory** ke folder `backend` pada konfigurasi Render.
