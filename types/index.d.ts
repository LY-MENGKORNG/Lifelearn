

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

<<<<<<< HEAD
type Role = "admin" | "user" | "principal" | "teacher" | "student" | "guest" | "parent"
=======
type Role = "admin" | "user" | "principal" | "teacher" | "student" | "guest" | "parent"

type BadgeVariantsProps =
  | 'default'
  | 'secondary'
  | 'destructive'
  | 'outline'
  | 'error'
  | 'success'
  | 'skyblue'
  | 'purple'
  | 'info'
  | 'fuchsia'
  | 'teal'
  | 'orange'

type EmailStatus = "read" | "unread"

type EmailTag = "important" | "meeting" | "urgent" | "personal" | "work" | "family"

type Email = {
  id: string
  subject: string
  from: string
  timestamp: string
  preview: string
  tags: EmailTag[]
  replyTo?: string
  content?: string
  status?: EmailStatus
}
>>>>>>> fc1e8ac (feat(design-frontend): #1 design frontend)
