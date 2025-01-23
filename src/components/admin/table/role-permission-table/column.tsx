'use client'

import { Button } from '@/components/ui/button'
import { ABILITIES } from '@/constants'
import { ColumnDef } from '@tanstack/react-table'

export const rolePermissionColumns: ColumnDef<string>[] = ABILITIES.map(
	(value) => ({
		accessorKey: value,
		header: ({ column }) => (
			<Button
				variant='ghost'
				onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
				{value}
			</Button>
		),
		enableSorting: false,
		enableHiding: false,
	})
)
