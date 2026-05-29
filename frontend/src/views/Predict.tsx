import { useState } from 'react'
import { MapContainer, TileLayer, CircleMarker, Marker, Popup, Tooltip } from 'react-leaflet'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip as RTooltip, ResponsiveContainer } from 'recharts'
import L from 'leaflet'
// @ts-ignore
import 'leaflet/dist/leaflet.css'
import { cctvCameras, hotspots, forecast24h, violationTypes, statsSummary } from '../data/jakartaData'
import StatCard from '../components/StatCard'
import { Card, CardContent } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import { useOpenCCTV } from '../hooks/useOpenCCTV'
import { LiveCCTVModal, CamMapPopup } from '../components/LiveCCTVModal'
import type { OpenCCTVCamera } from '../hooks/useOpenCCTV'

// Fix leaflet default icon
// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
})

import React, { useRef, useEffect } from 'react'

// Canvas Animation for simulating computer vision object detection in real-time
export function CctvCanvas({ camera }: { camera: any }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    
    // Define vehicles with smooth speeds and positions
    const lanes = [95, 160, 225]
    const vehicles = [
      { id: 1, lane: 0, y: 30, speed: 1.4, type: 'Mobil', color: '#1C5DDC', confidence: 96.2, violates: false, violationType: '' },
      { id: 2, lane: 1, y: 110, speed: 1.1, type: 'Busway', color: '#FEB52B', confidence: 98.4, violates: false, violationType: '' },
      { id: 3, lane: 2, y: -40, speed: 2.2, type: 'Motor', color: '#A78BFA', confidence: 91.5, violates: false, violationType: '' },
    ]

    let timer = 0

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Asphalt road background
      ctx.fillStyle = '#0f172a'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      // Sidewalks
      ctx.fillStyle = '#334155'
      ctx.fillRect(0, 0, 45, canvas.height)
      ctx.fillRect(canvas.width - 45, 0, 45, canvas.height)
      
      // Trees/plants on sidewalks
      ctx.fillStyle = '#115e59'
      ctx.fillRect(15, 30, 15, 20)
      ctx.fillRect(12, 110, 20, 20)
      ctx.fillRect(15, 210, 15, 20)
      ctx.fillRect(canvas.width - 30, 50, 15, 20)
      ctx.fillRect(canvas.width - 32, 150, 20, 20)
      
      // Road boundaries
      ctx.strokeStyle = '#475569'
      ctx.lineWidth = 4
      ctx.beginPath()
      ctx.moveTo(45, 0)
      ctx.lineTo(45, canvas.height)
      ctx.moveTo(canvas.width - 45, 0)
      ctx.lineTo(canvas.width - 45, canvas.height)
      ctx.stroke()
      
      // Lane markings
      ctx.strokeStyle = '#64748b'
      ctx.setLineDash([12, 12])
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.moveTo(125, 0)
      ctx.lineTo(125, canvas.height)
      ctx.moveTo(195, 0)
      ctx.lineTo(195, canvas.height)
      ctx.stroke()
      ctx.setLineDash([])

      // Lane labels (Busway/Bike Lane)
      const isBuswayCam = camera.name.toLowerCase().includes('busway') || camera.id === 'c13' || camera.id === 'c14'
      if (isBuswayCam) {
        ctx.fillStyle = 'rgba(252, 53, 28, 0.08)'
        ctx.fillRect(195, 0, 80, canvas.height)
        
        ctx.font = 'bold 8px monospace'
        ctx.fillStyle = 'rgba(252, 53, 28, 0.4)'
        ctx.save()
        ctx.translate(210, 150)
        ctx.rotate(-Math.PI / 2)
        ctx.fillText('LAJUR KHUSUS BUSWAY', -60, 0)
        ctx.restore()
      } else {
        ctx.fillStyle = 'rgba(25, 174, 93, 0.06)'
        ctx.fillRect(45, 0, 80, canvas.height)
        ctx.font = 'bold 8px monospace'
        ctx.fillStyle = 'rgba(25, 174, 93, 0.3)'
        ctx.save()
        ctx.translate(60, 150)
        ctx.rotate(-Math.PI / 2)
        ctx.fillText('JALUR SEPEDA KOTA', -50, 0)
        ctx.restore()
      }

      // Draw parked car (simulating Parkir Liar) if camera supports it
      const hasParkedViolation = !isBuswayCam && (camera.id === 'c01' || camera.id === 'c05' || camera.id === 'c08' || camera.id === 'c12')
      if (hasParkedViolation) {
        const carX = 25
        const carY = 130
        
        // Draw static car
        ctx.fillStyle = '#e11d48'
        ctx.fillRect(carX - 8, carY - 14, 16, 28)
        ctx.fillStyle = '#020617'
        ctx.fillRect(carX - 9, carY - 11, 2, 5)
        ctx.fillRect(carX + 7, carY - 11, 2, 5)
        ctx.fillRect(carX - 9, carY + 6, 2, 5)
        ctx.fillRect(carX + 7, carY + 6, 2, 5)
        
        // AI detection box
        ctx.strokeStyle = '#FC351C'
        ctx.lineWidth = 1.5
        ctx.strokeRect(carX - 11, carY - 17, 22, 34)
        
        // Blinking alert & ticking timer
        timer++
        const durationSec = Math.floor(timer / 30)
        const minStr = Math.floor(durationSec / 60)
        const secStr = durationSec % 60
        
        ctx.fillStyle = '#FC351C'
        ctx.font = 'bold 7px monospace'
        ctx.fillText('⚠️ PARKIR LIAR [98%]', carX - 11, carY - 31)
        
        // ANPR & Duration labels
        ctx.fillStyle = '#ffffff'
        ctx.font = '7px monospace'
        ctx.fillText(`ANPR: B 1408 SQA`, carX - 11, carY - 23)
        ctx.fillText(`DURASI: ${minStr}m ${secStr}s`, carX - 11, carY - 18)
        
        if (Math.floor(timer / 12) % 2 === 0) {
          ctx.fillStyle = 'rgba(252, 53, 28, 0.12)'
          ctx.fillRect(carX - 14, carY - 35, 28, 58)
        }
      }

      // Draw moving vehicles
      vehicles.forEach(v => {
        v.y += v.speed
        if (v.y > canvas.height + 40) {
          v.y = -40
          v.speed = 1.2 + Math.random() * 1.8
          v.confidence = 90 + Math.random() * 9
          if (isBuswayCam && v.type === 'Motor' && Math.random() > 0.4) {
            v.violates = true
            v.violationType = 'STERILISASI JALUR'
            v.lane = 2
          } else if (!isBuswayCam && v.type === 'Mobil' && Math.random() > 0.7) {
            v.violates = true
            v.violationType = 'PARKIR LIAR'
            v.lane = 0
            v.speed = 0.4
          } else {
            v.violates = false
            v.violationType = ''
            v.lane = Math.floor(Math.random() * 3)
          }
        }

        const x = lanes[v.lane]
        
        // Wheels
        ctx.fillStyle = '#020617'
        ctx.fillRect(x - 11, v.y - 11, 2, 5)
        ctx.fillRect(x + 9, v.y - 11, 2, 5)
        ctx.fillRect(x - 11, v.y + 6, 2, 5)
        ctx.fillRect(x + 9, v.y + 6, 2, 5)

        // Draw body
        ctx.fillStyle = v.color
        if (v.type === 'Motor') {
          ctx.fillRect(x - 3, v.y - 8, 6, 16)
          ctx.fillStyle = '#eab308'
          ctx.beginPath()
          ctx.arc(x, v.y, 3.5, 0, Math.PI * 2)
          ctx.fill()
        } else if (v.type === 'Busway') {
          ctx.fillRect(x - 9, v.y - 18, 18, 36)
          ctx.fillStyle = '#ffffff'
          ctx.fillRect(x - 7, v.y - 13, 14, 5)
        } else {
          ctx.fillRect(x - 8, v.y - 13, 16, 26)
          ctx.fillStyle = '#475569'
          ctx.fillRect(x - 6, v.y - 7, 12, 14)
        }

        // Check if actually violating the designated lane
        const isViolatingNow = v.violates && (isBuswayCam ? v.lane === 2 : v.lane === 0)
        
        ctx.strokeStyle = isViolatingNow ? '#FC351C' : '#19AE5D'
        ctx.lineWidth = 1.5
        const padX = v.type === 'Busway' ? 13 : 11
        const padY = v.type === 'Busway' ? 22 : 16
        ctx.strokeRect(x - padX, v.y - padY, padX * 2, padY * 2)

        ctx.fillStyle = isViolatingNow ? '#FC351C' : '#19AE5D'
        ctx.font = 'bold 7px monospace'
        const label = isViolatingNow ? `⚠️ [!] ${v.violationType}` : `${v.type} [${Math.floor(v.confidence)}%]`
        ctx.fillText(label, x - padX, v.y - padY - 4)

        // Draw dynamic plate number next to offending vehicles
        if (isViolatingNow) {
          ctx.fillStyle = '#ffffff'
          ctx.font = 'bold 7px monospace'
          ctx.fillText(`ANPR: B ${1000 + v.id * 312} TQR`, x + padX + 3, v.y - 5)
          ctx.fillText(`DURASI: 0m 02s`, x + padX + 3, v.y + 3)
        }
      })

      // HUD static overlay
      ctx.fillStyle = '#ffffff'
      ctx.font = 'bold 8px monospace'
      
      // Flashing green dot for camera active
      ctx.fillStyle = '#22c55e'
      ctx.beginPath()
      ctx.arc(58, 25, 3.5, 0, Math.PI * 2)
      ctx.fill()
      
      ctx.fillStyle = '#ffffff'
      ctx.fillText('LIVE AI RECOGNITION ACTIVE', 68, 28)
      
      ctx.font = '7px monospace'
      ctx.fillText(`KAMERA: ${camera.name.toUpperCase()}`, 52, 40)
      ctx.fillText(`FPS: 30.0 | INFERENCE LATENCY: 4.8ms`, 52, 50)

      // Time stamp in Right Top
      const now = new Date()
      const timeStr = now.toLocaleDateString('id-ID') + ' ' + now.toLocaleTimeString('id-ID') + ' WIB'
      ctx.fillText(timeStr, canvas.width - 150, 28)

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [camera])

  return (
    <div className="relative border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden bg-slate-950 aspect-video w-full flex items-center justify-center shadow-lg">
      <canvas 
        ref={canvasRef} 
        width={320} 
        height={180} 
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-2 left-2 bg-slate-900/90 text-success-400 font-mono text-[8px] px-2 py-0.5 rounded border border-success-500/20 tracking-wider">
        SISTEM VISI KOMPUTER PEMPROV DKI
      </div>
    </div>
  )
}

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

  // OpenCCTV Live API
  const { cameras: liveCameras, activeCameras, inactiveCameras, loading: cctvLoading, error: cctvError, lastUpdated, refetch, inferZone } = useOpenCCTV()

  // Simulator States
  const [simPetugas, setSimPetugas] = useState(18)
  const [simEtle, setSimEtle] = useState(5)
  const [simFokus, setSimFokus] = useState('Seimbang')
  const [isSimulating, setIsSimulating] = useState(false)
  const [simCompleted, setSimCompleted] = useState(false)
  const [simLog, setSimLog] = useState('')
  const [simResult, setSimResult] = useState<any>({ reduction: 0, responseTime: 0, efficiency: 0, dist: {} })

  // Active CCTV Stream Modal State (legacy sim)
  const [activeCctvStream, setActiveCctvStream] = useState<any>(null)
  // Live OpenCCTV Modal
  const [activeLiveCam, setActiveLiveCam] = useState<OpenCCTVCamera | null>(null)
  // Camera grid filter
  const [camFilter, setCamFilter] = useState<'all' | 'active' | 'inactive'>('active')

  const runSimulation = () => {
    setIsSimulating(true)
    setSimCompleted(false)
    
    const logs = [
      'Menganalisis matriks volume kendaraan...',
      'Mengoptimalkan koordinat patroli taktis petugas...',
      'Mengkalkulasi tingkat kerawanan wilayah...',
      'Simulasi selesai! Menyusun laporan penugasan eksekutif...'
    ]
    
    let i = 0
    setSimLog(logs[0])
    const interval = setInterval(() => {
      i++
      if (i < logs.length) {
        setSimLog(logs[i])
      } else {
        clearInterval(interval)
        
        let baseRed = 0
        let baseResp = 25
        let baseEff = 15
        let customDist: any = {}

        if (simFokus === 'Seimbang') {
          baseRed = 32 + Math.round(simPetugas * 0.4 + simEtle * 0.8)
          baseResp = Math.max(8, 24 - Math.round(simPetugas * 0.2 + simEtle * 0.5))
          baseEff = Math.min(94, 20 + Math.round(simPetugas * 0.6 + simEtle * 1.2))
          customDist = { Pst: 30, Sel: 25, Tim: 20, Utr: 15, Bar: 10 }
        } else if (simFokus === 'Parkir Liar') {
          baseRed = 40 + Math.round(simPetugas * 0.35 + simEtle * 1.0)
          baseResp = Math.max(9, 22 - Math.round(simPetugas * 0.18 + simEtle * 0.6))
          baseEff = Math.min(96, 25 + Math.round(simPetugas * 0.5 + simEtle * 1.5))
          customDist = { Pst: 35, Sel: 30, Tim: 15, Utr: 12, Bar: 8 }
        } else { 
          baseRed = 35 + Math.round(simPetugas * 0.5 + simEtle * 0.6)
          baseResp = Math.max(7, 26 - Math.round(simPetugas * 0.25 + simEtle * 0.4))
          baseEff = Math.min(92, 18 + Math.round(simPetugas * 0.7 + simEtle * 1.0))
          customDist = { Pst: 25, Sel: 20, Tim: 30, Utr: 15, Bar: 10 }
        }

        setSimResult({
          reduction: Math.min(95, baseRed),
          responseTime: baseResp,
          efficiency: baseEff,
          dist: customDist
        })
        setIsSimulating(false)
        setSimCompleted(true)
      }
    }, 400)
  }

  return (
    <div className="min-h-[calc(100vh-64px)] w-full pb-10 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors duration-300">
      
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-6 pt-8 pb-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-8 bg-primary-600 rounded-full animate-pulse" />
              <div>
                <h1 className="font-outfit font-bold text-2xl text-slate-900 dark:text-white tracking-tight">
                  JAGALANTAS <span className="text-primary-600 dark:text-primary-400">PREDIKTIF</span>
                </h1>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-sans font-medium mt-1">
                  Sistem Analisis Prediktif Pelanggaran & Peta Kerawanan Lalu Lintas DKI Jakarta
                </p>
              </div>
            </div>
          </div>
          <Badge variant="danger" className="px-4 py-2 shadow-md self-start md:self-auto border border-danger-500/20 bg-danger-500/10 text-danger-600 dark:text-danger-400 animate-pulse">
            ⚠️ 3 WILAYAH RAWAN KRITIS AKTIF
          </Badge>
        </div>

        {/* Stats Row */}
        <div className="flex flex-wrap gap-4 mb-8">
          <StatCard icon="🚨" label="Pelanggaran Hari Ini" value={statsSummary.totalViolationsToday.toLocaleString()} sub="↑ 12% dari kemarin" colorClass="text-danger-500" glow />
          <StatCard
            icon="📹"
            label="CCTV Live (OpenCCTV)"
            value={cctvLoading ? '...' : `${activeCameras.length}/${liveCameras.length}`}
            sub={cctvLoading ? 'Memuat data...' : cctvError ? 'Gagal memuat' : `${inactiveCameras.length} kamera offline`}
            colorClass="text-primary-500"
          />
          <StatCard icon="🎯" label="Titik Kerawanan" value="8" sub="3 risiko tinggi" colorClass="text-warning-500" />
          <StatCard icon="👮" label="Petugas Bersiap" value={statsSummary.officersDeployed} sub="Rekomendasi rute patroli" colorClass="text-success-500" />
          <StatCard icon="🗄️" label="Data Historis E-TLE" value="6.1M" sub="Rekaman penindakan" colorClass="text-primary-600" />
        </div>

        {/* Main Content: Map + Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-6">
          
          {/* Map Container */}
          <Card className="flex flex-col min-h-[500px]">
            {/* Tab toggle */}
            <div className="bg-slate-50 dark:bg-slate-900/50 px-4 py-3 flex items-center gap-2 border-b border-slate-200 dark:border-slate-800">
              {[
                { id: 'hotspot', label: '🔥 Peta Titik Kerawanan' },
                { id: 'cctv', label: '📹 CCTV Simulasi' },
                { id: 'live', label: '🔴 LIVE OpenCCTV' },
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
                      <span>{riskLabel(h.riskScore)} · {h.riskScore}%</span>
                    </Tooltip>
                    <Popup className="custom-popup">
                      <div className="min-w-[185px] p-0.5">
                        <b style={{ color: riskColor(h.riskScore) }} className="text-sm font-outfit font-bold">Skor Kerawanan: {h.riskScore}%</b><br />
                        <span className="text-xs text-slate-700 dark:text-slate-200 font-medium block mt-1 leading-tight">{h.type}</span>
                        <span className="text-[11px] text-slate-500 mt-1 block">Total: {h.violations} pelanggaran</span>
                        <span className="text-[11px] text-slate-500 block">Proyeksi 24j: {h.forecast24h}</span>
                        
                        <button
                          onClick={() => {
                            const matchingCam = cctvCameras.find(c => c.name.split(' - ')[0] === h.type.split(' + ')[0]) || cctvCameras[0]
                            setActiveCctvStream(matchingCam)
                          }}
                          className="mt-2.5 w-full py-1.5 px-2.5 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-outfit font-bold text-[10px] rounded-lg transition-all shadow-sm hover:shadow text-center flex items-center justify-center gap-1.5"
                        >
                          📹 Analisis AI Live Stream
                        </button>
                      </div>
                    </Popup>
                  </CircleMarker>
                ))}

                {/* CCTV SIMULASI MARKERS */}
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
                      <div className="min-w-[170px] p-0.5">
                        <b className="text-sm font-outfit font-bold">📹 CCTV {cam.name}</b><br />
                        <span className="text-[10px] font-bold mt-1.5 inline-flex items-center gap-1 px-2 py-0.5 rounded-full" style={{ 
                          backgroundColor: cam.status === 'online' ? 'rgba(25, 174, 93, 0.1)' : 'rgba(252, 53, 28, 0.1)',
                          color: cam.status === 'online' ? 'var(--color-success-500)' : 'var(--color-danger-500)' 
                        }}>
                          ● {cam.status === 'online' ? 'AKTIF / TERKONEKSI' : 'OFFLINE'}
                        </span>
                        <span className="text-[11px] text-slate-500 block mt-1">Wilayah: Jakarta {cam.zone}</span>
                        
                        {cam.status === 'online' ? (
                          <button
                            onClick={() => setActiveCctvStream(cam)}
                            className="mt-2.5 w-full py-1.5 px-2 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-outfit font-bold text-[10px] rounded-lg transition-all shadow-sm hover:shadow text-center flex items-center justify-center gap-1.5"
                          >
                            🎬 Lihat AI Simulasi
                          </button>
                        ) : (
                          <div className="text-[10px] text-danger-500 mt-2 font-semibold font-mono">❌ Jaringan CCTV Terputus</div>
                        )}
                      </div>
                    </Popup>
                  </CircleMarker>
                ))}

                {/* LIVE OPENCCTV MARKERS — custom camera icons with thumbnail popup */}
                {tab === 'live' && (camFilter === 'all' ? liveCameras : camFilter === 'active' ? activeCameras : inactiveCameras).map(cam => {
                  const isActive = cam.active === 1 && cam.consecutive_failures === 0
                  
                  // Custom DivIcon: camera icon circle like atcsindonesia.com
                  const camIcon = L.divIcon({
                    className: '',
                    html: `
                      <div style="
                        width:28px; height:28px;
                        background:${isActive ? '#22c55e' : '#475569'};
                        border:2px solid ${isActive ? '#15803d' : '#334155'};
                        border-radius:50%;
                        display:flex; align-items:center; justify-content:center;
                        box-shadow:0 2px 8px rgba(0,0,0,0.4);
                        cursor:pointer;
                        transition:transform 0.15s;
                      ">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                          <path d="M15 10l4.553-2.276A1 1 0 0121 8.723v6.554a1 1 0 01-1.447.894L15 14v-4zM3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"/>
                        </svg>
                      </div>`,
                    iconSize: [28, 28],
                    iconAnchor: [14, 14],
                    popupAnchor: [0, -16],
                  })

                  return (
                    <Marker
                      key={cam.id}
                      position={[cam.lat, cam.lng]}
                      icon={camIcon}
                    >
                      <Tooltip direction="top" className="!bg-slate-900 !text-white !border-slate-700 !font-mono !text-[9px] !shadow-lg">
                        <span>{isActive ? '🟢' : '⚫'} {cam.name}</span>
                      </Tooltip>
                      <Popup
                        className="cctv-popup"
                        maxWidth={240}
                        minWidth={220}
                      >
                        <CamMapPopup
                          camera={cam}
                          onOpenFull={() => setActiveLiveCam(cam)}
                        />
                      </Popup>
                    </Marker>
                  )
                })}
              </MapContainer>
            </div>

            {/* Legend */}
            <div className="bg-slate-50 dark:bg-slate-900/50 px-4 py-3 flex flex-wrap gap-4 items-center border-t border-slate-200 dark:border-slate-800">
              {tab === 'hotspot' ? (
                <>
                  <LegendDot color="var(--color-danger-500)" label="Tinggi (≥85)" />
                  <LegendDot color="var(--color-warning-500)" label="Sedang (70-84)" />
                  <LegendDot color="var(--color-success-500)" label="Rendah (<70)" />
                </>
              ) : tab === 'live' ? (
                <>
                  <LegendDot color="#22c55e" label="Live Aktif" />
                  <LegendDot color="#64748b" label="Offline" />
                  <span className="font-mono text-[9px] text-slate-400 ml-auto">
                    {cctvLoading ? '⟳ Memuat...' : cctvError ? '❌ Error' : `${liveCameras.length} kamera · diperbarui ${lastUpdated?.toLocaleTimeString('id-ID') ?? '-'}`}
                  </span>
                  <button onClick={refetch} className="font-mono text-[9px] text-primary-500 hover:underline">↻ Refresh</button>
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

            {/* Live OpenCCTV Camera Grid - shown only on live tab */}
            {tab === 'live' && (
              <Card className="border-success-200 dark:border-success-500/20">
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="font-mono text-[10px] font-bold text-success-600 dark:text-success-400 tracking-wider flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-success-500" />
                      </span>
                      KAMERA LIVE — OpenCCTV.org
                    </div>
                    <div className="flex gap-1">
                      {(['all', 'active', 'inactive'] as const).map(f => (
                        <button
                          key={f}
                          onClick={() => setCamFilter(f)}
                          className={`px-2 py-0.5 rounded font-mono text-[9px] font-bold transition-all ${
                            camFilter === f
                              ? 'bg-success-100 dark:bg-success-500/20 text-success-700 dark:text-success-400'
                              : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'
                          }`}
                        >
                          {f === 'all' ? 'Semua' : f === 'active' ? '🟢 Live' : '⚫ Offline'}
                        </button>
                      ))}
                    </div>
                  </div>

                  {cctvLoading ? (
                    <div className="flex flex-col items-center justify-center py-8 gap-3">
                      <div className="w-7 h-7 border-2 border-success-500/30 border-t-success-500 rounded-full animate-spin" />
                      <div className="font-mono text-[10px] text-slate-500 animate-pulse">Memuat kamera Jakarta...</div>
                    </div>
                  ) : cctvError ? (
                    <div className="flex flex-col items-center justify-center py-6 gap-2 text-center">
                      <div className="text-2xl">📡</div>
                      <div className="font-mono text-[10px] text-danger-500 font-bold">Gagal memuat data kamera</div>
                      <button onClick={refetch} className="font-mono text-[9px] text-primary-500 underline">Coba lagi</button>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-2 max-h-[360px] overflow-y-auto pr-1">
                      {(camFilter === 'all' ? liveCameras : camFilter === 'active' ? activeCameras : inactiveCameras)
                        .map(cam => {
                          const isActive = cam.active === 1 && cam.consecutive_failures === 0
                          return (
                            <button
                              key={cam.id}
                              onClick={() => setActiveLiveCam(cam)}
                              className={`w-full text-left p-2.5 rounded-xl border transition-all group hover:shadow-sm ${
                                isActive
                                  ? 'border-success-200 dark:border-success-500/20 bg-success-50/50 dark:bg-success-500/5 hover:border-success-400 dark:hover:border-success-500/40'
                                  : 'border-slate-100 dark:border-slate-800/60 bg-slate-50/50 dark:bg-slate-800/20 hover:border-slate-300 dark:hover:border-slate-700'
                              }`}
                            >
                              <div className="flex items-start justify-between gap-2">
                                <div className="min-w-0 flex-1">
                                  <div className="text-[11px] font-bold text-slate-900 dark:text-slate-100 truncate leading-tight">
                                    {cam.name}
                                  </div>
                                  <div className="font-mono text-[9px] text-slate-500 mt-0.5 flex items-center gap-1.5">
                                    <span>{inferZone(cam.lat, cam.lng)}</span>
                                    <span>·</span>
                                    <span>{cam.source}</span>
                                    <span>·</span>
                                    <span>{cam.feed_type.toUpperCase()}</span>
                                  </div>
                                </div>
                                <div className="flex items-center gap-1.5 flex-shrink-0">
                                  <span className={`font-mono text-[8px] font-bold px-1.5 py-0.5 rounded-full ${
                                    isActive
                                      ? 'bg-success-100 dark:bg-success-500/20 text-success-600 dark:text-success-400'
                                      : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
                                  }`}>
                                    {isActive ? '● LIVE' : '○ OFF'}
                                  </span>
                                  <span className="text-slate-300 dark:text-slate-700 group-hover:text-primary-400 dark:group-hover:text-primary-500 transition-colors text-xs">▶</span>
                                </div>
                              </div>
                            </button>
                          )
                        })}
                      {liveCameras.length === 0 && (
                        <div className="text-center py-4 font-mono text-[10px] text-slate-400">
                          Tidak ada kamera ditemukan
                        </div>
                      )}
                    </div>
                  )}

                  <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between">
                    <span className="font-mono text-[9px] text-slate-400">
                      Sumber: opencctv.org · DKI Jakarta
                    </span>
                    <a
                      href="https://opencctv.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[9px] text-primary-500 hover:underline"
                    >
                      Lihat semua →
                    </a>
                  </div>
                </CardContent>
              </Card>
            )}

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

            {/* Dishub Smart Simulator Panel */}
            <Card className="border-primary-200 dark:border-primary-500/20 bg-primary-50/30 dark:bg-primary-500/5 shadow-sm">
              <CardContent>
                <div className="font-mono text-[10px] font-bold text-primary-600 dark:text-primary-400 tracking-wider mb-4 flex items-center gap-2">
                  <span>🎮</span> SIMULATOR ALOKASI PETUGAS & E-TLE (DISHUB SMART SIMULATOR)
                </div>
                
                <div className="flex flex-col gap-3">
                  {/* Slider 1: Petugas */}
                  <div>
                    <div className="flex justify-between items-center text-[11px] font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      <span>Personel Lapangan:</span>
                      <span className="font-mono text-primary-600 dark:text-primary-400 font-bold">{simPetugas} Petugas</span>
                    </div>
                    <input 
                      type="range" 
                      min="5" 
                      max="60" 
                      value={simPetugas} 
                      onChange={(e) => {
                        setSimPetugas(parseInt(e.target.value))
                        setSimCompleted(false)
                      }}
                      className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-primary-500" 
                    />
                  </div>

                  {/* Slider 2: E-TLE */}
                  <div>
                    <div className="flex justify-between items-center text-[11px] font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      <span>E-TLE Mobile Aktif:</span>
                      <span className="font-mono text-primary-600 dark:text-primary-400 font-bold">{simEtle} Kamera</span>
                    </div>
                    <input 
                      type="range" 
                      min="1" 
                      max="15" 
                      value={simEtle} 
                      onChange={(e) => {
                        setSimEtle(parseInt(e.target.value))
                        setSimCompleted(false)
                      }}
                      className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-primary-500" 
                    />
                  </div>

                  {/* Dropdown: Strategi */}
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 dark:text-slate-300 mb-1">Fokus Strategi Penjagaan:</label>
                    <select
                      value={simFokus}
                      onChange={(e) => {
                        setSimFokus(e.target.value)
                        setSimCompleted(false)
                      }}
                      className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs outline-none focus:border-primary-500 transition-colors"
                    >
                      <option value="Seimbang">Prioritas Seimbang (Seluruh Jakarta)</option>
                      <option value="Parkir Liar">Prioritas Kawasan Parkir Liar</option>
                      <option value="Busway">Prioritas Sterilisasi Jalur Busway</option>
                    </select>
                  </div>

                  <button 
                    onClick={runSimulation}
                    disabled={isSimulating}
                    className={`mt-2 py-2.5 rounded-lg font-outfit font-bold text-xs transition-all flex items-center justify-center gap-2 ${
                      isSimulating 
                        ? 'bg-slate-200 dark:bg-slate-800 text-slate-400 cursor-not-allowed' 
                        : 'bg-primary-600 hover:bg-primary-700 text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0'
                    }`}
                  >
                    {isSimulating ? 'Memproses Simulasi...' : 'Jalankan Simulasi Pengerahan'}
                  </button>

                  {/* Loading Status */}
                  {isSimulating && (
                    <div className="bg-slate-100 dark:bg-slate-900/50 p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 text-center animate-pulse">
                      <div className="text-[10px] font-mono text-primary-600 dark:text-primary-400 font-semibold">{simLog}</div>
                    </div>
                  )}

                  {/* Results */}
                  {simCompleted && !isSimulating && (
                    <div className="bg-white dark:bg-slate-900/60 p-3 rounded-xl border border-slate-100 dark:border-slate-800/80 flex flex-col gap-2.5 shadow-inner animate-[scaleUp_0.2s_ease-out]">
                      <div className="text-[10px] font-mono text-success-600 dark:text-success-400 font-bold tracking-wider uppercase border-b border-slate-100 dark:border-slate-800 pb-1.5 flex justify-between items-center">
                        <span>✓ Hasil Optimasi Penugasan</span>
                        <span className="text-[9px] bg-success-500/10 px-1.5 py-0.5 rounded text-success-600 dark:text-success-400 font-bold animate-pulse">Efektif</span>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-2">
                        <div className="text-center p-2 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-100 dark:border-slate-800/40">
                          <div className="text-[9px] text-slate-500 dark:text-slate-400 font-medium">Reduksi Rawan</div>
                          <div className="text-sm font-extrabold text-danger-500 font-mono mt-0.5">-{simResult.reduction}%</div>
                        </div>
                        <div className="text-center p-2 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-100 dark:border-slate-800/40">
                          <div className="text-[9px] text-slate-500 dark:text-slate-400 font-medium">Waktu Respon</div>
                          <div className="text-sm font-extrabold text-primary-500 font-mono mt-0.5">{simResult.responseTime}m</div>
                        </div>
                        <div className="text-center p-2 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-100 dark:border-slate-800/40">
                          <div className="text-[9px] text-slate-500 dark:text-slate-400 font-medium">Efisiensi</div>
                          <div className="text-sm font-extrabold text-success-500 font-mono mt-0.5">+{simResult.efficiency}%</div>
                        </div>
                      </div>

                      <div className="text-[10px] text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/60 p-2.5 rounded-lg border border-slate-100 dark:border-slate-800/50 leading-relaxed">
                        <b>Rekomendasi Penempatan Petugas:</b>
                        <div className="grid grid-cols-5 gap-1.5 font-mono text-[9px] font-bold mt-2 text-primary-600 dark:text-primary-400">
                          {Object.entries(simResult.dist).map(([z, pct]: any) => (
                            <div key={z} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/60 p-1 rounded text-center shadow-sm">
                              {z}: {pct}%
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>

      {/* AI Sim CCTV Modal */}
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
                  <div className="text-warning-600 dark:text-warning-400 font-semibold">[15:59:43] DETEKSI: Melakukan pemindaian pelanggaran parkir liar & sterilisasi lajur...</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Live OpenCCTV Modal */}
      <LiveCCTVModal camera={activeLiveCam} onClose={() => setActiveLiveCam(null)} />

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

