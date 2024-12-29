'use client'
import { createContext, Dispatch, SetStateAction, useContext } from 'react'
type GlobalContextProps = {
	loading: boolean
	setLoading: Dispatch<SetStateAction<boolean>>
	t: (key: string) => string | undefined
}

export const GlobalContext = createContext<GlobalContextProps>({
	loading: true,
	setLoading: () => false,
	t: (key: string) => '',
})
const useGlobalContext = () => {
	const context = useContext(GlobalContext)
	if (!context) {
		throw new Error('useGlobalContext must be used within a GlobalProvider')
	}
	return context
}

export default useGlobalContext
