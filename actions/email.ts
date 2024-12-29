import { http } from '@/lib/httpServer'
type EmailParams = {
  status?: EmailStatus
}
export async function getEmail({ status }: EmailParams) {
  const response = await fetch(`${await http()}/email${status ? `?status=${status}` : ''}`, { cache: 'no-store' })
  const { data }: { data: Email[] } = await response.json()
  return data
}