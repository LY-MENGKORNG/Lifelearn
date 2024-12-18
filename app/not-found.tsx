'use client'

import { usePathname } from 'next/navigation'
import React from 'react'

export default function NotFound() {
	const pathName = usePathname()
	return <div>Page not found with location {pathName}</div>
}
