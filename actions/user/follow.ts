"use server";
import db from "@/lib/db";
import { revalidatePath } from "next/cache";

export default async function FollowUser(
  following: string | undefined,
  follower: string | undefined,
  prevState: { success: boolean; message: string } | undefined
) {
  try {
    if (!follower) {
      return { success: false, message: "Gagal Follow!!" };
    }

    await db.user.update({
      where: { id: following },
      data: {
        followedBy: {
          create: { followerId: follower },
        },
      },
    });

    revalidatePath(`/${following}`);
    return { success: true, message: "Follow success!!" };
  } catch (err) {
    return { success: false, message: "Something went wrong!" };
  }
}
