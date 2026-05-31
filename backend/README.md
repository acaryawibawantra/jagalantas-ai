---
title: Jagalantas AI Backend
emoji: 🚨
colorFrom: red
colorTo: yellow
sdk: docker
app_port: 8000
pinned: false
---

# JAGALANTAS AI — Backend API

Backend service untuk sistem Jagalantas AI. Saat ini berisi **dummy data** untuk mendukung prototype frontend. Akan diisi dengan implementasi AI model (YOLOv11, LSTM, IndoBERT) pada tahap berikutnya.

## Tech Stack

- **Framework**: Python + FastAPI
- **AI/ML** *(implementasi berikutnya)*: YOLOv11, LSTM, IndoBERT
- **Database** *(implementasi berikutnya)*: PostgreSQL + Redis

## Struktur Folder

```
backend/
├── app/
│   ├── api/
│   │   └── v1/              ← API endpoints (violations, hotspots, dst)
│   ├── core/                ← Config & settings
│   ├── data/
│   │   └── dummy/           ← Dummy data JSON (prototype)
│   └── models/              ← Pydantic schemas
├── requirements.txt
├── .env.example
└── README.md
```

## Cara Menjalankan

```bash
# 1. Buat virtual environment
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate

# 2. Install dependencies
pip install -r requirements.txt

# 3. Copy env file
cp .env.example .env

# 4. Jalankan server
uvicorn app.main:app --reload --port 8000
```

API akan tersedia di: `http://localhost:8000`
Dokumentasi interaktif: `http://localhost:8000/docs`

## API Endpoints (Prototype)

| Method | Endpoint | Deskripsi |
|--------|----------|-----------|
| GET | `/api/v1/stats` | Ringkasan statistik dashboard |
| GET | `/api/v1/violations` | Data pelanggaran |
| GET | `/api/v1/hotspots` | Titik kerawanan lalu lintas |
| GET | `/api/v1/cameras` | Daftar kamera CCTV |
| GET | `/api/v1/incidents` | Insiden live |
| GET | `/api/v1/reports` | Laporan warga |
| POST | `/api/v1/reports` | Kirim laporan warga baru |
| GET | `/api/v1/forecast` | Prediksi pelanggaran 24 jam |
