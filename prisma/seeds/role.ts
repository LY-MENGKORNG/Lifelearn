import { type PrismaClient } from '@prisma/client'

/**
 * @name `roleSeed`
 * @description Create data seed for `role`
 * @param {PrismaClient} prisma 
 */
export async function roleSeed(prisma: PrismaClient) {
  console.log('Starting role seed...')

  await Promise.all([
    prisma.role.upsert({
      where: { id: 1 },
      update: {},
      create: {
        name: 'admin',
      },
    }),
  ])
}