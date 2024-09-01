export interface NavItem {
  label: string
  icon: string
  path?: string
  items?: NavItem[]
}
const NAV_ITEMS: NavItem[] = [
  {
    label: 'Home',
    icon: 'pi pi-home',
    path: '/',
  },
  {
    label: 'About',
    icon: 'pi pi-star',
    path: '/about',
  },
  {
    label: 'Projects',
    icon: 'pi pi-search',
    items: [
      {
        label: 'Components',
        icon: 'pi pi-bolt',
      },
      {
        label: 'Blocks',
        icon: 'pi pi-server',
      },
      {
        label: 'UI Kit',
        icon: 'pi pi-pencil',
      },
      {
        label: 'Templates',
        icon: 'pi pi-palette',
        items: [
          {
            label: 'Apollo',
            icon: 'pi pi-palette',
          },
          {
            label: 'Ultima',
            icon: 'pi pi-palette',
          },
        ],
      },
    ],
  },
  {
    label: 'Contact',
    icon: 'pi pi-envelope',
  },
]

export default {
  NAV_ITEMS,
}
