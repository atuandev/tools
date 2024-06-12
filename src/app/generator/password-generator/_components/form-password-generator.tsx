'use client'

import FileSaver from 'file-saver'
import { SaveIcon } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'
import { z } from 'zod'

import { FormCheckbox } from '@/components/form/form-checkbox'
import { FormInput } from '@/components/form/form-input'
import { FormTextareaCopy } from '@/components/form/form-input-copy'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

const DEFAULT_PASSWORD_LENGTH = 32

const passwordSchema = z.object({
  length: z.number().int().min(1).max(10000).default(DEFAULT_PASSWORD_LENGTH)
})

export function FormPasswordGenerator() {
  const [length, setLength] = useState<number>(DEFAULT_PASSWORD_LENGTH)
  const [uppercase, setUppercase] = useState<boolean>(true)
  const [lowercase, setLowercase] = useState<boolean>(true)
  const [digits, setDigits] = useState<boolean>(true)
  const [symbols, setSymbols] = useState<boolean>(true)
  const [avoidSimilarChars, setAvoidSimilarChars] = useState<boolean>(true)
  const [password, setPassword] = useState<string>('')

  const handleClear = () => {
    setLength(DEFAULT_PASSWORD_LENGTH)
    setUppercase(true)
    setLowercase(true)
    setDigits(true)
    setSymbols(true)
    setAvoidSimilarChars(true)
    setPassword('')
  }

  const handleGenerate = () => {
    const { success, error } = passwordSchema.safeParse({
      length
    })

    if (!success) {
      for (const err of error.errors) {
        toast.error(err.message)
      }
      return
    }

    if (!uppercase && !lowercase && !digits && !symbols) {
      toast.error('Please select at least one character type!')
      return
    }

    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz'
    const digitsLetters = '0123456789'
    const symbolLetters = '!@#$%^&*()_+-={}[]|:;<>,.?/~`'
    const similarLetters = 'iloO01'

    let characters: string = ''
    let generatedPassword: string = ''

    if (uppercase) {
      characters += uppercaseLetters
    }
    if (lowercase) {
      characters += lowercaseLetters
    }
    if (digits) {
      characters += digitsLetters
    }
    if (symbols) {
      characters += symbolLetters
    }
    if (avoidSimilarChars) {
      characters = characters.replace(
        new RegExp(`[${similarLetters}]`, 'g'),
        ''
      )
    }

    for (let i = 0; i < length; i++) {
      generatedPassword += characters.charAt(
        Math.floor(Math.random() * characters.length)
      )
    }

    setPassword(generatedPassword)
  }

  const handleSavePassword = () => {
    const blob = new Blob([password], { type: 'text/plain' })
    FileSaver.saveAs(blob, 'password.txt')
  }

  return (
    <div className='w-full my-12'>
      <Card className='max-w-[600px] mx-auto p-6'>
        <FormInput
          id='length'
          label='Length'
          type='number'
          value={length}
          onChange={e => setLength(parseInt(e.target.value))}
        />
        <div className='my-4 space-y-1.5'>
          <FormCheckbox
            id='uppercase'
            label='Uppercase letters'
            checked={uppercase}
            onCheckedChange={(value: boolean) => setUppercase(value)}
          />
          <FormCheckbox
            id='lowercase'
            label='Lowercase letters'
            checked={lowercase}
            onCheckedChange={(value: boolean) => setLowercase(value)}
          />
          <FormCheckbox
            id='digits'
            label='Digits'
            checked={digits}
            onCheckedChange={(value: boolean) => setDigits(value)}
          />
          <FormCheckbox
            id='symbols'
            label='Symbols'
            checked={symbols}
            onCheckedChange={(value: boolean) => setSymbols(value)}
          />
          <FormCheckbox
            id='avoid-similar-characters'
            label='Avoid similar characters (e.g. 1 and l, 0 and O)'
            checked={avoidSimilarChars}
            onCheckedChange={(value: boolean) => setAvoidSimilarChars(value)}
          />
        </div>

        <div className='flex justify-end gap-2 mt-2'>
          <Button variant='outline' onClick={handleClear}>
            Clear
          </Button>
          <Button variant='primary' onClick={handleGenerate}>
            Generate
          </Button>
        </div>

        {password && (
          <div className='mt-4 flex flex-col gap-2'>
            <FormTextareaCopy
              id='password'
              label='Generated Password'
              value={password}
              className='pr-12'
              maxHeight={480}
              readonly
            />
            <Button variant='success' onClick={handleSavePassword}>
              <SaveIcon className='size-5 mr-2' />
              Save
            </Button>
          </div>
        )}
      </Card>
    </div>
  )
}
