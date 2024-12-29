import { type PrismaClient } from '@prisma/client'

/**
 * @name `permissionSeed`
 * @description Create data seed for `permission`
 * @param {PrismaClient} prisma
 */
export async function permissionSeed(prisma: PrismaClient) {
  console.log('Starting permission seed...')

  await Promise.all([
    prisma.permission.upsert({
      where: { id: 1 },
      update: {},
      create: {
        key: 'permission.create',
      },
    })
  ])
}