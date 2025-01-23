'use client'

import { create, del } from '@/actions/role'
import AlertDialog from '@/components/commons/AlertDialog'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Plus, Trash2 } from 'lucide-react'
import { redirect } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'sonner'

type RolePermissionTableProps = {
	abilities: {
		id: number
		name: string
		permissions: {
			read: boolean
			create: boolean
			update: boolean
			delete: boolean
			key: string
		}[]
	}[]
}
export default function RolePermissionTable({
	abilities,
}: RolePermissionTableProps) {
	const [openDialog, setOpenDialog] = useState<boolean>()
	const [selectedRole, setSelectedRole] = useState<{
		id: number
		name: string
	}>()

	const handleDelete = async () => {
		if (!selectedRole?.id) return
		// open toast
		toast('Role deleted successfully!', {
			description: new Date().toLocaleTimeString(),
			duration: 3000,
			position: 'top-right',
			action: {
				label: 'Undo',
				onClick: () => {
					//
				},
			},
		})
		setTimeout(async () => {
			await del(selectedRole.id)
			redirect('/admin/role-permission')
		}, 3000)
	}

	const handleSubmit = async (formData: FormData) => {
		setOpenDialog(false)

		// check if the incoming role is already exists
		const existingRole = abilities.find(
			({ name }) => name === formData.get('name')
		)
		if (existingRole) {
			toast.error('Role already exists!', {
				description: new Date().toLocaleTimeString(),
				duration: 3000,
				position: 'top-right',
			})
			return
		}

		// open successed toast
		toast('New role added successfully!', {
			description: new Date().toLocaleTimeString(),
			duration: 5000,
			position: 'top-right',
			action: {
				label: 'Undo',
				onClick: () => {
					//
				},
			},
		})
		setTimeout(async () => {
			await create(formData)
			redirect('/admin/role-permission')
		}, 3000)
	}
	return (
		<Card className="flex flex-col">
			<CardHeader className="w-full justify-end items-end">
				<Dialog
					open={openDialog}
					onOpenChange={(isOpen) => setOpenDialog(isOpen)}>
					<div className="between gap-2">
						<DialogTrigger asChild>
							<Button
								variant={'outline'}
								size={'icon'}>
								<Plus className="h-4 w-4" />
							</Button>
						</DialogTrigger>
						<AlertDialog
							title="Are you absolutely sure?"
							description="This action cannot be undone. This will permanently delete your
								account and remove your data from our servers."
							action={handleDelete}
							actionLabel="Continue"
							trigger={
								<Button
									disabled={!selectedRole}
									variant={'outline'}
									size={'icon'}>
									<Trash2 className="w-4 h-4" />
								</Button>
							}
						/>
					</div>
					<DialogContent>
						<DialogTitle>Add a new role</DialogTitle>
						<DialogDescription>
							Please provide a name for the new role...
						</DialogDescription>
						<form action={handleSubmit}>
							<div className="space-y-1">
								<Label
									htmlFor="roleName"
									className="required">
									Name
								</Label>
								<Input
									id="roleName"
									type="text"
									placeholder="Name for role..."
									name="name"
									required
									autoComplete="off"
								/>
							</div>
							<DialogFooter className="flex gap-1 justify-end">
								<DialogClose asChild>
									<Button
										className="mt-3"
										variant={'destructive'}>
										Cancel
									</Button>
								</DialogClose>
								<Button
									className="mt-3"
									type="submit">
									Submit
								</Button>
							</DialogFooter>
						</form>
					</DialogContent>
				</Dialog>
			</CardHeader>
			<CardContent>
				<Tabs>
					<TabsList>
						{abilities.map(({ id, name }) => (
							<TabsTrigger
								onClick={() => setSelectedRole({ id, name })}
								value={name}
								key={name}>
								{name}
							</TabsTrigger>
						))}
					</TabsList>
					{abilities.map(({ name }) => (
						<TabsContent
							key={name}
							value={name}></TabsContent>
					))}
				</Tabs>
			</CardContent>
		</Card>
	)
}
