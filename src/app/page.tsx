import { Button } from '@/components/ui/button'
import { FlipWords } from '@/components/ui/flip-words'
import Link from 'next/link'

export default function Home() {
  const words = ['Convertor', 'Calculator', 'Generator', 'Tester']

  return (
    <div className='my-12 space-y-8'>
      <h1 className='text-4xl font-bold tracking-wide'>
        Collection of
        <FlipWords words={words} />
      </h1>
      <p className='leading-6 text-muted-foreground tracking-wide'>
        Here is a collection of online free tools I have frequently used...
      </p>
      <Button>
        <Link href='#get-started'>Get Started</Link>
      </Button>
    </div>
  )
}
