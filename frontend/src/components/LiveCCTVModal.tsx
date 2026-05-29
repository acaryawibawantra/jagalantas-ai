'use client'
import React, { useState, useEffect, useRef } from 'react'
import type { OpenCCTVCamera } from '../hooks/useOpenCCTV'
import { getEmbedUrl, getThumbnailUrl } from '../hooks/useOpenCCTV'

// ── Thumbnail image with fallback
function CamThumbnail({ camera, className = '' }: { camera: OpenCCTVCamera; className?: string }) {
  const [imgErr, setImgErr] = useState(false)
  const thumbUrl = getThumbnailUrl(camera)
  const isActive = camera.active === 1 && camera.consecutive_failures === 0

  if (imgErr || !thumbUrl) {
    return (
      <div className={`bg-slate-900 flex flex-col items-center justify-center gap-2 ${className}`}>
        <span className="text-2xl opacity-40">{isActive ? '📷' : '🔴'}</span>
        <span className="font-mono text-[9px] text-slate-500">
          {isActive ? 'Snapshot tidak tersedia' : 'OFFLINE'}
        </span>
      </div>
    )
  }

  return (
    <div className={`relative overflow-hidden bg-slate-900 ${className}`}>
      <img
        src={thumbUrl}
        alt={camera.name}
        className="w-full h-full object-cover"
        onError={() => setImgErr(true)}
      />
      {isActive && (
        <div className="absolute top-1.5 left-1.5 flex items-center gap-1 bg-black/70 px-1.5 py-0.5 rounded-full">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500" />
          </span>
          <span className="font-mono text-[8px] text-white font-bold">LIVE</span>
        </div>
      )}
    </div>
  )
}

// ── Full stream player inside modal
function CctvStreamPlayer({ camera }: { camera: OpenCCTVCamera }) {
  const embedUrl = getEmbedUrl(camera)
  const [loading, setLoading] = useState(true)
  const [frameError, setFrameError] = useState(false)

  if (frameError) {
    return (
      <div className="w-full aspect-video bg-slate-900 rounded-xl flex flex-col items-center justify-center gap-3 border border-slate-800">
        <div className="text-4xl opacity-40">📡</div>
        <div className="font-mono text-xs text-slate-400 text-center">
          Stream tidak dapat ditampilkan langsung.
        </div>
        <a
          href={`https://opencctv.org/cameras/${camera.traffic_slug || ''}`}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[10px] text-primary-400 underline"
        >
          Buka di OpenCCTV.org →
        </a>
        {/* Try balitower direct */}
        {camera.feed_url.includes('balitower') && (
          <a
            href={camera.feed_url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10px] text-success-400 underline"
          >
            Buka Balitower Stream →
          </a>
        )}
      </div>
    )
  }

  return (
    <div className="relative w-full aspect-video bg-slate-950 rounded-xl overflow-hidden border border-slate-800">
      {loading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-slate-950 z-10">
          <div className="w-8 h-8 border-2 border-primary-500/30 border-t-primary-500 rounded-full animate-spin" />
          <div className="font-mono text-[10px] text-slate-500 animate-pulse">Menghubungkan ke stream...</div>
        </div>
      )}
      {!loading && (
        <div className="absolute top-2 left-2 z-10 flex items-center gap-1.5 bg-black/70 px-2 py-1 rounded-full">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
          </span>
          <span className="font-mono text-[9px] text-white font-bold tracking-wider">LIVE</span>
        </div>
      )}
      <div className="absolute bottom-2 right-2 z-10 bg-black/70 px-2 py-0.5 rounded-full font-mono text-[9px] text-slate-300">
        opencctv.org · {camera.source}
      </div>
      <iframe
        key={camera.id}
        src={embedUrl}
        className="w-full h-full border-0"
        allow="autoplay; fullscreen"
        sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
        onLoad={() => setLoading(false)}
        onError={() => { setLoading(false); setFrameError(true) }}
        title={`CCTV ${camera.name}`}
      />
    </div>
  )
}

// ── Full-screen modal (like clicking a camera on the map)
interface LiveCCTVModalProps {
  camera: OpenCCTVCamera | null
  onClose: () => void
}

export function LiveCCTVModal({ camera, onClose }: LiveCCTVModalProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [onClose])

  if (!camera) return null

  const isActive = camera.active === 1 && camera.consecutive_failures === 0

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950/90 backdrop-blur-md p-4"
      style={{ animation: 'fadeIn 0.2s ease-out' }}
      onClick={e => { if (e.target === e.currentTarget) onClose() }}
    >
      <div
        className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl w-full max-w-3xl overflow-hidden shadow-2xl flex flex-col"
        style={{ animation: 'scaleUp 0.2s ease-out' }}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-900/80">
          <div className="flex items-center gap-3 min-w-0">
            <span className="flex h-2.5 w-2.5 relative flex-shrink-0">
              {isActive ? (
                <>
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-success-500" />
                </>
              ) : (
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-slate-400" />
              )}
            </span>
            <div className="min-w-0">
              <div className="font-outfit font-extrabold text-sm text-slate-900 dark:text-white uppercase truncate">
                {camera.name}
              </div>
              <div className="font-mono text-[9px] text-slate-500 mt-0.5 flex items-center gap-2 flex-wrap">
                <span className={isActive ? 'text-success-500' : 'text-danger-400'}>
                  ● {isActive ? 'AKTIF' : 'OFFLINE'}
                </span>
                <span>·</span>
                <span>{camera.city || 'Jakarta'}, {camera.state || 'DKI Jakarta'}</span>
                <span>·</span>
                <span>Sumber: {camera.source}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            {camera.traffic_slug && (
              <a
                href={`https://opencctv.org/cameras/${camera.traffic_slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-mono text-[10px] font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                🔗 OpenCCTV
              </a>
            )}
            <a
              href={camera.feed_url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-mono text-[10px] font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              📡 Sumber
            </a>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors font-mono text-xs font-bold"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Stream */}
        <div className="p-6 flex flex-col gap-4">
          {isActive ? (
            <CctvStreamPlayer camera={camera} />
          ) : (
            <div className="w-full aspect-video bg-slate-900 rounded-xl flex flex-col items-center justify-center gap-3 border border-slate-800">
              <div className="text-4xl opacity-40">📷</div>
              <div className="font-mono text-sm text-slate-500 font-bold">KAMERA TIDAK AKTIF</div>
              <div className="font-mono text-[10px] text-slate-600 text-center">
                {camera.consecutive_failures} kegagalan koneksi berturut-turut
              </div>
            </div>
          )}

          {/* Info grid */}
          <div className="grid grid-cols-4 gap-2">
            {[
              { label: 'ID Kamera', value: String(camera.camera_code) },
              { label: 'Format', value: camera.feed_type.toUpperCase() },
              { label: 'Koordinat', value: `${camera.lat.toFixed(4)}, ${camera.lng.toFixed(4)}` },
              { label: 'Kegagalan', value: String(camera.consecutive_failures) + 'x' },
            ].map(item => (
              <div key={item.label} className="bg-slate-50 dark:bg-slate-800/60 rounded-xl p-2.5 border border-slate-100 dark:border-slate-800">
                <div className="text-[9px] text-slate-400 font-medium mb-0.5">{item.label}</div>
                <div className="font-mono text-[10px] font-bold text-slate-900 dark:text-white truncate">{item.value}</div>
              </div>
            ))}
          </div>

          {/* Log */}
          <div className="bg-slate-950 rounded-xl p-3 border border-slate-800">
            <div className="font-mono text-[9px] text-slate-500 uppercase tracking-wider mb-1.5 border-b border-slate-800 pb-1 flex justify-between">
              <span>📊 LOG JAGALANTAS AI</span>
              <span className={isActive ? 'text-success-500' : 'text-slate-600'}>{isActive ? 'TERHUBUNG' : 'TERPUTUS'}</span>
            </div>
            <div className="font-mono text-[9px] text-slate-500 flex flex-col gap-0.5">
              <div>[{new Date().toLocaleTimeString('id-ID')}] Menghubungkan ke ID {camera.id}...</div>
              {isActive ? (
                <>
                  <div className="text-success-500">[{new Date().toLocaleTimeString('id-ID')}] Stream aktif · AI visi komputer berjalan</div>
                  <div className="text-warning-400">[{new Date().toLocaleTimeString('id-ID')}] Memindai pelanggaran lalu lintas real-time...</div>
                </>
              ) : (
                <div className="text-danger-400">[{new Date().toLocaleTimeString('id-ID')}] ERROR: Kamera tidak merespons</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Compact map popup (shown directly in Leaflet popup)
export function CamMapPopup({
  camera,
  onOpenFull,
}: {
  camera: OpenCCTVCamera
  onOpenFull: () => void
}) {
  const isActive = camera.active === 1 && camera.consecutive_failures === 0

  return (
    <div className="w-[220px]">
      {/* Thumbnail */}
      <CamThumbnail
        camera={camera}
        className="w-full h-[120px] rounded-lg mb-2"
      />

      {/* Name */}
      <div className="font-outfit font-bold text-[12px] text-slate-900 dark:text-white leading-tight mb-1">
        {camera.name}
      </div>

      {/* Status badge */}
      <div
        className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full font-mono text-[9px] font-bold mb-2"
        style={{
          backgroundColor: isActive ? 'rgba(34,197,94,0.12)' : 'rgba(100,116,139,0.12)',
          color: isActive ? '#22c55e' : '#64748b',
        }}
      >
        <span className={isActive ? 'animate-pulse' : ''}>●</span>
        {isActive ? 'LIVE' : 'OFFLINE'}
      </div>

      {/* Meta */}
      <div className="font-mono text-[9px] text-slate-500 flex flex-col gap-0.5 mb-2">
        <span>📍 {camera.city || 'Jakarta'}, {camera.state}</span>
        <span>📡 LAT: {camera.lat.toFixed(4)} · LNG: {camera.lng.toFixed(4)}</span>
        <span>🗄 DATA SOURCE: <a href="https://balitower.co.id" target="_blank" rel="noopener noreferrer" className="text-primary-400 underline">BALITOWER</a></span>
      </div>

      {/* Buttons */}
      <div className="flex gap-1.5">
        <button
          onClick={onOpenFull}
          className="flex-1 py-1.5 px-2 bg-gradient-to-r from-success-600 to-primary-600 hover:from-success-700 hover:to-primary-700 text-white font-outfit font-bold text-[10px] rounded-lg transition-all flex items-center justify-center gap-1"
        >
          {isActive ? '🔴 LIVE STREAM' : '📷 Lihat Detail'}
        </button>
        {camera.traffic_slug && (
          <a
            href={`https://opencctv.org/cameras/${camera.traffic_slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="py-1.5 px-2 border border-slate-200 dark:border-slate-700 rounded-lg font-mono text-[9px] text-slate-500 hover:text-slate-700 transition-colors"
          >
            🔗
          </a>
        )}
      </div>
    </div>
  )
}
