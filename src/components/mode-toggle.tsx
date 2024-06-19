'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'

export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme()

  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return <></>

  if (resolvedTheme === 'light') {
    return (
      <div className='cursor-pointer rounded-md hover:bg-white/50 p-2'>
        <Sun
          color='#000000'
          className='size-5'
          onClick={() => setTheme('dark')}
        />
      </div>
    )
  }

  if (resolvedTheme === 'dark') {
    return (
      <div className='cursor-pointer rounded-sm dark:hover:bg-white/20 p-2'>
        <Moon
          color='#ffffff'
          className='size-5'
          onClick={() => setTheme('light')}
        />
      </div>
    )
  }
}
