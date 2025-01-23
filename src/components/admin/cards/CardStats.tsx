import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { CircleDollarSign, LucideProps, User } from 'lucide-react'
import {
	Fragment,
	type ForwardRefExoticComponent,
	type RefAttributes,
} from 'react'
import { Badge } from '@/components/ui/badge'

type CardStatsType = {
	title: string
	value: number | string
	icon: ForwardRefExoticComponent<
		Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
	>
	description: string
	badge: BadgeVariantsProps
}

const CARD_STATS: CardStatsType[] = [
	{
		title: 'Total Sales',
		value: 1000,
		description: 'Last 7 days',
		icon: CircleDollarSign,
		badge: 'fuchsia',
	},
	{
		title: 'New Customers',
		value: 500,
		description: 'Last 30 days',
		icon: User,
		badge: 'skyblue',
	},
	{
		title: 'Total Orders',
		value: 2000,
		description: 'Last 90 days',
		icon: CircleDollarSign,
		badge: 'orange',
	},
	{
		title: 'Top Products',
		value: 150,
		description: 'Last 12 months',
		icon: CircleDollarSign,
		badge: 'teal',
	},
]

export default async function CardStats() {
	const getCardStats = async (): Promise<CardStatsType[]> => {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve(CARD_STATS)
			}, 1000)
		})
	}
	const stats = await getCardStats()

	return (
		<>
			{stats.map(({ title, description, value, icon: Icon, badge }, index) => (
				<Card
					key={index}
					className='flex justify-between shadow-none backdrop-blur-xl bg-white/3'>
					<CardHeader className='p-3 flex flex-col items-start justify-between'>
						<div>
							<Badge variant={badge}>{title}</Badge>
							<h2 className='title font-bold'>{value}</h2>
						</div>
						<p className='description'>{description}</p>
					</CardHeader>
					<CardContent className='p-3'>
						<Icon color={badge} />
					</CardContent>
				</Card>
			))}
		</>
	)
}
