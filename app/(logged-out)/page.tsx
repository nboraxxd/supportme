import { PersonStandingIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1 className="flex items-center justify-center gap-2 max-sm:flex-col">
        <PersonStandingIcon size={50} className="text-pink-500" />
        SupportMe
      </h1>
      <p className="text-balance text-center">The best dashboard to manage customer support</p>
      <div className="flex items-center gap-2">
        <Button asChild>
          <Link href="/login">Log in</Link>
        </Button>
        <small>or</small>
        <Button variant="outline" asChild>
          <Link href="/sign-up">Sign up</Link>
        </Button>
      </div>
    </>
  )
}
