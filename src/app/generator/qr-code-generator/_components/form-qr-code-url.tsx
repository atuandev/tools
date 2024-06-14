'use client'

import { Button } from '@/components/ui/button'
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useFormStatus } from 'react-dom'

type FormQRCodeURLProps = {
  form: any
}

export function FormQRCodeURL({ form }: FormQRCodeURLProps) {
  const { pending } = useFormStatus()

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
      <Button type='submit' size='sm' disabled={pending}>
        Generate
      </Button>
    </div>
  )
}
