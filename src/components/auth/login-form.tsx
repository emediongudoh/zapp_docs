"use client";

import Link from "next/link";
import Image from "next/image";

// Third-party imports
import { CardContent, CardFooter } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const loginFormSchema = z.object({
  email: z.email({
    message: "Invalid email address.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

export const LoginForm = () => {
  // 1. Define signup form.
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define submit handler.
  const onSubmit = async (values: z.infer<typeof loginFormSchema>) => {
    console.log(values);
  };

  return (
    <>
      <CardContent className="space-y-4">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email address</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Email address"
                      autoComplete="off"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter password"
                      autoComplete="off"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              variant="zapp"
              size="xl"
              className="w-full"
            >
              Login
            </Button>
          </form>
        </Form>

        <div className="flex gap-4">
          <Button
            variant="outline"
            size="xl"
            className="flex-1 border border-black"
          >
            <Image
              src="/google-wordmark.svg"
              alt="Google logo"
              width={20}
              height={20}
              className="h-5 w-32 object-contain"
            />
          </Button>
          <Button
            variant="outline"
            size="xl"
            className="flex-1 border border-black"
          >
            <Image
              src="/github_wordmark_light.svg"
              alt="GitHub logo"
              width={20}
              height={20}
              className="h-5 w-32 object-contain"
            />
          </Button>
        </div>
      </CardContent>

      <CardFooter className="text-muted-foreground flex items-center justify-center text-sm">
        Don&apos;t have an account? &nbsp;{" "}
        <Link
          href="/signup"
          className="text-zapp"
        >
          Signup
        </Link>
      </CardFooter>
    </>
  );
};
