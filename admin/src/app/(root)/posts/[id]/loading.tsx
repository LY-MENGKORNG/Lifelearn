import { CustomCardSkeleton } from "@/components"
import React from "react"
export default function Loading() {
  return (
    <div className='flex w-full'>
      <CustomCardSkeleton className="flex-1" />
    </div>
  )
}
