import db from "@/lib/db";

export async function GET(
  request: Request,
  { params }: { params: { id: string | undefined } }
) {
  const id = params.id;
  try {
    const posts = await db.post.findMany({
      where: { userId: id },
      orderBy: { createdAt: "desc" },
      include: {
        user: true,
      },
    });
    return Response.json(posts);
  } catch (error) {
    console.log(error);
    return Response.error();
  }
}
