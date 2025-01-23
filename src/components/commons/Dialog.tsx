import useGlobalContext from '@/commons/contexts/global-context'
import { Button } from '@/components/ui/button'
import {
	Dialog as Dialogs,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import { ReactNode } from 'react'

type DialogProps = {
	buttonTitle: string
	title: string
	description?: string
	showCloseButton?: boolean
	children: ReactNode
}
export default function Dialog({
	buttonTitle = 'button',
	title = '',
	description = '',
	showCloseButton = true,
	children,
}: DialogProps) {
	const { t } = useGlobalContext()
	return (
		<Dialogs>
			<DialogTrigger asChild>
				<Button className="capitalize">{buttonTitle}</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-md">
				<DialogHeader>
					<DialogTitle className="capitalize">{title}</DialogTitle>
					<DialogDescription>{description}</DialogDescription>
				</DialogHeader>
				<div></div>
				<DialogFooter className="sm:justify-end gap-1">
					<DialogClose asChild>
						{showCloseButton ? (
							<Button
								type="button"
								variant="secondary">
								Close
							</Button>
						) : null}
					</DialogClose>
					{children}
				</DialogFooter>
			</DialogContent>
		</Dialogs>
	)
}
