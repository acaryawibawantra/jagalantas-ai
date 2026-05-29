import { useState, useEffect } from 'react'

export interface OpenCCTVCamera {
  id: string
  camera_code: number
  name: string
  city: string | null
  state: string | null
  country: string
  lat: number
  lng: number
  feed_url: string
  feed_type: 'iframe' | 'm3u8' | string
  active: number
  category: string
  traffic_slug: string | null
  source: string
  timezone: string
  consecutive_failures: number
}

// Use local Next.js API proxy to avoid CORS
const PROXY_API = '/api/cctv?q=jakarta&limit=500'

// Map zone based on coordinates (approximate Jakarta regions)
export function inferZone(lat: number, lng: number): string {
  if (lat < -6.28) return 'Selatan'
  if (lat > -6.13) return 'Utara'
  if (lng < 106.78) return 'Barat'
  if (lng > 106.88) return 'Timur'
  return 'Pusat'
}

// Get thumbnail URL for a camera
export function getThumbnailUrl(camera: OpenCCTVCamera): string | null {
  // Balitower cameras have embed URLs — try to get snapshot
  if (camera.feed_url.includes('cctv.balitower.co.id')) {
    // Extract camera path from URL
    const match = camera.feed_url.match(/balitower\.co\.id\/(.+?)\/embed/)
    if (match) {
      return `https://cctv.balitower.co.id/${match[1]}/thumbnail.jpg`
    }
  }
  // OpenCCTV may have snapshot endpoint
  return `https://opencctv.org/api/cameras/${camera.id}/thumbnail`
}

// Get stream/embed URL
export function getEmbedUrl(camera: OpenCCTVCamera): string {
  if (camera.feed_type === 'iframe') return camera.feed_url
  if (camera.traffic_slug) return `https://opencctv.org/cameras/${camera.traffic_slug}`
  return camera.feed_url
}

export function useOpenCCTV() {
  const [cameras, setCameras] = useState<OpenCCTVCamera[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null)

  const fetchCameras = async () => {
    try {
      setLoading(true)
      setError(null)

      const res = await fetch(PROXY_API)
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      
      const raw = await res.json()
      if (!Array.isArray(raw)) throw new Error('Unexpected response format')

      const data: OpenCCTVCamera[] = raw

      // Filter: only Jakarta traffic cameras with valid coordinates
      const jakartaBounds = {
        latMin: -6.45,
        latMax: -5.95,
        lngMin: 106.55,
        lngMax: 107.10,
      }

      const filtered = data.filter(
        c =>
          c.category === 'traffic' &&
          c.lat !== 0 &&
          c.lng !== 0 &&
          c.lat >= jakartaBounds.latMin &&
          c.lat <= jakartaBounds.latMax &&
          c.lng >= jakartaBounds.lngMin &&
          c.lng <= jakartaBounds.lngMax
      )

      // Sort: active cameras first
      filtered.sort((a, b) => {
        const aActive = a.active === 1 && a.consecutive_failures === 0 ? 0 : 1
        const bActive = b.active === 1 && b.consecutive_failures === 0 ? 0 : 1
        return aActive - bActive
      })

      setCameras(filtered)
      setLastUpdated(new Date())
    } catch (err: any) {
      setError(err.message || 'Gagal memuat data kamera')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCameras()
    // Refresh every 5 minutes
    const interval = setInterval(fetchCameras, 5 * 60 * 1000)
    return () => clearInterval(interval)
  }, [])

  const activeCameras = cameras.filter(c => c.active === 1 && c.consecutive_failures === 0)
  const inactiveCameras = cameras.filter(c => c.active === 0 || c.consecutive_failures > 0)

  return {
    cameras,
    activeCameras,
    inactiveCameras,
    loading,
    error,
    lastUpdated,
    refetch: fetchCameras,
    inferZone,
    getThumbnailUrl,
    getEmbedUrl,
  }
}
