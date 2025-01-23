import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import Image from 'next/image'
import { Button } from '../ui/button'
import Dropdown from './Dropdown'
import { LayoutDashboard, LogIn, LogOut, UserRound } from 'lucide-react'
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components'

type UserProfileProps = {
	user: {
		id: number
		username: string | null
		firstName: string
		lastName: string
		email: string | null
		image: string | null
		role: string[]
	}
	isAdmin?: boolean
}
export default function UserProfile({
	user,
	isAdmin = false,
}: UserProfileProps) {
	const dropdownOptions = [
		{
			label: 'Account Details',
			icon: UserRound,
			disabled: false,
			navigate: '/web/account',
		},
		{
			label: '',
			icon: LogIn,
			disabled: false,
			NavigateButton: <LogoutLink className="w-full">Login</LogoutLink>,
		},
		{
			label: '',
			icon: LogOut,
			disabled: false,
			NavigateButton: <LogoutLink className="w-full">Log out</LogoutLink>,
		},
	]
	if (isAdmin) {
		dropdownOptions.push({
			label: 'Go to Dashboard',
			icon: LayoutDashboard,
			disabled: false,
			navigate: '/admin/dashboard',
		})
	}
	return (
		<Dropdown
			label={user.username || 'Anonymous'}
			align="end"
			width="60"
			options={dropdownOptions}>
			<Button
				size={'icon'}
				className="rounded-full"
				variant={'outline'}>
				<Avatar className="w-8 h-8">
					<AvatarImage
						className="object-cover"
						src={user.image || ''}
						alt={user.username ?? ''}
					/>
					<AvatarFallback className="relative">
						<Image
							fill
							className="object-cover sticky"
							src="/avatar.svg"
							alt={user.username ?? ''}
						/>
					</AvatarFallback>
				</Avatar>
			</Button>
		</Dropdown>
	)
}
