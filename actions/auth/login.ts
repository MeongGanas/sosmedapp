"use server";

import { LoginSchema } from "@/app/schema/schemas";
import { z } from "zod";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";

export default async function Login(values: z.infer<typeof LoginSchema>) {
  const validFields = LoginSchema.safeParse(values);
  if (!validFields.success) return { error: "Invalid Credentials!" };

  const { email, password } = validFields.data;

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Email or Password wrong!" };
        default:
          return { error: "Something went wrong" };
      }
    }
    throw error;
  }
}
