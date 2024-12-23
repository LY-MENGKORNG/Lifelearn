import { NextResponse } from 'next/server'

export async function GET() {
  return new NextResponse(JSON.stringify({ message: "Welcome to Lifelearn" }), {
    status: 200,
  })
}