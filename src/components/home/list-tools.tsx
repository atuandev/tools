'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

import { Input } from '@/components/ui/input'
import { TOOLS } from '@/lib/constants'
import { Tool } from '@/lib/types'
import { ListCardTools } from './list-card-tools'

export function ListTools() {
  const [value, setValue] = useState('')

  const filter = (tool: Tool): boolean =>
    tool.label.toLowerCase().includes(value.toLowerCase()) ||
    tool.keywords.some(keyword =>
      keyword.toLowerCase().includes(value.toLowerCase())
    )

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
        duration: 1
      }}
    >
      <div className='flex flex-col items-start'>
        <Input
          className='bg-background/50 backdrop-blur-sm'
          placeholder='Search'
          value={value}
          onChange={e => setValue(e.target.value)}
        />

        <div id='get-started' className='my-12 w-full space-y-6 scroll-mt-20'>
          {value
            ? TOOLS.filter(t => t.links.some(tool => filter(tool))).map(t => {
                const { label, links } = t
                const filtered = links.filter(tool => filter(tool)) as Tool[]

                return (
                  <ListCardTools key={label} tools={filtered} title={label} />
                )
              })
            : TOOLS.map(tool => {
                const { label, links } = tool

                return <ListCardTools key={label} tools={links} title={label} />
              })}
        </div>
      </div>
    </motion.div>
  )
}
