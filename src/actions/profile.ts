'use server'
import prisma from '@/lib/db'
import { User } from '@prisma/client'
import { revalidatePath } from 'next/cache'
export async function updateUserProfile(formData: FormData) {
  const username = formData.get('username')?.toString().trim() as string
  const email = formData.get('email')?.toString().trim() as string

  if (!username || !email) {
    return ('username or email are missing!')
  }

  const user = await prisma.user.update({
    where: { email },
    data: { username },
  })

  revalidatePath('/profile')
  return user
}