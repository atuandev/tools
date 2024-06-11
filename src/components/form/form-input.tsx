'use client'

import { forwardRef } from 'react'
import { useFormStatus } from 'react-dom'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { FormErrors } from '@/components/form/form-errors'

type FormInputProps = {
  id: string
  label?: string
  type?: string
  value?: number | string
  placeholder?: string
  required?: boolean
  disabled?: boolean
  errors?: Record<string, string[] | undefined>
  className?: string
  defaultValue?: string
  onBlur?: () => void
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  (
    {
      id,
      label,
      type = 'text',
      value,
      placeholder,
      required,
      disabled,
      errors,
      className,
      onBlur,
      onChange
    },
    ref
  ) => {
    const { pending } = useFormStatus()

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
          <Input
            id={id}
            name={id}
            type={type}
            value={value}
            placeholder={placeholder}
            required={required}
            disabled={disabled || pending}
            ref={ref}
            className={cn('text-sm px-2 py-1.5 h-7', className)}
            onBlur={onBlur}
            onChange={onChange}
            aria-describedby={`${id}-error`}
          />
        </div>
        <FormErrors id={id} errors={errors} />
      </div>
    )
  }
)

FormInput.displayName = 'FormInput'
