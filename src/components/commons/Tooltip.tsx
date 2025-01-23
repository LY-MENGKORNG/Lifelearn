import { ReactNode } from 'react'
import { Tooltip as Tip, TooltipContent, TooltipTrigger } from '../ui/tooltip'
type TooltipProps = {
	children: ReactNode
	content: ReactNode
}
export default function Tooltip({ children, content }: TooltipProps) {
	return (
		<Tip>
			<TooltipTrigger asChild>{children}</TooltipTrigger>
			<TooltipContent>
				<TooltipContent className='capitalize'>{content}</TooltipContent>
			</TooltipContent>
		</Tip>
	)
}
