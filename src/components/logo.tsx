'use client'

import { cn } from '@/lib/utils'
import { Pacifico } from 'next/font/google'

const pacifico = Pacifico({
  subsets: ['latin'],
  weight: ['400']
})

export function Logo() {
  return (
    <div className={cn(pacifico.className, 'tracking-wider text-xl')}>
      atuandev
    </div>
  )
}
