import { ThemeSwitch } from '@/components/shared/theme-switch'

export default function LoggedOut({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-24">
      {children}
      <ThemeSwitch />
    </main>
  )
}
