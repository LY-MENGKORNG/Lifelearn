import React from "react"

interface PageTitleProps {
  title: string
}
export default function PageTitle({ title }: PageTitleProps) {
  return (
    <div>
      <h1 className='text-2xl font-medium'>{title}</h1>
    </div>
  )
}
