import { Container } from '@/components/container'
import { Heading } from '@/components/heading'
import { FormQRCode } from './_components/form-qr-code'

export default function QRCodeGeneratorPage() {
  return (
    <Container className='flex flex-col items-center justify-center'>
      <Heading
        title='Generate a QR Code'
        description='Generate a QR code for your url, text, or any other link.'
      />
      <FormQRCode />
    </Container>
  )
}
