import Title from '@/components/commons/Title'
import { getTranslations } from 'next-intl/server'

export default async function RolePermission() {
	const t = await getTranslations()
	return (
		<>
			<div className="flex justify-between items-center mt-3">
				<Title
					className="capitalize"
					title={t('configs.rolePermission.title')}
				/>
			</div>
			<section></section>
		</>
	)
}
