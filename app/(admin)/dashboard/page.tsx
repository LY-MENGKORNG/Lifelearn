import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import React, { Suspense } from 'react'

export const metadata: Metadata = {
	title: 'Lifelearn - Dashboard',
}
export default async function Dashboard() {
	const t = await getTranslations()
	return (
		<>
			<h1 className='sub-title mt-3'>Welcome back to {t('appName')} 👋</h1>
			<p>{t('paragraph')}</p>
			<Suspense></Suspense>
			<Suspense></Suspense>
		</>
	)
}
