'use server'

import { http } from '@/lib/httpServer'
type EmailParams = {
  status?: EmailStatus
}
export async function getEmail({ status }: EmailParams) {
  const response = await fetch(`${await http()}/email${status && `?status=${status}`}`, {
    method: 'GET',
    cache: 'no-store',
    next: { revalidate: 3000 }
  })
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }
  const { data }: { data: Email[] } = await response.json()
  return data
}

export async function updateEmail({ id, status }: { id: string, status: EmailStatus }) {
  const response = await fetch(`${await http()}/email?id=${id}&status=${status}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
  })
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }
  const { data }: { data: Email } = await response.json()
  return data
}