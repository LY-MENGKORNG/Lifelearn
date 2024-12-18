import { createContext } from 'react'

type AuthContextProps = {
	token?: string | null
	currentUser?: User | null
	loading?: boolean
	handleLogin: ({
		email,
		password,
	}: {
		email: string
		password: string
	}) => Promise<void>
	handleLogout: () => Promise<void>
}

export const AuthContext = createContext<AuthContextProps | undefined>(
	undefined
)
