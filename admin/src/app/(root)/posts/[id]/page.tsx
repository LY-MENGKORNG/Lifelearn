import React, { Suspense } from "react"
import type { PostProps } from "@/type"
import { getPostById } from "@/app/actions"
import Loading from "../loading"
import { Card } from "@/components/ui/card"
import PageTitle from "@/components/clients/PageTitle"

export default async function Post({ params }: { params: { id: number } }) {
  const post: { data: PostProps | null } = await getPostById(params?.id)

  return (
    <>
      <PageTitle title={`Post with ID: ${params?.id}`} />
      <Suspense
        key={post.data?.id}
        fallback={<Loading />}>
        <Card>
          <h1>{post.data?.title}</h1>
          <p>{post.data?.body}</p>
        </Card>
      </Suspense>
    </>
  )
}
