import React, { forwardRef, useState } from 'react'
import { CheckIcon, CopyIcon } from 'lucide-react'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip'
import { Textarea } from '@/components/ui/text-area'

interface FormTextareaCopyProps {
  id: string
  label?: string
  type?: string
  value?: string
  placeholder?: string
  disabled?: boolean
  className?: string
  defaultValue?: string
  readonly?: boolean
  maxHeight?: number
  onBlur?: () => void
}

export const FormTextareaCopy = forwardRef<
  HTMLTextAreaElement,
  FormTextareaCopyProps
>(
  (
    {
      id,
      label,
      value,
      placeholder,
      disabled,
      className,
      readonly,
      maxHeight,
    },
    ref
  ) => {
    const [copied, setCopied] = useState(false)

    const copyToClipboard = async () => {
      const copyText = document.getElementById(id) as HTMLTextAreaElement
      await navigator.clipboard.writeText(copyText.value)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }

    return (
      <div className='space-y-2 w-full'>
        <div className='space-y-1 w-full'>
          {label ? (
            <Label
              htmlFor={id}
              className='text-sm font-semibold text-foreground'
            >
              {label}
            </Label>
          ) : null}
          <div className='relative'>
            <Textarea
              value={value}
              id={id}
              name={id}
              placeholder={placeholder}
              disabled={disabled}
              className={cn(
                className,
                'focus-visible:ring-0 focus-visible:ring-offset-0 ring-0 focus:ring-0 outline-none'
              )}
              readOnly={readonly}
              maxHeight={maxHeight}
            />
            <div
              role='button'
              onClick={copyToClipboard}
              className='absolute size-8 top-1/2 right-2 transform -translate-y-1/2 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center'
            >
              {copied ? (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <CheckIcon className='size-4' />
                  </TooltipTrigger>
                  <TooltipContent side='bottom' sideOffset={16}>
                    <p>Copied</p>
                  </TooltipContent>
                </Tooltip>
              ) : (
                <Tooltip>
                  <TooltipTrigger>
                    <CopyIcon className='size-4' />
                  </TooltipTrigger>
                  <TooltipContent side='bottom' sideOffset={16}>
                    <p>Copy to clipboard</p>
                  </TooltipContent>
                </Tooltip>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
)

FormTextareaCopy.displayName = 'FormTextareaCopy'
