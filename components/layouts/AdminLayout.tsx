import React, { PropsWithChildren } from 'react'
import { SidebarProvider } from '../ui/sidebar'
import AppSidebar from '../admin/sidebar/AppSidebar'

type AdminLayoutProps = PropsWithChildren
export default function AdminLayout({ children }: AdminLayoutProps) {
	return (
		<SidebarProvider>
			<AppSidebar>{children}</AppSidebar>
		</SidebarProvider>
	)
}
