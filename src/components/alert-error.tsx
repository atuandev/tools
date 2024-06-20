import { AlertCircle } from 'lucide-react'

interface AlertErrorProps {
  message?: string
}

export default function AlertError({ message }: AlertErrorProps) {
  if (!message) return null

  return (
    <div className='flex items-center space-x-3 text-destructive text-sm bg-destructive/15 p-3 rounded-md border border-destructive/80 dark:text-rose-400 dark:border-rose-400'>
      <AlertCircle className='size-5' />
      <span>{message}</span>
    </div>
  )
}
