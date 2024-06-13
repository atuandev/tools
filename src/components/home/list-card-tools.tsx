import { Tool } from '@/lib/types'
import { CardToolItem } from './card-tool-item'

type ListCardToolsProps = {
  tools: Tool[]
  title: string
}

export function ListCardTools({ tools, title }: ListCardToolsProps) {
  return (
    <div
      className='border rounded-lg bg-background/50 backdrop-blur-[8px] shadow-sm'
      style={{
        WebkitBackdropFilter: 'blur(8px)'
      }}
    >
      <div className='p-4 pb-0 font-semibold'>{title}</div>
      <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-4 p-4'>
        {tools.map(tool => (
          <CardToolItem key={tool.label} tool={tool} />
        ))}
      </div>
    </div>
  )
}
