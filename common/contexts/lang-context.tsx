import { type AbstractIntlMessages } from 'next-intl'
import { createContext, useContext } from 'react'

type LanguageContextProps = {
	locale?: string
	setLanguage?: (message: AbstractIntlMessages) => Promise<void>
}

const LanguageContext = createContext<LanguageContextProps>({})
export const useLanguage = () => {
	const context = useContext(LanguageContext)
	if (!context) {
		throw new Error('useLanguage must be used within a LanguageProvider')
	}
	return context
}

export default LanguageContext
