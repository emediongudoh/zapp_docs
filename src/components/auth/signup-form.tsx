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

const signupFormSchema = z.object({
  name: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  email: z.email({
    message: "Invalid email address.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

export const SignupForm = () => {
  // 1. Define signup form.
  const form = useForm<z.infer<typeof signupFormSchema>>({
    resolver: zodResolver(signupFormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  // 2. Define submit handler.
  const onSubmit = async (values: z.infer<typeof signupFormSchema>) => {
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
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full name</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Full name"
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
                      placeholder="Create password"
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
              Signup
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
        Already have an account? &nbsp;{" "}
        <Link
          href="/login"
          className="text-zapp"
        >
          Login
        </Link>
      </CardFooter>
    </>
  );
};
