import CardStatLoading from '@/components/admin/cards/CardStatLoading'
import CardStats from '@/components/admin/cards/CardStats'
import FinancialDataChart from '@/components/admin/charts/FinancialDataChart'
import UserTable from '@/components/admin/table/UserTable'
import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { Suspense } from 'react'

export const metadata: Metadata = {
	title: 'Lifelearn - Dashboard',
}
export default async function Dashboard() {
	const t = await getTranslations()
	const limitQueryCount = 4

	return (
		<div className='px-4 flex flex-col gap-3'>
			<h1 className='sub-title mt-3'>{t('welcome')} 👋</h1>
			<section className='grid gap-2 xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2'>
				<Suspense fallback={<CardStatLoading count={limitQueryCount} />}>
					<CardStats />
				</Suspense>
			</section>
			<section className='grid grid-cols-12 gap-2'>
				<div className='xl:col-span-7 lg:col-span-6 col-span-12'>
					<FinancialDataChart />
				</div>
				<div className='xl:col-span-5 lg:col-span-6 col-span-12 max-h-[500px]'>
					<UserTable />
				</div>
			</section>
		</div>
	)
}
