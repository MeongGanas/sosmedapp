"use server";

import db from "@/lib/db";

export async function getAllPostsById(id: string) {
  try {
    const userPosts = await db.post.findMany({
      where: { userId: id },
    });
    return userPosts;
  } catch (error) {
    return null;
  }
}
