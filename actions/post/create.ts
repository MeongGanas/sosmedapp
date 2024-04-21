"use server";

import { auth } from "@/auth";
import db from "@/lib/db";

export default async function CreatePost(
  prevState: { success: boolean; message: string } | undefined,
  formData: FormData
) {
  const session = await auth();
  const image = formData.get("image");
  const caption = formData.get("caption")?.toString();

  try {
    if (!session?.user)
      return { success: false, message: "Something went wrong!" };

    if (!image) return { success: false, message: "Image is required!" };

    await db.user.update({
      where: { id: session.user.id },
      data: {
        posts: {
          create: {
            image: "Halo",
            caption,
          },
        },
      },
    });

    return { success: true, message: "Create post success!!" };
  } catch (err) {
    return { success: false, message: "Something went wrong!" };
  }
}
