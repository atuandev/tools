'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import QrCode from 'qrcode'

import { Card } from '@/components/ui/card'
import { QRCodeOption } from '@/lib/types'
import {
  ImageIcon,
  LinkIcon,
  MailIcon,
  MessageSquareTextIcon,
  TextIcon,
  WifiIcon
} from 'lucide-react'
import { QRCodeOptionItem } from './qr-code-option-item'
import { useState } from 'react'
import { FormQRCodeURL } from './form-qr-code-url'
import { FormQRCodeText } from './form-qr-code-text'
import { Form } from '@/components/ui/form'
import Image from 'next/image'

const LIST_QR_CODE_OPTIONS: QRCodeOption[] = [
  {
    label: 'URL',
    icon: LinkIcon
  },
  {
    label: 'Text',
    icon: TextIcon
  },
  {
    label: 'Email',
    icon: MailIcon
  },
  {
    label: 'SMS',
    icon: MessageSquareTextIcon
  },
  {
    label: 'Wifi',
    icon: WifiIcon
  },
  {
    label: 'Image',
    icon: ImageIcon
  }
]

const formSchema = z.object({
  url: z.string().url()
})

const SIZE = 400

export function FormQRCode() {
  const [qrCodeURL, setQRCodeURL] = useState<string>('')
  const [activeOption, setActiveOption] = useState<QRCodeOption>(
    LIST_QR_CODE_OPTIONS[0]
  )

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      url: ''
    }
  })

  const handleActiveOption = (option: QRCodeOption) => {
    setActiveOption(option)
  }

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const { url } = values
    const qrCodeDataUrl = await QrCode.toDataURL(url, {
      width: SIZE,
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
        className='p-4 min-h-[400px] w-full md:w-[500px] flex flex-col items-center'
        style={{ WebkitBackdropFilter: 'blur(8px)' }}
      >
        <Image 
          src={qrCodeURL || '/images/qr-code-atuandev.png'}
          width={SIZE}
          height={SIZE}
          alt='QR Code'
          className='rounded-md border shadow-sm'
        />
      </Card>
    </div>
  )
}
