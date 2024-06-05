export async function generateMetadata() {
  return {
    title: 'Image Converter'
  }
}

export default function ImageConvertorLayout({
  children
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
