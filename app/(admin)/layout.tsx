import AppSidebar from '@/components/admin/sidebar/AppSidebar'
import { SidebarProvider } from '@/components/ui/sidebar'
import { PropsWithChildren } from 'react'

type AdminLayoutProps = PropsWithChildren
export default function AdminLayout({ children }: AdminLayoutProps) {
	return (
		<SidebarProvider>
			<AppSidebar>{children}</AppSidebar>
		</SidebarProvider>
	)
}
