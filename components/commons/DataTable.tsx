'use client'
import { ChangeEvent, useEffect, useState } from 'react'
import {
	ColumnDef,
	ColumnFiltersState,
	flexRender,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	SortingState,
	useReactTable,
	VisibilityState,
} from '@tanstack/react-table'
import {
	Table,
	TableHeader,
	TableBody,
	TableRow,
	TableHead,
	TableCell,
} from '@/components/ui/table'
import { Input } from '@/components/ui/input'
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'

type DataTableProps<Tdata, Tvalue> = {
	columns: ColumnDef<Tdata, Tvalue>[]
	data?: Tdata[]
	dataEndpoint?: string // eg. /localhost:3000/api/user
}

/**
 * A reusable components for `Table`
 * @param {Array<Tdata>} data
 * @param {Array<ColumnDef<Tdata, Tvalue>>} columns
 * @return JSX.Element
 */
export default function DataTable<Tdata, Tvalue>({
	columns,
	data = [],
	dataEndpoint,
}: DataTableProps<Tdata, Tvalue>) {
	const [sorting, setSorting] = useState<SortingState>([])
	const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
	const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
	const [rowSelection, setRowSelection] = useState({})
	const [chartData, setChartData] = useState<Tdata[]>(data)
	const [loading, setLoading] = useState<boolean>(false)

	useEffect(() => {
		if (!dataEndpoint) return

		const fetchData = async () => {
			setLoading(true)
			try {
				const response = await fetch(dataEndpoint, { cache: 'no-store' })
				const result: Tdata[] = await response.json()
				setChartData(result)
			} catch (error) {
				console.error('Error fetching data:', error)
			} finally {
				setLoading(false)
			}
		}

		fetchData()
	}, [dataEndpoint])

	const table = useReactTable({
		data: chartData,
		columns,
		onSortingChange: setSorting,
		onColumnFiltersChange: setColumnFilters,
		onColumnVisibilityChange: setColumnVisibility,
		onRowSelectionChange: setRowSelection,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		state: {
			sorting,
			columnFilters,
			columnVisibility,
			rowSelection,
		},
	})

	return (
		<div className={`w-full`}>
			<div className={'flex items-center pb-1'}>
				<Input
					placeholder={'Filter email...'}
					value={(table.getColumn('email')?.getFilterValue() as string) ?? ''}
					onChange={(event: ChangeEvent<HTMLInputElement> | undefined) =>
						table.getColumn('email')?.setFilterValue(event?.target.value)
					}
					className={'max-w-sm'}
				/>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button
							variant={'outline'}
							className={'ml-auto'}>
							Columns <ChevronDown />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align={'end'}>
						{table
							.getAllColumns()
							.filter((column) => column.getCanHide())
							.map((column) => (
								<DropdownMenuCheckboxItem
									key={column.id}
									checked={column.getIsVisible()}
									onCheckedChange={(value) => column.toggleVisibility(value)}>
									{column.id}
								</DropdownMenuCheckboxItem>
							))}
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
			<div className='rounded-md border'>
				<Table>
					{/* Table Header */}
					<TableHeader className={'py-0 bg-muted/50'}>
						{table.getHeaderGroups().map((headerGroup) => (
							<TableRow
								key={headerGroup.id}
								className='h-12'>
								{headerGroup.headers.map((header) => (
									<TableHead key={header.id}>
										{header.isPlaceholder
											? null
											: flexRender(
													header.column.columnDef.header,
													header.getContext()
											  )}
									</TableHead>
								))}
							</TableRow>
						))}
					</TableHeader>

					{/* Table Body */}
					<TableBody>
						{table.getRowModel().rows?.length ? (
							table.getRowModel().rows.map((row) => (
								<TableRow
									key={row.id}
									className='h-12'
									data-state={row.getIsSelected() && 'selected'}>
									{row.getVisibleCells().map((cell) => (
										<TableCell key={cell.id}>
											{flexRender(
												cell.column.columnDef.cell,
												cell.getContext()
											)}
										</TableCell>
									))}
								</TableRow>
							))
						) : (
							<TableRow>
								<TableCell
									colSpan={columns.length}
									className='h-24 text-center'>
									{loading ? 'Loading...' : 'No results.'}
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>

			{/* Table Footer */}
			<div className='flex items-center justify-end space-x-2 py-4'>
				<div className='flex-1 text-sm text-muted-foreground'>
					{table.getFilteredSelectedRowModel().rows.length} of{' '}
					{table.getFilteredRowModel().rows.length} row(s) selected.
				</div>
				<div className='space-x-2'>
					<Button
						variant='outline'
						size='sm'
						onClick={() => table.previousPage()}
						disabled={!table.getCanPreviousPage()}>
						Previous
					</Button>
					<Button
						variant='outline'
						size='sm'
						onClick={() => table.nextPage()}
						disabled={!table.getCanNextPage()}>
						Next
					</Button>
				</div>
			</div>
		</div>
	)
}
