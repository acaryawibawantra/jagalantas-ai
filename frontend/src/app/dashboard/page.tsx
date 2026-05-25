'use client'
import dynamic from 'next/dynamic'

const DashboardView = dynamic(() => import('../../views/Dashboard'), { ssr: false })

export default function Page() {
  return <DashboardView />
}
