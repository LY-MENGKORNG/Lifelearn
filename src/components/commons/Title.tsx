import React from 'react'
import { Separator } from '../ui/separator'
import { cn } from '@/lib/utils'

type TitleProps = {
	title: string
	description?: string
	className?: string
}
export default function Title({ title, description, className }: TitleProps) {
	return (
		<h1 className={cn('sub-title', className)}>
			{title}
			{description && <p className='description'>{description}</p>}
		</h1>
	)
}
