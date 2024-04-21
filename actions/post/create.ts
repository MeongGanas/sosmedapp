"use server";

import { auth } from "@/auth";
import db from "@/lib/db";
import { UploadSingleImage } from "@/lib/upload";
import { revalidatePath } from "next/cache";

export default async function CreatePost(
  prevState: { success: boolean; message: string } | undefined,
  formData: FormData
) {
  const session = await auth();
  const image = formData.get("image") as File;
  const caption = formData.get("caption")?.toString();

  try {
    if (!session?.user)
      return { success: false, message: "Something went wrong!" };

    if (!image) return { success: false, message: "Image is required!" };

    const imageUrl = await UploadSingleImage(image);

    if (!imageUrl) return { success: false, message: "Upload image failed!" };

    await db.user.update({
      where: { id: session.user.id },
      data: {
        posts: {
          create: {
            image: imageUrl,
            caption,
          },
        },
      },
    });

    revalidatePath("/profile");
    return { success: true, message: "Create post success!!" };
  } catch (err) {
    return { success: false, message: "Something went wrong!" };
  }
}
