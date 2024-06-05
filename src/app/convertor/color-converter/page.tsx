import { Container } from '@/components/container'
import ColorConvertorForm from './_components/color-convertor-form'

export default function ColorConverterPage() {
  return (
    <Container className='flex flex-col items-center justify-center'>
      <h1 className='text-3xl font-bold text-center'>Color Converter</h1>
      <p className='mt-4 text-muted-foreground text-center'>
        Convert colors between different formats, such as HEX, RGB, HSL, and
        CMYK.
      </p>
      <ColorConvertorForm />
    </Container>
  )
}
