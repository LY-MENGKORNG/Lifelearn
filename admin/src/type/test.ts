export interface PostProps {
  userId?: number
  id?: number
  title?: string
  body?: string
  className?: string
}

export interface UserProps {
  id: string
  name: string 
  username: string
  email: string 
  address?: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo?: {
      lat: string
      lng: string
    }
  }
  phone?: string 
  website?: {
    name: string
    catchPhrase: string
    bs: string
  }
}


export interface DataTableProps {
  name: string
  year: number | string
  use: string
  rank: number
}