import React from 'react'
import ThemeSwitcher from '../commons/ThemeSwitcher'
import Image from 'next/image'
import { appLogo } from '@/assets'
import Link from 'next/link'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { LoginLink } from '@kinde-oss/kinde-auth-nextjs/components'
import { getUserWithRoles } from '@/actions/user'
import UserProfile from '../commons/UserProfile'
import { Button } from '../ui/button'
import { RoleEnum, WEB_NAVBAR } from '@/constants'

export default async function Navbar() {
	const { getUser, isAuthenticated } = getKindeServerSession()
	const user = await getUser()
	const dbUser = user?.email ? await getUserWithRoles(user.email) : null
	const isAdmin = !!dbUser && dbUser.role.includes(RoleEnum.ADMIN)
	return (
		<nav className='w-full sticky top-0 z-[10] flex items-center justify-between backdrop-blur-md py-2 xl:px-20 px-5 border-b'>
			<Link
				href={WEB_NAVBAR.LOGO.link}
				className='inline-block'>
				<Image
					src={WEB_NAVBAR.LOGO.image}
					width={50}
					height={50}
					alt={WEB_NAVBAR.LOGO.alt}
				/>
			</Link>
			<menu>
				{WEB_NAVBAR.MENU.map((item) => (
					<Link
						key={item.label}
						href={item.link}>
						<span className='px-4 text-sm font-medium'>{item.label}</span>
					</Link>
				))}
			</menu>
			<div className='flex items-center gap-3'>
				{dbUser ? (
					<UserProfile
						user={dbUser}
						isAdmin={isAdmin}
					/>
				) : (
					<Button asChild>
						<LoginLink>Login</LoginLink>
					</Button>
				)}
				<ThemeSwitcher />
			</div>
		</nav>
	)
}
