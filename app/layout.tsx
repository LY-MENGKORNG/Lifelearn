import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/common/providers/theme-provider'
import AuthProvider from '@/common/providers/auth-provider'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getMessages } from 'next-intl/server'
import LanguageProvider from '@/common/providers/lang-provider'
<<<<<<< HEAD
=======
import { Toaster } from '@/components/ui/sonner'
>>>>>>> b73017f (chore(main): #3 change tech stack)

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Lifelearn',
	description: 'Life long learning...',
}

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const locale = await getLocale()
	const messages = await getMessages()
	return (
		<html
			lang={locale}
			suppressHydrationWarning>
			<LanguageProvider
				initialLocale={locale}
				initialMessage={messages}>
				<body
					className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
					<ThemeProvider
						attribute='class'
						storageKey='theme'
						defaultTheme='dark'
						enableSystem
						disableTransitionOnChange>
<<<<<<< HEAD
						<AuthProvider>{children}</AuthProvider>
=======
						<AuthProvider>
							{children}
							<Toaster />
						</AuthProvider>
>>>>>>> b73017f (chore(main): #3 change tech stack)
					</ThemeProvider>
				</body>
			</LanguageProvider>
		</html>
	)
}
