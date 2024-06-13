'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

import { Input } from '@/components/ui/input'
import { LIST_TOOLS } from '@/lib/constants'
import { Tool } from '@/lib/types'
import { ListCardTools } from './list-card-tools'

export function ListTools() {
  const [value, setValue] = useState('')

  const filterTools = (tool: Tool): boolean =>
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
          className='bg-background/50 backdrop-blur-[8px]'
          style={{
            WebkitBackdropFilter: 'blur(8px)'
          }}
          placeholder='Search'
          value={value}
          onChange={e => setValue(e.target.value)}
        />

        <div id='get-started' className='my-12 w-full space-y-6 scroll-mt-20'>
          {value
            ? LIST_TOOLS.filter(list =>
                list.tools.some(tool => filterTools(tool))
              ).map(list => {
                const { label, tools } = list
                const filtered = tools.filter(tool => filterTools(tool))

                return (
                  <ListCardTools key={label} tools={filtered} title={label} />
                )
              })
            : LIST_TOOLS.map(tool => {
                const { label, tools } = tool

                return <ListCardTools key={label} tools={tools} title={label} />
              })}
        </div>
      </div>
    </motion.div>
  )
}
