import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import GlobalProvider from '@/commons/providers/global-provider'
import AppSidebar from '@/components/admin/sidebar/AppSidebar'
import { SidebarProvider } from '@/components/ui/sidebar'
import { PropsWithChildren } from 'react'
import { redirect } from 'next/navigation'
import prisma from '@/lib/db'
import { getUserWithRoles } from '@/actions/user'
import { ACCESSIBILITIES, RoleEnum } from '@/constants'

type AdminLayoutProps = PropsWithChildren
export default async function AdminLayout({ children }: AdminLayoutProps) {
	const { isAuthenticated, getUser } = getKindeServerSession()

	if (!isAuthenticated) return redirect('/api/auth/login')

	const user = await getUser()
	const dbUser = await getUserWithRoles(user.email!)
	const isAdmin = dbUser?.role.includes(RoleEnum.ADMIN)
	if (!isAdmin) return redirect('/auth/unauthorized')

	return (
		<GlobalProvider>
			<SidebarProvider>
				<AppSidebar>
					<main className="relative flex flex-1 flex-col gap-4 px-4 py-6 pt-0">
						{children}
					</main>
				</AppSidebar>
			</SidebarProvider>
		</GlobalProvider>
	)
}
