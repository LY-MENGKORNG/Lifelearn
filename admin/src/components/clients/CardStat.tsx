// import { ArrowUpIcon } from "lucide-react"
import {
  Card,
  CardContent,
  // CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ReactNode } from "react"

interface CardStatProps {
  title?: string
  icon?: ReactNode
  number?: string
  time?: string
}
export default function CardStat({ title, icon, number, time }: CardStatProps) {
  return (
    <Card className="flex-1">
      <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
        <CardTitle className='text-sm font-medium'>{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className='text-2xl font-bold'>{number}</div>
        <p className='text-xs text-muted-foreground'>{time}</p>
      </CardContent>
    </Card>
  )
}
