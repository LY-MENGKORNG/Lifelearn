import GlobalProvider from '@/common/providers/global-provider'
import AppSidebar from '@/components/admin/sidebar/AppSidebar'
import { SidebarProvider } from '@/components/ui/sidebar'
import { PropsWithChildren } from 'react'

type AdminLayoutProps = PropsWithChildren
export default function AdminLayout({ children }: AdminLayoutProps) {
	return (
		<GlobalProvider>
			<SidebarProvider>
				<AppSidebar>
					<main className='relative flex flex-1 flex-col gap-4 px-4 py-6 pt-0'>
						{children}
					</main>
				</AppSidebar>
			</SidebarProvider>
		</GlobalProvider>
	)
}
