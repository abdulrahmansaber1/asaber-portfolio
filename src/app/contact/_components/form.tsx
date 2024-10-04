"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useContext, useRef, useState } from "react"
import { useForm } from "react-hook-form"
import { useToast } from "@/hooks/use-toast"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { LanguageContext } from "@/providers/language"
import { ContactFormSchema, cn } from "@/lib"
import { Loader } from "lucide-react"

import emailjs from "@emailjs/browser"
import translate from "@/lib/translate"
import { motion } from "framer-motion"

export const ContactForm = () => {
  const { toast } = useToast()

  const form = useForm({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: "",
      subject: "",
      email: "",
      message: "",
    },
  })
  const ref = useRef<HTMLFormElement>(null)
  const language = useContext(LanguageContext)

  const [loading, setLoading] = useState(false)

  const variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  }

  const onSubmit = () => {
    setLoading(true)
    emailjs
      .sendForm("service_ghqxfi3", "template_26vyt76", ref.current as any, "X3Qr_Q546rpv4xYqu")
      .then(
        () => {
          toast({
            title: "Message sent!",
            description: "I'll get back to you as soon as possible.",
          })
        },
        () => {
          toast({
            title: "Message sent!",
            description: "I'll get back to you as soon as possible.",
            variant: "destructive",
          })
        }
      )
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <section className="w-full">
      <Form {...form}>
        <form ref={ref} onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <motion.div
            initial="initial"
            animate="animate"
            variants={variants}
            transition={{ duration: 0.5 }}
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{translate("name", language)}</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </motion.div>

          <motion.div
            initial="initial"
            animate="animate"
            variants={variants}
            transition={{ duration: 0.5, delay: 0.01 }}
          >
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{translate("subject", language)}</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </motion.div>

          <motion.div
            initial="initial"
            animate="animate"
            variants={variants}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{translate("email", language)}</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </motion.div>

          <motion.div
            initial="initial"
            animate="animate"
            variants={variants}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{translate("message", language)}</FormLabel>
                  <FormControl>
                    <Textarea className="h-36 resize-none" {...field}></Textarea>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </motion.div>

          <motion.div
            initial="initial"
            animate="animate"
            variants={variants}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Button
              disabled={loading}
              type="submit"
              className={cn(
                "w-full bg-indigo-900 hover:bg-indigo-800 flex gap-2",
                loading && "opacity-70 cursor-not-allowed"
              )}
            >
              {loading && <Loader className="size-4 animate-spin" />}
              {translate("sendMessage", language)}
            </Button>
          </motion.div>
        </form>
      </Form>
    </section>
  )
}
