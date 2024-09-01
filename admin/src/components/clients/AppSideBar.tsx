"use client"

import { Fragment, ReactNode, useState } from "react"
import Link from "next/link"
import {
  ArrowUpRight,
  BadgeCheck,
  Bell,
  Check,
  ChevronDown,
  ChevronRight,
  ChevronsUpDown,
  CreditCard,
  LinkIcon,
  LogOut,
  MoreHorizontal,
  Plus,
  Sparkles,
  StarOff,
  Trash2,
  type LucideIcon,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar } from "@/components/ui/calendar"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar"
import { BreadCrumb, ModeToggle } from "@/components"
import { SIDEBAR_LEFT, SIDEBAR_RIGHT } from "@/lib/data"

export default function AppSidebar({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <SidebarLeft />
      <SidebarInset>
        <header className='sticky top-0 flex h-14 shrink-0 items-center gap-2  backdrop-blur-md border-b z-[1000]'>
          <div className='flex flex-1 justify-between items-center gap-2 px-3'>
            <div className='flex items-center gap-3'>
              <SidebarTrigger />
              <BreadCrumb />
            </div>
            <ModeToggle />
          </div>
        </header>
        <div className='flex flex-1 flex-col gap-4 p-4'>{children}</div>
      </SidebarInset>
      {/* <SidebarRight /> */}
    </SidebarProvider>
  )
}

function SidebarLeft({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      className='border-r-0'
      {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={SIDEBAR_LEFT.teams} />
        <NavMain items={SIDEBAR_LEFT.navMain} />
      </SidebarHeader>
      <SidebarContent>
        <NavFavorites favorites={SIDEBAR_LEFT.favorites} />
        <NavWorkspaces workspaces={SIDEBAR_LEFT.workspaces} />
        <NavSecondary
          items={SIDEBAR_LEFT.navSecondary}
          className='mt-auto'
        />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}

function SidebarRight({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      collapsible='none'
      className='sticky hidden lg:flex top-0 h-svh border-l'
      {...props}>
      <SidebarHeader className='h-16 border-b border-sidebar-border'>
        <NavUser user={SIDEBAR_RIGHT.user} />
      </SidebarHeader>
      <SidebarContent>
        <DatePicker />
        <SidebarSeparator className='mx-0' />
        <Calendars calendars={SIDEBAR_RIGHT.calendars} />
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <Plus />
              <span>New Calendar</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}

function Calendars({
  calendars,
}: {
  calendars: {
    name: string
    items: string[]
  }[]
}) {
  return (
    <>
      {calendars.map((calendar, index) => (
        <Fragment key={calendar.name}>
          <SidebarGroup
            key={calendar.name}
            className='py-0'>
            <Collapsible
              defaultOpen={index === 0}
              className='group/collapsible'>
              <SidebarGroupLabel
                asChild
                className='group/label w-full text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'>
                <CollapsibleTrigger>
                  {calendar.name}{" "}
                  <ChevronRight className='ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90' />
                </CollapsibleTrigger>
              </SidebarGroupLabel>
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {calendar.items.map((item, index) => (
                      <SidebarMenuItem key={item}>
                        <SidebarMenuButton>
                          <div
                            data-active={index < 2}
                            className='group/calendar-item flex aspect-square size-4 shrink-0 items-center justify-center rounded-sm border border-sidebar-border text-sidebar-primary-foreground data-[active=true]:border-sidebar-primary data-[active=true]:bg-sidebar-primary'>
                            <Check className='hidden size-3 group-data-[active=true]/calendar-item:block' />
                          </div>
                          {item}
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </Collapsible>
          </SidebarGroup>
          <SidebarSeparator className='mx-0' />
        </Fragment>
      ))}
    </>
  )
}

function DatePicker() {
  return (
    <SidebarGroup className='px-0'>
      <SidebarGroupContent>
        <Calendar className='[&_[role=gridcell].bg-accent]:bg-sidebar-primary [&_[role=gridcell].bg-accent]:text-sidebar-primary-foreground [&_[role=gridcell]]:w-[33px]' />
      </SidebarGroupContent>
    </SidebarGroup>
  )
}

function NavFavorites({
  favorites,
}: {
  favorites: {
    name: string
    url: string
    emoji: string
  }[]
}) {
  const { isMobile } = useSidebar()

  return (
    <SidebarGroup className='group-data-[collapsible=icon]:hidden'>
      <SidebarGroupLabel>Favorites</SidebarGroupLabel>
      <SidebarMenu>
        {favorites.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton asChild>
              <Link
                href={item.url}
                title={item.name}>
                <span>{item.emoji}</span>
                <span>{item.name}</span>
              </Link>
            </SidebarMenuButton>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuAction showOnHover>
                  <MoreHorizontal />
                  <span className='sr-only'>More</span>
                </SidebarMenuAction>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className='w-56 rounded-lg'
                side={isMobile ? "bottom" : "right"}
                align={isMobile ? "end" : "start"}>
                <DropdownMenuItem>
                  <StarOff className='text-muted-foreground' />
                  <span>Remove from Favorites</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LinkIcon className='text-muted-foreground' />
                  <span>Copy Link</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <ArrowUpRight className='text-muted-foreground' />
                  <span>Open in New Tab</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Trash2 className='text-muted-foreground' />
                  <span>Delete</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        ))}
        <SidebarMenuItem>
          <SidebarMenuButton className='text-sidebar-foreground/70'>
            <MoreHorizontal />
            <span>More</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  )
}

function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon: LucideIcon
    isActive?: boolean
  }[]
}) {
  return (
    <SidebarMenu>
      {items.map((item) => (
        <SidebarMenuItem key={item.title}>
          <SidebarMenuButton
            asChild
            isActive={item.isActive}>
            <Link href={item.url}>
              <item.icon />
              <span>{item.title}</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  )
}

function NavSecondary({
  items,
  ...props
}: {
  items: {
    title: string
    url: string
    icon: LucideIcon
    badge?: ReactNode
  }[]
} & React.ComponentPropsWithoutRef<typeof SidebarGroup>) {
  return (
    <SidebarGroup {...props}>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <a href={item.url}>
                  <item.icon />
                  <span>{item.title}</span>
                </a>
              </SidebarMenuButton>
              {item.badge && <SidebarMenuBadge>{item.badge}</SidebarMenuBadge>}
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}

function NavUser({
  user,
}: {
  user: {
    name: string
    email: string
    avatar: string
  }
}) {
  const { isMobile } = useSidebar()

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size='lg'
              className='data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground'>
              <Avatar className='h-8 w-8 rounded-lg'>
                <AvatarImage
                  src={user.avatar}
                  alt={user.name}
                />
                <AvatarFallback className='rounded-lg'>CN</AvatarFallback>
              </Avatar>
              <div className='grid flex-1 text-left text-sm leading-tight'>
                <span className='truncate font-semibold'>{user.name}</span>
                <span className='truncate text-xs'>{user.email}</span>
              </div>
              <ChevronsUpDown className='ml-auto size-4' />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className='w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg'
            side={isMobile ? "bottom" : "right"}
            align='start'
            sideOffset={4}>
            <DropdownMenuLabel className='p-0 font-normal'>
              <div className='flex items-center gap-2 px-1 py-1.5 text-left text-sm'>
                <Avatar className='h-8 w-8 rounded-lg'>
                  <AvatarImage
                    src={user.avatar}
                    alt={user.name}
                  />
                  <AvatarFallback className='rounded-lg'>CN</AvatarFallback>
                </Avatar>
                <div className='grid flex-1 text-left text-sm leading-tight'>
                  <span className='truncate font-semibold'>{user.name}</span>
                  <span className='truncate text-xs'>{user.email}</span>
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
  )
}

function NavWorkspaces({
  workspaces,
}: {
  workspaces: {
    name: string
    emoji: ReactNode
    pages: {
      name: string
      emoji: ReactNode
    }[]
  }[]
}) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Workspaces</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {workspaces.map((workspace) => (
            <Collapsible key={workspace.name}>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href='#'>
                    <span>{workspace.emoji}</span>
                    <span>{workspace.name}</span>
                  </a>
                </SidebarMenuButton>
                <CollapsibleTrigger asChild>
                  <SidebarMenuAction
                    className='left-2 bg-sidebar-accent text-sidebar-accent-foreground data-[state=open]:rotate-90'
                    showOnHover>
                    <ChevronRight />
                  </SidebarMenuAction>
                </CollapsibleTrigger>
                <SidebarMenuAction showOnHover>
                  <Plus />
                </SidebarMenuAction>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {workspace.pages.map((page) => (
                      <SidebarMenuSubItem key={page.name}>
                        <SidebarMenuSubButton asChild>
                          <a href='#'>
                            <span>{page.emoji}</span>
                            <span>{page.name}</span>
                          </a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          ))}
          <SidebarMenuItem>
            <SidebarMenuButton className='text-sidebar-foreground/70'>
              <MoreHorizontal />
              <span>More</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}

function TeamSwitcher({
  teams,
}: {
  teams: {
    name: string
    logo: React.ElementType
    plan: string
  }[]
}) {
  const [activeTeam, setActiveTeam] = useState(teams[0])

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton className='w-fit px-1.5'>
              <div className='flex aspect-square size-5 items-center justify-center rounded-md bg-sidebar-primary text-sidebar-primary-foreground'>
                {/* <activeTeam.logo className='size-3' /> */}
              </div>
              <span className='truncate font-semibold'>{activeTeam.name}</span>
              <ChevronDown className='opacity-50' />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className='w-64 rounded-lg'
            align='start'
            side='bottom'
            sideOffset={4}>
            <DropdownMenuLabel className='text-xs text-muted-foreground'>
              Teams
            </DropdownMenuLabel>
            {teams.map((team, index) => (
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
              <div className='font-medium text-muted-foreground'>Add team</div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
