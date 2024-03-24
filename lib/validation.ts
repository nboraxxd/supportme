import { z } from 'zod'

const email = z.string().email()
const password = z.string().min(8)

export const loginFormSchema = z
  .object({
    email,
    password,
  })
  .strict()

export const signUpFormSchema = z
  .object({
    email,
    account: z
      .object({
        type: z.enum(['personal', 'company']),
        company: z.string().optional(),
        numberOfEmployees: z.number().optional(),
      })
      .superRefine(({ type, company }, ctx) => {
        if (type === 'company' && !company) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: 'Company name is required',
            path: ['company'],
          })
        }
      })
      .superRefine(({ type, numberOfEmployees }, ctx) => {
        if (type === 'company' && (!numberOfEmployees || numberOfEmployees < 1)) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: 'Number of employees is required',
            path: ['numberOfEmployees'],
          })
        }
      }),
    dob: z.date(),
    password,
    confirmPassword: password,
  })
  .superRefine(({ password, confirmPassword }, ctx) => {
    if (password !== confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Passwords do not match',
        path: ['confirmPassword'],
      })
    }
  })

export type LoginFormValues = z.infer<typeof loginFormSchema>
export type SignUpFormValues = z.infer<typeof signUpFormSchema>
