export async function generateMetadata() {
  return {
    title: 'Word Counter'
  }
}

export default function WordCounterLayout({
  children
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
