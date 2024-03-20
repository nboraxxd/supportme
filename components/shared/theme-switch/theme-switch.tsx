'use client'

import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="fixed bottom-5 right-5">
      <Button variant="outline" size="icon" onClick={() => (theme === 'dark' ? setTheme('light') : setTheme('dark'))}>
        <SunIcon className="size-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <MoonIcon className="absolute size-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  )
}
