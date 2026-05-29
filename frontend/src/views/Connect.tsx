import { useState, useEffect } from 'react'
import { MapContainer, TileLayer, CircleMarker, Popup, Tooltip } from 'react-leaflet'
// @ts-ignore
import 'leaflet/dist/leaflet.css'
import { liveIncidents, citizenReports, statsSummary, cctvCameras } from '../data/jakartaData'
import StatCard from '../components/StatCard'
import { Card, CardContent } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import { CctvCanvas } from './Predict'
import { useOpenCCTV } from '../hooks/useOpenCCTV'
import { LiveCCTVModal } from '../components/LiveCCTVModal'
import type { OpenCCTVCamera } from '../hooks/useOpenCCTV'

const severityColor: Record<string, string> = { critical: 'var(--color-danger-500)', high: 'var(--color-warning-500)', medium: 'var(--color-warning-500)', low: 'var(--color-success-500)' }
const severityLabel: Record<string, string> = { critical: 'KRITIS', high: 'TINGGI', medium: 'SEDANG', low: 'RENDAH' }
const statusColor: Record<string, string> = { verified: 'var(--color-success-500)', processing: 'var(--color-warning-500)', rejected: 'var(--color-danger-500)' }
const statusLabel: Record<string, string> = { verified: '✓ Terverifikasi', processing: '⟳ Diproses', rejected: '✗ Ditolak' }

export default function ConnectPage() {
  const [tab, setTab] = useState('incidents')
  const [incidents] = useState(liveIncidents)
  const [reports, setReports] = useState(citizenReports)
  const [form, setForm] = useState({ jenis: '', lokasi: '', deskripsi: '', channel: 'JAKI' })
  const [submitted, setSubmitted] = useState(false)
  const [newAlert, setNewAlert] = useState<any>(null)
  const [activeCctvStream, setActiveCctvStream] = useState<any>(null)
  const [activeLiveCam, setActiveLiveCam] = useState<OpenCCTVCamera | null>(null)

  // OpenCCTV live data
  const { activeCameras } = useOpenCCTV()

  // Simulate incoming alert every 15s
  useEffect(() => {
    const timer = setInterval(() => {
      const alerts = [
        'Perlambatan arus terdeteksi di Jl. Pramuka arah Matraman',
        'Kendaraan parkir liar terdeteksi di depan Stasiun Kota',
        'Kemacetan terpantau di Jl. MT Haryono arah Cawang',
      ]
      setNewAlert(alerts[Math.floor(Math.random() * alerts.length)])
      setTimeout(() => setNewAlert(null), 4000)
    }, 15000)
    return () => clearInterval(timer)
  }, [])

  const handleSubmit = () => {
    if (!form.jenis || !form.lokasi) return
    const newReport = {
      id: `r0${reports.length + 1}`,
      lat: -6.2 + (Math.random() - 0.5) * 0.15,
      lng: 106.83 + (Math.random() - 0.5) * 0.15,
      status: 'processing', confidence: Math.floor(Math.random() * 40 + 50),
      location: form.lokasi, type: form.jenis, channel: form.channel,
      reportedAt: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
      reporterCode: `WRG-${Math.floor(Math.random() * 9000 + 1000)}`,
      description: form.deskripsi || '(tidak ada deskripsi)',
      action: 'Laporan diterima, validasi CCTV sedang berjalan...',
    }
    setReports(prev => [newReport, ...prev])
    setSubmitted(true)
    setForm({ jenis: '', lokasi: '', deskripsi: '', channel: 'JAKI' })
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <div className="min-h-[calc(100vh-64px)] w-full pb-10 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors duration-300">

      {/* Real-time Alert Banner */}
      {newAlert && (
        <div className="bg-gradient-to-r from-success-600 to-primary-600 px-6 py-2.5 flex items-center gap-3 animate-[slideDown_0.3s_ease] shadow-md">
          <span className="text-lg animate-bounce">🔔</span>
          <span className="font-sans text-xs text-white font-bold tracking-wide">
            NOTIFIKASI SISTEM: {newAlert}
          </span>
          <span className="ml-auto font-sans text-[10px] text-white/80 font-medium">
            Didiseminasikan ke masyarakat sekitar via JAKI & WhatsApp
          </span>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 pt-8 pb-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-8 bg-success-500 rounded-full animate-pulse" />
            <div>
              <h1 className="font-outfit font-bold text-2xl text-slate-900 dark:text-white tracking-tight">
                JAGALANTAS <span className="text-success-600 dark:text-success-500">INTERAKTIF</span>
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-sans font-medium mt-1">
                Sistem Integrasi Laporan Warga & Diseminasi Informasi Lalu Lintas Kota Jakarta
              </p>
            </div>
          </div>

          {/* Bidir badges */}
          <div className="flex gap-2">
            <Badge variant="success" className="px-3 py-1.5 border border-success-500/20">⬆ Partisipasi Masyarakat</Badge>
            <Badge variant="primary" className="px-3 py-1.5 border border-primary-500/20">⬇ Diseminasi Informasi</Badge>
          </div>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-4 mb-8">
          <StatCard icon="🚨" label="Insiden Aktif" value={statsSummary.activeIncidents} sub="Terdeteksi AI dari CCTV" colorClass="text-danger-500" glow />
          <StatCard icon="📱" label="Laporan Hari Ini" value={statsSummary.citizenReportsToday} sub="Dari warga via JAKI/CRM/WA" colorClass="text-success-500" />
          <StatCard icon="✅" label="Terverifikasi" value={statsSummary.reportsVerified} sub={`${Math.round(statsSummary.reportsVerified/statsSummary.citizenReportsToday*100)}% confidence rate`} colorClass="text-success-600" />
          <StatCard icon="🔔" label="Alert Terkirim" value="3.2K" sub="Warga diberitahu hari ini" colorClass="text-primary-500" />
        </div>

        {/* Main: map + panel */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-6">

          {/* Map Container */}
          <Card className="flex flex-col min-h-[500px]">
            {/* Tab toggle */}
            <div className="bg-slate-50 dark:bg-slate-900/50 px-4 py-3 flex items-center gap-2 border-b border-slate-200 dark:border-slate-800">
              {[
                { id: 'incidents', label: '🚨 Insiden Aktif' },
                { id: 'reports', label: '📍 Laporan Warga' },
              ].map(t => (
                <button 
                  key={t.id} 
                  onClick={() => setTab(t.id)} 
                  className={`px-4 py-1.5 rounded-md font-mono text-[11px] font-semibold transition-all ${
                    tab === t.id 
                      ? 'bg-success-100 dark:bg-success-500/20 text-success-700 dark:text-success-400' 
                      : 'text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            <div className="flex-1 relative z-0">
              <MapContainer center={[-6.2088, 106.8456]} zoom={12} className="h-full w-full min-h-[460px] light-map">
                <TileLayer attribution='&copy; OpenStreetMap' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                {tab === 'incidents' && incidents.map(inc => (
                  <CircleMarker
                    key={inc.id}
                    center={[inc.lat, inc.lng]}
                    radius={inc.severity === 'critical' ? 16 : inc.severity === 'high' ? 12 : 9}
                    pathOptions={{
                      color: severityColor[inc.severity],
                      fillColor: severityColor[inc.severity],
                      fillOpacity: 0.4, weight: 2,
                    }}
                  >
                    <Tooltip direction="top" permanent={inc.severity === 'critical'} className="!bg-white dark:!bg-slate-800 !text-slate-900 dark:!text-white !border-slate-200 dark:!border-slate-700 !font-mono !text-[10px] !shadow-md">
                      <span>{inc.type} · {inc.detectedAt}</span>
                    </Tooltip>
                    <Popup>
                      <div className="min-w-[195px] p-0.5">
                        <b style={{ color: severityColor[inc.severity] }} className="text-sm font-outfit font-bold">{inc.type}</b><br />
                        <span className="text-xs font-semibold block mt-0.5 leading-tight">{inc.location}</span>
                        <span className="text-[11px] text-slate-500 block mt-1">{inc.description}</span>
                        <span className="text-[11px] text-slate-500 block mt-0.5">Sumber: {inc.source === 'AI CCTV' ? 'Deteksi CCTV Cerdas' : inc.source}</span>
                        {inc.alertSent && <span className="text-[10px] text-success-600 dark:text-success-500 font-semibold block mt-1">✓ Notifikasi terkirim ke {inc.recipients} warga</span>}
                        
                        <button
                          onClick={() => {
                            // Try to find matching live cam from OpenCCTV first
                            const liveCam = activeCameras.find(c =>
                              c.name.toLowerCase().includes(inc.location.split(' - ')[0].toLowerCase().replace('jl. ', ''))
                            )
                            if (liveCam) {
                              setActiveLiveCam(liveCam)
                            } else {
                              const matchingCam = cctvCameras.find(c => inc.location.toLowerCase().includes(c.name.split(' - ')[0].toLowerCase().replace('jl. ', ''))) || cctvCameras[0]
                              setActiveCctvStream(matchingCam)
                            }
                          }}
                          className="mt-2.5 w-full py-1.5 px-2 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-outfit font-bold text-[10px] rounded-lg transition-all shadow-sm hover:shadow text-center flex items-center justify-center gap-1.5"
                        >
                          📹 Lihat Live AI Stream
                        </button>
                      </div>
                    </Popup>
                  </CircleMarker>
                ))}

                {tab === 'reports' && reports.map(rep => (
                  <CircleMarker
                    key={rep.id}
                    center={[rep.lat, rep.lng]}
                    radius={9}
                    pathOptions={{
                      color: statusColor[rep.status],
                      fillColor: statusColor[rep.status],
                      fillOpacity: 0.5, weight: 2,
                    }}
                  >
                    <Tooltip direction="top" className="!bg-white dark:!bg-slate-800 !text-slate-900 dark:!text-white !border-slate-200 dark:!border-slate-700 !font-mono !text-[10px] !shadow-md">
                      <span>{rep.type} · {statusLabel[rep.status]}</span>
                    </Tooltip>
                    <Popup>
                      <div className="min-w-[200px]">
                        <b className="text-sm">{rep.type}</b> — <span style={{ color: statusColor[rep.status] }} className="text-xs font-semibold">{statusLabel[rep.status]}</span><br />
                        <span className="text-xs font-semibold mt-1 block">{rep.location}</span>
                        <span className="text-[11px] text-slate-500 block mt-1">{rep.description}</span>
                        <span className="text-[11px] text-slate-500 block mt-1">Confidence: {rep.confidence}%</span>
                        <span className="text-[11px] text-slate-500 block">Channel: {rep.channel} · {rep.reportedAt}</span>
                      </div>
                    </Popup>
                  </CircleMarker>
                ))}
              </MapContainer>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900/50 px-4 py-3 flex flex-wrap gap-4 border-t border-slate-200 dark:border-slate-800">
              {tab === 'incidents'
                ? Object.entries(severityColor).map(([k, v]) => <LegendDot key={k} color={v} label={severityLabel[k]} />)
                : Object.entries(statusColor).map(([k, v]) => <LegendDot key={k} color={v} label={statusLabel[k]} />)
              }
            </div>
          </Card>

          {/* Right panel */}
          <div className="flex flex-col gap-6">

            {/* Incident feed */}
            <Card>
              <CardContent>
                <div className="font-mono text-[10px] font-bold text-slate-500 dark:text-slate-400 tracking-wider mb-4">
                  ⬇ UMPAN NOTIFIKASI — DETEKSI INSIDEN OTOMATIS
                </div>
                <div className="flex flex-col gap-3 max-h-[240px] overflow-y-auto pr-2">
                  {incidents.map(inc => (
                    <div key={inc.id} className="bg-slate-50 dark:bg-slate-800/50 p-3 rounded-xl border-l-4 border-slate-200 dark:border-slate-700" style={{ borderLeftColor: severityColor[inc.severity] }}>
                      <div className="flex justify-between items-start">
                        <span className="text-xs font-bold text-slate-900 dark:text-slate-100">{inc.type}</span>
                        <span className="font-mono text-[9px] px-2 py-0.5 rounded-full font-bold" style={{ backgroundColor: `${severityColor[inc.severity]}22`, color: severityColor[inc.severity] }}>
                          {severityLabel[inc.severity]}
                        </span>
                      </div>
                      <div className="text-[11px] font-medium text-slate-600 dark:text-slate-300 mt-1">{inc.location}</div>
                      <div className="text-[11px] text-slate-500 mt-1">{inc.description}</div>
                      <div className="flex justify-between mt-2">
                        <span className="font-mono text-[9px] text-slate-500 font-medium">
                          Sensor Cerdas · {inc.detectedAt} WIB
                        </span>
                        {inc.alertSent && (
                          <span className="font-mono text-[9px] text-success-600 dark:text-success-500 font-bold">
                            🔔 Diseminasi {inc.recipients} warga
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Citizen report form */}
            <Card>
              <CardContent>
                <div className="font-mono text-[10px] font-bold text-slate-500 dark:text-slate-400 tracking-wider mb-4">
                  ⬆ FORMULIR LAPORAN WARGA (INTEGRASI JAKI)
                </div>

                {submitted ? (
                  <div className="bg-success-50 dark:bg-success-500/10 border border-success-200 dark:border-success-500/30 p-5 rounded-xl text-center">
                    <div className="text-3xl mb-2">✅</div>
                    <div className="text-sm text-success-700 dark:text-success-400 font-bold">Laporan Diterima!</div>
                    <div className="text-[11px] text-success-600 dark:text-success-500/80 mt-1">Validasi CCTV sedang berjalan...</div>
                  </div>
                ) : (
                  <div className="flex flex-col gap-3">
                    <select
                      value={form.jenis}
                      onChange={e => setForm(f => ({ ...f, jenis: e.target.value }))}
                      className="w-full px-3 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs outline-none focus:border-primary-500 transition-colors"
                    >
                      <option value="">Jenis pelanggaran/insiden *</option>
                      <option>Parkir Liar</option>
                      <option>Kendaraan di Jalur Busway</option>
                      <option>Kendaraan di Jalur Sepeda</option>
                      <option>Kecelakaan</option>
                      <option>Kemacetan Parah</option>
                      <option>Lainnya</option>
                    </select>
                    <input
                      placeholder="Lokasi kejadian *"
                      value={form.lokasi}
                      onChange={e => setForm(f => ({ ...f, lokasi: e.target.value }))}
                      className="w-full px-3 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs outline-none focus:border-primary-500 transition-colors"
                    />
                    <textarea
                      placeholder="Deskripsi (opsional)"
                      value={form.deskripsi}
                      onChange={e => setForm(f => ({ ...f, deskripsi: e.target.value }))}
                      className="w-full px-3 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs outline-none focus:border-primary-500 transition-colors h-[70px] resize-none"
                    />
                    <div className="flex gap-2">
                      {['JAKI', 'WhatsApp', 'CRM'].map(ch => (
                        <button key={ch} onClick={() => setForm(f => ({ ...f, channel: ch }))} className={`flex-1 py-1.5 rounded-md border font-mono text-[10px] font-bold transition-colors ${
                          form.channel === ch 
                            ? 'border-success-500 bg-success-50 dark:bg-success-500/10 text-success-600 dark:text-success-400' 
                            : 'border-slate-200 dark:border-slate-700 bg-transparent text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                        }`}>
                          {ch}
                        </button>
                      ))}
                    </div>
                    <button onClick={handleSubmit} disabled={!form.jenis || !form.lokasi} className={`mt-2 py-3 rounded-lg font-outfit font-bold text-sm transition-all ${
                      form.jenis && form.lokasi 
                        ? 'bg-gradient-to-r from-success-600 to-primary-600 text-white shadow-md hover:shadow-lg' 
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-400 cursor-not-allowed'
                    }`}>
                      Kirim Laporan
                    </button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Recent reports */}
            <Card>
              <CardContent>
                <div className="font-mono text-[10px] font-bold text-slate-500 dark:text-slate-400 tracking-wider mb-4">
                  📋 LAPORAN TERBARU
                </div>
                <div className="flex flex-col gap-3">
                  {reports.slice(0, 3).map(rep => (
                    <div key={rep.id} className="bg-slate-50 dark:bg-slate-800/50 p-2.5 rounded-lg border-l-4 border-slate-200 dark:border-slate-700" style={{ borderLeftColor: statusColor[rep.status] }}>
                      <div className="flex justify-between items-start">
                        <span className="text-[11px] font-bold text-slate-900 dark:text-slate-100">{rep.type}</span>
                        <span className="font-mono text-[9px] font-bold" style={{ color: statusColor[rep.status] }}>
                          {statusLabel[rep.status]}
                        </span>
                      </div>
                      <div className="text-[10px] text-slate-500 mt-1">{rep.location} · {rep.channel} · {rep.reportedAt}</div>
                      <div className="text-[10px] text-slate-500 mt-0.5">{rep.action}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          {/* CCTV Live AI Stream Modal */}
          {activeCctvStream && (
            <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950/85 backdrop-blur-md p-4 animate-[fadeIn_0.2s_ease-out]">
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl animate-[scaleUp_0.2s_ease-out] flex flex-col">
                
                {/* Modal Header */}
                <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-900/50">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-2.5 w-2.5 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-success-500"></span>
                    </span>
                    <div>
                      <span className="font-outfit font-extrabold text-sm text-slate-900 dark:text-white uppercase tracking-tight">
                        AI SIMULASI — {activeCctvStream.name}
                      </span>
                      <div className="font-mono text-[9px] text-slate-500 mt-0.5">Demonstrasi deteksi pelanggaran berbasis AI</div>
                    </div>
                  </div>
                  <button 
                    onClick={() => setActiveCctvStream(null)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors font-mono text-xs font-bold"
                  >
                    ✕ TUTUP
                  </button>
                </div>

                {/* Modal Content */}
                <div className="p-6 flex flex-col gap-4">
                  <CctvCanvas camera={activeCctvStream} />
                  
                  {/* Telemetry/Log Section */}
                  <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-2xl border border-slate-200 dark:border-slate-800/80">
                    <div className="font-mono text-[9px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 border-b border-slate-200 dark:border-slate-800/60 pb-1 flex justify-between">
                      <span>📊 SIMULASI DETEKSI AI</span>
                      <span className="text-primary-500 font-bold">BERJALAN</span>
                    </div>
                    
                    <div className="font-mono text-[10px] text-slate-600 dark:text-slate-400 leading-relaxed flex flex-col gap-1 max-h-[80px] overflow-y-auto pr-1">
                      <div>[15:59:40] SISTEM: Menghubungkan ke CCTV ID {activeCctvStream.id}...</div>
                      <div>[15:59:41] INTEGRASI: Mengunduh bobot deteksi visi komputer...</div>
                      <div className="text-success-600 dark:text-success-400 font-bold">[15:59:42] AKTIF: Pipa analisis objek cerdas berjalan (FPS: 30.0)</div>
                      <div className="text-warning-600 dark:text-warning-400 font-semibold">[15:59:43] DETEKSI: Melakukan pemindaian insiden lalu lintas & diseminasi info otomatis...</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Live OpenCCTV Modal */}
          <LiveCCTVModal camera={activeLiveCam} onClose={() => setActiveLiveCam(null)} />

          </div>
        </div>

      </div>
      <style>{`@keyframes slideDown { from { transform: translateY(-100%); opacity: 0; } to { transform: translateY(0); opacity: 1; } }`}</style>
    </div>
  )
}

function LegendDot({ color, label }: any) {
  return (
    <div className="flex items-center gap-2">
      <div className="w-2 h-2 rounded-full shadow-sm" style={{ backgroundColor: color }} />
      <span className="font-mono text-[10px] font-medium text-slate-600 dark:text-slate-400">{label}</span>
    </div>
  )
}

