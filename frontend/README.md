# 🚦 JAGALANTAS AI
**Jakarta Guardian for Lane & Traffic Surveillance — Autonomous Intelligence**

> AI Open Competition · Case 1 — Intelligent Traffic Enforcement & Behaviour Analysis

---

## 📋 Tentang Proyek

JAGALANTAS AI adalah sistem kecerdasan buatan dua modul untuk penegakan lalu lintas dan analisis perilaku pengguna jalan di Jakarta.

### Modul 1 — JAGALANTAS PREDICT
*Predictive Enforcement Intelligence*
- Real-time violation detection via CCTV (YOLOv11)
- Automatic Number Plate Recognition (ANPR/LPR)
- 24-hour hotspot forecasting (LSTM)
- AI-powered officer deployment recommendation

### Modul 2 — JAGALANTAS CONNECT
*Bidirectional Citizen-AI Alert System*
- **Arah 1 ↑** Warga lapor via JAKI/CRM/WhatsApp → NLP validation (IndoBERT) → CCTV cross-check → dispatch
- **Arah 2 ↓** AI deteksi insiden (kecelakaan, kemacetan) → BMKG-style push notification ke warga

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 19 + Next.js |
| Map | Leaflet.js + React-Leaflet |
| Charts | Recharts |
| Styling | Tailwind CSS + DM Sans/Syne |
| AI Models | YOLOv11, LSTM, IndoBERT *(simulated in prototype)* |
| Deploy | GitHub Pages (via Actions) |

---

## 🚀 Cara Menjalankan

```bash
# Clone repo
git clone https://github.com/USERNAME/jagalantas-ai.git
cd jagalantas-ai

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

---

## 📁 Struktur Project

```
jagalantas-ai/
├── src/
│   ├── data/
│   │   └── jakartaData.js      # Data CCTV, hotspot, insiden, laporan warga
│   ├── components/
│   │   ├── Navbar.jsx           # Navigation bar
│   │   └── StatCard.jsx         # Reusable stat card
│   ├── pages/
│   │   ├── Predict.jsx          # JAGALANTAS PREDICT page
│   │   ├── Connect.jsx          # JAGALANTAS CONNECT page
│   │   └── Dashboard.jsx        # Executive Dashboard
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .github/
│   └── workflows/
│       └── deploy.yml           # Auto-deploy ke GitHub Pages
├── index.html
├── vite.config.js
└── README.md
```

---

## 🔗 Live Demo

[https://USERNAME.github.io/jagalantas-ai](https://USERNAME.github.io/jagalantas-ai)

---

## 👥 Tim

*[Tambahkan nama tim di sini]*

---

> ⚠️ Prototype ini menggunakan data dummy yang realistis. Integrasi dengan data CCTV dan E-TLE real akan dilakukan pada fase implementasi.
