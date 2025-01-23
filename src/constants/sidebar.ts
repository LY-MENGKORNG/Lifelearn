import {
  AudioWaveform,
  BadgeDollarSign,
  ChartColumn,
  ChartPie,
  ClipboardList,
  Command,
  Database,
  Frame,
  GalleryVerticalEnd,
  HeartHandshake,
  Inbox,
  Languages,
  LayoutDashboard,
  LucideProps,
  Map,
  Monitor,
  MonitorCog,
  PieChart,
  TrendingUp,
  UserCog,
  UserCog2,
} from 'lucide-react'

type TeamType = {
  name: string
  logo: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>
  plan: string
}

type NavType = {
  title: string
  icon?: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>
  url?: string
  items?: NavType[]
}

type UserType = {
  id?: string | number
  name: string
  email: string
  avatar: string
}

const team: TeamType[] = [
  {
    name: 'Acme Inc',
    logo: GalleryVerticalEnd,
    plan: 'Enterprise',
  },
  {
    name: 'Acme Corp.',
    logo: AudioWaveform,
    plan: 'Startup',
  },
  {
    name: 'Evil Corp.',
    logo: Command,
    plan: 'Free',
  },
]
const mainNav: NavType[] = [
  {
    title: 'Dashboard',
    url: '/admin/dashboard',
    icon: LayoutDashboard,
  },
  {
    title: 'Inbox',
    url: '/admin/inbox',
    icon: Inbox,
  },
  {
    title: 'System',
    url: '/admin/system',
    icon: Monitor
  },
  {
    title: 'General Data',
    url: '',
    icon: Database,
    items: [
      {
        title: 'User Management',
        url: '/admin/user-management',
        icon: UserCog2
      },
      {
        title: 'Third Party',
        url: '/admin/third-party',
        icon: HeartHandshake
      },
      {
        title: 'Sales',
        url: '/admin/sales',
        icon: ChartPie,
      },
    ]
  },
  {
    title: 'Analytics',
    icon: ChartColumn,
    items: [
      {
        title: 'Performance',
        url: '/admin/performance',
        icon: TrendingUp,
      },
      {
        title: 'Revenue',
        url: '/admin/revenue',
        icon: BadgeDollarSign
      }
    ]
  },
  {
    title: 'Configurations',
    icon: MonitorCog,
    items: [
      {
        title: 'Role - Permissions',
        url: '/admin/role-permission',
        icon: UserCog,
      },
      {
        title: 'Languages',
        url: '/admin/languages',
        icon: Languages,
      },
    ]
  },
]
const user: UserType = {
  name: 'shadcn',
  email: 'm@example.com',
  avatar: '/admin/ling.png',
}

export const sidebar = {
  teams: [...team],
  mainNav: [...mainNav],
  user,
  projects: [
    {
      name: 'Design Engineering',
      url: '#',
      icon: Frame,
    },
    {
      name: 'Sales & Marketing',
      url: '#',
      icon: PieChart,
    },
    {
      name: 'Travel',
      url: '#',
      icon: Map,
    },
  ],
}
