"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import useUserStore from "@/stores/user";

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
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

import { login } from "@/lib/strapi";

const formSchema = z.object({
  email: z.string().email({
    message: "El email es inválido.",
  }),
  password: z.string().min(8, {
    message: "Contraseña inválida.",
  }),
});

function LoginForm() {
  const [errorAlert, setErrorAlert] = useState<{
    title: string;
    message: string;
  } | null>(null);

  const router = useRouter();
  const updateUser = useUserStore((state) => state.updateUser);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const data = {
        identifier: values.email,
        password: values.password,
      };

      const response = await login(data);

      if (response.error) {
        setErrorAlert({
          title: "Error",
          message: response.error.message,
        });
      } else {
        setErrorAlert(null);

        const user = {
          id: response.user.documentId,
          username: response.user.username,
          email: response.user.email,
          jwt: response.jwt,
        };
        updateUser({ user });

        router.push("/");
      }
    } catch (error) {
      console.error(error);
      setErrorAlert({
        title: "Server error",
        message:
          "Tuvimos un error al procesar tu solicitud. Intentalo más tarde.",
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" {...field} />
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
              <FormLabel>Contraseña</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {errorAlert && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>{errorAlert.title}</AlertTitle>
            <AlertDescription>{errorAlert.message}</AlertDescription>
          </Alert>
        )}

        <Button type="submit">Iniciar sesión</Button>
      </form>
    </Form>
  );
}

export default LoginForm;
