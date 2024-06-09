type HeadingProps = {
  title: string
  description?: string
}

export function Heading({ title, description }: HeadingProps) {
  return (
    <div className='space-y-4'>
      <h1 className='text-3xl font-bold text-center'>{title}</h1>
      <p className='text-muted-foreground text-center'>{description}</p>
    </div>
  )
}
