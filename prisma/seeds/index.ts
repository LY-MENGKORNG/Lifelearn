import { PrismaClient } from '@prisma/client'
import { userSeed } from './user'
import { permissionSeed } from './permission'
import { roleSeed } from './role'
import { rolePermissionSeed } from './role-permission'
import { userRoleSeed } from './user-role'
const prisma = new PrismaClient()

/**
 *  @name `main`
 *  @description The main seeding file.
 */
async function main() {
  await permissionSeed(prisma)
  await roleSeed(prisma)
  await rolePermissionSeed(prisma)
  await userSeed(prisma)
  await userRoleSeed(prisma)

  console.log('All data seeded successfully!')
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })