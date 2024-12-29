import { type PrismaClient } from '@prisma/client'

/**
 * @name `userSeed`
 * @description Create data seed for user.
 * @param {PrismaClient} prisma
 */
export async function userSeed(prisma: PrismaClient) {
  console.log('Starting user seed...')

  await Promise.all([
    prisma.user.upsert({
      where: { email: 'admin@example.com' },
      update: {},
      create: {
        username: 'John Snow',
        firstName: 'Jonh',
        lastName: 'Snow',
        email: 'admin@example.com',
        password: 'password',
      }
    })
  ])
}