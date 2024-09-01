import { DataTableProps, PostProps, UserProps } from "@/type"

const POST_API: string = 'https://jsonplaceholder.typicode.com/posts'
const USER_API: string = 'https://jsonplaceholder.typicode.com/users'

export async function getPosts() {
  try {
    const response = await fetch(POST_API, { cache: 'no-store' })
    const post: PostProps[] = await response.json()

    return {
      data: post,
      count: post.length
    }
  } catch (error) {
    console.log(error)
    return {
      data: [],
      count: 0
    }
  }
}

export async function getPostById(id: number) {
  try {
    const response = await fetch(`${POST_API}/${id}`, { cache: 'no-store' })
    const post: PostProps | null = await response.json()

    return {
      data: post,
    }
  } catch (error) {
    console.log(error)
    return { data: {} }
  }
}

const dataUsers: DataTableProps[] = [
  { name: "JavaScript", year: 1995, use: "Web Development", rank: 1 },
  { name: "Python", year: 1991, use: "General Purpose", rank: 2 },
  { name: "Java", year: 1995, use: "Enterprise Applications", rank: 3 },
  { name: "C++", year: 1979, use: "System/Application Software", rank: 4 },
  { name: "C#", year: 2000, use: ".NET Development", rank: 5 },
  { name: "TypeScript", year: 2012, use: "Large-scale JavaScript", rank: 6 },
  { name: "PHP", year: 1994, use: "Web Development", rank: 7 },
  { name: "Swift", year: 2014, use: "iOS/macOS Development", rank: 8 },
  { name: "Ruby", year: 1995, use: "Web Development", rank: 9 },
  { name: "Go", year: 2009, use: "System Programming", rank: 10 },
]
export async function getUsers() {
  try {
    const response = await fetch(USER_API, { method: 'GET', cache: 'no-store' })
    const users: UserProps[] | null = await response.json()
    console.log(users)

    return {
      data: dataUsers,
      count: dataUsers.length || 0
    }
  } catch (error) {
    console.log(error)
    return { data: [] }
  }
}

export async function getUserById(id: number) {
  try {
    const response = await fetch(`${USER_API}/${id}`, { method: 'GET', cache: 'no-store' })
    const user: UserProps | null = await response.json()

    return {
      data: user,
    }
  } catch (error) {
    console.log(error)
    return { data: {} }
  }
}