'use server'

import { getUserWithRoles } from '@/actions/user'
import { RoleEnum } from '@/constants'
import prisma from '@/lib/db'
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { NextResponse } from "next/server"


export async function GET() {
  const { getUser } = getKindeServerSession()
  const user = await getUser()

  if (!user || user == null || !user.id)
    throw new Error("something went wrong with authentication" + user)

  const dbUser = await getUserWithRoles(user.email!)

  if (!dbUser) {
    await prisma.user.create({
      data: {
        username: user.username,
        image: user.picture,
        kindeId: user.id,
        firstName: user.given_name ?? "",
        lastName: user.family_name ?? "",
        email: user.email ?? "",
      }
    })
  }

  if (dbUser?.role.includes(RoleEnum.ADMIN))
    return NextResponse.redirect(`${process.env.NEXT_AUTH_URL!}/admin/dashboard`)

  return NextResponse.redirect(`${process.env.NEXT_AUTH_URL!}`)
}