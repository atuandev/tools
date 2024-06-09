'use client'

import { saveAs } from 'file-saver'
import { Trash } from 'lucide-react'
import Image from 'next/image'

import { FileOption, ImageFile, fileOptions } from '@/lib/types'

import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'

type FileItemProps = {
  file: ImageFile
  onDeleteFile: (id: string) => void
  onSetExtension: (id: string, value: FileOption) => void
}

const onDownload = async (result: string, filename: string, to: string) => {
  const blob = await fetch(result).then(res => res.blob())
  saveAs(blob, `${filename.replace(/\.\w+$/, '')}.${to}`)
}

export function FileItem({
  file,
  onDeleteFile,
  onSetExtension
}: FileItemProps) {
  const { id, preview, extension, name, size, result, to } = file

  return (
    <div className='w-full bg-background/60 backdrop-blur-md shadow-sm border rounded-md p-4 flex flex-col sm:flex-row justify-between sm:items-center items-start gap-2'>
      <div className='flex items-center gap-2'>
        <Image
          src={preview}
          width={48}
          height={48}
          alt={name}
          className='rounded-lg border shadow-sm aspect-square object-cover pointer-events-none'
        />
        <div className='flex flex-col gap-1'>
          <p className='font-semibold'>{name}</p>
          <p className='text-muted-foreground text-sm'>{size}</p>
        </div>
      </div>

      <div className='flex items-center gap-2'>
        {result ? (
          <Button
            variant='success'
            onClick={() => to && onDownload(result, name, to)}
          >
            Download
          </Button>
        ) : (
          <>
            <p>{extension} to</p>
            <Select
              value={to}
              onValueChange={(option: FileOption) => onSetExtension(id, option)}
            >
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
          </>
        )}
        <Button
          variant='destructive'
          size='sm'
          onClick={() => onDeleteFile(id)}
        >
          <Trash className='size-4 text-white' />
        </Button>
      </div>
    </div>
  )
}
