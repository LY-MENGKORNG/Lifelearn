import { ReactNode } from 'react'
import Navbar from '@/components/web/Navbar'

type WebLayoutProps = {
	children: ReactNode
}
export default function WebLayout({ children }: WebLayoutProps) {
	return (
		<>
			<Navbar />
			<main className='xl:px-20 px-5'>{children}</main>
		</>
	)
}
