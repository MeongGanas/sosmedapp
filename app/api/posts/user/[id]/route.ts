import db from "@/lib/db";

export async function GET(
  request: Request,
  { params }: { params: { id: string | undefined } }
) {
  const id = params.id;
  try {
    const posts = await db.user.findMany({
      where: { followedBy: { some: { followerId: id } } },
      include: {
        posts: {
          take: 1,
          orderBy: { createdAt: "desc" },
        },
      },
    });
    return Response.json(posts);
  } catch (error) {
    console.log(error);
    return Response.error();
  }
}
