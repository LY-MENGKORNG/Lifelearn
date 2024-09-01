import { CustomCardSkeleton } from "@/components"
import React from "react"
export default function Loading() {
  return (
    <div className='flex gap-3 w-full'>
      <CustomCardSkeleton />
      <CustomCardSkeleton />
      <CustomCardSkeleton />
    </div>
  )
}
