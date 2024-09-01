"use client"
import React from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card"
import type { PostProps } from "@/type"
import { Button } from "../ui/button"
import Link from "next/link"
import { Skeleton } from "../ui/skeleton"

export default function CustomCard({
  id,
  userId,
  body,
  title,
  className,
}: PostProps) {
  return (
    <Card className={`${className}`}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{body}</CardDescription>
      </CardContent>
      <CardFooter>
        <div className='flex flex-col'>
          <div>User ID: {userId}</div>
          <div>Post ID: {id}</div>
          <Button asChild>
            <Link href={`/posts/${id}`}>Go to post with ID of {id}</Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}

export function CustomCardSkeleton({ className }: { className?: string }) {
  return (
    <div className={`flex flex-1 flex-col space-y-3 ${(className ??= "")}`}>
      <Skeleton className='h-[125px]  rounded-xl' />
      <div className='space-y-2'>
        <Skeleton className='h-4' />
        <Skeleton className='h-4' />
      </div>
    </div>
  )
}
