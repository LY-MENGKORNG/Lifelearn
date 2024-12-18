import React from 'react'
import DataChart from '@/components/commons/DataChart'
import { TrendingUp } from 'lucide-react'

<<<<<<< HEAD
=======
type DataChartType = {
	month: string
	income: number
	expense: number
}

>>>>>>> b73017f (chore(main): #3 change tech stack)
const dataChart = [
	{ month: 'Jan', income: 50, expense: 100 },
	{ month: 'Feb', income: 300, expense: 200 },
	{ month: 'Mar', income: 100, expense: 300 },
	{ month: 'Apr', income: 500, expense: 400 },
	{ month: 'May', income: 800, expense: 500 },
	{ month: 'Jun', income: 500, expense: 600 },
	{ month: 'Jul', income: 1000, expense: 700 },
	{ month: 'Aug', income: 900, expense: 300 },
]

const FinancialDataChart = () => (
<<<<<<< HEAD
	<DataChart
		data={dataChart}
		xAxisKey='month'
		yAxisKeys={['income', 'expense']}
		title='Financial Data Chart'
=======
	<DataChart<DataChartType>
		data={dataChart}
		title='Financial Data'
>>>>>>> b73017f (chore(main): #3 change tech stack)
		description='Showing financial data chart'
		footer={
			<>
				<div className='flex gap-2 font-medium leading-none'>
					Trending up by 5.2% this month <TrendingUp className='h-4 w-4' />
				</div>
				<div className='leading-none text-muted-foreground'>
					Showing total visitors for the last 12 months
				</div>
			</>
		}
	/>
)
export default FinancialDataChart
