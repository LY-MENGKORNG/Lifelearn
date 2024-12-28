import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const permissions = [
  {
    where: {
      id: 1,
    },
    update: {},
    create: {
      key: 'permission.create',
    },
  },
  {
    where: {
      id: 2,
    },
    update: {},
    create: {
      key: 'permission.update',
    },
  },
  {
    where: {
      id: 3,
    },
    update: {},
    create: {
      key: 'permission.delete',
    },
  },
  {
    where: {
      id: 4,
    },
    update: {},
    create: {
      key: 'permission.read',
    },
  }
]
/**
 * @name `permissionSeed`
 * @description seeding permissions data
 */
export const permissionSeed = async () => {
  console.log('Starting permission seed...')
  await Promise.all(permissions.map(permission => prisma.permission.upsert(permission)))

  console.log('Permissions data seeded successfully.')
}