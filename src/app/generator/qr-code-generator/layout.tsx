export async function generateMetadata() {
  return {
    title: 'QR Code Generator'
  }
}

export default function QRCodeGeneratorLayout({
  children
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
