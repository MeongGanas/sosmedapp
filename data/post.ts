"use server";

import { auth } from "@/auth";
import db from "@/lib/db";
import { unstable_noStore } from "next/cache";

export async function getAllPostsById() {
  unstable_noStore();

  const session = await auth();
  try {
    const userPosts = await db.post.findMany({
      where: { userId: session?.user?.id },
      orderBy: { createdAt: "desc" },
    });
    return userPosts;
  } catch (error) {
    return null;
  }
}
