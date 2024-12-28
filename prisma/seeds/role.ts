import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const roles = [
  {
    where: { id: 1 },
    update: {},
    create: {
      name: 'admin',
    }
  },
  {
    where: { id: 2 },
    update: {},
    create: {
      name: 'user',
    }
  },
  {
    where: { id: 3 },
    update: {},
    create: {
      name: 'principal',
    }
  },
  {
    where: { id: 4 },
    update: {},
    create: {
      name: 'teacher',
    }
  },
  {
    where: { id: 5 },
    update: {},
    create: {
      name: 'student',
    }
  },
  {
    where: { id: 6 },
    update: {},
    create: {
      name: 'guest',
    }
  },
  {
    where: { id: 7 },
    update: {},
    create: {
      name: 'parent',
    }
  },
]
export const roleSeed = async () => {
  console.log('Starting role seed...')
  await Promise.all(roles.map((role) => prisma.role.upsert(role)))
  console.log('Role data seeded successfully.')
}