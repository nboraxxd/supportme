import Link from 'next/link'
import { PersonStandingIcon } from 'lucide-react'

import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { LoginForm } from '@/components/login'

export default function Login() {
  return (
    <>
      <Link href="/">
        <PersonStandingIcon size={50} />
        <span className="sr-only">SupportMe</span>
      </Link>
      <Card className="w-full max-w-sm">
        <CardHeader className="items-center space-y-4 max-md:px-3">
          <h1 className="text-2xl font-semibold leading-none tracking-tight">Login</h1>
          <p className="text-xs text-muted-foreground sm:text-sm">Login to your SupportMe account</p>
        </CardHeader>
        <CardContent className="max-md:px-3">
          <LoginForm />
        </CardContent>
        <CardFooter className="justify-end">
          <Link href="/sign-up" className="text-xs underline ">
            Don&apos;t have an account?
          </Link>
        </CardFooter>
      </Card>
    </>
  )
}
