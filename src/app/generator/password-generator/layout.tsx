export async function generateMetadata() {
  return {
    title: 'Password Generator'
  }
}

export default function PasswordGeneratorLayout({
  children
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
