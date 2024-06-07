'use client'

import { useState } from 'react'
import { ImageIcon, KeyIcon, PipetteIcon, TextIcon } from 'lucide-react'
import { motion } from 'framer-motion'

import { Input } from '@/components/ui/input'
import { Tool } from '@/lib/types'
import { ListCardTools } from './list-card-tools'

const TOOLS = [
  {
    label: 'Converter',
    links: [
      {
        label: 'Color Converter',
        link: '/convertor/color-converter',
        keywords: ['Convertor', 'Color', 'Hex', 'RGB', 'HSL', 'CSS', 'Picker'],
        color: '#fd7e14',
        icon: PipetteIcon
      },
      {
        label: 'Image Converter',
        link: '/convertor/image-converter',
        keywords: ['Convertor', 'Image', 'Format', 'Extension'],
        color: '#40c057',
        icon: ImageIcon
      }
    ]
  },
  {
    label: 'Calculator',
    links: [
      {
        label: 'Word Counter',
        link: '/calculator/word-counter',
        keywords: ['Word', 'Counter', 'Calculator', 'Text'],
        color: '#4c6ef5',
        icon: TextIcon
      }
    ]
  },
  {
    label: 'Generator',
    links: [
      {
        label: 'Password Generator',
        link: '/generator/password-generator',
        keywords: ['Generator', 'Password', 'Random'],
        color: '#f783ac',
        icon: KeyIcon
      }
    ]
  }
]

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
