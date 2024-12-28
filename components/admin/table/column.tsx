'use client'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { ColumnDef } from '@tanstack/react-table'
import { ArrowUpDown } from 'lucide-react'

export const userTableColumns: ColumnDef<User>[] = [
	{
		id: 'select',
		header: ({ table }) => (
			<Checkbox
				checked={
					table.getIsAllPageRowsSelected() ||
					(table.getIsSomePageRowsSelected() && 'indeterminate')
				}
				onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
				aria-label='Select all'
			/>
		),
		cell: ({ row }) => (
			<Checkbox
				checked={row.getIsSelected()}
				onCheckedChange={(value) => row.toggleSelected(!!value)}
				aria-label='Select row'
			/>
		),
		enableSorting: false,
		enableHiding: false,
	},
	{
		accessorKey: 'username',
		header: ({ column }) => (
			<Button
				variant='ghost'
				onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
				Name
				<ArrowUpDown />
			</Button>
		),
		cell: ({ row }) => (
			<div className='lowercase'>{row.getValue('username')}</div>
		),
		enableSorting: true,
	},
	{
		accessorKey: 'email',
		header: ({ column }) => (
			<Button
				variant='ghost'
				onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
				Email
				<ArrowUpDown />
			</Button>
		),
		cell: ({ row }) => <div className='lowercase'>{row.getValue('email')}</div>,
	},
	{
		accessorKey: 'role',
		header: ({ column }) => (
			<Button
				variant='ghost'
				onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
				Role
				<ArrowUpDown />
			</Button>
		),
		cell: ({ row }) => <div className='lowercase'>{row.getValue('role')}</div>,
	},
]
