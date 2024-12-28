'use server'

import { getMessages } from 'next-intl/server'

export default async function switchLanguage(locale: string) {
  const message = await getMessages({ locale })
  return message
}