'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'

import { Button } from '@/components/ui/button'

export function ModeToggle() {
  const { setTheme, theme } = useTheme()

  const [mounted, setMounted] = useState(false);
	useEffect(() => {
		setMounted(true)
	}, [])

  return (
    <div>
      {mounted && theme === 'light' ? (
        <Button variant='transparent' size='icon' onClick={() => setTheme('dark')}>
          <Sun color='#000000' className='h-[1.2rem] w-[1.2rem]' />
        </Button>
      ) : (
        <Button variant='transparent' size='icon' onClick={() => setTheme('light')}>
          <Moon color='#ffffff' className='h-[1.2rem] w-[1.2rem]' />
        </Button>
      )}
    </div>
  )
}
