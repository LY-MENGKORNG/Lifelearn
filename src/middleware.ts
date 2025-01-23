import { NextResponse, type NextRequest } from 'next/server'

export default async function middleware(request: NextRequest) {
  console.log('middleware is running...')
}
