import React, { Suspense } from "react"
import Loading from "./loading"
import CustomPageTitle from "@/components/clients/PageTitle"
import CardStat from "@/components/clients/CardStat"
import { DASHBOARD } from "@/lib/data"
import Chart from "@/components/clients/Chart"
import { DataTable } from "@/components"

export default function Dashboard() {
  return (
    <Suspense fallback={<Loading />}>
      <CustomPageTitle title='Dashboard' />
      <section className='flex flex-wrap gap-3 mt-5'>
        {DASHBOARD.STATS.map((item, index) => (
          <CardStat
            key={index}
            title={item.title}
            icon={<item.icon />}
            number={item.number}
            time={item.time}
          />
        ))}
      </section>
      <section className='mt-5 flex items-start flex-wrap gap-3'>
        <Chart className='inline-block flex-1' />
        <DataTable className='inline-block flex-1' />
      </section>
    </Suspense>
  )
}
