'use client'
import {
	Bar,
	BarChart,
	PieChart,
	LineChart,
	AreaChart,
	XAxis,
	YAxis,
	Line,
	Area,
} from 'recharts'
import {
	ChartConfig,
	ChartContainer,
	ChartLegend,
	ChartLegendContent,
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
import { Label } from '../ui/label'

type DataChartProps<T> = {
	data: T[]
	type?: ChartType
	title?: string
	description?: string
	footer?: ReactNode
}

export default function DataChart<T>({
	data,
	type = 'bar',
	title = 'Data Chart',
	description = 'Showing data chart',
	footer,
}: DataChartProps<T>) {
	const t = useTranslations()
	const [chartType, setChartType] = useState<ChartType>(type)
	const yAxisKeys = Object.keys(data[0]!)
	const xAxisKey = yAxisKeys.splice(0, 1)[0]

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
	}[chartType]

	const DataSeries = yAxisKeys.map((key, index) => {
		const SeriesComponent = {
			line: Line,
			bar: Bar,
			area: Area,
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
				radius={3}
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
						margin={{ left: -20 }}
						data={data}>
						<XAxis
							dataKey={xAxisKey as string}
							axisLine={true}
							tickLine={false}
							tickMargin={10}
							tickFormatter={(value) => value.slice(0, 3)}
						/>
						<YAxis
							axisLine={true}
							tickLine={true}
						/>
						<ChartTooltip
							cursor={false}
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
