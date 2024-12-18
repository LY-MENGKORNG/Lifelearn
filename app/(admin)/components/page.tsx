import { Metadata } from 'next'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import DataTable from '@/components/commons/DataTable'
import { userList } from '@/constants/users'

export const metadata: Metadata = {
	title: 'Lifelearn - components',
	description: 'List of reusable UI components',
}
export default function Component() {
	return (
		<div className='mt-5 flex flex-col gap-3'>
			<Card className='p-3 flex gap-2'>
				<Badge variant={'default'}>Default</Badge>
				<Badge variant={'secondary'}>Secondary</Badge>
				<Badge variant={'destructive'}>Destructive</Badge>
				<Badge variant={'outline'}>Outline</Badge>
				<Badge variant={'info'}>Info</Badge>
				<Badge variant={'warning'}>Warning</Badge>
				<Badge variant={'error'}>Error</Badge>
				<Badge variant={'success'}>Success</Badge>
				<Badge variant={'skyblue'}>Skeyblue</Badge>
				<Badge variant={'purple'}>Purple</Badge>
			</Card>
			<Card className='p-3 flex gap-2'>
				<DataTable
					data={userList}
					columns={[
						{ accessorKey: 'id', header: 'ID', enableSorting: true },
						{ accessorKey: 'name', header: 'Name', enableSorting: true },
						{ accessorKey: 'email', header: 'Email' },
						{ accessorKey: 'role', header: 'Role' },
					]}
				/>
			</Card>
		</div>
	)
}
