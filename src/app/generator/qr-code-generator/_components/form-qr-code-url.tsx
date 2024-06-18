'use client'

import { useRef } from 'react'
import { useFormStatus } from 'react-dom'
import { useEventListener } from 'usehooks-ts'

import { Button } from '@/components/ui/button'
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

type FormQRCodeURLProps = {
  form: any
}

export function FormQRCodeURL({ form }: FormQRCodeURLProps) {
  const { pending } = useFormStatus()
  const buttonRef = useRef<HTMLButtonElement>(null)

  const handleClear = () => {
    form.reset({ url: '' })
  }

  const onKeydownSubmit = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      buttonRef.current?.click()
    }
  }

  const onKeydownClear = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      e.preventDefault()
      handleClear()
    }
  }

  useEventListener('keydown', onKeydownSubmit)
  useEventListener('keydown', onKeydownClear)

  return (
    <div className='space-y-2'>
      <FormField
        control={form.control}
        name='url'
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input
                {...field}
                className='w-full focus-visible:ring-0 focus-visible:ring-offset-0 ring-0 focus:ring-0 outline-none'
                placeholder='Enter your website...'
                type='url'
                disabled={pending}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <div className='flex items-center gap-2 justify-end'>
        <Button
          variant='outline'
          onClick={handleClear}
          size='sm'
          disabled={pending}
        >
          Clear
        </Button>
        <Button
          ref={buttonRef}
          type='submit'
          variant='primary'
          size='sm'
          disabled={pending}
        >
          Generate
        </Button>
      </div>
    </div>
  )
}
