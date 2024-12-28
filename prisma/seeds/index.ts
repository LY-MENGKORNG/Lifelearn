import { PrismaClient } from '@prisma/client'
import { userSeed } from './user'
import { permissionSeed } from './permission'
import { roleSeed } from './role'
const prisma = new PrismaClient()

/**
 *  @name `main`
 *  @description The main seeding file.
 */
async function main() {
  await permissionSeed()
  await roleSeed()
  await userSeed()
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