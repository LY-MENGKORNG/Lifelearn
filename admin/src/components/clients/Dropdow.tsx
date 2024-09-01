import Link from "next/link"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface DropdownProps {
  trigger: React.ReactNode
  label?: string
  menuItems: Array<{ label: string; path: string; disabled?: boolean }>
}
export default function Dropdown({ trigger, label, menuItems }: DropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>
      <DropdownMenuContent className='w-52'>
        <DropdownMenuLabel>{label}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {menuItems.map(({ label, path }, index) => (
            <DropdownMenuItem
              key={index}
              className='w-full'>
              <Link
                href={path}
                className='w-full'>
                {label}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
