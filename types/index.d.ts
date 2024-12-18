
type Role = "admin" | "user" | "principal" | "teacher" | "student" | "guest"

type User = {
  id: number
  name: string
  email: string
  role: Role
  password?: string
}