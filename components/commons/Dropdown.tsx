import { ReactNode } from 'react'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { LucideProps } from 'lucide-react'
import Link from 'next/link'

type DropdownProps = {
	label?: string
	width?: '40' | '52'
	children: ReactNode
	align?: 'center' | 'end' | 'start'
	content?: ReactNode | undefined
	options?: Array<{
		label: string
		icon: React.ForwardRefExoticComponent<
			Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
		>
		disabled?: boolean
		navigate?: string
	}>
	value?: string | number | boolean | null | undefined
	onValueChange?: (value: DropdownProps['value']) => void
}

/**
 *
 * @param children
 * @param label
 * @param width
 * @param align
 * @param content
 * @param onValueChange
 * @param options
 * @param value
 * @return JSX.Element
 */
export default function Dropdown({
	children,
	label,
	width = '40',
	align = 'center',
	content,
	onValueChange,
	options,
	value,
}: DropdownProps) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
			<DropdownMenuContent
				className={`w-${width}`}
				align={align}>
				<DropdownMenuLabel>{label}</DropdownMenuLabel>
				{!content ? (
					<>
						{options?.map(
							({ icon, label, disabled = false, navigate }, index) => (
								<DropdownMenuItem
									key={index}
									disabled={disabled}>
									<Link href={navigate ? navigate : ''}>{label}</Link>
								</DropdownMenuItem>
							)
						)}
					</>
				) : (
					content
				)}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
