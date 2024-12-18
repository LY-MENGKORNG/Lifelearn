'use server'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const ENDPOINT = 'https://jsonplaceholder.typicode.com/users/'
  const response = await fetch(ENDPOINT, { cache: 'no-store' })
  const result = await response.json()
  return new NextResponse(JSON.stringify(result), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  })
}