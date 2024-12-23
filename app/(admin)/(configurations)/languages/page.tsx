<<<<<<< HEAD
import LocaleEditor from '@/components/admin/configurations/LocaleEditor'
=======
>>>>>>> b73017f (chore(main): #3 change tech stack)
import { getTranslations } from 'next-intl/server'
import React from 'react'

export default async function language() {
	const t = await getTranslations()
<<<<<<< HEAD
	return (
		<div>
			<LocaleEditor lang='km' />
		</div>
	)
=======
	return <div></div>
>>>>>>> b73017f (chore(main): #3 change tech stack)
}
