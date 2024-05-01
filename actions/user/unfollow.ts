"use server";
import db from "@/lib/db";

export default async function UnfollowUser(
  following: string | undefined,
  follower: string | undefined,
  prevState: { success: boolean; message: string } | undefined
) {
  try {
    if (!follower || !following) {
      return { success: false, message: "Gagal Unfollow!!" };
    }

    await db.follows.delete({
      where: {
        followerId_followingId: {
          followerId: follower,
          followingId: following,
        },
      },
    });

    return { success: true, message: "Unfollow success!!" };
  } catch (err) {
    return { success: false, message: "Something went wrong!" };
  }
}
