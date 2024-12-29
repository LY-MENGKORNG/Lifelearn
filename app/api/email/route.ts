import { NextApiRequest } from 'next'
import { NextResponse } from 'next/server'

export function GET(req: NextApiRequest) {
  const { searchParams } = new URL(req.url!)
  const emailStatus = searchParams.get('status') as EmailStatus | null

  const result: any[] = []

  return new NextResponse(
    JSON.stringify({
      message: result.length ? 'List of all Eamils' : 'No results found',
      data: result,
      count: result.length
    }), { status: 201 })
}

export function POST(req: NextApiRequest) { }

export function PUT(req: NextApiRequest) { }

export function DELETE(req: NextApiRequest) { }