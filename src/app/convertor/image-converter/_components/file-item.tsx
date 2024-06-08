'use client'

import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'

import { ImageFile, fileOptions } from '@/lib/types'
import { Trash } from 'lucide-react'

type FileItemProps = {
  file: ImageFile
}

export function FileItem({ file }: FileItemProps) {
  return (
    <div className='w-full bg-background/60 backdrop-blur-md shadow-sm border rounded-md p-4 flex flex-col sm:flex-row justify-between sm:items-center items-start gap-2'>
      <div className='flex flex-col gap-1'>
        <p className='font-semibold'>{file.name}</p>
        <p className='text-muted-foreground text-sm'>{file.size}</p>
      </div>
      <div className='flex items-center gap-2'>
        <p>{file.extension} to</p>
        <Select>
          <SelectTrigger className='w-[100px]'>
            <SelectValue placeholder='Select' />
          </SelectTrigger>
          <SelectContent>
            {fileOptions.map(option => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button variant='destructive' size='sm' >
          <Trash className='size-4 text-white' />
        </Button>
      </div>
    </div>
  )
}
