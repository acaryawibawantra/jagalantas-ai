'use client'
import dynamic from 'next/dynamic'

const ConnectView = dynamic(() => import('../../views/Connect'), { ssr: false })

export default function Page() {
  return <ConnectView />
}
