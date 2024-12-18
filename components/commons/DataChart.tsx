'use client'
import {
	Bar,
	BarChart,
	PieChart,
	LineChart,
	AreaChart,
<<<<<<< HEAD
	CartesianGrid,
=======
>>>>>>> b73017f (chore(main): #3 change tech stack)
	XAxis,
	YAxis,
	Line,
	Area,
<<<<<<< HEAD
	Scatter,
	Legend,
=======
>>>>>>> b73017f (chore(main): #3 change tech stack)
} from 'recharts'
import {
	ChartConfig,
	ChartContainer,
<<<<<<< HEAD
=======
	ChartLegend,
	ChartLegendContent,
>>>>>>> b73017f (chore(main): #3 change tech stack)
	ChartTooltip,
	ChartTooltipContent,
} from '../ui/chart'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '../ui/card'
import { ReactNode, useState } from 'react'

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from '../ui/select'
import { useTranslations } from 'next-intl'
<<<<<<< HEAD

type DataChartProps<T, K extends keyof T> = {
=======
import { Label } from '../ui/label'

type DataChartProps<T> = {
>>>>>>> b73017f (chore(main): #3 change tech stack)
	data: T[]
	type?: ChartType
	title?: string
	description?: string
<<<<<<< HEAD
	xAxisKey: K
	yAxisKeys: (keyof T)[]
	footer?: ReactNode
}

export default function DataChart<T, K extends keyof T>({
=======
	footer?: ReactNode
}

export default function DataChart<T>({
>>>>>>> b73017f (chore(main): #3 change tech stack)
	data,
	type = 'bar',
	title = 'Data Chart',
	description = 'Showing data chart',
<<<<<<< HEAD
	xAxisKey,
	yAxisKeys,
	footer,
}: DataChartProps<T, K>) {
	const t = useTranslations()
	const [chartType, setChartType] = useState<ChartType>(type)
=======
	footer,
}: DataChartProps<T>) {
	const t = useTranslations()
	const [chartType, setChartType] = useState<ChartType>(type)
	const yAxisKeys = Object.keys(data[0]!)
	const xAxisKey = yAxisKeys.splice(0, 1)[0]
>>>>>>> b73017f (chore(main): #3 change tech stack)

	const config = yAxisKeys.reduce((acc, key, index) => {
		acc[key as string] = {
			label: key as string,
			color: `hsl(var(--chart-${index + 1}))`,
		}
		return acc
	}, {} as Record<string, { label: string; color: string }>) as ChartConfig

	const ChartComponent = {
		line: LineChart,
		bar: BarChart,
		area: AreaChart,
		pie: PieChart,
<<<<<<< HEAD
		scatter: Scatter,
=======
>>>>>>> b73017f (chore(main): #3 change tech stack)
	}[chartType]

	const DataSeries = yAxisKeys.map((key, index) => {
		const SeriesComponent = {
			line: Line,
			bar: Bar,
			area: Area,
<<<<<<< HEAD
			scatter: Scatter,
=======
>>>>>>> b73017f (chore(main): #3 change tech stack)
		}[chartType]

		return (
			<SeriesComponent
				key={index}
				type='monotone'
				dataKey={key as string}
				stroke={`var(--color-${key as string})`}
				fill={
					chartType === 'area' || chartType === 'bar'
						? `var(--color-${key as string})`
						: undefined
				}
<<<<<<< HEAD
				radius={4}
=======
				radius={3}
>>>>>>> b73017f (chore(main): #3 change tech stack)
			/>
		)
	})

	return (
		<Card className='shadow-none p-0'>
			<CardHeader className='flex flex-row justify-between items-center'>
				<div>
					<CardTitle>{title}</CardTitle>
					<CardDescription>{description}</CardDescription>
				</div>
				<Select
					onValueChange={(value: ChartType) => setChartType(value)}
					defaultValue={chartType}>
					<SelectTrigger className='max-w-[180px]'>
						<SelectValue placeholder={t('selection.view')} />
					</SelectTrigger>
					<SelectContent className='capitalize'>
						<SelectGroup>
							<SelectLabel>{t('selection.view')}</SelectLabel>
							<SelectItem value='line'>{t('selection.line')}</SelectItem>
							<SelectItem value='bar'>{t('selection.bar')}</SelectItem>
							<SelectItem value='area'>{t('selection.area')}</SelectItem>
<<<<<<< HEAD
							<SelectItem value='scatter'>{t('selection.scatter')}</SelectItem>
=======
>>>>>>> b73017f (chore(main): #3 change tech stack)
						</SelectGroup>
					</SelectContent>
				</Select>
			</CardHeader>
			<CardContent>
				<ChartContainer
					className='min-h-64 max-h-72 w-full'
					config={config}>
					<ChartComponent
						accessibilityLayer
						data={data}>
						<XAxis
							dataKey={xAxisKey as string}
							tickLine={false}
							tickMargin={10}
							axisLine={true}
							tickFormatter={(value) => value.slice(0, 3)}
						/>
						<YAxis
							axisLine={true}
							tickLine={true}
						/>
						<ChartTooltip
							cursor={false}
<<<<<<< HEAD
							content={<ChartTooltipContent indicator='dashed' />}
						/>
						<Legend />
=======
							content={
								<ChartTooltipContent
									className='capitalize'
									indicator='line'
								/>
							}
						/>
						<ChartLegend
							className='capitalize'
							content={<ChartLegendContent />}
						/>
>>>>>>> b73017f (chore(main): #3 change tech stack)
						{Object.keys(config).map((key) =>
							DataSeries.find((series) => series.props.dataKey === key)
						)}
					</ChartComponent>
				</ChartContainer>
			</CardContent>
			<CardFooter className='flex-col items-start gap-2 text-sm'>
				{footer}
			</CardFooter>
		</Card>
	)
}
