'use client'

import { Textarea } from '@/components/ui/text-area'

export function FormQRCodeText() {
  return (
    <div>
      <Textarea
        className='w-full focus-visible:ring-0 focus-visible:ring-offset-0 ring-0 focus:ring-0 outline-none'
        placeholder='Enter your text...'
        maxHeight={300}
      />
    </div>
  )
}
