export async function generateMetadata() {
  return {
    title: 'Keyboard Tester'
  }
}

export default function KeyboardTesterLayout({
  children
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
