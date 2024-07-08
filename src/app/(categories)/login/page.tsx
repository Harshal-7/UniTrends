"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
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
import { useToast } from "@/components/ui/use-toast";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React from "react";
import { LoginSchema } from "@/schema/LoginSchema";
import CardWrapper from "@/components/form/CardWrapper";
import { login } from "@/actions/login";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RegisterSchema } from "@/schema/RegisterSchema";
import { register } from "@/actions/register";
import { useRouter } from "next/navigation";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const form1 = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const form2 = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmitLogin = async (data: z.infer<typeof LoginSchema>) => {
    setLoading(true);
    login(data)
      .then((res) => {
        if (res?.error) {
          toast({
            title: res?.error,
            variant: "destructive",
          });
        } else {
          toast({
            title: "User Logged In Successfully",
          });
        }
      })
      .catch((err: any) => {
        toast({
          title: err.message,
        });
        setLoading(false);
      })
      .finally(() => {
        router.replace(DEFAULT_LOGIN_REDIRECT);
      });
    setLoading(false);
  };

  const onSubmitRegister = (data: z.infer<typeof RegisterSchema>) => {
    setLoading(true);
    register(data).then((res) => {
      if (res.error) {
        toast({
          title: "User Registeration Failed",
          description: res.error,
          variant: "destructive",
        });
      } else {
        toast({
          title: res.success,
          description: "Login to access dashboard",
        });
        setLoading(false);
        router.replace(`/login`);
      }
    });
    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center w-full mt-14 overflow-x-hidden">
      <Tabs defaultValue="account" className="w-sm">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="account">LOGIN</TabsTrigger>
          <TabsTrigger value="password">REGISTER</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <CardWrapper
            headerLabel="Welcome Back"
            backButtonHref="/register"
            showSocial
          >
            <Form {...form1}>
              <form
                onSubmit={form1.handleSubmit(onSubmitLogin)}
                className="space-y-6"
              >
                <FormField
                  control={form1.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="john.doe@gmail.com" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form1.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="******"
                          type="password"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full">
                  {loading ? (
                    <Loader2 className="animate-spin w-5 h-5" />
                  ) : (
                    <span>Login</span>
                  )}
                </Button>
              </form>
            </Form>
          </CardWrapper>
        </TabsContent>
        <TabsContent value="password">
          <CardWrapper headerLabel="Create an accout" showSocial>
            <Form {...form2}>
              <form
                onSubmit={form2.handleSubmit(onSubmitRegister)}
                className="space-y-6"
              >
                <FormField
                  control={form2.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="john doe" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form2.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="john.doe@gmail.com"
                          type="email"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form2.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="******"
                          type="password"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full">
                  {loading ? (
                    <Loader2 className="animate-spin w-5 h-5" />
                  ) : (
                    <span>Create an account</span>
                  )}
                </Button>
              </form>
            </Form>
          </CardWrapper>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LoginPage;
