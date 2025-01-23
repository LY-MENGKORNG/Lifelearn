'use client'

import { Search } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import { EMAIL_TAG } from '@/constants/email'
import { useEffect, useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { getEmail } from '@/actions/email'
import EmailLoading from './EmailLoading'
import useGlobalContext from '@/commons/contexts/global-context'

type EmailListProps = {
	onSelectEmail: (email: Email) => void
	isMobile: boolean
	selectedEmail: Email | undefined
}

export default function InboxList({
	onSelectEmail,
	selectedEmail,
}: EmailListProps) {
	const [tab, setTab] = useState<EmailStatus>('unread')
	const [emails, setEmails] = useState<Email[]>([])
	const { loading, setLoading, t } = useGlobalContext()

	useEffect(() => {
		const fetchEmail = async () => {
			const emails = await getEmail({ status: tab })
			console.log(emails)
			setEmails(emails)
			onSelectEmail(emails[0])
			setLoading(false)
		}

		fetchEmail()
	}, [setLoading, onSelectEmail, tab])

	const onChangeTabs = (tab: EmailStatus) => {
		setTab(tab)
		setLoading(true)
	}

	const renderEmailList = (email: Email) => (
		<button
			key={email.id}
			onClick={() => onSelectEmail(email)}
			className={`flex flex-col gap-2 border p-4 rounded-lg text-left hover:bg-secondary/50 ${
				selectedEmail?.id === email.id ? 'bg-secondary border-primary' : ''
			}`}>
			<div className='flex w-full items-center justify-between gap-2'>
				<div className='font-semibold'>{email.from}</div>
				<div className='text-xs text-muted-foreground'>{email.timestamp}</div>
			</div>
			<div className='text-sm'>{email.subject}</div>
			<div className='text-xs text-muted-foreground line-clamp-2'>
				{email.preview}
			</div>
			<div className='flex gap-2'>
				{email.tags.map((tag) => (
					<Badge
						key={tag}
						variant={EMAIL_TAG[tag]}>
						{tag}
					</Badge>
				))}
			</div>
		</button>
	)

	return (
		<Tabs
			defaultValue={tab}
			className='flex h-full flex-col'>
			<div className='between h-[52px] border-b px-3'>
				<span className='sub-title capitalize'>{t('inbox.title')}</span>
				<TabsList className='grid grid-cols-2'>
					<TabsTrigger
						value='unread'
						onClick={() => onChangeTabs('unread')}>
						{t('inbox.unread')}
					</TabsTrigger>
					<TabsTrigger
						value='read'
						onClick={() => onChangeTabs('read')}>
						{t('inbox.read')}
					</TabsTrigger>
				</TabsList>
			</div>
			<ScrollArea className='flex-1 flex-col gap-3'>
				<div className='flex h-[52px] items-center my-1 p-3'>
					<div className='flex w-full items-center gap-2 border rounded-lg bg-secondary/50 px-3 py-2'>
						<Search className='h-4 w-4 text-muted-foreground' />
						<input
							type='text'
							placeholder='Search'
							className='flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground'
						/>
					</div>
				</div>
				<TabsContent
					value={tab}
					className='flex flex-col gap-2 px-3'>
					{!loading && emails.length ? (
						emails.map((email) => renderEmailList(email))
					) : (
						<EmailLoading />
					)}
				</TabsContent>
			</ScrollArea>
		</Tabs>
	)
}
