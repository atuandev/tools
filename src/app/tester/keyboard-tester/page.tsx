import { Container } from '@/components/container'
import { Heading } from '@/components/heading'
import { KeyboardLayout } from './_components/keyboard-layout'

export default function KeyboardTesterPage() {
  return (
    <Container className='flex flex-col items-center justify-center'>
      <Heading
        title='Keyboard Tester'
        description='Press any key to test your keyboard working or not.'
      />
      <KeyboardLayout />
    </Container>
  )
}
