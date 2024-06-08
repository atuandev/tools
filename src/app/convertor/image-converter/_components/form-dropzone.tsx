'use client'

import { filesize } from 'filesize'
import { ImageIcon } from 'lucide-react'
import { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { v4 as uuid } from 'uuid'

import { getExtension } from '@/lib/get-extension'
import { truncateFilename } from '@/lib/truncate-filename'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { FileItem } from './file-item'
import { ImageFile, fileOptions } from '@/lib/types'


export function FormDropzone() {
  const [files, setFiles] = useState<ImageFile[]>([])
  console.log('FormDropzone ~ files:', files)

  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.forEach(file => {
      const newFile: ImageFile = {
        file,
        id: uuid(),
        name: truncateFilename(file.name),
        extension: getExtension(file.name)?.toUpperCase(),
        size: filesize(file.size, {
          standard: 'jedec',
          base: 2
        }),
        preview: URL.createObjectURL(file)
      }
      setFiles(prevFiles => [...prevFiles, newFile])
    })
  }, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <div className='w-full'>
      <div
        {...getRootProps()}
        className='hover:bg-muted my-12 flex cursor-pointer flex-col items-center gap-2 rounded-lg border-2 border-dashed px-6 py-8 transition-colors duration-300 shadow-sm'
      >
        <input {...getInputProps()} />
        <ImageIcon size={48} />
        <p>Drop some images here, or click to select files.</p>
      </div>

      {files.length > 0 && (
        <div className='space-y-4'>
          <div className='flex items-center justify-between gap-4'>
            <div className='flex gap-2 md:gap-3 items-center'>
              <div>Convert all to</div>
              <Select>
                <SelectTrigger className='w-[100px] sm:w-[120px]'>
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
            </div>
            <div className='flex gap-2 md:gap-3 items-center'>
              <Button variant='outline'>Clear all</Button>
              <Button variant='primary'>Convert All</Button>
            </div>
          </div>

          <div className='space-y-2'>
            {files.map((file: ImageFile) => (
              <FileItem key={file.id} file={file} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
