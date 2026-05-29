import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const q = searchParams.get('q') || 'jakarta'
  const limit = Math.min(Number(searchParams.get('limit') || '500'), 500)

  try {
    const res = await fetch(
      `https://opencctv.org/api/cameras/search?q=${encodeURIComponent(q)}&limit=${limit}`,
      {
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; JagalantasAI/1.0)',
          'Accept': 'application/json',
        },
        next: { revalidate: 300 }, // cache 5 minutes
      }
    )

    if (!res.ok) {
      return NextResponse.json(
        { error: `OpenCCTV API returned ${res.status}` },
        { status: res.status }
      )
    }

    const data = await res.json()
    return NextResponse.json(data, {
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
      },
    })
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || 'Failed to fetch cameras' },
      { status: 500 }
    )
  }
}
