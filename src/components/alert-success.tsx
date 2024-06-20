import { CheckCircle } from 'lucide-react'

interface AlertSuccessProps {
  message?: string
}

export default function AlertSuccess({ message }: AlertSuccessProps) {
  if (!message) return null

  return (
    <div className='flex items-center space-x-3 text-emerald-500 text-sm bg-emerald-500/15 p-3 rounded-md'>
      <CheckCircle className='size-5' />
      <span>{message}</span>
    </div>
  )
}
