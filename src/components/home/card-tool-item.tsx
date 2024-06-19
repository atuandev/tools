'use client'

import Link from 'next/link'

import { Tool } from '@/lib/types'

type CardToolItemProps = {
  tool: Tool
}

export function CardToolItem({ tool }: CardToolItemProps) {
  const Icon = tool.icon

  return (
    <Link
      href={tool.link}
      className='flex flex-col items-center justify-center bg-background p-4 rounded-md border hover:bg-neutral-100 dark:hover:bg-gray-900 flex-shrink-0'
    >
      <Icon color={tool.color} size={32} />
      <p className='font-normal mt-1.5'>{tool.label}</p>
    </Link>
  )
}
