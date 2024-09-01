import React, { Suspense } from "react"
import { getPosts } from "@/app/actions"
import Loading from "./loading"
import CustomCard from "@/components/clients/CustomCard"
import type { PostProps } from "@/type"

export default async function PostPage() {
  const posts: { data: PostProps[]; count: number } = await getPosts()
  return (
    <Suspense fallback={<Loading />}>
      <div className='grid grid-cols-3 gap-3 sm:grid-cols-2'>
        {posts?.data.map(({ body, id, title, userId }) => (
          <CustomCard
            key={id}
            id={id}
            title={title}
            body={body}
            userId={userId}
          />
        ))}
      </div>
    </Suspense>
  )
}
