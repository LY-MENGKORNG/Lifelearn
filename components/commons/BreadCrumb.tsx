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
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '../ui/dropdown-menu'

type PathType = {
	label: string
	href: string
}

const MIDDLE_PATHS_TO_DISPLAY = 1

export default function BreadCrumb() {
	const pathName: string = usePathname()
	const ROUTE_PATHS: string[] = pathName.split('/').filter(Boolean)
	const PATHS = ROUTE_PATHS.map((path, index) => ({
		href: `/${ROUTE_PATHS.slice(0, index + 1).join('/')}`,
		label: path,
	}))

	const START_PATH: PathType | undefined =
		PATHS.length > 1 ? PATHS.splice(0, 1)[0] : undefined
	const END_PATH: PathType = PATHS.splice(PATHS.length - 1, 1)[0]
	if (pathName === '/') return

	return (
		<Breadcrumb>
			<BreadcrumbList>
				{/* START */}
				{START_PATH && (
					<>
						<BreadcrumbItem>
							<BreadcrumbLink asChild>
								<Link
									className='capitalize'
									href={START_PATH.href}>
									{START_PATH.label}
								</Link>
							</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator />
					</>
				)}

				{/* Middle */}
				{PATHS.length >= MIDDLE_PATHS_TO_DISPLAY && (
					<>
						<BreadcrumbItem>
							<DropdownMenu>
								<DropdownMenuTrigger className='flex items-center gap-1'>
									<BreadcrumbEllipsis className='h-4 w-4' />
									<span className='sr-only'>Toggle menu</span>
								</DropdownMenuTrigger>
								<DropdownMenuContent align='start'>
									{PATHS.map(({ href, label }, index) => (
										<DropdownMenuItem
											key={index}
											asChild>
											<Link
												className='capitalize'
												href={href}>
												{label}
											</Link>
										</DropdownMenuItem>
									))}
								</DropdownMenuContent>
							</DropdownMenu>
						</BreadcrumbItem>
						<BreadcrumbSeparator />
					</>
				)}

				{/* End */}
				<BreadcrumbItem>
					<BreadcrumbPage className='capitalize'>
						{END_PATH.label}
					</BreadcrumbPage>
				</BreadcrumbItem>
			</BreadcrumbList>
		</Breadcrumb>
	)
}
