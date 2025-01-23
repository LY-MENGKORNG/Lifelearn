import { getTranslations } from 'next-intl/server'

export default async function language() {
	const t = await getTranslations()
	return <div></div>
}
