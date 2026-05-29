import { useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, Legend } from 'recharts'
import { statsSummary, violationTypes, hotspots } from '../data/jakartaData'
import StatCard from '../components/StatCard'
import { Card, CardContent } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'

const weekly = [
  { hari: 'Sen', parkir: 420, busway: 180, sepeda: 80 },
  { hari: 'Sel', parkir: 380, busway: 210, sepeda: 65 },
  { hari: 'Rab', parkir: 510, busway: 195, sepeda: 90 },
  { hari: 'Kam', parkir: 460, busway: 220, sepeda: 75 },
  { hari: 'Jum', parkir: 590, busway: 260, sepeda: 110 },
  { hari: 'Sab', parkir: 320, busway: 140, sepeda: 55 },
  { hari: 'Min', parkir: 210, busway: 95,  sepeda: 40 },
]

const zoneData = [
  { zone: 'Pusat', violations: 1570 },
  { zone: 'Selatan', violations: 1146 },
  { zone: 'Timur', violations: 1010 },
  { zone: 'Utara', violations: 812 },
  { zone: 'Barat', violations: 735 },
]

const COLORS = ['var(--color-danger-500)', 'var(--color-warning-500)', 'var(--color-primary-500)', 'var(--color-success-500)', '#A78BFA']

const participation = [
  { bulan: 'Jan', laporan: 18 }, { bulan: 'Feb', laporan: 24 },
  { bulan: 'Mar', laporan: 31 }, { bulan: 'Apr', laporan: 29 },
  { bulan: 'Mei', laporan: 42 },
]

export default function DashboardPage() {
  const today = new Date().toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
  
  const [etleTickets, setEtleTickets] = useState([
    { id: 'ETLE-0941', plat: 'B 1883 DKP', tipe: 'Parkir Liar', lokasi: 'Jl. Sudirman - depan Semanggi', waktu: '16:04 WIB', durasi: '14 Menit', status: 'Siap Kirim' },
    { id: 'ETLE-0942', plat: 'B 2975 DKI', tipe: 'Sterilisasi Jalur Busway', lokasi: 'Busway Koridor 1 - Blok M', waktu: '15:58 WIB', durasi: 'Seketika', status: 'Terkirim' },
    { id: 'ETLE-0943', plat: 'B 1408 SQA', tipe: 'Parkir Liar', lokasi: 'Mangga Dua - Pasar Pagi', waktu: '15:42 WIB', durasi: '28 Menit', status: 'Verifikasi' },
    { id: 'ETLE-0944', plat: 'B 2210 TQR', tipe: 'Sterilisasi Jalur Busway', lokasi: 'Jl. Thamrin - BNI', waktu: '15:15 WIB', durasi: 'Seketika', status: 'Terkirim' },
    { id: 'ETLE-0945', plat: 'B 8932 SS', tipe: 'Okupasi Jalur Sepeda', lokasi: 'Jl. HR Rasuna Said - Kuningan', waktu: '14:50 WIB', durasi: '8 Menit', status: 'Siap Kirim' },
  ])

  const [activeTab, setActiveTab] = useState('hotspot') 
  const [notification, setNotification] = useState<string | null>(null)

  const handleSendTicket = (id: string, plat: string) => {
    setEtleTickets(prev => prev.map(t => t.id === id ? { ...t, status: 'Terkirim' } : t))
    setNotification(`Surat Tilang Elektronik untuk Kendaraan ${plat} berhasil terkirim ke Korlantas POLRI!`)
    setTimeout(() => setNotification(null), 4000)
  }

  return (
    <div className="min-h-[calc(100vh-64px)] w-full pb-10 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 pt-8 pb-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-8 bg-warning-500 rounded-full animate-pulse" />
            <div>
              <h1 className="font-outfit font-bold text-2xl text-slate-900 dark:text-white tracking-tight">
                DASHBOARD <span className="text-warning-600 dark:text-warning-500">EKSEKUTIF UTAMA</span>
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-sans font-medium mt-1">
                Laporan Harian Operasional Pengawasan Kota · {today}
              </p>
            </div>
          </div>
          <div className="bg-warning-50 dark:bg-warning-500/10 border border-warning-200 dark:border-warning-500/30 rounded-xl px-4 py-2 text-right">
            <div className="font-mono text-[9px] text-warning-600 dark:text-warning-500 tracking-[0.1em] font-bold">LAPORAN SISTEM OTOMATIS</div>
            <div className="font-outfit text-xl font-bold text-warning-700 dark:text-warning-400 leading-tight mt-0.5">
              {statsSummary.totalViolationsToday.toLocaleString()}
            </div>
            <div className="text-[10px] text-slate-600 dark:text-slate-400 font-medium">total pelanggaran hari ini</div>
          </div>
        </div>

        {/* KPI row */}
        <div className="flex flex-wrap gap-4 mb-8">
          <StatCard icon="🚨" label="Pelanggaran Hari Ini" value={statsSummary.totalViolationsToday.toLocaleString()} sub="↑ 12% dari kemarin" colorClass="text-danger-500" glow />
          <StatCard icon="📅" label="Total Bulan Ini" value={statsSummary.totalViolationsMonth.toLocaleString()} sub="Mei 2025" colorClass="text-warning-500" />
          <StatCard icon="📱" label="Laporan Warga" value={statsSummary.citizenReportsToday} sub={`${statsSummary.reportsVerified} terverifikasi`} colorClass="text-success-500" />
          <StatCard icon="📹" label="CCTV Aktif" value={`${statsSummary.cctvOnline}/${statsSummary.cctvTotal}`} sub="87% uptime" colorClass="text-primary-500" />
          <StatCard icon="🎯" label="Akurasi Sistem" value="94.2%" sub="Deteksi Visi Komputer" colorClass="text-purple-500" />
        </div>

        {/* Charts row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">

          {/* Weekly bar chart */}
          <Card>
            <CardContent>
              <div className="font-mono text-[10px] font-bold text-slate-500 dark:text-slate-400 tracking-wider mb-4">
                📊 PELANGGARAN PER HARI (7 HARI TERAKHIR)
              </div>
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={weekly} margin={{ top: 0, right: 0, bottom: 0, left: -15 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#CBD5E1" className="dark:stroke-slate-700" vertical={false} />
                  <XAxis dataKey="hari" tick={{ fontSize: 10, fontFamily: 'monospace' }} stroke="#94A3B8" tickLine={false} axisLine={false} />
                  <YAxis tick={{ fontSize: 9, fontFamily: 'monospace' }} stroke="#94A3B8" tickLine={false} axisLine={false} />
                  <Tooltip 
                    contentStyle={{ borderRadius: 8, fontSize: 11, border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} 
                    itemStyle={{ color: '#1E293B', fontWeight: 600 }}
                  />
                  <Legend wrapperStyle={{ fontSize: 11, fontWeight: 500 }} />
                  <Bar dataKey="parkir" name="Parkir Liar" fill="var(--color-danger-500)" radius={[3,3,0,0]} />
                  <Bar dataKey="busway" name="Jalur Busway" fill="var(--color-warning-500)" radius={[3,3,0,0]} />
                  <Bar dataKey="sepeda" name="Jalur Sepeda" fill="var(--color-primary-500)" radius={[3,3,0,0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Pie chart by type */}
          <Card>
            <CardContent>
              <div className="font-mono text-[10px] font-bold text-slate-500 dark:text-slate-400 tracking-wider mb-4">
                🥧 DISTRIBUSI TIPE PELANGGARAN
              </div>
              <div className="flex items-center gap-6">
                <ResponsiveContainer width="55%" height={200}>
                  <PieChart>
                    <Pie data={violationTypes} dataKey="count" nameKey="type" cx="50%" cy="50%" outerRadius={80} innerRadius={45} stroke="none">
                      {violationTypes.map((_, i) => <Cell key={i} fill={COLORS[i]} />)}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ borderRadius: 8, fontSize: 11, border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} 
                      itemStyle={{ color: '#1E293B', fontWeight: 600 }}
                    />
                  </PieChart>
                </ResponsiveContainer>
                <div className="flex-1">
                  {violationTypes.map((v, i) => (
                    <div key={i} className="flex items-center gap-3 mb-3">
                      <div className="w-2.5 h-2.5 rounded-full shrink-0 shadow-sm" style={{ backgroundColor: COLORS[i] }} />
                      <div className="flex-1">
                        <div className="text-xs font-semibold text-slate-700 dark:text-slate-300">{v.type}</div>
                        <div className="font-mono text-[10px] font-bold mt-0.5" style={{ color: COLORS[i] }}>
                          {v.pct}% · {v.count.toLocaleString()}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts row 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">

          {/* Zone breakdown */}
          <Card>
            <CardContent>
              <div className="font-mono text-[10px] font-bold text-slate-500 dark:text-slate-400 tracking-wider mb-4">
                🗺️ PELANGGARAN PER ZONA JAKARTA
              </div>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={zoneData} layout="vertical" margin={{ top: 0, right: 20, bottom: 0, left: 10 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#CBD5E1" className="dark:stroke-slate-700" horizontal={false} />
                  <XAxis type="number" tick={{ fontSize: 9, fontFamily: 'monospace' }} stroke="#94A3B8" tickLine={false} axisLine={false} />
                  <YAxis dataKey="zone" type="category" tick={{ fontSize: 11, fontWeight: 500 }} width={55} stroke="#64748B" tickLine={false} axisLine={false} />
                  <Tooltip 
                    contentStyle={{ borderRadius: 8, fontSize: 11, border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} 
                    itemStyle={{ color: '#1E293B', fontWeight: 600 }}
                  />
                  <Bar dataKey="violations" name="Pelanggaran" fill="var(--color-primary-500)" radius={[0,4,4,0]}>
                    {zoneData.map((_, i) => <Cell key={i} fill={COLORS[i]} />)}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Citizen participation trend */}
          <Card>
            <CardContent>
              <div className="font-mono text-[10px] font-bold text-slate-500 dark:text-slate-400 tracking-wider mb-4">
                📈 TREN PARTISIPASI LAPORAN WARGA
              </div>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={participation} margin={{ top: 0, right: 10, bottom: 0, left: -15 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#CBD5E1" className="dark:stroke-slate-700" vertical={false} />
                  <XAxis dataKey="bulan" tick={{ fontSize: 10, fontFamily: 'monospace' }} stroke="#94A3B8" tickLine={false} axisLine={false} />
                  <YAxis tick={{ fontSize: 9, fontFamily: 'monospace' }} stroke="#94A3B8" tickLine={false} axisLine={false} />
                  <Tooltip 
                    contentStyle={{ borderRadius: 8, fontSize: 11, border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} 
                    itemStyle={{ color: '#1E293B', fontWeight: 600 }}
                  />
                  <Line type="monotone" dataKey="laporan" stroke="var(--color-success-500)" strokeWidth={3} dot={{ fill: 'var(--color-success-500)', r: 4, strokeWidth: 0 }} name="Laporan/hari" />
                </LineChart>
              </ResponsiveContainer>
              <div className="font-mono text-[10px] text-success-600 dark:text-success-400 font-semibold mt-2 bg-success-50 dark:bg-success-500/10 inline-block px-2 py-1 rounded-md">
                ↑ +133% partisipasi sejak JAGALANTAS INTERAKTIF diluncurkan
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Toast Notification for ticket sent */}
        {notification && (
          <div className="fixed bottom-6 right-6 z-[9999] bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-5 py-3.5 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 flex items-center gap-3 animate-[slideUp_0.3s_ease] font-sans text-xs font-semibold">
            <span className="text-base animate-bounce">🚀</span>
            <span>{notification}</span>
          </div>
        )}

        {/* Hotspot & E-TLE Integrated Table */}
        <Card className="shadow-sm">
          <div className="bg-slate-50 dark:bg-slate-900/50 px-5 py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-800">
            {/* Tabs */}
            <div className="flex gap-2">
              {[
                { id: 'hotspot', label: '🔥 TITIK RAWAN UTAMA & DEPLOYMENT' },
                { id: 'etle', label: '📸 INTEGRASI DATABASE E-TLE & TILANG' },
              ].map(t => (
                <button
                  key={t.id}
                  onClick={() => setActiveTab(t.id)}
                  className={`px-3 py-1.5 rounded-xl font-outfit text-xs font-bold transition-all duration-300 ${
                    activeTab === t.id
                      ? 'bg-warning-500 text-slate-950 shadow-md scale-105'
                      : 'text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
            <span className="font-mono text-[9px] font-bold text-slate-400 tracking-wider hidden sm:block">
              SISTEM TILANG DIGITAL KORLANTAS INTEGRATED
            </span>
          </div>

          <CardContent className="p-5">
            {activeTab === 'hotspot' ? (
              <div className="overflow-x-auto animate-[fadeIn_0.2s_ease-out]">
                <table className="w-full text-left text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 dark:border-slate-800">
                      {['Zona', 'Tipe Pelanggaran', 'Total Kejadian', 'Skor Rawan', 'Proyeksi 24j', 'Rekomendasi Penugasan'].map(h => (
                        <th key={h} className="pb-3 pr-4 font-mono text-[10px] text-slate-500 uppercase tracking-wider font-semibold whitespace-nowrap">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    {hotspots.sort((a,b) => b.riskScore - a.riskScore).map((h) => (
                      <tr key={h.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                        <td className="py-3 pr-4 font-medium text-slate-900 dark:text-slate-100 whitespace-nowrap">{h.zone}</td>
                        <td className="py-3 pr-4 text-slate-600 dark:text-slate-300 whitespace-nowrap">{h.type}</td>
                        <td className="py-3 pr-4 font-mono font-bold text-primary-600 dark:text-primary-400 whitespace-nowrap">{h.violations}</td>
                        <td className="py-3 pr-4 whitespace-nowrap">
                          <span className={`font-mono text-[11px] font-bold ${h.riskScore >= 85 ? 'text-danger-600 dark:text-danger-500' : h.riskScore >= 70 ? 'text-warning-600 dark:text-warning-500' : 'text-success-600 dark:text-success-500'}`}>
                            {h.riskScore}%
                          </span>
                        </td>
                        <td className="py-3 pr-4 whitespace-nowrap">
                          <Badge variant={h.forecast24h === 'TINGGI' ? 'danger' : h.forecast24h === 'SEDANG' ? 'warning' : 'success'}>
                            {h.forecast24h}
                          </Badge>
                        </td>
                        <td className="py-3 pr-4 text-xs font-semibold text-success-600 dark:text-success-500 whitespace-nowrap">
                          {h.riskScore >= 85 ? '3 petugas + E-TLE mobile' : h.riskScore >= 70 ? '2 petugas' : '1 petugas / monitoring'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="overflow-x-auto animate-[fadeIn_0.2s_ease-out]">
                <table className="w-full text-left text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 dark:border-slate-800">
                      {['ID E-TLE', 'No. Plat (ANPR)', 'Jenis Pelanggaran', 'Lokasi Kejadian', 'Waktu / Durasi', 'Status Berkas', 'Aksi'].map(h => (
                        <th key={h} className="pb-3 pr-4 font-mono text-[10px] text-slate-500 uppercase tracking-wider font-semibold whitespace-nowrap">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    {etleTickets.map((t) => (
                      <tr key={t.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                        <td className="py-3 pr-4 font-mono font-bold text-slate-500 dark:text-slate-400 whitespace-nowrap">{t.id}</td>
                        <td className="py-3 pr-4 whitespace-nowrap">
                          <span className="font-mono text-xs font-bold bg-slate-900 text-white dark:bg-slate-850 dark:text-slate-100 px-2 py-1 rounded border border-slate-700 shadow-sm tracking-wide">
                            {t.plat}
                          </span>
                        </td>
                        <td className="py-3 pr-4 font-semibold text-slate-900 dark:text-slate-200 whitespace-nowrap">{t.tipe}</td>
                        <td className="py-3 pr-4 text-slate-600 dark:text-slate-400 whitespace-nowrap">{t.lokasi}</td>
                        <td className="py-3 pr-4 whitespace-nowrap">
                          <span className="font-mono text-xs font-medium text-slate-700 dark:text-slate-300">
                            {t.waktu} <span className="text-[10px] text-slate-400 dark:text-slate-500">({t.durasi})</span>
                          </span>
                        </td>
                        <td className="py-3 pr-4 whitespace-nowrap">
                          <Badge variant={t.status === 'Terkirim' ? 'success' : t.status === 'Siap Kirim' ? 'primary' : 'warning'}>
                            {t.status === 'Terkirim' ? 'Terkirim ke POLRI' : t.status === 'Siap Kirim' ? 'Siap Kirim' : 'Validasi Petugas'}
                          </Badge>
                        </td>
                        <td className="py-3 pr-4 whitespace-nowrap">
                          {t.status !== 'Terkirim' ? (
                            <button
                              onClick={() => handleSendTicket(t.id, t.plat)}
                              className="px-2.5 py-1.5 bg-gradient-to-r from-warning-500 to-warning-600 hover:from-warning-600 hover:to-warning-700 text-slate-950 font-outfit font-extrabold text-[10px] rounded-lg transition-all shadow-sm hover:shadow active:scale-95"
                            >
                              Kirim Surat Tilang
                            </button>
                          ) : (
                            <span className="text-[10px] text-success-500 font-bold font-mono">✓ SUKSES TERKIRIM</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>

      </div>
    </div>
  )
}

