import { Container } from '@/components/container'
import { Heading } from '@/components/heading'

export default function KeyboardTesterPage() {
  return (
    <Container className='flex flex-col items-center justify-center'>
      <Heading
        title='Keyboard Tester'
        description='Press any key to test your keyboard working or not.'
      />
    </Container>
  )
}
