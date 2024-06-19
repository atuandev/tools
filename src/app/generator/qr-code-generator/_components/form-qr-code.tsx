'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { CopyIcon, SaveIcon } from 'lucide-react'
import Image from 'next/image'
import QrCode from 'qrcode'
import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Form } from '@/components/ui/form'
import { LIST_QR_CODE_OPTIONS } from '@/lib/constants'
import { QRCodeOption } from '@/lib/types'
import { FormQRCodeText } from './form-qr-code-text'
import { FormQRCodeURL } from './form-qr-code-url'
import { QRCodeOptionItem } from './qr-code-option-item'

const formSchema = z.object({
  url: z.string().url().optional()
})

const IMAGE_SIZE = 400

export function FormQRCode() {
  const [qrCodeURL, setQRCodeURL] = useState<string>('')
  const [activeOption, setActiveOption] = useState<QRCodeOption>(
    LIST_QR_CODE_OPTIONS[0]
  )
  const imageRef = useRef<HTMLImageElement>(null)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      url: ''
    }
  })

  const handleActiveOption = (option: QRCodeOption) => {
    setActiveOption(option)
  }

  const handleCopyImage = () => {
    if (!!imageRef.current) {
      const canvas: HTMLCanvasElement = document.createElement('canvas')
      canvas.width = IMAGE_SIZE
      canvas.height = IMAGE_SIZE

      canvas
        .getContext('2d')
        ?.drawImage(imageRef.current, 0, 0, IMAGE_SIZE, IMAGE_SIZE)
      canvas.toBlob((blob: any) => {
        navigator.clipboard.write([
          new ClipboardItem({
            'image/png': blob
          })
        ])
      }, 'image/png')

      toast.success('Copied to clipboard!')
    }
  }

  const handleDownloadImage = () => {
    if (!!imageRef.current) {
      const link = document.createElement('a')
      link.href = imageRef.current.src
      link.download = 'qr-code.png'
      link.click()
    }
  }

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const { url } = values

    if (!url) {
      return
    }

    const qrCodeDataUrl = await QrCode.toDataURL(url, {
      width: IMAGE_SIZE
    })
    setQRCodeURL(qrCodeDataUrl)
  }

  return (
    <div className='w-full mt-12 flex flex-wrap md:flex-nowrap items-center justify-center gap-4'>
      {/* Form */}
      <Card
        className='p-4 min-h-[400px] w-full'
        style={{ WebkitBackdropFilter: 'blur(8px)' }}
      >
        <div className='grid gap-4 lg:grid-cols-6 md:grid-cols-5 sm:grid-cols-4 grid-cols-3 mb-6'>
          {LIST_QR_CODE_OPTIONS.map(option => (
            <QRCodeOptionItem
              key={option.label}
              option={option}
              onOptionClick={handleActiveOption}
              isActive={activeOption?.label === option.label}
            />
          ))}
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            {activeOption?.label === 'URL' && <FormQRCodeURL form={form} />}
            {activeOption?.label === 'Text' && <FormQRCodeText />}
          </form>
        </Form>
      </Card>

      {/* QR Image */}
      <Card
        className='p-4 min-h-[400px] w-full md:w-[500px] flex flex-col items-center gap-4'
        style={{ WebkitBackdropFilter: 'blur(8px)' }}
      >
        <Image
          ref={imageRef}
          src={qrCodeURL || '/images/qr-code-atuandev.png'}
          width={IMAGE_SIZE}
          height={IMAGE_SIZE}
          alt='QR Code'
          className='rounded-md border shadow-sm'
        />

        <div className='flex items-center justify-center gap-2'>
          <Button variant='success' onClick={handleDownloadImage} size='sm'>
            <SaveIcon className='size-5 mr-2' />
            <p className='font-normal tracking-wide'>Download</p>
          </Button>
          <Button variant='outline' onClick={handleCopyImage} size='sm'>
            <CopyIcon className='size-5 mr-2' />
            <p className='font-normal tracking-wide'>Copy</p>
          </Button>
        </div>
      </Card>
    </div>
  )
}
