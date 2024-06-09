import { Container } from '@/components/container'
import { FormDropzone } from './_components/form-dropzone'
import { Heading } from '@/components/heading'

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
