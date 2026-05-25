import { useState } from 'react'
import { MapContainer, TileLayer, CircleMarker, Popup, Tooltip } from 'react-leaflet'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip as RTooltip, ResponsiveContainer } from 'recharts'
import L from 'leaflet'
// @ts-ignore
import 'leaflet/dist/leaflet.css'
import { cctvCameras, hotspots, forecast24h, violationTypes, statsSummary } from '../data/jakartaData'
import StatCard from '../components/StatCard'
import { Card, CardContent } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'

// Fix leaflet default icon
// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
})

const riskColor = (score: any) => {
  if (score >= 85) return 'var(--color-danger-500)'
  if (score >= 70) return 'var(--color-warning-500)'
  return 'var(--color-success-500)'
}

const riskLabel = (score: any) => {
  if (score >= 85) return 'TINGGI'
  if (score >= 70) return 'SEDANG'
  return 'RENDAH'
}

export default function PredictPage() {
  const [, setSelectedHotspot] = useState<any>(null)
  const [, setSelectedCctv] = useState<any>(null)
  const [tab, setTab] = useState('hotspot')

  return (
    <div className="min-h-[calc(100vh-64px)] w-full pb-10 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors duration-300">
      
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-6 pt-8 pb-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-8 bg-primary-600 rounded-full" />
              <div>
                <h1 className="font-outfit font-bold text-2xl text-slate-900 dark:text-white tracking-tight">
                  JAGALANTAS <span className="text-primary-600 dark:text-primary-400">PREDICT</span>
                </h1>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-1">
                  Predictive Enforcement Intelligence · YOLOv11 + LSTM
                </p>
              </div>
            </div>
          </div>
          <Badge variant="danger" className="px-4 py-2 shadow-sm self-start md:self-auto">
            ⚠ 3 HOTSPOT KRITIS AKTIF
          </Badge>
        </div>

        {/* Stats Row */}
        <div className="flex flex-wrap gap-4 mb-8">
          <StatCard icon="🚨" label="Pelanggaran Hari Ini" value={statsSummary.totalViolationsToday.toLocaleString()} sub="↑ 12% dari kemarin" colorClass="text-danger-500" glow />
          <StatCard icon="📹" label="CCTV Online" value={`${statsSummary.cctvOnline}/${statsSummary.cctvTotal}`} sub="2 kamera offline" colorClass="text-primary-500" />
          <StatCard icon="🎯" label="Hotspot Aktif" value="8" sub="3 risiko tinggi" colorClass="text-warning-500" />
          <StatCard icon="👮" label="Petugas Deploy" value={statsSummary.officersDeployed} sub="AI recommendation" colorClass="text-success-500" />
          <StatCard icon="🗄️" label="E-TLE Records" value="6.1M" sub="Data historis" colorClass="text-primary-600" />
        </div>

        {/* Main Content: Map + Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-6">
          
          {/* Map Container */}
          <Card className="flex flex-col min-h-[500px]">
            {/* Tab toggle */}
            <div className="bg-slate-50 dark:bg-slate-900/50 px-4 py-3 flex items-center gap-2 border-b border-slate-200 dark:border-slate-800">
              {[
                { id: 'hotspot', label: '🔥 Hotspot Map' },
                { id: 'cctv', label: '📹 CCTV Map' },
              ].map(t => (
                <button 
                  key={t.id} 
                  onClick={() => setTab(t.id)} 
                  className={`px-4 py-1.5 rounded-md font-mono text-[11px] font-semibold transition-all ${
                    tab === t.id 
                      ? 'bg-primary-100 dark:bg-primary-500/20 text-primary-700 dark:text-primary-400' 
                      : 'text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  {t.label}
                </button>
              ))}
              <span className="ml-auto font-mono text-[10px] text-slate-400 font-medium hidden sm:block">
                Jakarta, Indonesia
              </span>
            </div>

            <div className="flex-1 relative z-0">
              <MapContainer
                center={[-6.2088, 106.8456]}
                zoom={12}
                className="h-full w-full min-h-[460px] light-map"
                zoomControl={true}
              >
                <TileLayer
                  attribution='&copy; OpenStreetMap'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {/* HOTSPOT CIRCLES */}
                {tab === 'hotspot' && hotspots.map(h => (
                  <CircleMarker
                    key={h.id}
                    center={[h.lat, h.lng]}
                    radius={h.riskScore / 8}
                    pathOptions={{
                      color: riskColor(h.riskScore),
                      fillColor: riskColor(h.riskScore),
                      fillOpacity: 0.4,
                      weight: 2,
                    }}
                    eventHandlers={{ click: () => setSelectedHotspot(h) }}
                  >
                    <Tooltip direction="top" permanent={h.riskScore >= 85} className="!bg-white dark:!bg-slate-800 !text-slate-900 dark:!text-white !border-slate-200 dark:!border-slate-700 !font-mono !text-[10px] !shadow-md">
                      <span>{riskLabel(h.riskScore)} · {h.riskScore}</span>
                    </Tooltip>
                    <Popup className="custom-popup">
                      <div className="min-w-[180px]">
                        <b style={{ color: riskColor(h.riskScore) }} className="text-sm">Risk Score: {h.riskScore}</b><br />
                        <span className="text-xs text-slate-600 font-medium">{h.type}</span><br />
                        <span className="text-[11px] text-slate-500 mt-1 block">Total: {h.violations} pelanggaran</span>
                        <span className="text-[11px] text-slate-500">Forecast 24j: {h.forecast24h}</span>
                      </div>
                    </Popup>
                  </CircleMarker>
                ))}

                {/* CCTV MARKERS */}
                {tab === 'cctv' && cctvCameras.map(cam => (
                  <CircleMarker
                    key={cam.id}
                    center={[cam.lat, cam.lng]}
                    radius={7}
                    pathOptions={{
                      color: cam.status === 'online' ? 'var(--color-primary-500)' : 'var(--color-danger-500)',
                      fillColor: cam.status === 'online' ? 'var(--color-primary-500)' : 'var(--color-danger-500)',
                      fillOpacity: 0.8, weight: 2,
                    }}
                    eventHandlers={{ click: () => setSelectedCctv(cam) }}
                  >
                    <Tooltip direction="top" className="!bg-white dark:!bg-slate-800 !text-slate-900 dark:!text-white !border-slate-200 dark:!border-slate-700 !font-mono !text-[10px] !shadow-md">
                      <span>📹 {cam.name}</span>
                    </Tooltip>
                    <Popup>
                      <div className="min-w-[160px]">
                        <b className="text-sm">📹 {cam.name}</b><br />
                        <span className="text-xs font-semibold mt-1 block" style={{ color: cam.status === 'online' ? 'var(--color-success-500)' : 'var(--color-danger-500)' }}>
                          ● {cam.status.toUpperCase()}
                        </span>
                        <span className="text-[11px] text-slate-500 block mt-1">Zona: {cam.zone}</span>
                      </div>
                    </Popup>
                  </CircleMarker>
                ))}
              </MapContainer>
            </div>

            {/* Legend */}
            <div className="bg-slate-50 dark:bg-slate-900/50 px-4 py-3 flex flex-wrap gap-4 border-t border-slate-200 dark:border-slate-800">
              {tab === 'hotspot' ? (
                <>
                  <LegendDot color="var(--color-danger-500)" label="Tinggi (≥85)" />
                  <LegendDot color="var(--color-warning-500)" label="Sedang (70-84)" />
                  <LegendDot color="var(--color-success-500)" label="Rendah (<70)" />
                </>
              ) : (
                <>
                  <LegendDot color="var(--color-primary-500)" label="Online" />
                  <LegendDot color="var(--color-danger-500)" label="Offline" />
                </>
              )}
            </div>
          </Card>

          {/* Sidebar Widgets */}
          <div className="flex flex-col gap-6">

            {/* Forecast Chart */}
            <Card>
              <CardContent>
                <div className="font-mono text-[10px] font-bold text-slate-500 dark:text-slate-400 tracking-wider mb-4">
                  📈 PREDIKSI PELANGGARAN 24 JAM
                </div>
                <ResponsiveContainer width="100%" height={180}>
                  <AreaChart data={forecast24h} margin={{ top: 0, right: 0, bottom: 0, left: -25 }}>
                    <defs>
                      <linearGradient id="predGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="var(--color-primary-500)" stopOpacity={0.4} />
                        <stop offset="95%" stopColor="var(--color-primary-500)" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#CBD5E1" className="dark:stroke-slate-700" vertical={false} />
                    <XAxis dataKey="jam" tick={{ fontSize: 9, fontFamily: 'monospace' }} stroke="#94A3B8" tickLine={false} axisLine={false} />
                    <YAxis tick={{ fontSize: 9, fontFamily: 'monospace' }} stroke="#94A3B8" tickLine={false} axisLine={false} />
                    <RTooltip 
                      contentStyle={{ borderRadius: 8, fontSize: 11, border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} 
                      itemStyle={{ color: '#1E293B', fontWeight: 600 }}
                    />
                    <Area type="monotone" dataKey="prediksi" stroke="var(--color-primary-500)" fill="url(#predGrad)" strokeWidth={3} name="Prediksi" dot={false} />
                    <Area type="monotone" dataKey="aktual" stroke="var(--color-success-500)" fill="none" strokeWidth={2} name="Aktual" strokeDasharray="4 2" dot={false} />
                  </AreaChart>
                </ResponsiveContainer>
                <div className="flex gap-4 mt-3 pl-6">
                  <LegendDot color="var(--color-primary-500)" label="Prediksi AI" />
                  <LegendDot color="var(--color-success-500)" label="Aktual" />
                </div>
              </CardContent>
            </Card>

            {/* Violation Types */}
            <Card>
              <CardContent>
                <div className="font-mono text-[10px] font-bold text-slate-500 dark:text-slate-400 tracking-wider mb-4">
                  🏷️ TIPE PELANGGARAN BULAN INI
                </div>
                <div className="flex flex-col gap-4">
                  {violationTypes.map((v, i) => (
                    <div key={i}>
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-xs font-medium text-slate-700 dark:text-slate-300">{v.type}</span>
                        <span className="font-mono text-[11px] font-semibold text-slate-900 dark:text-white">{v.count.toLocaleString()}</span>
                      </div>
                      <div className="bg-slate-100 dark:bg-slate-800 rounded-full h-1.5 overflow-hidden">
                        <div 
                          className="h-full rounded-full transition-all duration-1000 ease-out" 
                          style={{ 
                            width: `${v.pct}%`, 
                            backgroundColor: ['var(--color-danger-500)','var(--color-warning-500)','var(--color-primary-500)','var(--color-success-500)'][i] 
                          }} 
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* AI Deployment Recommendation */}
            <Card className="border-success-200 dark:border-success-500/20 bg-success-50 dark:bg-success-500/5">
              <CardContent>
                <div className="font-mono text-[10px] font-bold text-success-600 dark:text-success-400 tracking-wider mb-4 flex items-center gap-2">
                  <span>🤖</span> AI DEPLOYMENT RECOMMENDATION
                </div>
                <div className="flex flex-col gap-3">
                  {[
                    { loc: 'Jl. Sudirman - Semanggi', action: '3 petugas + 1 E-TLE mobile', risk: 92 },
                    { loc: 'Mangga Dua - Pasar Pagi', action: '2 petugas + jukir', risk: 91 },
                    { loc: 'Jl. Thamrin - BNI', action: '2 petugas busway', risk: 88 },
                  ].map((r, i) => (
                    <div key={i} className="bg-white dark:bg-slate-900 p-3 rounded-xl border border-slate-100 dark:border-slate-800 flex items-start gap-3 shadow-sm">
                      <div className="w-1 h-full min-h-[30px] rounded-full self-stretch" style={{ backgroundColor: riskColor(r.risk) }} />
                      <div className="flex-1">
                        <div className="text-[11px] font-bold text-slate-900 dark:text-white leading-tight">{r.loc}</div>
                        <div className="text-[11px] font-medium text-success-600 dark:text-success-400 mt-0.5">→ {r.action}</div>
                      </div>
                      <Badge variant="outline" style={{ borderColor: riskColor(r.risk), color: riskColor(r.risk) }}>
                        R:{r.risk}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
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

