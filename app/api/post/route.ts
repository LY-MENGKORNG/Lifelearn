import { NextResponse } from 'next/server'

export async function GET() {
  return new NextResponse(JSON.stringify({ message: "Hello, World!" }), {
    status: 200,
  })
}

export async function POST() { }

export async function PUT() { }

export async function DELETE() { }