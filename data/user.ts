"use server";
import db from "@/lib/db";

export async function getUserByEmail(email: string) {
  try {
    const existingUser = await db.user.findUnique({ where: { email } });
    return existingUser;
  } catch (error) {
    return null;
  }
}
