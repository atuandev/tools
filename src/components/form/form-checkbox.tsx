import React, { FormEventHandler, forwardRef } from 'react'
import { Label } from '../ui/label'
import { Checkbox } from '../ui/checkbox'

type FormCheckboxProps = {
  id: string
  label?: string
  checked?: boolean
  required?: boolean
  disabled?: boolean
  className?: string
  onCheckedChange?: (checked: boolean) => void
}

export const FormCheckbox: React.FC<FormCheckboxProps> = ({
  id,
  label,
  checked,
  className,
  disabled,
  required,
  onCheckedChange
}) => {
  return (
    <div className='items-center flex gap-2'>
      <Checkbox
        id={id}
        checked={checked}
        onCheckedChange={onCheckedChange}
        required={required}
        disabled={disabled}
        className={className}
      />
      {label ? <Label htmlFor={id}>{label}</Label> : null}
    </div>
  )
}

FormCheckbox.displayName = 'FormCheckbox'
