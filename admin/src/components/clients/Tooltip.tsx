"use client"

import React, { ReactNode } from "react"
import {
  Tooltip as Tip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function Tooltip({
  children,
  content,
  className,
}: {
  children: ReactNode
  content: string
  className?: string
}) {
  return (
    <div className={className}>
      <TooltipProvider delayDuration={100}>
        <Tip>
          <TooltipTrigger asChild>{children}</TooltipTrigger>
          <TooltipContent>
            <p>{content}</p>
          </TooltipContent>
        </Tip>
      </TooltipProvider>
    </div>
  )
}
