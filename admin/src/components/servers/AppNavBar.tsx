import React from "react"
import { SidebarTrigger } from "../ui/sidebar"
import { Menubar } from "@/components/ui/menubar"
import { BreadCrumb, Profile, Dropdown, ModeToggle } from "@/components"

export default function AppNavBar() {
  return (
    <Menubar className='w-full py-7 pr-5 flex justify-between rounded-none sticky top-0 right-0 backdrop-blur-[5px] dark:bg-slate-900/20 bg-white/20 '>
      <div className='flex gap-3 justify-center items-center'>
        <SidebarTrigger />
        <BreadCrumb />
      </div>
      <div className='flex gap-5'>
        <Dropdown
          label='Your Account'
          trigger={<Profile />}
          menuItems={[{ label: "Profile", path: "/profile" }]}
        />
        <ModeToggle />
      </div>
    </Menubar>
  )
}
