"use client"

import { usePathname } from "next/navigation"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Link from "next/link"

export default function BreadCrumb() {
  const pathName: string = usePathname()
  const paths: string[] = pathName.split("/").filter(Boolean)
  if (pathName === "/") return

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href={"/"}>Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        {paths.map((path, index) => {
          const href = `/${paths.slice(0, index + 1).join("/")}`
          return (
            <div key={index} className="flex items-center gap-2">
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                {index === paths.length - 1 ? (
                  <BreadcrumbPage>
                    {path.charAt(0).toUpperCase() + path.slice(1)}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link href={href}>
                      {path.charAt(0).toUpperCase() + path.slice(1)}
                    </Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </div>
          )
        })}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
