'use client'

import { QRCodeOption } from '@/lib/types'
import { cn } from '@/lib/utils'

type QRCodeOptionItemProps = {
  option: QRCodeOption
  isActive?: boolean
  onOptionClick: (option: QRCodeOption) => void
}

export function QRCodeOptionItem({
  option,
  isActive,
  onOptionClick
}: QRCodeOptionItemProps) {
  const Icon = option.icon

  return (
    <div
      role='button'
      className={cn(
        'flex gap-2 items-center justify-center p-2 hover:bg-neutral-200 hover:dark:bg-gray-800 rounded-md shadow-sm min-w-fit flex-1',
        isActive ? 'bg-neutral-200 dark:bg-gray-800' : ''
      )}
      onClick={() => onOptionClick(option)}
    >
      <Icon size={16} />
      <p className='text-sm'>{option.label}</p>
    </div>
  )
}
