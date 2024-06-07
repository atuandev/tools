import { Container } from '@/components/container'
import { ColorConvertorForm } from './_components/color-convertor-form'
import { Heading } from './_components/heading'

export default function ColorConverterPage() {
  return (
    <Container className='flex flex-col items-center justify-center'>
      <Heading
        title='Color Converter'
        description='Convert colors between different formats, such as HEX, RGB, HSL, and
        CMYK.'
      />
      <ColorConvertorForm />
    </Container>
  )
}
