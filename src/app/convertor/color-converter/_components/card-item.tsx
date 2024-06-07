type List = {
  label: string
  value: string
}

type CardItemProps = {
  list: List[]
}

export function CardItem({ list }: CardItemProps) {
  return (
    <>
      {list.map(item => {
        const { label, value } = item

        return (
          <div className='mb-4 border-b-4' key={label}>
            <div className='text-sm font-medium'>{label}</div>
            <div className='my-2 text-lg font-bold'>{value}</div>
          </div>
        )
      })}
    </>
  )
}
