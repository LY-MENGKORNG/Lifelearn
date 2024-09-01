import CustomPageTitle from "@/components/clients/PageTitle"
import { Tooltip } from "@/components"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <div>
      <CustomPageTitle title='Home' />
      Hi, there!
      <Tooltip
        content={"Go to posts"}
        className='ml-5 mt-5'>
        <Button asChild>
          <Link href={"/posts"}>Go to Posts</Link>
        </Button>
      </Tooltip>
      <Tooltip content={"Go to users"}>
        <Button
          asChild
          className='ml-5 mt-5'>
          <Link href={"/users"}>Go to Users</Link>
        </Button>
      </Tooltip>
    </div>
  )
}
