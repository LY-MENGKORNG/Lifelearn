<<<<<<< HEAD
import { getRequestConfig } from 'next-intl/server'

export default getRequestConfig(async () => {
  const locale = process.env.NEXT_LOCALE_FALLBACK
=======
import { getRequestConfig, RequestConfig } from 'next-intl/server'

export default getRequestConfig(async () => {
  const locale = process.env.NEXT_APP_LOCALE_FALLBACK || 'km'
>>>>>>> b73017f (chore(main): #3 change tech stack)

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
    timeZone: process.env.NEXT_APP_TIMEZONE || 'Asia/Singapore'
<<<<<<< HEAD
  }
=======
  } as RequestConfig
>>>>>>> b73017f (chore(main): #3 change tech stack)
})