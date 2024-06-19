'use client'

import Link from 'next/link'

import { motion } from 'framer-motion'

import { Button } from '@/components/ui/button'
import { FlipWords } from '@/components/ui/flip-words'

const WORDS = [
  {
    text: 'Convertor',
    className:
      'bg-clip-text text-transparent bg-gradient-to-r from-[#ff1835] to-[#ffc900]'
  },
  {
    text: 'Calculator',
    className:
      'bg-clip-text text-transparent bg-gradient-to-r from-[#0077ff] to-[#00e7df]'
  },
  {
    text: 'Generator',
    className:
      'bg-clip-text text-transparent bg-gradient-to-r from-[#7f00de] to-[#ff007f]'
  },
  {
    text: 'Tester',
    className:
      'bg-clip-text text-transparent bg-gradient-to-r from-[#26b868] to-[#1cb2e0]'
  }
]

export function Hero() {
  return (
    <div className='my-12 space-y-8'>
      <motion.div
        className='will-change-[transform,opacity] space-y-4'
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className='text-2xl md:text-4xl font-bold tracking-wide space-x-2'>
          <span>Collection of</span>
          <FlipWords words={WORDS} />
        </h1>
        <p className='leading-6 text-muted-foreground tracking-wide'>
          Here is a collection of online free tools I have frequently used.
        </p>
        <Button variant='gooeyLeft'>
          <Link href='#get-started'>Get Started</Link>
        </Button>
      </motion.div>
    </div>
  )
}
