'use client'

import { PropsWithChildren, useState } from 'react'
import { sidebar } from '@/constants'
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarInset,
	SidebarMenu,
	SidebarMenuAction,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarMenuSubButton,
	SidebarMenuSubItem,
	SidebarRail,
} from '../../ui/sidebar'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuTrigger,
} from '../../ui/dropdown-menu'
import {
	BadgeCheck,
	Bell,
	ChevronRight,
	ChevronsUpDown,
	CreditCard,
	Folder,
	Forward,
	LogOut,
	MoreHorizontal,
	Plus,
	Sparkles,
	Trash2,
} from 'lucide-react'
import Link from 'next/link'
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from '../../ui/collapsible'
import { Avatar, AvatarFallback, AvatarImage } from '../../ui/avatar'
import { usePathname } from 'next/navigation'
import Navbar from './Navbar'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'

type AppSidebarProps = PropsWithChildren
export default function AppSidebar({ children }: AppSidebarProps) {
	const { user, isLoading } = useKindeBrowserClient()
	const [activeTeam, setActiveTeam] = useState(sidebar.teams[0])
	const currentPath = usePathname()
	return (
		<>
			<Sidebar collapsible='icon'>
				<SidebarHeader>
					<SidebarMenu>
						<SidebarMenuItem>
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<SidebarMenuButton
										size='lg'
										className='data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground'>
										<div className='flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground'>
											<activeTeam.logo className='size-4' />
										</div>
										<div className='grid flex-1 text-left text-sm leading-tight'>
											<span className='truncate font-semibold'>
												{activeTeam.name}
											</span>
											<span className='truncate text-xs'>
												{activeTeam.plan}
											</span>
										</div>
										<ChevronsUpDown className='ml-auto' />
									</SidebarMenuButton>
								</DropdownMenuTrigger>
								<DropdownMenuContent
									className='w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg'
									align='start'
									side='bottom'
									sideOffset={4}>
									<DropdownMenuLabel className='text-xs text-muted-foreground'>
										Organizations
									</DropdownMenuLabel>
									{sidebar.teams.map((team, index) => (
										<DropdownMenuItem
											key={team.name}
											onClick={() => setActiveTeam(team)}
											className='gap-2 p-2'>
											<div className='flex size-6 items-center justify-center rounded-sm border'>
												<team.logo className='size-4 shrink-0' />
											</div>
											{team.name}
											<DropdownMenuShortcut>⌘{index + 1}</DropdownMenuShortcut>
										</DropdownMenuItem>
									))}
									<DropdownMenuSeparator />
									<DropdownMenuItem className='gap-2 p-2'>
										<div className='flex size-6 items-center justify-center rounded-md border bg-background'>
											<Plus className='size-4' />
										</div>
										<div className='font-medium text-muted-foreground'>
											Add team
										</div>
									</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
						</SidebarMenuItem>
					</SidebarMenu>
				</SidebarHeader>
				<SidebarContent>
					<SidebarGroup>
						<SidebarMenu>
							{sidebar.mainNav.map((item) =>
								!item.items ? (
									<SidebarMenuItem key={item.title}>
										<Link href={item.url ?? '#'}>
											<SidebarMenuButton
												isActive={currentPath.startsWith(item.url!)}
												tooltip={item.title}>
												{item.icon && <item.icon />}
												<span>{item.title}</span>
											</SidebarMenuButton>
										</Link>
									</SidebarMenuItem>
								) : (
									<Collapsible
										key={item.title}
										asChild
										defaultOpen={item.items.some(
											({ url }) => currentPath === url
										)}
										className='group/collapsible'>
										<SidebarMenuItem>
											<CollapsibleTrigger asChild>
												<SidebarMenuButton tooltip={item.title}>
													{item.icon && <item.icon />}
													<span>{item.title}</span>
													<ChevronRight className='ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90' />
												</SidebarMenuButton>
											</CollapsibleTrigger>
											<CollapsibleContent>
												<SidebarMenuSub>
													{item.items?.map((subItem) => (
														<SidebarMenuSubItem key={subItem.title}>
															<SidebarMenuSubButton
																isActive={currentPath === subItem.url}
																asChild>
																<Link href={subItem.url ?? '#'}>
																	{subItem.icon && <subItem.icon />}
																	<span>{subItem.title}</span>
																</Link>
															</SidebarMenuSubButton>
														</SidebarMenuSubItem>
													))}
												</SidebarMenuSub>
											</CollapsibleContent>
										</SidebarMenuItem>
									</Collapsible>
								)
							)}
						</SidebarMenu>
					</SidebarGroup>
					<SidebarGroup className='group-data-[collapsible=icon]:hidden'>
						<SidebarGroupLabel>Projects</SidebarGroupLabel>
						<SidebarMenu>
							{sidebar.projects.map(({ icon: Icon, name, url }) => (
								<SidebarMenuItem key={name}>
									<SidebarMenuButton asChild>
										<Link href={url}>
											<Icon />
											<p>{name}</p>
										</Link>
									</SidebarMenuButton>
									<DropdownMenu>
										<DropdownMenuTrigger asChild>
											<SidebarMenuAction showOnHover>
												<MoreHorizontal />
												<p className='sr-only'>More</p>
											</SidebarMenuAction>
										</DropdownMenuTrigger>
										<DropdownMenuContent
											className='w-48 rounded-lg'
											side='bottom'
											align='end'>
											<DropdownMenuItem>
												<Folder className='text-muted-foreground' />
												<p>View Project</p>
											</DropdownMenuItem>
											<DropdownMenuItem>
												<Forward className='text-muted-foreground' />
												<p>Share Project</p>
											</DropdownMenuItem>
											<DropdownMenuSeparator />
											<DropdownMenuItem>
												<Trash2 className='text-muted-foreground' />
												<p>Delete Project</p>
											</DropdownMenuItem>
										</DropdownMenuContent>
									</DropdownMenu>
								</SidebarMenuItem>
							))}
							<SidebarMenuItem>
								<SidebarMenuButton className='text-sidebar-foreground/70'>
									<MoreHorizontal className='text-sidebar-foreground/70' />
									<p>More</p>
								</SidebarMenuButton>
							</SidebarMenuItem>
						</SidebarMenu>
					</SidebarGroup>
				</SidebarContent>
				<SidebarFooter>
					<SidebarMenu>
						<SidebarMenuItem>
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<SidebarMenuButton
										size='lg'
										className='data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground'>
										<Avatar className='h-8 w-8 rounded-lg'>
											<AvatarImage
												className='object-cover'
												src={user?.picture ?? ''}
												alt={user?.given_name ?? ''}
											/>
											<AvatarFallback className='rounded-lg'>CN</AvatarFallback>
										</Avatar>
										<div className='grid flex-1 text-left text-sm leading-tight'>
											<p className='truncate font-semibold'>
												{user?.given_name ?? ''}
											</p>
											<p className='truncate text-xs'>{user?.email ?? ''}</p>
										</div>
										<ChevronsUpDown className='ml-auto size-4' />
									</SidebarMenuButton>
								</DropdownMenuTrigger>
								<DropdownMenuContent
									className='w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg'
									side='bottom'
									align='end'
									sideOffset={4}>
									<DropdownMenuLabel className='p-0 font-normal'>
										<div className='flex items-center gap-2 px-1 py-1.5 text-left text-sm'>
											<Avatar className='h-8 w-8 rounded-lg'>
												<AvatarImage
													className='object-cover'
													src={user?.picture ?? ''}
													alt={user?.given_name ?? ''}
												/>
												<AvatarFallback className='rounded-lg'>
													CN
												</AvatarFallback>
											</Avatar>
											<div className='grid flex-1 text-left text-sm leading-tight'>
												<span className='truncate font-semibold'>
													{user?.given_name ?? ''}
												</span>
												<span className='truncate text-xs'>
													{user?.email ?? ''}
												</span>
											</div>
										</div>
									</DropdownMenuLabel>
									<DropdownMenuSeparator />
									<DropdownMenuGroup>
										<DropdownMenuItem>
											<Sparkles />
											Upgrade to Pro
										</DropdownMenuItem>
									</DropdownMenuGroup>
									<DropdownMenuSeparator />
									<DropdownMenuGroup>
										<DropdownMenuItem>
											<BadgeCheck />
											Account
										</DropdownMenuItem>
										<DropdownMenuItem>
											<CreditCard />
											Billing
										</DropdownMenuItem>
										<DropdownMenuItem>
											<Bell />
											Notifications
										</DropdownMenuItem>
									</DropdownMenuGroup>
									<DropdownMenuSeparator />
									<DropdownMenuItem>
										<LogOut />
										Log out
									</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
						</SidebarMenuItem>
					</SidebarMenu>
				</SidebarFooter>
				<SidebarRail />
			</Sidebar>
			<SidebarInset>
				<Navbar
					user={user}
					loading={!!isLoading}
				/>
				{children}
			</SidebarInset>
		</>
	)
}
