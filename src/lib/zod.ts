import { object, string } from 'zod'

export const loginSchema = object({
  email: string({ required_error: 'Email is required' })
    .min(1, 'Email is required')
    .email('Invalid email'),
  password: string({ required_error: 'Password is required' })
    .min(1, 'Password is required')
    .min(6, 'Password must be more than 6 characters')
    .max(32, 'Password must be less than 32 characters'),
})

export const registerSchema = object({
  email: string({ required_error: 'Email is required' })
    .min(1, 'Email is required')
    .email('Invalid email'),
  password: string({ required_error: 'Password is required' })
    .min(1, 'Password is required')
    .min(6, 'Password must be more than 6 characters')
    .max(32, 'Password must be less than 32 characters'),
  name: string({ required_error: 'Name is required' })
    .min(1, 'Name is required')
    .max(32, 'Name must be less than 32 characters'),
  confirmPassword: string({ required_error: 'Confirm Password is required' })
    .min(1, 'Confirm Password is required')
    .min(6, 'Confirm Password must be more than 6 characters')
    .max(32, 'Confirm Password must be less than 32 characters'),
}).refine(data => data.password === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword'],
})
// refine is sugar for superRefine
//.superRefine(({ confirmPassword, password }, ctx) => {
//   if (confirmPassword !== password) {
//     ctx.addIssue({
//       code: 'custom',
//       message: 'The passwords did not match',
//       path: ['confirmPassword'],
//     })
//   }
// })
