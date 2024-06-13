'use client'

import { KeyType } from '@/lib/types'
import { cn } from '@/lib/utils'

type KeyButtonProps = {
  data: KeyType
}

export function KeyButton({ data }: KeyButtonProps) {
  const { keyName, active, style } = data

  return (
    <div
      className={cn(
        'flex h-[35px] w-8 items-center justify-center rounded bg-[#333] text-sm text-white shadow-[rgb(34_34_34)_0px_4px_0px_5px]',
        active && 'bg-sky-600'
      )}
      style={style}
    >
      {keyName}
    </div>
  )
}
