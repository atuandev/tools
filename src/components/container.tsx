import { cn } from '@/lib/utils'

type ContainerProps = {
  className: string
  children: React.ReactNode
}

export function Container({ className, children }: ContainerProps) {
  return (
    <div className={cn('mx-auto min-h-[calc(100vh-312px)] py-10', className)}>
      {children}
    </div>
  )
}
