import React, { forwardRef, useState } from 'react'
import { CheckIcon, CopyIcon } from 'lucide-react'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip'

interface FormCopyProps {
  id: string
  label?: string
  type?: string
  value?: string
  placeholder?: string
  disabled?: boolean
  className?: string
  defaultValue?: string
  readonly?: boolean
  onBlur?: () => void
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const FormCopy = forwardRef<HTMLInputElement, FormCopyProps>(
  (
    {
      id,
      label,
      type = 'text',
      value,
      placeholder,
      disabled,
      className,
      readonly,
      onBlur,
      onChange
    },
    ref
  ) => {
    const [copied, setCopied] = useState(false)

    const copyToClipboard = async () => {
      const copyText = document.getElementById(id) as HTMLInputElement
      await navigator.clipboard.writeText(copyText.value)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }

    return (
      <div className='space-y-2'>
        <div className='space-y-1'>
          {label ? (
            <Label
              htmlFor={id}
              className='text-sm font-semibold text-foreground'
            >
              {label}
            </Label>
          ) : null}
          <div className='relative'>
            <Input
              value={value}
              onChange={onChange}
              ref={ref}
              id={id}
              name={id}
              type={type}
              placeholder={placeholder}
              disabled={disabled}
              className={cn(className, '')}
              onBlur={onBlur}
              aria-describedby={`${id}-error`}
              readOnly={readonly}
            />
            <div
              role='button'
              onClick={copyToClipboard}
              className='absolute top-1/2 right-2 transform -translate-y-1/2 py-1 px-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800'
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

FormCopy.displayName = 'FormCopy'
