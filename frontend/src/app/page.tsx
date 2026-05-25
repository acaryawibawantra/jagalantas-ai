'use client'
import dynamic from 'next/dynamic'

const PredictView = dynamic(() => import('../views/Predict'), { ssr: false })

export default function Page() {
  return <PredictView />
}
