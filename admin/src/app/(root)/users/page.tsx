import React, { Suspense } from "react"
import Loading from "./loading"
import { DataTable } from "@/components"
import PageTitle from "@/components/clients/PageTitle"

export default async function Page() {
  return (
    <div className='flex flex-col'>
      <PageTitle title='User List' />
      <Suspense fallback={<Loading />}>
        <DataTable />
      </Suspense>
    </div>
  )
}
