import { type PrismaClient } from '@prisma/client'

/**
 * @name `RolePermissionSeed`
 * @description Create data seed for `rolePermission`.
 * @param {PrismaClient} prisma 
 */
export async function rolePermissionSeed(prisma: PrismaClient) {
  console.log('Starting rolePermission seed...')

  await Promise.all([
    prisma.rolePermission.upsert({
      where: { id: 1 },
      update: {},
      create: {
        roleId: 1,
        permissionId: 1,
        read: true,
        create: true,
        update: true,
        delete: true,
      }
    }),
  ])
}