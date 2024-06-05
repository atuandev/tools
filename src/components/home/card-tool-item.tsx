'use client'

import { Tool } from '@/lib/types'
import Link from 'next/link'

type CardToolItemProps = {
  tool: Tool
}

export default function CardToolItem({ tool }: CardToolItemProps) {
  const Icon = tool.icon

  return (
    <Link
      href={tool.link}
      className='flex flex-col items-center justify-center bg-background p-4 rounded-md border hover:bg-neutral-50'
    >
      <Icon color={tool.color} size={32} />
      <p className='font-normal mt-1.5'>{tool.label}</p>
    </Link>
  )
}
