

// Theme
type Theme = "dark" | "light" | "system"

// Charts
type ChartType = 'line' | 'bar' | 'area'

type ChartColor =
  | 'hsl(var(--chart-1))'
  | 'hsl(var(--chart-2))'
  | 'hsl(var(--chart-3))'
  | 'hsl(var(--chart-4))'
  | 'hsl(var(--chart-5))'

// Person
type User = {
  id: number
  username: string | null
  firstName: string
  lastName: string
  email: string
  password: string
  tokenCreationDate: Date | null
  refreshToken: string | null
  loginFailures: number | null
  isOnline: boolean
  createdAt: Date
  updatedAt: Date | null
}

type Role = "admin" | "user" | "principal" | "teacher" | "student" | "guest" | "parent"