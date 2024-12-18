import createMiddleware from 'next-intl/middleware'

export default createMiddleware({

  // A list of all locales that are supported.
  locales: ['km', 'en'],

  // Used when no locale matched
  defaultLocale: 'km',
})

export const config = {
  matcher: ['/', '/(km|en)/:path*']
}