'use client'
import { ArrowLeft, Mail, MailOpen, MoreVertical } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import useGlobalContext from '@/commons/contexts/global-context'
import { Textarea } from '@/components/ui/textarea'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import Tooltip from '@/components/commons/Tooltip'
import { useState } from 'react'
import { updateEmail } from '@/actions/email'
import { revalidatePath } from 'next/cache'

interface EmailDetailProps {
	email: Email
	onClosePanel: (close: boolean) => void
}

export default function EmailDetail({ email, onClosePanel }: EmailDetailProps) {
	const { t } = useGlobalContext()
	const [emailStatus, setEmailStatus] = useState<EmailStatus | undefined>(
		email?.status
	)

	const handleStatusChange = async () => {
		// await updateEmail({ id: email.id, status: emailStatus! })
		setEmailStatus((prev) => (prev === 'unread' ? 'read' : 'unread'))
		console.log(`updateEmail ${emailStatus}`)
	}

	return (
		<div className='relative flex h-full flex-col'>
			<div className='flex h-[52px] items-center justify-between gap-4 border-b px-4'>
				<div className='flex items-center gap-2'>
					<Button
						onClick={() => onClosePanel(true)}
						variant='ghost'
						size='icon'
						className='md:hidden'>
						<ArrowLeft className='h-4 w-4' />
					</Button>
					<div className='text-sm font-medium'>{email?.subject}</div>
				</div>
				<div className='flex items-center gap-2'>
					<Tooltip
						content={
							<p>
								{t(
									`${
										emailStatus === 'read'
											? 'tooltip.markAsUnread'
											: 'tooltip.markAsRead'
									}`
								)}
							</p>
						}>
						<Button
							disabled={!emailStatus}
							variant='ghost'
							size='icon'
							onClick={() => handleStatusChange()}>
							{emailStatus === 'unread' ? (
								<Mail className='h-4 w-4' />
							) : (
								<MailOpen className='h-4 w-4' />
							)}
						</Button>
					</Tooltip>
					<Button
						variant='ghost'
						size='icon'>
						<MoreVertical className='h-4 w-4' />
					</Button>
				</div>
			</div>
			<ScrollArea className='flex-1'>
				<div className='flex flex-col gap-4'>
					<div className='between gap-4 px-4 py-2 border-b'>
						<div className='flex h-10 w-10 items-center justify-center rounded-full bg-secondary'>
							<span className='text-sm font-medium'>
								{email.from
									.split(' ')
									.map((n) => n[0])
									.join('')}
							</span>
						</div>
						<div className='flex justify-between items-center w-full'>
							<div className='flex flex-col'>
								<div className='font-semibold'>{email.from}</div>
								{email.replyTo && (
									<div className='text-xs text-muted-foreground'>
										Reply-To: {email.replyTo}
									</div>
								)}
							</div>
							<div className='ml-auto text-xs text-muted-foreground'>
								{email.timestamp}
							</div>
						</div>
					</div>
					<div className='whitespace-pre-wrap text-sm px-4'>
						{email.content}
					</div>
				</div>
			</ScrollArea>
			<form
				id='formEmail'
				className='flex flex-col p-4 gap-4 absolute bottom-0 right-0 w-full z-10 border-t bg-background'>
				<Textarea
					name='content'
					placeholder={`Reply to: ${email.replyTo}`}
					className='min-h-32 max-h-40 bg-secondary'
				/>
				<div className='between'>
					<div className='center gap-2'>
						<Switch
							name='mute'
							id='thread'
						/>
						<Label
							htmlFor='thread'
							className='select-none cursor-pointer'>
							{t('label.mute')}
						</Label>
					</div>
					<Button type='button'>{t('button.send')}</Button>
				</div>
			</form>
		</div>
	)
}
