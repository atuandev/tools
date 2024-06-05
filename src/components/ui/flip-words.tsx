'use client'

import { useAnimate } from 'framer-motion'
import { useEffect } from 'react'

type Word = {
  text: string
  className: string
}

type FlipWordsProps = {
  words: Word[]
}

export const FlipWords = ({ words }: FlipWordsProps) => {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    animate(
      [
        [scope.current, { y: '0%' }, { duration: 0 }],
        [scope.current, { y: '-25%' }, { duration: 0.3, at: '+1.3' }],
        [scope.current, { y: '-50%' }, { duration: 0.3, at: '+1.3' }],
        [scope.current, { y: '-75%' }, { duration: 0.3, at: '+1.3' }]
      ],
      {
        repeat: Number.POSITIVE_INFINITY
      }
    )
  }, [animate, scope])

  return (
    <div className='inline-grid h-7 overflow-hidden sm:h-10'>
      <div ref={scope}>
        {words.map(({ text, className }, index) => (
          <div className={className} key={index}>
            {text}
          </div>
        ))}
      </div>
    </div>
  )
}
