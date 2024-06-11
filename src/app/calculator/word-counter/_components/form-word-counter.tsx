'use client'

import { Textarea } from '@/components/ui/text-area'
import { useState } from 'react'

export function FormWordCounter() {
  const [text, setText] = useState<string>('')

  const words = text.split(' ').filter(Boolean).length

  const characters = text.length

  const charactersWithoutSpaces = text.replace(/\s/g, '').length

  const paragraphs = text.split('\n').filter(Boolean).length

  return (
    <div className='w-full'>
      <div className='my-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2'>
        <div className='p-4 border rounded-md bg-background/60 backdrop-blur-md'>
          <p className='font-semibold text-2xl'>{words}</p>
          <p className='text-muted-foreground'>words</p>
        </div>
        <div className='p-4 border rounded-md bg-background/60 backdrop-blur-md'>
          <p className='font-semibold text-2xl'>{characters}</p>
          <p className='text-muted-foreground'>characters</p>
        </div>
        <div className='p-4 border rounded-md bg-background/60 backdrop-blur-md'>
          <p className='font-semibold text-2xl'>{charactersWithoutSpaces}</p>
          <p className='text-muted-foreground'>characters without spaces</p>
        </div>
        <div className='p-4 border rounded-md bg-background/60 backdrop-blur-md'>
          <p className='font-semibold text-2xl'>{paragraphs}</p>
          <p className='text-muted-foreground'>paragraphs</p>
        </div>
      </div>

      <Textarea
        maxHeight={300}
        placeholder='Type here...'
        onChange={e => setText(e.target.value)}
      />
    </div>
  )
}
