import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email({ message: "Email not valid" }),
  password: z.string().min(6, { message: "Minimum 6 characters required" }),
});

export const RegisterSchema = z.object({
  username: z
    .string()
    .min(2, { message: "Username minimum 2 characters required" }),
  email: z.string().email({ message: "Email not valid" }),
  password: z
    .string()
    .min(6, { message: "Password minimum 6 characters required" }),
});
