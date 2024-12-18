import LocaleEditor from '@/components/admin/configurations/LocaleEditor'
import { getTranslations } from 'next-intl/server'
import React from 'react'

export default async function language() {
	const t = await getTranslations()
	return (
		<div>
			<LocaleEditor lang='km' />
		</div>
	)
}
