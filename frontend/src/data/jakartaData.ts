// ── CCTV CAMERA LOCATIONS (Jakarta protocol roads)
export const cctvCameras = [
  { id: 'c01', name: 'Jl. Sudirman - Semanggi', lat: -6.2088, lng: 106.8231, status: 'online', zone: 'Pusat' },
  { id: 'c02', name: 'Jl. Thamrin - BNI', lat: -6.1944, lng: 106.8229, status: 'online', zone: 'Pusat' },
  { id: 'c03', name: 'Jl. Gatot Subroto - DPR', lat: -6.2097, lng: 106.8008, status: 'online', zone: 'Barat' },
  { id: 'c04', name: 'Jl. HR Rasuna Said - Kuningan', lat: -6.2186, lng: 106.8317, status: 'online', zone: 'Selatan' },
  { id: 'c05', name: 'Jl. Casablanca - Tebet', lat: -6.2335, lng: 106.8479, status: 'offline', zone: 'Selatan' },
  { id: 'c06', name: 'Jl. MT Haryono - Cawang', lat: -6.2432, lng: 106.8687, status: 'online', zone: 'Timur' },
  { id: 'c07', name: 'Jl. Gunung Sahari - Kemayoran', lat: -6.1562, lng: 106.8455, status: 'online', zone: 'Utara' },
  { id: 'c08', name: 'Jl. Mangga Dua - Pasar Pagi', lat: -6.1387, lng: 106.8182, status: 'online', zone: 'Utara' },
  { id: 'c09', name: 'Jl. Daan Mogot - Cengkareng', lat: -6.1606, lng: 106.7417, status: 'online', zone: 'Barat' },
  { id: 'c10', name: 'Jl. Raya Bogor - Kramatjati', lat: -6.2783, lng: 106.8912, status: 'online', zone: 'Timur' },
  { id: 'c11', name: 'Jl. Pramuka - Matraman', lat: -6.2003, lng: 106.8614, status: 'online', zone: 'Timur' },
  { id: 'c12', name: 'Jl. Hayam Wuruk - Glodok', lat: -6.1494, lng: 106.8133, status: 'offline', zone: 'Barat' },
  { id: 'c13', name: 'Busway Corridor 1 - Blok M', lat: -6.2447, lng: 106.7990, status: 'online', zone: 'Selatan' },
  { id: 'c14', name: 'Busway Corridor 6 - Ragunan', lat: -6.3126, lng: 106.8199, status: 'online', zone: 'Selatan' },
  { id: 'c15', name: 'Jl. Pluit - Penjaringan', lat: -6.1185, lng: 106.7930, status: 'online', zone: 'Utara' },
]

// ── HOTSPOT VIOLATION DATA
export const hotspots = [
  { id: 'h01', lat: -6.2088, lng: 106.8231, riskScore: 92, violations: 847, type: 'Parkir Liar + Jalur Busway', forecast24h: 'TINGGI', zone: 'Pusat' },
  { id: 'h02', lat: -6.1944, lng: 106.8229, riskScore: 88, violations: 723, type: 'Jalur Busway', forecast24h: 'TINGGI', zone: 'Pusat' },
  { id: 'h03', lat: -6.2186, lng: 106.8317, riskScore: 79, violations: 612, type: 'Parkir Liar', forecast24h: 'SEDANG', zone: 'Selatan' },
  { id: 'h04', lat: -6.2335, lng: 106.8479, riskScore: 74, violations: 534, type: 'Parkir Liar', forecast24h: 'SEDANG', zone: 'Selatan' },
  { id: 'h05', lat: -6.2432, lng: 106.8687, riskScore: 85, violations: 698, type: 'Jalur Sepeda + Parkir Liar', forecast24h: 'TINGGI', zone: 'Timur' },
  { id: 'h06', lat: -6.1387, lng: 106.8182, riskScore: 91, violations: 812, type: 'Parkir Liar', forecast24h: 'TINGGI', zone: 'Utara' },
  { id: 'h07', lat: -6.2097, lng: 106.8008, riskScore: 67, violations: 423, type: 'Jalur Busway', forecast24h: 'SEDANG', zone: 'Barat' },
  { id: 'h08', lat: -6.2783, lng: 106.8912, riskScore: 55, violations: 312, type: 'Parkir Liar', forecast24h: 'RENDAH', zone: 'Timur' },
]

// ── 24H FORECAST DATA (for chart)
export const forecast24h = [
  { jam: '06:00', prediksi: 12, aktual: 10 },
  { jam: '07:00', prediksi: 45, aktual: 42 },
  { jam: '08:00', prediksi: 89, aktual: 94 },
  { jam: '09:00', prediksi: 72, aktual: 68 },
  { jam: '10:00', prediksi: 48, aktual: 51 },
  { jam: '11:00', prediksi: 35, aktual: 33 },
  { jam: '12:00', prediksi: 41, aktual: null },
  { jam: '13:00', prediksi: 38, aktual: null },
  { jam: '14:00', prediksi: 29, aktual: null },
  { jam: '15:00', prediksi: 44, aktual: null },
  { jam: '16:00', prediksi: 78, aktual: null },
  { jam: '17:00', prediksi: 95, aktual: null },
  { jam: '18:00', prediksi: 88, aktual: null },
  { jam: '19:00', prediksi: 61, aktual: null },
  { jam: '20:00', prediksi: 32, aktual: null },
]

// ── VIOLATION TYPE BREAKDOWN
export const violationTypes = [
  { type: 'Parkir Liar', count: 3241, pct: 53 },
  { type: 'Jalur Busway', count: 1876, pct: 31 },
  { type: 'Jalur Sepeda', count: 612, pct: 10 },
  { type: 'Berhenti Sembarangan', count: 372, pct: 6 },
]

// ── LIVE INCIDENTS (JAGALANTAS CONNECT — Arah 2: AI → Warga)
export const liveIncidents = [
  {
    id: 'i01', lat: -6.2088, lng: 106.8231,
    type: 'Kemacetan Parah', severity: 'high',
    location: 'Jl. Sudirman - depan Semanggi',
    detectedAt: '11:42', source: 'AI CCTV',
    description: 'Antrian kendaraan >500m, estimasi delay 25 menit',
    alertSent: true, recipients: 1247,
  },
  {
    id: 'i02', lat: -6.1944, lng: 106.8300,
    type: 'Kecelakaan', severity: 'critical',
    location: 'Jl. Thamrin - depan Sarinah',
    detectedAt: '11:38', source: 'AI CCTV',
    description: 'Tabrakan 2 kendaraan, 1 jalur tertutup. Petugas menuju lokasi.',
    alertSent: true, recipients: 2103,
  },
  {
    id: 'i03', lat: -6.2447, lng: 106.7990,
    type: 'Busway Blocked', severity: 'medium',
    location: 'Blok M - Jalur Busway Corridor 1',
    detectedAt: '11:51', source: 'Laporan Warga',
    description: 'Kendaraan pribadi masuk jalur busway, memperlambat arus TransJakarta',
    alertSent: true, recipients: 384,
  },
  {
    id: 'i04', lat: -6.2335, lng: 106.8479,
    type: 'Perlambatan Arus', severity: 'low',
    location: 'Jl. Casablanca - arah Kuningan',
    detectedAt: '11:55', source: 'AI CCTV',
    description: 'Perlambatan normal jam kerja, estimasi delay 8 menit',
    alertSent: false, recipients: 0,
  },
]

// ── CITIZEN REPORTS (Arah 1: Warga → Sistem)
export const citizenReports = [
  {
    id: 'r01', lat: -6.2150, lng: 106.8350,
    status: 'verified', confidence: 94,
    location: 'Jl. Rasuna Said No. 45',
    type: 'Parkir Liar', channel: 'JAKI',
    reportedAt: '11:20', reporterCode: 'WRG-4821',
    description: 'Mobil parkir di atas trotoar menutup akses pejalan kaki',
    action: 'Petugas dikirim, tiba 11:35',
  },
  {
    id: 'r02', lat: -6.1562, lng: 106.8455,
    status: 'processing', confidence: 71,
    location: 'Jl. Gunung Sahari - depan RS',
    type: 'Jalur Busway', channel: 'WhatsApp',
    reportedAt: '11:33', reporterCode: 'WRG-5503',
    description: 'Angkot berhenti di jalur busway mengangkut penumpang',
    action: 'Validasi CCTV sedang berlangsung...',
  },
  {
    id: 'r03', lat: -6.2003, lng: 106.8614,
    status: 'rejected', confidence: 22,
    location: 'Jl. Pramuka - Matraman',
    type: 'Kecelakaan', channel: 'CRM',
    reportedAt: '11:18', reporterCode: 'WRG-3310',
    description: 'Dugaan kecelakaan di persimpangan',
    action: 'Tidak terkonfirmasi oleh CCTV terdekat',
  },
  {
    id: 'r04', lat: -6.1387, lng: 106.8182,
    status: 'verified', confidence: 88,
    location: 'Mangga Dua - Pasar Pagi',
    type: 'Parkir Liar', channel: 'JAKI',
    reportedAt: '11:45', reporterCode: 'WRG-6612',
    description: 'Puluhan motor parkir di badan jalan menyebabkan kemacetan',
    action: 'Tim parkir dikirim',
  },
]

// ── STATS SUMMARY
export const statsSummary = {
  totalViolationsToday: 1247,
  totalViolationsMonth: 38420,
  cctvOnline: 13,
  cctvTotal: 15,
  activeIncidents: 3,
  citizenReportsToday: 42,
  reportsVerified: 31,
  officersDeployed: 18,
}
