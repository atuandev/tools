import { Container } from '@/components/container'
import { Heading } from '@/components/heading'
import { FormWordCounter } from './_components/form-word-counter'

export default function WordCounterPage() {
  return (
    <Container className='flex flex-col items-center justify-center'>
      <Heading
        title='Word counter'
        description='Count the number of words in a text.'
      />
      <FormWordCounter />
    </Container>
  )
}
