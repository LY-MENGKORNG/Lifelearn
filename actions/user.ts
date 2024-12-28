'use server'
import prisma from '@/lib/db'
import { http } from '@/lib/httpServer'

type QueryParamType = {
  id?: number | string
  name?: string
  username?: string
  email?: string
}
export async function getUsers() {
  const dbUsers = await prisma.user.findMany()
  console.log(dbUsers)
  const response = await fetch(`${http}/users`, { cache: 'no-store' })
  const result: User[] = await response.json()
  return result.map((user) => ({ ...user, role: 'user' } as User))
}