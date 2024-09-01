import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface ProfileProps {
  picture?: string
}
export default function Profile({ picture }: ProfileProps) {
  return (
    <Avatar className="cursor-pointer">
      <AvatarImage
        src={picture}
        alt='@shadcn'
      />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}
