import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const authToken = req.headers.get('Authorization')
  return NextResponse.next()
}

export const config = {
  matcher: ['/api/:path*'],
}