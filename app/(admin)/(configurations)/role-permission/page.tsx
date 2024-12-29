import prisma from '@/lib/db'

export default async function RolePermission() {
	const roles = await prisma.role.findMany()
	return (
		<div>
			<ul>
				{roles.map((role) => (
					<li key={role.id}>{role.name}</li>
				))}
			</ul>
		</div>
	)
}
