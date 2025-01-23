'use server'

import { type User } from '@prisma/client'
import prisma from '@/lib/db'
import { http } from '@/lib/httpServer'

export async function getUsers() {
  const dbUsers = await prisma.user.findMany()
  const response = await fetch(`${await http()}/users`, { cache: 'no-store' })
  const result: User[] = await response.json()
  return result.map((user) => ({ ...user, role: 'user' } as User))
}

export async function getUserWithRoles(email: string) {
  const dbUsers = await prisma.user.findUnique({
    where: { email },
    select: {
      id: true,
      username: true,
      firstName: true,
      lastName: true,
      email: true,
      image: true,
      kindeId: true,
      userRole: {
        select: {
          role: {
            select: {
              name: true
            }
          }
        }
      }
    },
  })

  if (!dbUsers) return null

  return {
    id: dbUsers.id,
    username: dbUsers.username,
    firstName: dbUsers.firstName,
    lastName: dbUsers.lastName,
    email: dbUsers.email,
    image: dbUsers.image,
    role: dbUsers.userRole.map((role) => role.role.name),
  }
}