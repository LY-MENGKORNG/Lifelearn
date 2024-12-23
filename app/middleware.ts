import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const authToken = req.headers.get('Authorization')

  // if (!authToken) {
  //   return new NextResponse('Unauthorized', {
  //     status: 401,
  //   })
  // }
  return NextResponse.next()
}