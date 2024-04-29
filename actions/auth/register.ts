"use server";
import { RegisterSchema } from "@/app/schema/schemas";
import bcrypt from "bcryptjs";
import db from "@/lib/db";
import { z } from "zod";

export default async function Register(values: z.infer<typeof RegisterSchema>) {
  const validFields = RegisterSchema.safeParse(values);
  if (!validFields.success) return { error: "Invalid Credentials" };

  const { username, email, password } = validFields.data;

  const existingUsername = await db.user.findUnique({
    where: { name: username },
  });
  if (existingUsername) return { error: "Username already taken" };

  const existingEmail = await db.user.findUnique({ where: { email } });
  if (existingEmail) return { error: "Email already taken" };

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await db.user.create({
      data: { name: username, email, password: hashedPassword },
    });
    return { success: "User successfuly created!" };
  } catch (err) {
    return { error: "Something went wrong!" };
  }
}
