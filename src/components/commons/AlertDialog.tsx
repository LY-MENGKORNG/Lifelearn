import React, { ReactNode } from 'react'
import {
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
	AlertDialog as Dialog,
} from '../ui/alert-dialog'
import { Button } from '../ui/button'
type AlertDialogType = {
	trigger: ReactNode
	title: string
	description?: string
	action: <T>(arg: T) => void
	actionLabel?: string
}
export default function AlertDialog({
	trigger,
	title,
	description,
	action,
	actionLabel,
}: AlertDialogType) {
	return (
		<Dialog>
			<AlertDialogTrigger asChild>{trigger}</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>{title}</AlertDialogTitle>
					<AlertDialogDescription>{description}</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>Cancel</AlertDialogCancel>
					<AlertDialogAction asChild>
						<Button onClick={action}>{actionLabel}</Button>
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</Dialog>
	)
}
