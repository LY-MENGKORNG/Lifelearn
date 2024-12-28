import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => new PrismaClient()

declare const globalThis: { PrismaGlobal: ReturnType<typeof prismaClientSingleton> } & typeof global

const prisma = globalThis.PrismaGlobal ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.PrismaGlobal = prisma