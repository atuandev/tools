import { cn } from '@/lib/utils'
import { Pacifico } from 'next/font/google'

const pacifico = Pacifico({
  subsets: ['latin'],
  weight: ['400']
})

export default function Logo() {
  return <div className={cn(pacifico.className, 'font-bold text-xl')}>atuandev</div>
}
