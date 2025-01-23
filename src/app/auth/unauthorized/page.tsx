'use client'

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

export default function Unauthorized() {
	const router = useRouter()
	return (
		<div className='flex flex-col items-center justify-center w-full h-svh'>
			You have no access to this page
			<Button onClick={() => router.back()}>Go back</Button>
		</div>
	)
}
