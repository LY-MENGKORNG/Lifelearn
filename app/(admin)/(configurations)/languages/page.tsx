import { getTranslations } from 'next-intl/server'
import React from 'react'

export default async function language() {
	const t = await getTranslations()
	return <div></div>
}
