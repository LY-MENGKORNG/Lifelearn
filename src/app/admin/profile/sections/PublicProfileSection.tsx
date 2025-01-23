'use client'

import { updateUserProfile } from '@/actions/profile'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useActionState } from 'react'
import { toast } from 'sonner'

type PublicProfileSectionProps = {
	user: {
		userRole: {
			id: number
			userId: number
			roleId: number
		}[]
	} & {
		id: number
		kindeId: string
		username: string | null
		firstName: string
		lastName: string
		email: string | null
		emailVerified: Date | null
		image: string | null
		createdAt: Date
		updatedAt: Date
	}
}
export default function PublicProfileSection({
	user,
}: PublicProfileSectionProps) {
	const handleUpdatePublicProfile = async (
		prevState: unknown,
		formData: FormData
	) => {
		const username = formData.get('username')?.toString().trim()

		if (!username || username.length < 2) {
			toast.error('Uh oh! Something went wrong.', {
				description: 'username is required and must be at least 2 characters',
				duration: 3000,
				position: 'top-right',
				closeButton: true,
				classNames: {
					closeButton: 'text-slate-500',
					title: 'text-red-500',
				},
			})
			return
		}

		await updateUserProfile(formData)
		toast.success('User name updated!', {
			description: 'User name updated successfully',
			position: 'top-right',
			duration: 3000,
			closeButton: true,
			classNames: { closeButton: 'text-slate-500', title: 'text-green-500' },
		})
	}

	const [state, action, isPending] = useActionState(
		handleUpdatePublicProfile,
		null
	)

	return (
		<form
			action={action}
			className="py-5 grid grid-cols-3 gap-5">
			<div>
				<Label className="text-lg">Public profile</Label>
				<p className="text-sm text-secondary-foreground">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
					ab!
				</p>
			</div>
			<div className="space-y-3">
				<Input
					defaultValue={user?.username ?? ''}
					placeholder="username"
					name="username"
					required
				/>
				<Input
					className="bg-secondary"
					value={user?.email || ''}
					type="email"
					placeholder="email"
					name="email"
					readOnly
				/>
			</div>
			<div className="flex justify-end">
				<Button
					size={'sm'}
					disabled={isPending}>
					{isPending ? 'Pending...' : 'Save change'}
				</Button>
			</div>
		</form>
	)
}
