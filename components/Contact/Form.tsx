"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import { Asterisk } from "lucide-react";
import { useToast } from "@/hooks/useToast";

const formSchema = z.object({
  fullname: z.string({ message: "Fullname is required" }).min(3, {
    message: "Fullname must be at least 3 characters.",
  }),
  email: z.string().email({ message: "Email is required" }),
  message: z.string({ message: "Message is required" }).min(10, {
    message: "Message must be at least 10 characters",
  }),
});

export function ContactForm() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message Sent",
      description: "We will reach to you back shortly!",
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="w-full flex-col md:flex-row flex items-start justify-start gap-4">
          <FormField
            control={form.control}
            name="fullname"
            render={({ field }) => (
              <FormItem className="w-full text-left">
                <FormLabel className=" text-heading font-medium flex items-center ">
                  Fullname{" "}
                  <Asterisk
                    color="#1179FC"
                    className="mb-1"
                    width={16}
                    height={16}
                  />
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Full name"
                    className="h-10 border border-primary/30 ring-0 focus-visible:ring-primary focus-visible:outline-none "
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full text-left">
                <FormLabel className=" text-heading font-medium flex items-center ">
                  Email{" "}
                  <Asterisk
                    color="#1179FC"
                    className="mb-1"
                    width={16}
                    height={16}
                  />
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="you@company.com"
                    className="h-10 border border-primary/30 ring-0 focus-visible:ring-primary focus-visible:outline-none "
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="w-full text-left">
              <FormLabel className=" text-heading font-medium flex items-center ">
                Message{" "}
                <Asterisk
                  color="#1179FC"
                  className="mb-1"
                  width={16}
                  height={16}
                />
              </FormLabel>
              <FormControl>
                <Textarea
                  className="h-[200px] border border-primary/30 ring-0 focus-visible:ring-primary focus-visible:outline-none "
                  placeholder="Leave us a message..."
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full mt-9 uppercase text-lg sm:text-xl font-extrabold "
        >
          Send message
        </Button>
      </form>
    </Form>
  );
}
