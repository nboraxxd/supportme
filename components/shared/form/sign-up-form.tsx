'use client'

import { useState } from 'react'
import { CalendarIcon } from 'lucide-react'
import { format } from 'date-fns'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { cn } from '@/lib/utils'
import { SignUpFormValues, signUpFormSchema } from '@/lib/validation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'

export default function LoginForm() {
  const [openCalendar, setOpenCalendar] = useState(false)

  const form = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
      account: {
        type: 'personal',
        company: undefined,
        numberOfEmployees: undefined,
      },
      dob: undefined,
    },
  })

  const accountType = form.watch('account.type')

  const dobFromDate = new Date()
  dobFromDate.setFullYear(dobFromDate.getFullYear() - 120)

  function onSubmit(values: SignUpFormValues) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit, (err) => console.log(err))} className="space-y-6" noValidate>
        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="bruce@wayne.dc" type="email" autoComplete="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Account type */}
        <FormField
          control={form.control}
          name="account.type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Account type</FormLabel>
              <Select
                onValueChange={(value: SignUpFormValues['account']['type']) => {
                  if (value === 'personal') {
                    form.setValue('account.company', undefined)
                    form.setValue('account.numberOfEmployees', undefined)
                  }

                  return field.onChange(value)
                }}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger
                    className={cn({
                      'text-muted-foreground': accountType === undefined,
                    })}
                  >
                    <SelectValue placeholder="Select an account type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="personal">Personal</SelectItem>
                  <SelectItem value="company">Company</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {accountType === 'company' ? (
          <>
            {/* Company name */}
            <FormField
              control={form.control}
              name="account.company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company name</FormLabel>
                  <FormControl>
                    <Input placeholder="Wayne Enterprises" {...field} value={field.value ?? ''} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Employees */}
            <FormField
              control={form.control}
              name="account.numberOfEmployees"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Employee count</FormLabel>
                  <FormControl>
                    <Input placeholder="150" type="number" {...field} value={field.value ?? ''} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        ) : null}

        {/* Date of birth */}
        <FormField
          control={form.control}
          name="dob"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Date of birth</FormLabel>
              <Popover open={openCalendar} onOpenChange={setOpenCalendar} modal={true}>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={'outline'}
                      className={cn('pl-3 text-left font-normal normal-case', !field.value && 'text-muted-foreground')}
                    >
                      {field.value ? format(field.value, 'dd/MM/yyyy') : <span>Pick a date</span>}
                      <CalendarIcon className="ml-auto size-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={(ev) => {
                      field.onChange(ev)
                      setOpenCalendar(false)
                    }}
                    // disabled={(date) => {
                    //   const today = new Date()
                    //   today.setHours(0, 0, 0, 0)
                    //   return date < today || date < new Date('1900-01-01') // disable dates before today and before 1900
                    //   return date > today || date < new Date('1900-01-01') // disable dates after today and before 1900
                    // }}
                    initialFocus
                    fixedWeeks
                    weekStartsOn={1}
                    fromDate={dobFromDate}
                    toDate={new Date()}
                    captionLayout="dropdown-buttons"
                  />
                </PopoverContent>
              </Popover>
              <FormDescription>Your date of birth is used to calculate your age.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Password */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="••••••••" type="password" autoComplete="new-password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Confirm password */}
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm password</FormLabel>
              <FormControl>
                <Input placeholder="••••••••" type="password" autoComplete="new-password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Sign up
        </Button>
      </form>
    </Form>
  )
}
