'use server'

import prisma from '@/lib/db'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const users = await prisma.user.findMany({
    where: { userRole: { none: { role: { name: 'admin' } } } },
    select: {
      id: true,
      username: true,
      firstName: true,
      lastName: true,
    }
  })
  return new NextResponse(
    JSON.stringify({
      message: users.length ? 'List of all users' : 'No users found',
      data: users,
      count: users.length
    }), { status: 201 })
}

export async function POST(req: NextRequest) { }