

// Theme
type Theme = "dark" | "light" | "system"

// Charts
<<<<<<< HEAD
type ChartType = 'line' | 'bar' | 'area' | 'scatter'
=======
type ChartType = 'line' | 'bar' | 'area'
>>>>>>> b73017f (chore(main): #3 change tech stack)

type ChartColor =
  | 'hsl(var(--chart-1))'
  | 'hsl(var(--chart-2))'
  | 'hsl(var(--chart-3))'
  | 'hsl(var(--chart-4))'
  | 'hsl(var(--chart-5))'

// Person
type User = {
  id: number
  name: string
  email: string
<<<<<<< HEAD
  role: Role
=======
  role?: Role
>>>>>>> b73017f (chore(main): #3 change tech stack)
  password?: string
}
type Role = "admin" | "user" | "principal" | "teacher" | "student" | "guest" | "parent"