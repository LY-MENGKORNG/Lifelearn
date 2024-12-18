import { getRequestConfig } from 'next-intl/server'

export default getRequestConfig(async () => {
  const locale = process.env.NEXT_LOCALE_FALLBACK

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
    timeZone: process.env.NEXT_APP_TIMEZONE || 'Asia/Singapore'
  }
})