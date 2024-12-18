<<<<<<< HEAD
import createMiddleware from 'next-intl/middleware'

export default createMiddleware({

  // A list of all locales that are supported.
  locales: ['km', 'en'],

  // Used when no locale matched
  defaultLocale: 'km',
})

export const config = {
  matcher: ['/', '/(km|en)/:path*']
=======
import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const authToken = req.headers.get('Authorization')

  // if (!authToken) {
  //   return new NextResponse('Unauthorized', {
  //     status: 401,
  //   })
  // }
  return NextResponse.next()
>>>>>>> b73017f (chore(main): #3 change tech stack)
}