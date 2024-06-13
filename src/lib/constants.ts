import {
  ImageIcon,
  KeyIcon,
  KeyboardIcon,
  PipetteIcon,
  TextIcon
} from 'lucide-react'
import { ListTools } from '@/lib/types'

export const SITE_URL =
  process.env.NODE_ENV === 'production'
    ? process.env.NEXT_PUBLIC_LOCAL_URL
    : process.env.NEXT_PUBLIC_URL

export const SITE_NAME = 'Tools Online'
export const SITE_TITLE = 'Tools Online'
export const SITE_DESCRIPTION =
  'A collection of free tools created by Atuandev.'

export const LIST_TOOLS: ListTools[] = [
  {
    label: 'Converter',
    tools: [
      {
        label: 'Color Converter',
        link: '/convertor/color-converter',
        keywords: ['Convertor', 'Color', 'Hex', 'RGB', 'HSL', 'CSS', 'Picker'],
        color: '#fd7e14',
        icon: PipetteIcon
      },
      {
        label: 'Image Converter',
        link: '/convertor/image-converter',
        keywords: ['Convertor', 'Image', 'Format', 'Extension'],
        color: '#40c057',
        icon: ImageIcon
      }
    ]
  },
  {
    label: 'Calculator',
    tools: [
      {
        label: 'Word Counter',
        link: '/calculator/word-counter',
        keywords: ['Word', 'Counter', 'Calculator', 'Text'],
        color: '#4c6ef5',
        icon: TextIcon
      }
    ]
  },
  {
    label: 'Generator',
    tools: [
      {
        label: 'Password Generator',
        link: '/generator/password-generator',
        keywords: ['Generator', 'Password', 'Random'],
        color: '#f783ac',
        icon: KeyIcon
      }
    ]
  },
  {
    label: 'Tester',
    tools: [
      {
        label: 'Keyboard Tester',
        link: '/tester/keyboard-tester',
        keywords: ['Tester', 'Keyboard', 'Test'],
        color: '#be4bdb',
        icon: KeyboardIcon
      }
    ]
  }
]
