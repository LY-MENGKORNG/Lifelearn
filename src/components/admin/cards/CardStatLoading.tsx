import { Card } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'
type CardStatLoadingProps = {
	count: number
}
export default function CardStatLoading({ count = 1 }: CardStatLoadingProps) {
	return (
		<>
			{Array.from({ length: count }).map((_, index) => (
				<div
					key={index}
					className='flex flex-col space-y-3'>
					<Skeleton className='h-[80px] w-full rounded-xl' />
					<div className='space-y-2 flex flex-col'>
						<Skeleton className='h-4 w-full' />
						<Skeleton className='h-4 w-full' />
					</div>
				</div>
			))}
		</>
	)
}
