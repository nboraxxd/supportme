import Link from 'next/link'

import { CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { LoginForm } from '@/components/shared/form'

export default function Login() {
  return (
    <>
      <CardHeader className="items-center space-y-4 max-md:px-3">
        <h2 className="text-2xl font-semibold leading-none tracking-tight">Login</h2>
        <h3 className="text-xs font-normal text-muted-foreground sm:text-sm">Login to your SupportMe account</h3>
      </CardHeader>
      <CardContent className="max-md:px-3">
        <LoginForm />
      </CardContent>
      <CardFooter className="justify-end">
        <Link href="/sign-up" className="text-xs underline">
          Don&apos;t have an account?
        </Link>
      </CardFooter>
    </>
  )
}
