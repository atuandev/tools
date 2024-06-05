'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'

export function ModeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <>
      {theme === 'light' ? (
        <Button variant='ghost' size='icon' onClick={() => setTheme('dark')}>
          <Sun className='h-[1.2rem] w-[1.2rem]' />
        </Button>
      ) : (
        <Button variant='ghost' size='icon' onClick={() => setTheme('light')}>
          <Moon color='#ffffff' className='h-[1.2rem] w-[1.2rem]' />
        </Button>
      )}
    </>
  )
}
