import { type PrismaClient } from '@prisma/client'

/**
 * @name `userRoleSeed`
 * @description Create data seed for user's roles.
 * @param {PrismaClient} prisma
 */
export async function userRoleSeed(prisma: PrismaClient) {
  console.log("Starting user's roles seed...")

  await Promise.all([
    prisma.userHasRole.upsert({
      where: { id: 1 },
      update: {},
      create: {
        userId: 1,
        roleId: 1,
      },
    })
  ])
}