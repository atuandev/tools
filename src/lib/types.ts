import { LucideIcon } from "lucide-react"

export type Tool = {
  label: string
  link: string
  keywords: string[]
  color: string
  icon: LucideIcon
}

export type ImageFile = {
  file: File
  id: string
  name: string
  extension: string
  size: string
  preview: string
  to?: FileOption
  result?: string
}

export type FileOption = (typeof fileOptions)[number]['value']

export const fileOptions = [
  { label: 'JPG', value: 'jpg' },
  { label: 'JPEG', value: 'jpeg' },
  { label: 'PNG', value: 'png' },
  { label: 'GIF', value: 'gif' },
  { label: 'WEBP', value: 'webp' },
  { label: 'SVG', value: 'svg' },
  { label: 'ICO', value: 'ico' }
] as const
