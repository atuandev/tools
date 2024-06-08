import { Container } from '@/components/container'
import { Heading } from './_components/heading'
import { FormDropzone } from './_components/form-dropzone'

export default function ImageConvertorPage() {
  return (
    <Container className='flex flex-col items-center justify-center'>
      <Heading
        title='Image Converter'
        description='Convert your image to different formats.'
      />
      <FormDropzone />
    </Container>
  )
}
