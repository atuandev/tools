'use client'

import { useState } from 'react'

import { FormCheckbox } from '@/components/form/form-checkbox'
import { FormInput } from '@/components/form/form-input'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FormCopy } from '@/components/form/form-copy'

export function FormPasswordGenerator() {
  const [length, setLength] = useState<number>(12)
  const [uppercase, setUppercase] = useState<boolean>(true)
  const [lowercase, setLowercase] = useState<boolean>(true)
  const [digits, setDigits] = useState<boolean>(true)
  const [symbols, setSymbols] = useState<boolean>(true)
  const [avoidSimilarCharacters, setAvoidSimilarCharacters] =
    useState<boolean>(true)
  const [password, setPassword] = useState<string>('123123')

  return (
    <div className='w-full my-12'>
      <Card className='max-w-[600px] mx-auto p-6'>
        <FormInput
          id='length'
          label='Length'
          type='number'
          value={length}
          onChange={e => setLength(Number.parseInt(e.target.value))}
        />

        <div className='my-3 space-y-1.5'>
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
            checked={avoidSimilarCharacters}
            onCheckedChange={(value: boolean) =>
              setAvoidSimilarCharacters(value)
            }
          />
        </div>
        <div className='flex justify-end gap-2'>
          <Button variant='outline'>Clear</Button>
          <Button variant='primary'>Generate</Button>
        </div>

        {password && (
          <div className='mt-4 space-y-2'>
            <FormCopy
              id='password'
              label='Generated Password'
              value={password}
              onChange={e => setPassword(e.target.value)}
              readonly
              className='focus-visible:ring-0 focus-visible:ring-offset-0 ring-0 focus:ring-0 outline-none'
            />
            <Button variant='success'>Save</Button>
          </div>
        )}
      </Card>
    </div>
  )
}
