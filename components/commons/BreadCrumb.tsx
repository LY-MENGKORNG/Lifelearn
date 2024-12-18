'use client'

import { usePathname } from 'next/navigation'
import {
	Breadcrumb,
	BreadcrumbEllipsis,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import Link from 'next/link'
import { Fragment, useState } from 'react'
import useMediaQuery from '@/hooks/use-media-query'
import { ChevronRight, MoreHorizontal } from 'lucide-react'
import { Button } from '../ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from '../ui/drawer'

const PATHS_TO_DISPLAY = 1

export default function BreadCrumb() {
	const pathName: string = usePathname()
	const ROUTE_PATH: string[] = pathName.split('/').filter(Boolean)
	const PATHS = ROUTE_PATH.map((path, index) => ({
		href: `/${ROUTE_PATH.slice(0, index + 1).join('/')}`,
		label: path.charAt(0).toUpperCase() + path.slice(1),
	}))
	const FIRST_PATH = PATHS.splice(0, 1)[0]
	const LAST_PATH = PATHS.splice(PATHS.length - 1, 1)[0]

	const [open, setOpen] = useState(false)
	// const isDesktop = useMediaQuery('(min-width: 768px)')
	if (pathName === '/') return

	return (
		<Breadcrumb>
			<BreadcrumbList>
				{PATHS.length >= 0 && (
					<>
						<BreadcrumbItem>
							<BreadcrumbLink asChild>
								<Link href={FIRST_PATH.href}>{FIRST_PATH.label}</Link>
							</BreadcrumbLink>
						</BreadcrumbItem>
					</>
				)}
				{PATHS.length >= PATHS_TO_DISPLAY ? (
					<>
						<BreadcrumbSeparator />
						<BreadcrumbItem>
							<DropdownMenu
								open={open}
								onOpenChange={setOpen}>
								<DropdownMenuTrigger
									className='flex items-center gap-1 outline-none'
									aria-label='Toggle menu'>
									<BreadcrumbEllipsis className='h-4 w-4' />
								</DropdownMenuTrigger>
								<DropdownMenuContent align='start'>
									{PATHS.map((item, index) => (
										<DropdownMenuItem key={index}>
											<Link href={item.href}>{item.label}</Link>
										</DropdownMenuItem>
									))}
								</DropdownMenuContent>
							</DropdownMenu>
						</BreadcrumbItem>
					</>
				) : (
					PATHS.map(({ href, label }, index) => (
						<Fragment key={index}>
							<BreadcrumbItem>
								<BreadcrumbLink asChild>
									<Link href={href}>{label}</Link>
								</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
						</Fragment>
					))
				)}
				{
					<>
						<BreadcrumbItem>
							<BreadcrumbPage>{LAST_PATH?.label}</BreadcrumbPage>
						</BreadcrumbItem>
					</>
				}
			</BreadcrumbList>
		</Breadcrumb>
	)
}
