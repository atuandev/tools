import { Tool } from '@/lib/types'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import CardToolItem from './card-tool-item'

type ListCardToolsProps = {
  tools: Tool[]
  title: string
}

export default function ListCardTools({ tools, title }: ListCardToolsProps) {
  return (
    <Card className='bg-background/50 backdrop-blur-sm'>
      <CardHeader className='p-4 font-semibold'>{title}</CardHeader>
      <CardContent className='grid gap-4 sm:grid-cols-2 md:grid-cols-4 p-4'>
        {tools.map(tool => (
          <CardToolItem key={tool.label} tool={tool} />
        ))}
      </CardContent>
    </Card>
  )
}
