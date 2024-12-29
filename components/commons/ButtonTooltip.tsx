import { ReactNode } from 'react'
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip'

type TooltipProps = {
	children: ReactNode
	button: ReactNode
	align?: 'center' | 'start' | 'end'
	side?: 'right' | 'top' | 'bottom' | 'left'
}
export default function ButtonTooltip({
	children,
	button,
	align = 'center',
	side = 'right',
}: TooltipProps) {
	return (
		<Tooltip>
			<TooltipTrigger asChild>{button}</TooltipTrigger>
			<TooltipContent
				side={side}
				align={align}>
				{children}
			</TooltipContent>
		</Tooltip>
	)
}
