'use client'

import { PropsWithChildren, useState } from 'react'
import { AuthContext } from '../contexts/auth-context'
import { RoleEnum } from '@/constants'

type AuthProviderProps = PropsWithChildren
export default function AuthProvider({ children }: AuthProviderProps) {
	const [token, setToken] = useState<string | null>('')
	const [loading, setLoading] = useState<boolean>(false)
	const [currentUser, setCurrentUser] = useState<User | null>({
		id: 1,
		role: RoleEnum.ADMIN,
		email: 'johann.kart@gmail.com',
		name: 'John Doe',
	})
	const handleLogin = async ({
		email,
		password,
	}: {
		email: string
		password: string
	}) => {
		// logic here...
	}
	const handleLogout = async () => {
		// logic here...
	}

	return (
		<AuthContext.Provider
			value={{
				currentUser,
				token,
				loading,
				handleLogin,
				handleLogout,
			}}>
			{children}
		</AuthContext.Provider>
	)
}
