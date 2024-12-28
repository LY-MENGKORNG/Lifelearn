import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
const users = [
  {
    where: { email: 'admin@example.com' },
    update: {},
    create: {
      username: 'John Snow',
      firstName: 'Jonh',
      lastName: 'Snow',
      email: 'admin@example.com',
      password: 'password',
    }
  },
  {
    where: { email: 'user@example.com' },
    update: {},
    create: {
      username: 'Jane Doe',
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'user@example.com',
      password: 'password',
    }
  },
  {
    where: { email: 'guest@example.com' },
    update: {},
    create: {
      username: 'Guest User',
      firstName: 'Guest',
      lastName: 'User',
      email: 'guest@example.com',
      password: 'password',
    }
  },
  {
    where: { email: 'principal@example.com' },
    update: {},
    create: {
      username: 'Principal User',
      firstName: 'Principal',
      lastName: 'User',
      email: 'principal@example.com',
      password: 'password',
    }
  },
  {
    where: { email: 'teacher@example.com' },
    update: {},
    create: {
      username: 'Teacher User',
      firstName: 'Teacher',
      lastName: 'User',
      email: 'teacher@example.com',
      password: 'password',
    }
  }
]
/**
 *  @name `userSeed`
 *  @description Seeding user data.
 */
export const userSeed = async () => {
  console.log('Starting user seed...')
  await Promise.all(users.map((user) => prisma.user.upsert(user)))

  console.log('User data seeded successfully.')
}