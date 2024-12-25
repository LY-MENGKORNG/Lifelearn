import { ReactNode } from 'react'
import {
	AlertDialog as Dialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from '../ui/alert-dialog'
import { Button } from '../ui/button'

type AlertDialogProps = {
	button: ReactNode
	title: string
	description?: string
	children?: ReactNode
}

const AlertDialog = ({
	button,
	title,
	description,
	children,
}: AlertDialogProps) => (
	<Dialog>
		<AlertDialogTrigger asChild>{button}</AlertDialogTrigger>
		<AlertDialogContent>
			<AlertDialogHeader>
				<AlertDialogTitle>{title}</AlertDialogTitle>
				<AlertDialogDescription>{description}</AlertDialogDescription>
			</AlertDialogHeader>
			{children}
		</AlertDialogContent>
	</Dialog>
)

export default AlertDialog
