'use server'

import prisma from '@/lib/db'

export const create = async (payload: FormData) => {

  const result = await prisma.role.create({
    data: {
      name: payload.get('name') as string,
    }
  })

  return result
}

export const del = async (id: number) => {
  const result = await prisma.role.delete({
    where: { id }
  })

  return result
}