'use client'
import { usePathname, redirect } from 'next/navigation'

export default function NotFound() {
	const pathName = usePathname()
	setTimeout(() => redirect('/admin/dashboard'), 2000)
	return (
		<div className="w-full h-full center">
			Page not found with location {pathName}
		</div>
	)
}
