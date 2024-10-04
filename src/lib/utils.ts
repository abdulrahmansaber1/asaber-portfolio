import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

import zod from "zod"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const ContactFormSchema = zod.object({
  name: zod.string().min(1).max(20),
  subject: zod.string().min(1).max(100),
  email: zod.string().email(),
  message: zod.string().min(1).max(1000),
})
