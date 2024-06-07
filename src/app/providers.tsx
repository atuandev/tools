'use client'

import { TooltipProvider } from '@/components/ui/tooltip'
import { ThemeProvider } from 'next-themes'

type ProvidersProps = {
  children: React.ReactNode
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='system'
      enableSystem
      enableColorScheme
      disableTransitionOnChange
    >
      <TooltipProvider delayDuration={0}>{children}</TooltipProvider>
    </ThemeProvider>
  )
}
