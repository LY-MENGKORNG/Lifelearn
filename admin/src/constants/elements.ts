import { TokensIcon } from "@radix-ui/react-icons"
import { Settings } from "lucide-react"
import React from "react"

interface SideBarItems {
  label: string
  path: string
  icon: React.ForwardRefExoticComponent<React.RefAttributes<SVGSVGElement>>
}
export const sideBarItems: SideBarItems[] = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: TokensIcon,
  },
  {
    label: "Settings",
    path: "/settings",
    icon: Settings,
  },
]