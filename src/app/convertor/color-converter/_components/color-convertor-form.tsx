'use client'

import { useState } from 'react'

import { colord, extend, getFormat } from 'colord'
import hwbPlugin from 'colord/plugins/hwb'
import cmykPlugin from 'colord/plugins/cmyk'
import lchPlugin from 'colord/plugins/lch'
import namesPlugin from 'colord/plugins/names'
import a11yPlugin from 'colord/plugins/a11y'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { CardItem } from './card-item'
import { Heading } from './heading'

extend([hwbPlugin, cmykPlugin, lchPlugin, namesPlugin, a11yPlugin])

type List = {
  label: string
  value: string
}

type Lists = {
  label: string
  data: List[]
}

export function ColorConvertorForm() {
  const [color, setColor] = useState<string>('#ffffff')
  const lists: Lists[] = [
    {
      label: 'Conversion',
      data: [
        {
          label: 'HEX',
          value: colord(color).toHex()
        },
        {
          label: 'RGB',
          value: colord(color).toRgbString()
        },
        {
          label: 'HSL',
          value: colord(color).toHslString()
        },
        {
          label: 'HWB',
          value: colord(color).toHwbString()
        },
        {
          label: 'CMYK',
          value: colord(color).toCmykString()
        },
        {
          label: 'LCH',
          value: colord(color).toLchString()
        }
      ]
    },
    {
      label: 'Analysis',
      data: [
        {
          label: 'Is it a valid CSS value?',
          value: colord(color).isValid() ? 'Yes' : 'No'
        },
        {
          label: 'CSS Keyword',
          value: colord(color).toName({ closest: true }) || 'Unknown'
        },
        {
          label: 'Format',
          value: getFormat(color) || '-'
        },
        {
          label: 'Hue (0-359)',
          value: `${colord(color).hue()} deg`
        },
        {
          label: 'Brightness',
          value: `${Math.floor(colord(color).brightness() * 100)}% (${
            colord(color).isDark() ? 'Dark' : 'Light'
          })`
        },
        {
          label: 'Contrast',
          value: `${colord(color).contrast()}:1`
        }
      ]
    }
  ]

  return (
    <>
      <div className='relative my-8 w-full max-w-[250px] flex items-center justify-center gap-4'>
        <Label htmlFor='color'>
          <div
            className='size-9 rounded-lg cursor-pointer border'
            style={{ backgroundColor: color }}
          />
        </Label>
        <Input
          className='invisible absolute left-0 top-2'
          type='color'
          id='color'
          onChange={e => setColor(e.target.value)}
        />
        <Input value={color} onChange={e => setColor(e.target.value)} />
      </div>
      
      <div className='my-8 grid w-full gap-4 sm:grid-cols-2 bg-background/50 backdrop-blur-sm rounded-md'>
        {lists.map(list => {
          const { label, data } = list

          return (
            <div key={label} className='rounded-lg border p-4'>
              <Heading title={label} />
              <CardItem list={data} />
            </div>
          )
        })}
      </div>
    </>
  )
}