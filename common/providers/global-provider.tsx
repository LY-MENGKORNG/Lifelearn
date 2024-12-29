'use client'
import { ReactNode, useState } from 'react'
import { GlobalContext } from '../contexts/global-context'
import { useTranslations } from 'next-intl'

type GlobalProviderProps = {
	children: ReactNode
}
const GlobalProvider = ({ children }: GlobalProviderProps) => {
	const [loading, setLoading] = useState(true)
	const t = useTranslations()
	return (
		<GlobalContext.Provider value={{ loading, setLoading, t }}>
			{children}
		</GlobalContext.Provider>
	)
}

export default GlobalProvider
