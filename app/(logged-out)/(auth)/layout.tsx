import Link from 'next/link'
import { PersonStandingIcon } from 'lucide-react'

import { Card } from '@/components/ui/card'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Link href="/">
        <PersonStandingIcon size={50} />
        <h1 className="sr-only">SupportMe</h1>
      </Link>
      <Card className="w-full max-w-sm">{children}</Card>
    </>
  )
}
