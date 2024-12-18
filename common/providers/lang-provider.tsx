'use client'

import { ReactNode, useState } from 'react'
import LanguageContext from '../contexts/lang-context'
import { type AbstractIntlMessages, NextIntlClientProvider } from 'next-intl'

export default function LanguageProvider({
	children,
	initialMessage,
	initialLocale,
}: {
	children: ReactNode
	initialMessage: AbstractIntlMessages
	initialLocale: string
}) {
	const [message, setMessage] = useState<AbstractIntlMessages>(initialMessage)
	const [locale, setLocale] = useState<string>(initialLocale)

	const switchLanguage = async (message: AbstractIntlMessages) => {
		setMessage(message)
		setLocale(locale)
		document.documentElement.lang = locale
	}

	return (
		<LanguageContext.Provider
			value={{
				locale,
				setLanguage: switchLanguage,
			}}>
			<NextIntlClientProvider
				locale={locale}
				messages={message}>
				{children}
			</NextIntlClientProvider>
		</LanguageContext.Provider>
	)
}
