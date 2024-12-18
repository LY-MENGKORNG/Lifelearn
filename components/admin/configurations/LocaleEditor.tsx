'use client'

import { useEffect, useState } from 'react'

export default function LocaleEditor({ lang }: { lang: string }) {
	const [messages, setMessages] = useState<Record<string, string>>({})
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const fetchMessages = async () => {
			const response = await fetch(`/api/messages/${lang}`)
			const data = await response.json()
			setMessages(data)
			setLoading(false)
		}
		fetchMessages()
	}, [lang])

	if (loading) return <div>Loading...</div>

	return (
		<div>
			<h1>Editing {lang}.json</h1>
			<textarea
				value={JSON.stringify(messages, null, 2)}
				onChange={(e) => setMessages(JSON.parse(e.target.value))}
				rows={20}
				cols={50}
			/>
		</div>
	)
}
