import BreadCrumb from '@/components/commons/BreadCrumb'
import Dropdown from '@/components/commons/Dropdown'
import ThemeController from '@/components/commons/ThemeSwitcher'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { UserRound } from 'lucide-react'

type NavbarProps = {
	user: {
		name: string
		avatar: string
	}
}
export default function Navbar({ user }: NavbarProps) {
	return (
		<header className='flex h-16 shrink-0 pr-3 items-center justify-between transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 sticky top-0 z-[10] backdrop-blur-md border-b'>
			<div className='flex items-center gap-2 px-4'>
				<SidebarTrigger className='-ml-1' />
				<Separator
					orientation='vertical'
					className='mr-2 h-4'
				/>
				<BreadCrumb />
			</div>
			<div className='flex items-center gap-2'>
				<Dropdown
					options={[
						{
							label: 'Profile',
							icon: UserRound,
							disabled: false,
							navigate: '/profile',
						},
						{
							label: 'Login',
							icon: UserRound,
							disabled: true,
						},
					]}
					label='Account'
					align='end'>
					<Button
						size={'icon'}
						className='rounded-full'
						variant={'outline'}>
						<Avatar className=''>
							<AvatarImage
								className='object-cover'
								src={user.avatar}
								alt={user.name}
							/>
							<AvatarFallback>LL</AvatarFallback>
						</Avatar>
					</Button>
				</Dropdown>
				<ThemeController />
			</div>
		</header>
	)
}
