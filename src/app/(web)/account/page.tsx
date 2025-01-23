import UserPresent from '@/components/commons/UserPresent'
import { Card } from '@/components/ui/card'
import prisma from '@/lib/db'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import Image from 'next/image'
import { profileBgOne, profileBgTwo } from '@/assets'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import PublicProfileSection from '@/app/admin/profile/sections/PublicProfileSection'

export default async function Account() {
	const { getUser } = getKindeServerSession()
	const user = await getUser()

	const userDb = user?.email
		? await prisma.user.findUnique({
				where: { email: user.email, kindeId: user.id },
				include: { userRole: true },
		  })
		: null
	return (
		<div className="pt-5 xl:px-5 md:px-10 px-5">
			<Card className="p-3 relative h-60 select-none w-full">
				<Image
					src={profileBgTwo}
					alt="profile-background"
					fill
					className="absolute top-0 right-0 object-cover rounded-xl"
				/>
				<div className="absolute -bottom-[20%] left-[10%] z-10">
					<Image
						loading="lazy"
						src={userDb?.image ?? ''}
						width={150}
						height={150}
						alt={userDb?.firstName ?? ''}
						className="rounded-full"
					/>
					<UserPresent className="absolute bottom-[9%] right-[9%]" />
				</div>
			</Card>
			<section className="mt-16">
				<div className="py-5 grid grid-cols-3">
					<div>
						<Label className="text-lg">Company profile</Label>
						<p className="text-sm text-secondary-foreground">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit.
							Cupiditate, ab!
						</p>
					</div>
					<div></div>
					<div className="flex justify-end">
						<Button size={'sm'}>Edit profile</Button>
					</div>
				</div>
				<Separator />
				<PublicProfileSection user={userDb!} />
				<Separator />
			</section>
		</div>
	)
}
