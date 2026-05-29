'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="JAGALANTAS Logo" width={36} height={36} className="w-9 h-9 object-contain" />
          <div>
            <div className="font-outfit font-extrabold text-lg text-slate-900 dark:text-slate-50 tracking-tight leading-none flex items-center gap-1.5">
              JAGALANTAS <span className="text-primary-600 dark:text-primary-400">AI</span>
            </div>
            <div className="text-[10px] text-slate-500 dark:text-slate-400 font-mono tracking-widest mt-0.5 font-medium">
              SISTEM MITIGASI & PENGAWASAN KOTA CERDAS
            </div>
          </div>
        </div>

        {/* Nav tabs */}
        <div className="hidden md:flex gap-2">
          {[
            { id: '/', label: 'PREDIKSI', icon: '📡' },
            { id: '/connect', label: 'INTERAKTIF', icon: '🔔' },
            { id: '/dashboard', label: 'PANTAU EKSEKUTIF', icon: '📊' },
          ].map(tab => {
            const isActive = pathname === tab.id
            return (
              <Link href={tab.id} key={tab.id} className={`px-4 py-2 rounded-lg text-xs font-mono font-medium tracking-wide transition-all flex items-center gap-2 ${
                isActive 
                  ? 'bg-primary-50 dark:bg-primary-500/10 text-primary-700 dark:text-primary-400 shadow-sm' 
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/50'
              }`}>
                <span>{tab.icon}</span>
                {tab.label}
              </Link>
            )
          })}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-5">
          {/* Theme Toggle */}
          {mounted && (
            <button 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          )}

          {/* Live badge */}
          <div className="flex items-center gap-2">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-success-500"></span>
            </div>
            <span className="font-mono text-[11px] font-semibold text-success-600 dark:text-success-400">LIVE</span>
            <span className="font-mono text-[11px] text-slate-500 dark:text-slate-400 ml-1 font-medium hidden sm:inline-block">
              {new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })} WIB
            </span>
          </div>
        </div>
      </div>
    </nav>
  )
}
