'use client'
import { Moon, Sun } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useTheme } from 'next-themes'
import { useTranslations } from 'next-intl'

export default function ThemeSwitcher() {
	const t = useTranslations()
	const { setTheme } = useTheme()

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant='outline'
					className='bg-transparent rounded-full'
					size='icon'>
					<Moon className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
					<Sun className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
					<span className='sr-only'>Toggle theme</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align='end'>
				<DropdownMenuItem
					className='capitalize'
					onClick={() => setTheme('light')}>
					{t('theme.light')}
				</DropdownMenuItem>
				<DropdownMenuItem
					className='capitalize'
					onClick={() => setTheme('dark')}>
					{t('theme.dark')}
				</DropdownMenuItem>
				<DropdownMenuItem
					className='capitalize'
					onClick={() => setTheme('system')}>
					{t('theme.system')}
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
