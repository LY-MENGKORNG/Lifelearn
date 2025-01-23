import { cn } from '@/lib/utils'
import { type User } from '@prisma/client'

type UserPresentProps = {
	user?: User
	className?: string
}
export default function UserPresent({ user, className }: UserPresentProps) {
	return <div className={cn('w-5 h-5 rounded-full bg-green-500', className)} />
}
