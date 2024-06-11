import { Container } from '@/components/container'
import { Heading } from '@/components/heading'
import { FormPasswordGenerator } from './_components/form-password-generator'

export default function PasswordGeneratorPage() {
  return (
    <Container className='flex flex-col items-center justify-center'>
      <Heading
        title='Generate a password'
        description='Generate a random password with different options.'
      />
      <FormPasswordGenerator />
    </Container>
  )
}
