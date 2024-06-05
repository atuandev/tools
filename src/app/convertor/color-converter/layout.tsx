export async function generateMetadata() {
  return {
    title: 'Color Converter'
  }
}

export default function ColorConvertorLayout({
  children
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
