'use client'

import { filesize } from 'filesize'
import { ImageIcon } from 'lucide-react'
import { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { toast } from 'sonner'
import { v4 as uuid } from 'uuid'

import { base64ToSvg } from '@/lib/base64-to-svg'
import { getExtension } from '@/lib/get-extension'
import { imageToBase64 } from '@/lib/image-to-base64'
import { svgToBase64 } from '@/lib/svg-to-base64'
import { truncateFilename } from '@/lib/truncate-filename'
import { FileOption, ImageFile, fileOptions } from '@/lib/types'

import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { FileItem } from './file-item'

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

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      'image/png': fileOptions.map(option => `.${option.value}`)
    },
    onDropRejected: files => {
      files.forEach(file => {
        toast.error(
          `File type "${getExtension(file.file.name)}" is not supported!`
        )
      })
    }
  })

  const onDeleteFile = (id: string) => {
    setFiles(prevFiles => prevFiles.filter(file => file.id !== id))
  }

  const onClearAll = () => setFiles([])

  const onSetExtension = (id: string, value: FileOption) => {
    setFiles((prevFiles: ImageFile[]) =>
      prevFiles.map(file =>
        file.id === id
          ? {
              ...file,
              to: value
            }
          : file
      )
    )
  }

  const onSetAllExtensions = (value: FileOption) => {
    setFiles((prevFiles: ImageFile[]) =>
      prevFiles.map(file => ({
        ...file,
        to: value
      }))
    )
  }

  const onConvertAll = () => {
    files.forEach(f => {
      const { id, extension, file, to } = f

      if (!to) {
        toast.error(`Please select a format for "${file.name}"`)
        return
      }

      let conversion

      if (to === 'svg') {
        conversion = base64ToSvg
      } else if (extension === 'SVG') {
        conversion = svgToBase64
      } else {
        conversion = imageToBase64
      }

      conversion(file, (result: string) => {
        setFiles((prevFiles: ImageFile[]) =>
          prevFiles.map(file =>
            file.id === id
              ? {
                  ...file,
                  result
                }
              : file
          )
        )
      })
    })
  }

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
              <Select
                onValueChange={(option: FileOption) =>
                  onSetAllExtensions(option)
                }
              >
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
              <Button variant='outline' onClick={onClearAll}>
                Clear all
              </Button>
              <Button
                variant='primary'
                onClick={onConvertAll}
                disabled={files.some(f => !f.to)}
              >
                Convert All
              </Button>
            </div>
          </div>

          <div className='space-y-2'>
            {files.map((file: ImageFile) => (
              <FileItem
                key={file.id}
                file={file}
                onDeleteFile={onDeleteFile}
                onSetExtension={onSetExtension}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
