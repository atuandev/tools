'use client'

import { motion } from 'framer-motion'

import { cn } from '@/lib/utils'

type ContainerProps = {
  className: string
  children: React.ReactNode
}

export function Container({ className, children }: ContainerProps) {
  return (
    <motion.div
      className='will-change-[transform,opacity] space-y-4'
      initial={{
        y: 40,
        opacity: 0
      }}
      animate={{
        y: 0,
        opacity: 1
      }}
      transition={{
        duration: 0.5
      }}
    >
      <div className={cn('mx-auto min-h-[calc(100vh-312px)] py-10', className)}>
        {children}
      </div>
    </motion.div>
  )
}
