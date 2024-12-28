'use server'
import prisma from '@/lib/db'
import { NextApiRequest } from 'next'
import { NextResponse } from 'next/server'

export async function GET(req: NextApiRequest) {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      username: true,
      firstName: true,
      lastName: true,
      email: true,
    },
    take: 10
  })
  return new NextResponse(JSON.stringify(users), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  })
}