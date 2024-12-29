import 'server-only'
import { getRequestConfig, RequestConfig } from 'next-intl/server'

export default getRequestConfig(async () => {
  const locale = process.env.NEXT_APP_LOCALE_FALLBACK || 'km'

  const config: RequestConfig = {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
    timeZone: `${process.env.NEXT_APP_TIMEZONE}` || 'UTC'
  }
  return config
})