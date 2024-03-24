import Link from 'next/link'

import { CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { SignUpForm } from '@/components/shared/form'

export default function SignUp() {
  return (
    <>
      <CardHeader className="items-center space-y-4 max-md:px-3">
        <h2 className="text-2xl font-semibold leading-none tracking-tight">Sign up</h2>
        <h3 className="text-xs font-normal text-muted-foreground sm:text-sm">Sign up for a new SupportMe account</h3>
      </CardHeader>
      <CardContent className="max-md:px-3">
        <SignUpForm />
      </CardContent>
      <CardFooter className="justify-end">
        <Link href="/login" className="text-xs underline">
          Alraedy have an account?
        </Link>
      </CardFooter>
    </>
  )
}
