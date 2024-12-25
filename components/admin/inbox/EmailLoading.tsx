import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

export default function EmailLoading() {
	return (
		<>
			{Array.from({ length: 6 }).map((_, index) => (
				<Skeleton
					key={index}
					className='w-full flex flex-col gap-2 border p-4 rounded-lg'>
					<div className='flex items-center gap-2'>
						<Skeleton className='h-8 w-8 rounded-full' />
						<Skeleton className='h-6 w-6 text-muted-foreground' />
					</div>
					<Skeleton className='h-4 w-full' />
				</Skeleton>
			))}
		</>
	)
}
