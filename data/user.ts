"use server";
import db from "@/lib/db";

export async function getUserByEmail(email: string) {
  try {
    const existingUser = await db.user.findUnique({
      where: { email },
      include: { posts: true },
    });
    return existingUser;
  } catch (error) {
    return null;
  }
}

export async function getUserById(id: string) {
  try {
    const existingUser = await db.user.findUnique({
      where: { id },
      include: { posts: true },
    });
    return existingUser;
  } catch (error) {
    return null;
  }
}
