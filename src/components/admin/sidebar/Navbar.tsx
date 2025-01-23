import BreadCrumb from '@/components/commons/BreadCrumb'
import Dropdown from '@/components/commons/Dropdown'
import ThemeSwitcher from '@/components/commons/ThemeSwitcher'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { UserRound } from 'lucide-react'
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs'
import Image from 'next/image'

type NavbarProps = {
	user: {
		id: string
		email: string | null
		given_name: string | null
		family_name: string | null
		picture: string | null
	} | null
	loading?: boolean
}
export default function Navbar({ user, loading = true }: NavbarProps) {
	return (
		<header className="flex h-16 shrink-0 pr-3 items-center justify-between transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 sticky top-0 z-[10] backdrop-blur-md border-b">
			<div className="flex items-center gap-2 px-3">
				<SidebarTrigger />
				<Separator
					orientation="vertical"
					className="mr-2 h-4"
				/>
				<BreadCrumb />
			</div>
			<div className="flex items-center gap-2">
				<Dropdown
					label={`${user?.given_name} ${user?.family_name}`}
					align="end"
					options={[
						{
							label: 'Account Details',
							icon: UserRound,
							disabled: false,
							navigate: '/profile',
						},
						{
							label: '',
							icon: UserRound,
							disabled: false,
							NavigateButton: <LogoutLink>Log out</LogoutLink>,
						},
					]}>
					<Button
						disabled={loading}
						size={'icon'}
						className="rounded-full"
						variant={'outline'}>
						<Avatar className="w-8 h-8">
							<AvatarImage
								className="object-cover"
								src={user?.picture || ''}
								alt={user?.given_name ?? ''}
							/>
							<AvatarFallback className="relative">
								<Image
									fill
									className="object-cover sticky"
									src="/avatar.svg"
									alt={user?.given_name ?? ''}
								/>
							</AvatarFallback>
						</Avatar>
					</Button>
				</Dropdown>
				<ThemeSwitcher />
			</div>
		</header>
	)
}
