import db from "@/lib/db";

export async function GET(
  request: Request,
  { params }: { params: { username: string | undefined } }
) {
  const username = params.username;
  try {
    const posts = await db.post.findMany({
      where: { user: { name: username } },
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
